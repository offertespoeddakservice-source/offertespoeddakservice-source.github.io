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
];

// Extra vragen bij bestaande artikelen. artikelen.ts is te groot om nog te laten groeien, daarom staan nieuwe vragen hier.
// kennisbank/[slug].astro zet ze onder de vragen die al in het artikel staan (ook in het FAQ-schema).
export const FAQ_ERBIJ: Record<string, Artikel["faq"]> = {
  "daklekkage-verzekering": [
    { v: `Mijn verzekeraar wil een eigen dakdekker sturen. Mag ik toch zelf iemand kiezen?`, a: `Vaak wel, maar kijk eerst in je polis of bel je verzekeraar. Sommige verzekeraars werken met een eigen herstelservice. Kies je zelf een vakman, dan vergoeden ze soms minder, of willen ze eerst de offerte of foto's zien voordat je de reparatie laat doen. Druppelt het nu, dan mag je de schade in de regel eerst beperken, bijvoorbeeld door een open plek tijdelijk te laten afdekken. Bewaar de rekening en de foto's. Kies je mij, dan krijg je foto's van wat ik aantref en van de reparatie, met een korte omschrijving, die je naar je verzekeraar kunt sturen.` },
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
};

// Kort antwoord bovenaan een artikel: één of twee zinnen met het directe antwoord, voor Google en AI. Geen bedragen.
export const KORT_ANTWOORD: Record<string, string> = {
  "lekkage-bij-schoorsteen": `Lekt het naast de schoorsteen, dan zit het meestal in het lood rond de voet van de schoorsteen, dat na jaren scheurt, omkrult of loslaat. Soms komt het water door de kop van de schoorsteen of door het kanaal zelf naar binnen. Een foto vanaf de straat laat vaak al zien waar het zit.`,
  "daklekkage-opsporen": `De natte plek binnen zit zelden recht onder het lek. Water loopt eerst over de panlatten, de folie of de isolatie naar beneden en komt pas op het laagste punt naar binnen. Een lek vind je daarom door de weg van het water van binnen en van buiten terug te volgen, zonder onnodig sloopwerk.`,
  "dakgoot-lekt": `Een dakgoot lekt meestal bij een naad, een hoek, het eindstuk of de uitloop naar de regenpijp. Vaak is repareren genoeg: een zinken naad solderen, een kunststof verbinding vernieuwen of de goot van binnen coaten. Pas als de goot op veel plekken lek of doorgeroest is, is een nieuwe goot de betere keus.`,
  "plat-dak-vervangen-of-repareren": `Een lekkend plat dak kan vaak gerepareerd worden, zeker als het lek op één plek zit, zoals bij een naad, de rand of de afvoer. Vervangen is meestal pas slimmer als de dakbedekking op veel plekken los, gescheurd of versleten is, of als er na elke reparatie ergens anders een nieuw lek opduikt.`,
  "hoe-vaak-dakgoot-reinigen": `Voor de meeste huizen is één keer per jaar genoeg, het liefst in het najaar als het blad gevallen is. Staan er bomen vlak bij je huis, of heb je een bakgoot of kilgoot, dan is twee keer per jaar vaak slimmer.`,
  "dakraam-lekt": `Lekt het bij een dakraam in een pannendak, dan zit het meestal in het gootstuk of het lood rond het raam, of in de aansluiting op de pannen erboven. Lekt het alleen als het raam open of op de ventilatiestand staat, dan zit het vaak in het raam zelf en niet in het dak.`,
};
