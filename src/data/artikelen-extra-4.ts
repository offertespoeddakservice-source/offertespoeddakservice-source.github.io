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
  {
    slug: `lekt-sinds-nieuw-dakraam`,
    datum: `2026-11-13`,
    titel: `Lekt het sinds je nieuwe dakraam?`,
    h1: `Lekt het sinds er een nieuw dakraam in je dak zit? Hier zit het meestal`,
    metaTitle: `Nieuw dakraam lekt: waar zit het? | Spoed Dak Service`,
    metaDescription: `Lekt het sinds er een nieuw dakraam in je pannendak zit? Vaak zit het in het gootstuk, de folie rond het raam of een pan die niet goed terugligt. Zo zie je het.`,
    intro: `Je hebt net een nieuw dakraam laten plaatsen, of een oud raam laten vervangen, en bij de eerste flinke bui zie je een natte plek naast of onder het raam. Dat is balen, maar het gebeurt vaker dan je denkt. Het glas zelf is bijna nooit het probleem. Meestal zit het in hoe het raam op het dak is aangesloten. Hieronder lees je waar het meestal zit, wie het oplost en wat je tot die tijd doet.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel, leg er een handdoek in zodat het niet spat, en haal spullen weg. Doe het raam dicht en zet het niet op de ventilatiestand zolang het regent. Ga niet zelf het dak op en hang niet uit het raam om te kijken. Maak foto's van de natte plek en van het raam van binnen. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Eerst bellen met wie het raam heeft geplaatst`, tekst: [
        `Is het raam pas geplaatst, neem dan eerst contact op met het bedrijf of de vakman die het heeft gedaan, en stuur je foto's mee. Een lek dat kort na het plaatsen begint, hoort in de regel bij dat werk, en vaak lost die het zelf op. Schrijf op wanneer het voor het eerst nat werd en bij wat voor weer. Is het raam al langer geleden geplaatst, of komt het daar niet goed, dan kijk ik ernaar.`,
      ] },
      { kop: `Waar het meestal zit`, tekst: [
        `Het gootstuk. Rond een dakraam in een pannendak ligt een set stroken, het gootstuk, die het water om het raam heen leidt. Bovenaan hoort die onder de pannen te liggen en onderaan over de pannen. Is een stuk niet goed aangesloten, of ligt de onderste flap niet plat op de pannen, dan loopt het water eronder naar binnen.`,
        `De folie rond het raam. Ligt er folie onder je pannen, dan is daar voor het raam een opening in gemaakt. Boven het raam hoort die folie zo te liggen dat het water dat onder de pannen komt, opzij om het raam heen loopt. Is dat niet goed gedaan, dan loopt dat water langs de bovenkant van het kozijn naar binnen. Binnen zie je dat als nat langs de bovenkant of de zijkanten van de betimmering rond het raam.`,
        `De pannen naast en boven het raam. Voor het plaatsen zijn er pannen weggehaald, ingekort of opnieuw gelegd. Ligt er een pan net niet goed in de sluiting, of sluit een ingekorte pan niet goed aan op het gootstuk, dan waait de regen er bij harde wind onder. Soms is er bij het werk ook een pan gebroken, op een plek die je van beneden niet ziet.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Zie je vooral op koude ochtenden druppels op het glas en water op de onderkant van het kozijn, ook als het niet heeft geregend, dan is het vaak condens. Bij een nieuw raam in een pas verbouwde zolder zit er de eerste tijd ook nog veel vocht in de lucht. Lucht vaker, laat de ventilatieklep open en kijk of het minder wordt. Twijfel je, lees dan <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Zo zie je waar het zit`, tekst: [
        `Kijk bij de volgende bui waar het precies nat wordt. Nat bovenaan het raam wijst vaak naar de folie of het gootstuk boven het raam. Nat langs één zijkant wijst naar de aansluiting of de pannen aan die kant, zeker als het vooral lekt bij wind uit die richting. Nat onderaan, onder de vensterbank, kan ook van het gootstuk onder het raam komen. Lekt het alleen als het raam open of op de ventilatiestand staat, dan zit het in het raam zelf. Maak een foto van binnen, en als het lukt een van het raam vanaf de straat, met de zoom van je telefoon.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Spuit geen kit rond het raam aan de buitenkant en plak er geen tape over. Daarmee dek je vaak de plek af waar het water weg moet, en een vakman moet het later weer weghalen. Ga ook niet vanuit het raam aan de pannen ernaast trekken of duwen.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk naar de aansluiting van het raam op je dak: het gootstuk, de stroken langs de zijkanten, de pannen eromheen en, als ik erbij kan, de folie boven het raam. Ligt een pan niet goed, dan leg ik hem terug of vervang ik hem door een die past. Zit een strook los of verkeerd, dan maak ik die aansluiting weer dicht. Zit het in het raam zelf, zoals een rubber, het scharnier of het glas, dan zeg ik dat eerlijk, want dat is werk voor de leverancier van het raam of een glaszetter. Zie ook <a href="/diensten/dakraam-lekkage/">lekkend dakraam repareren</a> en <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er nodig is. Ligt er alleen een pan naast het raam niet goed, dan valt dat meestal onder een kleine reparatie: ${inclBtw("dakpan")}. Moet de aansluiting van het raam opnieuw, dan hoor je de prijs als ik foto's heb gezien of ben komen kijken. Je weet altijd vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: lekkend dakraam repareren`, href: `/diensten/dakraam-lekkage/` },
    faq: [
      { v: `Het dakraam is net geplaatst en lekt al. Bel ik jou of de installateur?`, a: `Eerst de installateur of het bedrijf dat het raam heeft geplaatst. Een lek kort na het plaatsen hoort in de regel bij dat werk. Stuur foto's van de natte plek en het raam mee en schrijf op bij welk weer het nat werd. Komt het daar niet goed, of is het raam al jaren oud, stuur mij dan die foto's via WhatsApp.` },
      { v: `Het lekt alleen als het raam op de ventilatiestand staat. Ligt het aan het dak?`, a: `Meestal niet. Komt er alleen water binnen als het raam open of op de ventilatiestand staat, dan zit het in het raam zelf: de klep, een rubber of hoe het raam sluit. Doe het raam bij regen dicht en vraag het na bij de leverancier van het raam. Wordt het ook nat als het raam dicht zit, dan zit het eerder in de aansluiting op het dak.` },
      { v: `Kan ik de kier rond mijn nieuwe dakraam zelf dichtkitten?`, a: `Liever niet. Rond een dakraam zit de aansluiting juist zo dat het water er langs kan weglopen. Kit je daar iets dicht, dan blijft het water op de verkeerde plek staan, en moet de kit er later weer af. Zet een bak onder de druppel en stuur een foto, dan zeg ik wat ik zie.` },
    ],
  },
  {
    slug: `schuin-dak-aanbouw-lekt`,
    datum: `2026-11-13`,
    titel: `Lekt het schuine dakje van je aanbouw?`,
    h1: `Schuin dakje van je aanbouw lekt bij de muur: waar zit het?`,
    metaTitle: `Schuin dak aanbouw lekt bij de muur? | Spoed Dak Service`,
    metaDescription: `Heeft je aanbouw, keuken of bijkeuken een schuin dakje met pannen tegen het huis? Lekt het bovenaan bij de muur, dan zit het vaak in de loodslab. Zo zie je het.`,
    intro: `Niet elke aanbouw heeft een plat dak. Bij veel huizen staat achter een keuken, bijkeuken of berging met een schuin dakje van pannen, dat met de hoge kant tegen de gevel van het huis ligt. Zo'n dak met één schuin vlak heet ook wel een lessenaarsdak. Lekt het daar, dan zie je binnen meestal een natte plek bovenaan, waar het dakje tegen de muur komt. Hieronder lees je hoe zo'n dakje in elkaar zit, waar het meestal lekt en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel en schuif spullen weg van de natte muur. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die ruimte uit. Klim niet op het dakje om te kijken: de pannen breken snel onder je gewicht en zijn glad als ze nat zijn. Maak een foto van de natte plek. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit zo'n dakje in elkaar`, tekst: [
        `De pannen liggen op latten, van de lage kant boven de goot tot de hoge kant tegen de muur van het huis. Daar, bovenaan, ligt een strook lood of loodvervanger: de loodslab. De bovenrand zit in een voeg van de muur, de onderkant ligt over de bovenste rij pannen. Al het water dat langs de gevel naar beneden loopt, gaat zo over de pannen in plaats van erachter. Aan de zijkant van het dakje zit soms ook zo'n strook, als het dakje tegen een muurtje of de aanbouw van de buren ligt.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `De loodslab. Na jaren komt de bovenrand uit de voeg, scheurt de strook in een hoek of krult hij omhoog door de wind. Dan loopt het regenwater van de gevel achter de strook langs naar binnen. Binnen zie je dat bovenaan, tegen de muur, vaak over een flink stuk.`,
        `De bovenste rij pannen. Die pannen zijn vaak ingekort om onder de strook te passen, en een korte pan ligt minder vast. Schuift er een een stukje naar beneden, dan ontstaat er een kier waar de regen onder komt.`,
        `Een dakje dat erg flauw ligt. Pannen zijn gemaakt voor een dak met genoeg helling. Ligt het dakje vlak, dan blijft het water langer op de pannen staan en waait het bij harde wind er makkelijker onder, zeker als er geen folie onder de pannen ligt. Dan lekt het vaak midden op het dakje, en vooral bij wind en regen tegelijk.`,
        `De goot aan de onderkant. Zit die vol blad, dan staat het water terug onder de onderste rij pannen en loopt het aan de lage kant naar binnen, of langs de muur van de aanbouw naar beneden.`,
      ] },
      { kop: `Of komt het water door de muur?`, tekst: [
        `Soms is het dakje zelf dicht. De gevel boven het dakje neemt bij slagregen water op, en dat zakt in de muur naar beneden tot het op de plek van het dakje naar buiten of naar binnen komt. Je merkt dat doordat het vooral nat wordt als de regen hard tegen die gevel slaat, en soms pas een dag later. Zit het in de muur zelf, dan zeg ik dat eerlijk, zodat je daar iemand anders voor kunt vragen. Heeft je aanbouw een plat dak, lees dan <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Zo vind je waar het zit`, tekst: [
        `Kijk eerst binnen waar de natte plek zit. Bovenaan, tegen de muur, wijst vaak naar de loodslab of de muur erboven. Midden op het dakje wijst naar een pan. Onderaan, aan de kant van de goot, naar de goot of de onderste pannen. Vaak kun je het dakje goed zien vanuit een raam op de verdieping erboven. Maak daar een foto van, met de zoom van je telefoon, en let op een strook die van de muur af staat, een pan die scheef ligt of blad in de goot.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit over de rand van de loodslab of tussen de pannen. Dat houdt een paar maanden, en daarna loopt het water achter de kit langs, terwijl je het lek van buiten niet meer ziet. Ga ook niet vanaf een ladder op de pannen leunen om erbij te komen.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het nat is, en daarna buiten naar de strook tegen de muur, de bovenste rij pannen, de zijkanten en de goot. Zit de loodslab los, dan zet ik hem weer vast in de voeg. Is hij gescheurd of op, dan komt er een nieuwe strook, meestal van loodvervanger en op wens van echt lood. Een pan die geschoven of gebroken is, leg ik terug of vervang ik door een die past, en de goot maak ik leeg als dat nodig is. Zie <a href="/diensten/lood-vervangen/">lood vervangen</a> en <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een losse of gebroken pan terugleggen of vervangen valt meestal onder een kleine reparatie: ${inclBtw("dakpan")}. Moet de strook tegen de muur vastgezet of vervangen worden, dan hangt de prijs af van hoe lang die strook is en hoe goed ik erbij kan. Stuur een foto van het dakje en van de natte plek binnen, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: lood vervangen`, href: `/diensten/lood-vervangen/` },
    faq: [
      { v: `Kan ik op het dakje van mijn aanbouw gaan staan om te kijken?`, a: `Liever niet. Pannen zijn niet gemaakt om op te lopen en breken snel, zeker op een klein dakje. Als ze nat zijn, glijd je er zo af. Kijk vanuit een raam op de verdieping erboven of vanaf de grond, en maak daar een foto.` },
      { v: `Het lekt alleen als de regen hard tegen de achtergevel slaat. Wat zegt dat?`, a: `Dan zit het vaak in de strook tegen de muur, of in de muur erboven. Bij slagregen loopt er veel water langs de gevel naar beneden, en dat komt achter een strook die los staat. Het kan ook zijn dat de muur zelf water opneemt. Kijk na zo'n bui of het nat is over de hele breedte tegen de muur of op één plek, en stuur me daar een foto van.` },
      { v: `Moet het hele dakje eraf als het lekt?`, a: `Meestal niet. Vaak zit het lek op één plek: de strook tegen de muur, een pan of de goot. Dan repareer ik alleen die plek. Zijn de pannen op veel plekken gebroken of poreus, of zijn de latten eronder rot, dan zeg ik eerlijk dat een groter stuk opnieuw slimmer is. Je hoort vooraf wat het kost.` },
    ],
  },
  {
    slug: `dak-lekt-boven-en-benedenwoning`,
    datum: `2026-11-13`,
    titel: `Lekt het dak van je boven- of benedenwoning?`,
    h1: `Dak lekt bij een boven- en benedenwoning: wie regelt en betaalt de reparatie?`,
    metaTitle: `Dak lekt bij boven- en benedenwoning? | Spoed Dak Service`,
    metaDescription: `Woon je in een bovenwoning of een klein appartementengebouw en lekt het dak? Zo beperk je de schade, zo zit het meestal met de VvE en zo regel je de reparatie.`,
    intro: `Woon je boven of beneden in een huis dat in twee of drie woningen is verdeeld, of in een klein appartementengebouw, en lekt het dak? Dan wil je niet alleen dat het droog wordt. Je wilt ook weten wie het regelt en wie het betaalt. Meestal is het dak van alle eigenaren samen, ook als het water alleen bij de bovenste woning binnenkomt. Hieronder lees je wat je meteen doet, hoe het meestal zit en hoe je de reparatie samen regelt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, leg er een handdoek in en haal spullen weg. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Maak foto's van de natte plek, van de schade en vanaf de straat van het dak, en noteer de datum. Woon je beneden en druppelt het bij jou, laat het de bovenburen dan meteen weten. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Van wie is het dak?`, tekst: [
        `Is een huis in appartementsrechten gesplitst, dan bestaat er een Vereniging van Eigenaars, ook als die nooit vergadert. Het dak hoort in de regel bij de delen die van alle eigenaren samen zijn. De kosten worden dan verdeeld zoals in de splitsingsakte staat, ook als het water alleen bij de bovenste woning binnenkomt. Wat er bij jullie precies geldt, staat in de splitsingsakte en het reglement. Heb je die niet meer, dan kun je de akte opvragen bij het Kadaster.`,
      ] },
      { kop: `Een kleine VvE die eigenlijk niets doet`, tekst: [
        `Bij een huis met twee of drie woningen is er vaak geen bestuur, geen spaarpot en geen vergadering. Dan regel je het samen. Stuur de andere eigenaren je foto's, vertel wat er aan de hand is en spreek af wie de dakdekker belt. Zet in een appje of mail wie welk deel betaalt. Dat voorkomt gedoe achteraf, en het helpt als je later bij de verzekering moet laten zien wat er is afgesproken.`,
      ] },
      { kop: `Huur je de woning?`, tekst: [
        `Dan meld je het lek bij je verhuurder, met je foto's erbij. Die regelt het verder met de VvE of de andere eigenaren. Wat je zelf doet en wat je van de verhuurder mag verwachten, lees je in <a href="/kennisbank/lekkage-huurhuis/">dak lekt in een huurhuis</a>.`,
      ] },
      { kop: `Komt het water wel van het dak?`, tekst: [
        `Woon je beneden en zit er nog een woning boven je, dan komt het water vaak niet van het dak, maar van een badkamer, een wc of een leiding van de bovenburen. Wordt het ook nat als het dagen droog is, of juist als er boven iemand doucht, dan heb je eerder een loodgieter nodig. Lees <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">lekkage: dakdekker of loodgieter?</a> en <a href="/kennisbank/lekkage-badkamer-plafond/">lekkage in het plafond onder de badkamer</a>.`,
      ] },
      { kop: `Waar het lek meestal zit`, tekst: [
        `Bij een ouder huis dat later in woningen is verdeeld, ligt er vaak een pannendak met een schoorsteen en soms een dakraam, en achter het huis een plat dak op een aanbouw. Een lek begint dan meestal bij het lood rond de schoorsteen, bij een pan die is gaan schuiven, bij de aansluiting van een dakraam of bij de afvoer en de rand van het platte dak. Bij een klein appartementengebouw met een plat dak kijk ik eerst naar de afvoer, de naden en de randen. Meer over zoeken lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik spreek af met wie me belt, en als het kan ook met de bewoner van de bovenste woning, want vaak moet ik op zolder of in die woning kijken waar het water binnenkomt. Ik zoek het lek en zeg eerlijk wat er nodig is, voordat ik iets doe. Na afloop krijg je foto's van wat ik aantrof en van wat ik heb gemaakt. Die kun je doorsturen naar de andere eigenaren, zodat iedereen ziet waar het om ging. Zie <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Moet ik zoeken waar het water binnenkomt en het lek dichtmaken, dan is het meestal een gerichte lekreparatie: ${inclBtw("daklekkage")}, inclusief materiaal. Je hoort vooraf wat het kost, zodat jullie samen kunnen afspreken wie welk deel betaalt. Spreek ook vooraf af op wiens naam de rekening komt.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Ik woon boven en alleen bij mij lekt het. Moet de benedenbuurman meebetalen?`, a: `Meestal wel. Is het huis gesplitst, dan is het dak in de regel van alle eigenaren samen, en worden de kosten verdeeld zoals in de splitsingsakte staat. Dat het water alleen bij jou binnenkomt, verandert daar meestal niets aan. Kijk voor de zekerheid in de akte en het reglement, en bespreek het met je buren voordat de reparatie begint.` },
      { v: `We hebben een VvE, maar die doet niets. Mag ik dan zelf een dakdekker bellen?`, a: `Lekt het nu, zorg dan eerst dat de schade niet groter wordt: vang het water op en laat het lek zo nodig tijdelijk dichtmaken. Laat de andere eigenaren meteen weten wat er is gebeurd, met foto's. Voor de echte reparatie is het verstandig om eerst samen af te spreken wat er gebeurt en wie welk deel betaalt. Wat jullie reglement daarover zegt, verschilt per gebouw.` },
      { v: `Betaalt de verzekering de schade in mijn woning?`, a: `Dat hangt af van de polis en van de oorzaak. Schade aan je eigen spullen valt meestal onder je eigen inboedelverzekering. Voor het gebouw heeft de VvE vaak een opstalverzekering. Een lek door slijtage of achterstallig onderhoud wordt meestal niet vergoed, schade door een storm vaker wel. Meer lees je in het artikel over daklekkage en je verzekering.` },
      { v: `Wie moet er thuis zijn als je komt?`, a: `Vaak moet ik op zolder of in de bovenste woning kijken waar het water binnenkomt. Spreek dus af dat de bewoner van die woning thuis is, of dat iemand anders me binnenlaat. Kan ik van buiten bij het lek en hebben we de prijs vooraf afgesproken, dan hoeft dat niet altijd.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel (zie KORT_ANTWOORD in artikelen-extra.ts). Geen bedragen met de hand.
export const KORT_ANTWOORD_4: Record<string, string> = {
  "dakgoot-lekt-na-schoonmaken": `Lekt je goot sinds hij is leeggemaakt, dan zat er vaak al een klein lek in een naad, een hoek of een verbinding, en hield het vuil dat dicht. Het kan ook zijn dat er bij het werk een beugel is verbogen, of dat de uitloop niet meer goed in de regenpijp zit. Kijk tijdens een bui waar het precies druppelt en maak er een foto van.`,
  "dak-fluit-bij-harde-wind": `Gefluit of gegier op zolder bij harde wind komt van wind die door een smalle opening blaast: een kier onder de nokvorsten, een pan die niet goed sluit, een ventilatiepan, het kapje op een pijp, een open schoorsteen of de rand van een dakraam. Een fluitende ventilatiepan is meestal gewoon. Voel je tocht of zie je daglicht bij de nok of tussen de pannen, laat het dan nakijken.`,
  "goot-schoonmaken-glazenwasser-of-dakdekker": `Zit je goot alleen vol blad en lekt hij niet, dan kan de glazenwasser hem prima leegmaken, zolang de uitloop naar de regenpijp ook vrij wordt gemaakt. Druppelt de goot, loopt het water achter de goot langs de gevel, ligt er specie of een stuk pan in, of gaat het om een bakgoot of kilgoot, dan is een dakdekker slimmer: die kan het in dezelfde keer nakijken en repareren.`,
  "lekt-sinds-nieuw-dakraam": `Lekt het sinds er een nieuw dakraam in je pannendak zit, dan zit het bijna nooit in het glas, maar in de aansluiting op het dak: het gootstuk rond het raam, de folie boven het raam of een pan ernaast die niet goed terugligt. Is het raam pas geplaatst, neem dan eerst contact op met wie het heeft geplaatst. Lekt het alleen als het raam op de ventilatiestand staat, dan zit het in het raam zelf.`,
  "schuin-dak-aanbouw-lekt": `Lekt het schuine pannendakje van je aanbouw, dan zit het meestal bovenaan: in de strook lood of loodvervanger die met de bovenrand in de muur zit en over de bovenste rij pannen valt. Ook een ingekorte bovenste pan die is gaan schuiven, een volle goot onderaan of een gevel die bij slagregen water doorlaat kan de oorzaak zijn. Vaak is het een reparatie op die ene plek.`,
  "dak-lekt-boven-en-benedenwoning": `Lekt het dak van een huis dat in een boven- en benedenwoning of een paar appartementen is verdeeld, dan is het dak meestal van alle eigenaren samen. De kosten worden dan in de regel verdeeld zoals in de splitsingsakte staat, ook als het water alleen bij de bovenste woning binnenkomt. Vang eerst het water op, maak foto's en spreek met de andere eigenaren af wie de dakdekker belt. Huur je, meld het dan bij je verhuurder.`,
  "mos-op-dak-verwijderen": `Mos op je dak houdt water vast. Op oudere pannen kan dat bij vorst schade geven, en mos dat bij een bui losspoelt, verstopt je goot en de uitloop naar de regenpijp. Laat het liever met de hand of met lage druk weghalen dan met een hogedrukreiniger, want die beschadigt de toplaag van de pannen. Daken ontmossen doe ik zelf niet, maar ik maak wel je goten leeg en vervang pannen die kapot zijn.`,
  "schoorsteen-vegen-hoe-vaak": `Stook je regelmatig hout, dan is één keer per jaar vegen het advies, het liefst voor het stookseizoen. Stook je weinig, dan kan het vaak minder vaak, maar kijk ook wat je verzekeraar in de polis vraagt. Vegen doe ik zelf niet, dat laat je doen door een erkende schoorsteenveger. Lekt het naast je schoorsteen, dan kijk ik wel naar het lood rondom.`,
  "plat-dak-onderhouden": `Kijk een of twee keer per jaar naar je platte dak, laat in de herfst en in het voorjaar, het liefst vanuit een raam boven. Let op of de afvoer vrij is, of er na een paar droge dagen nog een plas staat en of de naden, de rand en de strook tegen de muur nog dicht zitten. Laat blad en takken niet liggen en smeer geen kit op een plek die je niet vertrouwt.`,
};
