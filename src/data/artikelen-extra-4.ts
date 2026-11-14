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
  {
    slug: `lekt-sinds-iemand-op-dak`,
    datum: `2026-11-14`,
    titel: `Lekt het sinds er iemand op je dak was?`,
    h1: `Lekt het sinds er iemand op je dak is geweest? Hier zit het meestal`,
    metaTitle: `Lekt het sinds er iemand op je dak was? | Spoed Dak Service`,
    metaDescription: `Lekt het sinds de schoorsteenveger, een monteur of de schilder op je dak stond? Vaak is er een pan gebroken of verschoven. Zo zie je het en zo regel je het.`,
    intro: `De schoorsteenveger is langs geweest, er is een schotel of een kabel aangelegd, of de schilder heeft de windveren gedaan. En bij de eerste flinke bui daarna zie je een natte plek. Dat is vaak geen toeval: wie over een pannendak loopt, kan een pan breken of uit zijn sluiting duwen zonder dat te merken. Hieronder lees je waar het dan meestal zit, wat je vastlegt en wie het oplost.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, leg er een handdoek in en haal spullen weg. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op om te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom een pan zo makkelijk breekt`, tekst: [
        `Dakpannen zijn gemaakt om regen tegen te houden, niet om op te lopen. Stap je midden op een pan in plaats van op de plek waar hij op de lat rust, dan kan hij barsten. Zo'n barst zie je vanaf de straat bijna nooit. Een pan kan ook een stukje omhoog komen of uit de sluiting schuiven als er iemand overheen loopt, een ladder tegen het dak zet of een kabel onder de pan door trekt. Bij de volgende bui met wind loopt het water dan onder die pan door naar binnen.`,
      ] },
      { kop: `Wie er vaak op of aan je dak komt`, tekst: [
        `De schoorsteenveger. Veegt hij vanaf het dak, dan loopt hij naar de schoorsteen en staat hij een tijd naast de kap. Is het daarna nat naast de schoorsteen, kijk dan naar de pannen rond de voet en naar het lood. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.`,
        `Een monteur voor een schotel, antenne of kabel. Die zet een beugel op het dak of trekt een kabel onder een pan door naar binnen. Ligt die pan daarna niet meer goed, dan komt het water binnen op de plek waar de kabel het dak in gaat. Zie <a href="/kennisbank/lekkage-bij-schotel-of-antenne/">lekkage bij een schotel of antenne</a>.`,
        `Een installateur van zonnepanelen, een airco of een warmtepomp. Zie <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a> en <a href="/kennisbank/lekkage-warmtepomp-of-airco/">lekt het sinds de warmtepomp of airco?</a>`,
        `De schilder of de glazenwasser. Staat de ladder tegen de goot in plaats van tegen de muur, dan kan de goot verbuigen of de onderste rij pannen omhoog komen. Dan loopt het water bij een bui achter de goot langs of onder die pannen door. Zie <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
        `Jijzelf of de buurman, bijvoorbeeld om kerstverlichting op te hangen of een bal van het dak te halen. Een klemmetje dat onder een pan wordt geschoven, tilt die pan net een stukje op.`,
      ] },
      { kop: `Zo zie je of het daardoor komt`, tekst: [
        `Vergelijk de plek waar het nat is met de plek waar er gewerkt is. Is het nat naast de schoorsteen na het vegen, rond de plek waar een kabel binnenkomt of onder het stuk dak waar de ladder stond, dan is de kans groot dat het daar zit. Ga aan de overkant van de straat staan en kijk met de zoom van je telefoon of er een pan scheef ligt, hoger ligt dan de rest of een barst heeft. Op zolder zie je soms daglicht bij een pan die niet goed sluit. Bleef het daar altijd droog en lekt het nu ook bij gewone regen, dan is het meestal geen toeval.`,
      ] },
      { kop: `Wat je vastlegt`, tekst: [
        `Schrijf op wie er op je dak was, op welke dag, en wanneer je de natte plek voor het eerst zag. Maak foto's van de natte plek binnen en van je dak vanaf de straat. Bewaar de rekening of het appje met de afspraak. Daarmee kun je laten zien dat het lek na het werk is begonnen.`,
      ] },
      { kop: `Wie lost het op?`, tekst: [
        `Neem eerst contact op met wie er op je dak heeft gewerkt, en stuur je foto's mee. Is er bij het werk iets kapotgegaan, dan lost die het in de regel zelf op of meldt die het bij zijn verzekering. Komt het daar niet goed, of was het werk al lang geleden, dan kijk ik ernaar. Ik maak dan foto's van wat ik aantref, zodat je die kunt doorsturen.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik begin binnen bij de natte plek en kijk daarna buiten naar het stuk dak waar gewerkt is. Een gebroken pan vervang ik door een die past, een verschoven pan leg ik terug in de sluiting, en waar een kabel naar binnen gaat, zorg ik dat de pan er weer goed overheen ligt. Zit het lood rond de schoorsteen los, dan zet ik het weer vast. Zie <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a> en <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een gebroken of verschoven pan vervangen of terugleggen valt meestal onder een kleine reparatie: ${inclBtw("dakpan")}. Moet ik eerst zoeken waar het water binnenkomt, dan is het een lekreparatie: ${inclBtw("daklekkage")}, inclusief materiaal. Stuur een foto van de natte plek en van je dak vanaf de straat, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `De schoorsteenveger is geweest en nu lekt het naast de schoorsteen. Ligt het aan hem?`, a: `Dat kan, maar het hoeft niet. Het lood rond een schoorsteen kan ook toevallig nu op zijn, en dan valt het lek samen met het vegen. Laat hem je foto's zien en vraag of hij heeft gezien hoe het lood en de pannen erbij lagen. Daarna kan ik kijken of er een pan gebroken is of dat het lood los zit, en dat zeg ik eerlijk.` },
      { v: `Kan ik zien of er een pan gebroken is zonder het dak op te gaan?`, a: `Soms. Een pan die scheef ligt of hoger ligt dan de rest, zie je vanaf de overkant van de straat met de zoom van je telefoon. Een barst zie je vaak alleen van dichtbij, of op zolder als er daglicht door komt. Ga niet zelf het dak op, ook niet even.` },
      { v: `Moet de vakman die op mijn dak was de reparatie betalen?`, a: `Is er bij zijn werk iets kapotgegaan, dan ligt dat in de regel bij hem. Daarom helpt het als je kunt laten zien wanneer hij er was en wanneer het begon te lekken. Kom je er samen niet uit, vraag dan bij je eigen verzekering wat zij kunnen doen.` },
    ],
  },
  {
    slug: `dakpan-in-tuin-gevonden`,
    datum: `2026-11-14`,
    titel: `Dakpan in je tuin of op de stoep gevonden?`,
    h1: `Een dakpan in je tuin of op de stoep: waar komt hij vandaan en is het spoed?`,
    metaTitle: `Dakpan in je tuin gevonden: wat nu? | Spoed Dak Service`,
    metaDescription: `Ligt er na de wind een dakpan of een stuk pan in je tuin of op de stoep? Zo zie je van welk dak hij komt, of er nu een gat in zit en wat je meteen doet.`,
    intro: `Je loopt na een winderige nacht de tuin in, of je ziet op de stoep een dakpan of een stuk pan liggen. Dan wil je twee dingen weten: komt hij van mijn dak, en regent het nu binnen? Hieronder lees je hoe je dat in een paar minuten uitzoekt, wat je meteen doet en wanneer het spoed is.`,
    secties: [
      { kop: `Eerst veilig`, tekst: [
        `Blijf uit de buurt van de gevel zolang het nog hard waait, want waar één pan losliet, kan een tweede volgen. Houd kinderen en huisdieren weg en leg de pan of de stukken opzij, maar gooi ze niet weg. Ga niet op een ladder of het dak om te kijken.`,
      ] },
      { kop: `Welk stuk is het?`, tekst: [
        `Een gewone pan is vlak of golvend, met aan de bovenkant nokjes waarmee hij aan de lat hangt. Een nokvorst is rond of hoekig en hoort bovenop de nok, zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>. Een gevelpan heeft aan één kant een rand die over de zijkant van het dak valt, zie <a href="/kennisbank/gevelpannen-los/">gevelpannen los</a>. Liggen er alleen kleine scherven of brokjes grijze specie, dan komt het vaak van een pan die al gebarsten was of van de specie onder de nok.`,
      ] },
      { kop: `Komt hij van jouw dak?`, tekst: [
        `Leg de pan naast een foto van je dak en vergelijk de kleur en de vorm. Ga daarna aan de overkant van de straat staan en zoom met je telefoon in op je dak. Een plek waar een pan mist, zie je als een donkere opening, vaak met de latten of de folie eronder in zicht. Kijk ook naar de daken van de buren en naar een schuur of garage in de buurt. In een rij lijken de pannen vaak op elkaar, en bij harde wind kan een pan een flink stuk verder neerkomen. Zie je het gat bij de buren, laat het ze dan meteen weten.`,
      ] },
      { kop: `Kijk ook op zolder`, tekst: [
        `Ga met een zaklamp op zolder kijken onder het stuk dak waar de pan vandaan kan komen. Zie je daglicht, een natte plek op de folie of het hout, of druppels, dan ligt je dak open. Zet er een emmer of bak onder en leg spullen opzij.`,
      ] },
      { kop: `Is het spoed?`, tekst: [
        `Mist er een pan of een nokvorst en zie je een opening, dan is het spoed: bij de volgende bui loopt het water er recht naar binnen, en de wind krijgt vat op de pannen eromheen. Bel of app me dan met een foto. Is het alleen een losse scherf en zie je nergens een gat, dan kan het meestal wachten tot een gewone werkdag. Twijfel je, stuur dan de foto's, dan zeg ik eerlijk wat ik zie. Wat je verder meteen doet, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Is er iets geraakt?`, tekst: [
        `Is de pan op een auto, een schutting of het dak van de buren gevallen, maak er dan foto's van en lees <a href="/kennisbank/dakpan-op-auto-buren/">dakpan op de auto van de buren</a>. Voor je eigen verzekering helpt het als je foto's maakt van de pan, de plek waar hij lag en het gat in je dak, met de datum erbij.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ligt het dak open, dan maak ik het eerst dicht, zodat het binnen droog blijft. Daarna leg ik de pan terug of vervang ik hem door een die past, en kijk ik of de pannen eromheen nog goed liggen. Is de pan heel gebleven, bewaar hem dan: dan zie ik meteen welk model het is. Lukt het niet meteen om een passende pan te vinden, dan maak ik het eerst waterdicht en kom ik terug voor de nette reparatie. Zie ook <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik?</a> en <a href="/diensten/stormschade/">stormschade aan je dak</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse pannen terugleggen of vervangen valt meestal onder een kleine reparatie: ${inclBtw("dakpan")}. Moeten de nokvorsten opnieuw worden aangesmeerd, dan kost dat ${inclBtw("nok_repareren")}. Stuur een foto van de pan en van je dak vanaf de straat, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: stormschade aan je dak`, href: `/diensten/stormschade/` },
    faq: [
      { v: `Er ligt een pan in mijn tuin, maar ik zie geen gat in mijn dak. Wat nu?`, a: `Kijk dan bij de buren, bij een schuur of garage in de buurt, en op zolder of er ergens daglicht door komt. Soms ligt er nog een oude losse pan op een plat dak of in de goot, en die waait er bij harde wind af. Zie je nergens een opening, stuur me dan een foto van de pan en van je dak vanaf de straat.` },
      { v: `Kan ik de pan zelf terugleggen?`, a: `Liever niet. Om erbij te komen moet je op een ladder of het dak, en een pan die niet goed in de sluiting ligt, waait bij de volgende storm weer los. Bewaar de pan, dan gebruik ik hem als hij heel is.` },
      { v: `Valt een weggewaaide dakpan onder de verzekering?`, a: `Schade door storm valt vaak onder je opstalverzekering, maar dat hangt af van je polis. Maak foto's met de datum erbij en meld het bij je verzekeraar. Na de reparatie maak ik foto's van wat ik aantrof en wat ik heb gedaan, en die kun je meesturen.` },
    ],
  },
  {
    slug: `zolder-nat-langs-zijmuur`,
    datum: `2026-11-14`,
    titel: `Nat op zolder langs de zijmuur?`,
    h1: `Nat op zolder langs de zijmuur van je huis: waar komt het water vandaan?`,
    metaTitle: `Zolder nat langs de zijmuur? | Spoed Dak Service`,
    metaDescription: `Nat op zolder langs de zijmuur van je hoekhuis of twee-onder-een-kap? Vaak zit het bij de gevelpannen, de windveer of het lood. Zo zie je waar.`,
    intro: `Bij een hoekhuis, het eindhuis van een rij, een twee-onder-een-kap of een vrijstaand huis komt het schuine dak aan de zijkant uit op een buitenmuur: de kopgevel. Wordt het op zolder nat langs die muur, of zie je een donkere streep op het hout onder de schuine kant van het dak, dan komt het water meestal van de rand van het dak erboven. Soms komt het door de muur zelf. Hieronder lees je hoe je dat uit elkaar houdt en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel en schuif kasten en dozen een stuk van de muur af. Loopt het water langs de muur naar een stopcontact of lamp, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op en zet geen ladder tegen de zijgevel. Maak een foto van de natte plek. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit de rand van je dak in elkaar`, tekst: [
        `Langs de schuine zijkant van het dak liggen gevelpannen: pannen met een omgezette rand die over de rand van het dak heen valt. Bij veel huizen zit daaronder een houten plank, de windveer. Bij oudere huizen zonder windveer liggen de pannen aan de zijkant soms op de muur, met specie eronder. En op sommige huizen ligt er een strook lood of zink over de bovenkant van de muur. Samen houden ze de regen tegen die langs de zijkant onder de pannen wil waaien.`,
      ] },
      { kop: `Waar het meestal zit`, tekst: [
        `Een gevelpan die los ligt of gebroken is. Bij harde wind krijgt de rand van het dak het zwaarst te verduren. Ligt een gevelpan een stukje open of mist hij, dan waait de regen er langs de zijkant onder. Zie <a href="/kennisbank/gevelpannen-los/">gevelpannen los na een storm</a>.`,
        `Een windveer die los zit of rot is. Dan sluiten de gevelpannen niet meer goed aan en loopt het water achter de plank langs naar binnen. Vaak begint het rot onderaan, vlak boven de goot. Zie <a href="/kennisbank/windveer-los-of-rot/">windveer los of rot</a>.`,
        `Specie langs de rand die is gaan brokkelen. Liggen de pannen aan de zijkant in specie op de muur, dan scheurt die na veel jaren en vallen er brokjes uit. Door die kieren komen regen en stuifsneeuw naar binnen. Brokjes specie in de goot of in de tuin onder de zijkant zijn een teken.`,
        `Een pan naast de gevelpan. Ligt de eerste pan naast de rand scheef, of heeft hij een barst, dan loopt het water onder de pannen door naar de muur. Zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
        `Het eindstuk van de goot. Waar de goot aan de zijkant van het huis eindigt, zit een eindstuk. Lekt dat, of loopt de goot daar over, dan wordt de onderste hoek van je zolder nat, vlak bij de vloer. Zie <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: `Of komt het door de muur zelf?`, tekst: [
        `Een zijgevel vangt bij slagregen veel water. Zijn de voegen open of zit er een scheur in de muur, dan kan dat water erdoor trekken. Je herkent het aan een natte plek die lager in de muur begint, of aan een muur die over een groot stuk vochtig is, vooral als de regen hard tegen die kant slaat, en soms pas een dag later. Werk aan de stenen en de voegen doe ik niet. Zie ik dat het daar zit, dan zeg ik dat eerlijk, zodat je niet betaalt voor werk aan het dak dat niet helpt.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Een buitenmuur op zolder is in de winter koud. Vocht uit huis slaat daar neer, vooral in een hoek achter een kast, een stapel dozen of het knieschot. Zie je zwarte puntjes of een vochtige waas, ook na dagen zonder regen, dan is het vaak condens. Lees dan <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Zo vind je waar het zit`, tekst: [
        `Kijk tijdens of vlak na een bui met een zaklamp op zolder. Begint het nat bovenaan, bij de nok, of langs de hele schuine kant? Dan zit het meestal aan de rand van het dak. Begint het onderaan, bij de vloer, dan eerder bij het eindstuk van de goot of de onderkant van de windveer. Ga daarna op een droge dag aan de overkant van de straat staan en kijk met de zoom van je telefoon langs de zijkant van het dak: ligt er een gevelpan scheef, hangt de windveer los of mist er specie? Maak van beide een foto en schrijf erbij uit welke hoek de wind kwam.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Zet geen ladder tegen de zijgevel om te kijken: aan de zijkant sta je hoog en vang je de meeste wind. Kit een gevelpan niet vast en spuit geen kit in de kieren langs de rand. Dat houdt een paar maanden, en daarna loopt het water erachter langs, terwijl je het van buiten niet meer ziet.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het water binnenkomt, en daarna buiten langs de rand van het dak. Een losse gevelpan zet ik weer vast en een gebroken pan vervang ik door een die past. Zit de windveer los, dan zet ik hem vast, en is hij rot, dan vervang ik hem en leg ik de pannen langs de rand weer goed. Lood dat langs de rand of op de muur los zit, zet ik vast of vervang ik, meestal met loodvervanger en op wens met echt lood. Zit het in de specie langs de rand of in de stenen van de gevel, dan zeg ik eerlijk wat er nodig is. Zie <a href="/diensten/windveer-vervangen/">windveer vervangen</a> en <a href="/diensten/dakreparatie/">dakreparatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een losse gevelpan vastzetten of een paar pannen langs de rand vervangen valt meestal onder een kleine reparatie: ${inclBtw('dakpan')}. Moet de windveer of het lood langs de rand vervangen worden, dan hangt de prijs af van hoe lang dat stuk is en hoe hoog het zit. Stuur een foto van de zijkant van je dak en van de natte plek op zolder, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: windveer vervangen of vastzetten`, href: `/diensten/windveer-vervangen/` },
    faq: [
      { v: `Is een natte plek langs de zijmuur van mijn zolder spoed?`, a: `Druppelt het bij elke bui, of loopt het water langs de muur naar een stopcontact of lamp, dan wel: zet de groep uit en stuur me een foto. Is de plek alleen vochtig en wordt hij niet groter, dan kan het vaak een paar dagen wachten. Wacht niet tot de volgende storm, want aan de zijkant van het dak waait een losse pan of plank het eerst weg.` },
      { v: `Het is alleen nat als de wind op die kant van het huis staat. Wat zegt dat?`, a: `Dan zit het bijna altijd aan die kant: bij de gevelpannen, de windveer of de eerste rij pannen naast de rand, of in de muur zelf als de regen er hard tegenaan slaat. Schrijf op bij welk weer het nat werd en stuur dat mee met een foto van de zijkant van je dak.` },
      { v: `Het is nat in de onderste hoek van mijn zolder, bij de vloer. Kan dat van de dakgoot komen?`, a: `Ja. Waar de goot aan de zijkant van het huis eindigt, zit een eindstuk, en lekt dat of loopt de goot daar over, dan wordt juist die hoek nat. Kijk tijdens een bui of er water langs het eindstuk of over de rand van de goot loopt, en maak daar een foto van. Lees ook het artikel over water achter de dakgoot.` },
    ],
  },
  {
    slug: `dak-lekt-huis-verkopen`,
    datum: `2026-11-14`,
    titel: `Verkoop je je huis en lekt het dak?`,
    h1: `Je verkoopt je huis en het dak lekt of heeft gelekt: wat doe je en wat vertel je?`,
    metaTitle: `Huis verkopen en het dak lekt? | Spoed Dak Service`,
    metaDescription: `Verkoop je je huis en lekt het dak, of heeft het gelekt? Zo laat je het maken, leg je vast wat er is gedaan en praat je er eerlijk over met kopers.`,
    intro: `Je huis staat te koop, en net nu zie je een natte plek op zolder. Of het dak heeft ooit gelekt, en je twijfelt of je dat moet vertellen. Hieronder lees je wat je meteen doet, wat je vastlegt, wanneer repareren slim is en hoe je er eerlijk over praat met kopers. Wat je bij de verkoop precies moet vermelden, is een vraag voor je makelaar of notaris. Ik vertel je wat er aan het dak gebeurt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, leg er een handdoek in en haal spullen weg. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Maak foto's van de natte plek en, als dat veilig kan, van je dak vanaf de straat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Laat een lek eerst maken`, tekst: [
        `Een lek dat nu actief is, laat je het beste meteen repareren. Water in het hout, de isolatie of het plafond maakt de schade alleen groter, en een natte plek op zolder valt bij een bezichtiging meteen op. Een lek dat is gemaakt, met een rekening en foto's erbij, geeft een koper meestal meer vertrouwen dan een vlek waar niemand iets over kan zeggen.`,
      ] },
      { kop: `Leg vast wat er was en wat er is gedaan`, tekst: [
        `Bewaar de rekening van de reparatie en vraag om foto's van wat er kapot was en van wat er is gemaakt. Schrijf op wanneer het lekte, waar en bij wat voor weer. Zo kun je een koper of zijn bouwkundige precies laten zien wat er aan de hand was en dat het is opgelost.`,
      ] },
      { kop: `Vertel het de koper`, tekst: [
        `Bij de verkoop vul je meestal via je makelaar een vragenlijst in, met ook vragen over lekkages. Het is in de regel verstandig om een lek dat je kent daar te noemen, ook als het al is gemaakt, en de rekening erbij te doen. Een koper die het later zelf ontdekt, voelt zich vaak misleid, en dat geeft gedoe. Wat je in jouw geval precies moet vermelden, vraag je aan je makelaar of notaris.`,
      ] },
      { kop: `Een oude vlek die al droog is`, tekst: [
        `Zit er een oude kring op het plafond of op het hout van je zolder, en lekt het al lang niet meer? Kijk dan na de volgende flinke bui of de plek droog blijft en niet groter wordt. Schilder er pas overheen als je zeker weet dat het droog blijft, en verstop hem niet: een vers geschilderde plek op een oud plafond valt een bouwkundige juist op. Hoe lang drogen duurt, lees je in <a href="/kennisbank/plafond-drogen-na-lekkage/">je plafond laten drogen na een daklek</a>.`,
      ] },
      { kop: `Repareren of erover praten met de koper?`, tekst: [
        `Vraagt een koper na de bouwkundige keuring om iets aan het dak, dan is een kleine reparatie, zoals een losse pan, een stukje lood of een lekkende naad in de goot, vaak het makkelijkst om vooraf te laten doen. Dan is het van tafel. Gaat het om een dak dat helemaal aan vervanging toe is, dan kan het slimmer zijn om dat met de koper te bespreken. Laat je daarover adviseren door je makelaar.`,
      ] },
      { kop: `Je dak laten nakijken voor de verkoop`, tekst: [
        `Twijfel je hoe je dak ervoor staat, dan kan ik het nakijken met de <a href="/dak-apk/">Dak-APK</a>: de pannen, de nok, het lood, de goten en sporen van vocht op zolder, met foto's erbij. Zo weet je vooraf wat er speelt en kun je kleine dingen nog laten maken. Koop je zelf een ander huis, lees dan ook <a href="/kennisbank/dak-keuren-bij-huis-kopen/">dak keuren als je een huis koopt</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik zoek waar het water binnenkomt en maak het dicht. Je krijgt foto's van wat ik aantrof en van wat ik heb gedaan, met een korte omschrijving en een rekening. Die kun je aan je makelaar of de koper geven. Je hoort vooraf wat het kost. Zie <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek opsporen en dichten kost meestal ${inclBtw('daklekkage')}, inclusief materiaal. Gaat het om een losse of gebroken pan, dan is het vaak een kleine reparatie: ${inclBtw('dakpan')}. Stuur een foto van de natte plek en van je dak vanaf de straat, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Moet ik een lek dat al is gerepareerd aan de koper vertellen?`, a: `Het is in de regel verstandig om dat te doen, met de rekening en foto's van de reparatie erbij. Dan weet de koper wat er was en dat het is opgelost. Wat je in jouw geval precies moet vermelden, vraag je aan je makelaar of notaris.` },
      { v: `Kun je mijn dak nakijken voordat mijn huis in de verkoop gaat?`, a: `Ja. Met de Dak-APK kijk ik je hele dak na en krijg je een rapport met foto's. Zo weet je vooraf wat er speelt en kun je kleine dingen nog laten maken voordat de eerste kopers komen kijken.` },
      { v: `Mijn huis is verkocht maar nog niet overgedragen, en nu lekt het. Wat doe ik?`, a: `Zorg eerst dat de schade niet groter wordt: vang het water op en laat het lek dichtmaken. Meld het meteen bij je makelaar en de koper, met foto's van de schade en van de reparatie. Wat er verder moet gebeuren, staat meestal in de koopovereenkomst. Vraag je makelaar of notaris hoe het in jouw geval zit.` },
    ],
  },
  {
    slug: `jaren-30-huis-dak-lekt`,
    datum: `2026-11-14`,
    titel: `Lekt het dak van je jaren 30-huis?`,
    h1: `Dak van een jaren 30-huis lekt: waar het meestal zit en wat je doet`,
    metaTitle: `Jaren 30-huis: waar lekt het dak? | Spoed Dak Service`,
    metaDescription: `Een huis uit de jaren '20 of '30 lekt vaak bij het lood, de zinken goot, de nok of oude pannen zonder folie eronder. Zo zie je waar het zit en wat je doet.`,
    intro: `Huizen uit de jaren '20 en '30 hebben vaak een steil pannendak, een of twee schoorstenen, een erker en zinken goten. Zo'n dak is gemaakt om lang mee te gaan, maar na bijna honderd jaar is het lood, het zink of de nok vaak al eens vernieuwd, of juist nog nooit. Een lek zit daardoor meestal op een paar vaste plekken. Hieronder lees je welke dat zijn, hoe je ze herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep uit als het bij een lamp of stopcontact lekt. Ga niet zelf het dak op: oude pannen breken snel als je erop staat, en een steil dak is glad. Maak een foto van de natte plek en, als dat veilig kan, van je dak vanaf de straat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit zo'n oud dak in elkaar`, tekst: [
        `Bij veel huizen uit die tijd liggen de pannen op panlatten zonder folie eronder. Soms ligt er een houten beschot onder, soms kijk je op zolder zo tegen de achterkant van de pannen aan. Een streepje daglicht of wat stuifsneeuw na een sneeuwbui is bij zo'n dak niet vreemd. Maar er ligt ook geen tweede laag die water opvangt: is een pan gebroken of verschoven, dan komt het water vaak meteen binnen. Meer daarover lees je in <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a> en <a href="/kennisbank/dakfolie-kapot/">folie onder je pannen kapot</a>.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Het lood rond de schoorsteen. Ook als er al lang niet meer gestookt wordt, staat de schoorsteen er vaak nog. Het lood rond de voet is soms tientallen jaren oud. Scheurt het in de vouwen of staat het van de steen af, dan loopt de regen erachter langs naar binnen. Zie <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
        `De zinken goot of bakgoot. Bij veel van deze huizen ligt de goot verzonken in de rand van het dak, of hangt er een zinken goot aan de voorkant. Een soldeernaad die opengaat of zink dat dun is geworden, geeft een natte plek bovenin de muur of langs het plafond. Zie <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a> en <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `De nok en de schuine hoeken. De vorsten liggen vaak nog in specie, en die brokkelt na veel jaren af. Ligt er gruis of een brokje specie in de goot, dan zit de nok of een hoekkeper los. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a> en <a href="/kennisbank/hoekkeper-lekt/">lekkage bij de hoekkeper</a>.`,
        `De erker en de luifel. Het dakje van een erker of de luifel boven de voordeur sluit met een strook lood of zink op de gevel aan. Laat die los, dan wordt het nat boven het raam. Zie <a href="/kennisbank/erker-lekt/">erker of luifel lekt</a>.`,
        `De kilgoot. Heeft je dak hoeken waar twee dakvlakken samenkomen, dan ligt daar een kilgoot van lood of zink. Daar blijft blad liggen, en oud lood kan er scheuren. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
        `Oude pannen. Gebakken pannen van die leeftijd kunnen water opnemen en na een vorstperiode schilferen of barsten. Zie <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
      ] },
      { kop: `Zo vind je het`, tekst: [
        `Ga tijdens of vlak na een bui met een zaklamp naar zolder. Omdat er vaak geen folie onder de pannen ligt, zie je de natte plek op de panlatten of het beschot meestal vlak onder het lek. Kijk ook langs de schoorsteen en in de hoeken bij de goot. Maak daarna vanaf de overkant van de straat een foto met de zoom van je telefoon: een pan die scheef ligt, lood dat omhoog staat of een donkere streep onder de goot zie je vaak al van beneden.`,
      ] },
      { kop: `Repareren of het dak vernieuwen?`, tekst: [
        `Lekt het op één plek, dan is repareren meestal genoeg: een pan vervangen, lood vastzetten of een naad in de goot solderen. Breken er elk jaar meer pannen, is het lood op veel plekken op en ligt de nok over de hele lengte los, dan kan een dakvlak vernieuwen slimmer zijn. Bij een renovatie kan er op wens ook folie en nieuwe panlatten onder de pannen. Wanneer vervangen slimmer wordt, lees je in <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>. Woon je in een monument of een beschermd stadsgezicht, kijk dan ook bij <a href="/kennisbank/dak-monument-repareren/">je dak repareren in een monument</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het water binnenkomt en daarna buiten op het dak. Losgeraakt lood zet ik weer vast of vervang ik, meestal met loodvervanger en met echt lood als je dat liever hebt. Een lekkende naad in een zinken goot soldeer ik, en is het zink op meer plekken dun, dan kan de goot vaak van binnen gecoat worden. Voor een gebroken pan zoek ik een pan die past bij de rest, zie <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik</a>. Zijn de stenen of voegen van de schoorsteen zelf slecht, dan zeg ik dat eerlijk, want daarvoor heb je een metselaar nodig. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse of gebroken pannen vervangen kost meestal ${inclBtw('dakpan')}. Een lek opsporen en dichten kost meestal ${inclBtw('daklekkage')}, inclusief materiaal. Voor lood langs een hele schoorsteen, een goot of een groter stuk dak hoor je vooraf de vaste prijs. Stuur een foto van de natte plek en van je dak vanaf de straat via WhatsApp.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Op mijn zolder zie ik de achterkant van de pannen, zonder folie. Moet daar folie onder?`, a: `Niet per se. Zo'n dak is zo gebouwd, en zolang de pannen goed liggen, blijft het meestal droog. Folie kan er alleen onder als de pannen en de latten er eerst af gaan, dus dat doe je bij een renovatie. Wil je de zolder isoleren of als kamer gebruiken, vraag dan eerst een isolatiebedrijf wat er nodig is. Isoleren doe ik zelf niet, maar ik zorg wel dat het dak eerst dicht is.` },
      { v: `Ik woon in een rij jaren 30-huizen. Lekt het bij mij of bij de buren?`, a: `Dat kan allebei. In een rij lopen de pannen, de nok en de goot vaak door over de grens, en het water loopt onder de pannen soms een stuk opzij voordat het binnenkomt. Kijk op zolder of de natte plek vlak bij de muur met de buren zit. Stuur me een foto van de natte plek en van het dak vanaf de straat, dan zeg ik waar ik zou beginnen.` },
      { v: `Is een lek in een oud dak spoed?`, a: `Druppelt het binnen, zit het bij een lamp of stopcontact of ligt er een pan of vorst op straat, dan wel: bel of app me meteen. Een oude, droge kring die niet groter wordt, kan meestal een paar dagen wachten. Wacht geen weken, want bij een dak zonder folie komt elke bui meteen bij het hout.` },
    ],
  },
  {
    slug: `dak-jaren-70-rijtjeshuis`,
    datum: `2026-11-14`,
    titel: `Lekt het dak van je jaren 70-rijtjeshuis?`,
    h1: `Rijtjeshuis uit de jaren '60 of '70: waar het dak na vijftig jaar lekt`,
    metaTitle: `Jaren 70-rijtjeshuis: waar lekt het dak? | Spoed Dak Service`,
    metaDescription: `Een rijtjeshuis uit de jaren '60 of '70 heeft vaak nog de eerste betonpannen en nok. Zo zie je waar het dak lekt en of repareren nog genoeg is.`,
    intro: `In veel wijken uit de jaren '60 en '70 staan lange rijen huizen met hetzelfde zadeldak: betonpannen, een nok in de specie, een paar pijpen door het dak en achter het huis vaak een berging met een plat dak. Op een deel van die huizen ligt nog het eerste dak. Na zoveel jaren begint het op een paar vaste plekken te lekken. Hieronder lees je waar, hoe je het ziet en wanneer repareren nog genoeg is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact lekt. Ga niet zelf het dak op. Maak een foto van de natte plek en van je dak vanaf de overkant van de straat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `De nok. De nokvorsten liggen vaak nog in de specie van toen. Die wordt bros, er vallen brokjes in de goot en bij harde wind gaat een vorst schuiven. Een natte plek helemaal bovenin de zolder wijst vaak naar de nok. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Pijpen door het dak. De ontluchting van het riool, de afvoer van de cv-ketel en soms de afzuigkap gaan door een speciale pan of een kraag naar buiten. Het rubber of de kit daarvan droogt na jaren uit. Zie <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a> en <a href="/kennisbank/cv-ketel-lekt-bij-regen/">water bij je cv-ketel als het regent</a>.`,
        `De schoorsteen, of de plek waar hij stond. Heeft je huis nog een schoorsteen, dan zit het lek vaak in het lood eromheen. Is hij ooit weggehaald, dan lekt het soms bij de pannen waarmee het gat is gedicht. Zie <a href="/kennisbank/lekkage-weggehaalde-schoorsteen/">lekkage waar de schoorsteen stond</a>.`,
        `Het dakraam. Veel van deze huizen kregen later een dakraam op zolder. Lekt het eromheen, dan zit het meestal in het gootstuk of in de aansluiting op de pannen erboven. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `De goot. In die jaren kwamen de eerste kunststof goten. Gelijmde naden en hoekstukken worden na veel jaren bros en gaan lekken. Zie <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a>.`,
        `Het platte dak achter het huis. De berging of aanbouw heeft vaak een plat dak, met een rand en een afvoer. Daar lekt het vaak waar het dak tegen de gevel van het huis komt. Zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Slijtende betonpannen`, tekst: [
        `Betonpannen hebben een toplaag die na veel jaren slijt. Je ziet dan zand of grijs gruis in de goot, de pannen worden ruw en er blijft meer mos op zitten. Dat geeft niet meteen een lek, maar een ruwe pan neemt meer water op en breekt eerder. Ligt er alleen wat gruis in de goot, dan is dat meestal geen reden om je dak te vervangen. Zie <a href="/kennisbank/zand-in-dakgoot/">zand of korrels in je dakgoot</a> en <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
      ] },
      { kop: `Lekt het bij jou of bij de buren?`, tekst: [
        `In een rij lopen de pannen, de nok en de goot vaak door over de grens tussen twee huizen. Water dat bij de buren onder een pan komt, kan bij jou binnen een natte plek geven. Is het nat vlak langs de muur met de buren, lees dan <a href="/kennisbank/lekkage-muur-buren/">nat langs de muur met de buren</a>. Hebben je buren hun dak net vernieuwd, kijk dan bij <a href="/kennisbank/lekkage-na-dakwerk-buren/">lekt het sinds dakwerk bij de buren?</a>`,
      ] },
      { kop: `Repareren of het dak vernieuwen?`, tekst: [
        `Een paar losse pannen, een vorst of een kraag rond een pijp is een gewone reparatie. Moet er elk jaar ergens anders iets gebeuren, liggen er na een vorstperiode schilfers in de goot of zit de nok over de hele lengte los, dan is een dakvlak vernieuwen op termijn vaak slimmer. Dat hoeft niet altijd het hele dak te zijn, en in een rij kun je ook alleen je eigen dak laten doen, met een nette aansluiting op de buren. Lees <a href="/kennisbank/dak-vernieuwen-rijtjeshuis/">je dak vernieuwen in een rijtjeshuis</a> en <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>. Bij een renovatie kan er op wens nieuwe folie en nieuwe panlatten onder de pannen, zie <a href="/diensten/dakrenovatie/">dakrenovatie</a>. Woon je in Waalwijk, lees dan ook <a href="/werkgebied/waalwijk/dakrenovatie/">dakrenovatie in Waalwijk</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder en daarna vanaf het dak. Een losse vorst zet ik weer vast, en is de specie over de hele nok op, dan smeer ik de vorsten opnieuw aan. Gebroken pannen vervang ik door pannen die passen, en een uitgedroogde kraag rond een pijp vervang ik. Zie ik dat het dak op meer plekken op is, dan zeg ik dat eerlijk, en dan hoor je wat repareren en wat vernieuwen kost. Zie <a href="/diensten/dakreparatie/">spoed dakreparatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse of gebroken pannen vervangen, of een nokvorst weer vastzetten, kost meestal ${inclBtw('dakpan')}. De nok opnieuw aansmeren kost ${inclBtw('nok_repareren')}. Een lek opsporen en dichten kost meestal ${inclBtw('daklekkage')}, inclusief materiaal. Voor een heel dakvlak hoor je de vaste prijs nadat ik heb gekeken. Stuur gerust eerst een foto van je dak vanaf de straat.`,
      ] },
    ],
    dienst: { label: `Bekijk: spoed dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Mijn buren hebben hun dak al vernieuwd. Moet ik nu ook?`, a: `Niet per se. Lekt jouw dak niet en liggen de pannen en de nok nog goed, dan kan het vaak nog jaren mee. Let wel op de grens met de buren: daar komen hun nieuwe en jouw oude pannen samen, en daar kan het gaan lekken als de aansluiting niet goed is. Stuur me een foto van je dak vanaf de straat, dan zeg ik eerlijk hoe het ervoor staat.` },
      { v: `Er ligt grijs zand in mijn goot. Is mijn dak dan op?`, a: `Meestal niet. Betonpannen slijten aan de bovenkant, en dat zand spoelt bij elke bui de goot in. Een dun laagje is normaal. Liggen er ook stukjes pan of brokjes specie in de goot, of zijn de pannen erg ruw en vol mos, laat het dak dan een keer nakijken.` },
      { v: `Is een lek bij de ontluchtingspijp op mijn dak spoed?`, a: `Druppelt het bij elke bui langs de pijp naar binnen, of zit het bij een lamp of stopcontact, dan wel. Is het alleen op koude ochtenden vochtig rond de pijp, ook zonder regen, dan is het vaak condens in de pijp en geen lek. Stuur me een foto van de pijp op zolder en van het dak vanaf de straat.` },
    ],
  },
  {
    slug: `kerstverlichting-dakgoot`,
    datum: `2026-11-14`,
    titel: `Kerstverlichting aan je dakgoot?`,
    h1: `Kerstverlichting aan je dakgoot of dak: zo voorkom je een lek of schade`,
    metaTitle: `Kerstverlichting aan je dakgoot? | Spoed Dak Service`,
    metaDescription: `Lichtjes aan je goot of dak? Waarom je niet in de goot boort of pannen optilt, hoe de kabel droog naar binnen gaat en wat je na de feestdagen nakijkt.`,
    intro: `In december hangen veel mensen lichtjes langs de dakgoot of over de rand van het dak. Dat kan prima, maar een gaatje in de goot, een opgetilde pan of een kabel door het dakraam geeft in januari soms een lek. Hieronder lees je hoe je het ophangt zonder schade, en waar je na de feestdagen even naar kijkt. Lichtjes ophangen doe ik zelf niet, maar ik leg uit waar je op let.`,
    secties: [
      { kop: `Maak eerst de goot leeg`, tekst: [
        `Hang je lichtjes aan of in de goot, zorg dan dat hij eerst leeg is. Blad dat onder de lichtjes blijft liggen, zet de uitloop naar de regenpijp dicht, en bij vorst wordt dat een prop ijs. Dan loopt het smeltwater over de rand of langs je gevel. Hoe je een lage goot zelf veilig leegmaakt, lees je in <a href="/kennisbank/dakgoot-zelf-schoonmaken/">dakgoot zelf schoonmaken</a>. Een hoge goot laat je liever doen, zie <a href="/diensten/goten-reinigen/">dakgoot schoonmaken</a>.`,
      ] },
      { kop: `Zo hang je het aan de goot`, tekst: [
        `Gebruik klemmen die over de voorrand van de goot vallen, zonder schroef of spijker. Boor geen gaatjes in een zinken of kunststof goot: elk gaatje is een plek waar het later druppelt, en in zink gaat zo'n gaatje roesten of uitscheuren.`,
        `Leg de snoeren niet onderin de goot, waar het water loopt. Daar blijft blad tegen hangen, en dan kan het water niet meer naar de regenpijp.`,
        `Hang er niets zwaars aan. Een kunststof goot is niet gemaakt om gewicht te dragen, en hangt hij op één plek lager, dan blijft daar water staan. Zie <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
      ] },
      { kop: `Niet onder de pannen`, tekst: [
        `Schuif geen haakjes of klemmen onder je dakpannen en til ze niet op. Een pan die een paar millimeter omhoog staat, ligt niet meer in zijn sluiting. Regen en wind komen er dan onder, en bij een storm kan hij gaan schuiven of wegwaaien. Ga ook niet op het dak lopen om lichtjes langs de nok te leggen: oude pannen breken snel, en een dak is in december vaak nat of glad. Zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
      { kop: `De kabel naar binnen`, tekst: [
        `Leg de kabel niet door een dakraam of tussen twee pannen door naar binnen. Een dakraam dat op een kabel dichtvalt, sluit niet meer en lekt bij de eerste bui, en een pan die op een kabel ligt, staat open. Gebruik liever een buitenstopcontact, en twijfel je hoe je de stroom veilig buiten krijgt, vraag dan een installateur. Gebruik ook alleen verlichting die voor buiten bedoeld is.`,
      ] },
      { kop: `Veilig op de ladder`, tekst: [
        `Zet de ladder tegen de muur en niet tegen de goot, op een droge dag zonder wind of vorst. Een ladder tegen de goot kan een beugel verbuigen of een kunststof goot laten knappen. Zit de goot hoog, of moet je over de rand van het dak reiken, laat het dan zitten.`,
      ] },
      { kop: `Na de feestdagen`, tekst: [
        `Haal de lichtjes er rustig af en trek niet aan een snoer dat vastzit. Kijk daarna vanaf de straat of alle pannen langs de rand nog recht liggen, of de goot nog op dezelfde hoogte hangt en of er geen klem in de goot is achtergebleven. Wordt het daarna binnen nat, kijk dan bij <a href="/kennisbank/lekt-sinds-iemand-op-dak/">lekt het sinds er iemand op je dak was?</a>`,
      ] },
      { kop: `Wat ik wel en niet doe`, tekst: [
        `Lichtjes ophangen doe ik niet. Wel maak ik je goten leeg, leg ik een pan terug die is opgetild of verschoven, en repareer ik een goot die lekt. Eén goot leegmaken, bijvoorbeeld alleen de voorgoot, kost ${inclBtw('goot_reinigen')}. Voor een reparatie hoor je vooraf de prijs. Stuur een foto van je goot of dak vanaf de straat via WhatsApp.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Mag ik een gaatje in mijn dakgoot boren voor een haakje?`, a: `Liever niet. Elk gaatje in de goot is een plek waar het later kan druppelen, en in zink kan zo'n gaatje gaan roesten. Gebruik klemmen die over de voorrand van de goot vallen. Is er al een gaatje geboord en druppelt het nu, stuur me dan een foto.` },
      { v: `Kan ik de kabel door mijn dakraam naar binnen leggen?`, a: `Beter niet. Valt het raam op de kabel dicht, dan sluit het niet meer goed, en dan regent het bij een flinke bui naar binnen. Gebruik een buitenstopcontact, of vraag een installateur hoe je de stroom veilig buiten krijgt.` },
      { v: `Na de feestdagen ligt er een pan scheef langs de rand. Wat nu?`, a: `Ga er niet zelf op. Een scheve pan ligt niet meer in zijn sluiting, en bij regen of storm kan het daar lekken of kan de pan gaan schuiven. Maak een foto vanaf de straat en stuur die via WhatsApp. Vaak is terugleggen of vastzetten een kleine klus.` },
    ],
  },
  {
    slug: `water-uit-stopcontact-bij-regen`,
    datum: `2026-11-14`,
    titel: `Water uit je stopcontact als het regent?`,
    h1: `Water uit een stopcontact of schakelaar als het regent: wat doe je en waar komt het vandaan?`,
    metaTitle: `Water uit stopcontact bij regen? | Spoed Dak Service`,
    metaDescription: `Druppelt er water uit een stopcontact of schakelaar na een bui? Zet eerst de stroom eraf. Zo zoek je of het van het dak, de goot, de gevel of een leiding komt.`,
    intro: `Na een flinke bui zie je water uit een stopcontact of schakelaar komen, of een natte rand eromheen. Dat is schrikken, en terecht: water en stroom gaan niet samen. Het water komt bijna nooit uit het stopcontact zelf. Het loopt hoger in de muur binnen en zakt langs de buis met de draden naar beneden, tot het bij een opening naar buiten komt. Hieronder lees je wat je meteen doet, waar het meestal vandaan komt en wie je belt.`,
    secties: [
      { kop: `Eerst: de stroom eraf`, tekst: [
        `Zet in de meterkast de groep uit waar dat stopcontact op zit. Weet je niet welke het is, zet dan de hoofdschakelaar uit. Raak het stopcontact en wat erin zit niet aan, trek geen stekker met natte handen uit de muur en zet de groep pas weer aan als een installateur ernaar heeft gekeken. Leg een handdoek of zet een bak onder de druppel. Ruik je een brandlucht of zie je rook, bel dan 112. Wat je verder meteen kunt doen bij een lek, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Hoe het water bij je stopcontact komt`, tekst: [
        `In de meeste huizen lopen de stroomdraden door buizen in de muur, de vloer of het plafond. Komt er hoger in de muur water binnen, dan loopt het langs zo'n buis naar beneden en komt het naar buiten bij de eerste opening: een stopcontact, een schakelaar of een aansluiting voor een lamp. De plek waar je het water ziet, is dus zelden de plek waar het binnenkomt. Bij een lamp of spotje in het plafond werkt het net zo, zie <a href="/kennisbank/water-uit-lamp-plafond/">water uit je lamp of spotjes</a>.`,
      ] },
      { kop: `Zit het stopcontact boven, of onder een schuin dak?`, tekst: [
        `Zit het stopcontact op zolder, op de bovenste verdieping of in een zolderkamer, dan komt het water vaak van het dak of de goot erboven. Denk aan een goot die overloopt of waar het water achter langs de muur in loopt, een bakgoot in de dakrand die lekt, lood langs een muur of schoorsteen dat los zit, of een pan die is gaan schuiven. Zie <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>, <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a> en <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>.`,
      ] },
      { kop: `Zit het in een kamer onder een plat dak?`, tekst: [
        `In een aanbouw, uitbouw of garage met een plat dak zit het lek dan vaak bij de rand van het dak, bij de afvoer of in de strook waar het platte dak tegen de muur van het huis omhoog loopt. Het water zakt dan in de muur naar beneden. Zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Zit het beneden in een buitenmuur?`, tekst: [
        `Zit het stopcontact op de begane grond in een buitenmuur, en ligt er geen dak of goot vlak boven, dan komt het water vaker door de gevel zelf, langs een kozijn of via een buitenlamp of buitenstopcontact. Dat is geen werk voor een dakdekker. Zit er wel een dakje of goot vlak boven, zoals bij een erker of een luifel, dan kan het water daarvandaan komen. Zie <a href="/kennisbank/erker-lekt/">erker of luifel lekt</a>.`,
      ] },
      { kop: `Of is het een leiding?`, tekst: [
        `Druppelt het ook als het dagen droog is, of zit er boven of naast die muur een badkamer, toilet of keuken, dan is een waterleiding of afvoer waarschijnlijker. Dan bel je een loodgieter. Lees ook <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">lekkage: dakdekker of loodgieter?</a>`,
      ] },
      { kop: `Wie bel je?`, tekst: [
        `Twee mensen, voor twee verschillende dingen. Een installateur kijkt of het stopcontact, de schakelaar en de groep weer veilig zijn, en vervangt wat nat is geworden. Een dakdekker zoekt waar het water van buiten binnenkomt en maakt dat dicht, anders gebeurt het bij de volgende bui weer. Laat de groep uit staan tot de installateur is geweest.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik begin buiten, recht boven de muur waar het stopcontact zit en een flink stuk hoger: de goot, de dakrand, het lood en de pannen. Kan ik op zolder komen, dan kijk ik ook daar langs de muur waar het water naar beneden loopt. Een goot die overloopt maak ik leeg, een lekke naad in een zinken goot soldeer ik, en lood dat los zit zet ik weer vast of vervang ik. Aan het stopcontact en de bedrading kom ik niet, dat doet je installateur. Zie <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek opsporen en dichten kost meestal ${inclBtw('daklekkage')}, inclusief materiaal. Zit de goot alleen vol, dan is het vaak minder werk. Stuur een foto van het stopcontact, van de muur en van je dak of goot erboven vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mag ik het stopcontact weer gebruiken als het droog lijkt?`, a: `Liever niet. Ook als het aan de buitenkant droog lijkt, kan er binnenin nog vocht zitten of roest op de contacten. Laat de groep uit staan en laat een installateur kijken of het stopcontact en de draden weer veilig zijn.` },
      { v: `Is water uit een stopcontact spoed?`, a: `Voor de stroom wel: zet meteen de groep uit. Het lek in het dak of de goot is spoed als het bij elke bui terugkomt of als het binnen ook op andere plekken nat wordt. Stuur me een foto, dan zeg ik eerlijk hoe snel het moet.` },
      { v: `Kan het water bij mijn stopcontact van de buren komen?`, a: `Dat kan, in een rij huizen of een appartement. Water dat bij de buren binnenkomt, kan langs een muur of een buis naar jouw kant lopen. Zit het stopcontact in de muur met de buren, vraag dan of het bij hen ook nat is. Lees ook het artikel over lekkage langs de muur met de buren.` },
    ],
  },
  {
    slug: `plafond-naar-beneden-door-lekkage`,
    datum: `2026-11-14`,
    titel: `Plafond naar beneden gekomen door lekkage?`,
    h1: `Plafond naar beneden gekomen door een lek: wat doe je nu?`,
    metaTitle: `Plafond ingestort door lekkage? | Spoed Dak Service`,
    metaDescription: `Is er door een lek een stuk plafond naar beneden gekomen? Eerst veilig maken en de stroom eraf, dan foto's maken en het lek laten dichten. Zo pak je het aan.`,
    intro: `Eerst bolde het plafond op, en nu is er een stuk naar beneden gekomen, met water, gips en isolatie op de vloer. Of het gebeurde in één keer, midden in de nacht. Dat is schrikken. Hieronder lees je wat je nu meteen doet, wat je beter laat, hoe je het met je verzekering regelt en wie wat herstelt.`,
    secties: [
      { kop: `Eerst: veilig maken`, tekst: [
        `Ga de kamer uit en houd kinderen en huisdieren weg, want er kan nog meer plafond loskomen. Nat gips en natte isolatie zijn zwaar. Zet in de meterkast de groep van die kamer uit, of de hoofdschakelaar als je niet weet welke groep het is, zeker als er een lamp of draden in het plafond zaten. Ga niet onder de rest van het plafond staan om iets weg te halen. Hangt er in een andere kamer een plafond dat doorbuigt, lees dan <a href="/kennisbank/plafond-bolt-op-door-lekkage/">plafond bolt op door lekkage</a>. Ruik je een brandlucht of zie je rook, bel dan 112.`,
      ] },
      { kop: `Vang het water op`, tekst: [
        `Komt er nog water naar beneden, zet er dan een emmer of bak onder en leg handdoeken neer, als dat kan zonder onder het plafond te staan. Schuif spullen weg die nat kunnen worden. Ligt er parket of tapijt, leg er dan plastic over met handdoeken erop. Ga niet zelf het dak op, zeker niet als het nog regent of waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Maak foto's voordat je opruimt`, tekst: [
        `Maak foto's en een kort filmpje van het gat in het plafond, van wat er op de vloer ligt en van wat er nat is geworden, ook van dichtbij. Schrijf de datum en de tijd op, en wat voor weer het was. Dat heb je nodig voor je verzekering. Ruim daarna pas op wat in de weg ligt, en gooi kapotte spullen nog niet weg voordat je verzekeraar zegt dat het mag. Hoe het met de vergoeding zit, lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Waarom het plafond naar beneden kwam`, tekst: [
        `Bij een lek blijft het water vaak eerst boven op het plafond liggen, op de plaat of in de isolatie. Komt er bij elke bui meer bij, dan wordt dat zwaar, de plaat wordt zacht en op een gegeven moment breekt hij. Het water kwam dus meestal al een tijd binnen. Waar het precies binnenkomt, zit vaak niet recht boven het gat, want het water loopt eerst een stuk over de folie of langs een balk. Zie <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Eerst het lek dicht, dan het plafond`, tekst: [
        `Een nieuw plafond heeft pas zin als het lek dicht is en alles erboven droog is. Anders zit je bij de volgende bui weer met een natte plek. Is de isolatie erboven nat geworden, dan moet die vaak drogen of eruit. Lees <a href="/kennisbank/isolatie-nat-na-lekkage/">isolatie nat na een lek</a> en <a href="/kennisbank/plafond-drogen-na-lekkage/">hoe lang een plafond moet drogen</a>.`,
      ] },
      { kop: `Wie doet wat?`, tekst: [
        `Ik zoek waar het water binnenkomt en maak het dak of de goot dicht. Lukt een nette reparatie niet meteen, dan zorg ik eerst dat het binnen droog blijft. Het plafond zelf is werk voor een stukadoor of een afbouwbedrijf. Zat er een lamp of draad in het stuk dat naar beneden kwam, laat dan een installateur kijken voordat je de groep weer aanzet. Huur je, meld het dan meteen bij je verhuurder, zie <a href="/kennisbank/lekkage-huurhuis/">lekkage in een huurhuis</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek opsporen en dichten kost meestal ${inclBtw('daklekkage')}, inclusief materiaal. Stuur een foto van het gat in het plafond en van je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Kan ik vannacht in huis blijven?`, a: `Meestal wel, als je de deur van die kamer dichthoudt, de stroom van die kamer uit staat en niemand onder de rest van het plafond komt. Buigt er in een andere kamer ook een plafond door, of lekt het op meer plekken, stuur me dan meteen een foto. Twijfel je of het huis veilig is, bel dan 112.` },
      { v: `Betaalt de verzekering een nieuw plafond?`, a: `Vaak wel als het lek plotseling ontstond, bijvoorbeeld door storm. Komt het door slijtage of achterstallig onderhoud, dan vergoeden veel verzekeraars de reparatie van het dak zelf niet, maar soms wel de schade binnen. Dat verschilt per polis. Bel je verzekeraar, stuur je foto's mee en vraag wat ze nodig hebben.` },
      { v: `Bel ik eerst de verzekeraar of eerst jou?`, a: `Komt er nog water binnen, bel of app dan eerst mij, want de schade beperken gaat voor. Maak wel eerst foto's. Meld het daarna zo snel mogelijk bij je verzekeraar. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving die je kunt meesturen.` },
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
  "lekt-sinds-iemand-op-dak": `Lekt het sinds de schoorsteenveger, een monteur, de schilder of de glazenwasser op of aan je dak is geweest, dan is er vaak een pan gebroken of uit zijn sluiting geschoven, of zit er iets los waar een kabel of beugel het dak in gaat. Zo'n barst zie je vanaf de straat bijna nooit. Vang het water op, maak foto's, noteer wanneer er gewerkt is en meld het eerst bij wie het werk deed.`,
  "dakpan-in-tuin-gevonden": `Ligt er een dakpan of een stuk pan in je tuin of op de stoep, kijk dan eerst vanaf de overkant van de straat met de zoom van je telefoon of er een opening in je dak zit, en op zolder of je daglicht ziet. Mist er een pan of nokvorst, dan is het spoed, want bij de volgende bui regent het daar binnen. Bewaar de pan, ga niet zelf het dak op en stuur een foto.`,
  "plat-dak-onderhouden": `Kijk een of twee keer per jaar naar je platte dak, laat in de herfst en in het voorjaar, het liefst vanuit een raam boven. Let op of de afvoer vrij is, of er na een paar droge dagen nog een plas staat en of de naden, de rand en de strook tegen de muur nog dicht zitten. Laat blad en takken niet liggen en smeer geen kit op een plek die je niet vertrouwt.`,
  "zolder-nat-langs-zijmuur": `Wordt het op zolder nat langs de zijmuur van je hoekhuis, twee-onder-een-kap of vrijstaande huis, dan komt het water meestal van de rand van het dak erboven: een gevelpan die los ligt of gebroken is, een windveer die los zit of rot is, brokkelige specie langs de rand of het eindstuk van de goot. Soms trekt slagregen door de muur zelf. Kijk tijdens een bui waar het nat begint en maak een foto.`,
  "dak-lekt-huis-verkopen": `Lekt het dak terwijl je je huis verkoopt, laat het dan eerst maken en bewaar de rekening en foto's van wat er kapot was en wat er is gedaan. Het is in de regel verstandig om een lek dat je kent aan de koper te melden, ook als het al is gemaakt. Wat je in jouw geval precies moet vermelden, vraag je aan je makelaar of notaris.`,
  "daktermen-uitgelegd": `Op een pannendak heet het hoogste punt de nok, met daarop de nokvorsten. Waar twee dakvlakken in een hoek samenkomen, ligt een kilgoot, en een schuine nok op een schilddak heet een hoekkeper. Langs de zijkant zit de windveer met de gevelpannen, en rond een schoorsteen, dakraam of muur ligt lood of loodvervanger. Onder de pannen liggen panlatten en vaak folie.`,
  "jaren-30-huis-dak-lekt": `Lekt het dak van een huis uit de jaren '20 of '30, dan zit het meestal in het lood rond de schoorsteen, in een zinken goot of bakgoot met een open naad, in een nok of hoekkeper waarvan de specie is afgebrokkeld, of in een oude pan die gebroken of verschoven is. Vaak ligt er geen folie onder de pannen, dus een kapotte pan geeft al snel een lek. Meestal is een reparatie op die ene plek genoeg.`,
  "dak-jaren-70-rijtjeshuis": `Lekt het dak van een rijtjeshuis uit de jaren '60 of '70, dan zit het meestal bij de nok, waarvan de specie bros is geworden, bij een pijp door het dak met een uitgedroogde kraag, bij het lood rond de schoorsteen of het dakraam, of bij een oude kunststof goot. Ook het platte dak van de berging erachter lekt vaak waar het tegen de gevel komt. Meestal is een reparatie op die plek genoeg.`,
  "kerstverlichting-dakgoot": `Hang lichtjes aan je dakgoot met klemmen over de voorrand, zonder te boren, en leg de snoeren niet onderin de goot. Schuif niets onder je dakpannen, want een opgetilde pan laat regen en wind door. Leg de kabel niet door een dakraam naar binnen, en maak de goot vooraf leeg. Kijk na de feestdagen vanaf de straat of de pannen en de goot nog goed liggen.`,
  "water-uit-stopcontact-bij-regen": `Komt er na regen water uit een stopcontact of schakelaar, zet dan meteen de groep in de meterkast uit en raak het niet aan. Het water komt bijna nooit uit het stopcontact zelf: het loopt hoger in de muur binnen, bijvoorbeeld bij een overlopende goot, een lekke bakgoot, los lood of de rand van een plat dak, en zakt langs de buis met de draden naar beneden. Laat een installateur het stopcontact nakijken en een dakdekker het lek zoeken.`,
  "plafond-naar-beneden-door-lekkage": `Is er door een lek een stuk plafond naar beneden gekomen, ga dan de kamer uit, zet de groep van die kamer uit en ga niet onder de rest van het plafond staan. Vang het water op, maak foto's van het gat en de schade voordat je opruimt en meld het bij je verzekeraar. Laat eerst het lek in het dak dichten en alles erboven drogen. Het plafond zelf herstelt een stukadoor of afbouwbedrijf.`,
};
