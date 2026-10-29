/**
 * De quiz (29-10-2026, quiz-plan.md): welke klussen er zijn en welke keuzeknoppen bij "Wat speelt er?" horen.
 * De sleutel gaat als "klus" mee naar de server (contract met /home/bot op de VPS):
 *   goot_reinigen | goot_lek | goot_vervangen | daklekkage | dakpannen | nokvorsten | regenpijp | lood | platdak | anders
 * "goot" is alleen een tussenstap op /quiz/ (Dakgoot gekozen): de knop daarna bepaalt welke goot-sleutel het wordt.
 * Een knop met klus/tekst zet de klus om (bijvoorbeeld "Hij lekt ook ergens" bij goot reinigen wordt goot_lek).
 */

export type QuizOptie = { label: string; klus?: string; tekst?: string };
export type QuizKlus = { tekst: string; vraag: string; opties: QuizOptie[] };

const WEET_NIET = { label: "Weet ik niet, zie foto" };

export const QUIZ_KLUSSEN: Record<string, QuizKlus> = {
  goot: {
    tekst: "Dakgoot",
    vraag: "Wat is er met je goot?",
    opties: [
      { label: "Hij moet schoon of loopt over", klus: "goot_reinigen", tekst: "Dakgoot reinigen" },
      { label: "Hij lekt bij een naad of hoek", klus: "goot_lek", tekst: "Dakgoot lekt (plakken of solderen)" },
      { label: "Hij is op en moet vervangen worden", klus: "goot_vervangen", tekst: "Dakgoot vervangen" },
      WEET_NIET,
    ],
  },
  goot_reinigen: {
    tekst: "Dakgoot reinigen",
    vraag: "Wat speelt er met je goot?",
    opties: [
      { label: "Hij loopt over bij een bui" },
      { label: "Er groeit gras of plantjes in" },
      { label: "Al lang niet schoongemaakt" },
      { label: "Hij lekt ook ergens", klus: "goot_lek", tekst: "Dakgoot lekt (plakken of solderen)" },
      WEET_NIET,
    ],
  },
  goot_lek: {
    tekst: "Dakgoot lekt (plakken of solderen)",
    vraag: "Waar lekt je goot?",
    opties: [
      { label: "Bij een naad" },
      { label: "Bij een hoek" },
      { label: "Bij de regenpijp" },
      { label: "Er druppelt water onder de goot door" },
      WEET_NIET,
    ],
  },
  goot_vervangen: {
    tekst: "Dakgoot vervangen",
    vraag: "Wat is er met je goot?",
    opties: [
      { label: "Hij is doorgeroest of op" },
      { label: "Hij lekt op veel plekken" },
      { label: "Hij hangt door of zit los" },
      WEET_NIET,
    ],
  },
  daklekkage: {
    tekst: "Daklekkage",
    vraag: "Wat zie je?",
    opties: [
      { label: "Een natte plek op het plafond" },
      { label: "Het druppelt binnen" },
      { label: "Alleen bij harde wind of veel regen" },
      { label: "Bij de schoorsteen of het dakraam" },
      WEET_NIET,
    ],
  },
  dakpannen: {
    tekst: "Dakpannen kapot of verschoven",
    vraag: "Wat is er met je pannen?",
    opties: [
      { label: "Een pan ligt scheef of los" },
      { label: "Er is een pan kapot" },
      { label: "Er zijn pannen weggewaaid" },
      WEET_NIET,
    ],
  },
  nokvorsten: {
    tekst: "Nokvorsten los of kapot",
    vraag: "Wat is er met je nokvorsten?",
    opties: [
      { label: "Een paar liggen los" },
      { label: "Specie brokkelt af" },
      { label: "Er zijn er een paar kapot" },
      WEET_NIET,
    ],
  },
  regenpijp: {
    tekst: "Regenpijp",
    vraag: "Wat is er met je regenpijp?",
    opties: [
      { label: "Hij lekt of is gescheurd" },
      { label: "Hij zit los van de muur" },
      { label: "Hij is kapot of weg" },
      WEET_NIET,
    ],
  },
  lood: {
    tekst: "Lood bij schoorsteen, muur of dakraam",
    vraag: "Wat is er met het lood?",
    opties: [
      { label: "Het zit los of krult omhoog" },
      { label: "Het is gescheurd" },
      { label: "Het lekt bij de schoorsteen" },
      { label: "Het lekt bij een dakraam of muur" },
      WEET_NIET,
    ],
  },
  platdak: {
    tekst: "Plat dak",
    vraag: "Wat is er met je platte dak?",
    opties: [
      { label: "Het lekt" },
      { label: "Er blijft water staan" },
      { label: "De dakbedekking is oud of gescheurd" },
      WEET_NIET,
    ],
  },
  anders: {
    tekst: "Iets anders",
    vraag: "Vertel kort wat er is",
    opties: [],
  },
};

/** Eerste scherm op /quiz/ zonder vooraf ingevulde klus: "Waar gaat het om?" */
export const QUIZ_KEUZE: { label: string; klus: string }[] = [
  { label: "Dakgoot (reinigen, lek of vervangen)", klus: "goot" },
  { label: "Daklekkage", klus: "daklekkage" },
  { label: "Dakpannen", klus: "dakpannen" },
  { label: "Nokvorsten", klus: "nokvorsten" },
  { label: "Regenpijp", klus: "regenpijp" },
  { label: "Lood bij schoorsteen of muur", klus: "lood" },
  { label: "Plat dak", klus: "platdak" },
  { label: "Iets anders", klus: "anders" },
];

export const QUIZ_HUIS = ["Tussenwoning", "Hoekhuis", "Twee-onder-een-kap", "Vrijstaand", "Appartement of flat", "Anders"];
export const QUIZ_HOOGTE = ["Begane grond of uitbouw", "1e verdieping", "2e verdieping of hoger", "Weet ik niet"];

/** Vast zinnetje bovenaan elke advertentiepagina (quiz-plan.md, teksten) */
export const QUIZ_ZIN = "Beantwoord 5 korte vragen en krijg meestal binnen 10 minuten een gratis prijsindicatie op WhatsApp.";
