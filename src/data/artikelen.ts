/**
 * Kennisbank-artikelen — cornerstone-content voor informatie-zoekers (longtail-SEO).
 * Elk artikel linkt intern naar een dienstpagina (interne links = SEO + conversie).
 */

import { prijsVan, inclBtw } from "./prijzen";
import { ARTIKELEN_EXTRA } from "./artikelen-extra";

// Alle bedragen incl. btw (src/data/prijzen.ts, stand 29-10-2026)
const GOTEN_PRIJS = inclBtw("goot_reinigen");
const kleinPrijs = inclBtw("dakpan");
const lekPrijs = inclBtw("daklekkage");
const panPrijs = inclBtw("dakpan");
const nokPrijs = inclBtw("nok_repareren");
const apkPrijs = prijsVan("apk");

export interface Sectie { kop: string; tekst: string[] }
export interface Artikel {
  slug: string;
  titel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  secties: Sectie[];
  dienst: { label: string; href: string };
  faq: { v: string; a: string }[];
  datum?: string;
  verborgen?: boolean; // true = artikel over iets wat ik niet doe: niet in Google en niet in de kennisbanklijst
}

export const ARTIKELEN: Artikel[] = [
  {
    slug: "daklekkage-opsporen",
    titel: "Daklekkage opsporen",
    h1: "Daklekkage opsporen: zo vind je de oorzaak (zonder sloopwerk)",
    metaTitle: "Daklekkage opsporen: aanpak en kosten | Spoed Dak Service",
    metaDescription:
      "Daklekkage opsporen? De natte plek zit zelden onder het echte lek. Dit zijn de meest voorkomende oorzaken en zo vind ik het lek zonder onnodig sloopwerk.",
    intro:
      "Een natte plek op je plafond betekent bijna nooit dat het lek daar precies boven zit. Water loopt via panlatten, isolatie en naden naar het laagste punt en komt daar pas naar binnen. Daarom is een lek opsporen vakwerk, hieronder hoe het werkt.",
    secties: [
      { kop: "Lekkage nu? Eerst dit doen", tekst: [
        "Zie je een natte plek op het plafond? Zet eerst een emmer neer en maak een foto van de plek, dat helpt bij de beoordeling en later bij je verzekering. Haal spullen weg die vochtgevoelig zijn en ga niet zelf het dak op.",
        'Kwam de lekkage tijdens of vlak na een storm, met losse pannen of zichtbare schade van buiten? Volg dan de aparte stappen in <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp en je verzekering</a>, daar staat ook wat je aan je verzekering moet doorgeven. Is er geen storm geweest en sijpelt het water al langer, dan lees je hieronder waar het vandaan komt.',
      ] },
      { kop: "De meest voorkomende oorzaken", tekst: [
        'Een gebroken of verschoven dakpan zie ik verreweg het vaakst. Daarna: gescheurd of losgelaten lood bij de schoorsteen of het dakraam, een verstopte of overlopende goot, en versleten kitwerk of naden bij een plat dak. Lekt het bij de schoorsteen? Lees dan <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.',
        "Bij platte daken zit het lek vaak bij een naad of opstand, terwijl het water verderop naar binnen komt, dat maakt opsporen lastiger.",
      ] },
      { kop: "Zo spoor je het op, zonder sloopwerk", tekst: [
        "Ik werk van buiten naar binnen: eerst het dak na op losse pannen, lood en naden, dan de zolder op natte sporen. Vaak is een gerichte controle genoeg en hoeft er niks opengebroken te worden.",
        "Lukt het visueel niet, dan zijn er technieken (water gericht aanbrengen, rook- of vochtmeting) om de exacte plek te vinden. Eerst de schade beperken, dan de oorzaak aanpakken.",
      ] },
      { kop: "Opsporen bij een plat dak", tekst: [
        `Op een plat dak ligt de dakbedekking op een houten of betonnen ondergrond, vaak met isolatie ertussen. Komt er water door een naad, dan loopt het daar onder de bedekking of over het dakbeschot verder tot het een plek vindt om naar binnen te gaan. Daarom begin ik niet boven de natte plek, maar bij de plekken waar een plat dak het vaakst lekt: de naden, de randen en de daktrim, de opstanden tegen de muur, de afvoer en de rand van een lichtkoepel.`,
        `Blijft er na een bui water staan, dan kijk ik extra goed naar de naden in en rond die plas. Lekt het langs de muur van je huis, lees dan <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>. Druppelt het bij een koepel, kijk dan bij <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>. Of repareren genoeg is, lees je in <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak: repareren of vervangen</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een punctuele reparatie kost ${lekPrijs}, inclusief materiaal. Bij spoed buiten kantooruren komt daar een toeslag bij. Je hoort altijd de prijs voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Moet er voor het opsporen iets opengebroken worden?", a: "Meestal niet. In de meeste gevallen vind ik het lek met een gerichte controle van buiten en op zolder, zonder sloopwerk." },
      { v: "Kun je vandaag nog komen?", a: "Bij spoed in de regio Den Bosch vaak wel. Bel of WhatsApp, dan hoor je meteen wanneer ik kan." },
      { v: "Wat kost het om een daklekkage te laten opsporen?", a: `Bij mij hoort het zoeken bij de reparatie. Ik kijk van buiten en op zolder waar het water binnenkomt, en je hoort één vaste prijs voor opsporen en dichten samen, ${lekPrijs}, inclusief materiaal. Is er toch extra meetwerk nodig, dan hoor je dat vooraf.` },
      { v: "Kan ik zelf zien waar mijn dak lekt?", a: "Een eind wel. Ga bij regen met een zaklamp op zolder kijken en volg vanaf de natte plek het hout en de folie omhoog. Vaak zie je een natte streep op een balk die naar de echte plek wijst. Van buiten kun je vanaf de straat kijken naar scheve pannen, lood dat los staat bij de schoorsteen of een goot die overloopt. Ga zelf niet het dak op." },
      { v: `Is lekdetectie met een warmtecamera nodig om een daklek te vinden?`, a: `Meestal niet. Een warmtecamera laat zien waar iets kouder of natter is, maar die plek zit vaak een eind van het echte lek, net als de natte plek op je plafond. Bij een pannendak vind ik het lek meestal door van buiten naar de pannen, het lood en de naden te kijken en op zolder het spoor van het water te volgen. Lukt dat niet, bijvoorbeeld bij een plat dak met isolatie eronder, dan kan gericht meetwerk helpen. Dan hoor je vooraf wat dat kost.` },
    ],
  },
  {
    slug: "lekkage-bij-schoorsteen",
    datum: "2026-10-19",
    titel: "Lekkage bij de schoorsteen",
    h1: "Lekkage bij de schoorsteen: waar het zit en wat eraan te doen is",
    metaTitle: "Schoorsteenlekkage: oorzaak en reparatie | Spoed Dak Service",
    metaDescription:
      "Lekkage bij de schoorsteen? Meestal zit het in het lood, de loodslabben of de kop van de schoorsteen. Zo herken je het en zo pak ik het aan, zonder onnodig sloopwerk.",
    intro:
      "Een natte plek naast het schoorsteenkanaal, of bruine kringen op zolder rond de schoorsteen: dat is een van de meest voorkomende lekkages die ik zie. Het goede nieuws: het zit meestal op een paar vaste plekken.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, leg handdoeken en maak een foto van de natte plek. Ga niet zelf het dak op. Stuur de foto via WhatsApp of bel me, of kijk bij <a href="/spoed/">spoed</a> wat je nu zelf kunt doen.',
      ] },
      { kop: "Waar het meestal zit", tekst: [
        "Bijna altijd bij het lood: de loodslabben rond de schoorsteen drogen uit, scheuren of komen los uit de muur. Daar loopt het water dan langs naar binnen.",
        "Andere plekken: de kop of afdekplaat bovenop de schoorsteen, pannen rond de schoorsteen die verschoven zijn, of scheuren in het metselwerk zelf. Zit het in het metselwerk, dan zeg ik dat eerlijk: daarvoor heb je een metselaar nodig.",
      ] },
      { kop: "Zo herken je het", tekst: [
        "Het lekt vaak vooral bij regen met wind uit één richting. Je ziet vocht op de muur of het plafond naast het kanaal, soms pas een paar uur na de bui. Vanaf de grond zie je soms lood dat los staat of omhoog wijst.",
      ] },
      { kop: "Aan welke kant van de schoorsteen zit het?", tekst: [
        `Kijk na een bui op zolder waar het hout of de muur rond de schoorsteen nat is. Dat zegt vaak al welk stuk lood het is.`,
        `Nat aan de onderkant, de kant van de goot: daar ligt een brede strook lood over de pannen, die het water van de schoorsteen af over het dak leidt. Krult die strook omhoog of zit er een scheur in een hoek, dan loopt het water eronder door.`,
        `Nat langs een zijkant: langs de zijkanten liggen kleine stukken lood die trapsgewijs in de schoorsteen zijn vastgezet. Zit er een stuk los, of is de bovenrand uit de schoorsteen gekomen, dan loopt het water langs de schoorsteen naar beneden.`,
        `Nat aan de bovenkant, de kant van de nok: achter de schoorsteen komt al het water van het dak erboven samen, en daar blijven ook blad en mos liggen. Ligt daar geen goed stuk lood dat het water om de schoorsteen heen leidt, of zit het vol vuil, dan staat het water er na een flinke bui tegen de schoorsteen aan en zoekt het een weg naar binnen.`,
        `Hoe je ziet dat lood op is, lees je in <a href="/kennisbank/lood-op-dak/">lood op je dak</a>. Komt het water in de haard zelf naar beneden, kijk dan bij <a href="/kennisbank/schoorsteen-lekt-open-haard/">water in je open haard</a>.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Hoe een lek bij de schoorsteen er bij jou in de buurt uitziet, lees je bij daklekkage in <a href="/werkgebied/waalwijk/daklekkage/">Waalwijk</a>, waar in Waspik veel oude schoorstenen staan die niet meer gebruikt worden, en in <a href="/werkgebied/uden/daklekkage/">Uden</a>, waar bij oudere huizen de schoorsteen soms is weggehaald en het daar jaren later kan gaan lekken. In <a href="/werkgebied/tilburg/">Tilburg</a> staan in het Goirke en Korvel lange rijen arbeiderswoningen met een schoorsteen per huis, en in het Villapark in <a href="/werkgebied/eindhoven/">Eindhoven</a> veel villa's met oud lood rond de schoorsteen. Rond het centrum van <a href="/werkgebied/oss/">Oss</a> staat op oude arbeiderswoningen nogal eens een schoorsteen zonder kap.`,
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk van buiten naar het lood, de pannen en de kop van de schoorsteen. Loszittend lood zet ik opnieuw goed vast of ik vervang de loodslabben, en verschoven pannen leg ik recht. Zie <a href="/diensten/lood-vervangen/">lood vervangen</a> en <a href="/diensten/dakreparatie/">dakreparatie</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er mis is: een stuk lood vastzetten is iets anders dan nieuwe loodslabben. Je hoort de vaste prijs vooraf. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: lood vervangen bij schoorsteen, muur of dakraam", href: "/diensten/lood-vervangen/" },
    faq: [
      { v: "Is lekkage bij de schoorsteen altijd het lood?", a: "Vaak wel, maar niet altijd. Het kan ook de kop van de schoorsteen zijn, een verschoven pan of het metselwerk. Daarom kijk ik eerst goed voordat ik iets doe." },
      { v: "Kan ik het lood zelf dichtkitten?", a: "Een likje kit houdt het soms even droog, maar meestal niet lang. Lood dat los zit moet goed vast of vervangen worden, anders lekt het bij de volgende flinke bui weer." },
      { v: "Kun je snel komen als het binnen druppelt?", a: "Bij spoed in de regio Den Bosch lukt dat vaak nog dezelfde dag. Bel of WhatsApp me met een foto." },
      { v: "Wat kost het om lekkage bij de schoorsteen te laten repareren?", a: `Zit het lek in een stuk lood dat los zit of in een pan naast de schoorsteen, dan valt het meestal onder een gewone lekreparatie: ${lekPrijs}, inclusief het opsporen en het materiaal. Moet het lood rondom de hele schoorsteen vernieuwd worden, dan is het meer werk. Ook dan hoor je vooraf de vaste prijs, voordat ik begin.` },
      { v: "Ik zie bruine vlekken op de muur van de schoorsteen, ook als het droog is. Is dat lekkage?", a: "Niet altijd. Komen de vlekken vooral als je stookt, en worden ze na een flinke bui niet groter, dan is het vaak condens in het kanaal. De rook koelt in een koude schoorsteen af, het vocht slaat aan de binnenkant neer en trekt samen met roet door de stenen naar buiten. Je herkent het aan bruine of gele vlekken die een beetje plakken en naar roet ruiken. Worden de vlekken juist groter na regen, ook als je niet stookt, dan komt er water van buiten bij, via het lood, de kop van de schoorsteen of een open kanaal zonder kap. Ik kijk dan bovenop naar de kap en het lood. Zit het in hoe je kachel op het kanaal is aangesloten, dan zeg ik eerlijk dat je daarvoor de vakman nodig hebt die hem heeft geplaatst. Stuur me gerust een foto van de vlekken via WhatsApp." },
    ],
  },
  {
    slug: "schoorsteen-lekt-open-haard",
    datum: "2026-10-27",
    titel: "Water in je open haard bij regen?",
    h1: "Schoorsteen lekt bij regen: water in je open haard of kachel",
    metaTitle: "Schoorsteen lekt: water in de open haard | Spoed Dak Service",
    metaDescription: "Water in je open haard of kachel bij regen, of bruine vlekken op de schoorsteen binnen? Zo zie je of het via de kop, het kanaal of het lood komt, en wat je doet.",
    intro: "Druppelt het bij een flinke bui in je open haard of kachel, of komen er natte, bruine plekken op de schoorsteen in de kamer? Dan komt het water meestal niet door het dak naast de schoorsteen, maar door de schoorsteen zelf. Hieronder lees je waar het vandaan komt en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een bak of emmer in de haard, haal hout en spullen weg en maak een foto van de natte plek. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "In de haard, of naast de schoorsteen?", tekst: [
        "Komt het water in de haard of de kachel zelf naar beneden, dan komt het meestal van bovenaf door het kanaal of door de kop van de schoorsteen.",
        'Zie je een natte plek op de muur of het plafond naast de schoorsteen, of op zolder rond het kanaal? Dan zit het vaker in het lood of de pannen eromheen. Lees dan <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.',
      ] },
      { kop: "Waar het water meestal binnenkomt", tekst: [
        "Een open kanaal zonder kap: bij harde regen met wind waait er dan water recht naar beneden. Een afdekplaat of kop bovenop de schoorsteen die gescheurd of los is: het water trekt dan in de stenen en loopt binnen langs het kanaal naar beneden. En stenen die na veel jaren poreus zijn geworden, vooral aan de kant waar de regen meestal vandaan komt.",
        "Zit het in de stenen zelf, dan zeg ik dat eerlijk: daarvoor heb je een metselaar nodig.",
      ] },
      { kop: "Bruine vlekken op de schoorsteen binnen", tekst: [
        "Water dat door de schoorsteen naar beneden trekt, neemt onderweg roet en teer mee. Daardoor zie je binnen vaak bruine of gele vlekken op de schoorsteenborst, soms met een vieze lucht. Overschilderen helpt niet zolang er nog water bij komt: de vlekken komen dan terug.",
      ] },
      { kop: "Druppelt het ook als het droog is?", tekst: [
        "Dan is het waarschijnlijk geen lek, maar condens. Dat zie ik vooral als er een ketel of kachel op een oud kanaal is aangesloten. Warme, vochtige lucht koelt in het kanaal af en het vocht druppelt naar beneden. Dat los je niet op het dak op. Laat dat nakijken door de installateur van je ketel of kachel.",
      ] },
      { kop: "Een schoorsteen die je deelt met de buren", tekst: [
        "Bij veel rijtjeshuizen en twee-onder-een-kappers staat de schoorsteen op de scheidingsmuur. Dan kan het lek ook aan de kant van de buren zitten, terwijl het bij jou binnenkomt. Overleg dan even met je buren, zodat de hele schoorsteen in één keer bekeken kan worden. Dat scheelt dubbel werk.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk van buiten naar de kop, de afdekplaat, het lood en de pannen rond de schoorsteen, en ik zeg eerlijk wat ik zie. Lood en pannen herstel ik zelf, zie <a href="/diensten/lood-vervangen/">lood vervangen</a> en <a href="/diensten/dakreparatie/">dakreparatie</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er mis is. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: lood vervangen bij schoorsteen, muur of dakraam", href: "/diensten/lood-vervangen/" },
    faq: [
      { v: "Is een beetje water in de open haard normaal?", a: "Bij een open kanaal zonder kap kan er bij harde regen met wind wat water naar beneden komen. Druppelt het bij elke bui, staan er plasjes in de haard of komen er bruine vlekken op de schoorsteen, dan is er meer aan de hand en laat je het beter nakijken." },
      { v: "Waar komen bruine vlekken op mijn schoorsteenborst vandaan?", a: "Meestal van water dat door de kop of de stenen naar binnen trekt en onderweg roet en teer meeneemt. Zolang er nog water bij komt, komen de vlekken na het schilderen terug." },
      { v: "Ik deel de schoorsteen met de buren, wat nu?", a: "Dan kan het lek ook aan hun kant van het dak zitten. Overleg even met je buren en laat de hele schoorsteen in één keer bekijken. Dat scheelt dubbel werk." },
      { v: "Kun je snel komen als het in de haard druppelt?", a: "Stuur me via WhatsApp een foto van de natte plek binnen en, als het lukt, van de schoorsteen buiten. Dan zie ik vaak al waar ik moet zoeken en hoor je wanneer ik kan komen." },
      { v: "Kun je een kap op mijn schoorsteen zetten?", a: "Ja, dat doe ik. Een kap of afdekplaat bovenop de schoorsteen houdt de regen uit het kanaal. Stook je nog op de haard of kachel, dan kies ik een kap die past bij een schoorsteen die nog in gebruik is. Je hoort vooraf de vaste prijs." },
      { v: "Kan ik de haard of kachel gewoon gebruiken als er bij regen water in komt?", a: "Liever niet, tot het is nagekeken. Water in het kanaal kan betekenen dat de kop van de schoorsteen of de binnenkant van het kanaal beschadigd is, en dat zie je van onderen niet. Laat eerst uitzoeken waar het water vandaan komt. Wil je daarna weer stoken, laat de schoorsteen dan ook vegen, zodat het kanaal weer schoon en vrij is. Stuur me gerust eerst een foto van de natte plek via WhatsApp." },
    ],
  },
  {
    slug: "lekkage-gedeelde-schoorsteen",
    datum: "2026-11-02",
    titel: "Lekt de schoorsteen die je deelt met de buren?",
    h1: "Lekkage bij een gedeelde schoorsteen: waar het zit en hoe je het met de buren regelt",
    metaTitle: "Gedeelde schoorsteen lekt: wat nu? | Spoed Dak Service",
    metaDescription: "Lekt het bij de schoorsteen op de muur tussen jou en de buren? Zo zie je aan welke kant het lek zit, hoe je de kosten samen regelt en wat ik eraan doe.",
    intro: "Bij veel rijtjeshuizen en twee-onder-een-kappers staat de schoorsteen precies op de muur tussen jou en de buren. Er zitten dan vaak twee kanalen in, één voor elk huis. Druppelt het bij jou naast de schoorsteen, dan kan het lek net zo goed aan de kant van de buren zitten. Hieronder lees je hoe je dat uitzoekt, wat er bij een gedeelde schoorsteen vaak misgaat en hoe je het samen regelt.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: ['Zet een emmer onder de druppel, haal spullen weg en maak een foto van de natte plek. Ga niet zelf het dak op, ook niet aan de kant van de buren. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.'] },
      { kop: "Aan welke kant zit het lek?", tekst: [
        "Water loopt onder de pannen en langs de stenen vaak een stuk opzij voordat het binnenkomt. Een natte plek aan jouw kant van de muur zegt dus niet zeker dat het lek ook aan jouw kant zit.",
        "Vraag de buren of zij op zolder ook iets zien rond de schoorsteen. Is het bij hen droog en bij jou nat, dan zit het vaker in het lood of de pannen aan jouw kant. Is het bij allebei nat, dan zit het vaak bovenin: in de kop of de afdekplaat van de schoorsteen, die van jullie samen is.",
        "Let ook op wanneer het lekt. Gebeurt het vooral bij wind uit één richting, dan zit het vaak aan de kant van de schoorsteen waar die wind op staat, ook als dat de kant van de buren is.",
      ] },
      { kop: "Waar het bij een gedeelde schoorsteen vaak misgaat", tekst: [
        "Op de grens. Is één van de twee daken ooit vernieuwd, dan is het lood aan die kant vaak opnieuw gelegd en aan de andere kant niet. Midden op de schoorsteen sluit het nieuwe lood dan niet altijd goed aan op het oude, en daar kan het water achter lopen.",
        "Bij een kanaal dat niet meer gebruikt wordt. Heeft één van jullie de kachel weggehaald, dan staat dat kanaal soms open zonder kap. De regen valt erin en trekt in de stenen, en omdat de kanalen naast elkaar in dezelfde schoorsteen zitten, kan het vocht ook bij de ander naar binnen komen.",
        "Bij de kop. De afdekplaat of het metselwerk bovenop is van jullie allebei. Zit daar een scheur in, dan merken vaak beide huizen het.",
      ] },
      { kop: "Wie betaalt de reparatie?", tekst: [
        "Een schoorsteen op de muur tussen twee huizen is meestal van de twee eigenaren samen. Gaat het om de kop, de afdekplaat of het lood op de grens, dan ligt het voor de hand om de kosten te delen. Zit het lek duidelijk in een pan of een stuk lood aan één kant, dan betaalt die kant het vaak zelf. Wat er bij jullie precies geldt, kan in de koopakte staan of in de afspraken van de VvE. Huur je, meld het lek dan bij je verhuurder.",
        'Spreek vooraf met de buren af hoe jullie het verdelen, voordat er gewerkt wordt. Dat scheelt gedoe achteraf. Voor de schade binnen kijk je naar je eigen verzekering. Hoe dat zit als het lek bij de buren zit, lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        "Ik bekijk de schoorsteen het liefst van twee kanten, dus ook vanaf het dakvlak van de buren. Daar heb ik hun toestemming voor nodig, want ik ga niet zomaar op hun dak staan. Vraag dat dus even voordat ik kom.",
        'Daarna zeg ik eerlijk waar het lek zit en wat er nodig is: een stuk lood weer vastzetten of vervangen, een pan naast de schoorsteen rechtleggen, of een kap of afdekplaat op het kanaal dat niet meer gebruikt wordt. Zit het in het metselwerk zelf, dan heb je een metselaar nodig. Ik maak foto\'s van wat ik zie, zodat jullie allebei weten waar het om gaat. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een losse loodslab of een pan naast de schoorsteen herstellen is meestal een gewone lekreparatie: ${lekPrijs}, inclusief het opsporen en het materiaal. Nieuw lood rond de hele schoorsteen of een kap op een kanaal is een andere klus. Je hoort vooraf de vaste prijs, zodat jullie die samen kunnen verdelen voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (lood en pannen)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Het lekt bij mij, maar de schoorsteen staat ook op het dak van de buren. Moet ik het hen vertellen?", a: "Ja, doe dat meteen. Het lek kan aan hun kant zitten, en voor een goede reparatie moet ik vaak ook hun kant van de schoorsteen kunnen bekijken. Vraag of zij op zolder ook een natte plek zien. Dat helpt bij het zoeken." },
      { v: "De buren willen niet meebetalen. Wat nu?", a: "Laat eerst vaststellen waar het lek zit. Met foto's van de plek wordt het gesprek met de buren een stuk makkelijker. Zit het duidelijk aan jouw kant, dan kun je het zelf laten repareren. Zit het in de kop of op de grens en komen jullie er samen niet uit, dan kun je advies vragen bij het Juridisch Loket of bij je rechtsbijstandsverzekering, als je die hebt." },
      { v: "De buren gebruiken hun kanaal niet meer, ik stook nog wel. Kan er dan op één kanaal een kap?", a: "Ja. Elk kanaal heeft zijn eigen opening bovenop de schoorsteen. Op het kanaal dat niet meer gebruikt wordt, kan een kap of afdekplaat die het kanaal nog wel laat ademen. Jouw kanaal krijgt een kap die past bij een schoorsteen die nog in gebruik is, of blijft open. Laat wel goed vaststellen welk kanaal van wie is, zodat er niet per ongeluk een kanaal wordt afgedekt dat nog in gebruik is." },
      { v: "Hoe kan ik zelf zien of er iets mis is met de schoorsteen?", a: "Kijk vanaf de overkant van de straat of uit een raam, en zoom in met de camera van je telefoon. Let op lood dat van de stenen af staat, een kap die scheef staat, scheuren in de bovenkant en pannen rond de schoorsteen die anders liggen dan de rest. Ga niet zelf het dak op. Stuur me de foto via WhatsApp, dan zeg ik wat ik zie." },
    ],
  },
  {
    slug: "condens-of-lekkage-op-zolder",
    datum: "2026-10-20",
    titel: "Condens of lekkage op zolder?",
    h1: "Condens of lekkage op zolder? Zo zie je het verschil",
    metaTitle: "Condens of lekkage op zolder? | Spoed Dak Service",
    metaDescription:
      "Druppels of natte plekken op zolder? Vaak is het condens en geen lek. Zo zie je het verschil, wat je zelf kunt doen en wanneer je me beter even belt.",
    intro:
      "Natte plekken of druppels op zolder, en je denkt meteen: mijn dak lekt. Soms klopt dat. Maar in de herfst en winter is het ook vaak condens: vocht uit je eigen huis dat tegen het koude dak neerslaat. Het verschil zien scheelt je een hoop zorgen, en soms een onnodige reparatie.",
    secties: [
      { kop: "Hoe condens op zolder ontstaat", tekst: [
        "Warme lucht in huis neemt vocht mee: van douchen, koken, wasgoed en gewoon ademen. Komt die lucht op zolder tegen de koude binnenkant van het dak, dan slaat het vocht neer als druppels. Vooral na koude, heldere nachten en bij vriesweer zie je dat.",
      ] },
      { kop: "Zo herken je condens", tekst: [
        "Druppels of een natte waas verspreid over een groot deel van het dakbeschot of de folie, niet op één plek. Het komt ook op droge dagen, vaak 's ochtends na een koude nacht. Soms zie je zwarte stipjes of schimmel op het hout, en het ruikt er muf.",
      ] },
      { kop: "Zo herken je een lek", tekst: [
        "Een lek zit meestal op één plek en komt na regen, vaak bij wind uit een bepaalde richting. Je ziet een natte plek of een kring bij de schoorsteen, een dakraam, een doorvoer of vlak onder de nok.",
        'Let wel: de natte plek zit zelden precies onder het echte lek. Hoe ik dat opspoor lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
        `Druppelt het precies onder een glazen dakpan, dan kan het allebei zijn, want op het koude glas slaat condens als eerste neer. Lees dan <a href="/kennisbank/glazen-dakpan-lekt/">glazen dakpan lekt</a>.`,
      ] },
      { kop: "Wat je zelf tegen condens doet", tekst: [
        "Hang geen was te drogen op zolder. Kijk of de afzuiging van je badkamer echt naar buiten gaat en niet op zolder uitkomt, dat komt voor. Zet de zolder af en toe even open zodat het vocht weg kan, en houd het zolderluik dicht als je doucht of kookt.",
      ] },
      { kop: "Condens na het isoleren van je dak", tekst: [
        "Heb je je dak of zolder laten isoleren en zie je daarna ineens druppels of natte plekken? Dat komt vaker voor dan je denkt. Aan de warme kant van de isolatie hoort een folie die de vochtige lucht uit huis tegenhoudt. Zit daar een naad open, of zit de folie aan de verkeerde kant, dan komt de warme lucht achter de isolatie tegen het koude dakbeschot. Daar slaat het vocht neer, en dat zie je pas als het al een tijd speelt.",
        "Een huis met goede isolatie en nieuwe kozijnen is ook luchtdichter dan vroeger. Het vocht van douchen en koken blijft dan langer binnen hangen. Daarom is goed ventileren na het isoleren extra belangrijk. Zie je het kort na het isoleren, neem dan eerst contact op met wie het werk heeft gedaan.",
      ] },
      { kop: `Na een lek: is de isolatie nat geworden?`, tekst: [
        `Was het wel een lek, en ligt er isolatie in je schuine dak of op de zoldervloer? Dan kan die isolatie nat zijn geworden. Natte isolatie is een koude plek, en daar slaat in de winter sneller vocht op neer. Dan zie je soms weer druppels op dezelfde plek, ook als het dak allang dicht is. Of drogen genoeg is of dat het eruit moet, lees je in <a href="/kennisbank/isolatie-nat-na-lekkage/">isolatie nat na een lekkage</a>.`,
      ] },
      { kop: "Twijfel je? Stuur een foto", tekst: [
        'Maak een foto van de natte plek en van het dakbeschot eromheen en stuur die via WhatsApp. Vaak kan ik dan al zeggen of het condens is of een lek. Druppelt het echt binnen na regen, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen.',
        'Komt de condens elk jaar terug, dan kan het aan de ventilatie of de isolatie liggen. Vraag me gerust om even mee te kijken, dan zoeken we samen waar het vocht vandaan komt.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Is condens op zolder erg?", a: "Een beetje condens op een koude ochtend is niet meteen erg. Blijft het hout lang nat of zie je schimmel, dan wil je er wel wat aan doen. Vocht dat lang blijft zitten is slecht voor het hout en de isolatie." },
      { v: "Hoe weet ik zeker of mijn dak lekt?", a: "Kijk wanneer het nat wordt. Alleen na regen en op één plek wijst op een lek. Ook op droge, koude dagen en verspreid over het dak wijst op condens. Twijfel je, stuur dan een foto via WhatsApp." },
      { v: "Kun je ook helpen bij condens?", a: "Ik kijk of het echt condens is en geen lek, en waar het vocht vandaan komt. Soms is beter ventileren genoeg, soms ligt het aan de isolatie. Je hoort eerlijk wat er nodig is, en wat niet." },
      { v: "Kan mijn zolder vochtiger worden nadat het dak is geïsoleerd?", a: "Dat kan. Na het isoleren blijft de warmte beter binnen, maar ook het vocht. Zit de folie aan de warme kant niet goed dicht, dan slaat dat vocht neer tegen het koude dak achter de isolatie. Ventileer goed en laat het nakijken als je kort na het isoleren druppels of schimmel ziet." },
      { v: "Er zit ijs of rijp aan de binnenkant van mijn dak. Is dat een lek?", a: "Meestal niet. Bij strenge vorst bevriest het vocht uit je huis tegen de koude pannen of het dakbeschot, en dan zie je op zolder een witte laag rijp of ijs. Gaat het dooien, dan smelt dat en druppelt het, en dat lijkt op een lek. Zit het verspreid over een groot deel van het dak, dan is het condens. Zet de zolder af en toe even open, houd het zolderluik dicht en kijk of er warme, vochtige lucht naar boven komt, bijvoorbeeld van de badkamer. Ligt er na een sneeuwbui sneeuw op één plek op zolder, dan is het eerder stuifsneeuw die onder een pan door is gewaaid. Lees dan het artikel over lekkage bij sneeuw of vorst." },
    ],
  },
  {
    slug: "isolatie-nat-na-lekkage",
    datum: "2026-11-01",
    titel: "Isolatie nat na een lekkage?",
    h1: "Isolatie nat geworden door een daklek: drogen of vervangen?",
    metaTitle: "Natte isolatie na daklekkage: wat nu? | Spoed Dak Service",
    metaDescription: `Isolatie nat geworden door een daklek? Zo zie je of drogen genoeg is of dat het eruit moet, en waarom het lek eerst dicht moet.`,
    intro: `Na een lek kijk je eerst naar het plafond of de vloer. Maar vaak is ook de isolatie in het schuine dak of op de zoldervloer nat geworden, en die zie je niet zomaar. Natte isolatie houdt minder warmte binnen, droogt slecht en kan gaan schimmelen. Hieronder lees je hoe je ziet hoe erg het is, en wanneer drogen genoeg is.`,
    secties: [
      { kop: "Eerst het lek dicht", tekst: [
        `Drogen heeft pas zin als er geen nieuw water meer bij komt. Lekt het nog, zet dan een emmer neer, haal spullen weg en ga niet zelf het dak op. Wat je meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>. Hoe ik het lek vind zonder onnodig sloopwerk, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: "Zo zie je dat de isolatie nat is", tekst: [
        `Zie je op zolder een natte plek op het dakbeschot of de folie, dan is de isolatie daarachter vaak ook nat. Andere tekenen zijn een plek die kouder aanvoelt dan de rest, een muffe lucht, dekens of platen die zijn ingezakt of donker verkleurd, en een bruine kring op het plafond onder de zoldervloer. Zit de isolatie achter een betimmering of gipsplaat, dan zie je vaak alleen een vlek of bladderende verf aan de voorkant.`,
      ] },
      { kop: "Glaswol en steenwol", tekst: [
        `Dekens en platen van glaswol of steenwol zuigen water op. Zolang ze nat zijn, isoleren ze slecht, en ze worden zwaar en zakken in. Is maar een klein stuk kort nat geweest, dan droogt het vaak weer als er lucht bij kan. Is het door en door nat, ingezakt of gaat het muf ruiken, dan is vervangen meestal beter. Ingezakte wol komt zelden terug in zijn oude vorm, en dan zit er een kier waar de kou doorheen komt.`,
      ] },
      { kop: "Harde isolatieplaten", tekst: [
        `Harde platen van pir of pur nemen zelf weinig water op. Het water loopt er eerder langs of blijft erachter staan, tegen het dakbeschot of op de folie. Daar zie je het niet, en daar kan het hout gaan schimmelen of rotten. Bij zulke platen kijk ik dus vooral wat er achter en onder de plaat gebeurt.`,
      ] },
      { kop: "Waarom laten zitten geen goed idee is", tekst: [
        `Natte isolatie houdt het vocht lang vast tegen het hout van je dak. Dat hout droogt dan niet, en na een tijd zie je schimmel of zacht hout. Een natte plek in de isolatie is ook een koude plek, en daar slaat in de winter weer condens op neer. Dan lijkt het alsof het blijft lekken, terwijl het lek allang dicht is. Hoe je condens van een lek onderscheidt, lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        `Eerst zoek ik waar het water binnenkomt en maak ik dat dicht. Daarna kijk ik op zolder hoe ver de isolatie nat is en zeg ik eerlijk of drogen genoeg is. Isoleren doe ik zelf niet. Moet er een groter stuk uit, laat dat dan doen door een isolatiebedrijf dat de folie aan de warme kant weer netjes dichtmaakt.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een lek opsporen en dichten kost meestal ${lekPrijs}, inclusief materiaal. Je hoort vooraf de vaste prijs, voordat ik begin. Kwam het lek plotseling, bijvoorbeeld door een storm, dan valt schade aan de isolatie soms onder je opstalverzekering. Maak foto's voordat je iets weghaalt. Meer lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Droogt natte isolatie vanzelf?", a: `Een klein stuk dat maar kort nat is geweest wel, als er lucht bij kan. Zet de zolder een paar dagen open en haal spullen weg die tegen de natte plek staan. Is het door en door nat, ingezakt of gaat het ruiken, dan droogt het slecht en kun je het beter laten vervangen.` },
      { v: "Kan ik natte glaswol op zolder zelf weghalen?", a: `Een klein stuk op de zoldervloer kan, met handschoenen, een stofmasker en lange mouwen, want glaswol prikt. Doe het pas als het lek dicht is. Zit de isolatie in het schuine dak achter folie of platen, laat het dan liever zien. Dan zit alles daarna weer goed dicht en komt er geen vochtige lucht achter de isolatie.` },
      { v: "Moet na een lek mijn hele dak opnieuw geïsoleerd worden?", a: `Meestal niet. Vaak is maar een klein stuk nat geworden, rond de plek waar het water binnenkwam. Dat stuk kijk ik na. Is de rest droog en zit het goed, dan blijft het gewoon liggen.` },
      { v: "Kan natte isolatie gaan schimmelen?", a: `Ja, als het lang nat blijft, en dan vooral het hout en de folie eromheen. Je ruikt het vaak eerder dan je het ziet. Laat het daarom niet maanden zitten.` },
    ],
  },
  {
    slug: "vochtplek-plafond",
    datum: "2026-10-22",
    titel: "Vochtplek in het plafond?",
    h1: "Vochtplek of lekkage in je plafond: komt het van het dak?",
    metaTitle: "Vochtplek in plafond: dak of leiding? | Spoed Dak Service",
    metaDescription:
      "Een natte plek of bruine kring in je plafond? Zo zie je of het van het dak komt, van een leiding of van condens, en wat je meteen doet als het druppelt.",
    intro:
      "Een bruine kring of een natte plek in je plafond: dan denk je al snel aan het dak. Soms klopt dat. Maar het kan ook een leiding zijn, de badkamer erboven of condens. Hieronder lees je hoe je het verschil ziet, zodat je meteen de goede vakman belt.",
    secties: [
      { kop: "Druppelt het nu? Eerst dit", tekst: [
        'Zet een emmer onder de druppel en leg er een doek in, dan hoor je het getik niet de hele nacht. Haal spullen weg die nat kunnen worden. Bolt het plafond op en zit er duidelijk water achter, blijf er dan niet onder staan. Maak een foto van de plek. Denk je dat het van het dak komt, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je verder meteen doet.',
      ] },
      { kop: "Zo zie je dat het van het dak komt", tekst: [
        'De plek zit op de bovenste verdieping of op zolder. Hij wordt groter of natter na regen en droogt op als het een paar dagen droog is. Vaak zit hij bij een buitenmuur, onder de schoorsteen, bij een dakraam of onder de nok. Lekt het vooral bij regen met harde wind, lees dan <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
        'De natte plek zit zelden precies onder het echte lek. Het water loopt eerst over de folie, de panlatten of een balk voordat het naar binnen komt. Hoe ik het lek vind zonder onnodig sloopwerk, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
      ] },
      { kop: "Zo zie je dat het een leiding is", tekst: [
        "De plek wordt ook groter als het al dagen droog is. Hij zit onder een badkamer, toilet of keuken, of op een verdieping met nog een verdieping erboven. Draait je watermeter terwijl alle kranen dicht zijn, dan lekt er waarschijnlijk een leiding. Dan heb je een loodgieter nodig en geen dakdekker. Lekt het flink, draai dan de hoofdkraan dicht.",
      ] },
      { kop: "Of is het condens?", tekst: [
        'Een vochtige waas of zwarte puntjes in de hoeken van het badkamerplafond zijn meestal condens van het douchen. Op zolder zie je condens als druppels verspreid over het hele dakbeschot, vaak na een koude nacht. Het verschil met een lek lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.',
      ] },
      { kop: "Woon je in een rijtjeshuis?", tekst: [
        "Dan kan het water ook via de buren komen: een goot, schoorsteen of plat dak dat over meerdere huizen doorloopt. Vraag de buren of zij ook iets zien. Zit het lek aan hun kant van het dak, dan moet het daar gemaakt worden, en dat is goed om vooraf te weten. Huur je je huis, meld het lek dan eerst bij je verhuurder.",
      ] },
      { kop: "Zit de plek in je aanbouw of onder een lichtkoepel?", tekst: [
        'Een natte plek in het plafond van een aanbouw komt vaak niet door het platte dak zelf, maar door de plek waar dat dak tegen de muur van je huis zit. Hoe je dat herkent, lees je in <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>. Druppelt het rond of onder een lichtkoepel, dan zit het vaak langs de rand van de koepel, of is het condens aan de binnenkant. Het verschil lees je in <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van waar het lek zit en hoeveel werk het is. Je hoort de vaste prijs vooraf, voordat ik begin. Wat een reparatie meestal kost, lees je in <a href="/kennisbank/wat-kost-daklekkage-repareren/">wat kost daklekkage repareren</a>. Of je verzekering meebetaalt, staat in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Hoe weet ik of een vochtplek in het plafond van het dak komt?", a: "Kijk wanneer de plek groter wordt. Alleen na regen, en op de bovenste verdieping of bij de schoorsteen of een dakraam: dan wijst het op het dak. Groeit hij ook bij droog weer, dan is het eerder een leiding." },
      { v: "Moet het plafond open om het lek te vinden?", a: "Meestal niet. Bij een daklek kijk ik eerst van buiten en op zolder. Vaak vind ik het zo, zonder iets open te breken." },
      { v: "Is een natte plek in het plafond spoed?", a: "Druppelt het of wordt de plek snel groter, dan wel. Hoe langer het lekt, hoe meer schade aan het plafond, de isolatie en het hout. Bel of WhatsApp me met een foto. Is het een oude, droge kring, dan kan het meestal even wachten, maar laat het wel nakijken." },
      { v: "Kun je ook helpen als het een leiding is?", a: "Nee, daarvoor heb je een loodgieter nodig. Twijfel je, stuur dan een foto via WhatsApp. Dan zeg ik eerlijk of het van het dak komt of niet." },
      { v: "Kan ik over een vochtplek in het plafond heen schilderen?", a: "Pas als de oorzaak is opgelost en het plafond helemaal droog is. Dat duurt na een lek vaak een paar weken. Schilder je eerder, dan komt de kring meestal terug. Gebruik een verf die vlekken afdekt, want door gewone muurverf schemert een bruine kring vaak weer heen." },
      { v: "Er zit nog een verdieping boven de natte plek. Kan het dan toch van het dak komen?", a: "Soms wel. Water van een overlopende goot, een lekkende bakgoot of de aansluiting van een aanbouw kan binnen in de buitenmuur naar beneden zakken en een verdieping lager naar buiten komen. Zit de plek tegen een buitenmuur en wordt hij alleen na regen nat, kijk dan ook naar de goot en de gevel erboven. Zit hij midden in de kamer, onder een badkamer of keuken, dan is een leiding veel waarschijnlijker." },
      { v: `Hoe zie ik of een oude vlek in mijn plafond weer groter wordt?`, a: `Trek met potlood een dun lijntje langs de rand van de vlek en schrijf de datum erbij. Maak er ook een foto van. Kijk na de volgende flinke bui of de vlek over het lijntje heen is gegroeid of natter aanvoelt. Is hij groter of nat, dan lekt het nog en is het slim om snel te laten kijken. Blijft hij precies binnen het lijntje en droog, dan is het waarschijnlijk een oude kring van een lek dat al gemaakt is. Laat het dan wel een keer nakijken, en stuur me gerust de foto's via WhatsApp.` },
    ],
  },
  {
    slug: "plafond-bolt-op-door-lekkage",
    datum: "2026-10-31",
    titel: "Plafond bolt op door lekkage?",
    h1: "Plafond bolt op of hangt door na een lekkage: wat doe je nu?",
    metaTitle: "Plafond bolt op door lekkage: wat nu? | Spoed Dak Service",
    metaDescription:
      `Bolt je plafond op of hangt het door na een lek? Zo houd je het veilig, zo zie je of het water van het dak komt en dit doe je tot de reparatie.`,
    intro:
      `Een natte plek in je plafond is vervelend. Bolt het plafond op of gaat het doorhangen, dan zit er water achter dat ergens heen moet, en dan wil je snel weten wat je moet doen. Hieronder lees je hoe je het veilig houdt, waar het water vandaan komt en wat er daarna gebeurt.`,
    secties: [
      { kop: "Eerst veilig", tekst: [
        `Ga niet onder de bolling staan en haal mensen, huisdieren en spullen eronder weg. Zit er een lamp of een rookmelder in of vlak bij de natte plek, zet dan in de meterkast de groep van die kamer uit. Water en stroom gaan niet samen.`,
        `Zet een emmer of een bak onder de plek en leg er handdoeken omheen. Maak foto's van het plafond en van je spullen, die heb je later nodig voor je verzekering.`,
      ] },
      { kop: "Een gaatje prikken of niet?", tekst: [
        `Je leest vaak dat je een klein gaatje in de bolling kunt prikken, zodat het water in een emmer loopt in plaats van het plafond mee te trekken. Bij een kleine bolling in een gestuct plafond kan dat helpen. Doe het alleen als je er veilig bij kunt, met de stroom van die kamer eraf, en sta er niet recht onder.`,
        `Hangt het plafond al ver door, zie je scheuren of hoor je het kraken, blijf er dan weg en prik niet. Dan kan er zo een stuk naar beneden komen.`,
      ] },
      { kop: "Komt het van het dak?", tekst: [
        `Zit de bolling op de bovenste verdieping of onder de zolder, en kwam hij na regen? Dan komt het water meestal van het dak, de goot of de aansluiting bij de schoorsteen of een dakraam. Zit er nog een verdieping boven, of is het al dagen droog, dan is het eerder een leiding of de badkamer erboven. Hoe je dat verschil ziet, lees je in <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a>.`,
        `Zit de bolling in het plafond van een aanbouw met een plat dak, dan komt het water vaak een eind verderop binnen dan waar het lek zit. Zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: "Waarom het water zich daar ophoopt", tekst: [
        `Water van een lek loopt over de folie, de isolatie of een balk tot het een laag punt vindt. Boven een gestuct plafond of gipsplaten blijft het dan liggen, en het plafond zuigt zich vol. Zo kan een klein lek in een paar uur een flinke bolling geven, terwijl het echte lek een eind verderop zit.`,
      ] },
      { kop: "Is het spoed?", tekst: [
        `Ja. Een plafond dat opbolt, betekent dat er al flink wat water binnen is, en bij de volgende bui komt er meer bij. Bel of WhatsApp me met een foto van het plafond en, als dat veilig kan, van het dak vanaf de straat. Ik kijk eerst waar het water binnenkomt en maak dat dicht, zodat het niet erger wordt. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "En daarna: het plafond zelf", tekst: [
        `Als het lek dicht is, moet het plafond eerst goed drogen. Dat duurt vaak een paar weken. Is het stucwerk losgekomen of zijn de gipsplaten zacht geworden, dan moet dat stuk vervangen worden. Dat is werk voor een stukadoor of een klusbedrijf. Ik maak het dak dicht en zeg je eerlijk wat ik aan de binnenkant zie.`,
      ] },
      { kop: "Je verzekering", tekst: [
        `Schade aan je plafond en je spullen valt vaak onder je opstal- of inboedelverzekering, zeker als het lek plotseling ontstond, bijvoorbeeld door een storm. Komt het door slijtage, dan wordt de reparatie van het dak meestal niet vergoed, maar de schade binnen soms wel. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving erbij. Meer lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Moet ik het lek eerst opsporen en dan dichten, dan kost dat meestal ${lekPrijs}, inclusief materiaal. Is het 's avonds, 's nachts of in het weekend, dan komt er een toeslag bij. Je hoort de vaste prijs vooraf, voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Moet ik in een opbollend plafond prikken?", a: `Alleen bij een kleine bolling in een gestuct plafond, als je er veilig bij kunt, met de stroom van die kamer uit en een emmer eronder. Hangt het plafond ver door, zie je scheuren of hoor je het kraken, blijf er dan weg. Dan kan er een stuk naar beneden komen.` },
      { v: "Kan een plafond naar beneden komen door lekkage?", a: `Ja, als er lang genoeg water op blijft staan. Gipsplaten en stucwerk worden zwaar en zacht van water. Ga daarom niet onder een bolling staan en laat het lek zo snel mogelijk dichtmaken.` },
      { v: "Is een opbollend plafond spoed?", a: `Ja. Er zit dan al flink wat water achter, en bij de volgende bui komt er meer bij. Bel of WhatsApp me met een foto, dan hoor je wanneer ik kan komen.` },
      { v: "Wie maakt het plafond weer netjes?", a: `Eerst moet het lek dicht en het plafond droog zijn. Daarna herstelt een stukadoor of klusbedrijf het plafond. Ik maak het dak dicht en zeg eerlijk wat ik aan de binnenkant zie.` },
    ],
  },
  {
    slug: "water-uit-lamp-plafond",
    datum: "2026-11-01",
    titel: "Water uit je lamp of spotjes?",
    h1: "Water uit de lamp of spotjes in je plafond: wat doe je nu?",
    metaTitle: "Water uit lamp of spotjes in plafond | Spoed Dak Service",
    metaDescription:
      `Water uit een lamp of spotje in je plafond? Eerst de stroom eraf, dan uitzoeken of het van het dak of een leiding komt. Zo pak je het veilig aan.`,
    intro:
      `Druppelt er water uit een lamp, een spotje of een rookmelder in je plafond? Dan heb je twee problemen tegelijk: water en stroom. Eerst maak je het veilig, daarna zoek je uit waar het water vandaan komt. Hieronder lees je hoe je dat doet, en wanneer je mij belt en wanneer een loodgieter.`,
    secties: [
      { kop: "Eerst dit: de stroom eraf", tekst: [
        `Raak de lamp, het spotje en de schakelaar niet aan. Zet in de meterkast de groep uit waar die lamp op zit. Weet je niet welke groep het is, zet dan de hoofdschakelaar om. Zet daarna een emmer onder de druppels, uit de buurt van stekkers en snoeren, en haal spullen weg die nat kunnen worden. Maak een foto van de plek.`,
        `Laat die groep uit staan, ook als het niet meer druppelt. Er kan nog water in de lampdoos of in de trafo van een spotje zitten. Laat een installateur kijken of alles droog en heel is voordat de stroom weer aangaat.`,
      ] },
      { kop: "Waarom het water juist uit de lamp komt", tekst: [
        `Water dat boven je plafond komt, blijft op de plaat of het stucwerk liggen en zoekt een uitweg. Het gat van een lamp of spotje is zo'n uitweg. Daarom komt het daar naar buiten, terwijl het echte lek vaak een eind verderop zit. Hoe ik het lek vind zonder onnodig sloopwerk, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
        `Bolt het plafond rond de lamp op, ga er dan niet onder staan. Wat je dan doet, lees je in <a href="/kennisbank/plafond-bolt-op-door-lekkage/">plafond bolt op door lekkage</a>.`,
      ] },
      { kop: "Komt het van het dak of van een leiding?", tekst: [
        `Kijk wat er boven die lamp zit. Is het de bovenste verdieping, met de zolder of het dak erboven, en druppelt het alleen tijdens of vlak na een bui? Dan komt het water meestal van het dak, de goot of een doorvoer door het dak.`,
        `Zit er een badkamer, toilet of keuken boven, en druppelt het ook als het al dagen droog is? Dan is het vaker een leiding of een lekkende douche. Daarvoor heb je een loodgieter nodig en geen dakdekker. Lekt het flink, draai dan ook de hoofdkraan dicht. Meer over het verschil lees je in <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a>.`,
        `Zitten de spotjes in het plafond van een aanbouw met een plat dak, dan komt het water vaak binnen bij een naad, langs de rand of waar het platte dak tegen de muur van je huis zit. Zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: "Spotjes in de badkamer: soms is het condens", tekst: [
        `Zitten er spotjes in het plafond van je badkamer, met een koude zolder erboven, dan kan de warme, vochtige lucht van het douchen door de gaten van de spotjes omhoog trekken. Tegen het koude dak slaat die neer, en dat water druppelt later terug langs de spotjes. Je ziet het vooral na het douchen op koude dagen, ook als het droog weer is. Dat los je niet op het dak op. Hoe je condens van een lek onderscheidt, lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        `Komt het water van het dak, dan zoek ik buiten en op zolder waar het binnenkomt en maak ik dat dicht. Lukt een nette reparatie niet meteen, dan dek ik het eerst af, zodat het binnen droog blijft. Aan de elektra kom ik niet: de lamp of het spotje laat je nakijken door een installateur. Zie ook <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een lek opsporen en dichten kost meestal ${lekPrijs}, inclusief materiaal. Is het 's avonds, 's nachts of in het weekend, dan komt er een toeslag bij. Je hoort de vaste prijs vooraf, voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Mag ik de lamp weer aanzetten als het niet meer druppelt?", a: `Liever niet zelf. Ook als het droog lijkt, kan er nog water in de lampdoos of in de trafo van een spotje zitten. Laat een installateur kijken voordat je de groep weer aanzet.` },
      { v: "Is water uit een lamp spoed?", a: `Ja. Zet de groep uit en bel of app me met een foto van de plek, zeker als het nog regent. Ik zeg eerlijk of het van het dak lijkt te komen en wanneer ik kan komen. Lijkt het een leiding, bel dan een loodgieter.` },
      { v: "Kan het ook condens zijn?", a: `Soms, vooral bij spotjes in een badkamerplafond met een koude zolder erboven. Druppelt het vooral na het douchen op koude dagen, ook als het droog is, dan is het vaker condens dan een lek. Druppelt het alleen bij regen, dan wijst het op het dak.` },
      { v: "Betaalt de verzekering de schade?", a: `Dat hangt af van je polis en van de oorzaak. Schade binnen, aan je plafond of je spullen, wordt vaak vergoed. De reparatie van het dak zelf niet altijd, zeker niet bij slijtage. Maak foto's van de plek en de lamp voordat je iets opruimt. Meer lees je in het artikel over daklekkage en je verzekering.` },
    ],
  },
  {
    slug: `natte-plek-bovenin-muur`,
    datum: `2026-11-03`,
    titel: `Natte plek bovenin de muur?`,
    h1: `Natte plek bovenin de muur, vlak onder het plafond: komt het van het dak?`,
    metaTitle: `Vochtplek bovenin de muur: dak of gevel? | Spoed Dak Service`,
    metaDescription: `Vocht bovenin je muur, net onder het plafond? Vaak komt het van de goot of de dakrand, soms van de gevel zelf. Zo zie je waar het zit en wat je nu doet.`,
    intro: `Een natte plek bovenin de muur, net onder het plafond, lijkt op een daklek. Toch komt het water daar lang niet altijd van de pannen. Vaak zit het bij de goot of de rand van het dak erboven, en soms in de gevel zelf. Hieronder lees je hoe je dat uit elkaar houdt en wat je doet tot het gemaakt is.`,
    secties: [
      { kop: `Waar de plek zit, zegt veel`, tekst: [
        `Zit de natte plek bovenin een buitenmuur, over een flink stuk breedte en vlak onder het plafond? Dan komt het water meestal van de goot of van de onderste rij pannen erboven. Een goot die overloopt, of water dat achter de goot langs de gevel loopt, trekt precies daar de muur in. Lees ook <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
        `Zit hij in een hoek van de kamer, waar twee buitenmuren samenkomen? Kijk dan buiten of daar een hoek van de goot of een regenpijp zit. Een hoekstuk dat lekt of een uitloop die los zit, geeft vaak een natte plek in precies die hoek. Hoe je een lekkende goot herkent, staat in <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
        `Zit hij boven een raam? Dan kan het water van de goot erboven komen, maar het kan ook langs het kozijn naar binnen lopen. Heb je een erker of een luifel met een eigen dakje, lees dan <a href="/kennisbank/erker-lekt/">erker of luifel lekt</a>.`,
        `Zit hij op de muur tussen jou en de buren, of op de muur waar de schoorsteen tegenaan staat? Dan komt het water vaker van het dak zelf. Kijk bij <a href="/kennisbank/lekkage-muur-buren/">lekkage langs de muur met de buren</a> of bij <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.`,
        `Heb je geen goot die aan de voorkant hangt, maar een goot die in de rand van het dak is weggewerkt? Dan zie je buiten bijna niets, en komt het water bij een lek juist binnen. Zie <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Bij welk weer wordt het nat?`, tekst: [
        `Na elke flinke bui, ook als het nauwelijks waait: denk dan eerst aan de goot. Die zit vol, hangt niet goed of lekt bij een naad.`,
        `Alleen bij regen met harde wind, en vooral aan de kant waar de wind op staat: dan kan het water onder de pannen langs de rand van het dak door waaien. Het kan ook regen zijn die hard tegen de gevel slaat en door de stenen trekt. Lees ook <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
        `Na sneeuw of bij dooi: dan is het vaak smeltwater dat achter ijs in de goot blijft staan en terugloopt onder de onderste pannen. Zie <a href="/kennisbank/dak-lekt-bij-sneeuw-of-vorst/">dak lekt bij sneeuw of vorst</a>.`,
        `Ook na dagen zonder regen, vaak met zwarte puntjes in een koude hoek: dan is het meestal condens. Vocht uit de lucht in huis slaat neer op de koudste plek van de kamer, en dat is vaak bovenin een buitenmuur. Daar helpt ventileren en de kamer wat warmer houden, niet werk aan het dak.`,
      ] },
      { kop: `Zo kijk je buiten waar het vandaan komt`, tekst: [
        `Ga tijdens een flinke bui naar buiten en kijk naar de goot boven de natte plek. Komt er water over de voorkant, druppelt het op één plek uit de goot, of loopt het achter de goot langs de muur? Dan zit het vrijwel zeker daar.`,
        `Kijk ook naar de gevel. Een donkere of groene streep vlak onder de dakrand wijst meestal op water van de goot. Is de muur over een groot stuk donker en nat, ook een eind lager, dan trekt de regen eerder door de stenen of de voegen. Dat is werk voor een gevelspecialist en niet voor mij, en dat zeg ik dan eerlijk.`,
        `Ga niet zelf de ladder op om in de goot te kijken, zeker niet als het nat is of waait. Een foto vanaf de overkant van de straat of uit een raam boven is genoeg.`,
      ] },
      { kop: `Wat je nu doet`, tekst: [
        `Maak na elke bui een foto van de natte plek, steeds vanaf dezelfde plek in de kamer. Dan zie je meteen of hij groter wordt. Schrijf op bij wat voor weer het nat werd, en uit welke hoek de wind kwam.`,
        `Zet kasten en een bed een stukje van de muur af, zodat die kan drogen en er geen schimmel achter komt. Loopt het water langs de muur, of zit de natte plek bij een stopcontact of lamp, zet dan de stroom van die groep uit en kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik begin buiten, bij de goot en de rand van het dak boven de natte plek. Zit de goot vol, dan maak ik hem leeg. Hangt hij te laag of scheef, of lekt een naad of hoek, dan herstel ik dat. Komt het van de onderste rij pannen of van het lood, dan maak ik dat dicht. Zie ik dat het water door de gevel zelf komt, dan hoor je dat voordat ik iets doe, zodat je niet betaalt voor werk dat niet helpt. Zie ook <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a> en <a href="/diensten/goten-reinigen/">goten reinigen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Zit de goot alleen vol, dan is leegmaken genoeg. Voor één goot, bijvoorbeeld alleen de voorgoot, is dat ${GOTEN_PRIJS}. Moet er een naad, een hoek of de hoogte van de goot worden hersteld, of zit het in de pannen of het lood, dan hoor je vooraf de vaste prijs, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Komt een natte plek bovenin de muur van het dak?`, a: `Soms, maar vaker van de goot of de onderste rij pannen vlak erboven. Een goot die overloopt of water dat achter de goot langs loopt, trekt precies daar de muur in. Kijk tijdens een bui buiten naar de goot boven de plek, en stuur me een foto van binnen en van buiten. Dan zeg ik eerlijk waar ik denk dat het zit.` },
      { v: `Kan het van de goot komen als die er van beneden schoon uitziet?`, a: `Ja. Van beneden zie je de bodem van de goot niet. Blad en gruis blijven vaak bij de uitloop naar de regenpijp hangen, en dan loopt de goot op één plek over terwijl hij verder leeg lijkt. Ook kan de goot een stukje te laag hangen, zodat het water van de pannen erachter langs valt. Kijk daarom tijdens een bui, niet op een droge dag. Stuur me een foto van die kant van het huis, dan zie ik vaak al waar het misgaat.` },
      { v: `Er zit schimmel bovenin de muur. Komt dat door een lek?`, a: `Niet altijd. Zwarte puntjes in een koude hoek, terwijl de muur verder niet nat aanvoelt, zijn vaak condens: vocht uit de lucht in huis dat neerslaat op de koudste plek. Dat zie je veel in slaapkamers en op zolder. Is de plek echt nat en groeit hij na een bui, dan komt er water van buiten. Bij condens helpen een raam op een kier, het rooster open en de kamer wat warmer houden.` },
      { v: `Is een natte plek bovenin de muur spoed?`, a: `Meestal niet, maar laat het niet de hele winter zitten, want een natte muur droogt in de winter slecht. Loopt het water langs de muur, of zit de plek bij een stopcontact of lamp, dan wel: zet de stroom van die groep uit en bel of app me. Is de plek alleen vochtig, dan kan het vaak een paar dagen wachten.` },
    ],
  },
  {
    slug: "dak-lekt-bij-hevige-regen",
    datum: "2026-10-28",
    titel: "Dak lekt alleen bij een stortbui?",
    h1: "Dak lekt alleen bij hevige regen of een stortbui: waar zit het?",
    metaTitle: "Dak lekt bij hevige regen of stortbui? | Spoed Dak Service",
    metaDescription:
      "Blijft je dak droog bij een gewone bui, maar lekt het bij een stortbui? Dan kan het water ergens niet snel genoeg weg. Dit zijn de plekken waar het meestal zit.",
    intro:
      "Bij een gewone bui is er niets aan de hand, maar na een flinke stortbui zie je ineens een natte plek. Dan zit er meestal geen gat in je dak. Er valt in korte tijd zoveel water dat het ergens niet snel genoeg weg kan. Het komt dan hoger te staan dan waar dat stuk dak voor gemaakt is, en zoekt een weg naar binnen. Hieronder lees je waar dat meestal gebeurt en wat je eraan doet.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, haal spullen weg en maak een foto van de natte plek. Ga niet het dak op en zet geen ladder tegen de goot zolang het zo hard regent. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Stortbui of harde wind?", tekst: [
        'Kijk eerst wat voor bui het was. Viel de regen vooral recht naar beneden, heel veel in korte tijd, lees dan hieronder verder. Lekt het vooral als het hard waait, dan blaast de wind de regen onder de pannen door. Dat is een ander verhaal, en dat lees je in <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
      ] },
      { kop: "Waar het meestal zit", tekst: [
        'Een goot die het niet bijhoudt. Ligt er wat blad in de goot of bij de uitloop naar de regenpijp, dan gaat het bij een gewone bui nog net goed. Bij een stortbui loopt hij over. Bij een gewone goot zie je dat buiten langs de gevel. Bij een bakgoot, die in de rand van het dak ligt, loopt het water naar binnen. Lees ook <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a> en <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.',
        'De kilgoot, in de hoek waar twee dakvlakken samenkomen. Daar komt het water van twee kanten tegelijk. Ligt er blad of mos in, dan komt het bij een stortbui hoger dan de rand van het lood of zink en loopt het opzij onder de pannen door. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.',
        'Een plat dak met een afvoer die vol blad of vuil zit. Het water blijft dan staan en komt bij een flinke bui tot over de opstaande rand of bij een naad. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
        'Een dakraam. Boven het raam blijft soms blad liggen, en dan stroomt het water bij een stortbui over de aansluiting heen naar binnen. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.',
      ] },
      { kop: "Waarom het alleen bij een stortbui lekt", tekst: [
        "Een dak is gemaakt om water snel af te voeren. Pannen, lood en goten doen hun werk zolang het water weg kan. Zit er ergens een kleine belemmering, zoals wat blad, mos of een goot die een beetje doorhangt, dan merk je daar bij een gewone bui niets van. Valt er in korte tijd heel veel regen, dan is zo'n kleine belemmering net genoeg.",
      ] },
      { kop: "Wat je zelf kunt doen", tekst: [
        "Schrijf op wanneer het lekte en hoe hard het regende. Kijk bij de volgende flinke bui vanuit huis of vanaf de stoep naar je goot: gutst het water over de voorkant, dan zit hij vol of kan de uitloop het niet aan. Ga niet zelf het dak op of op een ladder staan, zeker niet als alles nat is.",
      ] },
      { kop: "Hoe ik het oplos", tekst: [
        'Vaak is het geen grote klus. Ik maak de goot, de kil of de afvoer leeg en kijk of het water weer vrij weg kan. Daarna kijk ik of er toch iets lek is, zoals een naad in de goot, een scheur in het lood of een pan die net niet goed ligt. Zit de goot alleen vol, dan is <a href="/diensten/goten-reinigen/">goten reinigen</a> genoeg. Is er wel iets kapot, zie dan <a href="/diensten/daklekkage/">daklekkage</a>. Je hoort vooraf de vaste prijs.',
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Zit alleen de goot vol, dan is het gewoon goten reinigen: ${GOTEN_PRIJS} voor één goot, en voor beide goten of een groter huis hoor je de prijs vooraf. Moet er ook een kilgoot of de afvoer van een plat dak leeg, dan kan ik die meteen meenemen, en ook dan hoor je vooraf wat het kost.`,
        `Zit er toch iets lek, zoals een naad in de goot, een scheur in het lood of een pan die niet goed ligt, dan is het meestal een gerichte lekreparatie: ${lekPrijs}, inclusief materiaal. Je hoort de vaste prijs vooraf, voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Waarom lekt mijn dak alleen bij een stortbui?", a: "Omdat het water dan niet snel genoeg weg kan. Een goot, kilgoot of afvoer die een beetje vol zit, gaat bij een gewone bui nog goed, maar loopt bij een stortbui over. Het water zoekt dan een weg naar binnen." },
      { v: "Is er iets kapot als het alleen bij een stortbui lekt?", a: "Niet altijd. Vaak zit er iets vol en is leegmaken genoeg. Maar soms zit er ook een kleine scheur of een losse naad die je bij gewone regen niet merkt. Daarom kijk ik allebei na." },
      { v: "Hoe zie ik of mijn goot overloopt of lek is?", a: "Gutst het water bij een flinke bui over de voorkant van de goot, dan zit hij meestal vol. Druppelt het op één vaste plek, ook nog als de bui voorbij is, dan is hij daar waarschijnlijk lek." },
      { v: "Kun je snel komen als het binnen nat wordt?", a: "Bel of WhatsApp me met een foto van de natte plek binnen en, als dat veilig kan, een foto van de goot of het dak vanaf de straat. Dan hoor je wanneer ik kan komen." },
      { v: "Bij een stortbui wordt de muur bovenin nat, langs het kozijn van een raam. Komt dat van het dak?", a: "Vaak niet van de pannen, maar van de goot erboven. Loopt de goot bij een stortbui over, of druipt het water achter de goot langs, dan trekt het in de muur en komt het binnen bovenin, vaak net boven of naast een kozijn. Bij een bakgoot, die in de rand van het dak ligt, gebeurt dat nog sneller. Kijk bij de volgende flinke bui vanaf de straat naar de goot boven dat raam. Stuur me een foto van de natte plek binnen en van de goot buiten, dan zie ik vaak al waar het zit." },
    ],
  },
  {
    slug: "dak-lekt-bij-sneeuw-of-vorst",
    datum: "2026-10-30",
    titel: "Lekt je dak bij sneeuw of vorst?",
    h1: "Dak lekt bij sneeuw of vorst: stuifsneeuw, dooi en ijs",
    metaTitle: "Dak lekt bij sneeuw of dooi: oorzaken | Spoed Dak Service",
    metaDescription:
      "Natte plek op zolder na sneeuw of bij dooi? Vaak is het stuifsneeuw onder de pannen of smeltwater dat niet weg kan. Zo zie je het en dit doe je eraan.",
    intro:
      "In de winter lekt een dak soms op een moment dat je niet verwacht: niet tijdens een bui, maar een dag na het sneeuwen of als het gaat dooien. Dat ligt dan meestal niet aan een kapotte pan, maar aan sneeuw of ijs dat ergens komt waar het niet hoort. Hieronder lees je hoe dat komt en wat je zelf kunt doen.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        `Zet een emmer of een bak onder de druppels, leg een handdoek neer en maak een foto van de natte plek. Ga bij sneeuw of ijs niet zelf het dak of de ladder op: een besneeuwde pan of een bevroren sport is spiegelglad. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "Stuifsneeuw: sneeuw die onder de pannen door waait", tekst: [
        `Bij fijne, droge sneeuw en harde wind waait de sneeuw door de kleine kieren tussen de pannen en onder de nok door naar binnen. Op zolder ligt dan een laagje sneeuw op de folie, de isolatie of de vloer. Zolang het vriest, merk je daar niets van. Gaat het dooien, dan smelt die sneeuw en lijkt het of je dak op veel plekken tegelijk lekt.`,
        `Je herkent het doordat het nat is op plekken waar het bij regen droog blijft, vaak onder de nok of aan de kant waar de wind op stond. Bij oudere daken zonder folie of houten beschot onder de pannen komt er meer sneeuw binnen dan bij een nieuwer dak.`,
        `Ga na een sneeuwbui met harde wind even op zolder kijken. Ligt er sneeuw, schep of veeg die dan weg voordat het gaat dooien. Dat scheelt een hoop water op je plafond.`,
      ] },
      { kop: "Smeltwater dat niet weg kan", tekst: [
        `Ligt er een dikke laag sneeuw op het dak en zit de goot vol of is hij bevroren, dan kan het smeltwater nergens heen. Het blijft onderaan het dak staan, achter een rand van ijs in of boven de goot, en loopt dan terug onder de onderste pannen door naar binnen. Binnen zie je dat als een natte plek bovenin de muur, net onder de dakrand, of op het plafond langs die muur.`,
        `Een goot die voor de winter leeg is en goed afloopt naar de regenpijp, scheelt hier veel. Wat ijs met de goot zelf doet, lees je in <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: "Sneeuw op een plat dak", tekst: [
        `Op een plat dak blijft sneeuw lang liggen. Zit de afvoer vol blad of is hij bevroren, dan staat het smeltwater als een plas op het dak. Ligt die plas tegen een naad, de rand van een lichtkoepel of de aansluiting op de muur, dan zoekt het water daar een weg naar binnen. Zie ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a> en <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.`,
      ] },
      { kop: "Of is het condens?", tekst: [
        `Is het buiten koud en droog, en zie je druppels aan de folie of aan de punten van spijkers onder het dak? Dan is het vaak condens: warme, vochtige lucht uit het huis die tegen het koude dak afkoelt. Dat lijkt op een lek, maar de oplossing is anders. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        `Klim niet op het dak om sneeuw weg te scheppen, en hak geen ijs uit de goot. Daarmee breek je zo een pan of trek je de goot uit de beugels. Giet ook geen heet water in een bevroren goot of regenpijp: verderop bevriest het meteen weer.`,
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        `Ik kijk eerst of het water van stuifsneeuw komt, van smeltwater dat niet weg kan, of van een echt lek. Bij stuifsneeuw kijk ik vooral naar de nok. Liggen de nokvorsten los of sluiten ze niet meer goed aan, dan zet ik ze weer goed vast. Een ondervorst onder de nokvorsten houdt regen, wind en fijne sneeuw beter buiten. Meer daarover lees je bij <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Lekt het aan de onderkant van het dak, dan maak ik de goot leeg en kijk ik of hij goed afloopt. Zit er toch een kapotte pan tussen, dan vervang ik die, zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>. Bij een oud dak zonder folie onder de pannen kun je stuifsneeuw niet helemaal tegenhouden. Dat zeg ik je dan eerlijk.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een losse nokvorst of een paar pannen weer vastzetten valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet ik een lek eerst opsporen en dan dichten, dan is het meestal ${lekPrijs}, inclusief materiaal. Je hoort de vaste prijs vooraf, voordat ik begin.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Kan sneeuw door een dak heen komen?", a: "Ja. Fijne stuifsneeuw kan bij harde wind tussen de pannen en onder de nok door waaien. Op zolder ligt dan een laagje sneeuw, en als dat smelt, lijkt het of je dak lekt. Veeg of schep het weg voordat het gaat dooien." },
      { v: "Moet ik de sneeuw van mijn dak laten halen?", a: "Van een gewoon pannendak meestal niet, dat kan een laag sneeuw in de regel prima hebben. Op een plat dak met een verstopte afvoer, of op een licht dak van een veranda of schuur, kan veel natte sneeuw wel zwaar worden. Ga er zelf niet op staan. Twijfel je, stuur dan een foto via WhatsApp." },
      { v: "Valt lekkage door sneeuw onder mijn verzekering?", a: `Dat verschilt per polis. Schade door een plotselinge gebeurtenis valt soms onder je opstalverzekering, maar water dat binnenkomt door achterstallig onderhoud meestal niet. Maak foto's van de schade en kijk in je polis. Meer lees je in het artikel over daklekkage en je verzekering.` },
      { v: "Is een lek bij dooi spoed?", a: "Druppelt het binnen of wordt een plafond nat en bol, bel of app me dan meteen. Is het een beetje smeltwater van stuifsneeuw op zolder, dan kun je dat vaak zelf opruimen. Stuur een foto, dan zeg ik eerlijk wat het is." },
      { v: `Er hangen ijspegels aan mijn dakgoot. Is dat erg?`, a: `Een paar kleine ijspegels zijn niet erg. Grote ijspegels betekenen vaak dat het smeltwater niet weg kan, omdat de goot vol zit of bevroren is, en dan kan het water terug onder de pannen lopen. Hangen ze boven de stoep, je voordeur of het terras, houd daar dan mensen weg, want ze kunnen naar beneden vallen. Sla ze niet zelf vanaf een ladder los, want dan trek je zo de goot uit de beugels. Zie je daarna een natte plek bovenin de muur, stuur me dan een foto via WhatsApp.` },
    ],
  },
  {
    slug: "nat-achter-knieschot",
    datum: "2026-10-31",
    titel: "Nat achter het knieschot?",
    h1: "Nat achter het knieschot op zolder: komt het van het dak?",
    metaTitle: "Nat achter knieschot op zolder: oorzaken | Spoed Dak Service",
    metaDescription:
      "Vocht, een natte vloer of schimmel achter het knieschot op zolder? Vaak komt het van de onderkant van het dak, soms van de goot of van condens. Zo zie je het.",
    intro:
      "Het knieschot is het lage wandje op zolder, op de plek waar het schuine dak bijna op de vloer komt. Daarachter zit een donkere hoek waar je zelden kijkt. Juist daar komt water van de onderkant van het dak het eerst binnen. Ruikt het er muf, is de vloer nat of zit er schimmel op het luikje, dan wil je weten waar het vandaan komt. Hieronder lees je waar het meestal zit en wat je eraan doet.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        `Haal spullen achter het knieschot weg, leg een handdoek neer of zet er een bak onder, en maak foto's van de natte plek, het hout erboven en de vloer. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "Waarom het juist daar nat wordt", tekst: [
        `Achter het knieschot ligt de onderkant van je dak: de onderste rijen pannen, vlak boven de goot. Water dat ergens hoger onder de pannen komt, loopt over de folie of het dakbeschot naar beneden en komt helemaal onderaan naar buiten. Daarom zit de natte plek achter het knieschot vaak een flink stuk lager dan het echte lek.`,
      ] },
      { kop: "Waar het meestal vandaan komt", tekst: [
        `De onderste rij pannen. Bij harde wind en regen waait het water daar onder de pannen door, zeker als een pan een stukje scheef ligt of als vogels er een nest onder hebben gemaakt.`,
        `De folie onder de pannen loopt niet tot in de goot. Bij oudere daken is die folie onderaan soms ingescheurd of te kort. Het water dat over de folie naar beneden loopt, druppelt dan vlak voor de goot naar binnen in plaats van erin.`,
        `De goot. Zit hij vol of hangt hij te laag, dan kan het water bij een flinke bui terug onder de pannen lopen of achter de goot langs. Lees ook <a href="/kennisbank/water-achter-dakgoot/">water loopt achter de dakgoot langs</a>.`,
        `Iets hoger op het dak: een dakraam, de schoorsteen of een kilgoot. Daar komt het water binnen, en het loopt naar beneden tot achter het knieschot. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a> en <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: "Of is het condens?", tekst: [
        `Achter het knieschot is het koud en komt weinig lucht. Vocht uit huis slaat daar makkelijk neer, vooral in de winter. Dan zie je geen druppel op één plek, maar een vochtige waas of zwarte stipjes schimmel op een groter stuk hout, ook als het dagen droog is geweest. Hoe je het verschil ziet, lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: "Zelf een beetje uitzoeken", tekst: [
        `Kijk na een flinke bui met een zaklamp achter het knieschot. Is het hout of de vloer alleen nat na regen, en vooral bij wind uit één richting, dan komt het meestal van buiten. Volg met de lamp het natte spoor over het hout naar boven, dan zie je vaak al uit welke richting het water komt. Maak er foto's van, daarmee kan ik gericht zoeken.`,
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        `Ik begin binnen, bij het natte spoor, en kijk daarna buiten naar de onderste rijen pannen, de goot en wat er hoger op het dak zit. Ligt een pan scheef, dan leg ik hem terug. Is de folie onderaan kapot of te kort, dan zorg ik dat het water weer in de goot loopt. Ik maak alleen open wat nodig is. Zie <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een scheve pan terugleggen of een paar pannen vastzetten valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet de onderkant van het dak over een groter stuk open om de folie te herstellen, dan is het meer werk. Je hoort de vaste prijs vooraf. Zie ook <a href="/kennisbank/wat-kost-daklekkage-repareren/">wat kost daklekkage repareren</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Wat is een knieschot?", a: "Het lage wandje op zolder, op de plek waar het schuine dak bijna op de vloer komt. Erachter zit een smalle, lage ruimte langs de onderkant van het dak. Vaak zit er een luikje in, zodat je erachter kunt kijken." },
      { v: "Waarom ruikt het muf achter mijn knieschot?", a: "Daar komt weinig lucht en is het koud. Is het hout of de vloer er vaak vochtig, door een lek of door condens, dan gaat het muf ruiken en kan er schimmel komen. Kijk na een bui met een zaklamp of er een nat spoor is. Is alles een beetje vochtig, ook op droge dagen, dan is het vaker condens." },
      { v: "Is een natte plek achter het knieschot spoed?", a: "Druppelt het, of staat er water op de vloer na een bui, bel of app me dan met een foto. Een oude, droge kring kan meestal wachten tot overdag op een werkdag. Twijfel je, stuur dan een foto via WhatsApp, dan zeg ik eerlijk of het vandaag moet." },
      { v: "Moet het knieschot eruit om het lek te vinden?", a: "Meestal niet. Via het luikje zie ik vaak al genoeg, en daarna kijk ik buiten op het dak. Zit er geen luikje in, dan maak ik in overleg een klein stukje open, alleen als het echt niet anders kan." },
    ],
  },
  {
    slug: "dakraam-lekt",
    datum: "2026-10-20",
    titel: "Dakraam lekt?",
    h1: "Dakraam lekt: waar het meestal zit en wat eraan te doen is",
    metaTitle: "Lekkage dakraam: waarom je dakraam lekt | Spoed Dak Service",
    metaDescription:
      "Lekt je dakraam bij regen? Meestal zit het niet in het glas, maar in de aansluiting met het dak: gootstukken, lood of verschoven pannen. Zo herken je het.",
    intro:
      "Water langs je dakraam is vervelend, want het loopt vaak meteen langs de muur of het plafond naar beneden. Het goede nieuws: het zit meestal niet in het raam zelf, maar in hoe het raam op het dak aansluit. En dat is vaak goed te verhelpen.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, leg een handdoek op de vensterbank en maak een foto van de plek waar het water binnenkomt. Ga niet zelf het dak op. Bel of WhatsApp me, of kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen.',
      ] },
      { kop: "Waar het meestal zit", tekst: [
        "Rond een dakraam zit een aansluiting die het water om het raam heen leidt: gootstukken, lood of loodvervanger, en de pannen eromheen. Raakt daar iets los, schuift een pan op of hoopt blad zich op boven het raam, dan loopt het water onder de aansluiting door naar binnen.",
        "Soms zit het in de rubbers of de dichting van het raam zelf. Dan zeg ik eerlijk wat er nodig is en of ik dat voor je kan oplossen.",
      ] },
      { kop: "Lekt het alleen bij een stortbui of bij harde wind?", tekst: [
        'Lekt je dakraam alleen bij een flinke stortbui, dan kan het water boven het raam vaak niet snel genoeg weg. Ligt er blad of mos tegen de bovenkant, dan stroomt het over het gootstuk heen naar binnen. Meer daarover lees je in <a href="/kennisbank/dak-lekt-bij-hevige-regen/">dak lekt bij een stortbui</a>.',
        'Lekt het vooral als het hard waait, dan blaast de wind de regen langs de zijkant van het raam onder het gootstuk of een pan door. Dan kijk ik vooral naar de zijkanten van het raam. Zie ook <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
      ] },
      { kop: `Waar zie je het water als eerste?`, tekst: [
        `Kijk bij de volgende bui waar je het water als eerste ziet. Dat hoeft niet de plek van het lek te zijn, want water loopt vaak een stuk langs het kozijn of de aftimmering naar beneden voordat het zichtbaar wordt. Maar het helpt wel bij het zoeken.`,
        `Zie je het eerst bovenin, bij de bovenkant van het kozijn of op het plafond erboven, dan kan het water boven het raam binnenkomen, bijvoorbeeld bij een pan die niet goed ligt of bij blad dat boven het raam blijft liggen. Wordt het vooral nat langs één zijkant, zeker bij wind uit die richting, dan kan het in de aansluiting aan die kant zitten.`,
        `Is alleen de vensterbank onder het raam nat en is het glas aan de binnenkant beslagen, dan is het vaak condens die langs het glas naar beneden druipt. Daarover lees je hieronder meer.`,
        `Maak een foto van de plek waar je het water ziet en, als het lukt, van het raam van buiten vanaf de straat. Stuur die via WhatsApp, dan weet ik waar ik als eerste moet kijken.`,
      ] },
      { kop: "Lekkage of condens?", tekst: [
        'Druppels aan de binnenkant van het glas op een koude ochtend zijn meestal condens, geen lek. Komt het water alleen na regen, en vooral bij wind, dan is het een lek. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.',
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk van buiten naar de aansluiting, het lood en de pannen rond het raam, en haal blad en vuil weg dat zich boven het raam ophoopt. Losse delen zet ik weer goed vast, verschoven pannen leg ik recht en waar nodig vervang ik het lood. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er los zit en hoeveel werk de aansluiting is. Je hoort de vaste prijs vooraf. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (lood en pannen)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Kan ik een lekkend dakraam zelf dichtkitten?", a: "Een likje kit houdt het soms even droog, maar het lost de oorzaak meestal niet op. Kit op de verkeerde plek kan het water zelfs de verkeerde kant op sturen. Laat liever kijken waar het echt binnenkomt." },
      { v: "Moet het hele dakraam vervangen worden?", a: "Meestal niet. Vaak zit het in de aansluiting met het dak, en die is te herstellen. Is het raam zelf op, dan zeg ik dat eerlijk." },
      { v: "Kun je snel komen als het binnen druppelt?", a: "Bij spoed in de regio Den Bosch lukt dat vaak nog dezelfde dag. Bel of WhatsApp me met een foto." },
      { v: "Er ligt blad boven mijn dakraam, is dat erg?", a: "Een beetje blad is niet meteen erg. Maar blad en mos boven het raam houden het water tegen, en bij een flinke bui loopt het dan over de aansluiting heen naar binnen. Laat het weghalen als je het ziet liggen. Hang niet zelf uit het open raam om erbij te komen, op een schuin dak is dat gevaarlijk." },
    ],
  },
  {
    slug: "lichtkoepel-lekt",
    datum: "2026-10-29",
    titel: "Lichtkoepel lekt?",
    h1: "Lichtkoepel lekt: langs de rand, door de koepel of is het condens?",
    metaTitle: "Lichtkoepel lekt: oorzaken en oplossing | Spoed Dak Service",
    metaDescription:
      "Druppelt het onder je lichtkoepel? Meestal zit het lek in de aansluiting met het platte dak, niet in de koepel zelf. Zo zie je waar het zit en wat je doet.",
    intro:
      "Een lichtkoepel staat op een opstand, een rand die boven het platte dak uitsteekt. Rond die opstand moet de dakbedekking netjes aansluiten. Druppelt het onder de koepel, dan denk je al snel dat de koepel zelf kapot is. Meestal zit het lek ernaast, in die aansluiting. Hieronder lees je hoe je ziet waar het zit en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer onder de koepel, leg er een doek in en haal spullen weg die nat kunnen worden. Ga niet zelf het platte dak op als het nat of glad is, en stap nooit op de koepel: die is niet gemaakt om op te staan. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Waar het meestal zit", tekst: [
        "In de aansluiting tussen de dakbedekking en de opstand. Daar zit een hoek of naad die na jaren van zon, regen en vorst loslaat of scheurt. Het water loopt dan achter de dakbedekking langs de opstand naar beneden en druppelt precies onder de koepel naar binnen.",
        "In de koepel zelf. De afdichting tussen koepel en opstand droogt uit, een schroef of klem zit los, of er komt een scheur in de koepel. Een oude koepel van kunststof wordt na veel jaren in de zon bros en dof, en een scheur begint dan vaak bij een schroefgat.",
        'Of in het water eromheen. Blijft er na een bui water op het dak staan rond de koepel, dan staat de aansluiting steeds onder water en vindt het makkelijker een weg naar binnen. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
      ] },
      { kop: "Lek of condens?", tekst: [
        'Druppels aan de binnenkant van de koepel op een koude ochtend zijn vaak condens. Warme, vochtige lucht uit een badkamer of keuken slaat neer tegen de koude koepel, vooral bij een oude koepel met maar één laag. Dan druppelt het ook als het droog is. Komt het water alleen bij of na regen, dan is het een lek. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.',
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Smeer niet zelf een rand kit rond de koepel. Op een natte of vuile ondergrond hecht kit slecht, en kit op de verkeerde plek kan het water juist achter de dakbedekking vasthouden. Maak liever een foto van de natte plek binnen en, als je er veilig bij kunt, van de koepel vanuit een raam, en stuur die via WhatsApp.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk eerst waar het water echt binnenkomt: in de aansluiting, bij de koepel of op een plek verderop op het platte dak. Een losse of gescheurde aansluiting maak ik weer dicht. Is de koepel zelf gescheurd of bros, dan zeg ik eerlijk of herstellen nog zin heeft of dat er een nieuwe koepel op moet. Zie <a href="/diensten/platte-daken/">platte daken</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Een losse aansluiting dichtmaken is meestal een overzichtelijke klus. Moet er een nieuwe koepel op, dan is het meer werk. In beide gevallen hoor je vooraf wat het kost, voordat ik begin. Lekt het al langer en is het plafond eronder nat geworden, lees dan ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: platte daken", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Waarom lekt mijn lichtkoepel alleen bij harde regen?", a: "Bij een flinke bui komt het water op het platte dak hoger te staan, zeker als de afvoer een beetje vol zit. Dan bereikt het een naad of scheur in de aansluiting die bij gewone regen droog blijft. Kijk dus ook of de afvoer van je platte dak vrij is." },
      { v: "Kan ik op een lichtkoepel staan?", a: "Nee. Een lichtkoepel is niet gemaakt om op te staan of op te leunen, ook al voelt hij stevig. Blijf er altijd naast." },
      { v: "Moet een lekkende lichtkoepel er helemaal af?", a: "Dat hangt af van waar het lek zit. Is alleen de aansluiting met de dakbedekking los, dan kan de koepel blijven zitten. Zit er een scheur in de koepel zelf, of is hij zo bros dat hij kraakt als je hem aanraakt, dan heeft plakken weinig zin." },
      { v: `Is een lekkende lichtkoepel spoed?`, a: `Druppelt het bij elke bui onder de koepel, of is de koepel bij een storm of door hagel gebroken, dan wel: zet een emmer neer en bel of app me met een foto. Een gebroken koepel dek ik eerst af, zodat het binnen droog blijft. Zie je alleen op koude ochtenden een paar druppels, ook als het droog is, dan is het vaak condens en kan het meestal wachten. Twijfel je, stuur dan een foto van de koepel van binnen en vertel wanneer het druppelt.` },
    ],
  },
  {
    slug: "nokvorsten-los",
    datum: "2026-10-21",
    titel: "Losse nokvorsten",
    h1: "Losse nokvorsten: zo herken je het en dit doe je eraan",
    metaTitle: "Nokvorst los of specie in de goot? | Spoed Dak Service",
    metaDescription:
      "Specie in de goot of een scheve nokvorst? Dan zit de nok los. Zo herken je het, waarom je beter niet op de volgende storm wacht en hoe ik het herstel.",
    intro:
      "De nokvorsten zijn de halfronde pannen bovenop je dak, op de nok. Ze liggen het hoogst en vangen de meeste wind. Zitten ze los, dan is de volgende storm vaak het moment dat er een wegwaait. Dan regent het precies op het hoogste punt van je dak naar binnen.",
    secties: [
      { kop: "Zo herken je losse nokvorsten", tekst: [
        "Vanaf de straat zie je het vaak al: een vorst die scheef ligt, een kier tussen twee vorsten, of een rij die niet meer recht loopt.",
        "Een tweede teken: brokjes specie in de goot of op de stoep onder je dak. Bij oudere daken liggen de vorsten in specie, en die brokkelt na jaren van vorst en regen af. Dan liggen de vorsten er eigenlijk alleen nog los op.",
      ] },
      { kop: "Waarom je niet op de storm wacht", tekst: [
        "Een losse vorst houdt het soms nog jaren. Maar bij een flinke herfststorm kan hij eraf waaien. Dan heb je een open plek op de nok, en een vallende vorst kan pannen, een dakraam of iets op straat raken.",
        'Ligt er al een vorst op straat of is je dak open? Dan is het spoed. Kijk op de <a href="/spoed/">spoedpagina</a> wat je nu zelf doet, en lees <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a> als het na een storm gebeurde.',
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Ga niet zelf de nok op. Het is het hoogste en steilste stuk van je dak, en losse vorsten kunnen onder je voeten wegschuiven. Kijk vanaf de grond, maak een foto en stuur die door via WhatsApp.",
      ] },
      { kop: "Hoe ik het herstel", tekst: [
        'Ik kijk eerst hoe de vorsten liggen. Losse vorsten zet ik opnieuw goed vast, kapotte vervang ik door passende. Is de specie over de hele nok op, dan is het vaak slimmer om de hele nok in één keer opnieuw te doen dan elk jaar een paar vorsten. Je hoort eerlijk wat nodig is. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een of twee losse vorsten weer vastzetten kost ${panPrijs}. De nokvorsten opnieuw aansmeren met dakmortel kost ${nokPrijs}. Moeten de vorsten vervangen worden, stuur dan een foto. Meer daarover lees je bij <a href="/diensten/nokvorsten-vervangen/">nokvorsten repareren of vervangen</a>. Alle bedragen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: nokvorsten repareren of vervangen", href: "/diensten/nokvorsten-vervangen/" },
    faq: [
      { v: "Is een losse nokvorst gevaarlijk?", a: "Hij kan bij harde wind van het dak waaien. Dan ligt je nok open en kan de vorst schade doen aan pannen of iets op straat. Laat het daarom niet te lang liggen, zeker niet voor de herfststormen." },
      { v: "Hoe vaak moet de nok nagekeken worden?", a: "Kijk zelf elk najaar even vanaf de straat. Zie je specie in de goot of een scheve vorst, laat het dan nakijken. Bij een ouder dak is elk jaar laten kijken geen overbodige luxe." },
      { v: "Valt een weggewaaide nokvorst onder de verzekering?", a: "Stormschade valt vaak onder je opstalverzekering. Een vorst die al lang los lag en dan wegwaait, wordt soms gezien als achterstallig onderhoud. Check de voorwaarden bij je verzekeraar." },
      { v: "Kun je snel komen als er een vorst los ligt?", a: "Ligt de nok open of is er een vorst afgewaaid, bel of WhatsApp me dan meteen met een foto. Bij spoed in de regio Den Bosch lukt het vaak nog dezelfde dag." },
      { v: "Wat houdt het in als de nok gerenoveerd wordt?", a: "Dan haal ik de vorsten eraf, haal de oude, brokkelige specie weg en leg de vorsten er opnieuw goed vast op, recht en dicht. Kapotte vorsten vervang ik door passende. Daarna liggen ze weer stevig op de nok. Je hoort vooraf de vaste prijs." },
      { v: "Kan ik met losse nokvorsten wachten tot het voorjaar?", a: "Liever niet. In de herfst en winter waait het het hardst, en dan is de kans het grootst dat een losse vorst eraf waait. Laat het daarom nakijken voordat de stormen komen." },
      { v: "Wat kost het om losse nokvorsten vast te laten zetten?", a: `Een of twee losse vorsten weer vastzetten kost ${panPrijs}. De nokvorsten opnieuw aansmeren met dakmortel kost ${nokPrijs}. Moeten de vorsten vervangen worden, stuur dan een foto, dan hoor je wat het kost. Je hoort de vaste prijs vooraf.` },
      { v: "Wat is een ondervorst?", a: "Een strook onder de nokvorsten die de nok afsluit tegen regen en wind, maar wel lucht onder de pannen laat. Wordt een nok opnieuw gelegd, dan komt zo'n ondervorst vaak in de plaats van de oude specie." },
      { v: `Mijn nok ligt droog, zonder specie. Kan die ook losraken?`, a: `Dat kan, al gaat het anders dan bij een nok in specie. Bij een droge nok ligt er een rol of strook onder de vorsten, en zit elke vorst vast met een klem of schroef. Breekt er een klem of schiet hij los, dan gaat die ene vorst bij harde wind schuiven, terwijl de rest gewoon vastligt. Vanaf de straat zie je dat aan een vorst die scheef ligt of een kier in de rij. Brokjes specie in de goot zie je bij zo'n nok niet. Stuur me een foto vanaf de straat. Vaak is één vorst terugleggen en vastzetten genoeg, en dan kijk ik meteen of de strook eronder nog heel is.` },
    ],
  },
  {
    slug: "dakpan-kapot-of-verschoven",
    datum: "2026-10-29",
    titel: "Dakpan kapot of verschoven?",
    h1: "Dakpan kapot of verschoven: zo zie je het en dit doe je eraan",
    metaTitle: "Dakpan kapot of verschoven: wat nu? | Spoed Dak Service",
    metaDescription:
      "Een gebroken of scheve dakpan zie je vaak al vanaf de straat. Zo herken je het, waarom één pan genoeg is voor een lek en wat vervangen kost.",
    intro:
      "Eén kapotte of verschoven dakpan lijkt weinig. Maar op die plek heeft de regen vrij spel, en het water zoekt daar langzaam een weg naar binnen. Vaak merk je het pas weken later, aan een natte plek op zolder. Hieronder lees je hoe je het ziet, wat je zelf doet en hoe ik het herstel.",
    secties: [
      { kop: "Zo zie je het vanaf de straat", tekst: [
        "Ga aan de overkant van de straat staan en kijk rustig over elk dakvlak. Een pan die scheef ligt of een stukje uitsteekt, breekt de rechte lijn van de rij. Een donkere streep of een gat in de rij betekent vaak dat een pan is gaan schuiven en je de panlat eronder ziet. En ligt er een stuk pan in de goot of in de tuin, dan is er boven iets gebroken.",
        "Met de zoom van je telefoon zie je meer dan je denkt. Maak een paar foto's van elk dakvlak, dan heb je meteen iets om door te sturen.",
      ] },
      { kop: "Of op zolder", tekst: [
        "Op zolder zie je soms een streepje daglicht tussen de pannen, of na regen een natte plek op het hout of de folie. Liggen de pannen bij jou zonder folie of beschot eronder, zoals bij veel oudere huizen, dan zie je een verschoven pan van binnen het snelst.",
      ] },
      { kop: "Waarom één pan al genoeg is", tekst: [
        'Onder de pannen ligt vaak folie of een houten beschot, en dat houdt even wat water tegen. Maar het is niet gemaakt om lang in de regen te liggen. Na een tijd loopt het water langs de panlatten naar beneden en komt het verderop binnen, meestal niet recht onder de kapotte pan. Hoe dat werkt, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
        'Een losse pan vangt ook wind. Bij de volgende storm kan hij wegwaaien en de pannen eromheen meetrekken. Ligt er na een storm meer los, lees dan <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.',
      ] },
      { kop: "Hoe het komt", tekst: [
        "Een pan breekt door vorst in een oude pan die water opneemt, door hagel of een vallende tak, of doordat er iemand op het dak heeft gestaan. Verschuiven gebeurt meestal door harde wind of door een panlat eronder die rot of los is.",
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Ga niet zelf het dak op om de pan terug te duwen. Een dakpan moet precies in de pannen ernaast en in de pan erboven haken. Ligt hij net niet goed, dan ligt hij na een paar dagen weer scheef. Plak een gebroken pan ook niet met kit of tape: dat laat na een winter weer los.",
      ] },
      { kop: "Een passende pan vinden", tekst: [
        "Een nieuwe pan moet in vorm en maat passen bij de pannen die er al liggen, anders sluit hij niet. Van veel modellen zijn nog passende pannen te krijgen. Is een oud model echt niet meer te vinden, dan is er vaak nog een oplossing: een pan van een plek die je niet ziet, zoals de achterkant van het dak, naar voren halen en daar een pan leggen die er het meest op lijkt. Dat bespreek ik dan eerst met je.",
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een paar losse of kapotte pannen vervangen kost ${panPrijs}. Meer pannen of verder rijden, dan wordt het meer. Is het water al een tijd naar binnen gelopen en zijn de panlatten of de folie eronder ook nat of rot, dan is het meer werk. Je hoort de vaste prijs vooraf.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakpannen vervangen", href: "/diensten/dakpannen-vervangen/" },
    faq: [
      { v: "Hoe lang kan ik wachten met een kapotte dakpan?", a: "Lekt het al binnen of ligt er een stuk dak open, wacht dan niet en bel of app me. Is het binnen nog droog, dan heb je vaak een paar dagen. Maar elke bui maakt het hout en de folie eronder natter, en bij harde wind kan de pan helemaal loskomen." },
      { v: "Kan ik een gebroken dakpan lijmen of kitten?", a: "Dat houdt zelden lang. Kit en tape laten na een paar maanden zon en vorst los, en een gelijmde pan breekt vaak naast de naad opnieuw. Een nieuwe pan blijft wel liggen." },
      { v: "Betaalt de verzekering een kapotte dakpan?", a: "Breekt of verschuift een pan door storm of hagel, dan valt de schade vaak onder je opstalverzekering. Is de pan door ouderdom of vorst gescheurd, dan meestal niet. Maak foto's en kijk in je polis. Meer lees je in het artikel over daklekkage en je verzekering." },
      { v: "Moet het hele dak vervangen worden als er een paar pannen kapot zijn?", a: "Nee. Een paar kapotte pannen vervang ik los. Pas als er op veel plekken pannen gebroken, poreus of afgebrokkeld zijn, is het slimmer om naar een groter stuk dak te kijken. Met de Dak-APK krijg je een fotorapport van je hele dak." },
      { v: "Een dakpan ligt scheef. Is rechtleggen genoeg, of moet hij eruit?", a: "Is de pan heel en zit de lat eronder nog vast, dan is rechtleggen vaak genoeg. Dan leg ik hem terug, zodat hij weer goed in de pannen ernaast haakt. Ligt dezelfde pan na een tijd weer scheef, dan zit er meestal iets onder: een lat die los of zacht is, een vogelnest, of een pan die net niet bij de rest past. Dat los ik dan eerst op. Is de pan gebarsten of mist er een hoekje, dan vervang ik hem. Van beneden is dat verschil lastig te zien, dus stuur me een foto vanaf de overkant van de straat via WhatsApp. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "tak-of-boom-op-dak",
    datum: "2026-10-30",
    titel: "Tak of boom op je dak?",
    h1: "Tak of boom op je dak na een storm: wat doe je nu?",
    metaTitle: "Tak of boom op je dak na storm: wat nu? | Spoed Dak Service",
    metaDescription:
      "Viel er bij de storm een tak of boom op je dak? Wat je eerst doet, wie hem weghaalt, hoe het zit met je verzekering en wat ik daarna aan je dak herstel.",
    intro:
      "Bij een flinke storm breken er takken af, en soms waait er een hele boom om. Komt die op je dak terecht, dan is de schade vaak groter dan je vanaf de straat ziet. Een tak die op het dak valt, breekt pannen, kan de goot uit de haken trekken en schuift soms nog een stuk naar beneden. Hieronder lees je wat je eerst doet, wie wat weghaalt en hoe ik je dak daarna herstel.",
    secties: [
      { kop: "Eerst: je veiligheid", tekst: [
        `Blijf uit de kamer onder de plek waar de tak of boom ligt, zeker als het plafond doorbuigt of er water doorkomt. Ga niet zelf het dak of de ladder op, en trek niet aan een grote tak: die staat vaak onder spanning en kan wegschieten of meer pannen meetrekken.`,
        `Ligt de boom op een stroomkabel of op de weg, of kan hij elk moment verder zakken, bel dan 112. Lekt het nu al binnen, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen zelf kunt doen.`,
      ] },
      { kop: "Maak foto's voordat er iets weg gaat", tekst: [
        `Maak foto's van de tak of boom op je dak, van de plek waar hij is afgebroken of omgewaaid, en van de schade binnen. Doe dat voordat er iets wordt weggehaald. Zo laat je je verzekering zien dat de schade door de storm kwam.`,
      ] },
      { kop: "Wie haalt de boom weg?", tekst: [
        `Een grote tak of een hele boom moet eerst van je dak af voordat er iets hersteld kan worden. Dat is werk voor een boomverzorger, en als het gevaarlijk is soms voor de brandweer. Een losse tak in de goot of op de pannen haal ik weg als ik toch op het dak sta.`,
        `Is het de boom van de buren of van de gemeente, meld het dan ook bij hen. Bij een echte storm geldt het vaak als overmacht, en dan meld je de schade aan je dak bij je eigen opstalverzekering. Was de boom al dood of ziek, dan kan dat anders liggen. Meer lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: "Wat ik daarna nakijk", tekst: [
        `Een tak raakt vaak meer dan alleen de plek waar hij blijft liggen. Daarom kijk ik over het hele dakvlak: gebroken of gescheurde pannen, de panlatten eronder, de nok, het lood bij de schoorsteen en de goot met de beugels. Een gescheurde pan zie je vanaf de straat vaak niet. Hoe je zelf een kapotte pan herkent, lees je in <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
        `Liggen er zonnepanelen op je dak en is daar iets mee gebeurd, dan zeg ik dat eerlijk: daarvoor heb je je installateur nodig.`,
      ] },
      { kop: "Eerst dicht, daarna netjes", tekst: [
        `Is er een gat in je dak, dan dek ik het eerst af, zodat het binnen droog blijft. Daarna vervang ik de kapotte pannen en herstel ik wat er verder stuk is. Moet er iets besteld worden, dan kom ik daarvoor terug. Je hoort vooraf wat het kost. Wat je na een storm verder zelf kunt nakijken, lees je in <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.`,
      ] },
      { kop: "Hangt er een grote tak boven je dak?", tekst: [
        `Hangt er een zware tak over je dak, laat hem dan in de herfst of winter door een boomverzorger terugsnoeien, voordat de stormen komen. Dat scheelt ook veel blad in je goot. Hoe vaak je goot onder bomen leeg moet, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: stormschade", href: "/diensten/stormschade/" },
    faq: [
      { v: "Mag ik zelf een tak van mijn dak halen?", a: "Een kleine tak die je vanuit een raam makkelijk kunt pakken, kan. Ga er niet voor op het dak of op een ladder staan. Trek ook niet aan een grote tak: die kan wegschieten of meer pannen meetrekken. Maak liever een foto en stuur die via WhatsApp." },
      { v: "Wie betaalt de schade als de boom van de buren op mijn dak valt?", a: "Bij een echte storm geldt dat vaak als overmacht. Dan meld je de schade aan je dak meestal bij je eigen opstalverzekering. Was de boom al dood of ziek en wisten de buren dat, dan kan het anders liggen. Maak foto's en meld het bij je verzekeraar, die zoekt verder uit wie wat betaalt." },
      { v: "Is een tak op mijn dak spoed?", a: "Is er een gat in je dak of komt er water binnen, dan wel: bel of app me met een foto. Ligt er alleen een kleine tak op de pannen en is het binnen droog, dan kan het vaak een dag wachten. Wacht niet tot de volgende bui." },
    ],
  },
  {
    slug: "dakpannen-vastzetten-tegen-storm",
    datum: "2026-10-31",
    titel: "Dakpannen vastzetten tegen storm",
    h1: "Dakpannen vastzetten tegen storm: zo blijven ze liggen",
    metaTitle: "Dakpannen vastzetten tegen storm | Spoed Dak Service",
    metaDescription:
      "Waaien er bij harde wind pannen van je dak? Welke pannen het eerst loskomen, wat een stormhaak doet en wanneer vastzetten zin heeft.",
    intro:
      "Bij een flinke storm waaien er vaak pannen van daken in de buurt. Meestal zijn het dezelfde pannen op dezelfde plekken, en vaak liggen ze alleen met hun eigen gewicht op het dak. Hieronder lees je welke pannen het eerst loskomen, wat een stormhaak doet en wanneer het zin heeft om je pannen vast te laten zetten.",
    secties: [
      { kop: "Zo ligt een dakpan op je dak", tekst: [
        "Een dakpan hangt met twee nokjes aan de achterkant over een houten lat, de panlat. Aan de zijkant haken de pannen in elkaar, en de pan erboven ligt er een stukje overheen. Bij gewone regen en wind is dat genoeg. Maar bij een harde windstoot trekt de wind aan de pannen, en een pan die nergens aan vastzit, kan dan omhoog wippen of wegwaaien.",
        "Bij nieuwere daken worden de pannen meestal met haken of klemmen vastgezet. Op veel oudere daken liggen ze nog los op de latten.",
      ] },
      { kop: "Welke pannen het eerst loskomen", tekst: [
        "Langs de zijkant van het dak, bij de gevel, waar de wind om de hoek trekt. De onderste rij boven de goot, omdat de wind daar onder de pannen kan komen. De rij vlak onder de nok. En de pannen rond een dakraam, een schoorsteen of zonnepanelen, waar de rij wordt onderbroken.",
        'Ligt er na een storm een pan scheef of mist er een, dan is het vaak op een van die plekken. Hoe je dat vanaf de straat ziet, lees je in <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.',
      ] },
      { kop: "Wat een stormhaak doet", tekst: [
        'Een stormhaak, ook wel panhaak genoemd, is een metalen haak die de pan aan de panlat vastzet. Hij zit grotendeels onder de pan erboven, dus vanaf de straat zie je er weinig van. De pan blijft liggen zoals hij lag, maar kan bij een windstoot niet meer omhoog wippen. Voor de nokvorsten bovenop het dak gaat dat anders. Lees daarover <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.',
      ] },
      { kop: "Wanneer vastzetten zin heeft", tekst: [
        "Waait er bij elke storm wel ergens een pan los, of hoor je bij harde wind getik en geratel boven je zolder, dan liggen er pannen los. Op een ouder dak zonder haken is het dan slim om in elk geval de zijkanten, de onderste rij en de pannen rond een dakraam vast te laten zetten. Daarvoor hoeft meestal niet het hele dak opnieuw gelegd te worden.",
        "Leg ik na een storm losse pannen terug, dan kijk ik meteen of er een haak bij moet. Gaat het om een groter stuk dak, dan bespreek ik eerst met je wat zin heeft, en je hoort vooraf wat het kost.",
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Ga niet zelf het dak op om pannen vast te zetten, en zeker niet als het waait. Plak een losse pan ook niet vast met kit of schuim. Dan zit hij muurvast, en bij een volgende reparatie breken de pannen eromheen als hij eruit moet. Een foto vanaf de straat zegt mij vaak al genoeg.",
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Hoe ik losse pannen bij jou in de buurt terugleg en vastzet, lees je bij dakreparatie in <a href="/werkgebied/oss/dakreparatie/">Oss</a>, waar op oudere daken in Geffen de pannen langs de rand vaak nog zonder stormhaak liggen, in <a href="/werkgebied/den-bosch/dakreparatie/">Den Bosch</a>, waar in Maaspoort en Empel de gevelpannen langs de zijkant kunnen losroesten, in <a href="/werkgebied/vlijmen/dakreparatie/">Vlijmen</a>, waar in Geerpark de nokvorsten met een klem vastzitten, en in <a href="/werkgebied/waalwijk/dakreparatie/">Waalwijk</a>, waar op oude huizen in Besoyen en Baardwijk nog oud-Hollandse pannen zonder sluiting liggen. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een paar losse pannen terugleggen en vastzetten valt meestal onder een kleine reparatie: ${kleinPrijs}. Moeten er langs alle randen of over een groot stuk dak haken bij, dan is het meer werk. Je hoort de vaste prijs vooraf. Zie ook <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Zitten er bij mijn dak al stormhaken?", a: "Dat zie je vanaf de straat bijna niet. Bij een vrij nieuw dak meestal wel, bij een ouder dak vaak niet of alleen op een paar plekken. Als ik voor een reparatie of inspectie op je dak sta, kijk ik het voor je na." },
      { v: "Kan een pan met een stormhaak toch wegwaaien?", a: "Bij een zware storm kan er toch iets loskomen, bijvoorbeeld als een pan al gescheurd was of de panlat eronder rot is. Maar pannen die vastzitten, blijven in de regel veel beter liggen dan losse." },
      { v: "Wanneer laat ik mijn pannen het beste vastzetten?", a: "Het liefst in de herfst, voordat de winterstormen komen. Ligt er nu al een pan scheef of mist er een, wacht dan niet en stuur me een foto via WhatsApp." },
    ],
  },
  {
    slug: "lekkage-bij-zonnepanelen",
    datum: "2026-10-21",
    titel: "Lekkage bij zonnepanelen?",
    h1: "Lekkage sinds er zonnepanelen op je dak liggen: waar het zit en wat je doet",
    metaTitle: "Lekkage door zonnepanelen op je dak? | Spoed Dak Service",
    metaDescription:
      "Lekt je dak sinds er zonnepanelen op liggen? Vaak zit het in een verschoven of gebroken pan bij een dakhaak. Zo herken je het en zo pak ik het aan.",
    intro:
      "Een natte plek op zolder sinds de zonnepanelen erop liggen? Dat zie ik vaker. Meestal ligt het niet aan de panelen zelf, maar aan wat er bij het plaatsen met de pannen is gebeurd. Hieronder lees je waar het meestal zit en wat je eraan doet.",
    secties: [
      { kop: "Waar het meestal zit", tekst: [
        "Panelen worden vastgezet met dakhaken die onder de pannen door aan het dak worden geschroefd. Ligt zo'n haak net te hoog, dan ligt de pan erboven niet meer goed in de sluiting. Of de pan is gescheurd toen er ruimte voor de haak werd gemaakt. Daar loopt bij een flinke bui water onderdoor.",
        "Andere bekende plekken: pannen die gebroken zijn doordat er op gelopen is, een kabeldoorvoer door het dak die niet goed is afgewerkt, en blad en vuil dat onder de panelen blijft liggen en het water de verkeerde kant op stuurt.",
      ] },
      { kop: "Zo herken je het", tekst: [
        "De natte plek zit vaak op zolder onder het deel van het dak waar de panelen liggen, of een stukje lager, want water loopt eerst een eind naar beneden voordat het binnenkomt. Lekt het pas sinds de panelen erop liggen, en vooral bij harde regen of regen met wind, dan is dat een sterke aanwijzing.",
      ] },
      { kop: "Zonnepanelen op een plat dak", tekst: [
        'Op een plat dak staan panelen meestal op een frame dat met gewicht op zijn plek blijft, zonder dat er door het dak geschroefd wordt. Lekt het toch, dan zit het vaak op een plek waar het frame of het gewicht de dakbedekking heeft beschadigd, of bij de doorvoer van de kabel naar binnen. Ook blijft er tussen de panelen sneller blad liggen bij de afvoer, en dan blijft het water staan. Lees ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
      ] },
      { kop: "Wat je nu doet", tekst: [
        'Vang het water op, maak een foto van de natte plek en ga niet zelf het dak op. Tussen de panelen is het glad en je stapt zo een pan kapot. Kijk op de <a href="/spoed/">spoedpagina</a> wat je verder meteen kunt doen.',
      ] },
      { kop: "Wie lost het op?", tekst: [
        "Zijn de panelen pas gelegd, neem dan eerst contact op met je installateur. Lekkage die door het plaatsen komt, hoort de installateur in de regel zelf op te lossen. Komt de installateur niet, of liggen de panelen er al jaren, dan kijk ik waar het lek zit. Moet er voor de reparatie een paneel even los, dan bespreken we eerst samen hoe dat het beste kan.",
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Hoe dat er bij jou in de buurt uitziet, lees je bij daklekkage in <a href="/werkgebied/eindhoven/daklekkage/">Eindhoven</a>, waar in Meerhoven op veel daken panelen liggen, en bij stormschade in <a href="/werkgebied/rosmalen/stormschade/">Rosmalen</a>, waar in De Groote Wielen na een storm wel eens een pan bij een dakhaak breekt. In <a href="/werkgebied/sint-michielsgestel/dakgoot-vervangen/">Sint-Michielsgestel</a> liggen de panelen soms tot vlak boven de goot, zodat het water bij een stortbui over de goot heen schiet, en in <a href="/werkgebied/boxtel/goten-reinigen/">Boxtel</a> zitten in Selissen en Munsel vaak duiven onder de panelen.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Zit het lek bij een pan die bij een dakhaak gebroken of verschoven is, of bij een kabeldoorvoer die niet goed is afgewerkt, dan is het meestal een gerichte lekreparatie: ${lekPrijs}, inclusief het opsporen en het materiaal. Moet er een paneel los om bij de pan te komen, dan bespreken we dat eerst, en ook dan hoor je de vaste prijs voordat ik begin.`,
      ] },
      { kop: "Lekt het niet, maar wil je het voorkomen?", tekst: [
        'Kijk ik bij je dak, dan neem ik de bevestiging en de pannen onder de panelen mee. Zo zie je een verschoven pan vaak al voordat het binnen nat wordt.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Kan een dak gaan lekken door zonnepanelen?", a: "Ja, maar meestal niet door de panelen zelf. Het zit vaak in een pan die bij een dakhaak niet meer goed ligt of gebroken is, of in een kabeldoorvoer die niet goed is afgewerkt." },
      { v: "Moeten alle panelen eraf om het lek te vinden?", a: "Meestal niet. Vaak is van buiten en op zolder al te zien waar het zit. Zit het lek precies onder een paneel, dan moet dat ene paneel soms even los. Dat bespreken we vooraf." },
      { v: "Is lekkage bij zonnepanelen spoed?", a: "Loopt er water naar binnen, dan wel: hoe langer het lekt, hoe meer schade aan hout en isolatie. Bel of WhatsApp me met een foto van de natte plek." },
      { v: "Wie betaalt de reparatie als het lek door de installatie komt?", a: "Komt het lek door het plaatsen van de panelen, dan is dat in de regel iets voor de installateur. Neem daarom eerst contact met hen op. Liggen de panelen er al jaren of komt de installateur niet, dan kijk ik waar het lek zit en hoor je vooraf de vaste prijs." },
      { v: "Lekt een plat dak met zonnepanelen sneller?", a: "Niet vanzelf. Maar onder en tussen de panelen zie je de dakbedekking slecht, en daar blijft sneller blad liggen. Laat daarom af en toe kijken of de afvoer vrij is en de dakbedekking onder de panelen nog goed is." },
      { v: "Er komen binnenkort zonnepanelen op mijn dak. Moet ik het dak eerst laten nakijken?", a: `Dat is slim, zeker bij een dak dat al wat ouder is. Liggen de panelen er eenmaal, dan kom je lastig bij de pannen eronder, en voor een reparatie moet er dan soms een paneel los. Laat daarom vooraf kijken of er pannen gescheurd of poreus zijn, of de nok goed vastzit en of het lood rond de schoorsteen nog goed is. Dat kan met de Dak-APK (${apkPrijs}): je krijgt een rapport met foto's en weet wat er eerst moet gebeuren. Is je dak in orde, dan hoor je dat ook.` },
      { v: "Mijn installateur zegt dat het lek niet door de panelen komt. Wat nu?", a: "Dat kan kloppen, want niet elk lek op een dak met panelen heeft met de panelen te maken. Het kan ook het lood bij de schoorsteen zijn, de nok of een pan op een heel ander deel van het dak. Kijk waar het nat wordt. Zit de natte plek onder het deel met de panelen of een stukje lager, en lekt het pas sinds ze erop liggen, dan is dat wel een aanwijzing. Ik kijk waar het water echt binnenkomt en maak foto's van wat ik zie. Zit het toch bij een dakhaak, dan kun je die foto's aan je installateur laten zien. Zit het ergens anders, dan hoor je vooraf wat de reparatie kost." },
    ],
  },
  {
    slug: "lekkage-bij-dakdoorvoer",
    datum: "2026-10-29",
    titel: "Lekt het langs een pijp door je dak?",
    h1: "Lekkage bij een ontluchtingspijp of dakdoorvoer: waar het zit en wat je doet",
    metaTitle: "Lekkage bij ontluchtingspijp of doorvoer | Spoed Dak Service",
    metaDescription:
      "Druppelt het langs een pijp die door je dak gaat? Vaak zit het lek in de kraag of de doorvoerpan rond de pijp, of is het condens. Zo zie je het verschil.",
    intro:
      "Op bijna elk dak steekt wel een pijp naar buiten: de ontluchting van het riool, de afvoer van de cv-ketel of de afzuiging van de badkamer. Rond zo'n pijp moet het dak netjes dicht aansluiten. Druppelt het op zolder langs de pijp, dan zit het lek meestal in die aansluiting en niet in de pijp zelf. Soms is het helemaal geen lek, maar condens. Hieronder lees je hoe je het verschil ziet en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: ['Zet een emmer onder de druppel en maak een foto van de pijp en de natte plek eromheen. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.'] },
      { kop: "Welke pijpen gaan er door je dak?", tekst: ["De ontluchtingspijp van het riool zie je op bijna elk huis: een grijze of zwarte pijp die een stukje boven de pannen uitsteekt. Daarnaast heb je vaak de afvoer van de cv-ketel, meestal een dikkere pijp met een kap erop, en soms de afzuiging van de badkamer of de ventilatie. Liggen er zonnepanelen op je dak, dan gaat ook de kabel ergens door het dak naar binnen."] },
      { kop: "Waar het meestal lekt", tekst: [
        "Op een pannendak gaat de pijp door een speciale pan: de doorvoerpan. Rond de pijp zit een rubberen of kunststof kraag, of een stuk lood. Na jaren in de zon droogt dat rubber uit en scheurt het, of het zakt een stukje omlaag langs de pijp. Dan loopt het water bij een bui langs de pijp naar binnen.",
        "Ook de doorvoerpan zelf kan gebarsten of verschoven zijn, bijvoorbeeld na een storm of als er iemand op het dak heeft gestaan. En soms heeft iemand de kier rond de pijp ooit met kit dichtgesmeerd. Dat houdt een paar jaar, en daarna laat de kit los.",
        'Op een plat dak zit rond de pijp een manchet die in de dakbedekking is opgenomen. Laat die aansluiting los of scheurt de dakbedekking rond de pijp, dan komt het water erachter. Blijft er water rond de pijp staan, lees dan ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
        'Staat er een warmtepomp of airco op je platte dak en gaan de leidingen door het dak, lees dan <a href="/kennisbank/lekkage-warmtepomp-of-airco/">lekkage sinds de warmtepomp of airco</a>.',
      ] },
      { kop: "Lek of condens in de pijp?", tekst: [
        "Een ontluchtingspijp of afzuigpijp die door een koude zolder loopt, wordt zelf ook koud. Warme, vochtige lucht slaat daar tegen neer, en die druppels lopen langs de pijp naar beneden. Dat lijkt op een lek, maar het komt van binnen.",
        'Het verschil: condens zie je ook op droge, koude dagen, vaak verspreid over de hele pijp. Een lek komt bij of vlak na regen, en de natte plek begint bovenaan, waar de pijp door het dak gaat. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.',
      ] },
      { kop: "Bij de afvoer van je cv-ketel", tekst: ["Druppelt het bij de afvoer van je cv-ketel, dan kan het ook uit de pijp zelf komen. Een ketel maakt bij het stoken waterdamp, en dat water hoort via de ketel weg te lopen. Lekt het binnen uit een verbinding van de pijp, dan is dat werk voor je installateur. De aansluiting van die pijp op het dak, de doorvoerpan en de kraag eromheen, maak ik wel weer dicht."] },
      { kop: "Bij jou in de buurt", tekst: [
        'Pijpen en leidingen door het dak kom ik in de hele regio tegen. In Dierdonk, Brouwhuis en Rijpelberg in Helmond gaat bij veel huizen de afvoer van de ventilatie of de cv-ketel door het pannendak: lees <a href="/werkgebied/helmond/daklekkage/">daklekkage in Helmond</a>. In Rosmalen gaan bij oudere huizen steeds vaker de leidingen van een warmtepomp of airco door een pan naar binnen, zie <a href="/werkgebied/rosmalen/dakreparatie/">dakreparatie in Rosmalen</a>. En in Nuland en Vinkel, waar op veel daken zonnepanelen liggen, kijk ik bij een lek eerst waar de kabel door het dak gaat: zie <a href="/werkgebied/den-bosch/">dakdekker in Den Bosch</a>.',
      ] },
      { kop: "Hoe ik het aanpak", tekst: ['Ik kijk eerst of het water van buiten komt of van binnen. Is de kraag uitgedroogd of de doorvoerpan gebarsten, dan vervang ik die door een passende. Zit er lood rond de pijp, dan zet ik dat weer goed om de pijp en over de pannen. Op een plat dak maak ik de aansluiting rond de pijp opnieuw dicht. Alleen een rand kit erom vind ik geen goede oplossing, want die laat na een paar jaar weer los. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>.'] },
      { kop: "Wat kost het?", tekst: ['Een nieuwe kraag of doorvoerpan is meestal een overzichtelijke klus. Is het water al een tijd langs de pijp naar binnen gelopen en zijn het hout of de isolatie eromheen nat, dan is het meer werk. Je hoort vooraf de vaste prijs, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.'] },
    ],
    dienst: { label: "Bekijk: dakdoorvoer plaatsen of herstellen", href: "/diensten/dakdoorvoer/" },
    faq: [
      { v: "Waarom lekt het langs mijn ontluchtingspijp?", a: "Meestal zit het in de kraag rond de pijp. Rubber droogt na jaren in de zon uit en scheurt, of de kraag zakt omlaag. Ook een gebarsten doorvoerpan of oude kit kan de oorzaak zijn. En soms is het condens in de pijp en geen lek." },
      { v: "Hoe weet ik of het condens is of een lek?", a: "Kijk wanneer het nat wordt. Ook op droge, koude dagen en verspreid over de pijp wijst op condens. Alleen bij of na regen, en vooral bovenaan bij het dak, wijst op een lek. Twijfel je, stuur dan een foto via WhatsApp." },
      { v: "Kan ik de kier rond de pijp zelf dichtmaken?", a: "Met kit houd je het vaak maar kort droog. Zon en vorst laten het na een paar jaar loslaten, en dan lekt het op dezelfde plek. En op het dak werken is niet zonder risico. Laat liever kijken of de kraag of de doorvoerpan vervangen moet worden." },
      { v: "De afvoer van mijn cv-ketel lekt, bel ik jou of de installateur?", a: "Lekt het binnen uit een verbinding van de pijp, dan is dat werk voor de installateur. Komt het water van buiten langs de pijp naar binnen, waar die door het dak gaat, dan kijk ik ernaar. Stuur een foto, dan zeg ik eerlijk wie je het beste kunt bellen." },
      { v: "Sinds er een leiding van een warmtepomp of airco door mijn dak gaat, lekt het. Hoe kan dat?", a: "Vaak is de leiding door een gewone pan geboord of onder een pan door gelegd. Die pan ligt dan niet meer goed in de sluiting, en bij een bui loopt het water langs de leiding of onder de opgetilde pan naar binnen. Een nette oplossing is een doorvoerpan met een kraag die om de leiding sluit, net als bij een ontluchtingspijp. Is de warmtepomp of airco pas geplaatst, vraag dan eerst aan de installateur of hij het oplost. Anders maak ik de doorvoer weer dicht. Stuur me een foto van de plek waar de leiding het dak in gaat." },
    ],
  },
  {
    slug: "lood-op-dak",
    datum: "2026-10-30",
    titel: "Lood op je dak: lekt het?",
    h1: "Lood op je dak: zo zie je dat het lekt of op is",
    metaTitle: "Lood op je dak lekt: zo zie je het | Spoed Dak Service",
    metaDescription:
      "Lood zit rond je schoorsteen, onder het dakraam en langs de muur. Zo zie je dat het gescheurd, los of op is, en wanneer repareren genoeg is.",
    intro:
      "Op bijna elk pannendak ligt lood: rond de schoorsteen, onder een dakraam, langs een muur waar het dak tegenaan komt en soms in de kilgoot. Lood gaat vaak tientallen jaren mee. Maar als het gaat lekken, zie je dat binnen meestal pas laat, en vaak een eind van de plek waar het lood zit. Hieronder lees je waar het lood zit, hoe je ziet dat het op is en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        `Zet een emmer neer, haal spullen weg bij de natte plek en maak er een foto van. Ga niet zelf het dak op om naar het lood te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "Waar het lood op je dak zit", tekst: [
        `Lood ligt overal waar de pannen ophouden en er iets anders begint. Rond de schoorsteen liggen loodslabben die over de pannen heen vallen en met de bovenrand in de schoorsteen vastzitten. Onder een dakraam ligt een gootstuk dat het water om het raam heen leidt. Langs een muur of een hoger dak ligt een strook die het water over de pannen houdt. En in een kilgoot, waar twee dakvlakken samenkomen, ligt vaak een baan lood of zink waar al het water overheen loopt.`,
        `Per plek lees je meer in <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>, <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>, <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a> en <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: "Zo zie je dat het lood op is", tekst: [
        `Kleine scheurtjes in de vouwen, vooral bij de hoeken van een schoorsteen of een dakraam. Daar wordt het lood bij warmte en kou steeds een beetje heen en weer gebogen, en na veel jaren breekt het.`,
        `Een strook die los van de muur of de schoorsteen staat, zodat je een kier ziet tussen het lood en de steen. Lood dat omhoog krult en niet meer plat op de pannen ligt. En bij heel oud lood kleine gaatjes of plekken waar het dun is geworden.`,
        `Met de zoom van je telefoon zie je vanaf de straat vaak al of het lood rond de schoorsteen nog strak tegen de steen zit.`,
      ] },
      { kop: "Lood of loodvervanger?", tekst: [
        `Op nieuwere daken ligt soms geen lood maar loodvervanger: een grijze strook van kunststof, vaak met een gaasje erin. Van beneden lijkt het op lood. Het is lichter, maar het kan na jaren in de zon hard worden en scheuren, vooral op de plekken waar het gevouwen is. Laat een strook loodvervanger los, dan krijg je dezelfde lekkage als bij oud lood.`,
      ] },
      { kop: "Waarom je het pas laat merkt", tekst: [
        `Water dat achter een losse loodslab komt, loopt eerst langs de schoorsteen of de muur naar beneden, onder de pannen door. Binnen zie je het vaak pas een eind verderop, als een vochtplek op de muur naast de schoorsteen of op het plafond eronder. Daarom kijk ik bij zo'n natte plek eerst naar het lood erboven. Zie ook <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a>.`,
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        `Smeer geen kit op een scheur in het lood of in de kier tussen het lood en de muur. Kit hecht slecht op oud lood en laat na een winter weer los. Ga ook niet zelf op het dak het lood terugduwen: oud lood scheurt dan nog verder. Maak liever een foto en stuur die via WhatsApp.`,
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        `Staat het lood op één plek los, dan is het vaak genoeg om de strook weer goed vast te zetten. Zit er een scheur in een hoek, dan vervang ik meestal alleen dat stuk. Is het lood rond de hele schoorsteen of langs de hele muur dun, gescheurd of los, dan is nieuw lood de betere keus, anders blijf je lappen. Ik zeg je eerlijk wat bij jouw dak past.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een strook die alleen los zit, is meestal snel weer vast. Moet er nieuw lood rond een hele schoorsteen of langs een hele muur, dan is het meer werk. In beide gevallen hoor je de vaste prijs vooraf, voordat ik begin. Is er al water binnengekomen en moet ik het lek eerst opsporen, dan is het meestal ${lekPrijs}, inclusief materiaal.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Hoe lang gaat lood op een dak mee?", a: "Vaak tientallen jaren. Hoe lang precies hangt af van hoe goed het destijds is aangebracht en hoeveel het bij warmte en kou moet werken. Bij een ouder huis is het slim om het lood rond de schoorsteen en het dakraam eens te laten nakijken, bijvoorbeeld met de Dak-APK." },
      { v: "Kun je gescheurd lood plakken?", a: "Plakken met tape of kit houdt het hooguit even droog. Op oud lood hecht het slecht, en na een winter zit er weer een kier. Een scheur in een hoek los ik liever op met een nieuw stuk lood." },
      { v: "Lekt het bij de schoorsteen altijd door het lood?", a: "Niet altijd. Het water kan ook door de stenen van de schoorsteen zelf komen, of van boven in de schoorsteen vallen als er geen kap op zit. Meer lees je in de artikelen over lekkage bij de schoorsteen en water in je open haard." },
      { v: `Werk je met lood of met loodvervanger?`, a: `Meestal met loodvervanger. Dat is lichter, laat zich goed vormen rond een schoorsteen of dakraam en is voor dieven niet interessant. Wil je liever echt lood, bijvoorbeeld omdat er nu ook lood ligt of omdat het beter bij een oud huis past, dan kan dat ook. Zeg het als je een foto stuurt, dan hoor je vooraf wat het kost.` },
    ],
  },
  {
    slug: "dakpannen-coaten-of-vervangen",
    verborgen: true,
    titel: "Coaten of vervangen?",
    h1: "Dakpannen coaten of vervangen? Zo maak je de juiste keuze",
    metaTitle: "Dakpannen coaten of vervangen? | Spoed Dak Service",
    metaDescription:
      "Dakpannen coaten of vervangen? Coaten is veel goedkoper en kan jaren schelen, mits je pannen nog goed zijn.",
    intro:
      "Een verweerd dak hoeft niet meteen vervangen te worden. Vaak kun je pannen die nog stevig zijn coaten, veel goedkoper, en je dak gaat er jaren mee verder. Maar coaten is niet altijd de juiste keuze. Hieronder het verschil.",
    secties: [
      { kop: "Wanneer coaten loont", tekst: [
        "Als je pannen nog stevig en heel zijn maar dof, vuil of vol mos, dan is reinigen + coaten ideaal. De coating beschermt tegen vocht, mos en uv, en kost een fractie van vervangen.",
        "Het is ook een mooi moment voor een gootcheck en het nakijken van lood en nokvorsten.",
      ] },
      { kop: "Wanneer vervangen verstandiger is", tekst: [
        "Zijn de pannen poreus, bros of op meerdere plekken kapot, dan houdt coaten geen stand. Dan ben je beter af met (gedeeltelijk) vervangen. Coaten op slechte pannen is zonde van het geld.",
        "Ik kom kijken en zeg eerlijk wat in jouw geval loont; soms is een combinatie (slechte pannen vervangen, de rest coaten) de slimste route.",
      ] },
    ],
    dienst: { label: "Bekijk: dak coaten", href: "/diensten/dakcoating" },
    faq: [
      { v: "Hoe lang gaat een coating mee?", a: "Bij goede pannen en een nette aanbrenging zit je al snel op jaren extra bescherming. Belangrijk is dat eerst goed gereinigd wordt." },
    ],
  },
  {
    slug: "hoe-vaak-dakgoot-reinigen",
    titel: "Hoe vaak goten reinigen?",
    h1: "Hoe vaak moet je je dakgoot reinigen? Zo weet je wanneer het tijd is",
    metaTitle: "Hoe vaak moet je je dakgoot schoonmaken? | Spoed Dak Service",
    metaDescription:
      "Hoe vaak moet je je dakgoot schoonmaken? Meestal één keer per jaar in het najaar, vaker onder bomen of dennen. Zo zie je vanaf de grond dat het tijd is.",
    intro:
      "Volle goten lijken onschuldig, maar ze zijn de oorzaak van veel vochtschade: overlopend water, natte muren en op den duur lekkage. Hoe vaak moet je ze laten reinigen, en wat kost dat?",
    secties: [
      { kop: "Eén keer per jaar, vaker bij bomen", tekst: [
        "Voor de meeste huizen is één keer per jaar genoeg, het beste in het najaar als het blad gevallen is. Staan er bomen vlak bij je huis, dan is twee keer per jaar slimmer.",
        "Het najaar (augustus tot oktober) is de drukste én belangrijkste periode: blad én herfststormen zorgen dan voor de meeste verstoppingen.",
      ] },
      { kop: "Waarom het belangrijk is", tekst: [
        "Een verstopte goot loopt over langs de gevel, trekt vocht in muren en fundering en kan binnen voor lekkage zorgen. Een kleine jaarlijkse onderhoudsbeurt voorkomt dure schade.",
      ] },
      { kop: "Wanneer vaker dan één keer per jaar", tekst: [
        "Staan er naaldbomen bij je huis, zoals dennen of sparren, dan valt er het hele jaar door iets in de goot. Naalden zijn klein en zakken door de meeste bladvangers heen, en na een tijd zitten ze in de regenpijp zelf. Dan is in het voorjaar nog een keer leegmaken slim.",
        'Heeft je huis een kilgoot of een bakgoot, dan komt daar meer water samen, en een volle goot loopt dan naar binnen in plaats van langs de gevel. Die wil je zeker voor de winter leeg hebben. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a> en <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.',
        'Groeit er veel mos op je pannen, dan spoelt dat bij elke bui in brokjes de goot in. Dan zit de goot sneller vol, ook zonder bomen in de buurt.',
      ] },
      { kop: "Zo controleer je het zelf vanaf de grond", tekst: [
        "Kijk na een droge week vanaf de overkant van de straat naar je goot. Steken er sprietjes gras of plantjes boven de rand uit, dan ligt er al een laag aarde in. Luister bij een flinke bui bij de regenpijp: hoor je nauwelijks water stromen terwijl het hard regent, dan komt het water er niet in. En zitten er steeds vogels op dezelfde plek in de goot, dan staat daar vaak een plas water.",
        "Ga voor een kijkje niet zelf op een ladder tegen de goot staan, zeker niet als het nat is. Een foto met de zoom van je telefoon is vaak al genoeg om te zien hoe vol hij zit.",
      ] },
      { kop: "Wat kost goten reinigen?", tekst: [
        `Eén goot, bijvoorbeeld alleen de voorgoot, kost ${GOTEN_PRIJS}: goot leeg, uitloop naar de regenpijp vrijgemaakt, troep mee. Beide goten of een groter of hoger huis: dan hoor je vooraf de vaste prijs.`,
        'Wil je precies weten wat erbij zit, waar de prijs van afhangt en hoe het zit met een prijs per meter? Lees dan <a href="/kennisbank/wat-kost-dakgoot-schoonmaken/">wat kost dakgoot schoonmaken</a>.',
      ] },
      { kop: "Goten schoonmaken bij jou in de buurt", tekst: [
        'Woon je in de regio Den Bosch? Per plaats lees je waar ik bij het schoonmaken op let en wat ik daar in de goot tegenkom: in <a href="/werkgebied/rosmalen/goten-reinigen/">Rosmalen</a>, <a href="/werkgebied/berlicum/goten-reinigen/">Berlicum</a>, <a href="/werkgebied/vlijmen/goten-reinigen/">Vlijmen</a>, <a href="/werkgebied/heusden/goten-reinigen/">Heusden</a>, <a href="/werkgebied/sint-michielsgestel/goten-reinigen/">Sint-Michielsgestel</a>, <a href="/werkgebied/schijndel/goten-reinigen/">Schijndel</a>, <a href="/werkgebied/veghel/goten-reinigen/">Veghel</a> en <a href="/werkgebied/waalwijk/goten-reinigen/">Waalwijk</a>. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Wanneer kan ik het beste laten reinigen?", a: "In het najaar, als het meeste blad gevallen is, dan heb je er het hele jaar profijt van en voorkom je winterlekkage." },
      { v: "Helpt een bladvanger of een gootrooster?", a: "Het scheelt. Een bladvanger op de uitloop houdt grof blad uit de regenpijp, en een rooster over de goot houdt het meeste blad tegen. Maar naalden, zaadjes en mos komen er nog steeds langs, en blad dat op het rooster blijft liggen moet er ook af. Eén keer per jaar laten nakijken blijft nodig." },
      { v: "Waarom loopt mijn goot over terwijl er weinig blad in ligt?", a: "Dan zit het vaak bij de uitloop naar de regenpijp: een prop naalden, mos of zelfs een tennisbal is genoeg om die dicht te zetten. Het kan ook zijn dat de goot niet meer goed naar de regenpijp afloopt, zodat het water in het midden blijft staan. Stuur een foto, dan kijk ik mee." },
      { v: "Kun je mijn goot ook in de winter nog leegmaken?", a: "Ja. Staan er bij jou bomen die hun blad laat verliezen, dan is december soms zelfs een beter moment dan oktober, want dan ligt alles erin. Alleen als het vriest of het dak glad is van ijs of sneeuw, wacht ik tot het weer veilig kan. Loopt je goot nu al over bij een bui, wacht dan niet tot het voorjaar." },
    ],
  },
  {
    slug: "wat-kost-dakgoot-schoonmaken",
    datum: "2026-10-21",
    titel: "Wat kost dakgoot schoonmaken?",
    h1: "Wat kost dakgoot schoonmaken? Zo zit de prijs in elkaar",
    metaTitle: "Kosten dakgoot schoonmaken of reinigen | Spoed Dak Service",
    metaDescription:
      `Wat kost dakgoot schoonmaken of reinigen? Eén goot ${GOTEN_PRIJS}. Waar de prijs van afhangt, wat erbij zit en hoe het zit met een prijs per meter.`,
    intro:
      "Goten laten schoonmaken is een klein klusje, maar de prijzen die je online ziet lopen flink uiteen. Hieronder leg ik uit wat ik reken, wat erbij zit en waar de prijs van afhangt. Zo weet je vooraf waar je aan toe bent.",
    secties: [
      { kop: "Wat ik reken", tekst: [
        `Eén goot, bijvoorbeeld alleen de voorgoot, kost ${GOTEN_PRIJS}: blad en mos eruit, de uitloop naar de regenpijp vrijgemaakt en de troep gaat mee.`,
        "Moeten beide goten schoon, heb je een hoekhuis, een twee-onder-een-kap of een vrijstaand huis, of zitten je goten hoog of lastig? Dan hoor je vooraf de vaste prijs. Stuur gerust een foto via WhatsApp, dan kan ik die meestal snel noemen.",
      ] },
      { kop: "Waar de prijs van afhangt", tekst: [
        "Vooral van de lengte van de goten, de hoogte en hoe goed ik erbij kan. Ook telt mee hoe vol de goot zit: na jaren zonder onderhoud zit er soms een dikke laag modder en mos in, met plantjes erin.",
        'Staan er veel bomen bij je huis, dan zitten goten sneller vol. Dan is twee keer per jaar schoonmaken soms slimmer. Zie <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak je je dakgoot moet reinigen</a>.',
      ] },
      { kop: "En een prijs per meter?", tekst: [
        "Je ziet online vaak een prijs per meter goot. Dat klinkt precies, maar je weet meestal niet hoeveel meter goot je hebt, en soms komen er nog voorrijkosten of een minimumbedrag bij. Ik noem liever één vaste prijs voor de hele klus, voordat ik begin.",
      ] },
      { kop: "Wat erbij zit", tekst: [
        "Blad, mos en vuil eruit, de bladvangers gecontroleerd en de uitloop naar de regenpijp vrijgemaakt. Omdat ik toch boven ben, kijk ik meteen naar de pannen, het lood en de goot zelf. Zie ik iets wat aandacht nodig heeft, dan hoor je dat eerlijk, en ook als er niks aan de hand is.",
        'Zit de verstopping dieper in de regenpijp, of lekt de goot zelf? Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>.',
      ] },
      { kop: "Goten schoonmaken bij jou in de buurt", tekst: [
        'Woon je in de regio Den Bosch? Per plaats lees je wat ik daar vaak in de goot tegenkom, van blad onder de bomen tot zand uit de duinen: in <a href="/werkgebied/den-bosch/goten-reinigen/">Den Bosch</a>, <a href="/werkgebied/oss/goten-reinigen/">Oss</a>, <a href="/werkgebied/vught/goten-reinigen/">Vught</a>, <a href="/werkgebied/oisterwijk/goten-reinigen/">Oisterwijk</a>, <a href="/werkgebied/boxtel/goten-reinigen/">Boxtel</a> en <a href="/werkgebied/drunen/goten-reinigen/">Drunen</a>. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.',
      ] },
      { kop: "Zelf doen of laten doen?", tekst: [
        "De lage goot van een schuur of garage kun je prima zelf leeghalen. Bij een goot op hoogte is een ladder op een natte of schuine ondergrond het grootste risico. Dan laat je het liever doen.",
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Wat kost dakgoot reinigen bij een rijtjeswoning?", a: `Eén goot, bijvoorbeeld alleen de voorgoot, kost ${GOTEN_PRIJS}: goot leeg, uitloop naar de regenpijp vrijgemaakt en de troep gaat mee. Beide goten of een groter of hoger huis: dan hoor je de vaste prijs vooraf.` },
      { v: "Wanneer laat ik mijn goten het beste schoonmaken?", a: "In het najaar, als het meeste blad gevallen is. Dan loopt het water in de winter goed weg en voorkom je overlopende goten en vocht in je muren." },
      { v: "Kan het samen met andere klussen?", a: "Ja. Moet er ook iets aan je dak of je goot gebeuren, dan kan dat vaak in dezelfde keer. Je hoort vooraf wat het samen kost." },
      { v: "Mijn goot loopt door naar die van de buren. Kunnen we het samen laten doen?", a: "Ja, dat is vaak handig. Bij een rij huizen loopt de goot meestal gewoon door, en het water van een paar huizen gaat dan naar dezelfde uitloop. Zit die bij de buren dicht, dan loopt de goot bij jou over. Doen jullie het samen, dan maak ik het hele stuk goot in één keer leeg en kijk ik of het water overal weer naar de regenpijp kan. Ieder hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "wat-kost-daklekkage-repareren",
    titel: "Wat kost daklekkage repareren?",
    h1: "Wat kost het om een daklekkage te repareren? (eerlijke prijzen)",
    metaTitle: "Wat kost daklekkage repareren? Prijzen | Spoed Dak Service",
    metaDescription:
      `Wat kost een daklekkage repareren? Een gerichte reparatie kost ${lekPrijs}, inclusief materiaal. Waar de prijs van afhangt en waarom wachten duurder is.`,
    intro:
      "De eerste vraag bij een lek is bijna altijd: wat gaat me dit kosten? Eerlijk antwoord: dat hangt af van de oorzaak en hoe lang het al speelt. Hieronder zet ik de prijzen op een rij zoals ik ze ook aan de telefoon zou noemen: vaste prijs vooraf, geen verrassingen achteraf.",
    secties: [
      { kop: `Een gerichte reparatie: ${lekPrijs}`, tekst: [
        `De meeste lekkages hebben één duidelijke oorzaak: een gebroken pan, losgelaten lood of een versleten naad. Zo'n gerichte reparatie kost ${lekPrijs}, inclusief materiaal. Je hoort het bedrag voordat ik begin.`,
        "Bij spoed buiten kantooruren komt daar een toeslag bij. Ik zeg je eerlijk of het echt niet tot de volgende dag kan wachten.",
      ] },
      { kop: `Wat het per plek op je dak meestal kost`, tekst: [
        `Een losse of kapotte pan, of een nokvorst die is gaan schuiven: dat valt meestal onder een kleine reparatie, ${kleinPrijs}. Hoe je dat vanaf de straat ziet, lees je in <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a> en <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Lood dat los zit bij de schoorsteen of het dakraam, een lekkende kilgoot of een naad in een plat dak: dan zoek ik eerst waar het water echt binnenkomt, en dat valt meestal onder een gerichte lekreparatie, ${lekPrijs}. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>, <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a> en <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
        `Meer werk is het als het lood rond de hele schoorsteen op is, als een kil over de hele lengte vervangen moet of als het hout onder de pannen nat of rot is. Dan kom ik eerst kijken en hoor je vooraf één vaste prijs voor de hele klus. Komt het water via de goot binnen en niet via het dak, lees dan <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: `Schuur, glazen pan of schotel?`, tekst: [
        `Lekt het dak van je schuur of garage, druppelt het onder een glazen pan op zolder, of zit het lek bij een schotel of antenne? Dan is het werk vaak anders dan bij een gewone losse pan. Wat er dan meestal moet gebeuren en waar de prijs van afhangt, lees je in <a href="/kennisbank/dakleer-repareren/">dakleer repareren</a>, <a href="/kennisbank/glazen-dakpan-lekt/">glazen dakpan lekt</a> en <a href="/kennisbank/lekkage-bij-schotel-of-antenne/">lekkage bij een schotel of antenne</a>. Zit je regenpijp binnen in de muur en is het daar nat, lees dan <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a>. Ook bij zo'n klus hoor je vooraf de vaste prijs.`,
      ] },
      { kop: "Waar de prijs van afhangt", tekst: [
        "Drie dingen bepalen de prijs: de oorzaak (een losse pan is zo gepiept, een rotte dakvoet is meer werk), de bereikbaarheid (hoogte, steiger of ladder) en het daktype. Een pannendak repareer je anders dan een plat dak met bitumen of EPDM.",
        "Je ziet online soms prijzen per vierkante meter. Voor een gericht klusje reken ik liever een eerlijke vaste prijs voor de hele reparatie dan een bedrag per meter.",
      ] },
      { kop: "En het opsporen zelf?", tekst: [
        "De natte plek zit zelden onder het echte lek, dus opsporen hoort erbij. Een controle van buiten en op zolder zit vaak gewoon bij de reparatie in. Is er toch gericht meetwerk nodig, zoals een vocht- of rookmeting, dan hoor je vooraf wat dat kost. Meestal vind ik het lek zonder dat extra gereedschap.",
      ] },
      { kop: "Waarom uitstellen juist duur is", tekst: [
        "Dit is de belangrijkste: een klein lek wordt groter als je wacht. Na een paar maanden zijn vaak ook het hout, de isolatie en je plafond nat, en dat herstellen kost veel meer dan het lek zelf. Een klein lek snel laten maken is bijna altijd goedkoper dan wachten.",
        "Daarom pak ik een lek het liefst snel aan: eerst de schade stoppen, dan netjes herstellen.",
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Krijg ik de prijs vooraf te horen?", a: "Altijd. Ik kijk wat de oorzaak is en noem een vaste prijs voordat ik begin, zonder verrassingen achteraf." },
      { v: "Hoe wordt het lek gevonden?", a: "Meestal met een gerichte controle van buiten en op zolder, zonder sloopwerk. Lees daarover in het artikel ‘Daklekkage opsporen’." },
      { v: "Vergoedt mijn verzekering de reparatie?", a: "Bij schade door storm of hagel vaak wel, via je opstalverzekering. Komt het lek door slijtage, dan meestal niet. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving erbij, zodat je het kunt indienen. Meer lees je in het artikel over daklekkage en je verzekering." },
      { v: "Wat kost een lek in een plat dak repareren?", a: `Een gericht lek in een plat dak, bijvoorbeeld bij een naad, de rand of de afvoer, kost meestal net zoveel als een ander lek: ${lekPrijs}, inclusief materiaal. Is de dakbedekking op meer plekken versleten en moet er een groter stuk opnieuw, dan hoor je vooraf een vaste prijs. Meer daarover lees je in het artikel over plat dak repareren of vervangen.` },
      { v: "Hoe lang duurt het om een daklekkage te repareren?", a: "Een gerichte reparatie, zoals een pan vervangen, een stuk lood vastzetten of een naad in een plat dak dichtmaken, is vaak binnen een paar uur klaar. Moet er materiaal besteld worden, of regent het te hard om netjes te werken, dan maak ik het lek eerst tijdelijk dicht en kom ik later terug voor de nette reparatie. Voordat ik begin, zeg ik je hoe lang ik denk bezig te zijn en wat het kost." },
      { v: "Betaal ik voorrijkosten of iets voor het komen kijken?", a: "Voorrijkosten reken ik niet, en een offerte is gratis. Bij een lek hoort het zoeken bij de reparatie: je hoort één vaste prijs voor opsporen en dichten samen, voordat ik begin. Wil je daarnaast je hele dak laten keuren, met een rapport en foto's van elke plek, dan is dat de Dak-APK. Bij spoed 's avonds, 's nachts of in het weekend komt er een toeslag bij, en ook die hoor je vooraf." },
    ],
  },
  {
    slug: "daklekkage-verzekering",
    datum: "2026-10-21",
    titel: "Daklekkage en je verzekering",
    h1: "Daklekkage en je verzekering: wat wordt meestal vergoed?",
    metaTitle: "Daklekkage verzekering: wat wordt vergoed?",
    metaDescription:
      "Lekt je dak? De verzekering vergoedt vaak de schade binnen, maar niet altijd de reparatie van het dak zelf. Zo zit het meestal, en dit leg je vast.",
    intro:
      "Bij een lek is de tweede vraag meestal: betaalt de verzekering dit? Ik ben geen verzekeraar en elke polis is anders, maar in de praktijk zie ik steeds hetzelfde terugkomen. Hieronder lees je hoe het meestal zit en wat je zelf vastlegt voordat je de schade meldt.",
    secties: [
      { kop: "Opstal en inboedel: twee verzekeringen", tekst: [
        "Je opstalverzekering gaat over het huis zelf: het dak, de muren, het plafond. Je inboedelverzekering gaat over je spullen: een nat tapijt, een kast, een bed. Bij daklekkage heb je vaak met allebei te maken. Huur je, dan is het dak de zaak van je verhuurder en meld je het lek eerst daar.",
      ] },
      { kop: "Wat meestal wel wordt vergoed", tekst: [
        'Plotselinge schade door storm, hagel of een omgewaaide boom valt bij de meeste opstalverzekeringen onder de dekking. Waaien er pannen van je dak en regent het daardoor binnen, dan wordt de schade binnen vaak vergoed. Lees ook <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.',
      ] },
      { kop: "Wat meestal niet wordt vergoed", tekst: [
        "Lekkage door slijtage of achterstallig onderhoud: een goot die al jaren vol zit, pannen die al lang poreus zijn, lood dat langzaam is losgekomen. De reparatie van het dak zelf valt dan meestal buiten de dekking. Soms wordt de schade binnen nog wel vergoed. Dat verschilt per polis, dus lees de voorwaarden of bel je verzekeraar.",
      ] },
      { kop: `Was het storm? Zo kijkt je verzekeraar ernaar`, tekst: [
        `In veel polissen is het pas storm bij windkracht 7 of meer. Waait er bij zo'n storm een pan van je dak en regent het daardoor binnen, dan ziet je verzekeraar dat meestal als plotselinge schade. Lekt het bij elke flinke windvlaag door een pan die al lang scheef lag, dan zien ze dat eerder als onderhoud.`,
        `Schrijf daarom de datum op en hoe laat het begon te lekken. Verzekeraars kijken vaak zelf na hoe hard het die dag waaide, dus een goede datum helpt. Lees ook <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
      ] },
      { kop: `Wat je van mij krijgt voor je verzekeraar`, tekst: [
        `Bij lekkage en stormschade maak ik foto's van wat ik aantref en van de reparatie, met een korte omschrijving erbij: waar het lek zat, wat de oorzaak was en wat ik heb gedaan. Die kun je meesturen als je de schade meldt. Of en hoeveel je verzekeraar vergoedt, beslist die zelf. Dat kan ik niet voor je regelen.`,
        `Wil je met de nette reparatie wachten tot de verzekeraar is geweest, dan dek ik een open plek eerst tijdelijk af, zodat het binnen droog blijft. Ook daarvan krijg je foto's.`,
      ] },
      { kop: "Dit leg je vast voordat je de schade meldt", tekst: [
        "Maak foto's van de natte plek binnen en van de schade aan je spullen. Maak vanaf een veilige plek foto's van het dak, zonder zelf het dak op te gaan. Schrijf de datum op en wat voor weer het was. Gooi beschadigde spullen niet meteen weg.",
        "Beperk ondertussen de schade: water opvangen, spullen droog zetten. Verzekeraars verwachten dat je dat doet. Laat het lek ook snel dichtmaken, want schade die erger wordt doordat je lang wacht, wordt niet altijd vergoed.",
      ] },
      { kop: "Lekt het nu?", tekst: [
        'Wacht met het dichtmaken van een lek niet op de verzekeraar. Kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet en bel of WhatsApp me met een foto. Wat een reparatie meestal kost, lees je in <a href="/kennisbank/wat-kost-daklekkage-repareren/">wat kost daklekkage repareren</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage/" },
    faq: [
      { v: "Vergoedt de opstalverzekering daklekkage?", a: "Vaak wel als het lek plotseling ontstond, bijvoorbeeld door storm of hagel. Komt het door slijtage of achterstallig onderhoud, dan meestal niet, of alleen de schade binnen. Kijk altijd in je eigen polisvoorwaarden." },
      { v: "Moet ik met repareren wachten tot de verzekeraar is geweest?", a: "Een noodreparatie om erger te voorkomen mag meestal gewoon, en verzekeraars verwachten dat ook. Maak eerst goede foto's en bewaar de factuur. Over de definitieve reparatie kun je het beste even met je verzekeraar overleggen." },
      { v: "Ik huur mijn huis, wie betaalt de reparatie?", a: "Het dak is de zaak van je verhuurder. Meld het lek daar zo snel mogelijk. Schade aan je eigen spullen valt onder je eigen inboedelverzekering." },
      { v: "Valt daklekkage onder mijn brandverzekering?", a: "Wat veel mensen de brandverzekering noemen, is meestal de opstalverzekering van je huis. Die dekt niet alleen brand, maar vaak ook schade door storm of een plotseling lek. Of jouw lek eronder valt, hangt af van de oorzaak en van je polis. Lekkage door slijtage of achterstallig onderhoud valt er meestal niet onder." },
      { v: "Wordt schade aan mijn muur door een lekkende dakgoot vergoed?", a: "Loopt een goot over of lekt hij omdat hij al lang vol zit of oud is, dan zien veel verzekeraars dat als onderhoud, en dan wordt de schade vaak niet vergoed. Scheurt de goot bij een storm los of raakt hij plotseling lek, dan ligt dat anders. Maak foto's van de goot en van de natte muur, en kijk in je polisvoorwaarden." },
      { v: "Het lek zit bij de buren, maar de schade is bij mij. Wie betaalt?", a: `Dat hangt af van de oorzaak en van de polissen, maar meestal gaat het zo. De reparatie van het dak is de zaak van wie dat stuk dak bezit, dus van je buren. De schade bij jou binnen meld je bij je eigen verzekeraar, en die zoekt verder uit wie wat betaalt. Maak foto's van de schade bij jou en, als het kan, van het dak vanaf de straat. En praat even met je buren, zodat het lek snel gemaakt wordt.` },
      { v: `Vergoedt de verzekering ook het opsporen van het lek?`, a: `Vaak wel, als de schade zelf onder je polis valt. In veel opstalverzekeringen staan opsporingskosten: de kosten om te vinden waar het water vandaan komt, en soms ook het herstel van wat daarvoor open moest. Een noodreparatie om erger te voorkomen wordt ook vaak vergoed. De reparatie van een dak dat versleten is, valt er meestal niet onder. Kijk in je polisvoorwaarden onder opsporingskosten, en bewaar de rekening en de foto's van de schade.` },
    ],
  },
  {
    slug: "verstopte-regenpijp-lekkende-dakgoot",
    titel: "Verstopte regenpijp?",
    h1: "Verstopte regenpijp of lekkende dakgoot: oorzaken en oplossing",
    metaTitle: "Verstopte regenpijp & lekkende dakgoot | Spoed Dak Service",
    metaDescription:
      "Verstopte regenpijp of lekkende dakgoot? Loopt het water langs je gevel, dan zit de afvoer meestal dicht. Zo herken je het en zo los ik het op.",
    intro:
      "Loopt het water bij regen over de goot of langs je gevel naar beneden, dan is de kans groot dat de regenpijp verstopt zit. Vervelend, maar zelden ingewikkeld. Hieronder waar het vandaan komt, waarom je het niet moet laten zitten, en hoe ik het verhelp.",
    secties: [
      { kop: "Waar het door komt", tekst: [
        "Blad, mos, takjes en zand komen vanaf het dak in de goot terecht en zakken door naar de regenpijp, waar het zich ophoopt. Vooral in het najaar gaat dat hard, en in de winter kan een verstopping bevriezen en de afvoer helemaal dichtzetten.",
        "Een lekkende dakgoot is vaak hetzelfde probleem: de goot loopt over omdat het water niet weg kan, niet omdat de goot zelf kapot is.",
      ] },
      { kop: "Hoe je het herkent", tekst: [
        "Water dat bij regen over de gootrand klotst, een straaltje langs de gevel, of vochtige plekken op de muur onder de goot. Soms lekt het bij de verbindingen van de pijp.",
        'Is de regenpijp zelf gescheurd of zit hij los van de muur? Lees dan <a href="/diensten/regenpijp-vervangen/">regenpijp vervangen</a>.',
        `Loopt je regenpijp niet buiten langs de gevel, maar binnen in de muur of door een kast, dan zie je een verstopping of lek vaak pas binnen, aan een natte plek. Lees dan <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a>.`,
      ] },
      { kop: "Waarom je het niet moet laten zitten", tekst: [
        "Blijft de afvoer dicht, dan trekt het overlopende water vocht in je gevel en fundering. Dat geeft vochtplekken, schimmel en op den duur zelfs scheuren. Dat is veel duurder dan de afvoer op tijd vrij laten maken.",
      ] },
      { kop: "Hoe ik het oplos", tekst: [
        "Ik maak eerst de goot leeg (blad, mos, modder), controleer of de instroom naar de regenpijp vrij is en kijk of het water weer vrij de regenpijp in loopt. Zit de verstopping diep in de pijp, dan zeg ik dat eerlijk. Last van bomen in de buurt? Dan adviseer ik bladroosters zodat het minder snel terugkomt.",
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Kan ik een verstopte regenpijp zelf ontstoppen?", a: "Soms. Zit er alleen wat blad bovenin de uitloop van een lage goot, dan kun je dat zelf weghalen. Maar op hoogte werken is niet zonder risico, en zit de verstopping dieper in de pijp, dan krijg je hem er zo meestal niet uit. Ik maak de goot en de uitloop naar de regenpijp veilig leeg en kijk of het water weer wegloopt. Zit het dieper, dan zeg ik eerlijk wat er nodig is." },
      { v: "Hoe voorkom ik dat het terugkomt?", a: "Eén keer per jaar de goot laten reinigen (najaar) en eventueel bladroosters plaatsen. Staan er bomen vlakbij, dan twee keer per jaar." },
      { v: "Mijn regenpijp lekt bij de verbindingen. Hoe kan dat?", a: "Vaak zit de pijp verderop dicht, bijvoorbeeld in een bocht, bij een bladvanger of op de plek waar hij de grond in gaat. Het water staat dan in de pijp en komt bij elke verbinding naar buiten. Soms zit een stuk pijp verkeerd om, met het wijde eind naar beneden in plaats van naar boven, en dan loopt het water bij elke bui bij die naad naar buiten. Kijk tijdens een bui of het water ook onderaan uit de pijp komt, en stuur me een foto van de plek waar het lekt." },
      { v: "Moet mijn regenpijp vervangen worden als hij steeds verstopt raakt?", a: "Niet meteen. Meestal zit het in de goot of de uitloop naar de regenpijp, en dan is leegmaken genoeg. Raakt hij steeds op dezelfde plek verstopt, bijvoorbeeld in een bocht of waar hij de grond in gaat, of is hij gescheurd of los van de muur, dan kan dat stuk worden vervangen. Ik kijk eerst waar het zit, en je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "dakgoot-lekt",
    datum: "2026-10-21",
    titel: "Dakgoot lekt?",
    h1: "Dakgoot lekt: bij de naad, de hoek of de regenpijp",
    metaTitle: "Dakgoot lekt? Lekkende goot repareren | Spoed Dak Service",
    metaDescription:
      "Druppelt je dakgoot bij een naad, een hoek of bij de regenpijp? Zo zie je of de goot vol zit of echt lek is, en wanneer repareren of vervangen loont.",
    intro:
      "Water dat uit je dakgoot druppelt of langs de gevel loopt: vaak zit de goot gewoon vol. Maar soms is de goot zelf lek, en dat zie je meestal op een paar vaste plekken. Hieronder hoe je het verschil ziet en wat eraan te doen is.",
    secties: [
      { kop: "Vol of echt lek?", tekst: [
        'Loopt het water over de voorkant van de goot, over een groot stuk of midden in de goot? Dan zit de goot of de uitloop meestal vol. Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>.',
        "Druppelt het op één vaste plek, ook nog een tijdje na de bui? Dan is de goot daar waarschijnlijk echt lek.",
      ] },
      { kop: "Waar een goot meestal lekt", tekst: [
        "Bij de naden, waar twee stukken goot aan elkaar zitten. Bij de hoeken van het huis. En bij de uitloop, het stuk waar de goot overgaat in de regenpijp.",
        "Bij zinken goten zie je na jaren ook kleine gaatjes of plekken waar het zink dun is geworden. Bij kunststof goten zit het vaker in een verbinding of een rubber dat is uitgedroogd. En een goot die doorhangt door een losse beugel, houdt water vast op de verkeerde plek. Daar loopt het dan over de rand.",
      ] },
      { kop: "Lekt het bij de regenpijp?", tekst: [
        "Druppelt het bij de aansluiting van goot en regenpijp, dan zit de uitloop vaak los of lekt de verbinding. Lekt het verderop uit de regenpijp zelf, bij een verbinding of een scheur, dan moet dat stuk pijp meestal opnieuw vast of vervangen worden.",
      ] },
      { kop: `Nat binnen, bovenin de muur?`, tekst: [
        `Zie je buiten geen druppel, maar wel binnen een natte plek bovenin de muur, vlak onder het plafond? Dan kan het water achter de goot langs de muur in lopen, bijvoorbeeld omdat de goot een stukje is gezakt. Lees dan <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a> en <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>.`,
        `Loopt er aan die kant van je huis geen regenpijp langs de gevel, dan zit hij vaak binnen, in de muur of in een kast. Een lekkende uitloop zie je dan alleen binnen. Hoe je dat herkent, lees je in <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a>. Wat je meteen doet als het binnen nat wordt, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: "Tot het gemaakt is: wat je zelf kunt doen", tekst: [
        `Druppelt de goot buiten op één plek, dan is het meestal geen ramp als het een paar dagen duurt. Valt de druppel boven je stoep, je terras of je voordeur, zet er dan een emmer of een bak onder. Zo loopt er niemand door een plas, en bij vorst ligt daar anders zo een plek ijs.`,
        `Maak tijdens een bui een foto of een filmpje van de plek waar het druppelt, het liefst vanaf de straat of uit een raam. Dan zie ik of het bij een naad, een hoek of de uitloop zit, en neem ik meteen het goede materiaal mee.`,
        `Ga niet met een ladder bij de goot staan om het zelf dicht te maken, zeker niet als het nat of koud is, en trek niet aan een goot die los hangt. Komt het water binnen, bovenin de muur of langs een kozijn, dan is het wel spoed. Kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet.`,
      ] },
      { kop: "In de winter: ijs in de goot", tekst: [
        "Blijft er water in de goot staan en gaat het vriezen, dan zet het ijs uit. Dat drukt naden en hoeken open, vooral bij zinken goten en bij een goot die een beetje doorhangt. Je merkt het pas als het dooit: dan druppelt het ineens op een plek die eerst droog bleef. Een goot die voor de winter leeg is en goed op afschot hangt, heeft daar veel minder last van.",
      ] },
      { kop: "Waarom je het niet laat zitten", tekst: [
        "Een lekkende goot lijkt klein, maar het water loopt elke bui langs dezelfde plek van je gevel. Dat geeft natte muren, groene aanslag en op den duur schade aan het metselwerk of de houten boeidelen.",
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        'Een lekkende naad, een losse beugel of een lekkende uitloop is vaak goed te herstellen. Is de goot op meerdere plekken lek of zit er roest in, dan is vervangen op termijn meestal goedkoper dan blijven repareren. Ik zeg eerlijk wat in jouw geval slim is. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.',
      ] },
      { kop: "Lekkende dakgoot en je verzekering", tekst: [
        'Een goot die door ouderdom lek is geraakt, valt bij de meeste verzekeringen niet onder de dekking. Voor de schade aan je gevel of binnen ligt dat soms anders, maar dat verschilt per polis. Waait de goot los bij een storm, dan is het vaak wel plotselinge schade. Meer hierover lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        `Wat het kost, hangt af van wat er lek is: een naad, een hoek, de uitloop of een losse beugel. Stuur een foto van de plek waar het druppelt, dan hoor je vooraf wat het kost. Dat geldt ook als de goot helemaal vervangen moet worden. Zit de goot alleen vol, dan is het gewoon <a href="/diensten/goten-reinigen/">goten reinigen</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
    faq: [
      { v: "Kan ik een lekkende dakgoot zelf dichtkitten?", a: "Een likje kit houdt het soms even droog, maar op een natte of vuile goot hecht het slecht en na een winter lekt het vaak weer. En op een ladder bij de goot werken is niet zonder risico. Laat liever kijken waar het echt lekt." },
      { v: "Mijn goot lekt alleen bij harde regen, is hij dan lek?", a: "Niet altijd. Bij een stortbui kan een goot die een beetje vol zit gewoon overlopen. Druppelt het ook na een gewone bui op dezelfde plek, dan is er waarschijnlijk echt iets lek." },
      { v: "Kun je snel komen als het water langs de muur loopt?", a: "Bel of WhatsApp me met een foto van de plek. Dan zie ik vaak al of de goot vol zit of lek is, en hoor je wanneer ik kan komen." },
      { v: "Wat kost het om een lekkende dakgoot te repareren?", a: "Dat hangt af van wat er lek is: een naad, een hoek, de uitloop of een losse beugel. Ik kijk eerst wat er echt mis is en je hoort de vaste prijs vooraf, voordat ik begin." },
      { v: "Kan een dakgoot kapotvriezen?", a: "Een goot waar water in blijft staan, kan bij vorst schade krijgen. Het ijs zet uit en drukt naden en hoeken open. Daarom is het slim om je goot voor de winter leeg te laten maken." },
      { v: "Is lekkage aan je dakgoot spoed?", a: "Meestal niet, maar laat het niet de hele winter zitten. Druppelt de goot buiten op één plek, dan kan het vaak een paar dagen wachten. Komt het water binnen, bovenin de muur of langs een kozijn, of hangt de goot los na een storm, dan wel: bel of app me met een foto. Twijfel je, stuur dan een foto via WhatsApp, dan zeg ik eerlijk of het vandaag moet." },
      { v: `Een naad in mijn zinken goot lekt. Kun je die solderen?`, a: `Ja. Is het zink rond de naad of de hoek nog goed, dan soldeer ik die naad opnieuw. Is het zink op meer plekken dun, maar hangt de goot nog goed in de beugels, dan kan ik hem van binnen coaten, zodat hij weer waterdicht is. Is het zink op, dan vervang ik dat stuk of de hele goot. Solderen en coaten kan alleen op een droge goot, dus bij regen of vorst wacht ik op een droge dag. Je hoort vooraf wat het kost.` },
    ],
  },
  {
    slug: "water-achter-dakgoot",
    datum: "2026-10-30",
    titel: "Water achter je dakgoot?",
    h1: "Water loopt achter de dakgoot langs de muur: hoe kan dat?",
    metaTitle: "Water achter de dakgoot langs de muur | Spoed Dak Service",
    metaDescription:
      "Loopt het water achter je dakgoot langs de gevel, terwijl de voorkant droog blijft? Vaak hangt de goot te laag of loopt het water onder de pannen mis.",
    intro:
      "Een goot die overloopt, zie je aan de voorkant. Maar soms blijft de voorkant droog en loopt het water achter de goot langs de muur naar beneden. Dan zit het meestal niet in de goot zelf, maar in hoe het water van het dak in de goot komt. Hieronder lees je hoe je dat herkent en wat eraan te doen is.",
    secties: [
      { kop: "Zo herken je het", tekst: [
        "Na een bui zie je een natte of groene streep op de gevel, direct onder de goot, terwijl de voorkant van de goot droog is. Soms druppelt het tussen de goot en de muur door op de vensterbank of de stoep. Binnen zie je het soms als een natte plek bovenin de muur of boven een kozijn op de bovenverdieping.",
        'Komt het water over de voorkant van de goot, dan zit de goot of de uitloop meestal vol. Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>. Druppelt het op één vaste plek uit de goot zelf, kijk dan bij <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.',
      ] },
      { kop: "Waar het meestal door komt", tekst: [
        "De goot hangt te laag. Na veel jaren zakt een goot een stukje, of hij is ooit te laag opgehangen. De onderste pannen steken dan niet ver genoeg boven de goot uit, en het water druipt van de pan achter de goot langs in plaats van erin.",
        "Het water van onder de pannen komt niet in de goot. Onder de pannen ligt vaak een folie die regen en stuifwater opvangt, en die hoort onderaan in de goot uit te komen. Stopt de folie te vroeg of is hij aan de onderkant vergaan, dan loopt dat water achter de goot langs de muur. Je merkt het vooral bij harde wind en regen.",
        "De goot hangt scheef. Hangt hij naar achteren of staan de beugels krom, dan loopt een volle goot over de achterrand naar de muur, in plaats van over de voorkant.",
      ] },
      { kop: "Bij een bakgoot is het anders", tekst: [
        'Ligt je goot niet aan de voorkant van het dak, maar als een bak in de dakrand achter een houten lijst? Dan komt het water bij een lek vaak binnen en niet langs de buitenmuur. Lees dan <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.',
      ] },
      { kop: "Waarom je het niet laat zitten", tekst: [
        "Water dat bij elke bui achter de goot langs loopt, maakt de bovenkant van je gevel steeds nat. Daar komt groene aanslag op, en bij vorst kan de buitenkant van de stenen gaan afbrokkelen. Ook het hout aan de dakrand, zoals het boeiboord en de gootklossen, wordt steeds nat en gaat op den duur rotten.",
      ] },
      { kop: "Hoe ik het oplos", tekst: [
        'Ik kijk eerst hoe de goot hangt en waar het water precies achter de goot komt. Hangt hij te laag of scheef, dan zet ik hem weer op de goede hoogte en op afschot naar de regenpijp. Komt het water van onder de pannen, dan zorg ik dat het van de folie weer in de goot loopt, bijvoorbeeld met een strook die het water de goot in leidt. Is het hout achter de goot al zacht, dan zeg ik dat eerlijk voordat ik verder ga. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er nodig is: een goot die alleen wat hoger moet, is minder werk dan een stuk goot dat vervangen moet. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
    faq: [
      { v: "Waarom loopt er water achter mijn dakgoot langs de muur?", a: "Meestal omdat de goot te laag of scheef hangt, zodat het water van de onderste pannen achter de goot langs druipt. Het kan ook water zijn dat over de folie onder de pannen naar beneden loopt en niet in de goot uitkomt. Een lek in de goot zelf zie je meestal als een druppel op één vaste plek." },
      { v: "Hoe zie ik of mijn goot te laag hangt?", a: "Kijk vanaf de overkant van de straat of vanuit een raam naar de onderste rij pannen. Die hoort een stukje boven de goot uit te steken, zodat het water er vanzelf in valt. Eindigt de pan al voor de goot, of zit er een kier tussen pan en goot, dan hangt de goot waarschijnlijk te laag. Maak liever een foto vanaf de grond dan dat je zelf de ladder op gaat." },
      { v: "Is water achter de goot een daklek?", a: "Niet echt, maar het kan er wel op lijken. Komt het binnen bovenin de muur of boven een kozijn, dan denken veel mensen aan een lek in het dak. Vaak is het water dat achter de goot langs de gevel loopt en zo de muur in trekt. Stuur een foto van de natte plek binnen en van de goot buiten, dan zie ik vaak al waar het zit." },
      { v: "Kan ik het zelf oplossen met een stukje kit?", a: "Meestal niet. Het water loopt niet door een gat, maar langs de verkeerde kant van de goot. Kit tussen goot en muur houdt het water dan vaak juist vast. De goot moet goed hangen, en het water van het dak moet er weer in komen." },
      { v: "Mijn goot is pas vervangen, en nu loopt het water erachter langs. Hoe kan dat?", a: "Vaak hangt de nieuwe goot net te laag of te ver van de onderste pannen, zodat het water van de pan achter de goot langs valt. Het kan ook zijn dat de folie onder de pannen bij het vervangen is ingekort en niet meer in de goot uitkomt. Kijk vanaf de straat of de onderste pannen nog een stukje boven de goot uitsteken. Is het werk pas gedaan, bel dan eerst degene die de goot heeft opgehangen, want meestal lost die het zelf op. Lukt dat niet, stuur me dan een foto van de goot en van de natte muur. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "bakgoot-lekt",
    datum: "2026-10-23",
    titel: "Bakgoot lekt?",
    h1: "Bakgoot lekt: water binnen langs de gevel of het plafond",
    metaTitle: "Bakgoot lekt: water binnen bij de gevel | Spoed Dak Service",
    metaDescription:
      "Een bakgoot ligt in de rand van het dak. Lekt hij, dan komt het water vaak binnen: bovenin de buitenmuur of langs het plafond. Zo herken je het en dit doe je eraan.",
    intro:
      "Bij veel oudere huizen hangt de goot niet aan de voorkant van het dak, maar ligt hij als een bak in de dakrand, achter een houten lijst. Dat heet een bakgoot. Lekt een gewone goot, dan druppelt het buiten. Lekt een bakgoot, dan loopt het water vaak naar binnen. Hieronder lees je hoe je dat herkent en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, haal spullen weg bij de natte muur en maak een foto van de plek. Ga niet zelf het dak op en ga niet met een ladder bij de goot staan als het nat is. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Zo herken je een lekkende bakgoot", tekst: [
        "Een natte plek bovenin de buitenmuur, vlak onder het plafond, of een vochtrand langs het plafond aan de straatkant of de tuinkant. Bladderende verf of zacht hout aan de gootlijst buiten. Water dat na een bui achter de goot langs de gevel naar beneden loopt, terwijl de voorkant van de goot droog blijft.",
        "Meestal zie je het voor het eerst na een flinke bui, of als de goot een tijd vol blad heeft gelegen.",
      ] },
      { kop: "Waar een bakgoot meestal lekt", tekst: [
        "Bij de naden in het zink, en in de hoeken waar twee stukken samenkomen. Bij de uitloop naar de regenpijp, die bij een bakgoot vaak door de bodem van de goot gaat. En op plekken waar het zink na veel jaren dun is geworden, vaak daar waar blad en water lang bleven liggen.",
        "Zink zet uit als het warm is en krimpt als het koud is. Kan het dat niet goed, dan trekken de naden na verloop van tijd open.",
      ] },
      { kop: "Vol of echt lek?", tekst: [
        'Soms is er niets lek en zitten de bakgoot of de uitloop gewoon vol blad. Dan komt het water hoger te staan dan de rand van het zink en loopt het zo naar binnen. Dan is de goot leegmaken genoeg, zie <a href="/diensten/goten-reinigen/">goten reinigen</a>. Druppelt je goot buiten op één plek, lees dan <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.',
      ] },
      { kop: "Waarom je er niet mee wacht", tekst: [
        "Een bakgoot ligt op hout: de gootbak en de balken eronder. Loopt daar bij elke bui water langs, dan gaat dat hout rotten, en dat zie je pas als het al ver is. Ook de muur en het plafond eronder worden nat. Hoe eerder het lek dicht is, hoe kleiner de klus meestal blijft.",
      ] },
      { kop: "Repareren of opnieuw bekleden?", tekst: [
        'Een lekke naad, een losse hoek of een lekkende uitloop is vaak goed te herstellen. Is het zink op veel plekken dun of zit het hout eronder al zacht, dan is het slimmer om de bakgoot in één keer opnieuw te bekleden. Ik kijk eerst wat er echt aan de hand is en zeg eerlijk wat in jouw geval verstandig is. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.',
      ] },
      { kop: `Een zinken bakgoot: solderen of van binnen coaten`, tekst: [
        `Zit het lek in een naad of een hoek en is het zink eromheen nog goed, dan soldeer ik die naad opnieuw. Is het zink op meer plekken dun, maar ligt de bak nog goed en is het hout eronder stevig, dan kan ik de goot van binnen coaten, zodat hij weer waterdicht is. Solderen en coaten kan alleen op een droge goot, dus bij regen of vorst wacht ik op een droge dag. Hoe ik kies tussen solderen, coaten en vervangen, lees je in <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
      ] },
      { kop: "Bakgoten in de regio Den Bosch", tekst: [
        `Bakgoten kom je in de regio Den Bosch vooral tegen bij huizen van voor de oorlog, zoals in de Muntel en de Vliert in Den Bosch, en bij de oudere villa's en herenhuizen in Vught. In Oisterwijk ligt de goot bij oude villa's vaak in een houten gootlijst. Wat ik daar tegenkom en hoe ik het aanpak, lees je bij dakgoot repareren in <a href="/werkgebied/den-bosch/dakgoot-vervangen/">Den Bosch</a>, <a href="/werkgebied/vught/dakgoot-vervangen/">Vught</a> en <a href="/werkgebied/oisterwijk/dakgoot-vervangen/">Oisterwijk</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er lek is, hoe lang de goot is en of het hout eronder nog goed is. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
    faq: [
      { v: "Wat is een bakgoot?", a: "Een goot die niet aan de voorkant van het dak hangt, maar in de rand van het dak ligt. Meestal is het een houten bak met zink erin en een houten lijst aan de voorkant. Je ziet ze vaak bij huizen van voor de oorlog en bij oudere rijtjes." },
      { v: "Waarom lekt een bakgoot naar binnen?", a: "Omdat hij op en in het dak ligt. Komt er water door het zink, dan loopt het niet naar buiten, maar in het hout en de muur eronder. Daarom zie je een lekkende bakgoot vaak het eerst binnen." },
      { v: "Kan ik een lekkende bakgoot zelf dichtkitten?", a: "Een likje kit houdt het soms even droog, maar op nat of vuil zink hecht het slecht en na een winter lekt het vaak weer. En aan de dakrand werken is niet zonder risico. Laat liever kijken waar het echt lekt." },
      { v: "Kun je snel komen als het binnen nat wordt?", a: "Bel of WhatsApp me met een foto van de natte plek binnen en van de goot buiten. Dan hoor je wanneer ik kan komen." },
      { v: "Kan een bakgoot vervangen worden door een gewone hangende goot?", a: "Soms wel, maar het verandert de voorkant van je huis. Bij een monument of in een beschermd stadsgezicht, zoals in de binnenstad van Den Bosch of in vesting Heusden, mag dat vaak niet zomaar. Meestal is het slimmer om de bakgoot te herstellen of opnieuw te bekleden. Ik zeg eerlijk wat bij jouw huis kan." },
      { v: "Hoe vaak moet een bakgoot leeg?", a: "Minstens één keer per jaar, het liefst in het najaar als het blad gevallen is. Staan er bomen vlak bij je huis, dan vaker. Bij een bakgoot is dat extra belangrijk, want loopt hij over, dan komt het water vaak binnen." },
      { v: `Is een lekkende bakgoot spoed?`, a: `Komt het water binnen, bovenin de muur of langs het plafond, dan wel: bel of app me met een foto van de natte plek en van de goot buiten. Een bakgoot ligt op hout, en elke bui die daar langs loopt, maakt de klus later groter. Druppelt het alleen buiten achter de goot langs en blijft het binnen droog, dan kan het meestal een paar dagen wachten.` },
    ],
  },
  {
    slug: "hoe-lang-gaat-een-dakgoot-mee",
    datum: "2026-10-31",
    titel: "Hoe lang gaat een dakgoot mee?",
    h1: "Hoe lang gaat een dakgoot mee, en wanneer is vervangen slimmer?",
    metaTitle: "Hoe lang gaat een dakgoot mee? | Spoed Dak Service",
    metaDescription: `Hoe lang gaat een zinken of kunststof dakgoot mee? Zo zie je dat je goot op raakt, wanneer repareren nog loont en wanneer vervangen slimmer is.`,
    intro: `Lekt je goot voor de tweede of derde keer, dan vraag je je af of hij er niet gewoon uit moet. Dat hangt af van het materiaal, hoe oud hij is en hoe hij erbij hangt. Hieronder lees je hoe lang een goot meestal meegaat, hoe je ziet dat hij op raakt en wanneer repareren nog loont.`,
    secties: [
      { kop: "Zink, kunststof of een bakgoot", tekst: [
        `De meeste goten in de regio Den Bosch zijn van zink of van kunststof. Zink zie je vooral bij oudere huizen en villa's, vaak ook als bakgoot in de rand van het dak. Kunststof hangt vooral aan huizen vanaf de jaren '70, en bij veel oudere huizen is de zinken goot ooit vervangen door kunststof.`,
      ] },
      { kop: "Hoe lang gaat een goot mee?", tekst: [
        `Een vaste leeftijd is er niet. Een zinken goot die goed op afschot hangt en niet steeds vol blad ligt, gaat vaak tientallen jaren mee. Kunststof gaat in de regel minder lang mee: door zon en vorst wordt het na veel jaren hard en bros. Bij kunststof goten van een jaar of veertig oud zie ik dat vaak.`,
        `Hoe lang het bij jou duurt, hangt vooral af van het onderhoud. Een goot waar elk jaar weken water en blad in blijft staan, slijt op die plek veel sneller dan de rest.`,
      ] },
      { kop: "Zo zie je dat een zinken goot op raakt", tekst: [
        `Witte of grijze vlekken en kleine putjes in de bodem, vaak op de plek waar het blad altijd blijft liggen. Naden die steeds opnieuw gaan lekken, ook als ze net hersteld zijn. En groene of donkere strepen op de gevel onder de goot, omdat er al een tijd water doorheen druppelt.`,
      ] },
      { kop: "Zo zie je dat een kunststof goot op raakt", tekst: [
        `Het kunststof is verkleurd en dof en voelt hard aan. Er komen haarscheurtjes bij de hoeken en de verbindingen. Hoekstukken of eindstukken schieten los, vaak na een vorstperiode. En de goot gaat tussen de beugels doorhangen, zodat er na een bui water in blijft staan.`,
      ] },
      { kop: "Wanneer repareren nog loont", tekst: [
        `Lekt de goot op één naad, één hoek of bij de uitloop naar de regenpijp, en is de rest van het materiaal nog goed? Dan is repareren meestal de slimste keus. Hangt hij door omdat een beugel los of krom is, dan hang ik hem weer op afschot. Dat is minder werk dan een nieuwe goot, en je kunt er vaak nog jaren mee vooruit.`,
      ] },
      { kop: "Wanneer vervangen slimmer is", tekst: [
        `Lekt de goot op meer plekken tegelijk, is het zink over een groot stuk dun, of breekt het kunststof als je erop drukt? Dan houdt een reparatie het meestal niet lang, en betaal je over een jaar weer. Dan zeg ik eerlijk dat een nieuwe goot slimmer is.`,
        `Is het hout achter of onder de goot zacht geworden, dan moet dat eerst hersteld worden. Anders houdt ook een nieuwe goot het niet lang.`,
      ] },
      { kop: "Zink of kunststof als hij toch vervangen moet?", tekst: [
        `Zink gaat langer mee en past bij een ouder huis. Kunststof is voordeliger en vraagt weinig onderhoud. Bij een monument of in een beschermd stadsgezicht, zoals de binnenstad van Den Bosch of vesting Heusden, mag je niet zomaar een ander materiaal kiezen. Vraag dat eerst na bij de gemeente.`,
      ] },
      { kop: "Dakgoot repareren of vervangen bij jou in de buurt", tekst: [
        `Woon je in de regio Den Bosch? Wat ik per plaats aan goten tegenkom, lees je bij dakgoot repareren in <a href="/werkgebied/den-bosch/dakgoot-vervangen/">Den Bosch</a>, <a href="/werkgebied/vught/dakgoot-vervangen/">Vught</a>, <a href="/werkgebied/oss/dakgoot-vervangen/">Oss</a>, <a href="/werkgebied/veghel/dakgoot-vervangen/">Veghel</a>, <a href="/werkgebied/uden/dakgoot-vervangen/">Uden</a>, <a href="/werkgebied/boxtel/dakgoot-vervangen/">Boxtel</a>, <a href="/werkgebied/sint-michielsgestel/dakgoot-vervangen/">Sint-Michielsgestel</a>, <a href="/werkgebied/oisterwijk/dakgoot-vervangen/">Oisterwijk</a> en <a href="/werkgebied/waalwijk/dakgoot-vervangen/">Waalwijk</a>. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Dat hangt af van de lengte van de goot, het materiaal en hoe goed ik erbij kan. Eén naad of hoek herstellen is iets heel anders dan een nieuwe goot over de hele gevel. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot repareren of vervangen", href: "/diensten/dakgoot-vervangen/" },
    faq: [
      { v: "Hoe lang gaat een zinken dakgoot mee?", a: `Bij goed onderhoud vaak tientallen jaren. Hoe lang precies, hangt vooral af van of er water en blad in blijft staan. Op die plekken wordt het zink het eerst dun.` },
      { v: "Kan een oude zinken goot nog gerepareerd worden?", a: `Vaak wel, als het lek op één naad, één hoek of bij de uitloop zit en de rest van het zink nog stevig is. Is het zink over een groot stuk dun of zitten er op veel plekken gaatjes in, dan zeg ik eerlijk dat vervangen slimmer is.` },
      { v: "Waarom wordt mijn kunststof goot bros?", a: `Door jaren zon en vorst wordt kunststof hard. Het zet ook uit als het warm is en krimpt bij kou, en daardoor gaan verbindingen en hoekstukken na een tijd los. Breekt het als je erop drukt, dan is de goot op.` },
      { v: "Moet de regenpijp mee als de goot vervangen wordt?", a: `Niet altijd. Is de regenpijp nog heel en loopt het water goed weg, dan kan hij vaak blijven. Ik kijk wel naar de uitloop en de bovenkant van de pijp, want die vervang je makkelijk in één keer mee. Je hoort vooraf wat het kost.` },
    ],
  },
  {
    slug: "stormschade-eerste-hulp",
    titel: "Stormschade: eerste hulp",
    h1: "Stormschade aan je dak: eerste hulp en je verzekering",
    metaTitle: "Stormschade dak: eerste hulp | Spoed Dak Service",
    metaDescription:
      "Stormschade aan je dak? Weggewaaide pannen of een open dak laten regen binnen. Wat je nu zelf doet, wat je beter laat en hoe het zit met je verzekering.",
    intro:
      "Na een storm telt elk uur: losse of weggewaaide pannen en open plekken laten meteen regen binnen. Het belangrijkste is rust houden, je veiligheid voorop zetten en snel de schade laten beperken. Hieronder de stappen.",
    secties: [
      { kop: "Eerst: je veiligheid", tekst: [
        "Ga niet zelf het dak op tijdens of vlak na een storm: nat, winderig en met losse delen is dat te gevaarlijk. Blijf uit de buurt van loshangende pannen of delen die naar beneden kunnen komen, ook op de grond.",
        'Sijpelt er water naar binnen zonder dat er een storm is geweest, dan zit de oorzaak waarschijnlijk elders (losse pan, lood, verstopte goot). Kijk dan bij <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a> voor de eerste stappen en de meest voorkomende oorzaken.',
      ] },
      { kop: "Maak foto's en beperk de schade", tekst: [
        "Maak van een veilige plek foto's van de schade; die heb je straks nodig voor je verzekering. Vang binnen lekwater op en zet spullen droog. Het écht afdekken van het dak laat je aan een vakman over.",
      ] },
      { kop: "Je verzekering", tekst: [
        "Storm- en hagelschade valt vaak onder je opstalverzekering. Meld de schade bij je verzekeraar en bewaar de foto's. Ik lever een duidelijke omschrijving en foto's aan van wat ik aantref en herstel, zodat jij het kunt indienen.",
      ] },
      { kop: "Na de storm: kijk eerst vanaf de grond", tekst: [
        "Is de storm voorbij en is het binnen droog? Kijk dan vanaf de straat of de tuin even goed naar je dak. Let op pannen die scheef liggen of missen, een nok die niet meer recht loopt, lood bij de schoorsteen of het dakraam dat omhoog staat, en een goot die los hangt. Ligt er specie of een stuk pan in de goot of op de grond, dan zit er iets los.",
        'Ga daarna met een zaklamp op zolder kijken. Zie je ergens daglicht, of een natte plek op het hout of de folie, maak er dan een foto van. Zit de nok los, lees dan <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>. Lekt het sinds de storm alleen als het hard waait, lees dan <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
      ] },
      { kop: "Wanneer je moet bellen", tekst: [
        'Een open dak of een lek waar nu water binnenkomt, is spoed. Dan stop ik eerst de schade, door af te dekken of tijdelijk dicht te maken, en daarna herstel ik het netjes. Bel of WhatsApp me met een foto, dan hoor je meteen wanneer ik kan komen. Wat je tot die tijd zelf doet, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Storm voorspeld? Dit kun je vooraf doen", tekst: [
        "Wordt er een zware storm voorspeld, loop dan een paar dagen vooraf een rondje om je huis en kijk vanaf de straat en de tuin naar je dak. Ligt er een pan scheef, staat het lood bij de schoorsteen omhoog of liggen er brokjes specie in de goot, stuur me dan een foto via WhatsApp. Een losse pan of nokvorst is voor de storm vaak met een kleine reparatie vast te zetten, en anders neemt de wind hem mee.",
        "Zet tuinmeubels, een parasol of een trampoline vast of zet ze binnen, en haal losse spullen van je balkon of platte dak. Zulke spullen waaien bij een storm zo tegen een raam of tegen het dak van de buren.",
        `Zit je goot vol blad, laat hem dan voor de storm <a href="/diensten/goten-reinigen/">leegmaken</a>. Een storm komt vaak met veel regen, en een volle goot loopt dan over. Maak ook alvast een paar foto's van je dak vanaf de straat. Heb je na de storm schade, dan kun je je verzekeraar laten zien hoe je dak er daarvoor bij lag.`,
      ] },
    ],
    dienst: { label: "Bekijk: stormschade", href: "/diensten/stormschade/" },
    faq: [
      { v: "Moet ik zelf het dak op om de schade af te dekken?", a: "Nee, doe dat niet, zeker niet vlak na een storm. Bel mij, ik dek het veilig af en herstel daarna." },
      { v: "Vergoedt mijn verzekering stormschade?", a: "Vaak wel via de opstalverzekering. Ik lever foto's en een omschrijving aan zodat je het kunt indienen; check de voorwaarden bij je verzekeraar." },
      { v: "Hoe snel moet ik stormschade melden bij mijn verzekering?", a: "Zo snel als je kunt. Hoe snel precies, staat in je polisvoorwaarden. Maak meteen foto's van de schade, binnen en vanaf de straat van je dak, en bewaar die." },
      { v: "Wat doe je bij een noodreparatie na een storm?", a: "Eerst zorg ik dat er geen water meer binnenkomt. Liggen er pannen of nokvorsten los, dan leg ik ze terug of vervang ik ze. Is een stuk dak open en kan het niet meteen goed, dan dek ik het eerst af en kom ik daarna terug voor de nette reparatie. Je hoort vooraf wat het kost." },
      { v: "Wie betaalt als er een pan van mijn dak op de auto of het dak van de buren valt?", a: "Bij een echte storm geldt dat vaak als overmacht. Dan loopt de schade meestal via de verzekering van de buren of van de auto. Lag de pan al lang zichtbaar los, dan kan het anders liggen. Maak foto's van je dak en van de schade, en meld het bij je eigen verzekeraar. Die zoekt verder uit wie wat betaalt." },
      { v: "Bij de buren zijn pannen weggewaaid, bij mij niet. Moet ik me zorgen maken?", a: "Niet meteen, maar kijk wel even goed. Huizen in dezelfde straat zijn vaak even oud en hebben dezelfde pannen, en de wind pakt ze op dezelfde plekken: langs de zijkant van het dak, de onderste rij boven de goot en vlak onder de nok. Kijk vanaf de straat of daar bij jou een pan scheef ligt of omhoog staat. Ligt alles recht, dan is er vaak niets aan de hand. Wil je voor de volgende storm zekerder zijn, dan kunnen de pannen op die plekken met stormhaken worden vastgezet. Stuur me gerust een foto van je dak via WhatsApp." },
    ],
  },
  {
    slug: "dak-lekt-bij-harde-wind",
    datum: "2026-10-21",
    titel: "Dak lekt alleen bij storm?",
    h1: "Dak lekt alleen bij harde wind en regen: hoe kan dat?",
    metaTitle: "Dak lekt bij harde wind of storm? | Spoed Dak Service",
    metaDescription:
      "Blijft je dak droog bij gewone regen, maar lekt het bij harde wind? Dan waait de regen onder de pannen door. Dit zijn de plekken waar het meestal zit.",
    intro:
      "Bij een gewone bui blijft alles droog, maar bij regen met harde wind zie je ineens een natte plek. Dat komt veel voor in de herfst. Het water valt dan niet van boven, maar wordt schuin onder de pannen en langs de nok naar binnen geblazen. Hieronder lees je waar dat meestal gebeurt en wat je eraan doet.",
    secties: [
      { kop: "Waarom het alleen bij wind lekt", tekst: [
        "Een pannendak is niet waterdicht zoals een plat dak. Het water loopt over de pannen naar beneden, en waar de pannen elkaar overlappen is dat genoeg. Blaast de wind de regen van opzij of van onderen tegen het dak, dan kan het onder een pan door die net niet goed in de sluiting ligt. Bij gewone regen merk je daar niets van.",
      ] },
      { kop: "Waar het meestal zit", tekst: [
        'Bij de nok. Is de specie onder de nokvorsten verweerd of ligt een vorst los, dan waait de regen daar zo onderdoor. Lees ook <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.',
        "Bij een verschoven of gebroken pan, vaak overgebleven van een eerdere storm.",
        'Bij de schoorsteen of het dakraam, waar het lood niet meer goed aansluit. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a> en <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.',
        "Langs de randen van het dak, bij de gevelpannen en de windveren. Daar vangt het dak de meeste wind.",
      ] },
      { kop: "Oudere daken", tekst: [
        "Bij sommige oudere daken ligt onder de pannen geen goede waterkerende laag meer, of is die op plekken vergaan. Waait er dan water onder een pan door, dan komt het meteen op zolder terecht. Ligt er wel een goede laag onder, dan loopt het water meestal eerst daarover naar de goot.",
      ] },
      { kop: "Aan welke kant van het dak lekt het?", tekst: [
        "In Nederland komt harde wind meestal uit het zuidwesten of het westen. Daarom zie ik lekkage bij storm het vaakst aan die kant van het huis: bij de pannen langs de rand van het dak, bij de nok en bij het lood rond de schoorsteen of het dakraam aan de windkant. Lekt het bij jou aan de andere kant, dan kan dat ook. Het water kan over de nok heen waaien, of eerst een stuk opzij onder de pannen lopen voordat het binnenkomt.",
      ] },
      { kop: `Staat er een antenne of schotel op je dak?`, tekst: [
        `Een mast op het dak vangt bij storm veel wind. Hij gaat heen en weer en trekt aan de beugel onder de pannen of aan de band om de schoorsteen. Daardoor kan een pan naast de mast net uit de sluiting komen te liggen, of gaat het lood rond de schoorsteen open. Bij gewone regen merk je daar niets van, maar bij harde wind waait het water er dan onder. Lekt het bij jou vlak bij de plek waar de mast of de kabel zit, lees dan <a href="/kennisbank/lekkage-bij-schotel-of-antenne/">lekkage bij een schotel of antenne</a>.`,
      ] },
      { kop: `Tikt of klappert er iets?`, tekst: [
        `Hoor je bij harde wind getik of geklapper boven je hoofd, dan zit er vaak iets los: een pan die bij elke windstoot een stukje opwipt, een nokvorst, een strook lood of de plank langs de zijkant van je dak. Waar iets los ligt, kan de regen bij de volgende bui ook naar binnen waaien. Hoe je vindt wat het is, lees je in <a href="/kennisbank/dakpannen-klapperen-bij-wind/">dakpannen klapperen bij wind</a>. Hangt de windveer langs de kopgevel los of is hij rot, kijk dan bij <a href="/kennisbank/windveer-los-of-rot/">windveer los of rot</a>.`,
      ] },
      { kop: "Wat je nu doet", tekst: [
        'Vang het water op en maak een foto van de natte plek, ook als het later weer droog is. Schrijf op bij wat voor weer het lekte: uit welke hoek de wind kwam en hoe hard het regende. Dat helpt mij om de plek op het dak te vinden. Ga niet zelf het dak op bij harde wind. Lekt het nu flink, kijk dan op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Hoe ik het opspoor", tekst: [
        'Omdat het alleen bij wind lekt, zie je het vaak niet als het droog is. Ik kijk daarom eerst naar de plekken hierboven, aan de kant waar de wind op stond, en op zolder naar oude waterkringen. Meestal vind ik het zo zonder iets open te breken. Meer hierover in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
      ] },
      { kop: "Zo voorkom je het bij de volgende storm", tekst: [
        'Is het lek gevonden en hersteld, kijk dan ook naar de rest van de kant waar de wind op staat. Liggen de pannen langs de rand en de onderste rij nog los op de latten, dan kun je ze laten vastzetten met stormhaken. Wat dat doet en wanneer het zin heeft, lees je in <a href="/kennisbank/dakpannen-vastzetten-tegen-storm/">dakpannen vastzetten tegen storm</a>.',
        "Ligt de nok nog in oude specie die bros wordt, dan wordt bij het opnieuw leggen vaak een ondervorst gebruikt in plaats van specie. Het liefst laat je dat in de herfst doen, voordat de winterstormen komen.",
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Ligt er bij de nok of langs de rand van het dak een pan of vorst los, dan valt terugleggen of vervangen meestal onder een kleine reparatie: ${kleinPrijs}. Moet ik eerst zoeken waar het water onder de pannen door komt, bijvoorbeeld bij het lood rond de schoorsteen of het dakraam, dan is het meestal een gerichte lekreparatie: ${lekPrijs}, inclusief materiaal.`,
        `Lekt het 's avonds, 's nachts of in het weekend en kan het echt niet wachten, dan komt er een toeslag bij. Je hoort de vaste prijs vooraf, voordat ik begin. Wil je ook de andere pannen aan de windkant laten vastzetten, dan hoor je ook daarvan vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakreparatie (pannen, lood en nok)", href: "/diensten/dakreparatie/" },
    faq: [
      { v: "Waarom lekt mijn dak alleen bij storm?", a: "Omdat de wind de regen dan schuin onder de pannen of de nokvorsten door blaast. Bij gewone regen loopt het water er gewoon overheen. Vaak zit het bij de nok, een verschoven pan of het lood bij de schoorsteen." },
      { v: "Is het erg als het maar af en toe lekt?", a: "Laat het liever niet zitten. Elke keer worden het hout en de isolatie nat, en een plek die nu alleen bij storm lekt, wordt bij de volgende storm vaak groter." },
      { v: "Kan ik het zelf zien vanaf de straat?", a: "Soms wel. Een scheve nokvorst, een pan die anders ligt dan de rest of stukjes specie in de goot zie je vaak met een verrekijker. Stuur gerust een foto via WhatsApp, dan kijk ik mee." },
      { v: "Valt lekkage door harde wind onder mijn verzekering?", a: "Dat hangt af van je polis. Veel verzekeraars spreken pas van storm bij windkracht 7 of meer. Lekt het door zo'n storm, dan wordt de schade binnen vaak vergoed. Lekt het bij elke flinke windvlaag door een pan die al lang scheef lag, dan zien ze dat eerder als onderhoud. Maak foto's van de natte plek en van je dak vanaf de straat, en kijk in je polisvoorwaarden." },
      { v: "Is lekkage bij harde wind spoed?", a: "Druppelt het nu binnen, of ligt er een pan of nokvorst op straat, dan wel: bel of app me met een foto. Waren het een paar druppels en is het weer droog, dan kan het meestal een paar dagen wachten. Twijfel je, stuur dan een foto via WhatsApp, dan zeg ik eerlijk of het vandaag moet." },
      { v: `Het is nat bovenin de muur, niet op het plafond. Komt dat ook van het dak?`, a: `Dat kan, maar niet altijd. Bij harde wind slaat de regen ook hard tegen de gevel. Zit de natte plek bovenin een buitenmuur, vlak onder het plafond, kijk dan eerst naar de goot en de onderste rij pannen erboven: een goot die overloopt of water dat achter de goot langs loopt, komt vaak precies daar binnen. Wordt de muur ook lager nat, of rond een kozijn, dan komt het water eerder door het metselwerk of langs het kozijn. Dat is geen dakwerk, daarvoor heb je een metselaar nodig. Stuur me een foto van de natte plek binnen en van die gevel buiten, dan zeg ik eerlijk waar ik denk dat het zit.` },
    ],
  },
  {
    slug: "kilgoot-lekt",
    datum: "2026-10-24",
    titel: "Kilgoot lekt?",
    h1: "Kilgoot lekt: lekkage waar twee daken samenkomen",
    metaTitle: "Kilgoot lekt: natte plek in de hoek? | Spoed Dak Service",
    metaDescription:
      "Een natte plek in de hoek waar twee dakvlakken samenkomen? Dan lekt vaak de kilgoot. Zo herken je het, waar het meestal zit en wat eraan te doen is.",
    intro:
      "Heeft je huis een hoek, een aanbouw met een schuin dak of een schuur ertegenaan? Dan komen daar twee dakvlakken samen in een soort goot: de kilgoot, of kortweg de kil. Al het water van die twee dakvlakken loopt daardoorheen. Lekt hij, dan zie je dat meestal binnen, in de hoek. Hieronder lees je hoe je dat herkent en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, haal spullen weg en maak een foto van de natte plek. Ga niet zelf het dak op: een kil ligt midden op een schuin dak en is glad als het nat is. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Wat is een kilgoot?", tekst: [
        "Een kilgoot ligt in de hoek waar twee schuine dakvlakken tegen elkaar aan komen, bijvoorbeeld bij een L-vormig huis, een aanbouw of een schuur. Meestal is het een strook lood of zink onder de pannen. Bij nieuwere daken ligt er soms een kunststof kil of zijn er speciale kilpannen gebruikt. Omdat het water van twee kanten komt, krijgt een kil bij een flinke bui veel water te verwerken.",
      ] },
      { kop: "Open of gesloten kil", tekst: [
        "Bij een open kil zie je vanaf de straat een strook lood of zink tussen de pannen van de twee dakvlakken. Blad en mos blijven daar minder snel hangen, en je ziet meteen als er iets in ligt.",
        "Bij een gesloten kil liggen de pannen van beide kanten bijna tegen elkaar en zit het lood of zink eronder. Dat ziet er strakker uit, maar de opening is smal. Blad, mos en losgekomen specie blijven daar sneller steken, en omdat je de kil zelf niet ziet, merk je dat pas als het binnen nat wordt. Bij zo'n kil is het extra slim om hem na de bladval te laten nakijken.",
      ] },
      { kop: "Zo herken je een lekkende kil", tekst: [
        "Een natte plek of bruine kring op het plafond of op zolder, in de hoek waar de daken samenkomen. Het lekt vaak vooral bij een stortbui, of in de herfst als er veel blad valt. Vanaf de straat zie je soms blad of mos in de kil liggen, of pannen langs de kil die scheef liggen.",
      ] },
      { kop: "Waar het meestal zit", tekst: [
        "Blad en mos die in de kil blijven liggen. Dan kan het water niet weg, komt het hoger te staan dan de rand van het lood of zink en loopt het opzij onder de pannen door.",
        "Lood of zink dat na veel jaren gescheurd of dun geworden is, vooral op plekken waar lang vuil en water bleven liggen.",
        'Pannen langs de kil die verschoven zijn, bijvoorbeeld na een storm. Dan waait de regen er bij harde wind onderdoor. Lees ook <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.',
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        'Ligt de kil alleen vol, dan is leegmaken vaak genoeg. Zit er een scheur of een gat in het lood of zink, dan is dat vaak goed te herstellen. Is de kil over een groot stuk op, dan vervang ik dat stuk. Ik kijk eerst wat er echt aan de hand is en zeg eerlijk wat in jouw geval nodig is. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>. Weet je niet zeker of het de kil is, lees dan <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.',
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Hoe dat er bij jou in de buurt uitziet, lees je bij daklekkage in <a href="/werkgebied/sint-michielsgestel/daklekkage/">Sint-Michielsgestel</a>, waar onder de oude bomen langs de Dommel veel blad blijft liggen in de kil boven een serre of een lager dak. In <a href="/werkgebied/helmond/">Helmond</a> hebben de huizen in Brandevoort veel hoeken en kilgoten tussen de daken, en bij de vooroorlogse villa's in <a href="/werkgebied/vught/">Vught</a> kijk ik bij een lek ook naar de kilgoten.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        'Dat hangt af van wat er mis is, hoe lang de kil is en hoe goed je erbij kunt. Je hoort de vaste prijs vooraf, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: kilgoot repareren of vervangen", href: "/diensten/kilgoot-repareren/" },
    faq: [
      { v: "Wat is een kilgoot?", a: "De goot in de hoek waar twee schuine dakvlakken samenkomen. Meestal is het een strook lood of zink onder de pannen. Al het water van die twee dakvlakken loopt erdoorheen." },
      { v: "Waarom lekt mijn kilgoot alleen bij een stortbui?", a: "Bij een gewone bui kan het water weg. Bij een stortbui, of als er blad in de kil ligt, komt het water hoger te staan dan de rand van het lood of zink en loopt het opzij onder de pannen door. Dat zie je dan pas binnen." },
      { v: "Kan ik de kil zelf schoonmaken?", a: "Liever niet. Een kil ligt midden op een schuin dak en dat is glad, zeker in de herfst. Laat het doen door iemand die veilig op een dak kan werken." },
      { v: "Kun je snel komen als het in de hoek binnenkomt?", a: "Bel of WhatsApp me met een foto van de natte plek binnen en, als dat veilig kan, een foto van het dak vanaf de straat. Dan hoor je wanneer ik kan komen." },
      { v: "Hoe vaak moet een kilgoot schoongemaakt worden?", a: "Kijk elk najaar even vanaf de straat of er blad of mos in de kil ligt. Staan er bomen vlak bij je huis, dan is het slim om de kil elk jaar na de bladval leeg te laten maken, tegelijk met je goten. Dan kan het water in de winter vrij weglopen." },
      { v: "Valt een lekkende kilgoot onder de verzekering?", a: "Lekt de kil doordat het lood of zink oud is of doordat er lang blad in lag, dan zien verzekeraars dat meestal als onderhoud. Is er bij een storm een pan langs de kil verschoven of is er een tak op gevallen, dan is het eerder plotselinge schade. Maak foto's van de natte plek en kijk in je polisvoorwaarden." },
      { v: "Lekt een kilgoot sneller bij sneeuw?", a: "Dat kan. In de kil hoopt sneeuw zich op, want daar komt die van twee dakvlakken samen. Smelt de sneeuw overdag en vriest het 's nachts weer, dan blijft er ijs in de kil liggen. Het smeltwater erboven kan dan niet weg en loopt opzij onder de pannen door. Ligt er ook nog blad in de kil, dan gebeurt dat eerder. Zie je na sneeuw of dooi een natte plek in de hoek, stuur me dan een foto. Ga zelf niet de kil in om sneeuw of ijs weg te halen." },
      { v: `Wat kost het om een lekkende kilgoot te repareren?`, a: `Ligt de kil alleen vol blad of mos, dan is leegmaken vaak genoeg. Moet ik zoeken waar het water binnenkomt en een scheur in het lood of zink of een verschoven pan langs de kil herstellen, dan valt het meestal onder een daklekkage-reparatie: ${lekPrijs}, inclusief materiaal. Is de kil over een groot stuk op en moet hij vernieuwd worden, dan is het meer werk, en dan hoor je vooraf de vaste prijs voor die klus.` },
    ],
  },
  {
    slug: "dakonderhoud-per-seizoen",
    titel: "Dakonderhoud per seizoen",
    h1: "Dakonderhoud per seizoen: wat je wanneer moet controleren",
    metaTitle: "Dakonderhoud: wat en hoe vaak? Checklist | Spoed Dak Service",
    metaDescription:
      "Hoe vaak moet je je dak onderhouden? Twee keer per jaar kijken, in het voorjaar en het najaar. Wat je per seizoen controleert, bij een pannendak en een plat dak.",
    intro:
      "Een dak gaat tientallen jaren mee, maar alleen als je het een beetje bijhoudt. Twee korte checks per jaar, in het voorjaar en het najaar, voorkomen verreweg de meeste dure schade. Hieronder wat er per seizoen toe doet, en hoe vaak je een vakman nodig hebt.",
    secties: [
      { kop: "Twee keer per jaar: voorjaar en najaar", tekst: [
        "De vuistregel is twee visuele controles per jaar. In het voorjaar herstel je winterschade (losse pannen, gescheurd lood, gootschade van vorst). In het najaar maak je het dak winterklaar: goten leeg vóór de bladval, pannen en lood na voor de eerste herfststorm.",
        "Is je dak ouder dan zo'n vijftien jaar, dan is twee keer kijken echt geen luxe, oudere daken laten sneller los.",
      ] },
      { kop: "Goten: minimaal twee keer per jaar", tekst: [
        "Goten zijn het vaakst de oorzaak van vochtschade. Maak ze minstens twee keer per jaar leeg, en bij bomen in de buurt vaker. Najaar is het belangrijkste moment, vlak na de bladval.",
      ] },
      { kop: "Let op per daktype", tekst: [
        "Pannendak: controleer op losse, gebroken of poreuze pannen, verwijder mos op tijd (mos houdt vocht vast) en kijk jaarlijks de nokvorsten en het lood bij schoorsteen en dakramen na.",
        "Plat dak: hier is stilstaand water de grootste vijand. Controleer na hevige regen of het water goed wegloopt, en houd naden en opstanden in de gaten.",
        'Wat je bij een plat dak precies nakijkt, staat in <a href="/kennisbank/plat-dak-onderhouden/">plat dak onderhouden</a>.',
      ] },
      { kop: "Voor de winter: vier dingen om na te lopen", tekst: [
        'De nok. Liggen er brokjes specie in de goot of op de stoep, dan zitten er vaak vorsten los. Lees <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.',
        'Mos op de noordkant. Een dikke laag houdt vocht vast, en als dat bevriest kan een pan scheuren. Hoe vaak je goot leeg moet, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>.',
        'De schoorsteen. Kijk vanaf de straat of het lood rond de schoorsteen nog strak tegen de stenen zit. Krult het omhoog, lees dan <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.',
        'Het platte dak. Kijk na een flinke bui of er geen plas blijft staan. Wanneer dat een probleem is, lees je in <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water op je platte dak</a>.',
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Waar ik voor de winter op let, verschilt per plaats. In <a href="/werkgebied/vlijmen/">Vlijmen</a> kijk ik bij de rijtjes in Vliedberg ook naar het platte dak van de berging en de rand van de lichtkoepel, in <a href="/werkgebied/boxtel/">Boxtel</a> naar het lood boven een erker of luifel, en in <a href="/werkgebied/waalwijk/">Waalwijk</a> bij de boerderijen in Sprang-Capelle naar de lange goten en de nok. In <a href="/werkgebied/veghel/">Veghel</a> gaat het bij rijtjeshuizen van zo'n veertig jaar oud vaak om de nok en het lood rond de schoorsteen, en bij de oude villa's in <a href="/werkgebied/vught/">Vught</a> om het lood, de kilgoten en de hoekvorsten.`,
      ] },
      { kop: "En een professionele inspectie?", tekst: [
        "Een grondige vakinspectie is elke 3 tot 5 jaar verstandig, en vaker bij een ouder dak. Ik doe zo'n check eerlijk: ik zeg wat nú aandacht vraagt en wat best nog even kan wachten. Geen onnodige paniek, geen onnodig werk.",
        'Wil je weten hoe je dak er nu voor staat, dan kan dat met de <a href="/dak-apk/">Dak-APK</a>: een keuring van je hele dak met een fotorapport.',
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: "Hoe vaak moet ik mijn dak laten controleren?", a: "Twee keer per jaar zelf een visuele check (voorjaar + najaar), en elke 3 tot 5 jaar een grondige vakinspectie, vaker bij een dak ouder dan 15 jaar." },
      { v: "Wat is het beste moment voor onderhoud?", a: "Najaar is het belangrijkst: goten leeg en pannen/lood nakijken vóór de herfststormen. Het voorjaar gebruik je om winterschade te herstellen." },
      { v: "Wat kost een dakinspectie?", a: `Bij mij heet dat de Dak-APK: ${apkPrijs} voor een keuring van je hele dak met een fotorapport. Daarna weet je wat nu nodig is en wat nog kan wachten.` },
      { v: "Hoe onderhoud je een plat dak?", a: "Kijk minstens één keer per jaar, het liefst in het najaar. Haal blad en mos weg bij de afvoer en in de hoeken, kijk of er na een bui water blijft staan en let op naden en randen die loslaten. Ga alleen het dak op als dat veilig kan." },
      { v: "Wat moet ik in het najaar aan mijn dak doen?", a: "De goten leeg na de bladval, kijken of er pannen of nokvorsten los liggen en het lood bij de schoorsteen en dakramen nakijken. Dan is je dak klaar voor de herfststormen." },
      { v: "Kun je mijn dak in het najaar in één keer winterklaar maken?", a: "Ja. Ik maak de goten en de uitloop naar de regenpijp leeg, en kijk meteen naar de nok, de pannen en het lood rond de schoorsteen en het dakraam. Zit er iets los, dan hoor je eerst wat het kost om het vast te zetten, en dan beslis jij. Dat doe ik in de hele regio Den Bosch, onder andere in Rosmalen, Oss, Veghel en Waalwijk. Wil je een compleet rapport met foto's van je hele dak, dan is de Dak-APK handiger." },
    ],
  },
  {
    slug: "dakinspectie",
    datum: "2026-10-23",
    titel: "Dakinspectie: wat kijk ik na?",
    h1: "Dakinspectie: wat een dakdekker nakijkt en wanneer het zinvol is",
    metaTitle: "Dakinspectie: kosten en wat ik nakijk | Spoed Dak Service",
    metaDescription:
      `Wat kijkt een dakdekker na bij een dakinspectie, wanneer is het zinvol en wat kost het? Bij mij heet het de Dak-APK: ${apkPrijs} voor je hele dak met fotorapport.`,
    intro:
      "Een dakinspectie is gewoon een vakman die rustig je hele dak nakijkt, voordat er iets misgaat. Hieronder lees je wat ik dan bekijk, wanneer het zinvol is en wat het kost. Zo weet je wat je kunt verwachten voordat je iemand belt.",
    secties: [
      { kop: "Wanneer is een dakinspectie zinvol?", tekst: [
        "Als je een huis gaat kopen of net gekocht hebt. Als je dak wat ouder is en er al een tijd niemand naar heeft gekeken. Na een flinke storm, ook als je binnen nog niets merkt. En als je een offerte van een ander hebt gekregen en eerst zelf wilt weten hoe je dak ervoor staat.",
        'Hoe vaak je zelf even kunt kijken en wanneer je een vakman nodig hebt, lees je in <a href="/kennisbank/dakonderhoud-per-seizoen/">dakonderhoud per seizoen</a>.',
      ] },
      { kop: "Wat ik nakijk", tekst: [
        "De pannen of de dakbedekking: liggen ze goed, en zijn er gebroken, verschoven of poreuze bij. De nokvorsten, want die laten vaak als eerste los. De goten en de afvoer naar de regenpijp. Het lood en de aansluitingen bij de schoorsteen en de dakramen, want daar gaat het vaak als eerste mis.",
        "Verder mos en aanslag, en of dat vocht vasthoudt. Vochtplekken en andere sporen van lekkage, ook als er nog geen lek is. En liggen er zonnepanelen, dan kijk ik ook hoe die vastzitten.",
      ] },
      { kop: "Waar ik per soort huis extra op let", tekst: [
        `Bij een vooroorlogse villa of een oud herenhuis kijk ik vooral naar het lood rond de schoorsteen en in de kilgoten, en naar de zinken goten. Dat is daar vaak tientallen jaren oud. Zulke huizen zie ik veel in <a href="/werkgebied/vught/">Vught</a> en in de oudere wijken van <a href="/werkgebied/den-bosch/">Den Bosch</a>.`,
        `Bij een rijtjeshuis uit de jaren '60 of '70 gaat het vaker om nokvorsten die nog in specie liggen, pannen die water zijn gaan opnemen en een goot die is gaan doorhangen. Die huizen staan in bijna elke plaats rond Den Bosch, zoals <a href="/werkgebied/rosmalen/">Rosmalen</a> en <a href="/werkgebied/vlijmen/">Vlijmen</a>.`,
        `Bij een boerderij of een groot vrijstaand huis kijk ik extra naar de lange goten, de nok en de pannen langs de randen, want daar heeft de wind veel grip. En bij een huis van na 2000 vooral naar de aansluitingen rond dakdoorvoeren, dakramen en zonnepanelen.`,
      ] },
      { kop: "Wat je daarna krijgt", tekst: [
        `Bij mij heet een dakinspectie de <a href="/dak-apk/">Dak-APK</a>. Je krijgt een rapport met foto's van de plekken die aandacht vragen, met uitleg in gewone taal. Ik zeg erbij wat nu nodig is en wat best nog even kan wachten. Niks aan de hand? Dan hoor je dat ook gewoon.`,
      ] },
      { kop: `Een huis kopen?`, tekst: [
        `Wil je een huis kopen, dan kan ik het dak keuren als de verkoper daar toestemming voor geeft. Een bouwkundige keuring bekijkt het dak vaak alleen van een afstand. Ik kijk er van dichtbij naar, en ook op zolder als dat kan. Hoe je dat regelt en waar ik dan op let, lees je in <a href="/kennisbank/dak-keuren-bij-huis-kopen/">dak keuren als je een huis koopt</a>.`,
      ] },
      { kop: "Wat kost een dakinspectie?", tekst: [
        `De Dak-APK kost ${apkPrijs} voor een keuring van je hele dak met een fotorapport. Moet er daarna iets gebeuren, dan hoor je vooraf de vaste prijs, en jij beslist of je dat door mij laat doen. Richtprijzen voor de meeste klussen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
      { kop: "Zelf eerst kijken?", tekst: [
        'Vanaf de straat zie je met een verrekijker al veel: een pan die anders ligt dan de rest, een scheve nokvorst of stukjes specie in de goot. Ga niet zelf het dak op. Zie je iets, stuur me dan een foto via WhatsApp. Lekt het al, dan is het geen inspectie meer maar spoed. Kijk dan op de <a href="/spoed/">spoedpagina</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: de Dak-APK", href: "/dak-apk/" },
    faq: [
      { v: "Wat kost een dakinspectie?", a: `De Dak-APK kost ${apkPrijs}. Daarvoor kijk ik je hele dak na en krijg je een rapport met foto's van de plekken die aandacht vragen.` },
      { v: "Is een dakinspectie nodig als ik een huis koop?", a: "Verplicht is het niet, maar het is wel slim, zeker bij een ouder huis. Dan weet je vooraf of er binnenkort iets aan het dak moet, en kun je daar rekening mee houden." },
      { v: "Hoe vaak moet je je dak laten inspecteren?", a: "Zelf kun je in het voorjaar en in het najaar even kijken. Een vakman laten kijken is verstandig als er al een tijd niemand naar je dak heeft gekeken, en eerder bij een ouder dak of na een zware storm." },
      { v: "Kom je ook voor een dakinspectie in mijn plaats?", a: "Ik werk in de regio Den Bosch, onder andere in Vught, Rosmalen, Vlijmen, Oss en Waalwijk. Bel of WhatsApp me, dan hoor je wanneer ik bij je langs kan komen." },
      { v: "Is een dakinspectie hetzelfde als een gratis offerte?", a: `Nee. Weet je al wat er moet gebeuren, bijvoorbeeld een lek, een losse pan of een volle goot, dan is een offerte bij mij gratis: stuur een foto of bel, en je hoort de vaste prijs. De Dak-APK (${apkPrijs}) is voor als je wilt weten hoe je hele dak ervoor staat, met een rapport met foto's.` },
      { v: "Hoe snel krijg ik het rapport van de dakinspectie?", a: `Binnen een dagdeel. Dan weet je zwart op wit hoe je dak ervoor staat, met foto's van de plekken die aandacht vragen en wat nu nodig is of nog kan wachten.` },
      { v: `Kan een dakinspectie ook in de herfst of winter?`, a: `Ja. Na de herfststormen is het juist een goed moment: dan zie je wat de wind heeft losgemaakt, voordat de vorst en de winterstormen het erger maken. Ik kom op een droge dag. Vriest het, ligt er sneeuw of waait het hard, dan plannen we een andere dag, want dan is het op het dak niet veilig en zie ik ook minder. De Dak-APK kost ${apkPrijs}, en je hoort vooraf wanneer ik kan komen.` },
    ],
  },
  {
    slug: "mos-op-dak-verwijderen",
    verborgen: true,
    titel: "Mos op je dak",
    h1: "Mos op je dak verwijderen: schadelijk of niet, en hoe wél?",
    metaTitle: "Mos op dak: verwijderen of laten zitten? | Spoed Dak Service",
    metaDescription:
      "Mos op je dak verwijderen? Mos houdt vocht vast en kan pannen laten scheuren bij vorst. Maar een hogedrukreiniger is riskant.",
    intro:
      "Een groen waas op je dak ziet er onschuldig uit, maar mos is niet alleen cosmetisch. Het houdt vocht vast en kan op den duur schade geven. Tegelijk kun je met de verkeerde aanpak (lees: een te harde hogedrukreiniger) méér kapotmaken dan je oplost. Hieronder hoe het zit.",
    secties: [
      { kop: "Is mos echt schadelijk?", tekst: [
        "Ja, op termijn wel. Mos houdt vocht vast op je pannen; vriest dat vocht 's winters, dan zet het uit en kunnen pannen scheuren of afbladderen. Bovendien komt los mos in de goot en regenpijp terecht en verstopt daar de afvoer: een veelvoorkomende oorzaak van overlopende goten en lekkage.",
      ] },
      { kop: "Mos, algen of korstmos: wat zit er op je dak?", tekst: [
        "Niet alles wat groen of grijs op je dak zit, is hetzelfde. Een groene waas over de pannen is meestal alg. Die houdt weinig water vast en is vooral een kwestie van hoe het eruitziet.",
        "Mos groeit in dikke, zachte kussens op en tussen de pannen. Dat houdt wel water vast, kan bij vorst schade geven en komt in brokken in je goot terecht. Dat haal je er op tijd af.",
        "Korstmos zijn de platte grijze, gele of oranje vlekken die vastzitten op de pan. Het groeit heel langzaam en houdt weinig water vast. Je krijgt het er moeilijk af zonder de toplaag van de pan te beschadigen, dus vaak is het beter om het te laten zitten.",
      ] },
      { kop: "Pas op met de hogedrukreiniger", tekst: [
        "Een hogedrukreiniger lijkt snel, maar te veel druk haalt de beschermende toplaag van je pannen weg en beschadigt vooral oudere, poreuze pannen, dan groeit het mos juist sneller terug. Voor stevige, moderne pannen kan lage druk, maar bij twijfel is voorzichtig handwerk of een zachtere methode beter.",
      ] },
      { kop: "Bij jou in de buurt", tekst: [
        'Hoeveel mos er op een dak groeit, hangt vooral af van schaduw en bomen. In Oisterwijk, tussen de bossen, groeit het snel op de noordkant van het dak: lees <a href="/werkgebied/oisterwijk/">dakdekker in Oisterwijk</a>. Op de betonpannen in Maaspoort en Empel spoelt mos samen met gruis van de pannen naar de goot, zie <a href="/werkgebied/den-bosch/goten-reinigen/">dakgoot schoonmaken in Den Bosch</a>. En op de oude pannen in Schijndel, vaak nog van voor 1985, wordt het samen met blad een laag slib onderin de goot: zie <a href="/werkgebied/schijndel/goten-reinigen/">dakgoot schoonmaken in Schijndel</a>.',
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        "Ik kijk eerst of je pannen het aankunnen. Daarna verwijder ik het mos voorzichtig en ruim ik de goot en de uitloop naar de regenpijp meteen mee op. Zijn de pannen al bros, dan zeg ik dat eerlijk: soms is gericht vervangen slimmer dan blijven reinigen.",
      ] },
    ],
    dienst: { label: "Bekijk: dak reinigen & mos", href: "/diensten/dak-reinigen/" },
    faq: [
      { v: "Mag ik zelf met een hogedrukreiniger mijn dak schoonmaken?", a: "Liever niet op oudere of poreuze pannen, je haalt er de toplaag af en beschadigt ze. Op hoogte werken is bovendien niet zonder risico. Ik doe het veilig en op de juiste druk." },
      { v: "Komt het mos terug?", a: "Op den duur wel, zeker aan de noordkant en onder bomen. Laat het niet te dik worden: af en toe reinigen en elk najaar de goten leeg houdt het meestal goed in de hand." },
      { v: "Wanneer laat je mos het beste weghalen?", a: "Het liefst op een droge dag in het voorjaar of in het begin van de herfst. Op een nat of bevroren dak is het glad en werk je niet veilig. Laat het weghalen voordat je goten worden leeggemaakt, want het losse mos komt toch in de goot terecht." },
      { v: "Hoe haal je mos van een plat dak met bitumen?", a: "Niet met een harde schraper of een hogedrukreiniger, want dan haal je de toplaag met de steentjes van het bitumen af en wordt de dakbedekking sneller oud. Kun je veilig op het dak komen, veeg dan op een droge dag los mos en blad met een zachte bezem bij elkaar en haal het op, en houd vooral de afvoer vrij. Ga er niet op bij regen, wind of vorst. Zit het mos vast in de naden of groeit er gras op het dak, stuur me dan een foto. Dan kijk ik of de dakbedekking eronder nog goed is." },
    ],
  },
  {
    slug: "hoe-herken-je-een-betrouwbare-dakdekker",
    titel: "Betrouwbare dakdekker herkennen",
    h1: "Hoe herken je een betrouwbare dakdekker (en voorkom je oplichting)?",
    metaTitle: "Betrouwbare dakdekker herkennen | Spoed Dak Service",
    metaDescription:
      "Hoe herken je een betrouwbare dakdekker? KvK-inschrijving, schriftelijke offerte, verzekering en garantie, meerdere offertes vergelijken: de checklist.",
    intro:
      "KvK-inschrijving, een schriftelijke offerte, verzekering en garantie, meerdere offertes vergelijken: dit zijn de punten waar je op moet letten. Hieronder leg ik per punt uit waarom, en hoe ik dat zelf regel.",
    secties: [
      { kop: "Waarom dit een reëel risico is", tekst: [
        "Je leest geregeld over mensen die aan de deur een dakklus kregen aangesmeerd die niet nodig was, of die achteraf veel meer moesten betalen dan was afgesproken. Zulke verhalen komen regelmatig voorbij in het nieuws en bij consumentenprogramma's.",
        "Dat betekent niet dat de meeste dakdekkers oneerlijk zijn, verreweg de meeste doen gewoon hun werk. Maar de klachten die er wél zijn, volgen bijna altijd hetzelfde patroon: een mondelinge toezegging, een prijs die achteraf oploopt, en geen vast aanspreekpunt zodra er iets misgaat. Daar is met een paar checks vooraf veel van te voorkomen.",
      ] },
      { kop: "Checklist: waar je op let vóór je akkoord geeft", tekst: [
        "<strong>KvK-inschrijving.</strong> Vraag gerust naar het KvK-nummer en zoek het zelf even op, dat kost een minuut en laat meteen zien hoe lang een bedrijf al bestaat.",
        "<strong>Schriftelijke offerte met vaste prijs.</strong> Geen mondelinge toezegging \"dat wordt zo'n beetje...\", maar een bedrag op papier vóórdat het werk begint.",
        "<strong>Verzekering en garantie.</strong> Vraag naar aansprakelijkheidsverzekering (bij schade tijdens het werk) en garantie op het geleverde werk zelf.",
        "<strong>Meerdere offertes vergelijken</strong>, zeker bij grotere klussen (dakvervanging, renovatie), een groot prijsverschil zonder duidelijke reden is een signaal om door te vragen.",
        "<strong>Reviews</strong>, met een kanttekening: een net gestart bedrijf heeft er nog weinig. Dat maakt het niet automatisch onbetrouwbaar, vraag dan gewoon naar recent afgerond werk of foto's.",
        "<strong>Pas op bij druk om nu te beslissen</strong>: aan de deur, of \"deze prijs geldt alleen vandaag\". Een serieus bedrijf geeft je bedenktijd.",
        "<strong>Meerwerk alleen na jouw akkoord vooraf.</strong> Komt er tijdens het werk iets extra's bij, vraag dan eerst om een prijs op papier of in een appje en geef pas daarna akkoord. Dan weet je precies waar je aan toe bent.",
      ] },
      { kop: "Na een storm: let op wie er aanbelt", tekst: [
        "Na een zware storm gaan er soms mensen langs de deuren die zeggen dat ze schade aan je dak hebben gezien. Ze kunnen het meteen maken, het liefst vandaag nog en contant. Soms is er echt iets aan de hand, maar soms ook niet, en dan betaal je voor werk dat niet nodig was.",
        `Laat niemand op je dak die je niet zelf hebt gebeld. Vraag om een foto van de schade en kijk zelf vanaf de straat of je het ook ziet. Twijfel je, bel dan eerst je eigen dakdekker of je verzekeraar voordat je iets afspreekt. Wat je na een storm zelf kunt nakijken, lees je in <a href="/kennisbank/stormschade-eerste-hulp/">stormschade: eerste hulp</a>.`,
      ] },
      { kop: "Zo doe ik het zelf", tekst: [
        `Ik werk onder mijn eigen naam met mijn eigen 06-nummer: je krijgt mij aan de lijn, geen callcenter, en mijn KvK- en btw-gegevens deel ik gewoon op verzoek. Bij elke klus krijg je een vaste prijs vóórdat ik begin, en bij de Dak-APK (${apkPrijs}) krijg je er ook een fotorapport bij, zodat je niet op mijn woord alleen hoeft te vertrouwen.`,
        "Zie ik onderweg iets extra's dat nodig is, dan meld ik dat en bespreken we het vóórdat ik het uitvoer, nooit een verrassing op de rekening achteraf.",
      ] },
    ],
    dienst: { label: "Lees over mij en hoe ik werk", href: "/over/" },
    faq: [
      { v: "Is een opvallend lage prijs een waarschuwingssignaal?", a: "Niet per se, kijk vooral of de prijs op papier staat en of hij past bij wat er in de offerte beschreven staat. Een prijs die pas ná het werk duidelijk wordt, is het grotere risico." },
      { v: "Wat als een dakdekker meerwerk wil doorberekenen zonder dat vooraf te zeggen?", a: "Spreek vooraf af dat extra werk eerst met jou wordt overlegd, met een prijs op papier of in een appje. Gebeurt het toch zonder overleg, vraag dan om uitleg en betaal niet zomaar. Twijfel je over je rechten, dan kun je gratis advies vragen bij het Juridisch Loket." },
      { v: "Ik denk dat ik ben opgelicht door een dakdekker, wat nu?", a: "Bewaar alles: de offerte, betaalbewijzen, berichten en foto's. Doe aangifte bij de politie en meld het bij de Fraudehelpdesk. Heb je aan de deur iets getekend, dan heb je vaak 14 dagen bedenktijd. Laat het werk door een andere vakman bekijken voordat je nog iets betaalt." },
      { v: "Welke keurmerken zijn er voor dakdekkers?", a: "Bekende namen in de dakenbranche zijn het keurmerk Dakmerk en de branchevereniging Vebidak. Zo'n keurmerk betekent dat een bedrijf aan bepaalde eisen voldoet. Maar het zegt niet alles: let ook op een vaste prijs op papier, een KvK-inschrijving en één vast aanspreekpunt." },
      { v: `Hoe weet ik of de reviews van een dakdekker echt zijn?`, a: `Kijk waar ze staan. Reviews op een platform waar de vakman ze niet zelf kan schrijven of aanpassen, zoals Werkspot of Google, zeggen meer dan losse citaten op zijn eigen site. Lees ook de korte en de minder goede reviews, en kijk of ze gaan over het soort klus dat jij nodig hebt. Mijn reviews staan op Werkspot, en via mijn over-pagina kun je ze daar allemaal nalezen.` },
      { v: `Is een groot dakdekkersbedrijf betrouwbaarder dan een dakdekker die alleen werkt?`, a: `Niet vanzelf. Een groter bedrijf kan meer mensen tegelijk sturen, en dat is handig als een heel dak in een paar dagen klaar moet. Bij een dakdekker die alleen werkt, heb je van het eerste telefoontje tot de rekening hetzelfde aanspreekpunt, en weet je wie er op je dak staat. Kijk bij allebei naar dezelfde dingen: een KvK-inschrijving, een vaste prijs op papier voordat het werk begint, en reviews op een platform waar de vakman ze niet zelf kan aanpassen. Ik werk zelf alleen, dus bij mij krijg je mij.` },
      { v: `Hoe weet ik of een dakdekker verzekerd is?`, a: `Vraag het gewoon voordat het werk begint. Het gaat om een bedrijfsaansprakelijkheidsverzekering: die is er voor schade aan anderen die tijdens het werk ontstaat, bijvoorbeeld als er een pan op de auto van de buren valt. Een serieuze dakdekker kan je zonder omwegen vertellen of hij verzekerd is. Ik ben zelf bedrijfsaansprakelijk verzekerd.` },
    ],
  },
  {
    slug: "wat-kost-een-dakdekker",
    titel: "Wat kost een dakdekker?",
    h1: "Wat kost een dakdekker of een dakreparatie? Eerlijke richtprijzen",
    metaTitle: "Dakreparatie kosten: wat kost een dakdekker?",
    metaDescription:
      `Wat kost een dakdekker? Dakgoot reinigen ${prijsVan("goot_reinigen")}, dakpan vervangen ${prijsVan("dakpan")}, daklekkage ${prijsVan("daklekkage")}, incl. btw. Offerte gratis, vaste prijs vooraf.`,
    intro:
      `Wil je eerst weten hoe je dak ervoor staat? Dat is bij mij de Dak-APK: ${apkPrijs} voor een compleet keuringsrapport met foto's van elke risicoplek, binnen een dagdeel. Voor de rest staan hieronder de vanaf-prijzen per klus, inclusief btw. Geen vaag bedrag per meter, en bij elke klus hoor je de vaste prijs voordat ik begin.`,
    secties: [
      { kop: "Kleine klussen en reparaties", tekst: [
        `Een paar losse pannen vervangen of een nokvorst weer vastzetten kost ${panPrijs}. Meer pannen of verder rijden, dan wordt het meer.`,
        `Een dakgoot reinigen is ${GOTEN_PRIJS} voor één goot, en terwijl ik bezig ben zie ik vaak meteen of er verder nog iets aan je dak speelt. Beide goten of een groter huis? Vaste prijs vooraf.`,
      ] },
      { kop: "Waar de prijs van een dakreparatie van afhangt", tekst: [
        "Twee reparaties die op papier hetzelfde lijken, kunnen toch verschillen. Dat komt vooral door drie dingen.",
        "<strong>Hoe goed ik erbij kan.</strong> Een pan vlak boven de goot van een rijtjeshuis is zo gedaan. Zit de schade hoog bij de nok, op een steil dak of boven een serre of aanbouw, dan kost het meer tijd.",
        "<strong>Welk materiaal erbij nodig is.</strong> Een gangbare pan is snel te krijgen. Een oude of bijzondere pan zoeken kost meer moeite, en nieuw lood bij de schoorsteen is duurder dan een pan terugleggen.",
        "<strong>Hoeveel er aan de hand is.</strong> Zie ik naast die ene pan ook een losse nokvorst of lood dat loslaat, dan hoor je dat vooraf, met wat het samen kost. Jij beslist wat ik meeneem.",
      ] },
      { kop: "Richtprijzen per klus", tekst: [
        `Een daklekkage opsporen en repareren kost ${lekPrijs}, inclusief materiaal. Een klein plat dak repareren ${inclBtw("platdak")}. Een regenpijp vervangen ${inclBtw("regenpijp")}. Nokvorsten opnieuw aansmeren ${nokPrijs}.`,
        'Een goot repareren of vervangen, een nok vervangen, loodwerk of groter werk zoals een hele dakbedekking: stuur een foto, dan hoor je wat het kost. Voor grotere klussen plannen we een paar weken vooruit. Alle bedragen staan op de <a href="/prijzen/">prijzenpagina</a>.',
        "Bij spoed buiten kantooruren komt er een toeslag bij, die hoor je vooraf, nooit als verrassing achteraf.",
      ] },
      { kop: "Waarom een vaste prijs vooraf?", tekst: [
        `Elk dak is anders. Wil je eerst weten hoe je dak ervoor staat, dan kan dat via de Dak-APK (${apkPrijs}): een compleet keuringsrapport met foto's, binnen een dagdeel. Weet je al wat er moet gebeuren, dan geef ik een vaste prijs vóór ik begin. Geen meerwerk-verrassingen: dat is het verschil met een callcenter dat een richtbedrag noemt en achteraf bijplust.`,
      ] },
    ],
    dienst: { label: "Bekijk alle prijzen", href: "/prijzen/" },
    faq: [
      { v: "Reken je voorrijkosten?", a: `Nee, een offerte is altijd gratis: bel of stuur een foto via WhatsApp en je hoort de vaste prijs vooraf. Wil je een complete keuring van je hele dak met fotorapport? Dat is de Dak-APK (${apkPrijs}), maar die is optioneel.` },
      { v: "Krijg ik de prijs op papier?", a: "Je hoort de vaste prijs vooraf en krijgt die desgewenst op de offerte. Geen verrassingen achteraf." },
      { v: "Wat kost een dakreparatie?", a: `Een paar losse pannen vervangen of een nokvorst weer vastzetten kost ${panPrijs}. Een lek opsporen en dichten kost ${lekPrijs}, inclusief materiaal. Je hoort de vaste prijs voordat ik begin.` },
      { v: "Waarom verschillen de prijzen van dakdekkers zo?", a: "Omdat elk dak anders is en niet iedereen op dezelfde manier rekent. De een noemt een prijs per meter of per uur, de ander rekent voorrijkosten of een minimumbedrag. Vraag daarom altijd wat er precies in de prijs zit en of het een vaste prijs is." },
    ],
  },
  {
    slug: "schoorsteen-vegen-hoe-vaak",
    verborgen: true,
    titel: "Hoe vaak schoorsteen vegen?",
    h1: "Hoe vaak moet je de schoorsteen vegen, en wat kost het?",
    metaTitle: "Hoe vaak schoorsteen vegen? | Spoed Dak Service",
    metaDescription:
      "Hoe vaak schoorsteen vegen? Bij regelmatig stoken één keer per jaar, het beste vóór het stookseizoen. Veiliger tegen schoorsteenbrand.",
    intro:
      "Een schone schoorsteen is veiliger en trekt beter. Maar hoe vaak is vegen nu echt nodig, en wat kost het? Kort en eerlijk uitgelegd.",
    secties: [
      { kop: "Hoe vaak is nodig?", tekst: [
        "Stook je regelmatig hout? Dan is één keer per jaar het advies, het beste vóór het stookseizoen (eind zomer / begin herfst). Bij een gasketel of weinig stoken kan het minder vaak.",
        "Veel verzekeraars verwachten ook een jaarlijkse beurt, handig om te weten als er ooit iets misgaat.",
      ] },
      { kop: "Waarom het belangrijk is", tekst: [
        "In het kanaal verzamelt zich roet en creosoot. Te veel daarvan vergroot de kans op schoorsteenbrand en zorgt voor slechte trek (rook in huis). Vegen lost dat op en ik kijk meteen of het lood en de aansluiting op het dak nog goed zijn, een veelvoorkomende lekbron.",
      ] },
      { kop: "Zo zie je dat vegen nodig is", tekst: [
        "Rook die bij het aansteken de kamer in slaat, een kachel die slecht trekt, een sterke roetlucht als je niet stookt, of zwarte schilfers onder in de haard. Merk je zoiets, wacht dan niet tot volgend jaar.",
      ] },
      { kop: "Wat kost het?", tekst: [
        "Laat het vegen doen door een erkende schoorsteenveger. Lekt het bij je schoorsteen, dan kijk ik naar het lood en de aansluiting op het dak.",
      ] },
    ],
    dienst: { label: "Bekijk: schoorsteen vegen", href: "/diensten/schoorsteen-vegen/" },
    faq: [
      { v: "Wanneer kan ik het beste laten vegen?", a: "Vóór het stookseizoen, dus eind zomer of begin herfst. Dan begin je de winter veilig en met goede trek." },
      { v: "Maak je er binnen een rommel van?", a: "Nee. Ik dek netjes af en werk schoon, geen roet in je woonkamer." },
      { v: "Is schoorsteen vegen verplicht?", a: "Voor een gewoon woonhuis staat het niet in de wet. Wel vragen veel verzekeraars in hun voorwaarden om een jaarlijkse veegbeurt als je hout stookt. Gaat het mis en is er niet geveegd, dan kan dat gevolgen hebben voor je uitkering. Kijk het even na in je polis." },
      { v: "Moet de schoorsteen ook geveegd worden als ik weinig stook?", a: "Stook je maar een paar keer per jaar, dan kan het vaak minder vaak. Heb je lang niet gestookt of zaten er vogels op de schoorsteen, laat dan voordat je weer begint toch even kijken of het kanaal vrij is." },
      { v: "Waarom ruikt mijn open haard naar roet als het regent?", a: "Komt er vocht in het kanaal, dan wordt het roet aan de binnenkant nat, en dat ruik je in huis. Vooral bij regen en wind, of als de haard een tijd niet aan is geweest. Vaak zit er dan veel roet in het kanaal en is vegen nodig. Komt er ook water in de haard naar beneden, dan zit er vaak geen kap op de schoorsteen." },
      { v: "Mijn schoorsteen wordt niet meer gebruikt. Moet hij dan nog geveegd worden?", a: "Elk jaar vegen hoeft dan niet meer, want er komt geen nieuw roet bij. Laat hem wel één keer vegen als je stopt met stoken, zodat het oude roet eruit is. Blijft het kanaal daarna open, dan valt er regen in, en dat water trekt met het roet in de muur. Binnen zie je dat als bruine vlekken. Zet er daarom een kap of afdekplaat op die de regen tegenhoudt en het kanaal toch laat ademen. Die kan ik er voor je op zetten. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "wat-kost-dak-coaten",
    verborgen: true,
    titel: "Wat kost dak coaten?",
    h1: "Wat kost dak coaten, en is het de moeite waard?",
    metaTitle: "Wat kost dak coaten? | Spoed Dak Service",
    metaDescription:
      "Wat kost dak of dakpannen coaten? Coating beschermt pannen die nog goed zijn en is veel goedkoper dan vervangen. Vaste prijs na een Dak-APK of bezoek.",
    intro:
      "Coaten klinkt als een dure ingreep, maar het is juist een manier om vervangen uit te stellen. Wanneer is het slim, en wat kost het? Eerlijk uitgelegd.",
    secties: [
      { kop: "Wanneer is coaten zinvol?", tekst: [
        "Coaten loont als je pannen nog stevig zijn maar verweerd: poreus, vol mos of dof. De coating beschermt tegen vocht, mos en uv en geeft je dak jaren extra.",
        "Zijn de pannen al broos of gebarsten, dan is coaten zonde van het geld. Dan adviseer ik vervangen. Ik kom kijken en zeg eerlijk wat in jouw geval loont.",
      ] },
      { kop: "Coaten versus vervangen", tekst: [
        "Een dak vervangen is een flinke investering. Coaten kost daar een fractie van en kan, mits de pannen nog goed zijn, hetzelfde resultaat geven: een strak, beschermd dak. Daarom begin ik altijd met de vraag: kán het met coaten, of is vervangen echt nodig?",
      ] },
      { kop: "Wat kost het?", tekst: [
        "De prijs hangt af van het oppervlak en de staat van het dak. Wil je eerst weten hoe je dak ervoor staat, dan kan dat via de Dak-APK (€49); daarna geef ik een vaste prijs. Eerst reinigen, dan coaten, netjes en in één keer goed.",
      ] },
    ],
    dienst: { label: "Bekijk: dak coaten", href: "/diensten/dakcoating" },
    faq: [
      { v: "Hoe lang gaat een coating mee?", a: "Bij goed uitgevoerd werk meerdere jaren. De exacte levensduur hangt af van het type pan en de ligging van je dak." },
      { v: "Eerst reinigen?", a: "Ja, altijd. Een coating hecht alleen op een schoon dak, dus reinigen hoort er standaard bij." },
    ],
  },
  {
    slug: "zonnepanelen-reinigen-nodig",
    verborgen: true,
    titel: "Zonnepanelen reinigen nodig?",
    h1: "Zonnepanelen reinigen: nodig, hoe vaak en wat levert het op?",
    metaTitle: "Zonnepanelen reinigen nodig? | Spoed Dak Service",
    metaDescription:
      "Vuile zonnepanelen leveren minder op. Hoe vaak reinigen nodig is en hoeveel opbrengst je terugwint.",
    intro:
      "Stof, mos en vogelpoep op je panelen kosten opbrengst. Maar hoe vaak is reinigen echt nodig, en verdien je het terug? Kort en eerlijk.",
    secties: [
      { kop: "Levert reinigen echt iets op?", tekst: [
        "Ja. Vuile panelen kunnen enkele procenten minder opbrengen, soms meer als er een dikke laag mos of vogelpoep op zit. Schone panelen vangen simpelweg meer licht.",
        "Of het de moeite is, hangt af van hoe vies ze zijn. Liggen ze vlak of staan er bomen/vogels in de buurt, dan vervuilen ze sneller.",
      ] },
      { kop: "Hoe vaak?", tekst: [
        "Voor de meeste daken is eens per 1 à 2 jaar genoeg. Veel bomen of vogels in de buurt? Dan vaker. Ik kijk meteen of de bevestiging en de pannen eronder nog goed zijn.",
        'Lekt het op zolder sinds de panelen erop liggen? Lees dan <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a>.',
      ] },
      { kop: "Wat kost het?", tekst: [
        "Zonnepanelen reinigen doe ik zelf niet. Lekt het onder je panelen, dan kijk ik wel naar de pannen eronder.",
      ] },
    ],
    dienst: { label: "Bekijk: zonnepanelen reinigen", href: "/diensten/zonnepanelen-reinigen/" },
    faq: [
      { v: "Kras je de panelen niet?", a: "Ik werk voorzichtig en zonder schurende middelen, want krassen in het glas wil je niet." },
      { v: "Kan ik mijn panelen zelf met water afspoelen?", a: "Kun je er veilig bij, dan kan afspoelen met gewoon water geen kwaad. Kalkrijk kraanwater laat soms kringen achter. Ga niet zelf op het dak staan: tussen de panelen is het glad en je stapt zo een pan kapot." },
    ],
  },
  {
    slug: "plat-dak-vervangen-of-repareren",
    titel: "Plat dak: repareren of vervangen?",
    h1: "Plat dak vervangen of repareren? EPDM, bitumen en de kosten",
    metaTitle: "Plat dak repareren of vervangen? | Spoed Dak Service",
    metaDescription:
      "Plat dak dat lekt: repareren of de hele bedekking vervangen? Het verschil tussen EPDM en bitumen, wanneer wat loont, en hoe ik het lek opspoor.",
    intro:
      "Een plat dak lekt vaak bij naden en aansluitingen, en het water komt meestal verderop naar binnen dan waar het lek zit. Repareren of vervangen? Zo bepaal ik dat.",
    secties: [
      { kop: "Waar een plat dak meestal lekt", tekst: [
        "Bijna altijd bij een naad of een aansluiting: langs de daktrim aan de rand, bij een opstaande muur, rond de afvoer, bij een doorvoer van een ventilatiepijp en op de naden tussen twee banen.",
        "Let ook op plekken waar na een bui water blijft staan. Staand water zoekt elke kleine scheur op, en mos en vuil houden het vocht nog langer vast.",
      ] },
      { kop: "Repareren of vervangen?", tekst: [
        "Eén lek op een verder gezonde bedekking: repareren is prima en goedkoop. Is de bedekking op meerdere plekken versleten, blaast ze op of staat er water op, dan is vervangen op termijn voordeliger dan blijven lappen.",
        "Ik spoor eerst het lek op (de natte plek binnen zegt weinig over de plek op het dak) en zeg dan eerlijk wat loont.",
      ] },
      { kop: "EPDM of bitumen?", tekst: [
        "Bitumen (dakleer) is beproefd en wordt in lagen aangebracht. EPDM is een rubberen folie, vaak in één stuk, flexibel en lang houdbaar. Voor kleinere daken is EPDM vaak ideaal; welke het beste past hangt af van je dak en budget.",
      ] },
      { kop: "Dakleer: zo zie je dat het slijt", tekst: [
        "Op veel garages, schuren en oudere aanbouwen ligt dakleer, de gewone naam voor bitumen in banen. Vaak ligt er bovenop een laag leislag: fijne steentjes die het bitumen tegen de zon beschermen. Zie je die steentjes in de goot of bij de afvoer liggen, dan slijt de bovenlaag.",
        "Daarna droogt het bitumen in de zon uit. Je ziet dan fijne scheurtjes, een beetje zoals een opgedroogde modderplas. Op de overlap van twee banen kan een naad gaan openstaan, en op een schuur komt soms een spijkerkop door het dakleer omhoog. Kun je het dak vanuit een raam boven zien, maak dan een foto en stuur die via WhatsApp. Dan zeg ik eerlijk wat ik zie.",
      ] },
      { kop: `Gaat het om je schuur, garage of tuinhuis?`, tekst: [
        `Lekt het dak van je schuur, garage of tuinhuis, dan is dat vaak een ander verhaal dan het platte dak van je aanbouw. Zo'n dak is meestal eenvoudiger opgebouwd, en een blaas, een scheur of een losse rand is vaak met een gerichte reparatie te maken. Hoe je ziet wat er mis is en wanneer een plak genoeg is, lees je in <a href="/kennisbank/dakleer-repareren/">dakleer repareren</a>.`,
        `Is het nat langs de buitenmuur van je aanbouw, of staat de rand van het dak na een storm omhoog, kijk dan bij <a href="/kennisbank/daktrim-lekt/">plat dak lekt langs de rand</a>. Blijft er na een bui een plas op het dak staan, lees dan <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: "Lekt je platte dak nu?", tekst: [
        'Zet een emmer onder het lek en maak een foto van de natte plek. Ga niet zelf het dak op als het nat is of waait. Bij een plat dak komt het water vaak meters verderop binnen dan waar het lek zit, dus de plek binnen zegt weinig. Kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen, of lees hoe ik <a href="/kennisbank/daklekkage-opsporen/">een daklekkage opspoor</a>.',
      ] },
      { kop: `Platte daken bij jou in de buurt`, tekst: [
        `In de regio Den Bosch liggen platte daken vooral op aanbouwen, bergingen, garages en schuren. Hoe ik een lek daar aanpak, lees je bij daklekkage in <a href="/werkgebied/vlijmen/daklekkage/">Vlijmen</a>, waar achter veel rijtjeshuizen een berging met een lichtkoepel staat, in <a href="/werkgebied/den-bosch/daklekkage/">Den Bosch</a>, waar ik in Maaspoort en Empel vaak bij de dakrand of een volle afvoer zoek, en in <a href="/werkgebied/tilburg/daklekkage/">Tilburg</a>, waar in de Reeshof veel huizen een platte aanbouw of berging hebben. Ligt er grind op je platte dak, lees dan bij goten schoonmaken in <a href="/werkgebied/waalwijk/goten-reinigen/">Waalwijk</a> hoe ik de afvoer vrijhoud. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Een gericht lek in een plat dak, bijvoorbeeld bij een naad, de rand of de afvoer, kost meestal ${lekPrijs}, inclusief materiaal. Is de bedekking op meer plekken versleten en moet er een groter stuk of de hele bedekking opnieuw, dan krijg je een vaste prijs na inspectie. Je hoort altijd wat het wordt voordat ik begin. Alle richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: platte daken (EPDM)", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Hoe lang gaat EPDM mee?", a: "EPDM kan, goed gelegd, tientallen jaren mee. Het is flexibel en bestand tegen weer en uv." },
      { v: "Kun je het lek vinden zonder alles open te breken?", a: "Meestal wel. Ik spoor gericht op bij naden en opstanden, zodat er zo min mogelijk open hoeft." },
      { v: "Is mos op een plat dak schadelijk?", a: "Een beetje mos is niet meteen erg, maar het houdt vocht en vuil vast en kan de afvoer verstoppen. Dan blijft er water op je dak staan, en dat zoekt elke zwakke plek op. Haal het daarom op tijd weg en houd de afvoer vrij." },
      { v: "Hoe vaak moet een plat dak nagekeken worden?", a: "Minstens één keer per jaar, het liefst in het najaar: afvoer vrij, geen blad of mos in de hoeken en geen plekken waar water blijft staan. Een korte controle voorkomt de meeste lekkages." },
      { v: "Kan een plat dak in de herfst of winter gerepareerd worden?", a: "Vaak wel, maar het weer telt mee. Voor een nette reparatie moet het dak droog zijn, en bij vorst of in een natte week hecht niet elk materiaal goed. Lekt het nu, dan maak ik het lek vaak eerst tijdelijk dicht, zodat het binnen droog blijft. De nette reparatie doe ik dan op een droge dag. Je hoort vooraf wat het kost." },
      { v: "Kan ik een lek in mijn platte dak zelf tijdelijk dichtmaken?", a: "Voor even soms wel, maar alleen op een droge dag en als je veilig op het dak kunt komen, bijvoorbeeld op het lage dak van een aanbouw. Ga er niet op bij regen, wind of vorst. Een reparatieband of kit voor daken uit de bouwmarkt houdt een klein scheurtje soms een tijdje droog, maar op een nat of vuil dak hecht het slecht. Weet je niet precies waar het lek zit, plak dan niet op de gok, want bij een plat dak komt het water vaak meters verderop binnen. Lekt het nu, zet een emmer onder de druppel en stuur me een foto van de natte plek en van het dak." },
    ],
  },
  {
    slug: "water-blijft-staan-op-plat-dak",
    datum: "2026-10-22",
    titel: "Water op je platte dak?",
    h1: "Water blijft staan op je platte dak: erg of niet?",
    metaTitle: "Water blijft staan op plat dak: erg? | Spoed Dak Service",
    metaDescription:
      "Blijft er na een bui een plas staan op je platte dak? Een paar ondiepe plasjes zijn normaal. Wanneer het wel een probleem is en wat je eraan doet.",
    intro:
      "Na een flinke bui zie je een plas op het platte dak van je uitbouw, garage of berging. Moet je je zorgen maken? Meestal niet meteen. Maar water dat dagen blijft staan, zoekt vroeg of laat een zwakke plek. Hieronder lees je wanneer het kan en wanneer je beter even laat kijken.",
    secties: [
      { kop: "Een beetje water is normaal", tekst: [
        "Een plat dak is nooit helemaal vlak. Na een bui blijven er vaak een paar ondiepe plasjes liggen die binnen een dag of twee opdrogen. Dat is geen probleem.",
      ] },
      { kop: "Wanneer het wel een probleem is", tekst: [
        "Staat er na een paar droge dagen nog steeds water? Is de plas groot, of wordt hij elk jaar groter? Dan loopt het water niet goed weg. Staand water zoekt elke kleine scheur en naad op. Er groeien mos en vuil in, en in de winter kan het bevriezen. Dat is extra belasting voor de dakbedekking.",
      ] },
      { kop: "Waar het meestal door komt", tekst: [
        "Een afvoer die vol blad, mos of zand zit. Dat zie ik het vaakst, en het is meestal het makkelijkst op te lossen.",
        "Een dak dat in de loop der jaren is gaan doorhangen, bijvoorbeeld doordat het dakbeschot vocht heeft opgenomen. Dan ontstaat er een kuil waar het water niet uit kan.",
        "Te weinig afschot: het dak loopt niet genoeg af naar de afvoer. Dat zit er soms al in vanaf de bouw.",
      ] },
      { kop: "Staat het water bij een lichtkoepel of tegen de muur?", tekst: [
        'Blijft het water vooral rond een lichtkoepel staan, dan staat het tegen de rand waar de koepel op de opstand zit. Juist daar lekt een plat dak vaak als eerste. Lees daarover <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.',
        'Staat de plas tegen de muur van het huis, waar het platte dak van je aanbouw op de gevel aansluit, dan krijgt die naad het zwaar te verduren. Zie je binnen een natte streep langs die muur, lees dan <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.',
      ] },
      { kop: "Wat je zelf kunt doen", tekst: [
        "Kun je er veilig bij, haal dan blad en vuil weg rond de afvoer. Ga niet op een nat of glad dak staan en gebruik geen wankele ladder. Lukt het niet veilig, maak dan een foto van de plas en de afvoer en stuur die via WhatsApp. Dan zeg ik wat ik zie.",
      ] },
      { kop: "Lekt het al binnen?", tekst: [
        'Zie je een natte plek in het plafond van de uitbouw of garage? Bij een plat dak komt het water vaak een eind verderop binnen dan waar het lek zit. Kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet. Of repareren genoeg is of dat de bedekking aan vervanging toe is, lees je in <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak: repareren of vervangen</a>.',
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk eerst waarom het water blijft staan: een dichte afvoer, een kuil in het dak of te weinig afschot. Een dichte afvoer maak ik weer vrij. Ligt het aan een kuil of het afschot, dan zeg ik eerlijk wat er nodig is en of een gerichte reparatie genoeg is. Je hoort de vaste prijs vooraf. Zie <a href="/diensten/platte-daken/">platte daken</a>.',
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Is alleen de afvoer dicht, dan is het vaak een kleine klus. Moeten je goten ook leeg, dan neem ik de afvoer van het platte dak in dezelfde keer mee. Lekt het al binnen, dan valt een gericht lek in een plat dak, bijvoorbeeld bij een naad of bij de afvoer, meestal onder een lekreparatie: ${lekPrijs}, inclusief materiaal. Moet er iets aan een kuil of het afschot gebeuren, dan kom ik eerst kijken en hoor je vooraf de vaste prijs.`,
      ] },
    ],
    dienst: { label: "Bekijk: platte daken (EPDM)", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Hoe lang mag water op een plat dak blijven staan?", a: "Een paar ondiepe plasjes die binnen een dag of twee opdrogen zijn normaal. Staat er na een paar droge dagen nog steeds een plas, dan loopt het water niet goed weg en is het slim om te laten kijken." },
      { v: "Kan een plas op het dak lekkage geven?", a: "Niet meteen, maar staand water zoekt elke kleine scheur en naad op. Hoe langer het blijft staan, hoe groter de kans dat het ergens doorheen komt." },
      { v: "Wat is een noodoverloop?", a: "Een extra opening in de dakrand, iets hoger dan de afvoer. Raakt de afvoer verstopt, dan kan het water daar weg in plaats van op het dak te blijven staan. Niet elk plat dak heeft er een." },
      { v: "Moet het hele dak opnieuw als er water blijft staan?", a: "Meestal niet. Vaak is het een dichte afvoer. Ligt het aan een kuil of te weinig afschot, dan kijk ik eerst of een gerichte reparatie genoeg is. Je hoort eerlijk wat nodig is." },
      { v: "Mag ik de plas op mijn platte dak zelf wegvegen?", a: "Dat mag, met een zachte bezem of een trekker, als je veilig op het dak kunt staan en het niet glad is. Gebruik geen schep of ander scherp gereedschap, want daarmee beschadig je de dakbedekking zo. Het lost alleen niets op. Komt de plas na elke bui terug, dan loopt het water niet goed weg. Kijk dan eerst of de afvoer vrij is, en stuur me een foto als het daarna niet beter wordt." },
      { v: "De plas op mijn platte dak is bevroren. Is dat erg?", a: "Eén keer ijs op een plas is meestal geen ramp, maar het is wel extra belasting voor de dakbedekking, zeker als het vaak vriest en weer dooit. Hak of schraap het ijs er niet af, want daarmee maak je juist gaten in de bedekking. Let vooral op als het gaat dooien. Is de afvoer ook bevroren of zit hij vol blad, dan kan het smeltwater nergens heen en zoekt het een naad of de rand op. Kijk na de dooi of de plas binnen een dag of twee weg is. Blijft hij staan, of zie je binnen een natte plek, stuur me dan een foto van het dak en van de afvoer via WhatsApp." },
    ],
  },
  {
    slug: "lekkage-bij-aanbouw",
    datum: "2026-10-29",
    titel: "Lekt je aanbouw bij de muur?",
    h1: "Lekkage bij de aanbouw: waar het platte dak tegen je huis zit",
    metaTitle: "Aanbouw lekt bij de muur: oorzaken | Spoed Dak Service",
    metaDescription:
      "Een natte plek in je aanbouw, vlak langs de muur van het huis? Vaak zit het in de aansluiting van het dak op de gevel, of komt het water door de muur erboven.",
    intro:
      "Een aanbouw of uitbouw achter het huis heeft meestal een plat dak dat tegen de gevel van het huis aan ligt. Precies op die naad gaat het vaak mis. Je ziet het als een natte streep of vlekken op het plafond van de aanbouw, vlak langs de muur van het huis. Hieronder lees je waar het water meestal binnenkomt en wat eraan te doen is.",
    secties: [
      { kop: "Lekt het nu? Eerst dit", tekst: [
        'Zet een emmer neer, haal spullen weg bij de natte muur en maak een foto van de plek. Ga niet zelf het platte dak op als het nat of glad is. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.',
      ] },
      { kop: "Hoe de aansluiting op de muur in elkaar zit", tekst: [
        "Langs de muur loopt de dakbedekking van de aanbouw een stukje omhoog, tegen de gevel aan. Daaroverheen zit meestal een strook lood of zink die met de bovenrand in de muur vastzit. Die strook zorgt dat het water dat langs de gevel naar beneden loopt, over de dakbedekking heen het dak op gaat en niet erachter.",
      ] },
      { kop: "Waar het meestal lekt", tekst: [
        "Het lood of zink is losgekomen uit de muur. Dan staat er een kier tussen de strook en de gevel, en loopt het water bij elke bui achter de strook langs naar binnen.",
        "De dakbedekking onder het lood is losgeraakt of gescheurd, vaak in een hoek. Juist op die plek werkt het dak bij warmte en kou het meest.",
        'Er blijft water staan tegen de gevel, omdat het dak niet goed afloopt of de afvoer vol zit. Dan staat de aansluiting steeds onder water. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.',
      ] },
      { kop: "Of komt het door de muur erboven?", tekst: [
        "Soms is het dak helemaal dicht en komt het water door de gevel van het huis. Een buitenmuur neemt bij een flinke bui met wind water op. Dat zakt binnen in de muur naar beneden en komt eruit op de plek waar het dak van de aanbouw tegen de muur zit. Je herkent het doordat het vooral lekt als de regen tegen die gevel aan slaat, en soms pas een dag later. Zit het in de muur zelf, in de voegen of de stenen, dan zeg ik dat eerlijk: daarvoor heb je een metselaar nodig.",
      ] },
      { kop: `Is het een veranda of overkapping?`, tekst: [
        `Heb je geen stenen aanbouw, maar een veranda of overkapping met platen tegen je huis? Daar werkt de aansluiting op de muur net iets anders, en lekt het ook vaak bij een naad tussen de platen of bij het smalle gootje aan de voorkant. Hoe je ziet waar het bij jou zit, lees je in <a href="/kennisbank/veranda-of-overkapping-lekt/">veranda of overkapping lekt</a>.`,
      ] },
      { kop: "Wat je zelf beter niet doet", tekst: [
        "Kit tussen het lood en de muur lijkt een snelle oplossing, maar lost het zelden op. Zit het lek in de dakbedekking onder het lood of in de muur erboven, dan kit je de verkeerde plek dicht. Maak liever een foto van de natte plek binnen en van de muur boven de aanbouw, en stuur die via WhatsApp.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        'Ik kijk eerst of het water door het dak komt of door de muur. Is het lood of zink losgekomen, dan zet ik het weer goed vast, of ik vervang de strook. Is de dakbedekking langs de muur los of gescheurd, dan maak ik die aansluiting opnieuw dicht. Zie <a href="/diensten/platte-daken/">platte daken</a>.',
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Een platte aanbouw, garage of berging tegen het huis zie ik in de hele regio. Hoe ik zo'n lek bij jou in de buurt aanpak, lees je bij daklekkage in <a href="/werkgebied/berlicum/daklekkage/">Berlicum</a>, waar het water vaak binnenkomt waar het garagedak tegen de zijmuur van het huis zit, in <a href="/werkgebied/sint-michielsgestel/daklekkage/">Sint-Michielsgestel</a>, waar in Den Dungen en Gemonde veel rijtjes een platte aanbouw achter het huis hebben, en in <a href="/werkgebied/wijchen/daklekkage/">Wijchen</a>, waar ik eerst kijk naar de strook waar het platte dak tegen de achtergevel omhoog loopt. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        'Een losse strook lood weer vastzetten is meestal een overzichtelijke klus. Moet de aansluiting over de hele breedte opnieuw, dan is het meer werk. Je hoort vooraf de vaste prijs, voordat ik begin. Of je verzekering meebetaalt, lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.',
      ] },
    ],
    dienst: { label: "Bekijk: platte daken (EPDM)", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Waarom lekt mijn aanbouw alleen langs de muur?", a: "Omdat daar de naad zit tussen het platte dak en de gevel van het huis. Laat het lood of de dakbedekking daar los, dan komt het water precies langs de muur naar binnen. Het kan ook water zijn dat door de gevel erboven naar beneden zakt." },
      { v: "Hoe zie ik of het van het dak of van de muur komt?", a: "Lekt het bij elke flinke bui, ook zonder veel wind, dan zit het meestal in het dak of de aansluiting. Lekt het vooral als de regen tegen die gevel aan slaat, en soms pas een dag later, dan komt het water vaker door de muur. Stuur een foto, dan kijk ik mee." },
      { v: "Is het erg als het maar een klein beetje lekt?", a: "Een beetje water langs de muur lijkt weinig, maar het trekt in het plafond en het hout van de aanbouw. Na een tijd zie je schimmel of loslatende verf. Laat het daarom nakijken, ook als het maar af en toe druppelt." },
      { v: `Is lekkage bij de aanbouw spoed?`, a: `Druppelt het binnen, loopt het water langs de muur naar beneden of zit de natte plek bij een lamp of stopcontact, dan wel: bel of app me met een foto. Is het nat bij een lamp of stopcontact, zet dan de stroom van die groep uit. Is het een donkere rand langs de muur die na de bui weer opdroogt, dan kan het meestal een paar dagen wachten. Wacht er niet tot de volgende storm mee, want het water trekt in het plafond en het hout van de aanbouw.` },
    ],
  },
  {
    slug: "veranda-of-overkapping-lekt",
    datum: "2026-11-01",
    titel: "Veranda of overkapping lekt?",
    h1: "Veranda of overkapping lekt: bij de muur, tussen de platen of bij de goot",
    metaTitle: "Overkapping of veranda lekt: oorzaken | Spoed Dak Service",
    metaDescription: `Druppelt het onder je veranda of overkapping? Meestal zit het bij de muur, tussen de platen of in het gootje aan de voorkant. Zo zie je waar het bij jou zit.`,
    intro: `Een veranda of overkapping tegen je huis is fijn, tot het eronder gaat druppelen. Meestal zit het op een van drie plekken: waar de overkapping tegen de muur van je huis zit, bij een naad tussen de platen, of in het smalle gootje aan de voorkant. Hieronder lees je hoe je ziet waar het bij jou zit en wat eraan te doen is.`,
    secties: [
      { kop: "Druppelt het nu? Eerst dit", tekst: [
        `Zet kussens en tuinmeubels droog en leg iets onder de druppel als hij op hout of tegels valt waar je over loopt. Ga niet op de platen staan of ertegen leunen. De meeste overkappingen zijn daar niet op gebouwd, en een kunststof plaat buigt of breekt zo. Maak een foto van de plek waar het druppelt en, als het lukt, uit een raam boven een foto van de overkapping. Lekt het ook binnen in huis, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen.`,
      ] },
      { kop: "Druppelt het langs de muur van je huis?", tekst: [
        `Waar de overkapping tegen de gevel zit, ligt meestal een strook lood of zink, of een aluminium profiel met kit erachter. Die moet het water dat langs de muur naar beneden loopt over de platen leiden. Laat die strook los of is de kit uitgedroogd, dan loopt het water erachter langs en druppelt het precies langs de muur naar beneden.`,
        `Het kan ook water zijn dat bij een flinke bui met wind door de gevel erboven zakt en net boven de overkapping naar buiten komt. Lekt het vooral als de regen tegen die muur slaat, en soms pas uren later, dan zit het vaker in de muur dan in de overkapping. Bij een aanbouw met een plat dak werkt dat net zo: zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: "Druppelt het onder een naad tussen de platen?", tekst: [
        `Kunststof platen liggen op liggers, met rubbers of profielen ertussen, en zijn aan de bovenkant vastgezet met een profiel of schroeven. Na een paar jaar zon en vorst krimpt zo'n rubber of schuift een plaat een stukje, en dan loopt het water langs de naad naar beneden. Zie je druppels langs een ligger, precies onder een naad, dan zit het meestal daar.`,
        `Zie je groen of vocht in de kanaaltjes van een kanaalplaat, dan is de afsluiting aan de boven- of onderkant van de plaat vaak niet meer dicht. En zitten er op een koude ochtend druppels verspreid onder een plaat, ook als het niet heeft geregend, dan is dat meestal condens en geen lek.`,
      ] },
      { kop: "Loopt het over aan de voorkant?", tekst: [
        `Aan de voorkant van de meeste overkappingen hangt een smalle goot, met een dunne regenpijp die vaak in een van de palen is weggewerkt. Daar komt het blad uit je tuin in terecht. Komt de regenpijp van het grote dak op de overkapping uit, dan krijgt dat gootje bij een flinke bui ook nog het water van je hele dak. Zit het vol, of is de pijp in de paal dicht, dan loopt het water over de voorkant of terug onder de platen. Van beneden zie je dat gootje slecht, dus het wordt makkelijk vergeten.`,
      ] },
      { kop: "Blad en mos op de platen", tekst: [
        `Onder bomen blijft in de herfst veel blad op de platen liggen, vooral in de hoek tegen de muur. Dat houdt water vast, en daar groeien mos en algen in. Het water loopt dan niet meer goed naar de goot en blijft tegen de aansluiting bij de muur staan. Haal het blad er een paar keer per jaar af, met een zachte bezem aan een lange steel of vanaf een ladder naast de overkapping, en niet staand op de platen.`,
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        `Ik kijk eerst waar het water echt naar binnen komt: bij de muur, bij een naad tussen de platen of bij het gootje. Een losse strook langs de muur zet ik weer goed vast of ik vervang hem, en het gootje maak ik leeg, met de uitloop naar de regenpijp vrij. Ligt een plaat scheef of zit hij los, dan kijk ik of hij vast kan of vervangen moet worden. Zit het in de muur zelf, in de voegen of de stenen, dan zeg ik dat eerlijk: daarvoor heb je een metselaar nodig. Zie ook <a href="/diensten/platte-daken/">platte daken</a>.`,
      ] },
      { kop: "Wat kost het?", tekst: [
        `Dat hangt af van waar het zit en hoeveel werk het is. Een vol gootje leegmaken is iets anders dan een nieuwe aansluiting langs de muur. Je hoort vooraf de vaste prijs, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: platte daken", href: "/diensten/platte-daken/" },
    faq: [
      { v: "Kan ik de naad tussen mijn overkapping en de muur zelf dichtkitten?", a: `Een likje kit houdt het soms even droog, maar meestal niet lang. Zit de strook los of komt het water door de muur erboven, dan kit je de verkeerde plek dicht. Maak liever een foto van de muur boven de overkapping en van de plek waar het druppelt, en stuur die via WhatsApp.` },
      { v: "De regenpijp van mijn dak komt uit op de overkapping. Is dat erg?", a: `Het hoeft niet mis te gaan, maar bij een stortbui krijgt het smalle gootje van de overkapping dan het water van je hele dak. Loopt het daardoor over, dan kan de regenpijp vaak met een verlengstuk tot in de goot of langs de paal naar beneden worden doorgezet. Wat bij jou kan, bekijk ik ter plekke.` },
      { v: "Mag ik op mijn overkapping lopen om het blad eraf te halen?", a: `Liever niet. De meeste overkappingen zijn niet gemaakt om op te lopen, en kunststof platen buigen of breken zo. Haal het blad weg met een zachte bezem aan een lange steel, of vanaf een ladder naast de overkapping.` },
      { v: "Is een lekkende overkapping spoed?", a: `Meestal niet, zolang het water buiten blijft. Komt het water ook binnen in huis, bijvoorbeeld langs de muur of bij een kozijn, dan wel. Bel of app me dan met een foto.` },
    ],
  },
  {
    slug: "dakgoot-zelf-schoonmaken",
    datum: "2026-11-01",
    titel: `Dakgoot zelf schoonmaken?`,
    h1: `Dakgoot zelf schoonmaken: zo doe je het veilig, en wanneer je het beter laat doen`,
    metaTitle: `Dakgoot zelf schoonmaken: zo doe je dat | Spoed Dak Service`,
    metaDescription: `Wil je je dakgoot zelf schoonmaken? Wat je nodig hebt, hoe je het veilig doet vanaf de ladder, wat je beter laat en wanneer je het liever laat doen.`,
    intro: `In november zitten veel goten vol blad. Een lage goot leegmaken kun je vaak prima zelf, met een stevige ladder, handschoenen en een emmer. Hoe hoger de goot, hoe groter het risico. Hieronder lees je hoe je het veilig doet, waar je op let nu je toch boven bent, en wanneer je het beter aan mij overlaat.`,
    secties: [
      { kop: `Eerst: kun je er veilig bij?`, tekst: [
        `De goot van een schuur, garage, berging of aanbouw zit vaak zo laag dat je er met een trap of een korte ladder goed bij kunt. Die kun je prima zelf leeghalen.`,
        `Zit de goot op de eerste verdieping of hoger, moet de ladder op een schuin pad, in de border of tussen de struiken staan, of heb je een bakgoot of een kilgoot? Dan laat je het liever doen. Een val van een paar meter loopt al snel slecht af, en bij een bakgoot of kilgoot loopt een fout niet langs de gevel maar naar binnen. Zie <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a> en <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Wat je nodig hebt`, tekst: [
        `Een stevige ladder die een stuk boven de goot uitkomt, en het liefst iemand die hem onderaan vasthoudt. Werkhandschoenen, want in een goot zitten scherpe randjes, splinters en soms glas. Een emmer met een haak, zodat je hem aan de ladder kunt hangen, en een klein schepje van kunststof.`,
        `Zet de ladder tegen de muur en niet tegen de goot. Een kunststof goot buigt door en de beugels kunnen losschieten. Met een afstandhouder bovenaan de ladder blijft hij netjes van de goot af.`,
      ] },
      { kop: `Zo maak je de goot leeg`, tekst: [
        `Begin bij de uitloop naar de regenpijp. Haal daar het blad en de prop eruit met je hand, en duw niets de regenpijp in, want daar krijg je het lastig weer uit. Werk daarna vanaf de uitloop naar het eind van de goot.`,
        `Schep het blad en het slib in de emmer en zet de ladder steeds een stukje op. Blijf met je buik tussen de twee kanten van de ladder en reik niet ver opzij. Juist dan schuift een ladder het makkelijkst weg.`,
        `Kijk bij de volgende bui of het water nu goed weg loopt. Blijft er halverwege de goot een plas staan, dan hangt de goot niet meer goed op afschot, en dan is leegmaken alleen niet genoeg.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Ga niet het dak op om vanaf de pannen in de goot te reiken, en hang niet uit een dakraam. Werk niet als het regent, waait of vriest, of als het al donker wordt: natte bladeren op een sport zijn glad. Gebruik geen hogedrukreiniger: daarmee spuit je het slib tegen je gevel en ramen, en het water kan onder de pannen terechtkomen.`,
      ] },
      { kop: `Kijk meteen even rond`, tekst: [
        `Nu je toch boven bent, zie je dingen die je van beneden mist. Stukjes specie of pan in de goot betekenen vaak dat er boven bij de nok iets los zit, lees dan <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>. Een naad of hoek met roest, een gaatje, of een donkere streep eronder op de gevel wijst op een lek in de goot zelf, zie <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>. Loopt het water achter de goot langs de muur, kijk dan bij <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
        `Zit de regenpijp zelf verstopt, ook als de goot leeg is? Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>.`,
      ] },
      { kop: `Liever laten doen?`, tekst: [
        `Eén goot, zoals de voorgoot, kost ${GOTEN_PRIJS} en de troep gaat mee. Voor beide goten hoor je vooraf de prijs. Terwijl ik boven ben, kijk ik meteen naar de pannen, het lood en de goot zelf, en je hoort eerlijk wat ik zie. Wat erbij zit en waar de prijs van afhangt, lees je in <a href="/kennisbank/wat-kost-dakgoot-schoonmaken/">wat kost dakgoot schoonmaken</a>.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen/" },
    faq: [
      { v: `Kan ik mijn dakgoot vanaf de grond schoonmaken?`, a: `Er zijn lange stelen met een grijper of een haakje om vanaf de grond in de goot te werken. Bij een lage goot met droog blad gaat dat redelijk. Nat slib en mos krijg je er zo lastig uit, en je ziet niet of de uitloop naar de regenpijp echt vrij is.` },
      { v: `Wanneer kan ik mijn goot het beste zelf leegmaken?`, a: `Laat in de herfst, als het meeste blad gevallen is, op een droge dag zonder veel wind. Niet als het vriest of als er ijs in de goot zit: dan is de ladder glad en kun je de goot beschadigen.` },
      { v: `Waar laat ik het blad en slib uit de goot?`, a: `Blad, mos en slib mogen meestal bij het gft. Stukjes dakpan of specie horen daar niet bij, en die zijn ook een teken dat er boven iets los zit. Stuur me daar gerust een foto van via WhatsApp.` },
      { v: `Mag ik de ladder tegen de goot zetten?`, a: `Liever niet. Een kunststof goot buigt door het gewicht, en bij een zinken goot kunnen de beugels verbuigen, waarna de goot niet meer goed afloopt. Zet de ladder tegen de muur, het liefst met een afstandhouder.` },
    ],
  },
  {
    slug: "vorstschade-dakpannen",
    datum: "2026-11-01",
    titel: `Vorstschade aan dakpannen?`,
    h1: `Vorstschade aan dakpannen: schilfers, scheuren en wat je eraan doet`,
    metaTitle: `Vorstschade aan dakpannen: zo zie je het | Spoed Dak Service`,
    metaDescription: `Schilfers of stukjes pan in je goot na een vorstperiode? Zo zie je of je dakpannen vorstschade hebben, hoe dat komt en wanneer vervangen nodig is.`,
    intro: `Na een paar nachten flinke vorst vind je soms dunne schilfers of kleine stukjes pan in je goot of op het terras. Dan nemen je dakpannen waarschijnlijk water op, en is dat water in de pan bevroren. Eén pan met vorstschade is zo vervangen. Zie je het op veel plekken, dan zegt het iets over je hele dak. Hieronder lees je hoe je het herkent en wat je doet.`,
    secties: [
      { kop: `Hoe vorstschade ontstaat`, tekst: [
        `Een nieuwe dakpan laat weinig water door. Na veel jaren zon, regen en mos wordt de buitenkant ruwer en neemt de pan meer water op. Vriest het daarna, dan zet dat water in de pan uit. Dat gebeurt elke winter een paar keer, en op den duur springt er een laagje van de pan af of komt er een scheur in.`,
      ] },
      { kop: `Zo zie je het`, tekst: [
        `Schilfers of dunne plaatjes in de goot of rond je huis, vooral na een periode met vorst. Pannen waar de bovenkant in laagjes af is, vaak aan de onderkant van de pan waar het water overheen loopt. Een haarscheur, of een hoek die eraf is.`,
        `Kijk ook na een bui vanaf de straat: pannen die nog lang donker en nat blijven terwijl de rest al droog is, nemen meer water op dan de andere. Met de zoom van je telefoon zie je vaak meer dan je denkt.`,
        `Is er maar één pan gebroken, lees dan ook <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
      { kop: `Gebakken pannen en betonpannen`, tekst: [
        `Bij gebakken pannen van klei zie je vorstschade meestal als schilfers en afgesprongen laagjes. Bij betonpannen slijt eerder de bovenlaag weg: de pan wordt ruw en korrelig, houdt meer water en mos vast en kan op den duur ook scheuren.`,
      ] },
      { kop: `Waar het het eerst gebeurt`, tekst: [
        `Aan de kant van het dak die weinig zon krijgt, vaak de noordkant, en onder bomen. Daar blijven de pannen het langst nat. Onder dik mos, want mos houdt het water tegen de pan vast. En onderaan het dak, waar al het water van het dakvlak overheen loopt.`,
      ] },
      { kop: `Is het erg?`, tekst: [
        `Een paar pannen met wat schilfers lekken niet meteen. Maar een pan die steeds dunner wordt of een scheur heeft, laat op den duur water door, en elke vorstperiode maakt het erger. De schilfers zelf kunnen samen met het blad de uitloop van je goot dichtzetten. Lekt het al binnen, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet zelf het dak op: een verweerde pan breekt makkelijk onder je voet, en bij vorst is het dak glad. Spuit oude pannen niet schoon met een hogedrukreiniger, want daarmee haal je juist het laagje weg dat nog beschermt. En kit of lijm een gescheurde pan niet: dat laat na een winter weer los.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst hoeveel pannen het zijn en waar ze liggen. Een paar slechte pannen vervang ik los, met een pan die in vorm en maat past bij wat er ligt. Zie <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a>. Zit het op veel plekken op hetzelfde dakvlak, dan zeg ik eerlijk dat een groter stuk vervangen slimmer is dan elk jaar een paar pannen. Zie <a href="/diensten/dakrenovatie/">dakrenovatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar pannen vervangen valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet er een groter stuk of een heel dakvlak, dan hoor je vooraf de vaste prijs. Wil je eerst weten hoe je hele dak ervoor staat, dan kan dat met de <a href="/dak-apk/">Dak-APK</a> (${apkPrijs}), met foto's van de pannen die aandacht vragen.`,
      ] },
    ],
    dienst: { label: "Bekijk: dakpannen vervangen", href: "/diensten/dakpannen-vervangen/" },
    faq: [
      { v: `Kan ik vorstschade aan mijn dakpannen zelf zien?`, a: `Vaak wel. Kijk na een vorstperiode in de goot en rond je huis of er schilfers of stukjes pan liggen, en kijk vanaf de straat met de zoom van je telefoon naar de pannen. Ga zelf niet het dak op. Stuur me een paar foto's via WhatsApp, dan zeg ik eerlijk wat ik zie.` },
      { v: `Moet mijn hele dak eraf als een paar pannen schilferen?`, a: `Nee. Een paar pannen met vorstschade vervang ik los. Pas als er op veel plekken pannen schilferen of gescheurd zijn, is het slimmer om naar een groter stuk te kijken.` },
      { v: `Valt vorstschade aan dakpannen onder de verzekering?`, a: `Meestal niet. Verzekeraars zien vorstschade aan oude pannen vaak als slijtage. Komt er door een gescheurde pan water binnen, dan ligt dat voor de schade binnen soms anders. Kijk in je polisvoorwaarden, en lees ook het artikel over daklekkage en je verzekering.` },
      { v: `Kan ik vorstschade voorkomen?`, a: `Een pan die al water opneemt, wordt niet meer als nieuw. Je kunt wel zorgen dat je pannen sneller drogen: laat dik mos weghalen, houd de goot leeg zodat het water niet terugloopt, en laat een gebroken pan snel vervangen, zodat er geen water onder de pannen blijft hangen.` },
    ],
  },
  {
    slug: `schoorsteen-afdekken`,
    datum: `2026-11-02`,
    titel: `Schoorsteen afdekken?`,
    h1: `Schoorsteen die je niet meer gebruikt afdekken: kap of afdekplaat, en waar je op let`,
    metaTitle: `Schoorsteen afdekken: kap of afdekplaat | Spoed Dak Service`,
    metaDescription: `Stook je niet meer, maar staat je schoorsteen nog open? Dan regent het in het kanaal. Zo dek je hem af, en waarom het kanaal wel moet blijven ademen.`,
    intro: `Veel huizen hebben nog een schoorsteen die niet meer gebruikt wordt, omdat de kachel of open haard er al jaren uit is. Staat het kanaal bovenop nog open, dan valt er bij elke bui regen in. Dat water trekt in de stenen en komt na een tijd binnen naar buiten, als een vochtige of bruine plek op de muur. Hieronder lees je wanneer afdekken zin heeft, wat je kunt kiezen en waar je op moet letten.`,
    secties: [
      { kop: `Zo zie je dat er regen in het kanaal komt`, tekst: [
        `Een vochtige of bruine plek op de schoorsteenborst of op de muur waar het kanaal achter zit, vaak een paar dagen na een flinke bui. Een muffe of roetige lucht in de kamer als het nat weer is. Zwarte strepen of korreltjes onderin de oude haard. En op zolder een donkere, natte plek op de stenen van het kanaal.`,
        `Zit de natte plek naast de schoorsteen, op het plafond of op zolder rond het kanaal, dan kan het ook het lood of een pan eromheen zijn. Lees dan <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>. Komt het water in een haard die je nog wel gebruikt, kijk dan bij <a href="/kennisbank/schoorsteen-lekt-open-haard/">water in je open haard</a>.`,
      ] },
      { kop: `Kap of afdekplaat?`, tekst: [
        `Een kap staat een stukje boven het kanaal. De regen valt erop en niet erin, en er kan toch lucht in en uit. Een afdekplaat ligt plat bovenop de schoorsteen, met aan de zijkant een opening waardoor het kanaal kan blijven ademen. Zit er gaas of een rooster in, dan houden ze ook vogels zoals kauwen uit het kanaal.`,
        `Welke het beste past, hangt af van de schoorsteen: hoe breed de kop is, of er één of meer kanalen in zitten en hoe hij eruitziet vanaf de straat. Dat kijk ik ter plekke.`,
      ] },
      { kop: `Laat het kanaal wel ademen`, tekst: [
        `Een oud kanaal helemaal luchtdicht dichtmaken is geen goed idee. In de stenen zit vaak nog wat vocht, en als dat nergens heen kan, slaat het neer in het kanaal en zie je binnen alsnog een vochtplek. Een goede kap of plaat houdt daarom de regen tegen, maar laat wel lucht door.`,
        `Binnen helpt een klein ventilatierooster onderin het kanaal, op de plek waar vroeger de kachel zat. Dan kan er een beetje lucht door het kanaal stromen en droogt het beter op.`,
      ] },
      { kop: `Kijk eerst of er echt niets meer op zit`, tekst: [
        `Soms loopt de afvoer van een cv-ketel, een geiser of een gaskachel nog door een oud kanaal, vaak met een buis erin. Zo'n kanaal mag niet worden afgedekt, want dan kunnen de rookgassen niet meer weg. Weet je niet zeker wat er op je schoorsteen is aangesloten, laat dat dan eerst nakijken door je installateur.`,
        `Stook je nog op een kachel of open haard? Dan moet het kanaal open blijven. Ook dan kan er een kap op die past bij een schoorsteen die nog in gebruik is. Laat hem dan wel elk stookseizoen vegen door een schoorsteenveger.`,
      ] },
      { kop: `Een schoorsteen die je deelt met de buren`, tekst: [
        `Staat de schoorsteen op de muur tussen jou en de buren, dan zitten er vaak twee kanalen in. Gebruiken zij hun kanaal nog wel, dan kan er op jouw kanaal een plaat of kap terwijl het hunne open blijft. Spreek dat wel eerst samen af. Meer daarover lees je in <a href="/kennisbank/lekkage-gedeelde-schoorsteen/">lekkage bij een gedeelde schoorsteen</a>.`,
      ] },
      { kop: `Laat hem eerst nog één keer vegen`, tekst: [
        `Zit er nog oud roet in het kanaal, laat het dan vegen voordat het wordt afgedekt. Oud roet trekt vocht aan en geeft bruine vlekken en een vieze lucht in huis. Dat doet een schoorsteenveger, daarna kan de kap erop.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst van buiten naar de schoorsteen: de kop, de voegen bovenop, het lood eromheen en hoeveel kanalen erin zitten. Daarna zet ik er een kap of afdekplaat op die past en die het kanaal laat ademen. Zie ik dat het lood of de pannen rond de schoorsteen ook aandacht nodig hebben, dan hoor je dat meteen. Zitten de stenen of voegen van de schoorsteen zelf slecht, dan zeg ik dat eerlijk, want daarvoor heb je een metselaar nodig. Zie ook <a href="/diensten/dakreparatie/">dakreparatie</a> en <a href="/diensten/lood-vervangen/">lood vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van de schoorsteen en wat erop moet. Je hoort vooraf de vaste prijs, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Moet een schoorsteen die ik niet meer gebruik worden afgedekt?`, a: `Het hoeft niet, maar het is wel slim. Zolang het kanaal open staat, valt er bij elke bui regen in. Dat trekt in de stenen, en na een tijd zie je binnen een vochtige of bruine plek. Ook vogels kunnen erin nestelen. Een kap of afdekplaat die het kanaal laat ademen, voorkomt dat.` },
      { v: `Kan ik de schoorsteen niet beter laten weghalen?`, a: `Dat kan, maar het is een grotere klus: het kanaal moet eruit en het gat in het dak moet goed worden dichtgemaakt. Gebeurt dat niet goed, dan lekt het jaren later precies op die plek. Voor de meeste schoorstenen die niet meer gebruikt worden, is een kap of plaat genoeg. Twijfel je, stuur me dan een foto van je schoorsteen, dan zeg ik eerlijk wat ik ervan denk.` },
      { v: `Mag ik zelf een plaat op mijn schoorsteen leggen?`, a: `Liever niet. Je moet daarvoor het dak op, en een schoorsteen staat vaak op het hoogste en gladste stuk. Een losse plaat kan bij een storm ook van het dak waaien. Laat hem liever vastzetten door iemand die op daken werkt.` },
      { v: `Komt er nog vocht binnen als de kap erop zit?`, a: `Er kan nog een tijd wat vocht uit de stenen komen, want die moeten eerst opdrogen. Dat duurt soms een paar weken. Wordt de plek daarna niet droger, of juist natter na regen, dan zit het lek ergens anders, bijvoorbeeld in het lood rond de schoorsteen. Stuur me dan een foto van de plek.` },
    ],
  },
  {
    slug: `dakgoot-hangt-door`,
    datum: `2026-11-02`,
    titel: `Dakgoot hangt door?`,
    h1: `Dakgoot hangt door of scheef: zo zie je het en dit is eraan te doen`,
    metaTitle: `Dakgoot hangt door of scheef: wat nu? | Spoed Dak Service`,
    metaDescription: `Blijft er water in het midden van je dakgoot staan, of loopt hij over op één plek? Dan hangt hij vaak door. Zo zie je het, hoe het komt en wat eraan te doen is.`,
    intro: `Een goot moet een klein beetje aflopen naar de regenpijp. Hangt hij ergens door, dan blijft het water daar staan in plaats van weg te lopen. Bij een flinke bui loopt de goot op die plek over, in de winter bevriest het water erin, en op den duur gaat hij daar lekken. Hieronder lees je hoe je het ziet, waar het door komt en wat eraan te doen is.`,
    secties: [
      { kop: `Zo zie je dat je goot doorhangt`, tekst: [
        `Kijk vanaf de overkant van de straat langs de goot. Zie je een knik of een bolling naar beneden, of hangt een stuk lager dan de rest, dan hangt hij door. Na een bui zie je het soms ook aan een plas die in het midden van de goot blijft staan, terwijl de rest al leeg is.`,
        `Andere tekenen: water dat bij een bui op één vaste plek over de voorkant van de goot loopt, ver van de regenpijp. Een groene of donkere streep op de gevel onder die plek. En in de winter ijspegels op steeds dezelfde plek.`,
      ] },
      { kop: `Waar het door komt`, tekst: [
        `Een goot hangt aan beugels. Is er een beugel verbogen, doorgeroest of losgeschoten, dan zakt de goot daar. Bij oudere huizen zitten de beugels soms in het hout van de gootlijst of het boeiboord, en is dat hout zacht geworden, dan houden de schroeven niet meer.`,
        `Gewicht doet de rest. Een goot vol nat blad en slib is zwaar, en in de winter komen daar ijs en sneeuw bij. Ook een ladder die tegen de goot is gezet, kan een beugel verbuigen. En kunststof goten zetten uit als het warm is en krimpen bij vorst. Na een paar jaar kan een stuk dan uit zijn beugel schuiven.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `Water dat in een goot blijft staan, is niet zo onschuldig als het lijkt. Een zinken goot wordt op die plek eerder dun, en een naad of hoek in de buurt gaat eerder lekken. Bevriest het water, dan zet het ijs uit en kan het een naad openduwen. En loopt de goot steeds op dezelfde plek over, dan wordt de gevel daar nat. Hoe je ziet of een goot al echt lek is, lees je in <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: `Wat je zelf kunt doen`, tekst: [
        `Maak tijdens of vlak na een bui een foto van de goot vanaf de straat, zodat je ziet waar het water blijft staan. Haal de goot leeg als je er veilig bij kunt, want een volle goot hangt nog verder door. Hoe je dat veilig doet, lees je in <a href="/kennisbank/dakgoot-zelf-schoonmaken/">dakgoot zelf schoonmaken</a>.`,
        `Trek niet aan een goot die los hangt en zet er geen ladder tegen. Hangt hij na een storm half los, ga er dan ook niet onder staan, want een zinken goot is zwaar.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst waarom de goot zakt: een losse of verbogen beugel, te weinig beugels of hout dat zacht is geworden. Daarna hang ik de goot weer op afschot naar de regenpijp, en waar nodig zet ik nieuwe beugels. Is de goot zelf geknikt of op meer plekken dun, dan vervang ik dat stuk. Is het hout van de gootlijst of het boeiboord rot, dan zeg ik dat eerlijk, want dat moet eerst hersteld worden voordat er een goot aan kan. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Hoe ik een goot bij jou in de buurt aanpak, lees je bij dakgoot repareren in <a href="/werkgebied/veghel/dakgoot-vervangen/">Veghel</a>, waar lange goten aan boerderijen nogal eens tussen de haken zakken, en in <a href="/werkgebied/uden/dakgoot-vervangen/">Uden</a>, waar aan veel huizen nog de eerste kunststof goot hangt. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoe lang de goot is, hoeveel beugels er nodig zijn en of er een stuk goot of hout vervangen moet worden. Een goot opnieuw ophangen is meestal minder werk dan een nieuwe goot. Je hoort vooraf de vaste prijs, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Hoeveel moet een dakgoot aflopen?`, a: `Een klein beetje, zodat het water vanzelf naar de regenpijp loopt. Met het blote oog zie je dat bijna niet. Blijft er na een bui ergens water staan, dan loopt hij daar niet goed af.` },
      { v: `Kan een goot die doorhangt gewoon weer omhoog?`, a: `Vaak wel. Zit de goot zelf nog goed, dan hang ik hem opnieuw op met nieuwe of extra beugels. Is hij geknikt, gescheurd of op meer plekken dun, dan is een nieuw stuk beter. Je hoort vooraf wat het kost.` },
      { v: `Is een goot die doorhangt spoed?`, a: `Meestal niet, het kan vaak een paar dagen wachten. Hangt hij na een storm half los, of komt er water binnen bovenin de muur, dan wel. Bel of app me dan met een foto.` },
    ],
  },
  {
    slug: `lekkage-muur-buren`,
    datum: `2026-11-02`,
    titel: `Lekkage langs de muur met de buren?`,
    h1: `Lekkage op zolder langs de muur met de buren: waar het zit en hoe je het samen oplost`,
    metaTitle: `Lekkage langs de muur met de buren | Spoed Dak Service`,
    metaDescription: `Nat op zolder langs de muur met de buren? In een rijtjeshuis zit het lek vaak precies op de grens: bij de overgang van de pannen, de nok of de goot. Zo zoek je het.`,
    intro: `In een rij huizen loopt het dak vaak gewoon door van het ene huis naar het andere. Precies op de grens, boven de muur tussen jou en de buren, zitten een paar plekken waar een dak graag gaat lekken. Je ziet het als een natte strook op zolder langs die muur, of als een vlek bovenin de muur van je slaapkamer. Hieronder lees je hoe je het herkent, waar het meestal zit en hoe je het met de buren regelt.`,
    secties: [
      { kop: `Zo herken je het`, tekst: [
        `Kijk na een flinke bui op zolder langs de muur met de buren. Zie je een donkere strook op de stenen, een natte plek op de vloer vlak langs die muur of een kring op het plafond van de kamer eronder, dan komt het water vaak van boven die muur. Wordt het alleen nat bij wind uit één richting, dan waait de regen ergens onder een pan of een strook door.`,
        `Is het ook nat na een paar droge dagen, dan komt het vaker van een leiding, bijvoorbeeld van de badkamer van de buren. Twijfel je, lees dan <a href="/kennisbank/vochtplek-plafond/">vochtplek in het plafond</a>.`,
      ] },
      { kop: `Waar het op de grens meestal zit`, tekst: [
        `Op de overgang tussen twee soorten pannen. Hebben de buren hun dak laten vernieuwen, dan liggen er op de grens twee soorten pannen naast elkaar. Die passen niet vanzelf op elkaar, en daarom hoort daar een overgang die het water tegenhoudt. Is die niet goed gemaakt of na een paar jaar losgekomen, dan loopt het water erlangs naar binnen.`,
        `Bij de nok. De nokvorsten lopen over de grens door. Ligt er bij de buren een nieuwe nok en bij jou nog een oude in specie, dan zit de zwakke plek vaak precies waar die twee op elkaar aansluiten. Meer daarover in <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `In de goot. Loopt jouw goot door in die van de buren, dan zit er op de grens een naad. Daar gaat een goot vaak als eerste lekken, en het water loopt dan langs de muur naar binnen. Hoe je dat ziet, lees je in <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
        `Bij een muur die boven het dak uitsteekt. Bij sommige oudere rijtjes steekt de muur tussen de huizen een stukje boven de pannen uit. Langs die muur ligt lood of zink dat het water op de pannen moet leiden. Laat dat los of is het gescheurd, dan loopt het water erachter naar binnen. Zie <a href="/kennisbank/lood-op-dak/">lood op je dak</a>. En staat er een schoorsteen op de muur tussen jullie in, lees dan <a href="/kennisbank/lekkage-gedeelde-schoorsteen/">lekkage bij een gedeelde schoorsteen</a>.`,
      ] },
      { kop: `Waarom het lek soms bij de buren zit`, tekst: [
        `Water zoekt zijn eigen weg. Het kan aan de kant van de buren onder de pannen komen, over de latten of langs de muur naar jouw kant lopen en pas bij jou te zien zijn. Andersom kan ook: het lek zit aan jouw kant, en de buren hebben de natte plek. Daarom kijk ik bij een lek op de grens naar het stuk dak aan allebei de kanten.`,
      ] },
      { kop: `Zo regel je het met de buren`, tekst: [
        `Praat er eerst even over met je buren. Vraag of zij ook iets zien op hun zolder, en of er onlangs iets aan hun dak is gedaan. Ga niet zelf op hun dak, en ook niet op dat van jezelf. Zit het lek aan hun kant, dan zeg ik dat eerlijk, zodat jullie het samen kunnen oplossen. Zit het precies op de grens, zoals in de overgang of de naad in de goot, dan is het vaak het handigst om het in één keer samen te laten doen.`,
        `Wie de schade binnen betaalt, hangt af van de oorzaak en van jullie verzekeringen. Daarover lees je meer in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Hoe dat er bij jou in de buurt uitziet, lees je bij dakreparatie in <a href="/werkgebied/veghel/dakreparatie/">Veghel</a>, waar in de rijtjes de buren hun dak soms al hebben laten vernieuwen, en bij dakgoot repareren in <a href="/werkgebied/boxtel/dakgoot-vervangen/">Boxtel</a>, waar in Selissen de goot van het ene huis gewoon doorloopt in die van het volgende. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst van buiten naar de grens: de pannen aan beide kanten, de overgang, de nok, de goot en het lood. Daarna kijk ik op zolder waar het water binnenkomt. Vaak gaat het dan om één overgang die opnieuw moet, een paar pannen die niet goed liggen of één naad in de goot. Ik zeg je eerlijk wat ik zie en aan wiens kant het zit. Zie ook <a href="/diensten/daklekkage/">daklekkage</a> en <a href="/diensten/dakreparatie/">dakreparatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Eén lek opsporen en dichten kost meestal ${lekPrijs}, inclusief materiaal. Gaat het alleen om een paar pannen op de grens die niet goed liggen, dan valt het vaak onder een kleine reparatie: ${kleinPrijs}. Je hoort vooraf de vaste prijs, en zit het aan allebei de kanten, dan hoort ieder vooraf wat zijn deel kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `De buren hebben net een nieuw dak, en nu lekt het bij mij op de grens. Hoe kan dat?`, a: `Dan zit het vaak in de overgang tussen hun nieuwe pannen en jouw oude. Die hoort bij het vernieuwen netjes gemaakt te worden. Is het werk pas gedaan, vraag je buren dan om hun dakdekker te laten kijken, want die hoort het in de regel zelf op te lossen. Komt die niet, of zit het aan jouw kant, stuur me dan een foto van de natte plek en van het dak vanaf de straat.` },
      { v: `Hoe zie ik vanaf de straat of de overgang op de grens goed is?`, a: `Kijk naar de plek waar de twee daken op elkaar aansluiten. Liggen de pannen daar mooi in één lijn, zonder kier of opstaande rand, dan is dat een goed teken. Zie je een open naad, een strook die omhoog staat of pannen die hoger of lager liggen dan de rest, maak er dan een foto van met de zoom van je telefoon en stuur hem via WhatsApp.` },
      { v: `Is het spoed als het langs de muur met de buren lekt?`, a: `Druppelt het binnen of wordt de muur snel natter, dan wel: bel of app me. Zie je alleen na een flinke bui een donkere strook op zolder, dan kan het vaak een paar dagen wachten. Zet tot die tijd iets neer dat het water opvangt, en wacht niet tot de volgende storm.` },
    ],
  },
  {
    slug: `vogels-onder-dakpannen`,
    datum: `2026-11-02`,
    titel: `Vogels onder je dakpannen?`,
    h1: `Vogels onder je dakpannen: erg of niet, en wat je eraan doet`,
    metaTitle: `Vogels onder je dakpannen: wat nu? | Spoed Dak Service`,
    metaDescription: `Gekrabbel boven je slaapkamer of mussen onder de onderste rij pannen? Zo zie je of het kwaad kan, wanneer je er iets aan mag doen en wat vogelwering doet.`,
    intro: `Mussen, spreeuwen en duiven zoeken in het voorjaar een droog plekje, en de ruimte onder de onderste rij dakpannen is daar ideaal voor. Een paar vogels is niet meteen erg. Maar laat je het jaren zitten, dan krijg je nesten, vuil in de goot en soms een lek. Hieronder lees je hoe je het merkt, wat het kwaad kan, wanneer je er iets aan mag doen en hoe ik het afsluit.`,
    secties: [
      { kop: `Zo merk je het`, tekst: [
        `Je hoort in het voorjaar gekrabbel en getjilp boven je slaapkamer of op zolder, vaak vroeg in de ochtend. Vanaf de straat zie je vogels in en uit vliegen onder de onderste rij pannen, net boven de goot. In de goot liggen takjes, strootjes of veertjes, en op zolder zie je soms nestmateriaal tussen de pannen en de latten.`,
        `Onder zonnepanelen zijn het meestal duiven. Daar zie je veel poep op het dak en in de goot, en takjes die onder de rand van de panelen uitsteken.`,
      ] },
      { kop: `Wat het kwaad kan`, tekst: [
        `Een nest duwt de onderste pannen een stukje omhoog. Liggen ze niet meer goed in de sluiting, dan waait de regen er bij harde wind onder, en na een tijd zie je een natte plek laag op zolder, vlak boven de goot. Nestmateriaal en poep komen in de goot terecht en zetten de uitloop naar de regenpijp dicht. En vogels pikken soms de folie onder de pannen kapot of nemen stukjes isolatie mee voor hun nest.`,
        `Hoe je ziet of er een pan scheef ligt, lees je in <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
      { kop: `Wanneer je er iets aan mag doen`, tekst: [
        `Vogels en hun nesten zijn beschermd. Een nest waarin vogels broeden of jongen zitten, mag je niet weghalen of dichtmaken. Het broedseizoen loopt ongeveer van maart tot in de zomer, en bij mussen soms nog langer. Hoor je in die tijd vogels onder je dak, wacht dan tot de jongen uitgevlogen zijn.`,
        `Van een paar soorten, zoals de huismus en de gierzwaluw, is de nestplek zelfs het hele jaar beschermd. Weet je niet welke vogels het zijn, of gaat het om mussen of gierzwaluwen, vraag dan eerst bij je gemeente wat er mag. Voor de meeste andere vogels zijn de herfst en de winter het goede moment: dan zijn de nesten leeg, en kan de rij onder de pannen dicht voordat de vogels in het voorjaar terugkomen.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Prop geen gaas, schuim of kit tussen de pannen, en ga er niet zelf met een ladder bij. Je duwt de pannen dan makkelijk verder uit de sluiting. En onder de pannen moet lucht kunnen stromen, anders blijft het daar vochtig. Een rij die je dichtpropt, laat vaak ook geen lucht meer door.`,
      ] },
      { kop: `Hoe ik het afsluit`, tekst: [
        `Buiten het broedseizoen, en als het voor die vogels mag, haal ik oude nesten onder de onderste rij weg en leg ik pannen die omhoog zijn geduwd weer goed. Daarna komt er kunststof vogelwering onder de onderste rij: een kam of strook die de opening dichtmaakt en wel lucht doorlaat. Vanaf de straat zie je er weinig van. Ik kijk naar de hele onderste rij, niet alleen naar de plek waar je de vogels ziet, anders schuiven ze een stukje op. Onder zonnepanelen sluit ik de rand rond de panelen af, zodat duiven er niet meer onder kunnen. Zie <a href="/diensten/vogelwering/">vogelwering</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoe lang de rij onder de pannen is, of er zonnepanelen liggen en of er nesten of pannen weg moeten. Je hoort vooraf de vaste prijs, voordat ik begin. Richtprijzen voor de meeste klussen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: vogelwering`, href: `/diensten/vogelwering/` },
    faq: [
      { v: `Mag ik een vogelnest onder mijn dakpannen weghalen?`, a: `Niet als er vogels in broeden of jongen in zitten, want vogels en hun nesten zijn beschermd. Van de huismus en de gierzwaluw is de nestplek zelfs het hele jaar beschermd. Weet je niet welke vogels het zijn, vraag het dan eerst na bij je gemeente. Ga er in elk geval niet zelf met een ladder bij.` },
      { v: `Kan een vogelnest een lekkage geven?`, a: `Dat kan. Een nest duwt de onderste pannen omhoog, en dan waait de regen er bij harde wind onder. Nestmateriaal in de goot zet ook de uitloop dicht, en dan loopt de goot over. Zie je laag op zolder, vlak boven de goot, een natte plek, stuur me dan een foto via WhatsApp.` },
      { v: `Komen de vogels terug als de vogelwering erop zit?`, a: `Onder de rij die is afgesloten in de regel niet meer. Ze zoeken dan een ander plekje. Daarom kijk ik naar de hele onderste rij, en niet alleen naar het stukje waar je ze ziet.` },
    ],
  },
  {
    slug: `erker-lekt`,
    datum: `2026-11-02`,
    titel: `Erker of luifel lekt?`,
    h1: `Erker of luifel lekt: water boven het raam of bij de voordeur`,
    metaTitle: `Erker lekt: water boven raam of deur | Spoed Dak Service`,
    metaDescription: `Natte plek boven het raam van je erker, of bij de voordeur onder een luifel? Vaak zit het in het lood tegen de gevel of in het dakje zelf. Zo vind je het.`,
    intro: `Veel huizen hebben aan de voorkant een erker, of boven de voordeur een luifel met een eigen klein dakje. Zo'n dakje vergeet je snel, tot er boven het raam of naast de deur een natte plek komt. Het water komt dan meestal niet door het raam zelf, maar van het dakje erboven of van de plek waar dat tegen de gevel zit. Hieronder lees je waar het meestal zit, hoe je het herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Leg een handdoek op de vensterbank of zet een emmer onder de druppel, en haal gordijnen en spullen weg. Maak een foto van de natte plek. Ga niet op het dakje staan: een erker of luifel is vaak licht gebouwd en niet gemaakt om op te lopen, en van een ladder ernaast val je zo. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit een erker of luifel aan je huis`, tekst: [
        `Het dakje ligt tegen de gevel aan. Waar het de muur raakt, zit een strook lood of zink die met de bovenrand in de muur is vastgezet en over het dakje heen valt. Die strook leidt het water dat langs de gevel naar beneden loopt over het dakje heen, in plaats van erachter. Op het dakje zelf ligt dakbedekking, zink of soms een paar pannen, en aan de voorkant zit een klein gootje of een rand waar het water vanaf loopt.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `De strook tegen de gevel. Na veel jaren komt de bovenrand los uit de muur, of er komt een scheur in een hoek. Dan loopt het water van de gevel achter de strook langs naar binnen, en dat zie je boven het raam of in een hoek van de erker.`,
        `Het dakje zelf. Een naad in de bedekking die loslaat, een gaatje in oud zink of een pan die is gaan schuiven. Op zo'n klein dakje loopt het water vaak eerst een stukje opzij voordat het binnenkomt, dus de natte plek zit niet altijd recht onder het lek.`,
        `Het gootje aan de voorkant. Zit dat vol blad, dan blijft het water op het dakje staan en loopt het terug naar de muur.`,
        `De zijkanten. Steekt de erker een stuk uit de gevel, dan sluit het dakje aan de zijkanten aan op de muur of op een houten rand. Daar zit vaak kit, en kit laat na een paar jaar los.`,
      ] },
      { kop: `Zo zie je het vanaf de straat`, tekst: [
        `Ga aan de overkant staan en zoom met je telefoon in op de bovenkant van het dakje. Let op drie dingen: of de bovenrand van de strook nog strak in de muur zit, of er blad of mos op het dakje of in het gootje ligt, en of de kit aan de zijkanten gescheurd is of loslaat. Een groene of donkere vlek op de gevel net boven het dakje betekent vaak dat het water daar al een tijd niet goed weg kan.`,
      ] },
      { kop: `Komt het wel van het dakje?`, tekst: [
        `Niet altijd. Zitten er vooral op koude ochtenden druppels op het glas en de vensterbank, ook na een droge nacht, dan is het vaak condens. Wordt het nat langs de naad tussen het kozijn en de muur, dan kan het water ook via het kozijn binnenkomen, en daarvoor heb je een timmerman nodig. Zit er een scheur in de muur boven het dakje, dan is dat werk voor een metselaar. Water van boven loopt wel vaak langs het kozijn naar beneden, dus ik kijk eerst bij het dakje en de strook erboven. Hoe ik een lek opspoor zonder onnodig sloopwerk, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit over de strook of over een naad op het dakje. Dat houdt vaak een winter, en daarna loopt het water achter de kit verder. Leun ook niet vanuit een raam boven naar buiten om erbij te kunnen, en zet geen ladder tegen het gootje.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Bij de oudere huizen rond het centrum van Boxtel zie ik veel erkers en luifels met een klein plat dakje, en daar kijk ik bij een lek eerst naar het lood tegen de gevel: zie <a href="/werkgebied/boxtel/">dakdekker in Boxtel</a>. Hetzelfde gebeurt waar een garage of berging met een eigen dak tegen de zijmuur van het huis zit, zoals bij veel huizen in Berlicum: lees <a href="/werkgebied/berlicum/daklekkage/">daklekkage in Berlicum</a>. Lekt het waar een serre tegen het huis zit, kijk dan bij <a href="/werkgebied/sint-michielsgestel/daklekkage/">daklekkage in Sint-Michielsgestel</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst van buiten naar de strook tegen de gevel, het dakje, het gootje en de zijkanten, en binnen naar waar het nat is. Zit de strook los, dan zet ik hem weer goed vast in de muur of vervang ik hem. Een gootje vol blad maak ik leeg. Is de bedekking van het dakje op één plek los, dan herstel ik die plek. Is hij helemaal versleten, dan zeg ik eerlijk dat vervangen slimmer is. Zie <a href="/diensten/daklekkage/">daklekkage</a> en <a href="/diensten/dakreparatie/">dakreparatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een strook vastzetten of een naad op het dakje dichtmaken valt meestal onder een gerichte lekreparatie: ${lekPrijs}, inclusief het zoeken en het materiaal. Moet de strook over de hele breedte nieuw, of het hele dakje opnieuw bedekt worden, dan is het meer werk. Ook dan hoor je vooraf de vaste prijs.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Waarom lekt mijn erker alleen bij regen met wind?`, a: `Bij gewone regen loopt het water netjes over de strook tegen de gevel. Waait de regen tegen de muur, dan loopt er veel meer water langs de gevel naar beneden, en staat de strook een stukje open, dan waait het erachter. Lekt het vooral bij wind uit één richting, dan zit het vaak aan die kant van de erker.` },
      { v: `Hoe vaak moet het gootje van mijn erker leeg?`, a: `Staat er een boom voor je huis, kijk dan elk najaar even vanaf de straat of er blad op het dakje ligt. Een klein gootje zit snel vol, en dan blijft het water tegen de muur staan. Kun je er niet veilig bij, dan neem ik het mee als ik je goten leegmaak.` },
      { v: `Is een lekkende erker spoed?`, a: `Druppelt het binnen of wordt de plek snel groter, dan wel: bel of app me met een foto. Is het een vochtige plek die alleen na harde regen terugkomt, dan heb je vaak een paar dagen. Laat het niet de hele winter zitten, want dan blijven het hout van het kozijn en de muur boven het raam nat.` },
    ],
  },
  {
    slug: `daktrim-lekt`,
    datum: `2026-11-02`,
    titel: `Lekt je platte dak langs de rand?`,
    h1: `Plat dak lekt langs de rand: daktrim los of lek`,
    metaTitle: `Plat dak lekt langs de rand: daktrim | Spoed Dak Service`,
    metaDescription: `Natte plek langs de buitenmuur van je aanbouw, of een rand die na de storm omhoog staat? Vaak zit het bij de daktrim. Zo zie je het en dit doe je eraan.`,
    intro: `Rond een plat dak zit aan de buitenkant een metalen randprofiel: de daktrim. Die houdt de dakbedekking aan de rand op zijn plek en zorgt dat het water netjes over de rand of naar de afvoer loopt. Gaat het daar mis, dan zie je binnen een natte strook langs de buitenmuur van je aanbouw, garage of berging, en buiten soms een streep op de gevel. Hieronder lees je hoe dat komt, hoe je het herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg bij de natte muur en maak een foto van de plek. Ga niet zelf het platte dak op als het nat is of waait, ook niet als het een laag dak is. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat een daktrim doet`, tekst: [
        `De daktrim is een strip, meestal van aluminium, die rondom op de rand van het platte dak zit. De dakbedekking loopt over de rand en zit onder of tegen de trim vast. Zo kan de wind niet onder de bedekking komen, en loopt het water niet achter de rand langs de muur. De trim bestaat uit losse stukken van een paar meter, met op de naden en in de hoeken een koppelstuk.`,
      ] },
      { kop: `Waar het langs de rand meestal lekt`, tekst: [
        `Op de naad tussen twee stukken trim. Aluminium zet uit als het warm is en krimpt als het koud is. Na een paar jaar staat een naad of een hoekstuk dan een stukje open, en daar loopt het water achter de trim.`,
        `Waar de dakbedekking op de trim aansluit. Krimpt de bedekking na veel jaren, of is hij aan de rand losgeraakt, dan trekt hij een stukje van de trim af. Het water komt dan onder de bedekking en loopt via de rand naar binnen.`,
        `Na een storm. Bij harde wind pakt de wind de rand als eerste. Zit de trim niet goed vast, dan gaat hij omhoog en klapt de bedekking eronder een stukje open. Daarna loopt de regen er zo onder.`,
        `Waar de afvoer door de rand gaat. Daar zit een aansluiting die na jaren kan gaan lekken, vooral als er vaak water blijft staan. Zie ook <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Zo zie je het`, tekst: [
        `Binnen zie je een natte strook of een vochtrand op het plafond langs de buitenmuur van de aanbouw, of een vochtige plek bovenin die muur. Buiten zie je soms een donkere of groene streep op de gevel, net onder de rand. Kijk ook vanuit een raam boven naar de rand van het dak: staat de trim ergens omhoog, zit er een kier op een hoek of ligt er een stuk trim scheef, maak er dan een foto van.`,
        `Zit de natte plek niet aan de buitenrand, maar langs de muur van het huis, waar het platte dak tegen de gevel aansluit? Dan is het meestal de aansluiting op de muur. Lees dan <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit op de naad van de trim of tussen de trim en de bedekking. Dat houdt soms een paar maanden, maar door het uitzetten en krimpen scheurt het weer open, en dan loopt het water achter de kit verder. Trek ook niet aan een trim die na een storm omhoog staat: dan scheurt de bedekking eronder verder.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst langs de hele rand: de naden en hoeken van de trim, hoe de dakbedekking erop aansluit en of de trim nog stevig vastzit. Zit een stuk trim los, dan zet ik het weer vast. Staat een naad of hoek open, dan maak ik die dicht. Is de dakbedekking aan de rand losgeraakt, dan maak ik die aansluiting weer dicht. Is de bedekking over een groter stuk versleten, dan zeg ik eerlijk dat vervangen slimmer is. Lees ook <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak: repareren of vervangen</a> en <a href="/diensten/platte-daken/">platte daken</a>.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Platte daken met een daktrim zie ik in de regio Den Bosch vooral op aanbouwen, garages, bergingen en schuren. In <a href="/werkgebied/rosmalen/">Rosmalen</a> liggen in De Groote Wielen veel platte daken, en daar zit een lek eerder bij de rand of een afvoer dan bij oude pannen. Hoe ik na een storm een rand die omhoog staat eerst afdek en daarna herstel, lees je bij stormschade in <a href="/werkgebied/waalwijk/stormschade/">Waalwijk</a>, waar achter veel oudere huizen in Besoyen en Baardwijk een schuur of werkplaats met een plat dak staat. Andere plaatsen vind je bij <a href="/werkgebied/">mijn werkgebied</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een stuk trim vastzetten of een open naad dichtmaken valt meestal onder een gerichte lekreparatie: ${lekPrijs}, inclusief het zoeken en het materiaal. Moet de trim over de hele lengte nieuw, of een groter stuk van de bedekking langs de rand opnieuw, dan is het meer werk. Ook dan hoor je vooraf de vaste prijs.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken (EPDM)`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Wat is een daktrim?`, a: `Een metalen strip, meestal van aluminium, die rondom op de rand van een plat dak zit. De dakbedekking zit daaronder of ertegen vast. De trim houdt de rand dicht tegen wind en water, en zorgt dat het water niet achter de rand langs de muur loopt.` },
      { v: `Kan ik een losse daktrim zelf vastzetten?`, a: `Liever niet. Je moet er dan op of naast het platte dak voor staan, en met een paar schroeven in een trim die al los zit, trek je de bedekking eronder vaak verder open. Zit de trim los omdat het hout van de dakrand eronder zacht is geworden, dan houden nieuwe schroeven het ook niet. Maak een foto vanaf de grond of uit een raam en stuur die via WhatsApp, dan zeg ik wat ik zie.` },
      { v: `Lekt het langs de rand of langs de muur van het huis?`, a: `Kijk waar de natte plek zit. Zit hij aan de buitenkant van de aanbouw, onder de rand van het dak, dan zit het vaak bij de trim. Zit hij tegen de muur van het huis, waar het platte dak op de gevel aansluit, dan zit het meestal in de strook lood of zink daar. Stuur me een foto van de natte plek binnen en, als het lukt, uit een raam boven een foto van het dak.` },
      { v: `Is een lek langs de daktrim spoed?`, a: `Druppelt het binnen of wordt de plek snel groter, dan wel: bel of app me met een foto. Zie je alleen na een flinke bui een vochtrand, dan kan het vaak een paar dagen wachten. Wacht niet tot de volgende storm, want een rand die al los zit, waait dan verder open.` },
    ],
  },
  {
    slug: `hoe-lang-gaat-een-dak-mee`,
    datum: `2026-11-02`,
    titel: `Hoe lang gaat een dak mee?`,
    h1: `Hoe lang gaat een pannendak mee, en wanneer is vervangen slimmer dan repareren?`,
    metaTitle: `Hoe lang gaat een pannendak mee? | Spoed Dak Service`,
    metaDescription: `Hoe lang gaan dakpannen, de nok en het lood mee? Zo zie je dat je dak op raakt, wanneer repareren nog loont en wanneer vervangen slimmer is.`,
    intro: `Een pannendak gaat lang mee, maar niet alles op dat dak even lang. De pannen kunnen nog prima zijn terwijl de nok of het lood eromheen al op is. Daarom is de vraag meestal niet hoe oud je dak is, maar welk deel aandacht nodig heeft. Hieronder lees je wat het eerst slijt, hoe je dat ziet en wanneer vervangen slimmer is dan blijven repareren.`,
    secties: [
      { kop: `Niet alles slijt even snel`, tekst: [
        `Op een pannendak liggen meer dingen dan alleen pannen: de nokvorsten bovenop, lood rond de schoorsteen en het dakraam, en de latten waar de pannen op liggen. Die gaan niet allemaal even lang mee. Bij veel daken van veertig, vijftig jaar oud zijn de pannen nog goed, maar is de specie onder de nok bros geworden of het lood gescheurd.`,
      ] },
      { kop: `Gebakken pannen en betonpannen`, tekst: [
        `Gebakken pannen van klei gaan in de regel heel lang mee, vaak langer dan de rest van het dak. Betonpannen slijten anders: de bovenlaag wordt na veel jaren ruw, ze houden meer water en mos vast en worden op den duur bros. Hoe lang een pan het houdt, hangt ook af van de plek. Aan de noordkant en onder bomen blijft een dak langer nat, en daar slijten pannen sneller. Wat vorst met een oude pan doet, lees je in <a href="/kennisbank/vorstschade-dakpannen/">vorstschade aan dakpannen</a>.`,
      ] },
      { kop: `Wat meestal het eerst aandacht vraagt`, tekst: [
        `De nok. Liggen de nokvorsten in specie, dan wordt die na jaren bros en brokkelt hij af. Je vindt dan brokjes in de goot, en bij een storm gaat er een vorst schuiven. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Het lood. Lood rond de schoorsteen, het dakraam en langs de muren gaat vaak tientallen jaren mee, maar wordt op den duur hard, scheurt in de vouwen of laat los van de muur. Zie <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
        `De pannen langs de rand en onderaan. Daar pakt de wind het dak het hardst en loopt het meeste water overheen. Een losse of kapotte pan daar zie je vaak al vanaf de straat, zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
      { kop: `Zo zie je dat je dak op raakt`, tekst: [
        `Een paar dingen samen zeggen meer dan één losse pan. Let op pannen die na een bui veel langer donker en nat blijven dan de rest, schilfers of stukjes pan in de goot, mos dat steeds terugkomt, brokjes specie van de nok, en een golf in het dak als je er vanaf de straat langs kijkt.`,
        `Kijk ook op zolder met een zaklamp. Zie je daglicht tussen de pannen, natte of donkere latten, of plekken waar het hout zacht is, dan vraagt je dak aandacht.`,
      ] },
      { kop: `Repareren of vervangen?`, tekst: [
        `Is er één pan gebroken, ligt er een vorst los of is een stuk lood gescheurd, dan is repareren meestal de slimste keus. Daarmee kan je dak vaak nog jaren mee.`,
        `Moet er elk jaar wel ergens iets gebeuren, en zijn er op veel plekken pannen gescheurd of verweerd? Dan is het vaak slimmer om dat dakvlak in één keer aan te pakken dan elk jaar een stukje te laten repareren. Dat hoeft niet het hele dak te zijn: vaak is maar één kant echt op. Zie <a href="/diensten/dakrenovatie/">dakrenovatie</a>.`,
      ] },
      { kop: `Laat het eerst nakijken`, tekst: [
        `Twijfel je, laat je dak dan eerst nakijken voordat je over vervangen beslist. Met de <a href="/dak-apk/">Dak-APK</a> (${apkPrijs}) loop ik het hele dak na en krijg je foto's van elke plek die aandacht vraagt. Dan weet je wat nu moet, wat nog een paar jaar kan wachten en of vervangen echt nodig is. Hoe zo'n inspectie gaat, lees je in <a href="/kennisbank/dakinspectie/">dakinspectie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een losse pan of nokvorst valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet er een heel dakvlak of het hele dak opnieuw, dan kom ik eerst kijken en hoor je vooraf één vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakrenovatie`, href: `/diensten/dakrenovatie/` },
    faq: [
      { v: `Hoe lang gaat een pannendak mee?`, a: `Dat verschilt per dak. Gebakken pannen gaan in de regel heel lang mee, betonpannen slijten eerder. De nok en het lood vragen meestal eerder aandacht dan de pannen zelf. Kijk daarom niet alleen naar de leeftijd van je dak, maar naar hoe het erbij ligt.` },
      { v: `Mijn dak is veertig jaar oud. Moet het eraf?`, a: `Niet vanwege de leeftijd alleen. Bij veel daken van die leeftijd zijn de pannen nog goed en gaat het om de nok, het lood of een paar pannen. Pas als er op veel plekken iets mis is, is vervangen slimmer. Stuur me een paar foto's van je dak vanaf de straat, dan zeg ik eerlijk wat ik zie.` },
      { v: `Gaat mos ten koste van de levensduur van mijn dak?`, a: `Het kan wel. Mos houdt water tegen de pannen vast, en als dat bevriest, kunnen oude pannen schilferen of scheuren. Een beetje mos is niet meteen erg, maar een dikke laag die steeds terugkomt, laat je beter weghalen. Meer lees je in het artikel over mos op je dak.` },
    ],
  },
  {
    slug: `regenpijp-in-de-muur-lekt`,
    datum: `2026-11-03`,
    titel: `Regenpijp in de muur lekt?`,
    h1: `Regenpijp binnen in de muur lekt: natte plek in huis, maar buiten niets te zien`,
    metaTitle: `Regenpijp in de muur lekt: wat nu? | Spoed Dak Service`,
    metaDescription: `Loopt je regenpijp binnen door de muur of een kast, en is het daar nat? Vaak zit het bovenin bij de uitloop van de goot. Zo zie je waar het zit en wat je doet.`,
    intro: `Bij een deel van de huizen loopt de regenpijp niet buiten langs de gevel, maar binnen: in de muur, in een koker of door een kast op de overloop. Lekt er dan iets, dan zie je buiten niets, maar binnen wel. Hieronder lees je hoe je herkent waar het water vandaan komt, wat je zelf kunt doen en wat ik eraan doe.`,
    secties: [
      { kop: `Zo weet je of je regenpijp binnen zit`, tekst: [
        `Kijk naar de gevel onder je goot. Loopt daar geen regenpijp naar beneden, dan gaat het water ergens anders heen. Vaak zit de pijp dan binnen: achter een betimmering, in een koker in de hoek van een kamer, of in een kast op de overloop of in de berging. Bij een flinke bui hoor je hem soms ruisen of klokken.`,
        `Ik kom het vooral tegen bij rijtjeshuizen uit de jaren '60 en '70, en bij nieuwere huizen met een strakke gevel zonder pijpen.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Bovenin, bij de uitloop. Dat is het stuk waar de goot overgaat in de pijp. Zit de uitloop vol blad of mos, dan blijft het water bij een bui in de goot staan en loopt het langs de aansluiting de muur in. Ook kan de aansluiting na veel jaren los zijn gaan zitten, of is de kit eromheen uitgedroogd.`,
        `Lager in de pijp, bij een verbinding of een bocht. Zit de pijp verderop dicht, dan staat hij bij een bui vol en komt het water bij een verbinding naar buiten. Dat zie je dan halverwege de muur of in de kast, niet bovenin.`,
        `Soms is het geen lek, maar condens. In de winter stroomt er koud regenwater door de pijp, en in een warm huis slaat daar vocht op neer. De pijp of de koker is dan over de hele lengte vochtig, vooral tijdens en vlak na een koude bui, en er is geen duidelijke plek waar het druppelt.`,
      ] },
      { kop: `Zo kijk je waar het zit`, tekst: [
        `Kijk waar de natte plek begint. Zit hij bovenin de muur of op het plafond, vlak onder de goot, dan zit het meestal bij de uitloop. Zit hij halverwege de muur of onderin de kast, dan zit het eerder in de pijp zelf.`,
        `Ga tijdens een flinke bui naar buiten en kijk naar de goot boven die plek. Loopt de goot daar over, of komt er water over de rand bij de uitloop, dan zit de uitloop vaak dicht. Maak er een foto of een filmpje van, en ook van de natte plek binnen. Ga niet zelf de ladder op.`,
      ] },
      { kop: `Wat je nu doet`, tekst: [
        `Zet een bak of handdoeken onder de plek en haal spullen uit de kast. Zit de natte plek bij een stopcontact, een lamp of de meterkast, zet dan de stroom van die groep uit en kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet.`,
        `Breek een betimmering of koker niet zelf open voordat duidelijk is waar het water vandaan komt. Vaak is dat niet nodig.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik begin bovenin, bij de goot. Ik maak de goot en de uitloop leeg, en kijk of de uitloop nog goed op de pijp aansluit en of de goot daar niet te laag hangt. Is de aansluiting los of lek, dan maak ik die opnieuw dicht. Vaak giet ik daarna een emmer water in de goot bij de uitloop en kijk ik binnen of het droog blijft.`,
        `Blijft het nat en zit het lek lager in de pijp, in de muur of onder de vloer, dan zeg ik dat eerlijk. Dat is werk voor een loodgieter, en dan weet je in elk geval dat het niet aan de goot of het dak ligt. Zie ook <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Zit alleen de uitloop vol, dan is leegmaken genoeg. Dat is gewoon <a href="/diensten/goten-reinigen/">goten reinigen</a>: ${GOTEN_PRIJS} voor één goot. Moet de aansluiting van de uitloop opnieuw, of hangt de goot verkeerd, dan hoor je vooraf de vaste prijs, voordat ik begin. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Mijn regenpijp in de kast is nat, maar er druppelt niets. Lekt hij?`, a: `Niet per se. Is de pijp over de hele lengte vochtig, vooral tijdens of vlak na een koude bui, dan is het vaak condens: koud regenwater in de pijp en warme lucht in huis. Zit er op één plek een druppel of een natte kring, en wordt die groter bij regen, dan lekt er iets. Maak een foto en stuur die via WhatsApp, dan zeg ik eerlijk wat ik denk.` },
      { v: `Wie moet ik bellen: een dakdekker of een loodgieter?`, a: `Zit de natte plek bovenin, vlak onder de goot, begin dan bij mij: daar zit het meestal bij de uitloop of de goot. Zit hij halverwege de muur, onderin een kast of in de kruipruimte, dan zit het eerder in de pijp zelf, en dat is werk voor een loodgieter. Twijfel je, stuur dan een foto van de natte plek en van de goot erboven.` },
      { v: `Helpt een rooster op de uitloop?`, a: `Een bolrooster op de uitloop houdt grof blad uit de pijp, en bij een regenpijp binnen is dat fijn, want een verstopping in de muur krijg je er lastig uit. Maar het rooster zelf raakt onder bomen ook dicht, en dan loopt de goot op die plek over. Laat de goot daarom in de herfst leegmaken en het rooster meteen schoonmaken.` },
      { v: `Is een lekkende regenpijp binnen spoed?`, a: `Loopt het water langs de muur, zit de natte plek bij een stopcontact of lamp, of druppelt het door het plafond, dan wel: bel of app me met een foto. Is de plek alleen wat vochtig en droogt hij weer op na de bui, dan kan het meestal een paar dagen wachten.` },
    ],
  },
  {
    slug: `glazen-dakpan-lekt`,
    datum: `2026-11-03`,
    titel: `Glazen dakpan lekt?`,
    h1: `Glazen dakpan lekt of druppelt: kapot, verschoven of condens?`,
    metaTitle: `Glazen dakpan lekt: kapot of condens? | Spoed Dak Service`,
    metaDescription: `Druppelt het onder de glazen pan op je zolder? Vaak is het condens, soms een scheur of een pan die niet goed past. Zo zie je het verschil en wat eraan te doen is.`,
    intro: `Op veel zolders en in schuren ligt een glazen dakpan voor wat daglicht. Druppelt het precies daar, dan denk je meteen aan een lek. Soms klopt dat: het glas is gescheurd of de pan ligt niet goed. Maar heel vaak is het condens. Hieronder lees je hoe je het verschil ziet en wat je eraan doet.`,
    secties: [
      { kop: `Condens of lek?`, tekst: [
        `Condens zie je op koude ochtenden, ook na een droge nacht. Het glas is aan de binnenkant beslagen en de druppels vallen recht onder de pan, op een kleine plek. Bij een lek wordt het juist nat na regen, vaak bij wind uit één richting, en zie je een natte streep op het hout of de folie onder of naast de pan.`,
        `Glas is kouder dan een gewone pan, dus warme, vochtige lucht uit huis slaat daar als eerste op neer. Hoe je condens op zolder verder herkent, lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Waar een glazen pan lekt`, tekst: [
        `Een scheur in het glas. Glas kan barsten door hagel, een vallende tak, iemand die erop heeft gestaan of een harde vorstnacht. Een haarscheur zie je van binnen vaak pas als je er met een zaklamp schuin langs schijnt.`,
        `Een pan die niet past. Een glazen pan moet hetzelfde model zijn als de pannen eromheen. Is er ooit een glazen pan van een ander model in gelegd, dan sluit hij niet goed aan en waait de regen er bij harde wind onder.`,
        `Een pan die is gaan schuiven. Een glazen pan ligt net als de andere pannen op de latten. Waait hij bij een storm een stukje omhoog, dan ligt hij daarna net uit de sluiting.`,
      ] },
      { kop: `Wat je zelf kunt doen`, tekst: [
        `Bij condens: zet de zolder af en toe even open, hang geen was te drogen op zolder en houd het luik dicht als je doucht of kookt. Leg een handdoek of bak onder de pan, zodat de druppels het hout niet nat maken.`,
        `Bij een lek: vang het water op en maak een foto van de pan van binnen en, als het lukt, van buiten vanaf de straat. Duw de pan niet van binnenuit terug, want glas breekt makkelijk en je duwt hem zo verder uit de sluiting. Ga niet zelf het dak op.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst of het glas heel is en of de pan goed in de sluiting ligt. Ligt hij scheef, dan leg ik hem terug. Is het glas gebarsten of past de pan niet bij de pannen eromheen, dan vervang ik hem door een glazen pan van hetzelfde model, als die nog te krijgen is. Lukt dat niet, dan zeg ik dat eerlijk en kijken we samen wat kan, bijvoorbeeld een gewone pan op die plek als je het licht niet echt nodig hebt. Zie ook <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is: een pan terugleggen is iets anders dan een nieuwe glazen pan zoeken en leggen. Je hoort vooraf de vaste prijs, voordat ik begin. Richtprijzen voor kleine reparaties staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Mijn glazen dakpan is van binnen beslagen. Is dat erg?`, a: `Meestal niet. Een beslagen pan op een koude ochtend is condens: vocht uit huis dat op het koude glas neerslaat. Blijft het hout eronder lang nat of zie je zwarte puntjes, zet de zolder dan vaker even open. Wordt het alleen nat na regen, dan is het eerder een lek. Stuur me dan een foto.` },
      { v: `Kan ik een glazen dakpan zelf vervangen?`, a: `Van binnenuit lukt dat bijna nooit goed. De pannen erboven moeten een stukje omhoog, en glas breekt makkelijk. Op een dak staan is ook niet zonder risico. Laat het liever doen. Stuur me een foto van de pan en van de pannen eromheen, dan zie ik welk model het is.` },
      { v: `Kan er een gewone pan in plaats van de glazen pan?`, a: `Ja, als je het licht op zolder niet nodig hebt. Een gewone pan van hetzelfde model past er gewoon in, en dan heb je ook geen last meer van condens op het glas. Wil je het licht houden, dan zoek ik een glazen pan die past.` },
      { v: `Is een lekkende glazen dakpan spoed?`, a: `Loopt er bij regen water naar binnen, of is het glas gebroken en zit er een gat in je dak, dan wel: bel of app me met een foto. Leg tot die tijd een zeil of bak onder de pan. Is het alleen condens, dan kan het rustig wachten.` },
    ],
  },
  {
    slug: `dakleer-repareren`,
    datum: `2026-11-03`,
    titel: `Dakleer kapot?`,
    h1: `Dakleer repareren op je schuur, garage of aanbouw: scheur, blaas of losse rand`,
    metaTitle: `Dakleer repareren op schuur of garage | Spoed Dak Service`,
    metaDescription: `Lekt het dakleer op je schuur, garage of aanbouw? Zo zie je of het een scheur, blaas of losse rand is, en wanneer een plak genoeg is of een nieuwe laag beter.`,
    intro: `Een tuinhuis, schuur, garage of oude aanbouw heeft vaak een plat dak met dakleer erop. Dat dak vergeet je snel, tot er na een bui water op je fiets of je gereedschap druppelt. Dakleer gaat meestal eerst op één plek kapot, en dan is het vaak goed te maken. Hieronder lees je hoe je ziet wat er mis is, wat je zelf doet tot het gemaakt is en wanneer een reparatie niet meer genoeg is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel en haal spullen weg die niet nat mogen worden. Druppelt het in de garage of berging bij een stopcontact, een lamp of de wasmachine, zet dan de stroom van die groep uit. Maak een foto van de natte plek van binnen. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo ligt dakleer op een schuur of garage`, tekst: [
        `Onder het dakleer ligt meestal een houten dak: planken of platen op een paar balkjes. Het dakleer ligt daar in banen overheen, en aan de rand is het over de kant van het dak gevouwen en vastgezet, met nagels, een houten lat of een metalen randprofiel. Op een schuur of tuinhuis ligt vaak maar één laag, op de aanbouw van een huis meestal meer. Daarom is het dakleer op een schuur eerder op dan op je huis.`,
      ] },
      { kop: `Waar het meestal kapot gaat`, tekst: [
        `Een blaas. Dat is een bult in het dakleer waar lucht of vocht onder zit. In de zon zet dat uit en wordt de bult groter. Zolang hij dicht is, lekt hij niet. Maar wordt hij hard en bros, of stapt er iemand op, dan scheurt hij open en loopt het water er zo onder.`,
        `Een rechte scheur. Op een dak van houten planken zie je soms een lange, rechte scheur in het dakleer. Die zit dan vaak precies boven de naad tussen twee planken. Het hout krimpt als het droog is en zet uit als het nat is, en het dakleer erboven trekt op die plek telkens een beetje mee, tot het scheurt.`,
        `De rand. Waar het dakleer over de kant van het dak is gevouwen, pakt de wind het als eerste. Zit het daar niet meer goed vast, dan klappert het bij harde wind en scheurt het verder in. Heeft je dak een metalen randprofiel, lees dan ook <a href="/kennisbank/daktrim-lekt/">plat dak lekt langs de rand</a>.`,
        `Rond een pijp of de afvoer. Steekt er een ventilatiepijp door het dak, of loopt het water via een afvoer in de rand weg, dan zit daar een aansluiting die na jaren kan loslaten. Blijft er rond de afvoer water staan, lees dan <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Is het hout eronder nog goed?`, tekst: [
        `Kijk van binnen met een zaklamp tegen de onderkant van het dak. Zie je donkere plekken, schimmel of planken die doorbuigen, dan is het hout op die plek al een tijd nat. Druk er voorzichtig met je hand tegen. Voelt het zacht of verend, dan heeft een plak bovenop weinig zin, want die moet ergens op vastzitten. Dan zeg ik eerlijk wat er eerst moet gebeuren. Is het hout droog en stevig, dan is de reparatie meestal klein.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Prik een blaas niet zelf door, want dan maak je er een gat van. Ga niet op het dak van een schuur of tuinhuis staan om te kijken: het hout is vaak dun en nat dakleer is glad. Wil je tot de reparatie een zeil over de plek leggen, doe dat dan alleen als je er veilig vanaf een lage ladder bij kunt, en leg er stenen of zandzakken op. Spijker het zeil niet vast, want elke spijker is een nieuw gat in het dakleer.`,
      ] },
      { kop: `Een plak of een nieuwe laag?`, tekst: [
        `Zit het lek op één plek en is de rest van het dakleer nog soepel, dan maak ik alleen die plek dicht, met een stuk dat ruim over het gave deel heen valt. Dan kan het dak vaak nog een flinke tijd mee.`,
        `Is het dakleer hard en breekt een los randje als je het buigt, zitten er op meer plekken scheuren of blazen, of is het dak al eens op een paar plekken geplakt, dan houdt een nieuwe plak het vaak niet lang. Dan is een nieuwe laag over het hele dak de betere keus. Wanneer dat loont en wat het verschil is met EPDM, lees je in <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak: repareren of vervangen</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst van binnen waar het nat is, en van buiten naar het hele dak: de blazen, de scheuren, de rand en de aansluitingen. Een blaas of scheur maak ik open waar dat nodig is, laat ik zo nodig drogen en maak ik dicht met een nieuw stuk dakleer dat ruim over de plek heen valt. Een losse rand zet ik weer vast. Zie ik dat het dak op is, dan hoor je dat voordat ik begin. Zie ook <a href="/diensten/platte-daken/">platte daken</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een scheur, blaas of losse rand op één plek valt meestal onder een gerichte lekreparatie in een plat dak: ${lekPrijs}, inclusief materiaal. Moet er een nieuwe laag over het hele dak, dan kom ik eerst kijken en hoor je vooraf de vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken (EPDM)`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Is een blaas in mijn dakleer erg?`, a: `Niet meteen. Een kleine blaas die dicht is, lekt niet. Wordt hij groter, voelt hij hard aan of zit er een barstje in, dan scheurt hij vroeg of laat open. Prik hem niet zelf door. Maak een foto en stuur die via WhatsApp, dan zie ik of hij nu dicht moet of nog even kan wachten.` },
      { v: `Kan ik op het dak van mijn schuur gaan staan om te kijken?`, a: `Liever niet. Het dak van een schuur of tuinhuis is vaak niet gemaakt om op te lopen, en nat dakleer is glad. Op een blaas of op zacht hout trap je zo een gat. Kijk vanaf een ladder aan de zijkant of vanuit een raam boven, en maak daar een foto.` },
      { v: `Wat is het verschil tussen dakleer en EPDM?`, a: `Dakleer is een zwarte dakbedekking op basis van bitumen, die in rollen wordt gelegd. EPDM is een soort rubber dat meestal in één stuk over het dak ligt. Allebei kunnen ze goed werken. Bij een reparatie kijk ik eerst wat er nu op je dak ligt, en bij een nieuwe laag hoor je eerlijk wat bij jouw dak past.` },
      { v: `Is een lekkend schuurdak spoed?`, a: `Meestal niet, maar laat het niet de hele winter zitten. Druppelt het op spullen die je kunt verplaatsen, dan kan het vaak een paar dagen wachten. Lekt het bij een stopcontact of een lamp, of in een aanbouw die aan je huis vastzit, bel of app me dan met een foto. Water dat lang op het hout blijft staan, maakt de reparatie later groter.` },
      { v: `Het hout onder het dakleer is rot. Vervang je dat ook?`, a: `Ja, als het nodig is. Voelt het hout zacht of verend aan, of zie je van binnen planken die doorbuigen of schimmelen, dan haal ik op die plek het dakleer weg, vervang ik het rotte hout en leg ik er nieuw dakleer overheen. Is alleen de bovenkant wat nat geworden en is het hout nog stevig, dan is dat meestal niet nodig. Hoeveel hout er vervangen moet worden, zie ik pas goed als ik er ben. Je hoort de prijs voordat ik begin.` },
    ],
  },
  {
    slug: `lekkage-bij-schotel-of-antenne`,
    datum: `2026-11-03`,
    titel: `Lekt het bij je schotel of antenne?`,
    h1: `Lekkage bij een schotel of antenne op je dak: waar het zit en wat je eraan doet`,
    metaTitle: `Lekkage door schotel of antenne op dak | Spoed Dak Service`,
    metaDescription: `Nat op zolder bij een schotel of antenne? Vaak zit het bij de beugel onder de pannen, de kabel of het lood rond de schoorsteen. Zo vind je het.`,
    intro: `Op veel daken staat een schotel of een antenne, soms al tientallen jaren. Om hem op te hangen moest er iemand het dak op, er kwam een beugel aan het dak of de schoorsteen en er moest een kabel naar binnen. Op elk van die plekken kan het later gaan lekken, vaak pas jaren nadat hij is opgehangen. Hieronder lees je waar het meestal zit, hoe je het herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en maak een foto van de natte plek. Ga niet zelf het dak op, ook niet om de schotel even recht te zetten. Staat de mast na een storm scheef, blijf dan uit de buurt van de kant waar hij naartoe hangt. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit een schotel of antenne aan je dak`, tekst: [
        `Meestal op een van deze manieren. Met een dakbeugel: een metalen arm die onder een pan door aan de panlat of het hout eronder is vastgeschroefd, met de mast erop. Met een band om de schoorsteen, waar de mast tegenaan staat. Of met een beugel aan de muur, net onder de dakrand. De kabel gaat dan onder een pan door naar zolder, door een gat in de muur of door een speciale pan met een opening.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Bij de beugel onder de pan. Waar de arm onder de pan door gaat, ligt die pan net niet plat, of er is een stukje uit gezaagd. Bij harde wind waait de regen daar onder de pan.`,
        `Langs de kabel. Gaat de kabel onder een pan door, dan ligt die pan op de kabel en sluit hij niet meer. Loopt de kabel ook nog schuin naar binnen, dan loopt het water er gewoon langs mee naar zolder. Een kabel hoort vlak voordat hij naar binnen gaat een bocht naar beneden te maken, zodat het water eraf druppelt.`,
        `Een pan die bij het ophangen is gebroken. Wie over een dak loopt, trapt makkelijk een pan kapot. Een haarscheur zie je van beneden niet, en het lekt soms pas bij de eerste flinke bui. Zie ook <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
        `Bij de schoorsteen. Een band om de schoorsteen kan het lood eronder indrukken of opentrekken. En bij storm gaat een mast heen en weer en trekt hij aan de schoorsteen. Na een tijd zie je dan scheurtjes in het lood of in de voegen. Lees ook <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a> en <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Zo zie je het`, tekst: [
        `Kijk op zolder met een zaklamp bij de plek waar de kabel binnenkomt. Zie je daar een natte streep langs de kabel, een donkere plek op het hout of een druppel aan de kabel zelf, dan komt het water vaak via die weg binnen. Kijk ook vanaf de straat, met de zoom van je telefoon: ligt de pan naast de mast hoger dan de rest, komt de kabel onder een pan uit, of zit de band om de schoorsteen scheef of is hij roestig?`,
      ] },
      { kop: `Een antenne die je niet meer gebruikt`, tekst: [
        `Op veel daken staat nog een oude antenne die al jaren niets meer doet. Bij elke storm gaat hij heen en weer, en dat schuurt aan de pannen en het lood. Een mast die omwaait, komt vaak op de nok of de pannen terecht. Gebruik je hem niet meer, dan kan hij er beter af, het liefst voor de stormen van de winter. Daarna moet het dak op die plek wel weer goed dicht: een pan die past waar de beugel zat, en het lood rond de schoorsteen hersteld waar de band heeft gezeten.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit rond de kabel of de beugel op de pan. Dat lijkt snel dicht, maar het water loopt er na een tijd onderdoor, en een pan die vastgekit zit, krijg je later lastig los. Trek ook niet van binnenuit aan de kabel, want dan trek je de pan erboven verder scheef.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk naar de beugel, de kabel, de pannen eromheen en het lood bij de schoorsteen. Ligt een pan hol over de beugel of de kabel, dan leg ik hem goed, en waar nodig komt er een pan met een opening voor de kabel in de plaats, zodat de kabel netjes naar binnen gaat en de pan weer dicht ligt. Een gebroken pan vervang ik door een pan die past. Is het lood bij de schoorsteen beschadigd, dan herstel ik dat. De schotel zelf opnieuw richten of verplaatsen laat je doen door een installateur. Zie <a href="/diensten/dakreparatie/">dakreparatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een pan naast de beugel goed leggen of vervangen valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet ik eerst zoeken waar het water binnenkomt, of zit het in het lood rond de schoorsteen, dan valt het meestal onder een gerichte lekreparatie: ${lekPrijs}, inclusief materiaal. Is er een pan met een opening voor de kabel nodig, dan hoor je vooraf de vaste prijs. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: antenne of schotel van het dak halen`, href: `/diensten/antenne-verwijderen/` },
    faq: [
      { v: `Mijn schotel is pas opgehangen en nu lekt het. Wie lost dat op?`, a: `Is de schotel pas geplaatst, neem dan eerst contact op met wie hem heeft opgehangen, want lekkage door het plaatsen hoort die in de regel zelf op te lossen. Komt die niet, of hangt de schotel er al langer, dan kijk ik waar het water binnenkomt. Stuur me een foto van de natte plek op zolder en van de schotel vanaf de straat.` },
      { v: `Kan de kabel van mijn schotel gewoon onder een pan door?`, a: `Dat gebeurt veel, maar de pan ligt dan op de kabel en sluit niet goed. Netter is een pan met een opening voor de kabel, of een kabel die via de muur naar binnen gaat. Druppelt het nu bij de kabel, stuur me dan een foto van die plek van binnen en van buiten.` },
      { v: `Is lekkage bij een schotel of antenne spoed?`, a: `Druppelt het binnen bij een stopcontact, een lamp of je tv-kastje, of staat de mast na een storm scheef, dan wel: bel of app me met een foto. Is het een vochtige plek op zolder die na een bui weer opdroogt, dan kan het vaak een paar dagen wachten. Wacht niet tot de volgende storm.` },
      { v: `Kun je een oude antenne of schotel van mijn dak halen?`, a: `Ja. Ik haal de mast, de beugel en de kabel weg en maak het dak op die plek weer dicht. Waar de beugel onder een pan zat, leg ik een pan die past. Zat de mast met een band om de schoorsteen, dan kijk ik of het lood daar nog goed is en herstel ik het waar dat nodig is. Gebruik je de antenne niet meer, laat hem dan het liefst voor de winterstormen weghalen. Stuur een foto van je dak vanaf de straat, dan hoor je vooraf wat het kost.` },
    ],
  },
  {
    slug: `windveer-los-of-rot`,
    datum: `2026-11-04`,
    titel: `Windveer los of rot?`,
    h1: `Windveer los of rot: de plank langs de zijkant van je dak`,
    metaTitle: `Windveer los of rot na storm? | Spoed Dak Service`,
    metaDescription: `Hangt de windveer langs de zijkant van je dak los na een storm, of is hij rot? Zo zie je het, waarom de pannen erboven gaan schuiven en wat eraan te doen is.`,
    intro: `De windveer is de plank die schuin langs de zijkant van je dak loopt, bij de kopgevel. Hij dekt de uiteinden van de panlatten af en houdt de wind onder de rand van het dak weg. Je kijkt er zelden naar, tot hij na een storm los hangt of er een stuk uit valt. Hieronder lees je hoe je ziet wat er mis is, wat je zelf doet tot het gemaakt is en hoe ik het aanpak.`,
    secties: [
      { kop: `Hangt hij nu los? Eerst dit`, tekst: [
        `Blijf uit de buurt van de gevel onder de losse plank, en zet daar als het kan iets neer zodat niemand eronder loopt. Een windveer is lang en zwaar, en bij de volgende windstoot kan hij verder losscheuren. Trek er niet aan en zet geen ladder tegen de gevel. Maak vanaf de straat of uit de tuin een foto en stuur die via WhatsApp. Ligt het dak open of wordt het binnen nat, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet.`,
      ] },
      { kop: `Zo zie je dat er iets mis is`, tekst: [
        `Kijk vanaf de straat langs de schuine rand van het dak. Een windveer hoort strak en recht te liggen. Zie je een kier tussen de plank en de muur, een plank die naar buiten wijkt of een stuk dat scheef hangt, dan zit hij los.`,
        `Rot zie je aan verf die afbladdert, donkere of zachte plekken en hout dat uit elkaar valt. Dat begint vaak onderaan, vlak boven de goot, en bij de naad waar twee planken op elkaar aansluiten. Daar blijft het water het langst staan.`,
        `Kijk ook naar de pannen erboven. Liggen de pannen langs de rand van het dak scheef of half over de kant, dan houdt de windveer ze vaak niet meer goed op hun plek.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `Een losse windveer laat de wind onder de rand van het dak komen. Bij de volgende storm trekt die aan de pannen langs de kopgevel, en juist die waaien er het eerst af. Een rotte windveer houdt de schroeven niet meer vast, en dan kan er een stuk naar beneden komen. Loopt er water achter de plank, dan worden ook de uiteinden van de panlatten nat, en dan wordt de reparatie later groter. Welke pannen bij storm het eerst loskomen, lees je in <a href="/kennisbank/dakpannen-vastzetten-tegen-storm/">dakpannen vastzetten tegen storm</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Schroef of spijker een losse windveer niet zelf vast vanaf een ladder. Je werkt dan hoog, aan de rand van het dak, met een plank die kan meegeven. Een likje kit of tape op een rotte plek houdt ook niet, want het hout eronder blijft nat en rot verder.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst hoe de windveer vastzit en hoe het hout eronder eruitziet, ook de uiteinden van de panlatten. Zit een goede windveer alleen los, dan zet ik hem weer stevig vast. Is hij rot of gebroken, dan vervang ik hem. Daarna leg ik de pannen langs de rand weer goed op hun plek, en een pan die bij het losslaan is gebroken, vervang ik. Zie ik dat er meer aan de hand is, dan hoor je dat voordat ik begin. Zie ook <a href="/diensten/dakreparatie/">dakreparatie</a> en <a href="/diensten/stormschade/">stormschade</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoe lang de windveer is, hoe hoog hij zit en of ik hem alleen vastzet of vervang. Stuur een foto vanaf de straat, dan hoor je vooraf wat het kost. Waait een goede windveer los bij een storm, dan valt dat vaak onder je opstalverzekering. Is hij losgekomen omdat het hout rot was, dan meestal niet. Dat verschilt per polis: lees <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: windveer vervangen`, href: `/diensten/windveer-vervangen/` },
    faq: [
      { v: `Wat is het verschil tussen een windveer en een boeideel?`, a: `Allebei zijn het planken langs de rand van je dak. De windveer loopt schuin langs de zijkant, bij de kopgevel. Een boeideel zit meestal recht onder de dakrand, aan de kant van de goot. Ze gaan om dezelfde redenen kapot: los na een storm of rot door water.` },
      { v: `Is een losse windveer spoed?`, a: `Hangt hij half los boven de stoep, de oprit of je tuin, of slaat hij bij wind tegen de muur, dan wel: bel of app me met een foto. Zit hij een beetje los maar ligt hij nog strak tegen de muur, dan kan het meestal een paar dagen wachten. Wacht niet tot de volgende storm.` },
      { v: `Moet de windveer aan beide kanten van mijn huis vervangen worden?`, a: `Niet altijd. Vaak is één kant slechter, meestal de kant waar de meeste wind en regen op staat. Ik kijk naar allebei en zeg eerlijk of de andere kant nog goed is. Jij beslist wat ik meeneem.` },
    ],
  },
  {
    slug: `zinken-dakgoot-lekt`,
    datum: `2026-11-04`,
    titel: `Zinken dakgoot lekt?`,
    h1: `Zinken dakgoot lekt: solderen, van binnen coaten of vervangen?`,
    metaTitle: `Zinken dakgoot lekt: solderen of coaten? | Spoed Dak Service`,
    metaDescription: `Lekt je zinken dakgoot bij een naad of een dunne plek? Lees wanneer solderen genoeg is, wanneer de goot van binnen coaten zin heeft en wanneer vervangen beter is.`,
    intro: `Zinken goten gaan lang mee, maar na jaren gaan ze op een paar vaste plekken lekken: bij de naden, bij de hoeken en waar het zink dun is geworden. Vaak hoeft de goot dan niet meteen te worden vervangen. Hieronder lees je wat de drie mogelijkheden zijn en hoe ik kies welke past.`,
    secties: [
      { kop: `Druppelt het nu?`, tekst: [
        `Valt de druppel buiten boven je stoep of terras, zet er dan een bak onder, zodat er bij vorst geen plek ijs ligt. Maak tijdens een bui een foto of filmpje van de plek waar het druppelt. Komt het water binnen, bovenin de muur of langs een kozijn, dan is het spoed: kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen doet.`,
      ] },
      { kop: `Waar een zinken goot lekt`, tekst: [
        `Bij de naden. Een zinken goot bestaat uit stukken die aan elkaar zijn gesoldeerd. Zink zet uit als het warm is en krimpt als het koud is, en na jaren laat zo'n naad een keer los. Je ziet dan een druppel die steeds op dezelfde plek valt.`,
        `Bij de hoeken en de uitloop naar de regenpijp. Daar zitten ook soldeernaden, en daar komt het meeste water samen.`,
        `Waar het zink dun is. Van binnen slijt zink langzaam, vooral waar blad en vuil lang blijven liggen. Eerst wordt het dof en ruw, later komen er kleine gaatjes. Aan de onderkant van de goot zie je dan vaak een witte uitslag of een natte plek.`,
      ] },
      { kop: `Solderen: als het bij een naad of hoek zit`, tekst: [
        `Zit het lek in een naad of een hoek en is het zink eromheen nog dik genoeg, dan maak ik de naad schoon en soldeer ik hem opnieuw. Zo zit het zink weer aan elkaar vast zoals het bedoeld is. Solderen kan alleen op een droge goot, dus bij regen of vorst wacht ik op een droge dag.`,
      ] },
      { kop: `Van binnen coaten: als de goot nog goed hangt, maar op meer plekken dun is`, tekst: [
        `Is het zink op meer plekken dun of zitten er kleine gaatjes, maar hangt de goot nog goed en zitten de beugels vast, dan kan ik de goot van binnen coaten. Ik maak de goot schoon en droog en breng aan de binnenkant een laag aan die de goot weer waterdicht maakt. Zo kan een goot die verder nog goed is vaak nog een tijd mee, zonder dat er meteen een nieuwe goot hoeft te komen.`,
      ] },
      { kop: `Vervangen: als de goot op is`, tekst: [
        `Hangt de goot door, is het zink op veel plekken dun of lek, of zit er al plak op plak, dan houdt een reparatie het niet lang meer. Dan is een nieuwe goot de betere keus. Hoe je dat ziet, lees je in <a href="/kennisbank/hoe-lang-gaat-een-dakgoot-mee/">hoe lang gaat een dakgoot mee</a>. Ligt je goot op of achter de gevel, kijk dan ook bij <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit of bitumen in een zinken goot. Het hecht slecht op nat of vuil zink, en als de naad later toch gesoldeerd moet worden, moet al dat spul er eerst weer uit. Zet ook geen ladder tegen een goot die al zwak is, want zink deukt snel.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat het wordt: één naad solderen is iets anders dan een hele goot van binnen coaten of vervangen. Stuur een foto van de plek waar het lekt en van de goot vanaf de straat, dan hoor je vooraf wat het kost. Je weet de prijs voordat ik begin. Zie ook <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Moet de hele goot vervangen worden als er één gat in zit?`, a: `Meestal niet. Eén gaatje of één lekke naad is vaak goed te solderen. Pas als het zink op veel plekken dun is, of de goot ook doorhangt, zeg ik dat vervangen slimmer is.` },
      { v: `Kan een kunststof goot ook gesoldeerd worden?`, a: `Nee, solderen kan alleen bij zink. Bij een kunststof goot zit een lek meestal in een verbinding of in een rubber dat is uitgedroogd. Dan vervang ik dat stuk of die verbinding.` },
      { v: `Kun je een zinken bakgoot ook solderen?`, a: `Ja. Omdat een bakgoot op of in de gevel ligt, komt een lek daar vaak binnen terecht, dus wacht er niet te lang mee. Stuur een foto van de goot en van de natte plek binnen, dan kijk ik mee.` },
    ],
  },
  {
    slug: `dak-keuren-bij-huis-kopen`,
    datum: `2026-11-04`,
    titel: `Huis kopen? Laat het dak keuren`,
    h1: `Dak keuren als je een huis koopt: waar ik op let`,
    metaTitle: `Dak laten keuren bij aankoop huis | Spoed Dak Service`,
    metaDescription: `Een huis kopen? Een bouwkundige keuring bekijkt het dak vaak alleen van een afstand. Zo laat je het dak zelf nakijken, met toestemming van de verkoper.`,
    intro: `Als je een huis koopt, let je op de keuken, de badkamer en de fundering. Het dak zie je vanaf de straat nauwelijks, terwijl een lek of een versleten nok later flink kan tegenvallen. Met de Dak-APK kijk ik het dak na van een huis dat je wilt kopen, als de verkoper daar toestemming voor geeft. Hieronder lees je wanneer dat zinvol is, wat ik nakijk en hoe je het regelt.`,
    secties: [
      { kop: `Bouwkundige keuring of een keuring van het dak?`, tekst: [
        `Een bouwkundige keuring bekijkt het hele huis, en het dak vaak alleen vanaf de grond, vanuit een dakraam of van een afstand. Voor veel huizen is dat genoeg. Is het dak oud, zie je bij de bezichtiging iets wat je niet vertrouwt, of zegt de keurder zelf dat het dak beter van dichtbij bekeken kan worden, dan is een aparte keuring van het dak zinvol.`,
      ] },
      { kop: `Waar ik op let`, tekst: [
        `De pannen: gebroken, verschoven of poreus, en of er mos tussen groeit. De nok: zit de specie nog goed, of liggen er al stukjes in de goot. Het lood rond de schoorsteen, het dakraam en langs muren. De goten en de uitloop naar de regenpijp. En op zolder, als dat kan: natte plekken, oude vlekken op het hout en of er folie onder de pannen ligt.`,
        `Heeft het huis een aanbouw, garage of berging met een plat dak, dan kijk ik ook naar de dakbedekking, de randen en de afvoer. Wat ik bij een keuring verder nakijk, lees je in <a href="/kennisbank/dakinspectie/">dakinspectie</a>.`,
      ] },
      { kop: `Zo regel je het`, tekst: [
        `Vraag via de makelaar of de verkoper toestemming om het dak te laten keuren, en spreek een moment af waarop ik erbij kan, ook op zolder. Heb je in je koopovereenkomst een voorbehoud voor een bouwkundige keuring, kijk dan tot wanneer dat loopt en plan de keuring ruim daarvoor. Stuur me het adres en de datum via WhatsApp, dan hoor je wanneer ik kan.`,
      ] },
      { kop: `Wat je krijgt`, tekst: [
        `Je krijgt een rapport met foto's van de plekken die ik heb nagekeken, met wat er nu of binnenkort moet gebeuren. Zo weet je beter waar je aan toe bent voordat de koop rond is.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `De Dak-APK kost ${apkPrijs}. Wat er precies in zit, lees je op de <a href="/dak-apk/">Dak-APK-pagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: de Dak-APK`, href: `/dak-apk/` },
    faq: [
      { v: `Mag ik het dak laten keuren van een huis dat nog niet van mij is?`, a: `Ja, als de verkoper toestemming geeft. Ik kom alleen met die toestemming, en het liefst is de verkoper of de makelaar erbij om me op zolder te laten.` },
      { v: `Moet ik zelf bij de keuring zijn?`, a: `Dat hoeft niet, maar het is wel handig. Dan kan ik je ter plekke laten zien wat ik zie, en kun je meteen je vragen stellen.` },
      { v: `Kun je ook zeggen wat een reparatie zou kosten?`, a: `Zie ik iets wat gemaakt moet worden, dan kun je me vragen wat het kost als ik het voor je doe. Dan hoor je dat vooraf, zodat je weet waar je aan toe bent.` },
    ],
  },
  {
    slug: `dakpannen-klapperen-bij-wind`,
    datum: `2026-11-04`,
    titel: `Klappert er iets op je dak?`,
    h1: `Dakpannen klapperen bij harde wind: wat het is en wat je doet`,
    metaTitle: `Dakpannen klapperen bij harde wind | Spoed Dak Service`,
    metaDescription: `Hoor je bij harde wind getik of geklapper op je dak? Vaak is het een losse pan, een nokvorst, een strook lood of een oude antenne. Zo vind je wat het is.`,
    intro: `Het waait hard, en ergens boven je hoofd tikt of klappert iets. Dat is niet alleen vervelend als je wilt slapen. Vaak is het een teken dat er iets los zit, en dat kan bij de volgende storm van je dak waaien. Hieronder lees je wat het meestal is, hoe je het vindt en wat eraan te doen is.`,
    secties: [
      { kop: `Hoor je het nu? Eerst dit`, tekst: [
        `Ga niet het dak op en zet geen ladder tegen de gevel zolang het hard waait. Blijf uit de buurt van de kant van het huis waar het geluid vandaan komt, want een pan die los klappert, kan naar beneden komen. Let op waar je het hoort: aan de voorkant of de achterkant, bovenin bij de nok of onderin bij de goot. Ligt er al een pan op de grond of wordt het binnen nat, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet.`,
      ] },
      { kop: `Wat er meestal klappert`, tekst: [
        `Een losse dakpan. Een pan die niet meer goed in de sluiting ligt, wordt bij elke windstoot een stukje opgetild en valt dan terug. Dat geeft een tik of een klap. Het gebeurt het vaakst bij de pannen langs de randen van het dak en vlak onder de nok, waar de wind de meeste grip heeft.`,
        `Een losse nokvorst. Is de specie onder de nok oud, dan kan een vorst los gaan liggen en bij wind heen en weer gaan. Vaak liggen er dan ook stukjes specie in de goot. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `Een strook lood die los staat. Rond de schoorsteen en langs een muur ligt lood of loodvervanger. Staat een strook los van de steen, dan komt de wind eronder en klappert hij. Zie <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
        `Een oude antenne of schotel. De mast gaat bij wind heen en weer en tikt tegen de pannen of de schoorsteen, of de kabel slaat tegen het dak. Zie <a href="/kennisbank/lekkage-bij-schotel-of-antenne/">lekkage bij een schotel of antenne</a>.`,
        `Een losse windveer. De plank langs de zijkant van het dak kan bij wind tegen de muur slaan. Zie <a href="/kennisbank/windveer-los-of-rot/">windveer los of rot</a>.`,
        `De kap op een pijp. De kap op de ontluchting of op de afvoer van de cv-ketel kan los zitten en bij wind rammelen.`,
      ] },
      { kop: `Zo vind je waar het zit`, tekst: [
        `Ga bij wind op zolder staan en luister waar het geluid het hardst is. Kijk met een zaklamp of je ergens daglicht tussen de pannen ziet, of een pan die beweegt. Kijk de volgende dag vanaf de straat en uit de tuin, met de zoom van je telefoon: ligt er een pan hoger of scheef, staat de nok niet recht, staat er een strook lood los of hangt de antenne scheef? Kijk ook op de grond en in de goot of er stukjes pan of specie liggen. Maak er een foto van, dan zie ik wat ik mee moet nemen.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `Een pan die bij elke windstoot opwipt, slijt aan de rand en breekt na een tijd. En waar een pan los ligt, komt de wind onder de pannen eromheen, zodat er bij de volgende storm vaak meer losgaan. Waar een pan of strook open ligt, kan regen naar binnen waaien, ook als het nu nog droog blijft. Lekt het alleen bij harde wind, lees dan <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Leg geen stenen of zandzakken op je dak en plak niets vast met tape of kit. Op een schuin dak glijdt dat eraf, en een pan die vastgekit zit, krijg je later lastig los. Klim niet bij wind of regen het dak op, ook niet om even te kijken.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik zoek eerst wat er los zit. Een losse pan leg ik weer goed in de sluiting en zet ik waar nodig vast, een gebroken pan vervang ik. Een losse nokvorst zet ik weer vast met dakmortel, en een strook lood die los staat, zet ik weer goed tegen de steen. Een oude antenne die je niet meer gebruikt, haal ik eraf, en daarna maak ik het dak op die plek weer dicht. Welke pannen bij storm het eerst loskomen en hoe je ze vastzet, lees je in <a href="/kennisbank/dakpannen-vastzetten-tegen-storm/">dakpannen vastzetten tegen storm</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een losse pan of nokvorst vastzetten valt meestal onder een kleine reparatie: ${kleinPrijs}. Gaat het om meer pannen, de hele nok of nieuw lood, dan hoor je vooraf de vaste prijs. Stuur een foto van je dak vanaf de straat, dan zie ik vaak al wat er los zit.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Is geklapper op mijn dak spoed?`, a: `Meestal niet meteen, zolang het binnen droog blijft en er niets naar beneden komt. Ligt er een pan of een stuk pan op de grond, staat de antenne scheef of wordt het binnen nat, dan wel: bel of app me met een foto. Wacht niet tot de volgende storm, want een pan die nu klappert, ligt er dan vaak af.` },
      { v: `Ik hoor vooral 's avonds getik op het dak, ook als het niet waait. Wat is dat?`, a: `Dat is vaak geen losse pan. Als het 's avonds afkoelt, krimpen de goot en het hout van het dak een klein beetje, en dat geeft getik of gekraak. Ook druppels van een boom of vogels op het dak kun je horen. Hoor je het alleen bij wind, dan zit er vaker echt iets los.` },
      { v: `Moet ik thuis zijn als je een losse pan komt vastzetten?`, a: `Niet altijd. Kan ik er van buiten goed bij en hebben we de prijs vooraf afgesproken, dan kan ik een losse pan of nokvorst ook vastzetten als je niet thuis bent. Stuur me vooraf een foto van je dak vanaf de straat en zeg waar ik mijn ladder kan zetten.` },
    ],
  },
  {
    slug: `dakkapel-lekt`,
    datum: `2026-11-04`,
    titel: `Dakkapel lekt?`,
    h1: `Dakkapel lekt: zo vind je waar het water binnenkomt`,
    metaTitle: `Dakkapel lekt: oorzaak en reparatie | Spoed Dak Service`,
    metaDescription: `Nat onder of naast je dakkapel? Vaak zit het in het lood langs de zijkant, de strook onder het raam, een kitnaad of het platte dakje erop. Zo vind je het.`,
    intro: `Een dakkapel is een klein huisje op je dak, met een eigen dakje, twee zijkanten en een raam. Overal waar de dakkapel op de pannen aansluit, kan water naar binnen komen. Vaak lekt het niet door de dakkapel zelf, maar bij de aansluiting op het dak eromheen. Hieronder lees je waar het meestal zit, hoe je dat herkent en wat eraan te doen is. Ik repareer lekkage aan een dakkapel die er al staat. Wil je er een bij op je dak, dan ben je bij een ander bedrijf aan het goede adres.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of handdoek onder de druppel, haal spullen weg en maak een foto van de natte plek. Ga niet zelf het dak op en klim niet uit het raam van de dakkapel om te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar een dakkapel meestal lekt`, tekst: [
        `Langs de zijkanten. Waar de zijkant van de dakkapel op de pannen staat, ligt een strook lood of loodvervanger die het water over de pannen leidt. Staat die strook los, is hij gescheurd of ligt er een pan scheef onder, dan loopt het water achter de strook langs naar binnen. Je ziet het dan vaak als een natte plek naast de dakkapel, in de hoek van het plafond of op de muur eronder.`,
        `Onder het raam. Onder de voorkant van de dakkapel ligt een strook die over de pannen eronder valt. Is die losgekomen of gescheurd, dan loopt het water bij een flinke bui onder de strook door. Dat zie je als een natte plek onder het raam of op het plafond van de kamer eronder.`,
        `Het dakje erop. Op de meeste dakkapellen ligt een klein plat dak met een randje langs de voorkant. Daar lekt het bij een losse naad, bij de rand of als het afvoertje naar de goot vol blad zit. Dan wordt het vaak nat bovenin, vlak onder het plafond van de dakkapel. Meer over zo'n rand lees je in <a href="/kennisbank/daktrim-lekt/">plat dak lekt langs de rand</a>.`,
        `Bovenaan, waar het dakje van de dakkapel onder de pannen erboven doorloopt. Blijft daar blad of mos liggen, of ligt een pan erboven scheef, dan kan het water daar onder de pannen terechtkomen.`,
        `Kitnaden. Rond het kozijn en op de hoeken zit vaak kit. Die droogt in de zon uit en laat los, en dan komt het water via de naad binnen.`,
      ] },
      { kop: `Raam of dak?`, tekst: [
        `Zitten er alleen druppels op het glas en op de onderkant van het kozijn, vooral op koude ochtenden, dan is het vaak condens en geen lek. Lekt het bij het raam zelf, bijvoorbeeld tussen het glas en het kozijn, dan is dat werk voor een glaszetter of een kozijnenbedrijf. Komt het water van boven of van opzij, dan zit het meestal in de aansluiting op het dak, en daar kijk ik naar. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Zo vind je het`, tekst: [
        `Kijk na een bui waar het precies nat is: naast de dakkapel, eronder of bovenin. Kijk daarna vanaf de straat of uit de tuin, met de zoom van je telefoon, of de stroken langs de zijkanten nog strak op de pannen liggen en of er een pan scheef ligt. Maak van allebei een foto, dan zie ik vaak al waar ik moet beginnen.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen nieuwe kit over oude kit of over een kier in het lood. Kit hecht slecht op een nat of vuil oppervlak, en vaak zit het lek ergens anders dan waar je kit. Ga ook niet op het dakje van de dakkapel staan: dat is vaak niet gemaakt om op te lopen, en bij nat weer is het glad.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik begin buiten en kijk naar de stroken langs de zijkanten en onder het raam, de pannen eromheen, de kitnaden en het dakje. Een strook die los zit, zet ik weer goed vast, en gescheurd lood vervang ik. Ik werk meestal met loodvervanger, en met echt lood als je dat wilt. Een pan die scheef ligt of gebroken is, leg ik goed of vervang ik. Lekt het dakje zelf, dan kijk ik of een gerichte reparatie genoeg is of dat de dakbedekking op is, en dat hoor je vooraf. Zie <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a> en <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een pan naast de dakkapel goed leggen of vervangen valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet ik eerst zoeken waar het water binnenkomt, dan is het meestal een gerichte lekreparatie: ${lekPrijs}, inclusief materiaal. Moet er nieuw lood of loodvervanger langs een hele zijkant, dan hoor je vooraf de vaste prijs. Stuur een foto van de dakkapel vanaf de straat en van de natte plek binnen.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mijn dakkapel is pas geplaatst en lekt nu al. Wie lost dat op?`, a: `Neem eerst contact op met het bedrijf dat de dakkapel heeft geplaatst. Lekkage die door het plaatsen komt, hoort dat bedrijf in de regel zelf op te lossen. Komt het niet, of staat de dakkapel er al jaren, dan kijk ik waar het water binnenkomt. Stuur me een foto van de natte plek en van de dakkapel vanaf de straat.` },
      { v: `Is lekkage bij een dakkapel verzekerd?`, a: `Dat hangt af van je polis en van de oorzaak. Komt het door een storm, dan wordt de schade binnen vaak vergoed. Komt het door slijtage, zoals oud lood of uitgedroogde kit, dan meestal niet. Maak foto's van de schade voordat je iets opruimt en bel je verzekeraar. Ik maak foto's van wat ik aantref en van de reparatie, die kun je meesturen.` },
      { v: `Is een lekkende dakkapel spoed?`, a: `Druppelt het binnen bij een stopcontact, een lamp of op je vloer, dan wel: bel of app me met een foto. Is het een vochtige plek die na een bui weer opdroogt, dan kan het vaak een paar dagen wachten. Wacht niet tot de volgende storm, want dan wordt het meestal erger.` },
      { v: `Kun je er ook een extra dakkapel op zetten?`, a: `Nee. Ik repareer lekkage aan een dakkapel die er al staat: de aansluiting op de pannen, het lood en het dakje. Wil je er een bij, dan ga je naar een bedrijf dat daarin gespecialiseerd is.` },
    ],
  },
  {
    slug: `dakfolie-kapot`,
    datum: `2026-11-04`,
    titel: `Folie onder je pannen kapot?`,
    h1: `Dakfolie kapot of vergaan: is dat erg en wat doe je eraan?`,
    metaTitle: `Dakfolie kapot of vergaan: is dat erg? | Spoed Dak Service`,
    metaDescription: `Hangt de folie onder je dakpannen in flarden, of druppelt het ervan af? Lees wat die folie doet, wanneer een scheur erg is en wanneer het kan wachten.`,
    intro: `Bij veel huizen zie je op zolder tussen de balken geen houten platen, maar een folie met de panlatten en de pannen erachter. Soms hangt die folie in flarden, zit er een scheur in of druppelt er water van af. Dat schrikt, maar het betekent niet altijd dat je dak lekt. Hieronder lees je wat de folie doet, wanneer een kapotte folie erg is en wat eraan te doen is.`,
    secties: [
      { kop: `Wat die folie doet`, tekst: [
        `De pannen houden het meeste water tegen. Maar bij harde wind, bij stuifsneeuw of onder een pan die net niet goed ligt, komt er wel eens wat water of sneeuw onder de pannen. De folie vangt dat op en laat het naar beneden lopen, de goot in. Hij is dus een tweede laag, achter de pannen. Bij oudere huizen ligt er vaak geen folie, of een oude folie die bros is geworden.`,
      ] },
      { kop: `Zo zie je dat de folie op is`, tekst: [
        `Op zolder: de folie hangt in flarden, scheurt als je ertegenaan komt, is bros of verkleurd, of er zitten gaten in waardoor je de panlatten of de pannen ziet.`,
        `Onderaan, bij de goot: komt de folie niet meer tot in de goot, dan kan het water dat eroverheen loopt achter de goot langs de muur lopen. Zie <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
      ] },
      { kop: `Druppelt het van de folie?`, tekst: [
        `Zitten de druppels op één plek en alleen na regen of harde wind, dan komt er op die plek water onder de pannen, en zit het lek in de pannen erboven. Zitten de druppels verspreid over de hele folie, vooral na een koude nacht, dan is het vaak condens van binnen. Hoe je dat verschil ziet, lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>. Ligt er na een sneeuwbui sneeuw op de folie, lees dan <a href="/kennisbank/dak-lekt-bij-sneeuw-of-vorst/">dak lekt bij sneeuw of vorst</a>.`,
      ] },
      { kop: `Is een kapotte folie erg?`, tekst: [
        `Liggen de pannen goed en blijft het droog op zolder, dan is een oude of gescheurde folie meestal geen reden om meteen iets te doen. De pannen doen het meeste werk. Het wordt wel een probleem als er water van de folie af naar binnen druppelt, als het hout eronder nat wordt of als er bij harde wind of sneeuw steeds wat binnenkomt. Dan is het slim om eerst te laten kijken welke pan of welk stuk dak het water binnenlaat.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Plak van binnen geen nieuw plastic of tape tegen de oude folie. Dan sluit je vocht op tussen twee lagen, en dat kan juist natte plekken en schimmel op het hout geven. Prik ook geen gaatjes om het water te laten weglopen, want dan loopt het in je isolatie of op je plafond.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst waar het water vandaan komt: van een pan, de nok, het lood of van binnen. Vaak is het lek in de pannen te verhelpen en hoeft de folie niet meteen te worden vervangen. Komt de folie onderaan niet meer in de goot, dan zorg ik dat het water weer in de goot terechtkomt. Is de folie over het hele dak vergaan, dan kan hij alleen worden vervangen als de pannen en de panlatten eraf gaan. Dat doe je dus meestal bij een dakrenovatie, en daarbij leg ik nieuwe folie en nieuwe panlatten als je dat wilt. Zie <a href="/diensten/dakrenovatie/">dakrenovatie</a> en <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Moet ik eerst zoeken waar het water binnenkomt en dat lek dichtmaken, dan is het meestal een gerichte lekreparatie: ${lekPrijs}, inclusief materiaal. Moeten de pannen eraf voor nieuwe folie en panlatten, dan is dat groter werk. Stuur een foto van je dak vanaf de straat en van de folie op zolder, dan hoor je wat het ongeveer kost. Je weet de prijs voordat ik begin.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mijn huis heeft helemaal geen folie onder de pannen. Is dat een probleem?`, a: `Niet vanzelf. Veel oudere huizen zijn zo gebouwd en blijven jarenlang droog, zolang de pannen, de nok en het lood goed zijn. Wel komt er bij harde wind of stuifsneeuw makkelijker wat binnen. Laat je het dak ooit vernieuwen, dan is dat het moment om er folie onder te laten leggen.` },
      { v: `Kan de folie vervangen worden zonder de pannen eraf te halen?`, a: `Over het hele dak niet. De folie ligt onder de panlatten en de pannen, en daar kun je van binnen niet goed bij. Voor nieuwe folie gaan de pannen en de panlatten eraf. Daarom gebeurt dat meestal bij een renovatie, en niet als losse klus.` },
      { v: `Is een kapotte folie spoed?`, a: `Meestal niet. Blijft het droog op zolder, dan kan het wachten. Druppelt er water van de folie op je plafond, op je isolatie of bij een stopcontact, bel of app me dan met een foto van de plek en van je dak vanaf de straat.` },
    ],
  },
  {
    slug: `daklek-tijdelijk-dichten`,
    datum: `2026-11-04`,
    titel: `Daklek tijdelijk dichten?`,
    h1: `Daklek tijdelijk dichten: wat je zelf veilig kunt doen tot het gemaakt is`,
    metaTitle: `Daklekkage tijdelijk oplossen | Spoed Dak Service`,
    metaDescription: `Lekt je dak en duurt het nog even voordat de dakdekker er is? Dit kun je zelf veilig doen, binnen en op zolder, en dit laat je beter liggen.`,
    intro: `Het lekt, en het duurt nog even voordat er iemand op je dak kan. Dan wil je het zo droog mogelijk houden. Het meeste wat je zelf veilig kunt doen, doe je binnen en op zolder, niet op het dak. Hieronder lees je wat helpt, wat je beter laat en wanneer je niet moet wachten.`,
    secties: [
      { kop: `Eerst: is het spoed?`, tekst: [
        `Druppelt het bij een stopcontact, een lamp of de meterkast, bolt het plafond op, of ligt er na een storm een open plek in je dak? Wacht dan niet, maar bel of app me meteen. Wat je in de eerste minuten doet, staat op de <a href="/spoed/">spoedpagina</a>. Is het een druppel op zolder of een natte plek die langzaam groter wordt, dan helpt wat hieronder staat om de tijd tot de reparatie te overbruggen.`,
      ] },
      { kop: `Binnen: vang het water op`, tekst: [
        `Zet een emmer of bak onder de druppel en leg er een oude doek in, dan spat het niet. Leg handdoeken langs de rand van de natte plek en schuif meubels en spullen opzij. Wat je niet kunt verplaatsen, dek je af met plastic. Leeg de emmer op tijd, ook voordat je gaat slapen.`,
      ] },
      { kop: `Op zolder: laat het water de goede kant op lopen`, tekst: [
        `Ga met een zaklamp naar de plek waar het binnenkomt en zet daar een bak neer. Lukt dat niet precies, leg dan een stuk plastic of een open vuilniszak zo neer dat het water in de bak loopt en niet in je isolatie of naar het plafond eronder. Haal natte dozen en spullen weg. Is de isolatie op die plek nat, trek hem dan met handschoenen aan een stukje weg zodat hij kan drogen. Wat je daarna met natte isolatie doet, lees je in <a href="/kennisbank/isolatie-nat-na-lekkage/">isolatie nat na een lek</a>. Maak een foto van de plek waar het water vandaan lijkt te komen, dan weet ik straks waar ik moet beginnen.`,
      ] },
      { kop: `Lekt het uit de goot?`, tekst: [
        `Druppelt het buiten uit de goot boven je stoep of je voordeur, zet er dan een bak onder, zodat er bij vorst geen plek ijs ligt. Loopt de goot over, dan zit hij vaak vol. Ga niet met een ladder bij een volle of losse goot staan, zeker niet als het nat of glad is. Of je goot vol zit of echt lek is, lees je in <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Klim niet zelf het dak op, ook niet om even een pan recht te leggen. Natte pannen zijn glad en breken snel onder je voet. Leg geen zeil met stenen op een schuin dak: bij wind gaat het zeil klapperen en schuiven de stenen eraf. En smeer geen kit of tape op een natte plek. Dat houdt het zelden droog, en vaak zit het lek ergens anders dan waar je het water ziet. Gaat het om het lage platte dak van een aanbouw of schuur, lees dan in <a href="/kennisbank/plat-dak-vervangen-of-repareren/">plat dak: repareren of vervangen</a> wat je daar op een droge dag wel zelf kunt doen.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Bij een lek is mijn eerste klus dat het binnen niet verder nat wordt. Ligt er een pan scheef, dan leg ik hem terug. Ligt er na een storm een stuk dak open, dan dek ik het af. Zit de goot vol, dan maak ik hem leeg. Kan ik het daarna meteen goed maken, dan doe ik dat. Moet er een passende pan of nieuw lood komen, dan blijft het tot die tijd dicht en kom ik terug om het netjes af te maken. Zie <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een losse pan terugleggen of vervangen valt meestal onder een kleine reparatie: ${kleinPrijs}. Moet ik eerst zoeken waar het water binnenkomt en het lek dichtmaken, dan is het meestal een gerichte lekreparatie: ${lekPrijs}, inclusief materiaal. Stuur een foto van de natte plek en van je dak vanaf de straat. Je hoort de prijs voordat ik begin.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Hoe lang kan een daklek wachten?`, a: `Dat hangt af van waar het water heen gaat. Komt het op zolder in een bak terecht en blijft het plafond eronder droog, dan kan het vaak een paar dagen wachten. Wordt het plafond nat, zakt het water in de isolatie of druppelt het bij een stopcontact of lamp, wacht dan niet. Stuur me een foto, dan zeg ik eerlijk of het vandaag moet.` },
      { v: `Mag ik zelf een zeil over mijn dak leggen?`, a: `Liever niet. Op een schuin dak moet een zeil goed vastzitten, anders gaat het bij wind klapperen en trekt het pannen mee. Daarvoor moet je op het dak, en dat is bij nat weer gevaarlijk. Vang het water liever binnen op tot ik er ben.` },
      { v: `Werkt lekspray of kit uit de bouwmarkt?`, a: `Soms houdt het een paar dagen, maar op een natte of vuile plek hecht het slecht. En vaak zit het lek niet op de plek waar je het water ziet. Bij de reparatie moet ik het er dan eerst weer af halen.` },
    ],
  },
  {
    slug: `lekkage-huurhuis`,
    datum: `2026-11-04`,
    titel: `Lekt je huurhuis?`,
    h1: `Dak lekt in een huurhuis: wat doe je, en wie regelt de reparatie?`,
    metaTitle: `Daklekkage in een huurhuis: wat nu? | Spoed Dak Service`,
    metaDescription: `Lekt het dak van je huurhuis? Zo beperk je de schade, zo meld je het bij je verhuurder en zo zit het met de reparatie en je spullen. Ook voor verhuurders.`,
    intro: `Huur je je huis en lekt het dak, dan wil je twee dingen weten: wat doe je nu meteen, en wie zorgt dat het gemaakt wordt? In de regel is het dak de zaak van je verhuurder, maar jij moet het lek wel snel melden. Hieronder lees je wat je zelf doet, hoe je het meldt en wat er gebeurt als ik kom. Ben je zelf verhuurder, dan staat verderop wat je van mij kunt verwachten.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, leg handdoeken neer en schuif je spullen opzij. Druppelt het uit een lamp of spotje, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Maak foto's van de natte plek, van de schade aan je spullen en vanaf de straat van het dak. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Meld het meteen bij je verhuurder`, tekst: [
        `Bel of mail je verhuurder zo snel mogelijk, ook als het om een kleine plek gaat, en stuur de foto's mee. Zet erbij sinds wanneer het lekt, waar het water binnenkomt en of het erger wordt. Bewaar dat bericht. Huur je van een woningcorporatie, gebruik dan hun nummer of website voor reparaties. Vaak hebben ze ook een nummer voor spoed buiten kantooruren.`,
      ] },
      { kop: `Wie regelt en betaalt de reparatie?`, tekst: [
        `In de regel is een lekkend dak de zaak van de verhuurder: het dak hoort bij het huis, en groot onderhoud ligt bij de eigenaar. Kleine, dagelijkse dingen kunnen bij jou liggen. Wat precies, staat in je huurcontract. Woon je in een appartement, dan regelt meestal de VvE van het gebouw het dak. De melding loopt dan via je verhuurder.`,
      ] },
      { kop: `En je eigen spullen?`, tekst: [
        `Schade aan je eigen spullen, zoals een kast, een bank of een vloerkleed, valt meestal onder je eigen inboedelverzekering. Schade aan het huis zelf, zoals het plafond of de muur, is meestal iets voor de opstalverzekering van de verhuurder. Wat er vergoed wordt, hangt af van de polis en van de oorzaak. Meer daarover lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Je verhuurder is niet te bereiken`, tekst: [
        `Druppelt het binnen en kun je je verhuurder 's avonds of in het weekend niet bereiken, dan kun je mij bellen of appen om erger te voorkomen. Vaak maak ik het dan eerst waterdicht, en ik maak foto's van wat ik aantref en van wat ik heb gedaan. Laat het je verhuurder daarna zo snel mogelijk weten, met die foto's erbij. Reageert je verhuurder ook daarna niet, kijk dan bij het Juridisch Loket of de Huurcommissie wat je kunt doen.`,
      ] },
      { kop: `Ben je zelf verhuurder?`, tekst: [
        `Meldt je huurder een lek, stuur me dan de foto's die je huurder heeft gemaakt, of laat je huurder ze zelf via WhatsApp sturen. Ik spreek dan een moment af met je huurder, zodat je er zelf niet bij hoeft te zijn. Na afloop krijg je foto's van wat ik aantrof en van de reparatie. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Moet ik zoeken waar het water binnenkomt en het lek dichtmaken, dan is het meestal een gerichte lekreparatie: ${lekPrijs}, inclusief materiaal. Ligt er alleen een pan los of scheef, dan valt het vaak onder een kleine reparatie: ${kleinPrijs}. Je hoort vooraf wat het kost, zodat huurder en verhuurder samen kunnen afspreken wie de rekening krijgt.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Moet ik als huurder de dakdekker zelf betalen?`, a: `Meestal niet. Een lekkend dak is in de regel de zaak van de verhuurder. Heb je zelf iemand laten komen omdat je verhuurder niet te bereiken was, bewaar dan de rekening en de foto's en laat ze aan je verhuurder zien. Wie wat betaalt, spreken jullie samen af.` },
      { v: `Mijn verhuurder zegt dat het condens is en geen lek. Hoe weet ik dat?`, a: `Druppels die verspreid op het hout of de folie onder het dak zitten, vooral na een koude nacht, zijn vaak condens. Een natte plek die na elke bui op dezelfde plek terugkomt, is vaker een lek. Maak een paar dagen lang foto's, ook vlak na een bui, en noteer de datum erbij. Dan heb je iets om samen naar te kijken.` },
      { v: `Ik woon in een appartement. Wie regelt het dak dan?`, a: `Meestal de VvE van het gebouw, want het dak is van alle eigenaren samen. Huur je het appartement, meld het lek dan bij je verhuurder, die geeft het door aan de VvE. Woon je niet op de bovenste verdieping, dan komt het water misschien niet van het dak, maar van de badkamer of een leiding van de buren boven je.` },
    ],
  },
  {
    slug: `dakgoot-lekt-bij-regenpijp`,
    datum: `2026-11-04`,
    titel: `Lekt je goot bij de regenpijp?`,
    h1: `Dakgoot lekt bij de regenpijp: de uitloop, de bocht of de pijp?`,
    metaTitle: `Dakgoot lekt bij de regenpijp | Spoed Dak Service`,
    metaDescription: `Druppelt je dakgoot precies waar de regenpijp begint? Vaak zit het in de uitloop, in de bocht eronder of in een pijp die is gezakt. Zo zie je wat het is.`,
    intro: `De plek waar de goot overgaat in de regenpijp is een van de plekken waar een goot het vaakst lekt. Daar komt al het water uit de goot samen, en er zitten een paar verbindingen vlak boven elkaar. Hieronder lees je waar het meestal zit, hoe je het vanaf de grond herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Zo zit het in elkaar`, tekst: [
        `Onderin de goot zit een uitloop: een kort stuk pijp dat door de bodem van de goot naar beneden steekt. Bij een kunststof goot is die meestal vastgelijmd of zit hij met een rubber in de goot. Bij een zinken goot is hij erin gesoldeerd. Onder de uitloop zit vaak een bocht, soms twee, die naar de gevel loopt. Daar schuift de regenpijp in, en een beugel houdt de pijp tegen de muur.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Rond de uitloop in de goot. Bij kunststof laat de lijm of het rubber na jaren los, bij zink de soldeernaad. Je ziet dan een druppel die precies onder de goot valt, naast of langs de pijp, ook nog een tijdje na de bui.`,
        `Tussen de uitloop en de pijp. Zakt de regenpijp een stukje, bijvoorbeeld omdat een beugel los zit, dan steekt de uitloop niet ver genoeg meer in de pijp. Bij een flinke bui spuit het water er dan naast.`,
        `In de bocht onder de goot. Blad en mos blijven daar het eerst hangen. Staat het water in de bocht, dan komt het bij de verbindingen naar buiten en klotst het bij een bui uit de goot rond de uitloop.`,
        `Een uitloop die het water niet bijhoudt. Bij een groot dak met maar één regenpijp kan de uitloop bij een stortbui te weinig water kwijt. Dan loopt de goot vlak bij de pijp over, terwijl er niets lek is.`,
      ] },
      { kop: `Zo zie je wat het is`, tekst: [
        `Kijk tijdens of vlak na een bui vanaf de grond. Druppelt het op één plek onder de goot, ook als het al gestopt is met regenen, dan zit het meestal in de uitloop zelf. Spuit het tijdens de bui langs de pijp naar buiten, kijk dan of de pijp nog goed in de uitloop steekt. Komt er onderaan weinig water uit de pijp terwijl de goot vol staat, dan zit er een verstopping. Lees dan <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp</a>. Maak een foto of een filmpje, dan zie ik vaak al wat ik mee moet nemen.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit rond de uitloop. Op een natte of vuile goot hecht het slecht, en bij een zinken goot moet het er weer helemaal af voordat ik kan solderen. Duw of trek niet aan de pijp om hem terug in de uitloop te krijgen, want een oude beugel of een kunststof bocht breekt dan snel. En zet geen ladder tegen een goot die al los zit.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak eerst de goot en de uitloop leeg en kijk of het water weer goed wegloopt. Lekt een kunststof uitloop, dan maak ik de verbinding opnieuw of vervang ik de uitloop. Bij een zinken goot soldeer ik de uitloop opnieuw in de goot, of ik vervang hem als het zink eromheen te dun is. Is de pijp gezakt, dan zet ik hem weer goed in de uitloop en maak ik de beugel vast. Kan één regenpijp het water niet aan, dan kijken we samen of er een tweede uitloop met een eigen pijp bij kan. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a> en <a href="/diensten/regenpijp-vervangen/">regenpijp vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat het is: een uitloop opnieuw vastzetten is iets anders dan een nieuwe uitloop solderen of een stuk pijp vervangen. Stuur een foto van de plek vanaf de straat, dan hoor je vooraf wat het kost. Zit de goot alleen vol, dan is het gewoon <a href="/diensten/goten-reinigen/">goten reinigen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Lekt mijn goot of mijn regenpijp?`, a: `Valt de druppel net onder de goot, waar de pijp begint, dan zit het meestal in de uitloop. Komt het water verderop uit de pijp, bij een verbinding of een scheur, dan zit het in de pijp zelf. Kijk tijdens een bui waar het water precies naar buiten komt.` },
      { v: `Kan een losse beugel ervoor zorgen dat het lekt?`, a: `Ja. Zit een beugel los, dan zakt de pijp een stukje en steekt de uitloop er niet ver genoeg meer in. Bij een flinke bui spuit het water er dan naast. Vaak is het genoeg om de pijp terug te zetten en de beugel opnieuw vast te maken.` },
      { v: `Is een lekkende uitloop spoed?`, a: `Meestal niet, zolang het water buiten blijft. Loopt het bij de pijp tegen de gevel en wordt het binnen nat, dan wel: bel of app me met een foto.` },
    ],
  },
];
// Nieuwe artikelen staan sinds 05-11-2026 in artikelen-extra.ts (dit bestand is te groot geworden).
ARTIKELEN.push(...ARTIKELEN_EXTRA.filter((x) => !ARTIKELEN.some((a) => a.slug === x.slug)));

export const getArtikel = (slug: string) => ARTIKELEN.find((a) => a.slug === slug);
