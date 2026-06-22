#!/usr/bin/env python3
"""
genfotos_free.py — genereer sitefoto's GRATIS via Pollinations (geen sleutel/billing).
Hergebruikt SHOTS + STIJL uit genfotos.py. Slaat bestaande over (tenzij je namen meegeeft).
  python3 scripts/genfotos_free.py            # alle ontbrekende
  python3 scripts/genfotos_free.py dakcoating # alleen deze (overschrijft)
"""
import urllib.request, urllib.parse, pathlib, time, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from genfotos import SHOTS, STIJL

OUT = pathlib.Path.home() / "spoeddakservice" / "public" / "img"
OUT.mkdir(parents=True, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/124 Safari/537.36", "Accept": "image/*"}

args = sys.argv[1:]
targets = args or list(SHOTS)
for i, name in enumerate(targets):
    if name not in SHOTS:
        print("  ? onbekend:", name); continue
    dest = OUT / f"{name}.jpg"
    if dest.exists() and not args:
        print(f"  – {name} bestaat al"); continue
    prompt = SHOTS[name] + STIJL
    url = ("https://image.pollinations.ai/prompt/" + urllib.parse.quote(prompt)
           + f"?width=1024&height=768&nologo=true&referrer=spoeddakservice.nl&seed={100+i}")
    try:
        data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=180).read()
        dest.write_bytes(data)
        print(f"  OK {name}: {len(data)//1024} KB")
    except Exception as e:
        print(f"  FOUT {name}: {getattr(e,'code','')} {str(e)[:60]}")
    time.sleep(1.5)
print("klaar")
