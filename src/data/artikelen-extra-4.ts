/**
 * Nieuwe kennisartikelen en korte antwoorden sinds 13-11-2026 (ronde 2).
 * artikelen-extra-3.ts zet ze achter ARTIKELEN_EXTRA_3 en in KORT_ANTWOORD_3.
 */
import type { Artikel } from "./artikelen";
import { inclBtw } from "./prijzen";

export const ARTIKELEN_EXTRA_4: Artikel[] = [
  {
    slug: `dakgoot-lekt-na-schoonmaken`,
    datum: `2026-11-13`,
    titel: `Lekt je dakgoot sinds hij is schoongemaakt?`,
    h1: `Dakgoot lekt sinds hij is schoongemaakt: hoe kan dat en wat doe je?`,
    metaTitle: `Dakgoot lekt na het schoonmaken? | Spoed Dak Service`,
    metaDescription: `Net leeggemaakt en nu druppelt je goot? Vaak hield het vuil een oud gaatje dicht, of is er een naad of beugel geraakt. Zo zie je wat het is.`,
    intro: `Je goot is net leeggemaakt, en bij de eerste flinke bui druppelt hij ineens op een plek waar je nooit iets zag. Dat is vervelend, maar het gebeurt geregeld, en meestal is het goed op te lossen. Hieronder lees je hoe het kan, hoe je ziet wat het is en wat je doet.`,
    secties: [
      { kop: `Druppelt het nu?`, tekst: [
        `Valt de druppel buiten op de stoep of het terras, zet er dan een bak onder, zodat er bij vorst geen plek ijs ligt. Komt het water binnen, bovenin de muur of langs een kozijn op de bovenverdieping, wacht er dan niet mee: kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet. Ga niet zelf met een ladder tegen de goot staan om te kijken.`,
      ] },
      { kop: `Het vuil hield een oud lek dicht`, tekst: [
        `Dat is vaak de reden. Een goot die lang vol zat, heeft onderin een laag van blad, mos, zand en slib. Zit er een kleine scheur in een naad, een gaatje in dun zink of een losse verbinding, dan houdt dat slib het lek een tijd dicht. Haal je het vuil weg, dan komt het lek weer vrij. Het was er dus al, je zag het alleen niet. Bij een zinken goot zit het dan meestal bij een naad of een hoek, bij een kunststof goot bij een verbinding met een rubber.`,
      ] },
      { kop: `Of er is bij het schoonmaken iets geraakt`, tekst: [
        `Een ladder tegen de goot. Staat de ladder tegen de goot in plaats van tegen de muur, dan kan een beugel verbuigen of een stuk goot uit zijn beugel schieten. Dan gaat een verbinding open, of hangt de goot op die plek lager en loopt hij over de achterrand.`,
        `Schrapen in een oude goot. Met een schep of troffel over dun zink of over een gelijmde naad schrapen kan een zwakke plek openmaken.`,
        `De uitloop naar de regenpijp. Is er in de uitloop geprikt, of is een rooster eruit gehaald en niet goed teruggezet, dan zit de uitloop soms net niet meer goed in de pijp. Dan druppelt het precies daar. Zie <a href="/kennisbank/dakgoot-lekt-bij-regenpijp/">dakgoot lekt bij de regenpijp</a>.`,
      ] },
      { kop: `Of het was spoelwater`, tekst: [
        `Is de goot met water of met een hogedrukspuit nagespoeld, dan kan er water achter de goot of onder de onderste pannen zijn gespoten. Dat geeft één keer een natte streep of een natte plek, en droogt daarna op. Wordt het bij de volgende bui weer nat, dan is het wel een lek.`,
      ] },
      { kop: `Zo zie je wat het is`, tekst: [
        `Kijk tijdens of vlak na een bui vanaf de straat of vanuit een raam. Druppelt het steeds op één vaste plek onder de goot, dan zit het meestal in een naad, een hoek of een verbinding. Druppelt het vlak bij de regenpijp, dan zit het in de uitloop. Loopt het water over de rand of langs de gevel terwijl de goot leeg is, dan hangt hij waarschijnlijk niet meer goed op afschot. Lees dan <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>. Maak een foto of een kort filmpje van de plek, dat zegt vaak meer dan een lange uitleg.`,
      ] },
      { kop: `Wie lost het op?`, tekst: [
        `Is de goot net door iemand anders schoongemaakt en is er volgens jou iets geraakt, meld het dan eerst bij die persoon of dat bedrijf, met je foto erbij. Vaak lost die het zelf op. Was het lek er al en kwam het alleen vrij, dan is het gewoon onderhoud aan je goot.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst waar het water precies uit de goot komt. Een lekke naad in een zinken goot soldeer ik opnieuw, zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a>. Is het zink op meer plekken dun, dan kan de goot vaak van binnen gecoat worden. Bij een kunststof goot vervang ik de verbinding of het hoekstuk dat lekt. Een verbogen beugel zet ik recht of vervang ik, en daarna hangt de goot weer op afschot naar de regenpijp. Is de goot op, dan zeg ik dat eerlijk. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er nodig is: een beugel rechtzetten is iets anders dan een naad solderen of een stuk goot vervangen. Stuur een foto van de plek waar het druppelt en van de goot vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Mijn goot lekt sinds hij is leeggemaakt. Is hij dan kapot gemaakt?`, a: `Niet altijd. Vaak zat er al een klein lek in een naad of verbinding, en hield het vuil dat dicht. Is er wel een beugel verbogen of een stuk goot uit zijn beugel geschoven, dan zie je dat meestal vanaf de straat: de goot hangt op die plek lager of staat scheef. Maak er een foto van.` },
      { v: `Is het spoed als mijn goot lekt?`, a: `Meestal niet, zolang het water buiten langs de gevel naar beneden valt. Komt het binnen, bovenin de muur of langs een kozijn, of druppelt het boven een voordeur waar het bij vorst glad wordt, laat het dan snel maken.` },
      { v: `Kan ik het gaatje zelf dichtkitten?`, a: `Liever niet. Kit hecht slecht op een natte of vuile goot, en moet de naad later gesoldeerd worden, dan moet de kit er eerst weer uit. Zet tot die tijd een bak onder de druppel. Wat je verder tijdelijk kunt doen, lees je in het artikel over een lekkende dakgoot tijdelijk oplossen.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel (zie KORT_ANTWOORD in artikelen-extra.ts). Geen bedragen met de hand.
export const KORT_ANTWOORD_4: Record<string, string> = {
  "dakgoot-lekt-na-schoonmaken": `Lekt je goot sinds hij is leeggemaakt, dan zat er vaak al een klein lek in een naad, een hoek of een verbinding, en hield het vuil dat dicht. Het kan ook zijn dat er bij het werk een beugel is verbogen, of dat de uitloop niet meer goed in de regenpijp zit. Kijk tijdens een bui waar het precies druppelt en maak er een foto van.`,
};
