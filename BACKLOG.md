# BACKLOG — autonome SEO-bouw (branch `nacht-seo`)

> De `/dak`-loop pakt telkens de **bovenste ⬜**. Volgorde = prioriteit.
> Klaar = ✅ + logregel in `WERK-LOG.md`. Nieuwe kans = gerangschikt onderaan toevoegen.
> Alles lokaal + commit naar `nacht-seo`. Nooit deployen/pushen/main aanraken.

## Te bouwen (gerangschikt)

- ⬜ **1. PRIORITEIT.md** — analyseer `KEYWORD-ONDERZOEK.md` (9.494 kw, incl. 129 plaats-kw + 516 lage-concurrentie-kansen). Rangschik welke **dienst×plaats-pagina's** en welke **artikelen** eerst, op basis van *volume × lage concurrentie × jouw 3 money-diensten (goten/daklekkage/stormschade) × je 12 kerndorpen*. Dit bestand stuurt taak 2–5.

- ⬜ **2. Matrix-route** — bouw `src/pages/werkgebied/[plaats]/[dienst].astro` (of `/diensten/[dienst]/[plaats]`). Genereer **selectief** de top-combinaties uit PRIORITEIT.md (start: 3 money-diensten × 12 plaatsen ≈ 36). Elke pagina: unieke lokale tekst (uit `plaatsen.ts` `lokaal` + dienst-data), H1 "dienst in plaats", Service+FAQ JSON-LD, interne links naar de plaats- én dienst-pagina, bel/WhatsApp-CTA. **Geen thin content.**

- ⬜ **3. Keyword-clusters** — verrijk de 3 money-dienstpagina's met 4–5 secundaire termen uit de data (natuurlijk in koppen/FAQ/tekst, geen stuffing).

- ⬜ **4. voice/-map** — `toon.md`, `humor.md`, `woorden.md`, `overtuigingen.md`, afgeleid uit bestaande site-copy + GBP-omschrijving (hoe Rens schrijft). Gebruik deze voortaan voor alle gegenereerde tekst.

- ⬜ **5. Kennisbank** — schrijf 4 hoge-intentie probleemartikelen in Rens' stem: "Dakgoot lekt — oorzaken & wat het kost", "Daklekkage opsporen zonder sloopwerk", "Stormschade aan je dak: eerste hulp", "Wat kost goten reinigen?". Met interne links + FAQ-schema.

- ⬜ **6. GBP-CONTENT.md** — een maand wekelijkse Google-posts (aanbod/seizoen/storm/bewijs) + Q&A-seed (vraag+antwoord) + foto-naamschema. Klaar om te plakken zodra het GBP live is.

- ⬜ **7. CITATIES.md** — NL-vermeldingen om aan te maken (Bing Places, Apple Business Connect, De Telefoongids/DTG, Facebook, lokale gidsen) + exacte NAP-tekst om overal identiek te plakken.

- ⬜ **8. Interne-link-pass** — plaatspagina's linken naar hun dienst-combo's, dienstpagina's naar hun plaats-combo's (silo). Voeg een matrix-ingang toe op home/diensten/werkgebied.

- ⬜ **9. Build-check** — `npm run build`, tel de pagina's, los eventuele errors op, noteer de paginatelling in het log.

- ⬜ **10. Eindrapport** — schrijf bovenaan `WERK-LOG.md` een samenvatting: wat gebouwd, hoeveel pagina's, top-kansen, en de definitieve "VOOR RENS"-lijst.
