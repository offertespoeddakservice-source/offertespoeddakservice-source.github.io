/**
 * Matrix — dienst × plaats-pagina's (/werkgebied/[plaats]/[dienst]).
 *
 * SELECTIEF, niet alle combinaties: alleen de money-diensten × kerndorpen uit
 * PRIORITEIT.md. Elke combinatie krijgt een UNIEKE `hook` (1-2 zinnen die echt
 * over díe dienst in díe plaats gaan) → geen dunne, identieke pagina's.
 *
 * Uitbreiden = combinatie + hook toevoegen (Tier B/C). `plaats`/`dienst` = slugs
 * uit plaatsen.ts / diensten.ts.
 */

export interface MatrixCombo {
  plaats: string; // slug uit PLAATSEN
  dienst: string; // slug uit DIENSTEN
  hook: string;   // unieke lokale invalshoek voor deze dienst in deze plaats
  faq?: { v: string; a: string }[]; // optioneel: eigen vragen voor deze klus in deze plaats, onder de vaste vragen
}

export const MATRIX: MatrixCombo[] = [
  // ── Tier A · daklekkage ──────────────────────────────────────────────
  {
    plaats: "oss",
    dienst: "daklekkage",
    hook: "In Schadewijk en de andere oudere wijken rond het centrum van Oss staan veel rijtjeshuizen met een pannendak en een schoorsteen. Daar begint een lek meestal bij uitgedroogd lood rond de schoorsteen of bij een pan die gebroken is. In de Ruwaard, een grote wijk uit de jaren '70 en '80, hebben veel huizen een dakraam of een platte aanbouw aan de achterkant. Daar vind ik het lek vaak aan de onderkant van het dakraam of bij de rand van dat platte dak. In Berghem staan meer vrijstaande huizen met een groot dak, waar ik na een storm vaker een losse nokvorst tegenkom. Ik spoor het lek op en zeg je eerlijk wat er nodig is.",
    faq: [
      { v: "Kom je bij een lek ook in Berghem, Geffen en de dorpen langs de Maas?", a: "Ja. Berghem, Geffen, Lith, Megen en Ravenstein horen bij de gemeente Oss, en ook daar kom ik bij een lekkend dak. Oss is zo'n 25 minuten rijden vanaf Den Bosch, de dorpen langs de Maas liggen een stukje verder. Stuur me een foto van de natte plek via WhatsApp, dan hoor je wanneer ik kan komen." },
    ],
  },
  {
    plaats: "den-bosch",
    dienst: "daklekkage",
    hook: "In de binnenstad liggen veel goten verstopt tussen twee panden of achter een topgevel, waar je ze vanaf de straat niet ziet. Raakt zo'n goot vol of gaat het zink lekken, dan komt het water binnen op de bovenste verdieping, soms zelfs bij de buren, en vaak een eind van de plek waar het echte lek zit. In de Kruiskamp en de andere wijken uit de jaren '50 en '60 staan veel rijtjes met een pannendak en een schoorsteen per huis. Daar begint een lek meestal bij het lood rond die schoorsteen of bij een pan die is gaan schuiven. In Maaspoort en Empel liggen veel platte daken op aanbouwen en bergingen, en daar zie ik lekkage vaak bij de dakrand of bij een afvoer die vol blad zit. Den Bosch is mijn thuisbasis, dus meestal kan ik snel even komen kijken.",
    faq: [
      { v: "Ik woon boven een winkel of in een appartement in de binnenstad. Kun je bij een lek ook komen?", a: "Ja. Bij een bovenwoning of appartement is het dak vaak van de eigenaar van het pand of van de VvE. Meld het lek daar ook meteen, want zij moeten meestal akkoord geven voor de reparatie. Huur je, meld het dan eerst bij je verhuurder. Ik kijk waar het water binnenkomt en leg uit wat ik zie, zodat iedereen weet wat er nodig is. Stuur me gerust eerst een foto van de natte plek via WhatsApp." },
    ],
  },
  {
    plaats: "rosmalen",
    dienst: "daklekkage",
    hook: "In de rijtjeshuizen uit de jaren '60 en '70 in Rosmalen liggen de nokvorsten vaak nog in specie. Na zoveel jaren wordt die specie bros en brokkelt hij af, en dan waait de regen onder de nok door naar binnen. Dat zie je eerst als een natte plek op zolder, net onder de nok. In dezelfde huizen vind ik een lek ook vaak bij de ontluchtingspijp die door het dak steekt. De loden of rubberen kraag eromheen droogt uit en scheurt, en bij een flinke bui loopt het water dan langs de pijp naar beneden. Bel of app me, dan kom ik kijken waar het bij jou zit.",
    faq: [
      { v: "Hoe zie ik of het lek bij de nok of bij de ontluchtingspijp zit?", a: "Kijk na een flinke bui op zolder. Zit de natte plek bovenin, vlak onder de nok, en loopt er een streep over de balk naar beneden, dan komt het meestal van de nok. Zit het rond de pijp, op de plek waar die door het dakbeschot gaat, dan zit het vaak in de kraag eromheen. Is de pijp ook nat op koude, droge dagen, dan kan het condens zijn. Maak een foto van de plek en stuur die via WhatsApp, dan zeg ik wat ik zie." },
    ],
  },
  {
    plaats: "vught",
    dienst: "daklekkage",
    hook: "In de villawijken van Vught, bijvoorbeeld langs de Helvoirtseweg, staan veel vooroorlogse villa's en herenhuizen met een steil dak van keramische pannen. Op zulke daken ligt veel lood: rond de schoorsteen, in de kilgoten en langs de muur waar een lager dak tegen het huis aansluit. Dat lood is vaak tientallen jaren oud. Het wordt hard, scheurt bij de vouwen of komt los van de muur, en dan loopt het water aan de binnenkant naar beneden. In Cromvoirt staan meer boerderijen en vrijstaande huizen met een breed pannendak, waar ik na een storm vaker een verschoven pan of een losse nokvorst vind. Ik werk van buiten naar binnen en breek alleen iets open als het echt niet anders kan.",
    faq: [
      { v: "Mijn slaapkamer zit onder het schuine dak, achter een betimmering. Hoe vind je dan het lek?", a: "Dan begin ik buiten. Bij de villa's in Vught kijk ik naar de pannen, het lood en de kilgoot boven de natte plek en een flink stuk hoger, want het water loopt vaak eerst een eind over de latten voordat het binnenkomt. Meestal vind ik het lek zo. Lukt dat niet, dan maak ik in overleg een klein stukje van de betimmering of het knieschot open, alleen als het echt niet anders kan. Stuur me eerst een foto van de natte plek en van die kant van het dak via WhatsApp." },
    ],
  },
  {
    plaats: "berlicum",
    dienst: "daklekkage",
    hook: "Berlicum is een dorp met veel vrijstaande huizen en twee-onder-een-kappers, vaak met een garage of berging naast het huis. Waar het dak van zo'n garage tegen de zijmuur van het huis komt, zit een strook lood die het water van de muur op het garagedak moet leiden. Zakt die strook af of is hij gescheurd, dan loopt het water erachter langs naar binnen. Je ziet het als een natte plek in de garage of op de muur van de kamer ernaast. Bij de oudere huizen in het dorp en in Middelrode staat vaak nog een schoorsteen, en daar begint een lek meestal bij het lood rondom. Je hoort vooraf wat het kost, voordat ik iets openmaak.",
  },

  // ── Tier A · goten reinigen ──────────────────────────────────────────
  {
    plaats: "oss",
    dienst: "goten-reinigen",
    hook: "Bij veel rijtjeshuizen in Oss, zoals in de Ruwaard en Schadewijk, hangt er ook een goot aan de achterkant, boven de tuin. Die zie je vanaf de straat niet, en daardoor wordt hij vaak vergeten, terwijl hij door de bomen in de tuinen juist het volst zit. In Berghem en Herpen staan meer vrijstaande huizen met grote tuinen, en daar komt naast blad ook zaad en bloesem van de bomen in de goot. Ik maak de goten aan beide kanten leeg en maak de uitloop naar de regenpijp vrij. Zie ik iets aan je dak, dan hoor je dat meteen.",
  },
  {
    plaats: "den-bosch",
    dienst: "goten-reinigen",
    hook: "In de oudere wijken met veel straatbomen, zoals de Muntel en de Vliert, valt in oktober en november veel blad in de goot. Blijft dat liggen, dan wordt het in de winter een natte, zware laag waar mos en soms zelfs plantjes in gaan groeien. In nieuwere wijken zoals Maaspoort en Empel staan minder grote bomen, maar daar komt het vuil vooral van het dak zelf: mos en gruis dat bij de uitloop naar de regenpijp blijft hangen. Den Bosch is mijn thuisbasis, dus je goten leegmaken plan ik makkelijk tussendoor.",
  },
  {
    plaats: "rosmalen",
    dienst: "goten-reinigen",
    hook: "In Molenhoek, Sparrenburg en de andere wijken van Rosmalen uit de jaren '60 en '70 liggen de nokvorsten vaak nog in specie. Brokkelt die af, dan spoelen de brokjes bij elke bui naar de goot. Daar blijven ze samen met het blad hangen bij de uitloop naar de regenpijp, en dan loopt de goot bij een flinke bui over. Vind ik bij het leegmaken stukjes specie in de goot, dan kijk ik meteen naar de nok en hoor je wat ik zie. In De Groote Wielen hebben veel huizen een plat dak of een aanbouw met een plat dak. Daar loopt het water via een afvoer naar de regenpijp, en zit die vol blad, dan blijft het water op het dak staan. Heb je zo'n dak, zeg het dan als je belt, dan kijk ik ook naar die afvoer.",
  },
  {
    plaats: "vught",
    dienst: "goten-reinigen",
    hook: "In Vught staan veel eiken en beuken, langs de lanen en in de tuinen. Die houden hun blad lang vast, vaak tot in december. Laat je je goot in oktober leegmaken, dan ligt hij in januari vaak alweer vol. Onder zulke bomen plan ik het daarom liever laat in het najaar. Een goot vol nat blad is ook zwaar. Bij een kunststof goot trekt dat na een tijd een beugel scheef, en dan blijft er water staan op de plek waar de goot doorhangt. Bij het leegmaken kijk ik daarom ook of je goot nog goed op afschot hangt. Zie ik iets aan je pannen of het lood, dan hoor je dat meteen.",
  },
  {
    plaats: "berlicum",
    dienst: "goten-reinigen",
    hook: "Bij de dorpse, vaak vrijstaande woningen in Berlicum zijn de goten flink aan de lengte. Ik maak ze van begin tot eind leeg en maak de uitloop naar de regenpijp goed vrij.",
  },

  // ── Tier B · daklekkage ──────────────────────────────────────────────
  {
    plaats: "vlijmen",
    dienst: "daklekkage",
    hook: "In Vliedberg en de andere naoorlogse wijken van Vlijmen hebben veel rijtjeshuizen achter een berging of aanbouw met een plat dak, vaak met een lichtkoepel erin. Bij zo'n koepel lekt het nogal eens langs de rand, waar de koepel op de opstand staat, en dan druppelt het precies onder de koepel naar binnen. In Nieuwkuijk en Haarsteeg, vlak bij Vlijmen, staan meer vrijstaande huizen met grote tuinen. Daar loopt de goot in de herfst snel over door het blad uit de bomen, en binnen lijkt dat soms op een daklek. App me een foto van de natte plek, dan zie ik vaak al waar ik moet zoeken.",
    faq: [
      { v: "Mijn lichtkoepel druppelt ook als het niet regent. Lekt hij dan?", a: "Vaak niet. Druppelt het vooral op koude ochtenden, ook na een droge nacht, dan is het meestal condens aan de binnenkant van de koepel. Bij oudere koepels met maar één laag zie ik dat veel. Druppelt het alleen na een bui, en vooral langs de rand, dan zit het meestal in de aansluiting van de koepel op het platte dak. Stuur een foto van de koepel van binnen en vertel wanneer het druppelt, dan zeg ik eerlijk wat het is." },
    ],
  },
  {
    plaats: "drunen",
    dienst: "daklekkage",
    hook: "In de woonwijken van Drunen die in de jaren '70 en '80 zijn gebouwd, staan veel rijtjeshuizen en twee-onder-een-kappers met een schuin pannendak. Op die daken, die nu een jaar of veertig liggen, zie ik een lek vaak bij de dakvoet: de onderste rij pannen, vlak boven de goot. Bij harde wind en regen waait het water daar onder de pannen door, zeker als de folie eronder niet goed tot in de goot doorloopt. Op zolder zie je dat als een natte plek achter het knieschot, vlak boven de vloer. Ik kijk eerst op zolder waar het hout nat is en volg dat spoor naar boven, zodat ik niets openmaak wat niet nodig is.",
  },
  {
    plaats: "boxtel",
    dienst: "daklekkage",
    hook: "Bij de oudere huizen rond het centrum van Boxtel zie ik vaak een erker of een luifel boven de voordeur met een klein plat dakje erop. Waar dat dakje tegen de gevel komt, zit een strook lood. Laat die los of is hij gescheurd, dan loopt het water achter het lood langs en komt het binnen boven het raam. In Liempde en Esch, die ook bij Boxtel horen, staan meer boerderijen en vrijstaande huizen met een groot pannendak. Daar begint een lek vaker bij de schoorsteen of bij een pan die door de wind is gaan schuiven. Ik spoor het lek op zonder onnodig sloopwerk en vertel je eerlijk wat het kost voordat ik begin.",
    faq: [
      { v: "Hoe zie ik of het lood boven mijn erker of voordeur los zit?", a: "Kijk vanaf de straat naar de strook lood waar het dakje van de erker of de luifel tegen de gevel zit. Staat die strook een stukje van de muur af, zit er een kier of scheur in, of zie je een donkere streep op de muur erboven, dan kan het water erachter lopen. Binnen zie je dat vaak als een natte plek of bladderende verf boven het raam. Ga niet zelf op het dakje staan, maar stuur me een foto via WhatsApp." },
    ],
  },
  {
    plaats: "schijndel",
    dienst: "daklekkage",
    hook: "Veel daken in Schijndel zijn van voor 1985, en op een deel daarvan liggen nog de eerste pannen. Zo'n oude pan neemt na veertig jaar meer water op. Vriest het daarna, dan kan er een haarscheur in komen die je van beneden niet ziet, en bij de volgende flinke bui druppelt het op zolder. In Wijbosch staan meer vrijstaande huizen met een schoorsteen, en daar zit een lek vaker in het lood rond die schoorsteen. Ik vervang alleen de pannen die echt kapot zijn, en zeg je eerlijk als er meer aan de hand is.",
    faq: [
      { v: "Op mijn dak liggen nog de eerste pannen. Kun je er dan nog één vervangen?", a: "Meestal wel. Ik zoek eerst een pan die past bij wat er nu op je dak ligt. Wordt jouw pan niet meer gemaakt, dan kijk ik of ik ergens op je dak een pan kan missen op een plek die je vanaf de straat niet ziet. Zijn er op veel plekken pannen gescheurd, dan zeg ik eerlijk dat een groter stuk vervangen slimmer is. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "heusden",
    dienst: "daklekkage",
    hook: "In vesting Heusden staan veel monumenten en oude panden, en de hele vesting is beschermd stadsgezicht. Daar zit een lek vaak in oud lood rond een schoorsteen, in een oude zinken goot of bij een pan die niet meer goed ligt. Bij zo'n dak kijk ik extra goed welk materiaal erbij past, want op een monument mag je niet zomaar iets anders gebruiken. In Oudheusden en Herpt staan meer vrijstaande huizen en boerderijen met een groot pannendak. Daar komt een lek vaker van een nokvorst waarvan de specie is losgeraakt, of van pannen aan de onderkant van het dak die door de wind zijn opgetild. Twijfel je of jouw huis onder het beschermd stadsgezicht valt, dan kun je dat bij de gemeente Heusden navragen.",
    faq: [
      { v: "In de vesting komt het water binnen bovenin de muur, tegen het huis van de buren aan. Komt dat van het dak?", a: "Dat kan goed. In de vesting staan de huizen tegen elkaar, en vaak is het ene dak hoger dan het andere. Waar het lagere dak tegen de muur van het hogere huis komt, zit een strook lood die het water van die muur op de pannen moet leiden. Zit die strook los of is hij gescheurd, dan loopt het water erachter langs naar binnen, ook als de pannen zelf goed liggen. Zit het in de muur zelf, dan zeg ik dat eerlijk, want daarvoor heb je een metselaar nodig. Stuur me een foto van de natte plek en, als het lukt, van de daken vanaf de straat." },
    ],
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "daklekkage",
    hook: "In het oude centrum van Gestel en langs de Dommel staan veel huizen van voor de oorlog, vaak met een steil pannendak en een schoorsteen. Daar zit een lek meestal in het lood rond die schoorsteen, of in een kilgoot waar een lager dak of een serre tegen het huis aansluit. Onder de oude bomen langs de Dommel blijft in de herfst veel blad in zo'n kil liggen, en dan loopt hij bij een flinke bui over naar binnen. In de nieuwere straten van Den Dungen en Gemonde staan meer rijtjes en twee-onder-een-kappers met een platte aanbouw achter het huis. Lekt het daar, dan zit het meestal in de strook waar dat platte dak tegen de achtergevel omhoog loopt. Weet je niet waar het vandaan komt, kijk dan na een bui op zolder waar het hout nat is en stuur me daar een foto van.",
  },
  {
    plaats: "oisterwijk",
    dienst: "daklekkage",
    hook: "Oisterwijk ligt tussen de bossen en vennen, en ook in het dorp zelf staan veel oude bomen, zoals de lindes op De Lind. In de herfst ligt er dan veel blad en soms een dikke laag mos in de goot en in de kilgoot. Loopt die over, dan komt het water binnen langs de muur of in een hoek. Dat lijkt op een daklek, terwijl het dak zelf nog dicht is. In de villawijken aan de rand van de bossen staan veel huizen met een groot, steil dak en meer dan één kilgoot, en daar kijk ik bij een natte plek eerst naar de kil. In Moergestel, dat ook bij Oisterwijk hoort, staan veel gewone dorpswoningen met een schoorsteen, en daar vind ik een lek vaker bij het lood eromheen. Zit de goot alleen vol, dan zeg ik dat ook: dan is leegmaken genoeg.",
    faq: [
      { v: "Kan mos op mijn dak een lek geven?", a: "Mos maakt zelf geen gat, maar het houdt water vast. Groeit het dik tussen de pannen, dan kan het water via het mos onder een pan door trekken. En mos dat loskomt, spoelt naar de goot of de kilgoot en zet die dicht, zodat hij bij een flinke bui overloopt. Onder de vele bomen in Oisterwijk zie ik dat vaak. Stuur me een foto van je dak vanaf de straat, dan zeg ik eerlijk of het mos eraf moet." },
    ],
  },

  // ── Tier B · goten reinigen ──────────────────────────────────────────
  {
    plaats: "vlijmen",
    dienst: "goten-reinigen",
    hook: "De goten in Vlijmen lopen na een storm vanaf de Maaskant snel vol blad en gruis. Ik maak ze leeg, maak de uitloop naar de regenpijp vrij en kijk meteen of er pannen los zitten.",
  },
  {
    plaats: "drunen",
    dienst: "goten-reinigen",
    hook: "Zo dicht bij de Loonse en Drunense Duinen krijgen de goten in Drunen flink wat zand en blad te verduren. Ik maak ze leeg en maak de uitloop vrij, zodat het water weer weg kan.",
  },
  {
    plaats: "boxtel",
    dienst: "goten-reinigen",
    hook: "In wijken als Selissen en Munsel liggen op steeds meer daken zonnepanelen. Daaronder zoeken duiven graag een plek, en hun nestmateriaal en poep spoelen bij een bui de goot in. Dat blijft bij de uitloop naar de regenpijp hangen, samen met het blad van de straatbomen, en bij de volgende flinke bui loopt de goot dan over. Ik maak de goot leeg en de uitloop vrij. Zie ik dat er duiven onder je panelen zitten, dan hoor je wat je daartegen kunt doen. Ook kijk ik naar de naden en de hoeken van de goot, want die zie je pas goed als hij leeg is.",
  },
  {
    plaats: "schijndel",
    dienst: "goten-reinigen",
    hook: "Bij de oudere rijtjes en vrijstaande woningen in Schijndel zijn volle goten een veelvoorkomende oorzaak van vochtige muren. Leeg, uitloop vrij en netjes achtergelaten.",
  },
  {
    plaats: "heusden",
    dienst: "goten-reinigen",
    hook: "De goten in en rond vesting Heusden vragen om voorzichtig werk bij oudere daken. Ik maak ze van begin tot eind leeg en controleer meteen het lood en de pannen.",
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "goten-reinigen",
    hook: "Langs de Dommel in Sint-Michielsgestel staan veel bomen, dus de goten lopen er snel vol blad. Ik maak ze leeg, maak de uitloop naar de regenpijp vrij en kijk naar vorsten en lood.",
  },
  {
    plaats: "oisterwijk",
    dienst: "goten-reinigen",
    hook: "Aan de rand van de bossen staan in Oisterwijk veel eiken en berken. Een berk laat in de nazomer en de herfst duizenden kleine zaadjes vallen, en die vormen samen met het blad een fijne, natte laag onderin de goot. Op veel goten zit een bolrooster op de uitloop naar de regenpijp. Dat houdt grof blad tegen, maar onder veel bomen raakt het rooster zelf dicht. Dan loopt de goot over, terwijl hij verder nog half leeg is. Ik maak de goot van begin tot eind leeg, haal het rooster schoon en zet het weer goed op de uitloop. Zie ik iets aan je pannen of het lood, dan hoor je dat meteen.",
  },

  // ── Tier C · stormschade × alle 12 kerndorpen (klaar voor stormpieken) ──
  {
    plaats: "oss",
    dienst: "stormschade",
    hook: "Staat er op je schoorsteen een kap of een afdekplaat, kijk daar na een storm dan ook even naar. Zit hij niet meer goed vast, dan gaat hij bij harde wind rammelen of waait hij eraf, en daarna regent het in het kanaal. In de Ruwaard en Ussen liggen op veel daken loodslabben langs de schoorsteen of onder een dakraam. Zit zo'n slab al wat los, dan pakt de wind hem bij een storm en zet hem rechtop. Vanaf de straat zie je dat als een grijze strook die van het dak af steekt. Ga niet zelf het dak op, maar maak een foto vanaf de straat en stuur die via WhatsApp. Is je dak open, dan dek ik het eerst af en herstel ik het daarna netjes, met foto's van wat ik aantref voor je verzekering.",
  },
  {
    plaats: "den-bosch",
    dienst: "stormschade",
    hook: "In de binnenstad staan veel smalle, hoge panden met een steil dak en de topgevel aan de straat. Bij een harde windstoot gaan daar vaak de pannen langs de rand bij de gevel en vlak onder de nok als eerste omhoog, en dan valt er zo een stuk pan of specie op de stoep. In Maaspoort en Empel, aan de kant van de Maas, waait het over het open land flink. Daar vind ik na een storm vaker een losse nokvorst of een pan naast een dakraam die is opgetild. Ligt er iets op straat of is je dak open, ga dan niet zelf naar boven, maar maak vanaf de grond een foto en stuur die via WhatsApp. Ik dek het eerst af, zodat het binnen droog blijft, en herstel het daarna netjes. Den Bosch is mijn thuisbasis, dus meestal ben ik er snel.",
  },
  {
    plaats: "rosmalen",
    dienst: "stormschade",
    hook: "Rond de Maliskamp en Kruisstraat, aan de rand van Rosmalen, ligt veel open land. Daar heeft de wind vrij spel op de vrijstaande huizen en boerderijen, en na een storm vind ik daar vaker pannen langs de rand van het dak die zijn opgetild of verschoven. In De Groote Wielen liggen op veel daken zonnepanelen. Waait de wind eronder, dan kan een pan bij een dakhaak breken, en dat zie je vanaf de straat bijna niet. Zit er een paneel los, dan zeg ik dat eerlijk, want daarvoor heb je je installateur nodig. Ga zelf niet het dak op en stuur me een foto vanaf de grond. Is er een open plek, dan maak ik die eerst dicht, en daarna volgt de nette reparatie.",
  },
  {
    plaats: "vught",
    dienst: "stormschade",
    hook: "In Vught staan veel huizen tussen hoge bomen, in de villawijken en aan de rand van de bossen. Bij een storm breken daar takken af die op het dak terechtkomen. Zo'n tak kan een pan breken of een goot uit de haken trekken, en vanaf de straat zie je dat niet altijd meteen. Kijk na een storm daarom even goed: ligt er een pan scheef, hangt de goot schuin of ligt er een tak in de goot? In Vught-Noord en de andere naoorlogse wijken staan meer rijtjes met een pannendak, en daar zie ik na harde wind vooral pannen aan de onderkant of langs de zijkant van het dak die zijn gaan schuiven. Is je dak open, dan dek ik het eerst af en herstel ik het daarna netjes. Ga zelf niet het dak of de ladder op, en stuur me een foto vanaf de grond.",
  },
  {
    plaats: "berlicum",
    dienst: "stormschade",
    hook: "In het open buitengebied rond Berlicum heeft de wind vrij spel; pannen en nokvorsten waaien er makkelijk los. Snel afdekken, dan netjes herstellen.",
  },
  {
    plaats: "vlijmen",
    dienst: "stormschade",
    hook: "Vanaf de Maaskant krijgt Vlijmen flink wind; na een storm zie ik hier vaak weggewaaide pannen en losgeraakt lood. Is je dak open, dan maak ik dat eerst dicht, zodat het binnen droog blijft.",
  },
  {
    plaats: "drunen",
    dienst: "stormschade",
    hook: "Open bij de Loonse en Drunense Duinen vangt Drunen veel wind. Losse of weggewaaide pannen laten regen binnen. Ligt er een open plek, dan dek ik die eerst af, en daarna volgt de nette reparatie.",
  },
  {
    plaats: "boxtel",
    dienst: "stormschade",
    hook: "Sinds 2021 hoort ook Esch bij de gemeente Boxtel. Rond Liempde en Esch ligt veel open land met verspreide boerderijen, en daar pakt de wind een groot, steil dak flink aan. Na een storm zie ik daar vaker dat de laatste vorst van de nok, vlak bij de gevel, is losgeraakt. In de rijtjes in Boxtel zelf zitten losse pannen na harde wind vooral aan het eind van de rij, bij het hoekhuis, waar de wind het hardst langs de kopgevel trekt. Ga na een storm niet onder de dakrand staan waar iets naar beneden kwam, en app me een foto vanaf de straat.",
  },
  {
    plaats: "schijndel",
    dienst: "stormschade",
    hook: "Op een deel van de oudere daken in Schijndel staat nog een antenne of een schotel die niemand meer gebruikt. Bij een storm gaat die heen en weer, en de mast of de beugel schuurt of breekt de pannen eromheen. Waait hij om, dan valt hij vaak over de nok en neemt hij een paar nokvorsten mee. Gebruik je zo'n antenne niet meer, laat hem dan weghalen voordat de winterstormen komen. Rond Wijbosch en in het buitengebied staan boerderijen met een groot dak en vaak een schuur ernaast, en over het open land waait het daar flink. Kijk na een storm dus ook naar het dak van de schuur, want dat vergeet je snel. Ga zelf niet het dak op, maar stuur me een foto vanaf de grond. Is er een open plek, dan maak ik die eerst dicht, en daarna volgt de nette reparatie.",
  },
  {
    plaats: "heusden",
    dienst: "stormschade",
    hook: "Aan de open Maaskant bij Heusden grijpt de wind hard aan; oudere daken in de vesting zijn extra kwetsbaar. Ik dek het eerst af en herstel het daarna, zoveel mogelijk met materiaal dat bij het oude werk past.",
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "stormschade",
    hook: "Langs de Dommel in Sint-Michielsgestel waaien bij storm vorsten en pannen los van de klassieke daken. Ik beperk de schade en maak het weer waterdicht.",
  },
  {
    plaats: "oisterwijk",
    dienst: "stormschade",
    hook: "In bosrijk Oisterwijk komen bij storm takken én pannen naar beneden. Ik dek de schade eerst af en herstel het daarna netjes, met foto's voor je verzekeraar.",
  },

  // Dakgoot repareren of vervangen: eerst Den Bosch (Search Console: plek 26 tot 45 zonder eigen pagina)
  {
    plaats: "den-bosch",
    dienst: "dakgoot-vervangen",
    hook: "In de Muntel en de Vliert hebben de huizen uit de jaren '20 en '30 vaak nog zinken goten, soms als bakgoot achter een houten lijst. Na veel jaren gaan die lekken bij de naden, de hoeken en de uitloop naar de regenpijp. In nieuwere wijken als Maaspoort en Empel hangen vaker kunststof goten, en daar zit het meestal in een verbinding of een losse beugel. Ik kijk eerst of repareren kan, en vervang alleen wat echt op is.",
    faq: [
      { v: "Kun je een oude zinken goot in Den Bosch repareren in plaats van vervangen?", a: "Vaak wel. Bij de oudere huizen in de Muntel en de Vliert lekt een zinken goot meestal eerst bij een naad, een hoek of de uitloop naar de regenpijp. Is de rest van het zink nog goed, dan herstel ik alleen dat stuk. Is het zink over een groot stuk dun of zitten er gaatjes in, dan zeg ik eerlijk dat een nieuw stuk beter is. Je hoort vooraf wat het kost." },
      { v: "Mag ik in de binnenstad een kunststof goot ophangen?", a: "Dat kan niet altijd. De binnenstad van Den Bosch is beschermd stadsgezicht, en bij een monument mag je niet zomaar ander materiaal gebruiken. Twijfel je, vraag het dan na bij de gemeente. Ik kijk wat er nu hangt en herstel de goot het liefst met materiaal dat bij het pand past." },
    ],
  },
  // Dakgoot repareren of vervangen in Vught (Search Console: dakgoot vervangen vught plek 26, dakgoot reparatie vught plek 37)
  {
    plaats: "vught",
    dienst: "dakgoot-vervangen",
    hook: "Langs de Taalstraat en in de villawijken richting de Loonsebaan liggen veel lange zinken goten, vaak als bakgoot achter een houten lijst. Onder de hoge bomen daar blijft blad lang in de goot liggen, en juist op die plekken wordt het zink na jaren dun en gaan de naden lekken. In de rijtjes van Vught-Noord hangen vaker kunststof goten. Daar zit een lek meestal in een verbinding, een uitgedroogd rubber of een losse beugel. Ik kijk eerst of een reparatie genoeg is, en vervang alleen het stuk dat echt op is.",
    faq: [
      { v: "Mijn zinken bakgoot achter een houten lijst lekt. Moet de hele goot eruit?", a: "Niet altijd. Lekt hij op één naad of hoek, dan is dat stuk vaak te herstellen. Is het zink over een groot stuk dun geworden, vaak op de plek waar het blad altijd blijft liggen, dan heeft plakken weinig zin en is een nieuw stuk zink beter. Je hoort vooraf wat het kost." },
      { v: "Hoe zie ik of mijn goot lek is?", a: "Kijk vanaf de straat of vanuit een raam boven naar de goot. Druppels die na een bui op één plek blijven vallen, een goot die in het midden doorhangt, of kleine gaatjes en witte vlekken op het zink zijn tekenen dat er iets lek is. Ga zelf niet de ladder op, maar stuur me een foto. Dan zeg ik wat ik zie." },
    ],
  },
  // Daklekkage in Tilburg, met Udenhout en Berkel-Enschot (Rens 23-10: ook bij spoed; Search Console: daklekkage udenhout, daklekkage berkel-enschot)
  {
    plaats: "tilburg",
    dienst: "daklekkage",
    hook: "Udenhout en Berkel-Enschot liggen aan de kant van Tilburg die het dichtst bij Den Bosch ligt. In de oude dorpskernen staan veel vrijstaande huizen en twee-onder-een-kappers met een pannendak. Daar begint een lek vaak bij het lood rond de schoorsteen of bij een pan die verschoven is. In de Reeshof staan veel rijtjeshuizen uit de jaren '80 en '90. Heeft je huis daar een platte aanbouw of berging, dan komt het water nogal eens binnen bij een naad of bij de rand van dat platte dak. Ik zoek eerst waar het water echt binnenkomt en repareer dan alleen wat nodig is.",
    faq: [
      { v: "Kom je bij een lek ook in Udenhout en Berkel-Enschot?", a: "Ja. Udenhout en Berkel-Enschot horen sinds 1997 bij de gemeente Tilburg, en ook daar kom ik bij een lekkend dak. Bel of app me met een foto van de natte plek en, als het lukt, van die kant van je dak. Dan zie ik vaak al waar ik moet zoeken en hoor je wanneer ik kan komen." },
    ],
  },
  // Daklekkage in Veghel (Search Console: daklekkage veghel plek 25, dakgoot lekkage veghel plek 24), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "veghel",
    dienst: "daklekkage",
    hook: "In het centrum van Veghel, langs de Zuid-Willemsvaart, staan nog oudere panden. Daar zit een lek vaak in oud lood rond de schoorsteen of in een zinken goot die bij een naad is gaan lekken. In de kerkdorpen eromheen, zoals Eerde, Zijtaart en Keldonk, staan veel vrijstaande huizen en oude boerderijen met een groot pannendak. Staat er een schuur of aanbouw tegenaan, dan ligt er een kilgoot waar de daken samenkomen. Daar blijft blad liggen en daar lekt het na verloop van tijd vaak. Ik zoek eerst waar het water echt binnenkomt en repareer dan gericht, zonder onnodig sloopwerk.",
    faq: [
      { v: "De kilgoot tussen mijn huis en de schuur lekt elk najaar. Moet hij vervangen worden?", a: "Niet altijd. Lekt het vooral in de herfst, dan zit de kil vaak vol blad en loopt hij bij een bui over de rand onder de pannen. Dan is leegmaken genoeg. Zitten er scheurtjes of gaatjes in het lood of zink van de kil, dan herstel ik die plek. Pas als de kil over de hele lengte dun of lek is, vervang ik hem. Je hoort vooraf wat het kost." },
    ],
  },
  // Daklekkage in Eindhoven (Search Console: lekkage dak eindhoven plek 36, daklekkage eindhoven en dak lekkage eindhoven samen 29 vertoningen), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "eindhoven",
    dienst: "daklekkage",
    hook: "In Philipsdorp en andere wijken van rond 1910 tot 1930 staan veel huizen met een steil pannendak, een schoorsteen en oude zinken goten. Daar begint een lek vaak bij het lood rond de schoorsteen of bij een goot die bij een naad is gaan lekken. In nieuwere wijken zoals Meerhoven liggen op veel daken zonnepanelen. Daar zie ik lekkage nogal eens bij een pan die bij het plaatsen van de beugels is gebroken of verschoven. Eindhoven is voor mij zo'n 40 minuten rijden. Stuur daarom eerst een foto via WhatsApp, dan weet ik wat ik mee moet nemen en hoor je eerlijk wanneer ik kan komen.",
  },
  // Daklekkage in Waalwijk (Search Console: daklekkage waalwijk 24 vertoningen, lekkage waalwijk en dakgoot lekkage waalwijk), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "waalwijk",
    dienst: "daklekkage",
    hook: "Langs de Grotestraat en in de oude straten eromheen staan nog veel huizen uit de tijd van de schoenindustrie, soms met een oude werkplaats of schuur erachter. Zo'n achterbouw heeft vaak een plat of flauw dak, en daar komt het water nogal eens binnen waar de achterbouw tegen het huis aan zit. In Waspik staan meer vrijstaande huizen en twee-onder-een-kappers met een groot pannendak. Daar begint een lek meestal bij het lood rond de schoorsteen of bij een pan die na een storm is gaan schuiven. Ik zoek eerst waar het water echt binnenkomt en repareer dan alleen wat nodig is.",
  },
  // Daklekkage in Breda (Rens 26-10: ja, ook bij een lekkend dak in Breda; Search Console: daklekkage breda 48 vertoningen), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "breda",
    dienst: "daklekkage",
    hook: "In Ginneken en Boeimeer staan veel huizen van rond 1930 met een steil pannendak en een goot die in de dakrand is weggewerkt. Wordt het zink van zo'n goot dun, dan komt het water niet op zolder binnen, maar bovenin de gevel of langs het plafond van de slaapkamer. In de Haagse Beemden staan vooral rijtjes en twee-onder-een-kappers uit de jaren '80 en '90, vaak met een dakraam in het pannendak. Daar zie ik lekkage nogal eens langs het gootstuk onder dat dakraam, of bij een pan ernaast die niet meer goed in de sluiting ligt. Omdat ik vanuit Den Bosch zo'n 40 minuten onderweg ben, vraag ik je eerst een foto van de natte plek te appen. Dan neem ik meteen het goede materiaal mee, en ik zeg je eerlijk op welk moment ik er kan zijn.",
    faq: [
      { v: "Kom je bij een lek ook in Prinsenbeek, Teteringen, Bavel en Ulvenhout?", a: "Ja. Prinsenbeek, Teteringen, Bavel en Ulvenhout horen sinds 1997 bij de gemeente Breda, en ook daar kom ik bij een lekkend dak. Teteringen ligt aan de kant van Den Bosch, de andere dorpen liggen iets verder. Bel of app me met een foto van de natte plek, dan hoor je wanneer ik kan komen." },
    ],
  },
  // Dakgoot repareren of vervangen in Veghel, met Erp en Boerdonk (Search Console: dakgoot lekkage veghel plek 23, dakgoot reparatie veghel plek 34), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Veghel
  {
    plaats: "veghel",
    dienst: "dakgoot-vervangen",
    hook: "In Erp en Boerdonk staan veel langgevelboerderijen en oude woonboerderijen. Die hebben een lange, lage goot over de hele voorgevel, en aan de schuur of stal ernaast hangt vaak nog een tweede goot. Na veel jaren zakt zo'n goot tussen de haken door. Dan blijft er na een bui water in het midden staan, en juist daar gaat hij als eerste roesten of lekken. Aan de nieuwere huizen in Veghel zelf hangen vooral kunststof goten. Die zetten uit als het warm is en krimpen bij vorst, en na een paar jaar schiet er dan een hoekstuk of eindstuk los. Vaak is het genoeg om de goot weer op afschot te hangen of één hoekstuk te vervangen. Een nieuwe goot raad ik pas aan als het materiaal zelf op is.",
    faq: [
      { v: "Kom je voor een lekkende goot ook in Erp, Boerdonk en Keldonk?", a: "Ja. Erp, Boerdonk en Keldonk horen net als Veghel bij de gemeente Meierijstad. Ook daar repareer of vervang ik goten, ook de lange goten aan boerderijen en schuren. Veghel is zo'n 20 minuten rijden vanaf Den Bosch. Stuur me via WhatsApp een foto van de goot vanaf de straat, dan zie ik vaak al of het om één naad of hoekstuk gaat." },
    ],
  },
  // Dakgoot repareren of vervangen in Oisterwijk, met Moergestel en Haaren (Search Console: dakgoot reparatie oisterwijk plek 20, dakgoot vernieuwen oisterwijk plek 59), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Oisterwijk
  {
    plaats: "oisterwijk",
    dienst: "dakgoot-vervangen",
    hook: "Oisterwijk is al meer dan honderd jaar geliefd om te wonen tussen de bossen en vennen, en in de lanen staan nog veel oude villa's met een overstekend dak. Bij zulke huizen ligt de zinken goot vaak in een houten gootlijst. Lekt het zink, dan zie je dat niet aan een druppel langs de gevel, maar aan de lijst zelf: de verf bladdert, het hout wordt zacht en er komen donkere plekken onder de goot. Daarom kijk ik bij zo'n goot ook of het hout eronder nog stevig is, want een nieuw stuk zink in een rotte lijst houdt het niet lang. In Moergestel en Haaren hangt aan veel vrijstaande huizen en boerderijen een lange goot, soms met maar één regenpijp aan het eind. Bij een stortbui kan die het water niet bijhouden en loopt de goot over aan de kant waar geen pijp zit, terwijl hij nergens lek is. Dan helpt een extra uitloop met een tweede regenpijp soms beter dan een nieuwe goot.",
    faq: [
      { v: "Mijn goot loopt over aan de kant waar geen regenpijp zit. Kan er een regenpijp bij?", a: "Vaak wel. Bij een lange goot met maar één regenpijp aan het eind kan een tweede uitloop met een eigen regenpijp het water sneller kwijt. Waar die pijp langs de gevel naar beneden kan en waar het water daarna heen gaat, naar het riool of de tuin, bekijken we samen ter plekke. Eerst kijk ik wel of de goot niet gewoon vol zit of scheef hangt, want dan is dat genoeg. Je hoort vooraf wat het kost." },
    ],
  },
  // Dakgoot repareren of vervangen in Boxtel (Search Console: dakgoot lekkage boxtel plek 31, dakgoot reparatie boxtel, dakgoot vernieuwen boxtel), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Boxtel
  {
    plaats: "boxtel",
    dienst: "dakgoot-vervangen",
    hook: "In de naoorlogse wijken van Boxtel, zoals Selissen, staan veel rijtjeshuizen waar de goot van het ene huis gewoon doorloopt in die van de buren. Op de grens tussen twee huizen zit dan een naad, en daar gaat zo'n goot na veel jaren als eerste lekken. Het lastige is dat het water vaak een stukje verderop naar beneden komt. Soms druppelt het bij de buren terwijl het lek aan jouw kant zit, of andersom. Heeft de buurman zijn goot al laten vervangen door kunststof en hangt er bij jou nog zink, dan zit er op de grens een overgangsstuk. Kunststof zet bij warmte en kou veel meer uit dan zink, en juist die overgang laat na een paar jaar los. Ik kijk daarom over de hele lengte van de goot. Zit het lek op het stuk van je buren, dan zeg ik dat eerlijk, zodat jullie het samen kunnen regelen. Stuur me een foto vanaf de straat, dan zie ik vaak al of het om één naad gaat of om meer.",
  },
  // Dakreparatie in Oss (Search Console: dakreparatie oss 46 vertoningen op plek 80, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Oss
  {
    plaats: "oss",
    dienst: "dakreparatie",
    hook: "Sinds 2015 hoort ook Geffen bij de gemeente Oss. Daar staan veel twee-onder-een-kappers en vrijstaande huizen met een flink pannendak. Op oudere daken liggen de pannen langs de zijkant en vlak boven de goot vaak nog zonder stormhaak, en juist die gaan bij een harde windstoot als eerste omhoog. Ik leg ze terug en kijk meteen of er een haak bij moet. Bij de oudere rijtjes in Oss liggen soms nog pannen die niet meer gemaakt worden. Is er een kapot, dan zoek ik eerst een pan die past. Lukt dat niet, dan kan ik een oude pan van de achterkant naar voren halen en achter een nieuwe neerleggen, zodat je aan de straatkant niets ziet. Je hoort vooraf wat het kost.",
  },
  // Dakreparatie in Vlijmen (Search Console: dakreparatie vlijmen 25 vertoningen op plek 67, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, storm- en gootpagina van Vlijmen
  {
    plaats: "vlijmen",
    dienst: "dakreparatie",
    hook: "In de rijtjes uit de jaren '70 in Vlijmen liggen op veel daken nog de betonnen pannen van toen. Na zoveel jaren is de toplaag eraf: de pan wordt ruw en groen, en er groeit mos op dat in de goot terechtkomt. Breekt er een, dan vervang ik alleen die pan. Zijn er op veel plekken pannen gescheurd, dan zeg ik eerlijk dat een groter stuk vervangen slimmer is. In Geerpark, de nieuwe wijk van Vlijmen, ligt de nok niet meer in specie maar droog, met een rol eronder en een klem per vorst. Daar zie ik na een storm eerder een vorst die is gaan schuiven omdat een klem los zit, dan een nok die afbrokkelt. Vanaf de straat zie je vaak al welke pan of vorst scheef ligt. Maak er een foto van en stuur hem via WhatsApp, dan zeg ik je wat het wordt.",
    faq: [
      { v: "Kun je mijn verweerde betonpannen ook schoonmaken?", a: "Dat kan. Schoonmaken maakt een oude pan niet nieuw, maar het mos is eraf, je goot loopt minder snel vol en ik zie meteen of er pannen gescheurd zijn. Bij betonpannen werk ik voorzichtig, zodat de toplaag niet nog verder slijt. Je hoort vooraf wat het kost." },
    ],
  },
  // Dakreparatie in Waalwijk (Search Console: dakreparatie waalwijk 30 vertoningen op plek 77, dakpannen waalwijk 27), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Waalwijk
  {
    plaats: "waalwijk",
    dienst: "dakreparatie",
    hook: "Op een deel van de oude huizen in Besoyen, Baardwijk en Capelle liggen nog oud-Hollandse pannen. Die hebben geen sluiting zoals een moderne pan, ze liggen alleen een stukje over elkaar heen. Waait er één scheef of breekt er één, dan loopt het water er makkelijk onder door. Een nieuwe pan in dezelfde vorm is meestal wel te krijgen, maar de kleur wijkt vaak af van je oude pannen. Dat zeg ik je vooraf eerlijk, zodat je niet voor een verrassing staat. In de nieuwere wijken van Waalwijk zijn de daken nog jong. Moet daar al iets gerepareerd worden, kijk dan eerst of de bouwer het nog moet oplossen. Is dat niet zo, dan kom ik kijken en hoor je vooraf de vaste prijs.",
  },
  // Dakreparatie in Vught (Search Console: dakreparatie vught 24 vertoningen op plek 65, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, storm- en gootpagina van Vught
  {
    plaats: "vught",
    dienst: "dakreparatie",
    hook: "Veel vooroorlogse villa's in Vught hebben een schilddak: een dak dat aan alle vier de kanten schuin afloopt. Op de hoeken waar twee dakvlakken samenkomen, liggen hoekvorsten, net als bovenop de nok. Op oudere daken liggen die nog in specie, en als die bros wordt, gaat er bij harde wind een vorst schuiven en loopt de regen langs de hoek naar binnen. Op een deel van de oudere daken in Vught liggen de pannen ook nog direct op de latten, zonder folie of beschot eronder. Gaat zo'n lat na veel jaren rotten, dan zakt een rij pannen een stukje en zie je vanaf de straat een golf in het dak. Dan vervang ik de lat en leg ik de pannen weer recht. Ik herstel wat los of kapot is, en zeg je eerlijk als een groter stuk van je dak aandacht nodig heeft.",
    faq: [
      { v: "Mijn huis in Vught is een monument. Mag je daar pannen vervangen?", a: "Ja, maar bij een monument moet een nieuwe pan meestal in vorm en kleur passen bij de oude. Ik zoek eerst een pan die erbij past voordat ik iets vervang. Twijfel je of je huis een monument is, vraag het dan na bij de gemeente Vught." },
    ],
  },
  // Daklekkage in Uden (Search Console: daklekkage uden 25 vertoningen op plek 67, dakgoot lekkage uden plek 33), met andere lokale inhoud dan plaatsen.ts en de andere lekkagepagina's
  {
    plaats: "uden",
    dienst: "daklekkage",
    hook: "In wijken als Bitswijk en Hoenderbos staan veel rijtjeshuizen en twee-onder-een-kappers van zo'n veertig, vijftig jaar oud. Bij een deel daarvan is de goot in de loop der jaren wat gezakt. Dan steken de onderste pannen niet ver genoeg meer in de goot, en bij een flinke bui loopt het water achter de goot langs de muur in. Binnen zie je dat als een natte plek op de muur onder de goot of naast het kozijn, en dat lijkt op een daklek. Bij oudere huizen rond het centrum is de schoorsteen soms weggehaald toen er een cv-ketel kwam, en is het gat met pannen dichtgelegd. Is dat destijds niet goed aangesloten, dan lekt het jaren later precies op die plek. Sinds 2022 hoort Uden bij de gemeente Maashorst, maar voor mij is het gewoon 25 minuten rijden vanaf Den Bosch. Stuur me een foto van de natte plek en van die kant van je dak, dan zoek ik gericht.",
    faq: [
      { v: "Hoe weet ik of het water van de goot komt of van het dak?", a: "Kijk tijdens een flinke bui buiten naar de goot boven de natte plek. Loopt er water over de voorkant, of druppelt het achter de goot langs de muur, dan zit het meestal bij de goot. Zit de natte plek binnen hoger, op het schuine plafond of op zolder, of wordt hij ook bij een gewone bui nat, dan komt het water vaker van het dak zelf. Ga er niet voor op een ladder staan. Maak vanaf de grond een foto van de goot en binnen van de natte plek, en stuur die via WhatsApp." },
    ],
  },
  // Dakgoot repareren of vervangen in Sint-Michielsgestel (Search Console: dakgoot reparatie sint michielsgestel plek 40), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Sint-Michielsgestel
  {
    plaats: "sint-michielsgestel",
    dienst: "dakgoot-vervangen",
    hook: "In Den Dungen en in de nieuwere straten van Sint-Michielsgestel liggen op steeds meer daken zonnepanelen tot vlak boven de goot. Van glad glas loopt de regen veel sneller af dan van pannen. Bij een stortbui schiet het water dan over de goot heen en klettert het langs de gevel naar beneden, terwijl de goot zelf nergens lek is. Vaak helpt het dan om de goot iets anders te hangen, zodat het water er weer in valt. In het oude centrum en bij de villa's langs de Dommel hangen nog veel zinken goten. Daar zie ik na veel jaren donkere of groene strepen op de gevel, onder een naad of een hoek van de goot: daar druppelt het dan al een tijd. Is het zink op meer plekken dun, dan zeg ik dat eerlijk voordat je ergens aan begint.",
  },
  // Dakgoot repareren of vervangen in Oss (Search Console: dakgoot reparatie oss 19 vertoningen op plek 81, dakgoot lekkage oss 11, dakgoot vervangen oss 9, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, goot- en dakreparatiepagina van Oss
  {
    plaats: "oss",
    dienst: "dakgoot-vervangen",
    hook: "In Ussen en andere naoorlogse wijken van Oss heeft een deel van de rijtjeshuizen een regenpijp die niet buiten langs de gevel loopt, maar binnen in de muur of door een kast naar beneden gaat. Lekt bij zo'n huis de uitloop, het stuk waar de goot overgaat in die pijp, dan zie je buiten niets. Je merkt het binnen: een natte plek bovenin de muur, in de kast op de overloop of op het plafond eronder, en dat lijkt op een daklek. Meestal zit het in de aansluiting van de uitloop op de pijp, of zit de uitloop vol blad, zodat het water bij een bui terugloopt en langs de aansluiting naar binnen gaat. Dat los ik boven bij de goot op. Lekt de pijp zelf verderop in de muur, dan zeg ik dat eerlijk, want dan heb je eerder een loodgieter nodig. Stuur me een foto van de natte plek binnen, dan weet ik waar ik boven moet beginnen.",
    faq: [
      { v: "Hoe weet ik of mijn regenpijp binnen in de muur zit?", a: "Kijk vanaf de straat en vanuit de tuin naar je goot. Loopt er aan de voor- of achtergevel geen regenpijp naar beneden, dan zit hij meestal binnen. Soms zie je hem in een kast op de overloop of in de berging als een dikke grijze buis. Twijfel je, stuur dan een foto van je gevel." },
      { v: "Waarom lekt het bij mij vooral bij een stortbui?", a: "Bij een gewone bui kan een uitloop met wat blad erin het water nog net aan. Bij een stortbui komt er in korte tijd veel meer water. Dan loopt de goot bij de uitloop vol en zoekt het water een weg langs de aansluiting naar binnen. Bij een huis met een regenpijp binnen is het daarom extra slim om de uitloop voor de winter leeg te laten maken." },
    ],
  },
  // Dakreparatie in Veghel (Search Console: dakreparatie veghel 22 vertoningen op plek 74, dakpannen veghel 8, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Veghel
  {
    plaats: "veghel",
    dienst: "dakreparatie",
    hook: "In Bolken en de andere woonwijken van Veghel staan veel rijtjeshuizen met een pannendak. Zit daar onder de onderste rij pannen geen vogelwering, dan kruipen mussen en spreeuwen er in het voorjaar onder, en met hun nesten duwen ze die pannen een stukje omhoog. Na een paar jaar liggen ze niet meer goed in de sluiting, en bij harde wind waait de regen eronder. Je merkt het eerst aan gekrabbel boven je slaapkamer en later aan een natte plek laag op zolder. Buiten het broedseizoen leg ik de pannen weer goed, vervang ik wat gebroken is en zet ik er kunststof vogelwering onder. In een rij waar de buren hun dak al hebben laten vernieuwen, liggen op de grens twee soorten pannen naast elkaar. Daar zit een overgang die het water moet tegenhouden, en juist die gaat na een paar jaar nogal eens open. Ik kijk dan aan beide kanten, en zit het aan de kant van de buren, dan zeg ik dat eerlijk. Je hoort vooraf wat het kost.",
    faq: [
      { v: "Ik hoor vogels onder mijn dakpannen. Is dat erg?", a: "Niet meteen, maar laat het niet jaren zitten. Met hun nesten duwen vogels de onderste pannen omhoog, en dan kan de regen eronder waaien. Zitten er in het voorjaar of de zomer jongen in het nest, dan wacht ik tot ze uitgevlogen zijn. Daarna leg ik de pannen recht en sluit ik de rij onder de pannen af met kunststof vogelwering. Je hoort vooraf wat het kost." },
    ],
  },
  // Schoorsteen vegen in Veghel (Search Console: schoorsteenveger veghel 21 vertoningen op plek 53, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de andere Veghel-pagina's
  {
    plaats: "veghel",
    dienst: "schoorsteen-vegen",
    hook: "In de langgevelboerderijen en vrijstaande huizen in Erp, Eerde en Zijtaart staat nogal eens een houtkachel in de oude deel of in de woonkamer. Stook je daar vaak op, dan zet zich elk stookseizoen een laag roet in het kanaal af. Stook je met hout dat nog niet goed droog is, dan wordt dat een glimmende, teerachtige laag, en die kan vlam vatten. Daarom veeg ik het hele kanaal en kijk ik meteen of er iets in zit, zoals een nest van kauwen. Bovenop kijk ik naar de kap en het lood rond de schoorsteen, want die zie je vanaf de grond slecht. Heb je in Veghel alleen een cv-ketel met een eigen afvoerpijp door het dak, dan hoeft er niets geveegd te worden: die laat je nakijken door je installateur. Twijfel je wat je hebt, stuur dan een foto van je kachel of haard en van de schoorsteen buiten.",
  },
  // Daklekkage in Helmond (Rens 19-10: ja, ook bij spoed en lekkage in Helmond; Search Console: lekdetectie helmond 15, lekkage helmond 12, dakreparatie helmond 12 en daklekkage helmond 9 vertoningen, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "helmond",
    dienst: "daklekkage",
    hook: "In Dierdonk, Brouwhuis en Rijpelberg, wijken die tussen de jaren '70 en '90 zijn gebouwd, gaat bij veel huizen een afvoerpijp van de ventilatie of de cv-ketel door het pannendak. Rond zo'n pijp zit een rubberen of loden kraag op een speciale pan. Na dertig, veertig jaar droogt die kraag uit of scheurt hij, en dan loopt het water bij een flinke bui langs de pijp naar binnen. Druppelt het rond de pijp ook als het droog en koud is, dan is het vaak condens in de pijp zelf, en dan valt er aan het dak niets te repareren. In de oudere straten rond het centrum, uit de tijd dat Helmond een stad van textielfabrieken was, kijk ik bij een lek eerst naar het lood rond de schoorsteen en naar de goot. Tussen Den Bosch en Helmond zit zo'n 40 minuten rijden. Met een foto van de natte plek en van die kant van je dak zie ik vaak al waar ik moet zoeken, en dan hoor je eerlijk wanneer ik kan komen.",
    faq: [
      { v: "Wat doe ik met het lek tot je er bent?", a: "Zet een emmer met een doek erin onder de druppel, haal spullen weg en leg handdoeken neer. Bolt het plafond op of zit er een lamp in de natte plek, ga er dan niet onder staan en laat die lamp uit. Ga zelf niet het dak op, zeker niet bij regen of wind. Maak foto's van de natte plek, want die heb je ook nodig voor je verzekering. Op de spoedpagina lees je wat je verder meteen kunt doen." },
    ],
  },
  // Goten reinigen in Veghel (Search Console: dakgoot schoonmaken veghel 21 vertoningen op plek 68, nog geen eigen pagina; gootpiek in november), met andere lokale inhoud dan plaatsen.ts en de andere Veghel-pagina's
  {
    plaats: "veghel",
    dienst: "goten-reinigen",
    hook: "Op een deel van de goten in Veghel ligt een kunststof rooster of een borstel over de hele lengte, bedoeld om het blad tegen te houden. Grof blad blijft er dan bovenop liggen, maar zaadjes, gruis van de pannen en losgekomen mos zakken er gewoon doorheen. Daaronder slibt de goot langzaam dicht, en omdat je van beneden alleen het rooster ziet, lijkt hij schoon. Ik haal het rooster of de borstel eruit, maak de goot eronder leeg, maak de uitloop naar de regenpijp vrij en leg alles daarna weer terug. Bij veel twee-onder-een-kappers en vrijstaande huizen in Mariaheide en de andere kerkdorpen staat naast het huis een garage of berging met een eigen, lage goot. Nogal eens komt de regenpijp van het grote dak daarop uit. Bij een flinke bui krijgt die kleine goot dan het water van twee daken, en zit hij een beetje vol, dan loopt hij over tegen de muur. Die lage goot neem ik dus ook mee. Zie ik iets aan je pannen of het lood, dan hoor je dat meteen.",
  },
];
