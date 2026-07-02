#!/usr/bin/env python3
"""
storm_watcher.py — stuurt alert-e-mail als windvlaag > drempel in Den Bosch.
Draait elke 6 uur via GitHub Actions (.github/workflows/storm-watcher.yml).
Geen externe dependencies buiten de stdlib + urllib.

Wachtwoord komt uit de omgevingsvariabele GMAIL_APP_PASSWORD (GitHub Secret
STORM_GMAIL_APP_PASSWORD) — nooit hardcoded in dit bestand.
"""

import json
import os
import smtplib
import ssl
import sys
import urllib.request
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# ── CONFIG — pas dit aan ──────────────────────────────────────────────────────
GUST_THRESHOLD_KMH = 65        # windvlaag >= X km/h → alert sturen
LATITUDE  = 51.6978            # Den Bosch centrum
LONGITUDE = 5.3037

GMAIL_SENDER   = "offerte.spoeddakservice@gmail.com"
GMAIL_RECEIVER = "offerte.spoeddakservice@gmail.com"
GMAIL_APP_PASSWORD = os.environ.get("GMAIL_APP_PASSWORD", "")
# ─────────────────────────────────────────────────────────────────────────────

STANDBY_TEKSTEN = """
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 SITE-BANNER / FB-GROEP-POST — kopieer dit:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Het stormt momenteel in de regio. Daardoor komen er nu meer aanvragen binnen dan normaal — reageren kan iets langer duren, maar je hoort in elk geval binnen 24 uur iets van me. Zie je al schade aan je dak? Vraag hier een Dak-APK aan (€49), dan kijk ik zo snel mogelijk met je mee. — Rens, Spoed Dak Service, 06-10185357.

Plaatsen om te posten:
• Marktplaats/FB-groepen Den Bosch, Rosmalen, Oss, Vught
• Buurt-FB-groepen je eigen wijk
• Nextdoor / Hoplr (Diensten-gids)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 WHATSAPP-STATUS — zet dit aan:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Stormschade aan je dak? Ik kom kijken. Dak-APK (€49): binnen een dagdeel weet je zwart op wit hoe je dak ervoor staat, met foto's. 06-10185357 — Rens, Spoed Dak Service.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 BEL JE OVERFLOW-NETWERK / VERZEKERINGS-CONTACTEN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Storm gehad, ik sta klaar voor je klanten. Stuur ze maar door."
Zie build/2_overflow-netwerk-outreach.md (in de idee-map) voor de lijst.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ GOOGLE ADS (na budget-akkoord, staat op Actielijst.md):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Zet de "stormschade"-campagne aan in Google Ads.
Keywords: stormschade dak, dakschade storm, pannen los na storm
Kop 1: Stormschade dak Den Bosch — vandaag afgedekt
Kop 2: Dak-APK €49 + fotorapport voor de verzekering
Beschrijving: Pannen los of lekkage na storm? Lokale dakdekker, vaak dezelfde dag ter plaatse. Bel/app 06-10185357.
Pauzeer de campagne weer zodra de piek voorbij is (48-72 uur na storm).
"""


def fetch_forecast():
    url = (
        "https://api.open-meteo.com/v1/forecast"
        f"?latitude={LATITUDE}&longitude={LONGITUDE}"
        "&hourly=wind_speed_10m,wind_gusts_10m"
        "&wind_speed_unit=kmh"
        "&timezone=Europe%2FAmsterdam"
        "&forecast_days=2"
    )
    with urllib.request.urlopen(url, timeout=15) as resp:
        return json.loads(resp.read().decode())


def find_peak_gusts(data):
    times  = data["hourly"]["time"]
    gusts  = data["hourly"]["wind_gusts_10m"]
    speeds = data["hourly"]["wind_speed_10m"]

    hits = []
    for t, g, s in zip(times, gusts, speeds):
        if g is not None and g >= GUST_THRESHOLD_KMH:
            hits.append({"time": t, "gust": g, "speed": s})
    return hits


def send_alert(hits):
    if not GMAIL_APP_PASSWORD:
        log("FOUT: GMAIL_APP_PASSWORD niet ingesteld — kan geen alert versturen (zie storm-trigger-automatisering.md).")
        return

    peak = max(hits, key=lambda x: x["gust"])
    subject = (
        f"STORM-ALERT — windvlaag {peak['gust']:.0f} km/h in Den Bosch "
        f"(verwacht {peak['time']})"
    )
    body = f"""Hoi Rens,

Open-Meteo voorspelt een windvlaag van {peak['gust']:.0f} km/h
(windsnelheid {peak['speed']:.0f} km/h) rond {peak['time']} in Den Bosch.
Drempel: {GUST_THRESHOLD_KMH} km/h.

Totaal {len(hits)} uur boven de drempel in de komende 48 uur.

Actie: zet de standby-kit binnen het uur aan (zie hieronder).
{STANDBY_TEKSTEN}

---
Dit bericht is automatisch aangemaakt door scripts/storm_watcher.py (GitHub Actions).
"""
    msg = MIMEMultipart("alternative")
    msg["From"]    = GMAIL_SENDER
    msg["To"]      = GMAIL_RECEIVER
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain", "utf-8"))

    ctx = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ctx) as server:
        server.login(GMAIL_SENDER, GMAIL_APP_PASSWORD)
        server.sendmail(GMAIL_SENDER, GMAIL_RECEIVER, msg.as_bytes())


def log(msg):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M")
    print(f"[{ts}] {msg}")


def main():
    log("storm_watcher gestart")
    try:
        data = fetch_forecast()
        hits = find_peak_gusts(data)
        if hits:
            peak = max(hits, key=lambda x: x["gust"])
            log(
                f"STORM GEDETECTEERD — piek {peak['gust']:.0f} km/h "
                f"@ {peak['time']}, {len(hits)} uur boven drempel"
            )
            send_alert(hits)
            log("Alert-e-mail verzonden (of overgeslagen zonder wachtwoord, zie hierboven).")
        else:
            log(f"Geen storm verwacht (drempel {GUST_THRESHOLD_KMH} km/h niet gehaald).")
    except Exception as e:
        log(f"FOUT: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
