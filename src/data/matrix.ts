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
      { v: "In de Ruwaard druppelt het bij mij onder het dakraam. Is het raam lek of het dak eromheen?", a: "Kijk waar het nat wordt. Druppelt het vooral langs de onderkant van het raam, dan zit het vaak in het gootstuk: de strook die het water onder het raam over de pannen leidt. Wordt het nat langs de zijkanten of bovenin, dan komt het water vaker van de pannen of het lood naast en boven het raam, bijvoorbeeld omdat er blad boven het raam blijft liggen. Zitten er alleen druppels op het glas en het kozijn, vooral op koude ochtenden, dan is het vaak condens en geen lek. Stuur me een foto van het raam van binnen en, als het lukt, van buiten vanaf de straat." },
    ],
  },
  {
    plaats: "den-bosch",
    dienst: "daklekkage",
    hook: "In de binnenstad liggen veel goten verstopt tussen twee panden of achter een topgevel, waar je ze vanaf de straat niet ziet. Raakt zo'n goot vol of gaat het zink lekken, dan komt het water binnen op de bovenste verdieping, soms zelfs bij de buren, en vaak een eind van de plek waar het echte lek zit. In de Kruiskamp en de andere wijken uit de jaren '50 en '60 staan veel rijtjes met een pannendak en een schoorsteen per huis. Daar begint een lek meestal bij het lood rond die schoorsteen of bij een pan die is gaan schuiven. In Maaspoort en Empel liggen veel platte daken op aanbouwen en bergingen, en daar zie ik lekkage vaak bij de dakrand of bij een afvoer die vol blad zit. Den Bosch is mijn thuisbasis, dus meestal kan ik snel even komen kijken.",
    faq: [
      { v: "Ik woon boven een winkel of in een appartement in de binnenstad. Kun je bij een lek ook komen?", a: "Ja. Bij een bovenwoning of appartement is het dak vaak van de eigenaar van het pand of van de VvE. Meld het lek daar ook meteen, want zij moeten meestal akkoord geven voor de reparatie. Huur je, meld het dan eerst bij je verhuurder. Ik kijk waar het water binnenkomt en leg uit wat ik zie, zodat iedereen weet wat er nodig is. Stuur me gerust eerst een foto van de natte plek via WhatsApp." },
      { v: "In Maaspoort lekt het bij mij in de berging met het platte dak. Waar zit het meestal?", a: "Bij die bergingen en aanbouwen zit het vaak bij de afvoer of bij de rand. Ligt er blad of zand in de afvoer, dan blijft het water na een bui op het dak staan en zoekt het een weg langs de rand naar binnen. Druppelt het vlak langs de muur van het huis, dan zit het vaker in de strook waar het platte dak tegen de gevel omhoog loopt. Kijk vanuit een raam boven of er na een bui water op het dak blijft staan. Stuur me daar een foto van via WhatsApp, samen met een foto van de natte plek binnen." },
    ],
  },
  {
    plaats: "rosmalen",
    dienst: "daklekkage",
    hook: "In de rijtjeshuizen uit de jaren '60 en '70 in Rosmalen liggen de nokvorsten vaak nog in specie. Na zoveel jaren wordt die specie bros en brokkelt hij af, en dan waait de regen onder de nok door naar binnen. Dat zie je eerst als een natte plek op zolder, net onder de nok. In dezelfde huizen vind ik een lek ook vaak bij de ontluchtingspijp die door het dak steekt. De loden of rubberen kraag eromheen droogt uit en scheurt, en bij een flinke bui loopt het water dan langs de pijp naar beneden. Bel of app me, dan kom ik kijken waar het bij jou zit.",
    faq: [
      { v: "Hoe zie ik of het lek bij de nok of bij de ontluchtingspijp zit?", a: "Kijk na een flinke bui op zolder. Zit de natte plek bovenin, vlak onder de nok, en loopt er een streep over de balk naar beneden, dan komt het meestal van de nok. Zit het rond de pijp, op de plek waar die door het dakbeschot gaat, dan zit het vaak in de kraag eromheen. Is de pijp ook nat op koude, droge dagen, dan kan het condens zijn. Maak een foto van de plek en stuur die via WhatsApp, dan zeg ik wat ik zie." },
      { v: "Bij de buren is de nok net opnieuw gelegd. Moet de mijne dan ook?", a: "Niet per se. In de rijtjes van Rosmalen liggen de nokvorsten bij jou vaak al net zo lang als bij de buren, dus de kans is groot dat de specie bij jou ook bros wordt. Kijk vanaf de straat of er brokjes specie in je goot of op de stoep liggen, of dat er een vorst scheef ligt. Zit je nok nog goed vast, dan kan het wachten. Is hij op meer plekken los, dan is het slim om het te laten doen voordat de winterstormen komen. Op de grens met de buren laat ik de nok netjes aansluiten op die van hen. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "vught",
    dienst: "daklekkage",
    hook: "In de villawijken van Vught, bijvoorbeeld langs de Helvoirtseweg, staan veel vooroorlogse villa's en herenhuizen met een steil dak van keramische pannen. Op zulke daken ligt veel lood: rond de schoorsteen, in de kilgoten en langs de muur waar een lager dak tegen het huis aansluit. Dat lood is vaak tientallen jaren oud. Het wordt hard, scheurt bij de vouwen of komt los van de muur, en dan loopt het water aan de binnenkant naar beneden. In Cromvoirt staan meer boerderijen en vrijstaande huizen met een breed pannendak, waar ik na een storm vaker een verschoven pan of een losse nokvorst vind. Ik werk van buiten naar binnen en breek alleen iets open als het echt niet anders kan.",
    faq: [
      { v: "Mijn slaapkamer zit onder het schuine dak, achter een betimmering. Hoe vind je dan het lek?", a: "Dan begin ik buiten. Bij de villa's in Vught kijk ik naar de pannen, het lood en de kilgoot boven de natte plek en een flink stuk hoger, want het water loopt vaak eerst een eind over de latten voordat het binnenkomt. Meestal vind ik het lek zo. Lukt dat niet, dan maak ik in overleg een klein stukje van de betimmering of het knieschot open, alleen als het echt niet anders kan. Stuur me eerst een foto van de natte plek en van die kant van het dak via WhatsApp." },
      { v: "Het lekt bij mij in de hoek van de slaapkamer, onder een kilgoot. Komt dat door blad?", a: "Dat kan goed. Veel villa's in Vught staan onder hoge eiken en beuken, en in de herfst blijft hun blad in de kil liggen. Het water kan dan niet weg, komt hoger te staan dan de rand van het lood en loopt opzij onder de pannen door naar binnen. Lekt het vooral na de bladval en bij een flinke bui, dan is leegmaken vaak genoeg. Is het lood in de kil na zoveel jaren gescheurd, dan herstel ik dat stuk. Stuur me een foto van de natte plek en, als het lukt, van die kant van het dak vanaf de straat." },
    ],
  },
  {
    plaats: "berlicum",
    dienst: "daklekkage",
    hook: "Berlicum is een dorp met veel vrijstaande huizen en twee-onder-een-kappers, vaak met een garage of berging naast het huis. Waar het dak van zo'n garage tegen de zijmuur van het huis komt, zit een strook lood die het water van de muur op het garagedak moet leiden. Zakt die strook af of is hij gescheurd, dan loopt het water erachter langs naar binnen. Je ziet het als een natte plek in de garage of op de muur van de kamer ernaast. Bij de oudere huizen in het dorp en in Middelrode staat vaak nog een schoorsteen, en daar begint een lek meestal bij het lood rondom. Je hoort vooraf wat het kost, voordat ik iets openmaak.",
    faq: [
      { v: "Het lekt in mijn garage, maar alleen als het hard waait. Hoe kan dat?", a: "Dan komt het water vaak binnen bij de strook lood of zink waar het dak van de garage tegen de zijmuur van het huis zit. Bij gewone regen loopt het water er netjes overheen, maar bij harde wind waait de regen achter een strook die een stukje van de muur af staat. Kijk vanaf de oprit of de bovenrand van die strook nog strak tegen de muur zit. Ga er niet zelf voor op een ladder staan, maar stuur me een foto via WhatsApp. Vaak is het genoeg om de strook weer goed vast te zetten of te vervangen." },
    ],
  },

  // ── Tier A · goten reinigen ──────────────────────────────────────────
  {
    plaats: "oss",
    dienst: "goten-reinigen",
    hook: "Bij veel rijtjeshuizen in Oss, zoals in de Ruwaard en Schadewijk, hangt er ook een goot aan de achterkant, boven de tuin. Die zie je vanaf de straat niet, en daardoor wordt hij vaak vergeten, terwijl hij door de bomen in de tuinen juist het volst zit. In Berghem en Herpen staan meer vrijstaande huizen met grote tuinen, en daar komt naast blad ook zaad en bloesem van de bomen in de goot. Ik maak de goten aan beide kanten leeg en maak de uitloop naar de regenpijp vrij. Zie ik iets aan je dak, dan hoor je dat meteen.",
    faq: [
      { v: "Hoe zie ik of de goot aan de achterkant van mijn huis vol zit?", a: "Kijk tijdens een flinke bui vanuit de tuin of vanuit een raam boven naar de goot. Loopt er water over de voorkant, of komt er bijna niets uit de regenpijp terwijl het hard regent, dan zit hij meestal vol. Zie je groene strepen of aanslag op de achtergevel onder de goot, dan loopt hij al langer over. Ga er niet zelf voor op een ladder staan. Maak een foto vanuit de tuin en stuur die via WhatsApp, dan zeg ik eerlijk of leegmaken genoeg is." },
      { v: "Ik heb geen achterom. Kun je de goot aan de achterkant van mijn huis in Oss dan wel leegmaken?", a: "Meestal wel. Vaak kan ik de goot aan de achterkant over het dak bereiken. Lukt dat niet, dan zet ik de ladder in de tuin, als je me via het huis of via de tuin van de buren laat. Dat spreken we vooraf af, zodat je weet waar ik langs moet. Stuur een foto van de achterkant vanuit een raam boven, dan zie ik hoe ik er het beste bij kan." },
    ],
  },
  {
    plaats: "den-bosch",
    dienst: "goten-reinigen",
    hook: "In de oudere wijken met veel straatbomen, zoals de Muntel en de Vliert, valt in oktober en november veel blad in de goot. Blijft dat liggen, dan wordt het in de winter een natte, zware laag waar mos en soms zelfs plantjes in gaan groeien. In nieuwere wijken zoals Maaspoort en Empel staan minder grote bomen, maar daar komt het vuil vooral van het dak zelf: mos en gruis dat bij de uitloop naar de regenpijp blijft hangen. Den Bosch is mijn thuisbasis, dus je goten leegmaken plan ik makkelijk tussendoor.",
    faq: [
      { v: "Wanneer laat ik mijn goot het beste leegmaken als er straatbomen voor mijn huis staan?", a: "Het liefst als de meeste bomen in je straat kaal zijn. Onder oude straatbomen is dat vaak eind november of begin december. Laat je hem eerder doen, dan kan hij een paar weken later alweer vol liggen. Loopt je goot nu al over bij een bui, wacht dan niet: dan maak ik hem nu leeg, en kun je hem na de bladval nog een keer laten doen. Twijfel je, stuur dan een foto van je goot vanaf de straat via WhatsApp." },
      { v: "In Maaspoort of Empel vind ik vooral gruis en mos in mijn goot. Komt dat van het dak?", a: "Vaak wel. Op veel daken in Maaspoort en Empel liggen betonpannen. Die worden met de jaren ruw, en wat er van de toplaag loslaat, neemt de regen mee naar beneden. Daarom ligt er onderin de goot vaak fijn zand met wat mos erdoorheen. Dat is gewone slijtage en meestal geen probleem. Haal ik bij het leegmaken opvallend veel gruis of brokjes pan uit de goot, dan kijk ik ook naar het dakvlak erboven en vertel ik je eerlijk wat ik zie. Zit er een pan tussen die gescheurd is, dan kan ik die vervangen, en je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "rosmalen",
    dienst: "goten-reinigen",
    hook: "In Molenhoek, Sparrenburg en de andere wijken van Rosmalen uit de jaren '60 en '70 liggen de nokvorsten vaak nog in specie. Brokkelt die af, dan spoelen de brokjes bij elke bui naar de goot. Daar blijven ze samen met het blad hangen bij de uitloop naar de regenpijp, en dan loopt de goot bij een flinke bui over. Vind ik bij het leegmaken stukjes specie in de goot, dan kijk ik meteen naar de nok en hoor je wat ik zie. In De Groote Wielen hebben veel huizen een plat dak of een aanbouw met een plat dak. Daar loopt het water via een afvoer naar de regenpijp, en zit die vol blad, dan blijft het water op het dak staan. Heb je zo'n dak, zeg het dan als je belt, dan kijk ik ook naar die afvoer.",
    faq: [
      { v: "Mijn huis in De Groote Wielen heeft een plat dak. Moet de afvoer daarvan ook leeg?", a: "Ja, en die wordt vaak vergeten. Op een plat dak loopt het water via een afvoer in de rand naar de regenpijp. Waait daar blad of zand in, dan blijft het water na een bui op het dak staan, en dat zoekt op den duur een naad of de rand op. Kun je het dak vanuit een raam zien, kijk dan na een bui of er een plas blijft staan. Zeg het als je belt, dan neem ik de afvoer mee als ik je goten leegmaak. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "vught",
    dienst: "goten-reinigen",
    hook: "In Vught staan veel eiken en beuken, langs de lanen en in de tuinen. Die houden hun blad lang vast, vaak tot in december. Laat je je goot in oktober leegmaken, dan ligt hij in januari vaak alweer vol. Onder zulke bomen plan ik het daarom liever laat in het najaar. Een goot vol nat blad is ook zwaar. Bij een kunststof goot trekt dat na een tijd een beugel scheef, en dan blijft er water staan op de plek waar de goot doorhangt. Bij het leegmaken kijk ik daarom ook of je goot nog goed op afschot hangt. Zie ik iets aan je pannen of het lood, dan hoor je dat meteen.",
    faq: [
      { v: "Er groeit een boompje in mijn goot. Is dat erg?", a: "Ja, haal het eruit voordat het groter wordt. Onder de eiken en esdoorns in Vught komen eikels en zaadjes in de goot terecht, en in de natte laag blad op de bodem schieten ze in een paar maanden wortel. De wortels houden water en vuil vast, en in een zinken goot kunnen ze op den duur een naad openduwen. Trek het niet zelf vanaf de ladder los, want dan trek je makkelijk de goot uit de beugels. Bij het leegmaken haal ik het plantje met wortel en al weg en kijk ik of de goot op die plek nog dicht is. Je hoort vooraf wat het kost." },
      { v: "Mijn villa in Vught heeft ook een kilgoot. Neem je die mee als je de goten leegmaakt?", a: "Ja, als ik er veilig bij kan. Bij veel villa's in Vught komen twee dakvlakken samen in een kil, en onder de eiken en beuken blijft daar in de herfst veel blad liggen. Vanaf de straat zie je dat niet. Zit de kil vol, dan kan het water bij een flinke bui niet weg en zoekt het een weg onder de pannen door. Zeg het als je belt, dan neem ik de kil mee en kijk ik meteen of het lood erin nog heel is. Je hoort vooraf wat de goten en de kil samen kosten." },
    ],
  },
  {
    plaats: "berlicum",
    dienst: "goten-reinigen",
    hook: "Bij veel vrijstaande huizen en twee-onder-een-kappers in Berlicum en Middelrode staat aan de achterkant een veranda of overkapping tegen het huis. Die heeft een eigen, smal gootje, en daar komt het blad uit de tuin en van het grote dak in terecht. Van beneden zie je dat gootje slecht, en zit het vol, dan loopt het water over de rand van de overkapping of langs de muur. De goten van de huizen zelf zijn in Berlicum vaak flink aan de lengte, zeker bij de vrijstaande huizen en boerderijen aan de rand van het dorp. Ik maak ze van begin tot eind leeg en maak de uitloop naar de regenpijp vrij. Heb je een veranda of overkapping met een eigen goot, zeg het dan als je belt, dan neem ik die mee.",
    faq: [
      { v: "Mijn vrijstaande huis heeft lange goten, en er staat ook een schuur. Hoe zit het met de prijs?", a: "De vanaf-prijs op de prijzenpagina geldt voor een rijtjeswoning. Bij een vrijstaand huis met lange goten, een schuur, een garage of een veranda met een eigen gootje is het meer werk. Dan hoor je vooraf de vaste prijs voor de hele klus, met alles wat je wilt laten meenemen. Stuur een paar foto's van je huis vanaf de straat en de tuin via WhatsApp, dan kan ik je vaak meteen een prijs noemen." },
    ],
  },

  // ── Tier B · daklekkage ──────────────────────────────────────────────
  {
    plaats: "vlijmen",
    dienst: "daklekkage",
    hook: "In Vliedberg en de andere naoorlogse wijken van Vlijmen hebben veel rijtjeshuizen achter een berging of aanbouw met een plat dak, vaak met een lichtkoepel erin. Bij zo'n koepel lekt het nogal eens langs de rand, waar de koepel op de opstand staat, en dan druppelt het precies onder de koepel naar binnen. In Nieuwkuijk en Haarsteeg, vlak bij Vlijmen, staan meer vrijstaande huizen met grote tuinen. Daar loopt de goot in de herfst snel over door het blad uit de bomen, en binnen lijkt dat soms op een daklek. App me een foto van de natte plek, dan zie ik vaak al waar ik moet zoeken.",
    faq: [
      { v: "Mijn lichtkoepel druppelt ook als het niet regent. Lekt hij dan?", a: "Vaak niet. Druppelt het vooral op koude ochtenden, ook na een droge nacht, dan is het meestal condens aan de binnenkant van de koepel. Bij oudere koepels met maar één laag zie ik dat veel. Druppelt het alleen na een bui, en vooral langs de rand, dan zit het meestal in de aansluiting van de koepel op het platte dak. Stuur een foto van de koepel van binnen en vertel wanneer het druppelt, dan zeg ik eerlijk wat het is." },
      { v: "Het platte dak van mijn berging lekt langs de muur van het huis. Komt dat van de lichtkoepel?", a: "Meestal niet. Druppelt het vlak langs de muur, dan zit het vaker in de naad waar het platte dak tegen de gevel omhoog loopt. Daar ligt een strook lood of zink overheen, en laat die los, dan loopt het water erachter langs naar binnen. Druppelt het recht onder de koepel, dan zit het eerder in de rand van de koepel. Bij de rijtjes in Vliedberg met een berging achter het huis kom ik ze allebei tegen. Stuur me een foto van de natte plek binnen en, als het kan, vanuit een raam boven een foto van het dak van de berging." },
      { v: "Ik woon in Nieuwkuijk of Haarsteeg en het is nat bovenin de muur na de bladval. Komt dat van het dak of van de goot?", a: "Bij de vrijstaande huizen met grote tuinen in Nieuwkuijk en Haarsteeg is het in de herfst vaak de goot. Zit die vol blad, dan loopt hij bij een flinke bui aan de achterkant over, en dan trekt het water bovenin de muur naar binnen. Kijk tijdens een bui of er water over de rand van de goot loopt, of dat er bijna niets uit de regenpijp komt. Is dat zo, dan is leegmaken vaak genoeg. Blijft de muur ook nat als de goot leeg is, of zit de natte plek op het plafond onder het dak, dan zoek ik verder bij de pannen en het lood. Stuur me een foto van de natte plek en van de goot vanaf de grond." },
    ],
  },
  {
    plaats: "drunen",
    dienst: "daklekkage",
    hook: "In de woonwijken van Drunen die in de jaren '70 en '80 zijn gebouwd, staan veel rijtjeshuizen en twee-onder-een-kappers met een schuin pannendak. Op die daken, die nu een jaar of veertig liggen, zie ik een lek vaak bij de dakvoet: de onderste rij pannen, vlak boven de goot. Bij harde wind en regen waait het water daar onder de pannen door, zeker als de folie eronder niet goed tot in de goot doorloopt. Op zolder zie je dat als een natte plek achter het knieschot, vlak boven de vloer. Ik kijk eerst op zolder waar het hout nat is en volg dat spoor naar boven, zodat ik niets openmaak wat niet nodig is.",
    faq: [
      { v: "Het lekt bij mij aan de onderkant van het dak. Moet het hele dak eraf?", a: "Meestal niet. Bij de rijtjes en twee-onder-een-kappers in Drunen zit zo'n lek vaak alleen in de onderste rijen pannen, vlak boven de goot. Dan haal ik die rijen eraf, zorg ik dat de folie eronder weer tot in de goot loopt en leg ik de pannen terug, met een nieuwe pan waar er een gebroken is. Zijn de pannen of de folie over het hele dak op, dan zeg ik dat eerlijk. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "boxtel",
    dienst: "daklekkage",
    hook: "Bij de oudere huizen rond het centrum van Boxtel zie ik vaak een erker of een luifel boven de voordeur met een klein plat dakje erop. Waar dat dakje tegen de gevel komt, zit een strook lood. Laat die los of is hij gescheurd, dan loopt het water achter het lood langs en komt het binnen boven het raam. In Liempde en Esch, die ook bij Boxtel horen, staan meer boerderijen en vrijstaande huizen met een groot pannendak. Daar begint een lek vaker bij de schoorsteen of bij een pan die door de wind is gaan schuiven. Ik spoor het lek op zonder onnodig sloopwerk en vertel je eerlijk wat het kost voordat ik begin.",
    faq: [
      { v: "Hoe zie ik of het lood boven mijn erker of voordeur los zit?", a: "Kijk vanaf de straat naar de strook lood waar het dakje van de erker of de luifel tegen de gevel zit. Staat die strook een stukje van de muur af, zit er een kier of scheur in, of zie je een donkere streep op de muur erboven, dan kan het water erachter lopen. Binnen zie je dat vaak als een natte plek of bladderende verf boven het raam. Ga niet zelf op het dakje staan, maar stuur me een foto via WhatsApp." },
      { v: "Het lekt langs de schoorsteen van mijn oude boerderij in Liempde of Esch. Moet de schoorsteen opnieuw gemetseld worden?", a: "Meestal niet. Bij zulke schoorstenen zit een lek vaak in het lood eromheen: het is na veel jaren gescheurd of het is losgekomen van het metselwerk. Dat herstel ik. Zijn de stenen of de voegen van de schoorsteen zelf slecht, dan zeg ik dat eerlijk, want daarvoor heb je een metselaar nodig. Gebruik je de schoorsteen niet meer en staat er geen kap op, dan kan ik er een kap of afdekplaat op zetten. Stuur me een foto van de schoorsteen vanaf de straat en van de natte plek binnen." },
    ],
  },
  {
    plaats: "schijndel",
    dienst: "daklekkage",
    hook: "Veel daken in Schijndel zijn van voor 1985, en op een deel daarvan liggen nog de eerste pannen. Zo'n oude pan neemt na veertig jaar meer water op. Vriest het daarna, dan kan er een haarscheur in komen die je van beneden niet ziet, en bij de volgende flinke bui druppelt het op zolder. In Wijbosch staan meer vrijstaande huizen met een schoorsteen, en daar zit een lek vaker in het lood rond die schoorsteen. Ik vervang alleen de pannen die echt kapot zijn, en zeg je eerlijk als er meer aan de hand is.",
    faq: [
      { v: "Op mijn dak liggen nog de eerste pannen. Kun je er dan nog één vervangen?", a: "Meestal wel. Ik zoek eerst een pan die past bij wat er nu op je dak ligt. Wordt jouw pan niet meer gemaakt, dan kijk ik of ik ergens op je dak een pan kan missen op een plek die je vanaf de straat niet ziet. Zijn er op veel plekken pannen gescheurd, dan zeg ik eerlijk dat een groter stuk vervangen slimmer is. Je hoort vooraf wat het kost." },
      { v: "Hoe zie ik of de oude pannen op mijn dak water opnemen?", a: "Kijk na een bui vanaf de straat naar je dak. Blijven een paar pannen veel langer donker en nat dan de rest, dan nemen die meer water op. Ook pannen met veel mos of korstmos zijn vaak verweerd. Op zolder zie je het soms als donkere, vochtige plekken op de panlatten na een natte week. Ga zelf niet het dak op, maar stuur me een foto vanaf de straat. Dan zeg ik eerlijk of het om een paar pannen gaat of om meer." },
    ],
  },
  {
    plaats: "heusden",
    dienst: "daklekkage",
    hook: "In vesting Heusden staan veel monumenten en oude panden, en de hele vesting is beschermd stadsgezicht. Daar zit een lek vaak in oud lood rond een schoorsteen, in een oude zinken goot of bij een pan die niet meer goed ligt. Bij zo'n dak kijk ik extra goed welk materiaal erbij past, want op een monument mag je niet zomaar iets anders gebruiken. In Oudheusden en Herpt staan meer vrijstaande huizen en boerderijen met een groot pannendak. Daar komt een lek vaker van een nokvorst waarvan de specie is losgeraakt, of van pannen aan de onderkant van het dak die door de wind zijn opgetild. Twijfel je of jouw huis onder het beschermd stadsgezicht valt, dan kun je dat bij de gemeente Heusden navragen.",
    faq: [
      { v: "In de vesting komt het water binnen bovenin de muur, tegen het huis van de buren aan. Komt dat van het dak?", a: "Dat kan goed. In de vesting staan de huizen tegen elkaar, en vaak is het ene dak hoger dan het andere. Waar het lagere dak tegen de muur van het hogere huis komt, zit een strook lood die het water van die muur op de pannen moet leiden. Zit die strook los of is hij gescheurd, dan loopt het water erachter langs naar binnen, ook als de pannen zelf goed liggen. Zit het in de muur zelf, dan zeg ik dat eerlijk, want daarvoor heb je een metselaar nodig. Stuur me een foto van de natte plek en, als het lukt, van de daken vanaf de straat." },
      { v: "In Oudheusden of Herpt ligt er specie van de nok in mijn goot. Lekt mijn dak dan al?", a: "Nog niet per se. Brokjes specie in de goot betekenen dat de specie onder de nokvorsten bros wordt. Zolang de vorsten nog vast liggen, blijft het binnen vaak droog. Maar bij een storm kan een vorst gaan schuiven, en dan regent het onder de nok door naar binnen. Kijk vanaf de straat of de nok nog recht ligt. Stuur me een foto, dan zeg ik eerlijk of alleen de losse vorsten vast moeten of dat de hele nok beter opnieuw kan. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "daklekkage",
    hook: "In het oude centrum van Gestel en langs de Dommel staan veel huizen van voor de oorlog, vaak met een steil pannendak en een schoorsteen. Daar zit een lek meestal in het lood rond die schoorsteen, of in een kilgoot waar een lager dak of een serre tegen het huis aansluit. Onder de oude bomen langs de Dommel blijft in de herfst veel blad in zo'n kil liggen, en dan loopt hij bij een flinke bui over naar binnen. In de nieuwere straten van Den Dungen en Gemonde staan meer rijtjes en twee-onder-een-kappers met een platte aanbouw achter het huis. Lekt het daar, dan zit het meestal in de strook waar dat platte dak tegen de achtergevel omhoog loopt. Weet je niet waar het vandaan komt, kijk dan na een bui op zolder waar het hout nat is en stuur me daar een foto van.",
    faq: [
      { v: "Op mijn oude huis liggen de pannen zonder folie eronder. Lekt dat sneller?", a: "Niet vanzelf. Bij een deel van de huizen van voor de oorlog in het oude centrum van Gestel liggen de pannen direct op de latten, zonder folie of beschot eronder. Dat kan prima, zolang de pannen goed liggen. Maar waait er regen of stuifsneeuw onder een pan die een stukje scheef ligt, dan vangt niets het op en zie je het meteen op zolder. Bij zo'n dak kijk ik daarom extra goed naar pannen die niet meer goed in de sluiting liggen. Zie je op zolder een natte plek op de vloer of op een balk, maak er dan een foto van en stuur die via WhatsApp." },
      { v: "Het lekt waar mijn serre tegen het huis zit. Komt dat van de serre of van het dak?", a: "Kijk waar het water binnenkomt. Druppelt het langs de bovenkant van de serre, tegen de muur van het huis, dan zit het vaak in de aansluiting: de strook lood of de kitnaad tussen de serre en de gevel. Ligt er een kilgoot boven de serre, kijk dan ook of die vol blad zit, zeker onder de bomen langs de Dommel. Komt het water tussen de glasplaten of de profielen van de serre zelf door, dan is dat werk voor de leverancier van de serre. Stuur me een foto van binnen en van buiten, dan zeg ik eerlijk wat ik zie." },
    ],
  },
  {
    plaats: "oisterwijk",
    dienst: "daklekkage",
    hook: "Oisterwijk ligt tussen de bossen en vennen, en ook in het dorp zelf staan veel oude bomen, zoals de lindes op De Lind. In de herfst ligt er dan veel blad en soms een dikke laag mos in de goot en in de kilgoot. Loopt die over, dan komt het water binnen langs de muur of in een hoek. Dat lijkt op een daklek, terwijl het dak zelf nog dicht is. In de villawijken aan de rand van de bossen staan veel huizen met een groot, steil dak en meer dan één kilgoot, en daar kijk ik bij een natte plek eerst naar de kil. In Moergestel, dat ook bij Oisterwijk hoort, staan veel gewone dorpswoningen met een schoorsteen, en daar vind ik een lek vaker bij het lood eromheen. Zit de goot alleen vol, dan zeg ik dat ook: dan is leegmaken genoeg.",
    faq: [
      { v: "Kan mos op mijn dak een lek geven?", a: "Mos maakt zelf geen gat, maar het houdt water vast. Groeit het dik tussen de pannen, dan kan het water via het mos onder een pan door trekken. En mos dat loskomt, spoelt naar de goot of de kilgoot en zet die dicht, zodat hij bij een flinke bui overloopt. Onder de vele bomen in Oisterwijk zie ik dat vaak. Stuur me een foto van je dak vanaf de straat, dan zeg ik eerlijk of het mos eraf moet." },
      { v: "Mijn huis heeft meer dan één kilgoot. Hoe weet ik welke lekt?", a: "Kijk binnen waar de natte plek zit, en zoek op zolder of vanaf de tuin welke kil daar het dichtst boven ligt. Onder de pannen loopt het water vaak een stukje schuin naar beneden, dus de kil die lekt zit meestal iets hoger en opzij van de natte plek. Let ook op wanneer het nat wordt. Gebeurt dat alleen bij wind uit één richting, dan zit het vaak in de kil aan die kant van het huis. Maak vanaf de grond of uit een raam een foto van elke kil en van de natte plek binnen, en stuur die via WhatsApp. Dan weet ik waar ik als eerste moet kijken." },
    ],
  },

  // ── Tier B · goten reinigen ──────────────────────────────────────────
  {
    plaats: "vlijmen",
    dienst: "goten-reinigen",
    hook: "In Vliedberg en de andere wijken uit de jaren '60 en '70 staat achter veel rijtjeshuizen een berging met een plat dak. Het water van het grote dak komt daar nogal eens via een korte regenpijp op uit, en dan spoelt al het blad van je grote dak naar de afvoer van dat kleine dak. Zit die afvoer dicht, dan blijft het water op de berging staan of loopt het over de rand langs je achtergevel, terwijl je dat vanaf de straat niet ziet. In Geerpark, de nieuwste wijk, zijn de huizen en de bomen nog jong. Daar ligt minder blad in de goot, maar wel zand en fijn gruis dat van het dak en uit de omgeving aanwaait. Onderin de goot wordt dat een laagje slib dat de uitloop naar de regenpijp langzaam dichtzet. In Nieuwkuijk en Haarsteeg staan meer vrijstaande huizen met grote tuinen en oude bomen, en daar zit de goot na de bladval vaak tot de rand vol. Ik maak de goten van begin tot eind leeg, maak de uitloop naar de regenpijp vrij en neem de afvoer van een platte berging mee als je dat vraagt. Zie ik iets aan je pannen of het lood, dan hoor je dat meteen.",
    faq: [
      { v: "Mijn huis in Geerpark is nog nieuw. Moet de goot dan al leeg?", a: "Ook bij een nieuw huis is het slim om de goot na een paar jaar te laten nakijken. In Geerpark staan nog weinig grote bomen, maar zand en fijn gruis waaien er wel in, en onderin de goot wordt dat een laagje slib dat je van beneden niet ziet. Kijk tijdens een flinke bui of er water over de rand komt, of dat er bijna niets uit de regenpijp komt. Zie je dat, stuur me dan een foto vanaf de straat. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "drunen",
    dienst: "goten-reinigen",
    hook: "Aan de zuidkant van Drunen, tegen de Loonse en Drunense Duinen aan, staan veel dennen. Dennennaalden zijn dun en glad. Ze glijden zo door een bolrooster of bladvanger heen en vormen onderin de goot een viltige mat die het water vasthoudt. Binnen een jaar groeit daar mos in, en dan loopt de goot bij een flinke bui over, terwijl je van beneden bijna niets ziet liggen. Een den laat het hele jaar door naalden vallen, en in de herfst het meest, dus onder dennen raakt een goot ook buiten de herfst vol. Ik haal de mat er van begin tot eind uit, ook onder een rooster, en maak de uitloop naar de regenpijp vrij. Zie ik iets aan je pannen of het lood, dan hoor je dat meteen.",
    faq: [
      { v: "Hoe vaak moet mijn goot leeg als er dennen bij mijn huis staan?", a: "Onder dennen vaak twee keer per jaar. Een den laat het hele jaar door naalden vallen, en in de herfst het meest. Laat je goot daarom laat in de herfst leegmaken, en kijk in het voorjaar of hij alweer vol zit. Aan de kant van de duinen zit er ook zand tussen de naalden, en dat maakt de laag onderin zwaar en dicht. Zie je bij een bui water over de rand komen, wacht dan niet. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "boxtel",
    dienst: "goten-reinigen",
    hook: "In wijken als Selissen en Munsel liggen op steeds meer daken zonnepanelen. Daaronder zoeken duiven graag een plek, en hun nestmateriaal en poep spoelen bij een bui de goot in. Dat blijft bij de uitloop naar de regenpijp hangen, samen met het blad van de straatbomen, en bij de volgende flinke bui loopt de goot dan over. Ik maak de goot leeg en de uitloop vrij. Zie ik dat er duiven onder je panelen zitten, dan hoor je wat je daartegen kunt doen. Ook kijk ik naar de naden en de hoeken van de goot, want die zie je pas goed als hij leeg is.",
    faq: [
      { v: "Hoe zie ik of er duiven onder mijn zonnepanelen zitten?", a: "Kijk 's ochtends vanaf de straat of de tuin of er duiven onder de rand van de panelen in en uit vliegen. Andere tekenen zijn takjes en veren die onder de panelen uitsteken, poep op de pannen eronder en in de goot, en gekoer of gekrabbel boven je zolder. Zitten ze eronder, dan kan de rand rond de panelen worden afgesloten met kunststof vogelwering. Dat doe ik het liefst buiten het broedseizoen. Stuur me gerust een foto via WhatsApp." },
      { v: "Je ziet bij het schoonmaken dat mijn zinken goot lekt. Kun je hem van binnen coaten?", a: "Vaak wel. Als de goot leeg is, zie ik goed of het om één naad of hoek gaat, of dat het zink op meer plekken dun is geworden. Eén lekke naad soldeer ik liever. Is het zink op een paar plekken dun, maar hangt de goot nog goed en zitten de beugels vast, dan kan ik hem van binnen coaten: eerst schoon en droog, daarna komt er aan de binnenkant een laag op die de goot weer waterdicht maakt. Dat doe ik niet ongevraagd tijdens het schoonmaken. Je hoort eerst wat ik zie en wat het kost, en dan beslis jij. Hangt de goot door of is hij op veel plekken op, dan zeg ik eerlijk dat vervangen slimmer is." },
    ],
  },
  {
    plaats: "schijndel",
    dienst: "goten-reinigen",
    hook: "Op veel daken in Schijndel liggen nog de eerste pannen, vaak van voor 1985. Van zulke oude pannen spoelt bij elke bui wat gruis en mos af. Dat zakt naar de laagste plek van de goot, bij de uitloop naar de regenpijp, en wordt daar samen met blad een vaste laag slib die je van beneden niet ziet. In het buitengebied rond Schijndel en Wijbosch staan langs veel wegen en weilanden populieren. In het voorjaar laten die pluis vallen, en dat plakt vast op een bladvanger of een rooster op de uitloop. Dan kan een goot in juni al overlopen, terwijl je dat pas in de herfst verwacht. Ik maak de goot van begin tot eind leeg, ook het slib onderin, en maak de uitloop naar de regenpijp vrij.",
  },
  {
    plaats: "heusden",
    dienst: "goten-reinigen",
    hook: "In vesting Heusden hangt aan veel oude panden nog een zinken goot, en bij een deel zit de goot aan de straatkant achter de gevel, waar je hem van beneden niet ziet. Loopt zo'n goot vol, dan merk je dat vaak pas binnen, aan een natte plek bovenin de muur. Nat blad dat lang in een zinken goot blijft liggen, tast het zink aan, en daar komt na jaren het eerste gaatje. Op een monument kun je zo'n goot niet zomaar door een kunststof goot vervangen, dus het loont om hem schoon te houden. In Oudheusden en Herpt hangen vaker gewone goten aan rijtjeshuizen en vrijstaande huizen, en daar blijft het blad vooral bij de uitloop naar de regenpijp hangen. Ik maak de goten van begin tot eind leeg, maak de uitloop vrij en kijk meteen naar het lood en de pannen.",
    faq: [
      { v: "Hoe zie ik of de goot achter de gevel van mijn huis in de vesting vol zit?", a: "Van beneden zie je zo'n goot niet, dus let op wat er binnen gebeurt. Een vochtige plek bovenin de muur aan de straatkant, vooral na een flinke bui, kan betekenen dat de goot achter de gevel overloopt. Kun je vanuit een dakraam of zolderraam bij de goot kijken, kijk dan of er blad of plantjes in liggen, maar ga niet zelf door het raam naar buiten. Stuur me een foto van de natte plek binnen. Als ik de goot leegmaak, kijk ik meteen of het zink nog dicht is. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "goten-reinigen",
    hook: "Bij een deel van de huizen in Gestel en Den Dungen zit halverwege de regenpijp een bladvanger: een stuk pijp met een rooster erin en een klepje aan de voorkant. Onder de eiken en beuken langs de Dommel raakt dat rooster in de herfst snel vol. Dan staat de regenpijp bij een bui tot bovenin vol water en loopt de goot over bij de uitloop, terwijl hij zelf bijna leeg is. Daarom maak ik niet alleen de goot leeg en de uitloop vrij, maar open ik ook de bladvanger en maak ik het rooster schoon. Dat klepje kun je daarna zelf af en toe vanaf de grond openen, dan zie je meteen of er weer blad in zit. Zie ik iets aan je pannen, de vorsten of het lood, dan hoor je dat meteen.",
    faq: [
      { v: "Hoe maak ik de bladvanger in mijn regenpijp zelf schoon?", a: "Bij de meeste bladvangers zit aan de voorkant een klepje of een deksel. Open dat op een droge dag vanaf de grond, haal het blad en de eikels uit het rooster en klik het weer dicht. Onder de eiken en beuken langs de Dommel doe je dat in de herfst het best eens in de paar weken. Zit de goot zelf vol, of komt er bij een bui water over de rand terwijl de bladvanger schoon is, dan maak ik de goot leeg. Ga daarvoor zelf niet de ladder op." },
    ],
  },
  {
    plaats: "oisterwijk",
    dienst: "goten-reinigen",
    hook: "Aan de rand van de bossen staan in Oisterwijk veel eiken en berken. Een berk laat in de nazomer en de herfst duizenden kleine zaadjes vallen, en die vormen samen met het blad een fijne, natte laag onderin de goot. Op veel goten zit een bolrooster op de uitloop naar de regenpijp. Dat houdt grof blad tegen, maar onder veel bomen raakt het rooster zelf dicht. Dan loopt de goot over, terwijl hij verder nog half leeg is. Ik maak de goot van begin tot eind leeg, haal het rooster schoon en zet het weer goed op de uitloop. Zie ik iets aan je pannen of het lood, dan hoor je dat meteen.",
    faq: [
      { v: "Mijn villa heeft een zinken goot in een houten gootlijst. Kun je die leegmaken zonder iets te beschadigen?", a: "Ja. Bij zo'n goot werk ik voorzichtig en zonder scherp gereedschap, want het zink is na veel jaren vaak dun. Als de goot leeg is, zie ik meteen of er een naad of hoek is waar hij gaat lekken, en of het hout van de lijst eronder nog stevig is. Bladdert de verf onder de goot of is het hout zacht, dan hoor je dat van me, want dan lekt de goot vaak al een tijd. Je hoort vooraf wat het kost." },
    ],
  },

  // ── Tier C · stormschade × alle 12 kerndorpen (klaar voor stormpieken) ──
  {
    plaats: "oss",
    dienst: "stormschade",
    hook: "Staat er op je schoorsteen een kap of een afdekplaat, kijk daar na een storm dan ook even naar. Zit hij niet meer goed vast, dan gaat hij bij harde wind rammelen of waait hij eraf, en daarna regent het in het kanaal. In de Ruwaard en Ussen liggen op veel daken loodslabben langs de schoorsteen of onder een dakraam. Zit zo'n slab al wat los, dan pakt de wind hem bij een storm en zet hem rechtop. Vanaf de straat zie je dat als een grijze strook die van het dak af steekt. Ga niet zelf het dak op, maar maak een foto vanaf de straat en stuur die via WhatsApp. Is je dak open, dan dek ik het eerst af en herstel ik het daarna netjes, met foto's van wat ik aantref voor je verzekering.",
    faq: [
      { v: "Ik hoor bij harde wind getik of geklapper op mijn dak. Wat is dat?", a: "Vaak zit er iets los dat in de wind heen en weer gaat: een loodslab langs de schoorsteen of onder een dakraam, een kap op de schoorsteen, of een pan die niet meer goed in de sluiting ligt. Ook een oude antennekabel of een tak die tegen de goot slaat, kan zo klinken. Kijk overdag vanaf de straat of je iets ziet afsteken of scheef ziet liggen, en ga niet zelf het dak op. Stuur me een foto, en zeg erbij aan welke kant van het huis je het hoort." },
      { v: "De kap op mijn schoorsteen staat na de storm scheef. Kan ik de kachel nog gebruiken?", a: "Stook liever niet zolang de kap scheef staat of half los zit. Een scheve kap kan de rook tegenhouden, en bij de volgende windstoot kan hij eraf waaien. Kijk vanaf de straat of de kap nog recht op de schoorsteen staat en of er stukjes op het dak of in de goot liggen. Ga zelf niet naar boven. Stuur me een foto via WhatsApp. Ik zet de kap weer goed vast of vervang hem, en kijk meteen naar het lood rond de schoorsteen. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "den-bosch",
    dienst: "stormschade",
    hook: "In de binnenstad staan veel smalle, hoge panden met een steil dak en de topgevel aan de straat. Bij een harde windstoot gaan daar vaak de pannen langs de rand bij de gevel en vlak onder de nok als eerste omhoog, en dan valt er zo een stuk pan of specie op de stoep. In Maaspoort en Empel, aan de kant van de Maas, waait het over het open land flink. Daar vind ik na een storm vaker een losse nokvorst of een pan naast een dakraam die is opgetild. Ligt er iets op straat of is je dak open, ga dan niet zelf naar boven, maar maak vanaf de grond een foto en stuur die via WhatsApp. Ik dek het eerst af, zodat het binnen droog blijft, en herstel het daarna netjes. Den Bosch is mijn thuisbasis, dus meestal ben ik er snel.",
    faq: [
      { v: "Er is bij de storm een stuk dakpan op de stoep gevallen. Wat doe ik nu?", a: "Houd eerst mensen weg bij de plek onder je dakrand, bijvoorbeeld met een paar stoelen of een kliko, want waar één stuk afkwam, kan meer volgen. In de smalle straten van de binnenstad lopen mensen vlak langs de gevel, dus doe dat meteen. Hangt er iets los dat elk moment naar beneden kan vallen, bel dan 112. Ga zelf niet naar boven. Maak vanaf de overkant een foto van je dak en stuur die via WhatsApp, dan hoor je wanneer ik kan komen." },
      { v: "Mijn dakraam is bij de storm opengeklapt en nu lekt het. Wat doe ik?", a: "Doe het raam van binnen dicht als dat veilig kan, en zet er een emmer of handdoeken onder. Kijk of het glas heel is en of het raam nog goed in het kozijn sluit. In Maaspoort en Empel zie ik na een storm ook vaak dat de wind de pannen naast het dakraam heeft opgetild. Dan loopt het water langs het raam naar binnen, ook als het raam zelf weer dicht is. Ga niet zelf het dak op. Stuur me een foto van het raam van binnen en, als het lukt, van die kant van het dak vanaf de straat. Is het glas gebroken of het scharnier kapot, dan zeg ik eerlijk dat je daarvoor de leverancier van het raam nodig hebt. De pannen en het lood rond het raam herstel ik zelf, en je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "rosmalen",
    dienst: "stormschade",
    hook: "Rond de Maliskamp en Kruisstraat, aan de rand van Rosmalen, ligt veel open land. Daar heeft de wind vrij spel op de vrijstaande huizen en boerderijen, en na een storm vind ik daar vaker pannen langs de rand van het dak die zijn opgetild of verschoven. In De Groote Wielen liggen op veel daken zonnepanelen. Waait de wind eronder, dan kan een pan bij een dakhaak breken, en dat zie je vanaf de straat bijna niet. Zit er een paneel los, dan zeg ik dat eerlijk, want daarvoor heb je je installateur nodig. Ga zelf niet het dak op en stuur me een foto vanaf de grond. Is er een open plek, dan maak ik die eerst dicht, en daarna volgt de nette reparatie.",
    faq: [
      { v: "Hoe zie ik na een storm of er een pan onder mijn zonnepanelen is gebroken?", a: "Vanaf de straat zie je dat bijna niet, want de pan ligt voor een deel onder het paneel. Let daarom binnen op. Zie je na de storm bij een flinke bui een natte plek op zolder, onder het deel van het dak met de panelen of een stukje lager, dan kan er een pan bij een dakhaak zijn gebroken. Ga zelf niet het dak op, tussen de panelen is het glad. Stuur me een foto van de natte plek via WhatsApp. Zit er een paneel los, dan heb je daarvoor je installateur nodig." },
      { v: "Mijn huis in De Groote Wielen heeft een plat dak met zonnepanelen. Waar kijk ik na een storm naar?", a: "Kijk vanuit een raam boven, of vanaf een plek waar je het dak kunt zien. Liggen de panelen nog recht en op hun plek? Staat de rand van het dak of de daktrim nergens omhoog, en ligt er geen grind of ballast naast het dak? Is een paneel verschoven of los, dan heb je daarvoor je installateur nodig. Staat de rand omhoog of is het binnen na de eerste bui nat, dan kijk ik naar de dakbedekking en de rand. Ga zelf niet het dak op, zeker niet als het nog waait. Stuur me een foto via WhatsApp." },
    ],
  },
  {
    plaats: "vught",
    dienst: "stormschade",
    hook: "In Vught staan veel huizen tussen hoge bomen, in de villawijken en aan de rand van de bossen. Bij een storm breken daar takken af die op het dak terechtkomen. Zo'n tak kan een pan breken of een goot uit de haken trekken, en vanaf de straat zie je dat niet altijd meteen. Kijk na een storm daarom even goed: ligt er een pan scheef, hangt de goot schuin of ligt er een tak in de goot? In Vught-Noord en de andere naoorlogse wijken staan meer rijtjes met een pannendak, en daar zie ik na harde wind vooral pannen aan de onderkant of langs de zijkant van het dak die zijn gaan schuiven. Is je dak open, dan dek ik het eerst af en herstel ik het daarna netjes. Ga zelf niet het dak of de ladder op, en stuur me een foto vanaf de grond.",
    faq: [
      { v: "Er hangen takken van een grote boom over mijn dak. Kan ik voor de winter iets doen?", a: "Takken die over je dak hangen, schuren bij harde wind over de pannen en breken er bij een storm het eerst af. Laat ze voor de winter snoeien door een hovenier of boomverzorger. Is het de boom van de buren, overleg dan eerst even met hen. Daarna kan ik kijken of er pannen zijn beschadigd of verschoven, en of de goot vol takjes en blad zit. Stuur me gerust een foto van je dak vanaf de straat via WhatsApp." },
      { v: "Na de storm ligt er een dikke tak op de zinken bakgoot van mijn villa. Kan ik hem er zelf af halen?", a: "Liever niet vanaf een ladder. Een dikke tak is zwaarder dan hij lijkt, en als je eraan trekt, knik je zo het zink of trek je de houten lijst eronder los. Zit de tak nog aan de boom vast, laat hem dan weghalen door een boomverzorger. Ligt hij los op de goot, stuur me dan een foto vanaf de grond via WhatsApp. Ik haal hem eraf en kijk meteen of het zink geknikt of gescheurd is en of de pannen erboven nog goed liggen. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "berlicum",
    dienst: "stormschade",
    hook: "Rond Berlicum en Middelrode ligt veel open land, en bij de vrijstaande huizen aan de rand van het dorp en de boerderijen in het buitengebied heeft de wind vrij spel. Na een storm zit de schade daar meestal aan de kant van het huis die naar het open land kijkt: pannen langs de rand van het dak die zijn opgetild, of een nokvorst die is gaan schuiven. Kijk na een storm dus eerst aan die kant, vanaf de grond. Staat er een garage, schuur of carport naast het huis, kijk dan ook naar dat dak, want een licht dak van platen waait eerder op dan een pannendak. Ga zelf niet het dak of de ladder op, maar stuur me een foto via WhatsApp. Is je dak open, dan dek ik het eerst af, zodat het binnen droog blijft, en daarna herstel ik het netjes.",
    faq: [
      { v: "Het dak van mijn carport of garage is bij de storm beschadigd. Wat doe ik?", a: "Blijf er weg zolang het waait, want een losse plaat kan bij de volgende windstoot verder scheuren of wegwaaien. Ga er niet zelf op staan. Maak vanaf de grond een foto en stuur die via WhatsApp. Zijn het oude golfplaten van voor 1994, dan kan er asbest in zitten. Daar boor of zaag ik niet in, en dan heb je een gecertificeerd asbestbedrijf nodig. Is het een gewone plaat of dakbedekking, dan zet ik die weer vast of vervang ik het kapotte stuk. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "vlijmen",
    dienst: "stormschade",
    hook: "Vanaf de Maaskant krijgt Vlijmen flink wind; na een storm zie ik hier vaak weggewaaide pannen en losgeraakt lood. Is je dak open, dan maak ik dat eerst dicht, zodat het binnen droog blijft.",
    faq: [
      { v: "Ik heb een lichtkoepel op het platte dak van mijn berging. Waar let ik op na een storm?", a: "Kijk vanuit een raam boven of de koepel nog recht en heel op zijn rand staat. Bij een harde windstoot kan een oude koepel scheuren of een stukje loskomen, en dan regent het er recht onder naar binnen. Zie je een barst of staat de koepel scheef, zet dan binnen een emmer onder de koepel en stuur me een foto via WhatsApp. Ga niet zelf op het platte dak staan zolang het waait. Is de koepel kapot, dan dek ik hem eerst af, en daarna kijken we samen wat de beste oplossing is." },
    ],
  },
  {
    plaats: "drunen",
    dienst: "stormschade",
    hook: "Open bij de Loonse en Drunense Duinen vangt Drunen veel wind. Losse of weggewaaide pannen laten regen binnen. Ligt er een open plek, dan dek ik die eerst af, en daarna volgt de nette reparatie.",
    faq: [
      { v: "Ik woon in Elshout. Kom je daar ook na een storm?", a: "Elshout ligt vlak bij Drunen en hoort net als Drunen bij de gemeente Heusden, dus daar kom ik ook. Na een storm krijg ik veel vragen tegelijk. Ik ga eerst naar daken die open liggen en waar het binnen nat wordt. Stuur me een foto van je dak vanaf de straat via WhatsApp, dan zie ik hoe erg het is en hoor je wanneer ik kan komen. Lekt het al, zet dan binnen een emmer neer en haal spullen onder de natte plek weg." },
    ],
  },
  {
    plaats: "boxtel",
    dienst: "stormschade",
    hook: "Sinds 2021 hoort ook Esch bij de gemeente Boxtel. Rond Liempde en Esch ligt veel open land met verspreide boerderijen, en daar pakt de wind een groot, steil dak flink aan. Na een storm zie ik daar vaker dat de laatste vorst van de nok, vlak bij de gevel, is losgeraakt. In de rijtjes in Boxtel zelf zitten losse pannen na harde wind vooral aan het eind van de rij, bij het hoekhuis, waar de wind het hardst langs de kopgevel trekt. Ga na een storm niet onder de dakrand staan waar iets naar beneden kwam, en app me een foto vanaf de straat.",
    faq: [
      { v: "Ik woon in een hoekhuis. Kan ik voor de winter iets doen tegen pannen die langs de zijkant loswaaien?", a: "Ja. Langs de kopgevel van een hoekhuis trekt de wind het hardst, en op oudere daken liggen de pannen daar vaak zonder haak. Ik kan die pannen vastzetten met stormhaken, zodat ze bij een windstoot niet meer omhoog wippen. Meestal hoeft daarvoor niet het hele dak open. Liggen er nu al pannen scheef, stuur me dan een foto vanaf de straat via WhatsApp. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "schijndel",
    dienst: "stormschade",
    hook: "Op een deel van de oudere daken in Schijndel staat nog een antenne of een schotel die niemand meer gebruikt. Bij een storm gaat die heen en weer, en de mast of de beugel schuurt of breekt de pannen eromheen. Waait hij om, dan valt hij vaak over de nok en neemt hij een paar nokvorsten mee. Gebruik je zo'n antenne niet meer, laat hem dan weghalen voordat de winterstormen komen. Rond Wijbosch en in het buitengebied staan boerderijen met een groot dak en vaak een schuur ernaast, en over het open land waait het daar flink. Kijk na een storm dus ook naar het dak van de schuur, want dat vergeet je snel. Ga zelf niet het dak op, maar stuur me een foto vanaf de grond. Is er een open plek, dan maak ik die eerst dicht, en daarna volgt de nette reparatie.",
    faq: [
      { v: "Na de storm ligt er een stuk van een nokvorst in mijn tuin. Moet de hele nok opnieuw?", a: "Niet per se. Kijk eerst vanaf de straat of er een gat in de nok zit en of de andere vorsten nog recht liggen. Op veel oudere daken in Schijndel liggen de vorsten nog in specie, en als die bros is, gaat er bij een storm vaak eerst één vorst schuiven. Zit er een gat, dan regent het daar op het hoogste punt van je dak naar binnen, en dan dek ik die plek eerst af. Daarna kijk ik of alleen die vorst terug kan of dat de specie over de hele nok op is. Dat zeg ik je eerlijk, en je hoort vooraf wat het kost." },
      { v: "Mijn oude antenne staat na de storm scheef op de schoorsteen. Wat doe ik?", a: "Blijf uit de buurt van de kant waar hij naartoe hangt, in de tuin en op de stoep, en zet daar zo nodig iets neer zodat niemand eronder loopt. Ga zelf niet naar boven en trek niet aan de kabel. Maak vanaf de grond een foto van de schoorsteen en de mast, en stuur die via WhatsApp. Vaak heeft de mast bij het heen en weer gaan het lood rond de schoorsteen of de pannen eromheen beschadigd, en daar kijk ik naar zodra het veilig kan. Gebruik je de antenne niet meer, dan kan hij er nu beter af. Je hoort vooraf wat het kost." },
    ],
  },
  {
    plaats: "heusden",
    dienst: "stormschade",
    hook: "Aan de open Maaskant bij Heusden grijpt de wind hard aan; oudere daken in de vesting zijn extra kwetsbaar. Ik dek het eerst af en herstel het daarna, zoveel mogelijk met materiaal dat bij het oude werk past.",
    faq: [
      { v: "Mijn huis in de vesting is een monument. Wat gebeurt er als er na een storm iets kapot is?", a: "Eerst maak ik een open plek dicht met een tijdelijke afdekking, zodat het binnen droog blijft. Daarmee verander ik niets aan het pand. Voor de nette reparatie zoek ik pannen en lood die bij het oude werk passen, en dat kan iets langer duren dan bij een gewoon huis. Twijfel je wat er aan je monument mag, vraag het dan na bij de gemeente Heusden. Stuur me na de storm een foto van je dak vanaf de straat via WhatsApp." },
    ],
  },
  {
    plaats: "sint-michielsgestel",
    dienst: "stormschade",
    hook: "In het oude centrum van Gestel en langs de Dommel staan veel huizen van voor de oorlog met een steil pannendak. Bij een deel daarvan liggen de pannen nog direct op de latten, zonder folie eronder. Waait er bij een storm één pan weg of scheef, dan regent het daar meteen op zolder, want er zit niets onder dat het water opvangt. Kijk na een storm daarom ook even op zolder met een zaklamp: zie je ergens daglicht tussen de pannen door, dan ligt daar een pan niet goed. In Den Dungen, Gemonde en Maaskantje staan meer boerderijen en vrijstaande huizen in het open land, en daar kijk ik na een storm vooral naar de nok en de pannen langs de rand van het dak. Ga zelf niet het dak op, maar stuur me een foto vanaf de grond. Is je dak open, dan dek ik het eerst af en herstel ik het daarna netjes.",
    faq: [
      { v: "Ik zie na de storm op zolder daglicht tussen de pannen. Wat doe ik nu?", a: "Dan ligt daar een pan scheef of mist er een. Bij de oude huizen in Gestel zonder folie onder de pannen komt de regen op die plek meteen binnen. Leg op zolder een zeil of een paar handdoeken onder die plek en zet er een emmer neer. Duw de pan niet zelf van binnenuit terug, want dan schuift hij vaak verder weg of breekt hij. Maak een foto van binnen en, als het lukt, van die kant van het dak vanaf de straat, en stuur die via WhatsApp. Een open plek dek ik eerst af, en daarna leg ik de pannen weer goed." },
    ],
  },
  {
    plaats: "oisterwijk",
    dienst: "stormschade",
    hook: "In bosrijk Oisterwijk komen bij storm takken én pannen naar beneden. Ik dek de schade eerst af en herstel het daarna netjes, met foto's voor je verzekeraar.",
    faq: [
      { v: "Na de storm hangt er een afgebroken tak in de boom boven mijn dak. Wat doe ik?", a: "Blijf weg onder die tak en zet je auto ergens anders neer, want hij kan bij de volgende windvlaag alsnog vallen. Laat de tak weghalen door een boomverzorger, want dat werk doe ik zelf niet. Is er al iets op je dak gekomen, of zie je een pan die scheef ligt of een goot die schuin hangt, stuur me dan een foto vanaf de grond via WhatsApp. Dan kijk ik daarna naar de pannen en de goot, en een open plek dek ik eerst af." },
    ],
  },

  // Dakgoot repareren of vervangen: eerst Den Bosch (Search Console: plek 26 tot 45 zonder eigen pagina)
  {
    plaats: "den-bosch",
    dienst: "dakgoot-vervangen",
    hook: "In de Muntel en de Vliert hebben de huizen uit de jaren '20 en '30 vaak nog zinken goten, soms als bakgoot achter een houten lijst. Na veel jaren gaan die lekken bij de naden, de hoeken en de uitloop naar de regenpijp. In nieuwere wijken als Maaspoort en Empel hangen vaker kunststof goten, en daar zit het meestal in een verbinding of een losse beugel. Ik kijk eerst of repareren kan, en vervang alleen wat echt op is.",
    faq: [
      { v: "Kun je een oude zinken goot in Den Bosch repareren in plaats van vervangen?", a: "Vaak wel. Bij de oudere huizen in de Muntel en de Vliert lekt een zinken goot meestal eerst bij een naad, een hoek of de uitloop naar de regenpijp. Is de rest van het zink nog goed, dan herstel ik alleen dat stuk. Is het zink over een groot stuk dun of zitten er gaatjes in, dan zeg ik eerlijk dat een nieuw stuk beter is. Je hoort vooraf wat het kost." },
      { v: "Mag ik in de binnenstad een kunststof goot ophangen?", a: "Dat kan niet altijd. De binnenstad van Den Bosch is beschermd stadsgezicht, en bij een monument mag je niet zomaar ander materiaal gebruiken. Twijfel je, vraag het dan na bij de gemeente. Ik kijk wat er nu hangt en herstel de goot het liefst met materiaal dat bij het pand past." },
      { v: "Mijn goot ligt tussen mijn pand en dat van de buren. Wie laat hem repareren?", a: "In de binnenstad staan veel panden tegen elkaar, en soms ligt er één goot tussen twee daken waar het water van allebei in komt. Zo'n goot is vaak van jullie samen, en dan regel je de reparatie het makkelijkst samen. Weet je het niet zeker, kijk dan in je koopakte, of vraag het na bij je VvE of verhuurder. Ik kijk naar de hele goot, ook aan de kant van de buren, en zeg eerlijk waar het lek zit. Zo weet ieder waar hij aan toe is voordat ik begin. Je hoort vooraf wat het kost." },
      { v: "Mijn kunststof goot in Maaspoort of Empel tikt en kraakt als het warm of koud wordt. Is dat erg?", a: "Meestal niet. Kunststof zet uit als het warm is en krimpt als het koud wordt, en dan schuift de goot een stukje in de beugels. Een zacht tikje bij een flinke temperatuurwissel is dan normaal. Hoor je het steeds op dezelfde plek, of zie je daar een naad die openstaat of een stuk goot dat scheef hangt, dan zit de goot daar te vast of is een verbinding losgeschoten. Dat herstel ik, en meestal is daar geen nieuwe goot voor nodig. Stuur me een foto van die plek vanaf de straat via WhatsApp. Je hoort vooraf wat het kost." },
      { v: "Soldeer je een lekke naad in mijn zinken goot, of coat je de goot van binnen?", a: "Dat hangt af van hoe het zink erbij ligt. Lekt het bij één of twee naden en is het zink verder nog stevig, dan soldeer ik die naden opnieuw. Is het zink nog goed, maar lekt de goot op meer plekken een beetje, dan kan ik de binnenkant van de goot coaten, zodat hij weer waterdicht is. Is het zink dun, zitten er gaatjes in of geeft het mee als ik erop druk, dan helpt solderen of coaten niet lang meer, en dan zeg ik eerlijk dat een nieuw stuk goot beter is. Bij de oude zinken goten in de Muntel en de Vliert kijk ik daarom eerst over de hele lengte voordat ik iets voorstel. Stuur me een foto van de plek waar het druppelt, het liefst tijdens een bui. Je hoort vooraf wat het kost." },
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
      { v: "Ik laat mijn gootlijst en kozijnen schilderen. Moet de goot eerst nagekeken worden?", a: "Dat is slim, zeker bij een zinken bakgoot achter een houten lijst. Lekt de goot ergens bij een naad of hoek, dan trekt het water in het hout van de lijst, en dan bladdert de nieuwe verf er binnen een jaar weer af. Laat de goot daarom eerst nakijken en zo nodig herstellen, en laat daarna de schilder komen. Zie je nu al bladderende verf of donkere plekken op de lijst, onder een naad of hoek van de goot, stuur me dan een foto. Je hoort vooraf wat het kost." },
      { v: "Mijn kunststof goot in Vught-Noord lekt bij een verbinding. Moet de hele goot eruit?", a: "Meestal niet. Bij een kunststof goot zit een lek vaak in een verbinding: het rubber erin is na jaren hard geworden, of de goot is bij vorst een stukje uit de verbinding geschoven. Dan vervang ik dat verbindingsstuk. Ook een gescheurd hoekstuk of eindstuk vervang ik los. Hangt de goot ergens door, dan zet ik hem weer op afschot naar de regenpijp, met een extra beugel waar dat nodig is. Breekt het kunststof als ik erop druk, dan zeg ik eerlijk dat een nieuwe goot slimmer is. Stuur me een foto van de plek waar het druppelt, het liefst tijdens of vlak na een bui. Je hoort vooraf wat het kost." },
    ],
  },
  // Daklekkage in Tilburg, met Udenhout en Berkel-Enschot (Rens 23-10: ook bij spoed; Search Console: daklekkage udenhout, daklekkage berkel-enschot)
  {
    plaats: "tilburg",
    dienst: "daklekkage",
    hook: "Udenhout en Berkel-Enschot liggen aan de kant van Tilburg die het dichtst bij Den Bosch ligt. In de oude dorpskernen staan veel vrijstaande huizen en twee-onder-een-kappers met een pannendak. Daar begint een lek vaak bij het lood rond de schoorsteen of bij een pan die verschoven is. In de Reeshof staan veel rijtjeshuizen uit de jaren '80 en '90. Heeft je huis daar een platte aanbouw of berging, dan komt het water nogal eens binnen bij een naad of bij de rand van dat platte dak. Ik zoek eerst waar het water echt binnenkomt en repareer dan alleen wat nodig is.",
    faq: [
      { v: "Kom je bij een lek ook in Udenhout en Berkel-Enschot?", a: "Ja. Udenhout en Berkel-Enschot horen sinds 1997 bij de gemeente Tilburg, en ook daar kom ik bij een lekkend dak. Bel of app me met een foto van de natte plek en, als het lukt, van die kant van je dak. Dan zie ik vaak al waar ik moet zoeken en hoor je wanneer ik kan komen." },
      { v: "Mijn rijtjeshuis in de Reeshof is uit de jaren '80 of '90. Waar lekt zo'n dak meestal?", a: "Bij huizen van die leeftijd zijn de pannen meestal nog goed. Een lek zit dan vaker bij wat er door of op het dak zit: de kraag rond een ontluchtingspijp, het gootstuk onder een dakraam, of de dakbedekking van de platte berging of aanbouw, die vaak nog de eerste is. Kijk na een flinke bui waar het nat wordt: op zolder bij een pijp of een raam, of beneden in de berging. Stuur me een foto van die plek en, als het lukt, van die kant van het dak via WhatsApp. Tilburg is voor mij zo'n half uur rijden, dus met een foto weet ik vaak al wat ik mee moet nemen. Je hoort vooraf wat het kost." },
    ],
  },
  // Daklekkage in Veghel (Search Console: daklekkage veghel plek 25, dakgoot lekkage veghel plek 24), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "veghel",
    dienst: "daklekkage",
    hook: "In het centrum van Veghel, langs de Zuid-Willemsvaart, staan nog oudere panden. Daar zit een lek vaak in oud lood rond de schoorsteen of in een zinken goot die bij een naad is gaan lekken. In de kerkdorpen eromheen, zoals Eerde, Zijtaart en Keldonk, staan veel vrijstaande huizen en oude boerderijen met een groot pannendak. Staat er een schuur of aanbouw tegenaan, dan ligt er een kilgoot waar de daken samenkomen. Daar blijft blad liggen en daar lekt het na verloop van tijd vaak. Ik zoek eerst waar het water echt binnenkomt en repareer dan gericht, zonder onnodig sloopwerk.",
    faq: [
      { v: "De kilgoot tussen mijn huis en de schuur lekt elk najaar. Moet hij vervangen worden?", a: "Niet altijd. Lekt het vooral in de herfst, dan zit de kil vaak vol blad en loopt hij bij een bui over de rand onder de pannen. Dan is leegmaken genoeg. Zitten er scheurtjes of gaatjes in het lood of zink van de kil, dan herstel ik die plek. Pas als de kil over de hele lengte dun of lek is, vervang ik hem. Je hoort vooraf wat het kost." },
      { v: "In mijn rijtjeshuis uit de jaren '70 of '80 lekt het rond het dakraam. Moet het raam eruit?", a: "Meestal niet. Bij dakramen van die leeftijd zit het lek vaak in de aansluiting met het dak: het lood of de gootstukken rond het raam zijn na zoveel jaren hard geworden of gescheurd, of er ligt een pan naast het raam die niet meer goed aansluit. Dat herstel ik, en het raam kan blijven zitten. Is het hout van het kozijn zacht of zit er een barst in het glas, dan zeg ik eerlijk dat het raam zelf aan vervanging toe is. Druppelt het alleen op koude ochtenden op de vensterbank, dan is het vaak condens. Stuur me een foto van het raam van binnen en, als het lukt, van buiten vanaf de straat." },
    ],
  },
  // Daklekkage in Eindhoven (Search Console: lekkage dak eindhoven plek 36, daklekkage eindhoven en dak lekkage eindhoven samen 29 vertoningen), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "eindhoven",
    dienst: "daklekkage",
    hook: "In Philipsdorp en andere wijken van rond 1910 tot 1930 staan veel huizen met een steil pannendak, een schoorsteen en oude zinken goten. Daar begint een lek vaak bij het lood rond de schoorsteen of bij een goot die bij een naad is gaan lekken. In nieuwere wijken zoals Meerhoven liggen op veel daken zonnepanelen. Daar zie ik lekkage nogal eens bij een pan die bij het plaatsen van de beugels is gebroken of verschoven. Eindhoven is voor mij zo'n 40 minuten rijden. Stuur daarom eerst een foto via WhatsApp, dan weet ik wat ik mee moet nemen en hoor je eerlijk wanneer ik kan komen.",
    faq: [
      { v: "Mijn huis in Meerhoven lekt sinds de zonnepanelen erop liggen. Wie lost dat op?", a: "Zijn de panelen pas gelegd, neem dan eerst contact op met je installateur, want lekkage door het plaatsen hoort die in de regel zelf op te lossen. Liggen de panelen er al langer of komt de installateur niet, dan kijk ik waar het water binnenkomt. Eindhoven is voor mij zo'n 40 minuten rijden. Stuur daarom eerst een foto van de natte plek en van je dak vanaf de straat via WhatsApp, dan hoor je eerlijk wanneer ik kan komen." },
      { v: "Ik woon in Philipsdorp en de muur bovenin mijn slaapkamer wordt nat, net onder de dakrand. Komt dat van het dak?", a: "Vaak wel, maar dan meestal van de goot en niet van de pannen. Bij veel huizen in Philipsdorp hangt nog een oude zinken goot langs de dakrand. Gaat die bij een naad of hoek lekken, of loopt hij over omdat hij vol blad zit, dan loopt het water achter de goot langs de muur naar beneden. Binnen zie je dat als een natte strook bovenin de muur, vaak vlak onder het plafond. Kijk tijdens een flinke bui vanaf de straat of er water over de goot komt of op één plek naar beneden druppelt. Stuur me die foto samen met een foto van de natte plek binnen via WhatsApp, dan zeg ik eerlijk of het de goot is of het dak." },
      { v: "Kom je ook in Veldhoven en Waalre?", a: "Ja. Veldhoven en Waalre liggen tegen Eindhoven aan, Veldhoven aan de zuidwestkant en Waalre aan de zuidkant. Voor een lek kom ik daar net zo goed als in Eindhoven zelf. Het is voor mij zo'n 40 minuten rijden, dus zo'n klus plannen we samen in. Stuur me eerst een foto van de natte plek en van je dak vanaf de straat via WhatsApp. Dan zie ik wat ik mee moet nemen, en spreken we een moment af." },
    ],
  },
  // Daklekkage in Waalwijk (Search Console: daklekkage waalwijk 24 vertoningen, lekkage waalwijk en dakgoot lekkage waalwijk), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "waalwijk",
    dienst: "daklekkage",
    hook: "Langs de Grotestraat en in de oude straten eromheen staan nog veel huizen uit de tijd van de schoenindustrie, soms met een oude werkplaats of schuur erachter. Zo'n achterbouw heeft vaak een plat of flauw dak, en daar komt het water nogal eens binnen waar de achterbouw tegen het huis aan zit. In Waspik staan meer vrijstaande huizen en twee-onder-een-kappers met een groot pannendak. Daar begint een lek meestal bij het lood rond de schoorsteen of bij een pan die na een storm is gaan schuiven. Ik zoek eerst waar het water echt binnenkomt en repareer dan alleen wat nodig is.",
    faq: [
      { v: "Op de oude werkplaats achter mijn huis liggen golfplaten, en daar lekt het. Kun je dat repareren?", a: "Dat hangt ervan af hoe oud de platen zijn. In golfplaten van voor 1994 kan asbest zitten. Daar boor of zaag ik niet in, en weghalen mag alleen een gecertificeerd asbestbedrijf. Laat zo'n dak dus eerst onderzoeken. Zijn de platen jonger, dan kijk ik of het lek bij een overlap, een schroef of de aansluiting op de muur zit, en repareer ik dat. Stuur me een foto van het dak en van de natte plek binnen via WhatsApp." },
      { v: "Mijn oude huis in Waspik heeft een schoorsteen die ik niet meer gebruik, en daar wordt het nat. Moet hij eraf?", a: "Meestal niet. Kijk eerst waar het nat wordt. Zit de natte plek naast de schoorsteen, op het plafond of op zolder, dan komt het water vaak langs het lood rondom. Zit het op de muur waar het kanaal achter zit, vaak een paar dagen na een flinke bui, dan regent het waarschijnlijk bovenin het open kanaal. Bij een schoorsteen die je niet meer gebruikt, is een kap of afdekplaat die het kanaal laat ademen dan vaak genoeg. Helemaal weghalen kan ook, maar dan moet het gat in het dak goed worden dichtgemaakt, en dat is meer werk. Stuur me een foto van de schoorsteen vanaf de straat en van de natte plek binnen, dan zeg ik eerlijk wat ik zou doen." },
    ],
  },
  // Daklekkage in Breda (Rens 26-10: ja, ook bij een lekkend dak in Breda; Search Console: daklekkage breda 48 vertoningen), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "breda",
    dienst: "daklekkage",
    hook: "In Ginneken en Boeimeer staan veel huizen van rond 1930 met een steil pannendak en een goot die in de dakrand is weggewerkt. Wordt het zink van zo'n goot dun, dan komt het water niet op zolder binnen, maar bovenin de gevel of langs het plafond van de slaapkamer. In de Haagse Beemden staan vooral rijtjes en twee-onder-een-kappers uit de jaren '80 en '90, vaak met een dakraam in het pannendak. Daar zie ik lekkage nogal eens langs het gootstuk onder dat dakraam, of bij een pan ernaast die niet meer goed in de sluiting ligt. Omdat ik vanuit Den Bosch zo'n 40 minuten onderweg ben, vraag ik je eerst een foto van de natte plek te appen. Dan neem ik meteen het goede materiaal mee, en ik zeg je eerlijk op welk moment ik er kan zijn.",
    faq: [
      { v: "Kom je bij een lek ook in Prinsenbeek, Teteringen, Bavel en Ulvenhout?", a: "Ja. Prinsenbeek, Teteringen, Bavel en Ulvenhout horen sinds 1997 bij de gemeente Breda, en ook daar kom ik bij een lekkend dak. Teteringen ligt aan de kant van Den Bosch, de andere dorpen liggen iets verder. Bel of app me met een foto van de natte plek, dan hoor je wanneer ik kan komen." },
      { v: "Op mijn huis uit de jaren '30 in Ginneken of Boeimeer is een pan kapot. Kun je een pan meenemen die past?", a: "Vaak wel, als ik vooraf weet wat er ligt. Op veel huizen van die leeftijd liggen nog oude pannen die niet meer gemaakt worden. Maak daarom een foto van je dak vanaf de straat en, als je op zolder bij de pannen kunt, ook een van de achterkant van een pan: daar staat soms een naam of een stempel in. Dan zoek ik eerst een pan die past en neem ik die meteen mee, want Breda is voor mij zo'n 40 minuten rijden. Lukt dat niet, dan maak ik het lek eerst dicht en zeg ik eerlijk wat er kan. Je hoort vooraf wat het kost." },
      { v: "Kom je bij een lek ook in Oosterhout, Made of Terheijden?", a: "Ja. Oosterhout ligt tegen Breda aan, en Made, Terheijden en Lage Zwaluwe horen bij de gemeente Drimmelen, tussen Breda en de Biesbosch. Ook daar kom ik bij een lekkend dak. Stuur me een foto van de natte plek via WhatsApp en zet erbij in welke plaats je woont, dan hoor je eerlijk wanneer ik kan komen." },
    ],
  },
  // Dakgoot repareren of vervangen in Veghel, met Erp en Boerdonk (Search Console: dakgoot lekkage veghel plek 23, dakgoot reparatie veghel plek 34), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Veghel
  {
    plaats: "veghel",
    dienst: "dakgoot-vervangen",
    hook: "In Erp en Boerdonk staan veel langgevelboerderijen en oude woonboerderijen. Die hebben een lange, lage goot over de hele voorgevel, en aan de schuur of stal ernaast hangt vaak nog een tweede goot. Na veel jaren zakt zo'n goot tussen de haken door. Dan blijft er na een bui water in het midden staan, en juist daar gaat hij als eerste roesten of lekken. Aan de nieuwere huizen in Veghel zelf hangen vooral kunststof goten. Die zetten uit als het warm is en krimpen bij vorst, en na een paar jaar schiet er dan een hoekstuk of eindstuk los. Vaak is het genoeg om de goot weer op afschot te hangen of één hoekstuk te vervangen. Een nieuwe goot raad ik pas aan als het materiaal zelf op is.",
    faq: [
      { v: "Kom je voor een lekkende goot ook in Erp, Boerdonk en Keldonk?", a: "Ja. Erp, Boerdonk en Keldonk horen net als Veghel bij de gemeente Meierijstad. Ook daar repareer of vervang ik goten, ook de lange goten aan boerderijen en schuren. Veghel is zo'n 20 minuten rijden vanaf Den Bosch. Stuur me via WhatsApp een foto van de goot vanaf de straat, dan zie ik vaak al of het om één naad of hoekstuk gaat." },
      { v: "Aan mijn boerderij zakt de lange goot in het midden. Kan die weer omhoog?", a: "Vaak wel. Bij zo'n lange goot zitten de haken na veel jaren te ver uit elkaar of zijn er een paar verbogen, en dan zakt hij in het midden. Ik hang hem opnieuw op, met extra haken waar dat nodig is, zodat hij weer naar de regenpijp afloopt. Heeft het water er al lang in gestaan en is de goot op die plek dun of roestig, dan vervang ik dat stuk. Kijk na een bui of er nog water in het midden staat, en stuur me daar een foto van. Je hoort vooraf wat het kost." },
    ],
  },
  // Dakgoot repareren of vervangen in Oisterwijk, met Moergestel en Haaren (Search Console: dakgoot reparatie oisterwijk plek 20, dakgoot vernieuwen oisterwijk plek 59), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Oisterwijk
  {
    plaats: "oisterwijk",
    dienst: "dakgoot-vervangen",
    hook: "Oisterwijk is al meer dan honderd jaar geliefd om te wonen tussen de bossen en vennen, en in de lanen staan nog veel oude villa's met een overstekend dak. Bij zulke huizen ligt de zinken goot vaak in een houten gootlijst. Lekt het zink, dan zie je dat niet aan een druppel langs de gevel, maar aan de lijst zelf: de verf bladdert, het hout wordt zacht en er komen donkere plekken onder de goot. Daarom kijk ik bij zo'n goot ook of het hout eronder nog stevig is, want een nieuw stuk zink in een rotte lijst houdt het niet lang. In Moergestel en Haaren hangt aan veel vrijstaande huizen en boerderijen een lange goot, soms met maar één regenpijp aan het eind. Bij een stortbui kan die het water niet bijhouden en loopt de goot over aan de kant waar geen pijp zit, terwijl hij nergens lek is. Dan helpt een extra uitloop met een tweede regenpijp soms beter dan een nieuwe goot.",
    faq: [
      { v: "Mijn goot loopt over aan de kant waar geen regenpijp zit. Kan er een regenpijp bij?", a: "Vaak wel. Bij een lange goot met maar één regenpijp aan het eind kan een tweede uitloop met een eigen regenpijp het water sneller kwijt. Waar die pijp langs de gevel naar beneden kan en waar het water daarna heen gaat, naar het riool of de tuin, bekijken we samen ter plekke. Eerst kijk ik wel of de goot niet gewoon vol zit of scheef hangt, want dan is dat genoeg. Je hoort vooraf wat het kost." },
      { v: `Mijn zinken goot in Oisterwijk lekt. Is repareren genoeg, of moet er een nieuwe goot komen?`, a: `Lekt hij op één naad, een hoek of bij de uitloop en is het zink verder nog stevig, dan is repareren vaak genoeg. Is het zink op meer plekken dun, zitten er kleine gaatjes in of is de goot al een paar keer geplakt, dan houdt een nieuwe reparatie het vaak niet lang, en dan zeg ik eerlijk dat een nieuwe goot slimmer is. Bij de oude villa's in de lanen kijk ik ook naar de houten gootlijst eronder. Is dat hout zacht, dan moet dat eerst hersteld worden, anders houdt ook een nieuwe goot het niet lang. In Moergestel en Haaren kijk ik op dezelfde manier. Stuur me een foto van de goot vanaf de straat, het liefst tijdens of vlak na een bui. Je hoort vooraf wat het kost.` },
    ],
  },
  // Dakgoot repareren of vervangen in Boxtel (Search Console: dakgoot lekkage boxtel plek 31, dakgoot reparatie boxtel, dakgoot vernieuwen boxtel), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Boxtel
  {
    plaats: "boxtel",
    dienst: "dakgoot-vervangen",
    hook: "In de naoorlogse wijken van Boxtel, zoals Selissen, staan veel rijtjeshuizen waar de goot van het ene huis gewoon doorloopt in die van de buren. Op de grens tussen twee huizen zit dan een naad, en daar gaat zo'n goot na veel jaren als eerste lekken. Het lastige is dat het water vaak een stukje verderop naar beneden komt. Soms druppelt het bij de buren terwijl het lek aan jouw kant zit, of andersom. Heeft de buurman zijn goot al laten vervangen door kunststof en hangt er bij jou nog zink, dan zit er op de grens een overgangsstuk. Kunststof zet bij warmte en kou veel meer uit dan zink, en juist die overgang laat na een paar jaar los. Ik kijk daarom over de hele lengte van de goot. Zit het lek op het stuk van je buren, dan zeg ik dat eerlijk, zodat jullie het samen kunnen regelen. Stuur me een foto vanaf de straat, dan zie ik vaak al of het om één naad gaat of om meer.",
    faq: [
      { v: "Mijn buren laten hun goot vervangen. Moet de mijne dan ook?", a: "Niet per se. Is jouw goot nog goed, dan maak ik op de grens een nette overgang, zodat het water er niet tussen kan lopen. Is jouw goot net zo oud als die van de buren, of lekt hij ook al op een paar plekken, dan is het vaak slimmer om het in één keer te doen. Dan hangt er één goot op dezelfde hoogte en heb je geen overgang die later los kan gaan. Ieder hoort vooraf wat het kost." },
    ],
  },
  // Dakreparatie in Oss (Search Console: dakreparatie oss 46 vertoningen op plek 80, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Oss
  {
    plaats: "oss",
    dienst: "dakreparatie",
    hook: "Sinds 2015 hoort ook Geffen bij de gemeente Oss. Daar staan veel twee-onder-een-kappers en vrijstaande huizen met een flink pannendak. Op oudere daken liggen de pannen langs de zijkant en vlak boven de goot vaak nog zonder stormhaak, en juist die gaan bij een harde windstoot als eerste omhoog. Ik leg ze terug en kijk meteen of er een haak bij moet. Bij de oudere rijtjes in Oss liggen soms nog pannen die niet meer gemaakt worden. Is er een kapot, dan zoek ik eerst een pan die past. Lukt dat niet, dan kan ik een oude pan van de achterkant naar voren halen en achter een nieuwe neerleggen, zodat je aan de straatkant niets ziet. Je hoort vooraf wat het kost.",
    faq: [
      { v: "Hoe weet ik of de pannen op mijn dak stormhaken hebben?", a: "Vanaf de straat zie je dat bijna niet. Zit er op zolder geen plaat of beschot onder de pannen, kijk dan bij de onderste rijen en langs de zijkant: daar zie je soms een metalen haakje aan de lat dat de pan vasthoudt. Zie je alleen pannen op latten en nergens een haakje, dan liggen ze er waarschijnlijk zonder. Bij de oudere twee-onder-een-kappers in Geffen kom ik dat vaak tegen. Ik kan stormhaken bijzetten waar de wind het eerst grip krijgt, langs de zijkant en vlak boven de goot. Je hoort vooraf wat het kost." },
      { v: "Na de storm ligt er specie in mijn goot en staat een nokvorst scheef. Moet de hele nok opnieuw?", a: "Niet altijd. Zitten er maar een paar vorsten los en is de specie onder de rest nog hard, dan zet ik alleen die vorsten opnieuw vast. Brokkelt de specie over de hele nok af, dan is het slimmer om de hele nok in één keer opnieuw aan te smeren, anders moet ik na de volgende storm weer het dak op. Op de vrijstaande huizen in Berghem en Geffen is de nok vaak lang, en dan scheelt het als ik vooraf weet hoeveel vorsten er los zitten. Kijk daarom vanaf de overkant van de straat en maak een foto met de zoom van je telefoon. Ligt er een vorst helemaal los of mist er een, dan ligt de nok open en is het spoed: bel of app me. Je hoort vooraf wat het kost." },
    ],
  },
  // Dakreparatie in Vlijmen (Search Console: dakreparatie vlijmen 25 vertoningen op plek 67, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, storm- en gootpagina van Vlijmen
  {
    plaats: "vlijmen",
    dienst: "dakreparatie",
    hook: "In de rijtjes uit de jaren '70 in Vlijmen liggen op veel daken nog de betonnen pannen van toen. Na zoveel jaren is de toplaag eraf: de pan wordt ruw en groen, en er groeit mos op dat in de goot terechtkomt. Breekt er een, dan vervang ik alleen die pan. Zijn er op veel plekken pannen gescheurd, dan zeg ik eerlijk dat een groter stuk vervangen slimmer is. In Geerpark, de nieuwe wijk van Vlijmen, ligt de nok niet meer in specie maar droog, met een rol eronder en een klem per vorst. Daar zie ik na een storm eerder een vorst die is gaan schuiven omdat een klem los zit, dan een nok die afbrokkelt. Vanaf de straat zie je vaak al welke pan of vorst scheef ligt. Maak er een foto van en stuur hem via WhatsApp, dan zeg ik je wat het wordt.",
    faq: [
      { v: "Mijn betonpannen zijn verweerd en groen. Moeten ze worden vervangen?", a: "Niet meteen. Een pan die ruw en groen is geworden, kan vaak nog jaren mee, zolang hij heel is en goed in de sluiting ligt. Daken schoonmaken doe ik zelf niet. Wel vervang ik pannen die gescheurd of gebroken zijn, en als ik op het dak ben, kijk ik of er meer pannen zijn die het niet lang meer houden. Zijn het er veel op hetzelfde dakvlak, dan zeg ik eerlijk dat een groter stuk vervangen slimmer is. Je hoort vooraf wat het kost." },
      { v: "Na de storm ligt er in Geerpark een nokvorst scheef. Moet de hele nok opnieuw?", a: "Meestal niet. In Geerpark ligt de nok droog, met een klem per vorst. Is er één klem losgeschoten of gebroken, dan gaat die vorst bij harde wind schuiven, terwijl de rest gewoon vastligt. Ik leg de vorst terug en zet hem vast met een nieuwe klem. Ik kijk dan meteen of de rol onder de vorsten nog heel is, want als die gescheurd is, waait de regen eronder. Ga zelf niet het dak op, maar stuur me een foto vanaf de straat. Je hoort vooraf wat het kost." },
    ],
  },
  // Dakreparatie in Waalwijk (Search Console: dakreparatie waalwijk 30 vertoningen op plek 77, dakpannen waalwijk 27), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Waalwijk
  {
    plaats: "waalwijk",
    dienst: "dakreparatie",
    hook: "Op een deel van de oude huizen in Besoyen, Baardwijk en Capelle liggen nog oud-Hollandse pannen. Die hebben geen sluiting zoals een moderne pan, ze liggen alleen een stukje over elkaar heen. Waait er één scheef of breekt er één, dan loopt het water er makkelijk onder door. Een nieuwe pan in dezelfde vorm is meestal wel te krijgen, maar de kleur wijkt vaak af van je oude pannen. Dat zeg ik je vooraf eerlijk, zodat je niet voor een verrassing staat. In de nieuwere wijken van Waalwijk zijn de daken nog jong. Moet daar al iets gerepareerd worden, kijk dan eerst of de bouwer het nog moet oplossen. Is dat niet zo, dan kom ik kijken en hoor je vooraf de vaste prijs.",
    faq: [
      { v: "Kan er tussen mijn oud-Hollandse pannen ook een moderne pan?", a: "Op één plek meestal niet. Een moderne pan heeft een andere vorm en overlap, en past daardoor niet goed tussen oud-Hollandse pannen. Dan loopt het water er juist onder door. Ik zoek daarom een pan in dezelfde vorm. Wil je een heel dakvlak vervangen door pannen met een sluiting, dan kan dat, maar dan gaat het om een groter stuk dak, en bij een monument mag dat vaak niet zomaar. Ik zeg eerlijk wat bij jouw dak past, en je hoort vooraf wat het kost." },
      { v: "Een nieuwe pan tussen mijn oud-Hollandse pannen heeft een andere kleur. Wordt dat nog gelijk?", a: "Een beetje. Een nieuwe pan is in het begin vaak feller van kleur. Door zon, regen en wat aanslag wordt hij na een paar jaar doffer en lijkt hij meer op de rest, maar helemaal gelijk aan pannen die er al tientallen jaren liggen, wordt hij vaak niet. Zit de kapotte pan aan de straatkant, dan kan ik soms een oude pan van de achterkant van je dak gebruiken en de nieuwe pan daar leggen, waar je hem minder ziet. Dat bespreek ik vooraf met je, en je hoort vooraf wat het kost." },
    ],
  },
  // Dakreparatie in Vught (Search Console: dakreparatie vught 24 vertoningen op plek 65, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, storm- en gootpagina van Vught
  {
    plaats: "vught",
    dienst: "dakreparatie",
    hook: "Veel vooroorlogse villa's in Vught hebben een schilddak: een dak dat aan alle vier de kanten schuin afloopt. Op de hoeken waar twee dakvlakken samenkomen, liggen hoekvorsten, net als bovenop de nok. Op oudere daken liggen die nog in specie, en als die bros wordt, gaat er bij harde wind een vorst schuiven en loopt de regen langs de hoek naar binnen. Op een deel van de oudere daken in Vught liggen de pannen ook nog direct op de latten, zonder folie of beschot eronder. Gaat zo'n lat na veel jaren rotten, dan zakt een rij pannen een stukje en zie je vanaf de straat een golf in het dak. Dan vervang ik de lat en leg ik de pannen weer recht. Ik herstel wat los of kapot is, en zeg je eerlijk als een groter stuk van je dak aandacht nodig heeft.",
    faq: [
      { v: "Mijn huis in Vught is een monument. Mag je daar pannen vervangen?", a: "Ja, maar bij een monument moet een nieuwe pan meestal in vorm en kleur passen bij de oude. Ik zoek eerst een pan die erbij past voordat ik iets vervang. Twijfel je of je huis een monument is, vraag het dan na bij de gemeente Vught." },
      { v: "Vanaf de straat zie ik een golf in mijn dak. Moet het hele dak eraf?", a: "Meestal niet. Op een deel van de oudere daken in Vught liggen de pannen nog direct op de latten. Is er na veel jaren een lat gaan rotten of doorgebogen, dan zakt een rij pannen een stukje en zie je die golf. Dan haal ik de pannen op die plek eraf, vervang ik de lat en leg ik ze weer recht. Zit de golf over een groot deel van het dak, of is ook het hout eronder zacht, dan zeg ik eerlijk dat er meer nodig is. Kijk ook even op zolder of je bij die plek nat hout ziet, en stuur me een foto van het dak vanaf de straat. Je hoort vooraf wat het kost." },
      { v: `De nok en de hoekvorsten op mijn villa in Vught liggen los. Leg je die opnieuw?`, a: `Ja. Ligt er één vorst los, dan zet ik die weer vast. Liggen er meer los of is de specie eronder overal bros, dan haal ik de vorsten eraf, maak ik de nok of de hoek schoon en leg ik ze opnieuw: met nieuwe dakmortel, of droog met een ondervorst eronder, wat het best bij je dak past. Een gebroken vorst vervang ik door een die past. Op een schilddak kijk ik meteen naar alle hoeken, want daar gaat het bij harde wind vaak het eerst mis. Stuur me een foto van het dak vanaf de straat, dan zie ik vaak al hoeveel er los ligt. Je hoort vooraf wat het kost.` },
    ],
  },
  // Daklekkage in Uden (Search Console: daklekkage uden 25 vertoningen op plek 67, dakgoot lekkage uden plek 33), met andere lokale inhoud dan plaatsen.ts en de andere lekkagepagina's
  {
    plaats: "uden",
    dienst: "daklekkage",
    hook: "In wijken als Bitswijk en Hoenderbos staan veel rijtjeshuizen en twee-onder-een-kappers van zo'n veertig, vijftig jaar oud. Bij een deel daarvan is de goot in de loop der jaren wat gezakt. Dan steken de onderste pannen niet ver genoeg meer in de goot, en bij een flinke bui loopt het water achter de goot langs de muur in. Binnen zie je dat als een natte plek op de muur onder de goot of naast het kozijn, en dat lijkt op een daklek. Bij oudere huizen rond het centrum is de schoorsteen soms weggehaald toen er een cv-ketel kwam, en is het gat met pannen dichtgelegd. Is dat destijds niet goed aangesloten, dan lekt het jaren later precies op die plek. Sinds 2022 hoort Uden bij de gemeente Maashorst, maar voor mij is het gewoon 25 minuten rijden vanaf Den Bosch. Stuur me een foto van de natte plek en van die kant van je dak, dan zoek ik gericht.",
    faq: [
      { v: "Hoe weet ik of het water van de goot komt of van het dak?", a: "Kijk tijdens een flinke bui buiten naar de goot boven de natte plek. Loopt er water over de voorkant, of druppelt het achter de goot langs de muur, dan zit het meestal bij de goot. Zit de natte plek binnen hoger, op het schuine plafond of op zolder, of wordt hij ook bij een gewone bui nat, dan komt het water vaker van het dak zelf. Ga er niet voor op een ladder staan. Maak vanaf de grond een foto van de goot en binnen van de natte plek, en stuur die via WhatsApp." },
      { v: "Bij mij is de schoorsteen jaren geleden weggehaald. Kan het nu op die plek lekken?", a: "Dat kan. Toen de schoorsteen eruit ging, is het gat in het dak dichtgemaakt en zijn er pannen overheen gelegd. Sluiten die pannen niet goed aan op de pannen eromheen, of loopt de folie eronder daar niet goed door, dan komt het water er na een paar jaar langs naar binnen. Op zolder zie je vaak nog waar het kanaal zat, aan een stuk ander hout of aan latten die anders lopen. Zit de natte plek daar, dan weet ik meteen waar ik moet zoeken. Stuur me een foto van die plek op zolder en van die kant van je dak vanaf de straat." },
    ],
  },
  // Dakgoot repareren of vervangen in Sint-Michielsgestel (Search Console: dakgoot reparatie sint michielsgestel plek 40), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Sint-Michielsgestel
  {
    plaats: "sint-michielsgestel",
    dienst: "dakgoot-vervangen",
    hook: "In Den Dungen en in de nieuwere straten van Sint-Michielsgestel liggen op steeds meer daken zonnepanelen tot vlak boven de goot. Van glad glas loopt de regen veel sneller af dan van pannen. Bij een stortbui schiet het water dan over de goot heen en klettert het langs de gevel naar beneden, terwijl de goot zelf nergens lek is. Vaak helpt het dan om de goot iets anders te hangen, zodat het water er weer in valt. In het oude centrum en bij de villa's langs de Dommel hangen nog veel zinken goten. Daar zie ik na veel jaren donkere of groene strepen op de gevel, onder een naad of een hoek van de goot: daar druppelt het dan al een tijd. Is het zink op meer plekken dun, dan zeg ik dat eerlijk voordat je ergens aan begint.",
    faq: [
      { v: "Er komen zonnepanelen op mijn dak, tot vlak boven de goot. Moet ik de goot eerst laten nakijken?", a: "Dat is slim, zeker bij een oudere goot. Liggen de panelen er eenmaal, dan zit er weinig ruimte tussen de panelen en de goot, en kom ik lastiger bij de onderste rij pannen en de achterkant van de goot. Is het zink al dun of lekt de goot op meer plekken, dan regel je dat het handigst voordat de panelen erop gaan. Is de goot nog goed, dan kijk ik of hij zo hangt dat het water van de panelen er straks ook echt in valt. Stuur me een foto van de goot vanaf de straat. Je hoort vooraf wat het kost." },
      { v: `Er zitten donkere of groene strepen op mijn gevel, onder de goot. Lekt mijn goot?`, a: `Vaak wel. Zit de streep onder één naad of een hoek van de goot, dan druppelt het daar al een tijd, ook als je het tijdens een bui niet ziet. Zit er over een groot stuk een groene waas onder de goot, dan loopt hij eerder over, omdat hij vol zit of niet goed afloopt naar de regenpijp. Bij de oude zinken goten in het centrum van Gestel en langs de Dommel zie ik allebei. Kijk tijdens de volgende flinke bui vanaf de straat waar het water langs de gevel komt, en stuur me daar een foto van. Dan zeg ik of een naad herstellen genoeg is of dat er meer moet gebeuren. Je hoort vooraf wat het kost.` },
    ],
  },
  // Dakgoot repareren of vervangen in Oss (Search Console: dakgoot reparatie oss 19 vertoningen op plek 81, dakgoot lekkage oss 11, dakgoot vervangen oss 9, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, goot- en dakreparatiepagina van Oss
  {
    plaats: "oss",
    dienst: "dakgoot-vervangen",
    hook: "In Ussen en andere naoorlogse wijken van Oss heeft een deel van de rijtjeshuizen een regenpijp die niet buiten langs de gevel loopt, maar binnen in de muur of door een kast naar beneden gaat. Lekt bij zo'n huis de uitloop, het stuk waar de goot overgaat in die pijp, dan zie je buiten niets. Je merkt het binnen: een natte plek bovenin de muur, in de kast op de overloop of op het plafond eronder, en dat lijkt op een daklek. Meestal zit het in de aansluiting van de uitloop op de pijp, of zit de uitloop vol blad, zodat het water bij een bui terugloopt en langs de aansluiting naar binnen gaat. Dat los ik boven bij de goot op. Lekt de pijp zelf verderop in de muur, dan zeg ik dat eerlijk, want dan heb je eerder een loodgieter nodig. Stuur me een foto van de natte plek binnen, dan weet ik waar ik boven moet beginnen.",
    faq: [
      { v: "Hoe weet ik of mijn regenpijp binnen in de muur zit?", a: "Kijk vanaf de straat en vanuit de tuin naar je goot. Loopt er aan de voor- of achtergevel geen regenpijp naar beneden, dan zit hij meestal binnen. Soms zie je hem in een kast op de overloop of in de berging als een dikke grijze buis. Twijfel je, stuur dan een foto van je gevel." },
      { v: "Waarom lekt het bij mij vooral bij een stortbui?", a: "Bij een gewone bui kan een uitloop met wat blad erin het water nog net aan. Bij een stortbui komt er in korte tijd veel meer water. Dan loopt de goot bij de uitloop vol en zoekt het water een weg langs de aansluiting naar binnen. Bij een huis met een regenpijp binnen is het daarom extra slim om de uitloop voor de winter leeg te laten maken." },
      { v: "Mijn goot in Oss lekt bij één naad of in een hoek. Moet de hele goot eruit?", a: "Meestal niet. Druppelt het steeds op dezelfde plek, onder een naad, een hoek of het eindstuk, dan zit het lek vaak alleen daar. Bij een zinken goot soldeer ik zo'n naad opnieuw, bij een kunststof goot vervang ik de verbinding of het hoekstuk. Is de goot op meer plekken lek, doorgeroest of bros, dan zeg ik eerlijk dat een nieuwe goot slimmer is. Maak tijdens een bui vanaf de straat een foto van de plek waar het druppelt en stuur die via WhatsApp. Dan hoor je vooraf wat het kost." },
    ],
  },
  // Dakreparatie in Veghel (Search Console: dakreparatie veghel 22 vertoningen op plek 74, dakpannen veghel 8, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage- en gootpagina van Veghel
  {
    plaats: "veghel",
    dienst: "dakreparatie",
    hook: "In Bolken en de andere woonwijken van Veghel staan veel rijtjeshuizen met een pannendak. Zit daar onder de onderste rij pannen geen vogelwering, dan kruipen mussen en spreeuwen er in het voorjaar onder, en met hun nesten duwen ze die pannen een stukje omhoog. Na een paar jaar liggen ze niet meer goed in de sluiting, en bij harde wind waait de regen eronder. Je merkt het eerst aan gekrabbel boven je slaapkamer en later aan een natte plek laag op zolder. Buiten het broedseizoen leg ik de pannen weer goed, vervang ik wat gebroken is en zet ik er kunststof vogelwering onder. In een rij waar de buren hun dak al hebben laten vernieuwen, liggen op de grens twee soorten pannen naast elkaar. Daar zit een overgang die het water moet tegenhouden, en juist die gaat na een paar jaar nogal eens open. Ik kijk dan aan beide kanten, en zit het aan de kant van de buren, dan zeg ik dat eerlijk. Je hoort vooraf wat het kost.",
    faq: [
      { v: "Ik hoor vogels onder mijn dakpannen. Is dat erg?", a: "Niet meteen, maar laat het niet jaren zitten. Met hun nesten duwen vogels de onderste pannen omhoog, en dan kan de regen eronder waaien. Zitten er in het voorjaar of de zomer jongen in het nest, dan wacht ik tot ze uitgevlogen zijn. Daarna leg ik de pannen recht en sluit ik de rij onder de pannen af met kunststof vogelwering. Je hoort vooraf wat het kost." },
      { v: "De buren hebben hun dak laten vernieuwen. Moet ik dan iets aan de overgang laten doen?", a: "Niet per se. Op de grens liggen nu twee soorten pannen naast elkaar, met een overgang die het water moet tegenhouden. Is die netjes gemaakt, dan hoeft er niets. Kijk na een flinke bui op zolder of het droog blijft bij de muur met de buren. Zie je daar een natte plek, of ligt er een pan scheef op de grens, stuur me dan een foto. Dan kijk ik aan beide kanten, en zit het aan de kant van de buren, dan zeg ik dat eerlijk. Je hoort vooraf wat het kost." },
    ],
  },
  // Schoorsteen vegen in Veghel (Search Console: schoorsteenveger veghel 21 vertoningen op plek 53, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de andere Veghel-pagina's
  {
    plaats: "veghel",
    dienst: "schoorsteen-vegen",
    hook: "In de langgevelboerderijen en vrijstaande huizen in Erp, Eerde en Zijtaart staat nogal eens een houtkachel in de oude deel of in de woonkamer. Stook je daar vaak op, dan zet zich elk stookseizoen een laag roet in het kanaal af. Stook je met hout dat nog niet goed droog is, dan wordt dat een glimmende, teerachtige laag, en die kan vlam vatten. Daarom veeg ik het hele kanaal en kijk ik meteen of er iets in zit, zoals een nest van kauwen. Bovenop kijk ik naar de kap en het lood rond de schoorsteen, want die zie je vanaf de grond slecht. Heb je in Veghel alleen een cv-ketel met een eigen afvoerpijp door het dak, dan hoeft er niets geveegd te worden: die laat je nakijken door je installateur. Twijfel je wat je hebt, stuur dan een foto van je kachel of haard en van de schoorsteen buiten.",
    faq: [
      { v: "Mijn kachel in de oude boerderij is jaren niet gebruikt. Mag ik hem zomaar weer aansteken?", a: "Laat het kanaal eerst vegen en nakijken voordat je hem weer aansteekt. In een kanaal dat jaren stil heeft gestaan, zit vaak een nest van kauwen, losgekomen roet of een stuk steen, en dan trekt de kachel slecht of komt de rook binnen. Ik veeg het kanaal, kijk of het helemaal vrij is en zeg eerlijk als er aan de schoorsteen zelf iets moet gebeuren. Stuur gerust eerst een foto van je kachel en van de schoorsteen buiten." },
    ],
  },
  // Daklekkage in Helmond (Rens 19-10: ja, ook bij spoed en lekkage in Helmond; Search Console: lekdetectie helmond 15, lekkage helmond 12, dakreparatie helmond 12 en daklekkage helmond 9 vertoningen, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "helmond",
    dienst: "daklekkage",
    hook: "In Dierdonk, Brouwhuis en Rijpelberg, wijken die tussen de jaren '70 en '90 zijn gebouwd, gaat bij veel huizen een afvoerpijp van de ventilatie of de cv-ketel door het pannendak. Rond zo'n pijp zit een rubberen of loden kraag op een speciale pan. Na dertig, veertig jaar droogt die kraag uit of scheurt hij, en dan loopt het water bij een flinke bui langs de pijp naar binnen. Druppelt het rond de pijp ook als het droog en koud is, dan is het vaak condens in de pijp zelf, en dan valt er aan het dak niets te repareren. In de oudere straten rond het centrum, uit de tijd dat Helmond een stad van textielfabrieken was, kijk ik bij een lek eerst naar het lood rond de schoorsteen en naar de goot. Tussen Den Bosch en Helmond zit zo'n 40 minuten rijden. Met een foto van de natte plek en van die kant van je dak zie ik vaak al waar ik moet zoeken, en dan hoor je eerlijk wanneer ik kan komen.",
    faq: [
      { v: "Wat doe ik met het lek tot je er bent?", a: "Zet een emmer met een doek erin onder de druppel, haal spullen weg en leg handdoeken neer. Bolt het plafond op of zit er een lamp in de natte plek, ga er dan niet onder staan en laat die lamp uit. Ga zelf niet het dak op, zeker niet bij regen of wind. Maak foto's van de natte plek, want die heb je ook nodig voor je verzekering. Op de spoedpagina lees je wat je verder meteen kunt doen." },
      { v: "Doe je in Helmond ook lekdetectie?", a: "Ja, al heb ik daar meestal geen apparaten voor nodig. Bij een pannendak vind ik een lek meestal door van buiten naar de pannen, het lood en de doorvoeren te kijken en op zolder het spoor van het water te volgen. In Dierdonk, Brouwhuis en Rijpelberg kijk ik daarbij eerst naar de kraag rond de afvoerpijp door het dak. Lukt het zo niet, bijvoorbeeld bij een plat dak met isolatie eronder, dan kan gericht meetwerk helpen, en dan hoor je vooraf wat dat kost. Het zoeken hoort bij de reparatie: je hoort één vaste prijs voor opsporen en dichten samen." },
    ],
  },
  // Goten reinigen in Veghel (Search Console: dakgoot schoonmaken veghel 21 vertoningen op plek 68, nog geen eigen pagina; gootpiek in november), met andere lokale inhoud dan plaatsen.ts en de andere Veghel-pagina's
  {
    plaats: "veghel",
    dienst: "goten-reinigen",
    hook: "Op een deel van de goten in Veghel ligt een kunststof rooster of een borstel over de hele lengte, bedoeld om het blad tegen te houden. Grof blad blijft er dan bovenop liggen, maar zaadjes, gruis van de pannen en losgekomen mos zakken er gewoon doorheen. Daaronder slibt de goot langzaam dicht, en omdat je van beneden alleen het rooster ziet, lijkt hij schoon. Ik haal het rooster of de borstel eruit, maak de goot eronder leeg, maak de uitloop naar de regenpijp vrij en leg alles daarna weer terug. Bij veel twee-onder-een-kappers en vrijstaande huizen in Mariaheide en de andere kerkdorpen staat naast het huis een garage of berging met een eigen, lage goot. Nogal eens komt de regenpijp van het grote dak daarop uit. Bij een flinke bui krijgt die kleine goot dan het water van twee daken, en zit hij een beetje vol, dan loopt hij over tegen de muur. Die lage goot neem ik dus ook mee. Zie ik iets aan je pannen of het lood, dan hoor je dat meteen.",
    faq: [
      { v: "Bij mij komt de regenpijp van het grote dak uit op de goot van de garage. Is dat erg?", a: "Niet meteen, maar die kleine goot krijgt bij een bui dan het water van twee daken. Zit hij een beetje vol, dan loopt hij over tegen de muur van je garage of je huis. Houd hem dus goed leeg, zeker na de bladval. Loopt hij toch steeds over, dan kan de regenpijp van het grote dak vaak een stuk langer worden gemaakt, langs de garage naar beneden. Waar het water dan heen gaat, naar het riool of de tuin, bekijken we samen ter plekke. Stuur me een foto van de garage met de regenpijp, dan hoor je vooraf wat het kost." },
      { v: "Onder het rooster in mijn goot blijkt het zink lek. Kun je de goot van binnen coaten?", a: "Vaak wel. Onder een rooster of borstel blijft vuil lang liggen, en juist daar wordt een zinken goot na jaren dun. Haal ik het rooster eruit en is de goot op een paar plekken lek of dun, terwijl hij nog goed hangt, dan kan ik hem van binnen coaten. Eerst maak ik de goot schoon en laat ik hem drogen, daarna breng ik aan de binnenkant een laag aan die hem weer waterdicht maakt. Zit het lek in één naad, dan soldeer ik die liever. Is het zink op veel plekken op, dan is een nieuwe goot beter. Je hoort eerst wat ik zie en wat het kost, en dan beslis jij." },
    ],
  },
  // Dakreparatie in Oisterwijk (Search Console: dakreparatie oisterwijk 17 vertoningen op plek 33, dakdekker oisterwijk 65 op plek 27, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, goot-, dakgoot- en stormpagina van Oisterwijk
  {
    plaats: "oisterwijk",
    dienst: "dakreparatie",
    hook: "In de lanen van Oisterwijk staan veel huizen met hoge bomen vlak naast het dak. Hangt er een tak over de pannen, dan schuurt die bij elke windvlaag heen en weer. Na een paar stormen is de toplaag van de pannen eronder weggesleten, of zijn ze een stukje uit de sluiting geduwd, en dan waait de regen eronder. Bij een deel van de oude villa's groeit klimop of wilde wingerd tegen de gevel omhoog. Komt die over de dakrand, dan kruipen de ranken onder de onderste pannen en tillen ze die langzaam op. Ik haal de ranken onder de pannen vandaan, leg de pannen weer goed in de sluiting en vervang wat gebroken is. De boom of de klimop zelf laat je snoeien door een hovenier of boomverzorger, anders zit je over een paar jaar weer met hetzelfde. Vanaf de straat zie je vaak al waar een pan hoger ligt dan de rest. Stuur me een foto via WhatsApp, dan zeg ik wat het wordt.",
    faq: [
      { v: "Hoe zie ik of er klimop onder mijn dakpannen zit?", a: "Kijk vanaf de straat naar de onderste rij pannen boven de goot en naar de rand van het dak bij de gevel. Steken er ranken of blaadjes onder de pannen uit, of ligt een pan daar net hoger dan de rest, dan zit de klimop eronder. Op zolder zie je soms groene ranken tussen de pannen door komen. Trek ze er niet zelf vanaf de ladder uit, want dan trek je de pannen mee. Stuur me liever een foto." },
      { v: "Mijn huis staat in de schaduw van de bomen. Gaan mijn pannen daardoor sneller kapot?", a: "Ze slijten in de regel wel sneller. Een dak in de schaduw blijft na een bui langer nat, en dan groeien er mos en groene aanslag op. Een oude pan die vol water zit, kan bij vorst gaan schilferen of een haarscheur krijgen. Kijk na een vorstperiode of er schilfers of stukjes pan in je goot liggen. Een kapotte pan vervang ik door een passende, en zit er dik mos op je dak, dan kan dat er in dezelfde keer af. Je hoort vooraf wat het kost." },
    ],
  },
  // Dakreparatie in Rosmalen (Search Console: dakdekker rosmalen 144 vertoningen op plek 59, dakwerken rosmalen 20, dakreparatie rosmalen 9, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, goot- en stormpagina van Rosmalen
  {
    plaats: "rosmalen",
    dienst: "dakreparatie",
    hook: "In Rosmalen laten steeds meer mensen met een ouder huis een warmtepomp of airco plaatsen. Soms gaan de leidingen van de buitenunit dan door het dak naar binnen, door een pan waar een gat in is gemaakt. Is die doorvoer niet goed afgewerkt, dan loopt de regen langs de leiding naar binnen, en dat merk je vaak pas weken later aan een natte plek op zolder. Ik vervang zo'n pan dan door een passende doorvoerpan, zodat het water er weer overheen loopt. Bij de hoekhuizen aan het eind van een rij, zoals je ze in Sparrenburg en Molenhoek veel ziet, ligt langs de zijkant van het dak een houten windveer. Na zoveel jaren laat die los of wordt het hout zacht, en dan liggen de pannen erboven niet meer stevig en gaan ze bij harde wind schuiven. Die pannen leg ik terug en zet ik vast. Is het hout eronder rot, dan zeg ik dat eerlijk, want dat moet eerst hersteld worden. Je hoort vooraf wat het kost.",
    faq: [
      { v: "Er is net een warmtepomp of airco geplaatst en nu lekt het op zolder. Wie lost dat op?", a: "Is de leiding pas door het dak gegaan, neem dan eerst contact op met de installateur, want dan hoort hij het in de regel zelf op te lossen. Komt de installateur niet, of zit de doorvoer er al langer, dan kijk ik waar het water binnenkomt en maak ik de doorvoer weer dicht. Stuur me een foto van de leiding op zolder en, als het lukt, van die plek op het dak vanaf de straat. Je hoort vooraf wat het kost." },
      { v: "De windveer van mijn hoekhuis in Rosmalen zit los of is rot. Vervang je die ook?", a: "Ja. Zit een goede windveer alleen los, dan zet ik hem weer stevig vast. Is het hout zacht, gespleten of gebroken, dan vervang ik hem. Daarna leg ik de pannen langs de zijkant van het dak weer goed en zet ik ze vast, zodat ze bij harde wind niet meer gaan schuiven. Zie ik dat ook de uiteinden van de panlatten eronder rot zijn, dan hoor je dat voordat ik verder ga. Stuur een foto van de zijkant van je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost." },
    ],
  },
  // Dakgoot repareren of vervangen in Waalwijk (Search Console: dakgoot reparatie waalwijk 11, dakgoot lekkage waalwijk 11 en dakgoot vernieuwen waalwijk 10 vertoningen op plek 73 tot 78, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkage- en dakreparatiepagina van Waalwijk
  {
    plaats: "waalwijk",
    dienst: "dakgoot-vervangen",
    hook: "Bij veel oudere huizen in Waalwijk, zoals in Besoyen en Baardwijk, loopt de regenpijp onderaan de gevel de grond in en gaat het water onder de bestrating door naar het riool. Zakt die aansluiting na veel jaren, of zitten er wortels of zand in, dan kan het water bij een bui niet snel genoeg weg. De pijp staat dan vol, en de goot loopt over bij de uitloop, terwijl de goot zelf nergens lek is. Dat kijk ik eerst na, voordat ik over een nieuwe goot begin. Zit het in de aansluiting op je eigen terrein, vlak onder de tegels, dan kan ik die vaak opnieuw aansluiten. Zit het dieper in het riool, dan zeg ik eerlijk dat je een rioolbedrijf nodig hebt. Druppelt je goot na een vorstperiode op één plek, dan heeft er vaak water in gestaan dat is bevroren. IJs zet uit en duwt een naad of hoekstuk open, en dat zie je pas als het dooit. Dan herstel ik die plek en hang ik de goot weer op afschot, zodat er geen water meer in blijft staan.",
    faq: [
      { v: "Mijn goot loopt over bij een bui, maar hij is leeg. Hoe kan dat?", a: "Dan kan het water vaak niet goed weg via de regenpijp. Kijk tijdens een bui onderaan de pijp: komt er bijna niets uit terwijl de goot overloopt, dan zit de pijp ergens dicht of loopt de aansluiting in de grond niet goed door. Stuur me een foto van de goot en van de onderkant van de pijp via WhatsApp, dan zeg ik wat ik denk dat het is." },
      { v: `Kom je voor een lekkende goot ook in Sprang-Capelle en Waspik?`, a: `Ja. Sprang-Capelle en Waspik horen net als Waalwijk bij de gemeente Waalwijk, en ook daar repareer of vervang ik goten. In de oude dorpskernen hangen nog veel zinken goten, en aan de boerderijen en vrijstaande huizen aan de rand van de dorpen hangt vaak een lange goot met maar één regenpijp. Lekt zo'n goot op één naad of hoek, dan herstel ik vaak alleen die plek. Stuur me via WhatsApp een foto van de goot vanaf de straat, dan zie ik vaak al wat er speelt. Je hoort vooraf wat het kost.` },
    ],
  },
  // Dakgoot repareren of vervangen in Uden (Search Console: dakgoot lekkage uden 14 vertoningen op plek 32, dakgoot vernieuwen uden 8, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de lekkagepagina van Uden
  {
    plaats: "uden",
    dienst: "dakgoot-vervangen",
    hook: "In Bitswijk, Hoenderbos en de andere wijken van Uden uit de jaren '70 en '80 hangt aan veel huizen nog de eerste kunststof goot. Bij een deel van die goten zijn de stukken destijds aan elkaar gelijmd. Na zo'n veertig jaar zon en vorst wordt zo'n lijmnaad bros, en dan gaat de goot lekken bij een naad of een hoek. Vaak is het genoeg om dat ene stuk te vervangen. Is het kunststof zelf hard en verkleurd en breekt het als je erop drukt, dan zeg ik eerlijk dat een nieuwe goot slimmer is. Hangt de goot door omdat een beugel verbogen of doorgeroest is, dan hang ik hem op nieuwe beugels weer op afschot naar de regenpijp. Rond de Markt hangen aan oudere panden nog zinken goten, en daar kijk ik eerst of een naad of de uitloop te herstellen is. Stuur me via WhatsApp een foto van de goot vanaf de straat, het liefst tijdens of vlak na een bui.",
    faq: [
      { v: "Mijn kunststof goot lekt bij een naad. Moet de hele goot eruit?", a: "Meestal niet. Lekt hij op één naad of hoek en is het kunststof verder nog goed, dan vervang ik alleen dat verbindingsstuk of dat stuk goot. Is het kunststof over de hele lengte bros geworden, dan houdt een nieuwe naad het vaak niet lang, en dan zeg ik eerlijk dat een nieuwe goot slimmer is. Uden is zo'n 25 minuten rijden vanaf Den Bosch. Je hoort vooraf wat het kost." },
      { v: "Mijn goot loopt boven de voordeur over, maar hij zit niet vol. Hoe kan dat?", a: "Dan hangt hij daar vaak niet meer goed op afschot. Bij veel huizen in Bitswijk en Hoenderbos hangt de goot al zo'n veertig jaar, en dan is er nogal eens een beugel verbogen of doorgeroest. Op die plek zakt de goot een stukje, het water blijft er staan en bij een flinke bui loopt het over de rand. Dan zet ik er nieuwe beugels onder en hang ik de goot zo dat het water weer naar de regenpijp loopt. Stuur me tijdens of vlak na een bui een foto vanaf de straat, dan zie ik waar hij zakt. Je hoort vooraf wat het kost." },
    ],
  },
  // Goten reinigen in Waalwijk (Search Console: dakgoot schoonmaken waalwijk 10 vertoningen op plek 85, plaatspagina Waalwijk 443 vertoningen, nog geen eigen pagina; gootpiek in november), met andere lokale inhoud dan plaatsen.ts en de andere Waalwijk-pagina's
  {
    plaats: "waalwijk",
    dienst: "goten-reinigen",
    hook: "Achter veel oudere huizen in Besoyen en Baardwijk staat een aanbouw, schuur of oude werkplaats met een plat dak. Het water van dat dak loopt via een afvoer in de rand naar een regenpijp of naar de goot van het huis. Ligt er grind op dat platte dak, dan spoelen er bij elke flinke bui steentjes mee. Die blijven samen met het blad hangen in de afvoer en bij de uitloop naar de regenpijp, en dan blijft het water op het platte dak staan of loopt de goot over, terwijl je van beneden niets ziet. Wacht met leegmaken niet tot het gaat vriezen: nat blad met grind bevriest in de afvoer tot een harde prop, en dan kan het smeltwater nergens heen. Ik maak de goten van begin tot eind leeg, haal de afvoer van het platte dak vrij en maak de uitloop naar de regenpijp schoon. Loopt je goot over terwijl hij leeg is, dan zit het vaak lager, in de regenpijp of in de aansluiting in de grond, en dat zeg ik je dan eerlijk.",
    faq: [
      { v: "Er ligt grind op het platte dak van mijn schuur. Moet dat eraf?", a: "Meestal niet. Het grind ligt er vaak juist om de dakbedekking te beschermen en op zijn plek te houden. Wel moet de afvoer vrij blijven. Vaak zit er een korf of rooster op de afvoer die het grind tegenhoudt. Ontbreekt die of zit hij vol, dan spoelen er steentjes de afvoer in. Bij het leegmaken van je goten kijk ik daar ook naar. Je hoort vooraf wat het kost." },
    ],
  },
  // Dakrenovatie in Waalwijk (Search Console: dakrenovatie waalwijk 35 vertoningen op plek 77, dakbedekking waalwijk 34, dakonderhoud waalwijk 21, nog geen eigen pagina), met andere lokale inhoud dan plaatsen.ts en de andere Waalwijk-pagina's
  {
    plaats: "waalwijk",
    dienst: "dakrenovatie",
    hook: "Waalwijk is na de oorlog flink gegroeid, en rond het oude centrum staan veel rijtjeshuizen en twee-onder-een-kappers uit de jaren '50 en '60. Op een deel van die daken liggen nog de eerste betonpannen. Na zoveel jaren zon, regen en vorst is de toplaag versleten, nemen ze water op en groeit er mos tussen, en de nok ligt er vaak nog in specie die afbrokkelt. Is er één pan kapot, dan is een reparatie genoeg. Zie je op veel plekken tegelijk gescheurde pannen, mos en brokjes specie in de goot, dan is het vaak slimmer om het dak in één keer aan te pakken dan elk jaar een stukje te laten repareren. Bij een renovatie vervang ik de pannen die op zijn en laat ik de goede liggen, leg ik de nok opnieuw en vernieuw ik het lood waar dat nodig is. De goten neem ik meteen mee. Ik kom eerst kijken, en je hoort vooraf de vaste prijs.",
    faq: [
      { v: "Kan ik mijn dak in delen laten renoveren?", a: "Ja, dat kan. Vaak is één dakvlak er slechter aan toe dan de rest, bijvoorbeeld de kant op het noorden, waar het mos het langst nat blijft, of de achterkant onder de bomen. Dan kun je eerst dat dakvlak laten doen en de rest later. Bij een rijtjeshuis kijk ik ook naar de overgang naar het dak van de buren, zodat die dicht blijft. Je hoort vooraf wat elk deel kost." },
    ],
  },
  // Daklekkage in Wijchen (Rens 23-10: ja, ook bij spoed en lekkage in Wijchen; Search Console: plaatspagina Wijchen 75 vertoningen, dakdekker wijchen 17, nog geen eigen lekkagepagina), met andere lokale inhoud dan plaatsen.ts
  {
    plaats: "wijchen",
    dienst: "daklekkage",
    hook: "In Wijchen-Zuid en de andere wijken uit de jaren '70 en '80 hebben veel rijtjeshuizen en twee-onder-een-kappers een dakraam in het schuine dak en een berging of aanbouw met een plat dak achter het huis. Lekt het daar, dan kijk ik eerst naar het gootstuk onder het dakraam en naar de strook lood of zink waar het platte dak tegen de achtergevel omhoog loopt. In Niftrik en Batenburg, aan de Maas, staan oude dijkhuizen en boerderijen met een groot pannendak. Over de rivier en de uiterwaarden heeft de wind daar vrij spel, en na een storm gaat een pan langs de rand van het dak daar eerder omhoog dan in een straat vol huizen. Bij een oude schoorsteen zit een lek vaak in het lood eromheen. Wijchen is zo'n 25 minuten rijden vanaf Den Bosch. Stuur me eerst een foto van de natte plek en van die kant van je dak via WhatsApp, dan zie ik vaak al waar ik moet zoeken.",
    faq: [
      { v: "Het lekt achter in mijn huis. Komt het van het dakraam of van het platte dak van de aanbouw?", a: "Kijk waar het nat wordt. Zit de natte plek boven, op het schuine plafond of op de muur onder het dakraam, dan komt het water meestal van het gootstuk of het lood rond het raam. Zit hij beneden in de aanbouw, vlak langs de muur van het huis, dan zit het vaker in de aansluiting van het platte dak op de gevel. Stuur me een foto van de natte plek binnen en, als het lukt, uit een raam boven een foto van het dak van de aanbouw." },
      { v: "Mijn huis staat aan de dijk bij Niftrik of Batenburg. Waar kijk ik naar na een storm?", a: "Kijk eerst naar de kant van je dak die naar de rivier ligt. Daar pakt de wind het hardst, en daar gaan pannen langs de rand en nokvorsten het eerst schuiven. Ga niet zelf het dak op, maar kijk vanaf de dijk of de straat of er iets scheef ligt of mist. Zie je iets, of is het binnen nat, stuur me dan een foto via WhatsApp. Dan hoor je wanneer ik kan komen." },
      { v: "Kom je bij een lek ook in Nijmegen of Beuningen?", a: "Ja. Nijmegen en Beuningen liggen naast Wijchen, en ook daar kom ik bij een lekkend dak. Voor mij is het wel een stukje verder rijden dan Wijchen zelf. Stuur me eerst een foto van de natte plek via WhatsApp en zet erbij in welke wijk of welk dorp je woont, dan hoor je eerlijk wanneer ik kan komen." },
    ],
  },
  // Dakreparatie in Den Bosch (Search Console: spoed dakreparatie 112 vertoningen op plek 22, dak repareren 52, nog geen eigen pagina voor de thuisbasis), met andere lokale inhoud dan plaatsen.ts en de lekkage-, goot-, dakgoot- en stormpagina van Den Bosch
  {
    plaats: "den-bosch",
    dienst: "dakreparatie",
    hook: "In de Graafsewijk en in Den Bosch-Zuid staan veel huizen uit de jaren '20 en '30 met een steil pannendak. Op een deel daarvan liggen nog blauwgrijze, gesmoorde pannen, of oude rode pannen die niet meer gemaakt worden. Breekt er een, dan zoek ik eerst een pan die in vorm en kleur past, want op zo'n dak valt een afwijkende pan meteen op. In Maaspoort en Empel, die in de jaren '80 en '90 zijn gebouwd, liggen langs de zijkant van het dak vaak gevelpannen: pannen met een omgezette rand die over de houten windveer valt. Die zitten met een schroef of een haak vast. Is die na zoveel jaren losgeroest of afgebroken, dan wipt de pan bij harde wind omhoog en ligt hij na de storm scheef of in de tuin. Ik zet hem weer vast en vervang wat gebroken is. Den Bosch is mijn thuisbasis, dus vaak ben ik al in de buurt. Stuur me een foto vanaf de straat via WhatsApp, dan zie ik vaak al wat ik mee moet nemen.",
    faq: [
      { v: "Hoe zie ik of de pannen langs de zijkant van mijn dak los zitten?", a: "Kijk vanaf de straat of de stoep aan de overkant naar de rand van je dak, boven de zijgevel. Ligt een gevelpan hoger dan de rest, staat hij een stukje open of zie je een gat in de rij, dan zit hij los. Hoor je bij harde wind getik of geklapper aan die kant van het huis, dan kan dat ook een losse gevelpan zijn. Ga niet zelf op een ladder staan, maar stuur me een foto via WhatsApp. Je hoort vooraf wat het kost." },
      { v: "Ik huur mijn huis, bijvoorbeeld in de Kruiskamp of Boschveld. Kun je dan een pan bij mij vervangen?", a: "Huur je, dan is het dak in de regel de zaak van je verhuurder. Meld een kapotte pan of een lek daar eerst, want die regelt de reparatie en betaalt hem meestal ook. Zet tot die tijd een emmer onder een druppel en maak foto's van de natte plek. Is het huis van jezelf, stuur me dan een foto van je dak vanaf de straat via WhatsApp, dan hoor je wanneer ik kan komen." },
    ],
  },
  // Stormschade in Waalwijk (plaatspagina Waalwijk 450 vertoningen, de meeste van alle plaatsen; winterstormen), met andere lokale inhoud dan plaatsen.ts en de andere Waalwijk-pagina's
  {
    plaats: "waalwijk",
    dienst: "stormschade",
    hook: "Waalwijk ligt aan de rand van de Langstraat, met naar het noorden het open land richting de Bergsche Maas. Bij een storm uit het westen of noordwesten heeft de wind daar vrij spel. Achter veel oudere huizen in Besoyen en Baardwijk staat een aanbouw, schuur of oude werkplaats met een plat dak. Zo'n dak pakt de wind bij een storm aan de rand: de daktrim laat los en de dakbedekking klapt een stukje omhoog, en daarna loopt de regen er zo onder. Kijk na een storm daarom ook vanuit een raam boven naar dat platte dak. Zie je een rand die omhoog staat of grind dat van het dak is geblazen, maak er dan een foto van. In Sprang-Capelle en Waspik staan veel vrijstaande huizen en boerderijen met een breed pannendak, en daar zitten losse pannen na een storm meestal langs de rand van het dak en bij de nok. Ga zelf niet het dak op. Is er een open plek, dan dek ik die eerst af, zodat het binnen droog blijft, en daarna volgt de nette reparatie.",
    faq: [
      { v: "De rand van het platte dak op mijn schuur staat na de storm omhoog. Is dat erg?", a: "Laat het niet te lang zitten. Staat de daktrim of de dakbedekking aan de rand een stukje omhoog, dan kan de wind er bij de volgende windstoot verder onder en scheurt er een groter stuk los. En de regen loopt er nu al onder. Ga er niet zelf op, zeker niet als het nog waait. Maak vanuit een raam of vanaf de grond een foto en stuur die via WhatsApp. Dan zeg ik wat er nodig is, en je hoort vooraf wat het kost." },
    ],
  },
  // Stormschade in Veghel (Search Console: dakdekker veghel 125 vertoningen op plek 75, nog geen stormpagina; stormpagina's per plaats komen hoog binnen zodra er op gezocht wordt), met andere lokale inhoud dan plaatsen.ts en de andere Veghel-pagina's
  {
    plaats: "veghel",
    dienst: "stormschade",
    hook: "Rond Veghel ligt veel open land, en in de kerkdorpen en het buitengebied staan boerderijen en vrijstaande huizen met een breed pannendak waar de wind bij een storm vol op staat. Daar vind ik na een storm vaak opgetilde of losse pannen langs de zijkant van het dak, bij de gevel, en soms een nokvorst die is gaan schuiven. In de rijtjes en twee-onder-een-kappers uit de jaren '70 en '80 steekt bij veel huizen een pijp van de ventilatie boven de pannen uit, met een kap erop. Die kap vangt veel wind. Staat hij na een storm scheef of is hij weg, dan kan ook de kraag rond de pijp gescheurd zijn, en dan loopt bij de volgende bui het water langs de pijp naar binnen. Kijk na een storm vanaf de straat of alles nog recht staat, en ga zelf niet het dak op. Stuur me een foto via WhatsApp. Kan het niet meteen netjes, dan zorg ik eerst dat het binnen droog blijft, en de foto's die ik maak kun je voor je verzekering gebruiken.",
    faq: [
      { v: "Na de storm staat de kap op de ventilatiepijp op mijn dak scheef. Is dat erg?", a: "Het kan, ook als het binnen nog droog is. De kap houdt de regen uit de pijp, en de kraag eromheen leidt het water over de pannen. Is de kap gaan schuiven, dan heeft de wind vaak ook aan die kraag getrokken. Kijk op zolder bij de plek waar de pijp door het dak gaat: zie je daar na een bui natte plekken op het hout of de folie, dan komt er water langs. Ga zelf niet het dak op. Stuur me via WhatsApp een foto van de pijp vanaf de straat en van die plek op zolder. De pijp en de kraag op het dak maak ik weer dicht. Gaat het om de ventilatiebox binnen, dan is dat werk voor je installateur. Je hoort vooraf wat het kost." },
    ],
  },
  // Dakgoot repareren of vervangen in Rosmalen (Search Console: dakdekker rosmalen 154 vertoningen op plek 61, daklekkage rosmalen 48; nog geen gootpagina), met andere lokale inhoud dan plaatsen.ts en de lekkage-, goot-, storm- en dakreparatiepagina van Rosmalen
  {
    plaats: "rosmalen",
    dienst: "dakgoot-vervangen",
    hook: "In Sparrenburg, Hondsberg en de andere wijken uit de jaren '60 en '70 hangt aan een deel van de rijtjeshuizen nog een zinken goot op houten gootklossen: de blokjes hout die onder de rand van het dak uitsteken. Die klossen zitten al zo'n vijftig jaar in weer en wind. Laat de verf los, dan trekt er water in het hout, en waar een klos zacht wordt, zakt de goot een stukje. Op die plek blijft na een bui water staan, en daar slijt het zink het snelst. Bij andere rijtjes is de oude zinken goot al eens vervangen door kunststof. Kunststof is minder stijf dan zink. Zitten de beugels te ver uit elkaar, dan buigt zo'n goot na een paar warme zomers tussen de beugels door, en loopt hij bij een flinke bui over op de laagste plek. Vaak is er dan geen nieuwe goot nodig: ik hang hem opnieuw op afschot, met beugels op de goede afstand, en herstel de naad die lekt. Is het hout van een klos zacht, dan hoor je dat van me voordat ik verder ga.",
    faq: [
      { v: "Hoe zie ik of de houten klossen onder mijn goot nog goed zijn?", a: "Kijk vanaf de straat langs de goot. Bladdert de verf van een klos, zie je er een donkere plek of een scheur in, of hangt de goot op één plek een stukje lager dan ernaast, dan is die klos vaak nat of zacht geworden. Na een bui zie je het ook aan water dat op die plek in de goot blijft staan. Ga niet zelf op de ladder aan de goot trekken of in het hout prikken. Stuur me een foto via WhatsApp, dan zeg ik eerlijk of het bij de goot blijft of dat er eerst iets aan het hout moet gebeuren. Je hoort vooraf wat het kost." },
    ],
  },
  // Dak reinigen in Den Bosch (Search Console: dakreiniging den bosch 12 vertoningen op plek 23 zonder eigen pagina), met andere lokale inhoud dan plaatsen.ts en de andere Den Bosch-pagina's
  {
    plaats: "den-bosch",
    dienst: "dak-reinigen",
    hook: "In Den Bosch, officieel 's-Hertogenbosch, zit het meeste mos op de kant van het dak die op het noorden ligt en op daken onder de bomen. In de Muntel, de Vliert en Den Bosch-Zuid liggen op veel huizen uit de jaren '20 en '30 nog gebakken pannen. Daar groeit het mos vooral in de naden waar de pannen over elkaar liggen, precies waar het regenwater langs moet. In Maaspoort en Empel liggen vaker betonpannen uit de jaren '80 en '90. Die zijn na zoveel jaren ruw aan de bovenkant, en daar hechten mos en groene aanslag makkelijk op. Op beide soorten pannen werk ik voorzichtig, zodat de bovenlaag heel blijft. Zie ik bij het reinigen een gebroken pan of een pan die is gaan schuiven, dan hoor je dat meteen. Het mos dat loskomt, valt voor een deel in de goot, dus die maak ik daarna leeg.",
    faq: [
      { v: "Komt het mos na het reinigen weer terug?", a: "Op den duur wel. Mos groeit waar een dak lang nat blijft, en dat verandert niet doordat het schoon is. Op een dak in de volle zon duurt het jaren voordat er weer veel op zit, op de noordkant of onder de bomen gaat het sneller. Ik zeg je eerlijk wat ik bij jouw dak verwacht en of het zin heeft om het nu te laten doen. Je hoort vooraf wat het kost." },
      { v: "Mijn betonpannen zijn na het reinigen nog grijs en ruw. Is dat erg?", a: "Nee, dat is de bovenlaag die in de loop van de jaren slijt. Reinigen haalt het mos en de aanslag weg, maar maakt een oude pan niet nieuw. Zie ik pannen die echt op zijn, met scheuren of afgebrokkelde randen, dan zeg ik dat eerlijk en hoor je wat vervangen kost." },
    ],
  },
  // Schoorsteen vegen in Den Bosch (diensten/schoorsteen-vegen 75 vertoningen op plek 29, schoorsteenveger + plaats wordt gezocht; stookseizoen), met andere lokale inhoud dan plaatsen.ts, de Veghel-schoorsteenpagina en de andere Den Bosch-pagina's
  {
    plaats: "den-bosch",
    dienst: "schoorsteen-vegen",
    hook: "In de binnenstad van Den Bosch, officieel 's-Hertogenbosch, staan veel oude panden met een gemetselde schoorsteen waarin meerdere rookkanalen naast elkaar lopen. Vaak wordt er nog maar één gebruikt, voor een houtkachel of een open haard, en staat de schoorsteen op de muur met de buren. Ik veeg het kanaal dat bij jouw kachel of haard hoort, en kijk bovenop of de andere kanalen dicht zijn of open staan. In de Muntel, de Vliert en de Graafsewijk staat in een deel van de huizen uit de jaren '20 en '30 nog een open haard in de voorkamer. In de Kruiskamp en Boschveld hebben veel huizen uit de jaren '50 een eigen schoorsteen waar vroeger een kolenkachel op aangesloten zat. Wordt zo'n kanaal niet meer gebruikt en staat het bovenaan open, dan regent het erin, en dan kan er een kap of afdekplaat op. Bovenop kijk ik ook naar het lood rond de schoorsteen, want daar begint een lek vaak. Den Bosch is mijn thuisbasis, dus vegen plan ik hier makkelijk in.",
    faq: [
      { v: "Mijn schoorsteen staat op de muur met de buren. Veeg je dan ook hun kanaal?", a: "Ik veeg het kanaal dat bij jouw kachel of haard hoort. Stoken de buren ook, dan is het handig om het op dezelfde dag te doen, dan hoeft er maar één keer iemand bovenop. Ieder hoort vooraf wat het kost. Weet je niet welk kanaal van jou is, dan zoek ik dat bij het vegen uit." },
    ],
  },
  // Dakreparatie in Boxtel (Search Console: dakreparatie boxtel 14 vertoningen op plek 88, nog geen eigen pagina; daklekkage boxtel 59 vertoningen op plek 22), met andere lokale inhoud dan plaatsen.ts en de lekkage-, goot-, dakgoot- en stormpagina van Boxtel
  {
    plaats: "boxtel",
    dienst: "dakreparatie",
    hook: "In Selissen en Munsel staan veel rijtjeshuizen met houten kozijnen en een houten gootlijst, die om de paar jaar geschilderd worden. Heeft de schilder zijn ladder tegen de goot of de onderste rij pannen gezet, of is er iemand over het dak gelopen om bij een dakraam te komen, dan kan er een pan gescheurd of een stukje uit de sluiting geschoven zijn. Van beneden zie je dat bijna nooit, en je merkt het pas bij de eerste flinke bui, aan een natte plek laag op zolder. In Liempde en Esch staat bij veel boerderijen een schuur of stal naast het huis. Op zo'n schuur kijkt bijna niemand, en een gebroken pan blijft er soms jaren liggen, tot de panlatten eronder zacht zijn. Ik vervang de pannen die kapot zijn door pannen die erbij passen, en kijk meteen of het hout eronder nog goed is. Boxtel is zo'n 25 minuten rijden vanaf Den Bosch. Stuur me een foto vanaf de straat via WhatsApp, dan zie ik vaak al wat ik mee moet nemen.",
    faq: [
      { v: "Mijn kozijnen zijn net geschilderd en nu lekt het laag op zolder. Kan dat door de ladder komen?", a: "Dat kan. Stond de ladder tegen de goot of op de onderste rij pannen, dan kan een pan gescheurd zijn of een stukje omhoog zijn gekomen, en dan waait de regen er bij een bui onder. Kijk vanaf de overkant van de straat of er boven de goot een pan hoger ligt dan de rest of een hoekje mist. Op zolder zie je het als een natte plek vlak boven de vloer, achter het knieschot. Is het werk pas gedaan, meld het dan eerst bij de schilder. Stuur me daarna een foto van het dak en van de natte plek via WhatsApp. Je hoort vooraf wat het kost." },
      { v: "Op het dak van mijn schuur in Liempde ligt een kapotte pan. Moet dat meteen?", a: "Niet per se vandaag, maar laat het niet de winter over zitten. Onder een gat in een schuurdak worden de panlatten en het hout bij elke bui nat, en na een paar jaar zijn ze zacht. Dan moet er veel meer gebeuren dan één pan vervangen. Staan er spullen in de schuur, zet die dan droog. Ga zelf niet op het schuurdak staan, want oude panlatten kunnen breken. Stuur me een foto vanaf de grond. Je hoort vooraf wat het kost." },
    ],
  },
];
