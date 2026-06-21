# BACKLOG — startlijst lokale SEO (branch `nacht-seo`)

> De `/dak`-loop werkt hieruit + uit `KANSEN.md`. Klaar = ✅ + logregel in `WERK-LOG.md`.
> Alles lokaal, commit naar `nacht-seo`, nooit deployen/pushen/main aanraken.

## A. Matrix-pagina's — dienst × plaats (~36, unieke lokale teksten)
Money-diensten in volgorde: **daklekkage → goten reinigen → stormschade** (zie `PRIORITEIT.md`).

- ✅ **Tier A (10)** — daklekkage + goten × {Oss, Den Bosch, Rosmalen, Vught, Berlicum}. *(gedaan, `src/data/matrix.ts` + route)*
- ✅ **Tier B (14)** — daklekkage + goten × {Vlijmen, Drunen, Boxtel, Schijndel, Heusden, Sint-Michielsgestel, Oisterwijk}. *(ronde 1)*
- ✅ **Tier C (12)** — stormschade × alle 12 kerndorpen. *(ronde 2 — matrix nu compleet: 36 pag.)*
- ✅ **Interne-link-pass** — plaatspagina's ↔ hun dienst-combo's, dienstpagina's ↔ hun plaats-combo's (silo). *(ronde 4)* Home-ingang nog optioneel.

## B. Kennisbank — artikelen voor hoge-intentie probleemtermen
- ✅ "Wat kost daklekkage repareren?" (`daklekkage repareren` 880 · Laag · €5,46) *(ronde 2 — kosten-hoek, gelinkt aan bestaand opsporen-artikel)*
- ✅ "Verstopte regenpijp of lekkende dakgoot — oorzaken & oplossen" (`verstopte regenpijp` 720 · Laag) *(ronde 3)*
- ⏭️ "Wat kost goten reinigen?" — overgeslagen: al gedekt door bestaand `hoe-vaak-dakgoot-reinigen` (kannibalisatie)
- ✅ "Stormschade aan je dak — eerste hulp & verzekering" (piek-/intentieterm) *(ronde 3)*
- ⬜ Extra artikelen uit `KANSEN.md` (research levert er meer aan)

## C. Google Bedrijfsprofiel-content (klaar om te plakken zodra GBP live is)
- ✅ **1 maand GBP-posts** — 7 roterende posts in `GBP-CONTENT.md` *(ronde 3)*
- ✅ **Q&A-seed** — 5 vraag+antwoord in `GBP-CONTENT.md` *(ronde 3)*
- ✅ **Foto-naamschema** (dienst-plaats.jpg) + categorieën in `GBP-CONTENT.md` *(ronde 3)*

## D. Stem & fundament
- ✅ **voice/-map** — `toon.md`, `humor.md`, `woorden.md`, `overtuigingen.md`. *(ronde 1)*
- ✅ **Keyword-clusters** op de 3 money-pagina's (8 FAQ's). *(gedaan)*
- ✅ **PRIORITEIT.md** — data-gedreven bouwvolgorde. *(gedaan)*
- ✅ **CITATIES.md** — NAP-blok + 3 tiers vermeldingen (GBP → Bing/Apple → NL-gidsen). *(ronde 4)*

## E. Afsluiting (laatste ronde)
- ✅ **Build-check** — `npm run build` groen, 85 pag., 0 gebroken links. *(ronde 6+8)*
- ✅ **OCHTENDRAPPORT.md** — samenvatting + BESLISSING-NODIG + top-3 kansen. *(ronde 8)*

---
**Loop afgerond na 8 rondes (2026-06-22).** Alle backlog-items ✅ of bewust ⏭️.
Resterende ⬜'s zijn allemaal "alleen Rens" → `BESLISSING-NODIG.md`.
