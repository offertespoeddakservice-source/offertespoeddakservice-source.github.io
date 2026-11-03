// llms.txt (03-11-2026): korte, feitelijke uitleg voor AI-zoekmachines (ChatGPT, Gemini, Perplexity, Copilot).
// Plaatsen komen vanzelf uit plaatsen.ts, dus nieuwe dorpen staan er meteen bij. Geen prijzen, geen beloftes.
import type { APIRoute } from "astro";
import { SITE } from "../site.config.ts";
import { PLAATSEN } from "../data/plaatsen.ts";

const DIENSTEN: [string, string][] = [
  ["daklekkage", "Daklekkage opsporen en repareren"],
  ["dakreparatie", "Dakreparatie: losse of kapotte dakpannen, nokvorsten"],
  ["stormschade", "Stormschade aan het dak"],
  ["goten-reinigen", "Dakgoten schoonmaken"],
  ["dakgoot-vervangen", "Dakgoot repareren of vervangen"],
  ["dakpannen-vervangen", "Dakpannen vervangen"],
  ["platte-daken", "Platte daken"],
  ["schoorsteen-vegen", "Schoorsteen vegen"],
  ["vogelwering", "Vogelwering onder de dakpannen"],
  ["dakrenovatie", "Dakrenovatie"],
  ["dakkapel-reinigen", "Dakkapel schoonmaken en lekkage aan een bestaande dakkapel"],
];

export const GET: APIRoute = () => {
  const u = SITE.url;
  const regels = [
    `# ${SITE.bedrijfsnaam}`,
    "",
    `> Dakdekker uit ${SITE.basisplaats} (regio Den Bosch, Noord-Brabant). Eén vaste vakman, ${SITE.eigenaar}, die zelf op het dak staat. Lekkage, reparatie, goten en onderhoud aan woonhuizen.`,
    "",
    `- Bellen of WhatsApp: ${SITE.telefoonWeergave}`,
    `- E-mail: ${SITE.email}`,
    `- Bereikbaar: ${SITE.openingstijden}`,
    `- KvK: ${SITE.kvk}`,
    `- Reviews: ${SITE.werkspotUrl}`,
    "",
    "## Diensten",
    ...DIENSTEN.map(([slug, naam]) => `- [${naam}](${u}/diensten/${slug}/)`),
    `- [Spoed bij lekkage](${u}/spoed/)`,
    `- [Dak-APK (dakkeuring)](${u}/dak-apk/)`,
    "",
    "## Werkgebied",
    ...PLAATSEN.map((p) => `- [Dakdekker in ${p.naam}](${u}/werkgebied/${p.slug}/)`),
    "",
    "## Meer",
    `- [Kennisbank met uitleg over daklekkage, goten en pannen](${u}/kennisbank/)`,
    `- [Over ${SITE.eigenaar}](${u}/over/)`,
    `- [Contact](${u}/contact/)`,
    "",
  ];
  return new Response(regels.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
