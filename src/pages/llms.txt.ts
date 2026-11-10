// llms.txt (03-11-2026, bijgewerkt 04-11-2026, 07-11-2026: alle artikelen erbij, 10-11-2026: bereikbaar en korte namen): korte, feitelijke uitleg voor AI-zoekmachines (ChatGPT, Gemini, Perplexity, Copilot).
// Plaatsen komen vanzelf uit plaatsen.ts en diensten uit diensten.ts (verborgen diensten, die Rens niet doet, vallen weg). Geen prijzen, geen beloftes.
import type { APIRoute } from "astro";
import { SITE } from "../site.config.ts";
import { PLAATSEN } from "../data/plaatsen.ts";
import { DIENSTEN } from "../data/diensten.ts";
import { ARTIKELEN } from "../data/artikelen.ts";
import { MATRIX } from "../data/matrix.ts";

// Duidelijke namen voor AI. Een dienst die hier niet staat, krijgt zijn gewone titel.
const NAMEN: Record<string, string> = {
  daklekkage: "Daklekkage opsporen en repareren",
  dakreparatie: "Dakreparatie: losse of kapotte dakpannen, nokvorsten en lood",
  "goten-reinigen": "Dakgoten schoonmaken",
  "dakgoot-vervangen": "Dakgoot repareren of vervangen",
  "platte-daken": "Platte daken repareren",
  "regenpijp-vervangen": "Regenpijp vervangen of repareren",
  vogelwering: "Vogelwering onder de dakpannen en rond zonnepanelen",
};
const ZICHTBARE_DIENSTEN = DIENSTEN.filter((d) => !d.verborgen);

// Veelgelezen uitleg uit de eigen kennisbank. Een artikel dat verborgen is of niet bestaat, valt vanzelf weg.
const UITLEG = ["daklekkage-opsporen", "dak-lekt-bij-harde-wind", "water-achter-dakgoot", "dakgoot-lekt", "dakraam-lekt", "lekkage-bij-schoorsteen", "lood-op-dak", "lekkage-bij-dakdoorvoer", "nokvorsten-los", "stormschade-eerste-hulp", "daklekkage-verzekering"];
const UITLEG_ARTIKELEN = UITLEG.map((s) => ARTIKELEN.find((a) => a.slug === s)).filter((a) => a && !a.verborgen) as typeof ARTIKELEN;
// Pagina's per plaats en klus (uit matrix.ts), zodat een AI bij een vraag als "daklekkage in Vught" meteen de lokale pagina vindt. Verborgen diensten vallen weg.
const KLUS_NAMEN: Record<string, string> = {
  daklekkage: "Daklekkage",
  "goten-reinigen": "Dakgoot schoonmaken",
  "dakgoot-vervangen": "Dakgoot repareren of vervangen",
  stormschade: "Stormschade",
  dakreparatie: "Dakreparatie",
  dakrenovatie: "Dakrenovatie",
};
const LOKAAL = MATRIX.flatMap((c) => {
  const d = ZICHTBARE_DIENSTEN.find((x) => x.slug === c.dienst);
  const p = PLAATSEN.find((x) => x.slug === c.plaats);
  return d && p ? [{ naam: `${KLUS_NAMEN[d.slug] ?? d.titel} in ${p.naam}`, pad: `/werkgebied/${p.slug}/${d.slug}/` }] : [];
});

export const GET: APIRoute = () => {
  const u = SITE.url;
  const regels = [
    `# ${SITE.bedrijfsnaam}`,
    "",
    `> Dakdekker uit ${SITE.basisplaats} (regio Den Bosch, Noord-Brabant) voor daklekkage, dakreparatie, dakgoten en onderhoud aan woonhuizen. Je hebt rechtstreeks contact met de eigenaar, ${SITE.eigenaar}.`,
    "",
    `- Bellen of WhatsApp: ${SITE.telefoonWeergave}`,
    "- Ook bekend als: Spoed Dak, Spoeddakservice",
    `- E-mail: ${SITE.email}`,
    "- Bereikbaar: dag en nacht (24/7), ook in het weekend, voor bellen en WhatsApp",
    `- KvK: ${SITE.kvk}`,
    `- Bedrijfsaansprakelijk verzekerd`,
    `- Reviews: ${String(SITE.reviews.score).replace(".", ",")} op Werkspot (${SITE.reviews.werkspotAantal} reviews): ${SITE.werkspotUrl}`,
    "",
    "## Zo werkt het",
    "- Stuur een foto via WhatsApp of bel. Je hoort de prijs voordat het werk begint.",
    `- Bij lekkage of stormschade: kijk eerst op ${u}/spoed/ wat je zelf meteen kunt doen.`,
    "",
    "## Lekt het nu?",
    "- Spoed is het als het binnen druppelt, als er een pan of nokvorst op straat ligt of als er een open plek in het dak zit. Een oude, droge kring op het plafond, of een scheve pan terwijl het binnen droog blijft, kan meestal een paar dagen wachten.",
    "- Wat je zelf meteen doet: een emmer onder de druppel, spullen opzij, de groep in de meterkast uit als het bij een lamp of stopcontact lekt, en niet zelf het dak op.",
    "- Stuur een foto van de natte plek en van het dak vanaf de straat via WhatsApp. Dan hoor je wat er nodig is en wanneer de eigenaar kan komen.",
    "",
    "## Klussen die de eigenaar heeft bevestigd",
    "- Lekkende naden in zinken dakgoten en bakgoten solderen, een lekkende dakgoot van binnen coaten, of de goot vervangen.",
    "- Lood rond een schoorsteen, dakraam of muur vastzetten of vervangen, meestal met loodvervanger en op wens met echt lood.",
    "- Een losgewaaide of rotte houten windveer langs de zijkant van het dak vervangen.",
    "- Een oude antenne of schotel (mast, beugel en kabel) van het dak halen en het dak weer dichtmaken.",
    "- Rot dakbeschot onder het dakleer van een schuur, garage of aanbouw vervangen, als dat nodig is.",
    "- Bij een dakrenovatie op wens nieuwe folie en nieuwe panlatten onder de pannen.",
    "- Een losse pan of nokvorst repareren als je niet thuis bent, als er van buiten bij te komen is en de prijs vooraf is afgesproken.",
    "- De Dak-APK (dakkeuring met fotorapport), ook bij een huis dat je wilt kopen, met toestemming van de verkoper.",
    "",
    "## Werk dat de eigenaar niet doet",
    "- Niet aan de stenen van een gevel of schoorsteen.",
    "- Geen dakisolatie. Wel eerst het dak droog en dicht maken voordat een isolatiebedrijf begint.",
    "- Niet aan zonnepanelen zelf: plaatsen, losmaken of verplaatsen doet de installateur. Wel de pannen onder en rond de panelen.",
    "",
    "## Diensten",
    ...ZICHTBARE_DIENSTEN.map((d) => `- [${NAMEN[d.slug] ?? d.titel}](${u}/diensten/${d.slug}/)`),
    `- [Spoed bij lekkage](${u}/spoed/)`,
    `- [Dak-APK (dakkeuring)](${u}/dak-apk/)`,
    "",
    "## Werkgebied",
    `Vanuit ${SITE.basisplaats} in de regio Den Bosch. Klussen verder weg, zoals in Breda, Eindhoven en Helmond, worden vooraf ingepland.`,
    ...PLAATSEN.map((p) => `- [Dakdekker in ${p.naam}](${u}/werkgebied/${p.slug}/)`),
    "",
    "## Ook in de dorpen eromheen",
    "Deze dorpen hebben geen eigen pagina. Ze staan op de pagina van de plaats ernaast.",
    `- Helvoirt en Cromvoirt: [Dakdekker in Vught](${u}/werkgebied/vught/)`,
    `- Engelen, Bokhoven, Nuland, Vinkel, Hedel, Ammerzoden, Kerkdriel en Zaltbommel: [Dakdekker in Den Bosch](${u}/werkgebied/den-bosch/)`,
    `- Kruisstraat, Maliskamp, Hintham, Maren-Kessel en Lithoijen: [Dakdekker in Rosmalen](${u}/werkgebied/rosmalen/)`,
    `- Nieuwkuijk en Haarsteeg: [Dakdekker in Vlijmen](${u}/werkgebied/vlijmen/)`,
    `- Elshout: [Dakdekker in Drunen](${u}/werkgebied/drunen/)`,
    `- Middelrode, Heeswijk-Dinther en Loosbroek: [Dakdekker in Berlicum](${u}/werkgebied/berlicum/)`,
    `- Den Dungen, Gemonde en Maaskantje: [Dakdekker in Sint-Michielsgestel](${u}/werkgebied/sint-michielsgestel/)`,
    `- Wijbosch en Sint-Oedenrode: [Dakdekker in Schijndel](${u}/werkgebied/schijndel/)`,
    `- Liempde, Esch en Oirschot: [Dakdekker in Boxtel](${u}/werkgebied/boxtel/)`,
    `- Oudheusden, Herpt, Doeveren, Heesbeen en Hedikhuizen: [Dakdekker in Heusden](${u}/werkgebied/heusden/)`,
    `- Berghem, Geffen, Lith, Megen, Ravenstein, Heesch en Nistelrode: [Dakdekker in Oss](${u}/werkgebied/oss/)`,
    `- Moergestel, Haaren en Biezenmortel: [Dakdekker in Oisterwijk](${u}/werkgebied/oisterwijk/)`,
    `- Batenburg, Bergharen, Hernen, Balgoij, Grave, Druten en Malden: [Dakdekker in Wijchen](${u}/werkgebied/wijchen/)`,
    `- Sprang-Capelle, Waspik, Kaatsheuvel, Loon op Zand, Raamsdonksveer en Geertruidenberg: [Dakdekker in Waalwijk](${u}/werkgebied/waalwijk/)`,
    `- Volkel, Odiliapeel, Zeeland, Schaijk en Reek: [Dakdekker in Uden](${u}/werkgebied/uden/)`,
    `- Erp, Zijtaart, Eerde, Mariaheide, Boekel en Gemert: [Dakdekker in Veghel](${u}/werkgebied/veghel/)`,
    `- Udenhout, Berkel-Enschot, Goirle en Dongen: [Dakdekker in Tilburg](${u}/werkgebied/tilburg/)`,
    `- Prinsenbeek, Teteringen, Bavel, Ulvenhout, Etten-Leur en Rijen: [Dakdekker in Breda](${u}/werkgebied/breda/)`,
    `- Stiphout, Mierlo-Hout, Brandevoort, Mierlo, Beek en Donk en Aarle-Rixtel: [Dakdekker in Helmond](${u}/werkgebied/helmond/)`,
    `- Best, Son en Breugel, Nuenen, Geldrop en Valkenswaard: [Dakdekker in Eindhoven](${u}/werkgebied/eindhoven/)`,
    "",
    "## Per plaats en klus",
    ...LOKAAL.map((l) => `- [${l.naam}](${u}${l.pad})`),
    "",
    "## Veelgelezen uitleg",
    ...UITLEG_ARTIKELEN.map((a) => `- [${a.titel}](${u}/kennisbank/${a.slug}/)`),
    "",
    "## Alle uitleg in de kennisbank",
    ...ARTIKELEN.filter((a) => !a.verborgen && !UITLEG.includes(a.slug)).map((a) => `- [${a.titel}](${u}/kennisbank/${a.slug}/)`),
    "",
    "## Meer",
    `- [Kennisbank met uitleg over daklekkage, goten en pannen](${u}/kennisbank/)`,
    `- [Over ${SITE.eigenaar}](${u}/over/)`,
    `- [Contact](${u}/contact/)`,
    "",
  ];
  return new Response(regels.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
