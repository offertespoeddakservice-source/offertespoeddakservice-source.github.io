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
  {
    slug: `dak-fluit-bij-harde-wind`,
    datum: `2026-11-13`,
    titel: `Fluit of giert het op je zolder bij wind?`,
    h1: `Fluitend of gierend geluid op zolder bij harde wind: waar komt het vandaan?`,
    metaTitle: `Dak fluit of giert bij harde wind? | Spoed Dak Service`,
    metaDescription: `Gefluit of gegier op zolder bij storm? Vaak waait de wind langs een kier bij de nok, een pan, een pijp of de schoorsteen. Zo vind je het en zie je of het erg is.`,
    intro: `Het stormt, en ergens boven je klinkt een hoog gefluit of een laag gegier. Getik of geklapper wijst meestal op iets wat los zit. Gefluit komt van wind die met kracht door een smalle opening blaast. Vaak is dat onschuldig, maar soms wijst het op een kier waar bij de volgende bui ook regen of stuifsneeuw door kan komen. Hieronder lees je waar het meestal vandaan komt, hoe je het vindt en wanneer je er iets aan laat doen.`,
    secties: [
      { kop: `Eerst dit`, tekst: [
        `Ga bij harde wind niet het dak op en zet geen ladder tegen de gevel. Zoeken kan prima vanaf zolder, en als het weer rustig is ook vanaf de straat. Hoor je behalve gefluit ook getik of geklapper, lees dan ook <a href="/kennisbank/dakpannen-klapperen-bij-wind/">dakpannen klapperen bij harde wind</a>.`,
      ] },
      { kop: `Waar het meestal vandaan komt`, tekst: [
        `De nok. De opening onder de nokvorsten hoort dicht te zijn, met specie of met een strook onder de vorsten. Is de specie verbrokkeld of zit een vorst los, dan blaast de wind door die kier. Je hoort het dan helemaal bovenin, over de hele lengte van het dak of op één plek. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Een pan die niet goed sluit. Ligt een pan een stukje open, bijvoorbeeld na een storm of na werk aan zonnepanelen, dan fluit de wind door de kier eronder. Op zolder zie je daar soms daglicht. Zie <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a>.`,
        `Een ventilatiepan of een pijp door het dak. Een ventilatiepan heeft een opening, en de pijp van de riolering of de afzuiging staat bovenaan open. Waait de wind er schuin langs, dan kan dat fluiten, net als wanneer je over een fles blaast. Dat is meestal geen probleem. Zit het kapje op de pijp los of scheef, dan hoor je het harder en kan er ook regen in. Zie <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
        `De schoorsteen. Een open schoorsteenkanaal giert bij harde wind, zeker als je de schoorsteen niet meer gebruikt. Dat is op zich gewoon. Valt er ook regen in, dan zie je na een tijd vocht op de schoorsteen binnen. Lees <a href="/kennisbank/schoorsteen-afdekken/">schoorsteen afdekken</a>.`,
        `Een dakraam. Sluit het raam niet helemaal of is een rubber uitgedroogd, dan fluit het langs de rand. Het raam en de rubbers zijn werk voor de leverancier of een glaszetter. De aansluiting van het raam op het dak is werk voor mij. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `Een scheur in de folie. Op een dak met folie onder de pannen kan een losse of gescheurde flap bij wind trillen en zoemen. Dat hoor je vooral op zolder, dicht bij die plek. Zie <a href="/kennisbank/dakfolie-kapot/">dakfolie kapot</a>.`,
      ] },
      { kop: `Zo vind je waar het zit`, tekst: [
        `Ga tijdens de wind met een zaklamp op zolder staan en luister waar het geluid het hardst is. Houd de rug van je hand bij de pannen, de nok en de rand van een dakraam: waar het fluit, voel je vaak tocht. Kijk ook of je ergens daglicht ziet. Is het weer rustig, kijk dan vanaf de straat met de zoom van je telefoon naar de nok, de kapjes op de pijpen en de schoorsteen. Maak een foto van wat je ziet en schrijf erbij uit welke hoek de wind kwam.`,
      ] },
      { kop: `Wanneer het erg is`, tekst: [
        `Gefluit uit een ventilatiepan of een open pijp is meestal gewoon en hoeft niet weg. Laat het wel nakijken als je op zolder tocht of daglicht ziet bij de nok of tussen de pannen, als er na een bui een natte plek is, als je na een sneeuwbui sneeuw op zolder vindt of als het geluid er pas sinds een storm is. Waar de wind doorheen komt, kan bij de volgende bui ook regen komen. Lees ook <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Prop geen doeken of isolatie in een kier of in een ventilatiepan. Dat houdt vocht vast, en een ventilatiepan heeft zijn opening juist nodig. Plak ook geen tape op de buitenkant van een dakraam of een pijp, en ga bij wind niet het dak op.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik zoek eerst waar de wind naar binnen komt. Een losse nokvorst zet ik weer vast, en is de specie onder de nok op, dan smeer ik de vorsten opnieuw aan met dakmortel. Een pan die niet goed sluit, leg ik terug in de sluiting of vervang ik door een die past. Zit er een kapje los op een pijp door het dak, dan zet ik dat vast of vervang ik het. Zit het in het dakraam zelf, dan zeg ik dat eerlijk. Zie <a href="/diensten/dakreparatie/">dakreparatie</a> en <a href="/diensten/nokvorsten-vervangen/">nokvorsten repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een losse pan of nokvorst vastzetten valt meestal onder een kleine reparatie: ${inclBtw('dakpan')}. Moeten de nokvorsten opnieuw worden aangesmeerd met dakmortel, dan kost dat ${inclBtw('nok_repareren')}. Stuur een foto van je dak vanaf de straat en vertel waar je het geluid hoort, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Is gefluit op mijn dak bij storm gevaarlijk?`, a: `Meestal niet. Het geluid zelf doet niets, maar het is wel een teken dat de wind ergens door een kier blaast. Voel je tocht of zie je daglicht bij de nok of tussen de pannen, of wordt het na een bui nat, laat het dan nakijken voordat de volgende storm komt.` },
      { v: `Het giert in mijn schoorsteen bij harde wind. Moet daar iets aan gebeuren?`, a: `Bij een open kanaal is dat gewoon. Gebruik je de schoorsteen niet meer en valt er ook regen in, dan houdt een kap of afdekplaat de regen eruit, en vaak wordt het geluid dan ook minder. Gebruik je de schoorsteen nog wel, vraag dan eerst aan je schoorsteenveger of installateur welke kap erop mag.` },
      { v: `Ik hoor het fluiten alleen bij wind uit één richting. Wat zegt dat?`, a: `Dat helpt bij het zoeken. De kier zit dan meestal aan de kant waar de wind tegenaan blaast, of bij de nok, waar de wind over het dak trekt. Noteer de windrichting en waar je het geluid hoort, en stuur dat mee met een foto van je dak vanaf de straat.` },
    ],
  },
  {
    slug: `goot-schoonmaken-glazenwasser-of-dakdekker`,
    datum: `2026-11-13`,
    titel: `Goot schoonmaken: glazenwasser of dakdekker?`,
    h1: `Je dakgoot laten schoonmaken: door de glazenwasser of door een dakdekker?`,
    metaTitle: `Dakgoot legen: glazenwasser of dakdekker? | Spoed Dak Service`,
    metaDescription: `Veel glazenwassers maken in het najaar ook goten schoon. Wanneer dat prima is, wanneer je beter een dakdekker vraagt en wat je bij allebei vooraf navraagt.`,
    intro: `In het najaar bieden veel glazenwassers aan om ook je dakgoot leeg te maken. Dat is handig, want ze komen toch al langs. Soms is dat de beste keus, en soms juist niet. Het verschil zit niet in het leegmaken zelf, maar in wat er gebeurt als er meer aan de hand is. Hieronder lees je wanneer de glazenwasser prima is, wanneer een dakdekker slimmer is en wat je bij allebei vooraf vraagt.`,
    secties: [
      { kop: `Wanneer de glazenwasser prima is`, tekst: [
        `Zit je goot alleen vol blad, kun je er goed bij en heb je geen last van lekkage of een natte muur? Dan maakt het weinig uit wie hem leegmaakt, zolang het netjes gebeurt en de uitloop naar de regenpijp ook vrij wordt gemaakt. Sommige glazenwassers werken met een ladder, andere met een lange stok of zuigbuis vanaf de grond.`,
      ] },
      { kop: `Wanneer een dakdekker slimmer is`, tekst: [
        `Druppelt je goot op een vaste plek, ook als hij leeg is, of loopt het water achter de goot langs je gevel? Dan is leegmaken alleen niet genoeg. Een dakdekker kan in dezelfde keer zien of een naad lek is, of de goot nog op afschot hangt en of het water van de pannen nog in de goot valt. Lees ook <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a> en <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
        `Ligt er meer dan blad in de goot, zoals brokjes specie, een scherf van een pan of veel zand? Dan zit er boven de goot vaak iets los. Lees <a href="/kennisbank/zand-in-dakgoot/">zand of korrels in je dakgoot</a>.`,
        `Heb je een bakgoot achter een houten lijst, een kilgoot tussen twee daken of een goot vlak onder zonnepanelen? Daar kom je vanaf de grond lastig bij, en een lek komt daar eerder binnen dan buiten. Lees <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a> en <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Wat je bij allebei vooraf vraagt`, tekst: [
        `Wordt de uitloop naar de regenpijp ook vrijgemaakt, of alleen de goot? Gaat de troep mee, of blijft hij in de tuin liggen? Hoor je het, met een foto, als er iets kapot blijkt? Komt de ladder tegen de muur en niet tegen de goot? Is hij verzekerd als er iets misgaat? En wat kost het voor jouw huis: voor één goot of voor alle goten? Met die antwoorden vergelijk je eerlijk dezelfde klus.`,
      ] },
      { kop: `Lekt je goot sinds hij is leeggemaakt?`, tekst: [
        `Soms druppelt een goot pas na het schoonmaken, omdat het vuil een oud lek dichthield of omdat er een beugel is verbogen. Hoe dat zit, lees je in <a href="/kennisbank/dakgoot-lekt-na-schoonmaken/">dakgoot lekt sinds hij is schoongemaakt</a>.`,
      ] },
      { kop: `Hoe ik het doe`, tekst: [
        `Ik werk vanaf de ladder langs de goot, maak hem leeg en maak de uitloop naar de regenpijp vrij. De troep gaat mee. Ondertussen kijk ik naar de goot zelf en naar het dak erboven: de onderste pannen, de nok en het lood. Zie ik iets wat niet goed is, dan laat ik het je zien met een foto, en hoor je vooraf wat het kost om het mee te nemen. Jij beslist of het in dezelfde keer gebeurt. Zie <a href="/diensten/goten-reinigen/">dakgoot schoonmaken</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Eén goot leegmaken, bijvoorbeeld alleen de voorgoot, kost bij mij ${inclBtw('goot_reinigen')}, met de uitloop vrij en de troep mee. Voor beide goten of een groter huis hoor je vooraf de prijs. Stuur een foto van je huis vanaf de straat via WhatsApp, dan kan ik die vaak meteen noemen.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Is een glazenwasser goedkoper dan een dakdekker voor de goot?`, a: `Dat verschilt per bedrijf en per huis. Vraag bij allebei vooraf wat het kost voor jouw goten en wat erbij hoort, zoals de uitloop vrijmaken en de troep meenemen. Vergelijk dan dezelfde klus.` },
      { v: `Mijn glazenwasser zag iets kapot aan mijn goot of dak. Kun jij ernaar kijken?`, a: `Ja. Vraag of hij er een foto van heeft gemaakt, of maak er zelf een vanaf de straat, en stuur die via WhatsApp. Dan zeg ik eerlijk wat ik zie en hoor je vooraf wat het kost.` },
      { v: `Kun je het leegmaken van de goot combineren met ander werk aan het dak?`, a: `Ja. Ligt er een pan scheef of zit de nok los, dan kan dat meestal in dezelfde keer, als ik het passende materiaal bij me heb. Je hoort eerst wat het kost, en jij beslist.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel (zie KORT_ANTWOORD in artikelen-extra.ts). Geen bedragen met de hand.
export const KORT_ANTWOORD_4: Record<string, string> = {
  "dakgoot-lekt-na-schoonmaken": `Lekt je goot sinds hij is leeggemaakt, dan zat er vaak al een klein lek in een naad, een hoek of een verbinding, en hield het vuil dat dicht. Het kan ook zijn dat er bij het werk een beugel is verbogen, of dat de uitloop niet meer goed in de regenpijp zit. Kijk tijdens een bui waar het precies druppelt en maak er een foto van.`,
  "dak-fluit-bij-harde-wind": `Gefluit of gegier op zolder bij harde wind komt van wind die door een smalle opening blaast: een kier onder de nokvorsten, een pan die niet goed sluit, een ventilatiepan, het kapje op een pijp, een open schoorsteen of de rand van een dakraam. Een fluitende ventilatiepan is meestal gewoon. Voel je tocht of zie je daglicht bij de nok of tussen de pannen, laat het dan nakijken.`,
  "goot-schoonmaken-glazenwasser-of-dakdekker": `Zit je goot alleen vol blad en lekt hij niet, dan kan de glazenwasser hem prima leegmaken, zolang de uitloop naar de regenpijp ook vrij wordt gemaakt. Druppelt de goot, loopt het water achter de goot langs de gevel, ligt er specie of een stuk pan in, of gaat het om een bakgoot of kilgoot, dan is een dakdekker slimmer: die kan het in dezelfde keer nakijken en repareren.`,
};
