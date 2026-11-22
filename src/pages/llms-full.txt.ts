// llms-full.txt (17-11-2026): de korte antwoorden uit de kennisbank voor AI-zoekmachines, vanzelf uit KORT_ANTWOORD. Antwoorden met een cijfer vallen weg, zodat hier nooit een bedrag staat. Het antwoord over een schoorsteen na een storm staat er niet in, omdat Rens het plaatsen van een kap nog niet heeft bevestigd.
import type { APIRoute } from "astro";
import { SITE } from "../site.config.ts";
import { ARTIKELEN } from "../data/artikelen.ts";
import { KORT_ANTWOORD } from "../data/artikelen-extra.ts";
import { DIENSTEN } from "../data/diensten.ts";

const NIET = ["schoorsteen-na-storm"];
const ANTWOORDEN = ARTIKELEN.filter((a) => !a.verborgen && !NIET.includes(a.slug) && KORT_ANTWOORD[a.slug] && !/\d/.test(KORT_ANTWOORD[a.slug]));
// 22-11-2026 ronde 5: vragen en antwoorden van de dienstpagina's voor AI. Een vraag of antwoord met een cijfer of met een woorddeel uit WEG (zekerheid, extra kosten, materiaal, tijd) valt weg. Platte daken, dakbeschot en dakrenovatie doen niet mee.
const NIET_DIENST = ["platte-daken", "dakbeschot-vervangen", "dakrenovatie"];
const WEG = /\d|toesla|garan|bitum|bran|zelfde da|binnen (een|het u)|sne|mete|direc|vandaa|altij|nooi/i;
const DIENST_VRAGEN = DIENSTEN.filter((d) => !d.verborgen && !NIET_DIENST.includes(d.slug))
  .map((d) => ({ d, faq: (d.faq ?? []).filter((f) => !WEG.test(`${f.v} ${f.a}`)) }))
  .filter((x) => x.faq.length > 0);

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
    "# Vragen over de klussen",
    "",
    ...DIENST_VRAGEN.flatMap(({ d, faq }) => [
      `## ${d.titel}`,
      "",
      ...faq.flatMap((f) => [`Vraag: ${f.v}`, `Antwoord: ${f.a.replace(/<[^>]+>/g, "")}`, ""]),
      `Meer: ${SITE.url}/diensten/${d.slug}/`,
      "",
    ]),
  ];
  return new Response(regels.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
