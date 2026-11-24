/**
 * Nieuwe kennisartikelen en korte antwoorden sinds 24-11-2026.
 * artikelen-extra-6.ts zet ze achter ARTIKELEN_EXTRA_6 en in KORT_ANTWOORD_6.
 * 24-11-2026 ronde 1: de schade-expert van je verzekeraar komt naar je dak kijken.
 * 24-11-2026 ronde 2: je lichtbuis of daglichtbuis lekt.
 * 24-11-2026 ronde 5: het lekt bij de zonneboiler op je dak.
 */
import type { Artikel } from "./artikelen";

export const ARTIKELEN_EXTRA_7: Artikel[] = [
  {
    slug: `schade-expert-dak`,
    datum: `2026-11-24`,
    titel: `De schade-expert komt naar je dak kijken`,
    h1: `De verzekeraar stuurt een schade-expert voor je dak: hoe gaat dat, en wat regel je vooraf?`,
    metaTitle: `Schade-expert voor je dak: hoe gaat dat? | Spoed Dak Service`,
    metaDescription: `Stuurt je verzekeraar een schade-expert na stormschade of een lek? Zo bereid je het bezoek voor, zie je of het lek al dicht mag en lees je zijn rapport.`,
    intro: `Na stormschade of een flinke lekkage stuurt je verzekeraar soms een schade-expert langs. Die bekijkt wat er kapot is, hoe het is gekomen en wat het herstel mag kosten. Voor de meeste mensen is dat de eerste keer, en dan wil je weten wat hij doet, wat je klaarlegt en of je het lek al mag laten maken. Hieronder lees je hoe het meestal gaat.`,
    secties: [
      { kop: `Wanneer stuurt de verzekeraar een expert?`, tekst: [
        `Bij een kleine schade vraagt je verzekeraar meestal alleen foto's en een rekening of offerte. Gaat het om een groter bedrag, is niet duidelijk hoe de schade is ontstaan, of twijfelt de verzekeraar of het storm was of slijtage, dan sturen ze vaak een schade-expert. Die werkt in opdracht van de verzekeraar, bekijkt de schade en schrijft er een rapport over. Hij beslist niet zelf over je uitkering, maar zijn rapport weegt wel zwaar.`,
      ] },
      { kop: `Mag het lek al dicht voordat de expert er is?`, tekst: [
        `In de regel wel, en vaak wordt dat zelfs van je verwacht. Ligt je dak open of komt er water binnen, laat dat dan eerst dichtmaken of afdekken, zodat er niet meer schade bijkomt. Maak vooraf foto's, binnen en vanaf de straat, en gooi kapotte pannen, stukken lood of nokvorsten niet weg. De nette reparatie, zoals een groter stuk dak vervangen, laat je liever wachten tot je verzekeraar akkoord heeft gegeven. Twijfel je, bel dan eerst je verzekeraar en vraag hoe zij het willen. Wat je meteen zelf kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Wat leg je klaar voor het bezoek?`, tekst: [
        `De datum en het tijdstip van de schade, en wat voor weer het was: storm, een hoosbui of hagel.`,
        `Foto's en filmpjes van vlak na de schade: de natte plek binnen, het plafond, de zolder en je dak vanaf de straat.`,
        `Wat er naar beneden kwam, zoals een kapotte pan, een nokvorst of een stuk lood.`,
        `De rekening van de noodreparatie en, als je die al hebt, de prijs voor de nette reparatie.`,
        `Een vrije doorgang naar de zolder en naar de plek binnen waar het nat werd.`,
      ] },
      { kop: `Waar kijkt de expert naar?`, tekst: [
        `Vooral naar de oorzaak. Bij storm kijkt hij of het die dag echt zo hard waaide als in je polis staat, en of de schade daarbij past. Bij een lek kijkt hij of het water plotseling binnenkwam of dat het er al langer zat: oude kringen op het plafond, zwart geworden hout of lood dat al jaren los zat, zien verzekeraars vaak als slijtage. Verder kijkt hij wat er binnen en aan het dak beschadigd is, en of de prijs voor het herstel redelijk is. Waarom een verzekeraar soms niet betaalt, lees je in <a href="/kennisbank/verzekering-betaalt-daklekkage-niet/">de verzekering betaalt het lek niet</a>.`,
      ] },
      { kop: `Wat ik voor je doe`, tekst: [
        `Als ik het lek dichtmaak of je dak herstel, maak ik foto's van wat ik aantref en van wat ik doe, met een korte omschrijving van de schade en van de oorzaak zoals ik die zie. Die kun je doorsturen naar je verzekeraar of de expert. Voor de nette reparatie hoor je vooraf wat het kost, zodat je die prijs kunt doorgeven voordat er iets gebeurt. Wat je verzekering meestal wel en niet vergoedt, lees je in <a href="/kennisbank/daklekkage-verzekering/">daklekkage en je verzekering</a>.`,
      ] },
      { kop: `Ben je het niet eens met het rapport?`, tekst: [
        `Vraag het rapport op en lees goed wat er over de oorzaak staat. Klopt er iets niet, reageer dan schriftelijk en stuur je eigen foto's mee. In veel polissen staat dat je bij onenigheid een eigen expert mag inschakelen, een contra-expert. Kijk in je polis wat daarvoor geldt en wie die kosten betaalt. Heb je een rechtsbijstandsverzekering, dan kun je daar ook om advies vragen.`,
      ] },
    ],
    dienst: { label: `Bekijk: stormschade aan je dak`, href: `/diensten/stormschade/` },
    faq: [
      { v: `Moet ik thuis zijn als de expert komt?`, a: `Meestal wel, want hij wil de schade binnen zien en vaak ook op zolder kijken. Kun je er zelf niet bij zijn, vraag dan of iemand met een sleutel er kan zijn, en spreek dat af met je verzekeraar.` },
      { v: `De expert kan pas over een week komen. Moet het lek zo lang blijven?`, a: `Nee. Laat een open plek of een lek eerst dichtmaken of afdekken, zodat er niet meer schade bijkomt. Maak vooraf foto's, bewaar wat kapot is en laat je verzekeraar weten dat er een noodreparatie is gedaan.` },
      { v: `Gaat de expert zelf het dak op?`, a: `Dat verschilt. Vaak kijkt hij vanaf de grond, vanuit een dakraam of met een camera aan een lange stok. Daarom zijn jouw foto's van vlak na de schade, en die van de dakdekker die het dichtmaakte, zo nuttig.` },
    ],
  },
  {
    slug: `lichtbuis-lekt`,
    datum: `2026-11-24`,
    titel: `Lichtbuis of daglichtbuis lekt?`,
    h1: `Je lichtbuis of daglichtbuis lekt: de aansluiting op het dak, de koepel of condens?`,
    metaTitle: `Lichtbuis of daglichtbuis lekt? | Spoed Dak Service`,
    metaDescription: `Druppelt het uit je lichtbuis of langs het rooster in je plafond? Meestal zit het in de aansluiting op het dak, soms in de koepel, en vaak is het condens.`,
    intro: `Een lichtbuis, ook wel daglichtbuis of lichttunnel genoemd, brengt daglicht via een glanzende buis van het dak naar een gang, overloop of badkamer. Bovenop het dak zit een kleine koepel, en onderaan in je plafond een rond rooster. Druppelt het daar, dan komt het water meestal niet door de buis zelf. Hieronder lees je waar het meestal zit, hoe je condens herkent en wie je belt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een bak of een handdoek onder het rooster en haal spullen weg die nat kunnen worden. Zit er een lampje in of naast het rooster, zet dan in de meterkast de groep van die ruimte uit en raak niets aan. Ga niet zelf het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Waar het meestal lekt`, tekst: [
        `Bij de aansluiting op een pannendak. De buis gaat door het dak met een kraag of plaat die over de pannen ligt, net als bij een pijp door het dak. Ligt die kraag niet meer goed over de pannen, is de rand losgekomen of is een pan ernaast gaan schuiven, dan loopt het regenwater langs de buitenkant van de buis naar binnen. Lees ook <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
        `Bij de aansluiting op een plat dak. Daar staat de buis in een opstaande rand die in de dakbedekking is opgenomen. Laat die aansluiting los, of blijft er na een bui water tegen de rand staan, dan komt het erachter. Dat werkt net zo als bij een <a href="/kennisbank/lichtkoepel-lekt/">lichtkoepel die lekt</a>.`,
        `Bij de koepel zelf. Is de kleine koepel bovenop gebarsten, bijvoorbeeld door hagel, of zit hij niet goed meer vast, dan kan het er bij een bui in regenen. Zie ook <a href="/kennisbank/hagelschade-dak/">hagelschade aan je dak</a>.`,
        `Bij de verbindingen in de buis. Op zolder bestaat de buis vaak uit een paar delen die in elkaar schuiven. Zit daar een kier, dan komt er warme, vochtige lucht uit huis in de buis, en dat geeft condens.`,
      ] },
      { kop: `Lek of condens?`, tekst: [
        `Een lichtbuis loopt vaak door een koude zolder. Komt er warme, vochtige lucht uit de badkamer of de gang in de buis, dan slaat die neer tegen de koude binnenkant en druppelt het terug naar het rooster. Dat lijkt op een lek, maar het water komt van binnen.`,
        `Het verschil: condens zie je vooral op koude ochtenden, ook als het dagen droog is, vaak als druppels of een waas in het rooster. Een lek komt bij of vlak na regen, en dan is op zolder de buitenkant van de buis nat, vanaf het dak naar beneden. Meer over het verschil lees je in <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Zo kijk je zelf`, tekst: [
        `Ga na een bui met een zaklamp naar zolder en kijk langs de buitenkant van de buis. Is het hout of de folie rond de plek waar de buis door het dak gaat nat, dan zit het in de aansluiting. Is alleen de binnenkant nat, of zit er een waas in het rooster, dan is het vaker condens. Kijk vanaf de straat met de zoom van je telefoon of de koepel heel is en recht staat, en of de pannen eromheen netjes liggen. Maak van alles een foto.`,
      ] },
      { kop: `Wie doet wat?`, tekst: [
        `De aansluiting van de buis op het dak, dus de kraag of de rand en de pannen eromheen, is dakdekkerswerk, net als de aansluiting rond een dakraam of een pijp door het dak. Die kijk ik na en maak ik weer dicht. De buis, het rooster en de koepel zelf horen bij de leverancier of de installateur die de lichtbuis heeft geplaatst. Is hij nog maar kort geleden geplaatst, meld het lek dan eerst daar. Twijfel je, stuur me dan een foto van de buis op zolder en van je dak vanaf de straat via WhatsApp, dan zeg ik eerlijk wat ik zie.`,
      ] },
      { kop: `Wat je beter niet doet`, tekst: [
        `Smeer geen kit rond de koepel of de kraag. Dat houdt vaak maar een paar maanden, en daarna moet het er weer af voordat de aansluiting goed gemaakt kan worden. Duw op zolder niet tegen de buis om te kijken, want de delen schuiven makkelijk uit elkaar. En ga niet zelf het dak op, zeker niet als het nat of glad is.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van waar het zit en hoe goed ik erbij kan. Een pan naast de kraag die is gaan schuiven, is een andere klus dan een aansluiting op een plat dak die opnieuw moet. Je hoort vooraf wat het kost, voordat er iets gebeurt. Richtprijzen voor andere klussen staan op de <a href="/prijzen/">prijzenpagina</a>.`,
      ] },
    ],
    dienst: { label: `Bekijk: lekkend dakraam repareren`, href: `/diensten/dakraam-lekkage/` },
    faq: [
      { v: `Is water uit mijn lichtbuis spoed?`, a: `Druppelt het flink, of zit er een lampje in of naast het rooster, dan wel: zet in de meterkast de groep uit, vang het water op en stuur me een foto via WhatsApp. Zijn het een paar druppels op een koude ochtend en is het verder droog, dan is het vaak condens en kan het wachten.` },
      { v: `Mijn lichtbuis druppelt alleen in de winter. Lekt hij?`, a: `Meestal niet. In de winter is de buis op zolder koud, en dan slaat vocht uit huis er aan de binnenkant tegen neer. Vraag de leverancier of installateur of de verbindingen in de buis dicht zijn en of de buis op zolder geïsoleerd kan worden. Wordt het juist nat bij regen, ook in de zomer, dan zit het eerder in de aansluiting op het dak.` },
      { v: `De lichtbuis zit er pas een paar maanden in en lekt al. Wie lost dat op?`, a: `Meld het eerst bij wie hem heeft geplaatst, met foto's van de natte plek en van je dak vanaf de straat. Die moet in de regel terugkomen om het goed te maken. Komt er niemand, of bestaat het bedrijf niet meer, stuur me dan een foto, dan kijk ik naar de aansluiting op het dak.` },
    ],
  },
  {
    slug: `zonneboiler-lekt`,
    datum: `2026-11-24`,
    titel: `Lekt het bij je zonneboiler op het dak?`,
    h1: `Het lekt bij de zonneboiler op je dak: de doorvoer van de leidingen, een pan bij de beugels, of de installatie zelf?`,
    metaTitle: `Zonneboiler lekt bij regen? Zo vind je het | Spoed Dak Service`,
    metaDescription: `Druppelt het op zolder langs de leidingen van je zonneboiler? Bij regen zit het vaak in de doorvoer of een pan bij de beugels. Zo zie je wie je belt.`,
    intro: `Een zonneboiler verwarmt je water met de zon. Op het dak ligt een collector, een paneel of een rij glazen buizen, en daarvandaan lopen twee leidingen door het dak naar het vat op zolder of in een kast. Wordt het nat bij die leidingen, dan wil je weten of het regenwater van buiten is of vloeistof uit de installatie. Hieronder lees je hoe je dat ziet, waar het bij regen meestal zit en wie je belt.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een bak met een doek erin onder de druppel en haal spullen weg die nat kunnen worden. Komt het water bij een lamp, een stopcontact of de pomp en de regeling bij het vat, zet dan in de meterkast de groep uit en raak niets aan. Draai niet zelf aan kranen of ventielen van de installatie en ga niet het dak op. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Regenwater of vloeistof uit de installatie?`, tekst: [
        `Dit is de eerste vraag, want het bepaalt wie je belt. Wordt het alleen nat bij of vlak na regen, en is de buitenkant van de leiding of het hout eromheen nat van boven naar beneden, dan komt er regenwater van buiten naar binnen. Dat is dakwerk.`,
        `Druppelt het ook op droge dagen, of juist als de zon op het dak staat, dan lekt eerder de installatie zelf: een koppeling, een leiding of het vat. In veel zonneboilers zit geen gewoon water maar een vloeistof die niet bevriest. Voelt het druppelwater wat glad of plakkerig aan, of geeft een drukmetertje bij het vat een lagere druk aan dan normaal, dan is dat een aanwijzing. Dat is werk voor je installateur.`,
        `Op koude dagen kan er ook condens op een leiding staan die niet goed is geïsoleerd. Dat zie je als druppels over de hele leiding, ook ver van de plek waar hij door het dak gaat. Lees ook <a href="/kennisbank/condens-of-lekkage-op-zolder/">condens of lekkage op zolder</a>.`,
      ] },
      { kop: `Waar het bij regen meestal lekt`, tekst: [
        `Bij de doorvoer van de leidingen. De leidingen gaan samen of apart door het dak, meestal door een speciale doorvoerpan met een kraag. Is de kraag hard of gescheurd, of sluit de pan niet goed aan op de pannen eromheen, dan loopt het regenwater langs de leiding naar binnen. Dat werkt net zo als bij <a href="/kennisbank/lekkage-bij-dakdoorvoer/">lekkage bij een dakdoorvoer</a>.`,
        `Bij de beugels. De collector staat op beugels die tussen de pannen door aan het dak vastzitten. Is daar bij het plaatsen een pan gebarsten of een stukje uitgeslepen, of ligt een pan niet meer goed in de sluiting, dan waait de regen eronder. Dat is hetzelfde als bij <a href="/kennisbank/lekkage-bij-zonnepanelen/">lekkage bij zonnepanelen</a>.`,
        `Boven de collector. Blijft er blad liggen tussen de collector en de pannen erboven, dan kan het water bij een flinke bui opzij onder de pannen lopen.`,
      ] },
      { kop: `Zo kijk je zelf`, tekst: [
        `Ga tijdens of vlak na een bui met een zaklamp naar zolder en kijk waar de leidingen door het dak komen. Is het hout of de folie rond die plek nat, dan zit het in de doorvoer. Is het nat onder de plek waar een beugel zit, of een eind van de leidingen vandaan, dan is het eerder een pan. Maak vanaf de straat met de zoom van je telefoon een foto van de collector en de pannen eromheen. Stuur beide foto's via WhatsApp, dan zie ik vaak al waar het zit.`,
      ] },
      { kop: `Wie doet wat?`, tekst: [
        `De collector, de leidingen, de vloeistof en het vat horen bij je installateur. Is de zonneboiler pas geplaatst, meld het lek dan eerst bij wie hem heeft geplaatst. De pannen rond de beugels en de doorvoer waar de leidingen door het dak gaan, zijn dakwerk. Die maak ik weer dicht: een gebarsten of verschoven pan vervang ik of leg ik terug, en een kraag of doorvoerpan die op is, vervang ik. Moet de collector er even af om bij de pannen te komen, dan doet je installateur dat. Twijfel je wie je nodig hebt, kijk dan bij <a href="/kennisbank/welke-vakman-voor-je-dak/">wie je belt voor welk werk aan je dak</a>.`,
      ] },
      { kop: `Is de zonneboiler weggehaald?`, tekst: [
        `Wordt een oude zonneboiler weggehaald, bijvoorbeeld omdat er een warmtepomp of zonnepanelen komen, dan blijven er open plekken in het dak over: waar de leidingen door het dak gingen en waar de beugels zaten. Is dat niet goed dichtgemaakt, dan lekt het daar bij de eerste flinke bui. Ik maak de doorvoer dicht en leg er pannen in die bij je dak passen. Wat je na het weghalen van panelen verder nakijkt, lees je in <a href="/kennisbank/zonnepanelen-eraf-dak-nakijken/">zonnepanelen eraf: wat moet er aan je dak</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Dat hangt af van wat er lek is en hoe goed ik erbij kan. Een pan bij een beugel vervangen is een andere klus dan een nieuwe doorvoer rond de leidingen. Je hoort vooraf wat het kost, voordat er iets gebeurt.`,
      ] },
    ],
    dienst: { label: `Bekijk: dakdoorvoer plaatsen of repareren`, href: `/diensten/dakdoorvoer/` },
    faq: [
      { v: `Is een lekkende zonneboiler spoed?`, a: `Druppelt het flink, of komt het water bij de elektra, dan wel: zet de groep uit, vang het water op en bel of app me met een foto. Lekt de installatie zelf en zakt de druk, bel dan ook je installateur. Zijn het een paar druppels na een bui en blijft het verder droog, dan kan het vaak een paar dagen wachten.` },
      { v: `De zonneboiler is pas geplaatst en nu lekt het. Wie lost dat op?`, a: `Meld het eerst bij het bedrijf dat hem heeft geplaatst, met foto's van de natte plek en van je dak vanaf de straat. Lekkage door het plaatsen hoort dat bedrijf in de regel zelf op te lossen. Komt er niemand, of bestaat het bedrijf niet meer, stuur me dan een foto. Dan kijk ik naar de pannen en de doorvoer.` },
      { v: `Kun je de leidingen van mijn zonneboiler ook verleggen of afkoppelen?`, a: `Nee, aan de installatie zelf werk ik niet. Dat doet je installateur. Ik doe het stuk dak: de doorvoer waar de leidingen door het dak gaan en de pannen eromheen. Spreek vooraf af wie wat doet, dan ligt je dak niet langer open dan nodig.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel. Geen bedragen.
export const KORT_ANTWOORD_7: Record<string, string> = {
  "schade-expert-dak": `Stuurt je verzekeraar een schade-expert na stormschade of een lek, dan bekijkt die wat er kapot is, hoe het kwam en wat het herstel mag kosten. Een open plek of lek mag je in de regel eerst laten dichtmaken. Maak vooraf foto's, bewaar kapotte pannen en rekeningen, en laat de nette reparatie wachten tot je verzekeraar akkoord is.`,
  "lichtbuis-lekt": `Druppelt het uit je lichtbuis of langs het rooster in je plafond, dan zit het meestal in de aansluiting van de buis op het dak: de kraag over de pannen of de opstaande rand op een plat dak. Soms is de koepel bovenop gebarsten. Druppelt het vooral op koude ochtenden, ook als het droog is, dan is het vaak condens in de buis.`,
  "zonneboiler-lekt": `Wordt het nat op zolder bij de leidingen van je zonneboiler, kijk dan eerst wanneer. Lekt het alleen bij regen, dan zit het meestal in de doorvoer waar de leidingen door het dak gaan of in een pan bij de beugels van de collector. Dat is dakwerk. Druppelt het ook op droge dagen, dan lekt de installatie zelf, en dan bel je je installateur.`,
};
