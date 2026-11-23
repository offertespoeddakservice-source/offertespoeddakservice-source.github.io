/**
 * Nieuwe kennisartikelen en korte antwoorden sinds 24-11-2026.
 * artikelen-extra-6.ts zet ze achter ARTIKELEN_EXTRA_6 en in KORT_ANTWOORD_6.
 * 24-11-2026 ronde 1: de schade-expert van je verzekeraar komt naar je dak kijken.
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
];

// Kort antwoord bovenaan een artikel. Geen bedragen.
export const KORT_ANTWOORD_7: Record<string, string> = {
  "schade-expert-dak": `Stuurt je verzekeraar een schade-expert na stormschade of een lek, dan bekijkt die wat er kapot is, hoe het kwam en wat het herstel mag kosten. Een open plek of lek mag je in de regel eerst laten dichtmaken. Maak vooraf foto's, bewaar kapotte pannen en rekeningen, en laat de nette reparatie wachten tot je verzekeraar akkoord is.`,
};
