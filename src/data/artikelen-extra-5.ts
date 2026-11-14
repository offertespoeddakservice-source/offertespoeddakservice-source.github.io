/**
 * Nieuwe kennisartikelen vanaf 15-11-2026 (artikelen-extra-4.ts werd groot).
 * artikelen-extra-4.ts zet ze achter ARTIKELEN_EXTRA_4 en in KORT_ANTWOORD_4.
 */
import type { Artikel } from "./artikelen";
import { inclBtw } from "./prijzen";

export const ARTIKELEN_EXTRA_5: Artikel[] = [
  {
    slug: `boerderij-dak-lekt`,
    datum: `2026-11-15`,
    titel: `Lekt het dak van je boerderij?`,
    h1: `Het dak van je boerderij of woonboerderij lekt: waar het meestal zit en wat je doet`,
    metaTitle: `Dak van je boerderij lekt? | Spoed Dak Service`,
    metaDescription: `Lekt het dak van je boerderij of woonboerderij? Meestal zit het in een lange goot, een kilgoot, de nok, het lood of een oude pan zonder folie eronder. Zo zoek je het uit.`,
    intro: `In Brabant wonen veel mensen in een oude boerderij: vaak een langgevelboerderij met een lang, laag pannendak, soms met de stal of schuur nog aan het huis vast. Zo'n dak is groot, vaak al oud en ligt meestal vrij in het open land. Lekt het, dan zit het bijna altijd op een paar vaste plekken. Hieronder lees je welke dat zijn, wat je meteen doet en wat er meestal nodig is.`,
    secties: [
      { kop: `Lekt het nu? Eerst dit`, tekst: [
        `Zet een emmer of bak onder de druppel en haal spullen weg die nat kunnen worden. Is het boven een lamp of stopcontact nat, zet dan in de meterkast de groep van die kamer uit. Ga niet zelf het dak op: een groot, oud pannendak is hoog en glad, en oude pannen breken als je erop staat. Maak een foto van de natte plek en, vanaf het erf of de weg, van het dak erboven. Wat je verder meteen kunt doen, staat op de <a href="/spoed/">spoedpagina</a>.`,
      ] },
      { kop: `Een groot dak met lange goten`, tekst: [
        `Al het water van een groot dakvlak komt in één lange goot terecht. Staan er bomen bij het huis, dan zit die goot in de herfst snel vol blad, en is de uitloop naar de regenpijp dicht, dan loopt het water bij een flinke bui over de rand of achter de goot langs de muur. Een lange goot kan ook tussen de beugels gaan doorhangen, en dan blijft er water in staan. Binnen zie je dat als een natte plek bovenin de muur. Lees <a href="/kennisbank/dakgoot-loopt-over/">dakgoot loopt over</a>, <a href="/kennisbank/water-achter-dakgoot/">water achter de dakgoot</a> en <a href="/kennisbank/dakgoot-hangt-door/">dakgoot hangt door</a>.`,
      ] },
      { kop: `Oude pannen, vaak zonder folie eronder`, tekst: [
        `Op veel oude boerderijen liggen de pannen direct op de panlatten, zonder folie of dakbeschot eronder. Zo'n dak kan prima droog zijn, zolang elke pan heel is en goed in zijn sluiting ligt. Maar breekt er een pan of schuift hij een stukje, dan regent het meteen op zolder, want er zit niets onder dat het water opvangt. Oude pannen nemen na veel jaren ook meer water op, en na een vorstnacht zie je dan schilfers of stukjes pan in de goot. Lees <a href="/kennisbank/dakpan-kapot-of-verschoven/">dakpan scheef, kapot of verschoven</a> en <a href="/kennisbank/poreuze-dakpannen/">poreuze dakpannen</a>.`,
      ] },
      { kop: `Waar de schuur, stal of aanbouw aansluit`, tekst: [
        `Bij veel boerderijen is er in de loop van de jaren iets bij gebouwd: een schuur, een stal of een aanbouw tegen het woonhuis. Waar twee schuine daken in een hoek samenkomen, ligt een kilgoot, en waar een lager dak tegen de muur van het huis komt, ligt een strook lood of loodvervanger. Op die plekken komt veel water samen. Ligt er blad in de kil of zit het lood los, dan lekt het daar het eerst. Lees <a href="/kennisbank/kilgoot-lekt/">kilgoot lekt</a> en <a href="/kennisbank/lood-op-dak/">lood op je dak</a>.`,
      ] },
      { kop: `De nok, het wolfseind en de schoorsteen`, tekst: [
        `Op oude daken liggen de nokvorsten meestal in specie, en die wordt na veel jaren bros. In het open land trekt de wind hard aan zo'n nok, en dan vind je na een storm brokjes specie in de goot of ligt er een vorst scheef. Veel boerderijen hebben aan de korte kant een schuin stuk dak, het wolfseind, met een schuine nok die net zo kan gaan lekken als de nok bovenop. En staat er een schoorsteen op het dak, dan is het lood rond de voet een vaste plek om na te kijken. Lees <a href="/kennisbank/nokvorsten-los/">losse nokvorsten</a>, <a href="/kennisbank/hoekkeper-lekt/">lekkage bij de hoekkeper</a> en <a href="/kennisbank/lekkage-bij-schoorsteen/">lekkage bij de schoorsteen</a>.`,
      ] },
      { kop: `Dakramen in een oud dak`, tekst: [
        `Is de zolder van de boerderij later verbouwd tot slaapkamers, dan zijn er vaak dakramen in het oude dak gezet. Lekt het onder zo'n raam, dan zit het meestal niet in het glas, maar in het gootstuk of het lood rond het raam, of in een pan ernaast die niet goed terugligt. Lees <a href="/kennisbank/dakraam-lekt/">dakraam lekt</a>.`,
      ] },
      { kop: `De schuur of stal ernaast`, tekst: [
        `Heeft de schuur of de oude stal een eigen dak met pannen, golfplaten of dakleer, dan vergeet je dat dak snel, tot er water op je spullen druppelt. Lees <a href="/kennisbank/pannendak-schuur-lekt/">het pannendak van je schuur lekt</a> en <a href="/kennisbank/golfplaten-lekken/">golfplaten lekken</a>. Zijn de golfplaten van voor 1994, laat dan eerst onderzoeken of er asbest in zit, want daar boor of zaag ik niet in. Heeft je boerderij een rieten dak, dan is het riet zelf werk voor een rietdekker.`,
      ] },
      { kop: `Hoe ik het aanpak`, tekst: [
        `Ik begin bij de natte plek binnen en kijk dan buiten recht erboven en een stuk hoger: de goot, de kil, het lood, de nok en de pannen. Een volle goot maak ik leeg en de uitloop maak ik vrij, een lekke naad in een zinken goot soldeer ik, en een losse of gebroken pan leg ik terug of vervang ik door een pan die in vorm en kleur past. Los lood zet ik weer vast of vervang ik, meestal met loodvervanger en met echt lood als je dat liever hebt. Zijn er op één dakvlak veel pannen op, dan zeg ik eerlijk wanneer het slimmer is om dat dakvlak in één keer aan te pakken. Zie <a href="/diensten/daklekkage/">daklekkage opsporen en repareren</a> en <a href="/diensten/dakrenovatie/">dakrenovatie</a>.`,
      ] },
      { kop: `Wat kost het?`, tekst: [
        `Een lek opsporen en dichten kost meestal ${inclBtw('daklekkage')}, inclusief materiaal. Een paar losse pannen vervangen kost ${inclBtw('dakpan')}. Voor een reparatie aan de goot of groter werk hoor je vooraf de prijs. Stuur een foto van de natte plek en van het dak vanaf het erf of de weg via WhatsApp, dan zeg ik eerlijk wat ik zie.`,
      ] },
    ],
    dienst: { label: `Bekijk: daklekkage opsporen en repareren`, href: `/diensten/daklekkage/` },
    faq: [
      { v: `Moet het hele dak van mijn boerderij eraf als het op een paar plekken lekt?`, a: `Meestal niet. Vaak zit het lek in de goot, de kil, het lood of een paar pannen, en dan is een reparatie op die plek genoeg. Zijn de pannen op een heel dakvlak verweerd of gescheurd, en moet er elk jaar wel ergens iets gebeuren, dan zeg ik eerlijk dat dat dakvlak in één keer slimmer is. Dat hoeft niet het hele dak te zijn.` },
      { v: `Er ligt geen folie onder mijn pannen. Is dat erg?`, a: `Bij een oude boerderij is dat heel gewoon. Zolang de pannen heel zijn en goed liggen, kan zo'n dak droog blijven. Wel merk je een kapotte pan sneller, en bij harde wind met sneeuw kan er wat stuifsneeuw onder de pannen door waaien. Laat je het dak vernieuwen, dan kan er op wens nieuwe folie en nieuwe panlatten onder.` },
      { v: `Mijn boerderij is een monument. Mag je dan gewoon repareren?`, a: `Een kapotte pan vervangen door een pan die er net zo uitziet, is meestal gewoon onderhoud. Wil je iets anders, zoals andere pannen of een andere kleur, vraag dan eerst bij je gemeente wat mag. Lees ook het artikel over je dak repareren in een monument.` },
    ],
  },
];

// Kort antwoord bovenaan een artikel (zie KORT_ANTWOORD in artikelen-extra.ts). Geen bedragen met de hand.
export const KORT_ANTWOORD_5: Record<string, string> = {
  "boerderij-dak-lekt": `Lekt het dak van je boerderij of woonboerderij, dan zit het meestal in een lange goot die vol zit of doorhangt, in een kilgoot of strook lood waar een schuur of aanbouw aansluit, bij de nok of de schuine nok van het wolfseind, of in een oude pan die is gaan schuiven. Op veel oude boerderijen ligt geen folie onder de pannen, dus een kapotte pan geeft al snel een lek. Meestal is een reparatie op die plek genoeg.`,
};
