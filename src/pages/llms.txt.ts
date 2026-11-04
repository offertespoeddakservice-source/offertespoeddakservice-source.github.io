// llms.txt (03-11-2026, bijgewerkt 04-11-2026): korte, feitelijke uitleg voor AI-zoekmachines (ChatGPT, Gemini, Perplexity, Copilot).
// Plaatsen komen vanzelf uit plaatsen.ts en diensten uit diensten.ts (verborgen diensten, die Rens niet doet, vallen weg). Geen prijzen, geen beloftes.
import type { APIRoute } from "astro";
import { SITE } from "../site.config.ts";
import { PLAATSEN } from "../data/plaatsen.ts";
import { DIENSTEN } from "../data/diensten.ts";
import { ARTIKELEN } from "../data/artikelen.ts";

// Duidelijke namen voor AI. Een dienst die hier niet staat, krijgt zijn gewone titel.
const NAMEN: Record<string, string> = {
  daklekkage: "Daklekkage opsporen en repareren",
  dakreparatie: "Dakreparatie: losse of kapotte dakpannen, nokvorsten en lood",
  "goten-reinigen": "Dakgoten schoonmaken",
  "dakgoot-vervangen": "Dakgoot repareren of vervangen",
  "platte-daken": "Platte daken repareren",
  "regenpijp-vervangen": "Regenpijp vervangen of repareren",
  vogelwering: "Vogelwering onder de dakpannen",
};
const ZICHTBARE_DIENSTEN = DIENSTEN.filter((d) => !d.verborgen);

// Veelgelezen uitleg uit de eigen kennisbank. Een artikel dat verborgen is of niet bestaat, valt vanzelf weg.
const UITLEG = ["daklekkage-opsporen", "dak-lekt-bij-harde-wind", "water-achter-dakgoot", "dakgoot-lekt", "dakraam-lekt", "lekkage-bij-schoorsteen", "stormschade-eerste-hulp", "daklekkage-verzekering"];
const UITLEG_ARTIKELEN = UITLEG.map((s) => ARTIKELEN.find((a) => a.slug === s)).filter((a) => a && !a.verborgen) as typeof ARTIKELEN;

export const GET: APIRoute = () => {
  const u = SITE.url;
  const regels = [
    `# ${SITE.bedrijfsnaam}`,
    "",
    `> Dakdekker uit ${SITE.basisplaats} (regio Den Bosch, Noord-Brabant) voor daklekkage, dakreparatie, dakgoten en onderhoud aan woonhuizen. Je hebt rechtstreeks contact met de eigenaar, ${SITE.eigenaar}.`,
    "",
    `- Bellen of WhatsApp: ${SITE.telefoonWeergave}`,
    `- E-mail: ${SITE.email}`,
    `- Bereikbaar: ${SITE.openingstijden}`,
    `- KvK: ${SITE.kvk}`,
    `- Bedrijfsaansprakelijk verzekerd`,
    `- Reviews: ${String(SITE.reviews.score).replace(".", ",")} op Werkspot (${SITE.reviews.werkspotAantal} reviews): ${SITE.werkspotUrl}`,
    "",
    "## Zo werkt het",
    "- Stuur een foto via WhatsApp of bel. Je hoort de prijs voordat het werk begint.",
    `- Bij lekkage of stormschade: kijk eerst op ${u}/spoed/ wat je zelf meteen kunt doen.`,
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
    "## Veelgelezen uitleg",
    ...UITLEG_ARTIKELEN.map((a) => `- [${a.titel}](${u}/kennisbank/${a.slug}/)`),
    "",
    "## Meer",
    `- [Kennisbank met uitleg over daklekkage, goten en pannen](${u}/kennisbank/)`,
    `- [Over ${SITE.eigenaar}](${u}/over/)`,
    `- [Contact](${u}/contact/)`,
    "",
  ];
  return new Response(regels.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
