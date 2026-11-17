// llms-full.txt (17-11-2026): de korte antwoorden uit de kennisbank voor AI-zoekmachines, vanzelf uit KORT_ANTWOORD. Antwoorden met een cijfer vallen weg, zodat hier nooit een bedrag staat. Het antwoord over een schoorsteen na een storm staat er niet in, omdat Rens het plaatsen van een kap nog niet heeft bevestigd.
import type { APIRoute } from "astro";
import { SITE } from "../site.config.ts";
import { ARTIKELEN } from "../data/artikelen.ts";
import { KORT_ANTWOORD } from "../data/artikelen-extra.ts";

const NIET = ["schoorsteen-na-storm"];
const ANTWOORDEN = ARTIKELEN.filter((a) => !a.verborgen && !NIET.includes(a.slug) && KORT_ANTWOORD[a.slug] && !/\d/.test(KORT_ANTWOORD[a.slug]));

export const GET: APIRoute = () => {
  const regels = [
    `# ${SITE.bedrijfsnaam}: korte antwoorden uit de kennisbank`,
    "",
    `> Korte uitleg van ${SITE.eigenaar}, dakdekker uit ${SITE.basisplaats}, bij vragen over daklekkage, dakgoten, pannen en platte daken. Bij elk antwoord staat de pagina met de volledige uitleg. Bellen of WhatsApp: ${SITE.telefoonWeergave}, dag en nacht.`,
    "",
    ...ANTWOORDEN.flatMap((a) => [
      `## ${a.titel}`,
      "",
      KORT_ANTWOORD[a.slug].replace(/<[^>]+>/g, ""),
      "",
      `Meer: ${SITE.url}/kennisbank/${a.slug}/`,
      "",
    ]),
  ];
  return new Response(regels.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
