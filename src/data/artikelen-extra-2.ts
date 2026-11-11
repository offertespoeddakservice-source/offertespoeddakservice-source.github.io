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
  {
    slug: `dak-monument-repareren`,
    datum: `2026-11-11`,
    titel: `Dak van een monument repareren`,
    h1: `Je dak repareren in een monument of beschermd stadsgezicht: wat mag en waar let je op?`,
    metaTitle: `Dak repareren bij een monument: wat mag? | Spoed Dak Service`,
    metaDescription: `Woon je in een monument of in een beschermd stadsgezicht, zoals de binnenstad van Den Bosch? Zo zit het met herstel, toestemming, pannen, lood en zinken goten.`,
    intro: `Woon je in een monument, of in een straat die beschermd stadsgezicht is, zoals de binnenstad van Den Bosch of de vesting Heusden, dan wil je bij een lek of een losse pan weten wat je mag. Kun je het gewoon laten repareren, of heb je eerst toestemming nodig? Hieronder lees je hoe het meestal zit, waar ik op let en wat je zelf vooraf regelt.`,
    secties: [
      { kop: `Lekt het nu? Eerst droog`, tekst: [
        `Een lek wacht niet. Zet een emmer onder de druppel en haal spullen weg die nat kunnen worden. Een open plek afdekken of een losse pan terugleggen, zodat het binnen droog blijft, kan meestal meteen. Wat je verder meteen doet, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Monument of beschermd stadsgezicht: wat is het verschil?`, tekst: [
        `Een rijksmonument of gemeentelijk monument is een gebouw dat zelf beschermd is. Een beschermd stadsgezicht is een heel gebied, zoals een oude binnenstad, waar vooral gelet wordt op hoe de straat en de daken eruitzien. Of jouw huis een monument is of in zo'n gebied ligt, kun je navragen bij je gemeente. Rijksmonumenten staan ook in het monumentenregister van de Rijksdienst voor het Cultureel Erfgoed.`,
      ] },
      { kop: `Gewoon herstel of een verandering?`, tekst: [
        `Herstel je iets met hetzelfde materiaal en in dezelfde vorm, zoals een kapotte pan vervangen door een pan die er net zo uitziet, of lood vernieuwen zoals het er lag, dan geldt dat in de regel als gewoon onderhoud. Verander je iets aan hoe het dak eruitziet, zoals een andere pan, een andere kleur, kunststof in plaats van zink of een dakraam erbij, dan heb je meestal eerst toestemming nodig. Twijfel je, vraag het dan vooraf na bij de gemeente. Dat is sneller dan achteraf iets terug moeten draaien.`,
      ] },
      { kop: `Waar ik op let bij een oud dak`, tekst: [
        `Ik kijk eerst wat er nu ligt: welke pan, welke kleur, hoe de nok is gelegd en hoe het lood en de goten zijn gemaakt. Een kapotte pan vervang ik door een die past, en soms moet ik daarvoor even zoeken naar een oude pan van dezelfde soort. Hoe je ziet welke pan je hebt, lees je in <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik?</a>`,
        `Meestal werk ik met loodvervanger, maar op een monument past echt lood vaak beter, en soms vraagt de gemeente erom. Dan werk ik met lood. Zie <a href="/kennisbank/lood-of-loodvervanger/">lood of loodvervanger</a>. Een oude zinken goot of bakgoot probeer ik eerst te herstellen, door een naad opnieuw te solderen of de goot van binnen te coaten, voordat hij vervangen moet worden. Lees <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Goten die je niet ziet`, tekst: [
        `In oude binnensteden liggen veel goten uit het zicht: achter een lijst in de rand van het dak, of tussen twee panden in. Raakt zo'n goot vol of gaat het zink lekken, dan loopt het water niet langs de gevel naar beneden, maar komt het binnen, soms bij de buren. Laat zulke goten daarom elk najaar nakijken en leegmaken. Zie ook <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Wat ik niet doe`, tekst: [
        `Aan de stenen en de voegen van de gevel of de schoorsteen werk ik niet. Is daar iets mee, dan heb je een metselaar nodig, en bij een monument het liefst een die ervaring heeft met oude gebouwen. Dat zeg ik je dan meteen.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse of kapotte pannen vervangen kost ${inclBtw("dakpan")}. Moet er een oude pan gezocht worden, of gaat het om lood of een zinken goot, stuur dan een foto van het dak vanaf de straat en van de plek waar het lekt. Dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakreparatie (pannen, lood en nok)`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Heb ik toestemming nodig om een kapotte pan op mijn monument te laten vervangen?`, a: `Meestal niet, als de nieuwe pan er net zo uitziet als de oude. Dat valt in de regel onder gewoon onderhoud. Wil je een andere pan of kleur, of iets anders aan het dak veranderen, vraag het dan eerst na bij je gemeente.` },
      { v: `Kom je ook in de binnenstad van Den Bosch en de vesting Heusden?`, a: `Ja. Den Bosch is mijn thuisbasis, en Heusden is zo'n 20 minuten rijden. In de smalle straten van de binnenstad en de vesting spreken we vooraf af waar ik mijn bus en ladder kwijt kan. Stuur eerst een foto van je dak vanaf de straat.` },
      { v: `Mag ik bij een monument zelf kiezen tussen lood en loodvervanger?`, a: `Dat hangt af van je gemeente. Bij een monument of in een beschermd stadsgezicht wil de gemeente vaak dat het dak eruit blijft zien zoals het was, en dan is echt lood vaak de beste keus. Vraag het vooraf na. Ik werk met allebei.` },
    ],
  },
  {
    slug: `lekkage-overgang-schuin-plat-dak`,
    datum: `2026-11-11`,
    titel: `Lek waar schuin en plat dak samenkomen`,
    h1: `Lekkage waar je schuine dak overgaat in een plat dak: waar zit het?`,
    metaTitle: `Lek bij overgang schuin en plat dak | Spoed Dak Service`,
    metaDescription: `Lekt het precies waar je pannendak eindigt op het platte dak van je aanbouw of garage? Zo zie je of het de strook onder de pannen, de opstand of de hoek is.`,
    intro: `Bij veel huizen loopt het schuine pannendak aan de achterkant door tot op het platte dak van een aanbouw, of ligt een garage met een plat dak tegen de zijkant van een schuin dak. Op die overgang komen twee soorten dak samen, en daar lekt het nogal eens. Hieronder lees je waar het meestal zit, hoe je het herkent en hoe het weer dicht gaat.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en haal spullen weg die nat kunnen worden. Ga niet op het platte dak staan als het nat is of hard waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Hoe zo'n overgang in elkaar zit`, tekst: [
        `Waar de onderste rij pannen boven een plat dak eindigt, ligt onder die pannen meestal een strook lood of loodvervanger. Die strook valt over de rand van het platte dak en leidt het water van de pannen naar de dakbedekking. De dakbedekking van het platte dak loopt op die plek een stukje omhoog, onder de strook door. Zo overlappen de twee daken elkaar, en loopt het water van boven naar beneden zonder ertussen te komen.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `De strook onder de pannen. Na jaren scheurt lood bij de vouwen of krult het op, en loodvervanger kan loskomen. Dan loopt het water achter de strook langs naar binnen. Hoe je ziet dat lood op is, lees je in <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
        `De opstand van het platte dak. Loopt de dakbedekking niet hoog genoeg door onder de pannen, of is hij daar losgekomen of gescheurd, dan komt het water bij een flinke bui over de rand van de bedekking heen.`,
        `De hoek. Waar de overgang tegen een muur of tegen de zijkant van het schuine dak aansluit, komen naden van verschillende kanten samen. Daar blijven ook blad en mos liggen.`,
        `Water dat er niet weg kan. Van het hele schuine dak komt het water op die ene strook terecht. Ligt de afvoer van het platte dak ver weg of zit hij vol blad, dan blijft er na een bui water tegen de overgang staan. Lees ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Zo herken je het`, tekst: [
        `De natte plek zit binnen meestal in de aanbouw of de garage, vlak onder de plek waar het schuine dak overgaat in het platte dak. Vaak wordt het pas nat na een flinke bui, of bij regen met wind van die kant. Kijk vanuit een raam boven of je een strook ziet die omhoog staat, een scheur in de dakbedekking langs de rand, of een plas tegen de overgang. Zit de natte plek langs een gewone muur van het huis, zonder pannen erboven, lees dan <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst waar het water echt binnenkomt, want de natte plek binnen zit vaak een stukje verderop. Daarna leg ik de onderste pannen even weg, herstel of vernieuw ik de strook eronder en maak ik de aansluiting van de dakbedekking weer dicht. Meestal werk ik met loodvervanger, en met echt lood als je dat liever hebt. Is het hout onder het platte dak op die plek zacht geworden, dan vervang ik dat als het nodig is. Zie ook <a href="/diensten/platte-daken/">platte daken</a> en <a href="/diensten/lood-vervangen/">lood vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een daklek opsporen en dichtmaken kost bij mij ${inclBtw("daklekkage")}, inclusief materiaal. Moet de strook over de hele breedte nieuw, of is er meer kapot, dan hoor je dat en de prijs voordat ik verder ga. Stuur een foto van de overgang, gemaakt vanuit een raam boven, en van de natte plek binnen.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Kan ik de strook onder de pannen zelf dichtkitten?`, a: `Een likje kit houdt het soms even droog, maar op lood of loodvervanger dat beweegt, en op een vuile of natte ondergrond, laat het meestal snel weer los. Vaak zit het lek ook net onder de pannen, waar je met kit niet bij komt. Zet liever een emmer neer en stuur me een foto.` },
      { v: `Waarom lekt het alleen bij een stortbui?`, a: `Bij gewone regen kan het water op tijd weg. Bij een stortbui komt er van het hele schuine dak zoveel water op de overgang, dat het hoger komt te staan dan de opstand van het platte dak of de rand van de strook. Dan zoekt het een weg naar binnen. Een afvoer die vol blad zit, maakt dat erger.` },
      { v: `Is het spoed?`, a: `Druppelt het binnen, of zit de natte plek bij een lamp of stopcontact, dan wel. Zet dan de groep van die kamer uit in de meterkast en bel of app me. Zie je alleen een oude kring die na een bui niet groter wordt, dan kan het meestal een paar dagen wachten.` },
    ],
  },
  {
    slug: `regenpijp-loost-op-dak`,
    datum: `2026-11-11`,
    titel: `Regenpijp komt uit op het dak eronder`,
    h1: `Je regenpijp komt uit op het dak eronder: kan dat lekken?`,
    metaTitle: `Regenpijp loost op lager dak: erg? | Spoed Dak Service`,
    metaDescription: `Komt de regenpijp van je bovenste goot uit op het dak van je aanbouw of garage? Waarom dat op den duur kan lekken en hoe het water netjes wegloopt.`,
    intro: `Bij veel huizen loopt de regenpijp van de bovenste goot niet naar de grond, maar komt hij uit op een lager dak: het platte dak van de aanbouw, de garage of de berging, of de pannen van een lager stuk dak. Dat werkt, maar bij elke bui komt al het water van je grote dakvlak op één plek terecht. Hieronder lees je wanneer dat kwaad kan, hoe je het ziet en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en haal spullen weg die nat kunnen worden. Ga niet op het lage dak staan als het nat is of waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom die ene plek het zwaar krijgt`, tekst: [
        `Een regenpijp verzamelt het water van een heel dakvlak. Komt die pijp uit boven een lager dak, dan klettert bij een flinke bui al dat water op een paar pannen of op één stukje dakbedekking. Dat is iets anders dan gewone regen, die over het hele dak verdeeld valt.`,
      ] },
      { kop: `Op een pannendak`, tekst: [
        `Valt het water op de pannen van een lager dak, dan kan het onder de rand van een pan spatten, of bij harde wind onder de pannen door waaien. Een pan die steeds die straal krijgt, kan ook een stukje gaan schuiven. Het water loopt dan over de panlatten of de folie naar beneden en komt verderop binnen, vaak bij de muur of onderaan bij de goot. In de winter kan het water daar bevriezen, en dan loopt de rest er bij dooi overheen. Lees ook <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
      { kop: `Op een plat dak`, tekst: [
        `Op een plat dak slijt de dakbedekking sneller op de plek waar de straal neerkomt. Ligt er grind op het dak, dan spoelt het daar weg en ligt de bedekking open in de zon. Ligt de afvoer een eind verderop, dan staat er na een stortbui een plas rond die plek, en staand water zoekt elke kleine scheur op. Lees ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a> en <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
      ] },
      { kop: `Zo zie je het`, tekst: [
        `Kijk tijdens een flinke bui vanuit een raam boven naar de plek waar de pijp uitkomt. Spat het water alle kanten op, loopt het over de rand van de pannen, of blijft het op het platte dak staan? Kijk na de bui of er grind is weggespoeld, of er een donkere of groene plek op de dakbedekking zit en of er een pan scheef ligt. Binnen zie je het aan een natte plek in de aanbouw of de garage, vaak onder of vlak naast die plek, en vooral na een stortbui.`,
      ] },
      { kop: `Wat eraan te doen is`, tekst: [
        `Meestal is de oplossing eenvoudig: de pijp doortrekken tot in de goot of de afvoer van het lagere dak, of er een bocht onder zetten zodat het water netjes in de goot loopt in plaats van op de pannen. Op een plat dak kan de pijp ook aansluiten op de afvoer zelf, of op een regenpijp die daar al staat. Is de dakbedekking of een pan op die plek al beschadigd, dan maak ik dat eerst dicht. Zie <a href="/diensten/regenpijp-vervangen/">regenpijp vervangen of repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoe lang de pijp moet worden, waar hij op aansluit en of er al schade is aan de pannen of de dakbedekking. Stuur een foto van de plek waar de pijp uitkomt en, als het lekt, van de natte plek binnen. Dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: regenpijp vervangen of repareren`, href: `/diensten/regenpijp-vervangen/` },
    faq: [
      { v: `Mag een regenpijp gewoon op een plat dak uitkomen?`, a: `Het mag, en je ziet het veel. Maar bij een flinke bui komt al het water van het dakvlak erboven op één plek terecht. Ligt de afvoer dichtbij en is de dakbedekking daar goed, dan gaat het vaak jaren goed. Ligt de afvoer ver weg of spoelt het grind weg, dan is het beter om de pijp door te trekken tot in de afvoer.` },
      { v: `Kan ik er zelf een tegel onder leggen?`, a: `Op een plat dak beschermt een losse tegel onder de uitloop de dakbedekking tegen de straal. Leg hem wel zo neer dat het water eronder door kan, en ga alleen op het dak als dat veilig kan, op een droge dag. Op een pannendak helpt een tegel niet. Daar is de pijp doortrekken tot in de goot beter.` },
      { v: `Is het spoed?`, a: `Meestal niet, maar laat het niet de hele winter zo. Druppelt het binnen, zet dan een emmer neer en stuur me een foto. Blijft het binnen droog en zie je alleen dat het water op het dak spat, dan kan het wachten tot een droge dag.` },
    ],
  },
  {
    slug: `plat-dak-met-grind-lekt`,
    datum: `2026-11-11`,
    titel: `Plat dak met grind lekt`,
    h1: `Plat dak met grind lekt: waar zit het, en moet het grind eraf?`,
    metaTitle: `Plat dak met grind lekt: wat nu? | Spoed Dak Service`,
    metaDescription: `Lekt je platte dak met grind erop? Meestal zit het bij de afvoer, de rand of een naad onder het grind. Zo zie je waar, en waarom het grind er niet helemaal af hoeft.`,
    intro: `Op veel platte daken van een aanbouw, garage of berging ligt een laag grind. Lekt zo'n dak, dan zie je niet waar het zit, want het grind ligt over de dakbedekking heen. Veel mensen denken dan dat al het grind eraf moet. Meestal hoeft dat niet. Hieronder lees je waarom er grind op ligt, waar het meestal lekt en hoe het lek gevonden wordt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel en haal spullen weg die nat kunnen worden. Druppelt het bij een lamp of stopcontact, zet dan in de meterkast de groep van die ruimte uit. Ga niet op het dak als het nat is, waait of vriest. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom er grind op je dak ligt`, tekst: [
        `Het grind ligt los op de dakbedekking. Het houdt de zon tegen, zodat de bitumen of het rubber eronder minder snel oud wordt, en het houdt de bedekking bij harde wind op zijn plek. Het grind zelf houdt geen water tegen. Dat doet de laag eronder.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Bij de afvoer. Grind en blad spoelen naar de uitloop en zetten die half dicht. Dan blijft het water rond de afvoer staan en zoekt het een kier in de aansluiting. Zie <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
        `Langs de rand en tegen de muur. Waar de dakbedekking omhoog loopt tegen een muur of over de daktrim, ligt meestal geen grind. Daar krijgt de bedekking de meeste zon en beweging, en daar laat een naad of hoek het eerst los. Zie <a href="/kennisbank/daktrim-lekt/">plat dak lekt langs de rand</a>.`,
        `Op een kale plek. Waait of spoelt het grind ergens weg, bijvoorbeeld onder een regenpijp of in een hoek waar de wind het wegblaast, dan ligt de bedekking daar open in de zon. Die plek wordt sneller bros en kan gaan scheuren.`,
        `Bij een pijp of lichtkoepel. Rond alles wat door het dak steekt, zit een aansluiting die na jaren kan loslaten. Zie <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.`,
      ] },
      { kop: `Zo kijk je zelf, zonder het dak op te gaan`, tekst: [
        `Kijk vanuit een raam boven of vanaf een stevige ladder aan de rand. Staat er na een paar droge dagen nog een plas rond de afvoer? Is het grind ergens weggespoeld, zodat je de zwarte bedekking ziet? Staat de rand of de trim ergens omhoog? Kijk binnen waar de natte plek zit: vlak bij de buitenmuur, onder de afvoer of midden in de ruimte. Maak van alles een foto. Blijft het water lang staan, lees dan ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Moet al het grind eraf?`, tekst: [
        `Meestal niet. Ik begin bij de plekken waar het het vaakst lekt: de afvoer, de rand, de aansluiting tegen de muur en wat er door het dak steekt. Daar schep ik het grind opzij, zodat ik de bedekking goed kan zien. Vind ik daar niets, dan volg ik vanaf de natte plek binnen de weg van het water. Na de reparatie gaat het grind weer terug, zodat de bedekking weer beschermd is. Alleen als de bedekking over het hele dak op is, moet het grind er helemaal af, en dat hoor je dan eerst.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Schep het grind niet zelf weg en zet er geen zware spullen op, want zo druk je makkelijk een scherp steentje in de bedekking. Spuit het dak niet schoon met een hogedrukreiniger. En smeer geen kit of verf op een plek waar je een lek vermoedt: de echte oorzaak ligt dan vaak nog open, en de reparatie wordt later lastiger.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek in een klein plat dak repareren, zoals van een aanbouw, garage of berging, kost bij mij ${inclBtw("platdak")}. Is het hout onder de bedekking zacht geworden, of is de bedekking op meer plekken op, dan hoor je dat en de prijs voordat ik verder ga. Zie ook <a href="/diensten/platte-daken/">platte daken</a> en <a href="/kennisbank/zachte-plek-plat-dak/">zachte plek op je platte dak</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Moet al het grind van mijn dak om het lek te vinden?`, a: `Meestal niet. Ik kijk eerst bij de afvoer, de rand, de muur en rond pijpen of een koepel, en schep alleen daar het grind opzij. Na de reparatie gaat het grind terug. Pas als de hele bedekking op is, moet het er helemaal af.` },
      { v: `De afvoer op mijn dak zit vol grind. Kan ik die zelf vrijmaken?`, a: `Kun je er veilig bij, vanaf een stevige ladder of een dakterras met een hek, dan kun je het grind en blad bij de uitloop voorzichtig met de hand weghalen. Duw niets de pijp in. Ga niet op het dak als het nat is of waait. Loopt het water daarna nog steeds slecht weg, of lekt het binnen, stuur me dan een foto.` },
      { v: `Is een lek in een plat dak met grind spoed?`, a: `Druppelt het binnen, of zit de natte plek bij een lamp of stopcontact, dan wel. Zet dan de groep van die ruimte uit en bel of app me. Zie je alleen een droge, oude kring die na een bui niet groter wordt, dan kan het meestal een paar dagen wachten.` },
    ],
  },
  {
    slug: `pannendak-schuur-lekt`,
    datum: `2026-11-11`,
    titel: `Pannendak van je schuur lekt`,
    h1: `Het pannendak van je schuur, garage of oude stal lekt: waar zit het?`,
    metaTitle: `Pannendak van schuur of garage lekt | Spoed Dak Service`,
    metaDescription: `Lekt het pannendak van je schuur, garage of oude stal? Vaak ligt er geen folie onder en zit het in een gebroken pan, de nok of een rotte panlat. Zo zie je wat het is.`,
    intro: `Veel schuren, garages en oude stallen hebben een schuin dak met pannen, net als een huis. Alleen is zo'n dak vaak eenvoudiger gebouwd: de pannen liggen direct op de latten, zonder folie of planken eronder. Van binnen kijk je zo tegen de onderkant van de pannen aan. Lekt het, dan druppelt het meteen op je fiets, je gereedschap of je voorraad. Hieronder lees je hoe zo'n dak in elkaar zit, waar het meestal lekt en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een bak onder de druppel en haal spullen weg die niet nat mogen worden. Druppelt het bij een stopcontact, een lamp of een machine, zet dan de stroom van die groep uit. Ga niet op het dak staan: oude pannen en latten breken makkelijk. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo ligt een pannendak op een schuur`, tekst: [
        `Op een huis ligt onder de pannen meestal folie of houten platen, en die vangen water op dat onder een pan door waait. Op veel schuren en oude stallen is dat er niet. De pannen haken met hun neusje achter de panlatten, en daaronder is het open. Dat is niet fout: zo'n dak kan jaren droog blijven zolang de pannen goed liggen. Maar elke pan die breekt of verschuift, laat het water meteen naar binnen.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Een gebroken of verschoven pan. Een tak, vorst of iemand die op het dak heeft gestaan: één kapotte pan is genoeg. Van binnen zie je het vaak meteen, aan een streep daglicht of een natte plek op de lat eronder. Zie ook <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a>.`,
        `De nok. Liggen de nokvorsten in specie, dan brokkelt die na jaren af. Bij harde wind waait de regen dan langs de nok naar binnen. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Waar de schuur tegen je huis of een muur aan zit. Daar ligt een strook lood of loodvervanger tussen het dak en de muur. Laat die los, dan loopt het water langs de muur naar binnen. Zie <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
        `Rotte panlatten. Blijft het ergens lang nat, dan kan een lat zacht worden. Een pan ligt dan niet meer goed vast en gaat schuiven.`,
        `De goot. Een schuur heeft vaak een lage goot, soms vlak onder bomen. Zit die vol, dan loopt het water over de rand of terug onder de onderste pannen.`,
      ] },
      { kop: `Zo kijk je zelf`, tekst: [
        `Ga op een droge dag in de schuur staan en kijk met een zaklamp omhoog. Zie je ergens daglicht, een donkere vlek op een lat of een pan die anders ligt dan de rest? Kijk na een bui waar de druppels vallen. Kijk buiten vanaf de grond, of vanaf een stevige ladder aan de zijkant, naar de nok, de pannen langs de rand en de goot. Maak van alles een foto.`,
        `Liggen er op een deel van je schuur geen pannen maar golfplaten, lees dan <a href="/kennisbank/golfplaten-lekken/">golfplaten lekken</a>, met wat je eerst nagaat bij oude platen.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Een gebroken of verschoven pan vervang ik of leg ik terug, met een pan die past bij wat er ligt. Een losse nokvorst zet ik weer vast. Is de strook langs de muur los, dan herstel ik die, meestal met loodvervanger en op wens met echt lood. Zie ik dat er latten rot zijn of dat er op veel plekken pannen op zijn, dan hoor je dat eerst, en ook wat het kost, voordat ik verder ga. Wil je dat het in de schuur droger blijft, bijvoorbeeld omdat je er spullen bewaart, dan kan er bij een grotere vernieuwing folie onder de pannen. Dat is een keuze, geen moet.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse of gebroken pannen vervangen, of een nokvorst weer vastzetten, kost bij mij ${inclBtw("dakpan")}. Is er meer nodig, zoals nieuwe latten of een groter stuk dak, stuur dan een foto van binnen en van buiten. Je hoort de prijs voordat ik begin. Zie ook <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Moet er folie onder de pannen van mijn schuur?`, a: `Niet per se. Veel schuren hebben nooit folie gehad en blijven droog zolang de pannen goed liggen. Wel waait er bij harde wind of stuifsneeuw makkelijker wat naar binnen. Bewaar je er spullen die echt droog moeten blijven, dan kan folie zinvol zijn als het dak toch een keer vernieuwd wordt.` },
      { v: `Ik zie van binnen een streep daglicht. Lekt het daar dan?`, a: `Niet altijd. Bij pannen zonder folie eronder zie je vaak wat licht langs de randen, ook als ze goed liggen. Zie je een brede streep, een stuk lucht of een pan die schuin hangt, dan ligt er een pan los of is er een kapot. Kijk na een bui of het onder die plek nat is, en stuur me een foto van binnen en van buiten.` },
      { v: `Kan het lek in mijn schuur tot het voorjaar wachten?`, a: `Dat hangt af van wat eronder staat en hoeveel het lekt. Een paar druppels op een betonvloer kunnen vaak even wachten, maar water op houten latten maakt ze op den duur zacht, en dan gaan er meer pannen schuiven. Ligt er een pan los die bij storm kan wegwaaien, laat hem dan voor de winter vastzetten.` },
    ],
  },
  {
    slug: `wat-kost-dakpan-vervangen`,
    datum: `2026-11-11`,
    titel: `Wat kost een dakpan vervangen?`,
    h1: `Wat kost een dakpan vervangen? Eén losse pan, een paar pannen of de nok`,
    metaTitle: `Wat kost een dakpan vervangen? | Spoed Dak Service`,
    metaDescription: `Een paar losse of gebroken dakpannen vervangen kost bij mij ${inclBtw("dakpan")}. Waar de prijs van afhangt en wat je stuurt om vooraf een vaste prijs te horen.`,
    intro: `Er ligt een pan scheef, er is er een gebroken door een tak, of je vindt een stuk pan in de tuin. Dan wil je vooral weten wat dat gaat kosten. Hieronder lees je wat een paar pannen vervangen bij mij kost, waar de prijs van afhangt en hoe je vaak al met een foto de prijs hoort.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Druppelt het binnen, zet dan een emmer neer en haal spullen weg. Ligt er een pan of een stuk van de nok op de stoep, blijf dan uit de buurt van die kant van het huis. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat het kost`, tekst: [
        `Een paar losse of gebroken pannen vervangen, of een nokvorst weer vastzetten, kost bij mij ${inclBtw("dakpan")}. Dat is een vanaf-prijs. Je hoort één vaste prijs voor de hele klus voordat ik begin, geen bedrag per uur.`,
      ] },
      { kop: `Waar de prijs van afhangt`, tekst: [
        `Hoeveel pannen het zijn. Eén of een paar pannen is een kleine klus. Ligt er na een storm een hele rij los, of zijn er op een dakvlak veel pannen op, dan is het meer werk.`,
        `Waar ze liggen. Een pan in de onderste rij boven de goot is makkelijker te bereiken dan een pan vlak onder de nok of midden op een steil dak. Ook een aanbouw of erker waar ik eerst overheen moet, telt mee.`,
        `Of er een pan te krijgen is die past. Veel pannen worden nog gemaakt, maar van oudere modellen soms niet meer. Dan zoek ik een pan die in vorm en maat zo goed mogelijk past. Hoe je zelf ziet welke pan je hebt, lees je in <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik?</a>`,
        `Of er meer aan de hand is. Ligt een pan scheef omdat de lat eronder rot is, of is het lood ernaast ook los, dan hoor je dat eerst, en wat het extra kost, voordat ik verder ga.`,
      ] },
      { kop: `En de nok?`, tekst: [
        `Eén losse nokvorst weer vastzetten valt onder dezelfde kleine reparatie. Moeten de nokvorsten over de hele nok opnieuw worden aangesmeerd met dakmortel, dan kost dat ${inclBtw("nok_repareren")}. Moet de hele nok vervangen worden, stuur dan een foto. Meer lees je in <a href="/kennisbank/wat-kost-nokvorsten-repareren/">wat kost nokvorsten repareren</a>.`,
      ] },
      { kop: `Zo hoor je de prijs vooraf`, tekst: [
        `Maak vanaf de overkant van de straat een foto van je dak, met de zoom van je telefoon, en als het kan ook een uit een raam boven. Ligt er een stuk pan in de tuin, maak daar ook een foto van. Lekt het binnen, stuur dan ook de natte plek. Stuur alles via WhatsApp. Dan zie ik vaak al wat er nodig is en hoor je de prijs. Zie ik op de foto niet genoeg, dan zeg ik dat eerlijk.`,
      ] },
      { kop: `Zelf doen?`, tekst: [
        `Een pan vervangen lijkt een klein klusje, maar je staat op een schuin dak waar oude pannen onder je voeten breken, en een nat of bemost dak is glad. Kitten of lijmen van een gebroken pan houdt meestal niet lang: zie <a href="/kennisbank/dakpan-lijmen-of-kitten/">dakpan lijmen of kitten</a>. Hoe je ziet of een pan kapot of verschoven is, lees je in <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Reken je per pan?`, a: `Nee. Je hoort vooraf één vaste prijs voor de hele klus. Een paar pannen vervangen kost ${inclBtw("dakpan")}. Zijn het er veel meer, of moet er ook aan de nok of het lood iets gebeuren, dan hoor je dat en de prijs voordat ik begin.` },
      { v: `Betaalt mijn verzekering een pan die bij een storm is gebroken?`, a: `Vaak wel, als het echt storm was. Lag de pan al lang los of was hij al poreus, dan zien verzekeraars het eerder als onderhoud. Maak foto's van het dak en van de stukken pan voordat er iets wordt gerepareerd, en kijk in je polis. Meer lees je in het artikel over daklekkage en je verzekering.` },
      { v: `Ik heb nog een paar oude pannen in de schuur liggen. Heb je daar wat aan?`, a: `Vaak wel. Liggen er na een verbouwing of een eerdere reparatie nog pannen in je schuur of op zolder, gooi ze dan niet weg. Past zo'n pan bij je dak, dan gebruik ik hem, en dan hoef ik niet te zoeken naar een pan die past.` },
    ],
  },
  {
    slug: `natte-plek-schuine-wand-zolder`,
    datum: `2026-11-11`,
    titel: `Natte plek op de schuine wand van je zolderkamer`,
    h1: `Natte plek op de schuine wand van je zolderkamer: lek of condens?`,
    metaTitle: `Natte plek op schuine wand zolderkamer | Spoed Dak Service`,
    metaDescription: `Een natte plek of kring op de schuine wand van je zolderkamer? Zo zie je of het van de pannen, het dakraam, de nok of condens komt, en wat je meteen doet.`,
    intro: `Is je zolder een slaapkamer of werkkamer, dan zit er tegen de schuine kant van het dak vaak een wand van gipsplaat of schrootjes. Komt daar een natte plek, een gele kring of bladderende verf op, dan zie je het lek zelf niet, want dat zit achter de wand, ergens in het dak. Hieronder lees je waar het water meestal vandaan komt, hoe je condens herkent en wat je meteen kunt doen.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een bak of een handdoek onder de plek en schuif een bed of bureau opzij. Zit de natte plek bij een stopcontact, een lamp of spotjes in de schuine wand, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom je het lek niet ziet`, tekst: [
        `Achter de schuine wand zit meestal isolatie, daarachter het dakbeschot of de folie, en daarop liggen de pannen. Water dat ergens onder een pan door komt, loopt eerst over de folie of het hout naar beneden en zakt pas verderop door de isolatie naar binnen. De natte plek op je wand zit daarom vaak lager dan het lek. Hoe ik dat terugvolg, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Waar het meestal vandaan komt`, tekst: [
        `Een dakraam in dezelfde wand. Zit de natte plek onder of naast een dakraam, dan zit het vaak in de aansluiting rond het raam: het gootstuk, het lood of een pan ernaast. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `Een verschoven of gebroken pan hoger op het dak. Na harde wind of een tak op het dak ligt er soms een pan scheef. Vanaf de straat zie je dat met de zoom van je telefoon. Zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
        `De nok. Zit de plek bovenin, vlak onder het hoogste punt van de kamer, kijk dan bij <a href="/kennisbank/lekkage-bij-de-nok/">nat bovenin, onder de nok</a>.`,
        `De schoorsteen of een pijp door het dak. Zit de plek in de buurt van het schoorsteenkanaal of een afvoer, dan is het lood of de kraag rond die doorvoer een bekende plek. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a> en <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
        `Onderaan de schuine wand, waar hij overgaat in het knieschot. Dan kan het ook bij de goot of de onderste pannen zitten. Zie <a href="/kennisbank/nat-achter-knieschot/">nat achter het knieschot</a>.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `In de winter kan een natte plek op een schuine wand ook condens zijn. Is de isolatie achter de wand op één plek ingezakt of nat geworden, dan is dat stuk wand kouder dan de rest, en daar slaat vocht uit de kamer neer. Je ziet dan vaak een vochtige waas of zwarte puntjes, ook na droge dagen, vooral na een koude nacht of als er in de kamer wordt geslapen. Een lek zie je meestal na regen, op één plek, met een duidelijke kring. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Zo kijk je zelf`, tekst: [
        `Kijk na een flinke bui of de plek groter of donkerder wordt. Zet met potlood een streep langs de rand van de kring, dan zie je na de volgende bui meteen of hij groeit. Kijk vanaf de overkant van de straat of de pannen boven die kamer recht liggen, en maak een foto met de zoom van je telefoon. Haal de wand niet zelf open om te zoeken, want vaak is dat niet nodig.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik zoek eerst waar het water echt binnenkomt: van buiten bij de pannen, het dakraam, de nok of het lood, en van binnen waar ik achter de wand kan kijken, bijvoorbeeld via de bergruimte achter het knieschot. Daarna maak ik het lek dicht. De wand hoeft daarvoor meestal niet open. Is de isolatie achter de wand nat geworden, dan zeg ik dat eerlijk, want natte isolatie droogt niet altijd vanzelf. Zie <a href="/kennisbank/isolatie-nat-na-lekkage/">isolatie nat na een lekkage</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek opsporen en dichtmaken kost bij mij ${inclBtw("daklekkage")}, inclusief het zoeken en het materiaal. Stuur een foto van de natte plek en van je dak vanaf de straat via WhatsApp, dan hoor je vooraf de vaste prijs. Zie ook <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Moet de schuine wand open om het lek te vinden?`, a: `Meestal niet. Vaak zie ik van buiten al waar het water binnenkomt, bij een pan, het dakraam, de nok of het lood. Soms kan ik via de bergruimte achter het knieschot of een luik bij de achterkant van de wand kijken. Moet er toch een stukje open, dan bespreken we dat eerst.` },
      { v: `De plek is weer droog. Moet ik dan nog iets doen?`, a: `Kijk bij de volgende flinke bui, zeker als het ook waait, of de plek terugkomt. Komt hij terug, dan lekt het nog en wordt de isolatie erachter steeds natter. Laat het dan nakijken voordat het hout gaat rotten of er schimmel komt.` },
      { v: `Wanneer kan ik de vlek overschilderen?`, a: `Pas als het lek gemaakt is en de wand helemaal droog is. Gebruik eerst een grondverf die vlekken afdekt, anders schemert de kring door de nieuwe verf heen. Hoe lang drogen duurt, lees je in het artikel over een plafond drogen na een lekkage.` },
      { v: `Is een natte plek op de schuine wand spoed?`, a: `Druppelt het, wordt de plek bij elke bui groter of zit hij bij een stopcontact of lamp, dan wel: bel of app me met een foto. Is het een oude, droge kring die niet groter wordt, dan kan het meestal een paar dagen wachten.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel (zie KORT_ANTWOORD in artikelen-extra.ts). Geen bedragen met de hand.
export const KORT_ANTWOORD_2: Record<string, string> = {
  "lood-of-loodvervanger": `Lood en loodvervanger doen hetzelfde werk: ze leiden het water bij een schoorsteen, muur of dakraam over de pannen. Loodvervanger is lichter, makkelijk te vormen en niet interessant voor dieven, en daarom gebruik ik het meestal. Echt lood kan op wens, en past vaak beter bij een monument of een dak waar al lood op ligt.`,
  "lekdetectie-daklek": `Bij een lek in je dak is een lekdetectiebedrijf meestal niet nodig. Het water komt van buiten, en een dakdekker vindt de plek vaak door op zolder het waterspoor te volgen en buiten naar de pannen, de nok, het lood en de pijpen te kijken. Meetapparatuur heeft vooral zin bij een lek in een leiding, of soms bij een plat dak met isolatie eronder.`,
  "lekkage-bij-kachelpijp": `Lekt het langs de pijp van je houtkachel, dan zit het meestal op het dak: een uitgedroogde of gescheurde kraag om de pijp, een stormkraag die is gezakt of een slab die niet goed onder de pannen ligt. Druppelt er bruin water dat naar rook ruikt, ook als het droog is, dan is het eerder condens in de pijp zelf. Dat is werk voor je kachelinstallateur.`,
  "lekkage-bij-de-nok": `Een natte plek helemaal bovenin je zolder komt meestal van een losse nokvorst, een gescheurde strook onder een droge nok, een kapotte pan vlak onder de nok of een pijp die hoog door het dak gaat. Wordt het alleen nat na een koude nacht, ook zonder regen, dan is het vaak condens.`,
  "druppelen-horen-plafond": `Hoor je alleen bij regen getik, dan valt het water vaak buiten op lood, een kap of een vensterbank, of ligt het binnen nog op de isolatie of een balk. Kijk tijdens een bui met een zaklamp op zolder. Hoor je het ook als het droog is, dan is een leiding of afvoer waarschijnlijker en heb je een loodgieter nodig.`,
  "plafond-drogen-na-lekkage": `Een kleine natte plek in een plafond van gipsplaat is vaak binnen een paar weken droog, een betonnen plafond met stucwerk kan een maand of langer nodig hebben. Laat het rustig drogen, zet de bruine kring daarna eerst in met een vlekkendekkende grondverf en schilder pas dan. Komt de vlek na een bui terug, dan lekt het nog.`,
  "dak-monument-repareren": `Herstel met hetzelfde materiaal en in dezelfde vorm, zoals een kapotte pan vervangen door een pan die er net zo uitziet, geldt bij een monument in de regel als gewoon onderhoud. Wil je iets veranderen aan hoe het dak eruitziet, zoals een andere pan, kunststof in plaats van zink of een dakraam erbij, vraag dan eerst bij de gemeente of daar toestemming voor nodig is.`,
  "lekkage-overgang-schuin-plat-dak": `Lekt het waar je schuine pannendak eindigt op een plat dak, dan zit het meestal in de strook lood of loodvervanger onder de onderste pannen, in de dakbedekking die daar niet meer goed onder de pannen doorloopt, of in de hoek waar de overgang tegen een muur komt. Vaak is het een gerichte reparatie op die ene plek.`,
  "regenpijp-loost-op-dak": `Komt de regenpijp van je bovenste goot uit op een lager dak, dan valt bij elke bui al het water van dat dakvlak op één plek. Op pannen kan het onder de rand spatten of een pan laten schuiven, op een plat dak slijt de dakbedekking daar sneller. Meestal is de oplossing de pijp doortrekken tot in de goot of de afvoer eronder.`,
  "plat-dak-met-grind-lekt": `Lekt een plat dak met grind, dan zit het meestal bij de afvoer, langs de rand of tegen de muur, bij een pijp of koepel, of op een plek waar het grind is weggespoeld. Het grind hoeft er daarvoor meestal niet helemaal af: alleen op die plekken gaat het opzij, en na de reparatie gaat het terug.`,
  "dakgoot-zelf-schoonmaken": `Een lage goot van een schuur, garage of aanbouw kun je meestal zelf leegmaken: op een droge dag, met een stevige ladder tegen de muur en niet tegen de goot, werkhandschoenen en een emmer. Begin bij de uitloop naar de regenpijp. Zit de goot op de eerste verdieping of hoger, of is het een bakgoot of kilgoot, laat het dan liever doen.`,
  "verstopte-regenpijp-lekkende-dakgoot": `Loopt je goot bij een bui over en komt er bijna niets uit de regenpijp, dan zit de uitloop of de pijp meestal dicht met blad, mos of slib. Vaak is die vrijmaken genoeg. Druppelt het op één vaste plek, ook als de bui al voorbij is, dan lekt de goot eerder bij een naad, een hoek of de uitloop zelf.`,
  "golfplaten-lekken": `Golfplaten lekken meestal bij een schroef waarvan het ringetje is uitgedroogd, bij de overlap tussen twee platen of waar de platen tegen een muur aansluiten. Druppels verspreid over de hele onderkant op koude ochtenden zijn vaak condens. Zijn de platen oud en grijs, laat dan eerst nagaan of er asbest in zit voordat iemand erin boort of zaagt.`,
  "schoorsteen-afdekken": `Stook je niet meer en staat het kanaal bovenin open, dan valt er bij elke bui regen in. Een kap of afdekplaat houdt die regen eruit, terwijl er aan de zijkant nog lucht door kan, zodat het kanaal blijft ademen. Een kanaal helemaal dichtmaken zonder ventilatie geeft later vaak vochtplekken binnen.`,
  "lekkende-dakgoot-verzekering": `Een natte muur of plafond door een lekkende dakgoot wordt vaak vergoed als het water plotseling binnenkwam, bijvoorbeeld bij een storm. De reparatie van de goot zelf, en schade door een goot die al lang lekte of vol zat, zien verzekeraars meestal als onderhoud. Wat jij vergoed krijgt, staat in je eigen polis. Maak foto's voordat er iets wordt gerepareerd.`,
  "wat-kost-nokvorsten-repareren": `Eén losse nokvorst weer vastzetten kost bij mij ${inclBtw("dakpan")}. Is de specie onder de nok op en moeten de vorsten opnieuw worden aangesmeerd met dakmortel, dan kost dat ${inclBtw("nok_repareren")}. Moeten er vorsten of moet de hele nok vervangen worden, dan hoor je de prijs als je een foto hebt gestuurd.`,
  "pannendak-schuur-lekt": `Op een schuur, garage of oude stal liggen de pannen vaak direct op de latten, zonder folie eronder. Lekt het, dan zit het meestal in een gebroken of verschoven pan, een losse nokvorst, de strook langs de muur van je huis of een rotte panlat. Vaak is het een kleine reparatie op die ene plek.`,
  "wat-kost-dakpan-vervangen": `Een paar losse of gebroken dakpannen vervangen, of een nokvorst weer vastzetten, kost bij mij ${inclBtw("dakpan")}. De prijs hangt vooral af van hoeveel pannen het zijn, hoe goed ik erbij kan en of er een pan te krijgen is die past. Met een foto van je dak vanaf de straat hoor je meestal al vooraf wat het kost.`,
  "natte-plek-schuine-wand-zolder": `Een natte plek op de schuine wand van je zolderkamer komt meestal van een lek hoger in het dak: een verschoven of gebroken pan, de aansluiting rond een dakraam, de nok of het lood bij de schoorsteen. Het water loopt eerst achter de wand naar beneden, dus de plek zit vaak lager dan het lek. Zie je alleen een vochtige waas na koude nachten, dan is het vaak condens.`,
};

// Extra vragen onder een bestaand artikel (zoals FAQ_ERBIJ in artikelen-extra.ts, dat te groot is geworden). Kennisbank [slug].astro voegt ze erbij.
export const FAQ_ERBIJ_2: Record<string, Artikel["faq"]> = {
  "wat-kost-dakgoot-schoonmaken": [
    { v: `Het blad komt van de bomen van de gemeente in mijn straat. Betaalt de gemeente het schoonmaken van mijn goot?`, a: `Meestal niet. Blad van straatbomen dat in je goot valt, zien de meeste gemeenten als iets wat bij wonen in een groene straat hoort, en het leegmaken van je goot blijft dan voor eigen rekening. Hangt er een tak van een gemeenteboom over je dak of tegen je goot, meld dat dan wel bij de gemeente, want die snoeit haar eigen bomen. Veel gemeenten zetten in de herfst ook bladkorven in de straat voor het blad dat je opveegt. Vraag het gerust na bij je gemeente. Onder straatbomen loont het om je goot te laten leegmaken als de bomen kaal zijn. Eén goot, bijvoorbeeld alleen de voorgoot, kost ${inclBtw("goot_reinigen")}. Voor beide goten hoor je vooraf de prijs.` },
  ],
  "dakgoot-lekt": [
    { v: `Mijn dakgoot lekt precies op de hoek van het huis. Wat is daar mis?`, a: `Op de hoek komen twee stukken goot samen in een hoekstuk, en dat is een van de zwakke plekken van een goot. Bij een kunststof goot is de lijm of het rubber in het hoekstuk vaak uitgedroogd, of is het hoekstuk een stukje uit de goot geschoven omdat een beugel is gezakt. Bij een zinken goot zit het meestal in de soldeernaad van de hoek, die na jaren openscheurt, zeker na een winter met ijs in de goot. Ook blijft blad juist in de hoek liggen, zodat het water daar hoger komt te staan. Kijk tijdens een bui of het onder de hoek druppelt of over de rand loopt, en maak daar een foto van. Vaak is het genoeg om het hoekstuk opnieuw vast te zetten, de naad te solderen of er een nieuw hoekstuk in te zetten. Je hoort vooraf wat het kost.` },
  ],
  "plat-dak-vervangen-of-repareren": [
    { v: `Hoe lang gaat een bitumen dak mee?`, a: `Dat verschilt per dak. Een bitumen dak in twee lagen op een aanbouw of garage gaat bij goed onderhoud vaak een jaar of twintig mee, soms langer. Een enkele laag dakleer op een schuur of tuinhuis houdt het meestal korter. Hoe lang het bij jou meegaat, hangt vooral af van de zon, of er water blijft staan en of de afvoer vrij blijft. Dat het op raakt, zie je aan steentjes van de toplaag in de goot of bij de afvoer, aan fijne scheurtjes en aan naden die loslaten. Dan is een gerichte reparatie vaak nog genoeg. Lekt het op meer plekken tegelijk, dan is een nieuwe dakbedekking op termijn slimmer. Stuur me een foto van het dak, dan zeg ik eerlijk wat ik zie.` },
  ],
  "dakleer-repareren": [
    { v: `Kan ik een scheur in mijn dakleer zelf dichtmaken met bitumenkit of een reparatieset uit de bouwmarkt?`, a: `Bij een kleine scheur op een lage schuur of een tuinhuis kan dat soms even helpen, zolang het dakleer eromheen nog soepel is. Doe het alleen op een droge dag, als de plek schoon en droog is, en als je er veilig vanaf een lage ladder bij kunt, zonder op het dak te gaan staan. Op een nat of vuil oppervlak hecht het niet. Bij een blaas, een losse naad langs de rand of zacht hout eronder lost een likje kit het meestal niet op: het water loopt er dan onderdoor. Zie het als tijdelijk, en kijk na de volgende bui of het droog blijft. Lekt de aanbouw van je huis, of zit het op een hoger dak, stuur me dan liever een foto. Je hoort vooraf wat het kost.` },
  ],
  "hoe-herken-je-een-betrouwbare-dakdekker": [
    { v: `Hoe zoek ik op of een dakdekker echt bij de KvK staat?`, a: `Zoek de bedrijfsnaam of het KvK-nummer op in het Handelsregister op de website van de KvK. Je ziet daar in elk geval de naam, het nummer en de plaats van het bedrijf. Kijk of die kloppen met wat op de offerte, het visitekaartje of de bus staat. Vind je het nummer nergens, of hoort het bij een ander bedrijf of een andere plaats, vraag dan door voordat je iemand op je dak laat. Mijn eigen KvK-nummer staat onderaan elke pagina van deze site.` },
  ],
};
