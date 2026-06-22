#!/usr/bin/env python3
"""
genfotos.py — genereer realistische sitefoto's via de Gemini image-API.

- Leest GEMINI_API_KEY uit ~/dak-flyer-tool/.env (of env-var).
- Model-voorkeur: Nano Banana Pro (gemini-3-pro-image) → fallback gemini-2.5-flash-image.
- Prompts hebben de "iPhone-kiekje"-realisme-staart (niet filmisch, geen drone, echt ogend).
- Optioneel: --ref pad/naar/echte-foto.jpg  → gebruikt die als referentie (upload-functie).
- Schrijft JPG's naar ~/spoeddakservice/public/img/ met de juiste namen.

Gebruik:
  python3 scripts/genfotos.py            # alle ontbrekende foto's
  python3 scripts/genfotos.py goten-reinigen daklekkage   # alleen deze
  python3 scripts/genfotos.py --ref ~/Downloads/mijn-dak.jpg dak-reinigen
"""
import os, re, sys, json, time, base64, urllib.request, pathlib

ENV = pathlib.Path.home() / "dak-flyer-tool" / ".env"
OUT = pathlib.Path.home() / "spoeddakservice" / "public" / "img"
MODELS = ["gemini-3-pro-image", "gemini-2.5-flash-image"]

# Realisme-staart: maakt het een gewone telefoonfoto i.p.v. AI/stock/filmisch/drone.
STIJL = (" Candid amateur snapshot taken on an iPhone at eye level (NOT a drone, not aerial, "
         "not cinematic), handheld, slightly imperfect framing, natural overcast Dutch daylight, "
         "true-to-life muted colors, mild smartphone HDR, realistic textures, a little sensor noise, "
         "ordinary everyday moment, 4:3. Typical Dutch suburban brick house in Noord-Brabant.")

# bestandsnaam -> scène. Service-namen = dienst-slug (zodat ze 1-op-1 op de dienstpagina passen).
SHOTS = {
  "rens-aan-het-werk": "A roofer in dark work clothes seen from the side, kneeling on a pitched red-tile roof of a Dutch house, focused, holding a tool, face not clearly visible",
  "goten-reinigen": "Close-up of a hand scooping wet leaves and moss out of a roof gutter on a Dutch house",
  "goot-vol": "Close-up of a roof gutter completely full of wet brown leaves and green moss, slightly overflowing, on a Dutch brick house",
  "goot-schoon": "Close-up of a clean empty roof gutter after cleaning, water draining freely, on a Dutch brick house",
  "daklekkage": "A damp brown water stain on a white interior ceiling near a corner, lived-in Dutch home",
  "dakreparatie": "Hands placing a new red roof tile into a pitched tile roof among intact tiles",
  "dakpannen-vervangen": "A single cracked broken red roof tile among intact tiles on a pitched Dutch roof",
  "dak-reinigen": "A pitched red-tile roof half covered in green moss and dark algae, half already cleaned, Dutch suburban house",
  "dak-mos": "A pitched red-tile roof heavily covered in green moss and dark algae, Dutch suburban house, grey sky",
  "dakcoating": "A roofer applying protective coating to red roof tiles with a low-pressure sprayer, close view of wet-coated tiles",
  "dakgoot-vervangen": "A freshly installed zinc roof gutter along the edge of a Dutch house roof",
  "platte-daken": "A flat roof covered with smooth black EPDM rubber membrane, edges neatly finished, small Dutch extension roof",
  "schoorsteen-vegen": "A brick chimney on a Dutch tile roof being swept, chimney brush visible",
  "dakkapel-reinigen": "A dormer window (dakkapel) on a Dutch house roof being cleaned, close view",
  "zonnepanelen-reinigen": "Solar panels on a Dutch pitched roof being cleaned with a soft brush, water sheeting off",
  "vogelwering": "Close-up of bird-mesh comb filler fitted along the bottom row of red roof tiles",
  "stormschade": "A few red roof tiles blown loose and shifted after a storm on a Dutch house roof, grey windy sky",
  "dakrenovatie": "A tired old Dutch tile roof being renovated, half old weathered tiles and half fresh new tiles",
  "bus": "A plain white work van parked in front of a Dutch brick row house on a quiet residential street, ladders on the roof rack",
}

def key():
    k = os.environ.get("GEMINI_API_KEY", "")
    if not k and ENV.exists():
        for line in ENV.read_text(encoding="utf-8").splitlines():
            m = re.match(r'\s*GEMINI_API_KEY\s*=\s*(.+)', line)
            if m: k = m.group(1).strip().strip('"').strip("'")
    return k

def gen(api, name, scene, ref=None):
    parts = [{"text": scene + STIJL}]
    if ref:
        b = base64.b64encode(pathlib.Path(ref).read_bytes()).decode()
        parts.insert(0, {"inlineData": {"mimeType": "image/jpeg", "data": b}})
    body = json.dumps({"contents": [{"parts": parts}],
                       "generationConfig": {"responseModalities": ["IMAGE"]}}).encode()
    last = ""
    for model in MODELS:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api}"
        try:
            r = json.load(urllib.request.urlopen(
                urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"}), timeout=180))
            img = next((p["inlineData"]["data"] for p in r["candidates"][0]["content"]["parts"] if "inlineData" in p), None)
            if img:
                OUT.mkdir(parents=True, exist_ok=True)
                (OUT / f"{name}.jpg").write_bytes(base64.b64decode(img))
                return f"OK ({model})"
            last = "no image in response"
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}: {e.read()[:120].decode(errors='ignore')}"
        except Exception as e:
            last = f"{type(e).__name__}: {e}"
    return "FOUT — " + last

def main():
    args = sys.argv[1:]
    ref = None
    if "--ref" in args:
        i = args.index("--ref"); ref = args[i+1]; del args[i:i+2]
    api = key()
    if not api: sys.exit("Geen GEMINI_API_KEY gevonden.")
    targets = args or list(SHOTS)
    for n in targets:
        if n not in SHOTS:
            print(f"  ? onbekende naam: {n}"); continue
        if (OUT / f"{n}.jpg").exists() and not args:
            print(f"  – {n} bestaat al, overslaan"); continue
        print(f"  → {n} ...", end=" ", flush=True)
        print(gen(api, n, SHOTS[n], ref))
        time.sleep(2)  # vriendelijk voor rate-limits

if __name__ == "__main__":
    main()
