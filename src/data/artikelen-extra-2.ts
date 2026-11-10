/**
 * Nieuwe kennisartikelen sinds 10-11-2026. artikelen-extra.ts is te groot geworden voor de automatische controle,
 * daarom staan nieuwe artikelen en korte antwoorden hier. artikelen-extra.ts zet ze achter ARTIKELEN_EXTRA en in KORT_ANTWOORD.
 */
import type { Artikel } from "./artikelen";
import { inclBtw } from "./prijzen";

export const ARTIKELEN_EXTRA_2: Artikel[] = [
  {
    slug: `lood-of-loodvervanger`,
    datum: `2026-11-10`,
    titel: `Lood of loodvervanger?`,
    h1: `Lood of loodvervanger op je dak: wat is het verschil en wat kies je?`,
    metaTitle: `Lood of loodvervanger: wat is beter? | Spoed Dak Service`,
    metaDescription: `Moet het lood rond je schoorsteen of dakraam vervangen worden? Het verschil tussen lood en loodvervanger, wanneer echt lood beter past en wat ik meestal gebruik.`,
    intro: `Waar je dak tegen een schoorsteen, een muur of een dakraam aankomt, ligt een strook die het water over de pannen leidt. Vroeger was dat lood. Tegenwoordig wordt vaak loodvervanger gebruikt. Moet die strook bij jou vervangen worden, dan krijg je de vraag: lood of loodvervanger? Hieronder lees je wat het verschil is, wanneer echt lood beter past en hoe ik het meestal doe.`,
    secties: [
      { kop: `Wat het allebei doet`, tekst: [
        `Lood en loodvervanger doen hetzelfde werk. De strook zit met de bovenkant vast in of tegen de muur of de schoorsteen en valt met de onderkant over de pannen. Zo loopt het regenwater over de pannen weg en niet achter de pannen langs naar binnen. Of het lekt, hangt vooral af van hoe goed de strook ligt en vastzit, en minder van het materiaal. Hoe je ziet dat het lood bij jou lekt of op is, lees je in <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Wat loodvervanger is`, tekst: [
        `Loodvervanger is een buigzame strook zonder lood, meestal van kunststof of rubber met een gaas of een laagje aluminium erin. Je kunt hem net als lood over de vorm van de pannen drukken. Hij is veel lichter dan lood, en er bestaan verschillende soorten.`,
      ] },
      { kop: `De verschillen op een rij`, tekst: [
        `Gewicht. Lood is zwaar. Loodvervanger weegt veel minder, en dat maakt het werk op het dak makkelijker, zeker bij een lange strook langs een muur.`,
        `Diefstal. Lood is geld waard, en er wordt soms lood van daken gestolen. Loodvervanger is voor dieven niet interessant. Zie <a href="/kennisbank/lood-van-dak-gestolen/">lood van je dak gestolen</a>.`,
        `Uiterlijk. Lood wordt na een tijd dof grijs, en de eerste tijd kan het witte strepen geven op de pannen of de muur eronder. Loodvervanger heeft vaak één egale kleur en geeft die witte strepen meestal niet.`,
        `Afspoelen. Van lood spoelt met de regen steeds een heel klein beetje af, naar de goot en de grond. Ook daarom kiezen veel mensen nu voor loodvervanger.`,
        `Oude huizen en monumenten. Bij een monument of in een beschermd stadsgezicht wil de gemeente vaak dat het dak eruit blijft zien zoals het was. Dan is echt lood vaak de betere keus, of zelfs verplicht. Vraag het na bij je gemeente voordat er iets verandert.`,
      ] },
      { kop: `Wat ik meestal gebruik`, tekst: [
        `Meestal werk ik met loodvervanger. Het is licht, goed te vormen rond een schoorsteen, langs een muur of om een dakraam, en niet interessant voor dieven. Wil je liever echt lood, bijvoorbeeld omdat er op de rest van je dak al lood ligt, omdat het beter bij je huis past of omdat de gemeente het vraagt, zeg het dan als je een foto stuurt. Dan werk ik met lood.`,
      ] },
      { kop: `Oud en nieuw naast elkaar`, tekst: [
        `Je hoeft niet al het lood op je dak tegelijk te vervangen. Is alleen de strook aan één kant van de schoorsteen op, dan vervang ik die en laat ik de nieuwe strook goed aansluiten op het lood dat nog goed is. Dat kan met loodvervanger en met lood. Staat de schoorsteen op de grens met de buren, lees dan ook <a href="/kennisbank/lekkage-gedeelde-schoorsteen/">lekkage bij een gedeelde schoorsteen</a>.`,
      ] },
      { kop: `Hoe zie je wat er op je dak ligt?`, tekst: [
        `Kijk vanaf de straat met de zoom van je telefoon naar de voet van de schoorsteen. Lood is dof grijs, soms met een witte waas, en ligt in zachte, wat golvende vormen over de pannen. Loodvervanger is vaak egaal grijs of zwart en ziet er strakker of wat rubberachtig uit. Twijfel je, stuur me de foto via WhatsApp, dan zeg ik wat het is.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoeveel strook het is, waar hij ligt, hoe goed ik erbij kan en of het lood of loodvervanger wordt. Stuur een foto van de schoorsteen, de muur of het dakraam vanaf de straat, dan hoor je vooraf wat het kost. Lekt het nu al, kijk dan eerst op de <a href="/spoed/">spoedpagina</a>. Zie ook <a href="/diensten/lood-vervangen/">lood vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: lood vervangen`, href: `/diensten/lood-vervangen/` },
    faq: [
      { v: `Is loodvervanger minder goed dan lood?`, a: `Niet als hij goed gelegd is. Allebei houden ze het water buiten, zolang de strook goed vastzit en goed over de pannen valt. Een lek bij een schoorsteen komt veel vaker door een strook die los is gaan zitten, gescheurd is of slecht is gelegd, dan door het materiaal zelf.` },
      { v: `Moet het lood van mijn dak eraf omdat het lood is?`, a: `Nee. Lood dat goed ligt en niet lekt, kan gewoon blijven liggen. Moet het toch vervangen worden omdat het gescheurd of op is, dan kies je voor nieuw lood of voor loodvervanger.` },
      { v: `Kan ik zelf loodvervanger leggen?`, a: `Liever niet. De strook moet precies goed vastzitten in of tegen de muur en goed over de pannen vallen, anders loopt het water er juist achter. En rond een schoorsteen sta je hoog op een schuin dak. Stuur me een foto, dan hoor je vooraf wat het kost.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel (zie KORT_ANTWOORD in artikelen-extra.ts). Geen bedragen met de hand.
export const KORT_ANTWOORD_2: Record<string, string> = {
  "lood-of-loodvervanger": `Lood en loodvervanger doen hetzelfde werk: ze leiden het water bij een schoorsteen, muur of dakraam over de pannen. Loodvervanger is lichter, makkelijk te vormen en niet interessant voor dieven, en daarom gebruik ik het meestal. Echt lood kan op wens, en past vaak beter bij een monument of een dak waar al lood op ligt.`,
};

// Extra vragen onder een bestaand artikel (zoals FAQ_ERBIJ in artikelen-extra.ts, dat te groot is geworden). Kennisbank [slug].astro voegt ze erbij.
export const FAQ_ERBIJ_2: Record<string, Artikel["faq"]> = {
  "wat-kost-dakgoot-schoonmaken": [
    { v: `Het blad komt van de bomen van de gemeente in mijn straat. Betaalt de gemeente het schoonmaken van mijn goot?`, a: `Meestal niet. Blad van straatbomen dat in je goot valt, zien de meeste gemeenten als iets wat bij wonen in een groene straat hoort, en het leegmaken van je goot blijft dan voor eigen rekening. Hangt er een tak van een gemeenteboom over je dak of tegen je goot, meld dat dan wel bij de gemeente, want die snoeit haar eigen bomen. Veel gemeenten zetten in de herfst ook bladkorven in de straat voor het blad dat je opveegt. Vraag het gerust na bij je gemeente. Onder straatbomen loont het om je goot te laten leegmaken als de bomen kaal zijn. Eén goot, bijvoorbeeld alleen de voorgoot, kost ${inclBtw("goot_reinigen")}. Voor beide goten hoor je vooraf de prijs.` },
  ],
};
