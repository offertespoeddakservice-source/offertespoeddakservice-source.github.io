/**
 * Werkgebied — kern-plaatsen rond Den Bosch (fase 1).
 * Elke plaats wordt een eigen pagina /werkgebied/[slug] met lokale invulling,
 * zodat het GÉÉN dunne, identieke pagina's zijn (dat is juist de zwakte van de
 * landelijke concurrenten). Voeg later fase-2 plaatsen toe, gekoppeld aan de
 * A/B-buurten uit dak-flyer-tool/output/tracking.csv.
 */

export interface Plaats {
  slug: string;
  naam: string;        // "Rosmalen"
  lokaal: string;      // 1-2 zinnen echt lokaal (wijken/woningtype), uniek per plaats
  wijken: string[];    // herkenbare buurten/kernen voor lokale relevantie
  reistijd?: string;   // gevoel van nabijheid vanuit Den Bosch
  verweg?: boolean;    // rand van het werkgebied: geen spoedbelofte, klussen worden vooraf ingepland
  extra?: string;      // optioneel: een tweede, echt lokale alinea op de plaatspagina
  omschrijving?: string; // optioneel: eigen meta-omschrijving voor Google
  faq?: { v: string; a: string }[]; // optioneel: eigen vragen voor deze plaats, onder de vaste vragen op de plaatspagina
}

export const PLAATSEN: Plaats[] = [
  {
    slug: "rosmalen",
    naam: "Rosmalen",
    lokaal:
      "Veel jaren-'60 en '70 woningen met schuine pannendaken: precies het soort dak waar nokvorsten loslaten en goten dichtslibben.",
    wijken: ["Molenhoek", "De Groote Wielen", "Sparrenburg", "Hondsberg", "Maliskamp"],
    reistijd: "10 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Rosmalen en De Groote Wielen: lekkage bij de nok of een dakdoorvoer, volle goten en losse pannen. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "In De Groote Wielen zijn de huizen nog jong, maar daar liggen veel platte daken en daken vol zonnepanelen. Lekkage zie ik daar eerder bij een dakdoorvoer, een afvoer of de rand van een plat dak dan bij oude pannen. In de Maliskamp en rond het oude centrum staan meer vrijstaande huizen en twee-onder-een-kappers met een schoorsteen, en daar kijk ik bij een lek eerst naar het lood.",
    faq: [
      { v: "Mijn huis in De Groote Wielen is nog maar een paar jaar oud. Kan het dak dan al lekken?", a: "Dat kan, ook bij een jong huis. Is je huis pas een paar jaar oud, kijk dan eerst of de bouwer het lek nog moet oplossen. Valt het daar niet meer onder, stuur me dan een foto van de natte plek. Dan zeg ik eerlijk wat ik zie." },
      { v: "Kom je ook in Kruisstraat, Maliskamp en Hintham?", a: "Ja. Kruisstraat en de Maliskamp horen bij Rosmalen, en Hintham ligt tussen Rosmalen en de stad. Rosmalen hoort sinds 1996 bij de gemeente Den Bosch, en vanaf mijn thuisbasis ben ik er in zo'n tien minuten. Ik kom er voor dezelfde klussen als in de rest van Rosmalen: lekkage, goten, pannen en lood." },
      { v: "Kun je in Rosmalen ook een heel dakvlak vernieuwen, of alleen kleine reparaties doen?", a: "Ook een heel dakvlak. In Molenhoek en Sparrenburg liggen op een deel van de rijtjeshuizen nog de eerste pannen. Zijn die op veel plekken verweerd of gescheurd, en moet er elk jaar wel ergens iets gebeuren, dan is het vaak slimmer om dat dakvlak in één keer aan te pakken. Dat hoeft niet altijd het hele dak te zijn, want de voorkant en de achterkant slijten vaak niet even snel. In een rij kijk ik ook naar de aansluiting op de daken van de buren, zodat het op de grens dicht blijft. Ik kom eerst kijken en zeg eerlijk of een reparatie nog genoeg is. Je hoort vooraf de vaste prijs." },
      { v: "Kom je ook in Maren-Kessel, Kessel en Lithoijen?", a: "Ja. Die dorpen liggen tussen Rosmalen en Lith, aan de kant van de Maas, en horen bij de gemeente Oss. Vanuit Rosmalen ben je er zo. Ook daar gaat het meestal om een lek, een volle of lekkende goot, of pannen en lood die los zitten. App me een foto van wat je ziet, dan laat ik weten wanneer ik langs kan komen." },
    ],
  },
  {
    slug: "vught",
    naam: "Vught",
    lokaal:
      "Van vooroorlogse villa's tot naoorlogse rijtjes, vaak oudere daken met klassiek lood en keramische pannen die onderhoud vragen.",
    wijken: ["Vught-Noord", "Vught-Zuid", "Cromvoirt"],
    reistijd: "10 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Vught, Helvoirt en Cromvoirt: oud lood op villa's, goten vol blad en naalden, losse pannen na storm. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "Sinds 2021 hoort ook Helvoirt bij de gemeente Vught. Daar staan veel vrijstaande huizen en oude boerderijen met een breed pannendak, vaak met hoge bomen eromheen. Ook aan de bosrand bij de IJzeren Man en de Vughtse Heide staan veel huizen tussen dennen en eiken. Dennennaalden zijn fijn: ze glijden door een bladvanger heen en zetten de uitloop naar de regenpijp na een tijd dicht. Loopt je goot over terwijl er weinig blad in ligt, dan zit het vaak daar.",
    faq: [
      { v: "Kom je ook in Helvoirt en Cromvoirt?", a: "Ja. Cromvoirt hoort bij Vught, en Helvoirt sinds 2021 ook. Allebei liggen ze op zo'n kwartier rijden van Den Bosch." },
      { v: "Moet het oude lood op mijn villa helemaal vervangen worden?", a: "Niet altijd. Oud lood kan nog jaren mee als het goed aansluit op de muur of de schoorsteen. Is het op een paar plekken gescheurd of los, dan vervang ik alleen die stukken. Je hoort vooraf wat het kost." },
      { v: "Kun je het dak van mijn oude villa in Vught een keer helemaal nakijken?", a: "Ja, dat doe ik met de Dak-APK: ik loop je hele dak na en je krijgt een rapport met foto's. Bij de vooroorlogse villa's in Vught kijk ik vooral naar het lood rond de schoorsteen en langs de muren, naar de kilgoten en naar de hoekvorsten op een schilddak, want daar begint een lek op zulke daken meestal. Zo weet je wat nu moet gebeuren en wat nog even kan wachten." },
      { v: "Ben je een groot dakdekkersbedrijf, of kom je zelf naar Vught?", a: "Spoed Dak Service is geen groot bedrijf met een callcenter. Je krijgt mij aan de lijn, ik kom zelf kijken in Vught, Helvoirt of Cromvoirt en ik ben je vaste aanspreekpunt, van de eerste foto tot de rekening. Bij de oudere villa's kijk ik dan meteen naar het lood, de kilgoten en de goten, zodat je in één keer hoort wat er speelt. Je hoort vooraf de vaste prijs." },
      { v: "Het lekt bij mij in Vught. Wat doe ik nu, en hoe snel kun je komen?", a: "Zet een emmer onder de druppel, leg er een handdoek onder en haal spullen weg die nat kunnen worden. Zit de natte plek bij een lamp of stopcontact, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op. Maak daarna een foto van de natte plek en, als dat veilig kan, een van je dak vanaf de straat, en stuur ze via WhatsApp. Vught ligt op zo'n tien minuten van mijn thuisbasis in Den Bosch, dus bij een lek kan ik vaak nog dezelfde dag komen kijken. Ik zorg eerst dat het binnen droog blijft, en daarna repareer ik wat er echt kapot is. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "vlijmen",
    naam: "Vlijmen",
    lokaal:
      "Veel naoorlogse en jaren-'70 woningen; populaire klussen zijn goten reinigen en losse pannen na een storm vanaf de Maaskant.",
    wijken: ["Vliedberg", "Het Vromart", "Centrum"],
    reistijd: "15 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Vlijmen, Nieuwkuijk en Haarsteeg: lekkage bij een lichtkoepel, een volle goot of losse pannen na storm. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "Vlijmen hoort bij de gemeente Heusden, net als Nieuwkuijk, Haarsteeg, Drunen en Heusden zelf. In Vliedberg en de andere wijken die na de oorlog en in de jaren '70 zijn gebouwd, staan veel rijtjeshuizen met een schuin pannendak en achter het huis een berging of aanbouw met een plat dak, vaak met een lichtkoepel erin. Bij zulke huizen gaat het meestal om twee soorten werk: de pannen en de nok van het grote dak, en de dakbedekking, de rand en de lichtkoepel van het platte dak erachter. In Geerpark, de nieuwste wijk, zijn de daken nog jong. Daar ligt de nok meestal droog, met een klem per vorst, en gaat het na een storm eerder om een vorst die is gaan schuiven dan om oude pannen. Stuur me gerust eerst een foto via WhatsApp, dan zeg ik eerlijk wat ik zie.",
    faq: [
      { v: "Kom je ook in Nieuwkuijk en Haarsteeg?", a: "Ja. Nieuwkuijk en Haarsteeg liggen vlak bij Vlijmen en horen net als Vlijmen bij de gemeente Heusden. Ik kom er voor dezelfde klussen als in Vlijmen zelf, zoals een lek bij een lichtkoepel, een volle goot of losse pannen na een storm. Het is zo'n kwartier rijden vanaf Den Bosch." },
      { v: "Kun je mijn dak in Vlijmen een keer helemaal nakijken voor de winter?", a: "Ja, dat doe ik met de Dak-APK: ik loop je hele dak na en je krijgt een rapport met foto's. Bij de rijtjes in Vliedberg kijk ik ook naar het platte dak van de berging en de rand van de lichtkoepel, bij de daken uit de jaren '70 naar verweerde betonpannen, en in Geerpark naar de klemmen van de nokvorsten. Op de foto's zie je zelf hoe je dak erbij ligt, en je hoort eerlijk wat voor de winter moet en wat kan wachten." },
      { v: "Kun je in Vlijmen ook het platte dak van mijn berging of aanbouw vernieuwen?", a: "Ja. Achter veel rijtjeshuizen in Vliedberg en de andere wijken uit de jaren '70 staat een berging of aanbouw met een plat dak, vaak met een lichtkoepel erin. Is de dakbedekking op één plek kapot, dan is repareren vaak genoeg. Is hij op meer plekken versleten, blijft er na een bui water op staan of is hij al een paar keer gelapt, dan is een nieuwe dakbedekking op termijn meestal slimmer. Ik kijk dan ook naar de rand van de lichtkoepel en de aansluiting op de muur van het huis, want daar begint een lek op zo'n dak vaak. Ik kom eerst kijken, en je hoort vooraf de vaste prijs." },
    ],
  },
  {
    slug: "drunen",
    naam: "Drunen",
    lokaal:
      "Ruim opgezette wijken met schuine daken vlak bij de Loonse en Drunense Duinen, zand en bladval zorgen voor snel volle goten.",
    wijken: ["Venne", "Heidijk", "Centrum"],
    reistijd: "20 min vanaf Den Bosch",
    extra:
      "Drunen hoort samen met Vlijmen en Heusden bij de gemeente Heusden, en Elshout ligt er vlak naast. Aan de zuidkant van Drunen, richting de Loonse en Drunense Duinen, staan veel huizen tussen de bomen. Daar komt in de herfst naast blad ook zand in de goot. Dat spoelt naar de uitloop naar de regenpijp en wordt daar met het blad een zware, natte prop, en dan loopt de goot bij een bui over aan de voorkant. In het oude centrum en in Elshout staan nog veel oudere huizen met een schoorsteen, en daar kijk ik bij een lek eerst naar het lood. Stuur me gerust eerst een foto via WhatsApp.",
    omschrijving: "Dakdekker in Drunen en Elshout: goten vol zand en blad, lekkage bij oud lood en losse pannen na een storm. Vaste prijs vooraf. Bel of app Rens.",
    faq: [
      { v: "Kom je ook in Elshout?", a: "Ja. Elshout ligt vlak bij Drunen en hoort net als Drunen bij de gemeente Heusden. Ik kom er voor dezelfde klussen als in Drunen zelf, zoals goten vol zand en blad, lekkage bij oud lood en losse pannen na een storm. Het is zo'n 20 minuten rijden vanaf Den Bosch." },
      { v: "Mijn goot in Drunen zit elk najaar vol zand en blad. Hoe vaak moet hij leeg?", a: "Staat je huis aan de kant van de Loonse en Drunense Duinen of tussen de bomen, dan is één keer per jaar vaak te weinig. Een goed moment is laat in de herfst, als het meeste blad eraf is. Komt er naast blad ook veel zand in je goot, dan zakt dat naar de uitloop naar de regenpijp en wordt het daar een zware prop. Dan is een tweede keer in het voorjaar vaak slim. Loopt je goot bij een bui over aan de voorkant, wacht dan niet tot die tijd. Stuur me een foto van de goot vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "berlicum",
    naam: "Berlicum",
    lokaal:
      "Dorpse bebouwing met veel vrijstaande en twee-onder-een-kap woningen, vaak oudere daken waar lood bij de schoorsteen aandacht vraagt.",
    wijken: ["Kerkwijk", "Beekveld", "Middelrode"],
    reistijd: "15 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Berlicum en Middelrode: lood bij de schoorsteen, lange goten en losse pannen na storm. Vaste prijs vooraf. Bel of app Rens.",
    faq: [
      { v: "Kom je ook in Middelrode?", a: "Ja. Middelrode ligt vlak bij Berlicum, en allebei horen ze bij de gemeente Sint-Michielsgestel. Het is zo'n kwartier rijden vanaf Den Bosch, dus ik kom er voor dezelfde klussen als in Berlicum zelf." },
      { v: "Kom je ook in Heeswijk-Dinther en Loosbroek?", a: "Ja. Heeswijk-Dinther en Loosbroek horen bij de gemeente Bernheze. Heeswijk-Dinther ligt vlak bij Middelrode, en Loosbroek daar niet ver vandaan. Ik kom er voor dezelfde klussen als in Berlicum zelf: lekkage, goten, pannen en lood. Stuur gerust eerst een foto via WhatsApp, dan hoor je wanneer ik kan komen." },
    ],
  },
  {
    slug: "sint-michielsgestel",
    naam: "Sint-Michielsgestel",
    lokaal:
      "Veel oudere, karakteristieke woningen langs de Dommel met klassieke pannendaken die regelmatig onderhoud aan vorsten en lood vragen.",
    wijken: ["Gestel", "Den Dungen", "Gemonde"],
    reistijd: "15 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Sint-Michielsgestel, Den Dungen en Gemonde: lood en nokvorsten op oude daken, goten vol blad en lekkage. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "Rond Sint-Michielsgestel liggen oude landgoederen, zoals Zegenwerp en Ruwenberg, en ook in de straten eromheen staan hoge eiken en beuken. In de herfst komen daar naast blad ook eikels en takjes in de goot, en die blijven bij de uitloop naar de regenpijp hangen. In Den Dungen en Gemonde staan meer vrijstaande huizen en boerderijen met een groot pannendak, vaak met veel open land eromheen. Daar heeft de wind meer grip op het dak, en waait een nokvorst met losse specie er eerder af dan in een straat vol huizen.",
    faq: [
      { v: "Kom je ook in Den Dungen, Gemonde en Maaskantje?", a: "Ja. Den Dungen, Maaskantje en Gemonde horen bij de gemeente Sint-Michielsgestel, net als Berlicum en Middelrode. Ik kom er voor dezelfde klussen als in Gestel zelf: lekkage, goten, pannen en lood. Het is zo'n kwartier tot twintig minuten rijden vanaf Den Bosch." },
      { v: "Ik wil mijn dak in Sint-Michielsgestel laten isoleren. Kun je eerst kijken of het dak dicht is?", a: "Ja. Isoleren doe ik zelf niet, maar je dak moet eerst droog en dicht zijn, want isoleren op een dak dat water doorlaat maakt het erger. Bij de oudere huizen in het centrum van Gestel en langs de Dommel kijk ik naar de pannen, de nok en het lood. Ligt er een pan scheef of laat het lood los, dan maak ik dat eerst in orde. Daarna kan een isolatiebedrijf aan de slag. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "schijndel",
    naam: "Schijndel",
    lokaal:
      "Mix van jaren-'60/'70 rijtjes en vrijstaande woningen, veel daken van vóór 1985, gevoelig voor losse pannen en gootlekkage.",
    wijken: ["Hoevenbraak", "Boschweg", "Centrum"],
    reistijd: "20 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Schijndel en Wijbosch: lekkage bij oude pannen of de schoorsteen, volle goten en stormschade. Vaste prijs vooraf. Bel of app Rens.",
    faq: [
      { v: "Kom je ook in Wijbosch en het buitengebied van Schijndel?", a: "Ja. Wijbosch hoort bij Schijndel, en Schijndel hoort sinds 2017 bij de gemeente Meierijstad. Ik kom er voor dezelfde klussen als in Schijndel zelf: lekkage, goten, pannen en lood. Het is zo'n 20 minuten rijden vanaf Den Bosch." },
      { v: "Kun je mijn dak in Schijndel nakijken voordat de winter begint?", a: "Ja, met de Dak-APK loop ik je hele dak na en krijg je een rapport met foto's. Op de oudere daken in Schijndel kijk ik vooral naar de eerste pannen van voor 1985, want die nemen meer water op en kunnen bij vorst scheuren, en naar de nokvorsten, die daar vaak nog in specie liggen. Staat er nog een oude antenne of schotel op je dak, dan kijk ik of die de pannen eromheen beschadigt. Je hoort daarna wat ik zou doen en in welke volgorde, en wat gerust tot het voorjaar kan wachten." },
      { v: "Kom je ook in Sint-Oedenrode?", a: "Ja. Sint-Oedenrode ligt naast Schijndel en hoort sinds 2017 bij dezelfde gemeente, Meierijstad, net als Veghel. Ook Nijnsel, Olland en Boskant vallen onder Sint-Oedenrode. Heb je daar een lekkend dak, een goot die overloopt of een pan die los ligt, app me dan een foto van de plek. Dan laat ik je weten wat ik zie en wanneer ik langs kan komen." },
    ],
  },
  {
    slug: "boxtel",
    naam: "Boxtel",
    lokaal:
      "Oudere centrumwoningen en naoorlogse wijken; populaire klussen zijn daklekkage opsporen en goten reinigen onder bomenrijke straten.",
    wijken: ["Selissen", "Munsel", "Lennisheuvel"],
    reistijd: "25 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Boxtel, Liempde en Esch: een lek opsporen, goten onder de bomen leegmaken en losse pannen terugleggen. Vaste prijs vooraf. Bel of app Rens.",
    faq: [
      { v: "Kom je ook in Liempde en Esch?", a: "Ja. Liempde hoort sinds 1996 bij de gemeente Boxtel, en Esch sinds 2021. Ik kom er voor dezelfde klussen als in Boxtel zelf, zoals een lek opsporen, goten leegmaken of losse pannen terugleggen. Boxtel is zo'n 25 minuten rijden vanaf Den Bosch." },
      { v: "Kun je mijn dak in Boxtel nakijken voordat de winter begint?", a: "Ja, met de Dak-APK loop ik je hele dak na en krijg je een rapport met foto's. Bij de oudere huizen rond het centrum kijk ik vooral naar het lood boven een erker of luifel, bij de rijtjes in Selissen naar de naad in de goot op de grens met de buren en naar duiven onder de zonnepanelen, en bij de boerderijen in Liempde en Esch naar de nok en de schoorsteen. Daarna weet je wat er voor de winter moet gebeuren en wat nog een jaar kan wachten." },
      { v: "Kom je ook in Oirschot en de Beerzen?", a: "Ja. Oirschot ligt ten zuiden van Boxtel en is een eigen gemeente, waar ook Middelbeers, Oostelbeers en Westelbeers bij horen. Ik kom er voor dezelfde klussen als in Boxtel: een lek opsporen, een goot die lekt of vol zit, en pannen of lood die los liggen. Stuur me een foto van je dak vanaf de straat via WhatsApp, dan hoor je wanneer ik kan komen." },
    ],
  },
  {
    slug: "heusden",
    naam: "Heusden",
    lokaal:
      "Het vestingstadje heeft veel monumentale en oudere daken; daarbuiten naoorlogse woningen met schuine pannendaken.",
    wijken: ["Vesting Heusden", "Oudheusden", "Herpt"],
    reistijd: "20 min vanaf Den Bosch",
    omschrijving: "Dakdekker in vesting Heusden, Oudheusden en Herpt: lekkage bij oud lood of zink, volle goten en losse nokvorsten. Vaste prijs vooraf. Bel of app Rens.",
    faq: [
      { v: "Kom je ook in Doeveren, Heesbeen en Hedikhuizen?", a: "Ja. Die dorpjes horen net als de vesting, Oudheusden en Herpt bij de gemeente Heusden. Ik kom er voor dezelfde klussen als in Heusden zelf: lekkage, goten, pannen en lood. Het is zo'n 20 minuten rijden vanaf Den Bosch." },
      { v: "Mijn huis staat in de vesting. Mag je daar zomaar pannen of een goot vervangen?", a: "In de vesting is het slim om eerst even bij de gemeente Heusden na te vragen wat mag, zeker als je huis een monument is. Een kapotte pan vervangen door een pan die er net zo uitziet, is meestal gewoon onderhoud. Wil je iets anders, zoals een andere pan, een andere kleur of een kunststof goot in plaats van zink, dan heb je in de regel eerst toestemming nodig. Ik kijk wat er nu op je dak ligt en zoek materiaal dat erbij past, zodat je dak er van de straat hetzelfde uitziet. Gaat het om de stenen of de voegen van de gevel of de schoorsteen, dan is dat geen werk voor mij, en dat hoor je dan meteen." },
      { v: "Kom je ook in Ammerzoden en Well, aan de overkant van de Maas?", a: "Ja. Ammerzoden en Well liggen aan de andere kant van de Maas, ten noorden van Heusden, en horen bij de gemeente Maasdriel in de Bommelerwaard. Ook daar kom ik voor lekkage, goten, pannen en lood. App me een foto van de plek waar het lekt of van je dak vanaf de straat, dan laat ik weten wanneer ik langs kan komen." },
      { v: "Kom je ook in Wijk en Aalburg, Genderen en Eethen?", a: "Ja. Die dorpen liggen aan de overkant van de Bergsche Maas en horen bij de gemeente Altena. Vanaf Heusden ben je er via de brug zo. Ook daar gaat het meestal om een lek, een goot die vol zit of lekt, of pannen en een nok die los zitten. Stuur me gerust eerst een foto van je dak vanaf de straat, dan zie ik wat er speelt en spreken we af wanneer ik kom." },
    ],
  },
  {
    slug: "oss",
    naam: "Oss",
    lokaal:
      "Veel ruime naoorlogse wijken met schuine daken; goten reinigen en pannen vervangen zijn hier veelgevraagd.",
    wijken: ["Ruwaard", "Ussen", "Schadewijk", "Berghem"],
    reistijd: "25 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Oss, Berghem en Geffen: lekkage bij lood of een dakraam, goten vol blad en losse pannen na storm. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "Bij Oss horen ook de dorpen langs de Maas, zoals Lith, Megen en Ravenstein. Daar staan veel dijkhuizen en oude boerderijen met een groot pannendak, en over de rivier en het open land heeft de wind vrij spel. Na een storm zie ik daar vaak dat de houten windveer loszit of dat de pannen langs de zijkant van het dak zijn gaan schuiven. Rond het centrum van Oss staan nog veel oude arbeiderswoningen met een schoorsteen die al jaren niet meer gebruikt wordt. Zit daar geen kap op, dan regent het in het kanaal, en na een tijd zie je een vochtplek op de muur binnen. Vaak is een kap of afdekplaat op de schoorsteen dan genoeg, en die zet ik er zelf op.",
    faq: [
      { v: "Kom je bij een lek in Oss ook 's avonds of in het weekend?", a: "Je kunt me dag en nacht bellen of appen, ook in het weekend. Oss is zo'n 25 minuten rijden vanaf Den Bosch. Buiten kantooruren geldt een spoedtoeslag, en ook dan hoor je de vaste prijs voordat ik begin. Twijfel je of het spoed is, stuur dan een foto van de natte plek via WhatsApp. Dan zeg ik eerlijk of het vandaag moet of kan wachten tot een werkdag." },
      { v: "Kom je ook in Berghem, Geffen en de dorpen langs de Maas?", a: "Ja. Ik kom in de hele gemeente Oss, dus ook in Berghem en Geffen, en in de dorpen langs de Maas, zoals Lith, Megen, Ravenstein en Herpen. Ik kom er voor dezelfde klussen als in de stad: lekkage, goten, pannen en lood. Naar de dorpen langs de Maas is het vanaf Den Bosch iets verder rijden dan naar Oss zelf, dus stuur me eerst een foto via WhatsApp. Dan hoor je eerlijk wanneer ik kan komen." },
      { v: "Kom je ook in Heesch en Nistelrode?", a: "Ja. Heesch en Nistelrode horen bij de gemeente Bernheze, net als Heeswijk-Dinther, Vorstenbosch en Loosbroek. Heesch ligt tussen Den Bosch en Oss, en Nistelrode tussen Heesch en Uden. Ik kom er voor dezelfde klussen als in Oss: lekkage, goten, pannen en lood. Stuur gerust eerst een foto via WhatsApp, dan hoor je wanneer ik kan komen." },
      { v: "Het lekt bij mij in Oss. Waar begin je met zoeken?", a: "Dat hangt af van je huis. Bij de oude arbeiderswoningen rond het centrum kijk ik eerst naar de schoorsteen: het lood eromheen, en of er een kap op zit als hij niet meer gebruikt wordt. Bij de dijkhuizen en boerderijen langs de Maas kijk ik na een storm eerst naar de pannen langs de zijkant van het dak en naar de windveer. Zit je regenpijp binnen in de muur, dan kijk ik ook naar de uitloop van de goot. Stuur me een foto van de natte plek en van je dak vanaf de straat, dan weet ik waar ik moet beginnen. Je hoort vooraf wat het kost." },
      { v: "Kom je ook in Haren, Macharen en Oijen?", a: "Ja. Haren en Macharen liggen tussen Oss en Megen, en Oijen ligt aan de Maas bij Lith. Alle drie horen ze bij de gemeente Oss. Ik kom er voor een lek, een volle of lekkende goot en losse pannen of nokvorsten, net als in Oss zelf. Stuur me eerst een foto van je dak vanaf de straat via WhatsApp. Dan weet ik wat ik mee moet nemen, en spreken we een moment af." },
    ],
  },
  {
    slug: "oisterwijk",
    naam: "Oisterwijk",
    lokaal:
      "Bosrijke omgeving betekent veel bladval en mos op daken, dus goten en pannen vragen hier extra aandacht.",
    wijken: ["Pannenschuur", "Westend", "Moergestel"],
    reistijd: "25 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Oisterwijk, Moergestel en Haaren: goten vol blad, mos op het dak en lekkage bij de schoorsteen. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "Sinds 2021 valt ook Haaren onder Oisterwijk. Rond dat dorp en verder in het buitengebied vind je veel boerderijen en vrijstaande woningen, vaak met een flink pannendak. Door alle bossen en lanen komt er op veel daken maar weinig zon, zeker aan de noordkant, en daar krijgt mos makkelijk de kans. Dat blijft nat, en gaat het daarna vriezen, dan kan zo'n pan barsten. Zit er bij jou een dikke laag op, dan kijk ik of de pannen eronder nog heel zijn en of het water nog goed naar de goot loopt.",
    faq: [
      { v: "Kom je ook in Moergestel en Haaren?", a: "Ja. Allebei zijn ze een dorp van de gemeente Oisterwijk, Haaren pas sinds 2021. Vanuit Den Bosch rijd ik er in zo'n 25 minuten naartoe. Ook daar kun je me bellen of appen voor een volle goot, een gescheurde pan of een lek bij de schoorsteen." },
      { v: "Hoe vaak moeten de goten leeg onder al die bomen?", a: "Onder veel bomen is één keer per jaar vaak te weinig. Een goed moment is laat in de herfst, als het meeste blad eraf is, en daarna nog eens in het voorjaar. Zie je bij een bui water over de rand van de goot komen, wacht dan niet tot die tijd." },
      { v: "Kun je in Oisterwijk ook een oud dak opknappen, of alleen kleine reparaties doen?", a: "Ook groter werk. Op veel oudere villa's en vrijstaande huizen in Oisterwijk en Moergestel ligt het dak er al tientallen jaren. Dan kijk ik welke pannen op zijn, of de nok nog vast ligt, hoe het lood rond de schoorsteen erbij ligt en of de goten mee moeten. Vaak hoeft niet het hele dak eraf en vervang ik alleen wat echt op is. Ligt er een plat dak op je aanbouw of garage, dan kijk ik of repareren nog kan of dat de dakbedekking beter vervangen kan worden. Je hoort vooraf de vaste prijs." },
      { v: "Kom je ook in Biezenmortel?", a: "Ja. Biezenmortel ligt tussen Haaren en Udenhout. Het hoorde net als Haaren bij de oude gemeente Haaren, en valt sinds 2021 onder de gemeente Tilburg. Vanuit Den Bosch is het er niet ver naartoe. Ik kom er voor een lek, een volle goot of een pan die na een storm is gaan schuiven. Stuur me gerust eerst een foto van je dak via WhatsApp." },
      { v: "Mijn garage of aanbouw in Oisterwijk heeft een plat dak onder de bomen. Moet de dakbedekking eraf?", a: "Niet altijd. Onder de bomen in Oisterwijk, Moergestel en Haaren komen blad, naalden en takjes op een plat dak terecht. Blijft dat liggen, dan raakt de afvoer verstopt, blijft er na een bui water staan en slijt de dakbedekking op die plekken sneller. Gaat het om één scheur, een losse naad of een lek bij de rand of de afvoer, dan maak ik alleen die plek dicht en haal ik het blad en de takjes weg. Laat de bedekking op veel plekken los, of komt er na elke reparatie ergens anders een lek bij, dan is een nieuwe dakbedekking op termijn goedkoper. Ik kom eerst kijken en zeg eerlijk wat ik zou doen. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "wijchen",
    naam: "Wijchen",
    lokaal:
      "Ruime jaren-'70 en '80 woningen net over de Maas; veel schuine pannendaken waar nokvorsten en lood onderhoud vragen.",
    wijken: ["Wijchen-Zuid", "Alverna", "Niftrik", "Centrum"],
    reistijd: "25 min vanaf Den Bosch",
    extra:
      "Wijchen ligt net over de Maas, aan de kant van Nijmegen. Bij de gemeente horen ook dorpen als Batenburg, Bergharen, Hernen en Balgoij, met veel boerderijen en vrijstaande huizen in het open land tussen de Maas en de Waal. In Wijchen zelf zijn grote delen in de jaren '70 en '80 gebouwd, met veel rijtjeshuizen en twee-onder-een-kappers. Bij die huizen liggen de nokvorsten vaak nog in specie, en die brokkelt na zoveel jaren af. Zie je brokjes in de goot of op de stoep, laat de nok dan nakijken voordat de winterstormen komen.",
    omschrijving: "Dakdekker in Wijchen, Alverna en Niftrik: lekkage bij lood of de nok, volle goten en losse pannen na storm. Vaste prijs vooraf. Bel of app Rens.",
    faq: [
      { v: "Kom je ook in Batenburg, Bergharen, Hernen en Balgoij?", a: "Ja. Die dorpen horen bij de gemeente Wijchen. Wijchen zelf is zo'n 25 minuten rijden vanaf Den Bosch, en de dorpen in het Land van Maas en Waal liggen een stukje verder. Stuur gerust eerst een foto via WhatsApp, dan hoor je eerlijk wanneer ik kan komen." },
      { v: "Kom je ook in Grave?", a: "Ja. Grave ligt aan de Maas, ten zuiden van Wijchen, en hoort sinds 2022 bij de gemeente Land van Cuijk. Ook daar kom ik voor lekkage, een volle of lekkende goot, losse pannen en lood. Grave is voor mij een flink stuk rijden vanaf Den Bosch, dus zo'n klus plan ik vooraf met je in. App me eerst een foto van wat je ziet." },
      { v: "Kom je in Wijchen ook voor een lekkende dakgoot of een dakreparatie?", a: "Ja. In Wijchen kom ik voor een goot die lekt bij een naad of een hoek, die doorhangt of bij een bui overloopt, en voor losse of gebroken pannen en nokvorsten. Bij de rijtjes en twee-onder-een-kappers uit de jaren '70 en '80 liggen de nokvorsten vaak nog in specie, en die kijk ik dan meteen na. Vaak is repareren genoeg: een naad dichtmaken, de goot weer op afschot hangen of een paar pannen vervangen. Is de goot of een dakvlak op, dan zeg ik eerlijk dat vervangen slimmer is. Wijchen is zo'n 25 minuten rijden vanaf Den Bosch. Stuur een foto van je goot of je dak vanaf de straat via WhatsApp, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "waalwijk",
    naam: "Waalwijk",
    lokaal:
      "Mix van naoorlogse wijken met schuine daken; goten reinigen en losse pannen na storm vanaf de Langstraat zijn veelgevraagd.",
    wijken: ["Besoyen", "Baardwijk", "Laageinde", "Sprang-Capelle"],
    reistijd: "25 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Waalwijk, Sprang-Capelle en Waspik: lekkage bij oud lood of een plat dak, volle goten en losse pannen. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "Met Sprang-Capelle en Waspik erbij heeft Waalwijk heel verschillende daken. Sprang-Capelle is een lang dorp langs de oude weg, met veel vrijstaande huizen en oude boerderijen met een breed dak en lange goten. Daar valt in de herfst veel blad in de goot van de bomen langs de straat, en een nokvorst die los zit merk je vaak pas als er specie in de goot ligt. In Besoyen en Baardwijk, de oude kernen die aan Waalwijk vastgegroeid zijn, staan nog veel huizen met een schoorsteen en oud lood. Twijfel je wat er met je dak aan de hand is, stuur dan een foto via WhatsApp.",
    faq: [
      { v: "Kom je ook in Sprang-Capelle en Waspik?", a: "Ja. Sprang-Capelle en Waspik horen bij de gemeente Waalwijk, en ik kom er voor dezelfde klussen als in Waalwijk zelf: lekkage, goten, pannen en lood. Het is zo'n 25 minuten rijden vanaf Den Bosch." },
      { v: "Vervang je in Waalwijk ook de dakbedekking van een plat dak?", a: "Ja. Achter veel oudere huizen in Waalwijk staat een aanbouw, schuur of oude werkplaats met een plat dak. Lekt dat dak op één plek, dan is een gerichte reparatie vaak genoeg. Is de bedekking op meer plekken versleten, dan zeg ik eerlijk dat vervangen slimmer is. Je hoort vooraf de vaste prijs." },
      { v: "Kun je mijn hele dak in Waalwijk een keer nakijken voor de winter?", a: "Ja, dat doe ik met de Dak-APK: ik loop je hele dak na en je krijgt een rapport met foto's. Bij de oudere huizen in Besoyen en Baardwijk kijk ik vooral naar het lood rond de schoorsteen, bij de boerderijen en vrijstaande huizen in Sprang-Capelle naar de lange goten en de nok. Heb je een plat dak op een aanbouw of oude werkplaats, dan neem ik dat ook mee. Zo weet je wat nu moet gebeuren en wat nog even kan wachten." },
      { v: "Ik zoek een dakdekkersbedrijf in Waalwijk. Met wie heb ik bij jou te maken?", a: "Met mij, Rens. Je belt of appt niet met een planner, maar met mij: ik kom zelf kijken in Waalwijk, Sprang-Capelle of Waspik en ik blijf je vaste aanspreekpunt, van de eerste foto tot de rekening. Waalwijk is zo'n 25 minuten rijden vanaf Den Bosch. Stuur gerust eerst een foto via WhatsApp, dan hoor je wanneer ik kan komen." },
      { v: "Kom je ook in Kaatsheuvel en Loon op Zand?", a: "Ja. Kaatsheuvel ligt net onder Waalwijk en hoort met Loon op Zand en De Moer bij de gemeente Loon op Zand. Daar kom ik net zo goed voor een lekkage, een volle of lekkende goot, losse pannen of lood dat loslaat. Maak een foto van wat je ziet en stuur hem via WhatsApp, dan spreken we samen een moment af." },
      { v: "Kom je ook in Raamsdonksveer en Geertruidenberg?", a: "Ja. Raamsdonksveer en Geertruidenberg liggen aan de westkant, voorbij Waspik, en horen samen met Raamsdonk bij de gemeente Geertruidenberg. Ook daar kom ik voor een lek, een goot die lekt of overloopt, losse pannen en lood. Het is voor mij iets verder rijden dan Waalwijk zelf. Stuur eerst een foto van wat je ziet via WhatsApp, dan hoor je eerlijk wanneer ik kan komen." },
    ],
  },
  {
    slug: "uden",
    naam: "Uden",
    lokaal:
      "Ruim opgezette wijken met schuine pannendaken; bladval en mos zorgen voor snel volle goten en losse pannen.",
    wijken: ["Melle", "Bitswijk", "Hoenderbos", "Centrum"],
    reistijd: "25 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Uden, Volkel en Odiliapeel: lekkage bij een gezakte goot of een plat dak, volle goten en losse pannen. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "Rond de Markt in het centrum van Uden zitten veel winkels met een woning erboven. Achter zo'n pand ligt vaak een plat dak op de winkel of het magazijn, en daar komt het water nogal eens binnen bij de afvoer of langs de rand. Volkel en Odiliapeel, de dorpen die bij Uden horen, hebben meer vrijstaande huizen en boerderijen met een groot pannendak en een lange goot. Daar blijft in de herfst veel blad in de goot liggen, en bij een stevige bui loopt hij dan over langs de gevel. Stuur me een foto, dan zeg ik je eerlijk of leegmaken genoeg is.",
    faq: [
      { v: "Kom je ook in Volkel en Odiliapeel?", a: "Ja. Volkel en Odiliapeel horen bij Uden, en ook daar kom ik voor lekkage, goten, pannen en lood. Uden is zo'n 25 minuten rijden vanaf Den Bosch, de dorpen liggen een stukje verder. Stuur gerust eerst een foto via WhatsApp, dan hoor je eerlijk wanneer ik kan komen." },
      { v: "Kom je ook in Zeeland, Schaijk en Reek?", a: "Ja. Zeeland, Schaijk en Reek hoorden vroeger bij de gemeente Landerd. Sinds 2022 vormen ze samen met Uden, Volkel en Odiliapeel de gemeente Maashorst. Lekt er iets, zit de goot vol of is er na een storm een pan verschoven, bel of app me gerust. Met een foto erbij kan ik meestal al inschatten wat er speelt." },
      { v: "Het is nat bovenin de muur van mijn huis in Uden. Komt dat van de goot of van het dak?", a: "Vaak van de goot. Zit hij vol blad of hangt hij niet goed op afschot, dan loopt hij bij een flinke bui over en komt het water achter de goot langs de gevel naar binnen. Dat lijkt op een daklek. Bij de lange goten in Volkel en Odiliapeel gebeurt dat in de herfst sneller. Kijk tijdens een bui vanaf de straat of er water over de rand van de goot komt. Zie je dat niet, dan kan het ook bij de onderste rij pannen of bij het lood zitten. Stuur me een foto van de natte plek en van de goot, dan zeg ik eerlijk wat ik zie. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "den-bosch",
    naam: "Den Bosch",
    lokaal:
      "Mijn thuisbasis: van de oude binnenstad met monumentale daken tot naoorlogse wijken met schuine pannendaken. Hier ben ik dagelijks, dus bij spoed sta ik snel voor je deur.",
    wijken: ["Muntel", "Boschveld", "De Slagen", "Maaspoort", "Zuid", "Empel", "Engelen"],
    reistijd: "een paar minuten vanaf mijn thuisbasis",
    omschrijving: "Dakdekker in Den Bosch, Empel, Engelen en Nuland: lekkage opsporen, oude goten en lood, losse pannen na storm. Vaste prijs vooraf. Bel of app Rens.",
    extra:
      "Bij Den Bosch horen ook Engelen en Bokhoven, de oude dorpjes aan de Maas, en sinds 2015 ook Nuland en Vinkel. In Engelen en Bokhoven staan veel lage dijkhuizen en oude boerderijen. De goot hangt daar laag en vaak onder de bomen langs de dijk, dus die zit in de herfst snel vol. In Nuland en Vinkel staan veel gezinswoningen en twee-onder-een-kappers, en op steeds meer daken liggen zonnepanelen. Lekt het bij jou sinds de panelen erop liggen, dan kijk ik eerst bij de plek waar de kabel door het dak naar binnen gaat.",
    faq: [
      { v: "Werk je ook aan daken in de binnenstad van Den Bosch?", a: "Ja. In de binnenstad staan veel monumenten, en de binnenstad is beschermd stadsgezicht. Daar kun je niet zomaar een andere pan of ander materiaal gebruiken. Ik kijk eerst wat er nu ligt en herstel met materiaal dat erbij past. Twijfel je of je pand een monument is, vraag het dan na bij de gemeente." },
      { v: "Kom je ook in Engelen, Bokhoven, Nuland en Vinkel?", a: "Ja. Engelen en Bokhoven liggen aan de Maas, Nuland en Vinkel aan de oostkant, en ze horen allemaal bij de gemeente Den Bosch. Ik kom er voor dezelfde klussen als in de stad zelf, en bij lekkage vaak nog dezelfde dag." },
      { v: "Het lekt in Den Bosch 's avonds of in het weekend. Kun je dan komen?", a: "Bellen of appen kan dag en nacht, ook in het weekend. Den Bosch is mijn thuisbasis, dus ik zit meestal niet ver weg. Druppelt het binnen of ligt er een stuk dak open, dan kom ik vaak nog dezelfde dag of avond kijken en maak ik het eerst dicht. Buiten kantooruren komt er een spoedtoeslag bij, en ook dan hoor je de vaste prijs voordat ik begin. Blijft het binnen droog als je de druppel opvangt en kan het veilig wachten tot een werkdag, dan zeg ik dat eerlijk, want dat scheelt je de toeslag. Stuur meteen een foto van de natte plek via WhatsApp." },
      { v: "Kom je ook in Hedel, Ammerzoden en Kerkdriel, aan de overkant van de Maas?", a: "Ja. Hedel, Ammerzoden en Kerkdriel horen bij de gemeente Maasdriel, in de Bommelerwaard. Hedel ligt vanuit Den Bosch net over de Maas. Ik kom er voor dezelfde klussen als in de stad: lekkage, goten, pannen en lood. Ook in de kleinere dorpen, zoals Velddriel, Hoenzadriel en Alem, kom ik. Stuur gerust eerst een foto via WhatsApp, dan hoor je wanneer ik kan komen." },
      { v: "Kom je ook in Zaltbommel?", a: "Ja. Zaltbommel ligt in de Bommelerwaard aan de Waal, en vanuit Den Bosch rijd je erheen over de A2. Bij de gemeente Zaltbommel horen ook dorpen als Brakel, Gameren en Kerkwijk. Ik kom er voor dezelfde klussen als in de stad: lekkage, goten, pannen en lood. Woon je in Zaltbommel of een van de dorpen eromheen, app me dan een foto van je dak of van de natte plek. Dan hoor je wat ik zie en wanneer ik kan komen." },
      { v: "Hoe weet ik of een dakdekker in Den Bosch te vertrouwen is?", a: "Vraag naar de naam van het bedrijf, het KvK-nummer en een vast telefoonnummer, en spreek de prijs af voordat er iets gebeurt. Laat je niet haasten door iemand die ongevraagd aanbelt. Bij mij krijg je mij zelf aan de lijn, Rens, en geen callcenter. Mijn KvK-nummer staat onderaan elke pagina van deze site, ik ben bedrijfsaansprakelijk verzekerd en je hoort de vaste prijs voordat ik begin. Mijn reviews staan op Werkspot. Twijfel je over wat een ander zegt over je dak, stuur me dan een foto vanaf de straat via WhatsApp, dan zeg ik eerlijk wat ik zie." },
    ],
  },
  {
    slug: "veghel",
    naam: "Veghel",
    lokaal:
      "Veel jaren-'70/'80 woningen met schuine daken; goten reinigen, pannen vervangen en lekkage opsporen zijn hier veelgevraagd.",
    wijken: ["De Bunders", "Bolken", "Veghel-Zuid", "Mariaheide"],
    reistijd: "20 min vanaf Den Bosch",
    extra:
      "Veghel hoort sinds 2017 bij de gemeente Meierijstad, samen met onder meer Schijndel en Erp. In de woonwijken die in de jaren '70 en '80 zijn gebouwd, staan veel rijtjeshuizen en twee-onder-een-kappers met een dakraam in het schuine dak aan de achterkant. Na zo'n veertig jaar is het gootstuk of het lood onder zo'n raam vaak op. Dan zie je na een flinke bui een natte plek op de muur of het plafond onder het raam, terwijl het glas zelf nog prima is. Vaak is een nieuw gootstuk genoeg en hoeft het raam er niet uit. Stuur me een foto van de natte plek, dan zeg ik eerlijk wat ik zie.",
    omschrijving: "Dakdekker in Veghel en Erp: lekkage onder een dakraam of bij de schoorsteen, volle goten en losse nokvorsten. Vaste prijs vooraf. Bel of app Rens.",
    faq: [
      { v: "Kom je ook in Erp, Zijtaart, Eerde en Mariaheide?", a: "Ja. Die dorpen horen net als Veghel bij de gemeente Meierijstad. Ik kom er voor dezelfde klussen als in Veghel zelf: lekkage, goten, pannen en lood. Veghel is zo'n 20 minuten rijden vanaf Den Bosch." },
      { v: "Mijn rijtjeshuis in Veghel is zo'n veertig jaar oud. Waar laat ik voor de winter naar kijken?", a: "Bij huizen van die leeftijd kijk ik vooral naar de nokvorsten, die vaak nog in specie liggen die na jaren bros wordt, naar het lood rond de schoorsteen en naar de goot. Zit die vol blad of hangt hij niet meer goed op afschot, dan loopt hij in de winter over. Stuur gerust een paar foto's vanaf de straat, dan zeg ik eerlijk wat ik zie." },
      { v: "Kom je ook in Boekel en Gemert?", a: "Ja. Boekel ligt tussen Uden en Gemert en is een eigen gemeente, waar ook Venhorst bij hoort. Gemert hoort bij de gemeente Gemert-Bakel. Bel of app me daar gerust voor een lek, een goot die overloopt of pannen die los liggen. Gemert ligt voor mij wat verder weg dan Veghel, dus een klus daar plan ik meestal vooraf in. Stuur eerst een foto, dan hoor je eerlijk wanneer ik kan komen." },
    ],
  },
  {
    slug: "tilburg",
    naam: "Tilburg",
    lokaal:
      "Van de Reeshof tot Berkel-Enschot en Udenhout: veel rijtjes met schuine pannendaken waar goten en nokvorsten onderhoud vragen.",
    wijken: ["Reeshof", "Berkel-Enschot", "Udenhout", "Centrum"],
    reistijd: "30 min vanaf Den Bosch",
    extra:
      "Tilburg is een oude textielstad. In wijken als het Goirke, Korvel en de Hasselt staan nog veel arbeiderswoningen van rond 1900 tot 1930, vaak in lange rijen met een laag pannendak en een schoorsteen per huis. De pannen liggen daar soms al tientallen jaren. Lekt het bij zo'n huis, dan zit het meestal bij het lood rond de schoorsteen of bij een pan die is gaan schuiven. Tilburg is voor mij zo'n half uur rijden vanaf Den Bosch, en Udenhout en Berkel-Enschot liggen het dichtstbij.",
    omschrijving: "Dakdekker in Tilburg, Udenhout en Berkel-Enschot: lekkage bij lood of een plat dak, volle goten en losse pannen. Vaste prijs vooraf. Bel of app Rens.",
    faq: [
      { v: "Ik woon in een oud arbeidershuis in het Goirke of Korvel. Moet bij een lek het hele dak eraf?", a: "Meestal niet. Bij die oude rijtjes zit een lek vaak in het lood rond de schoorsteen of bij één pan die is gaan schuiven, en dat repareer ik gericht. Zijn de pannen op veel plekken gescheurd of poreus, dan zeg ik eerlijk dat een groter stuk vervangen slimmer is. Tilburg is voor mij zo'n half uur rijden. Stuur daarom eerst een foto van de natte plek en van je dak vanaf de straat via WhatsApp, dan hoor je wanneer ik kan komen." },
      { v: "Kom je ook in Goirle en Dongen?", a: "Ja. Goirle ligt aan de zuidkant van Tilburg en Dongen aan de noordkant, elk met een eigen gemeente. Ik kom er voor dezelfde klussen als in Tilburg: lekkage, goten, pannen en lood. Tilburg is voor mij zo'n half uur rijden, dus stuur eerst een foto via WhatsApp, dan hoor je wanneer ik kan komen." },
    ],
  },
  {
    slug: "breda",
    naam: "Breda",
    lokaal:
      "Ook in Breda en omstreken kom ik voor lekkage en ander dakwerk. Je vindt hier een mix van vooroorlogse en naoorlogse daken die onderhoud aan pannen, lood en goten vragen.",
    wijken: ["Prinsenbeek", "Teteringen", "Ginneken", "Haagse Beemden"],
    reistijd: "± 40 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Breda, Prinsenbeek en Teteringen: daklekkage, een lekkende dakgoot en losse pannen. Stuur een foto, dan hoor je eerlijk wanneer ik kan komen.",
    extra:
      "Sinds 1997 horen ook Prinsenbeek, Teteringen, Bavel en Ulvenhout bij de gemeente Breda. In die dorpen staan veel vrijstaande huizen en twee-onder-een-kappers met een groot pannendak, vaak met een aanbouw of garage ertegen. Waar zo'n aanbouw tegen het huis zit, ligt een strook lood of zink, en die laat na veel jaren los. In de Heuvel en het Brabantpark, wijken uit de jaren '50 en '60, staan veel rijtjeshuizen en portiekwoningen. Bij de rijtjes zit een lek vaak in het lood rond de schoorsteen, bij de portiekwoningen eerder bij de afvoer of de rand van het platte dak.",
    faq: [
      { v: "Ik woon in een portiekwoning in de Heuvel of het Brabantpark en het lekt. Wie regelt dat?", a: "Bij een portiekwoning is het dak meestal van de VvE, of van de verhuurder als je huurt. Meld het lek daar meteen, want zij moeten in de regel akkoord geven voor de reparatie. Zet ondertussen een emmer onder de druppel en maak foto's van de natte plek. Vragen de VvE of de verhuurder mij om te komen kijken, dan zoek ik waar het water binnenkomt. Breda is voor mij zo'n 40 minuten rijden, dus stuur eerst een foto via WhatsApp, dan hoor je eerlijk wanneer ik kan komen." },
      { v: "Kom je ook in Etten-Leur en Rijen?", a: "Ja. Etten-Leur ligt aan de westkant van Breda en heeft een eigen gemeente. Rijen hoort bij de gemeente Gilze en Rijen, tussen Breda en Tilburg. Ik kom er voor dezelfde klussen als in Breda: lekkage, goten, pannen en lood. Breda is voor mij zo'n 40 minuten rijden, dus stuur eerst een foto via WhatsApp, dan hoor je eerlijk wanneer ik kan komen." },
      { v: "Kom je in Breda ook voor een lekkende of kapotte dakgoot?", a: "Ja. Lekt je goot bij een naad of bij de uitloop naar de regenpijp, hangt hij door of is hij op, dan kom ik ook in Breda, Prinsenbeek, Teteringen, Bavel en Ulvenhout. Vaak is repareren genoeg: een naad dichtmaken, de goot weer op afschot hangen of één stuk vervangen. Is de goot op veel plekken lek of doorgeroest, dan zeg ik eerlijk dat vervangen slimmer is. Breda is voor mij zo'n 40 minuten rijden, dus ik plan het vooraf met je in. Stuur een foto van de goot, dan hoor je vooraf wat het kost." },
    ],
  },
  {
    slug: "helmond",
    naam: "Helmond",
    lokaal:
      "Ruime naoorlogse wijken met schuine daken; voor dakwerk en lekkage kom ik in Helmond en de omliggende kernen.",
    wijken: ["Brouwhuis", "Dierdonk", "Mierlo-Hout", "Stiphout"],
    reistijd: "± 40 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Helmond, Brandevoort en Stiphout: daklekkage bij het lood, blad in de kilgoot en losse pannen. Stuur een foto, dan hoor je wanneer ik kan komen.",
    extra:
      "Stiphout en Mierlo-Hout zijn oude dorpen die aan Helmond zijn vastgegroeid. Daar staan nog veel oudere huizen met een schoorsteen, en een lek zit daar vaak in het lood rond die schoorsteen. In Brandevoort lijken veel huizen oud, maar ze zijn vrij nieuw, gebouwd in een ouderwetse stijl met steile pannendaken en veel hoeken en kilgoten tussen de daken. Juist in die hoeken blijft in de herfst blad liggen. Helmond is voor mij een flink stuk rijden. Stuur daarom eerst een foto via WhatsApp, dan hoor je eerlijk wanneer ik kan komen.",
    faq: [
      { v: "Kom je ook in Stiphout, Mierlo-Hout en Brandevoort?", a: "Ja. Stiphout, Mierlo-Hout en Brandevoort horen bij Helmond, en ik kom er voor dezelfde klussen als in de rest van Helmond, zoals lekkage bij het lood rond de schoorsteen of blad in een kilgoot. Helmond is zo'n 40 minuten rijden vanaf Den Bosch. Bel of app me met een foto, dan hoor je wanneer ik kan komen." },
      { v: "Kom je ook in Mierlo, Beek en Donk en Aarle-Rixtel?", a: "Ja. Mierlo hoort bij de gemeente Geldrop-Mierlo, en is iets anders dan Mierlo-Hout, dat bij Helmond hoort. Beek en Donk en Aarle-Rixtel horen bij de gemeente Laarbeek, aan de noordkant van Helmond. Ik kom er voor dezelfde klussen als in Helmond: lekkage, goten, pannen en lood. Helmond is voor mij zo'n 40 minuten rijden, dus stuur eerst een foto via WhatsApp, dan hoor je eerlijk wanneer ik kan komen." },
      { v: "Repareer je in Helmond ook losse dakpannen en nokvorsten?", a: "Ja. Ligt er na een storm een pan scheef, mist er een, of ligt er specie van de nok in de goot, dan kom ik ook in Helmond voor de reparatie. Bij de huizen in Brandevoort kijk ik daarbij ook naar de kilgoten tussen de daken, waar blad blijft liggen. Lekt het binnen, zet dan een emmer neer en stuur me meteen een foto. Helmond is voor mij zo'n 40 minuten rijden, dus een reparatie die kan wachten plan ik vooraf met je in. Je hoort vooraf wat het kost." },
    ],
  },
  {
    slug: "eindhoven",
    naam: "Eindhoven",
    lokaal:
      "Ook in de regio Eindhoven kom ik voor lekkage en ander dakwerk. Veel naoorlogse woningen met schuine pannendaken en platte uitbouwen.",
    wijken: ["Tongelre", "Woensel", "Gestel", "Stratum"],
    reistijd: "± 40 min vanaf Den Bosch",
    omschrijving: "Dakdekker in Eindhoven, Stratum en Woensel: daklekkage, dakgoten repareren of vervangen en losse pannen. Stuur een foto, dan hoor je wanneer ik kan komen.",
    extra:
      "In Stratum ligt het Villapark, met veel villa's en herenhuizen van voor de oorlog. Die hebben vaak een steil pannendak, lood rond de schoorsteen en zinken goten die al tientallen jaren meegaan. Lekt het daar, dan zit het meestal in dat oude lood of in een naad van de goot. In Woensel-Noord, het grootste stadsdeel van Eindhoven, staan vooral rijtjes uit de jaren '60, '70 en '80. Daar gaat het vaker om nokvorsten die nog in specie liggen en losraken, of om een goot die is gaan doorhangen en bij een flinke bui overloopt.",
    faq: [
      { v: "Ik woon in een oude villa in het Villapark. Hoe zie ik of het lood rond mijn schoorsteen lekt?", a: "Kijk vanaf de straat met de zoom van je telefoon naar de voet van de schoorsteen. Staat het lood van de stenen af, zitten er scheurtjes in de hoeken of mist er een stuk, dan kan het water erachter lopen. Binnen zie je dat aan een vochtige plek naast de schoorsteen, vooral na regen met wind. Ga niet zelf het dak op. Stuur me een foto van de schoorsteen en van de natte plek, dan zeg ik eerlijk wat ik zie. Eindhoven is voor mij zo'n 40 minuten rijden, dus dan hoor je ook wanneer ik kan komen." },
      { v: "Kom je ook in Best, Son en Breugel en Nuenen?", a: "Ja. Best, Son en Breugel en Nuenen liggen vlak bij Eindhoven, elk met een eigen gemeente. Best en Son liggen aan de kant van Den Bosch, dus daar ben ik iets eerder dan in Eindhoven zelf. Ik kom er voor dezelfde klussen: lekkage, goten, pannen en lood. Eindhoven is voor mij zo'n 40 minuten rijden, dus stuur eerst een foto via WhatsApp, dan hoor je eerlijk wanneer ik kan komen." },
      { v: "Repareer of vervang je ook dakgoten in Eindhoven?", a: "Ja. In Eindhoven kom ik ook voor een goot die lekt bij een naad of een hoek, die doorhangt en bij een bui overloopt, of die zo oud is dat hij vervangen moet worden. Bij de oude zinken goten in het Villapark kijk ik eerst of een naad solderen genoeg is, bij de rijtjes in Woensel-Noord of de goot weer op afschot kan. Eindhoven is voor mij zo'n 40 minuten rijden, dus zo'n klus plan ik vooraf met je in. Stuur een foto van de goot vanaf de straat en van de plek waar het druppelt, dan hoor je vooraf wat het kost." },
      { v: "Kom je ook in Geldrop en Valkenswaard?", a: "Ja. Geldrop ligt aan de zuidoostkant van Eindhoven en hoort samen met Mierlo bij de gemeente Geldrop-Mierlo. Valkenswaard ligt ten zuiden van Eindhoven en is een eigen gemeente, met ook Dommelen en Borkel en Schaft. Ik kom er voor een lek, een goot die lekt of overloopt, en pannen of lood die los zitten. Vanuit Den Bosch ben ik er langer onderweg dan naar Eindhoven zelf, dus zo'n klus plan ik vooraf. App me een foto van je dak vanaf de straat, of van de natte plek als het binnen lekt, dan weet ik wat er speelt." },
      { v: "Repareer je in Eindhoven ook losse dakpannen en nokvorsten?", a: "Ja. Bij de rijtjes in Woensel-Noord liggen de nokvorsten vaak nog in specie, en die wordt na jaren bros. Dan ligt er na een storm een vorst scheef of vind je brokjes specie in de goot. Bij de villa's in het Villapark, met hun steile daken, kijk ik vooral naar de pannen langs de rand en rond de schoorsteen. Een losse pan of vorst zet ik weer vast, en een kapotte vervang ik door een die past. Lekt het binnen, zet dan een emmer neer en app me meteen een foto. Kan het wachten, dan plan ik de reparatie vooraf met je in, want Eindhoven is voor mij zo'n 40 minuten rijden. Je hoort vooraf wat het kost." },
    ],
  },
];

export const getPlaats = (slug: string) => PLAATSEN.find((p) => p.slug === slug);
