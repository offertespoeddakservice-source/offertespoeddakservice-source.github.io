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
};

// Extra vragen onder een bestaand artikel (zoals FAQ_ERBIJ in artikelen-extra.ts, dat te groot is geworden). Kennisbank [slug].astro voegt ze erbij.
export const FAQ_ERBIJ_2: Record<string, Artikel["faq"]> = {
  "wat-kost-dakgoot-schoonmaken": [
    { v: `Het blad komt van de bomen van de gemeente in mijn straat. Betaalt de gemeente het schoonmaken van mijn goot?`, a: `Meestal niet. Blad van straatbomen dat in je goot valt, zien de meeste gemeenten als iets wat bij wonen in een groene straat hoort, en het leegmaken van je goot blijft dan voor eigen rekening. Hangt er een tak van een gemeenteboom over je dak of tegen je goot, meld dat dan wel bij de gemeente, want die snoeit haar eigen bomen. Veel gemeenten zetten in de herfst ook bladkorven in de straat voor het blad dat je opveegt. Vraag het gerust na bij je gemeente. Onder straatbomen loont het om je goot te laten leegmaken als de bomen kaal zijn. Eén goot, bijvoorbeeld alleen de voorgoot, kost ${inclBtw("goot_reinigen")}. Voor beide goten hoor je vooraf de prijs.` },
  ],
  "dakgoot-lekt": [
    { v: `Mijn dakgoot lekt precies op de hoek van het huis. Wat is daar mis?`, a: `Op de hoek komen twee stukken goot samen in een hoekstuk, en dat is een van de zwakke plekken van een goot. Bij een kunststof goot is de lijm of het rubber in het hoekstuk vaak uitgedroogd, of is het hoekstuk een stukje uit de goot geschoven omdat een beugel is gezakt. Bij een zinken goot zit het meestal in de soldeernaad van de hoek, die na jaren openscheurt, zeker na een winter met ijs in de goot. Ook blijft blad juist in de hoek liggen, zodat het water daar hoger komt te staan. Kijk tijdens een bui of het onder de hoek druppelt of over de rand loopt, en maak daar een foto van. Vaak is het genoeg om het hoekstuk opnieuw vast te zetten, de naad te solderen of er een nieuw hoekstuk in te zetten. Je hoort vooraf wat het kost.` },
  ],
};
