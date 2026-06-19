# Master Prompt — website Spoed Dak Service

> Plak dit als opdracht aan een AI-bouwer (Claude Code, v0, Lovable…) of gebruik het
> als checklist. Het is bewust compleet en zelfstandig leesbaar.

---

## ROL
Je bent een senior webdeveloper + lokale-SEO-specialist. Bouw een snelle,
conversiegerichte, lokaal vindbare website voor een **solo dakdekker** in Nederland.

## BEDRIJF
- **Naam:** Spoed Dak Service
- **Eigenaar / gezicht:** Rens (persoonlijk, betrouwbaar, "je krijgt mij aan de lijn")
- **Standplaats:** regio 's-Hertogenbosch (Den Bosch), werkgebied ~45 min rijden
- **Model:** dakgoot reinigen vanaf €30 als laagdrempelige opener → upsell naar
  dakreparatie, daklekkage en onderhoud. Plus stormschade en jaarlijks onderhoud.
- **Doelgroep:** particuliere huiseigenaren, vooral oudere woningen (vóór 1985,
  schuine pannendaken) in **middelgrote plaatsen en dorpen** — NIET de grote steden.
- **Contact:** telefoon/WhatsApp = primair (vul nummer in), e-mail
  offerte.spoeddakservice@gmail.com, Google Bedrijfsprofiel review-link aanwezig.

## DOEL VAN DE SITE
1. Vertrouwen wekken (echt persoon, lokaal, reviews) — het tegendeel van de
   generieke landelijke lead-sites.
2. Bellen/WhatsAppen/offerte aanvragen zo makkelijk mogelijk maken (mobiel-first).
3. Lokaal ranken in Google + de Maps top-3 voor de kern-plaatsen.

## KERN-BOODSCHAP / USP's
- "Vakkundig dakwerk door één vaste man — geen callcenter."
- "Goten reinigen vanaf €30 — meteen gezien of er meer speelt, eerlijk advies."
- "Daklekkage? Vaak dezelfde dag langs in de regio Den Bosch."
- "Gratis inspectie & offerte, vaste prijs vooraf, garantie op het werk."

## SITESTRUCTUUR (paginas)
- `/` Home — held met USP + €30-haak + bel/WhatsApp; diensten-overzicht; "waarom
  Rens"; reviews; werkgebied; FAQ; CTA.
- `/diensten/goten-reinigen` — de opener, met prijsindicatie €30+ en wat je controleert.
- `/diensten/daklekkage` — spoed, opsporen zonder sloopwerk, dezelfde-dag-belofte.
- `/diensten/dakreparatie` — pannen, lood/loodslabbe, kleine reparaties.
- `/diensten/platte-daken` — EPDM/bitumen lekkage & vervanging.
- `/diensten/stormschade` — noodreparatie, verzekering, "bel direct".
- `/werkgebied/[plaats]` — 1 pagina per kern-plaats, uniek genoeg (lokale plaatsnaam,
  buurten, "Rens komt hier regelmatig"), gegenereerd uit een data-bestand.
- `/prijzen` — transparante tarieven (goten €30+, dakdekker €35–€50/uur, daklekkage
  €200–€500 punctueel, spoed +20–30%). Vertrouwen + featured-snippet-kans.
- `/over` — verhaal van Rens, foto, werkwijze, garantie.
- `/reviews` — Google-reviews + schema.
- `/offerte` of `/contact` — formulier + bel/WhatsApp; idealiter gekoppeld aan de
  bestaande Google Form (zodat leads in `klussen_sync.py` → Klussen-sheet vallen).

## SEO-EISEN (hard)
- Eén duidelijke H1 per pagina met plaats/dienst-intentie
  (bv. "Dakdekker in Rosmalen — goten, lekkage & reparatie").
- Title + meta-description per pagina, uniek, met plaats + dienst.
- **JSON-LD schema:** `RoofingContractor`/`LocalBusiness` (NAP, areaServed = de
  plaatsen, openingstijden, telefoon, geo), `Service` per dienst, `FAQPage` op
  FAQ-secties, `AggregateRating`/`Review` als reviews echt zijn.
- Schone, leesbare URL's; interne links dienst↔plaats (silo).
- `sitemap.xml` + `robots.txt`; canonical tags.
- **Core Web Vitals top:** statisch gerenderd, geen zware JS, geoptimaliseerde
  afbeeldingen (WebP, lazy), systeemfonts of 1 webfont. Doel: Lighthouse 95+.
- Mobiel-first; sticky bel/WhatsApp-knop altijd zichtbaar op mobiel.
- Alt-teksten met plaats/dienst; echte vóór/na-foto's waar mogelijk.

## DESIGN
- Strak, licht, betrouwbaar-vakman. Niet schreeuwerig. 1 accentkleur
  (diep blauw of oranje), veel wit, grote leesbare tekst, duidelijke knoppen.
- Boven de vouw op mobiel: USP-zin + telefoonknop + WhatsApp-knop in één oogopslag.
- Echte foto's > stockfoto's. Toon Rens en echt werk.

## TECH
- **Astro** (statisch, snel, SEO-ideaal), `@astrojs/sitemap`. Geen CMS nodig:
  content in `.astro`/markdown, plaatsen in een TS/JSON data-bestand, plaatspagina's
  via `getStaticPaths`. Eén centraal `site.config.ts` voor NAP/telefoon/plaatsen.
- Gratis hosting: Cloudflare Pages / Netlify / Vercel. Custom domein
  (bv. spoeddakservice.nl) + HTTPS.
- Formulier: simpele POST naar Google Form, of Formspree/Netlify Forms; daarna
  koppelen aan de bestaande Forms-sheet-pijplijn.

## CONTENT-TONE
Nederlands, persoonlijk, nuchter, vakman-die-meedenkt. "Ik" (Rens), niet "wij het
bedrijf". Eerlijk over prijs. Geen holle 24/7-marketingtaal kopiëren van concurrenten.

## DELIVERABLES
1. Werkende Astro-site met bovenstaande pagina's en schema.
2. `site.config.ts` met alle bedrijfsgegevens op één plek (makkelijk aanpasbaar).
3. Plaats-data-bestand (kern-plaatsen) → genereert plaatspagina's.
4. Deploy-instructie (Cloudflare Pages) + domein/DNS-stappen.
5. Korte "na livegang"-checklist: Search Console, sitemap insturen, profiel-link,
   reviews vragen.

## WAT IK NOG MOET INVULLEN (placeholders nu)
- [ ] Telefoonnummer (WhatsApp)
- [ ] KvK-nummer
- [ ] Exacte Google review-link (uit Bedrijfsprofiel)
- [ ] Definitieve plaatsenlijst (koppelen aan tracking.csv A/B-buurten)
- [ ] 5–10 echte vóór/na-foto's + 1 foto van Rens
- [ ] Domeinnaam (advies: spoeddakservice.nl)
</content>
