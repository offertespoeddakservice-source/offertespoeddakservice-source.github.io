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
  {
    slug: `lekdetectie-daklek`,
    datum: `2026-11-11`,
    titel: `Lekdetectie of dakdekker?`,
    h1: `Lekdetectie bij een daklek: heb je een lekdetectiebedrijf nodig of een dakdekker?`,
    metaTitle: `Lekdetectie bij een daklek: nodig? | Spoed Dak Service`,
    metaDescription: `Lekt je dak en twijfel je over lekdetectie met een warmtecamera? Bij een daklek vindt een dakdekker de plek meestal zonder meetapparatuur. Zo zie je wat je nodig hebt.`,
    intro: `Lekt het en zoek je op internet, dan kom je al snel bij bedrijven voor lekdetectie, met warmtecamera's en vochtmeters. Maar heb je dat nodig bij een lek in je dak? Meestal niet. Hieronder lees je wat een lekdetectiebedrijf doet, wanneer meten wel zin heeft en wanneer je beter meteen een dakdekker belt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en haal spullen weg die nat kunnen worden. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat een lekdetectiebedrijf doet`, tekst: [
        `Een lekdetectiebedrijf zoekt een lek met meetapparatuur. Denk aan een warmtecamera die laat zien waar een muur of plafond kouder of natter is, een vochtmeter, of een gas dat door een leiding wordt geblazen en op de plek van het lek naar buiten komt. Dat werk is vooral bedoeld voor lekken die je niet kunt zien: een waterleiding in de vloer, een cv-leiding in de muur of een afvoer onder de badkamer.`,
      ] },
      { kop: `Waarom het bij een daklek vaak niet nodig is`, tekst: [
        `Bij een daklek komt het water van buiten, en die plek is meestal gewoon te vinden. De natte plek binnen zit vaak een eind van het echte lek, omdat het water eerst over de folie, de panlatten of een balk loopt. Daarom begin ik op zolder bij de natte plek en volg ik het spoor van het water omhoog. Daarna kijk ik buiten naar de plekken waar een dak het vaakst lekt: een pan die verschoven of gebroken is, de nok, het lood rond de schoorsteen of het dakraam, een pijp door het dak en de goot.`,
        `Een warmtecamera laat wel zien waar het nat is, maar dat is vaak dezelfde plek als de vlek op je plafond, en niet de plek waar het water binnenkomt. Hoe ik een lek zoek, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Wanneer meten wel zin heeft`, tekst: [
        `Bij een plat dak met isolatie onder de dakbedekking kan het water een flink stuk onder de bedekking door lopen voordat het binnenkomt. Is er van buiten geen naad, scheur of losse rand te zien, dan kan gericht meetwerk helpen om de plek te vinden. Dan hoor je vooraf wat dat kost. Lees ook <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak: repareren of vervangen</a>.`,
      ] },
      { kop: `Eerst uitzoeken: dak of leiding?`, tekst: [
        `Wordt het alleen nat tijdens of na regen, dan komt het water meestal van het dak, de goot of een regenpijp, en dan heb je een dakdekker nodig. Wordt het ook nat als het dagen droog is, draait je watermeter terwijl alle kranen dicht zijn, of zakt de druk van je cv-ketel steeds, dan is een leiding veel waarschijnlijker. Dan is een loodgieter of een lekdetectiebedrijf de juiste keus. Lees ook <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">lekkage: dakdekker of loodgieter?</a>`,
      ] },
      { kop: `Wat het zoeken kost`, tekst: [
        `Bij mij hoort het zoeken bij de reparatie: je hoort één vaste prijs voor het lek opsporen en dichtmaken, ${inclBtw("daklekkage")}, inclusief materiaal. Laat je bij een daklek eerst een lekdetectiebedrijf meten, dan betaal je die meting apart, en moet het lek daarna nog door een dakdekker gemaakt worden.`,
      ] },
      { kop: `Je verzekering`, tekst: [
        `Bij lekkage uit een waterleiding of cv-leiding vergoeden veel opstalverzekeringen ook de kosten van het zoeken naar het lek. Bij een daklek hangt het af van je polis en van de oorzaak: komt het door storm, dan wordt de schade binnen vaak vergoed, komt het door slijtage, dan vaak niet. Kijk in je polis voordat je een meting laat doen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van de natte plek binnen en van die kant van je dak vanaf de straat, en vertel wanneer het nat wordt: bij elke bui, alleen bij harde wind, of ook als het droog is. Vaak kan ik dan al zeggen waar ik ga zoeken, of dat het eerder bij een leiding hoort. Je hoort vooraf wat het kost. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Heb ik een warmtecamera nodig om een daklek te vinden?`, a: `Meestal niet. Bij een pannendak vind ik het lek vaak door op zolder het spoor van het water te volgen en buiten naar de pannen, de nok, het lood en de pijpen door het dak te kijken. Een warmtecamera laat vooral zien waar het nat is, en dat is vaak niet de plek waar het water binnenkomt.` },
      { v: `Wie bel ik als ik niet weet of het van het dak of van een leiding komt?`, a: `Kijk eerst wanneer het nat wordt. Alleen bij regen: bel een dakdekker. Ook als het droog is, of draait je watermeter terwijl alle kranen dicht zijn: bel een loodgieter. Twijfel je, stuur me dan een foto van de natte plek en zeg erbij wanneer het nat wordt. Dan zeg ik eerlijk of het bij mij hoort.` },
      { v: `Kan een lekdetectiebedrijf mijn dak ook repareren?`, a: `Dat verschilt per bedrijf. Sommige zoeken alleen en geven je een rapport, en voor de reparatie heb je daarna nog een dakdekker nodig. Vraag het vooraf na, dan weet je waar je aan toe bent.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel (zie KORT_ANTWOORD in artikelen-extra.ts). Geen bedragen met de hand.
export const KORT_ANTWOORD_2: Record<string, string> = {
  "lood-of-loodvervanger": `Lood en loodvervanger doen hetzelfde werk: ze leiden het water bij een schoorsteen, muur of dakraam over de pannen. Loodvervanger is lichter, makkelijk te vormen en niet interessant voor dieven, en daarom gebruik ik het meestal. Echt lood kan op wens, en past vaak beter bij een monument of een dak waar al lood op ligt.`,
  "lekdetectie-daklek": `Bij een lek in je dak is een lekdetectiebedrijf meestal niet nodig. Het water komt van buiten, en een dakdekker vindt de plek vaak door op zolder het waterspoor te volgen en buiten naar de pannen, de nok, het lood en de pijpen te kijken. Meetapparatuur heeft vooral zin bij een lek in een leiding, of soms bij een plat dak met isolatie eronder.`,
};

// Extra vragen onder een bestaand artikel (zoals FAQ_ERBIJ in artikelen-extra.ts, dat te groot is geworden). Kennisbank [slug].astro voegt ze erbij.
export const FAQ_ERBIJ_2: Record<string, Artikel["faq"]> = {
  "wat-kost-dakgoot-schoonmaken": [
    { v: `Het blad komt van de bomen van de gemeente in mijn straat. Betaalt de gemeente het schoonmaken van mijn goot?`, a: `Meestal niet. Blad van straatbomen dat in je goot valt, zien de meeste gemeenten als iets wat bij wonen in een groene straat hoort, en het leegmaken van je goot blijft dan voor eigen rekening. Hangt er een tak van een gemeenteboom over je dak of tegen je goot, meld dat dan wel bij de gemeente, want die snoeit haar eigen bomen. Veel gemeenten zetten in de herfst ook bladkorven in de straat voor het blad dat je opveegt. Vraag het gerust na bij je gemeente. Onder straatbomen loont het om je goot te laten leegmaken als de bomen kaal zijn. Eén goot, bijvoorbeeld alleen de voorgoot, kost ${inclBtw("goot_reinigen")}. Voor beide goten hoor je vooraf de prijs.` },
  ],
};
