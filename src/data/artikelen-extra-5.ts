/**
 * Nieuwe kennisartikelen en korte antwoorden sinds 16-11-2026.
 * artikelen-extra-4.ts zet ze achter ARTIKELEN_EXTRA_4 en in KORT_ANTWOORD_4.
 * 17-11-2026 ronde 2: water in de meterkast
 * 17-11-2026 ronde 3: dak lekt na dagen regen, lood bij de schoorsteen (kosten), jaren 50-huis
 * 17-11-2026 ronde 3: schimmel op zolder (lek of condens)
 * 17-11-2026 ronde 3: dak nakijken voor je de zolder verbouwt
 * 17-11-2026 ronde 5: lekkage terwijl je op vakantie bent
 * 17-11-2026 ronde 5: lekkende ventilatiepan
 * 17-11-2026 ronde 5: zelf een dakpan terugleggen of vervangen
 * 18-11-2026 ronde 1: doorslaand vocht of daklek
 * 18-11-2026 ronde 1: zakgoot lekt
 * 18-11-2026 ronde 3: lood rond de schoorsteen laten vervangen
 * 18-11-2026 ronde 3: verholen goot lekt
 * 18-11-2026 ronde 4: aardlekschakelaar slaat af bij regen
 * 18-11-2026 ronde 4: dak van je garagebox lekt
 * 18-11-2026 ronde 4: vergunning nodig voor je dak
 * 18-11-2026 ronde 5: dakgoot laten vernieuwen
 * 18-11-2026 ronde 5: goot loopt over door een regenton
 * 19-11-2026 ronde 1: het dak van je bungalow lekt
 * 19-11-2026 ronde 1: vergaarbak bovenaan de regenpijp lekt of loopt over
 * 19-11-2026 ronde 1: de dakdekker komt, wat regel je vooraf
 * 19-11-2026 ronde 3: dak nakijken na een schoorsteenbrand
 * 19-11-2026 ronde 3: klimop op je dak of in je dakgoot
 * 19-11-2026 ronde 3: marter onder je dakpannen of op zolder
 * 19-11-2026 ronde 4: artikelen uit artikelen-extra-6.ts komen erachter
 */
import type { Artikel } from "./artikelen";
import { ARTIKELEN_EXTRA_6, KORT_ANTWOORD_6 } from "./artikelen-extra-6";

export const ARTIKELEN_EXTRA_5: Artikel[] = [
  {
    slug: `noodreparatie-dak`,
    datum: `2026-11-16`,
    titel: `Noodreparatie aan je dak: hoe lang houdt het?`,
    h1: `Noodreparatie aan je dak: wat het is, hoe lang het houdt en wat daarna komt`,
    metaTitle: `Noodreparatie dak: hoe lang houdt het? | Spoed Dak Service`,
    metaDescription: `Lek of stormschade en het moet eerst dicht? Zo werkt een noodreparatie: wat ik doe, hoe lang het houdt, wat je verzekeraar vraagt en wat daarna komt.`,
    intro: `Bij een lek of na een storm is de eerste vraag niet hoe het mooi wordt, maar hoe het binnen droog blijft. Daarom gaat een reparatie soms in twee stappen: eerst een noodreparatie, en op een betere dag de nette reparatie. Hieronder lees je wat een noodreparatie is, hoe lang die houdt, wat je zelf doet en hoe het zit met je verzekering.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op, zeker niet als het nat is of hard waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat is een noodreparatie?`, tekst: [
        `Een noodreparatie is alles wat ervoor zorgt dat er geen water meer binnenkomt, ook als het nog niet netjes is. Een losse pan terugleggen. Een gebroken pan tijdelijk vervangen door een andere. Een open stuk dak afdekken met folie of een zeil dat goed vastzit. Een kier dichtmaken waar het lood is losgekomen. Of een volle goot of afvoer leegmaken, zodat het water weer weg kan. Het doel is één ding: droog houden tot de echte reparatie kan.`,
      ] },
      { kop: `Waarom niet meteen netjes?`, tekst: [
        `Vaak kan het wel in één keer, en dan doe ik dat ook. Soms lukt het niet, en dat heeft bijna altijd met het weer, het materiaal of de veiligheid te maken.`,
        `Lood, kit en dakbedekking hechten alleen op een droge, schone ondergrond. Regent het, dan houdt een nette reparatie het niet lang. Dakmortel voor de nok moet uitharden zonder vorst.`,
        `Een gebroken pan moet passen in vorm en kleur. Ligt er een ouder model op je dak, dan moet ik zo'n pan soms eerst zoeken.`,
        `Bij harde wind, onweer of in het donker op een nat dak is lang op het dak werken voor niemand veilig. Dan maak ik het eerst dicht, en kom ik terug als het wel kan.`,
      ] },
      { kop: `Hoe lang houdt een noodreparatie?`, tekst: [
        `Dat hangt af van wat er is gedaan. Een pan die is teruggelegd, ligt daarna gewoon weer zoals hij hoort. Een zeil of folie over een open stuk is bedoeld voor dagen tot een paar weken, niet voor de hele winter. De wind trekt er steeds aan, en zon en vorst maken het bros. Wacht dus niet te lang met de nette reparatie. Gaat het hard waaien voordat die er is, kijk dan vanaf de straat of het zeil nog goed ligt. Ga er zelf niet aan trekken en zet het niet zelf vast.`,
      ] },
      { kop: `Wat jij in de tussentijd doet`, tekst: [
        `Kijk na een bui op zolder of de plek droog blijft, en laat de emmer nog even staan. Een nat plafond droogt langzaam, ook als het lek dicht is, zie <a href="/kennisbank/plafond-drogen-na-lekkage/">plafond drogen na een lekkage</a>. Wordt het toch weer nat, of zie je dat het zeil is gaan schuiven, stuur me dan meteen een foto. Moet je na een zware storm wachten tot er iemand kan komen, lees dan <a href="/kennisbank/wachten-op-dakdekker-na-storm/">wachten op een dakdekker na een storm</a>.`,
      ] },
      { kop: `En je verzekering?`, tekst: [
        `Maak foto's van de schade voordat er iets aan gebeurt, binnen en, als het veilig kan, van je dak vanaf de straat. Bewaar de rekening van de noodreparatie. Kosten die je maakt om erger te voorkomen, heten bij verzekeraars bereddingskosten. Die worden vaak vergoed als de schade zelf onder je polis valt, zoals bij stormschade, maar dat verschilt per polis. Bel je verzekeraar zo snel mogelijk en vraag wat ze nodig hebben. Ik maak foto's van wat ik aantref en van wat ik heb gedaan, met een korte omschrijving die je kunt meesturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst waar het water binnenkomt en zorg dat het daar droog blijft. Daarna zeg ik eerlijk of het meteen netjes kan, of dat er een tweede keer nodig is, bijvoorbeeld voor een passende pan, nieuw lood of dakmortel op een droge dag zonder vorst. Je hoort vooraf wat elke stap kost, en voor de nette reparatie spreken we samen een dag af. Zie <a href="/diensten/daklekkage/">daklekkage</a> en, na een storm, <a href="/diensten/stormschade/">stormschade</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Gaat het altijd in twee keer?`, a: `Nee. Vaak kan het lek meteen goed dicht. Alleen als het weer, het materiaal of de veiligheid het niet toelaat, maak ik het eerst waterdicht en kom ik terug voor de nette reparatie. Je hoort vooraf wat elke stap kost.` },
      { v: `Kan ik zelf een zeil over mijn dak leggen?`, a: `Liever niet. Op een nat dak glij je zo uit, en een groot zeil werkt bij wind als een zeil op een boot: het rukt aan alles wat het vasthoudt, ook aan jou. Vang het water binnen op, en kun je veilig op zolder komen, zet daar dan een bak onder de plek waar het druppelt. Het afdekken laat je aan mij over.` },
      { v: `Hoe lang mag een zeil op mijn dak blijven liggen?`, a: `Zo kort mogelijk. Het is bedoeld om de tijd tot de nette reparatie te overbruggen, meestal dagen en hooguit een paar weken. Hoe langer het ligt, hoe groter de kans dat de wind er een keer onder komt. Spreek daarom meteen een dag af voor de nette reparatie.` },
      // 23-11-2026 ronde 3: vraag over een noodreparatie 's nachts of in het weekend.
      { v: `Kun je ook 's nachts of in het weekend een noodreparatie doen?`, a: `Bellen of appen kan dag en nacht, ook in het weekend. Of ik meteen het dak op kan, hangt af van het weer en van hoe veilig het is. In het donker op een nat dak, bij onweer of bij harde wind wacht ik tot het veilig kan. Tot die tijd vang je het water binnen op, haal je spullen weg en zet je in de meterkast de groep uit als het bij een lamp of stopcontact nat wordt. Stuur me meteen een foto van de natte plek en, als het veilig kan, van je dak vanaf de straat. Dan zeg ik wat je tot die tijd zelf kunt doen en wanneer ik kan komen. Kan het veilig wachten tot een werkdag, dan zeg ik dat eerlijk. Je hoort vooraf wat het kost.` },
    ],
  },
  {
    slug: `foto-van-je-dak-maken`,
    datum: `2026-11-16`,
    titel: `Foto's van je dak maken: welke helpen?`,
    h1: `Foto's van je dak maken voor de dakdekker: welke helpen het meest, veilig vanaf de grond`,
    metaTitle: `Foto van je dak maken voor de dakdekker | Spoed Dak Service`,
    metaDescription: `Wil je via WhatsApp een prijs of advies? Deze foto's helpen een dakdekker het meest: je dak vanaf de straat, de natte plek binnen en zolder. Zo maak je ze veilig.`,
    intro: `Via WhatsApp kan ik al veel zien, als de foto's de goede dingen laten zien. Met een paar goede foto's weet ik meestal wat er speelt en wat ik mee moet nemen, en vaak kan ik dan al zeggen wat het ongeveer wordt. Hieronder lees je welke foto's het meest helpen en hoe je ze maakt zonder het dak op te gaan.`,
    secties: [
      { kop: `Blijf op de grond`, tekst: [
        `Ga voor een foto niet het dak op en zet geen ladder tegen de goot. Alles wat ik nodig heb, maak je vanaf de straat, uit een raam boven of op zolder. Liever een foto minder dan een val.`,
      ] },
      { kop: `Je dak vanaf de overkant van de straat`, tekst: [
        `Ga aan de overkant van de straat staan, zodat je het hele dakvlak ziet, van de goot tot de nok. Maak eerst een foto van het hele dak, en zoom daarna met je telefoon in op de plek waar je iets ziet: een pan die scheef ligt, een gat bij de nok of lood bij de schoorsteen dat omhoog staat. Gaat het om de achterkant, maak de foto dan vanuit de tuin, of vraag de buren of het mag vanuit hun tuin of een raam boven.`,
      ] },
      { kop: `De natte plek binnen`, tekst: [
        `Maak een foto van dichtbij, en een tweede van een paar meter afstand. Dan zie ik waar in de kamer het zit: bij een raam, een lamp, de schoorsteen of in een hoek. Zet erbij op welke verdieping het is en of het nog druppelt.`,
      ] },
      { kop: `Op zolder, boven de natte plek`, tekst: [
        `Kun je veilig op zolder komen, kijk dan met een zaklamp boven de natte plek. Maak een foto van het hout, de folie of de pannen waar het nat is, of waar je daglicht ziet. Die foto zegt vaak meer dan de vlek op het plafond, want het water komt vaak een eind verderop binnen dan waar je het ziet. Zie ook <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Bij een goot: tijdens of vlak na een bui`, tekst: [
        `Een lekkende goot zie je het best als het regent. Film tien seconden lang de plek waar het water de goot uit komt: over de voorkant, achter de goot langs de muur, bij een naad of bij de regenpijp. Zie <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a>.`,
      ] },
      { kop: `Bij een plat dak: uit een raam boven`, tekst: [
        `Maak vanuit een raam op de verdieping erboven een foto van het hele platte dak, met de rand en de afvoer erop. Staat er na een paar droge dagen nog een plas, zet dat erbij. Ga er niet op staan als het nat of glad is. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Zet er een paar woorden bij`, tekst: [
        `Schrijf in je bericht in welke plaats je woont, sinds wanneer je het ziet, bij wat voor weer het nat wordt (bij elke bui, alleen bij harde wind of alleen bij dooi) en of er onlangs iemand op je dak is geweest. Daarmee kan ik de foto's beter lezen.`,
      ] },
      { kop: `Wat ik met je foto's doe`, tekst: [
        `Ik kijk wat ik zie en zeg eerlijk wat ik denk dat het is. Vaak kan ik dan al zeggen wat het ongeveer wordt, en de vaste prijs hoor je voordat ik begin. Op een foto zie je niet altijd alles. Dan kom ik eerst kijken. Lekt het nu, kijk dan eerst op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Ik kan mijn dak vanaf de straat niet goed zien. Wat dan?`, a: `Maak dan de foto's die wel lukken: de natte plek binnen, zolder met een zaklamp en het dak vanuit de tuin of een raam boven. Zet erbij wat voor huis het is, bijvoorbeeld een rijtjeshuis of een huis met een plat dak achter. Dan vraag ik zelf wat ik nog wil zien.` },
      { v: `Is een filmpje beter dan een foto?`, a: `Bij een goot of een druppel vaak wel, omdat je dan ziet waar het water loopt. Houd het kort, tien tot twintig seconden. Voor een pan, de nok of het lood is een scherpe foto met zoom meestal genoeg.` },
      { v: `Kun je op een foto al een prijs geven?`, a: `Vaak kan ik dan al zeggen wat het ongeveer wordt. De vaste prijs hoor je voordat ik begin. Zie ik op de foto niet alles, dan kom ik eerst kijken.` },
      { v: `Ik kan mijn dak zelf niet goed zien. Heb je iets aan Google Street View of een luchtfoto?`, a: `Een beetje. Op Street View of een luchtfoto zie ik vaak wat voor dak je hebt: de vorm, het soort pannen en waar de schoorsteen, de dakramen en de goten zitten. Maar zo'n beeld kan een paar jaar oud zijn, dus een pan die vorige week is gaan schuiven of lood dat nu los zit, zie je er niet op. Stuur je adres gerust mee, maar maak daarnaast een foto van de natte plek binnen en, als het lukt, een foto van je dak vanuit de tuin of een raam boven. Dan heb ik het beeld van nu.` },
    ],
  },
  {
    slug: `dak-repareren-via-buren`,
    datum: `2026-11-16`,
    titel: `Kan de dakdekker alleen via de buren bij je dak?`,
    h1: `Kan de dakdekker alleen via de tuin of het dak van de buren bij je goot of dak? Zo regel je het`,
    metaTitle: `Dakdekker via de tuin van de buren? | Spoed Dak Service`,
    metaDescription: `Kan de dakdekker alleen via de tuin, het pad of het platte dak van de buren bij je goot of dak? Wat het ladderrecht zegt en hoe je het samen goed regelt.`,
    intro: `Bij een rijtjeshuis, of een huis zonder achterom, komt een dakdekker soms alleen via de tuin, het pad of het platte dak van de buren bij de goot of het dak aan de achterkant. Meestal is dat met een praatje zo geregeld. Hieronder lees je wat je vooraf afspreekt, wat de wet zegt als het niet lukt en hoe ik het aanpak.`,
    secties: [
      { kop: `Eerst gewoon vragen`, tekst: [
        `Vraag je buren een paar dagen van tevoren of de dakdekker via hun tuin of pad mag. Vertel waarvoor, hoe lang het ongeveer duurt en waar de ladder komt te staan. De meeste buren vinden het prima, zeker als ze weten wanneer het is. Spreek af wie er thuis is om het hek open te doen, en of er planten, een schutting of een tuinset in de weg staan.`,
      ] },
      { kop: `Wat het ladderrecht zegt`, tekst: [
        `Willen de buren niet, dan is er het ladderrecht, artikel 5:56 van het Burgerlijk Wetboek. Kort gezegd moet een eigenaar toestaan dat zijn grond wordt gebruikt voor onderhoud of herstel aan het huis van de buren, als dat werk anders niet, of alleen op een heel lastige of dure manier kan. Ontstaat er daarbij schade, bijvoorbeeld aan de tuin of de schutting, dan heeft de buurman recht op vergoeding.`,
        `Het ladderrecht is bedoeld voor als het echt niet anders kan, niet om een omweg te sparen. Vraag het dus altijd van tevoren. Kom je er samen niet uit, vraag dan advies bij het Juridisch Loket. Dit is uitleg van een dakdekker, geen juridisch advies.`,
      ] },
      { kop: `Via het platte dak van de buren`, tekst: [
        `Soms kan ik alleen bij je dak of goot komen via het platte dak van de aanbouw of garage van de buren. Niet elk plat dak is gemaakt om op te lopen of een ladder op te zetten. Ik kijk daarom eerst of dat dak er stevig genoeg voor is. Is het dat niet, dan zoeken we samen een andere manier. Vraag je buren ook hier altijd vooraf of ze het goed vinden.`,
      ] },
      { kop: `Een goot of dak dat doorloopt naar de buren`, tekst: [
        `Loopt je goot of dak door naar de buren en zit het lek op de grens, dan is het vaak slim om het samen aan te pakken. Zie <a href="/kennisbank/gedeelde-dakgoot-lekt/">gedeelde dakgoot lekt</a> en <a href="/kennisbank/lekkage-muur-buren/">lekkage langs de muur met de buren</a>.`,
      ] },
      { kop: `Maak vooraf een foto`, tekst: [
        `Maak samen met je buren een foto van de tuin, het pad of het platte dak voordat het werk begint. Dan is er achteraf geen discussie over hoe het eruitzag. Ik ben bedrijfsaansprakelijk verzekerd.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van je dak of goot vanaf de straat of uit de tuin, en zet erbij of er een achterom is. Dan zeg ik of ik er via de voorkant bij kan, of dat ik via de buren moet. Je hoort vooraf wat het kost, en we spreken samen een dag af, zodat jij het met je buren kunt regelen. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Mijn buren willen niet. Mag de dakdekker dan toch via hun tuin?`, a: `Niet zomaar. Het ladderrecht geldt alleen als het werk echt niet, of alleen heel lastig anders kan, en ook dan is het verstandig om het eerst samen op te lossen. Vraag of er een moment is dat het hen beter uitkomt, of dat er iemand bij kan zijn. Kom je er niet uit, vraag dan advies bij het Juridisch Loket. Kan ik er ook langs een andere kant bij, dan zeg ik dat eerlijk.` },
      { v: `Wat als er bij de buren iets kapotgaat?`, a: `Volgens het ladderrecht heeft je buurman recht op vergoeding van schade die door het werk ontstaat. Maak daarom voor het werk samen een foto van de tuin of de schutting, en spreek af waar de ladder komt te staan.` },
      { v: `Moet ik mijn buren zelf vragen, of doe jij dat?`, a: `Vraag het liefst zelf, want het zijn jouw buren. Ik vertel je vooraf waar de ladder komt te staan en hoe lang het ongeveer duurt, zodat je dat kunt doorgeven.` },
    ],
  },
  {
    slug: `hagelschade-dak`,
    datum: `2026-11-16`,
    titel: `Hagelschade aan je dak: wat nu?`,
    h1: `Hagelschade aan je dak: waar je na de bui kijkt, wat je meteen doet en hoe het zit met je verzekering`,
    metaTitle: `Hagelschade aan je dak: wat nu? | Spoed Dak Service`,
    metaDescription: `Na een hagelbui een lek, een gebarsten pan of een kapotte lichtkoepel? Waar hagel een dak het eerst raakt, wat je meteen doet en wat je verzekeraar wil zien.`,
    intro: `Na een flinke hagelbui wil je weten of je dak het gehouden heeft. Meestal valt het mee, want gewone dakpannen kunnen veel hebben. Wat hagel wel snel kapotmaakt, is glas en kunststof: een lichtkoepel, een dakraam of de platen van je veranda. Hieronder lees je waar je na de bui naar kijkt, wat je meteen doet als het lekt en hoe het zit met je verzekering.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op: na een hagelbui liggen er ijsballetjes en natte blaadjes op de pannen, en dan is een dak spiegelglad. Ga ook niet op een veranda of een lichtkoepel staan om te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar hagel een dak het eerst raakt`, tekst: [
        `Gewone dakpannen kunnen meestal flink wat hagel hebben. Bij een heel zware bui, of bij oude pannen die al water opnemen, kan er wel een pan barsten of gaat er een hoekje af. Zie <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
        `Kwetsbaarder is alles van glas of kunststof. Een lichtkoepel van kunststof wordt na jaren zon bros, en dan slaat hagel er een barst of een gat in. Zie <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>. Ook een dakraam, een glazen dakpan en de platen van een veranda of overkapping raken sneller beschadigd. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a> en <a href="/kennisbank/veranda-of-overkapping-lekt/">veranda of overkapping lekt</a>.`,
        `Een oude kunststof goot of regenpijp kan na veel jaren ook bros zijn en scheuren. En op een plat dak spoelen de hagelkorrels samen met blad naar de afvoer. Kijk na de bui of die niet dichtzit, anders blijft het water staan. Zie <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
      ] },
      { kop: `Na de bui: zo kijk je veilig`, tekst: [
        `Wacht tot het droog is en kijk vanaf de overkant van de straat en vanuit de tuin naar je dak, met de zoom van je telefoon. Let op pannen met een barst of een stukje eraf, een dakraam of koepel met een ster of een scheur, en scherven of stukjes pan op de stoep, het terras of in de goot. Kijk van binnen tegen het licht in naar een lichtkoepel of dakraam: een haarscheur zie je dan beter.`,
        `Kijk bij de volgende flinke bui even op zolder, met een zaklamp, of het droog blijft. Een kleine barst lekt soms pas als het weer hard regent of waait. Welke foto's mij het meest helpen, lees je in <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Hagel in de goot`, tekst: [
        `Na een zware hagelbui ligt de goot soms ineens vol ijs, met blad en takjes ertussen. Het ijs smelt vanzelf, maar het blad blijft liggen en zet de uitloop naar de regenpijp dicht. Loopt je goot na de bui over of komt er water langs de gevel, lees dan <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
      ] },
      { kop: `Je verzekering`, tekst: [
        `Hagelschade aan je dak valt vaak onder je opstalverzekering, maar dat verschilt per polis, dus kijk in je voorwaarden. Maak foto's van de schade voordat er iets wordt weggehaald, binnen en vanaf de straat, en schrijf de datum en het tijdstip van de bui erbij. Bewaar ook de rekening van een noodreparatie. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving die je kunt meesturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Eerst zorg ik dat het binnen droog blijft. Een gebroken lichtkoepel of een open plek dek ik af, en een gebarsten pan vervang ik door een pan die in vorm en kleur bij de rest past. Is het glas van een dakraam gebroken, dan dek ik het af en zeg ik eerlijk wie het glas het beste kan vervangen. Kan het niet meteen netjes, bijvoorbeeld omdat ik eerst een passende pan moet zoeken, dan maak ik het eerst waterdicht en kom ik terug, zie <a href="/kennisbank/noodreparatie-dak/">noodreparatie aan je dak</a>. Je hoort vooraf wat het kost. Zie ook <a href="/diensten/stormschade/">stormschade aan je dak</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: stormschade aan je dak`, href: `/diensten/stormschade/` },
    faq: [
      { v: `Kan hagel door gewone dakpannen heen slaan?`, a: `Zelden. Een gebakken of betonnen pan in goede staat kan meestal flink wat hagel hebben. Bij heel grote hagelstenen, of bij oude pannen die al poreus zijn, kan er wel een pan barsten of een hoek afbreken. Glas en kunststof, zoals een lichtkoepel, een dakraam of de platen van een veranda, gaan eerder kapot.` },
      { v: `Mijn dak lekt pas een paar dagen na de hagelbui. Kan dat nog door de hagel komen?`, a: `Dat kan. Een haarscheur in een pan of een koepel laat vaak pas water door bij de volgende flinke bui, zeker als het waait. Schrijf de datum van de hagelbui op en meld het ook dan bij je verzekeraar. Stuur me een foto van de natte plek en van je dak vanaf de straat, dan kijk ik waar het binnenkomt.` },
      { v: `Moet ik na hagel mijn zonnepanelen laten nakijken?`, a: `Aan de panelen zelf werk ik niet, dat doet je installateur. Zie je een barst in een paneel, laat hem dan kijken. Lekt het sinds de bui op zolder, of is er een pan naast de panelen gebroken, dan kijk ik daarnaar. Ligt die pan onder een paneel, dan moet het paneel eerst los, en dat doet je installateur.` },
    ],
  },
  {
    slug: `planten-in-dakgoot`,
    datum: `2026-11-16`,
    titel: `Gras of plantjes in je dakgoot?`,
    h1: `Er groeit gras, mos of een plantje in je dakgoot: wat dat zegt en wat je eraan doet`,
    metaTitle: `Gras of planten in je dakgoot? | Spoed Dak Service`,
    metaDescription: `Groeit er gras, mos of zelfs een boompje in je dakgoot? Dan ligt er een laag aarde in. Waarom dat kwaad kan, wat je beter niet doet en hoe hij weer leeg komt.`,
    intro: `Kijk je vanaf de straat omhoog en zie je sprietjes gras, mos of een klein boompje boven de rand van je dakgoot uitsteken? Dan is de goot al een tijd niet leeg geweest. Het ziet er onschuldig uit, maar zo'n begroeide goot kan het water niet meer goed kwijt. Hieronder lees je wat het betekent, waarom je het beter niet laat zitten en hoe je hem weer schoon krijgt.`,
    secties: [
      { kop: `Wat het betekent`, tekst: [
        `Een plant groeit alleen als er iets is om in te wortelen. In een goot is dat een laag van blad, mos, zand dat van de pannen afspoelt en vogelpoep, die na een paar jaar verandert in een soort natte aarde. Zaadjes van gras, onkruid of een berk waaien erin en kiemen. Zie je groen in je goot, dan ligt er dus al een flinke laag, en meestal ook bij de uitloop naar de regenpijp. Zie ook <a href="/kennisbank/zand-in-dakgoot/">zand of korrels in je dakgoot</a>.`,
      ] },
      { kop: `Waarom het kwaad kan`, tekst: [
        `Het water kan niet weg. De laag aarde houdt het tegen, en bij een flinke bui loopt de goot over de rand, of achter de goot langs de muur. Zie <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
        `Het wordt zwaar. Natte aarde weegt veel meer dan droog blad. Een goot die jaren zo'n laag draagt, kan tussen de beugels gaan doorhangen, en dan blijft er na elke bui water staan. Zie <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
        `De goot blijft nat. Een laag die altijd vochtig is, laat een zinken goot sneller slijten, en wortels groeien graag in een naad of een hoek. Zie <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Trek vanaf een ladder niet hard aan een plant met flinke wortels. Die kunnen in een naad vastzitten, en met een ruk trek je de goot uit de beugels of de naad open. Gooi er geen onkruidmiddel of zout in: dat spoelt met de regen naar je regenpijp en het riool, en de laag aarde blijft gewoon liggen. Ga ook niet vanaf het dak of uit een dakraam in de goot reiken. Wil je het zelf doen, lees dan eerst <a href="/kennisbank/dakgoot-zelf-schoonmaken/">dakgoot zelf schoonmaken</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik haal de hele laag eruit, met de planten en de wortels, ook bij de uitloop naar de regenpijp, en de troep neem ik mee. Daarna kijk ik of het water weer goed wegloopt, of de goot nog op afschot hangt en of de naden en hoeken nog dicht zijn. Zie ik een lek of een goot die doorhangt, dan zeg ik dat eerlijk, en hoor je eerst wat het kost om het te herstellen, voordat ik iets doe. Wat leegmaken kost, lees je in <a href="/kennisbank/wat-kost-dakgoot-schoonmaken/">wat kost dakgoot schoonmaken</a>.`,
      ] },
      { kop: `Zo voorkom je het`, tekst: [
        `Laat je goot laat in de herfst leegmaken, als het meeste blad gevallen is. Staan er bomen dicht bij je huis, dan is een tweede keer in het voorjaar vaak slim. Hoe vaak het bij jou nodig is, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>. Of een bladvanger of gaas helpt, staat in <a href="/kennisbank/bladvanger-dakgoot/">bladvanger of gaas in je dakgoot</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Er groeit een klein boompje in mijn dakgoot. Is dat erg?`, a: `Laat het niet staan. Een boompje groeit elk jaar, en de wortels zoeken een weg in een naad, een hoek of onder de onderste pannen. Hoe eerder het eruit gaat, hoe kleiner de kans dat de goot of een pan schade krijgt. Stuur me een foto vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost.` },
      { v: `Kan ik het groen niet gewoon laten zitten als het niet lekt?`, a: `Liever niet. Zolang het droog is, merk je er weinig van, maar bij een stevige bui kan de goot het water niet kwijt en loopt hij over. En hoe langer het blijft liggen, hoe dikker de laag en hoe zwaarder de goot wordt.` },
      { v: `Moet mijn goot vervangen worden als er planten in groeiden?`, a: `Meestal niet. Vaak is leegmaken genoeg. Hangt de goot door, dan kan hij vaak weer op afschot gehangen worden, en een lekke naad in een zinken goot kan vaak opnieuw gesoldeerd worden. Alleen als de goot op veel plekken lek of doorgeroest is, zeg ik dat vervangen slimmer is.` },
    ],
  },
  {
    slug: `boerderij-dak-lekt`,
    datum: `2026-11-16`,
    titel: `Lekt het dak van je boerderij?`,
    h1: `Het dak van je boerderij of woonboerderij lekt: waar het meestal zit en wat je doet`,
    metaTitle: `Dak van je boerderij lekt: waar zit het? | Spoed Dak Service`,
    metaDescription: `Een boerderij heeft een groot pannendak, lange goten, een kilgoot bij de schuur en vaak oude pannen zonder folie. Zo zie je waar het lekt en wat je doet.`,
    intro: `Een boerderij of woonboerderij heeft een ander dak dan een huis in de straat. Het dak is groot en loopt vaak laag door tot vlak boven de grond, het woonhuis en de oude stal zitten soms onder één kap, en er zijn later stukken aangebouwd. Zo'n dak heeft daardoor zijn eigen zwakke plekken. Hieronder lees je welke dat zijn, hoe je ziet waar het lekt en wat je zelf kunt doen.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep uit als het bij een lamp of stopcontact lekt. Ga niet zelf het dak op, ook niet waar het laag bij de grond komt: oude pannen breken snel als je erop staat, en met mos erop zijn ze glad. Maak een foto van de natte plek. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Oude pannen, vaak zonder folie`, tekst: [
        `Op veel oude boerderijdaken haken de pannen direct op de latten, zonder folie eronder. Vanaf de hooizolder kijk je zo tegen de onderkant van de pannen aan. Zo'n dak ademt goed, en een streepje licht is daar niet vreemd. Het nadeel: valt er een pan stuk of schuift er een, dan druppelt het meteen op de balken of de vloer eronder. In het deel dat later tot woonruimte is verbouwd, ligt soms wel folie met isolatie, terwijl de oude stal nog het oude dak heeft. Zie <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a>.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `De lange goot. Van een groot dakvlak komt bij een bui veel water tegelijk in de goot. Ligt er blad of mos in, of is de uitloop naar de regenpijp half dicht, dan loopt hij over en wordt de muur eronder nat. Ook een naad of hoek in een oude zinken goot kan opengaan. Zie <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `De kilgoot bij een aanbouw of schuur. Waar een later gebouwd stuk met zijn dak tegen het hoofddak aankomt, ligt een kilgoot. Daar komt het water van twee dakvlakken samen, en daar blijft ook blad liggen. Oud lood of zink kan er scheuren. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
        `De nok en de schuine hoeken. Veel boerderijen hebben aan de kopse kant een schuin afgeschuind stuk dak, soms een wolfseind genoemd, met hoekkepers langs de schuine randen. De vorsten op de nok en op de hoeken liggen vaak nog in specie, en die laat na veel jaren los. In het open land heeft de wind daar veel grip op. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a> en <a href="/kennisbank/hoekkeper-lekt/">lekkage bij de hoekkeper</a>.`,
        `De schoorsteen. Ook als er niet meer gestookt wordt, staat hij er vaak nog, met lood rond de voet dat al heel lang meegaat. Zie <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
        `Dakramen in het verbouwde deel. Bij een verbouwing zijn er vaak dakramen in het grote dakvlak gekomen. Boven zo'n raam blijft blad hangen, en het gootstuk eronder kan na jaren lekken. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `Oude pannen. Gebakken pannen van tientallen jaren oud nemen water op, en na een vorstperiode kunnen ze schilferen of barsten. Zie <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a> en <a href="/kennisbank/vorstschade-dakpannen/">vorstschade aan dakpannen</a>.`,
      ] },
      { kop: `De schuur of stal ernaast`, tekst: [
        `Naast veel boerderijen staat een schuur, stal of loods met een eigen dak en een eigen goot, en die vergeet je snel. Ligt er een pannendak op, lees dan <a href="/kennisbank/pannendak-schuur-lekt/">het pannendak van je schuur lekt</a>. Liggen er golfplaten op, kijk dan bij <a href="/kennisbank/golfplaten-lekken/">golfplaten lekken</a>. Zijn de platen grijs en van voor 1994, laat ze dan eerst onderzoeken op asbest, want daar boor of zaag ik niet in.`,
      ] },
      { kop: `Zo vind je het`, tekst: [
        `Ga tijdens of vlak na een bui met een zaklamp naar de zolder of de hooizolder boven de natte plek. Zonder folie zie je het natte hout meestal recht onder het lek. Ligt er wel folie, dan loopt het water eerst een stuk naar beneden voordat je het ziet. Maak daarna vanaf het erf of de weg foto's van beide kanten van het dak en van de kopse kant, met de zoom van je telefoon. Een pan die scheef ligt, een gat in de nok of blad in de kilgoot zie je vaak al van beneden. Zie ook <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Repareren of een dakvlak vernieuwen?`, tekst: [
        `Lekt het op één plek, dan is repareren meestal genoeg: een pan vervangen, de nok weer vastzetten, lood herstellen of een naad in de goot solderen. Breken er elk jaar op meer plekken pannen, dan kan het slimmer zijn om een dakvlak in één keer te vernieuwen. Als je dat wilt, kan er dan ook nieuwe folie en kunnen er nieuwe panlatten onder. Staat je boerderij op de monumentenlijst, lees dan ook <a href="/kennisbank/dak-monument-repareren/">je dak repareren in een monument</a>. Wanneer vernieuwen slimmer wordt, staat in <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het water binnenkomt en daarna buiten op het dak. Bij een groot of hoog dak spreken we vooraf af hoe ik er veilig bij kan. Voor een gebroken pan zoek ik een pan die bij de rest past, zie <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik</a>. Los lood zet ik weer vast of vervang ik, meestal met loodvervanger en met echt lood als je dat liever hebt. Een lekkende naad in een zinken goot soldeer ik. Je hoort vooraf wat het kost. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mijn boerderij ligt ver buiten het dorp. Kom je daar ook?`, a: `Ja. Zet in je bericht in welke plaats je woont, en stuur een foto van de natte plek en van het dak vanaf het erf of de weg. Dan weet ik wat ik mee moet nemen, en hoor je eerlijk wanneer ik kan komen.` },
      { v: `Ik wil de oude stal verbouwen tot woonruimte. Waar let ik op bij het dak?`, a: `Zorg dat het dak eerst dicht is, voordat er isolatie of een plafond onder komt. Anders zie je een lek pas als het water al door de isolatie is gelopen. Laat het dak vooraf nakijken, bijvoorbeeld met de Dak-APK, en laat gebroken pannen, los lood en de goten eerst herstellen. Isoleren doe ik zelf niet, dat doet een isolatiebedrijf. Wil je bij die verbouwing ook nieuwe folie en panlatten onder de pannen, dan kan dat als het dakvlak toch open gaat.` },
      { v: `Er zit een dikke laag mos op het dak van mijn boerderij. Moet dat eraf?`, a: `Een dikke laag mos houdt water vast, en bij vorst kan een oude pan dan barsten. Op een groot dak spoelt het mos ook naar de lange goot en zet het de uitloop dicht. Daken schoonmaken of ontmossen doe ik zelf niet. Wel maak ik de goten leeg en vervang ik pannen die door mos en vorst gebarsten zijn. Laat je het dak door iemand anders schoonmaken, vraag dan of die met lage druk werkt, want oude pannen zijn kwetsbaar.` },
    ],
  },
  {
    slug: `water-spat-over-dakgoot`,
    datum: `2026-11-16`,
    titel: `Water spat over je dakgoot heen?`,
    h1: `Regen spat over je dakgoot heen: waarom het water de goot mist en wat eraan te doen is`,
    metaTitle: `Water spat over de dakgoot heen? | Spoed Dak Service`,
    metaDescription: `Klettert het regenwater bij een bui over je goot heen, terwijl die bijna leeg is? Dan mist het water de goot. Zo zie je waarom, en hoe hij weer goed komt te hangen.`,
    intro: `Het regent hard en je ziet het water als een gordijn voor je dakgoot langs naar beneden vallen, terwijl er in de goot zelf bijna niets staat. Dan loopt de goot niet over, maar schiet het water eroverheen. Dat is iets anders dan een volle of een lekke goot, en het vraagt ook iets anders. Hieronder lees je hoe je het herkent, waar het meestal door komt en wat eraan te doen is.`,
    secties: [
      { kop: `Wordt het binnen nat?`, tekst: [
        `Valt het water alleen buiten op de stoep of het terras, dan is het meestal geen spoed. Wordt de muur binnen nat, bovenin of rond een kozijn, kijk dan op de <a href="/spoed/">spoedpagina</a> wat je meteen doet, en lees <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>. Ga niet bij regen of wind de ladder op.`,
      ] },
      { kop: `Eroverheen, overlopen of erachter?`, tekst: [
        `Kijk tijdens een flinke bui vanaf de overkant van de straat of vanuit de tuin. Schiet het water vanaf de pannen in een boog over de voorkant van de goot, terwijl er weinig water in de goot staat, dan mist het water de goot. Staat de goot vol en loopt het water over de rand, dan loopt hij over: lees dan <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>. Loopt het water tussen de goot en de muur naar beneden, kijk dan bij <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
      ] },
      { kop: `Waarom het water over de goot heen schiet`, tekst: [
        `Een steil dak. Hoe steiler het dak, hoe harder het water van de pannen af komt. Bij een stortbui krijgt het zoveel vaart dat het over een goot schiet die bij gewone regen prima werkt.`,
        `Gladde pannen of zonnepanelen. Van geglazuurde pannen en van zonnepanelen loopt het water sneller af dan van oude, ruwe pannen. Gebeurt het pas sinds er panelen op je dak liggen, dan kan dat de reden zijn.`,
        `De goot hangt te laag of te ver naar achteren. De onderste pannen moeten een stukje boven de goot uitsteken, zodat het water ongeveer in het midden van de goot valt. Is de goot na jaren gezakt, of is hij bij een vervanging lager gehangen, dan komt het water op of over de voorrand terecht.`,
        `De onderste pannen liggen niet goed. Steken ze te ver uit, of is er bij werk op het dak een pan verschoven, dan valt het water op die plek vlak bij de voorrand of eroverheen.`,
        `Een smalle goot onder een groot dakvlak. Een smalle goot heeft weinig ruimte om het water op te vangen. Onder een groot of steil dakvlak kan een bredere goot beter werken.`,
        `Een kil die op de goot uitkomt. Waar een kilgoot op de goot uitkomt, komt het water van twee dakvlakken op één plek samen. Daar schiet het vaak het eerst over de rand. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `Water dat bij elke bui over de goot heen valt, komt steeds op dezelfde plek terecht: op je terras, je kozijnen of tegen de gevel. Daar wordt de muur nat en groen, zie <a href="/kennisbank/groene-strepen-gevel-onder-dakgoot/">groene strepen op de gevel onder de dakgoot</a>. Bij vorst wordt het een gladde plek op de stoep of het terras. En spat het steeds tegen de muur, dan kan het vocht op den duur naar binnen trekken.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Buig de voorkant van de goot niet omhoog, en zet er geen plankje of strook op met kit of tape. Dan blijft er water in de goot staan, of loopt het juist achter de goot langs. Zet ook geen ladder tegen de goot om te kijken, en ga niet bij regen of wind naar boven.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me tijdens een bui een kort filmpje van de plek waar het water de goot mist, en een foto van de goot vanaf de straat. Ter plekke kijk ik hoe de onderste pannen liggen, hoe hoog en hoe ver de goot hangt en of de beugels nog goed zitten. Vaak is het genoeg om de goot op die plek een stukje hoger of verder naar voren te hangen, nog steeds op afschot naar de regenpijp, of om een verschoven pan weer goed te leggen.`,
        `Is de goot te smal voor het dak erboven, of is hij op, dan zeg ik eerlijk dat een andere goot beter is. Komen er zonnepanelen tot vlak boven de goot, dan kijk ik naar de goot en de pannen; aan de panelen zelf werkt je installateur. Je hoort vooraf wat het kost. Zie <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Het gebeurt alleen bij een stortbui. Is dat erg?`, a: `Bij een echte wolkbreuk kan dat bij veel goten gebeuren, en dan is het niet meteen een probleem. Gebeurt het bij elke flinke bui, steeds op dezelfde plek, of valt het water tegen je gevel of op een plek waar je loopt, dan is het de moeite waard om de goot te laten nakijken. Stuur me een filmpje van een bui, dan zeg ik eerlijk wat ik zie.` },
      { v: `Het gebeurt sinds er een nieuwe goot hangt. Ligt het aan de goot?`, a: `Vaak ligt het aan hoe hij hangt: een stukje te laag, te ver naar achteren of met de beugels op een andere plek dan bij de oude goot. Meld het eerst bij wie de goot heeft opgehangen en stuur foto's of een filmpje mee. Meer lees je in het artikel over lekkage sinds een nieuwe dakgoot.` },
      { v: `Helpt een bredere goot?`, a: `Soms. Onder een groot of steil dakvlak kan een bredere goot meer water opvangen. Vaak ligt het niet aan de breedte, maar aan hoe de goot hangt of hoe de onderste pannen liggen, en dan is opnieuw ophangen genoeg. Ik kijk eerst wat het bij jouw dak is, en je hoort vooraf wat het kost.` },
      { v: `Is water dat over de goot spat spoed?`, a: `Meestal niet, zolang het water buiten blijft. Wordt het binnen nat, bovenin de muur of rond een kozijn, of valt het water op een plek waar het bij vorst glad wordt, bel of app me dan met een foto.` },
    ],
  },
  {
    slug: `noodoverloop-plat-dak`,
    datum: `2026-11-16`,
    titel: `Water uit de noodoverloop van je platte dak?`,
    h1: `Er komt water uit de noodoverloop van je platte dak: wat dat betekent en wat je doet`,
    metaTitle: `Water uit noodoverloop plat dak: wat nu? | Spoed Dak Service`,
    metaDescription: `Spuit er bij regen water uit het buisje in de rand van je platte dak? Dan kan de gewone afvoer het niet aan of zit hij dicht. Zo zie je wat er speelt en wat je doet.`,
    intro: `Op veel platte daken zit in de rand, net iets hoger dan de gewone afvoer, een kort buisje of kokertje naar buiten: de noodoverloop, ook wel spuwer genoemd. Meestal komt daar nooit iets uit. Zie je bij regen ineens een straal water uit dat buisje komen, dan is dat een teken. Hieronder lees je wat het betekent, wat je zelf kunt nakijken en wanneer je beter even belt.`,
    secties: [
      { kop: `Lekt het binnen?`, tekst: [
        `Zet een emmer of bak onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat is een noodoverloop?`, tekst: [
        `Een plat dak watert af via een afvoer: een opening in het dak of in de rand, met daaronder een regenpijp. Raakt die afvoer verstopt, of valt er meer regen dan hij aankan, dan stijgt het water op het dak. De noodoverloop ligt net iets hoger dan de afvoer. Komt het water zo hoog, dan loopt het daar naar buiten, en niet over de rand of onder een deur door naar binnen. Het is dus een uitweg voor als het misgaat, geen gewone afvoer.`,
      ] },
      { kop: `Wat het betekent als er water uitkomt`, tekst: [
        `Een korte straal bij een echte wolkbreuk kan normaal zijn: dan kon de afvoer het water even niet bijhouden. Komt er bij een gewone bui water uit, of blijft het lang lopen, dan staat het water op je dak hoger dan zou moeten. Meestal zit de gewone afvoer dan dicht met blad, takjes, mos of grind, of zit de regenpijp eronder verstopt. Hoe dat werkt, lees je in <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
      ] },
      { kop: `Waarom je het niet laat zitten`, tekst: [
        `Water dat lang op een plat dak staat, drukt tegen de naden, de rand en de aansluiting tegen de muur. Daar vindt het eerder een kier dan op een dak dat droog valt. Bij een dakterras of een deur naar het platte dak kan het water bij een volle afvoer ook onder de dorpel door naar binnen lopen. En in de winter bevriest een plas die blijft staan. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a> en <a href="/kennisbank/dakterras-lekt/">dakterras lekt</a>.`,
      ] },
      { kop: `Zo kijk je het veilig na`, tekst: [
        `Kijk na de bui vanuit een raam boven naar het platte dak. Staat er nog water bij de afvoer, ligt er blad of grind voor de opening, of staat er een plas over een groot stuk van het dak? Kijk beneden of er water uit de regenpijp komt. Komt er weinig uit terwijl de noodoverloop loopt, dan zit het in de afvoer of de pijp. Ga niet zelf het dak op als het nat, glad of donker is, en niet op een dak waarvan je niet weet of het je houdt. Maak een foto en stuur die via WhatsApp. Welke foto's het meest helpen, lees je in <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Heeft je dak geen noodoverloop?`, tekst: [
        `Veel oudere platte daken op een aanbouw, garage of berging hebben er geen. Raakt de enige afvoer dan dicht, dan kan het water nergens anders heen en zoekt het een weg over de rand of naar binnen. Juist dan is het slim om de afvoer in de herfst leeg te laten maken, als het blad gevallen is. Of er een noodoverloop bij kan, hangt af van je dak en de rand. Vraag het gerust als ik er ben, dan hoor je eerlijk wat er kan.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de afvoer en de uitloop naar de regenpijp vrij en haal het blad, mos en losse grind rond de afvoer weg. Daarna kijk ik of het water weer goed wegloopt, en of de dakbedekking rond de afvoer en de noodoverloop nog dicht is. Zie ik daar een scheur of een naad die loslaat, dan hoor je dat, en wat het kost voordat er iets gebeurt. Zie <a href="/diensten/platte-daken/">platte daken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: platte daken`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Er komt bij elke bui een beetje water uit de noodoverloop. Is dat erg?`, a: `Bij elke bui is niet de bedoeling. Dan staat het water op je dak bij elke bui hoger dan de afvoer, en dat wijst meestal op een afvoer die half dicht zit of een regenpijp die verstopt is. Laat de afvoer leegmaken voordat het gaat vriezen. Stuur me een foto van het dak vanuit een raam boven en van de regenpijp, dan zeg ik eerlijk wat ik zie.` },
      { v: `Kan ik de noodoverloop dichtmaken? Het water spat tegen mijn gevel.`, a: `Nee, maak hem niet dicht. Hij zit er juist om te voorkomen dat het water bij een volle afvoer over de rand of naar binnen loopt. Het probleem zit bij de afvoer, niet bij de overloop. Zorg dat de gewone afvoer vrij is, dan komt er uit de overloop weer bijna nooit iets.` },
      { v: `Het lekt binnen sinds de noodoverloop liep. Hoort dat bij elkaar?`, a: `Dat kan. Stond het water lang hoog op het dak, dan kan het bij een naad, de rand of de aansluiting tegen de muur een weg naar binnen hebben gevonden. Zet een bak onder de druppel, maak foto's van de natte plek en van het dak vanuit een raam boven, en stuur die via WhatsApp. Is het nu nat binnen, kijk dan ook op de spoedpagina wat je meteen kunt doen.` },
    ],
  },
  {
    slug: `kraaien-mos-van-dak`,
    datum: `2026-11-16`,
    titel: `Trekken kraaien mos van je dak?`,
    h1: `Kraaien of kauwen trekken mos van je dak: is dat erg, en wat doe je ermee?`,
    metaTitle: `Kraaien trekken mos van je dak: erg? | Spoed Dak Service`,
    metaDescription: `Liggen er plukken mos op je stoep, terras of in de goot, en zie je kraaien of kauwen op je dak? Waarom ze dat doen, wat het voor je dak en goot betekent en wat je doet.`,
    intro: `Je stapt 's ochtends naar buiten en de stoep, de oprit of het terras ligt vol plukken mos. Op het dak zie je kauwen of kraaien die met hun snavel het mos tussen de pannen weg trekken. Dat ziet er rommelig uit, en je vraagt je af of je dak er schade van krijgt. Hieronder lees je waarom ze het doen, wat het voor je dak en je goot betekent en wat je wel en niet doet.`,
    secties: [
      { kop: `Waarom ze het doen`, tekst: [
        `Kauwen en kraaien zoeken in en onder het mos naar insecten, larven en wormpjes. Vooral in de herfst, de winter en het vroege voorjaar, als er op de grond minder te vinden is, draaien ze de mosplukken op je dak om. Wat ze niet nodig hebben, gooien ze weg. Dat rolt van het dak naar beneden of blijft in de goot liggen.`,
      ] },
      { kop: `Is het erg voor je dak?`, tekst: [
        `Voor de pannen zelf meestal niet. De vogels trekken het mos los en laten de pannen in de regel liggen. Het zegt wel iets: op je dak groeit zoveel mos dat er genoeg te halen is. Mos houdt water vast, en op oudere pannen kan dat bij vorst schade geven. Wat je daaraan doet, lees je in <a href="/kennisbank/mos-op-dak-verwijderen/">mos op je dak</a>. Zie je na zo'n ochtend toch een pan die scheef ligt of omhoog staat, kijk dan bij <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a>.`,
      ] },
      { kop: `Het grootste risico: je goot`, tekst: [
        `De plukken mos die niet naar beneden vallen, blijven in de goot liggen. Daar worden ze samen met blad een natte prop, vaak precies bij de uitloop naar de regenpijp. Bij de volgende flinke bui kan het water dan niet weg en loopt de goot over, of loopt het water achter de goot langs de muur. Zie <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp</a>. Op een plat dak spoelt het mos naar de afvoer, zie <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Ga niet zelf het dak op om het mos weg te halen of de vogels weg te jagen, en zet geen ladder tegen de goot om erin te kijken. Doe niets om de vogels kwaad te doen: wilde vogels zijn in Nederland beschermd. En spuit het dak niet met een hogedrukreiniger schoon, want dat beschadigt de pannen.`,
      ] },
      { kop: `Wat je wel kunt doen`, tekst: [
        `Veeg de plukken van je stoep en terras en gooi ze bij het gft. Kijk vanaf de straat of de goot vol ligt. Zie je mos of gras boven de rand uitsteken, of loopt het water bij een bui over de rand, laat hem dan leegmaken. Liggen er veel plukken in je tuin, dan zit er vaak ook veel in de goot. Hoe vaak je goot leeg moet, lees je in <a href="/kennisbank/hoe-vaak-dakgoot-reinigen/">hoe vaak dakgoot reinigen</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de goot van begin tot eind leeg, ook de uitloop naar de regenpijp, en de troep neem ik mee. Terwijl ik boven ben, kijk ik of er pannen scheef liggen of gebarsten zijn, en of de nok nog vast ligt. Zie ik iets, dan hoor je dat, en wat het kost voordat ik iets doe. Daken ontmossen doe ik zelf niet. Stuur me een foto van je dak en je goot vanaf de straat via WhatsApp. Zie <a href="/diensten/goten-reinigen/">dakgoot schoonmaken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot schoonmaken`, href: `/diensten/goten-reinigen/` },
    faq: [
      { v: `Komen de kraaien terug?`, a: `Zolang er mos op je dak groeit, vaak wel, want daar vinden ze hun eten. Het gebeurt vooral in de herfst, de winter en het vroege voorjaar. Is het mos weg, dan valt er voor ze weinig meer te halen.` },
      { v: `Kunnen kraaien mijn dakpannen kapotmaken?`, a: `In de regel niet. Ze trekken het mos los en laten de pannen liggen. Zie je na zo'n ochtend toch een pan die scheef ligt of een stuk pan op de stoep, stuur me dan een foto van je dak vanaf de straat. Dan kijk ik of er iets gemaakt moet worden.` },
      { v: `Helpt vogelwering tegen kraaien op mijn dak?`, a: `Vogelwering onder de onderste rij pannen houdt vogels tegen die onder je pannen willen nestelen, zoals mussen en spreeuwen. Kraaien en kauwen die bovenop het dak in het mos zoeken, houd je daar niet mee weg. Wat wel helpt, is zorgen dat je goot en de uitloop vrij blijven, zodat het mos dat ze losmaken het water niet tegenhoudt.` },
    ],
  },
  {
    slug: `mastgoot-lekt`,
    datum: `2026-11-16`,
    titel: `Mastgoot lekt: wat nu?`,
    h1: `Je mastgoot lekt: de houten goot op klossen voor de gevel, en wat eraan te doen is`,
    metaTitle: `Mastgoot lekt: zink, naad of hout? | Spoed Dak Service`,
    metaDescription: `Een mastgoot is een houten goot op klossen voor de gevel, met zink erin. Lekt hij, dan wordt vaak eerst het hout nat. Zo zie je waar het zit en wat je doet.`,
    intro: `Bij veel oudere huizen hangt de goot niet aan beugels, maar ligt hij als een houten bak op klossen die onder de rand van het dak uitsteken. Dat heet een mastgoot. Aan de binnenkant zit meestal zink. Lekt dat zink, dan merk je het vaak niet aan een druppel, maar aan het hout: bladderende verf, donkere plekken of een goot die zakt. Hieronder lees je hoe je een mastgoot herkent, waar hij meestal lekt en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het binnen?`, tekst: [
        `Komt er water binnen, bovenin de muur of langs het plafond van de kamer aan de straatkant, zet dan een emmer of handdoek neer en haal spullen weg. Zet in de meterkast de groep uit als het bij een lamp of stopcontact nat wordt. Zet geen ladder tegen de goot, want een mastgoot met zacht hout kan dat niet hebben. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Mastgoot, bakgoot of hanggoot?`, tekst: [
        `Een hanggoot hangt aan beugels onder de onderste rij pannen. Een bakgoot ligt in de rand van het dak, achter een houten lijst, en die zie je van buiten bijna niet. Een mastgoot zit daartussenin: een houten goot die voor de gevel uitsteekt en op houten klossen rust. Aan de binnenkant zit meestal zink, soms dakleer. Vanaf de straat zie je hem als een brede houten rand onder het dak, vaak in de kleur van de kozijnen geschilderd. Twijfel je wat je hebt, stuur dan een foto van de dakrand vanaf de overkant van de straat. Zie ook <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Waar een mastgoot meestal lekt`, tekst: [
        `Bij een naad of hoek in het zink. Zink zet uit als het warm is en krimpt als het koud is, en na veel jaren laat een soldeernaad los. Zie <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `Bij de uitloop naar de regenpijp. Daar blijft blad hangen, het water komt hoger te staan en vindt een weg langs de aansluiting.`,
        `Op een dunne plek in de bodem. Waar jaren blad en water in de goot hebben gelegen, wordt het zink dun en komen er kleine gaatjes in.`,
        `Waar de goot zakt. Wordt een klos of de bodem van de houten bak zacht, dan zakt de goot een stukje. Daar blijft na elke bui water staan, en daar slijt het zink het snelst.`,
      ] },
      { kop: `Waarom het hout erbij hoort`, tekst: [
        `Bij een mastgoot draagt het hout de goot. Loopt er water achter het zink, dan trekt het in de houten bak en de klossen. Dat zie je aan verf die bladdert, donkere of groene plekken onder de goot en hout dat zacht aanvoelt. Hoe langer het lek blijft zitten, hoe meer hout er nat wordt. Een nieuw stuk zink in een rotte bak houdt het niet lang. Daarom kijk ik bij een lekkende mastgoot ook naar het hout eronder.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Smeer geen kit of teer over een lekke naad. Op nat of vuil zink hecht het slecht, en het moet er weer helemaal af voordat de naad gesoldeerd kan worden. Schilder ook niet over hout dat nat of zacht is, want dan sluit je het vocht in. En ga niet op een ladder tegen de goot staan om te kijken.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de goot leeg en kijk over de hele lengte naar het zink, de naden, de uitloop en het hout. Lekt het op één naad of hoek en is het zink verder stevig, dan soldeer ik die naad opnieuw. Lekt het zink op meer plekken een beetje, maar is de goot nog stevig, dan kan de binnenkant gecoat worden. Is het zink op, dan zeg ik eerlijk dat er nieuw zink in moet. Is het hout van de bak of een klos zacht, dan hoor je dat van me voordat er iets gebeurt, want dat moet eerst goed zijn. Je hoort vooraf wat het kost. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/dakgoot-coaten/">dakgoot van binnen coaten</a>.`,
      ] },
      { kop: `Monument of beschermd stadsgezicht`, tekst: [
        `Een mastgoot hoort bij het uiterlijk van veel oude huizen. Staat je huis op de monumentenlijst of in een beschermd stadsgezicht, vraag dan bij de gemeente na wat mag voordat de goot anders wordt, bijvoorbeeld een kunststof goot in plaats van de houten mastgoot. Herstel met hetzelfde materiaal valt meestal onder gewoon onderhoud. Zie ook <a href="/kennisbank/dak-monument-repareren/">je dak repareren in een monument</a> en <a href="/kennisbank/jaren-30-huis-dak-lekt/">het dak van een jaren 30-huis</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot solderen`, href: `/diensten/dakgoot-solderen/` },
    faq: [
      { v: `Hoe weet ik of ik een mastgoot heb?`, a: `Kijk vanaf de overkant van de straat naar de rand van je dak. Zie je onder de pannen een brede houten rand die een stukje voor de gevel uitsteekt en op houten blokjes rust, dan is het meestal een mastgoot. Hangt er een ronde of hoekige goot aan beugels, dan is het een hanggoot. Zie je bijna geen goot, alleen een houten lijst, dan ligt hij vaak als bakgoot in de dakrand. Stuur me gerust een foto.` },
      { v: `Moet een lekkende mastgoot er helemaal uit?`, a: `Meestal niet. Vaak is één naad opnieuw solderen genoeg, of kan de binnenkant gecoat worden als het zink nog stevig is. Pas als het zink op veel plekken op is of het hout van de bak zacht is, is er meer nodig. Dat zeg ik eerlijk als ik heb gekeken, en je hoort vooraf wat het kost.` },
      { v: `De verf van mijn mastgoot bladdert. Lekt hij dan?`, a: `Niet altijd, maar het is wel een reden om te laten kijken. Bladdert de verf vooral onder een naad, een hoek of bij de uitloop, of is het hout daar donker, dan loopt er vaak water achter het zink. Laat de goot eerst nakijken en zo nodig herstellen, en laat daarna de schilder komen. Anders bladdert de nieuwe verf er zo weer af.` },
    ],
  },
  {
    slug: `dakgoot-lekt-in-de-hoek`,
    datum: `2026-11-17`,
    titel: `Dakgoot lekt in de hoek?`,
    h1: `Dakgoot lekt in de hoek: waarom juist daar, en wat eraan te doen is`,
    metaTitle: `Dakgoot lekt in de hoek: wat nu? | Spoed Dak Service`,
    metaDescription: `Druppelt je dakgoot op de hoek van het huis, of is het binnen nat in de hoek van de kamer? Waarom een goot juist in de hoek lekt en hoe hij weer dicht komt.`,
    intro: `Een dakgoot lekt vaak niet in het midden, maar precies op de hoek van het huis. Daar komen twee stukken goot samen, en bij een binnenhoek komt daar ook het water van twee dakvlakken tegelijk naar beneden. Je ziet het aan een druppel die na een bui op de hoek blijft vallen, aan een donkere streep op de hoek van de gevel of aan een natte plek binnen, in de hoek van de kamer vlak onder het plafond. Hieronder lees je waarom een goot juist daar lekt, wat je zelf doet en hoe ik hem weer dichtmaak.`,
    secties: [
      { kop: `Is het binnen nat?`, tekst: [
        `Wordt het binnen nat, in de hoek van de kamer of op het plafond langs de buitenmuur, zet dan een bak of handdoek neer en schuif kasten een stukje van de muur. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf met een ladder bij de goot staan, zeker niet als het nat is of waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Buitenhoek of binnenhoek`, tekst: [
        `Een buitenhoek zit op de hoek van je huis, waar de goot aan de voorkant overgaat in de goot langs de zijkant. Dat zie je vaak bij een hoekhuis, een vrijstaand huis of een twee-onder-een-kap.`,
        `Een binnenhoek zit waar twee daken in een hoek tegen elkaar komen, bijvoorbeeld bij een huis in L-vorm of waar een aanbouw met een eigen dak tegen het huis staat. Daar komt het water van twee dakvlakken op één punt in de goot samen. Ligt er daarboven een kil, dan valt daar bij een bui nog meer water. Zie ook <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>.`,
      ] },
      { kop: `Waarom juist de hoek lekt`, tekst: [
        `Bij een zinken goot is de hoek gemaakt van twee stukken zink die aan elkaar zijn gesoldeerd. Zink zet uit als het warm wordt en krimpt als het koud is, en in een hoek trekt het daarbij in twee richtingen aan dezelfde naad. Na veel jaren laat zo'n soldeernaad los of komt er een haarscheurtje naast. Hoe je een lekkende zinken goot verder herkent, lees je in <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `Bij een kunststof goot zit op de hoek een los hoekstuk, waar de twee stukken goot in steken. Dat is gelijmd of heeft een rubber. Na jaren droogt het rubber uit of laat de lijm los, en bij vorst kan een stuk goot een eindje uit het hoekstuk schuiven. Zie ook <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a>.`,
        `De hoek is ook vaak de plek waar een goot het eerst gaat hangen. Mist er vlak bij de hoek een beugel, of is het hout erachter zacht, dan zakt de hoek een stukje. Daar blijft na elke bui water staan, en waar water blijft staan, gaat een naad het eerst lekken. Bij een houten goot op klossen kijk je dus ook naar het hout, zie <a href="/kennisbank/mastgoot-lekt/">mastgoot lekt</a>.`,
      ] },
      { kop: `Overloop of echt lek?`, tekst: [
        `Loopt het water bij een flinke bui over de rand van de hoek, terwijl het na de bui droog is? Dan kan de goot daar het water niet snel genoeg kwijt, vaak omdat er blad ligt of omdat de regenpijp ver van de hoek zit. Druppelt het ook nog een hele tijd na de bui op precies dezelfde plek, of zie je onder de hoek een donkere of groene streep op de gevel, dan is de hoek zelf lek. Kijk tijdens een bui vanaf de straat of uit een raam boven, en maak een foto of een kort filmpje. Lees ook <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Smeer geen kit over een lekke hoek. Op een natte of vuile goot hecht het slecht, het houdt meestal niet lang, en bij een zinken goot moet het er weer helemaal af voordat de hoek gesoldeerd kan worden. Zet ook geen ladder tegen de hoek van de goot: daar is de goot het zwakst, en een kunststof hoekstuk kan breken. Wat je tot de reparatie wel kunt doen, lees je in <a href="/kennisbank/lekkende-dakgoot-tijdelijk-oplossen/">lekkende dakgoot tijdelijk oplossen</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de hoek eerst leeg en droog, en kijk dan wat er lek is. Een zinken hoek met een losse naad soldeer ik opnieuw. Is het zink rond de hoek op meer plekken dun, maar hangt de goot nog goed, dan kan ik hem van binnen coaten. Is het zink op, dan vervang ik de hoek of dat stuk goot. Bij een kunststof goot vervang ik het hoekstuk of het rubber. Hangt de hoek te laag, dan zet ik hem eerst weer op afschot, met een extra beugel als dat nodig is. Solderen en coaten kan alleen op een droge goot, dus bij regen of vorst wacht ik op een droge dag. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er lek is: een naad solderen, een hoekstuk vervangen of een stuk goot vernieuwen. Stuur een foto van de hoek vanaf de straat en, als het binnen nat is, ook van de natte plek. Dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot solderen`, href: `/diensten/dakgoot-solderen/` },
    faq: [
      { v: `Waarom lekt mijn dakgoot alleen op de hoek?`, a: `Omdat daar twee stukken goot aan elkaar zitten. Bij zink is dat een soldeernaad, bij kunststof een hoekstuk met lijm of een rubber. Die verbinding krijgt het meest te verduren van warmte, kou en vorst, en een hoek zakt ook vaak als eerste een stukje. Vaak hoeft alleen de hoek gemaakt te worden en kan de rest van de goot blijven.` },
      { v: `Het is nat in de hoek van mijn slaapkamer, vlak onder het plafond. Kan dat van de goot komen?`, a: `Ja, zeker als er buiten op die hoek van het huis een hoek van de goot zit. Lekt die, dan loopt het water langs de muur naar binnen en zie je het binnen precies in de hoek. Het kan ook van de onderste pannen of de dakrand komen. Kijk tijdens een bui buiten naar die hoek, en stuur me een foto van binnen en van buiten. Meer lees je in het artikel over een natte plek bovenin de muur.` },
      { v: `Moet de hele goot eruit als de hoek lekt?`, a: `Meestal niet. Is de rest van de goot nog stevig, dan soldeer ik de hoek opnieuw of vervang ik alleen het hoekstuk. Lekt de goot ook op andere plekken of is het zink overal dun, dan zeg ik eerlijk dat een nieuwe goot slimmer is. Je hoort vooraf wat het kost.` },
      { v: `Is een lekkende hoek van de goot spoed?`, a: `Meestal niet, zolang het buiten druppelt. Laat het wel maken voor de winter, want water dat in de hoek blijft staan, bevriest en drukt de naad verder open. Komt het water binnen of hangt de hoek los boven de stoep, dan wel: zet een bak neer en bel of app me met een foto.` },
    ],
  },
  {
    slug: `lekkage-meterkast-bij-regen`,
    datum: `2026-11-17`,
    titel: `Water in je meterkast als het regent?`,
    h1: `Water in je meterkast als het regent: komt het van het dak, de goot of van onderen?`,
    metaTitle: `Water in de meterkast bij regen? | Spoed Dak Service`,
    metaDescription: `Nat in je meterkast na een bui? Eerst veilig blijven, dan uitzoeken waar het vandaan komt: het afdakje boven de voordeur, de goot, het dak of van onderen.`,
    intro: `Na een flinke bui staat er een plasje onder de meters, loopt er een natte streep langs de kabels of druppelt het bij de groepenkast. Dat wil je snel opgelost hebben, want in de meterkast komt de stroom van je hele huis samen. Het goede nieuws: het water komt meestal langs een vaste route binnen, en die is goed te vinden. Hieronder lees je wat je eerst doet, welke routes er zijn en wie welk deel oplost.`,
    secties: [
      { kop: `Eerst veilig`, tekst: [
        `Raak in een natte meterkast niets aan met natte handen en ga niet in een plas staan. Kun je de hoofdschakelaar bereiken zonder natte onderdelen aan te raken, zet hem dan uit. Lukt dat niet veilig, ruik je een brandlucht of zie je vonken, ga dan weg bij de kast en bel je netbeheerder. Het storingsnummer staat vaak in de meterkast of op de site van je netbeheerder. Is er direct gevaar, bel dan 112.`,
        `Leg daarna een handdoek neer of zet een bak onder de druppel, en laat een installateur de groepenkast nakijken voordat de stroom weer aangaat. Wat je verder meteen doet bij een lek, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Boven, langs de kabels of op de vloer?`, tekst: [
        `Kijk met een zaklamp waar het water het eerst te zien is. Is de muur bovenin nat, of loopt er een streep langs de kabels of buizen naar beneden, dan komt het van boven. Is alleen de vloer nat, terwijl de muren en de kabels erboven droog zijn, dan komt het eerder van onderen. Maak een foto van de natte plek en vergelijk die na de volgende bui.`,
        `Let ook op wanneer het nat wordt. Alleen tijdens of vlak na regen wijst naar buiten. Ook na een paar dagen zonder regen wijst eerder naar een leiding, bijvoorbeeld bij de watermeter of een afvoer van de wc of badkamer erboven. Dan heb je een loodgieter nodig. Zie <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">lekkage: dakdekker of loodgieter?</a>`,
      ] },
      { kop: `Het afdakje boven de voordeur`, tekst: [
        `In veel rijtjeshuizen en twee-onder-een-kappers zit de meterkast in de hal, vlak naast de voordeur. Boven die deur zit vaak een afdakje of luifel, en waar dat dakje tegen de gevel komt, ligt een strook lood of zink die het water van de muur over het dakje leidt. Komt die strook los, scheurt hij in een hoek of is de bedekking van het dakje zelf kapot, dan loopt het water de muur in. Het zakt naar beneden en komt vaak juist in de meterkast naar buiten, omdat daar kabels en buizen door de muur gaan.`,
        `Zie je ook bladderende verf boven de voordeur, of een donkere streep op de gevel boven het dakje, dan is dit een goede kandidaat. Lees ook <a href="/kennisbank/erker-lekt/">erker of luifel lekt</a>.`,
      ] },
      { kop: `De goot en de regenpijp aan de voorkant`, tekst: [
        `Loopt de goot aan de voorkant over, of lekt hij bij een naad of de uitloop, dan komt er bij een bui veel water tegen de gevel boven je voordeur. Dat kan via de muur of het kozijn naar binnen trekken. Zit de regenpijp naast de voordeur, of loopt hij binnen door een koker in de hal, kijk dan ook naar de verbindingen van die pijp. Zie <a href="/kennisbank/dakgoot-lekt/">dakgoot lekt</a> en <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a>.`,
      ] },
      { kop: `Vanaf het dak, langs een pijp of kabel`, tekst: [
        `Soms loopt er vanaf zolder iets naar beneden langs of door de meterkast: een ontluchtingspijp, of de kabel van de omvormer van je zonnepanelen naar de groepenkast. Komt er boven water binnen waar zo'n pijp of kabel door het dak gaat, dan kan het daar helemaal langs naar beneden lopen. Kijk op zolder of de pijp of de kabel daar ook nat is. Zie <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a> en <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a>.`,
      ] },
      { kop: `Van onderen: de kabels uit de straat`, tekst: [
        `De kabels en leidingen van de straat komen meestal onder in de meterkast binnen, door buizen in de vloer of de fundering. Na veel regen, als de grond nat is, kan daar water langs naar binnen komen. Je ziet dat aan een natte vloer of een natte onderkant van de kast, terwijl alles erboven droog is. Dat is geen werk voor een dakdekker. Meld het bij je netbeheerder of laat een installateur kijken.`,
      ] },
      { kop: `Condens op de koude leidingen`, tekst: [
        `Op warme, vochtige dagen kan er condens op de koude waterleiding en de watermeter staan. Dat zijn druppels op de pijp zelf, ook als het niet regent. Dat is geen lek en heeft niets met je dak te maken.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me via WhatsApp een foto van de natte plek in de meterkast, een foto van je voorgevel vanaf de overkant van de straat, met het afdakje en de goot erop, en zeg erbij of het alleen bij regen nat wordt. Ter plekke kijk ik naar de strook langs de gevel, het afdakje, de goot en, als het nodig is, op zolder en op het dak. Zit het in het lood, het dakje of de goot, dan maak ik dat dicht. Zit het in de leidingen, de groepenkast of de kabels uit de straat, dan zeg ik dat eerlijk, zodat je de goede vakman belt. Aan de stroom zelf kom ik niet. Je hoort vooraf wat het kost. Zie <a href="/kennisbank/water-uit-stopcontact-bij-regen/">water uit je stopcontact als het regent</a> als het ook bij een stopcontact nat is.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Is water in de meterkast gevaarlijk?`, a: `Het kan gevaarlijk zijn, want in de meterkast komt de stroom van je hele huis samen. Raak niets aan met natte handen, ga niet in het water staan en zet de hoofdschakelaar alleen uit als je erbij kunt zonder natte onderdelen aan te raken. Bel bij twijfel je netbeheerder en bij direct gevaar 112. Laat een installateur de kast nakijken voordat de stroom weer aangaat.` },
      { v: `Wie bel ik: de netbeheerder, een installateur of een dakdekker?`, a: `Vaak meer dan één. Een installateur voor de veiligheid en de groepenkast, en je netbeheerder bij gevaar of als het water van onderen langs de kabels uit de straat komt. Komt het water van boven, langs de muur of de kabels, en alleen als het regent, dan zit de oorzaak vaak in het afdakje boven de voordeur, de goot of het dak. Daarvoor kun je mij bellen of appen.` },
      { v: `Kan het condens zijn?`, a: `Ja. Zie je druppels op de koude waterleiding of de watermeter, ook als het niet heeft geregend, dan is het meestal condens en geen lek. Wordt het alleen nat bij regen, of loopt er van boven een natte streep langs de muur of de kabels, dan komt het water eerder van buiten.` },
      { v: `Is water in de meterkast spoed?`, a: `Voor de stroom wel: zorg eerst dat het veilig is. Komt het water van boven en wordt het bij elke bui weer nat, stuur me dan meteen een foto. Is het een vochtige plek onderin de muur, ver van de groepenkast, die na de bui weer opdroogt, dan kan de reparatie vaak een paar dagen wachten.` },
    ],
  },
  {
    slug: `dak-jaren-90-huis-lekt`,
    datum: `2026-11-17`,
    titel: `Lekt het dak van je huis uit de jaren 90?`,
    h1: `Huis uit de jaren '80 of '90: waar het dak na al die jaren gaat lekken`,
    metaTitle: `Huis uit de jaren 90: waar lekt het dak? | Spoed Dak Service`,
    metaDescription: `Een huis uit de jaren '80 of '90 heeft vaak dakplaten, een droge nok, kunststof goten en meer pijpen door het dak. Zo zie je waar het na al die jaren lekt.`,
    intro: `Huizen uit de jaren '80 en '90 zijn anders gebouwd dan de rijtjes van daarvoor. Onder de pannen liggen vaak grote dakplaten met isolatie, de nok ligt steeds vaker droog met klemmen in plaats van in specie, en er gaan meer pijpen door het dak, voor de cv-ketel, het riool en de ventilatie. De pannen zelf zijn op zulke daken vaak nog goed. Een lek zit dan meestal bij een aansluiting. Hieronder lees je waar, hoe je het herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Druppelt het nu?`, tekst: [
        `Vang het water op met een emmer, schuif spullen opzij en zet in de meterkast de groep van die kamer uit als het water bij een lamp of stopcontact komt. Blijf zelf van het dak af, ook als het droog lijkt. Op de <a href="/spoed/">spoedpagina</a> lees je wat je verder meteen kunt doen.`,
      ] },
      { kop: `Hoe zo'n dak in elkaar zit`, tekst: [
        `Bij veel huizen uit die tijd liggen de pannen op latten op grote dakplaten. Zo'n plaat heeft isolatie in het midden en is aan de binnenkant afgewerkt, dus op zolder zie je vaak geen losse planken of folie, maar een glad vlak tussen de balken. Water dat onder de pannen komt, loopt over de bovenkant van die platen naar beneden en komt vaak pas binnen bij een naad tussen twee platen, of helemaal onderaan bij de goot. De natte plek zit dan een eind van het lek af.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Pijpen door het dak. Op een huis uit die tijd steken er vaak meerdere door de pannen, zoals de ontluchting van het riool, de afvoer van de cv-ketel en de afvoer van de mechanische ventilatie. Om elke pijp zit op het dak een kraag op een speciale pan. Na jaren zon en vorst is het rubber daarvan vaak hard of gescheurd. Zie <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
        `Het dakraam. Veel van deze huizen hebben een of meer dakramen in het schuine dak. Lekt het onder of naast het raam, dan zit het vaak in het gootstuk of in de aansluiting op de pannen erboven, en minder vaak in het raam zelf. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `De droge nok. Ligt je nok niet in specie, dan zit er onder de vorsten een strook die de nok dichthoudt, en elke vorst zit met een klem vast. Raakt bij een storm een klem los of scheurt die strook, dan kan regen met wind eronder komen. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `De kunststof goot. Goten uit die tijd zijn vaak van kunststof, met hoekstukken en verbindingen die gelijmd zijn of een rubber hebben. Na zoveel jaren laat zo'n verbinding los. Zie <a href="/kennisbank/kunststof-dakgoot-lekt/">kunststof dakgoot lekt</a> en <a href="/kennisbank/dakgoot-lekt-in-de-hoek/">dakgoot lekt in de hoek</a>.`,
        `Wat er later bij kwam. Zonnepanelen, de kabel naar de omvormer of de leidingen van een airco of warmtepomp gaan soms onder een pan door of door een pan die daarvoor is aangepast. Ligt die pan niet goed, dan loopt het water erlangs. Zie <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a> en <a href="/kennisbank/lekkage-warmtepomp-of-airco/">lekkage sinds de warmtepomp of airco</a>.`,
      ] },
      { kop: `Lek of condens?`, tekst: [
        `Huizen uit die tijd zijn beter geïsoleerd en dichter dan oudere huizen. Staat de ventilatie laag of uit, dan blijft er meer vocht binnen, en dat kan op koude dagen neerslaan op een koude plek: bij een naad tussen de dakplaten, op een koude pijp of onder een dakraam. Wordt het nat op koude ochtenden, ook als het dagen droog is, dan is het eerder condens. Wordt het alleen nat bij regen, of bij wind uit dezelfde hoek, dan is het eerder een lek. Lees <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `Woon je in Maaspoort of Empel in Den Bosch, in de Reeshof in Tilburg of in de Haagse Beemden in Breda, dan staat je huis in een wijk die grotendeels vanaf de jaren '80 is gebouwd. Hoe ik een lek daar aanpak, lees je bij <a href="/werkgebied/den-bosch/daklekkage/">daklekkage in Den Bosch</a>, <a href="/werkgebied/tilburg/daklekkage/">daklekkage in Tilburg</a> en <a href="/werkgebied/breda/daklekkage/">daklekkage in Breda</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het water binnenkomt en volg het naar boven, en daarna buiten naar de pijp, het raam, de nok of de goot erboven. Een uitgedroogde kraag vervang ik, een losse vorst zet ik weer vast, een kunststof verbinding vernieuw ik en de aansluiting rond een dakraam maak ik weer dicht. Meestal blijft de rest van het dak gewoon liggen. Zie <a href="/diensten/dakreparatie/">spoed dakreparatie</a> en <a href="/diensten/dakdoorvoer/">dakdoorvoer plaatsen of herstellen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er lek is: een kraag, een vorst, een verbinding in de goot of de aansluiting van een dakraam. Stuur een foto van de natte plek en van je dak vanaf de straat, dan hoor je vooraf wat het in jouw geval kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: spoed dakreparatie`, href: `/diensten/dakreparatie/` },
    faq: [
      { v: `Mijn huis is nog niet zo oud. Moet het dak er dan al af?`, a: `Meestal niet. Op daken uit de jaren '80 en '90 zijn de pannen vaak nog goed. Wat na zoveel jaren op raakt, zijn de dingen eromheen: het rubber rond de pijpen, de aansluiting van een dakraam en de verbindingen van een kunststof goot. Die vervang ik los. Stuur me een foto van je dak vanaf de straat, dan zeg ik eerlijk wat ik zie.` },
      { v: `Hoe weet ik of mijn nok droog ligt of in specie?`, a: `Kijk vanaf de straat met de zoom van je telefoon naar de nok. Zie je tussen de vorsten en de pannen grijze specie, dan ligt hij in specie. Zie je daar een strook in een kleur die bij de pannen past, en geen specie, dan ligt hij droog met klemmen. Ligt er brokkelige specie in de goot, dan is het een nok in specie die los begint te raken.` },
      { v: `Het druppelt alleen op koude ochtenden bij een pijp op zolder. Is dat een lek?`, a: `Vaak niet. Een pijp van de ventilatie of het riool die over een koude zolder loopt, wordt zelf koud, en vocht uit huis slaat erop neer. Dat zie je ook als het droog is. Druppelt het alleen bij regen en begint de natte plek bovenaan bij het dak, dan is het eerder de kraag rond de pijp. Twijfel je, stuur me dan een foto.` },
    ],
  },
  {
    slug: `dak-lekt-na-dagen-regen`,
    datum: `2026-11-17`,
    titel: `Lekt je dak pas na dagen regen?`,
    h1: `Je dak lekt pas na een paar dagen regen: waar het water dan meestal vandaan komt`,
    metaTitle: `Dak lekt na dagen regen: waar zit het? | Spoed Dak Service`,
    metaDescription: `Blijft het droog bij een korte bui, maar wordt het nat na dagen regen? Dan trekt het water vaak langzaam naar binnen. Zo vind je waar het zit en wat je doet.`,
    intro: `Bij een korte bui blijft alles droog. Maar na een week met veel regen zie je ineens een natte plek op het plafond, op zolder of bovenin de muur. Dat is verwarrend, want het dak lijkt dan niet echt lek. Meestal komt het water er bij zo'n lange natte periode niet door een open kier. Het trekt langzaam ergens doorheen, of iets loopt pas na dagen over. Hieronder lees je waar dat meestal zit, hoe je het zelf nagaat en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op, zeker niet als het nat is of waait. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom pas na dagen?`, tekst: [
        `Een korte bui is voorbij voordat het water ergens doorheen kan trekken. Bij dagen achter elkaar regen krijgen pannen, stenen en hout geen tijd om op te drogen. Dan raakt het materiaal zo nat dat het water er langzaam doorheen komt, of loopt een goot of afvoer die al half vol lag op een gegeven moment toch over. Dat is iets anders dan een lek dat alleen bij een stortbui of alleen bij harde wind optreedt. Die lees je bij <a href="/kennisbank/dak-lekt-bij-hevige-regen/">dak lekt bij een stortbui</a> en <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
      ] },
      { kop: `Oude pannen die water opnemen`, tekst: [
        `Pannen die al heel lang op het dak liggen, nemen na jaren meer water op. Bij een korte bui merk je daar niets van. Na dagen regen raken ze verzadigd, en dan komt er aan de onderkant vocht door. Op zolder zie je dan donkere plekken op het hout of druppels onder de pannen, vaak verspreid over een groter stuk en niet op één punt. Hoe je ziet of je pannen water opnemen, lees je bij <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
      ] },
      { kop: `De schoorsteen`, tekst: [
        `Een schoorsteen staat helemaal in de regen. Na dagen regen kunnen de stenen en de voegen zo nat worden dat het water er binnen doorheen komt, ook als het lood rond de voet nog goed is. Je ziet dat als een natte of bruine plek op de schoorsteen binnen, of op zolder langs het metselwerk. Lekt het daar ook bij een korte bui met wind, dan zit het vaker in het lood. Meer lees je bij <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.`,
      ] },
      { kop: `Een goot of kilgoot die langzaam volloopt`, tekst: [
        `Ligt er blad in de goot of in de kilgoot, de hoek waar twee daken samenkomen, dan kan het water bij een korte bui nog net weg. Bij dagen regen blijft het steeds hoger staan, en op een gegeven moment loopt het over de rand onder de pannen of achter de goot langs de muur. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a> en <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>.`,
      ] },
      { kop: `Een plas op het platte dak`, tekst: [
        `Op een plat dak blijft na een lange natte periode vaak een plas staan, zeker als de afvoer half dicht zit. Staat die plas dagen tegen een naad of de rand, dan vindt het water daar een weg naar binnen. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a>.`,
      ] },
      { kop: `Of is het de muur?`, tekst: [
        `Zit de natte plek bovenin een buitenmuur, vlak onder het plafond, dan kan ook de gevel zelf het water na dagen regen doorlaten. Het lijkt dan op een daklek. Hoe je het verschil ziet, lees je bij <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>. Zit het in de stenen of de voegen, dan zeg ik dat eerlijk, want dat is werk voor een metselaar.`,
      ] },
      { kop: `Zo zoek je het zelf uit`, tekst: [
        `Schrijf op na hoeveel dagen regen het nat werd en uit welke hoek de wind kwam. Kijk tijdens of vlak na zo'n natte periode met een zaklamp op zolder waar het hout nat is: op één punt, langs de schoorsteen, in een hoek of verspreid onder de pannen. Kijk buiten vanaf de straat of de goot vol staat. Wordt het ook nat na een paar droge, koude dagen, dan is het eerder condens, zie <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van de natte plek, van zolder als dat kan en van je dak vanaf de straat, en zet erbij na hoeveel dagen regen het begon. Dan zoek ik eerst waar het water echt binnenkomt. Een volle goot of kilgoot maak ik leeg, losse of kapotte pannen vervang ik door pannen die passen, en lood dat los zit zet ik vast. Zijn de pannen op een heel dakvlak op, dan zeg ik eerlijk of vervangen slimmer is dan steeds één pan. Je hoort vooraf wat het kost. Zie ook <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Is het spoed als het pas na dagen regen lekt?`, a: `Druppelt het binnen, of zit de natte plek bij een lamp of stopcontact, bel of app me dan meteen. Is het een vochtige plek die niet groter wordt, dan kan het meestal een paar dagen wachten, maar laat het wel nakijken voordat de volgende natte periode komt. Een plek die steeds opnieuw nat wordt, maakt het hout en de isolatie op den duur kapot.` },
      { v: `Waarom zie ik op zolder geen gat, terwijl het toch nat wordt?`, a: `Omdat er vaak ook geen gat is. Water dat langzaam door een oude pan of door de stenen van de schoorsteen trekt, laat geen open plek achter. Je ziet alleen vocht of donkere plekken op het hout. Kijk tijdens een lange natte periode met een zaklamp waar het begint, en stuur me daar een foto van.` },
      { v: `Kan ik het zelf dichtsmeren met kit?`, a: `Liever niet. Trekt het water door een pan of door de stenen, dan zit het niet op één plek die je dicht kunt smeren. Kit op een natte pan hecht ook slecht, en je maakt het later juist lastiger om te zien waar het echt zit.` },
    ],
  },
  {
    slug: `dak-jaren-50-huis-lekt`,
    datum: `2026-11-17`,
    titel: `Lekt het dak van je huis uit de jaren 50?`,
    h1: `Huis uit de jaren '50: waar het dak na zeventig jaar lekt`,
    metaTitle: `Huis uit de jaren 50: waar lekt het dak? | Spoed Dak Service`,
    metaDescription: `Een jaren 50-huis heeft vaak een eigen schoorsteen, pannen zonder folie, een nok in specie en een zinken goot. Zo zie je waar het dak lekt en wat je doet.`,
    intro: `Na de oorlog moest er snel veel gebouwd worden. Daarom staan er in veel steden en dorpen hele straten met rijtjeshuizen en twee-onder-een-kappers uit de jaren '50: eenvoudig gebouwd, met een zadeldak, een eigen schoorsteen en vaak een zinken goot. Op een deel van die huizen ligt nog veel van het eerste dak. Na zoveel jaren lekt zo'n dak meestal op een paar vaste plekken. Hieronder lees je welke dat zijn, hoe je ze herkent en wanneer repareren nog genoeg is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Vang de druppels op met een emmer, leg een handdoek eronder en schuif spullen opzij. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op, want oude pannen breken als je erop staat. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit zo'n dak in elkaar`, tekst: [
        `Kijk je op zolder omhoog, dan zie je bij veel van deze huizen direct de onderkant van de pannen of van een houten beschot, en geen folie. Dat hoort bij de bouw van toen. Het betekent wel dat er geen tweede laag is die water opvangt: ligt een pan scheef of is hij gebroken, dan druppelt het meestal vlak onder die plek naar binnen. Dat maakt zoeken makkelijker dan bij een nieuwer dak, maar elke bui komt ook meteen bij het hout. Op een deel van de daken liggen nog gebakken pannen, op andere al de eerste betonpannen. Zie ook <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a>.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `De schoorsteen. De meeste huizen uit die tijd kregen een eigen schoorsteen voor een kolenkachel. Sinds de cv er is, staat hij er vaak voor niets, maar het lood rond de voet moet nog steeds het water tegenhouden. Scheurt dat lood in een hoek of komt het los van de steen, dan loopt de regen erachter naar binnen. Staat het kanaal bovenaan open, dan kan het er ook in regenen. Zie <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a> en <a href="/kennisbank/vochtplek-schoorsteen-binnen/">vochtplek op de schoorsteen binnen</a>.`,
        `De plek waar de schoorsteen stond. Is de schoorsteen later weggehaald, dan is het gat in het dak met pannen dichtgelegd. Sluiten die niet goed aan op de pannen eromheen, dan lekt het jaren later precies daar. Zie <a href="/kennisbank/lekkage-weggehaalde-schoorsteen/">lekkage waar de schoorsteen stond</a>.`,
        `De nok. Op de meeste van deze daken zitten de vorsten met specie vast. Die specie wordt na zoveel winters bros, en bij een storm gaat er dan een vorst schuiven. Vind je brokjes specie op de stoep of in de goot, kijk dan vanaf de overkant van de straat of de rij vorsten nog recht ligt. Zie <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
        `De goot. Hangt er nog een zinken goot, of ligt de goot als bak in de rand van het dak, dan gaat na al die jaren vaak een naad of een hoek open, of is het zink dun geworden op de plek waar altijd blad lag. Binnen zie je dat bovenin de muur of langs het plafond. Is de goot al eens vervangen door kunststof, kijk dan bij de verbindingen. Zie <a href="/kennisbank/zinken-dakgoot-lekt/">zinken dakgoot lekt</a>.`,
        `Een dakraam dat er later in kwam. Toen zolders kamers werden, kregen veel van deze huizen een dakraam. Lekt het eromheen, dan zit het meestal in het gootstuk of in de aansluiting op de pannen erboven. Zie <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
        `Het platte dak achter het huis. Achter veel van deze huizen kwam later een berging, schuur of aanbouw met een plat dak. Waar dat dak tegen de achtergevel aansluit, zit een strook lood of zink, en daar komt het water het eerst langs. Zie <a href="/kennisbank/lekkage-bij-aanbouw/">lekkage bij de aanbouw</a>.`,
      ] },
      { kop: `Let op met asbest`, tekst: [
        `In huizen uit de jaren '50 tot en met de jaren '80 kan asbest zijn gebruikt, bijvoorbeeld in golfplaten op de schuur, in platen onder de dakrand of in een oud rookkanaal. Twijfel je of iets asbest is, boor of zaag er dan niet in en breek het niet af. Laat het eerst onderzoeken. Asbest weghalen is werk voor een bedrijf dat daarvoor gecertificeerd is. Zie ook <a href="/kennisbank/golfplaten-lekken/">golfplaten lekken</a>.`,
      ] },
      { kop: `Bij jou in de buurt`, tekst: [
        `In Den Bosch staan zulke naoorlogse rijtjes onder andere in de Kruiskamp en Boschveld. Hoe ik een lek daar aanpak, lees je bij <a href="/werkgebied/den-bosch/daklekkage/">daklekkage in Den Bosch</a>. In Waalwijk staan rond het oude centrum veel rijtjeshuizen en twee-onder-een-kappers uit de jaren '50 en '60, zie <a href="/werkgebied/waalwijk/dakrenovatie/">dakrenovatie in Waalwijk</a>.`,
      ] },
      { kop: `Repareren of het dak vernieuwen?`, tekst: [
        `Gaat het om één pan, één vorst of een stuk lood, dan is een reparatie genoeg en kan de rest van het dak blijven liggen. Wordt het elk jaar ergens anders nat, breken de pannen na elke vorstperiode en zit de nok over de hele lengte los, dan is steeds plakken op den duur vaak duurder dan een dakvlak in één keer vernieuwen. In een rij kan dat ook voor alleen jouw huis, met een nette overgang naar de buren. Kies je voor vernieuwen, dan kan er op wens folie en kunnen er nieuwe panlatten onder de pannen. Lees <a href="/kennisbank/dak-vernieuwen-rijtjeshuis/">je dak vernieuwen in een rijtjeshuis</a> en <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Eerst kijk ik op zolder, want bij een dak zonder folie zie je daar vaak precies waar het water binnenkomt. Daarna kijk ik buiten naar die plek. Los of gescheurd lood zet ik vast of vervang ik, meestal met loodvervanger en met echt lood als je dat liever hebt. Losse vorsten zet ik vast, en is de specie over de hele nok op, dan smeer ik de nok opnieuw aan. Een gebroken pan vervang ik door een pan die past in vorm en kleur, zie <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik</a>. Een open naad in een zinken goot soldeer ik. Zijn de stenen of voegen van de schoorsteen zelf slecht, dan zeg ik dat eerlijk, want daarvoor heb je een metselaar nodig. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er lek is: een pan, een vorst, het lood of een naad in de goot. Stuur via WhatsApp een foto van de natte plek en van je dak vanaf de overkant van de straat, dan hoor je vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Er wordt al jaren niet meer gestookt in mijn schoorsteen. Moet hij dan nog nagekeken worden?`, a: `Ja, want ook een schoorsteen waarin niet meer gestookt wordt, staat nog gewoon in de regen. Het lood rond de voet en de bovenkant van het kanaal blijven plekken waar water naar binnen kan. Kijk vanaf de straat met de zoom van je telefoon of het lood nog strak tegen de steen ligt en of de bovenkant van de schoorsteen dicht of afgedekt is. Zie je binnen een bruine of natte plek op de schoorsteen, stuur me dan een foto van die plek en een van de schoorsteen buiten.` },
      { v: `Ik huur een huis uit de jaren '50 en het dak lekt. Wat doe ik?`, a: `Meld het eerst bij je verhuurder, want die regelt in de regel de reparatie van het dak. Zet tot die tijd een emmer onder de druppel, haal spullen weg en maak foto's van de natte plek met de datum erbij. Druppelt het bij een lamp of stopcontact, zet dan de groep in de meterkast uit en zeg dat er meteen bij als je het lek meldt. Meer lees je in het artikel over lekkage in een huurhuis.` },
      { v: `Kan ik het dak van een jaren 50-huis laten nakijken voordat ik het koop?`, a: `Ja. Met de Dak-APK loop ik het hele dak na en krijg je een rapport met foto's. Bij een huis uit de jaren '50 kijk ik vooral naar het lood rond de schoorsteen, de nok, de pannen en de goot. Vraag wel eerst toestemming aan de verkoper, want ik moet op het dak en op zolder kunnen kijken. Meer lees je in het artikel over je dak laten keuren als je een huis koopt.` },
    ],
  },
  {
    slug: `schimmel-op-zolder`,
    datum: `2026-11-17`,
    titel: `Schimmel op zolder: lek of condens?`,
    h1: `Schimmel op je zolder of tegen het dakbeschot: komt het door een lek of door condens?`,
    metaTitle: `Schimmel op zolder: lek of condens? | Spoed Dak Service`,
    metaDescription: `Zwarte plekken of schimmel op zolder? Waar de schimmel zit, zegt of het van een daklek komt of van vocht uit je eigen huis. Zo zie je het verschil.`,
    intro: `Je komt op zolder en ziet zwarte puntjes op het hout, grijze plekken op de platen, of er hangt een muffe lucht. Dan wil je weten: lekt mijn dak, of is het iets anders? Schimmel groeit waar het lang vochtig blijft. Dat vocht kan van buiten komen, door een lek, of van binnen, door warme, vochtige lucht uit je huis die tegen het koude dak afkoelt. Waar en hoe de schimmel zit, vertelt meestal welke van de twee het is. Hieronder lees je hoe je dat ziet en wat je doet.`,
    secties: [
      { kop: `Eerst: is het nu nat?`, tekst: [
        `Voel of het hout of de plaat nu nat is, of alleen verkleurd en droog. Druppelt het, of is er een natte kring die na een bui groter wordt, zet dan een bak onder de plek en kijk op de <a href="/spoed/">spoedpagina</a> wat je meteen kunt doen. Is alles droog en zie je alleen oude vlekken, dan heb je tijd om rustig uit te zoeken waar het vandaan komt.`,
      ] },
      { kop: `Op één plek, met een kring eromheen`, tekst: [
        `Zit de schimmel op één plek, vaak met een bruine of gele rand, en wordt die plek na een bui donker of nat? Dan komt er waarschijnlijk water van buiten. Kijk recht boven die plek en ook iets hoger, want water loopt onder de pannen vaak een stuk naar beneden voordat het binnenkomt. Bekende plekken zijn rond de schoorsteen, bij een pijp door het dak, rond een dakraam, onder de nok en bij de onderste rij pannen boven de goot. Hoe je het lek zelf vindt, lees je bij <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Verspreid over een groot stuk`, tekst: [
        `Zie je fijne zwarte puntjes verspreid over een groot deel van het dakbeschot of de platen, en is het ook op droge dagen vochtig? Dan is het meestal condens. Warme lucht uit je huis neemt vocht mee naar boven. Op een koude nacht slaat dat vocht neer tegen de koudste plek: de onderkant van het dak. Dat gebeurt vaak het meest aan de kant die op het noorden ligt en hoog onder de nok. Blijft dat steeds terugkomen, dan gaat er schimmel groeien. Meer over het verschil lees je bij <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Waar het vocht vaak vandaan komt`, tekst: [
        `Een wasdroger op zolder zonder afvoer naar buiten, of was die op zolder hangt te drogen. Een badkamer of douche op zolder zonder goede afzuiging. Een zolderluik dat niet goed sluit, zodat de warme lucht van de overloop naar boven trekt. Roosters of ventilatiepannen die zijn dichtgemaakt. En een dak dat net van binnen is geïsoleerd, waarbij de warme kant niet goed is afgesloten. Zie ook <a href="/kennisbank/lekt-sinds-dakisolatie/">lekt het sinds je dak is geïsoleerd?</a>`,
      ] },
      { kop: `Hoeken en het knieschot`, tekst: [
        `Achter het knieschot en in de hoeken bij de onderkant van het dak is het koud en komt weinig lucht. Daar groeit schimmel het eerst, door condens, maar ook als er water van de onderste rij pannen of van een volle goot naar binnen komt. Is de vloer daar nat of ligt er na een bui een plas, dan is het eerder een lek. Lees <a href="/kennisbank/nat-achter-knieschot/">nat achter het knieschot</a>.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Ga de schimmel niet wegpoetsen en overschilderen zolang je niet weet waar het vocht vandaan komt. Dan lijkt het weg, maar het vocht blijft, en hout dat steeds nat is, kan gaan rotten. Maak ook geen roosters of ventilatiepannen dicht om de kou buiten te houden, want dan blijft het vocht juist binnen. Haal je zelf wat schimmel weg, zet dan een raam open en draag een stofmasker.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me via WhatsApp een foto van de schimmel, van dichtbij en van een afstand, en zeg erbij of de plek na een bui natter wordt. Lijkt het op een lek, dan zoek ik waar het water binnenkomt en maak ik dat dicht, bijvoorbeeld bij een pan, het lood rond de schoorsteen of de kraag rond een pijp. Is het condens, dan zeg ik dat eerlijk. Dan ligt de oplossing binnen, bij ventilatie en vocht, en daarvoor vraag je een isolatie- of ventilatiebedrijf om advies. Isoleren doe ik zelf niet. Is het hout door een oud lek zacht geworden, dan hoor je dat van me. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Gaat het om een lek, dan hoor je vooraf wat het opsporen en dichtmaken kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>. Is het condens, dan hoef je mij niet te laten komen.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Is schimmel op zolder erg?`, a: `Een paar zwarte puntjes op het hout zijn niet meteen een probleem voor je huis, maar het is wel een teken dat het daar te lang vochtig is. Blijft het jaren zo, dan kan het hout gaan rotten. Slaap je op zolder of heb je last van je luchtwegen, laat het dan niet zitten. Zoek eerst uit of het van een lek of van condens komt, want dan weet je wat de oplossing is.` },
      { v: `De schimmel zit vooral rond mijn dakraam. Is dat een lek?`, a: `Dat kan allebei. Een dakraam is een koude plek, en daar slaat vocht uit huis snel neer, zeker als het raam altijd dicht is. Dan zie je druppels op het glas en schimmel in de hoeken van het kozijn. Wordt het hout of de wand onder het raam juist nat na een bui, ook als het glas droog is, dan zit het eerder in het gootstuk of de aansluiting op de pannen. Meer lees je in het artikel over een lekkend dakraam.` },
      { v: `Ik heb de schimmel weggehaald, maar hij komt terug. Wat nu?`, a: `Dan blijft er vocht komen. Let op wanneer hij terugkomt: na een periode met veel regen wijst het eerder naar een lek, in een koude, droge periode eerder naar condens. Maak foto's met de datum erbij, dan zie je hoe het verloopt. Stuur ze via WhatsApp, dan zeg ik eerlijk of het iets voor mij is.` },
    ],
  },
  {
    slug: `dak-nakijken-voor-zolder-verbouwen`,
    datum: `2026-11-17`,
    titel: `Zolder verbouwen? Laat eerst je dak nakijken`,
    h1: `Ga je je zolder verbouwen? Laat eerst je dak nakijken, voordat alles is dichtgemaakt`,
    metaTitle: `Zolder verbouwen? Eerst je dak nakijken | Spoed Dak Service`,
    metaDescription: `Wordt je zolder een slaapkamer? Als de wanden dicht zijn, zie je een lek niet meer. Dit laat je vooraf nakijken: pannen, nok, lood, dakraam en goot.`,
    intro: `Een zolder die een slaapkamer, werkplek of logeerkamer wordt, krijgt isolatie, platen of schrootjes tegen het schuine dak en vaak een nieuwe vloer. Daarna zie je de onderkant van je dak niet meer. Een klein lek dat je nu nog op tijd ziet, merk je dan pas als er een vlek op je nieuwe wand komt. Daarom is het slim om je dak na te laten kijken voordat de verbouwing begint. Hieronder lees je waar je op let, wat je vooraf laat maken en wie wat doet.`,
    secties: [
      { kop: `Waarom vooraf`, tekst: [
        `Nu kun je met een zaklamp nog overal op zolder kijken: langs de schoorsteen, rond pijpen door het dak, onder de nok en achter het knieschot. Is de zolder eenmaal afgewerkt, dan moet er bij een lek eerst een stuk wand of plafond open om te zien waar het zit. Een lek vinden achter een afgewerkte wand kan wel, maar het is meer zoekwerk. Vooraf repareren is meestal goedkoper dan achteraf je nieuwe kamer openmaken.`,
      ] },
      { kop: `Zelf kijken op zolder`, tekst: [
        `Ga na een flinke bui, het liefst met wind, met een zaklamp naar boven. Let op donkere kringen of natte plekken op het hout of de folie, licht tussen de pannen, brokjes specie of gruis op de vloer, en sporen langs de schoorsteen of een pijp. Ruik ook even: een muffe hoek zegt vaak al iets. Maak overal waar je iets ziet een foto. Lees ook <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a> en <a href="/kennisbank/schimmel-op-zolder/">schimmel op zolder</a>.`,
      ] },
      { kop: `Wat ik vooraf nakijk`, tekst: [
        `De pannen: gebroken, verschoven of poreuze pannen vervang ik of leg ik recht. De nok: losse vorsten zet ik vast, of ik smeer de nok opnieuw aan. Het lood rond de schoorsteen en langs muren: los of gescheurd lood zet ik vast of vervang ik, meestal met loodvervanger en op wens met echt lood. De kraag rond pijpen door het dak en het gootstuk rond een dakraam dat er al zit. En de goot en de onderste rij pannen, want water dat onder de pannen loopt, komt daar als laatste langs, precies achter je nieuwe knieschot. Wat ik zie, hoor je van me, met foto's erbij.`,
      ] },
      { kop: `De Dak-APK`, tekst: [
        `Wil je alles op een rij, dan kan dat met de <a href="/dak-apk/">Dak-APK</a>: ik loop je hele dak na en je krijgt een rapport met foto's. Dan weet je wat er voor de verbouwing moet gebeuren en wat nog kan wachten. Wat dat kost, lees je bij <a href="/kennisbank/wat-kost-een-dakinspectie/">wat kost een dakinspectie</a>.`,
      ] },
      { kop: `Nieuwe dakramen`, tekst: [
        `Komen er nieuwe dakramen in, of verandert er iets aan de constructie van het dak, dan regelt je aannemer of timmerman dat. Vraag die om de aansluiting van het raam op de pannen goed af te werken, want daar begint een lek bij een nieuw raam meestal. Lekt het later toch, lees dan <a href="/kennisbank/lekt-sinds-nieuw-dakraam/">lekt het sinds je nieuwe dakraam?</a>`,
      ] },
      { kop: `Isolatie en vocht`, tekst: [
        `Isoleren doe ik zelf niet. Wel is het slim dat het dak dicht is voordat de isolatie erin gaat, want isolatie die nat wordt, droogt slecht. Vraag het isolatiebedrijf ook hoe het vocht uit je nieuwe kamer weg kan, met een folie aan de warme kant en goede ventilatie. Anders kan er condens tegen het koude dak komen, en dat lijkt later op een lek. Zie <a href="/kennisbank/lekt-sinds-dakisolatie/">lekt het sinds je dak is geïsoleerd?</a> en <a href="/kennisbank/isolatie-nat-na-lekkage/">isolatie nat na een lek</a>.`,
      ] },
      { kop: `Repareren of eerst vernieuwen?`, tekst: [
        `Is je dak bijna op, met veel poreuze of gebroken pannen en lood dat op meer plekken los zit, dan wil je dat weten voordat je binnen alles afwerkt. Een dakrenovatie gebeurt van buitenaf, maar het is prettiger als die klaar is voordat je nieuwe kamer af is. Bij een renovatie kan er op wens nieuwe folie en kunnen er nieuwe panlatten onder de pannen. Zie <a href="/diensten/dakrenovatie/">dakrenovatie</a> en <a href="/kennisbank/hoe-lang-gaat-een-dak-mee/">hoe lang gaat een pannendak mee</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een paar losse pannen of een nokvorst vastzetten is meestal een kleine reparatie. Voor lood, een kraag of een groter stuk dak stuur je een foto, en je hoort vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: de Dak-APK`, href: `/dak-apk/` },
    faq: [
      { v: `Hoe lang voor de verbouwing laat ik mijn dak nakijken?`, a: `Liefst een paar weken van tevoren. Dan is er tijd om een pan of het lood te laten maken, en moet er meer gebeuren, dan kun je dat nog plannen voordat de aannemer begint. Stuur me een foto van je dak vanaf de straat en een paar van zolder, dan zeg ik wat ik zie.` },
      { v: `Er komt een badkamer op zolder. Waar let ik op bij het dak?`, a: `Een badkamer geeft veel vocht, en dat moet naar buiten. De afvoer van de ventilatie gaat vaak met een pijp door het dak. Een nieuwe doorvoer door het dak kan ik plaatsen, met een passende pan en een kraag rond de pijp. De ventilatie zelf regelt je installateur. Komt de afvoer niet buiten uit maar op zolder, dan slaat het vocht neer tegen het koude dak. Meer lees je in de artikelen over een nat badkamerplafond en over lekkage bij een dakdoorvoer.` },
      { v: `Moet de folie onder de pannen vervangen worden voordat ik isoleer?`, a: `Niet altijd. Is de folie heel en zit hij nog goed, dan kan hij blijven. Is hij gescheurd, vergaan of hangt hij in stukken, dan komt er bij harde wind regen of stuifsneeuw langs, en dat komt na het isoleren in je isolatie terecht. Nieuwe folie kan er alleen onder als de pannen eraf gaan, bij een renovatie. Meer lees je in het artikel over dakfolie die kapot is.` },
    ],
  },
  {
    slug: `lekkage-tijdens-vakantie`,
    datum: `2026-11-17`,
    titel: `Lekkage terwijl je op vakantie bent?`,
    h1: `Je bent op vakantie of niet thuis en je dak lekt: wat de buren kunnen doen en hoe het verder gaat`,
    metaTitle: `Daklekkage terwijl je op vakantie bent | Spoed Dak Service`,
    metaDescription: `Ben je weg en zien de buren een natte plek of een pan op de stoep? Wat zij veilig kunnen doen, wat je via de app regelt en hoe het lek dicht komt.`,
    intro: `Je zit in de sneeuw of aan zee, en dan appt de buurvrouw: er ligt een dakpan op de stoep. Of de oppas ziet een natte plek op het plafond. Op afstand voelt dat machteloos, maar je kunt veel regelen zonder zelf thuis te zijn. Hieronder lees je wat de buren of je oppas veilig kunnen doen, hoe het lek gemaakt wordt terwijl je weg bent en wat je vooraf regelt als je op reis gaat.`,
    secties: [
      { kop: `Eerst: veilig`, tekst: [
        `Vraag wie er bij je huis is om niet op een ladder of het dak te gaan, ook niet even om te kijken. Ligt er een pan of een stuk goot op de stoep, laat het dan opzij leggen en uit de buurt van de gevel blijven zolang het hard waait. Hangt er iets los boven de stoep of de straat dat elk moment kan vallen, dan is 112 bellen de juiste stap. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat iemand met een sleutel binnen kan doen`, tekst: [
        `Een emmer of bak onder de druppel, met een doek erin tegen het spatten. Spullen weg van de natte plek en een handdoek of plastic op de vloer. Zit de natte plek bij een lamp, spotje of stopcontact, dan de groep van die kamer uit in de meterkast. Bolt het plafond op, dan niet eronder gaan staan. Kan iemand veilig op zolder komen, dan helpt een bak onder de plek waar het van het hout of de folie druppelt.`,
      ] },
      { kop: `Laat foto's maken`, tekst: [
        `Vraag om een foto van de natte plek binnen, van dichtbij en van een afstand, en een of twee foto's van je dak vanaf de overkant van de straat, met de zoom van de telefoon. Een kort filmpje van de goot tijdens een bui helpt ook. Laat ze die naar jou sturen, of meteen naar mij. Welke foto's het meest helpen, lees je bij <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Repareren terwijl je weg bent`, tekst: [
        `Ligt er een pan of nokvorst los en kan ik er van buiten bij, bijvoorbeeld vanaf de stoep of via een achterom, dan kan ik dat ook doen als er niemand thuis is. We spreken dan via WhatsApp vooraf de prijs af, en jij zegt waar ik mijn ladder kan zetten. Als je wilt, stuur ik je na afloop een foto van wat ik heb gedaan. Moet ik op zolder kijken waar het water binnenkomt, dan heb ik iemand nodig die de deur open kan doen, zoals de buren of de oppas. Ligt het dak open en is het te nat of waait het te hard voor een nette reparatie, dan maak ik het eerst dicht. Hoe dat gaat, lees je bij <a href="/kennisbank/noodreparatie-dak/">noodreparatie aan je dak</a>.`,
      ] },
      { kop: `En je verzekering?`, tekst: [
        `Meld de schade zo snel als het kan bij je verzekeraar, ook vanaf je vakantieadres, en vraag wat ze nodig hebben. De foto's van de buren, met de datum erbij, helpen daarbij. Kosten om erger te voorkomen, zoals het lek tijdelijk laten dichtmaken, worden vaak vergoed als de schade zelf onder je polis valt, maar dat verschilt per polis. Ik maak foto's van wat ik aantref en van de reparatie, met een korte omschrijving die je kunt doorsturen. Lees ook <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Als je weer thuis bent`, tekst: [
        `Kijk na de eerste flinke bui op zolder of de plek droog blijft. Een plafond dat nat is geweest, droogt langzaam, ook als het lek dicht is. Schilder er pas overheen als het helemaal droog is, zie <a href="/kennisbank/plafond-drogen-na-lekkage/">plafond drogen na een lekkage</a>.`,
      ] },
      { kop: `Voordat je op reis gaat`, tekst: [
        `Ga je in de herfst of winter weg, laat dan vooraf je goot leegmaken als hij vol blad zit, en kijk vanaf de straat of er een pan scheef ligt of specie van de nok in de goot ligt. Geef iemand in de buurt een sleutel en zeg waar de meterkast en het zolderluik zitten. Zet mijn nummer in hun telefoon, zodat ze bij een lek of een storm meteen een foto kunnen sturen. Komt er een storm aan, lees dan <a href="/kennisbank/storm-op-komst-dak/">storm op komst</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er los of lek is. Ook als je niet thuis bent, hoor je via WhatsApp vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Kan de reparatie wachten tot ik terug ben?`, a: `Dat hangt ervan af. Druppelt het binnen of ligt er een open plek in het dak, dan liever niet, want bij elke bui trekt er meer water in het plafond en de isolatie. Ligt er alleen een pan een beetje scheef en blijft het binnen droog, dan kan het vaak wel wachten. Laat de buren een foto sturen, dan zeg ik eerlijk wat ik zie.` },
      { v: `De buren willen zelf een zeil over het dak leggen. Is dat slim?`, a: `Liever niet. Een nat dak is glad, en een zeil trekt bij wind hard aan alles wat het vasthoudt, ook aan wie op de ladder staat. Vraag ze het water binnen op te vangen en foto's te maken. Het afdekken van buiten laat je aan mij over.` },
      { v: `Kan ik vanaf mijn vakantieadres alles regelen?`, a: `Meestal wel. Stuur de foto's die de buren maken via WhatsApp door, met je adres en wie er een sleutel heeft. Dan zeg ik wat ik zie, spreken we de prijs af en laat ik weten wanneer ik kom. Moet ik binnen of op zolder kijken, dan stemmen we af wie de deur open doet.` },
    ],
  },
  {
    slug: `ventilatiepan-lekt`,
    datum: `2026-11-17`,
    titel: `Lekt het bij een ventilatiepan?`,
    h1: `Lekt of druppelt het bij een ventilatiepan? Kapot, verschoven of condens`,
    metaTitle: `Ventilatiepan lekt of druppelt: wat nu? | Spoed Dak Service`,
    metaDescription: `Druppelt het op zolder onder een pan met een roostertje of kapje? Vaak is de ventilatiepan gebroken, verschoven of is het condens. Zo zie je wat het is.`,
    intro: `Op veel daken ligt tussen de gewone pannen een pan met een roostertje, sleuven of een klein kapje: een ventilatiepan. Daardoor kan er lucht onder de pannen en op zolder komen, zodat vocht weg kan. Wordt het op zolder nat precies onder zo'n pan, dan denk je al snel dat hij lekt. Soms klopt dat, soms is het condens of komt het water van hoger. Hieronder lees je hoe je het verschil ziet en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer of bak onder de druppel en leg spullen opzij. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat een ventilatiepan doet`, tekst: [
        `Een ventilatiepan heeft dezelfde vorm als de pannen ernaast, maar met een opening die aan de bovenkant is afgeschermd. Zo kan er wel lucht door, maar geen regen. Soms zit er onder de pan een slang of kanaal vast, bijvoorbeeld van de ventilatie in de badkamer. Een ventilatiepan zit er dus meestal met een reden. Weghalen of dichtmaken is geen goed idee, want dan blijft het vocht juist binnen.`,
      ] },
      { kop: `Waar het meestal zit`, tekst: [
        `Een gebroken pan of kapje. Een ventilatiepan van kunststof wordt na veel jaren in de zon bros, en een stenen pan kan bij vorst of een storm barsten. Door een scheur of een afgebroken kapje komt de regen naar binnen.`,
        `Een pan die niet goed ligt. Ligt de ventilatiepan een stukje scheef of niet goed in de sluiting van de pannen ernaast, bijvoorbeeld na een storm of na werk op het dak, dan waait de regen eronder.`,
        `Stuifsneeuw en slagregen. Bij een sneeuwstorm of harde regen uit één hoek kan er door een hele ventilatiepan een beetje sneeuw of water naar binnen waaien. Een paar druppels na zo'n bui zijn vaak geen lek. Komt het bij elke bui terug, dan wel. Lees ook <a href="/kennisbank/dak-lekt-bij-sneeuw-of-vorst/">dak lekt bij sneeuw of vorst</a>.`,
        `Condens. Zit er onder de pan een slang van de ventilatie of de badkamer die los is geraakt, dan blaast er warme, vochtige lucht tegen het koude dak. Dat geeft druppels die op een lek lijken, vaak juist op koude, droge dagen. Zie <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
        `Water van hoger. Onder de pannen loopt water vaak een eind naar beneden voordat het binnenkomt. De natte plek onder de ventilatiepan kan dus ook van een pan, de nok of het lood erboven komen. Zie <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Zo zie je het verschil`, tekst: [
        `Kijk tijdens of vlak na een bui met een zaklamp op zolder. Zie je daglicht naast de pan, of is de plek alleen na regen nat, dan zit het meestal in de pan of in hoe hij ligt. Is het ook nat na een droge, koude nacht, of hangt er een losse slang onder de pan, dan is het eerder condens. Kijk op een droge dag vanaf de overkant van de straat met de zoom van je telefoon of de pan heel is en net zo plat ligt als de pannen ernaast, en maak een foto.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Prop geen doeken, isolatie of tape in de opening van de pan en kit hem niet dicht. Dan houd je het vocht binnen, en op den duur geeft dat schimmel op het hout. Ga niet zelf het dak op en zet geen ladder tegen de goot.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst op zolder waar het water binnenkomt en daarna op het dak. Is de ventilatiepan gebroken of is het kapje weg, dan vervang ik hem door een ventilatiepan die bij je dak past. Ligt hij scheef, dan leg ik hem en de pannen eromheen weer goed in de sluiting. Komt het water van hoger, dan zoek ik verder bij de pannen, de nok of het lood. Zit er een losse slang van de ventilatie onder, dan zeg ik dat eerlijk: die aansluiten doet je installateur. Zie ook <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a> en <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een ventilatiepan vervangen of terugleggen is meestal een kleine reparatie. Stuur een foto van de pan vanaf de straat en van de natte plek op zolder via WhatsApp, dan hoor je vooraf wat het kost. Richtprijzen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Kan ik een ventilatiepan gewoon dicht laten maken?`, a: `Liever niet. Hij zit er meestal om vocht onder de pannen en op zolder weg te laten. Maak je hem dicht, dan blijft dat vocht binnen. Is hij kapot, laat hem dan vervangen door een nieuwe ventilatiepan die bij je dak past.` },
      { v: `Hoe zie ik of ik een ventilatiepan heb?`, a: `Kijk vanaf de straat of vanuit de tuin naar je dak. Een ventilatiepan heeft de kleur en vorm van de pannen ernaast, maar met een roostertje, sleuven of een klein kapje erop. Op zolder zie je eronder vaak een opening in de folie of een slang die erop vastzit.` },
      { v: `Is een lekkende ventilatiepan spoed?`, a: `Druppelt het bij elke bui, of zit de natte plek bij een lamp of stopcontact, dan wel: zet de groep uit en stuur me een foto. Een paar druppels na een sneeuwstorm of op een koude ochtend zijn meestal geen spoed, maar laat het wel nakijken als het terugkomt.` },
    ],
  },
  {
    slug: `dakpan-zelf-terugleggen`,
    datum: `2026-11-17`,
    titel: `Zelf een dakpan terugleggen of vervangen?`,
    h1: `Zelf een dakpan terugleggen of vervangen: wat kan wel, en wanneer laat je het doen?`,
    metaTitle: `Dakpan zelf vervangen of terugleggen? | Spoed Dak Service`,
    metaDescription: `Ligt er een pan scheef of is er een gebroken? Van binnenuit lukt terugschuiven soms, op het dak liever niet. Zo zie je wat kan en wanneer je het laat doen.`,
    intro: `Eén pan die een stukje scheef ligt of een barst heeft: dat lijkt een klus die je zelf wel even doet. Soms kan dat ook, als je er veilig van binnenuit bij kunt. Maar een dakpan op het dak zelf vervangen is lastiger en gevaarlijker dan het lijkt. Hieronder lees je wat je zelf kunt doen, wat je beter laat en waar je op let als er een pan vervangen moet worden.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel en ga niet het dak op, zeker niet als het nat is of waait. Wat je meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Van binnenuit een verschoven pan terugschuiven`, tekst: [
        `Bij een oud dak zonder folie of platen onder de pannen zie je op zolder de onderkant van de pannen. Ligt er een pan een stukje uit zijn plek, dan kun je hem soms van binnenuit voorzichtig optillen en terugschuiven, tot hij weer met de nokjes over de lat hangt en goed sluit op de pannen ernaast. Doe dat op een droge dag, zonder kracht, en stop als hij niet makkelijk gaat. Ligt er folie of een plaat onder de pannen, dan kom je er van binnen niet bij. Snijd de folie niet open om erbij te komen.`,
      ] },
      { kop: `Waarom liever niet op het dak`, tekst: [
        `Een schuin dak is glad, zeker met mos of na regen, en pannen breken onder je voet. Een ladder tegen de goot drukt de goot of de beugels krom, en vanaf een ladder bij de goot kom je bijna nooit goed bij een pan halverwege het dak. Een pan die niet goed in de sluiting ligt, schuift of waait bij de volgende storm weer los. Daarom zeg ik ook bij een kleine klus: ga zelf niet het dak op.`,
      ] },
      { kop: `Een gebroken pan vervangen`, tekst: [
        `Om een pan te vervangen moeten de pannen erboven en ernaast een stukje omhoog, zodat de oude eruit en de nieuwe erin kan. De nieuwe pan moet passen in vorm en maat, anders sluit hij niet. Welke pan je hebt, lees je bij <a href="/kennisbank/welke-dakpan-heb-ik/">welke dakpan heb ik?</a> Ligt er nog een reservepan op zolder of in de schuur, bewaar die dan, want dan weet je zeker dat hij past. Een barst lijmen of kitten houdt meestal maar kort, zie <a href="/kennisbank/dakpan-lijmen-of-kitten/">dakpan lijmen of kitten</a>.`,
      ] },
      { kop: `Wanneer je het laat doen`, tekst: [
        `Gaat het om een nokvorst, een pan langs de zijkant van het dak, een pan bij de schoorsteen of het lood, of een pan onder zonnepanelen, laat het dan doen. Dat geldt ook bij een steil of hoog dak, bij meer dan een paar pannen en na een storm, als er misschien meer los zit dan je ziet. Zie <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan kapot of verschoven</a> en <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van je dak vanaf de overkant van de straat, met de zoom van je telefoon, en als het kan een van de pan van dichtbij of vanaf zolder. Dan zie ik meestal welke pan het is en neem ik een passende mee. Ik leg de pan terug of vervang hem, en kijk meteen of de pannen eromheen nog goed liggen. Kan ik er van buiten bij en spreken we de prijs vooraf af, dan kan dat ook als je niet thuis bent. Zie <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Wat één pan vervangen kost en waar de prijs van afhangt, lees je bij <a href="/kennisbank/wat-kost-dakpan-vervangen/">wat kost een dakpan vervangen</a>. Je hoort vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Waar vind ik een losse dakpan die past?`, a: `In een bouwmarkt liggen meestal maar een paar soorten. Een groothandel in dakmaterialen of een handel in gebruikte pannen heeft er vaak meer. Neem een foto of de kapotte pan mee, dan kun je vergelijken. Bij een ouder dak wordt jouw pan soms niet meer gemaakt. Dan helpt een pan die in vorm en maat past, ook als de kleur iets anders is.` },
      { v: `Kan ik een gebarsten pan tijdelijk afplakken?`, a: `Van buiten liever niet, want dan moet je het dak op. Van binnen kun je onder de gebarsten pan een bak zetten, zodat het water niet op de vloer komt. Tape of kit houdt op een pan meestal maar kort, en op een natte pan plakt het niet.` },
      { v: `Mijn pan wordt niet meer gemaakt. Wat nu?`, a: `Dan kan er een pan van een plek die je vanaf de straat niet ziet, op de plek komen die je wel ziet. Op die verborgen plek komt dan een pan die in vorm en maat past, ook als de kleur iets anders is. Dat is werk op het dak zelf, dus laat het doen.` },
    ],
  },
  {
    slug: `doorslaand-vocht-of-daklek`,
    datum: `2026-11-18`,
    titel: `Doorslaand vocht of een daklek?`,
    h1: `Natte binnenmuur na regen: doorslaand vocht door de gevel, of een lek van het dak of de goot?`,
    metaTitle: `Doorslaand vocht of een daklek? | Spoed Dak Service`,
    metaDescription: `Natte plek op je binnenmuur na regen? Bovenin, vlak onder het plafond, komt het vaak van de goot of het dak. Midden op de muur eerder door de gevel.`,
    intro: `Na een flinke bui zie je binnen een natte of donkere plek op de muur. Komt dat van je dak, van de goot, of slaat de regen door de gevel heen? Dat laatste heet doorslaand vocht, en daarvoor heb je geen dakdekker nodig. Hieronder lees je hoe je het verschil ziet, zodat je meteen de goede vakman belt.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer of een handdoek onder de plek, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat is. Ga niet zelf het dak of een ladder op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Kijk eerst waar de plek zit`, tekst: [
        `Bovenin de muur, vlak onder het plafond of onder de dakrand. Dan komt het water vaak van boven: een goot die overloopt of lekt, water dat achter de goot langs loopt, of het lood boven een raam of een aanbouw. Lees <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a> en <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
        `Midden op de muur, als een vlek die opkomt na regen met wind en na een paar droge dagen weer wegtrekt. Dat past eerder bij doorslaand vocht: regen die door de stenen of de voegen van de gevel naar binnen trekt.`,
        `Onderin de muur, vlak boven de vloer. Dat komt zelden van het dak. Denk dan eerder aan vocht van onderen of aan een leiding.`,
      ] },
      { kop: `Wanneer wordt het nat?`, tekst: [
        `Alleen bij regen met harde wind uit één richting, aan de kant van het huis waar het weer vandaan komt. Dat kan doorslaand vocht zijn, maar ook regen die onder de pannen of langs een raam naar binnen waait. Zie <a href="/kennisbank/dak-lekt-bij-harde-wind/">dak lekt bij harde wind</a>.`,
        `Bij elke flinke bui, ook zonder veel wind, en vooral als de goot erboven volloopt. Dan zit het vaker in de goot of het dak.`,
        `Ook na een week zonder regen. Dan komt het meestal niet van buiten. Lees <a href="/kennisbank/lekkage-dakdekker-of-loodgieter/">lekkage: dakdekker of loodgieter?</a>`,
      ] },
      { kop: `Wat je buiten ziet`, tekst: [
        `Kijk tijdens of vlak na een bui vanaf de straat naar de gevel boven de natte plek. Loopt er water over de rand van de goot, of zie je een natte streep onder de goot of de regenpijp, dan zit het daar. Groene strepen op de gevel onder de goot wijzen ook die kant op, zie <a href="/kennisbank/groene-strepen-gevel-onder-dakgoot/">groene strepen op je gevel</a>.`,
        `Is de gevel op die plek nat en donker terwijl de goot erboven droog blijft, en zie je open voegen, scheurtjes of stenen die lang nat blijven, dan is doorslaand vocht waarschijnlijker.`,
      ] },
      { kop: `Een oude muur of een spouwmuur`, tekst: [
        `Veel oude huizen hebben een massieve muur zonder spouw. Bij zo'n muur trekt slagregen makkelijker helemaal door naar binnen. Een spouwmuur heeft een ruimte tussen de buitenmuur en de binnenmuur, en daar loopt het water normaal gesproken naar beneden. Ook daar kan het soms doorslaan, bijvoorbeeld als er vuil of specie in de spouw ligt. Toch komt een natte plek bovenin bij zo'n muur vaak van de goot, het lood of de dakrand erboven.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Laat de gevel niet meteen impregneren en schilder de binnenmuur niet over zolang je niet weet waar het water vandaan komt. Zit het in de goot of het dak, dan helpt dat niets, en vocht dat al in de muur zit, kan er dan slechter uit. Kit ook geen kieren dicht op de gevel als je niet weet waar het lek zit.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van de natte plek binnen en van de gevel en de goot erboven, het liefst tijdens of vlak na een bui. Ik kijk naar de goot, de uitloop naar de regenpijp, het lood boven ramen en aanbouwen en de dakrand. Zit het daar, dan maak ik het dicht, en je hoort vooraf wat het kost. Zit het in de stenen of de voegen van de gevel, dan zeg ik dat eerlijk: aan de stenen van een gevel werk ik niet, daarvoor heb je een gevelspecialist nodig. Zie <a href="/diensten/daklekkage/">daklekkage</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Kan een lekkende dakgoot een natte binnenmuur geven?`, a: `Ja. Loopt een goot over, of lekt hij bij een naad of de uitloop, dan loopt het water langs de gevel of achter de goot de muur in. Binnen zie je dat meestal bovenin, vlak onder het plafond. Kijk tijdens een bui of er water over de rand komt, en stuur me daar een foto of een kort filmpje van.` },
      { v: `Mijn muur is alleen nat aan de kant waar de regen vandaan komt. Is dat doorslaand vocht?`, a: `Dat kan, maar niet altijd. Bij regen met harde wind kan het water ook onder de pannen, langs een raam of achter de goot naar binnen waaien. Zit de plek midden op de muur en blijft de goot erboven droog, dan is doorslaand vocht waarschijnlijker. Zit hij bovenin, kijk dan eerst naar de goot en het dak.` },
      { v: `Wie bel ik voor doorslaand vocht?`, a: `Een gevelspecialist, die de stenen en de voegen nakijkt. Aan de gevel zelf werk ik niet. Twijfel je of het van de gevel, de goot of het dak komt, stuur me dan een foto van de natte plek en van de gevel erboven. Dan zeg ik eerlijk wie je het beste kunt bellen.` },
    ],
  },
  {
    slug: `zakgoot-lekt`,
    datum: `2026-11-18`,
    titel: `Zakgoot lekt?`,
    h1: `Zakgoot lekt: de goot tussen twee daken loopt over of lekt naar binnen`,
    metaTitle: `Zakgoot lekt: goot tussen twee daken | Spoed Dak Service`,
    metaDescription: `Ligt er een goot tussen twee daken en wordt het binnen nat? Een zakgoot loopt bij een volle uitloop over naar binnen. Zo zie je wat er mis is en wat je doet.`,
    intro: `Een zakgoot ligt tussen twee daken die naar elkaar toe aflopen, bijvoorbeeld tussen twee panden, tussen twee daken van hetzelfde huis of tussen het huis en een aanbouw. Al het water van twee kanten komt erin samen. Loopt een gewone goot over, dan valt het water langs de gevel naar buiten. Bij een zakgoot kan dat niet: loopt hij over, dan loopt het water onder de pannen of over de rand naar binnen. Hieronder lees je hoe je dat herkent en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet de groep in de meterkast uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf naar de goot: die ligt tussen twee daken, en daar kom je niet veilig bij. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zakgoot, kilgoot of bakgoot?`, tekst: [
        `Een kilgoot ligt schuin, in de hoek waar twee schuine dakvlakken samenkomen, en het water loopt erdoor naar beneden. Een bakgoot zit in de rand van het dak, bovenop de gevel. Een zakgoot ligt bijna vlak tussen twee daken, en het water moet er via een uitloop uit: een pijp die binnen of buiten naar beneden loopt, of een opening door de gevel. Lekt het in de hoek van een schuin dak, lees dan <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a>. Zit je goot in de dakrand, kijk dan bij <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Waar het meestal misgaat`, tekst: [
        `De uitloop zit dicht. Blad, mos en gruis van de pannen spoelen van twee daken naar de zakgoot en blijven bij de uitloop liggen. Kan het water niet weg, dan komt het hoger te staan dan de rand van de goot en loopt het onder de pannen door naar binnen. Bij een stortbui gaat dat het snelst.`,
        `Een naad of hoek in het zink lekt. Een zakgoot is vaak een houten bak met zink erin. Na veel jaren scheurt een soldeernaad, of wordt het zink dun op de plek waar steeds water en vuil bleven staan.`,
        `De aansluiting op de pannen of de muur. Liggen de onderste pannen niet ver genoeg over de goot, of is de strook langs een muur losgekomen, dan loopt het water naast de goot in plaats van erin.`,
        `IJs. In de winter kan de uitloop bevriezen. Het smeltwater van het dak kan dan niet weg en zoekt een andere weg, vaak naar binnen.`,
      ] },
      { kop: `Zo herken je het`, tekst: [
        `Een natte plek of kring op het plafond of op zolder, midden in het huis of langs de muur waar twee daken samenkomen. Vaak wordt het vooral nat bij een stortbui of in de herfst, als er veel blad valt. Loopt de uitloop binnen in een pijp naar beneden, dan kan het ook nat worden in een kast of langs die pijp, zie <a href="/kennisbank/regenpijp-in-de-muur-lekt/">regenpijp in de muur lekt</a>. Kun je vanuit een dakraam of een raam boven in de goot kijken, kijk dan of er blad, mos of water in blijft staan.`,
      ] },
      { kop: `Ligt de goot tussen jou en de buren?`, tekst: [
        `Tussen twee panden is een zakgoot vaak van jullie samen, en het water van beide daken komt erin. Lekt hij, dan is het meestal slim om het samen aan te pakken. Hoe je dat regelt, lees je in <a href="/kennisbank/gedeelde-dakgoot-lekt/">gedeelde dakgoot lekt</a>. Kan ik er alleen via het dak of de tuin van de buren bij, lees dan <a href="/kennisbank/dak-repareren-via-buren/">je dak repareren via de buren</a>.`,
      ] },
      { kop: `Zo voorkom je het`, tekst: [
        `Laat een zakgoot elk jaar na de bladval leegmaken, ook als hij nog niet lekt, en laat daarbij de uitloop vrijmaken. Juist bij een zakgoot is dat belangrijk, want overlopen betekent hier water binnen. Heeft je zakgoot een noodoverloop, een opening door de gevel voor als de uitloop dicht zit, maak die dan nooit dicht.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de goot eerst leeg en de uitloop vrij, zodat het water weer weg kan. Daarna kijk ik naar het zink. Een lekke naad of hoek soldeer ik opnieuw. Wordt het zink op meer plekken dun, dan kan ik de goot van binnen coaten. Is het zink op of het hout eronder zacht, dan zeg ik dat eerlijk, want dan helpt solderen of coaten niet lang. Solderen en coaten doe ik op een droge dag. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/dakgoot-coaten/">dakgoot van binnen coaten</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is, hoe lang de goot is en hoe goed ik erbij kan. Leegmaken is een andere klus dan een naad solderen of de goot coaten. Stuur een foto van de natte plek en, als het kan, van de goot vanuit een raam boven via WhatsApp. Dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: bakgoot repareren`, href: `/diensten/bakgoot-repareren/` },
    faq: [
      { v: `Kan ik een zakgoot zelf leegmaken?`, a: `Liever niet. Een zakgoot ligt tussen twee daken, en om erbij te komen moet je over de pannen of over een plat stuk dak lopen. Dat is glad, zeker in de herfst en de winter. Kun je hem vanuit een dakraam zien, maak dan een foto en stuur die op.` },
      { v: `Mijn zakgoot loopt alleen over bij een stortbui. Is hij dan lek?`, a: `Niet per se. Vaak kan de uitloop het water bij een stortbui niet snel genoeg kwijt, zeker als er blad of gruis in ligt. Dan komt het water hoger te staan dan de rand. Wordt het ook nat bij een gewone bui, of blijft het druppelen als de bui voorbij is, dan is er eerder een naad of hoek lek.` },
      { v: `Is een lekkende zakgoot spoed?`, a: `Vaak wel, want bij een zakgoot komt het water binnen en niet langs de gevel. Druppelt het in een kamer, bij een lamp of in een kast, zet dan een emmer neer en stuur me meteen een foto. Is het op zolder één druppel na een stortbui, dan kan het meestal een paar dagen wachten, maar laat het niet te lang liggen.` },
    ],
  },
  {
    slug: `lood-schoorsteen-vervangen`,
    datum: `2026-11-18`,
    titel: `Lood rond je schoorsteen laten vervangen`,
    h1: `Lood rond je schoorsteen laten vervangen: zo gaat dat, stap voor stap`,
    metaTitle: `Lood schoorsteen vervangen: zo gaat het | Spoed Dak Service`,
    metaDescription: `Lekt het naast je schoorsteen en moet het lood vervangen worden? Zo gaat dat: van de eerste foto tot nieuwe stroken lood of loodvervanger, en wat jij doet.`,
    intro: `Zit er een natte plek naast je schoorsteen, of zie je vanaf de straat dat het lood aan de voet gescheurd is of omhoog staat? Dan moet het lood vaak opnieuw vastgezet of vervangen worden. Hieronder lees je hoe dat gaat, van de eerste foto tot de eerste bui erna, en wat je zelf kunt doen.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep van die kamer uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Vastzetten of vervangen?`, tekst: [
        `Niet elk stuk lood hoeft eruit. Staat alleen de bovenrand uit de voeg, dan kan ik hem vaak weer vastzetten. Is het lood gescheurd, vooral in de hoeken, mist er een stuk, of is het zo hard geworden dat het niet meer tegen de stenen aan ligt, dan komt er nieuw. Hoe je vanaf de straat ziet hoe het lood erbij ligt, lees je bij <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `Stap 1: foto's en kijken`, tekst: [
        `Het begint met een foto van je schoorsteen vanaf de straat, met de zoom van je telefoon, en een foto van de natte plek binnen. Daarop zie ik vaak al aan welke kant het zit. Op het dak kijk ik naar alle vier de kanten: de kant van de nok, waar het water van boven tegen de schoorsteen stroomt, de twee zijkanten en de kant van de goot. Ik kijk ook naar de pannen eromheen, want een gebroken pan naast de schoorsteen geeft binnen hetzelfde beeld als lood dat lekt.`,
      ] },
      { kop: `Stap 2: het oude lood eraf`, tekst: [
        `Het oude lood haal ik weg, en de voeg waar de bovenrand in zat, maak ik schoon. De pannen rond de schoorsteen gaan zo nodig even los, zodat ik goed bij de aansluiting kan.`,
      ] },
      { kop: `Stap 3: nieuwe stroken rond de voet`, tekst: [
        `Rond de voet komen nieuwe stroken: aan de onderkant een strook die over de pannen valt, langs de zijkanten stroken die met de pannen meelopen, en aan de bovenkant een strook die het water van het dak om de schoorsteen heen leidt. De bovenrand gaat in een voeg van de schoorsteen en wordt daar vastgezet en afgedicht.`,
        `Meestal werk ik met loodvervanger. Wil je liever echt lood, bijvoorbeeld bij een oud huis of een monument, dan kan dat ook. Het verschil lees je in <a href="/kennisbank/lood-of-loodvervanger/">lood of loodvervanger</a>.`,
      ] },
      { kop: `Stap 4: pannen terug en nakijken`, tekst: [
        `Daarna leg ik de pannen eromheen weer goed, en vervang ik een pan die gebroken is. Ik maak foto's van het nieuwe lood, zodat je ziet wat er is gedaan. Kijk na de eerste flinke bui op zolder of het naast de schoorsteen droog blijft.`,
      ] },
      { kop: `Wat ik niet doe`, tekst: [
        `Aan de stenen en de voegen van de schoorsteen zelf werk ik niet. Zie ik dat de stenen kapot zijn of dat de voegen eruit vallen, dan zeg ik dat eerlijk, zodat je daar een metselaar voor kunt vragen. Komt het water niet langs het lood, maar van boven door het open kanaal, dan kan er een kap of afdekplaat op. Zie <a href="/kennisbank/schoorsteen-afdekken/">schoorsteen afdekken</a>.`,
      ] },
      { kop: `Op welke dag`, tekst: [
        `Nieuw lood leg ik het liefst op een droge dag. De afdichting in de voeg hecht alleen goed op stenen die droog en schoon zijn. Druppelt het nu al binnen, dan maak ik het eerst dicht en leg ik het nieuwe lood op een betere dag. Hoe dat gaat, lees je in <a href="/kennisbank/noodreparatie-dak/">noodreparatie aan je dak</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoeveel lood er nieuw moet, hoe groot de schoorsteen is en hoe goed ik erbij kan. Stuur een foto van de schoorsteen vanaf de straat en van de natte plek binnen via WhatsApp, dan hoor je vooraf wat het kost. Zie ook <a href="/diensten/lood-vervangen/">lood vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: lood vastzetten of vervangen`, href: `/diensten/lood-vervangen/` },
    faq: [
      { v: `Moet de schoorsteen eraf als het lood lekt?`, a: `Nee. Het lood ligt rond de voet en kan vervangen worden terwijl de schoorsteen blijft staan. Gebruik je de schoorsteen niet meer, dan kun je hem ook laten weghalen, maar dat is meer werk, want dan moet het gat in het dak goed dicht. Lees ook het artikel over lekkage waar vroeger een schoorsteen stond.` },
      { v: `Betaalt mijn verzekering nieuw lood rond de schoorsteen?`, a: `Meestal niet als het lood door ouderdom is gescheurd of losgekomen, want dat zien verzekeraars als onderhoud. Is het lood bij een storm losgerukt, of is er binnen schade door een lek dat plotseling begon, dan wordt dat soms wel vergoed. Dat verschilt per polis. Maak foto's van de natte plek en van de schoorsteen, en vraag het na bij je verzekeraar. Van mij krijg je foto's van wat ik aantrof en van het nieuwe lood.` },
      { v: `Hoe zie ik na de reparatie of het goed is?`, a: `Kijk na de eerste flinke bui, en het liefst ook na een bui met harde wind, op zolder naast de schoorsteen. Blijft het hout of de muur daar droog, dan zit het goed. Een oude vlek op het plafond kan nog een tijd te zien zijn, ook als het lek dicht is. Wordt hij groter of weer nat, stuur me dan meteen een foto.` },
    ],
  },
  {
    slug: `verholen-goot-lekt`,
    datum: `2026-11-18`,
    titel: `Verholen goot lekt?`,
    h1: `Je verholen goot lekt: de goot in je dak die je van de straat bijna niet ziet`,
    metaTitle: `Verholen goot lekt: waar en wat nu? | Spoed Dak Service`,
    metaDescription: `Een verholen goot ligt in het dak, een stuk boven de rand. Lekt hij, dan komt het water binnen, bovenin de muur of op zolder. Zo herken je hem en zo los je het op.`,
    intro: `Bij veel oudere huizen hangt de goot niet aan de voorkant van het dak. Hij ligt erin: een zinken goot in het dakvlak, een stukje boven de onderrand, met daaronder vaak nog een rij pannen of een strook zink tot aan de rand. Dat heet een verholen goot. Van de straat zie je hem bijna niet, en lekt hij, dan loopt het water niet langs de gevel naar beneden, maar komt het binnen. Hieronder lees je hoe je hem herkent, waar hij meestal lekt en wat eraan te doen is.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een bak onder de druppel, schuif spullen van de natte muur af en zet in de meterkast de groep van die kamer uit als het bij een lamp of stopcontact nat wordt. Ga niet zelf het dak op. Wat je verder meteen doet, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo herken je een verholen goot`, tekst: [
        `Kijk vanaf de overkant van de straat naar de onderkant van je dak. Hangt er geen goot aan de voorkant, maar loopt de regenpijp toch tot aan het dak, of komt hij een stukje uit het dakvlak? Dan ligt de goot waarschijnlijk in het dak. Bij een bakgoot ligt de goot in de rand van het dak, vaak achter een houten lijst. Bij een verholen goot ligt hij nog iets hoger, in het dakvlak zelf. Twijfel je, stuur me dan een foto, dan zeg ik wat je hebt. Zie ook <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>.`,
      ] },
      { kop: `Waar hij meestal lekt`, tekst: [
        `Bij de uitloop naar de regenpijp. Daar blijven blad en mos hangen, en zit die dicht, dan komt het water hoger dan de rand van het zink te staan en loopt het eroverheen naar binnen.`,
        `Bij een naad of een hoek in het zink, die na veel jaren openscheurt, zeker na een winter met ijs in de goot.`,
        `Op een plek waar het zink dun is geworden, omdat er jarenlang water en blad op heeft gelegen.`,
        `Aan de bovenrand, waar het zink onder de pannen erboven doorloopt. Ligt daar een pan scheef of is het zink daar gescheurd, dan loopt het water erachter.`,
      ] },
      { kop: `Waarom je het binnen ziet`, tekst: [
        `Een gewone goot hangt buiten de muur. Lekt hij, dan valt het water naar buiten. Een verholen goot ligt boven de muur of boven je zolder, dus wat er door het zink gaat, komt in het hout eronder, in de muur of op je zolder terecht. Je ziet het als een natte plek bovenin de muur, vlak onder het plafond, of als een donkere rand op de zoldervloer langs de voet van het dak. Lees ook <a href="/kennisbank/natte-plek-bovenin-muur/">natte plek bovenin de muur</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet zelf het dak op om bij de goot te komen. Hij ligt in het dakvlak, en daar sta je op pannen die nat en glad kunnen zijn. Kit uit de bouwmarkt op een natte, vuile naad houdt meestal niet lang, en moet de naad later gesoldeerd worden, dan moet die kit er eerst weer af.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Eerst maak ik de goot leeg en de uitloop naar de regenpijp vrij, en kijk ik over de hele lengte hoe het zink erbij ligt. Lekt hij bij één naad of hoek en is het zink verder goed, dan soldeer ik die naad opnieuw. Lekt de goot op meer plekken een beetje, maar is het zink nog stevig, dan kan ik de goot van binnen coaten. Is het zink op veel plekken dun of zitten er gaten in, dan zeg ik eerlijk dat er een nieuw stuk zink in moet. Is het hout onder de goot zacht geworden, dan hoor je dat ook van me. Zie <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a> en <a href="/diensten/bakgoot-repareren/">bakgoot repareren</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er nodig is en hoe ik erbij kan: alleen leegmaken, een naad solderen, de goot van binnen coaten of een stuk zink vervangen. Stuur een foto van je dak vanaf de straat en van de natte plek binnen via WhatsApp, dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: bakgoot repareren`, href: `/diensten/bakgoot-repareren/` },
    faq: [
      { v: `Wat is het verschil tussen een verholen goot en een bakgoot?`, a: `Allebei liggen ze in het dak en niet aan de voorkant. Een bakgoot zit in de rand van het dak, vaak achter een houten lijst die je vanaf de straat ziet. Een verholen goot ligt nog wat hoger, in het dakvlak zelf, met daaronder vaak nog een rij pannen of een strook zink. Lekt een van de twee, dan komt het water in de regel binnen en niet langs de gevel.` },
      { v: `Hoe vaak moet een verholen goot leeg?`, a: `Minstens één keer per jaar, het liefst als de bomen kaal zijn. Staan er veel bomen bij je huis, dan is twee keer per jaar slim. Juist bij deze goot loont dat, want loopt hij over, dan gaat het water naar binnen in plaats van naar buiten.` },
      { v: `Is een lekkende verholen goot spoed?`, a: `Druppelt het binnen, zit de natte plek bij een lamp of stopcontact of wordt hij bij elke bui groter, dan wel: zet de groep van die kamer uit en bel of app me met een foto. Is het alleen een oude, droge kring die niet groter wordt, dan kan het meestal een paar dagen wachten. Laat het niet de hele winter liggen.` },
    ],
  },
  {
    slug: `aardlekschakelaar-slaat-af-bij-regen`,
    datum: `2026-11-18`,
    titel: `Stroom valt uit als het regent?`,
    h1: `Je aardlekschakelaar slaat af als het regent: zit er water bij de elektra, en komt dat van je dak?`,
    metaTitle: `Aardlekschakelaar slaat af bij regen? | Spoed Dak Service`,
    metaDescription: `Slaat je aardlekschakelaar af als het regent? Vaak zit er water in een buitenlamp of stopcontact. Soms komt het via een daklek of een volle goot bij de elektra.`,
    intro: `Het regent, en ineens is het donker in een deel van je huis. In de meterkast staat de aardlekschakelaar omlaag. Die schakelt de stroom uit zodra er ergens stroom weglekt, en water is daar een bekende oorzaak van. Vaak zit het water buiten, in een lamp of stopcontact aan de gevel. Soms komt het via je dak of een volle goot bij een lamp, een lasdoos of een kabel binnen. Hieronder lees je hoe je dat uitzoekt, wat je zelf veilig kunt doen en wie je belt.`,
    secties: [
      { kop: `Eerst veilig`, tekst: [
        `Raak niets aan met natte handen, en ook geen lamp, stopcontact of schakelaar die nat is. Zet de aardlekschakelaar niet steeds opnieuw aan als hij meteen weer afslaat. Is de meterkast zelf nat, raak dan niets aan en lees eerst <a href="/kennisbank/lekkage-meterkast-bij-regen/">water in je meterkast als het regent</a>. Ruik je een brandlucht of zie je vonken, bel dan 112.`,
      ] },
      { kop: `Zoek uit welke groep het is`, tekst: [
        `Is de meterkast droog, dan kun je zelf kijken welke groep het is. Zet alle groepen uit, zet de aardlekschakelaar weer aan en zet de groepen daarna een voor een aan. Slaat hij af bij één groep, laat die groep dan uit staan. De rest van je huis heeft dan weer stroom. Schrijf op welke groep het is en welke lampen en stopcontacten erop zitten, want dat helpt de installateur en mij.`,
      ] },
      { kop: `Buiten: een lamp of stopcontact in de regen`, tekst: [
        `Heel vaak zit het water buiten: in een lamp aan de gevel, een buitenstopcontact, tuinverlichting of de kabel naar een schuur. Dat is werk voor een installateur. Kijk wel waar die lamp of dat stopcontact hangt. Zit hij vlak onder de goot, en loopt die goot bij een bui over, dan valt het water er precies op. Ook onder een afdakje boven de voordeur dat lekt, kan een lamp nat worden. Dan moet ook de goot of het afdak gemaakt worden, anders gebeurt het bij de volgende bui weer. Lees ook <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>.`,
      ] },
      { kop: `Binnen: water dat via het dak bij de elektra komt`, tekst: [
        `Zit de groep op de bovenste verdieping, op zolder of in een aanbouw met een plat dak, dan kan het water van het dak komen. Het loopt eerst over de folie, een balk of de isolatie en komt dan in een lampdoos, het gat van een spotje of een lasdoos op zolder terecht. Soms zie je beneden nog geen natte plek. Ook de kabel van zonnepanelen die onder een pan of door het dak naar binnen gaat, kan water naar binnen leiden. Lees <a href="/kennisbank/water-uit-lamp-plafond/">water uit je lamp of spotjes</a>, <a href="/kennisbank/water-uit-stopcontact-bij-regen/">water uit je stopcontact als het regent</a> en <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a>.`,
      ] },
      { kop: `Zo kijk je zelf, zonder het dak op te gaan`, tekst: [
        `Ga tijdens of vlak na een bui met een zaklamp naar zolder, boven de lampen en stopcontacten van de groep die afslaat. Kijk of het hout, de folie of de isolatie daar nat is, en of er water langs een kabel loopt. Kijk buiten vanaf de straat of de goot boven een buitenlamp overloopt. Gebeurt het alleen bij harde wind uit één richting, let dan vooral op de kant van het huis waar de regen tegenaan slaat. Maak van alles een foto.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Schroef geen lamp of stopcontact open om te kijken, ook niet als de groep uit staat. Er kan nog water in de doos of in de buis erachter zitten. Föhn niets droog en plak niets af met tape. En ga niet zelf het dak op om het lek te zoeken.`,
      ] },
      { kop: `Wie doet wat`, tekst: [
        `De installateur maakt de elektra weer veilig: hij kijkt of de lamp, het stopcontact en de bedrading droog en heel zijn, en vervangt wat kapot is. Ik maak het lek dicht waardoor het water bij de elektra kwam: op het dak, bij een kabel door het dak of bij de goot. Komt het water niet van boven, dan zeg ik dat eerlijk. Zie ook <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur me een foto van de plek op zolder of buiten, zeg welke groep het is en wat erop zit, en wanneer het gebeurt: bij elke bui of alleen bij harde wind. Op zolder volg ik het spoor van het water omhoog naar de plek waar het binnenkomt, en buiten kijk ik naar de pannen, het lood, de doorvoer van een kabel en de goot. Aan de elektra zelf kom ik niet. Je hoort vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mag ik de groep weer aanzetten als het droog is?`, a: `Liever pas als een installateur heeft gekeken. Ook als het droog lijkt, kan er nog water in een lampdoos, een stopcontact of de buis erachter zitten. Laat die groep tot die tijd uit staan. De rest van je huis kan meestal gewoon weer aan.` },
      { v: `Het gebeurt alleen bij harde regen uit één richting. Wat zegt dat?`, a: `Dat de regen ergens naar binnen waait op een plek die bij gewone regen droog blijft. Buiten kan dat een lamp of stopcontact aan die kant van het huis zijn. Op het dak kan het een pan zijn die een stukje scheef ligt, of lood dat omhoog staat, waardoor de regen bij harde wind onder de pannen komt en langs een kabel naar beneden loopt. Kijk na zo'n bui op zolder aan die kant van het huis.` },
      { v: `Is het spoed?`, a: `Valt de stroom uit en blijft de aardlekschakelaar afslaan, dan wil je dat snel geregeld hebben. Laat de groep uit staan en bel een installateur voor de elektra. Komt het water van je dak of van de goot, bel of app mij dan met een foto. Druppelt het binnen bij een lamp of stopcontact, of is de meterkast nat, dan is het spoed.` },
    ],
  },
  {
    slug: `garagebox-dak-lekt`,
    datum: `2026-11-18`,
    titel: `Dak van je garagebox lekt?`,
    h1: `Het dak van je garagebox lekt: waar het meestal zit, wie het regelt en wat eraan te doen is`,
    metaTitle: `Dak garagebox lekt: wat nu? | Spoed Dak Service`,
    metaDescription: `Lekt het dak van je garagebox? Vaak zit het bij de naad met de box ernaast, de rand of de afvoer. Zo zie je waar, wie het regelt en wat eraan te doen is.`,
    intro: `Een garagebox staat vaak in een rij, soms een eind van je huis, en je komt er niet elke dag. Daardoor merk je een lek vaak pas als er een plas op de vloer staat of je spullen nat zijn. Bijna elke garagebox heeft een plat dak, en bij een rij boxen loopt dat dak vaak door over meerdere boxen. Hieronder lees je waar het meestal lekt, hoe je dat regelt met de andere eigenaren en wat ik eraan doe.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet spullen hoger of haal ze weg en zet een bak onder de druppel. Zit er een lamp, stopcontact of vriezer in de box en wordt het daar nat, zet dan de stroom eraf als dat veilig kan. Ga niet zelf op het dak staan: een oud plat dak kan op plekken zacht zijn, en de rand is vaak laag. Maak een foto van de natte plek binnen. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Op de grens met de box ernaast. Daar loopt de dakbedekking over de muur tussen de boxen, of zit er een naad of een opstaande rand. Het dak werkt bij warm en koud weer steeds een beetje, en op zo'n overgang scheurt de bedekking vaak het eerst.`,
        `Aan de rand. Aan de voorkant boven de deur en aan de achterkant zit een rand van hout, aluminium of zink. Laat de dakbedekking daar los, dan loopt het water langs de muur naar binnen. Lees ook <a href="/kennisbank/daktrim-lekt/">daktrim lekt</a>.`,
        `Bij de afvoer. Vaak heeft een rij boxen één afvoer of een gootje aan de achterkant. Zit die vol blad of mos, dan blijft het water op het dak staan en zoekt het een weg naar binnen. Zie <a href="/kennisbank/plat-dak-lekt-bij-afvoer/">plat dak lekt bij de afvoer</a>.`,
        `Op een zachte plek. Heeft het lang gelekt, dan wordt het hout onder de dakbedekking zacht, en daar blijft na een bui een plas staan. Lees <a href="/kennisbank/zachte-plek-plat-dak/">zachte plek in je platte dak</a>.`,
      ] },
      { kop: `Dakleer, EPDM of golfplaten?`, tekst: [
        `Op veel garageboxen ligt dakleer of een andere bitumen dakbedekking, op nieuwere boxen ook EPDM, een rubber dakbedekking. Op oudere boxen liggen soms golfplaten. Zijn die grijs en van voor 1994, laat ze dan eerst onderzoeken op asbest, want daar boor of zaag ik niet in. Meer lees je bij <a href="/kennisbank/dakleer-repareren/">dakleer repareren</a>, <a href="/kennisbank/epdm-dak-lekt/">EPDM-dak lekt</a> en <a href="/kennisbank/golfplaten-lekken/">golfplaten lekken</a>.`,
      ] },
      { kop: `Een rij boxen: wie regelt het dak?`, tekst: [
        `Bij een rij garageboxen is het dak soms van elke eigenaar apart, maar vaak hoort het bij een VvE of staat in de akte dat jullie het samen onderhouden. Kijk in je koopakte of de splitsingsakte, of vraag het na bij de VvE of de beheerder. Huur je de box, meld het lek dan bij de verhuurder. Lekt het op de grens met de box ernaast, dan is het slim om het samen te laten maken. Dan hoeft er maar één keer iemand op het dak, en blijft de naad tussen jullie boxen dicht.`,
      ] },
      { kop: `Repareren of een nieuwe dakbedekking?`, tekst: [
        `Gaat het om één scheur, een losse naad of een lek bij de rand of de afvoer, dan is een gerichte reparatie vaak genoeg. Is de dakbedekking over het hele dak bros, zitten er veel blazen in of is hij al vaak gelapt, dan zeg ik eerlijk dat een nieuwe dakbedekking op termijn slimmer is. Bij een rij boxen is het dan vaak handig om dat samen met de andere eigenaren te doen.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik kijk eerst binnen waar het water binnenkomt, en daarna op het dak bij de naden, de rand en de afvoer. Een scheur of losse naad maak ik dicht, en een verstopte afvoer maak ik vrij. Is het hout onder de dakbedekking op een plek rot, dan vervang ik dat stuk en maak ik het dak daar weer dicht. Zie <a href="/diensten/platte-daken/">plat dak repareren</a> en <a href="/diensten/dakbeschot-vervangen/">rot dakbeschot vervangen</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er mis is en hoe groot het stuk is. Stuur een foto van het dak, gemaakt vanaf een plek waar je veilig staat, en van de natte plek binnen via WhatsApp. Zeg erbij of het om één box gaat of om meer. Dan hoor je vooraf wat het kost.`,
      ] },
    ],
    dienst: { label: `Bekijk: plat dak repareren`, href: `/diensten/platte-daken/` },
    faq: [
      { v: `Kan ik het lek zelf dichtmaken met bitumenkit?`, a: `Op een droge, schone plek houdt een likje kit soms een tijdje, maar vaak zit het lek ergens anders dan de plek die je ziet. Water loopt onder de dakbedekking een stuk door voordat het binnenkomt, en op een nat of vuil dak plakt kit niet. Ga er ook niet op staan als het dak zacht voelt. Stuur liever een foto van de natte plek binnen en van het dak.` },
      { v: `Ik wil alleen het stuk boven mijn eigen box laten maken. Kan dat?`, a: `Vaak wel, als het lek boven jouw box zit en de dakbedekking verder nog goed is. Ik let dan extra op de naad met de boxen ernaast, zodat het daar dicht blijft. Hoort het dak bij een VvE, vraag dan eerst of jij de opdracht mag geven.` },
      { v: `Moet ik erbij zijn als je komt kijken?`, a: `Voor de eerste keer kijken is het fijn als de box open is, want dan zie ik binnen waar het water binnenkomt. Spreek met me af wanneer dat kan, en zeg erbij waar de box staat en hoe ik erbij kom. Of je bij de reparatie zelf moet zijn, spreken we daarna samen af.` },
    ],
  },
  {
    slug: `vergunning-dak-vernieuwen`,
    datum: `2026-11-18`,
    titel: `Vergunning nodig voor je dak?`,
    h1: `Heb je een vergunning nodig om je dak te repareren of te vernieuwen?`,
    metaTitle: `Vergunning nodig voor je dak? | Spoed Dak Service`,
    metaDescription: `Pannen, lood of een goot herstellen is meestal gewoon onderhoud. Bij een monument, beschermd stadsgezicht of andere pannen ligt dat anders. Zo zoek je het uit.`,
    intro: `Ga je je dak laten repareren of vernieuwen, dan vraag je je misschien af of je daar toestemming voor nodig hebt. Meestal niet: een kapotte pan, een lekkende goot of los lood herstellen is onderhoud. Maar bij een monument, in een beschermd stadsgezicht of als je dak er anders uit gaat zien, kan dat anders zijn. Hieronder lees je waar je op let en waar je het nakijkt.`,
    secties: [
      { kop: `Gewone reparatie: meestal geen vergunning`, tekst: [
        `Een gebroken pan vervangen, een nokvorst vastzetten, lood rond de schoorsteen vernieuwen of een lekkende goot repareren is onderhoud. Blijft het dak er daarna net zo uitzien, met dezelfde soort en kleur pannen, dan heb je daar in de regel geen vergunning voor nodig. Lekt het nu, wacht dan niet: eerst moet het binnen droog blijven. Zie de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Het hele dak vernieuwen`, tekst: [
        `Gaan alle pannen eraf en komen er pannen terug van dezelfde soort, vorm en kleur, dan is dat bij een gewoon huis meestal ook vergunningvrij. Wil je een andere kleur of een ander soort pan, of verandert de vorm van het dak, vraag het dan eerst na. Sommige gemeenten letten in bepaalde straten op hoe een dak eruitziet. Hoe het vernieuwen bij een huis in een rij gaat, lees je in <a href="/kennisbank/dak-vernieuwen-rijtjeshuis/">dak vernieuwen bij een rijtjeshuis</a>.`,
      ] },
      { kop: `Een monument of een beschermd stadsgezicht`, tekst: [
        `Woon je in een rijksmonument of een gemeentelijk monument, dan heb je voor veel veranderingen aan het dak een vergunning nodig, ook voor dingen die bij een gewoon huis vrij zijn. Gewoon onderhoud met hetzelfde materiaal valt daar meestal niet onder, maar vraag het bij twijfel eerst na. In een beschermd stadsgezicht, zoals de binnenstad van Den Bosch of de vesting Heusden, gelden vaak regels voor wat je vanaf de straat ziet. Meer lees je in <a href="/kennisbank/dak-monument-repareren/">je dak repareren in een monument</a>.`,
      ] },
      { kop: `Zink, lood en de goot`, tekst: [
        `Een zinken goot vervangen door een kunststof goot, of echt lood door loodvervanger, verandert hoe je huis eruitziet. Bij een gewoon huis is dat meestal geen probleem, bij een monument vaak wel. Lees ook <a href="/kennisbank/lood-of-loodvervanger/">lood of loodvervanger</a> en <a href="/kennisbank/dakgoot-zink-of-kunststof/">dakgoot van zink of kunststof</a>.`,
      ] },
      { kop: `Een steiger of container op de stoep`, tekst: [
        `Staat er voor het werk een steiger, een container of een bouwlift op de stoep of de straat, dan vraagt de gemeente daar vaak een melding of een vergunning voor, omdat je dan de openbare ruimte gebruikt. Hoe dat werkt, verschilt per gemeente. Bij een korte klus met een ladder speelt dat meestal niet.`,
      ] },
      { kop: `VvE, huur en de buren`, tekst: [
        `Woon je in een appartement, dan beslist meestal de VvE over het dak. Huur je, dan regelt de verhuurder het. En moet er voor het werk iets via de tuin of het dak van de buren, lees dan <a href="/kennisbank/dak-repareren-via-buren/">je dak repareren via de buren</a>.`,
      ] },
      { kop: `Zo zoek je het uit`, tekst: [
        `Bij het Omgevingsloket van de overheid kun je met de vergunningcheck kijken of je voor jouw plan een vergunning nodig hebt. Twijfel je, bel of mail dan je gemeente. Zeg erbij wat er precies gebeurt: welke pannen, welke kleur en of er iets aan de vorm van het dak verandert.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Bij een reparatie of renovatie vertel ik je vooraf wat ik ga doen en met welk materiaal, zodat je dat kunt doorgeven als de gemeente erom vraagt. Een kapotte pan vervang ik door een pan die in vorm en kleur past, zodat je dak er vanaf de straat hetzelfde uitziet. Bij een renovatie kunnen er, als je dat wilt, nieuwe folie en nieuwe panlatten onder de pannen. De vergunning zelf vraag je als eigenaar aan. Zie <a href="/diensten/dakrenovatie/">dakrenovatie</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakrenovatie`, href: `/diensten/dakrenovatie/` },
    faq: [
      { v: `Mag ik andere dakpannen kiezen dan mijn buren?`, a: `Bij een gewoon huis meestal wel. In een rij huizen valt een dak met andere pannen wel op, en in sommige straten let de gemeente daarop, dus vraag het bij twijfel na. Bij een monument of in een beschermd stadsgezicht heb je voor een ander soort of een andere kleur pan in de regel toestemming nodig.` },
      { v: `Moet ik met een lek wachten tot ik weet of het mag?`, a: `Nee. Een lek dichtmaken, ook tijdelijk, is onderhoud en kan in de regel meteen. Maak wel foto's van hoe het eruitzag. Gaat er bij de nette reparatie daarna iets aan het uiterlijk van je dak veranderen, vraag dat dan na bij je gemeente.` },
      { v: `Kost een vergunning geld?`, a: `Vaak wel. Een gemeente vraagt meestal leges voor een vergunning, en hoeveel dat is, verschilt per gemeente. Kijk op de site van je gemeente of vraag het daar na voordat je de aanvraag doet.` },
    ],
  },
  {
    slug: `dakgoot-vernieuwen`,
    datum: `2026-11-18`,
    titel: `Je dakgoot laten vernieuwen: hoe gaat dat?`,
    h1: `Je dakgoot laten vernieuwen: zo gaat dat, van de oude goot tot de eerste bui`,
    metaTitle: `Dakgoot vernieuwen: zo gaat dat | Spoed Dak Service`,
    metaDescription: `Moet je dakgoot vernieuwd worden? Eerst kijk ik of repareren nog kan. Daarna kies je zink of kunststof, gaat de oude goot eraf en hangt de nieuwe op afschot.`,
    intro: `Lekt je dakgoot op steeds meer plekken, hangt hij door of is hij bros geworden, dan houdt een reparatie het vaak niet lang meer. Dan komt er een nieuwe goot. Hieronder lees je hoe dat gaat: wat ik eerst nakijk, welke keuzes je hebt, wat er op de dag zelf gebeurt en waar je daarna op let. Zo weet je wat je kunt verwachten voordat je belt.`,
    secties: [
      { kop: `Eerst: moet hij echt nieuw?`, tekst: [
        `Een goot die lekt, hoeft er niet altijd uit. Lekt hij bij één naad, één hoek of de uitloop naar de regenpijp, dan is dat stuk vaak te repareren: een zinken naad opnieuw solderen, een kunststof hoekstuk vervangen of de goot weer op afschot hangen. Een zinken goot die op een paar plekken dun wordt maar nog stevig hangt, kan vaak van binnen gecoat worden.`,
        `Vernieuwen is slimmer als de goot over een groot stuk dun, gescheurd of bros is, als er bij elke bui een nieuw lek bij komt, of als hij al vaak gelapt is. Hoe je ziet dat een goot op raakt, lees je in <a href="/kennisbank/hoe-lang-gaat-een-dakgoot-mee/">hoe lang gaat een dakgoot mee</a>.`,
      ] },
      { kop: `Zink of kunststof`, tekst: [
        `Bij de meeste huizen kies je tussen zink en kunststof. Zink gaat lang mee en past bij een ouder huis of een zinken regenpijp. Kunststof is lichter en vraagt weinig onderhoud. Staat je huis in een rij, kijk dan ook naar de buren: loopt de goot in één lijn door, dan moet de nieuwe goot op de grens netjes aansluiten op die van hen. Het verschil lees je in <a href="/kennisbank/dakgoot-zink-of-kunststof/">dakgoot van zink of kunststof</a>.`,
        `Woon je in een monument of in een beschermd stadsgezicht, vraag dan eerst bij de gemeente na of je een zinken goot door kunststof mag vervangen. Meer lees je in <a href="/kennisbank/vergunning-dak-vernieuwen/">vergunning nodig voor je dak</a>.`,
      ] },
      { kop: `Wat ik vooraf nakijk`, tekst: [
        `Voordat je een prijs hoort, kijk ik naar de hele goot: hoe lang hij is, waar de regenpijpen zitten, hoe hij nu hangt en of het water van de onderste rij pannen goed in de goot valt. Ik kijk ook naar het hout waar de goot aan vastzit. Is dat op een plek zacht, dan hoor je dat vooraf, want een nieuwe goot aan zacht hout blijft niet lang recht hangen.`,
        `Stuur me een foto van de goot vanaf de straat, van beide uiteinden en van de plek waar het lekt. Dan zie ik vaak al wat er nodig is.`,
      ] },
      { kop: `Op de dag zelf`, tekst: [
        `De oude goot gaat eraf, en het oude zink of kunststof neem ik mee. Beugels die krom, los of verroest zijn, vervang ik. Daarna hang ik de nieuwe goot op met een klein beetje afschot naar de regenpijp, zodat er na een bui geen water in blijft staan. Bij zink soldeer ik de naden en de hoeken, bij kunststof gaan de stukken in elkaar met passende verbindingen. Tot slot sluit ik de uitloop aan op de regenpijp.`,
        `Is de regenpijp ook gescheurd of los, dan kan die in dezelfde keer mee. Zie <a href="/diensten/regenpijp-vervangen/">regenpijp vervangen of repareren</a>.`,
      ] },
      { kop: `Het weer`, tekst: [
        `Een nieuwe goot ophangen kan ook als het koud is, op een droge dag. Solderen en lijmen gaan alleen op een droge goot zonder ijs, dus bij regen, sneeuw of vorst wacht ik met dat deel. Lekt je oude goot nu, dan maak ik hem vaak eerst leeg, zodat het water weer naar de regenpijp loopt tot de nieuwe er hangt. Wat je zelf tot die tijd kunt doen, lees je in <a href="/kennisbank/lekkende-dakgoot-tijdelijk-oplossen/">een lekkende dakgoot tijdelijk oplossen</a>.`,
      ] },
      { kop: `Na de eerste bui`, tekst: [
        `Kijk bij de eerste flinke bui vanaf de straat of het water netjes in de goot valt, bij de regenpijp wegloopt en nergens langs de gevel druppelt. Zie je iets, stuur me dan een foto of een kort filmpje. Laat de goot daarna één keer per jaar leegmaken, het liefst als de bomen kaal zijn.`,
      ] },
      // 23-11-2026 ronde 4: nieuw stuk met links naar twee weinig gelinkte gootartikelen.
      { kop: `Lekt het juist sinds de nieuwe goot?`, tekst: [
        `Wordt de muur nat of druppelt het sinds er een nieuwe goot hangt, dan zit het meestal niet in de goot zelf, maar in hoe hij hangt: te laag onder de pannen, zodat het water erachter valt, een uitloop die niet goed op de regenpijp aansluit, of een naad die niet dicht is. Kijk bij een bui waar het water precies naar beneden komt. Hoe je dat herkent en wat je dan doet, lees je in <a href="/kennisbank/lekt-sinds-nieuwe-dakgoot/">lekt het sinds je nieuwe dakgoot?</a> Loopt het water achter de goot langs de muur, lees dan ook <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van hoe lang de goot is, zink of kunststof, hoeveel hoeken en regenpijpen er zijn en hoe goed ik erbij kan. Een vast bedrag noem ik hier daarom niet. Stuur een foto via WhatsApp, dan hoor je vooraf wat het kost. Zie ook <a href="/diensten/dakgoot-vervangen/">dakgoot repareren of vervangen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakgoot repareren of vervangen`, href: `/diensten/dakgoot-vervangen/` },
    faq: [
      { v: `Kan eerst alleen de voorgoot nieuw, en de goot aan de achterkant later?`, a: `Ja, dat kan. Vaak is de ene kant er slechter aan toe dan de andere, bijvoorbeeld de kant onder de bomen of op het noorden. Dan vernieuw je eerst die goot en laat je de andere nakijken. Bij een huis in een rij let ik op de aansluiting op de goot van de buren, zodat het op de grens dicht blijft.` },
      { v: `Mag ik mijn oude zinken goot vervangen door kunststof?`, a: `Bij een gewoon huis meestal wel. Bij een monument of in een beschermd stadsgezicht let de gemeente op wat je vanaf de straat ziet, dus vraag het daar eerst na. Twijfel je wat bij je huis past, stuur dan een foto van de goot en de gevel, dan denk ik mee.` },
      { v: `Hoe lang duurt het om een dakgoot te vernieuwen?`, a: `Dat hangt af van de lengte van de goot, het aantal hoeken en regenpijpen en hoe goed ik erbij kan. Voor solderen en lijmen is een droge dag nodig. Hoe lang ik bezig ben, hoor je vooraf, net als wat het kost.` },
    ],
  },
  {
    slug: `goot-loopt-over-door-regenton`,
    datum: `2026-11-18`,
    titel: `Goot loopt over sinds je een regenton hebt?`,
    h1: `Je dakgoot loopt over sinds er een regenton aan de regenpijp zit: hoe komt dat?`,
    metaTitle: `Goot loopt over door regenton? | Spoed Dak Service`,
    metaDescription: `Loopt je dakgoot over sinds er een regenton aan de regenpijp zit? Vaak zit het zeefje dicht, staat de ton te hoog of zit er ijs in. Zo zoek je het uit.`,
    intro: `Een regenton aan je regenpijp is handig voor de tuin. Maar soms loopt de dakgoot daarna bij een flinke bui over, terwijl hij schoon is. Dat komt dan meestal niet door de goot, maar door het stuk in de regenpijp dat het water naar de ton stuurt. Hieronder lees je hoe dat werkt, waar het misgaat en wat je zelf veilig kunt nakijken.`,
    secties: [
      { kop: `Komt het water binnen?`, tekst: [
        `Loopt de goot over en komt het water binnen, bovenin de muur of langs een kozijn, zet dan een bak neer, haal spullen weg en stuur me een foto. Ga niet op een ladder tegen de goot staan. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo zit een regenton aan je regenpijp`, tekst: [
        `Meestal zit er halverwege de regenpijp een tussenstuk, een vulautomaat of regenwaterafscheider. Daarin vangt een zeefje of een rand een deel van het water op en stuurt het via een slang naar de ton. Is de ton vol, dan hoort het water gewoon verder door de regenpijp naar beneden te lopen. Soms is er geen tussenstuk en is de regenpijp doorgezaagd, zodat hij boven of in de ton uitkomt.`,
      ] },
      { kop: `Waar het misgaat`, tekst: [
        `Het zeefje zit dicht. Blad, naalden, mos en zand uit de goot spoelen mee naar beneden en blijven hangen in het zeefje van het tussenstuk. Dan kan het water er bij een flinke bui niet snel genoeg door, het komt in de regenpijp omhoog en de goot loopt over. Vaak loopt de goot juist over boven de pijp met de ton, en niet boven een andere pijp.`,
        `De ton heeft geen goede overloop. Komt de regenpijp onderin de ton uit, of zit de ton hoger dan het tussenstuk, dan kan het water bij een volle ton nergens heen. Het blijft in de pijp staan tot in de goot, of het loopt over de rand van de ton tegen je gevel.`,
        `IJs in de winter. Staat er water in het tussenstuk, de slang of de ton, dan bevriest dat bij vorst. Het ijs zet de pijp dicht, en bij de dooi of de eerste bui daarna loopt de goot over. Soms scheurt het tussenstuk of de pijp zelfs open. Lees ook <a href="/kennisbank/regenpijp-kapot-door-vorst/">regenpijp kapot door vorst</a>.`,
      ] },
      { kop: `Wat je zelf veilig kunt doen`, tekst: [
        `Het tussenstuk zit meestal op ooghoogte, dus daar kun je vaak vanaf de grond bij. Haal het zeefje eruit, maak het schoon en kijk of de slang naar de ton vrij is. Doe dat na de bladval en in het voorjaar, en kijk na een storm of er blad in zit.`,
        `Voor de winter: sommige tussenstukken hebben een stand voor de winter, waarbij al het water gewoon naar beneden loopt. Heeft het jouwe dat niet, haal dan de slang los en laat de ton leeglopen voordat het gaat vriezen. Kijk in de uitleg van je eigen tussenstuk, want ze werken niet allemaal hetzelfde. Ga niet op een ladder tegen de goot staan om bovenin te kijken.`,
      ] },
      { kop: `Ligt het toch aan de goot?`, tekst: [
        `Loopt de goot ook over boven een regenpijp zonder ton, of blijft hij overlopen nu het zeefje schoon is, dan zit het vaak in de goot zelf: blad bij de uitloop, een goot die doorhangt of niet goed afloopt naar de pijp. Lees dan <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a> en <a href="/kennisbank/verstopte-regenpijp-lekkende-dakgoot/">verstopte regenpijp of lekkende dakgoot</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de goot en de uitloop naar de regenpijp leeg en kijk of het water daarna goed wegloopt. Is de regenpijp of een bocht gescheurd, bijvoorbeeld door ijs, dan vervang ik dat stuk. Stuur een foto van de goot, van de regenpijp met het tussenstuk en van de ton via WhatsApp, dan hoor je vooraf wat het kost. Zie <a href="/diensten/regenpijp-vervangen/">regenpijp vervangen of repareren</a> en <a href="/diensten/goten-reinigen/">dakgoot schoonmaken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: regenpijp vervangen of repareren`, href: `/diensten/regenpijp-vervangen/` },
    faq: [
      { v: `Kan ik de regenton in de winter gewoon laten staan?`, a: `Dat kan, als er geen water in het tussenstuk en de slang blijft staan. Zet het tussenstuk in de winterstand als het die heeft, of haal de slang los en laat de ton leeglopen voordat het gaat vriezen. Een volle ton die bevriest, kan zelf ook scheuren.` },
      { v: `Mijn goot loopt alleen over bij een stortbui. Kan dat door de ton komen?`, a: `Dat kan. Een zeefje dat half dicht zit, laat bij gewone regen genoeg door, maar bij een stortbui niet. Maak het zeefje schoon en kijk bij de volgende flinke bui of het beter gaat. Loopt de goot dan nog over, stuur me dan een kort filmpje van de goot tijdens de bui.` },
      { v: `Moet mijn goot vaker leeg als er een regenton aan zit?`, a: `De goot zelf niet: één keer per jaar is meestal genoeg, het liefst als de bomen kaal zijn. Het zeefje in het tussenstuk wel. Maak dat na de bladval en in het voorjaar schoon, en na een storm als er veel blad is gevallen.` },
    ],
  },
  {
    slug: `bungalow-dak-lekt`,
    datum: `2026-11-19`,
    titel: `Dak van je bungalow lekt?`,
    h1: `Het dak van je bungalow lekt: waar het zit als er geen zolder is`,
    metaTitle: `Dak van je bungalow lekt? | Spoed Dak Service`,
    metaDescription: `Lekt het dak van je bungalow? Zonder zolder zie je het lek pas aan je plafond. Zo vind je waar het zit bij een plat of flauw pannendak, en wat je meteen doet.`,
    intro: `Een bungalow heeft alles op één verdieping, en vaak zit er geen zolder tussen het dak en je kamers. Lekt het dak, dan zie je dat daarom meteen aan het plafond van je woonkamer of slaapkamer, en kun je niet even boven kijken waar het water binnenkomt. Hieronder lees je waar een bungalowdak meestal lekt, wat je zelf meteen doet en hoe ik het lek zoek.`,
    secties: [
      { kop: `Lekt het nu?`, tekst: [
        `Zet een emmer onder de druppel, haal spullen weg en zet in de meterkast de groep uit als het bij een lamp of spotje nat wordt. Bolt het plafond op, ga er dan niet onder staan. Ga niet zelf het dak op, ook al is het laag: een nat plat dak of een nat pannendak is glad. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waarom je het lek bij een bungalow lastig vindt`, tekst: [
        `Zonder zolder loopt het water van het lek tussen de dakbedekking of de pannen en je plafond door, langs de balken en de isolatie, en komt het pas ergens anders naar beneden. De natte plek op je plafond zit daardoor vaak niet recht onder het lek. Hoe dat werkt, lees je in <a href="/kennisbank/daklekkage-opsporen/">daklekkage opsporen</a>.`,
      ] },
      { kop: `Met een plat dak`, tekst: [
        `Een deel van de bungalows, vooral uit de jaren '60 en '70, heeft een plat dak. Daar zit een lek meestal bij de afvoer of de regenpijp die vol blad zit, zodat er water op het dak blijft staan, bij de rand van het dak, rond een lichtkoepel of een schoorsteen, of bij een naad die is gaan openstaan. Is het dak groot en zijn er maar een of twee afvoeren, dan blijft er na een bui snel ergens een plas staan. Zie <a href="/kennisbank/water-blijft-staan-op-plat-dak/">water blijft staan op je platte dak</a> en <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel lekt</a>.`,
      ] },
      { kop: `Met een flauw pannendak`, tekst: [
        `Andere bungalows hebben een pannendak dat niet zo steil is. Op een flauw dak loopt het water langzamer weg, en bij regen met harde wind kan het dan onder de pannen door waaien. Verder zit een lek vaak bij het lood rond de schoorsteen, bij een kilgoot waar twee delen van het dak samenkomen, zoals bij een bungalow in een L-vorm, of op de plek waar het pannendak overgaat in het platte dak van de garage. Zie <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a> en <a href="/kennisbank/lekkage-overgang-schuin-plat-dak/">lekkage bij de overgang van een schuin naar een plat dak</a>.`,
      ] },
      { kop: `Lekt het bij een lamp of spotje?`, tekst: [
        `In een bungalow zitten de lampen en spotjes vaak direct onder het dak. Komt het water daar naar beneden, laat de groep dan uit staan tot een installateur ernaar heeft gekeken. Lees ook <a href="/kennisbank/water-uit-lamp-plafond/">water uit de lamp of spotjes</a>.`,
      ] },
      { kop: `Wat je zelf kunt bekijken`, tekst: [
        `Kijk vanuit de tuin of vanaf de straat met de zoom van je telefoon naar het dak. Bij een plat dak zie je soms vanaf een hoger huis in de buurt of er water blijft staan. Maak een foto van de natte plek binnen en schrijf op bij welk weer het lekt: bij elke bui, alleen bij een stortbui of alleen bij harde wind uit één richting. Dat helpt mij bij het zoeken.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik zoek eerst buiten waar het water binnenkomt, en maak binnen alleen iets open als het echt niet anders kan, en dan in overleg. Een volle afvoer maak ik leeg, en een gebroken of verschoven pan vervang ik of leg ik terug. Zit het in een losse naad, de rand of een aansluiting van het platte dak, dan hoor je wat er nodig is. Is de dakbedekking op veel plekken op, dan zeg ik eerlijk dat een reparatie niet lang meer houdt. Je hoort vooraf wat het kost. Zie <a href="/diensten/daklekkage/">daklekkage</a> en <a href="/diensten/platte-daken/">platte daken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage & spoed`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Mijn bungalow heeft geen zolder. Hoe vind je dan het lek zonder het plafond open te maken?`, a: `Meestal door buiten te zoeken. Ik kijk naar het dak boven de natte plek en een flink stuk hoger of verder, want het water loopt vaak eerst een eind voordat het binnenkomt. Het helpt als je opschrijft bij welk weer het lekt. Moet er toch iets open, dan bespreek ik dat eerst met je, en dan houd ik het zo klein mogelijk.` },
      { v: `Is een lek in een bungalow eerder spoed?`, a: `Vaak wel, omdat het water meteen in je kamer komt en er geen zolder is die het eerst opvangt. Druppelt het, bolt het plafond op of zit het bij een lamp, bel of app me dan met een foto. Is het een oude, droge kring, dan kan het meestal een paar dagen wachten.` },
      { v: `Kan ik zelf op het platte dak van mijn bungalow kijken?`, a: `Liever niet als het nat, glad of donker is, en ook niet als je niet weet of het dak je kan dragen. Een plat dak lijkt stevig, maar rond een lichtkoepel en aan de rand ga je makkelijk mis. Kijk liever vanaf de grond of vanaf een hoger punt in de buurt, en stuur me een foto.` },
    ],
  },
  {
    slug: `vergaarbak-lekt`,
    datum: `2026-11-19`,
    titel: `Vergaarbak lekt of loopt over?`,
    h1: `De vergaarbak bovenaan je regenpijp lekt of loopt over: waar het zit en wat je doet`,
    metaTitle: `Vergaarbak lekt of loopt over? | Spoed Dak Service`,
    metaDescription: `Zit er bovenaan je regenpijp een bak waar de goot in uitkomt, en loopt die over of lekt hij? Zo komt het, wat je zelf veilig nakijkt en wat ik eraan doe.`,
    intro: `Bij een deel van de huizen komt de goot niet rechtstreeks in de regenpijp uit, maar in een bak bovenaan de pijp: de vergaarbak, soms ook regenwaterbak genoemd. Je ziet hem vaak bij oudere huizen, bij een bakgoot en bij een plat dak. Loopt die bak over of lekt hij, dan komt het water langs je gevel naar beneden, en soms ook binnen. Hieronder lees je hoe zo'n bak werkt, waar het misgaat, wat je zelf veilig kunt bekijken en hoe ik het aanpak.`,
    secties: [
      { kop: `Komt het water binnen?`, tekst: [
        `Wordt het bij een bui nat bovenin de muur of langs een kozijn onder de bak, zet daar dan een bak of handdoek neer, haal spullen weg en stuur me een foto. Zet geen ladder tegen de gevel of de regenpijp om zelf te kijken. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Zo werkt een vergaarbak`, tekst: [
        `De vergaarbak hangt aan de gevel, bovenaan de regenpijp. Het water komt erin via de uitloop van de goot, of via een spuwer: een kort buisje dat door de dakrand of de gevel naar buiten steekt, bijvoorbeeld bij een bakgoot of een plat dak. Onderin de bak zit de opening naar de regenpijp. De meeste vergaarbakken zijn van zink, een deel is van kunststof.`,
      ] },
      { kop: `Waar het misgaat`, tekst: [
        `De opening naar de pijp zit dicht. Blad, mos, zand en naalden uit de goot komen in de bak terecht en blijven liggen bij de opening onderin. Bij een flinke bui kan het water dan niet snel genoeg weg en loopt het over de rand van de bak. Vaak zie je onder de bak een natte of groene plek op de muur.`,
        `Een naad of de bodem lekt. Een zinken bak is aan elkaar gesoldeerd. Na veel jaren laat een naad los, of wordt de bodem dun op de plek waar steeds water en vuil bleven staan. Dan druppelt het onder de bak, ook als hij niet overloopt.`,
        `De pijp zit los. Is de regenpijp een stukje uit de bak gezakt, of hangt de bak scheef omdat een beugel los is, dan loopt het water langs de buitenkant van de pijp naar beneden in plaats van erin.`,
        `IJs in de winter. Blijft er water in de bak staan omdat de opening half dicht zit, dan bevriest dat bij vorst. Bij de dooi kan het smeltwater er niet uit, en het ijs kan een naad openduwen. Lees ook <a href="/kennisbank/regenpijp-kapot-door-vorst/">regenpijp kapot door vorst</a>.`,
      ] },
      { kop: `Waarom het soms binnen nat wordt`, tekst: [
        `Een bak die overloopt, geeft meestal water langs de gevel. Binnen wordt het nat als dat water steeds op dezelfde plek tegen de muur of een kozijn loopt en erin trekt, of als de goot of de afvoer erboven ook vol zit. Komt het water uit een bakgoot, kijk dan ook bij <a href="/kennisbank/bakgoot-lekt/">bakgoot lekt</a>. Komt het van een plat dak, lees dan <a href="/kennisbank/noodoverloop-plat-dak/">water uit de noodoverloop van je platte dak</a>.`,
      ] },
      { kop: `Wat je zelf veilig kunt bekijken`, tekst: [
        `Kijk tijdens een flinke bui vanaf de straat of vanuit een raam naar de bak. Loopt het water over de rand, dan zit de opening waarschijnlijk dicht. Druppelt het onder de bak terwijl hij niet overloopt, dan lekt hij. Komt er onderaan de regenpijp bijna niets uit, dan zit de bak of de pijp ergens dicht. Maak er een foto of een kort filmpje van. Ga niet op een ladder staan om de bak zelf leeg te halen, want hij hangt vaak hoog, vlak onder de dakrand.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik maak de bak leeg en de opening naar de regenpijp vrij, en kijk meteen of de goot erboven ook vol zit. Lekt een naad in een zinken bak, dan soldeer ik die opnieuw. Is de bak op, of is een kunststof bak gescheurd, dan vervang ik hem, vaak samen met het stuk regenpijp eronder. Is de pijp uit de bak gezakt, dan zet ik hem weer goed en maak ik hem vast met beugels. Stuur een foto van de bak en de gevel eronder via WhatsApp, dan hoor je vooraf wat het kost. Zie <a href="/diensten/regenpijp-vervangen/">regenpijp vervangen of repareren</a> en <a href="/diensten/dakgoot-solderen/">dakgoot solderen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: regenpijp vervangen of repareren`, href: `/diensten/regenpijp-vervangen/` },
    faq: [
      { v: `Hoe vaak moet een vergaarbak leeg?`, a: `Meestal is één keer per jaar genoeg, het liefst als de bomen kaal zijn. Staat je huis onder bomen, of komt er water met grind of zand van een plat dak in de bak, dan vaker. Als ik je goot leegmaak, neem ik de bak meteen mee.` },
      { v: `Kan ik een lekke naad in mijn vergaarbak zelf dichtkitten?`, a: `Liever niet. Kit hecht slecht op nat of vuil zink, en als de naad later gesoldeerd moet worden, moet die kit er eerst weer helemaal af. Zet bij een druppel liever iets onder de bak en stuur me een foto.` },
      { v: `Mijn vergaarbak loopt alleen over bij een stortbui. Is dat erg?`, a: `Bij een echte wolkbreuk kan een bak even over de rand gaan, en dat is niet meteen een probleem. Gebeurt het bij elke flinke bui, dan zit de opening naar de pijp vaak half dicht, of komt er meer water in dan de bak en de pijp kunnen hebben. Stuur me een kort filmpje tijdens een bui, dan zie ik wat er speelt.` },
    ],
  },
  {
    slug: `dakdekker-komt-wat-regel-je`,
    datum: `2026-11-19`,
    titel: `De dakdekker komt: wat regel je vooraf?`,
    h1: `De dakdekker komt: wat je vooraf regelt, zodat het werk vlot en veilig gaat`,
    metaTitle: `Dakdekker komt: wat regel je vooraf? | Spoed Dak Service`,
    metaDescription: `Komt de dakdekker langs? Zo regel je vooraf een plek voor de ladder, maak je de zolder bereikbaar en weet je wat je klaarlegt. Een kort lijstje, zonder gedoe.`,
    intro: `Staat er een afspraak voor je dak of je goot, dan scheelt het tijd als een paar dingen vooraf geregeld zijn. Dan kan ik meteen beginnen, en hoef je niet halverwege nog iets op te ruimen of aan de buren te vragen. Hieronder staat wat ik graag weet en wat je zelf kunt klaarzetten. Druppelt het nu binnen, dan hoef je niets voor te bereiden: vang het water op en kijk op de <a href="/spoed/">spoedpagina</a>.`,
    secties: [
      { kop: `Een plek voor de ladder`, tekst: [
        `Ik zet mijn ladder tegen de gevel of op een plat dak, niet tegen de goot. Zeg vooraf waar dat kan: aan de voorkant op de stoep of de oprit, of achter in de tuin. Staat er onder die plek een auto, een fiets, plantenbakken of tuinmeubels, zet die dan een stukje opzij. Bij het werk kan er vuil of een stukje oude specie onder de dakrand naar beneden vallen.`,
      ] },
      { kop: `Kan ik er alleen via de buren bij?`, tekst: [
        `Kom ik alleen via de tuin, het pad of het platte dak van de buren bij je goot of dak, vraag het je buren dan een paar dagen van tevoren. Laat ze weten wanneer ik kom en hoe lang het ongeveer duurt. Hoe het zit als ze niet willen, lees je in <a href="/kennisbank/dak-repareren-via-buren/">je dak laten repareren via de buren</a>.`,
      ] },
      { kop: `De zolder bereikbaar maken`, tekst: [
        `Gaat het om een lek, dan wil ik vaak ook binnen kijken, op zolder of achter het knieschot boven de natte plek. Maak het zolderluik en de plek eromheen vrij, en schuif dozen en spullen bij de natte plek een stukje opzij. Een goede lamp op zolder helpt ook. Heb je geen zolder, dan is het genoeg als ik in de kamer bij de natte plek kan.`,
      ] },
      { kop: `Foto's en wat je hebt gezien`, tekst: [
        `Heb je foto's van de natte plek, van je dak vanaf de straat of een filmpje van de goot tijdens een bui, stuur ze dan vooraf via WhatsApp of houd ze bij de hand. Schrijf op wanneer het nat werd en bij welk weer: bij elke bui, alleen bij harde wind of pas na dagen regen. Welke foto's het meest helpen, lees je in <a href="/kennisbank/foto-van-je-dak-maken/">foto's van je dak maken</a>.`,
      ] },
      { kop: `Thuis zijn of niet?`, tekst: [
        `Moet ik binnen kijken, dan is het fijn als er iemand thuis is. Gaat het om een losse pan, een nokvorst of een goot waar ik van buiten bij kan, dan kan het vaak ook als je aan het werk bent, als we de prijs vooraf hebben afgesproken. Zeg dan waar de ladder kan staan en of het hek open is. Huisdieren houd je liever binnen of in een andere kamer, zeker als ik door de tuin moet.`,
      ] },
      { kop: `Het weer`, tekst: [
        `Op een nat dak, bij harde wind of als er ijs of sneeuw ligt, is het niet veilig om op het dak te werken. Dan bel of app ik je om een andere dag af te spreken. Werk met lood, kit, dakmortel of solderen doe ik op een droge dag, en sommige klussen ook alleen als het niet vriest. Lekt het intussen binnen, dan zorg ik eerst dat het droog blijft.`,
      ] },
      { kop: `Na afloop`, tekst: [
        `Ik ruim op wat er bij het werk vrijkomt, zoals blad en vuil uit de goot of oude pannen. Als je wilt, krijg je foto's van wat ik heb gedaan, en je krijgt een rekening met wat er is gedaan, die je zo nodig ook naar je verzekeraar kunt sturen. Een kleine klus betaal je als hij klaar is, via iDEAL. Bij groter werk spreken we vooraf af hoe en wanneer je betaalt.`,
      ] },
    ],
    dienst: { label: `Bekijk: wat ik allemaal doe`, href: `/diensten/` },
    faq: [
      { v: `Moet ik zelf een ladder of gereedschap klaarzetten?`, a: `Nee. Ik neem mijn eigen ladder en gereedschap mee. Wat wel helpt, is een vrije plek om de ladder neer te zetten en, bij een lek, een vrije weg naar de zolder.` },
      { v: `Kan ik erbij blijven als je op het dak werkt?`, a: `Kijken mag, maar blijf niet onder de dakrand staan waar ik werk, en klim niet zelf mee de ladder op. Wil je zien wat ik heb gedaan, dan maak ik er een foto van.` },
      { v: `Moet ik mijn buren laten weten dat je komt?`, a: `Dat is netjes, zeker in een rij huizen of als ik via hun kant moet. Bij een goot of een nok die doorloopt naar de buren kijk ik ook even naar hun stuk, en dan is het fijn als ze het weten.` },
    ],
  },
  {
    slug: `dak-nakijken-na-schoorsteenbrand`,
    datum: `2026-11-19`,
    titel: `Schoorsteenbrand gehad: wat aan je dak nakijken?`,
    h1: `Je hebt een schoorsteenbrand gehad: wat je aan je dak en schoorsteen laat nakijken`,
    metaTitle: `Schoorsteenbrand gehad? Dit kijk je na | Spoed Dak Service`,
    metaDescription: `Na een schoorsteenbrand kunnen het kanaal, het lood en de pannen rond de schoorsteen beschadigd zijn. Zo weet je wie wat nakijkt voordat je weer stookt.`,
    intro: `In het stookseizoen gebeurt het vaker: het roet in het kanaal van je houtkachel of open haard vat vlam. Je hoort een harde, brullende toon, er komen vonken of vlammen uit de schoorsteen en de muur rond het kanaal wordt heet. Is het vuur uit, dan wil je weten wat er kapot kan zijn. Hieronder lees je wat je meteen doet, wie wat nakijkt en waar ik op het dak naar kijk.`,
    secties: [
      { kop: `Brandt het nog? Bel 112`, tekst: [
        `Denk je dat je schoorsteen in brand staat, bel dan meteen 112 en ga met iedereen naar buiten. Gooi geen water in de kachel of de haard: het water wordt in één keer stoom en kan het kanaal of de kachel laten barsten. Sluit als dat veilig kan de luchttoevoer van de kachel en doe de deur van de kachel dicht. Ga niet zelf het dak op, ook niet als het vuur uit lijkt.`,
      ] },
      { kop: `Na de brand: niet stoken tot het kanaal is nagekeken`, tekst: [
        `Bij een schoorsteenbrand wordt het kanaal heel heet. Daardoor kunnen er scheurtjes komen in het kanaal, in de voegen of in de binnenbuis, en die zie je van buiten niet. Stook daarom niet meer op die kachel of haard tot een erkende schoorsteenveger het kanaal heeft geveegd en nagekeken. Dat werk doe ik zelf niet. De schoorsteenveger zegt je of het kanaal weer veilig is, of dat er iets aan moet gebeuren.`,
      ] },
      { kop: `Wat er op het dak beschadigd kan zijn`, tekst: [
        `Het lood of de loodvervanger rond de voet van de schoorsteen. Door de hitte kan de kit in de voeg loslaten, en sommige soorten loodvervanger kunnen zacht worden of gaan bollen. Dan kan er bij de volgende bui water achter lopen.`,
        `De pannen rond de schoorsteen. Vonken en hete stukjes roet vallen op de pannen eromheen. Meestal kunnen die dat hebben, maar is er bij het blussen op het dak gelopen, dan kan er een pan gebroken of verschoven zijn.`,
        `De kop en de stenen van de schoorsteen. Een scheur in de kop, de afdekplaat of de voegen laat later regen in de stenen trekken. Aan de stenen en de voegen werk ik niet, daarvoor heb je een metselaar nodig. Ik zeg je wel eerlijk wat ik zie.`,
        `Het hout op zolder rond het kanaal. Kijk met een zaklamp of het hout, de folie of de isolatie vlak bij het kanaal verkleurd of verschroeid is, en of je nog een brandlucht ruikt. Zie je dat, laat het dan meteen nakijken.`,
      ] },
      { kop: `En je verzekering?`, tekst: [
        `Maak foto's van de schade voordat er iets wordt opgeruimd of gerepareerd, binnen en, als het veilig kan, van de schoorsteen vanaf de straat. Bel je verzekeraar en vraag wat ze nodig hebben. Schade door brand valt vaak onder je opstalverzekering, maar wat er vergoed wordt, verschilt per polis.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Heeft de schoorsteenveger het kanaal nagekeken, dan kijk ik op het dak naar het lood of de loodvervanger rond de voet, naar de pannen eromheen en naar de nok als die vlakbij ligt. Zit het lood los of is het beschadigd, dan zet ik het weer vast of vervang ik het, meestal met loodvervanger en op wens met echt lood. Een gebroken of verschoven pan vervang ik of leg ik terug. Ik maak foto's van wat ik aantref en van wat ik heb gedaan, met een korte omschrijving die je naar je verzekeraar kunt sturen. Stuur eerst een foto van de schoorsteen vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost. Zie <a href="/diensten/lood-vervangen/">lood vervangen</a> en <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: lood vervangen bij de schoorsteen`, href: `/diensten/lood-vervangen/` },
    faq: [
      { v: `Hoe weet ik of het een schoorsteenbrand was?`, a: `Vaak hoor je een harde, brullende of zuigende toon in de kachel of het kanaal, en zie je vonken, vlammen of dikke rook uit de schoorsteen komen. De muur rond het kanaal kan heet worden. Achteraf vind je soms grote zwarte schilfers onder in de haard, op het dak of in de goot. Twijfel je, stook dan niet en laat het kanaal eerst nakijken door een schoorsteenveger.` },
      { v: `Lekt mijn dak nu door de brand?`, a: `Niet vanzelf. Vaak blijft het droog. Maar zit het lood rond de schoorsteen los, is er een pan gebroken of zit er een scheur in de kop, dan kan er bij de volgende bui water binnenkomen. Kijk na de eerste flinke bui op zolder langs de schoorsteen of het droog blijft, en stuur me een foto als je een natte plek ziet.` },
      { v: `Wie bel ik eerst na een schoorsteenbrand?`, a: `Brandt het, bel dan 112. Is het vuur uit, bel dan je verzekeraar en een erkende schoorsteenveger voor het kanaal. Voor het lood en de pannen rond de schoorsteen op het dak kun je mij bellen of appen. Stuur dan een foto van de schoorsteen vanaf de straat mee.` },
    ],
  },
  {
    slug: `klimop-op-dak-of-in-dakgoot`,
    datum: `2026-11-19`,
    titel: `Klimop op je dak of in je dakgoot?`,
    h1: `Klimop of wingerd groeit over je dakrand: wat het met je pannen en je goot doet`,
    metaTitle: `Klimop op je dak of in je dakgoot? | Spoed Dak Service`,
    metaDescription: `Groeit klimop of wilde wingerd over je dakrand, in je goot of onder de pannen? Zo zie je wat het kapotmaakt, wat je zelf doet en wie wat weghaalt.`,
    intro: `Klimop en wilde wingerd tegen de gevel zien er mooi uit, maar ze groeien door tot ze ergens houvast vinden. Bereiken ze de dakrand, dan gaan ze de goot in, onder de onderste pannen door en soms tot op zolder. Hieronder lees je wat dat met je dak en je goot doet, hoe je het vanaf de straat ziet en wie wat aanpakt.`,
    secties: [
      { kop: `Wat klimop op je dak doet`, tekst: [
        `In de goot. Blad, ranken en wortels vullen de goot en zetten de uitloop naar de regenpijp dicht. Dan loopt de goot bij een bui over, langs je gevel of achter de goot naar binnen. Een volle goot met natte ranken is ook zwaar, en dan kan hij gaan doorhangen.`,
        `Onder de pannen. Een rank zoekt een donker, beschut plekje en vindt dat onder de pannen vlak boven de goot. Daar wordt hij elk jaar dikker, tot hij de pan een stukje omhoog drukt of uit de sluiting met de pan ernaast duwt. Bij harde wind en regen waait het water daar dan onder door.`,
        `Bij de rand van het dak. Langs de windveer of de gevelpannen aan de zijkant van het dak kan klimop tussen het hout en de muur groeien. Het hout blijft daar nat en gaat sneller rotten.`,
      ] },
      { kop: `Zo zie je het vanaf de straat`, tekst: [
        `Ga aan de overkant van de straat staan en zoom met je telefoon in op de randen van je dak: de pannen vlak boven de goot en de zijkant van het dak. Zie je groen tussen of onder de pannen, een pan die schever of hoger ligt dan zijn buren, of blad dat boven de goot uitsteekt, dan is de klimop al verder dan de gevel. Kijk ook op zolder met een zaklamp langs de onderkant van het dak. Komen daar ranken of streepjes daglicht door, dan zit hij tussen de pannen. Lees ook <a href="/kennisbank/licht-tussen-dakpannen/">licht tussen je dakpannen</a>.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `Ga niet vanaf een ladder aan de ranken op het dak rukken. Ze zitten vaak klem onder de pannen, en met één ruk komt er een pan mee naar beneden of breekt hij. Zet ook geen ladder tegen de goot om de klimop eruit te halen. Wat je wel kunt doen: de klimop aan de gevel terugsnoeien tot een flink stuk onder de dakrand, zelf vanaf de grond of door een hovenier, zodat hij niet opnieuw het dak op groeit.`,
      ] },
      { kop: `Wie doet wat?`, tekst: [
        `De klimop of wingerd aan de gevel is werk voor een hovenier, of voor jezelf vanaf de grond. Het stuk op het dak en in de goot doe ik: de ranken onder de pannen uit halen zonder de pannen te breken, verschoven pannen terugleggen zodat ze weer in elkaar haken, gebroken pannen vervangen door pannen die passen, en de goot en de uitloop naar de regenpijp leegmaken. Een windveer die rot is, vervang ik als het nodig is. Zie <a href="/diensten/windveer-vervangen/">windveer vervangen</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Stuur een foto van de gevel en de dakrand vanaf de straat via WhatsApp, en als het kan een van de goot. Is de klimop aan de gevel al teruggesnoeid, dan doe ik het dak en de goot in één keer. Je hoort vooraf wat het kost. Zie <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen of recht leggen</a> en <a href="/diensten/goten-reinigen/">dakgoot schoonmaken</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen of recht leggen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Moet de klimop helemaal van mijn gevel af?`, a: `Niet per se. Of klimop goed of slecht is voor je gevel, is een vraag voor een hovenier of een gevelspecialist. Voor je dak is het genoeg als hij niet meer bij de dakrand, de goot en de pannen komt. Houd hem daarom een flink stuk onder de goot, en snoei hem elk jaar terug.` },
      { v: `Kan klimop een lek geven?`, a: `Ja, maar meestal niet meteen. Eerst loopt de goot vaker over of duwt een rank een pan omhoog. Pas als er bij een bui of harde wind water onder die pan door waait, wordt het op zolder nat. Zie je ranken onder de pannen, laat het dan nakijken voordat het gaat lekken.` },
      { v: `Wanneer laat ik het het beste weghalen?`, a: `Het liefst in de herfst of de winter, na het snoeien aan de gevel. Dan zitten er meestal geen vogels meer te broeden in de klimop. Broeden er wel vogels, wacht dan tot de jongen zijn uitgevlogen. Het werk op het dak gaat het best op een droge dag zonder vorst.` },
    ],
  },
  {
    slug: `marter-onder-dakpannen`,
    datum: `2026-11-19`,
    titel: `Marter onder je dakpannen of op zolder?`,
    h1: `Een marter onder je dakpannen of op zolder: wat het met je dak doet en wat je eraan doet`,
    metaTitle: `Marter onder je dakpannen? | Spoed Dak Service`,
    metaDescription: `Gestommel op zolder in de nacht, kapotte folie of isolatie uit elkaar getrokken? Dan kan er een marter onder je pannen zitten. Zo herken je het en dit doe je.`,
    intro: `Hoor je 's nachts gestommel, gekrabbel of geren boven je slaapkamer, en vind je op zolder isolatie die uit elkaar is getrokken? Dan kan er een steenmarter onder je dakpannen of op zolder zitten. Dat is vervelend, en het kan je dak en je isolatie flink beschadigen. Hieronder lees je hoe je het herkent, wat je zelf wel en niet doet, en wat ik daarna aan je dak doe.`,
    secties: [
      { kop: `Een marter, een muis of een vogel?`, tekst: [
        `Een marter is vooral 's nachts actief. Je hoort dan zwaar gestommel en gerommel, alsof er iets groots over de zoldervloer rent. Muizen en ratten maken eerder fijn geknaag en geritsel. Vogels hoor je vooral 's ochtends vroeg, vlak boven de goot onder de onderste rij pannen. Lees daarover <a href="/kennisbank/vogels-onder-dakpannen/">vogels onder je dakpannen</a>.`,
        `Andere tekenen van een marter: keutels op één vaste plek, vaak met haar of pitjes erin, een sterke, muffe lucht, resten van prooi zoals veren of eierschalen, en isolatie of folie die kapot is getrokken.`,
      ] },
      { kop: `Hoe komt een marter onder je dak?`, tekst: [
        `Een marter klimt goed. Hij komt via een boom vlak bij het dak, klimop tegen de gevel, een regenpijp of een schuur naast het huis op het dak, en kruipt dan onder de pannen door. Daar is maar een kleine opening voor nodig: onder de onderste rij pannen boven de goot, langs de zijkant van het dak, bij de nok of bij een pan die een stukje is verschoven.`,
      ] },
      { kop: `Wat je zelf beter niet doet`, tekst: [
        `De steenmarter is in Nederland een beschermd dier. Je mag hem niet zomaar vangen, doden of zijn nest verstoren. Zet daarom geen klem of gif neer, en maak de opening niet dicht terwijl hij nog binnen zit, zeker niet in het voorjaar als er jongen kunnen zijn. Vraag eerst advies aan een bedrijf in plaagdierbeheersing of aan je gemeente. Zij weten wat er bij jou mag en hoe je hem op een goede manier wegkrijgt.`,
      ] },
      { kop: `Wat een marter op je dak kapot kan maken`, tekst: [
        `Een marter trekt isolatie uit elkaar om er een nest in te maken, en hij scheurt de folie onder de pannen kapot. Ook kan hij een pan of nokvorst een stukje opduwen als hij er onderdoor kruipt. Zo'n kier laat bij harde wind regen of stuifsneeuw door. Is de folie op een paar plekken kapot en liggen de pannen goed, dan is dat meestal geen spoed. Hoe het zit met kapotte folie, lees je in <a href="/kennisbank/dakfolie-kapot/">dakfolie kapot of vergaan</a>.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Is de marter weg, dan kijk ik op zolder en op het dak waar hij in en uit ging. Pannen die verschoven of gebroken zijn, leg ik weer goed of vervang ik, en een losse nokvorst zet ik weer vast. Zo komt er bij harde wind geen regen meer binnen. Isoleren doe ik zelf niet: kapotte of natte isolatie laat je vervangen door een isolatiebedrijf. Stuur een foto van je dak vanaf de straat en van de plek op zolder via WhatsApp, dan hoor je vooraf wat het kost. Zie <a href="/diensten/dakpannen-vervangen/">dakpannen vervangen of recht leggen</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakpannen vervangen of recht leggen`, href: `/diensten/dakpannen-vervangen/` },
    faq: [
      { v: `Helpt vogelwering tegen een marter?`, a: `Meestal niet. Kunststof vogelwering onder de onderste rij pannen houdt mussen en spreeuwen tegen, maar een marter is sterk en komt er vaak doorheen of eronderdoor. Wat er bij jouw dak tegen een marter helpt, bespreek je met een bedrijf in plaagdierbeheersing.` },
      { v: `Is een marter op zolder spoed?`, a: `Voor je dak meestal niet, zolang het binnen droog blijft. Voor je nachtrust wel vervelend. Bel voor de marter zelf eerst een bedrijf in plaagdierbeheersing. Zie je daarna een pan die scheef ligt, of komt er water binnen, stuur me dan een foto.` },
      { v: `Betaalt mijn verzekering de schade die een marter maakt?`, a: `Dat verschilt per verzekeraar, en schade door dieren wordt niet altijd vergoed. Kijk in je polis of bel je verzekeraar, en maak foto's van de schade voordat er iets wordt hersteld.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel. Geen bedragen.
export const KORT_ANTWOORD_5: Record<string, string> = {
  "noodreparatie-dak": `Een noodreparatie zorgt dat er geen water meer binnenkomt, ook als het nog niet netjes kan: een losse pan terugleggen, een open stuk afdekken met folie of een zeil, of een volle goot leegmaken. Een zeil is bedoeld voor dagen tot een paar weken. Lood, kit en dakmortel hebben een droge dag nodig, dus de nette reparatie volgt dan later. Maak foto's voor je verzekeraar en bewaar de rekening.`,
  "foto-van-je-dak-maken": `De foto's die een dakdekker het meest helpen: je hele dak vanaf de overkant van de straat, met daarna ingezoomd de plek waar je iets ziet; de natte plek binnen van dichtbij en van een afstand; en zolder boven die plek met een zaklamp. Bij een goot helpt een kort filmpje tijdens een bui. Ga voor een foto niet het dak op en zet geen ladder tegen de goot.`,
  "dak-repareren-via-buren": `Kan een dakdekker alleen via de tuin, het pad of het platte dak van de buren bij je goot of dak, vraag het je buren dan een paar dagen van tevoren. Weigeren ze, dan is er het ladderrecht (artikel 5:56 Burgerlijk Wetboek): kan het werk anders niet, of alleen heel lastig, dan moeten ze het toestaan, en schade bij hen moet worden vergoed. Kom je er samen niet uit, vraag dan advies bij het Juridisch Loket.`,
  "hagelschade-dak": `Na een hagelbui raakt de schade meestal eerst glas en kunststof: dakramen, lichtkoepels, kunststof platen en oude kunststof goten. Gewone dakpannen in goede staat kunnen een flinke bui meestal hebben, maar oude, poreuze pannen kunnen barsten. Lekt het, vang het water dan op en ga niet het dak op. Maak foto's met de datum van de bui erbij: hagelschade valt vaak onder je opstalverzekering, maar dat verschilt per polis.`,
  "planten-in-dakgoot": `Groeit er gras, mos of een plantje in je dakgoot, dan ligt er een laag van blad, mos en zand die tot natte aarde is geworden. Die laag houdt het water tegen, waardoor de goot bij een bui overloopt, en maakt de goot zwaar, zodat hij kan gaan doorhangen. Trek niet hard aan een plant met wortels en gooi er geen onkruidmiddel in. Laat de hele laag eruit halen, ook bij de uitloop naar de regenpijp.`,
  "boerderij-dak-lekt": `Een boerderijdak lekt meestal bij de lange goot die bij een bui overloopt, bij de kilgoot waar een aanbouw of schuur tegen het hoofddak komt, bij de nok en de schuine hoeken, bij het lood rond de schoorsteen of bij oude pannen. Vaak ligt er geen folie onder de pannen, dus een gebroken of verschoven pan geeft meteen water binnen. Kijk tijdens een bui met een zaklamp op zolder en ga niet zelf het dak op.`,
  "water-spat-over-dakgoot": `Spat het regenwater bij een bui over je goot heen, terwijl er weinig water in de goot staat, dan mist het water de goot. Meestal hangt de goot te laag of te ver naar achteren, steken de onderste pannen te ver uit, of komt het water van een steil dak, gladde pannen of zonnepanelen zo hard naar beneden dat het over de rand schiet. Vaak is de goot op die plek opnieuw ophangen genoeg.`,
  "noodoverloop-plat-dak": `Komt er bij regen water uit de noodoverloop, het buisje in de rand van je platte dak, dan staat het water op je dak hoger dan zou moeten. Meestal zit de gewone afvoer dicht met blad, mos of grind, of is de regenpijp verstopt. Bij een echte wolkbreuk kan een korte straal normaal zijn. Laat de afvoer vrijmaken en maak de noodoverloop nooit dicht.`,
  "kraaien-mos-van-dak": `Kraaien en kauwen trekken mos van je dak omdat ze eronder naar insecten en larven zoeken, vooral in de herfst, de winter en het vroege voorjaar. Voor de pannen zelf is dat meestal niet erg. Het losse mos komt wel in je goot en bij de uitloop naar de regenpijp terecht, en dan kan de goot bij een flinke bui overlopen. Laat de goot leegmaken en ga niet zelf het dak op.`,
  "mastgoot-lekt": `Een mastgoot is een houten goot op klossen voor de gevel, met aan de binnenkant meestal zink. Hij lekt meestal bij een naad of hoek, bij de uitloop naar de regenpijp of op een dunne plek waar jaren blad lag. Vaak is opnieuw solderen genoeg, of kan de binnenkant gecoat worden. Kijk ook naar het hout: bladderende verf of zacht hout onder de goot betekent dat er al langer water achter het zink loopt.`,
  "dakgoot-lekt-in-de-hoek": `Lekt je dakgoot precies op de hoek, dan zit het meestal in de verbinding van de twee stukken goot: een soldeernaad in een zinken goot, of een hoekstuk met lijm of een rubber in een kunststof goot. Soms is de hoek gezakt, zodat er water blijft staan. Vaak hoeft alleen de hoek gemaakt te worden: opnieuw solderen, een nieuw hoekstuk of de goot weer op afschot.`,
  "lekkage-meterkast-bij-regen": `Wordt je meterkast alleen nat als het regent, dan komt het water meestal van boven: van het afdakje of de luifel boven de voordeur, van een goot of regenpijp aan de voorgevel, of langs een pijp of kabel vanaf het dak. Is vooral de vloer nat, dan kan het ook van onderen komen, langs de kabels uit de straat. Zorg eerst dat het veilig is: raak niets aan met natte handen en zet de hoofdschakelaar uit als dat veilig kan.`,
  "dak-jaren-90-huis-lekt": `Bij een huis uit de jaren '80 of '90 zijn de pannen vaak nog goed, en zit een lek meestal bij een aansluiting: het rubber rond een pijp door het dak, het gootstuk van een dakraam, een klem of strook van een droge nok of een verbinding in de kunststof goot. Wordt het alleen nat op koude ochtenden, ook als het droog is, dan is het eerder condens. Vaak is een gerichte reparatie genoeg.`,
  "dak-lekt-na-dagen-regen": `Lekt je dak pas na een paar dagen regen, en niet bij een korte bui, dan trekt het water meestal langzaam ergens doorheen of loopt er iets pas na dagen over: oude pannen die water opnemen, de stenen van de schoorsteen, een goot of kilgoot die langzaam volloopt, of een plas op het platte dak. Kijk tijdens zo'n natte periode met een zaklamp op zolder waar het begint.`,
  "dak-jaren-50-huis-lekt": `Bij een huis uit de jaren '50 lekt het dak meestal bij het lood rond de eigen schoorsteen, op de plek waar een schoorsteen is weggehaald, bij een nok in oude specie, bij een naad in de zinken goot of bij een pan die is verschoven. Vaak ligt er geen folie onder de pannen, dus het water komt meestal vlak onder het lek binnen. Een gerichte reparatie is vaak genoeg.`,
  "schimmel-op-zolder": `Zit de schimmel op zolder op één plek, met een kring eromheen, en wordt die plek na een bui donker of nat, dan komt er meestal water van buiten door een lek. Zitten er fijne zwarte puntjes verspreid over een groot stuk van het dakbeschot, ook op droge dagen, dan is het meestal condens: vocht uit je eigen huis dat tegen het koude dak neerslaat. Bij een lek ligt de oplossing op het dak, bij condens binnen, bij ventilatie en vocht.`,
  "dak-nakijken-voor-zolder-verbouwen": `Ga je je zolder verbouwen, laat dan eerst je dak nakijken, want na het afwerken zie je de onderkant van het dak niet meer. Laat vooraf gebroken of verschoven pannen, een losse nok, los lood rond de schoorsteen en de kraag rond pijpen door het dak maken. Zorg dat het dak dicht is voordat de isolatie erin gaat, en vraag het isolatiebedrijf hoe het vocht uit je nieuwe kamer weg kan.`,
  "lekkage-tijdens-vakantie": `Ben je op vakantie of niet thuis en lekt je dak, laat dan iemand met een sleutel het water opvangen, spullen weghalen en de groep uitzetten als het bij een lamp of stopcontact nat is, zonder op een ladder of het dak te gaan. Laat foto's maken van de natte plek en van het dak vanaf de straat. Een losse pan of nokvorst kan vaak van buiten worden gerepareerd als de prijs vooraf is afgesproken.`,
  "ventilatiepan-lekt": `Druppelt het op zolder onder een ventilatiepan, dan is die pan vaak gebroken, is het kapje weg of ligt hij niet goed in de pannen ernaast. Een paar druppels na een sneeuwstorm of op koude, droge dagen zijn vaak stuifsneeuw of condens, bijvoorbeeld van een losse slang van de ventilatie. Maak een ventilatiepan niet dicht, maar laat een kapotte vervangen door een die bij je dak past.`,
  "dakpan-zelf-terugleggen": `Een verschoven pan kun je soms van binnenuit, vanaf zolder, voorzichtig terugschuiven als er geen folie of plaat onder de pannen zit. Een pan op het dak zelf vervangen doe je liever niet: het dak is glad, pannen breken onder je voet en een pan die niet goed in de sluiting ligt, waait weer los. Bij de nok, de zijkant, de schoorsteen of zonnepanelen laat je het doen.`,
  "doorslaand-vocht-of-daklek": `Zit de natte plek bovenin de muur, vlak onder het plafond, dan komt het water vaak van een goot die overloopt of lekt, of van het lood of de dakrand erboven. Zit hij midden op de muur, komt hij op na regen met harde wind en trekt hij na een paar droge dagen weer weg, dan is het eerder doorslaand vocht door de stenen of de voegen van de gevel. Wordt het ook nat na dagen zonder regen, denk dan aan een leiding.`,
  "zakgoot-lekt": `Een zakgoot ligt bijna vlak tussen twee daken die naar elkaar toe aflopen, bijvoorbeeld tussen twee panden of tussen het huis en een aanbouw. Loopt hij over, dan komt het water niet langs de gevel maar binnen. Meestal zit de uitloop dicht met blad, mos of gruis, of lekt een naad in het zink. Vaak is leegmaken en de uitloop vrijmaken genoeg, en een lekke naad kan opnieuw gesoldeerd worden.`,
  "lood-schoorsteen-vervangen": `Is het lood rond je schoorsteen gescheurd, mist er een stuk of staat het omhoog, dan komt er nieuw lood: het oude eraf, nieuwe stroken rond de voet met de bovenrand in een voeg, en de pannen eromheen weer goed. Meestal met loodvervanger, op wens met echt lood. Staat alleen de bovenrand los, dan is vastzetten vaak genoeg.`,
  "verholen-goot-lekt": `Een verholen goot is een zinken goot die in het dakvlak ligt, een stukje boven de onderrand, in plaats van aan de voorkant van het dak. Lekt hij, dan komt het water binnen, bovenin de muur of op zolder. Meestal zit het bij de uitloop naar de regenpijp, een naad of een hoek. Vaak is leegmaken, een naad solderen of de goot van binnen coaten genoeg.`,
  "aardlekschakelaar-slaat-af-bij-regen": `Slaat je aardlekschakelaar af als het regent, dan komt er ergens water bij de elektra. Vaak is dat buiten, in een lamp aan de gevel, een buitenstopcontact of tuinverlichting. Soms komt het via een daklek of een goot die overloopt bij een lamp, een lasdoos op zolder of een kabel door het dak. Laat de groep die afslaat uit staan en zet hem niet steeds opnieuw aan. De installateur maakt de elektra veilig, een dakdekker maakt het lek dicht.`,
  "garagebox-dak-lekt": `Lekt het dak van je garagebox, dan zit het meestal bij de naad op de grens met de box ernaast, bij de rand boven de deur of aan de achterkant, of bij een afvoer die vol blad zit. Bij een rij boxen is het dak vaak van een VvE of van de eigenaren samen, dus kijk in je akte wie het regelt. Een scheur of losse naad is vaak gericht te repareren. Oude grijze golfplaten laat je eerst onderzoeken op asbest.`,
  "vergunning-dak-vernieuwen": `Een kapotte pan, los lood of een lekkende goot herstellen met hetzelfde materiaal is onderhoud, en daar is in de regel geen vergunning voor nodig. Bij een monument, in een beschermd stadsgezicht of als je dak er anders uit gaat zien, zoals andere pannen of een andere kleur, vraag je het eerst na bij je gemeente. Bij het Omgevingsloket kun je een vergunningcheck doen. Een steiger of container op de stoep vraagt vaak een melding bij de gemeente.`,
  "dakgoot-vernieuwen": `Een dakgoot vernieuwen is slim als hij over een groot stuk dun, bros of gescheurd is, of steeds op een andere plek lekt. Lekt hij op één plek, dan is repareren vaak genoeg. Bij vernieuwen gaat de oude goot eraf, komen er waar nodig nieuwe beugels, hangt de nieuwe goot op afschot naar de regenpijp en worden de naden gesoldeerd of verbonden. Dat gebeurt op een droge dag.`,
  "goot-loopt-over-door-regenton": `Loopt je dakgoot over sinds er een regenton aan de regenpijp zit, dan zit het meestal in het tussenstuk dat het water naar de ton stuurt: het zeefje zit dicht met blad of naalden, de ton heeft geen goede overloop, of er zit ijs in. Maak het zeefje schoon, zet het tussenstuk voor de winter in de winterstand of laat de ton leeglopen, en kijk of de goot dan nog overloopt.`,
  "bungalow-dak-lekt": `Bij een bungalow zit er vaak geen zolder tussen het dak en je kamers, dus een lek zie je meteen aan het plafond, en vaak niet recht onder de plek waar het water binnenkomt. Bij een plat dak zit het meestal bij een volle afvoer, de rand, een lichtkoepel of een naad. Bij een flauw pannendak komt de regen bij wind onder de pannen door, of lekt het bij het lood rond de schoorsteen of een kilgoot. Zet een emmer neer en ga niet zelf het dak op.`,
  "vergaarbak-lekt": `Een vergaarbak is de bak bovenaan de regenpijp waar de goot of een spuwer in uitkomt. Loopt hij over, dan zit de opening naar de pijp meestal dicht met blad, mos of zand. Druppelt het onder de bak terwijl hij niet overloopt, dan lekt een naad of de bodem. Een volle bak maak je leeg, en een lekke naad in zink kan vaak opnieuw gesoldeerd worden. Zet geen ladder tegen de gevel om zelf te kijken.`,
  "dakdekker-komt-wat-regel-je": `Komt de dakdekker, regel dan vooraf een plek voor de ladder en zet auto's, fietsen en tuinmeubels onder de dakrand opzij. Maak het zolderluik en de plek boven de natte plek vrij, houd foto's van het lek of je dak bij de hand en laat je buren het weten als het werk via hun kant moet. Bij regen, harde wind, ijs of sneeuw wordt het werk op het dak verzet naar een veilige dag.`,
  "dak-nakijken-na-schoorsteenbrand": `Na een schoorsteenbrand stook je niet meer tot een erkende schoorsteenveger het kanaal heeft nagekeken, want door de hitte kunnen er scheuren komen die je niet ziet. Maak foto's voor je verzekeraar. Op het dak kunnen het lood of de loodvervanger rond de voet, de pannen eromheen en de kop van de schoorsteen beschadigd zijn. Brandt het nog, bel dan 112 en gooi geen water in de kachel.`,
  "klimop-op-dak-of-in-dakgoot": `Groeit klimop of wilde wingerd over je dakrand, dan vult hij de goot, zet hij de uitloop naar de regenpijp dicht en dringt hij onder de pannen boven de goot, die hij omhoog drukt. Ruk de ranken niet zelf van het dak, want dan komen de pannen mee. Laat de klimop aan de gevel terugsnoeien tot een flink stuk onder de goot, en laat de ranken onder de pannen en in de goot weghalen.`,
  "marter-onder-dakpannen": `Zwaar gestommel op zolder in de nacht, keutels op één vaste plek, een muffe lucht en isolatie of folie die kapot is getrokken, wijzen vaak op een steenmarter. Die komt via een boom, klimop of een regenpijp op het dak en kruipt onder de pannen door. De steenmarter is beschermd: vraag eerst advies aan een bedrijf in plaagdierbeheersing of je gemeente. Is hij weg, laat dan verschoven pannen en een losse nok herstellen.`,
};

// Artikelen en korte antwoorden uit artikelen-extra-6.ts (sinds 19-11-2026 ronde 4) erachter, zodat ze via artikelen-extra-4.ts in ARTIKELEN en KORT_ANTWOORD komen.
ARTIKELEN_EXTRA_5.push(...ARTIKELEN_EXTRA_6.filter((x) => !ARTIKELEN_EXTRA_5.some((a) => a.slug === x.slug)));
Object.assign(KORT_ANTWOORD_5, KORT_ANTWOORD_6);
