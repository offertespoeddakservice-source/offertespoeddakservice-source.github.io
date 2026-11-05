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
];
