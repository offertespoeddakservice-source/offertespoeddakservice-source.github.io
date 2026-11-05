/**
 * Nieuwe kennisartikelen sinds 05-11-2026. artikelen.ts is te groot geworden voor de automatische controle,
 * daarom staan nieuwe artikelen hier. artikelen.ts zet ze achter de bestaande artikelen in ARTIKELEN.
 */
import type { Artikel } from "./artikelen";
import { prijsVan, inclBtw } from "./prijzen";

const platPrijs = inclBtw("platdak");
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
];
