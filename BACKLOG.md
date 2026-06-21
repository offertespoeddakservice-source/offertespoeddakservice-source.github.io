# BACKLOG — autonome SEO-bouw (branch `nacht-seo`)

> De `/dak`-loop pakt telkens de **bovenste ⬜**. Volgorde = prioriteit.
> Klaar = ✅ + logregel in `WERK-LOG.md`. Nieuwe kans = gerangschikt onderaan toevoegen.
> Alles lokaal + commit naar `nacht-seo`. Nooit deployen/pushen/main aanraken.

## Te bouwen (gerangschikt)

- ✅ **1. PRIORITEIT.md** — geanalyseerd + geschreven. Kerninzicht: volume zit in product/DIY-termen (negeren), geld in laag-volume hoge-CPC huurtermen (daklekkage-repareren, goten-opener). Dorpsvolume flinterdun → matrix = local-pack/relevantie-zet, geen volumejacht. Stuurt taak 2–5.

- 🟡 **2. Matrix-route** — route `src/pages/werkgebied/[plaats]/[dienst].astro` + `src/data/matrix.ts` gebouwd. **Tier A klaar (10 pag.): daklekkage + goten × Oss/Den Bosch/Rosmalen/Vught/Berlicum.** Elke pagina unieke hook + lokale tekst + Service/FAQ-schema + interne links. Build OK (55 pag. totaal). **Nog te doen: Tier B (14) + Tier C stormschade (12).** → splitst naar taak 2b.

- ⬜ **3. Keyword-clusters** — verrijk de 3 money-dienstpagina's met 4–5 secundaire termen uit de data (natuurlijk in koppen/FAQ/tekst, geen stuffing).

- ⬜ **4. voice/-map** — `toon.md`, `humor.md`, `woorden.md`, `overtuigingen.md`, afgeleid uit bestaande site-copy + GBP-omschrijving (hoe Rens schrijft). Gebruik deze voortaan voor alle gegenereerde tekst.

- ⬜ **5. Kennisbank** — schrijf 4 hoge-intentie probleemartikelen in Rens' stem: "Dakgoot lekt — oorzaken & wat het kost", "Daklekkage opsporen zonder sloopwerk", "Stormschade aan je dak: eerste hulp", "Wat kost goten reinigen?". Met interne links + FAQ-schema.

- ⬜ **6. GBP-CONTENT.md** — een maand wekelijkse Google-posts (aanbod/seizoen/storm/bewijs) + Q&A-seed (vraag+antwoord) + foto-naamschema. Klaar om te plakken zodra het GBP live is.

- ⬜ **7. CITATIES.md** — NL-vermeldingen om aan te maken (Bing Places, Apple Business Connect, De Telefoongids/DTG, Facebook, lokale gidsen) + exacte NAP-tekst om overal identiek te plakken.

- ⬜ **2b. Matrix Tier B + C** — voeg aan `matrix.ts` toe: Tier B = daklekkage + goten × {Vlijmen, Drunen, Boxtel, Schijndel, Heusden, Sint-Michielsgestel, Oisterwijk}; Tier C = stormschade × alle 12 kerndorpen. Elk een unieke hook. Build verifiëren.

- ⬜ **8. Interne-link-pass** — plaatspagina's linken naar hun dienst-combo's, dienstpagina's naar hun plaats-combo's (silo). Voeg een matrix-ingang toe op home/diensten/werkgebied. (Pas ná 2b, als alle matrix-pagina's bestaan.)

- ⬜ **9. Build-check** — `npm run build`, tel de pagina's, los eventuele errors op, noteer de paginatelling in het log.

- ⬜ **10. Eindrapport** — schrijf bovenaan `WERK-LOG.md` een samenvatting: wat gebouwd, hoeveel pagina's, top-kansen, en de definitieve "VOOR RENS"-lijst.
