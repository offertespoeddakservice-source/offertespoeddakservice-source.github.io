#!/usr/bin/env python3
"""Vergelijk 3 modellen op 3 scenes (zelfde prompt) -> public/img/cmp/.
Doel: meest realistische model kiezen. Key via env GEMINI_API_KEY."""
import os, json, time, base64, urllib.request, pathlib

KEY = os.environ["GEMINI_API_KEY"]
OUT = pathlib.Path.home() / "spoeddakservice" / "public" / "img" / "cmp"
OUT.mkdir(parents=True, exist_ok=True)
B = "https://generativelanguage.googleapis.com/v1beta/models/"

STIJL = (" — candid amateur photo taken on a smartphone at eye level, NOT a drone, not aerial, "
  "not cinematic, no dramatic lighting, no shallow depth-of-field or bokeh, everything in focus like "
  "a phone photo, slightly imperfect framing, mild grain, flat overcast Dutch daylight, ordinary "
  "real-world background, 4:3. Typical Dutch suburban brick house in Noord-Brabant.")

SCENES = {
  "dakcoating": "A roofer applying protective coating to red roof tiles with a low-pressure sprayer, close view of wet-coated tiles",
  "goot-vol": "Close-up of a roof gutter completely full of wet brown leaves and green moss, slightly overflowing, on a Dutch brick house",
  "dak-mos": "A pitched red-tile roof heavily covered in green moss and dark algae, grey sky",
}

def gc(model, prompt):  # generateContent (gemini image-modellen)
    body = json.dumps({"contents":[{"parts":[{"text":prompt}]}],
                       "generationConfig":{"responseModalities":["IMAGE"]}}).encode()
    r = json.load(urllib.request.urlopen(urllib.request.Request(B+model+":generateContent?key="+KEY,
        data=body, headers={"Content-Type":"application/json"}), timeout=180))
    return base64.b64decode(next(p["inlineData"]["data"] for p in r["candidates"][0]["content"]["parts"] if "inlineData" in p))

def imagen(model, prompt):  # predict (Imagen)
    body = json.dumps({"instances":[{"prompt":prompt}],
                       "parameters":{"sampleCount":1,"aspectRatio":"4:3"}}).encode()
    r = json.load(urllib.request.urlopen(urllib.request.Request(B+model+":predict?key="+KEY,
        data=body, headers={"Content-Type":"application/json"}), timeout=180))
    return base64.b64decode(r["predictions"][0]["bytesBase64Encoded"])

MODELS = [
  ("25flash", lambda p: gc("gemini-2.5-flash-image", p)),
  ("3pro",    lambda p: gc("gemini-3-pro-image", p)),
  ("imagen4", lambda p: imagen("imagen-4.0-generate-001", p)),
]

for scene, desc in SCENES.items():
    prompt = desc + STIJL
    for label, fn in MODELS:
        try:
            (OUT / f"{scene}__{label}.jpg").write_bytes(fn(prompt))
            print(f"  OK {scene} [{label}]")
        except urllib.error.HTTPError as e:
            print(f"  FOUT {scene} [{label}]: {e.code} {e.read()[:120].decode(errors='ignore')}")
        except Exception as e:
            print(f"  FOUT {scene} [{label}]: {type(e).__name__} {str(e)[:90]}")
        time.sleep(4)
print("klaar")
