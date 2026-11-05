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
};
