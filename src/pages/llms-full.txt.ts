// llms-full.txt (17-11-2026): de korte antwoorden uit de kennisbank voor AI-zoekmachines, vanzelf uit KORT_ANTWOORD. Antwoorden met een cijfer vallen weg, zodat hier nooit een bedrag staat. Het antwoord over een schoorsteen na een storm staat er niet in, omdat Rens het plaatsen van een kap nog niet heeft bevestigd.
import type { APIRoute } from "astro";
import { SITE } from "../site.config.ts";
import { ARTIKELEN } from "../data/artikelen.ts";
import { KORT_ANTWOORD, FAQ_ERBIJ } from "../data/artikelen-extra.ts";
import { FAQ_ERBIJ_2 } from "../data/artikelen-extra-2.ts";
import { DIENSTEN } from "../data/diensten.ts";
import { PLAATSEN } from "../data/plaatsen.ts";
import { MATRIX } from "../data/matrix.ts";

const NIET = ["schoorsteen-na-storm"];
const ANTWOORDEN = ARTIKELEN.filter((a) => !a.verborgen && !NIET.includes(a.slug) && KORT_ANTWOORD[a.slug] && !/\d/.test(KORT_ANTWOORD[a.slug]));
// 22-11-2026 ronde 5: vragen en antwoorden van de dienstpagina's voor AI. Een vraag of antwoord met een cijfer of met een woorddeel uit WEG (zekerheid, extra kosten, materiaal, tijd) valt weg. Platte daken, dakbeschot en dakrenovatie doen niet mee.
const NIET_DIENST = ["platte-daken", "dakbeschot-vervangen", "dakrenovatie"];
const WEG = /\d|toesla|garan|bitum|bran|zelfde da|binnen (een|het u)|sne|mete|direc|vandaa|altij|nooi/i;
const DIENST_VRAGEN = DIENSTEN.filter((d) => !d.verborgen && !NIET_DIENST.includes(d.slug))
  .map((d) => ({ d, faq: (d.faq ?? []).filter((f) => !WEG.test(`${f.v} ${f.a}`)) }))
  .filter((x) => x.faq.length > 0);
// 23-11-2026 ronde 1: vragen en antwoorden van de plaatspagina's en de pagina's per plaats en klus voor AI. Het telefoonnummer telt niet mee bij het filter; een vraag of antwoord met een ander cijfer of een woorddeel uit WEG valt weg. Dakrenovatie en verborgen klussen doen niet mee.
const KLUS: Record<string, string> = { daklekkage: "Daklekkage", "goten-reinigen": "Dakgoot schoonmaken", "dakgoot-vervangen": "Dakgoot repareren of vervangen", stormschade: "Stormschade", dakreparatie: "Dakreparatie" };
const zonderNummer = (t: string) => t.split(SITE.telefoonWeergave).join("");
const magMee = (f: { v: string; a: string }) => !WEG.test(zonderNummer(`${f.v} ${f.a}`));
const PLAATS_VRAGEN = PLAATSEN.map((p) => ({ kop: `Dakdekker in ${p.naam}`, pad: `/werkgebied/${p.slug}/`, faq: (p.faq ?? []).filter(magMee) })).filter((x) => x.faq.length > 0);
const KLUS_VRAGEN = MATRIX.filter((c) => KLUS[c.dienst] && DIENSTEN.some((d) => d.slug === c.dienst && !d.verborgen))
  .flatMap((c) => { const p = PLAATSEN.find((x) => x.slug === c.plaats); const faq = (c.faq ?? []).filter(magMee); return p && faq.length > 0 ? [{ kop: `${KLUS[c.dienst]} in ${p.naam}`, pad: `/werkgebied/${p.slug}/${c.dienst}/`, faq }] : []; });
// 24-11-2026 ronde 2: vragen en antwoorden van de kennisartikelen met de meeste kliks, voor AI. Zelfde filter als de plaatsvragen (magMee): een vraag of antwoord met een cijfer of een woorddeel uit WEG valt weg. Een artikel dat verborgen is of niet bestaat, valt weg.
// 26-11-2026 ronde 3: ook zeven veel bezochte uitlegpagina's die er nog niet in stonden (condens 12, schuine wand 10, warmtepomp 9, ijspegels 8 en afvoer 7 bezoeken in 28 dagen; dak fluit gaf een tik op Bellen of WhatsApp).
const KENNIS_SLUGS = ["lekkage-bij-dakdoorvoer", "water-achter-dakgoot", "dak-lekt-bij-harde-wind", "water-uit-lamp-plafond", "golfplaten-lekken", "kerstverlichting-dakgoot", "lekkage-bij-aanbouw", "dakpan-kapot-of-verschoven", "schoorsteen-lekt-open-haard", "lekkage-bij-kachelpijp", "veranda-of-overkapping-lekt", "nat-achter-knieschot", "lekkage-bij-zonnepanelen", "afzuigkap-lekt-bij-regen", "kilgoot-lekt", "lood-op-dak", "dakgoot-lekt", "condens-of-lekkage-op-zolder", "natte-plek-schuine-wand-zolder", "lekkage-warmtepomp-of-airco", "ijspegels-aan-dakgoot", "plat-dak-lekt-bij-afvoer", "dak-fluit-bij-harde-wind", "lekkage-bij-schoorsteen"];
const KENNIS_VRAGEN = KENNIS_SLUGS.map((s) => ARTIKELEN.find((a) => a.slug === s && !a.verborgen)).filter((a) => a)
  .map((a) => ({ a: a!, faq: [...(a!.faq ?? []), ...(FAQ_ERBIJ[a!.slug] ?? []), ...(FAQ_ERBIJ_2[a!.slug] ?? [])].filter(magMee) }))
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
    "# Vragen uit de kennisbank",
    "",
    ...KENNIS_VRAGEN.flatMap(({ a, faq }) => [`## ${a.titel}`, "", ...faq.flatMap((f) => [`Vraag: ${f.v}`, `Antwoord: ${f.a.replace(/<[^>]+>/g, "")}`, ""]), `Meer: ${SITE.url}/kennisbank/${a.slug}/`, ""]),
    "# Vragen per plaats",
    "",
    ...[...PLAATS_VRAGEN, ...KLUS_VRAGEN].flatMap(({ kop, pad, faq }) => [`## ${kop}`, "", ...faq.flatMap((f) => [`Vraag: ${f.v}`, `Antwoord: ${f.a.replace(/<[^>]+>/g, "")}`, ""]), `Meer: ${SITE.url}${pad}`, ""]),
  ];
  return new Response(regels.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
