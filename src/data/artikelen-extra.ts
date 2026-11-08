/**
 * Nieuwe kennisartikelen sinds 05-11-2026. artikelen.ts is te groot geworden voor de automatische controle,
 * daarom staan nieuwe artikelen hier. artikelen.ts zet ze achter de bestaande artikelen in ARTIKELEN.
 */
import type { Artikel } from "./artikelen";
import { prijsVan, inclBtw } from "./prijzen";

const platPrijs = inclBtw("platdak");
const apkPrijs = prijsVan("apk");
export const ARTIKELEN_EXTRA: Artikel[] = [
  {
    slug: `epdm-dak-lekt`,
    datum: `2026-11-05`,
    titel: `EPDM-dak lekt?`,
    h1: `EPDM-dak lekt: bij een naad, een hoek, de muur of een pijp`,
    metaTitle: `EPDM-dak lekt: oorzaak en reparatie | Spoed Dak Service`,
    metaDescription: `Lekt je platte dak met EPDM? Meestal zit het bij een naad, een hoek, de opstand tegen de muur of rond een pijp. Zo zie je waar het zit en hoe het gemaakt wordt.`,
    intro: `EPDM is een dakbedekking van rubber. Je vindt het op veel platte daken, vaak op een aanbouw, een garage of een berging. Het is sterk en soepel, en op een klein dak ligt het vaak in één stuk. Gaat het toch lekken, dan zit het bijna altijd op een paar vaste plekken. Hieronder lees je welke dat zijn, hoe je ze herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en haal spullen weg die niet nat mogen worden. Ga niet op het dak staan als het nat is of hard waait, want nat rubber is glad. Maak een foto van de natte plek binnen en, als het kan, vanuit een raam boven een foto van het dak. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo ligt EPDM op je dak`, tekst: [
        `Het rubber ligt op een houten of betonnen ondergrond, vaak met isolatie ertussen, en is daar meestal op vastgelijmd. Op een groter dak liggen twee of meer banen naast elkaar, die met een speciale tape aan elkaar zijn vastgemaakt. Aan de rand loopt het rubber over de kant van het dak, onder de daktrim. Tegen een muur loopt het een stukje omhoog: dat heet de opstand. Bovenaan de opstand zit een strook of profiel die het rubber tegen de muur houdt, zodat er geen water achter kan lopen.`,
      ] },
      { kop: `Waar EPDM meestal lekt`, tekst: [
        `Bij een naad. Waar twee banen over elkaar liggen, kan de tape na jaren loslaten, vooral als er vaak water op die plek blijft staan. Je ziet dan een randje dat een beetje omhoog staat.`,
        `Bij de opstand tegen de muur. Zit de strook bovenaan los, of is het rubber daar niet goed afgewerkt, dan loopt het regenwater van de gevel achter het rubber naar beneden. Binnen zie je dat vaak als een natte plek vlak langs de muur. Lees ook <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
        `In een hoek. In de hoeken is het rubber gevouwen of zit er een apart hoekstuk. Na jaren kan EPDM een klein beetje krimpen. Dan gaat het in een hoek strak staan, komt het los van de ondergrond en kan het daar inscheuren.`,
        `Rond een pijp of de afvoer. Om een ventilatiepijp zit een rubberen kraag, en bij de afvoer is het rubber aangesloten op een uitloop door de rand of het dak. Laat die aansluiting los, dan loopt het water langs de pijp of de afvoer naar binnen.`,
        `Een gaatje of een snee. EPDM is taai, maar een scherpe tak, een vallend stuk gereedschap of een steentje onder een schoen kan er toch een gaatje in maken. Dat zie je vooral op plekken waar vaak iemand over het dak loopt, bijvoorbeeld naar zonnepanelen of een airco.`,
        `Lekt het langs de buitenmuur, vlak onder de rand van het dak, kijk dan bij <a href="/kennisbank/daktrim-lekt/">plat dak lekt langs de rand</a>.`,
      ] },
      { kop: `Zo zie je waar het zit`, tekst: [
        `Op een plat dak komt het water vaak een eind verderop binnen dan waar het lek zit, want het loopt eerst over de ondergrond of door de isolatie. Kijk daarom na een bui vanuit een raam boven naar het dak. Blijft er een plas staan, dan zit een lek vaak in of vlak bij die plas. Let ook op een naad die omhoog staat, een kier of plooi bij de muur, een hoek waar het rubber strak staat en de kraag rond een pijp.`,
        `Een bobbel in het rubber is vaak lucht die eronder zit. Dat is op zich geen lek, maar kijk wel of er een scheurtje in zit.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Druppelt het vooral op koude ochtenden, ook als het dagen droog is geweest? Dan kan het condens zijn: warme, vochtige lucht uit het huis die onder het koude dak afkoelt en daar druppels vormt. Dat lijkt op een lek, maar de oplossing is anders. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen bitumenkit of gewone kit op EPDM en plak er geen stuk dakleer op. Dat hecht niet goed op het rubber, en voordat het lek goed gemaakt kan worden, moet het er weer helemaal af. Loop niet met steentjes onder je schoenen over het dak en leg er geen scherp gereedschap op.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het nat is, en daarna op het dak naar de naden, de hoeken, de opstand en de aansluitingen rond pijpen en de afvoer. Een losse naad of een gaatje maak ik schoon en droog, en dan dicht ik het met een stuk EPDM dat ruim over de plek heen valt. Zit het bij de opstand, dan zet ik het rubber en de strook bovenaan weer goed vast. Een uitgedroogde kraag rond een pijp vervang ik. Is het rubber op veel plekken los of gescheurd, dan zeg ik eerlijk dat een nieuwe bedekking beter is. Zie ook <a href="/diensten/platte-daken/">platte daken</a> en <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een gerichte reparatie van een lek in een klein plat dak kost ${platPrijs}. Moet er een groter stuk of een nieuwe bedekking op, dan kom ik eerst kijken en hoor je vooraf de vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken (EPDM)`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Kan een lek in EPDM gerepareerd worden, of moet alles eraf?`, a: `Meestal kan het gerepareerd worden. Een losse naad, een gaatje of een losse opstand maak ik op die plek dicht, en de rest van het dak blijft liggen. Pas als het rubber op veel plekken los zit, scheurt of flink is gekrompen, is een nieuwe bedekking de betere keus.` },
      { v: `Kun je EPDM repareren als het regent?`, a: `Een nette reparatie niet, want lijm en tape hechten alleen op een schoon en droog dak. Lekt het nu, dan dek ik het eerst tijdelijk af, zodat het binnen droog blijft, en maak ik het op een droge dag goed. Je hoort vooraf wat het kost.` },
      { v: `Er zit een bobbel in mijn EPDM-dak. Is dat erg?`, a: `Vaak niet. Meestal zit er wat lucht onder het rubber, bijvoorbeeld omdat de lijm op die plek niet goed heeft gepakt. Zolang er geen scheurtje in zit en niemand erop stapt, lekt het daar niet. Wordt de bobbel groter of zie je er een barstje in, stuur me dan een foto via WhatsApp.` },
      { v: `Is een lekkend EPDM-dak spoed?`, a: `Druppelt het in een kamer, bij een lamp of een stopcontact, of wordt een plafond bol, dan wel: bel of app me met een foto. Lekt het in een berging of garage op een plek waar niets kapot kan, dan kan het vaak een paar dagen wachten. Laat het niet de hele winter zitten, want water dat lang op de ondergrond blijft staan, maakt de reparatie later groter.` },
    ],
  },
  {
    slug: `golfplaten-lekken`,
    datum: `2026-11-07`,
    titel: `Golfplaten lekken?`,
    h1: `Golfplaten op je schuur, garage of carport lekken: waar het zit en wat je doet`,
    metaTitle: `Golfplaten lekken: oorzaak en reparatie | Spoed Dak Service`,
    metaDescription: `Lekt het dak van je schuur of garage met golfplaten? Vaak zit het bij een overlap, een schroef of de muur. Zo zie je waar, en dit check je eerst bij oude platen.`,
    intro: `Op veel schuren, garages, carports en oude werkplaatsen ligt een dak van golfplaten. Dat zijn grote, gegolfde platen van vezelcement, kunststof, bitumen of metaal, die over elkaar heen liggen en met schroeven op de balken vastzitten. Gaat zo'n dak lekken, dan zit het bijna altijd op een paar vaste plekken. Hieronder lees je welke dat zijn, hoe je ze herkent, en wat je bij oude platen eerst moet weten.`,
    secties: [
      { kop: `Eerst: hoe oud zijn de platen?`, tekst: [
        `Grijze golfplaten van vezelcement die er al van voor 1994 op liggen, kunnen asbest bevatten. Zolang je ze met rust laat, is dat meestal geen direct gevaar. Maar boren, zagen, breken, schuren of schoonspuiten maakt de vezels los. Ga er dan niet zelf aan werken. Weet je niet hoe oud het dak is, of twijfel je, laat de platen dan eerst onderzoeken door een gecertificeerd bedrijf. In zulke platen boor of zaag ik zelf niet, en weghalen mag alleen een gecertificeerd asbestbedrijf.`,
      ] },
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel en haal spullen weg die nat kunnen worden, zoals gereedschap, een fiets of dozen. Ligt er na een storm een plaat los, blijf dan uit de buurt zolang het waait, want een losse plaat kan verder losscheuren of wegwaaien. Ga nooit op golfplaten staan: veel platen houden je gewicht niet, en je zakt er zo doorheen. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar golfplaten meestal lekken`, tekst: [
        `Bij een schroef. Elke schroef heeft een rubberen ring onder de kop die het gat dicht houdt. Na jaren zon en vorst droogt die ring uit of scheurt hij, en dan loopt het water langs de schroef naar binnen. Zit een schroef in het dal van de golf in plaats van op de bolle kant, dan staat hij precies op de plek waar het water langs stroomt, en lekt hij nog sneller.`,
        `Bij een overlap. Waar twee platen over elkaar liggen, aan de zijkant of waar een bovenste plaat over een onderste valt, kan bij harde wind regen tussen de platen door waaien. Is de overlap te klein, of ligt het dak heel flauw, dan loopt het water daar terug en druppelt het binnen langs de naad.`,
        `Bij de muur. Staat de schuur of carport tegen een muur of tegen je huis, dan zit daar een strook lood, zink of een ander profiel tussen de platen en de muur. Laat die strook los, of is hij nooit goed afgewerkt, dan loopt het water van de muur achter de platen naar binnen. Lees ook <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
        `Een scheur of een gat in een plaat. Een tak die erop valt, een harde hagelbui of iemand die erop heeft gestaan, kan een plaat laten barsten. Een scheur zie je van binnen vaak als een streepje licht.`,
        `Bij de nok of de rand. Bovenop een zadeldak ligt een nokstuk over de platen, en aan de rand soms een randstuk. Waait dat los of scheurt het, dan regent het daar binnen.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Onder metalen golfplaten druppelt het soms ook als het droog is. Op koude nachten koelen de platen sterk af, en de vochtige lucht in de schuur of garage vormt daar druppels, die 's ochtends naar beneden vallen. Dat lijkt op een lek, maar het zit verspreid over het hele dak en niet op één plek. Ventileren helpt dan meer dan een reparatie. Lees ook <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage</a>.`,
      ] },
      { kop: `Zo zie je waar het zit`, tekst: [
        `Kijk tijdens of vlak na een bui van binnen naar de onderkant van het dak, met een zaklamp. Volg de natte streep naar boven: daar zit het lek meestal. Druppelt het precies onder een schroef, dan is het de ring. Loopt het langs een naad tussen twee platen, dan is het de overlap. Wordt het vooral nat langs de muur, dan is het de aansluiting. Maak er een foto van, en ook een foto van het dak van buiten, vanaf de grond of vanuit een raam.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet op het dak staan en leun niet met een ladder op de platen. Smeer geen kit of bitumen over schroeven of naden: dat houdt op een vuile plaat maar kort, en daarna moet het er weer af. En spuit oude golfplaten niet schoon met een hogedrukreiniger, zeker niet als ze van voor 1994 zijn.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Bij platen zonder asbest kijk ik eerst waar het water echt binnenkomt. Een schroef met een uitgedroogde ring vervang ik door een nieuwe schroef met een nieuwe ring. Een losse plaat zet ik weer vast, en een gescheurde plaat vervang ik door een plaat die past. Bij de muur maak ik de aansluiting opnieuw dicht. Zijn de platen over het hele dak bros of lek, dan hoor je eerlijk wat er nodig is. Heeft je schuur of garage een plat dak met dakleer of EPDM, lees dan <a href="/kennisbank/dakleer-repareren/">dakleer repareren</a> of <a href="/kennisbank/epdm-dak-lekt/">EPDM-dak lekt</a>. Lekt het bij een veranda met kunststof platen, kijk dan bij <a href="/kennisbank/veranda-of-overkapping-lekt/">veranda of overkapping lekt</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is: een paar schroeven, één plaat of de aansluiting op de muur. Ook telt mee hoe hoog het dak is en hoe goed ik erbij kan. Stuur een foto van de plek waar het lekt en van het dak van buiten via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: spoed dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Mag ik zelf een lekkende golfplaat vervangen?`, a: `Bij een plaat zonder asbest kan dat, maar het is lastiger dan het lijkt, want je kunt niet op het dak staan en de nieuwe plaat moet goed onder en over de platen ernaast vallen. Bij grijze platen van voor 1994 ga je er niet zelf aan werken voordat je weet of er asbest in zit. Laat ze eerst onderzoeken en vraag bij je gemeente wat er mag.` },
      { v: `Hoe weet ik of mijn golfplaten asbest bevatten?`, a: `Zeker weten doe je het alleen met een onderzoek door een gecertificeerd bedrijf. Wel geldt: grijze golfplaten van vezelcement die er al van voor 1994 op liggen, kunnen asbest bevatten. Twijfel je, laat het dan eerst nakijken voordat er iemand in boort of zaagt.` },
      { v: `Er druppelt water onder mijn metalen dak, ook als het droog is. Is het lek?`, a: `Waarschijnlijk niet. Onder metalen platen vormt zich op koude nachten condens, en die druppels vallen 's ochtends naar beneden. Dat zit verspreid over het hele dak. Lekt het vooral na een bui en op één vaste plek, dan is het eerder een schroef, een overlap of de aansluiting op de muur. Stuur me een foto van de plek, dan zeg ik eerlijk wat ik denk.` },
      { v: `Is een lekkend golfplatendak spoed?`, a: `Meestal niet, zolang het in een schuur of carport lekt en er niets kapot kan. Ligt er na een storm een plaat los boven de tuin, de oprit of het pad van de buren, dan wel: blijf eronder weg en bel of app me met een foto. Lekt het in een garage of werkplaats die tegen je huis staat en wordt de muur van het huis nat, laat het dan ook niet te lang zitten.` },
    ],
  },
  {
    slug: `kunststof-dakgoot-lekt`,
    datum: `2026-11-05`,
    titel: `Kunststof dakgoot lekt?`,
    h1: `Kunststof dakgoot lekt: bij een verbinding, een hoek of het eindstuk`,
    metaTitle: `Kunststof of pvc dakgoot lekt: wat nu? | Spoed Dak Service`,
    metaDescription: `Lekt je kunststof of pvc dakgoot? Vaak zit het bij een verbinding, een hoek of het eindstuk, of hangt de goot door. Zo zie je wat het is en wat eraan te doen is.`,
    intro: `Een kunststof goot roest niet en vraagt weinig onderhoud, en daarom hangt hij aan heel veel huizen. Toch gaat ook zo'n goot na een aantal jaren lekken, en bijna altijd op dezelfde plekken. Dat komt vooral doordat kunststof groter wordt als het warm is en kleiner als het koud is. Hieronder lees je waar het meestal zit, hoe je het vanaf de grond ziet en wat eraan te doen is.`,
    secties: [
      { kop: `Druppelt het nu? Eerst dit`, tekst: [
        `Valt de druppel buiten op de stoep of het terras, dan is het meestal geen spoed. Zet er bij vorst een bak onder, zodat er geen plek ijs komt. Loopt het water langs de gevel naar binnen, of wordt het nat bovenin de muur, dan wel. Kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet. Maak tijdens een bui een foto of filmpje van de plek waar het druppelt, daar heb ik het meest aan.`,
      ] },
      { kop: `Zo zit een kunststof goot in elkaar`, tekst: [
        `Een kunststof goot bestaat uit lengtes die met verbindingsstukken aan elkaar vastzitten. In zo'n verbindingsstuk zit een rubber dat de naad dicht houdt, terwijl de goot toch een stukje kan schuiven als hij groter of kleiner wordt. Bij oudere goten zijn de stukken soms aan elkaar gelijmd. Op de hoeken zit een hoekstuk, aan het eind een eindstuk dat de goot afsluit, en onderin een uitloop naar de regenpijp. De goot hangt in beugels die aan het hout van de dakrand vastzitten.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Bij een verbinding. Het rubber droogt na jaren uit en wordt hard, en dan sluit het niet meer. Of de goot is in een koude nacht zo ver gekrompen dat hij een stukje uit de verbinding is geschoven. Je ziet dan een druppel die steeds onder dezelfde verbinding valt.`,
        `Bij een gelijmde naad of een hoekstuk. Een lijmnaad kan niet meebewegen. Wordt de goot groter of kleiner, dan trekt hij aan die naad, en na een paar winters laat de naad los of komt er een scheurtje naast.`,
        `Bij het eindstuk. Is het eindstuk losgeschoten of zit er een scheurtje in, dan loopt het water aan het eind van de goot over de zijkant naar beneden. Dat zie je vaak na een vorstperiode.`,
        `Waar de goot doorhangt. Kunststof is minder stijf dan zink. Zitten de beugels ver uit elkaar of is er een gebroken, dan zakt de goot ertussen door en blijft daar water staan. Bij een flinke bui loopt hij op die plek over. Lees ook <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
        `Bij de uitloop naar de regenpijp, waar al het water samenkomt. Daarover lees je meer in <a href="/kennisbank/dakgoot-lekt-bij-regenpijp/">dakgoot lekt bij de regenpijp</a>.`,
      ] },
      { kop: `Zo zie je wat het is`, tekst: [
        `Kijk tijdens of vlak na een bui vanaf de grond. Valt de druppel steeds op dezelfde plek, recht onder een verbinding of een hoek, dan zit het daar. Loopt het water aan het eind over de zijkant, dan is het het eindstuk. Loopt de goot halverwege over terwijl er geen blad in ligt, kijk dan of hij daar doorhangt. Met de zoom van je telefoon zie je een verbinding die scheef staat of een kier aan het eind vaak al. Groene strepen op de gevel onder de goot betekenen dat het daar al langer druppelt.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit op een lekkende verbinding en lijm een verbinding met een rubber niet dicht. Dan kan de goot daar niet meer schuiven, en bij de volgende vorst scheurt hij ernaast. Zet ook geen ladder tegen de goot. Koud kunststof breekt snel, en een oude goot krijgt dan zo een scheur.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de goot eerst leeg, zodat ik goed zie waar het lekt. Een verbinding met een uitgedroogd rubber, of een verbinding die uit elkaar is geschoven, vervang ik door een nieuw verbindingsstuk. Een gescheurd hoekstuk of eindstuk vervang ik ook. Hangt de goot door, dan zet ik hem weer goed op afschot naar de regenpijp, en waar het nodig is komt er een extra beugel bij. Is het kunststof over de hele lengte bros en breekt het als ik erop druk, dan zeg ik eerlijk dat een nieuwe goot slimmer is. Lees ook <a href="/kennisbank/hoe-lang-gaat-een-dakgoot-mee/">hoe lang gaat een dakgoot mee</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er nodig is. Eén verbinding of een eindstuk vervangen is iets anders dan een stuk goot of de hele goot. Stuur een foto van de plek waar het lekt en van de goot vanaf de straat, dan hoor je vooraf wat het kost. Zie ook <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Waarom lekt mijn kunststof goot vooral als het vriest?`, a: `Bij kou krimpt kunststof. Een lange goot wordt dan een stukje korter, en daardoor kan hij een eindje uit een verbinding schuiven, of trekt hij aan een gelijmde naad of een hoekstuk. Lekt het vooral na een koude periode, dan zit het meestal in een verbinding of een hoekstuk.` },
      { v: `Kan ik een lekkende verbinding zelf dichtmaken?`, a: `Liever niet met kit of tape. Op een natte of vuile goot houdt dat meestal maar kort, en het maakt de reparatie daarna lastiger. Een verbindingsstuk vervangen kan alleen als je veilig bij de goot kunt, en vanaf een ladder tegen de gevel is dat vaak niet zo. Stuur me een foto, dan zeg ik wat het is.` },
      { v: `Is een lekkende kunststof goot spoed?`, a: `Meestal niet, zolang het water buiten blijft. Loopt het langs de gevel naar binnen, of hangt de goot los boven de stoep of de oprit, dan wel: bel of app me met een foto.` },
    ],
  },
  {
    slug: `dakdekker-aan-de-deur`,
    datum: `2026-11-05`,
    titel: `Er belt een dakdekker aan?`,
    h1: `Er belt een dakdekker aan die zegt dat je dak kapot is: wat nu?`,
    metaTitle: `Dakdekker aan de deur: wat doe je? | Spoed Dak Service`,
    metaDescription: `Belt er iemand aan die zegt dat je dak kapot is en het meteen wil maken? Zo kijk je zelf of het klopt, hier let je op en zo zit het met je bedenktijd.`,
    intro: `Het gebeurt vooral na een storm, maar ook op een gewone dag: er staat iemand aan de deur die zegt dat hij in de straat aan het werk is en zag dat er iets mis is met je dak. Een losse nok, een kapotte pan of een goot die lekt, en hij kan het meteen maken. Soms klopt dat, soms niet. Hieronder lees je hoe je dat zelf nagaat voordat je iets afspreekt.`,
    secties: [
      { kop: `Wat je aan de deur doet`, tekst: [
        `Blijf vriendelijk, maar spreek niets af en teken niets. Laat niemand het dak op of je huis in die je niet zelf hebt gevraagd. Vraag naar de naam van het bedrijf, een telefoonnummer en het KvK-nummer, en zeg dat je er zelf even naar kijkt. Een vakman die echt iets heeft gezien, vindt dat geen probleem.`,
      ] },
      { kop: `Kijk zelf of het klopt`, tekst: [
        `Ga aan de overkant van de straat staan en kijk naar je dak, als het nodig is met de zoom van je telefoon. Ligt er een pan scheef, staat een nokvorst schuin of hangt de goot door? Kijk ook in de tuin en op de stoep of er stukjes pan of specie liggen. Na de eerstvolgende flinke bui kun je op zolder met een zaklamp kijken of er ergens een natte plek is.`,
        `Laat hij je een foto zien, kijk dan goed of het echt jouw dak is. Staan je eigen schoorsteen, je dakraam of het huis van de buren erop? Een foto met alleen een paar pannen kan overal gemaakt zijn.`,
      ] },
      { kop: `Hier let je op`, tekst: [
        `Haast: het moet vandaag nog, de prijs geldt alleen nu, of er komt een storm aan. Contant betalen, of een flink deel vooruit. Geen prijs op papier, of een prijs per meter of per pan waarvan je niet weet hoeveel het er worden. Geen KvK-nummer en geen vast adres of telefoonnummer. En werk dat al begint voordat je ja hebt gezegd. Hoe je een betrouwbare dakdekker herkent, lees je in <a href="/kennisbank/hoe-herken-je-een-betrouwbare-dakdekker/">betrouwbare dakdekker herkennen</a>.`,
      ] },
      { kop: `Al iets afgesproken aan de deur?`, tekst: [
        `Spreek je aan de deur een klus af met iemand die ongevraagd aanbelde, dan heb je als particulier in de regel 14 dagen bedenktijd. Wil je ervan af, stuur dan binnen die tijd een duidelijk bericht en bewaar dat. Meer over je rechten lees je op ConsuWijzer, de site van de overheid voor consumenten. Hoe het met bedenktijd zit als je een klus met mij afspreekt, staat op mijn pagina over <a href="/bedenktijd/">bedenktijd</a>.`,
      ] },
      { kop: `Al betaald of al gedaan?`, tekst: [
        `Heb je al betaald en twijfel je of het werk nodig was of goed is gedaan? Betaal dan niets meer, ook niet als er later nog een rekening komt. Maak vanaf de straat foto's van wat er op je dak is gedaan en laat het door een andere dakdekker nakijken. Wat je verder kunt doen als je denkt dat je bent opgelicht, staat bij de vragen onder <a href="/kennisbank/hoe-herken-je-een-betrouwbare-dakdekker/">betrouwbare dakdekker herkennen</a>.`,
      ] },
      { kop: `Een tweede mening`, tekst: [
        `Twijfel je, stuur dan een foto van je dak vanaf de straat naar een dakdekker die je zelf kiest. Dat kan bij mij via WhatsApp of telefoon, maar net zo goed bij een andere vakman. Wil je weten hoe je hele dak ervoor staat, dan kun je de <a href="/dak-apk/">Dak-APK</a> laten doen: voor ${apkPrijs} kijk ik je hele dak na en krijg je een rapport met foto's. Dan weet je zwart op wit wat er nu moet gebeuren en wat nog kan wachten.`,
      ] },
    ],
    dienst: { label: `Bekijk: de Dak-APK`, href: `/dak-apk/` },
    faq: [
      { v: `Hij zegt dat het vandaag nog moet, anders gaat het lekken. Klopt dat?`, a: `Meestal is het niet zo dringend dat je niet eerst zelf kunt kijken. Lekt het binnen niet en zie je vanaf de straat geen gat of losse pannen, neem dan rustig de tijd. Lekt het wel, of ligt er na een storm echt iets open, bel dan zelf een dakdekker die je kiest.` },
      { v: `Ik heb een foto van hem gekregen. Kun je die bekijken?`, a: `Ja. Stuur hem via WhatsApp, het liefst samen met een foto die je zelf vanaf de straat van je dak maakt. Dan zie ik of het om jouw dak gaat en of het er net zo uitziet. Je hoort eerlijk wat ik zie, ook als er niets aan de hand is.` },
      { v: `Ik heb al ja gezegd. Kan ik nog terug?`, a: `Vaak wel. Bij een klus die je aan de deur afspreekt met iemand die ongevraagd aanbelde, heb je als particulier in de regel 14 dagen bedenktijd. Twijfel je of dat bij jou geldt, vraag dan gratis advies bij het Juridisch Loket.` },
      { v: `Mag ik iemand die aanbelt gewoon wegsturen?`, a: `Ja. Je hoeft niemand te woord te staan en je hoeft niets uit te leggen. Zeg gewoon dat je zelf een dakdekker belt als het nodig is.` },
    ],
  },
  {
    slug: `nieuw-dak-lekt`,
    datum: `2026-11-05`,
    titel: `Nieuw dak lekt al?`,
    h1: `Je dak is nieuw en lekt al: nieuwbouw of net vernieuwd, wie lost het op?`,
    metaTitle: `Nieuw dak lekt: nieuwbouw of renovatie | Spoed Dak Service`,
    metaDescription: `Lekt het dak van je nieuwbouwhuis, of je dak dat net vernieuwd is? Meld het eerst bij wie het heeft gemaakt. Zo leg je het vast en zo beperk je de schade.`,
    intro: `Lekt je dak terwijl het nieuw is, dan meld je het eerst bij wie het heeft gemaakt: de aannemer bij een nieuwbouwhuis, of de dakdekker die je dak heeft vernieuwd. Dat voelt vreemd, want je verwacht juist dat een nieuw dak droog blijft. Toch komt het voor, vaak bij een aansluiting die net niet goed is afgewerkt. Hieronder lees je wat je meteen doet, wat je vastlegt en wanneer je zelf iemand anders kunt bellen.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en leg handdoeken neer. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op, ook niet om even te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar een nieuw dak vaak lekt`, tekst: [
        `Bij een nieuw dak zit het lek zelden in de pannen of de dakbedekking zelf. Meestal zit het bij een aansluiting: het lood of de strook rond een dakraam, de schoorsteen of een ontluchtingspijp, de overgang van het schuine dak naar een plat dak of een aanbouw, of de rand waar het dak op de goot uitkomt. Ook een kabel van zonnepanelen die onder een pan door naar binnen gaat, is een bekende plek.`,
        `Druppelt het alleen op koude ochtenden, ook als het dagen droog is? Dan kan het ook condens zijn. In een nieuw huis zit vaak nog bouwvocht in de muren en vloeren, en een nieuw huis is goed dicht, zodat dat vocht langer binnen blijft. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Een nieuwbouwhuis: eerst de aannemer`, tekst: [
        `Kort na de oplevering heb je meestal een onderhoudstermijn van een paar maanden. In die tijd hoort de aannemer gebreken op te lossen, en een lek is een gebrek. Meld het schriftelijk, met foto's en de datum, en bewaar wat je stuurt.`,
        `Daarna loopt bij veel nieuwbouwhuizen nog een regeling voor gebreken, bijvoorbeeld via Woningborg of SWK. Hoe lang die loopt en wat eronder valt, staat in je koop- of aanneemovereenkomst en in de papieren die je bij de oplevering kreeg. Kijk daar eerst in voordat je iemand anders laat komen.`,
      ] },
      { kop: `Net een nieuw dak laten leggen: eerst die dakdekker`, tekst: [
        `Is je dak kort geleden vernieuwd of gerepareerd, bel of app dan eerst de dakdekker die het werk heeft gedaan. Laat hem weten wat je ziet, stuur foto's en geef hem de kans om het op te lossen. Wat er voor afspraken gelden, staat meestal op de offerte of de factuur.`,
      ] },
      { kop: `Dit leg je vast`, tekst: [
        `Maak foto's van de natte plek binnen, het liefst met de datum erbij, en vanaf de straat van het dak. Schrijf op wanneer het lekt: bij elke bui, alleen bij harde wind of alleen bij een stortbui. Bewaar je berichten aan de aannemer of de dakdekker. Dat helpt als je het gebrek meldt, en ook als je de schade binnen bij je verzekering meldt. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Laat het niet zomaar door een ander maken`, tekst: [
        `Laat je het lek door een andere vakman repareren voordat de aannemer of de eerste dakdekker heeft kunnen kijken, dan kan het lastiger worden om je kosten later terug te krijgen. De schade beperken mag wel, en dat wordt in de regel ook van je verwacht: water opvangen en een open plek tijdelijk laten afdekken. Zeg dan wel tegen wie het werk heeft gedaan dat je dat doet, en bewaar de foto's en de rekening.`,
      ] },
      { kop: `Wanneer je mij belt`, tekst: [
        `Reageert de aannemer of de dakdekker niet, of pas over weken, terwijl het binnen druppelt? Dan kun je mij bellen of appen. Ik dek het eerst af, zodat het binnen droog blijft, en maak foto's van wat ik zie, met een korte omschrijving. Die kun je doorsturen naar wie het werk heeft gedaan. Valt het lek nergens meer onder of bestaat het bedrijf niet meer, dan zoek ik het lek en maak ik het goed. Je hoort vooraf wat het kost. Hoe ik een lek zoek, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mijn aannemer reageert niet en het lekt. Mag ik zelf een dakdekker bellen?`, a: `Om de schade te beperken wel. Laat een open plek tijdelijk afdekken, maak foto's en bewaar de rekening. Meld de aannemer schriftelijk dat je dat hebt gedaan en dat hij het lek nog moet oplossen. Twijfel je over je rechten, vraag dan advies bij het Juridisch Loket.` },
      { v: `Het lekt pas een paar jaar na de oplevering. Kan ik nog bij de aannemer terecht?`, a: `Vaak wel. Bij veel nieuwbouwhuizen loopt de regeling voor gebreken een aantal jaren door na de oplevering. Kijk in de papieren van je oplevering wat eronder valt en hoe je een gebrek meldt. Valt het er niet meer onder, dan kan ik kijken waar het lekt en hoor je vooraf wat het kost.` },
      { v: `Is het condens of een lek in mijn nieuwe huis?`, a: `Druppelt het vooral op koude ochtenden, ook als het dagen droog is, en zie je de druppels verspreid over de folie of het hout, dan is het vaak condens. Wordt een plek juist natter na een bui, dan is het eerder een lek. Ventileer goed, zeker het eerste jaar, en stuur me een foto als je twijfelt.` },
      { v: `Is een lek in een nieuw dak spoed?`, a: `Druppelt het in een kamer, bij een lamp of een stopcontact, of wordt een plafond bol, dan wel. Meld het meteen bij de aannemer of de dakdekker. Kunnen die niet snel komen, bel of app mij dan met een foto. Is het een vochtige plek die na de bui weer opdroogt, dan kan het vaak een paar dagen wachten.` },
    ],
  },
  {
    slug: `lichtstraat-lekt`,
    datum: `2026-11-07`,
    titel: `Lichtstraat lekt?`,
    h1: `Lichtstraat in je aanbouw lekt: waar het zit en wat je doet`,
    metaTitle: `Lichtstraat lekt: oorzaak en reparatie | Spoed Dak Service`,
    metaDescription: `Druppelt het bij de lichtstraat in je aanbouw? Vaak zit het in de aansluiting op het platte dak of in de rubbers van het glas, of is het condens. Zo zie je het.`,
    intro: `Een lichtstraat is een lange strook glas in het platte dak van een aanbouw of uitbouw, die extra daglicht in de keuken of woonkamer geeft. Mooi, maar het is ook een plek waar een plat dak vaak gaat lekken. Meestal zit het niet in het glas zelf, maar in de aansluiting tussen de lichtstraat en de dakbedekking eromheen. Hieronder lees je waar het meestal zit, hoe je het verschil met condens ziet en wie wat repareert.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel en leg een handdoek op de vloer. Druppelt het vlak bij een lamp, een spotje of een stopcontact, zet dan in de meterkast de groep van die ruimte uit. Ga niet op het platte dak staan, en zeker niet op het glas. Maak een foto van de plek waar het druppelt en, als het kan, vanuit een raam boven een foto van het dak. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit een lichtstraat in je dak`, tekst: [
        `De lichtstraat staat op een opstand: een rand van hout of kunststof die een stukje boven het dak uitsteekt. Daarop ligt een frame met de glazen ruiten, die met rubbers of kit in het frame vastzitten. De dakbedekking van het platte dak, bitumen of EPDM, loopt tegen die opstand omhoog en wordt daar afgewerkt, zodat het regenwater langs de lichtstraat naar de afvoer loopt.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Bij de opstand. Zit de dakbedekking tegen de opstand los, is er een hoek ingescheurd of is de afwerking bovenaan de opstand niet goed, dan loopt het water erachter. Binnen zie je dat vaak langs de rand van de lichtstraat, of een eind verderop op het plafond.`,
        `Bij de rubbers of de kit van het glas. Na jaren zon en vorst krimpen rubbers en droogt kit uit. Dan komt er water tussen het glas en het frame door, meestal bij een naad of aan de onderkant van een ruit.`,
        `Bij een plas tegen de lichtstraat. Ligt het dak naast de lichtstraat net te vlak, of zit de afvoer vol blad, dan blijft het water na een bui tegen de opstand staan. Vroeg of laat zoekt het daar een weg naar binnen. Lees ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
        `Een barst in het glas. Door hagel, een vallende tak of spanning in het glas kan een ruit barsten. Dat zie je meestal van binnen al.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Een lichtstraat is vaak de koudste plek van de kamer. Warme, vochtige lucht van het koken of douchen slaat tegen het koude glas neer, en die druppels lopen naar beneden. Dat lijkt op een lek. Het verschil: condens zie je vooral op koude ochtenden, ook als het dagen droog is, en verspreid over het glas. Een lek komt bij of vlak na regen, en steeds op dezelfde plek. Lees meer in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit over de naden van het glas of over de rand van de dakbedekking. Kit op een vuile of natte ondergrond houdt maar kort, en het verstopt de plek waar het echte lek zit. Ga ook niet op het glas staan of leunen, ook niet om het schoon te maken.`,
      ] },
      { kop: `Wie repareert wat?`, tekst: [
        `De aansluiting tussen de dakbedekking en de opstand is dakwerk, en die maak ik weer dicht. Zit het lek in het glas, de rubbers of het frame van de lichtstraat zelf, dan is dat werk voor de leverancier of een glaszetter. Is de aanbouw nog vrij nieuw, neem dan eerst contact op met de bouwer of de leverancier, want dan hoort die het in de regel zelf op te lossen. Ik kijk eerst waar het water echt binnenkomt, en ik zeg je eerlijk wie je ervoor nodig hebt. Lees ook <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a> en <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk binnen waar het nat wordt en daarna op het dak naar de opstand, de hoeken en de afvoer. Zit de dakbedekking tegen de opstand los of is hij ingescheurd, dan maak ik die aansluiting opnieuw dicht. Blijft er water tegen de lichtstraat staan, dan maak ik de afvoer vrij en kijk ik of het water beter weg kan. Lekt het dak eromheen op meer plekken, dan zeg ik eerlijk of een nieuwe dakbedekking slimmer is. Zie ook <a href="/diensten/platte-daken/">platte daken</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van waar het lek zit en hoe groot de lichtstraat is. Een losse aansluiting op één plek is iets anders dan de hele rand rond de lichtstraat. Stuur een foto van de plek waar het druppelt en van het dak, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Is een lekkende lichtstraat spoed?`, a: `Druppelt het in de keuken of de woonkamer, bij een lamp of een stopcontact, of wordt het plafond bol, dan wel: zet de groep uit en bel of app me met een foto. Zijn het een paar druppels bij een stortbui en blijft het verder droog, dan kan het vaak een paar dagen wachten. Laat het niet de hele winter zitten.` },
      { v: `Mijn lichtstraat lekt alleen bij een stortbui. Hoe kan dat?`, a: `Dan komt er bij veel regen in korte tijd meer water op het dak dan de afvoer aankan. Het water blijft dan even tegen de opstand staan en komt binnen waar de afwerking net niet goed is. Kijk na zo'n bui vanuit een raam boven of er een plas naast de lichtstraat staat. Maak er een foto van en stuur die via WhatsApp.` },
      { v: `Kun je ook het glas of de rubbers van mijn lichtstraat vervangen?`, a: `Dat is werk voor de leverancier van de lichtstraat of een glaszetter. Ik maak de aansluiting tussen de lichtstraat en het platte dak dicht. Twijfel je waar het zit, stuur dan een foto van de plek waar het druppelt, dan zeg ik eerlijk wie je het beste kunt bellen.` },
    ],
  },
  {
    slug: `plafond-drogen-na-lekkage`,
    datum: `2026-11-05`,
    titel: `Plafond drogen na een lekkage`,
    h1: `Plafond na een daklek: hoe lang laten drogen, en wanneer kun je schilderen?`,
    metaTitle: `Plafond drogen na lekkage | Spoed Dak Service`,
    metaDescription: `Lek dicht, maar nog een natte plek of bruine kring in je plafond? Zo laat je het drogen, zo zie je of het droog is en zo komt de vlek niet terug.`,
    intro: `Is het lek in je dak gemaakt, dan wil je die natte plek of bruine kring zo snel mogelijk weg hebben. Maar een plafond dat te vroeg wordt geschilderd, krijgt de vlek vaak gewoon terug. Hieronder lees je hoe lang drogen meestal duurt, hoe je ziet of het droog is, en wat het betekent als de vlek na een tijd weer terugkomt.`,
    secties: [
      { kop: `Eerst: is het lek echt dicht?`, tekst: [
        `Drogen heeft pas zin als er geen nieuw water meer bij komt. Wordt de plek na een flinke bui weer groter of natter, dan zit er nog een lek. Lekt het nu, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet. Bolt het plafond op, lees dan eerst <a href="/kennisbank/plafond-bolt-op-door-lekkage/">plafond bolt op na een lekkage</a>.`,
      ] },
      { kop: `Hoe lang duurt drogen?`, tekst: [
        `Dat hangt af van hoe nat het is geworden en waar het plafond van gemaakt is. Een kleine plek in een plafond van gipsplaat is vaak binnen een paar weken droog. Een betonnen plafond met een laag stucwerk erop houdt water veel langer vast, en dan kan het ruim een maand of langer duren. Is ook de isolatie op zolder nat geworden, dan duurt het langer, want die geeft het vocht langzaam af. Lees daarover <a href="/kennisbank/isolatie-nat-na-lekkage/">isolatie nat na een lekkage</a>.`,
      ] },
      { kop: `Zo help je het drogen`, tekst: [
        `Zet een raam op een kier of het rooster open, en houd de kamer op een gewone temperatuur. Zet geen kachel of bouwdroger vlak onder het plafond, want als het te snel droogt, kan het stucwerk scheuren of loslaten. Haal spullen weg die tegen de natte plek aan staan, en zet kasten een stukje van de muur af, zodat er lucht langs kan.`,
      ] },
      { kop: `Zo zie je dat het droog is`, tekst: [
        `Een natte plek is vaak donkerder en voelt kouder aan dan de rest. Is de kleur weer gelijk en voelt de plek net zo warm als het plafond eromheen, dan is hij meestal droog. Met een vochtmeter uit de bouwmarkt kun je het nameten: vergelijk de plek met een stuk plafond dat niet nat is geweest. Twijfel je, wacht dan liever nog een week.`,
      ] },
      { kop: `De bruine kring wegwerken`, tekst: [
        `Water neemt vuil en kalk mee uit het plafond, en bij het drogen blijft dat achter als een gele of bruine rand. Gewone muurverf dekt dat slecht: na een paar dagen schijnt de kring er weer doorheen. Zet de vlek daarom eerst in met een isolerende of vlekkendekkende grondverf, en schilder daarna het hele plafond, zodat je geen verschil ziet.`,
        `Is het stucwerk los, de gipsplaat zacht of doorgezakt, of zitten er scheuren in, dan moet dat stuk hersteld worden. Dat is werk voor een stukadoor of een klusbedrijf. Dat doe ik zelf niet.`,
      ] },
      { kop: `Komt de vlek terug?`, tekst: [
        `Komt de vlek na een paar weken of na de volgende flinke bui terug, dan komt er nog water bij. Dan zit het lek op een andere plek dan je dacht, of is er een tweede lek. Komt de vlek juist terug na koude dagen, terwijl het droog is geweest, dan kan het condens zijn. Lees <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a> en <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>. Stuur me een foto van de plek en vertel wanneer hij terugkwam, dan zeg ik eerlijk wat ik denk.`,
      ] },
      { kop: `Voor je verzekering`, tekst: [
        `Maak foto's van de vlek en het plafond voordat je gaat schilderen of iets laat herstellen, en bewaar de rekeningen. Kwam het lek plotseling, bijvoorbeeld door een storm, dan wordt de schade binnen vaak vergoed. Dat verschilt per polis. Lees <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Kan ik gewoon over een watervlek heen schilderen?`, a: `Liever niet met alleen muurverf. De bruine rand schijnt er dan na een paar dagen weer doorheen. Laat de plek eerst helemaal drogen, zet hem in met een isolerende of vlekkendekkende grondverf en schilder daarna het plafond.` },
      { v: `Hoe lang moet ik wachten voordat ik schilder?`, a: `Tot de plek helemaal droog is. Bij een kleine plek in gipsplaat is dat vaak een paar weken, bij een betonnen plafond met stucwerk soms een maand of langer. Schilder je te vroeg, dan blijft het vocht onder de verf zitten en kan de verf gaan bladderen of de vlek terugkomen.` },
      { v: `Het plafond is droog, maar het ruikt muf. Wat nu?`, a: `Zet de kamer en de zolder een paar dagen goed open. Blijft het muf ruiken of zie je zwarte puntjes, dan zit er nog vocht, vaak in de isolatie of het hout boven het plafond. Laat dat nakijken voordat je gaat schilderen.` },
      { v: `Betaalt de verzekering het herstel van mijn plafond?`, a: `Vaak wel, als het lek plotseling ontstond, bijvoorbeeld door storm. Komt het door slijtage of achterstallig onderhoud, dan wordt soms alleen de schade binnen vergoed, of niets. Kijk in je polis en maak foto's voordat je iets laat herstellen.` },
    ],
  },
  {
    slug: `offerte-dakdekker-vergelijken`,
    datum: `2026-11-05`,
    titel: `Offertes van dakdekkers vergelijken`,
    h1: `Twee offertes voor je dak: zo vergelijk je ze eerlijk`,
    metaTitle: `Offerte dakdekker vergelijken | Spoed Dak Service`,
    metaDescription: `Twee offertes voor je dak en een groot verschil in prijs? Zo zie je of ze over dezelfde klus gaan, wat er op papier hoort te staan en waar je op let.`,
    intro: `Vraag je bij twee dakdekkers een prijs, dan krijg je vaak twee heel verschillende offertes. De een wil een paar pannen vervangen, de ander het halve dak. De een noemt één bedrag, de ander een prijs per meter. Hieronder lees je hoe je ze eerlijk naast elkaar legt, wat er op papier hoort te staan en waar je beter even doorvraagt.`,
    secties: [
      { kop: `Gaat het over dezelfde klus?`, tekst: [
        `Kijk eerst wat er precies gaat gebeuren, niet naar het bedrag onderaan. Repareert de een het lek, en vervangt de ander het hele stuk dak? Gaat het om dezelfde pannen of hetzelfde materiaal? Dan vergelijk je twee verschillende klussen. Vraag allebei waarom ze voor hun aanpak kiezen, en wat ze op je dak zagen. Een vakman die echt heeft gekeken, kan dat uitleggen, het liefst met een foto erbij.`,
      ] },
      { kop: `Dit hoort op papier te staan`, tekst: [
        `Wat er gebeurt en waar op het dak. Hoeveel: hoeveel pannen, hoeveel meter goot of hoeveel vierkante meter dakbedekking. Welk materiaal er gebruikt wordt. Of de prijs met of zonder btw is. Wat er wel en niet bij zit, zoals een steiger, het afvoeren van oud materiaal of extra werk als er onder de pannen meer blijkt te zitten. Wanneer het werk gedaan wordt en hoe lang de prijs geldt. En de naam, het adres en het KvK-nummer van het bedrijf.`,
      ] },
      { kop: `Hier vraag je door`, tekst: [
        `Een prijs per meter of per pan, zonder dat erbij staat om hoeveel het gaat. Een post meerwerk die niet is uitgelegd. Een flink deel vooruit betalen, of contant. Een prijs die alleen vandaag geldt. En een offerte waar alleen 'dak repareren' op staat, zonder te zeggen wat. Dat hoeft niet te betekenen dat het niet klopt, maar vraag het na voordat je tekent. Lees ook <a href="/kennisbank/hoe-herken-je-een-betrouwbare-dakdekker/">betrouwbare dakdekker herkennen</a>.`,
      ] },
      { kop: `Goedkoop of duur?`, tekst: [
        `De laagste prijs is niet vanzelf de slechtste keus, en de hoogste niet vanzelf de beste. Het gaat erom wat je ervoor krijgt. Een reparatie die het lek echt oplost, is goedkoper dan een goedkope reparatie die na een jaar weer lekt. Ligt een prijs veel lager dan de andere, kijk dan of er iets mist, bijvoorbeeld het lood rond de schoorsteen of het afvoeren van het oude materiaal. Waar de prijs van een dakreparatie van afhangt, lees je in <a href="/kennisbank/wat-kost-een-dakdekker/">wat kost een dakdekker</a>.`,
      ] },
      { kop: `Kreeg je de offerte aan de deur?`, tekst: [
        `Heeft iemand ongevraagd aangebeld en meteen een prijs gegeven, neem dan rustig de tijd voordat je ja zegt. Lees <a href="/kennisbank/dakdekker-aan-de-deur/">er belt een dakdekker aan</a>. Spreek je aan de deur een klus af, dan heb je als particulier in de regel bedenktijd.`,
      ] },
      { kop: `Een derde blik`, tekst: [
        `Twijfel je tussen twee offertes, of vertrouw je het niet helemaal? Stuur me via WhatsApp een foto van je dak vanaf de straat en, als je wilt, de offerte. Dan zeg ik eerlijk wat ik zie en of de aanpak me logisch lijkt. Wil je weten hoe je hele dak ervoor staat, dan kun je de <a href="/dak-apk/">Dak-APK</a> laten doen: voor ${apkPrijs} kijk ik je hele dak na en krijg je een rapport met foto's. Dan weet je wat er nu echt moet gebeuren en wat nog kan wachten.`,
      ] },
      { kop: `Hoe ik zelf een prijs geef`, tekst: [
        `Ik kom kijken of je stuurt een foto, en dan hoor je vooraf één vaste prijs voor de klus. Zie ik onderweg dat er meer nodig is, dan hoor je dat eerst, en dan beslis jij. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: spoed dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Moet ik meer dan één offerte vragen?`, a: `Bij een grote klus, zoals een nieuw dak of een nieuwe dakbedekking, is het slim om er twee of drie te vragen. Bij een lek dat nu binnen druppelt, is dat vaak niet handig, want dan wil je dat het snel dicht is. Laat het dan eerst afdekken en vraag voor de nette reparatie gerust een tweede prijs.` },
      { v: `Is een offerte van een dakdekker gratis?`, a: `Meestal wel, bij mij ook. Een keuring van je hele dak met een rapport en foto's is iets anders. Bij mij heet dat de Dak-APK, en daarvoor betaal je een vast bedrag.` },
      { v: `De ene dakdekker wil repareren, de andere alles vervangen. Wie heeft gelijk?`, a: `Dat hangt af van hoe je dak erbij ligt. Is het dak verder gezond en zit het lek op één plek, dan is repareren vaak genoeg. Zijn de pannen of de dakbedekking op veel plekken op, dan kan vervangen op termijn slimmer zijn. Vraag allebei om foto's van wat ze zagen. Twijfel je dan nog, laat er dan een derde naar kijken.` },
      { v: `Mag ik een andere offerte naar je sturen om te laten bekijken?`, a: `Ja. Stuur hem via WhatsApp, samen met een foto van je dak vanaf de straat. Ik zeg eerlijk wat ik ervan denk, ook als ik hetzelfde zou doen als die andere vakman.` },
    ],
  },
  {
    slug: `lekkende-dakgoot-tijdelijk-oplossen`,
    datum: `2026-11-05`,
    titel: `Dakgoot lekt: tijdelijk oplossen?`,
    h1: `Dakgoot lekt: wat je zelf tijdelijk kunt doen tot hij gemaakt is`,
    metaTitle: `Lekkende dakgoot tijdelijk oplossen | Spoed Dak Service`,
    metaDescription: `Lekt je dakgoot en duurt het nog even voor hij gemaakt is? Dit kun je zelf veilig doen om de muur en je huis droog te houden, en dit laat je beter liggen.`,
    intro: `Lekt je dakgoot op één plek, dan wil je dat het stopt, ook als de reparatie pas over een paar dagen kan. Dat kan vaak, zonder dat je zelf de ladder op hoeft. Hieronder lees je wat je vanaf de grond en binnen kunt doen, wat je beter laat, en wanneer je niet moet wachten.`,
    secties: [
      { kop: `Eerst: druppelt het buiten of binnen?`, tekst: [
        `Valt de druppel buiten op de stoep, het terras of in de tuin, dan is het vervelend, maar meestal geen spoed. Wordt de muur binnen nat, bovenin vlak onder het plafond of rond een kozijn, dan komt het water naar binnen en wil je het snel laten maken. Kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet. Lees ook <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>.`,
      ] },
      { kop: `Vol of lek?`, tekst: [
        `Loopt het water over de voorkant van de goot, of op veel plekken tegelijk, dan zit de goot of de uitloop naar de regenpijp waarschijnlijk vol. Dan is hij niet lek, en is leegmaken genoeg. Valt de druppel bij elke bui op dezelfde plek, ook als de goot leeg lijkt, dan zit er een lek in een naad, een hoek of bij de uitloop. Hoe je dat verschil ziet, lees je in <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: `Wat je vanaf de grond kunt doen`, tekst: [
        `Zet een emmer of een bak onder de plek waar het druppelt, zeker als het op de stoep of de oprit valt. Bij vorst wordt een plek met druppels zo een plek met ijs.`,
        `Kijk onderaan de regenpijp of het water er nog uitkomt. Gaat de pijp onderaan de grond in en staat het water daar hoog, dan kan de verstopping ook laag zitten. Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp</a>.`,
        `Druppelt het tegen de gevel, op een kozijn of op een houten raam, zet dan weg wat nat kan worden, en kijk na een bui of het hout of de muur nat blijft.`,
      ] },
      { kop: `Binnen: houd het droog`, tekst: [
        `Is de muur binnen nat, schuif dan kasten en spullen een stukje van de muur af, zodat ze niet nat worden en er lucht langs kan. Leg een handdoek op de vensterbank als het langs het kozijn komt. Zit de natte plek bij een stopcontact of een lamp, zet dan in de meterkast de groep van die kamer uit. Maak foto's van de natte plek binnen en van de goot buiten, ook voor je verzekering.`,
      ] },
      { kop: `Wat je beter laat`, tekst: [
        `Ga niet met een ladder tegen de goot staan om hem dicht te plakken, zeker niet als het nat is of hard waait. Een ladder tegen een oude goot kan hem verbuigen of losdrukken, en een kunststof goot breekt bij kou snel. Kit en tape houden op een natte of vuile goot meestal maar kort, en daarna moet het er weer helemaal af voordat de goot goed gemaakt kan worden. Prik ook geen gaatje in de goot om het water ergens anders te laten weglopen.`,
      ] },
      { kop: `Wanneer je niet wacht`, tekst: [
        `Loopt het water binnen langs de muur, hangt de goot los boven de stoep of de oprit, of staat er na een bui water in de goot dat niet meer wegloopt, wacht dan niet op droog weer. Stuur me een foto via WhatsApp of bel. Hangt de goot alleen wat scheef, lees dan <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
      ] },
      { kop: `Hoe ik het maak`, tekst: [
        `Ik maak de goot eerst leeg, zodat ik zie waar hij echt lekt. Een lekkende naad in een zinken goot kan ik vaak solderen, en een goot die nog stevig is maar op een paar plekken dun wordt, kan van binnen gecoat worden. Bij een kunststof goot vervang ik meestal de lekkende verbinding of het hoekstuk. Lees ook <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a> en <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a>. Stuur een foto van de goot vanaf de straat en van de plek waar het druppelt, dan hoor je vooraf wat het kost. Zie ook <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Kan ik een lekkende dakgoot zelf tijdelijk dichtmaken?`, a: `Vanaf de grond niet, en vanaf een ladder liever ook niet. Kit of tape houdt op een natte of vuile goot meestal maar kort. Zet een emmer onder de druppel, houd binnen de muur vrij en stuur me een foto. Dan zeg ik of het kan wachten of dat het snel moet.` },
      { v: `Hoe lang kan een lekkende dakgoot wachten?`, a: `Valt de druppel buiten op de stoep, dan kan het vaak een paar dagen wachten. Laat het niet de hele winter zitten, want water dat steeds op dezelfde plek langs de gevel loopt, maakt de muur en het hout aan de dakrand nat. Komt het water binnen, dan wacht je liever niet.` },
      { v: `Mijn goot loopt over, maar lekt niet. Wat doe ik?`, a: `Dan zit hij of de uitloop naar de regenpijp meestal vol blad of mos. Ga er niet zelf met een ladder tegenaan staan als het nat of glad is. Kijk onderaan of de regenpijp nog water afvoert, en stuur me een foto van de goot tijdens of vlak na een bui.` },
      { v: `Is een lekkende dakgoot bij vorst erger?`, a: `Het kan. Water dat in de goot blijft staan, bevriest en zet dan uit, en dat kan een naad of hoekstuk verder openduwen. Bij vorst wordt een plek op de stoep met druppels ook glad. Zet er een bak onder en laat het na de vorst nakijken.` },
    ],
  },
  {
    slug: `dak-lekt-na-reparatie`,
    datum: `2026-11-05`,
    titel: `Dak lekt nog na de reparatie?`,
    h1: `Dak lekt nog na de reparatie: hoe kan dat, en wat doe je nu?`,
    metaTitle: `Dak lekt nog na reparatie: hoe kan dat? | Spoed Dak Service`,
    metaDescription: `Dak gerepareerd, maar na de volgende bui weer nat? Vaak is het restvocht, een tweede lek of water dat verderop binnenkomt. Zo zoek je uit wat het is.`,
    intro: `Het lek is gemaakt, en toch zie je na de volgende bui weer een natte plek. Dat is vervelend, maar het betekent niet meteen dat de reparatie niet goed is. Er zijn een paar bekende oorzaken, en de meeste zijn goed uit te zoeken. Hieronder lees je welke dat zijn, hoe je ze uit elkaar houdt en wat je nu doet.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en maak een foto van de natte plek, met de datum erbij. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Nieuw water, of oud water dat nog opdroogt?`, tekst: [
        `Na een lek zit er vaak nog water in het plafond, de isolatie of het hout erboven. Dat droogt langzaam, en een vlek kan nog weken donker blijven of zelfs een stukje groter worden, zonder dat er nieuw water bij komt. Teken met potlood de rand van de vlek af. Wordt hij na een droge week kleiner of lichter, dan is het restvocht. Wordt hij na een bui juist groter of natter, dan komt er nog water bij. Hoe lang drogen duurt, lees je in <a href="/kennisbank/plafond-drogen-na-lekkage/">plafond laten drogen na een lekkage</a>.`,
      ] },
      { kop: `Er zat een tweede lek`, tekst: [
        `Op een ouder dak is het niet gek als er meer dan één zwakke plek is. Het water van twee lekken kan op dezelfde plek binnenkomen, en dan merk je de tweede pas als de eerste dicht is. Dat zie je vaak bij een schoorsteen, waar het lood aan meer dan één kant kan lekken, en bij een dak waar ook de nok of een pan verderop los ligt.`,
      ] },
      { kop: `Het water loopt verder dan je denkt`, tekst: [
        `Water loopt onder de pannen en over de folie of het hout vaak een flink stuk naar beneden of opzij, voordat het binnen zichtbaar wordt. De natte plek binnen zit daardoor zelden recht onder het echte lek. Is er gerepareerd op de plek die het meest voor de hand lag, dan kan het echte lek hoger of opzij zitten. Lees <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Het lekt alleen bij wind, of alleen bij een stortbui`, tekst: [
        `Lekt het na de reparatie alleen bij harde wind uit één richting, of alleen bij een flinke stortbui, dan gaat het vaak om een plek die bij gewone regen droog blijft. Schrijf op bij wat voor weer het lekt, dat helpt bij het zoeken. Lees <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a> en <a href="/kennisbank/dak-lekt-bij-hevige-regen/">dak lekt bij hevige regen</a>.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Druppelt het vooral op koude ochtenden, ook als het dagen droog is geweest, en zie je druppels verspreid over de folie of het hout? Dan is het vaak condens en geen lek. Dat komt in de winter vaker voor, zeker na het isoleren. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Bel eerst wie de reparatie deed`, tekst: [
        `Is de reparatie pas gedaan, bel of app dan eerst de dakdekker die hem deed. Vertel wat je ziet, stuur je foto's en zeg bij wat voor weer het lekte. Geef hem de kans om te kijken, want hij weet wat hij heeft gedaan en waar hij heeft gezocht. Wat er voor afspraken gelden, staat meestal op de offerte of de factuur. Ging het om een nieuw dak of een nieuwbouwhuis, lees dan <a href="/kennisbank/nieuw-dak-lekt/">nieuw dak lekt</a>.`,
        `Heb ik bij jou een lek gerepareerd en is het weer nat, bel of app me dan meteen, met een foto van de plek. Dan kijk ik waar het water nu vandaan komt.`,
      ] },
      { kop: `Een tweede mening`, tekst: [
        `Reageert de dakdekker niet, of kom je er samen niet uit? Dan kun je een andere vakman laten kijken. Bewaar de foto's, de offerte en de rekening van de eerste reparatie, en zeg erbij wat er toen is gedaan. Ik kijk dan waar het water nu binnenkomt, maak foto's van wat ik zie en zeg eerlijk of het om dezelfde plek gaat of om een andere. Je hoort vooraf wat het kost. Twijfel je over je rechten, vraag dan advies bij het Juridisch Loket.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Hoe weet ik of de vlek nog restvocht is of een nieuw lek?`, a: `Teken de rand van de vlek af met potlood en kijk na een paar droge dagen en na de volgende bui. Wordt hij kleiner of lichter, dan droogt hij op. Wordt hij na regen groter of natter, dan komt er nog water bij. Stuur me een foto van voor en na de bui als je twijfelt.` },
      { v: `Moet de dakdekker die het repareerde terugkomen?`, a: `Is de reparatie pas gedaan, vraag hem dan eerst om te komen kijken. Lekt het op een andere plek dan waar hij heeft gewerkt, dan kan het ook een tweede lek zijn. Leg vast wat je ziet, met foto's en de datum, zodat jullie samen kunnen kijken wat er aan de hand is.` },
      { v: `Kan een dak op twee plekken tegelijk lekken?`, a: `Ja, zeker bij een ouder dak. Het water van twee lekken komt soms op dezelfde plek binnen. Dan zie je de tweede pas als de eerste dicht is. Daarom kijk ik bij een lek ook naar de plekken eromheen en erboven.` },
      { v: `Hoe lang moet ik wachten voordat ik het plafond schilder?`, a: `Tot de plek helemaal droog is en na een paar flinke buien droog blijft. Dan weet je ook zeker dat er geen nieuw water meer bij komt. Bij een kleine plek is dat vaak een paar weken, bij een betonnen plafond soms langer.` },
    ],
  },
  {
    slug: `lekkende-dakgoot-verzekering`,
    datum: `2026-11-05`,
    titel: `Lekkende dakgoot en je verzekering`,
    h1: `Lekkende dakgoot en een natte muur: betaalt de verzekering?`,
    metaTitle: `Dakgoot lekt: betaalt de verzekering? | Spoed Dak Service`,
    metaDescription: `Natte muur of plafond door een lekkende of overlopende dakgoot? Wat je verzekeraar vaak wel en niet vergoedt, wat je vastlegt en wanneer het onderhoud heet.`,
    intro: `Een goot die lekt of overloopt, maakt eerst de buitenmuur nat. Gaat dat lang door, of loopt het water achter de goot langs naar binnen, dan krijg je een natte plek bovenin de muur of op het plafond. Of je verzekering daar iets aan betaalt, hangt vooral af van hoe het kwam: plotseling, of door slijtage en een goot die al lang vol zat. Hieronder lees je hoe het meestal zit. Wat er in jouw polis staat, gaat voor.`,
    secties: [
      { kop: `Lekt het nu binnen? Eerst dit`, tekst: [
        `Zet een emmer neer, schuif spullen van de natte muur af en maak foto's, binnen en van de goot buiten, voordat je iets opruimt. Zit de natte plek bij een stopcontact of een lamp, zet dan in de meterkast de groep van die kamer uit. Wat je verder meteen doet, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat vaak wel wordt vergoed`, tekst: [
        `De schade binnen: een nat plafond, een vlek op de muur, behang dat loslaat of een vloer die nat is geworden. Veel inboedel- en opstalverzekeringen vergoeden dat als het water plotseling binnenkwam, bijvoorbeeld bij een storm, een zware stortbui of een goot die bij een windstoot losscheurde. Is een stuk goot afgewaaid of door een tak geraakt, dan valt de reparatie van de goot soms ook onder je opstalverzekering.`,
      ] },
      { kop: `Wat meestal niet wordt vergoed`, tekst: [
        `De goot zelf, als hij lekt door slijtage: een naad die na veel jaren loslaat, zink dat dun is geworden of kunststof dat bros is. En schade die langzaam is ontstaan, zoals een muur die al maanden nat werd omdat de goot steeds overliep. Verzekeraars zien dat in de regel als onderhoud. Ook een goot die lang vol blad zat en daardoor overliep, valt daar vaak onder.`,
      ] },
      { kop: `Buitenmuur of binnen: wat je ziet`, tekst: [
        `Loopt het water buiten langs de gevel, dan wordt vooral de buitenmuur nat. Groene strepen of afgebrokkelde stenen zie je daar pas na een tijd. Loopt het water achter de goot langs naar binnen, dan zie je het sneller binnen, bovenin de muur of op het plafond. Hoe dat komt, lees je in <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a> en <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>.`,
      ] },
      { kop: `Dit leg je vast`, tekst: [
        `Foto's van de natte plek binnen, met de datum, en van de goot buiten, vanaf de straat en het liefst tijdens een bui. Schrijf op wanneer het begon en bij wat voor weer het nat werd. Bewaar de rekening van de reparatie en van wat je verder hebt laten herstellen. Bel je verzekeraar of kijk in je polisvoorwaarden voordat je de schade binnen laat herstellen, want soms willen ze eerst zelf komen kijken.`,
      ] },
      { kop: `Wat je van mij krijgt`, tekst: [
        `Repareer ik je goot, dan maak ik foto's van wat ik aantref en van de reparatie, met een korte omschrijving van wat er aan de hand was. Die kun je naar je verzekeraar sturen. Of ze iets vergoeden, beslist je verzekeraar, niet ik.`,
      ] },
      { kop: `Woon je in een rij of in een huurhuis?`, tekst: [
        `Loopt de goot door naar de buren en zit het lek aan hun kant, dan is het slim om het samen op te lossen. Lees <a href="/kennisbank/lekkage-muur-buren/">nat langs de muur met de buren</a>. Huur je, meld het dan meteen bij je verhuurder, want de goot is in de regel zijn zaak. Lees <a href="/kennisbank/lekkage-huurhuis/">lekkage in een huurhuis</a>. Meer over je verzekering bij een daklek in het algemeen staat in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Laat de goot op tijd maken`, tekst: [
        `Een goot die lekt, wordt niet vanzelf beter, en een verzekeraar verwacht in de regel dat je de schade beperkt. Hoe ik een lekkende naad, hoek of uitloop repareer, lees je in <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>. Stuur een foto van de goot vanaf de straat en van de natte plek, dan hoor je vooraf wat het kost. Zie ook <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Betaalt de verzekering een nieuwe dakgoot?`, a: `Meestal niet als de goot lekt door ouderdom of slijtage. Is de goot bij een storm losgescheurd of door een vallende tak beschadigd, dan valt de reparatie soms wel onder je opstalverzekering. Kijk in je polisvoorwaarden of bel je verzekeraar.` },
      { v: `Mijn muur is nat door een overlopende goot. Wordt dat vergoed?`, a: `Dat hangt af van je polis en van hoe het kwam. Liep de goot over bij een zware stortbui, dan is dat eerder plotselinge schade. Liep hij over omdat hij al lang vol blad zat, dan zien verzekeraars dat vaak als onderhoud. Maak foto's van de goot en van de natte muur, en meld het bij je verzekeraar.` },
      { v: `Moet ik eerst mijn verzekeraar bellen of eerst de goot laten maken?`, a: `Druppelt het binnen, dan mag je de schade in de regel eerst beperken, bijvoorbeeld door de goot te laten leegmaken of een lek dicht te laten maken. Maak wel eerst foto's en bewaar de rekening. Meld het daarna zo snel als je kunt bij je verzekeraar.` },
      { v: `Krijg ik van jou iets voor mijn verzekeraar?`, a: `Ja. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving van wat er aan de hand was. Die kun je meesturen. Of je verzekeraar iets vergoedt, beslist hij zelf.` },
    ],
  },
  {
    slug: `druppelen-horen-plafond`,
    datum: `2026-11-05`,
    titel: `Je hoort druppelen, maar ziet geen water?`,
    h1: `Je hoort water druppelen in je plafond of muur, maar ziet niets: waar komt het vandaan?`,
    metaTitle: `Druppelen horen in plafond of muur | Spoed Dak Service`,
    metaDescription: `Hoor je bij regen getik of gedruppel boven je plafond of in de muur, maar zie je geen natte plek? Zo zoek je uit of het van het dak, de goot of een leiding komt.`,
    intro: `Je ligt in bed en hoort boven je hoofd getik of gedruppel, maar op het plafond zie je niets. Dat is vervelend, want je weet niet of er iets aan de hand is. Vaak is er een gewone verklaring, maar soms is het het begin van een lek dat je pas later ziet. Hieronder lees je hoe je uitzoekt waar het geluid vandaan komt, en wanneer je beter even belt.`,
    secties: [
      { kop: `Eerst: wanneer hoor je het?`, tekst: [
        `Let goed op wanneer je het geluid hoort. Hoor je het alleen tijdens of vlak na regen, dan komt het water van buiten: van het dak, de goot of een regenpijp. Hoor je het ook als het dagen droog is, of juist als er iemand doucht of een kraan openstaat, dan is een leiding of de afvoer veel waarschijnlijker. Dan heb je een loodgieter nodig. Kijk ook of je watermeter draait terwijl alle kranen dicht zijn.`,
      ] },
      { kop: `Getik van buiten`, tekst: [
        `Niet elk getik is water dat binnenkomt. Regen die op een loodslab valt, op een metalen kap op de schoorsteen of op het profiel rond een dakraam, kan binnen klinken alsof het in je plafond druppelt. Dat merk je vooral op zolder of in een slaapkamer onder het schuine dak. Druppelt er water uit een goot op een vensterbank of op een plat dakje eronder, dan hoor je dat binnen ook. Kijk bij de volgende bui uit het raam of ga even naar buiten om te zien waar het water op valt.`,
      ] },
      { kop: `Water dat je nog niet ziet`, tekst: [
        `Komt er wel water binnen, dan loopt het eerst over de folie, de panlatten of een balk. Soms druppelt het op de isolatie of op de bovenkant van een plafond van gipsplaat. Daar trekt het in, en pas na een tijd zie je een vlek of een bolling. Ook in een spouwmuur, of langs een regenpijp die binnen in de muur zit, kan water naar beneden lopen zonder dat je het meteen ziet. Lees ook <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a> en <a href="/kennisbank/plafond-bolt-op-door-lekkage/">plafond bolt op na een lekkage</a>.`,
      ] },
      { kop: `Zo zoek je het zelf uit`, tekst: [
        `Kun je veilig op zolder komen, ga dan tijdens of vlak na een bui met een zaklamp kijken op de plek waar je het geluid hoort. Kijk naar de onderkant van de pannen of het dakbeschot, naar de balken, de isolatie en de pijpen die door het dak gaan. Een natte streep op het hout wijst vaak de weg naar boven. Leg een stuk karton of een oude handdoek onder die plek, dan zie je de volgende keer of er water op valt. Heb je geen zolder, kijk dan of het plafond onder de plek kouder of donkerder is dan de rest.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Hoor je het vooral op koude ochtenden, ook als het droog is geweest? Dan kan het condens zijn: vocht uit het huis dat tegen het koude dak of tegen een koude pijp neerslaat en naar beneden druppelt. Dat gebeurt ook bij een ontluchtingspijp of de afvoer van een afzuiging die over een koude zolder loopt. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a> en <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
      ] },
      { kop: `Wanneer je niet wacht`, tekst: [
        `Hoor je het druppelen boven een lamp, een stopcontact of een plafond van gipsplaat, of zie je de plek ineens bol staan of verkleuren? Wacht dan niet. Zet in de meterkast de groep van die kamer uit en blijf niet onder een bolling staan. Wat je verder meteen doet, staat op de <a href="/spoed/">spoedpagina</a>. Lees ook <a href="/kennisbank/water-uit-lamp-plafond/">water uit de lamp</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een bericht: wanneer je het hoort, waar in huis, en een foto van het plafond en van die kant van je dak vanaf de straat. Dan zeg ik eerlijk of het eerder van het dak, de goot of een leiding komt. Komt het van het dak, dan kijk ik eerst op zolder en daarna buiten waar het water binnenkomt, zonder onnodig iets open te breken. Je hoort vooraf wat het kost. Hoe ik een lek zoek, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Ik hoor druppelen, maar mijn plafond is droog. Lekt mijn dak?`, a: `Niet per se. Hoor je het alleen bij regen, dan kan het water buiten op een loodslab, een kap of een vensterbank tikken. Het kan ook water zijn dat wel binnenkomt, maar nog op de isolatie of een balk blijft liggen. Kijk tijdens een bui met een zaklamp op zolder. Zie je nat hout of natte isolatie, dan lekt het wel. Stuur me een foto, dan kijk ik mee.` },
      { v: `Ik hoor het ook als het droog is. Wat is het dan?`, a: `Dan komt het meestal niet van het dak. Een lekkende leiding, de afvoer van de badkamer of condens in een koude pijp is dan waarschijnlijker. Kijk of je watermeter draait terwijl alle kranen dicht zijn. Bij een leiding heb je een loodgieter nodig.` },
      { v: `Kan ik wachten tot ik een vlek zie?`, a: `Liever niet te lang. Water dat steeds op dezelfde plek op de isolatie of het plafond valt, maakt het hout en de isolatie nat, en een plafond van gipsplaat kan daardoor gaan bollen. Hoor je het bij elke bui, laat het dan nakijken.` },
      { v: `Is druppelen in het plafond spoed?`, a: `Hoor je het boven een lamp of een stopcontact, of staat het plafond bol, dan wel. Zet de groep van die kamer uit in de meterkast en bel of app me. Hoor je alleen af en toe een tikje bij harde regen en blijft alles droog, dan kan het meestal een paar dagen wachten.` },
    ],
  },
  {
    slug: `dakterras-lekt`,
    datum: `2026-11-06`,
    titel: `Lekt je dakterras of balkon?`,
    h1: `Dakterras of balkon lekt naar de kamer eronder: waar het zit en wat je doet`,
    metaTitle: `Dakterras of balkon lekt | Spoed Dak Service`,
    metaDescription: `Lekt het in de kamer onder je dakterras of balkon? Vaak zit het onder de tegels, bij de afvoer, de rand of de muur. Zo zie je waar het zit en wat je doet.`,
    intro: `Een dakterras of balkon boven een kamer is eigenlijk een plat dak met tegels erop. Je loopt niet over de dakbedekking zelf, maar over de tegels die erop liggen. Lekt het in de kamer eronder, dan zit het lek meestal in die dakbedekking onder de tegels, en vaak op een paar vaste plekken. Hieronder lees je welke dat zijn, wat je zelf kunt nakijken en hoe het gemaakt wordt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en haal spullen weg die niet nat mogen worden. Druppelt het bij een lamp of spotje, zet dan in de meterkast de groep van die kamer uit. Maak een foto van de natte plek binnen en van het terras. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit een dakterras in elkaar`, tekst: [
        `Onder de tegels ligt een dakbedekking, meestal bitumen of EPDM, net als op een gewoon plat dak. De tegels liggen daar los bovenop, op tegeldragers of op een laag grind. Tegen de muur loopt de dakbedekking een stukje omhoog, en ergens zit een afvoer of een uitloop door de rand waar het water weg kan. Omdat de tegels erop liggen, zie je van al die plekken bijna niets.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Bij de afvoer. Onder de tegels hoopt zich blad, zand en vuil op rond de afvoer. Loopt die langzaam weg of zit hij dicht, dan blijft het water op de dakbedekking staan en zoekt het een weg langs de aansluiting van de afvoer naar binnen.`,
        `Bij de deur naar het terras. Onder de dorpel van de deur loopt de dakbedekking vaak maar een klein stukje omhoog. Staat er na een bui water op het terras, of waait de regen tegen de deur, dan kan het over die rand onder de dorpel door lopen. Binnen zie je dat vaak bij de deur of op het plafond eronder, langs die muur.`,
        `Langs de muur en de rand. Waar de dakbedekking tegen de muur omhoog loopt, zit bovenaan een strook of profiel. Zit die los, dan loopt het regenwater van de gevel erachter naar beneden. Aan de buitenkant van het terras zit vaak een daktrim. Zie ook <a href="/kennisbank/daktrim-lekt/">plat dak lekt langs de rand</a>.`,
        `Bij een hek of reling. Is het hek door de dakbedekking heen vastgeschroefd, dan is elke schroef een plek waar water langs kan. Na jaren laat de afdichting daaromheen los.`,
        `Onder een zware bak of tegeldrager. Een grote bloembak die jaren op één plek staat, of een scherp steentje onder een tegeldrager, kan na een tijd een gaatje in de dakbedekking drukken. Dat zie je pas als de tegels eraf zijn.`,
      ] },
      { kop: `Wat je zelf kunt nakijken`, tekst: [
        `Kijk na een bui of er water op het terras blijft staan, en waar. Kijk of de afvoer vrij is: vaak kun je het roostertje erboven optillen en het blad eruit halen. Kijk langs de muur en bij de deur of je een kier, een losse strook of een opstaande rand ziet. Til geen tegels op langs de rand van het terras, en leun niet op een hek dat los zit.`,
      ] },
      { kop: `Of is het iets anders?`, tekst: [
        `Zit de natte plek midden in het plafond, onder een badkamer, of wordt hij ook groter als het dagen droog is, dan is het eerder een leiding. Lees <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a>. Druppelt het vooral op koude ochtenden, dan kan het condens zijn: zie <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Woon je in een appartement?`, tekst: [
        `Het dakterras of balkon van een appartement hoort meestal bij het gebouw, en het onderhoud daarvan ligt vaak bij de VvE. Meld een lek daarom ook bij het bestuur of de beheerder, en huur je, bij je verhuurder. Meer daarover lees je bij <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het nat is, en daarna op het terras naar de afvoer, de deur, de rand en de muur. Op de plek waar ik het lek verwacht, haal ik de tegels weg en maak ik de dakbedekking schoon en droog. Een losse naad, een gaatje of een losse aansluiting bij de afvoer of de muur maak ik dicht, en daarna gaan de tegels er weer op. Is de dakbedekking op veel plekken versleten, dan zeg ik eerlijk dat een nieuwe laag beter is. Zie ook <a href="/diensten/platte-daken/">platte daken</a> en <a href="/kennisbank/epdm-dak-lekt/">EPDM-dak lekt</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een gerichte reparatie van een lek in een klein plat dak kost ${platPrijs}. Moeten er veel tegels weg, of is er een nieuwe dakbedekking nodig, dan kom ik eerst kijken en hoor je vooraf de vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken (EPDM)`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Moeten alle tegels eraf om het lek te vinden?`, a: `Meestal niet. Ik kijk eerst waar het binnen nat is en waar het water op het terras blijft staan, en haal dan alleen op die plekken de tegels weg. Pas als de dakbedekking over het hele terras op is, moeten alle tegels eraf.` },
      { v: `Kan ik zelf kit langs de deur of de rand smeren?`, a: `Liever niet. Kit hecht slecht op een natte of vuile ondergrond, en op EPDM houdt het niet. Vaak zit het echte lek ook ergens anders, onder de tegels. Dan moet de kit er bij de reparatie weer af. Maak liever de afvoer vrij en stuur me een foto.` },
      { v: `Is een lekkend dakterras spoed?`, a: `Druppelt het in een kamer, bij een lamp of een stopcontact, of wordt het plafond bol, dan wel: bel of app me met een foto. Zie je alleen na een flinke bui een kleine vlek, dan kan het vaak een paar dagen wachten. Laat het niet de hele winter zitten, want het plafond en het hout eronder worden steeds natter.` },
      { v: `Kun je een dakterras repareren als het regent?`, a: `Een nette reparatie niet, want de dakbedekking moet schoon en droog zijn. Lekt het nu, dan kijk ik of ik het eerst tijdelijk kan afdekken, zodat het binnen droog blijft. De reparatie volgt op een droge dag. Je hoort vooraf wat het kost.` },
    ],
  },
  {
    slug: `poreuze-dakpannen`,
    datum: `2026-11-06`,
    titel: `Nemen je dakpannen water op?`,
    h1: `Poreuze dakpannen: zo zie je of je pannen water opnemen, en wat je eraan doet`,
    metaTitle: `Poreuze dakpannen herkennen | Spoed Dak Service`,
    metaDescription: `Blijven je dakpannen na een bui lang donker, groeit er veel mos op of liggen er schilfers in de goot? Dan nemen ze water op. Zo zie je hoe erg het is.`,
    intro: `Dakpannen gaan lang mee, maar niet eeuwig. Na veel jaren regen, vorst en zon worden sommige pannen poreus: ze nemen water op in plaats van het af te voeren. Dat gebeurt niet op één dag, en je dak lekt er ook niet meteen door. Maar een poreuze pan gaat bij vorst sneller kapot, en dan komt er wel water onder de pannen. Hieronder lees je hoe je het herkent, hoe erg het is en wat eraan te doen is.`,
    secties: [
      { kop: `Wat is een poreuze dakpan?`, tekst: [
        `Een dakpan is gemaakt van gebakken klei of van beton. Een goede pan laat het regenwater over zich heen lopen. Na jaren slijt de bovenkant: bij een betonpan verdwijnt de gekleurde toplaag, bij een kleipan gaat de harde buitenkant er langzaam af. Dan trekt het water de pan in. Nat worden is op zich niet erg, maar water in een pan dat bevriest, zet uit. Daardoor komen er kleine scheurtjes in, schilfert de pan af of breekt er een stuk af.`,
      ] },
      { kop: `Zo herken je het vanaf de straat`, tekst: [
        `Kijk na een flinke bui naar je dak, als het weer droog wordt. Blijven een paar pannen of een heel stuk dak veel langer donker dan de rest, dan nemen die pannen meer water op. Andere tekenen zijn veel mos of groene aanslag op dezelfde pannen, pannen die dof en ruw zijn geworden terwijl de rest nog glad is, en schilfers of stukjes pan in de goot. Maak een foto met de zoom van je telefoon, dan zie je meer dan met het blote oog.`,
      ] },
      { kop: `Zo zie je het op zolder`, tekst: [
        `Ligt er geen folie of houten beschot onder je pannen, dan zie je op zolder de onderkant van de pannen. Zijn sommige pannen na een natte week aan de onderkant donker of vochtig, dan trekt er water in. Ligt er wel folie of beschot, kijk dan na een natte periode of de panlatten donker zijn of er vochtplekken op het hout zitten. Lees ook <a href="/kennisbank/dakfolie-kapot/">dakfolie kapot of vergaan</a>.`,
      ] },
      { kop: `Hoe erg is het?`, tekst: [
        `Een paar poreuze pannen tussen pannen die nog goed zijn, is niet erg. Die vervang ik los, door pannen die passen bij de rest. Zitten er op veel plekken pannen die water opnemen, afbrokkelen of na elke vorstperiode weer een barst hebben, dan blijf je repareren. Dan is het vaak slimmer om dat dakvlak in één keer aan te pakken. De voorkant en de achterkant van een dak slijten vaak niet even snel, dus het hoeft niet meteen het hele dak te zijn.`,
      ] },
      { kop: `Wat het met lekkage te maken heeft`, tekst: [
        `Een poreuze pan lekt zelf zelden door. Het water dat erin trekt, komt meestal niet binnen. Het wordt een probleem als de pan bij vorst barst of er een stuk afvalt. Dan ligt er een gat in je dak en loopt de regen onder de pannen. Lees ook <a href="/kennisbank/vorstschade-dakpannen/">vorstschade aan dakpannen</a> en <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet zelf op het dak lopen om te kijken. Een poreuze pan breekt makkelijker als je erop stapt, en een natte of bemoste pan is glad. Spuit het dak ook niet schoon met een hogedrukspuit. Daarmee haal je juist de laatste harde laag van de pannen af, en je spuit water onder de pannen door.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van je dak vanaf de straat, het liefst vlak na een bui, en als het kan een foto van de onderkant van de pannen op zolder. Dan zie ik vaak al of het om een paar pannen gaat of om meer. Ik kijk naar de pannen, maar ook naar de nok, het lood en de goot, want bij een ouder dak speelt er vaak meer. Wil je je hele dak laten nakijken, dan kan dat met de <a href="/dak-apk/">Dak-APK</a>. Moet een dakvlak opnieuw, lees dan <a href="/diensten/dakrenovatie/">dakrenovatie</a>. Hoe lang een pannendak meegaat, lees je in <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse pannen vervangen kost ${prijsVan("dakpan")}. Moet er een groter stuk of een heel dakvlak opnieuw, dan kom ik eerst kijken en hoor je vooraf de vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Is het erg als mijn dak na een bui lang donker blijft?`, a: `Niet meteen. Het betekent dat de pannen water opnemen. Dat is een teken dat ze ouder worden, en het is goed om ze een keer te laten nakijken, liefst voor de winter. Zie je ook schilfers in de goot of een natte plek op zolder, stuur me dan een foto via WhatsApp.` },
      { v: `Worden betonpannen eerder poreus dan kleipannen?`, a: `Dat verschilt per pan en per dak. Bij betonpannen zie je na veel jaren vaak dat de gekleurde toplaag weg is en de pan ruw en grijs wordt. Kleipannen gaan meestal langer mee, maar ook die kunnen na lange tijd water opnemen, vooral op de kant van het dak die weinig zon krijgt en lang nat blijft.` },
      { v: `Kan ik een paar nieuwe pannen tussen de oude laten leggen?`, a: `Ja, als er een pan te krijgen is die past. Bij oudere daken is niet elke pan nog te koop. Dan zoek ik een pan die in vorm en maat past. Een nieuwe pan heeft soms een iets andere kleur dan de oude ernaast. Stuur me een foto van je pannen, het liefst van dichtbij vanuit een raam, dan zie ik vaak al welke pan het is.` },
      { v: `Moet het hele dak eraf als mijn pannen poreus zijn?`, a: `Nee, niet meteen. Gaat het om een paar pannen, dan vervang ik die los. Pas als er op veel plekken pannen water opnemen of kapot gaan, is het slim om een dakvlak in één keer aan te pakken. Ik zeg eerlijk wat ik zie, en je hoort vooraf wat het kost.` },
    ],
  },
  {
    slug: `dakpan-lijmen-of-kitten`,
    datum: `2026-11-07`,
    titel: `Dakpan lijmen of kitten?`,
    h1: `Gebroken dakpan lijmen of kitten: houdt dat, en wat werkt wel?`,
    metaTitle: `Gebroken dakpan lijmen of kitten? | Spoed Dak Service`,
    metaDescription: `Gebarsten dakpan lijmen, kitten of plakken? Dat houdt zelden lang. Waarom niet, wanneer het even helpt en waarom een nieuwe pan meestal beter is.`,
    intro: `Een pan met een barst of een afgebroken hoek lijkt makkelijk te maken: een likje kit of lijm erop en klaar. Online zie je er allerlei middeltjes voor. Toch houdt dat op een dak zelden lang. Hieronder lees je waarom, wanneer het als noodoplossing even kan helpen, en hoe ik een kapotte pan aanpak.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en maak een foto van de natte plek. Ga niet zelf het dak op om een pan te lijmen, zeker niet als het nat is of waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom lijmen of kitten zelden houdt`, tekst: [
        `Een dakpan ligt het hele jaar in de zon, de regen en de vorst. Hij wordt overdag warm en 's nachts koud, en zet daarbij steeds een klein beetje uit en krimpt weer. Kit, lijm en tape kunnen dat niet lang bijhouden. Na een paar maanden laten ze los, en dan loopt het water weer op dezelfde plek naar binnen.`,
        `Kit hecht ook slecht op een pan die vuil, bemost of vochtig is, en dat zijn de meeste pannen op een dak. Zit er water in een barst en vriest het, dan duwt het ijs de barst verder open, ook als er een laagje kit overheen zit.`,
      ] },
      { kop: `Waarom een gelijmde pan vaak opnieuw breekt`, tekst: [
        `Een barst ontstaat meestal niet zomaar. De pan is oud en neemt water op, er heeft iemand op gestaan, of er viel een tak op. Lijm je de barst, dan blijft de pan zwak, en bij de volgende vorst of windstoot breekt hij vaak net naast de naad. Neemt je dak op meer plekken water op, lees dan ook <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
      ] },
      { kop: `Wanneer het even kan helpen`, tekst: [
        `Als noodoplossing, tot de pan vervangen wordt, kan een stuk tape of kit soms een paar dagen of weken het ergste water tegenhouden. Zie het als een emmer onder de druppel: het koopt tijd, meer niet. Zet er geen nieuwe laag overheen als het weer gaat lekken. Hoe je een lek tijdelijk dicht houdt zonder zelf het dak op te gaan, lees je in <a href="/kennisbank/daklek-tijdelijk-dichten/">daklek tijdelijk dichten</a>.`,
      ] },
      { kop: `Wat het wel oplost`, tekst: [
        `Een nieuwe pan die past bij de pannen eromheen. Ik haal de kapotte pan eruit, kijk of de panlat en de folie eronder nog goed zijn, en leg een passende pan terug die weer goed in de pannen ernaast haakt. Is een oud model niet meer te krijgen, dan zoek ik een oplossing, bijvoorbeeld een pan van een plek die je niet ziet. Hoe je zelf ziet welke pannen je hebt, lees je in <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik</a>.`,
      ] },
      { kop: `Zit er al kit op je dak?`, tekst: [
        `Heeft iemand eerder een pan dichtgekit of met schuim vastgezet, dan haal ik dat weg waar het in de weg zit. Kit tussen de pannen houdt ook vocht vast, en dan worden de latten eronder sneller zacht. Lekt het na zo'n eerdere reparatie nog steeds, lees dan <a href="/kennisbank/dak-lekt-na-reparatie/">dak lekt na een reparatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse of kapotte pannen vervangen valt meestal onder een kleine reparatie: ${inclBtw("dakpan")}. Zijn de panlatten of de folie eronder ook nat of zacht geworden, dan is het meer werk. Je hoort de vaste prijs vooraf, voordat ik begin. Zie ook <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Welke kit of lijm werkt het best op een dakpan?`, a: `Geen enkele houdt het echt lang. Ook kit die voor buiten of voor daken is gemaakt, laat op een pan die in de zon en de vorst ligt na een tijd los. Als noodoplossing voor een paar dagen kan het, maar een nieuwe pan is de echte oplossing.` },
      { v: `Kan ik een gebarsten pan laten zitten als het binnen droog blijft?`, a: `Liever niet te lang. Ook als het binnen nu droog is, komt er bij elke bui wat water onder de pan, op de lat en de folie. En bij vorst of een flinke windstoot kan de pan verder breken of verschuiven. Stuur me een foto vanaf de straat, dan zeg ik eerlijk hoe snel het moet.` },
      { v: `Is een gebroken dakpan spoed?`, a: `Lekt het binnen of ligt er een stuk dak open, dan wel: bel of app me met een foto. Is het binnen droog en zit er alleen een barstje in, dan kan het meestal een paar dagen wachten. Wacht niet tot de volgende storm.` },
    ],
  },
  {
    slug: `wat-kost-een-dakinspectie`,
    datum: `2026-11-06`,
    titel: `Wat kost een dakinspectie?`,
    h1: `Wat kost een dakinspectie, en wat krijg je ervoor?`,
    metaTitle: `Wat kost een dakinspectie? | Spoed Dak Service`,
    metaDescription: `Wat kost een dakinspectie, en waar betaal je eigenlijk voor? Zo zie je het verschil tussen een snelle blik vanaf de straat en een keuring met fotorapport.`,
    intro: `Je wilt weten hoe je dak ervoor staat, bijvoorbeeld voor de winter, na een storm of omdat je een huis wilt kopen. Dan kom je al snel uit bij een dakinspectie. Maar wat kost dat, en wat krijg je er dan voor? Hieronder lees je waar de prijs van afhangt, wat er bij een goede inspectie hoort en wat de Dak-APK bij mij kost.`,
    secties: [
      { kop: `Waar de prijs van afhangt`, tekst: [
        `Een dakinspectie is niet overal hetzelfde. De ene keer kijkt iemand vijf minuten vanaf de straat, de andere keer gaat een vakman het dak op, kijkt hij op zolder en krijg je een rapport met foto's. Dat verschil zie je terug in de prijs. Verder maakt het uit hoe groot je dak is, hoe goed je erbij kunt en of er ook een plat dak of een schuur bij hoort.`,
      ] },
      { kop: `Wat er bij een goede inspectie hoort`, tekst: [
        `Bij een goede inspectie wordt het hele dak nagekeken, niet alleen de plek die je zelf al zag. Denk aan de pannen, de nok, het lood rond de schoorsteen en het dakraam, de goten en de afvoer, en de plekken waar al eens water is binnengekomen. Op zolder kijk je naar vochtplekken op het hout en of er folie onder de pannen ligt. Wat ik precies nakijk, lees je in <a href="/kennisbank/dakinspectie/">dakinspectie: wat ik nakijk</a>.`,
      ] },
      { kop: `Een snelle blik of een rapport?`, tekst: [
        `Een snelle blik vanaf de straat zegt al iets: een scheve pan of een nok die niet recht staat, zie je zo. Maar lood dat loslaat, een gescheurde pan of een goot die bij een naad lekt, zie je pas van dichtbij. Een rapport met foto's heeft als voordeel dat je zelf ziet wat er speelt, en dat je het kunt bewaren of aan iemand anders kunt laten zien, bijvoorbeeld als je een huis koopt.`,
      ] },
      { kop: `Wat de Dak-APK bij mij kost`, tekst: [
        `Bij mij heet de dakinspectie de Dak-APK. Die kost ${apkPrijs}. Ik kijk naar de pannen, de nokvorsten, de goot en de afwatering, mos en aanslag, het lood en de aansluitingen, sporen van vocht en, als ze er liggen, de bevestiging van zonnepanelen. Je krijgt een rapport met foto's. Is er iets nodig, dan hoor je wat het kost. Is er niets aan de hand, dan hoor je dat ook. Meer lees je op de pagina over de <a href="/dak-apk/">Dak-APK</a>.`,
      ] },
      { kop: `Wanneer een inspectie zin heeft`, tekst: [
        `Voor de winter, als je dak al lang niet is nagekeken. Na een zware storm, ook als het binnen droog lijkt. Als je een huis wilt kopen: lees dan <a href="/kennisbank/dak-keuren-bij-huis-kopen/">dak keuren bij een huis kopen</a>. En voordat er zonnepanelen op je dak komen, want daarna kom je slechter bij de pannen eronder.`,
      ] },
      { kop: `Belt er iemand aan voor een inspectie?`, tekst: [
        `Belt er iemand aan die zegt dat hij vanaf de straat schade aan je dak ziet en meteen wil kijken? Laat je niet overhaasten. Lees eerst <a href="/kennisbank/dakdekker-aan-de-deur/">er belt een dakdekker aan</a>, daar staat wat je dan het beste doet. Heb je al twee prijzen gekregen, lees dan <a href="/kennisbank/offerte-dakdekker-vergelijken/">offertes van dakdekkers vergelijken</a>.`,
      ] },
      { kop: `Lekt het al?`, tekst: [
        `Komt er nu water binnen, dan heb je geen inspectie nodig maar een reparatie. Kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet, of lees <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: de Dak-APK`, href: `/dak-apk/` },
    faq: [
      { v: `Is een gratis dakinspectie te vertrouwen?`, a: `Dat hoeft niet slecht te zijn, maar vraag vooraf wat je krijgt. Kijkt hij alleen vanaf de straat, of ook op het dak en op zolder? Krijg je foto's van wat hij vindt? En neem niet meteen op de stoep een grote klus aan. Twijfel je over een advies, vraag dan een tweede mening.` },
      { v: `Moet ik thuis zijn bij de Dak-APK?`, a: `Het liefst wel, want dan kan ik ook op zolder kijken. Daar zie je vaak sporen van vocht die je van buiten niet ziet.` },
      { v: `Krijg ik na de inspectie meteen een prijs voor de reparatie?`, a: `Als er iets nodig is, hoor je wat het kost voordat er iets gebeurt. Jij beslist of en wanneer het gebeurt.` },
      { v: `Hoe vaak laat je je dak nakijken?`, a: `Voor een pannendak is eens in de paar jaar meestal genoeg, en na een zware storm. Is je dak ouder, of heb je een plat dak, dan liever eens per jaar, het liefst in het najaar.` },
    ],
  },
  {
    slug: `dakgoot-loopt-over`,
    datum: `2026-11-06`,
    titel: `Loopt je dakgoot over bij regen?`,
    h1: `Dakgoot loopt over bij regen: vol, verstopt, scheef of te weinig afvoer?`,
    metaTitle: `Dakgoot loopt over bij regen: oorzaken | Spoed Dak Service`,
    metaDescription: `Loopt je dakgoot over bij een bui? Meestal zit hij vol, is de uitloop verstopt, hangt hij scheef of kan één regenpijp het niet aan. Zo zie je wat het is.`,
    intro: `Het regent flink en het water klettert over de rand van je goot naar beneden, op het terras of langs de gevel. Een goot die overloopt, is meestal niet kapot. Vaak kan het water gewoon niet weg. Hieronder lees je hoe je vanaf de grond ziet waar het aan ligt, en wat eraan te doen is.`,
    secties: [
      { kop: `Loopt het nu over? Eerst dit`, tekst: [
        `Valt het water alleen buiten over de rand, dan is het meestal geen spoed. Valt het op een stoep of een drempel, zet er dan een bak onder, zodat er bij vorst geen plek ijs komt. Wordt het binnen nat, bovenin de muur of rond een kozijn, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet. Ga niet bij regen of wind de ladder op.`,
      ] },
      { kop: `Kijk eerst waar het overloopt`, tekst: [
        `Ga tijdens een bui buiten staan en kijk waar het water over de rand komt. Loopt het over vlak bij de regenpijp, dan zit het daar meestal dicht. Loopt het over in het midden, dan blijft het water daar staan, omdat de goot op die plek vol zit of doorhangt. Loopt hij over aan het eind waar geen regenpijp zit, dan loopt de goot de verkeerde kant op of kan het water niet snel genoeg weg. Kijk ook onderaan de regenpijp: komt er bijna niets uit terwijl de goot overloopt, dan zit het in de uitloop of in de pijp.`,
      ] },
      { kop: `De goot zit vol`, tekst: [
        `Blad, mos, dennennaalden en het zand dat van oude pannen afspoelt, blijven in de goot liggen. In de herfst gaat dat snel, zeker onder bomen. Een volle goot kan bij een flinke bui het water niet meer kwijt en loopt dan over de voorkant. Vaak zie je er dan plantjes of gras in groeien. Hoe vaak een goot leeg moet, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>.`,
      ] },
      { kop: `De uitloop of de regenpijp zit dicht`, tekst: [
        `De meeste rommel komt samen bij de uitloop, het gat in de goot waar het water de regenpijp in loopt. Daar blijft een prop blad hangen, of in de bocht net onder de goot. Dan staat de goot vol water terwijl hij verder schoon lijkt. Meer daarover lees je in <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp</a>.`,
      ] },
      { kop: `De goot hangt scheef of door`, tekst: [
        `Een goot moet een klein beetje aflopen naar de regenpijp. Is een beugel los of krom, of is het hout erachter zacht geworden, dan zakt de goot op die plek door. Daar blijft water staan, en bij een bui loopt hij precies daar over. Vanaf de straat zie je dat als een knik in de goot, of als een plek waar na de bui nog lang water staat. Lees ook <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
      ] },
      { kop: `Eén regenpijp voor een lange goot`, tekst: [
        `Aan een lange goot, of aan een groot dak dat op één goot afwatert, zit soms maar één regenpijp. Bij gewone regen gaat dat goed. Bij een stortbui kan die ene pijp het niet bijhouden, en dan loopt de goot over aan de kant waar geen pijp zit, terwijl hij schoon is en nergens lekt. Een tweede uitloop met een eigen regenpijp kan dat beter oplossen dan een nieuwe goot.`,
      ] },
      { kop: `Overlopen of lekken?`, tekst: [
        `Een goot die overloopt, laat het water over de voorkant vallen, meestal over een flink stuk. Een goot die lekt, druppelt op één vaste plek, ook als hij leeg is, vaak onder een naad of een hoek. Kijk dan bij <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>. Loopt het water niet over de voorkant maar achter de goot langs de muur, dan is het weer iets anders: lees <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `Water dat steeds over de rand valt, komt tegen de gevel en bij de fundering terecht. De muur wordt nat en groen, en op den duur trekt het vocht naar binnen. Blijft er in de winter water in de goot staan en bevriest dat, dan kan het een naad openduwen. Zie ook <a href="/kennisbank/dak-lekt-bij-sneeuw-of-vorst/">dak lekt bij sneeuw of vorst</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet in de regen of op een natte ladder tegen de goot staan, en zet de ladder niet tegen een kunststof goot: die breekt makkelijk. Prik niet van onderen met een stok of een stuk draad in de regenpijp als je niet weet waar de prop zit. Dan druk je hem vaak verder vast. Wil je de goot zelf leegmaken, lees dan eerst <a href="/kennisbank/dakgoot-zelf-schoonmaken/">dakgoot zelf schoonmaken</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me tijdens of vlak na een bui een foto of filmpje van de plek waar het overloopt, en een foto van de goot vanaf de straat. Dan zie ik vaak al of hij vol zit, scheef hangt of dat het aan de regenpijp ligt. Ter plekke maak ik de goot leeg en de uitloop vrij, en kijk ik of hij goed afloopt. Hangt hij door, dan zet ik hem weer op afschot naar de regenpijp. Zit er ook een lek in, dan hoor je dat eerlijk. Zie <a href="/diensten/goten-reinigen/">goten reinigen</a> en <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Eén goot leegmaken, bijvoorbeeld alleen de voorgoot, kost ${prijsVan("goot_reinigen")}: de goot leeg, de uitloop naar de regenpijp vrij en de troep gaat mee. Moeten beide goten schoon, of moet er ook iets aan de goot gebeuren, dan hoor je vooraf de vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Mijn goot loopt alleen bij een stortbui over. Is dat erg?`, a: `Niet altijd. Bij een echte wolkbreuk kan bijna elke goot het water even niet bijhouden. Gebeurt het bij elke flinke bui, of steeds op dezelfde plek, dan zit de goot vaak vol, hangt hij door of is er te weinig afvoer. Stuur me een filmpje van de goot tijdens een bui, dan zeg ik eerlijk wat ik zie.` },
      { v: `Mijn goot is pas schoongemaakt en loopt toch over. Hoe kan dat?`, a: `Dan zit het vaak in de uitloop of in de regenpijp zelf, of hangt de goot op een plek door. Kijk tijdens een bui onderaan de regenpijp. Komt er bijna niets uit, dan zit er ergens een prop. Komt er wel veel uit en loopt de goot toch over, dan kan één regenpijp het water van dat dak niet aan. Stuur me een foto van de goot en van de onderkant van de pijp.` },
      { v: `Is een overlopende goot spoed?`, a: `Meestal niet, zolang het water buiten blijft. Wordt het binnen nat, bovenin de muur, rond een kozijn of op het plafond, dan wel: bel of app me met een foto. Zit de natte plek bij een stopcontact of een lamp, zet dan eerst in de meterkast de groep van die kamer uit.` },
    ],
  },
  {
    slug: `ijspegels-aan-dakgoot`,
    datum: `2026-11-07`,
    titel: `IJspegels aan je dakgoot?`,
    h1: `IJspegels aan je dakgoot: wat ze zeggen over je goot en wat je doet`,
    metaTitle: `IJspegels aan de dakgoot: wat nu? | Spoed Dak Service`,
    metaDescription: `Hangen er ijspegels aan je dakgoot? Vaak zit de goot of de uitloop vol, hangt hij door of lekt er een naad. Zo zie je wat het is, en zo blijft het veilig.`,
    intro: `Na een koude nacht hangen er ijspegels aan je goot. Een paar kleine pegels na sneeuw zijn niet meteen erg. Maar hangen er steeds dikke pegels langs de voorkant, of telkens op dezelfde plek, dan zegt dat iets over je goot. IJspegels ontstaan waar water over de rand loopt of uit een naad druppelt en dan bevriest. Hieronder lees je wat de plek van de pegels je vertelt, wat je beter niet doet en wat er na de vorst moet gebeuren.`,
    secties: [
      { kop: `Eerst: houd het veilig`, tekst: [
        `Grote ijspegels kunnen bij dooi of een windstoot naar beneden vallen, en ze zijn zwaar en scherp. Hangen ze boven een voordeur, een stoep of een pad, zet daar dan iets neer zodat niemand eronder loopt, en gebruik zo nodig een andere deur. Druppelt het smeltwater op de stoep, dan wordt het daar 's nachts glad. Ga niet zelf met een ladder tegen een bevroren goot staan om de pegels eraf te slaan: de ladder glijdt op ijs, en een kunststof goot breekt bij kou snel.`,
      ] },
      { kop: `Pegels langs de hele voorkant: de goot zit vol`, tekst: [
        `Hangen er pegels over een flink stuk van de goot, dan loopt het water daar over de rand. Meestal zit de goot vol blad, mos of dennennaalden, of is de uitloop naar de regenpijp dicht. Het water kan dan niet weg, loopt over de voorkant en bevriest aan de rand. Lees ook <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp</a>.`,
      ] },
      { kop: `Steeds op dezelfde plek: doorhangen of een lekke naad`, tekst: [
        `Hangt er telkens een pegel op één vaste plek midden in de goot, dan blijft daar water staan omdat de goot doorhangt. Lees <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>. Hangt de pegel precies onder een naad, een hoek of het eindstuk, dan lekt de goot daar. Bij een zinken goot is het vaak een soldeernaad, bij kunststof een verbinding. Kijk bij <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a> of <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a>.`,
      ] },
      { kop: `Bij de regenpijp: de uitloop of de pijp is bevroren`, tekst: [
        `Hangen de pegels vooral rond de regenpijp, of zit er ijs in de bocht onder de goot, dan is de afvoer bevroren of verstopt. Het water blijft dan in de goot staan en bevriest daar ook. Staat er water in de regenpijp zelf, dan kan die bij vorst scheuren. Zie je na de dooi een lange scheur in de pijp, stuur me dan een foto.`,
      ] },
      { kop: `Na sneeuw: smeltwater van het dak`, tekst: [
        `Ligt er sneeuw op je dak, dan smelt die soms aan de onderkant door de warmte uit je huis, ook als het buiten vriest. Het smeltwater loopt naar beneden en bevriest weer bij de koude goot en de onderste rij pannen. Zo ontstaat een rand van ijs met pegels eronder. Achter zo'n ijsrand kan het water blijven staan en onder de onderste pannen door naar binnen lopen, en dan zie je een natte plek laag op zolder, vlak boven de goot. Lees ook <a href="/kennisbank/dak-lekt-bij-sneeuw-of-vorst/">dak lekt bij sneeuw of vorst</a>.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `IJs is zwaar. Een goot die vol ijs zit, trekt aan de beugels en kan gaan doorhangen. Water dat in een naad of hoek bevriest, zet uit en kan die verder openduwen, zodat de goot na de vorst lekt op een plek waar hij eerst nog dicht was. En een goot die blijft overlopen, maakt de gevel eronder nat.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Gooi geen heet water in de goot of de regenpijp: dat bevriest daarna opnieuw, vaak lager in de pijp. Strooi geen zout in de goot, want zout is slecht voor zink en voor de gevel. En hak het ijs niet los met een schop of bezem vanaf een ladder: zo beschadig je de goot of de pannen erboven.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Bij ijzel of sneeuw op de pannen wacht ik tot het veilig is. Stuur me tot die tijd een foto van de plek waar de pegels hangen, vanaf de straat en het liefst met de hele goot erop, want die plek zegt vaak al waar het zit. Na de vorst maak ik de goot leeg en de uitloop vrij, en kijk ik of de goot goed afloopt naar de regenpijp. Hangt hij door, dan zet ik hem weer op afschot. Lekt er een naad, dan soldeer ik die bij zink of vervang ik de verbinding bij kunststof, en een goot die nog stevig is maar op meer plekken lekt, kan van binnen gecoat worden. Zie <a href="/diensten/goten-reinigen/">dakgoot schoonmaken</a> en <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Eén goot leegmaken, bijvoorbeeld alleen de voorgoot, kost ${prijsVan("goot_reinigen")}: de goot leeg, de uitloop naar de regenpijp vrij en de troep gaat mee. Moeten beide goten schoon, of moet er ook iets aan de goot gerepareerd worden, dan hoor je vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Zijn ijspegels aan mijn dakgoot gevaarlijk?`, a: `Kleine pegels meestal niet. Grote pegels kunnen bij dooi of wind naar beneden vallen, en dat is gevaarlijk boven een deur, een stoep of een pad. Zet daar iets neer zodat niemand eronder loopt. Ga ze niet zelf vanaf een ladder weghalen.` },
      { v: `Kan mijn dakgoot kapot gaan door ijs?`, a: `Dat kan. Een goot vol ijs is zwaar en trekt aan de beugels, en water dat in een naad of hoek bevriest, kan die openduwen. Lekt je goot na een vorstperiode op een nieuwe plek, of hangt hij ineens scheef, stuur me dan een foto.` },
      { v: `Is het normaal dat er na sneeuw ijspegels aan mijn goot hangen?`, a: `Een paar kleine pegels na sneeuw komen vaak voor. Hangt er een dikke rand van ijs langs de hele goot, of zie je daarna een natte plek laag op zolder, dan kan het smeltwater achter het ijs onder de pannen door lopen. Laat dat na de dooi nakijken.` },
      { v: `Is een goot met ijspegels spoed?`, a: `Meestal niet. Het wordt pas spoed als het binnen nat wordt, als de goot los hangt boven de stoep of de oprit, of als er een zware pegel boven een deur hangt waar je niet omheen kunt. Bel of app me dan met een foto. Zit een natte plek bij een lamp of stopcontact, zet dan eerst in de meterkast de groep van die kamer uit.` },
    ],
  },
  {
    slug: `licht-tussen-dakpannen`,
    datum: `2026-11-06`,
    titel: `Zie je licht tussen je dakpannen?`,
    h1: `Licht tussen je dakpannen op zolder: is dat erg?`,
    metaTitle: `Licht tussen dakpannen op zolder: erg? | Spoed Dak Service`,
    metaDescription: `Zie je op zolder daglicht tussen je dakpannen? Bij een oud dak zonder folie is een beetje licht vaak normaal. Zo zie je wanneer het wel een probleem is.`,
    intro: `Je staat op zolder, kijkt omhoog en ziet hier en daar streepjes daglicht tussen de pannen. Daar hoef je niet altijd van te schrikken. Bij veel oudere huizen hoort een beetje licht erbij. Maar een gat waar je echt doorheen kijkt, of licht op een plek waar het eerst niet was, is wel een teken dat er iets los of kapot is. Hieronder lees je hoe je het verschil ziet.`,
    secties: [
      { kop: `Eerst: ligt er iets onder je pannen?`, tekst: [
        `Kijk eerst wat je op zolder eigenlijk ziet. Zie je de onderkant van de pannen en de latten waar ze aan hangen, dan ligt er niets tussen: geen folie en geen houten beschot. Dat is bij veel oudere huizen zo. Zie je folie of houten platen, dan kun je de pannen zelf niet zien, en dan betekent licht iets anders. Lees ook <a href="/kennisbank/dakfolie-kapot/">dakfolie kapot of vergaan</a>.`,
      ] },
      { kop: `Wat licht is normaal`, tekst: [
        `Pannen liggen in elkaar, maar niet potdicht. Bij een dak zonder folie zie je daarom vaak kleine streepjes licht waar de pannen elkaar overlappen, vooral langs de randen en vlak onder de nok. Bij gewone regen komt daar geen water door, want het water loopt over de pannen naar beneden. Bij harde wind of stuifsneeuw kan er wel wat doorheen komen. Zie <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a> en <a href="/kennisbank/dak-lekt-bij-sneeuw-of-vorst/">dak lekt bij sneeuw of vorst</a>.`,
      ] },
      { kop: `Wanneer licht wel een probleem is`, tekst: [
        `Een plek licht groter dan een vinger, of een plek waar je een stuk lucht ziet, betekent meestal dat een pan gebroken is, dat er een hoek af is of dat een pan is verschoven. Licht op een plek waar het eerst donker was, vaak na een storm, wijst ook op een pan die is gaan schuiven. En licht langs de schoorsteen, het dakraam of een pijp door het dak betekent vaak dat het lood of de aansluiting daar niet meer goed dicht zit. Zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a> en <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Licht onder de nok`, tekst: [
        `Zie je bovenin, onder de nok, een rij streepjes licht? Ligt de nok in specie, dan kan die specie zijn uitgebrokkeld, zodat er kieren onder de nokvorsten zitten. Vanaf de straat zie je dat soms ook: stukjes specie in de goot of een vorst die scheef ligt. Lees <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
      ] },
      { kop: `Licht door folie of beschot`, tekst: [
        `Ligt er folie onder de pannen en zie je toch licht, dan zit er een scheur of gat in de folie en ligt er waarschijnlijk ook een pan scheef of kapot boven die plek. Bij houten beschot zie je zelden licht. Zie je het daar toch, dan is het hout op die plek vaak kapot of zit er een open naad. Kijk dan ook of het hout eromheen donker of zacht is.`,
      ] },
      { kop: `Zo kijk je het veilig na`, tekst: [
        `Ga op een droge dag met een zaklamp naar zolder en doe daar het licht uit. Dan zie je het daglicht het best. Maak een foto van elke plek waar je licht ziet, en kijk op het hout eronder of er donkere strepen of natte plekken zitten. Ga daarna aan de overkant van de straat staan en kijk met de zoom van je telefoon of je aan de buitenkant een pan ziet die scheef ligt of mist. Druk niet van binnen tegen de pannen en ga niet zelf het dak op.`,
      ] },
      { kop: `Is het spoed?`, tekst: [
        `Zie je een groot gat en komt er regen of storm aan, of is het op zolder al nat? Dan wel. Zet een bak of emmer onder de plek, leg er een zeil of handdoek onder en stuur me een foto. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>. Zie je alleen kleine streepjes licht en blijft het droog, dan kan het meestal wachten tot een gewone werkdag.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me de foto's van zolder en een foto van je dak vanaf de straat. Dan zie ik vaak al of het om een paar pannen gaat, om de nok of om het lood. Een verschoven pan leg ik terug, een kapotte pan vervang ik door een pan die past, en een losse nok zet ik weer vast. Ligt er geen folie onder je pannen en gaat het je om de kieren zelf, dan zeg ik eerlijk wat er kan. Bij een dakrenovatie kan er op wens nieuwe folie onder de pannen. Zie <a href="/diensten/dakreparatie/">dakreparatie</a> en <a href="/diensten/dakrenovatie/">dakrenovatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar pannen terugleggen of vervangen, of een losse nokvorst vastzetten, valt meestal onder een kleine reparatie: ${prijsVan("dakpan")}. Moet de hele nok opnieuw of gaat het om een groter stuk dak, dan hoor je vooraf de vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Ik zie licht tussen mijn pannen, maar het lekt niet. Moet ik iets doen?`, a: `Gaat het om kleine streepjes licht bij een dak zonder folie, en blijft het op zolder ook na een flinke bui droog, dan meestal niet. Zie je een groter gat, of licht op een plek waar het eerst niet was, laat het dan nakijken voordat de volgende storm komt. Stuur me een foto van de plek, dan zeg ik eerlijk wat ik zie.` },
      { v: `Kan ik de kieren tussen de pannen zelf dichtkitten of dichtschuimen?`, a: `Liever niet. Pannen moeten een beetje kunnen bewegen, en onder de pannen moet lucht kunnen. Kit of schuim tussen de pannen houdt vocht vast, en dan worden de latten eronder sneller rot. Bij een reparatie moet het er ook weer af. Een verschoven of kapotte pan los je op door hem goed te leggen of te vervangen.` },
      { v: `Moet er folie onder mijn pannen?`, a: `Dat hoeft niet. Veel oude daken liggen al lang zonder folie en blijven gewoon droog. Folie houdt wel stuifsneeuw en regen die bij harde wind onder de pannen waait beter tegen. Folie leg je alleen als de pannen eraf gaan, bijvoorbeeld bij een dakrenovatie. Dat doe ik als je dat wilt.` },
      { v: `Is licht tussen de pannen na een storm spoed?`, a: `Zie je na een storm ineens licht, of een gat waar eerst geen gat was, dan ligt er waarschijnlijk een pan scheef of is er een weggewaaid. Zet bij regen een bak onder de plek en stuur me een foto van zolder en van je dak vanaf de straat. Lekt het al, dan is het spoed: bel of app me.` },
    ],
  },
  {
    slug: `daktermen-uitgelegd`,
    datum: `2026-11-06`,
    titel: `Daktermen uitgelegd`,
    h1: `Daktermen uitgelegd: van nokvorst tot kilgoot`,
    metaTitle: `Daktermen uitgelegd: van nok tot goot | Spoed Dak Service`,
    metaDescription: `Wat is een nokvorst, een kilgoot, een windveer of een loodslab? Korte uitleg van de woorden die een dakdekker gebruikt, zodat je weet waar het over gaat.`,
    intro: `Heeft een dakdekker het over je nokvorsten, je kil of het lood bij de schoorsteen, dan is het handig als je weet wat hij bedoelt. Hieronder staan de woorden die ik het vaakst gebruik, kort uitgelegd. Bij elk woord staat een link naar meer uitleg voor als er iets mis mee is.`,
    secties: [
      { kop: `Het pannendak`, tekst: [
        `<strong>Nok</strong>: de bovenste rand van een schuin dak, waar twee dakvlakken samenkomen.`,
        `<strong>Nokvorsten</strong>: de ronde of hoekige pannen die bovenop de nok liggen. Ze liggen vaak in specie, of ze zijn met klemmen vastgezet op een ondervorst. Zitten ze los, lees dan <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `<strong>Ondervorst</strong>: een strook onder de nokvorsten die de nok afsluit, zodat regen, wind en fijne sneeuw er niet onder kunnen. Een nok zonder specie heet ook wel een droge nok.`,
        `<strong>Hoekkeper</strong>: de schuine rand waar twee dakvlakken van een schilddak naar buiten toe samenkomen. Daarop liggen hoekvorsten, net als op de nok.`,
        `<strong>Gevelpannen</strong>: de pannen langs de schuine zijkant van het dak, met een rand die over de zijkant valt. Ze krijgen veel wind.`,
        `<strong>Windveer</strong>: de plank langs de schuine zijkant van het dak, onder de gevelpannen. Is hij los of rot, lees dan <a href="/kennisbank/windveer-los-of-rot/">windveer los of rot</a>.`,
        `<strong>Panlatten</strong>: de houten latten waar de pannen aan hangen. Daaronder lopen vaak tengels: latten van boven naar beneden die de panlatten een stukje van de folie of het beschot af houden, zodat water eronder weg kan lopen.`,
        `<strong>Dakfolie</strong>: een laag onder de pannen die regen en stuifsneeuw opvangt die onder de pannen door komt. Niet elk dak heeft folie. Zie <a href="/kennisbank/dakfolie-kapot/">dakfolie kapot of vergaan</a>.`,
        `<strong>Dakbeschot</strong>: houten platen of planken onder de pannen, of onder de dakbedekking van een plat dak.`,
        `<strong>Stormhaak</strong>: een metalen haakje of klem dat een pan aan de panlat vastzet, zodat de wind hem niet kan optillen. Zie <a href="/kennisbank/dakpannen-vastzetten-tegen-storm/">dakpannen vastzetten tegen storm</a>.`,
        `<strong>Dakvoet</strong>: de onderkant van het dak, vlak boven de goot. Daar komt de vogelwering. Zie <a href="/kennisbank/vogels-onder-dakpannen/">vogels onder je dakpannen</a>.`,
        `<strong>Knieschot</strong>: het lage wandje op zolder onder het schuine dak. Daarachter ligt de dakvoet. Zie <a href="/kennisbank/nat-achter-knieschot/">nat achter het knieschot</a>.`,
      ] },
      { kop: `Lood en aansluitingen`, tekst: [
        `<strong>Lood</strong>: stroken lood rond een schoorsteen of een dakraam, of tegen een muur, die zorgen dat het water over de pannen wegloopt in plaats van erachter. Zie <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
        `<strong>Loodslab</strong>: een strook lood die over de pannen ligt en met de bovenkant in de muur of de schoorsteen vastzit.`,
        `<strong>Loodvervanger</strong>: een lichter materiaal dat net als lood rond een schoorsteen of langs een muur wordt gelegd. Ik werk meestal met loodvervanger, en met echt lood als je dat liever hebt.`,
        `<strong>Dakdoorvoer</strong>: een pan of kraag waar een pijp door het dak gaat, bijvoorbeeld van de ventilatie of de ketel. Zie <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
      ] },
      { kop: `Goten en afvoer`, tekst: [
        `<strong>Hangende goot</strong>: een goot die met beugels aan de voorkant van het dak hangt, van zink of kunststof. Zie <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
        `<strong>Bakgoot</strong>: een goot die in de rand van het dak zelf zit, bovenop de muur, meestal bekleed met zink. Zie <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
        `<strong>Kilgoot</strong>: de goot in de hoek waar twee dakvlakken naar binnen toe samenkomen. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
        `<strong>Uitloop</strong>: het stuk onderin de goot waar het water de regenpijp in loopt. Daar blijft het meeste blad hangen. Zie <a href="/kennisbank/dakgoot-lekt-bij-regenpijp/">dakgoot lekt bij de regenpijp</a>.`,
        `<strong>Afschot</strong>: de kleine helling van een goot of een plat dak, zodat het water naar de afvoer loopt. Zonder afschot blijft er water staan. Zie <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
        `<strong>Regenpijp</strong>: de pijp die het water van de goot naar beneden brengt, ook wel hemelwaterafvoer genoemd. Zie <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp</a>.`,
      ] },
      { kop: `Het platte dak`, tekst: [
        `<strong>EPDM</strong>: een dakbedekking van rubber, op een klein plat dak vaak in één stuk. Zie <a href="/kennisbank/epdm-dak-lekt/">EPDM-dak lekt</a>.`,
        `<strong>Bitumen en dakleer</strong>: dakbedekking op basis van bitumen, die in banen op het dak ligt. Dakleer is een dunne soort, vaak op een schuur of tuinhuis. Zie <a href="/kennisbank/dakleer-repareren/">dakleer repareren</a>.`,
        `<strong>Opstand</strong>: het stuk dakbedekking dat tegen een muur of tegen de rand van een lichtkoepel omhoog loopt.`,
        `<strong>Daktrim</strong>: de strip, meestal van aluminium, rondom op de rand van een plat dak. Zie <a href="/kennisbank/daktrim-lekt/">plat dak lekt langs de rand</a>.`,
        `<strong>Lichtkoepel</strong>: een koepel van kunststof in een plat dak, die licht binnenlaat. Zie <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.`,
      ] },
      { kop: `Staat jouw woord er niet bij?`, tekst: [
        `Gebruikt een dakdekker een woord dat je niet kent, vraag dan gewoon wat hij bedoelt en laat het je op een foto zien. Stuur mij gerust een foto van je dak, dan leg ik uit wat ik zie. Twijfel je over een advies of een offerte, lees dan <a href="/kennisbank/offerte-dakdekker-vergelijken/">offertes van dakdekkers vergelijken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Wat is het verschil tussen een nok en een nokvorst?`, a: `De nok is de bovenste rand van het dak, waar twee dakvlakken samenkomen. De nokvorsten zijn de pannen die daar bovenop liggen en de nok afdekken.` },
      { v: `Wat is het verschil tussen een bakgoot en een hangende goot?`, a: `Een hangende goot hangt met beugels aan de voorkant van het dak. Een bakgoot zit in de dakrand zelf, bovenop de muur, en is meestal bekleed met zink. Lekt een bakgoot, dan komt het water vaak binnen bovenin de muur, omdat hij op de muur ligt.` },
      { v: `Wat is een kilgoot?`, a: `Een kilgoot, of kortweg kil, is de goot in de hoek waar twee dakvlakken naar binnen toe samenkomen. Al het water van beide dakvlakken loopt erdoor, en blad blijft er makkelijk in hangen. Daarom gaat een kil vaker lekken dan de rest van het dak.` },
      { v: `Is loodvervanger net zo goed als lood?`, a: `Voor de meeste daken voldoet loodvervanger prima. Het is lichter en goed te vormen rond een schoorsteen of langs een muur. Wil je liever echt lood, bijvoorbeeld bij een oud huis, dan kan dat ook.` },
    ],
  },
  {
    slug: `lekkage-dakdekker-of-loodgieter`,
    datum: `2026-11-06`,
    titel: `Lekkage: dakdekker of loodgieter?`,
    h1: `Lekkage in huis: bel je een dakdekker of een loodgieter?`,
    metaTitle: `Lekkage: dakdekker of loodgieter? | Spoed Dak Service`,
    metaDescription: `Nat plafond of muur? Alleen nat bij regen: meestal dak of goot, dus een dakdekker. Ook nat als het droog is: vaak een leiding, dus een loodgieter. Zo zie je het.`,
    intro: `Een natte plek op je plafond of langs de muur, en dan de vraag: wie bel ik? Het korte antwoord: wordt het alleen nat tijdens of na regen, dan komt het water meestal van buiten, van het dak, de goot of een regenpijp, en dan heb je een dakdekker nodig. Wordt het ook nat als het dagen droog is, dan is een leiding, een afvoer of de cv veel waarschijnlijker, en dan bel je een loodgieter of installateur. Hieronder lees je hoe je dat in een paar minuten uitzoekt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en haal spullen weg. Zit de natte plek bij een lamp, een spotje of een stopcontact, zet dan in de meterkast de groep van die kamer uit. Lijkt het een leiding en blijft het lopen, draai dan de hoofdkraan dicht. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `De snelste test: heeft het geregend?`, tekst: [
        `Kijk wanneer het nat wordt. Alleen tijdens of vlak na een bui, of bij harde wind met regen: dan komt het water van buiten. Ook als het al dagen droog is: dan komt het van binnen.`,
        `Doe daarna de watermetertest. Draai alle kranen dicht, zet de vaatwasser en de wasmachine uit en kijk of je watermeter nog draait. Draait hij, dan lekt er ergens een leiding. Staat hij stil en wordt het toch nat als het droog is, kijk dan naar de afvoer van de douche, het bad of de wc erboven.`,
        `Kijk ook naar de druk van je cv-ketel. Zakt die steeds, terwijl je niets bijvult, dan kan er een cv-leiding lekken. Dat is werk voor je installateur.`,
      ] },
      { kop: `Dan bel je een dakdekker`, tekst: [
        `De natte plek zit op de bovenste verdieping of op zolder, en wordt groter na regen.`,
        `Het is nat naast de schoorsteen, rond een dakraam of lichtkoepel, of rond een pijp die door het dak gaat. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a> en <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `Het is nat bovenin een buitenmuur, vlak onder het plafond. Dan zit het vaak bij de goot erboven. Lees <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>.`,
        `Het lekt alleen bij harde wind, of na sneeuw en bij dooi. Zie <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
      ] },
      { kop: `Dan bel je een loodgieter of installateur`, tekst: [
        `De natte plek zit onder een badkamer, een wc of een keuken, of op een verdieping met nog een verdieping erboven.`,
        `Het wordt natter als er iemand doucht, in bad gaat of de wc doortrekt.`,
        `Je watermeter draait terwijl alle kranen dicht zijn, of de druk van je cv-ketel zakt steeds.`,
        `Het lekt uit een verbinding van een leiding of afvoer die je kunt zien, bijvoorbeeld in een kast of bij de cv-ketel.`,
      ] },
      { kop: `Twijfelgevallen`, tekst: [
        `Een regenpijp binnen in de muur. Lekt het bovenin, vlak onder de goot, dan zit het meestal bij de uitloop en kijk ik ernaar. Zit het halverwege de muur of lager, dan is het eerder de pijp zelf, en dat is werk voor een loodgieter. Lees <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a>.`,
        `De afvoer van de cv-ketel of de ventilatie door het dak. Komt het water van buiten langs de pijp naar binnen, waar die door het dak gaat, dan is het mijn werk. Lekt het binnen uit een verbinding van de pijp, dan is het voor de installateur. Zie <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
        `Druppels op zolder op koude, droge ochtenden, verspreid over de folie of het hout. Dan is het vaak condens, en dan heb je geen van beiden nodig: ventileren helpt dan meer. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
        `Je hoort het druppelen, maar je ziet niets. Lees <a href="/kennisbank/druppelen-horen-plafond/">water horen druppelen in je plafond</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Twijfel je, stuur me dan een foto van de natte plek en vertel erbij wanneer het nat wordt: bij regen, bij wind, of ook als het droog is. Vaak kan ik dan al zeggen of het bij mij hoort of bij een loodgieter. Kom ik kijken en zie ik dat het water niet van het dak of de goot komt, dan zeg ik dat voordat ik iets repareer. Zie ook <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek in het dak opsporen en dichtmaken kost ${inclBtw("daklekkage")}. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Wie bel ik bij een natte plek op het plafond?`, a: `Wordt de plek alleen nat bij regen, bel dan een dakdekker. Wordt hij ook nat als het droog is, of zit hij onder een badkamer, wc of keuken, dan is een loodgieter waarschijnlijker. Kijk ook of je watermeter draait terwijl alle kranen dicht zijn.` },
      { v: `Het plafond van mijn badkamer wordt nat, maar alleen als het regent. Is het dan het dak?`, a: `Vaak wel. Boven een badkamer gaat vaak de afzuiging of de ontluchting door het dak naar buiten. Lekt de aansluiting rond die pijp, dan loopt het regenwater langs de pijp naar beneden en zie je het precies op het badkamerplafond. Wordt het ook nat na het douchen, dan kan het condens in de afzuigpijp zijn. Stuur me een foto van de plek en zeg erbij wanneer het nat wordt.` },
      { v: `Kun jij ook een lekkende leiding repareren?`, a: `Nee, dat doe ik niet. Leidingen, afvoeren en de cv zijn werk voor een loodgieter of installateur. Twijfel je of het van het dak komt, stuur dan eerst een foto. Dan zeg ik eerlijk of je mij nodig hebt of iemand anders.` },
      { v: `Ik weet het niet zeker en het blijft lekken. Wat doe ik?`, a: `Vang het water op, zet de stroom uit als het bij een lamp of stopcontact zit, en draai de hoofdkraan dicht. Stopt het daarna, dan is het een leiding en bel je een loodgieter. Blijft het lopen en heeft het geregend, bel of app me dan met een foto van de natte plek.` },
    ],
  },
  {
    slug: `dak-repareren-in-de-winter`,
    datum: `2026-11-06`,
    titel: `Dak repareren in de winter?`,
    h1: `Dak repareren in de winter: wat kan bij vorst, regen en wind?`,
    metaTitle: `Dak repareren in de winter: kan dat? | Spoed Dak Service`,
    metaDescription: `Lekt je dak in de winter? Veel reparaties kunnen gewoon, ook als het koud is. Lees wat bij vorst, regen en wind kan, en wat beter op een droge dag wacht.`,
    intro: `Lekt je dak in november of januari, dan hoef je meestal niet tot het voorjaar te wachten. Een losse pan, een verschoven nokvorst of een lek bij de schoorsteen kan ik in de winter vaak gewoon herstellen. Maar niet elk werk kan bij elk weer. Dakmortel hardt niet goed uit als het vriest, op een nat plat dak hecht niets, en bij ijzel of storm is een dak voor niemand veilig. Hieronder lees je wat wel kan, wat beter op een droge dag wacht en hoe het binnen ondertussen droog blijft.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, leg er een handdoek onder en haal spullen weg die nat kunnen worden. Ga in de winter zeker niet zelf het dak of de ladder op: rijp, ijs of nat blad op de pannen maakt alles spiegelglad. Maak een foto van de natte plek en, vanaf de straat, van je dak. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat in de winter meestal gewoon kan`, tekst: [
        `Een losse of kapotte pan vervangen of terugleggen. Daar is geen mortel of lijm voor nodig, dus dat kan ook als het koud is, zolang de pannen niet glad zijn van ijs of rijp.`,
        `Lood rond een schoorsteen of langs een muur vastzetten of vervangen. Lood laat zich ook bij kou goed vormen. Werk ik met loodvervanger, dan kies ik een droge dag, want het moet goed hechten op de ondergrond.`,
        `Een volle goot leegmaken, zolang het blad er niet in is vastgevroren. Juist voor de winter is dat slim, want water dat in een volle goot blijft staan, kan bevriezen en een naad openduwen.`,
        `Een kap of afdekplaat zetten op een schoorsteen die je niet meer gebruikt, zodat het niet meer in het kanaal regent.`,
      ] },
      { kop: `Wat beter op het juiste weer wacht`, tekst: [
        `Een nok opnieuw aansmeren. Nokvorsten liggen vaak in dakmortel, en die moet een paar dagen kunnen uitharden zonder vorst. Vriest het, of komt er nachtvorst aan, dan dek ik een open stuk nok eerst tijdelijk af, zodat het niet binnen regent. Het aansmeren doe ik dan op een dag dat het een tijdje niet vriest. Meer over de nok lees je in <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Een plat dak repareren. Lijm, tape en dakbedekking hechten alleen op een schone, droge ondergrond. Op een nat dak, of met rijp of sneeuw erop, houdt een reparatie niet. Dan dek ik het lek eerst tijdelijk af en maak ik het goed op een droge dag. Zie ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
        `Kitten of plakken. Kit en tape hechten slecht op een koude, natte ondergrond. Een lek dat in de winter met kit is dichtgesmeerd, gaat vaak binnen een paar weken weer lekken.`,
      ] },
      { kop: `Wanneer ik niet het dak op ga`, tekst: [
        `Bij ijzel, bij sneeuw of ijs op de pannen en bij storm ga ik niet het dak op. Dat is niet veilig, ook niet voor een dakdekker, en een pan die je dan terugduwt, breekt makkelijk. Dan wachten we tot het weer het toelaat. Tot die tijd vang je het water binnen op, en ik zeg je wat je verder kunt doen om de schade klein te houden. Zodra het kan, plannen we het in.`,
      ] },
      { kop: `Eerst dicht, daarna netjes`, tekst: [
        `In de winter werk ik vaak in twee stappen. Eerst zorg ik dat het binnen droog blijft: een pan terugleggen, een open plek afdekken of een volle goot leegmaken. Is er voor de nette reparatie droog weer nodig, of een passende pan die besteld moet worden, dan kom ik daarvoor terug. Hoe je een lek tot die tijd opvangt, lees je in <a href="/kennisbank/daklek-tijdelijk-dichten/">daklek tijdelijk dichten</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Klim in de winter niet op het dak of op een ladder tegen de goot. Hak geen ijs uit de goot en giet er geen heet water in, want verderop bevriest het meteen weer. Schep geen sneeuw van je dak. En smeer een lek niet zelf dicht met kit of tape: dat laat bij vorst los, en voordat het lek goed gemaakt kan worden, moet het er weer af. Lekt het bij sneeuw of dooi, lees dan <a href="/kennisbank/dak-lekt-bij-sneeuw-of-vorst/">dak lekt bij sneeuw of vorst</a>.`,
      ] },
      { kop: `Voor de winter laten nakijken`, tekst: [
        `Wil je het voor zijn, laat dan in de herfst je goten leegmaken en kijken of de nok en het lood rond de schoorsteen nog goed vastzitten. Wat je per seizoen nakijkt, staat in <a href="/kennisbank/dakonderhoud-per-seizoen/">dakonderhoud per seizoen</a>. Wil je een rapport met foto's van je hele dak, dan kan dat met de <a href="/dak-apk/">Dak-APK</a> voor ${apkPrijs}.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse of kapotte pannen vervangen kost ${inclBtw("dakpan")}. Een lek opsporen en dichtmaken kost ${inclBtw("daklekkage")}. Moet ik eerst tijdelijk afdekken en later terugkomen voor de nette reparatie, dan hoor je dat vooraf, met de prijs erbij. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: spoed dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Kan een dakdekker in de winter werken?`, a: `Ja, het meeste werk kan gewoon. Pannen vervangen, lood vastzetten en goten leegmaken kan ook als het koud is. Alleen werk met dakmortel, lijm of kit wacht beter op een dag zonder vorst en zonder regen. Bij ijzel, sneeuw op de pannen of storm wacht ik tot het veilig is.` },
      { v: `Kan een nokvorst bij vorst vastgezet worden?`, a: `Aansmeren met dakmortel liever niet, want de mortel moet uitharden zonder vorst. Ligt er nu een vorst los, dan zorg ik eerst dat de nok dicht is en het niet binnen regent, en smeer ik hem aan zodra het een paar dagen niet vriest.` },
      { v: `Moet ik met een lek wachten tot het voorjaar?`, a: `Nee. Een lek wordt in de winter niet vanzelf kleiner, en water dat lang in het hout of de isolatie blijft zitten, droogt in de winter slecht. Laat het dichtmaken zodra het kan. Kan de nette reparatie pas op een droge dag, dan dek ik het eerst tijdelijk af.` },
      { v: `Is een reparatie in de winter minder goed?`, a: `Niet als het bij het goede weer gebeurt. Een pan of lood ligt in januari net zo goed als in juli. Waar het weer wel uitmaakt, zoals bij dakmortel of een plat dak, wacht ik op een geschikte dag, en zo lang blijft het tijdelijk dicht.` },
    ],
  },
  {
    slug: `welke-dakpan-heb-ik`,
    datum: `2026-11-06`,
    titel: `Welke dakpan heb ik?`,
    h1: `Welke dakpan heb ik? Zo herken je je pannen`,
    metaTitle: `Welke dakpan heb ik? Zo herken je hem | Spoed Dak Service`,
    metaDescription: `Gebakken of beton, oud-Hollands, sneldekker of Romaans? Zo zie je welke dakpannen er op je dak liggen, en hoe je aan een pan komt die past.`,
    intro: `Is er een pan kapot en wil je weten welke je nodig hebt? Dan helpt het om te weten wat er op je dak ligt. Kort gezegd let je op drie dingen: het materiaal (gebakken klei of beton), de vorm en de kleur. Op zolder zie je soms nog meer, want op de achterkant van een pan staat vaak een naam of nummer van de fabriek. Hieronder lees je hoe je het herkent en hoe je aan een pan komt die past.`,
    secties: [
      { kop: `Gebakken pan of betonpan?`, tekst: [
        `De meeste pannen zijn van gebakken klei of van beton. Een gebakken pan is vaak wat dunner en gladder, en aan de achterkant zie je dezelfde kleur klei als aan de voorkant. Een betonpan is dikker en zwaarder, voelt aan de achterkant ruw aan, een beetje als schuurpapier, en is daar vaak grijs. Bij een betonpan zit de kleur in een laag aan de bovenkant. Na veel jaren slijt die laag, en dan wordt de pan ruw en dof.`,
      ] },
      { kop: `De vorm: welke pan ligt er?`, tekst: [
        `Oud-Hollandse pan: de klassieke golvende pan met één grote golf, op veel oudere huizen en boerderijen.`,
        `Verbeterde Hollandse pan: lijkt op de oud-Hollandse, maar heeft aan de zijkant en de bovenkant sluitingen, zodat de pannen beter in elkaar grijpen. Die zie je op veel huizen, van oud tot vrij nieuw.`,
        `Sneldekker: een grotere, vrij vlakke pan met een golf aan de zijkant. Er gaan er minder van op een vierkante meter, en je ziet hem veel op huizen die na de oorlog zijn gebouwd.`,
        `Romaanse pan: een pan met een vlak stuk en een ronde rol, waardoor het dak er een beetje zuidelijk uitziet.`,
        `Tuile du Nord: een vlakke pan met een paar ribbels in de lengte.`,
        `Vlakke pan: een strakke, platte pan, vaak op nieuwere huizen.`,
        `Weet je niet hoe een deel van je dak heet, zoals de nok of de kil, kijk dan bij <a href="/kennisbank/daktermen-uitgelegd/">daktermen uitgelegd</a>.`,
      ] },
      { kop: `De kleur en de afwerking`, tekst: [
        `Rode en oranje pannen zijn vaak gewone gebakken pannen. Blauwgrijze of donkergrijze gebakken pannen heten gesmoord: ze zijn zo gebakken dat ze die kleur krijgen. Glanzende pannen hebben een glazuur, en een gebakken pan met een matte kleurlaag heet geëngobeerd. Een nieuwe pan naast een pan die al jaren in de zon ligt, ziet er bijna altijd iets anders uit, ook als het hetzelfde type is.`,
      ] },
      { kop: `Kijk op zolder naar de achterkant`, tekst: [
        `Kun je op zolder bij de pannen, omdat er geen beschot of isolatie onder zit, kijk dan naar de achterkant. Daar staat vaak een naam, een stempel of een nummer van de fabriek, soms met een jaartal. Maak daar een foto van. Zit er wel isolatie of beschot onder, haal dat dan niet zelf weg.`,
        `Liggen er in de schuur of op zolder nog losse pannen die na de bouw zijn overgebleven? Bewaar die. Dat is vaak precies de pan die je later nodig hebt.`,
      ] },
      { kop: `Wordt jouw pan niet meer gemaakt?`, tekst: [
        `Bij oudere daken komt dat vaak voor. Soms is er een pan van een andere fabriek met dezelfde maat en vorm. Soms is er nog een gebruikte pan van hetzelfde type te krijgen. En soms kan ik een pan van een plek die je vanaf de straat niet ziet, zoals de achterkant, verplaatsen naar de voorkant, en op die verborgen plek een pan leggen die er net iets anders uitziet. Ik kijk wat bij jouw dak kan.`,
      ] },
      { kop: `Waarom de juiste pan belangrijk is`, tekst: [
        `Een pan die net niet past, sluit niet goed aan op de pannen eromheen. Dan kan de regen er bij harde wind onderdoor waaien, en dat merk je pas als het binnen nat wordt. Lees ook <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>. Is er een pan gebroken of verschoven, kijk dan bij <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>. Nemen je pannen water op, lees dan <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
      ] },
      { kop: `Stuur een foto`, tekst: [
        `Twijfel je welke pan je hebt, maak dan vanaf de straat een foto van je dak met de zoom van je telefoon, en als het kan een foto van de achterkant van een pan op zolder. Stuur ze via WhatsApp, dan zeg ik wat er ligt en of er een passende pan besteld moet worden. Ga niet zelf het dak op.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse of kapotte pannen vervangen kost ${inclBtw("dakpan")}. Moet er eerst een pan besteld worden, dan hoor je dat vooraf, met de prijs erbij. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Hoe weet ik of mijn dakpan van beton of van klei is?`, a: `Kijk naar de achterkant. Een betonpan is daar grijs en ruw, een gebakken pan heeft daar meestal dezelfde kleur klei als aan de voorkant. Een betonpan is ook dikker en zwaarder.` },
      { v: `Kan een kapotte betonpan vervangen worden door een gebakken pan?`, a: `Meestal niet zomaar. Ze verschillen vaak in maat, vorm en dikte, en dan sluit de nieuwe pan niet goed aan op de pannen eromheen. Er moet een pan in die past bij wat er al ligt.` },
      { v: `Waarom heeft een nieuwe pan een andere kleur dan de rest?`, a: `Omdat je oude pannen jaren in de zon, de regen en de wind hebben gelegen. Ook als het hetzelfde type is, is een nieuwe pan vaak wat feller. Na een paar jaar valt het verschil meestal minder op.` },
      { v: `Kun je aan een foto zien welke pan ik heb?`, a: `Vaak wel. Met een foto van je dak vanaf de straat en, als het kan, een foto van de achterkant van een pan op zolder, zie ik meestal welk soort pan het is. Soms moet ik er op het dak even naar kijken.` },
    ],
  },
  {
    slug: `storm-op-komst-dak`,
    datum: `2026-11-07`,
    titel: `Storm op komst?`,
    h1: `Storm op komst: zo maak je je dak en je huis stormklaar`,
    metaTitle: `Storm op komst? Je dak stormklaar maken | Spoed Dak Service`,
    metaDescription: `Wordt er een storm voorspeld? Zo kijk je vooraf vanaf de straat naar je dak, zet je losse spullen vast en weet je wat je doet als er toch iets losraakt.`,
    intro: `Zegt het weerbericht dat er een storm aankomt, of geeft het KNMI code geel of oranje voor wind? Dan heb je meestal nog een dag of twee. In die tijd kun je veel doen om schade te voorkomen, zonder zelf het dak op te gaan. Hieronder lees je waar je vooraf naar kijkt, wat je in en om het huis vastzet en wat je doet als er tijdens de storm toch iets losraakt.`,
    secties: [
      { kop: `Kijk vooraf vanaf de straat naar je dak`, tekst: [
        `Loop op een droge dag een rondje om je huis en kijk vanaf de overkant van de straat en uit de tuin naar je dak, met de zoom van je telefoon. Let op een pan die scheef ligt of mist, een nokvorst die niet meer recht ligt, brokjes specie in de goot of op de stoep, lood bij de schoorsteen of het dakraam dat omhoog staat, en de plank langs de zijkant van het dak, de windveer, als die los lijkt te zitten.`,
        `Zie je zoiets, maak er dan een foto van en stuur die via WhatsApp. Een losse pan of nokvorst vastzetten is meestal een kleine klus, en hoe eerder ik het weet, hoe groter de kans dat het voor de storm nog kan. Hoe dat gaat, lees je in <a href="/kennisbank/dakpannen-vastzetten-tegen-storm/">dakpannen vastzetten tegen storm</a> en <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
      ] },
      { kop: `Maak foto's van je dak voordat de storm komt`, tekst: [
        `Maak vooraf een paar foto's van je dak, je goten en je schoorsteen, van de voorkant en de achterkant. Gaat er tijdens de storm iets kapot, dan kun je je verzekeraar laten zien hoe je dak er vlak voor de storm bij lag. Je telefoon bewaart de datum bij de foto. Meer over de verzekering lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Goot leeg voor de regen`, tekst: [
        `Een storm komt vaak met veel regen. Zit je goot vol blad, dan loopt hij over en komt het water langs de gevel naar beneden, of bij een bakgoot naar binnen. Kijk bij de eerste bui of het water over de rand komt. Laat hem leegmaken als hij vol zit, maar ga er zelf niet op een ladder voor staan als het al waait. Zie <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>.`,
      ] },
      { kop: `Antenne, schotel en takken`, tekst: [
        `Staat er een oude antenne of schotel op je dak, kijk dan of de mast nog recht staat en of de kabel niet los over de pannen hangt. Een mast vangt veel wind en kan bij een storm aan de pannen of het lood trekken. Zie <a href="/kennisbank/lekkage-bij-schotel-of-antenne/">lekkage bij een schotel of antenne</a>. Hangen er takken boven of vlak naast je dak, laat die dan op tijd snoeien door een hovenier of boomverzorger. Wat je doet als er toch een tak op je dak valt, lees je in <a href="/kennisbank/tak-of-boom-op-dak/">tak of boom op je dak</a>.`,
      ] },
      { kop: `In en om het huis`, tekst: [
        `Zet tuinmeubels, een trampoline, losse plantenbakken en de kliko vast of zet ze binnen. Zulke spullen waaien bij een storm zo tegen een raam, een overkapping of het dak van je schuur. Doe zonneschermen in, sluit dakramen en lichtkoepels en kijk of de deuren van je schuur en garage goed dicht zitten. Leg alvast een emmer, een paar handdoeken en een zaklamp klaar, en zoek op welke groep in de meterkast bij welke kamer hoort.`,
      ] },
      { kop: `Tijdens de storm`, tekst: [
        `Blijf binnen en ga niet naar buiten om naar je dak te kijken. Loop niet langs de gevel of onder de dakrand, want een pan of nokvorst die eraf waait, valt zomaar naar beneden. Ga niet het dak of een ladder op. Hoor je getik of geklapper, schrijf dan op waar in huis je het hoort, dan weet ik later waar ik moet kijken. Zie ook <a href="/kennisbank/dakpannen-klapperen-bij-wind/">dakpannen klapperen bij wind</a>.`,
      ] },
      { kop: `Waait er toch iets los?`, tekst: [
        `Druppelt het binnen, zet dan een emmer onder de druppel en leg er een handdoek onder. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Maak foto's van de natte plek en, als het veilig kan, van je dak vanaf de straat, en stuur die via WhatsApp of bel me. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>. Wat je na de storm nakijkt, lees je in <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een losse pan of nokvorst weer vastzetten, of een paar pannen vervangen, kost ${inclBtw("dakpan")}. Is er na de storm meer kapot, dan hoor je vooraf wat het kost, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: stormschade aan je dak`, href: `/diensten/stormschade/` },
    faq: [
      { v: `Moet ik mijn dak laten nakijken als er een storm aankomt?`, a: `Niet als alles er vanaf de straat goed uitziet en je dak de vorige stormen goed heeft doorstaan. Zie je een pan die scheef ligt, specie in de goot of lood dat omhoog staat, stuur me dan zo vroeg mogelijk een foto. Dan zeg ik eerlijk of het voor de storm nog moet, of dat het kan wachten.` },
      { v: `Kan ik zelf een losse pan terugleggen voordat de storm komt?`, a: `Liever niet. Een pan moet precies in de pannen ernaast en erboven haken, en op een schuin dak sta je zo verkeerd. Ligt hij net niet goed, dan pakt de wind hem alsnog. Maak een foto vanaf de straat en stuur die via WhatsApp.` },
      { v: `Wat doe ik als er tijdens de storm een pan van mijn dak waait?`, a: `Blijf binnen en ga niet onder de dakrand staan. Kijk binnen of het ergens nat wordt, en zet een emmer neer als het druppelt. Maak, als het veilig kan, een foto van je dak vanaf de overkant van de straat, en bel of app me. Raap de stukken pas op als de wind is gaan liggen.` },
      { v: `Betaalt mijn verzekering stormschade aan mijn dak?`, a: `Dat hangt af van je polis en van wat er kapot is. Waait er bij een storm een pan of nokvorst van een dak dat goed onderhouden was, dan wordt de schade vaak vergoed. Lag de pan al los of was het lood al op, dan kan je verzekeraar dat als achterstallig onderhoud zien. Foto's van je dak van vlak voor de storm helpen dan. Kijk in je polisvoorwaarden of bel je verzekeraar.` },
    ],
  },
  {
    slug: `lekkage-warmtepomp-of-airco`,
    datum: `2026-11-07`,
    titel: `Lekt het sinds de warmtepomp of airco?`,
    h1: `Lekkage sinds de warmtepomp of airco er is: bij de leidingen, de poten of het condenswater`,
    metaTitle: `Lekt het sinds de warmtepomp of airco? | Spoed Dak Service`,
    metaDescription: `Lekt je dak of aanbouw sinds er een warmtepomp of airco is geplaatst? Vaak zit het bij de leidingen door het dak, de poten op de dakbedekking of het condenswater.`,
    intro: `Steeds meer huizen krijgen een warmtepomp of airco. De buitenunit staat vaak op het platte dak van een aanbouw, garage of berging, en de leidingen gaan door het dak of de muur naar binnen. Lekt het sinds die tijd, dan ligt het meestal niet aan het apparaat zelf, maar aan wat er bij het plaatsen met het dak is gebeurd. Hieronder lees je waar het meestal zit, wat je zelf kunt zien en wie je belt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en haal spullen weg die nat kunnen worden. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Maak een foto van de natte plek en, als het kan vanuit een raam boven, van de unit en het dak eromheen. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar het meestal zit`, tekst: [
        `Waar de leidingen door het dak gaan. De leidingen, de kabel en de afvoer van het condenswater moeten ergens naar binnen. Is daar een gat geboord en alleen met kit of schuim dichtgemaakt, dan houdt dat vaak maar kort. Zon en vorst laten de kit los, en dan loopt het regenwater langs de leidingen naar binnen. Een nette doorvoer heeft een kraag die in de dakbedekking is opgenomen.`,
        `Onder de poten of het frame. Staat de unit met de poten direct op de dakbedekking, dan drukken die er bij elke trilling een beetje in. Na een tijd slijt er een gat, of scheurt de bedekking bij de rand van een poot.`,
        `Door werk op het dak. Bij het plaatsen lopen er mensen met gereedschap over het dak. Een steentje onder een schoen, een gevallen boor of een scherpe hoek van een frame kan een gaatje maken dat je pas bij de eerste flinke bui merkt.`,
        `Bij het condenswater. Een warmtepomp of airco maakt water, en een warmtepomp ontdooit in de winter af en toe, dan komt er in korte tijd flink wat water uit. Loopt dat niet naar de afvoer, dan blijft het op het dak staan, en bij vorst kan het in de afvoer bevriezen. Een plas die steeds terugkomt, vindt na een tijd een zwakke naad. Lees ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
        `Langs de muur. Gaan de leidingen eerst door de gevel en dan over het platte dak, dan kan het water ook langs de leidingen de muur in lopen, vlak boven de aanbouw. Binnen zie je dat als een natte plek langs de muur. Zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Gaan de leidingen door een pannendak?`, tekst: [
        `Dan is de leiding soms door een gewone pan geboord of onder een pan door gelegd. Die pan ligt dan niet meer goed in de sluiting, en bij een bui loopt het water langs de leiding naar binnen. Hoe dat zit, lees je in <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een ontluchtingspijp of dakdoorvoer</a>.`,
      ] },
      { kop: `Of is het condens binnen?`, tekst: [
        `De leidingen van een airco worden koud als hij koelt. Lopen ze binnen door een warme, vochtige ruimte, dan kunnen er druppels aan de buitenkant van de leiding komen. Dat lijkt op een lek, maar het komt niet van het dak. Druppelt het ook op droge dagen, en vooral als het apparaat draait, dan is dat werk voor je installateur. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Wie bel je?`, tekst: [
        `Is de warmtepomp of airco pas geplaatst, meld het lek dan eerst bij het bedrijf dat hem heeft geplaatst. Lekkage door het plaatsen hoort dat bedrijf in de regel zelf op te lossen. Het apparaat, de leidingen en de afvoer van het condenswater zijn werk voor de installateur. Het dak eromheen is werk voor mij: een doorvoer netjes dichtmaken, een gat of scheur in de dakbedekking herstellen, of een plek repareren waar de poten de bedekking hebben beschadigd. Moet de unit daarvoor even opzij, dan is het handig als de installateur erbij is.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het nat is, en daarna op het dak naar de doorvoer, de plek onder de poten en de naden en de afvoer eromheen. Een doorvoer die alleen met kit is dichtgemaakt, maak ik opnieuw dicht met een kraag of manchet die in de dakbedekking wordt opgenomen. Een beschadigde plek in de bedekking herstel ik. Alleen een rand kit erom vind ik geen goede oplossing, want die laat na een paar jaar weer los. Zie ook <a href="/diensten/platte-daken/">platte daken</a> en <a href="/diensten/dakdoorvoer/">dakdoorvoer</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een gerichte reparatie van een lek in een klein plat dak kost ${platPrijs}. Moet er meer gebeuren, bijvoorbeeld omdat het water al een tijd in de isolatie of het hout is getrokken, dan hoor je vooraf de vaste prijs, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Mijn warmtepomp is net geplaatst en nu lekt het. Wie moet het oplossen?`, a: `Meld het eerst bij het bedrijf dat de warmtepomp heeft geplaatst. Lekkage door het plaatsen hoort dat bedrijf in de regel zelf op te lossen. Maak foto's van de natte plek en van de unit op het dak, en schrijf op wanneer het lekte. Komt het bedrijf niet, of staat de unit er al langer, dan kijk ik waar het water binnenkomt.` },
      { v: `Kan het condenswater van de warmtepomp mijn dak beschadigen?`, a: `Niet als het goed wegloopt. Blijft het op het dak staan of loopt het steeds over dezelfde naad, dan slijt die plek sneller. En bevriest het in de winter in de afvoer, dan kan het regenwater daarna niet weg. Kijk na een koude nacht of er ijs of een plas bij de unit ligt, en stuur me een foto als dat steeds terugkomt.` },
      { v: `Is lekkage bij de warmtepomp spoed?`, a: `Druppelt het binnen bij een lamp, een stopcontact of op spullen die niet nat mogen worden, dan wel: zet de stroom van die groep uit en bel of app me met een foto. Is het een vochtige plek die na de bui weer opdroogt, dan kan het vaak een paar dagen wachten. Laat het niet de hele winter zitten.` },
      { v: `Moet de warmtepomp eraf voor de reparatie?`, a: `Meestal niet. Zit het lek bij de doorvoer of naast de unit, dan kan ik daar vaak gewoon bij. Zit het precies onder de unit, dan moet hij soms even opzij. Dat doe ik niet zonder de installateur, want aan de leidingen en de aansluiting zit ik niet.` },
    ],
  },
  {
    slug: `plat-dak-onderhouden`,
    datum: `2026-11-07`,
    titel: `Plat dak onderhouden?`,
    h1: `Plat dak onderhouden: wat je elk jaar nakijkt, zodat het droog blijft`,
    metaTitle: `Onderhoud plat dak: dit kijk je na | Spoed Dak Service`,
    metaDescription: `Een plat dak gaat langer mee als de afvoer vrij blijft en je op tijd ziet dat een naad, de rand of de opstand loslaat. Zo kijk je het zelf na, en dit laat je doen.`,
    intro: `Een plat dak vraagt weinig onderhoud, maar het vraagt wel iets. Het meeste gaat mis op een paar vaste plekken: de afvoer, de naden, de rand en de plek waar het dak tegen de muur omhoog loopt. Kijk je daar een of twee keer per jaar naar, dan zie je een probleem meestal voordat het binnen lekt. Hieronder lees je wanneer je kijkt, waar je op let en wat je beter laat doen.`,
    secties: [
      { kop: `Wanneer je kijkt`, tekst: [
        `Een goed moment is laat in de herfst, als het meeste blad van de bomen is, en nog eens in het voorjaar. Kijk ook na een storm of een flinke hagelbui. Het makkelijkst kijk je vanuit een raam boven. Kun je het dak zo niet goed zien, ga er dan niet zelf op staan: een nat plat dak is glad, en niet elk dak houdt je gewicht.`,
      ] },
      { kop: `De afvoer vrij`, tekst: [
        `Op een plat dak moet het water naar een afvoer, meestal een uitloop door de rand naar een regenpijp. Ligt daar blad, mos of grind voor, dan blijft het water staan. Staat er na een paar droge dagen nog een plas, dan loopt het niet goed weg. Lees ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>. Zit er een rooster of korf op de afvoer, kijk dan of die er nog op zit en niet vol zit.`,
      ] },
      { kop: `Blad, takken en mos`, tekst: [
        `Blad en takjes die op het dak blijven liggen, houden vocht vast en schuiven bij een bui naar de afvoer. Mos op een plat dak laat vooral zien dat het daar lang nat blijft. Kijk dan of het water op die plek wel weg kan. Veeg niet met een harde bezem of een schep over de bedekking en gebruik geen hogedrukspuit, want daarmee maak je hem kapot.`,
      ] },
      { kop: `Naden, rand en opstand`, tekst: [
        `Kijk naar de naden waar twee banen over elkaar liggen. Staat er een randje omhoog of zie je een kier, dan kan daar water onder. Kijk ook naar de rand van het dak, onder de daktrim, en naar de plek waar het dak tegen de muur omhoog loopt: de opstand. Laat de bedekking daar los, dan loopt het water erachter. Zie <a href="/kennisbank/daktrim-lekt/">plat dak lekt langs de rand</a> en <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Lichtkoepel en pijpen`, tekst: [
        `Kijk rond een lichtkoepel en rond een pijp die door het dak gaat. Zit de aansluiting nog strak, of is er alleen kit gebruikt die loslaat of scheurt? Zie <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.`,
      ] },
      { kop: `Bobbels, scheurtjes en grind`, tekst: [
        `Een bobbel is vaak lucht onder de bedekking en hoeft niet erg te zijn, zolang er geen scheurtje in zit. Kleine scheurtjes of een bedekking die er droog en gebarsten uitziet, laten wel zien dat hij ouder wordt. Ligt er grind op je dak, laat dat dan liggen, want het beschermt de bedekking. Kijk alleen of het niet in de afvoer spoelt.`,
      ] },
      { kop: `Wat je beter niet zelf doet`, tekst: [
        `Smeer geen kit of bitumen uit de bouwmarkt op een plek die je niet vertrouwt. Dat hecht slecht op een natte of vuile ondergrond, en voordat het goed gemaakt kan worden, moet het er weer af. Loop niet met steentjes onder je schoenen over het dak, en zet er niets zwaars op zonder te weten of het dak dat kan hebben.`,
      ] },
      { kop: `Laten nakijken`, tekst: [
        `Twijfel je, maak dan een paar foto's vanuit een raam boven en stuur die via WhatsApp. Dan zeg ik eerlijk of er iets moet gebeuren of dat het nog goed is. Zie ik een losse naad, een losse opstand of een lek bij de afvoer, dan maak ik alleen die plek dicht. Is de bedekking op veel plekken op, dan hoor je dat ook. Meer daarover lees je in <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak repareren of vervangen</a> en bij <a href="/diensten/platte-daken/">platte daken</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een gerichte reparatie van een lek in een klein plat dak kost ${platPrijs}. Moet er meer gebeuren, dan kom ik eerst kijken en hoor je vooraf de vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Wanneer kijk ik mijn platte dak het beste na?`, a: `Een of twee keer per jaar: laat in de herfst, als het blad gevallen is, en in het voorjaar. Kijk ook na een storm. Staan er veel bomen in de buurt, dan blijft er meer blad liggen en kijk je vaker naar de afvoer.` },
      { v: `Mag ik zelf op mijn platte dak lopen?`, a: `Liever niet als het niet nodig is. Een nat of bemost dak is glad, en niet elk plat dak is gemaakt om op te lopen, zeker niet het dak van een berging of garage met dunne platen eronder. Kijk liever vanuit een raam en stuur me een foto.` },
      { v: `Er groeit mos op mijn platte dak. Is dat erg?`, a: `Een beetje mos is meestal geen ramp, maar het laat zien dat het daar lang nat blijft. Kijk of het water op die plek naar de afvoer kan. Haal het niet weg met een harde bezem, een schep of een hogedrukspuit, want dan beschadig je de bedekking. Stuur me een foto als er een plas blijft staan of als de bedekking eronder er kapot uitziet.` },
    ],
  },
  {
    slug: `lekkage-bij-de-nok`,
    datum: `2026-11-07`,
    titel: `Nat bovenin je zolder, onder de nok?`,
    h1: `Dak lekt bij de nok: een natte plek bovenin je zolder, waar komt het vandaan?`,
    metaTitle: `Dak lekt bij de nok: nat op zolder? | Spoed Dak Service`,
    metaDescription: `Nat bovenin je zolder, vlak onder de nok? Vaak zit het in een losse nokvorst, een kapotte pan vlak onder de nok of een pijp door het dak. Soms is het condens.`,
    intro: `Zie je op zolder een natte plek helemaal bovenin, waar de twee dakvlakken samenkomen? Of druppelt het langs de balk die onder de nok loopt? Dan komt het water meestal van de nok zelf of van vlak eronder. Hieronder lees je waar het meestal zit, hoe je condens herkent en wat je doet tot het gemaakt is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel en leg er een handdoek onder. Zit de natte plek boven een lamp of bij een stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op: de nok is het hoogste en steilste stuk van je dak. Maak een foto van de natte plek en, als het kan, van je dak vanaf de overkant van de straat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar het water bij de nok binnenkomt`, tekst: [
        `<strong>Een losse nokvorst.</strong> Op oudere daken liggen de nokvorsten in specie. Die wordt na jaren bros en brokkelt af, en dan waait de regen onder de vorsten door naar binnen. Vanaf de straat zie je dan vaak een vorst die scheef ligt, of brokjes specie in de goot. Lees ook <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `<strong>Een gescheurde strook onder een droge nok.</strong> Ligt je nok droog, zonder specie, dan zit er onder de vorsten een strook die de nok dichthoudt. Scheurt die of laat hij los, dan kan er bij harde wind regen onder de nok door waaien, ook als de vorsten zelf nog netjes liggen.`,
        `<strong>Een kapotte pan vlak onder de nok.</strong> De bovenste rij pannen schuift onder de nokvorsten. Is daar een pan gebroken of verschoven, dan loopt het water er op het hoogste punt onder, en zie je het binnen bovenin. Zo'n pan zie je van beneden bijna niet. Zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
        `<strong>Een pijp vlak bij de nok.</strong> Een ontluchtingspijp of afvoer komt vaak hoog door het dak naar buiten. Is de kraag eromheen gescheurd, dan loopt het water langs de pijp naar binnen, en dat lijkt dan op een lek bij de nok. Lees <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een ontluchtingspijp of doorvoer</a>.`,
        `<strong>De schoorsteen op de nok.</strong> Staat de schoorsteen op of vlak naast de nok, dan kan het water ook langs het lood rond de schoorsteen binnenkomen. Lees <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.`,
      ] },
      { kop: `Of is het condens?`, tekst: [
        `Warme, vochtige lucht uit je huis stijgt op en komt bovenin de zolder terecht. Is het daar koud, dan slaat dat vocht neer tegen het hout of de folie onder de nok. Dan zie je druppels of een natte plek bovenin, vooral na een koude nacht, ook als het niet heeft geregend. Wordt het alleen nat na een bui of bij harde wind, dan is het eerder een lek. Hoe je het verschil ziet, lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Zo kijk je zelf, zonder het dak op te gaan`, tekst: [
        `Kijk vanaf de overkant van de straat naar de nok, het liefst met de zoom van je telefoon. Ligt er een vorst scheef, zit er een kier tussen twee vorsten, of ligt er specie in de goot of op de stoep? Kijk ook vanuit de tuin naar de achterkant. Op zolder kun je met een zaklamp kijken waar het hout donker of nat is. Volg zo'n streep naar boven, want het water loopt vaak een stuk over de balk voordat het druppelt.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het hout nat is, en daarna buiten naar de nok, de bovenste rij pannen en wat er vlak onder de nok door het dak steekt. Een losse vorst zet ik weer vast, een kapotte pan vervang ik door een die past, en is de strook onder een droge nok gescheurd, dan vervang ik die. Is de specie onder de hele nok op, dan zeg ik eerlijk dat het slimmer is om de hele nok in één keer opnieuw te doen. Ligt de nok open, dan maak ik hem eerst dicht. Zie ook <a href="/diensten/nokvorsten-vervangen/">nokvorsten repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse pannen vervangen of een nokvorst weer vastzetten kost ${inclBtw("dakpan")}. De nokvorsten opnieuw aansmeren met dakmortel kost ${inclBtw("nok_repareren")}. Moeten de vorsten vervangen worden, stuur dan een foto, dan hoor je wat het kost. Je hoort de prijs voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: nokvorsten repareren of vervangen`, href: `/diensten/nokvorsten-vervangen/` },
    faq: [
      { v: `Is een lek bij de nok spoed?`, a: `Druppelt het binnen, of zie je vanaf de straat een open plek op de nok of een vorst die er bijna af ligt, dan wel: bel of app me met een foto. Zeker als er een storm aankomt, want dan kan een losse vorst eraf waaien. Is het een oude, droge kring bovenin die niet groter wordt, dan kan het vaak een paar dagen wachten.` },
      { v: `Wat kan ik op zolder doen tot het gemaakt is?`, a: `Zet een bak of emmer onder de druppel en leg plastic of een handdoek op de vloer eronder. Duw geen isolatie of doeken tussen de pannen en het hout, want dan blijft het water juist hangen. Ga niet zelf de nok op om iets af te dekken.` },
      { v: `Mijn nok is een paar jaar geleden nog opnieuw gelegd. Kan het daar dan toch lekken?`, a: `Dat kan. Bij een droge nok zit elke vorst vast met een klem of schroef, en schiet er één los, dan gaat die vorst bij harde wind schuiven. Ook de strook onder de vorsten kan bij een schoorsteen of de rand van het dak loslaten. Is het werk nog maar kort geleden gedaan, neem dan eerst contact op met wie het heeft gedaan. Anders kijk ik wat er los zit.` },
      { v: `Waarom is het alleen nat bij harde wind?`, a: `Bij gewone regen loopt het water netjes over de nok en de pannen naar beneden. Bij harde wind waait de regen schuin onder een losse vorst, een kier in de specie of een gescheurde strook onder de nok door. Let op bij welke windrichting het nat wordt, dan weet ik aan welke kant van de nok ik moet zoeken.` },
    ],
  },
  {
    slug: `lekkage-badkamer-plafond`,
    datum: `2026-11-08`,
    titel: `Nat plafond in de badkamer?`,
    h1: `Natte plek op het plafond van je badkamer: komt het van het dak, de afzuiging of is het condens?`,
    metaTitle: `Badkamerplafond nat: dak of condens? | Spoed Dak Service`,
    metaDescription: `Een natte plek of druppels op het plafond van je badkamer? Vaak is het condens of water uit de pijp van de afzuiging, soms het dak of een dakraam. Zo zie je het verschil.`,
    intro: `Zit je badkamer bovenin het huis, onder een schuin dak of een plat dak, dan kan een natte plek op het plafond van drie kanten komen: van het dak zelf, van de pijp van de afzuiging die door het dak naar buiten gaat, of van de damp van je eigen douche. Dat verschil zie je vaak al aan het moment waarop het nat wordt. Hieronder lees je waar je op let, wat je zelf kunt testen en wanneer je mij of juist een installateur belt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel en leg er een handdoek onder. Zit de natte plek bij een spotje, een lamp of de afzuiger in het plafond, zet dan in de meterkast de groep van de badkamer uit en gebruik de afzuiger niet. Lees ook <a href="/kennisbank/water-uit-lamp-plafond/">water uit een lamp in het plafond</a>. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Na het douchen of na een bui?`, tekst: [
        `Let op wanneer het nat wordt. Wordt het plafond nat vlak na het douchen, ook op dagen dat het droog is, dan is het meestal condens. De warme, vochtige lucht slaat neer tegen het koudste stuk van het plafond, vaak in een hoek, boven de douche of tegen de buitenmuur. Je ziet dan vaak ook zwarte puntjes van schimmel. Wordt het nat na regen, ook als er die dag niemand heeft gedoucht, dan komt het water eerder van buiten.`,
      ] },
      { kop: `De pijp van de afzuiging`, tekst: [
        `In veel badkamers zit een afzuiger of een ventiel in het plafond, met een pijp die over de zolder naar het dak loopt en daar naar buiten gaat. Op het dak zit om die pijp een kraag op een speciale pan. Is die kraag gescheurd of uitgedroogd, of ligt de pan niet meer goed, dan loopt het regenwater langs de pijp naar binnen en zie je de natte plek rond het ventiel. Lees ook <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een ontluchtingspijp of doorvoer</a>.`,
        `Druppelt het uit het ventiel ook als het droog is, vooral na het douchen of op koude dagen, dan is het vaak condens in de pijp zelf. De vochtige lucht koelt af in een koude pijp op zolder, en het water loopt terug naar het ventiel. Dat is geen daklek, en dat los je niet op het dak op. Daarvoor bel je een installateur, die kan kijken of de pijp goed loopt en geïsoleerd is.`,
      ] },
      { kop: `Een dakraam boven de douche`, tekst: [
        `Zit er een dakraam in je badkamer, dan slaat de damp ook op het glas neer en loopt het langs het kozijn naar beneden. Dat lijkt op een lek. Wordt het alleen nat na het douchen, dan is het condens. Wordt het nat na een bui, ook als het raam dicht zat, dan kan het in de aansluiting van het raam op het dak zitten. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
      ] },
      { kop: `Het dak boven de badkamer`, tekst: [
        `Ligt je badkamer onder een schuin pannendak, dan kan het water binnenkomen bij een pan die is gaan schuiven, bij het lood rond een schoorsteen of bij een pijp door het dak, en daarna een stuk over het hout lopen voordat het op het plafond uitkomt. Ligt hij onder een plat dak, bijvoorbeeld in een aanbouw, dan zit het vaker bij een naad, de rand of de afvoer. Lees ook <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a> en <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Of een leiding?`, tekst: [
        `Druppelt het ook na een paar droge dagen nog, terwijl er niet gedoucht is, dan kan het van een leiding komen, bijvoorbeeld van de cv-ketel of een waterleiding op zolder. Dan is een loodgieter de juiste persoon. Twijfel je, lees dan <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">dakdekker of loodgieter</a>.`,
      ] },
      { kop: `Zo test je het zelf`, tekst: [
        `Zet met potlood een streepje langs de rand van de natte plek. Douche een paar dagen met het raam open of de afzuiger aan, en kijk of de plek groter wordt. Kijk ook na de eerstvolgende flinke bui, liefst als er die dag nog niet gedoucht is. Wordt hij alleen na een bui groter, dan is het waarschijnlijk het dak of de kraag om de pijp. Maak elke keer een foto, dan zie je het verschil en kan ik meekijken.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk op zolder waar het water langs het hout of de pijp loopt, en daarna buiten naar de kraag rond de pijp, de pannen en het lood boven de badkamer. Een gescheurde kraag of een doorvoerpan die niet goed ligt, vervang ik, en een verschoven pan leg ik terug. Is het condens of zit het in de pijp of een leiding, dan zeg ik dat eerlijk, en dan hoor je wie je beter kunt bellen. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek opsporen en dichtmaken kost ${inclBtw("daklekkage")}. Gaat het om de kraag of de pan rond de pijp van de afzuiging, stuur dan een foto van die plek op het dak vanaf de straat, dan hoor je wat het kost. Je hoort de prijs voordat ik begin.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Er zitten zwarte puntjes op mijn badkamerplafond. Is dat een lek?`, a: `Meestal niet. Zwarte puntjes zijn vaak schimmel, en die groeit waar vocht van het douchen steeds op dezelfde koude plek neerslaat. Ventileer tijdens en na het douchen, met het raam open of de afzuiger aan. Komt er na een bui ook een natte, bruine kring bij, dan kan er wel water van buiten bij komen. Stuur me dan een foto.` },
      { v: `Het druppelt uit het ventiel van de afzuiging. Moet het dak open?`, a: `Meestal niet. Druppelt het vooral na het douchen of op koude dagen, ook als het droog is, dan is het vaak condens in de pijp, en dan helpt een installateur je verder. Druppelt het alleen bij regen, dan kan de kraag rond de pijp op het dak lekken, en daar kijk ik naar. Stuur me een foto van het ventiel en van de pijp op het dak, als je die vanaf de straat kunt zien.` },
      { v: `Is een nat badkamerplafond spoed?`, a: `Druppelt het bij een lamp, een spotje of de afzuiger, of bolt het plafond op, dan wel: zet de groep van de badkamer uit en bel of app me met een foto. Is het een vochtige plek die na het douchen weer opdroogt, dan is het meestal condens en kan het wachten.` },
      { v: `Mijn badkamer zit in de aanbouw onder een plat dak. Waar lekt het dan meestal?`, a: `Vaak bij de rand van het dak, bij een naad, bij de afvoer of op de plek waar het platte dak tegen de muur van het huis omhoog loopt. Ook een lichtkoepel of de pijp van de afzuiging door het platte dak kan lekken. Kijk vanuit een raam boven of er na een bui water op het dak blijft staan, en stuur me daar een foto van, samen met een foto van de natte plek binnen.` },
    ],
  },
  {
    slug: `lekkage-bij-kachelpijp`,
    datum: `2026-11-08`,
    titel: `Lekt het bij de pijp van je houtkachel?`,
    h1: `Lekkage bij de pijp van je houtkachel of pelletkachel: waar het zit en wat je doet`,
    metaTitle: `Lekkage bij de kachelpijp door het dak | Spoed Dak Service`,
    metaDescription: `Druppelt het langs de pijp van je houtkachel? Vaak zit het in de kraag of de slab op het dak, soms is het condens of regen in de pijp zelf. Zo zie je het verschil.`,
    intro: `Heb je een houtkachel of pelletkachel met een eigen pijp door het dak, dan is dat een plek waar een dak kan gaan lekken. Je ziet het aan een natte plek of bruine kring op het plafond rond de pijp, of aan druppels langs de pijp naar beneden. Vaak zit het op het dak, in de aansluiting rond de pijp. Soms komt het water uit de pijp zelf. Hieronder lees je hoe je het verschil ziet, wat je zelf doet en wat ik eraan doe.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een bak onder de druppel en haal spullen weg die nat kunnen worden. Raak de pijp niet aan als de kachel brandt of net uit is. Stook liever niet tot je weet waar het water vandaan komt. Ga niet zelf het dak op. Maak een foto van de natte plek en, als dat veilig kan, van de pijp op het dak vanaf de straat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Hoe de pijp door het dak gaat`, tekst: [
        `Op een pannendak gaat de pijp van een kachel meestal door een slab van lood of aluminium, of door een speciale doorvoerpan. Rond de pijp zit een kraag die de kier tussen de pijp en de slab dichthoudt, en vaak zit er boven die kraag nog een stormkraag om de pijp, die het water over de kraag heen leidt. Op een plat dak zit er een opstaande manchet om de pijp, die in de dakbedekking is meegenomen.`,
      ] },
      { kop: `Waar het water binnenkomt`, tekst: [
        `<strong>Een gescheurde of losse kraag.</strong> Een kachelpijp wordt warm en weer koud, en de kraag eromheen werkt mee. Na een aantal jaren kan hij uitdrogen, scheuren of loskomen van de pijp. Dan loopt het regenwater langs de pijp naar binnen.`,
        `<strong>Een stormkraag die los zit of ontbreekt.</strong> Zakt de stormkraag naar beneden of zit hij scheef, dan loopt het water tussen de pijp en de kraag door.`,
        `<strong>Een slab of doorvoerpan die niet goed ligt.</strong> Is de slab bij het plaatsen niet goed onder de pannen erboven geschoven, of is de pan ernaast verschoven, dan loopt het water onder de slab door.`,
        `<strong>Een gat in een gewone pan, dichtgekit.</strong> Soms is er een gat in een gewone pan gemaakt en is de kier rond de pijp dichtgekit. Kit laat na een tijd los, en dan lekt het rond de pijp.`,
        `Lees ook <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een ontluchtingspijp of doorvoer</a>.`,
      ] },
      { kop: `Of komt het uit de pijp zelf?`, tekst: [
        `Druppelt er bruin of zwart water onderaan de pijp of bij de kachel, dat naar rook ruikt, ook op dagen dat het droog is? Dan is het vaak condens in de pijp. Dat gebeurt sneller als het hout nat is of de pijp koud blijft. Regent het bovenin de pijp naar binnen omdat er geen goede kap op zit, dan wordt de binnenkant van de pijp nat, ook als de aansluiting op het dak dicht is. In beide gevallen is het geen daklek, en dan is je kachelinstallateur of schoorsteenveger de juiste persoon. Heb je een gemetselde schoorsteen, lees dan <a href="/kennisbank/schoorsteen-lekt-open-haard/">water in je open haard of kachel</a>.`,
      ] },
      { kop: `Zo kijk je zelf, zonder het dak op te gaan`, tekst: [
        `Kijk vanaf de straat of de tuin, met de zoom van je telefoon, naar de plek waar de pijp door het dak gaat. Zit de kraag strak om de pijp, staat de stormkraag er nog boven, en ligt de slab of de pan plat tussen de pannen eromheen? Kijk binnen of het nat wordt na een bui of juist als je stookt. Wordt het alleen nat bij regen, ook als de kachel al dagen uit is, dan zit het meestal op het dak.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik doe het stuk door het dak: de slab of doorvoerpan, de kraag en de aansluiting op de pannen eromheen. Een uitgedroogde of gescheurde kraag vervang ik, een slab of pan die niet goed ligt leg ik opnieuw, en een gekit gat in een gewone pan vervang ik door een doorvoer die past bij je pannen. Aan de kachelpijp zelf, de stormkraag en de kap bovenop werkt je kachelinstallateur. Moet de pijp eruit om het dak goed dicht te maken, dan stemmen we af wie wat doet. Zie ook <a href="/diensten/dakdoorvoer/">dakdoorvoer plaatsen of herstellen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is. Een nieuwe kraag is een andere klus dan een nieuwe slab of doorvoerpan. Stuur een foto van de pijp op het dak vanaf de straat en van de natte plek binnen via WhatsApp, dan hoor je wat het kost. Je weet de prijs voordat ik begin.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakdoorvoer plaatsen of herstellen`, href: `/diensten/dakdoorvoer/` },
    faq: [
      { v: `Mag ik blijven stoken zolang het lekt?`, a: `Liever niet tot je weet waar het water vandaan komt. Zit het in de pijp zelf, dan wil je dat je installateur er eerst naar kijkt. Zit het in de aansluiting op het dak, dan maak ik die dicht, en daarna kun je weer gewoon stoken. Zet tot die tijd een bak onder de druppel en stuur me een foto.` },
      { v: `Vervang je ook de pijp van mijn kachel?`, a: `Nee. De pijp, de stormkraag, de kap en de aansluiting op de kachel horen bij je kachelinstallateur. Ik doe het stuk door het dak, zodat het daar dicht is. Laat je een nieuwe kachel plaatsen, dan kunnen we afspreken dat ik de doorvoer in het dak maak en de installateur de pijp.` },
      { v: `Is het condens of een lek?`, a: `Wordt het alleen nat als je stookt, en is het water bruin of ruikt het naar rook, dan is het vaak condens in de pijp. Wordt het nat na een bui, ook als de kachel al dagen uit is, dan is het eerder een lek bij de aansluiting op het dak. Let een paar dagen op wanneer het nat wordt, en maak er foto's van.` },
      { v: `Mijn kachelpijp gaat door een plat dak. Kun je daar ook naar kijken?`, a: `Stuur een foto van de pijp op het dak en van de natte plek binnen, dan kijk ik mee. Op een plat dak zit het lek vaak in de manchet om de pijp of in de dakbedekking ernaast. Op een pannendak doe ik deze klus het vaakst.` },
    ],
  },
  {
    slug: `dakgoot-losgeraakt`,
    datum: `2026-11-08`,
    titel: `Dakgoot los of losgewaaid?`,
    h1: `Dakgoot losgeraakt of losgewaaid na een storm: wat doe je nu?`,
    metaTitle: `Dakgoot los of losgewaaid: wat nu? | Spoed Dak Service`,
    metaDescription: `Hangt je dakgoot na een storm los of staat hij schuin van de muur? Zo houd je het veilig, zo zie je wat er los zit en zo wordt het gemaakt.`,
    intro: `Na een storm zie je het soms vanaf de straat: de dakgoot hangt aan één kant lager, staat een stukje van de muur af of hangt half los boven de stoep. Dat is meer dan een schoonheidsfoutje. Bij de volgende bui loopt het water langs je muur in plaats van naar de regenpijp, en bij harde wind kan een los stuk verder losscheuren. Hieronder lees je wat je meteen doet, hoe je ziet wat er los zit en hoe het gemaakt wordt.`,
    secties: [
      { kop: `Hangt hij los boven de stoep? Eerst dit`, tekst: [
        `Blijf onder de goot weg en zorg dat niemand eronder loopt, fietst of parkeert. Zet er als het kan een kliko of een paar stoelen neer, zodat mensen eromheen lopen. Trek niet aan de goot, duw hem niet terug en zet geen ladder tegen de goot of de gevel, want een goot die half los hangt, kan dan helemaal loskomen. Maak vanaf een veilige plek een foto en bel of app me. Hangt er iets los boven de stoep, de oprit of je terras, dan is het spoed. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo hangt een dakgoot aan je huis`, tekst: [
        `Een dakgoot hangt in beugels. Bij de meeste huizen zitten die met schroeven vast aan een houten plank langs de onderkant van het dak, het boeiboord, of aan houten klossen die onder de dakrand uitsteken. Een kunststof goot klikt in zijn beugels, een zinken goot ligt erin. De goot hangt net onder de onderste rij pannen, met een klein beetje afschot naar de regenpijp. Een bakgoot is anders: die ligt in een houten bak bovenop de muur. Lees daarover <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Waarom een goot losraakt`, tekst: [
        `<strong>Wind die onder de goot slaat.</strong> Bij een storm trekt de wind niet alleen aan de pannen, maar ook aan de goot, vooral op de hoek van een huis en aan het eind van een rij. Zitten de beugels al wat losser, dan wipt de goot eruit of buigt een beugel weg.`,
        `<strong>Een volle goot.</strong> Een goot vol nat blad, zand en water is zwaar. Komt daar bij een flinke bui nog water bij, dan trekt dat gewicht de beugels langzaam scheef, tot de goot bij een windstoot loslaat. Lees ook <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>.`,
        `<strong>Hout dat zacht is geworden.</strong> Zitten de beugels in een boeiboord of klossen waar al jaren water in trekt, dan houden de schroeven op een gegeven moment geen houvast meer. Dan zakt de goot eerst een stukje, en bij een storm laat hij los.`,
        `<strong>Een tak of een ladder.</strong> Een tak die op de goot valt, of een ladder die er hard tegenaan heeft gestaan, kan een beugel verbuigen of een kunststof goot laten scheuren.`,
        `<strong>IJs.</strong> Blijft er in de winter ijs in de goot staan, dan is hij veel zwaarder dan normaal. Lees daarover <a href="/kennisbank/ijspegels-aan-dakgoot/">ijspegels aan je dakgoot</a>.`,
      ] },
      { kop: `Losgeraakt of doorgezakt?`, tekst: [
        `Hangt de goot over een groot stuk een beetje lager in het midden, en blijft daar na een bui water staan, dan is hij vaak in de loop van de jaren doorgezakt en niet ineens losgeraakt. Dat lees je in <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>. Hangt hij na een storm ineens scheef, staat hij van de muur af of steekt er een beugel omhoog, dan is hij losgeraakt.`,
      ] },
      { kop: `Zo kijk je zelf, vanaf de grond`, tekst: [
        `Ga aan de overkant van de straat of achter in de tuin staan en kijk langs de goot, met de zoom van je telefoon. Hangt hij op één plek lager? Zit er een kier tussen de goot en het hout erachter? Steekt er een beugel uit, of ligt er een stuk goot of een eindstuk in de tuin? Kijk ook naar de regenpijp: raakt de goot los, dan schiet de uitloop vaak uit de pijp. Maak een paar foto's, en als je het kunt zien ook een van het hout boven de goot.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet op een ladder staan om de goot terug te duwen of met tape of touw vast te binden. Een ladder tegen een losse goot heeft geen houvast, en je staat dan precies onder het stuk dat los zit. Zet hem ook niet zelf vast met een paar extra schroeven. Is het hout zacht, dan houdt dat niet, en de volgende keer komt er een groter stuk los.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Hangt de goot los boven de stoep, dan maak ik hem eerst veilig: ik zet hem tijdelijk vast of haal het losse stuk weg. Daarna kijk ik waarom hij los is gekomen. Zijn de beugels verbogen of afgebroken en is het hout nog stevig, dan zet ik nieuwe beugels en hang ik de goot weer op afschot naar de regenpijp. Is een stuk goot gescheurd of geknikt, dan vervang ik dat stuk. Zit het hout waar de beugels in zitten zacht, dan hoor je dat van me voordat ik verder ga, want dan moet eerst dat hout gemaakt worden. Zie ook <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Valt het onder je verzekering?`, tekst: [
        `Is een goede goot bij een storm losgewaaid, dan valt het herstel vaak onder je opstalverzekering. Was het hout al zacht of hing de goot al lang scheef, dan zien verzekeraars dat meestal als onderhoud. Dat verschilt per polis. Maak foto's voordat er iets wordt gemaakt. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je naar je verzekeraar kunt sturen. Lees ook <a href="/kennisbank/lekkende-dakgoot-verzekering/">lekkende dakgoot en je verzekering</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoeveel er los zit, of er beugels of een stuk goot vervangen moeten worden en hoe hoog en bereikbaar de goot hangt. Stuur een foto van de goot vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Is een losgeraakte dakgoot spoed?`, a: `Hangt hij los boven de stoep, de oprit, je terras of het pad van de buren, dan wel: blijf eronder weg en bel of app me met een foto. Is hij alleen een stukje gezakt en loopt het water bij een bui over de rand, dan is het geen spoed, maar laat het niet de winter over zitten. Het water loopt dan langs je muur, en dat trekt op den duur naar binnen.` },
      { v: `Kan een losgeraakte goot gewoon terug in de beugels?`, a: `Soms wel. Is een kunststof goot uit zijn beugels gewipt en zijn de goot en de beugels nog heel, dan kan hij vaak terug, en waar het nodig is zet ik er een beugel bij. Is een beugel verbogen, een stuk goot geknikt of het hout erachter zacht, dan moet er meer gebeuren. Dat zie ik als ik ervoor sta, en je hoort vooraf wat het kost.` },
      { v: `De regenpijp is met de goot mee losgekomen. Is dat erg?`, a: `Dan loopt het water bij een bui naast de pijp langs de muur naar beneden. Laat het daarom snel maken. Vaak is de pijp alleen uit de uitloop van de goot geschoten of zit een beugel van de pijp los. Is de pijp daarbij gescheurd of geknikt, dan vervang ik dat stuk. Stuur een foto van de goot en de pijp via WhatsApp.` },
      { v: `Kan ik voorkomen dat mijn goot bij de volgende storm losraakt?`, a: `Voor een groot deel wel. Houd de goot leeg, zeker na de bladval, zodat hij niet zwaar wordt van nat blad en water. Kijk na een storm vanaf de straat of hij nog recht hangt. En laat een goot die op één plek zakt op tijd nakijken, want dat is vaak het eerste teken dat een beugel of het hout erachter het begeeft.` },
    ],
  },
  {
    slug: `wat-kost-nokvorsten-repareren`,
    datum: `2026-11-08`,
    titel: `Wat kost nokvorsten repareren?`,
    h1: `Wat kost het om nokvorsten te repareren of te vervangen?`,
    metaTitle: `Wat kost nokvorsten repareren? | Spoed Dak Service`,
    metaDescription: `Losse nokvorst of brokkelige specie op de nok? Een vorst vastzetten kost ${inclBtw("dakpan")}, de nok opnieuw aansmeren ${inclBtw("nok_repareren")}. Zo zit het met de prijs.`,
    intro: `Ligt er een nokvorst scheef, zitten er brokjes specie in je goot of is er na een storm een vorst van je dak gewaaid? Dan wil je weten wat het kost om dat te laten maken. Dat hangt vooral af van de vraag of het om één vorst gaat of om de hele nok. Hieronder lees je wat het bij mij kost, waar de prijs van afhangt en wanneer je beter eerst een foto stuurt.`,
    secties: [
      { kop: `Dit kost het bij mij`, tekst: [
        `Eén losse nokvorst weer vastzetten, of een paar losse pannen vervangen, kost ${inclBtw("dakpan")}.`,
        `De nokvorsten opnieuw aansmeren met dakmortel, als de oude specie onder de nok op is, kost ${inclBtw("nok_repareren")}.`,
        `Moeten er nokvorsten vervangen worden, of moet de hele nok opnieuw, dan noem ik geen bedrag zonder het te zien. Stuur een foto van de nok, dan hoor je wat het kost. De vaste prijs hoor je voordat ik begin. Alle richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
      { kop: `Ligt de nok nu open? Eerst dit`, tekst: [
        `Mist er na een storm een vorst, of ligt er een vorst half los, dan ligt het hoogste punt van je dak open. Zet op zolder een emmer onder de nok als je daar veilig kunt komen, en ga zelf niet het dak op. Heb je een vorst of een stuk ervan gevonden, leg het dan apart: aan de vorm en de kleur zie ik welke vorst er op je dak hoort. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Vastzetten, opnieuw aansmeren of vervangen`, tekst: [
        `<strong>Vastzetten.</strong> Ligt er één vorst scheef of los en zit de rest van de nok nog goed, dan zet ik alleen die vorst weer vast. Dat is een kleine reparatie.`,
        `<strong>Opnieuw aansmeren.</strong> Op oudere daken liggen de vorsten in specie. Brokkelt die op veel plekken af, dan haal ik de oude specie weg en zet ik de vorsten opnieuw vast met dakmortel. De vorsten zelf gaan terug op hun plek.`,
        `<strong>Vervangen.</strong> Zijn er vorsten gebroken, of is de nok over de hele lengte op, dan vervang ik wat nodig is. Dat is meer werk, en daarvoor hoor je vooraf een prijs voor jouw dak. Hoe je ziet dat je nok los zit, lees je in <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
      ] },
      { kop: `Waar de prijs van afhangt`, tekst: [
        `Hoeveel vorsten los zitten. Eén vorst is iets anders dan een nok waar op drie of vier plekken de specie uit ligt. Zit het op veel plekken los, dan is de hele nok in één keer vaak voordeliger dan elk jaar een stukje.`,
        `Hoe lang de nok is. Een rijtjeshuis heeft een korte nok. Een vrijstaand huis of een boerderij heeft een lange, en bij een schilddak liggen er ook vorsten op de schuine hoeken van het dak.`,
        `Of de vorsten nog heel zijn. Een gebroken vorst vervang ik door een die past bij je pannen. Bij oude pannen moet ik zo'n vorst soms eerst zoeken. Lees ook <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik</a>.`,
        `Hoe goed ik bij de nok kan. Een nok op een laag huis is sneller gedaan dan een nok hoog op een steil dak, of een nok met zonnepanelen tot vlak eronder.`,
      ] },
      { kop: `Wat ik meteen meeneem`, tekst: [
        `Sta ik toch bij de nok, dan kijk ik ook naar de bovenste rijen pannen, want een kapotte pan vlak onder de nok zie je van beneden bijna niet. Zie ik nog iets anders, zoals lood dat loslaat bij de schoorsteen, dan laat ik het je zien en hoor je wat het kost. Extra werk doe ik pas als jij akkoord geeft.`,
      ] },
      { kop: `Na een storm en je verzekering`, tekst: [
        `Is een nokvorst bij een storm losgewaaid, dan valt het herstel vaak onder je opstalverzekering. Was de specie al jaren aan het afbrokkelen, dan zien verzekeraars het eerder als onderhoud. Dat verschilt per polis. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je naar je verzekeraar kunt sturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: nokvorsten repareren of vervangen`, href: `/diensten/nokvorsten-vervangen/` },
    faq: [
      { v: `Wat kost één losse nokvorst vastzetten?`, a: `Eén of een paar losse vorsten vastzetten valt onder een kleine reparatie: ${inclBtw("dakpan")}. Zit de specie onder de hele nok los, dan is opnieuw aansmeren slimmer, en dat kost ${inclBtw("nok_repareren")}. Stuur een foto van de nok vanaf de straat, dan zeg ik eerlijk wat bij jouw dak nodig is.` },
      { v: `Is de hele nok laten doen duurder dan een paar vorsten?`, a: `Ja, want het is meer werk. Maar zit de specie op veel plekken los, dan komt er anders elk jaar wel ergens een vorst los, en dan betaal je steeds opnieuw. Ik zeg eerlijk of een paar vorsten genoeg is of dat de hele nok slimmer is.` },
      { v: `Hoor ik de prijs voordat je begint?`, a: `Ja. Bij een kleine reparatie hoor je de prijs meestal al als je me een foto stuurt. Moet de nok opnieuw of moeten er vorsten vervangen worden, dan kom ik eerst kijken of vraag ik om een paar extra foto's, en dan hoor je de vaste prijs voordat ik begin.` },
      { v: `Mijn nok ligt droog, zonder specie. Kost repareren dan hetzelfde?`, a: `Niet altijd. Bij een droge nok zit elke vorst met een klem of schroef vast, en onder de vorsten ligt een strook die de nok dicht houdt. Is er één vorst losgeschoten, dan is dat een kleine reparatie. Is de strook eronder gescheurd of losgekomen, dan is het meer werk. Stuur een foto van de nok, dan hoor je vooraf wat het kost.` },
    ],
  },
  {
    slug: `lood-van-dak-gestolen`,
    datum: `2026-11-08`,
    titel: `Lood van je dak gestolen?`,
    h1: `Lood van je dak gestolen: wat doe je nu?`,
    metaTitle: `Lood van je dak gestolen: wat nu? | Spoed Dak Service`,
    metaDescription: `Mist er lood rond je schoorsteen, langs een muur of onder je dakraam? Zo beperk je de schade, zo regel je aangifte en verzekering, en zo wordt je dak weer dicht.`,
    intro: `Het komt voor dat er lood van een dak wordt gehaald, vooral van daken waar je makkelijk bij kunt, zoals bij een aanbouw, een garage of een plat dak naast het huis. Vaak merk je het pas bij de eerste bui: ineens is het nat naast de schoorsteen of onder het dakraam. Waar het lood weg is, ligt je dak open. Hieronder lees je wat je meteen doet, hoe je het regelt met de politie en je verzekering en hoe het weer dicht wordt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, leg er een handdoek onder en haal spullen weg die nat kunnen worden. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op en klim ook niet op de aanbouw of de garage om te kijken, want waar het lood is weggetrokken kunnen pannen of de dakbedekking beschadigd zijn. Maak vanaf de grond een foto van de plek en een van de natte plek binnen. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zie je dat er lood weg is`, tekst: [
        `Rond de voet van de schoorsteen hoort een grijze strook te liggen die over de pannen valt. Ook langs een muur waar een lager dak tegen je huis zit, en onder een dakraam, ligt zo'n strook. Zie je daar nu kale steen, een open kier of een rij spijkers of klemmen zonder iets eronder, dan is het lood weg. Soms is er nog een gescheurd stuk blijven hangen, of liggen er pannen scheef op de plek waar het lood onder vandaan is getrokken. Waar het lood normaal zit, lees je in <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Aangifte en je verzekering`, tekst: [
        `Doe aangifte bij de politie, ook als het om een klein stuk gaat, want je verzekeraar vraagt daar vaak om. Maak foto's van de plek waar het lood zat en van de schade binnen, voordat er iets wordt gemaakt. Of het nieuwe lood en de schade binnen worden vergoed, hangt af van je opstalverzekering en je polis. Bel je verzekeraar of kijk in je polisvoorwaarden. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je kunt meesturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Plak de open plek niet zelf af met tape, folie of kit vanaf een ladder of het dak. Op natte steen hecht dat niet, en een zeil vangt bij wind zoveel kracht dat het je zo van de ladder trekt. Vang het water liever binnen op en stuur me een foto.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Lekt het, dan maak ik de plek eerst dicht, zodat het binnen droog blijft. Daarna leg ik nieuwe stroken rond de schoorsteen, langs de muur of onder het dakraam, en leg ik de pannen eromheen weer goed. Meestal werk ik met loodvervanger. Dat is lichter, laat zich goed vormen en is voor dieven niet interessant. Wil je liever echt lood, bijvoorbeeld bij een oud huis of een monument, dan kan dat ook. Zie <a href="/diensten/lood-vervangen/">lood vervangen</a>.`,
      ] },
      { kop: `Zeg het ook tegen je buren`, tekst: [
        `Is er bij jou lood weggehaald, zeg het dan ook tegen je buren, zodat zij even naar hun schoorsteen en dakraam kunnen kijken. Ligt jouw dak tegen dat van de buren, dan kijk ik ook naar de aansluiting op de grens, zodat het daar dicht blijft. Zie ook <a href="/kennisbank/lekkage-muur-buren/">lekkage langs de muur met de buren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoeveel lood er weg is, of het om de schoorsteen, een muur of een dakraam gaat en of er binnen al schade is. Stuur een foto van de plek vanaf de straat en van de natte plek binnen via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: lood vervangen`, href: `/diensten/lood-vervangen/` },
    faq: [
      { v: `Is gestolen lood spoed?`, a: `Regent het of wordt het binnen nat, dan wel: bel of app me met een foto, want waar het lood weg is, ligt je dak open. Is het droog en zie je binnen nog niets, dan kan het meestal een dag of twee wachten. Wacht niet tot na de volgende flinke bui.` },
      { v: `Moet ik eerst aangifte doen voordat je het maakt?`, a: `De reparatie hoeft daar meestal niet op te wachten. Maak wel eerst foto's van de plek en van de schade binnen, en doe daarna zo snel mogelijk aangifte. Twijfel je, bel dan eerst even je verzekeraar.` },
      { v: `Kun je het lood vervangen door iets wat niet gestolen wordt?`, a: `Ja. Meestal werk ik met loodvervanger. Van beneden lijkt dat op lood, maar het is voor dieven niet interessant. Bij een monument of een oud huis kan echt lood beter passen, en dat bespreek ik dan eerst met je.` },
      { v: `Zie ik het altijd van buiten als er lood weg is?`, a: `Niet altijd. Rond een schoorsteen aan de voorkant zie je het vaak vanaf de straat, maar lood aan de achterkant of langs de muur van een aanbouw zie je pas vanuit de tuin of vanuit een raam boven. Wordt het ineens nat op een plek die altijd droog was, kijk dan vanaf de grond of uit een raam naar het lood boven die plek.` },
    ],
  },
  {
    slug: `vuurwerk-schade-dak`,
    datum: `2026-11-08`,
    titel: `Vuurwerk en je dak`,
    h1: `Vuurwerk en je dak: een pijl in de goot, een kapotte pan of een brandplek`,
    metaTitle: `Vuurwerkschade aan je dak: wat nu? | Spoed Dak Service`,
    metaDescription: `Na oud en nieuw een vuurpijl in je goot, een kapotte pan of een brandplek op je platte dak? Zo kijk je veilig, zo regel je je verzekering en zo wordt het gemaakt.`,
    intro: `Rond oud en nieuw komt er van alles op daken terecht: afgeschoten vuurpijlen, stukken karton van een cakebox en soms een pijl die nog nasmeult. Meestal blijft het bij troep in de goot. Maar soms is er een pan gebroken, zit er een gat of brandplek in de dakbedekking van een plat dak of in een kunststof goot, of is er droog blad in de goot gaan smeulen. Hieronder lees je wat je voor oud en nieuw kunt doen, waar je op 1 januari naar kijkt en hoe het gemaakt wordt.`,
    secties: [
      { kop: `Rookt of brandt er iets? Eerst dit`, tekst: [
        `Zie je rook of vuur op je dak, in de goot of onder de pannen, bel dan meteen 112. Ga niet zelf het dak op of op een ladder staan om het te blussen. Is het uit en lekt het binnen, zet dan een emmer onder de druppel en kijk op de <a href="/spoed/">spoedpagina</a> wat je verder meteen doet.`,
      ] },
      { kop: `Voor oud en nieuw: dit kun je vooraf doen`, tekst: [
        `Ligt er nog veel blad in je goot, laat hem dan voor de jaarwisseling leegmaken. Droog blad en takjes in een volle goot vatten makkelijker vlam als er een pijl in terechtkomt. Hoe vaak een goot leeg moet, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot schoonmaken</a>.`,
        `Steek je zelf vuurwerk af, doe dat dan op een plek waar het niet richting je eigen dak of dat van de buren gaat. Ligt er na de jaarwisseling karton of andere troep op je platte dak, laat het dan niet liggen, want het zet de afvoer zo dicht. Kun je er niet veilig bij, laat het dan doen. Zie ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Op 1 januari: zo kijk je vanaf de grond`, tekst: [
        `Kijk op een droge dag vanaf de overkant van de straat en vanuit de tuin naar je dak, met de zoom van je telefoon. Ligt er een pijl of een stuk karton in de goot of tegen de schoorsteen? Is er een pan gebroken, of zie je een zwarte plek? Kijk bij een plat dak vanuit een raam boven of er gaatjes of brandplekken in de dakbedekking zitten. Een kunststof goot kan op de plek van een pijl gesmolten of gescheurd zijn. Maak foto's van wat je ziet.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet op het dak of op een ladder bij de goot staan om vuurwerk weg te halen, zeker niet als het nat is of vriest. Raak vuurwerk dat niet is afgegaan niet aan.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik haal de resten uit de goot en van het dak, en kijk meteen of de goot nog goed afloopt naar de regenpijp. Een gebroken pan vervang ik door een pan die past. Zit er een gat of brandplek in de dakbedekking van een plat dak, dan maak ik die plek dicht. Is een stuk kunststof goot gesmolten of gescheurd, dan vervang ik dat stuk. Zie ik daarbij nog iets anders, dan laat ik het je zien en hoor je vooraf wat het kost. Zie ook <a href="/diensten/dakreparatie/">dakreparatie</a> en <a href="/diensten/goten-reinigen/">dakgoot schoonmaken</a>.`,
      ] },
      { kop: `Valt het onder je verzekering?`, tekst: [
        `Schade door vuurwerk valt vaak onder je opstalverzekering, maar dat verschilt per polis. Maak foto's voordat er iets wordt opgeruimd of gemaakt, en kijk in je polisvoorwaarden. Weet je wie het vuurwerk heeft afgestoken, dan kan de schade ook bij die persoon of diens verzekering liggen. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je naar je verzekeraar kunt sturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er kapot is: alleen troep in de goot, een gebroken pan, een stuk goot of een plek in een plat dak. Stuur een foto van je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: spoed dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Er ligt een vuurpijl in mijn dakgoot. Is dat erg?`, a: `Meestal niet, zolang hij niet meer smeult. Een pijl of een stuk karton kan wel de uitloop naar de regenpijp dichtzetten, en dan loopt de goot bij de volgende bui over. Ga er niet zelf met een ladder bij staan. Stuur me een foto, dan haal ik het eruit en kijk ik meteen of de goot nog heel is.` },
      { v: `Er zit een brandplek in mijn platte dak. Lekt het dan?`, a: `Dat kan. Een vuurpijl of een stuk vuurwerk kan een gaatje of een zwakke plek in de dakbedekking maken, en daar komt bij de volgende bui water door. Kijk binnen onder die plek of het nat wordt, en stuur een foto van de plek, eventueel vanuit een raam boven. Ik maak die plek dicht, en je hoort vooraf wat het kost.` },
      { v: `Is vuurwerkschade aan mijn dak spoed?`, a: `Rookt of brandt er iets, bel dan 112. Komt er water binnen of ligt er een stuk dak open, bel of app me dan met een foto. Ligt er alleen troep in de goot of op het dak en blijft het binnen droog, dan kan het meestal een paar dagen wachten.` },
      { v: `Moet ik mijn goot voor oud en nieuw laten leegmaken?`, a: `Ligt er nog veel droog blad in, dan is het slim. Droog blad vat makkelijker vlam als er een pijl in terechtkomt, en een lege goot loopt na de jaarwisseling ook beter af als er resten in vallen. Stuur een foto van je goot vanaf de straat, dan hoor je vooraf wat het kost.` },
    ],
  },
];

// Extra vragen bij bestaande artikelen. artikelen.ts is te groot om nog te laten groeien, daarom staan nieuwe vragen hier.
// kennisbank/[slug].astro zet ze onder de vragen die al in het artikel staan (ook in het FAQ-schema).
export const FAQ_ERBIJ: Record<string, Artikel["faq"]> = {
  "daklekkage-verzekering": [
    { v: `Mijn verzekeraar wil een eigen dakdekker sturen. Mag ik toch zelf iemand kiezen?`, a: `Vaak wel, maar kijk eerst in je polis of bel je verzekeraar. Sommige verzekeraars werken met een eigen herstelservice. Kies je zelf een vakman, dan vergoeden ze soms minder, of willen ze eerst de offerte of foto's zien voordat je de reparatie laat doen. Druppelt het nu, dan mag je de schade in de regel eerst beperken, bijvoorbeeld door een open plek tijdelijk te laten afdekken. Bewaar de rekening en de foto's. Kies je mij, dan krijg je foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je naar je verzekeraar kunt sturen.` },
    { v: `Is lekkage bij mijn dakkapel verzekerd?`, a: `Dat hangt af van je polis en van de oorzaak, net als bij de rest van je dak. Komt het water binnen doordat er bij een storm een stuk lood, een strook langs de zijkant of de bedekking van het dakje is losgewaaid, dan wordt de schade binnen vaak vergoed. Lekt het omdat de kit, het lood of de bedekking na jaren op is, dan zien verzekeraars dat meestal als onderhoud, en dan betalen ze de reparatie van de dakkapel zelf in de regel niet. Maak foto's van de natte plek binnen en van de dakkapel vanaf de straat voordat er iets wordt gerepareerd, en kijk in je polisvoorwaarden. Waar een dakkapel meestal lekt, lees je in het artikel over een lekkende dakkapel in de kennisbank.` },
  ],
  "dak-lekt-bij-sneeuw-of-vorst": [
    { v: `Mijn regenpijp is na de vorst gescheurd. Hoe kan dat?`, a: `Meestal stond er water in de pijp, omdat hij onderaan of in een bocht verstopt zat. Bevriest dat water, dan zet het uit en drukt het de pijp open. Je ziet dan een lange scheur, of een naad of bocht die is opengesprongen, vaak laag bij de grond. Bij dooi loopt het water er dan uit, langs de gevel. Ga er niet zelf met heet water of vanaf een ladder aan werken. Stuur een foto van de scheur en van de onderkant van de pijp via WhatsApp. Een gescheurd stuk vervang ik, en ik kijk meteen of de goot erboven nog goed afloopt. Je hoort vooraf wat het kost.` },
  ],
  "water-achter-dakgoot": [
    { v: `Is water achter de dakgoot spoed?`, a: `Loopt het alleen buiten langs de gevel, dan is het vervelend, maar meestal geen spoed. Laat het wel snel nakijken, want een muur die bij elke bui nat wordt, trekt het vocht op den duur naar binnen. Wordt het binnen nat, bovenin de muur of rond een kozijn, dan wel: bel of app me met een foto van de natte plek en van de goot buiten. Zit de natte plek bij een stopcontact of een lamp, zet dan eerst in de meterkast de groep van die kamer uit.` },
  ],
  "dak-lekt-bij-harde-wind": [
    { v: `Helpt het om mijn pannen te laten vastzetten tegen lekken bij harde wind?`, a: `Soms. Lekt het omdat de wind pannen optilt of laat klapperen, vooral langs de zijkant van het dak, de onderste rij boven de goot of vlak onder de nok, dan helpt vastzetten met stormhaken vaak. Waait de regen onder pannen door die gewoon vastliggen, of komt het water bij de nok of het lood binnen, dan lost vastzetten dat niet op. Dan kijk ik eerst waar het water echt binnenkomt. Stuur me een foto van je dak vanaf de straat en zeg erbij bij welke windrichting het lekt. Je hoort vooraf wat het kost.` },
  ],
  "lekkage-bij-zonnepanelen": [
    { v: `Er komen zonnepanelen op mijn dak. Moet ik het dak eerst laten nakijken?`, a: `Dat is slim, zeker bij een ouder dak. Liggen de panelen er eenmaal, dan kom je veel lastiger bij de pannen, de nok en het lood eronder. Een gebroken pan, een nok met losse specie of lood dat los zit, regel je het handigst voordat de panelen erop gaan. Stuur me een paar foto's van je dak vanaf de straat, dan zeg ik eerlijk of er eerst iets moet gebeuren. Wil je een rapport met foto's van je hele dak, dan kan dat met de Dak-APK voor ${apkPrijs}.` },
    { v: `Mijn zonnepanelen gaan eraf of worden verplaatst. Moet er daarna iets aan mijn dak gebeuren?`, a: `Vaak wel een beetje. Onder de panelen zitten dakhaken die onder de pannen door aan het dak vastzitten, en om ruimte te maken voor zo'n haak is er bij het plaatsen vaak een stukje uit een pan geslepen. Gaan de haken eruit, dan blijven die pannen met een uitsparing achter, en daar loopt bij een flinke bui water onderdoor. Ook kan er bij het weghalen een pan breken. Het weghalen van de panelen en de haken doet je installateur. Daarna vervang ik de pannen die beschadigd zijn door pannen die passen, en kijk ik meteen naar de rest van dat dakvlak. Laat het me vooraf weten, dan stemmen we af wanneer ik kom, zodat je dak niet lang open ligt. Je hoort vooraf wat het kost.` },
  ],
  "dakraam-lekt": [
    { v: `Mijn dakraam lekt alleen als het open of op de ventilatiestand staat. Is het dak dan lek?`, a: `Meestal niet. Blijft het droog zolang het raam dicht is, dan komt het water vaak via het raam zelf binnen: langs de rubbers, door de ventilatieklep bovenin, of omdat het raam niet meer goed sluit. Zet het raam bij regen dicht en kijk of het dan droog blijft. Lekt het ook als het raam dicht is, dan zit het eerder in de aansluiting met het dak, en daar kijk ik naar. Stuur me een foto van het raam van binnen en, als het lukt, van buiten vanaf de straat.` },
  ],
  "lekkage-bij-dakdoorvoer": [
    { v: `Mijn oude cv-ketel gaat eruit en de afvoer door het dak is niet meer nodig. Wat moet er met dat gat?`, a: `Dat moet goed dicht. Haalt de installateur de oude afvoerpijp weg, dan blijft de doorvoerpan met een open gat in je dak achter. Een stuk tape of een prop isolatie houdt dat maar kort droog. Ik haal de doorvoerpan weg en leg er een gewone pan in die past bij de pannen eromheen, zodat het dak daar weer dicht is. Zit de afvoer in een plat dak, dan maak ik de dakbedekking op die plek dicht. Laat het me weten als je de ketel laat vervangen, dan stemmen we af wanneer ik kom, zodat het dak niet lang open ligt. Je hoort vooraf wat het kost.` },
  ],
  "dakpan-kapot-of-verschoven": [
    { v: `Er ligt een stuk dakpan in mijn tuin, maar vanaf de straat zie ik niets. Wat nu?`, a: `Kijk eerst naar de achterkant van je huis en naar het dak van een schuur of aanbouw, want daar kijk je vanaf de straat niet op. Kijk ook naar de vorm en de kleur van het stuk. Is het rond en zit er specie aan, dan komt het vaak van de nok. Lijkt het niet op je eigen pannen, dan kan het ook van het dak van de buren zijn gewaaid. Bewaar het stuk en maak er een foto van, en ook van elk dakvlak dat je kunt zien, eventueel vanuit een raam boven. Stuur die via WhatsApp, dan zie ik vaak al waar het vandaan komt. Ga zelf niet op het dak of op een ladder zoeken.` },
  ],
  "schoorsteen-lekt-open-haard": [
    { v: `Er komt alleen water in mijn haard als het hard waait uit één richting. Wat zegt dat?`, a: `Dat zegt vaak waar het zit. Is het kanaal bovenin open, dan waait de regen er bij wind uit één richting schuin in, en bij weinig wind blijft het droog. Een kap of afdekplaat helpt dan meestal. Wordt vooral de kant van de schoorsteen nat waar de wind op staat, dan kan het water ook door het lood aan die kant of door de stenen en voegen trekken. Het lood herstel ik zelf. Zijn de stenen of voegen poreus, dan zeg ik dat eerlijk, want dat is werk voor een metselaar. Schrijf op bij welke wind het nat werd, en stuur me een foto van de schoorsteen vanaf de straat.` },
  ],
  "wat-kost-daklekkage-repareren": [
    { v: `Wat als je tijdens de reparatie ziet dat er meer kapot is?`, a: `Dan stop ik en laat ik het je eerst zien, met een foto als je zelf niet op het dak kunt kijken. Je hoort wat het extra werk is en wat het kost, en jij beslist of ik het meteen meeneem of dat het kan wachten. Extra werk doe ik pas als jij akkoord geeft. Is iets niet nodig om het lek dicht te krijgen, dan zeg ik dat er eerlijk bij.` },
  ],
  "daklekkage-opsporen": [
    { v: `Kun je een lek ook vinden als het op dat moment droog is?`, a: `Vaak wel. Water laat sporen na: een donkere kring of streep op het hout, een vlek op de folie, roest op een spijker of een vochtige plek in de isolatie. Die volg ik naar boven, en buiten kijk ik op die plek naar de pannen, het lood en de naden. Vertel me ook bij welk weer het nat werd, bijvoorbeeld alleen bij harde wind of bij een stortbui, want dat zegt veel over waar het zit. Zie ik op een droge dag niets, dan vraag ik je bij de volgende bui een foto te maken van de plek waar het druppelt.` },
  ],
  "wat-kost-een-dakdekker": [
    { v: `Werk je met een uurtarief?`, a: `Nee. Bij mij hoor je vooraf één vaste prijs voor de hele klus, geen bedrag per uur. Dan weet je vooraf waar je aan toe bent. Een paar losse pannen vervangen kost bijvoorbeeld ${inclBtw("dakpan")}. Voor groter werk stuur je een foto of kom ik eerst kijken, en je hoort de prijs voordat ik begin.` },
  ],
  "dak-keuren-bij-huis-kopen": [
    { v: `Ik verkoop mijn huis. Heeft het zin om het dak vooraf te laten keuren?`, a: `Dat kan. Met de Dak-APK weet je zelf hoe je dak erbij ligt voordat kopers en hun keurder komen kijken. Je krijgt een rapport met foto's dat je kunt laten zien. Zie ik iets wat gemaakt moet worden, zoals een losse pan of lood dat loslaat, dan hoor je vooraf wat het kost, en kies jij of je het voor de verkoop laat doen. Weet je van een lek of een ander gebrek aan je dak, vertel dat dan aan je makelaar, want een verkoper moet bekende gebreken in de regel melden. De Dak-APK kost ${apkPrijs}.` },
  ],
  "dakgoot-zelf-schoonmaken": [
    { v: `Kan ik mijn dakgoot schoonmaken vanuit het dakraam?`, a: `Liever niet. Vanuit een dakraam kom je bijna nooit goed bij de goot: hij zit een eind lager en verder naar voren dan je denkt, en je moet ver uit het raam hangen of op de pannen stappen. Juist dan gaat het mis. Met een lange steel met een grijper kom je soms bij het stuk recht onder het raam, maar de rest van de goot en de uitloop naar de regenpijp bereik je zo niet. Kun je er niet veilig met een ladder bij, laat het dan doen. Stuur me gerust een foto van je goot vanaf de straat.` },
  ],
  "dakinspectie": [
    { v: `Sommige dakdekkers doen een gratis dakinspectie. Waarom kost de Dak-APK geld?`, a: `Een gratis inspectie kan prima zijn. Vraag wel wat je krijgt: alleen een offerte voor werk, of ook een verslag van je hele dak. Bij de Dak-APK loop ik je hele dak na en krijg je een rapport met foto's, ook als er niets hoeft te gebeuren. Daarvoor betaal je ${apkPrijs}. Weet je al wat er mis is en wil je alleen weten wat het kost, stuur dan een foto via WhatsApp. Een prijs vragen kost niets.` },
  ],
  "stormschade-eerste-hulp": [
    { v: `Na de storm hangt er een dakgoot of een plank langs het dak los boven de stoep. Wat doe ik?`, a: `Blijf eronder weg en zorg dat er niemand onder loopt of parkeert. Trek er niet aan en zet geen ladder tegen de goot of de muur, want een losse goot of windveer kan dan verder losscheuren. Maak vanaf een veilige plek een foto en bel of app me meteen, want iets wat los boven de stoep of de oprit hangt, is spoed. Ik maak het eerst vast of haal het losse stuk weg, zodat het veilig is, en daarna kijk ik wat er nodig is om het netjes te herstellen. Je hoort vooraf wat het kost.` },
  ],
  "dakpannen-vastzetten-tegen-storm": [
    { v: `Ik woon in een rijtjeshuis. Moeten mijn pannen ook vast als de buren dat al hebben laten doen?`, a: `Niet altijd allemaal. De wind pakt vooral de randen van een dak: de zijkant bij de gevel, de onderste rij boven de goot en de rij vlak onder de nok. Woon je in een tussenwoning, dan heb je geen zijkant aan de gevel, en gaat het vooral om de onderste rij, de rij onder de nok en de pannen rond een dakraam. Woon je op de hoek, dan is juist de zijkant aan de gevel de plek waar het eerst misgaat. Kijk ook naar de grens met de buren: liggen hun pannen vast en de jouwe niet, dan zit het verschil precies op de overgang. Stuur me een foto van je dak vanaf de straat, dan zeg ik eerlijk welke pannen bij jou vast moeten. Je hoort vooraf wat het kost.` },
  ],
};

// Kort antwoord bovenaan een artikel: één of twee zinnen met het directe antwoord, voor Google en AI. Bedragen alleen via inclBtw uit prijzen.ts, nooit met de hand.
export const KORT_ANTWOORD: Record<string, string> = {
  "lekkage-bij-schoorsteen": `Lekt het naast de schoorsteen, dan zit het meestal in het lood rond de voet van de schoorsteen, dat na jaren scheurt, omkrult of loslaat. Soms komt het water door de kop van de schoorsteen of door het kanaal zelf naar binnen. Een foto vanaf de straat laat vaak al zien waar het zit.`,
  "daklekkage-opsporen": `De natte plek binnen zit zelden recht onder het lek. Water loopt eerst over de panlatten, de folie of de isolatie naar beneden en komt pas op het laagste punt naar binnen. Een lek vind je daarom door de weg van het water van binnen en van buiten terug te volgen, zonder onnodig sloopwerk.`,
  "dakgoot-lekt": `Een dakgoot lekt meestal bij een naad, een hoek, het eindstuk of de uitloop naar de regenpijp. Vaak is repareren genoeg: een zinken naad solderen, een kunststof verbinding vernieuwen of de goot van binnen coaten. Pas als de goot op veel plekken lek of doorgeroest is, is een nieuwe goot de betere keus.`,
  "plat-dak-vervangen-of-repareren": `Een lekkend plat dak kan vaak gerepareerd worden, zeker als het lek op één plek zit, zoals bij een naad, de rand of de afvoer. Vervangen is meestal pas slimmer als de dakbedekking op veel plekken los, gescheurd of versleten is, of als er na elke reparatie ergens anders een nieuw lek opduikt.`,
  "hoe-vaak-dakgoot-reinigen": `Voor de meeste huizen is één keer per jaar genoeg, het liefst in het najaar als het blad gevallen is. Staan er bomen vlak bij je huis, of heb je een bakgoot of kilgoot, dan is twee keer per jaar vaak slimmer.`,
  "dakraam-lekt": `Lekt het bij een dakraam in een pannendak, dan zit het meestal in het gootstuk of het lood rond het raam, of in de aansluiting op de pannen erboven. Lekt het alleen als het raam open of op de ventilatiestand staat, dan zit het vaak in het raam zelf en niet in het dak.`,
  "dak-lekt-bij-harde-wind": `Lekt je dak alleen bij harde wind en regen, dan waait de regen schuin onder een pan door die net niet goed in de sluiting ligt, of langs de nok, het lood bij de schoorsteen of de randen van het dak. Bij gewone regen merk je daar niets van. Meestal is het een gerichte reparatie op die ene plek, vaak aan de kant waar de wind op staat.`,
  "water-achter-dakgoot": `Loopt het water achter de dakgoot langs de muur terwijl de voorkant droog blijft, dan zit het meestal niet in de goot zelf. Vaak hangt de goot te laag of scheef, of komt het water van onder de pannen niet in de goot terecht. De oplossing is dan meestal de goot weer goed ophangen of zorgen dat dat water weer in de goot loopt.`,
  "lekkage-bij-zonnepanelen": `Lekt het sinds er zonnepanelen op je dak liggen, dan zit het meestal niet in de panelen zelf, maar in een pan die bij het plaatsen is verschoven of gebroken, vaak bij een dakhaak. Ook een kabeldoorvoer die niet goed is afgewerkt, of blad dat onder de panelen blijft liggen, kan de oorzaak zijn. Zijn de panelen pas gelegd, meld het dan eerst bij je installateur.`,
  "schoorsteen-lekt-open-haard": `Komt er bij regen water in je open haard of kachel, dan komt het meestal van boven door de schoorsteen zelf: een open kanaal zonder kap, een kapotte afdekplaat op de kop, of stenen en voegen die water doorlaten. Wordt het vooral naast de schoorsteen nat, dan zit het vaker in het lood rond de voet.`,
  "vochtplek-plafond": `Een vochtplek in je plafond komt waarschijnlijk van het dak als hij op de bovenste verdieping zit, na regen groter wordt en weer opdroogt als het een paar dagen droog is. Blijft hij ook bij droog weer nat, of zit hij onder een badkamer, dan komt het water vaker van een leiding. Verspreide druppels na een koude nacht wijzen eerder op condens.`,
  "wat-kost-daklekkage-repareren": `Een daklek opsporen en dichtmaken kost bij mij ${inclBtw("daklekkage")}: ik zoek waar het water binnenkomt en maak het lek dicht. Is er meer nodig, zoals nieuw lood of een groter stuk dak, dan hoor je dat en de prijs voordat ik verder ga.`,
  "wat-kost-dakgoot-schoonmaken": `Een dakgoot schoonmaken kost bij mij ${inclBtw("goot_reinigen")} voor één goot, bijvoorbeeld alleen de voorgoot. Voor beide goten of een groter huis hoor je de prijs vooraf. Ik reken niet per meter: je hoort één prijs voor de hele klus.`,
  "wat-kost-een-dakdekker": `Een kleine reparatie, zoals een paar losse pannen vervangen of een nokvorst weer vastzetten, kost bij mij ${inclBtw("dakpan")}. Een daklek opsporen en dichtmaken kost ${inclBtw("daklekkage")}. Voor groter werk stuur je een foto, en je hoort de prijs voordat ik begin. Ik werk niet met een uurtarief.`,
  "daklekkage-verzekering": `Bij een daklek vergoedt de verzekering vaak de schade binnen, zoals aan een plafond, muur of vloer, maar niet altijd de reparatie van het dak zelf. Komt het lek door slijtage of achterstallig onderhoud, dan betaalt de verzekeraar die reparatie meestal niet. Wat jij vergoed krijgt, staat in je eigen polis. Maak foto's voordat er iets wordt opgeruimd of gerepareerd.`,
  "water-blijft-staan-op-plat-dak": `Een paar ondiepe plasjes die na een dag of twee droog weer weg zijn, zijn op een plat dak normaal. Staat er na een paar droge dagen nog steeds een plas, wordt hij steeds groter of staat hij bij een naad, de rand of de afvoer, dan loopt het water niet goed weg. Vaak zit de afvoer dan vol blad of grind, of is het dak op die plek wat gezakt.`,
  "vogels-onder-dakpannen": `Hoor je gekrabbel of getjilp onder je dakpannen, dan zitten er meestal mussen, spreeuwen of duiven onder de onderste rij pannen of onder je zonnepanelen. Dat is niet meteen erg, maar nesten kunnen pannen omhoog duwen en de goot vervuilen. Als de jongen uitgevlogen zijn, kan de opening dicht met kunststof vogelwering.`,
  "wat-kost-een-dakinspectie": `Een dakinspectie kost bij mij ${apkPrijs}: dat is de Dak-APK. Ik loop dan je hele dak na, van de pannen en de nokvorsten tot de goten, het lood en sporen van vocht, en je krijgt een rapport met foto's. Weet je al wat er kapot is en wil je alleen de prijs van de reparatie weten, stuur dan een foto via WhatsApp. Dat kost niets.`,
  "dakleer-repareren": `Dakleer op een schuur, garage of aanbouw lekt meestal eerst op één plek: bij een scheur, een blaas, een naad die loslaat of de rand langs de daktrim. Dan is een gerichte reparatie vaak genoeg. Is het dakleer overal bros, lekt het op meer plekken of is het hout eronder zacht geworden, dan is een nieuwe laag slimmer, en rot hout vervang ik dan mee als het nodig is.`,
  "dak-lekt-bij-hevige-regen": `Lekt je dak alleen bij een stortbui en blijft het bij gewone regen droog, dan zit er meestal geen gat in je dak. Er valt dan in korte tijd zoveel water dat het ergens niet snel genoeg weg kan, vaak in een goot of kilgoot met blad erin, in een bakgoot of bij de afvoer van een plat dak. Het water komt dan hoger te staan dan dat stuk dak aankan en zoekt een weg naar binnen.`,
  "lekkage-gedeelde-schoorsteen": `Lekt het naast een schoorsteen die op de muur tussen jou en de buren staat, dan kan het lek net zo goed aan de kant van de buren zitten, want onder de pannen loopt het water vaak opzij. Meestal zit het in het lood rond de voet van de schoorsteen of in de kop bovenop. Laat beide kanten nakijken en spreek met je buren vooraf af wie wat betaalt.`,
  "kilgoot-lekt": `Lekt het in een hoek van je zolder of plafond, onder de plek waar twee dakvlakken samenkomen, dan zit het meestal in de kilgoot. Vaak ligt er blad of mos in, waardoor het water bij een flinke bui over de rand onder de pannen door loopt. Dan is leegmaken vaak genoeg. Zit er een scheur of gaatje in het lood of zink van de kil, dan moet die plek hersteld worden.`,
};
