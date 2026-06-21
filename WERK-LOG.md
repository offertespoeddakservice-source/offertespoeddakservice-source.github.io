# WERK-LOG — autonome SEO-loop (branch `nacht-seo`)

> Append-only, **nieuwste ronde bovenaan**. Elke ronde: 10 tips (STAP B) + uitvoering
> (STAP C: kans → gebouwd → geverifieerd), met timestamp. Voortgang overleeft elke
> herstart: bij (her)start leest de loop dit en gaat verder waar hij was.
> "Alleen Rens kan dit" → niet hier, maar in `BESLISSING-NODIG.md`.
> Diff bekijken: `git -C ~/spoeddakservice diff master..nacht-seo`.

---

## Reeds gedaan (vóór de ronde-structuur — al gecommit op `nacht-seo`)
- ✅ **PRIORITEIT.md** — data-gedreven bouwvolgorde uit 9.494 keywords. Kerninzicht: volume
  zit in product/DIY-termen (negeren), geld in laag-volume hoge-CPC huurtermen (daklekkage-
  repareren, goten-opener). Dorpsvolume flinterdun → matrix = local-pack/relevantie-zet.
- ✅ **Matrix Tier A (10 pag.)** — `src/data/matrix.ts` + route `werkgebied/[plaats]/[dienst].astro`.
  daklekkage + goten × {Oss, Den Bosch, Rosmalen, Vught, Berlicum}, elk unieke hook. Build groen.
- ✅ **Keyword-clusters** — 8 cluster-FAQ's op daklekkage/goten/stormschade (renderen + FAQPage-schema).

**Verder gaan bij:** matrix Tier B/C, kennisbank-artikelen, voice/-map, GBP-content, citaties
(zie `BACKLOG.md`). Vanaf hier ronde-gewijs loggen.

---

## Rondes

### Ronde 4 — 2026-06-22 01:3x

**STAP A — research:** WebSearch NL-bedrijvengidsen/citaties → DTG, Bedrijvengids Nederland, Bedrijf op de kaart, Peyda; NAP-consistentie = sleutel voor local-pack. Bing Places + Apple Business Connect als onderbenutte kansen (concurrent doet ze niet).

**STAP B — 10 tips:**
1. CITATIES.md (NAP-blok + geprioriteerde vermeldingen) — **✅ gedaan**
2. Interne-link-pass: dienst → matrix-combo's — **✅ gedaan**
3. Interne-link-pass: plaats → matrix-combo's ("Veelgevraagd in [plaats]") — **✅ gedaan**
4. Fallback voor diensten zonder matrix (plaatsen-chips) — **✅ gedaan**
5. Research citaties wegschrijven — **✅**
6. Matrix-ingang op home — ⬜ ronde 5 (optioneel)
7. KANSEN doorlopen op onbenutte items — ⬜ ronde 5
8. Extra artikel/inhoud uit KANSEN — ⬜ ronde 5
9. Najaars-/voorjaars-GBP-timing (al in GBP-CONTENT) — ✅
10. Build-check — ✅ (84 pag.)

**STAP C — uitgevoerd:**
- **Interne-link-pass (silo):** `[dienst].astro` + `[plaats].astro` aangepast — money-diensten linken nu naar hun 12 plaats-combo's en elke plaats naar zijn dienst-combo's. Diensten zonder matrix vallen terug op de algemene plaatsen-chips. Geverifieerd: build 84 pag., links aanwezig (oss/daklekkage, "Veelgevraagd in Oss", fallback "Heel mijn werkgebied").
- **CITATIES.md:** kant-en-klaar NAP-blok + 3 tiers vermeldingen (GBP → Bing/Apple → NL-gidsen).
- Commit naar `nacht-seo`.

**Volgende ronde (5):** KANSEN doorlopen op onbenutte items + eventueel matrix-ingang op home + extra content.

### Ronde 3 — 2026-06-22 01:2x

**STAP A — research:** WebSearch verstopte regenpijp (oorzaken/symptomen/gevolgen/voorkomen) → blad+mos via goot, najaar/winter, bevriezen; gevolg = vocht/schimmel/scheuren gevel; oplossing = goot leeg + pijp doorspoelen + bladroosters. Cannibalisatie-check op de 4 bestaande slugs → 2 nieuwe hoeken die niet overlappen.

**STAP B — 10 tips:**
1. Artikel "Verstopte regenpijp / lekkende dakgoot" — **✅ gedaan**
2. Artikel "Stormschade: eerste hulp & verzekering" — **✅ gedaan**
3. GBP-CONTENT.md starten (maand posts + Q&A-seed + foto-schema) — **✅ gedaan**
4. Cannibalisatie-check artikelen — **✅ gedaan** ("wat kost goten" overgeslagen, dekt `hoe-vaak-dakgoot-reinigen` al)
5. Research wegschrijven — **✅** (bronnen verwerkt in artikel)
6. CITATIES.md (NL-vermeldingen + NAP) — ⬜ ronde 4
7. Interne-link-pass (matrix ↔ plaats/dienst + matrix-ingang) — ⬜ ronde 4
8. Najaars-GBP-timing in GBP-CONTENT verwerkt (post #2) — **✅**
9. Extra probleem-artikel uit KANSEN — ⬜ later
10. Build-check — ✅ (84 pag.)

**STAP C — uitgevoerd:**
- **2 kennisbank-artikelen** (regenpijp/goot + stormschade-eerste-hulp) in Rens' stem (voice-files), met research-onderbouwing, interne links naar dienst + verwante artikelen. Geverifieerd: build 84 pag., beide renderen + staan in kennisbank-index.
- **GBP-CONTENT.md:** 7 roterende posts (aanbod/seizoen/storm/bewijs/vertrouwen) + 5 Q&A-seeds + foto-naamschema. Prijs gemarkeerd als €25/€30-afhankelijk.
- Commit naar `nacht-seo`.

**Volgende ronde (4):** CITATIES.md + interne-link-pass + matrix-ingang op overzichtspagina's.

### Ronde 2 — 2026-06-22 01:2x

**STAP A — research:** WebSearch daklekkage-reparatiekosten 2026 → concrete cijfers (opsporen €75–150 visueel / €125–350 lekdetectie; reparatie €130–500 klein; pannendak €130–210/m², plat €250–300/m²; **uitstel kost €800–2.500 extra binnen 6 mnd**). Kannibalisatie-check: er bestaat al een `daklekkage-opsporen`-artikel → nieuw artikel bewust op de **kosten**-hoek gezet + onderling gelinkt.

**STAP B — 10 tips:**
1. Matrix Tier C (stormschade × 12 dorpen) — **✅ gedaan**
2. Kennisbank-artikel "Wat kost daklekkage repareren?" — **✅ gedaan**
3. Research kosten + cannibalisatie-check — **✅ gedaan**
4. Tweede artikel "Verstopte regenpijp / lekkende dakgoot" — ⬜ ronde 3
5. Derde artikel "Wat kost goten reinigen?" — ⬜ ronde 3
6. GBP-CONTENT.md (maand posts + Q&A-seed + foto-schema) — ⬜ ronde 3/4
7. CITATIES.md (NL-vermeldingen + NAP) — ⬜ ronde 4
8. Interne-link-pass (matrix ↔ plaats/dienst, matrix-ingang op overzichten) — ⬜ na alle pagina's
9. Najaars-GBP-campagne klaarzetten (KANSEN #2) — ⬜ ronde 4
10. Build-check + paginatelling — ✅ doorlopend (82 pag.)

**STAP C — uitgevoerd:**
- **Tier C stormschade (12 pag.):** kans (stormpiek-term, concurrent traag) → gebouwd in `matrix.ts` met unieke wind/locatie-hooks per dorp → geverifieerd: build 82 pag., **36 matrix-pagina's totaal (matrix compleet)**, steekproef uniek (Heusden "vesting").
- **Artikel "Wat kost daklekkage repareren?":** in Rens' stem (voice-files), met 2026-cijfers + uitstel-urgentie, gelinkt aan daklekkage-dienst + opsporen-artikel. Rendert.
- Commit naar `nacht-seo`.

**Volgende ronde (3):** STAP A opnieuw, dan tips 4–6 (2 artikelen + start GBP-content).

### Ronde 1 — 2026-06-22 01:1x

**STAP A — research:** WebSearch (concurrenten regio + seizoenspiek) + WebFetch concurrent-plaatspagina. Chrome verbonden, maar KWP niet bereikbaar (geen Ads-account) → gelogd in BESLISSING-NODIG, door op CSV/openbare bronnen. 6 kansen → KANSEN.md. **Kerninzicht:** concurrent-plaatspagina's zijn generiek (geen wijken/prijzen/FAQ); piekvraag = najaar → nú bouwen.

**STAP B — 10 tips deze ronde:**
1. Matrix Tier B bouwen (daklekkage + goten × 7 dorpen) — **✅ gedaan**
2. Voice-files aanmaken (toon/humor/woorden/overtuigingen) — **✅ gedaan**
3. Research wegschrijven in KANSEN.md — **✅ gedaan**
4. KWP-poging + eerlijk loggen bij falen — **✅ gedaan** (niet beschikbaar, gelogd)
5. Concurrent-gat benutten: wijken + FAQ in elke matrix-pagina — **✅ gedaan** (zit in Tier A/B)
6. Najaars-timing vastleggen (build nu → rank vóór sep) — **✅ genoteerd** (KANSEN #2); uitvoering GBP-campagne volgt
7. Matrix Tier C (stormschade × 12 dorpen) — ⬜ ronde 2
8. Kennisbank-artikel "Daklekkage repareren — kosten & opsporen" — ⬜ ronde 2
9. Interne-link-pass (matrix ↔ plaats/dienst) — ⬜ na Tier C
10. GBP-content (najaarsposts + Q&A-seed) — ⬜ ronde 2/3

**STAP C — uitgevoerd:**
- **Tier B matrix (14 pag.):** kans (lokale diepte die concurrent mist) → gebouwd in `matrix.ts` (unieke hooks per dorp, gegrond in woningtype/omgeving) → geverifieerd: build 69 pag. groen, 24 matrix-pagina's, steekproef uniek (Drunen "Loonse en Drunense Duinen", Heusden "vesting").
- **Voice-files:** 4 bestanden in `voice/` afgeleid uit bestaande site-/GBP-copy → vanaf nu leidend voor toon.
- Commit per groep naar `nacht-seo`.

**Volgende ronde (2):** STAP A opnieuw, dan tips 7–10 (Tier C, eerste artikel, GBP-content).
