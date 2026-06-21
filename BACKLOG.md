# BACKLOG — startlijst lokale SEO (branch `nacht-seo`)

> De `/dak`-loop werkt hieruit + uit `KANSEN.md`. Klaar = ✅ + logregel in `WERK-LOG.md`.
> Alles lokaal, commit naar `nacht-seo`, nooit deployen/pushen/main aanraken.

## A. Matrix-pagina's — dienst × plaats (~36, unieke lokale teksten)
Money-diensten in volgorde: **daklekkage → goten reinigen → stormschade** (zie `PRIORITEIT.md`).

- ✅ **Tier A (10)** — daklekkage + goten × {Oss, Den Bosch, Rosmalen, Vught, Berlicum}. *(gedaan, `src/data/matrix.ts` + route)*
- ⬜ **Tier B (14)** — daklekkage + goten × {Vlijmen, Drunen, Boxtel, Schijndel, Heusden, Sint-Michielsgestel, Oisterwijk}.
- ⬜ **Tier C (12)** — stormschade × alle 12 kerndorpen (klaarzetten voor stormpieken; koppelt aan `storm.py`).
- ⬜ **Interne-link-pass** — plaatspagina's ↔ hun dienst-combo's, dienstpagina's ↔ hun plaats-combo's (silo) + matrix-ingang op home/diensten/werkgebied. *(pas ná Tier B/C)*

## B. Kennisbank — artikelen voor hoge-intentie probleemtermen
- ⬜ "Daklekkage repareren — wat kost het & hoe wordt het opgespoord" (`daklekkage repareren` 880 · Laag · €5,46)
- ⬜ "Verstopte regenpijp of lekkende dakgoot — oorzaken & oplossen" (`verstopte regenpijp` 720 · Laag)
- ⬜ "Wat kost goten reinigen?" (`dakgoot schoonmaken` 2.400 — vang de info-zoeker → €-opener)
- ⬜ "Stormschade aan je dak — eerste hulp & verzekering" (piek-/intentieterm)
- ⬜ Extra artikelen uit `KANSEN.md` (research levert er meer aan)

## C. Google Bedrijfsprofiel-content (klaar om te plakken zodra GBP live is)
- ⬜ **1 maand GBP-posts** — ~4–5 wekelijkse posts (aanbod / seizoen / storm / bewijs) → `GBP-CONTENT.md`
- ⬜ **Q&A-seed** — de echte klantvragen met jouw beste antwoord → `GBP-CONTENT.md`
- ⬜ **Foto-naamschema** (dienst-plaats.jpg) + categorieën → `GBP-CONTENT.md`

## D. Stem & fundament
- ⬜ **voice/-map** — `toon.md`, `humor.md`, `woorden.md`, `overtuigingen.md` (uit bestaande site-copy + GBP-omschrijving). Gebruik voortaan voor alle gegenereerde tekst.
- ✅ **Keyword-clusters** op de 3 money-pagina's (8 FAQ's). *(gedaan)*
- ✅ **PRIORITEIT.md** — data-gedreven bouwvolgorde. *(gedaan)*
- ⬜ **CITATIES.md** — NL-vermeldingen (Bing Places, Apple Business Connect, De Telefoongids, Facebook, lokale gidsen) + exacte NAP om identiek te plakken.

## E. Afsluiting (laatste ronde)
- ⬜ **Build-check** — `npm run build`, paginatelling noteren, errors oplossen.
- ⬜ **OCHTENDRAPPORT.md** — samenvatting + `BESLISSING-NODIG.md` + top-3 kansen morgen.
