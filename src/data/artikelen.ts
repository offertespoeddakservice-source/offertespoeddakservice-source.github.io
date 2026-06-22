/**
 * Kennisbank-artikelen — cornerstone-content voor informatie-zoekers (longtail-SEO).
 * Elk artikel linkt intern naar een dienstpagina (interne links = SEO + conversie).
 */

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
}

export const ARTIKELEN: Artikel[] = [
  {
    slug: "daklekkage-opsporen",
    titel: "Daklekkage opsporen",
    h1: "Daklekkage opsporen: zo vind je de oorzaak (zonder sloopwerk)",
    metaTitle: "Daklekkage opsporen — oorzaken | Spoed Dak Service",
    metaDescription:
      "Daklekkage opsporen? De natte plek zit zelden onder het echte lek.",
    intro:
      "Een natte plek op je plafond betekent bijna nooit dat het lek daar precies boven zit. Water loopt via panlatten, isolatie en naden naar het laagste punt en komt daar pas naar binnen. Daarom is een lek opsporen vakwerk — hieronder hoe het werkt.",
    secties: [
      { kop: "De meest voorkomende oorzaken", tekst: [
        "Een gebroken of verschoven dakpan is veruit de nummer één. Daarna: gescheurd of losgelaten lood bij de schoorsteen, dakkapel of het dakraam, een verstopte of overlopende goot, en versleten kitwerk of naden bij een plat dak.",
        "Bij platte daken zit het lek vaak bij een naad of opstand, terwijl het water verderop naar binnen komt — dat maakt opsporen lastiger.",
      ] },
      { kop: "Zo spoor je het op — zonder sloopwerk", tekst: [
        "Ik werk van buiten naar binnen: eerst het dak na op losse pannen, lood en naden, dan de zolder op natte sporen. Vaak is een gerichte controle genoeg en hoeft er niks opengebroken te worden.",
        "Lukt het visueel niet, dan zijn er technieken (water gericht aanbrengen, rook- of vochtmeting) om de exacte plek te vinden. Eerst de schade beperken, dan de oorzaak aanpakken.",
      ] },
      { kop: "Wat kost het?", tekst: [
        "Een punctuele reparatie kost meestal €200 tot €500, inclusief materiaal. Bij spoed buiten kantooruren komt daar een toeslag bij. Je hoort altijd de prijs voordat ik begin.",
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage" },
    faq: [
      { v: "Moet er voor het opsporen iets opengebroken worden?", a: "Meestal niet. In de meeste gevallen vind ik het lek met een gerichte controle van buiten en op zolder, zonder sloopwerk." },
      { v: "Kun je vandaag nog komen?", a: "Bij spoed in de regio Den Bosch vaak wel. Bel of WhatsApp, dan hoor je meteen wanneer ik kan." },
    ],
  },
  {
    slug: "dakpannen-coaten-of-vervangen",
    titel: "Coaten of vervangen?",
    h1: "Dakpannen coaten of vervangen? Zo maak je de juiste keuze",
    metaTitle: "Dakpannen coaten of vervangen? | Spoed Dak Service",
    metaDescription:
      "Dakpannen coaten of vervangen? Coaten is veel goedkoper en kan jaren schelen — mits je pannen nog goed zijn.",
    intro:
      "Een verweerd dak hoeft niet meteen vervangen te worden. Vaak kun je pannen die nog stevig zijn coaten — veel goedkoper, en je dak gaat er jaren mee verder. Maar coaten is niet altijd de juiste keuze. Hieronder het verschil.",
    secties: [
      { kop: "Wanneer coaten loont", tekst: [
        "Als je pannen nog stevig en heel zijn maar dof, vuil of vol mos, dan is reinigen + coaten ideaal. De coating beschermt tegen vocht, mos en uv, en kost een fractie van vervangen.",
        "Het is ook een mooi moment voor een gootcheck en het nakijken van lood en nokvorsten.",
      ] },
      { kop: "Wanneer vervangen verstandiger is", tekst: [
        "Zijn de pannen poreus, bros of op meerdere plekken kapot, dan houdt coaten geen stand — dan ben je beter af met (gedeeltelijk) vervangen. Coaten op slechte pannen is zonde van het geld.",
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
    h1: "Hoe vaak moet je je dakgoot reinigen — en wat kost het?",
    metaTitle: "Hoe vaak dakgoot reinigen + kosten | Spoed Dak Service",
    metaDescription:
      "Hoe vaak moet je je dakgoot reinigen? Meestal 1× per jaar, vaker bij bomen in de buurt.",
    intro:
      "Volle goten lijken onschuldig, maar ze zijn de oorzaak van veel vochtschade: overlopend water, natte muren en op den duur lekkage. Hoe vaak moet je ze laten reinigen, en wat kost dat?",
    secties: [
      { kop: "Eén keer per jaar — vaker bij bomen", tekst: [
        "Voor de meeste huizen is één keer per jaar genoeg, het beste in het najaar als het blad gevallen is. Staan er bomen vlak bij je huis, dan is twee keer per jaar slimmer.",
        "Het najaar (augustus–oktober) is de drukste én belangrijkste periode: blad én herfststormen zorgen dan voor de meeste verstoppingen.",
      ] },
      { kop: "Waarom het belangrijk is", tekst: [
        "Een verstopte goot loopt over langs de gevel, trekt vocht in muren en fundering en kan binnen voor lekkage zorgen. Een kleine jaarlijkse onderhoudsbeurt voorkomt dure schade.",
      ] },
      { kop: "Wat kost goten reinigen?", tekst: [
        "Voor een doorsnee rijtjeswoning begin ik vanaf €25 per kant (€40 voor beide kanten), zonder voorrijkosten als je tijdig plant. Bij een groter of hoger huis hoor je vooraf de vaste prijs.",
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen" },
    faq: [
      { v: "Wanneer kan ik het beste laten reinigen?", a: "In het najaar, als het meeste blad gevallen is — dan heb je er het hele jaar profijt van en voorkom je winterlekkage." },
    ],
  },
  {
    slug: "wat-kost-daklekkage-repareren",
    titel: "Wat kost daklekkage repareren?",
    h1: "Wat kost het om een daklekkage te repareren? (eerlijke prijzen)",
    metaTitle: "Wat kost daklekkage repareren? Prijzen | Spoed Dak Service",
    metaDescription:
      "Wat kost een daklekkage repareren? Een punctuele reparatie meestal €200–€500.",
    intro:
      "De eerste vraag bij een lek is bijna altijd: wat gaat me dit kosten? Eerlijk antwoord: dat hangt af van de oorzaak en hoe lang het al speelt. Hieronder zet ik de prijzen op een rij zoals ik ze ook aan de telefoon zou noemen — vaste prijs vooraf, geen verrassingen achteraf.",
    secties: [
      { kop: "Een punctuele reparatie: €200 tot €500", tekst: [
        "De meeste lekkages zijn één duidelijke oorzaak: een gebroken pan, losgelaten lood of een versleten naad. Zo'n gerichte reparatie kost meestal €200 tot €500, inclusief materiaal. Je hoort het bedrag voordat ik begin.",
        "Bij spoed buiten kantooruren komt daar een toeslag bij — maar ik zeg eerlijk of het écht niet tot de volgende dag kan wachten.",
      ] },
      { kop: "Waar de prijs van afhangt", tekst: [
        "Drie dingen bepalen de prijs: de oorzaak (een losse pan is zo gepiept, een rotte dakvoet is meer werk), de bereikbaarheid (hoogte, steiger of ladder) en het daktype. Een pannendak repareer je anders dan een plat dak met bitumen of EPDM.",
        "Marktbreed lopen reparaties per vierkante meter uiteen van zo'n €130–€210 voor een pannendak tot €250–€300 voor een plat dak. Voor een gericht klusje reken ik liever een eerlijke vaste prijs dan een vaag bedrag per meter.",
      ] },
      { kop: "En het opsporen zelf?", tekst: [
        "De natte plek zit zelden onder het echte lek, dus opsporen hoort erbij. Een visuele controle van buiten en op zolder zit vaak gewoon bij de reparatie in. Is er gerichte lekdetectie nodig (vocht- of rookmeting), dan reken je marktbreed €125–€350 apart — maar in de meeste gevallen vind ik het zonder dat extra gereedschap.",
      ] },
      { kop: "Waarom uitstellen juist duur is", tekst: [
        "Dit is de belangrijkste: een kleine lekkage van een paar honderd euro kan binnen een half jaar uitgroeien tot €800–€2.500 aan vocht-, hout- en isolatieschade. Snel een klein bedrag uitgeven is bijna altijd goedkoper dan wachten.",
        "Daarom kom ik bij een lek liever vandaag dan volgende week — eerst de schade stoppen, dan netjes herstellen.",
      ] },
    ],
    dienst: { label: "Bekijk: daklekkage & spoed", href: "/diensten/daklekkage" },
    faq: [
      { v: "Krijg ik de prijs vooraf te horen?", a: "Altijd. Ik kijk wat de oorzaak is en noem een vaste prijs voordat ik begin — geen meerwerk-verrassingen achteraf." },
      { v: "Hoe wordt het lek gevonden?", a: "Meestal met een gerichte controle van buiten en op zolder, zonder sloopwerk. Lees daarover in het artikel ‘Daklekkage opsporen’." },
      { v: "Vergoedt mijn verzekering de reparatie?", a: "Bij storm- of stormgerelateerde schade vaak wel (opstalverzekering). Ik lever foto's en een omschrijving aan zodat je het kunt indienen." },
    ],
  },
  {
    slug: "verstopte-regenpijp-lekkende-dakgoot",
    titel: "Verstopte regenpijp?",
    h1: "Verstopte regenpijp of lekkende dakgoot — oorzaken en oplossing",
    metaTitle: "Verstopte regenpijp & lekkende dakgoot | Spoed Dak Service",
    metaDescription:
      "Verstopte regenpijp of lekkende dakgoot? Loopt het water langs je gevel, dan zit de afvoer dicht.",
    intro:
      "Loopt het water bij regen over de goot of langs je gevel naar beneden, dan is de kans groot dat de regenpijp verstopt zit. Vervelend, maar zelden ingewikkeld. Hieronder waar het vandaan komt, waarom je het niet moet laten zitten, en hoe ik het verhelp.",
    secties: [
      { kop: "Waar het door komt", tekst: [
        "Blad, mos, takjes en zand spoelen vanaf het dak de goot in en zakken door naar de regenpijp, waar het zich ophoopt. Vooral in het najaar gaat dat hard, en in de winter kan een verstopping bevriezen en de afvoer helemaal dichtzetten.",
        "Een lekkende dakgoot is vaak hetzelfde probleem: de goot loopt over omdat het water niet weg kan, niet omdat de goot zelf kapot is.",
      ] },
      { kop: "Hoe je het herkent", tekst: [
        "Water dat bij regen over de gootrand klotst, een straaltje langs de gevel, of vochtige plekken op de muur onder de goot. Soms lekt het bij de verbindingen van de pijp.",
      ] },
      { kop: "Waarom je het niet moet laten zitten", tekst: [
        "Blijft de afvoer dicht, dan trekt het overlopende water vocht in je gevel en fundering. Dat geeft vochtplekken, schimmel en op den duur zelfs scheuren — veel duurder dan een keer doorspoelen.",
      ] },
      { kop: "Hoe ik het oplos", tekst: [
        "Ik maak eerst de goot leeg (blad, mos, modder), controleer of de instroom naar de regenpijp vrij is en spoel daarna de hele pijp door tot het water vrij wegloopt — niet alleen de goot zelf. Last van bomen in de buurt? Dan adviseer ik bladroosters zodat het minder snel terugkomt.",
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen" },
    faq: [
      { v: "Kan ik een verstopte regenpijp zelf ontstoppen?", a: "Soms, met een tuinslang van bovenaf. Maar op hoogte werken is niet zonder risico, en zit de verstopping diep, dan krijg je 'm er zo niet uit. Ik doe het veilig en grondig in één keer." },
      { v: "Hoe voorkom ik dat het terugkomt?", a: "Eén keer per jaar de goot laten reinigen (najaar) en eventueel bladroosters plaatsen. Staan er bomen vlakbij, dan twee keer per jaar." },
    ],
  },
  {
    slug: "stormschade-eerste-hulp",
    titel: "Stormschade: eerste hulp",
    h1: "Stormschade aan je dak: eerste hulp en je verzekering",
    metaTitle: "Stormschade dak — eerste hulp | Spoed Dak Service",
    metaDescription:
      "Stormschade aan je dak? Weggewaaide pannen of een open dak laten regen binnen.",
    intro:
      "Na een storm telt elk uur: losse of weggewaaide pannen en open plekken laten meteen regen binnen. Het belangrijkste is rust houden, je veiligheid voorop zetten en snel de schade laten beperken. Hieronder de stappen.",
    secties: [
      { kop: "Eerst: je veiligheid", tekst: [
        "Ga niet zelf het dak op tijdens of vlak na een storm — nat, winderig en met losse delen is dat te gevaarlijk. Blijf uit de buurt van loshangende pannen of delen die naar beneden kunnen komen, ook op de grond.",
      ] },
      { kop: "Maak foto's en beperk de schade", tekst: [
        "Maak van een veilige plek foto's van de schade; die heb je straks nodig voor je verzekering. Vang binnen lekwater op en zet spullen droog. Het écht afdekken van het dak laat je aan een vakman over.",
      ] },
      { kop: "Je verzekering", tekst: [
        "Storm- en hagelschade valt vaak onder je opstalverzekering. Meld de schade bij je verzekeraar en bewaar de foto's. Ik lever een duidelijke omschrijving en foto's aan van wat ik aantref en herstel, zodat jij het kunt indienen.",
      ] },
      { kop: "Wanneer je moet bellen", tekst: [
        "Een open dak of actieve lekkage is spoed — daar kom ik snel voor langs om eerst de schade te stoppen (afdekken, dichten), en daarna netjes te herstellen. Bel of WhatsApp, dan hoor je meteen wanneer ik kan.",
      ] },
    ],
    dienst: { label: "Bekijk: stormschade", href: "/diensten/stormschade" },
    faq: [
      { v: "Moet ik zelf het dak op om de schade af te dekken?", a: "Nee, doe dat niet — zeker niet vlak na een storm. Bel mij, ik dek het veilig af en herstel daarna." },
      { v: "Vergoedt mijn verzekering stormschade?", a: "Vaak wel via de opstalverzekering. Ik lever foto's en een omschrijving aan zodat je het kunt indienen; check de voorwaarden bij je verzekeraar." },
    ],
  },
  {
    slug: "dakonderhoud-per-seizoen",
    titel: "Dakonderhoud per seizoen",
    h1: "Dakonderhoud per seizoen: wat je wanneer moet controleren",
    metaTitle: "Dakonderhoud checklist per seizoen | Spoed Dak Service",
    metaDescription:
      "Hoe vaak moet je je dak onderhouden? Twee keer per jaar een check (voorjaar + najaar) voorkomt dure schade.",
    intro:
      "Een dak gaat tientallen jaren mee, maar alleen als je het een beetje bijhoudt. Twee korte checks per jaar — in het voorjaar en het najaar — voorkomen verreweg de meeste dure schade. Hieronder wat er per seizoen toe doet, en hoe vaak je een vakman nodig hebt.",
    secties: [
      { kop: "Twee keer per jaar: voorjaar en najaar", tekst: [
        "De vuistregel is twee visuele controles per jaar. In het voorjaar herstel je winterschade (losse pannen, gescheurd lood, gootschade van vorst). In het najaar maak je het dak winterklaar: goten leeg vóór de bladval, pannen en lood na voor de eerste herfststorm.",
        "Is je dak ouder dan zo'n vijftien jaar, dan is twee keer kijken echt geen luxe — oudere daken laten sneller los.",
      ] },
      { kop: "Goten: minimaal twee keer per jaar", tekst: [
        "Goten zijn het vaakst de oorzaak van vochtschade. Maak ze minstens twee keer per jaar leeg, en bij bomen in de buurt vaker. Najaar is het belangrijkste moment, vlak na de bladval.",
      ] },
      { kop: "Let op per daktype", tekst: [
        "Pannendak: controleer op losse, gebroken of poreuze pannen, verwijder mos op tijd (mos houdt vocht vast) en kijk jaarlijks de nokvorsten en het lood bij schoorsteen en dakramen na.",
        "Plat dak: hier is stilstaand water de grootste vijand. Controleer na hevige regen of het water goed wegloopt, en houd naden en opstanden in de gaten.",
      ] },
      { kop: "En een professionele inspectie?", tekst: [
        "Een grondige vakinspectie is elke 3 tot 5 jaar verstandig, en vaker bij een ouder dak. Ik doe zo'n check eerlijk: ik zeg wat nú aandacht vraagt en wat best nog even kan wachten. Geen onnodige paniek, geen onnodig werk.",
      ] },
    ],
    dienst: { label: "Bekijk: dakgoot reinigen", href: "/diensten/goten-reinigen" },
    faq: [
      { v: "Hoe vaak moet ik mijn dak laten controleren?", a: "Twee keer per jaar zelf een visuele check (voorjaar + najaar), en elke 3 tot 5 jaar een grondige vakinspectie — vaker bij een dak ouder dan 15 jaar." },
      { v: "Wat is het beste moment voor onderhoud?", a: "Najaar is het belangrijkst: goten leeg en pannen/lood nakijken vóór de herfststormen. Het voorjaar gebruik je om winterschade te herstellen." },
    ],
  },
  {
    slug: "mos-op-dak-verwijderen",
    titel: "Mos op je dak",
    h1: "Mos op je dak verwijderen: schadelijk of niet, en hoe wél?",
    metaTitle: "Mos op dak verwijderen — schadelijk? | Spoed Dak Service",
    metaDescription:
      "Mos op je dak verwijderen? Mos houdt vocht vast en kan pannen laten scheuren bij vorst. Maar een hogedrukreiniger is riskant.",
    intro:
      "Een groen waas op je dak ziet er onschuldig uit, maar mos is niet alleen cosmetisch. Het houdt vocht vast en kan op den duur schade geven. Tegelijk kun je met de verkeerde aanpak (lees: een te harde hogedrukreiniger) méér kapotmaken dan je oplost. Hieronder hoe het zit.",
    secties: [
      { kop: "Is mos echt schadelijk?", tekst: [
        "Ja, op termijn wel. Mos houdt vocht vast op je pannen; vriest dat vocht 's winters, dan zet het uit en kunnen pannen scheuren of afbladderen. Bovendien spoelt los mos de goot en regenpijp in en verstopt daar de afvoer — een veelvoorkomende oorzaak van overlopende goten en lekkage.",
      ] },
      { kop: "Pas op met de hogedrukreiniger", tekst: [
        "Een hogedrukreiniger lijkt snel, maar te veel druk haalt de beschermende toplaag van je pannen weg en beschadigt vooral oudere, poreuze pannen — dan groeit het mos juist sneller terug. Voor stevige, moderne pannen kan lage druk, maar bij twijfel is voorzichtig handwerk of een zachtere methode beter.",
      ] },
      { kop: "Hoe ik het aanpak", tekst: [
        "Ik kijk eerst of je pannen het aankunnen. Daarna verwijder ik het mos voorzichtig, ruim de goot en afvoer meteen mee op, en bespreek of een coating zin heeft om hergroei te vertragen. Zijn de pannen al bros, dan zeg ik dat eerlijk — soms is gericht vervangen of coaten slimmer dan blijven reinigen.",
      ] },
    ],
    dienst: { label: "Bekijk: dak reinigen & mos", href: "/diensten/dak-reinigen" },
    faq: [
      { v: "Mag ik zelf met een hogedrukreiniger mijn dak schoonmaken?", a: "Liever niet op oudere of poreuze pannen — je haalt er de toplaag af en beschadigt ze. Op hoogte werken is bovendien niet zonder risico. Ik doe het veilig en op de juiste druk." },
      { v: "Voorkomt coaten dat het mos terugkomt?", a: "Een coating op gezonde, gereinigde pannen vertraagt hergroei en beschermt tegen vocht en uv. Op slechte pannen heeft het geen zin — dan eerst kijken wat verstandig is." },
    ],
  },
  {
    slug: "wat-kost-een-dakdekker",
    titel: "Wat kost een dakdekker?",
    h1: "Wat kost een dakdekker? Eerlijke richtprijzen op een rij",
    metaTitle: "Wat kost een dakdekker? | Spoed Dak Service",
    metaDescription:
      "Wat kost een dakdekker? Uurtarief €35–€50, goten vanaf €25, daklekkage €200–€500. Altijd een vaste prijs vooraf en geen voorrijkosten.",
    intro:
      "Logische vraag, en je verdient een eerlijk antwoord — geen vaag bedrag per meter. Hieronder de richtprijzen die ik hanteer. Bij elke klus hoor je de vaste prijs vóórdat ik begin, dus je weet altijd waar je aan toe bent.",
    secties: [
      { kop: "Uurtarief en kleine klussen", tekst: [
        "Voor kleine reparaties en losse klussen reken ik €35 tot €50 per uur. Een paar losse pannen vervangen of een nokvorst vastzetten valt daar meestal onder.",
        "Goten reinigen begint vanaf €25 per kant (€40 voor beide) bij een doorsnee rijtjeswoning — dat is bewust laagdrempelig, want vaak zie ik dan meteen of er nog iets speelt.",
      ] },
      { kop: "Richtprijzen per klus", tekst: [
        "Een punctuele daklekkage repareren kost meestal €200 tot €500, inclusief materiaal. Schoorsteen vegen €70. Zonnepanelen reinigen vanaf €10 per paneel. Coaten en grotere klussen krijg je als vaste prijs na een gratis inspectie.",
        "Bij spoed buiten kantooruren komt er een toeslag bij — die hoor je vooraf, nooit als verrassing achteraf.",
      ] },
      { kop: "Waarom een vaste prijs vooraf?", tekst: [
        "Elk dak is anders. Daarom kom ik eerst gratis kijken en geef je een vaste prijs vóór ik begin. Geen voorrijkosten, geen meerwerk-verrassingen. Dat is het verschil met een callcenter dat een richtbedrag noemt en achteraf bijplust.",
      ] },
    ],
    dienst: { label: "Bekijk alle prijzen", href: "/prijzen" },
    faq: [
      { v: "Rekenen jullie voorrijkosten?", a: "Nee. De inspectie en offerte zijn gratis en vrijblijvend." },
      { v: "Krijg ik de prijs op papier?", a: "Je hoort de vaste prijs vooraf en krijgt die desgewenst op de offerte. Geen verrassingen achteraf." },
    ],
  },
  {
    slug: "schoorsteen-vegen-hoe-vaak",
    titel: "Hoe vaak schoorsteen vegen?",
    h1: "Hoe vaak moet je de schoorsteen vegen — en wat kost het?",
    metaTitle: "Hoe vaak schoorsteen vegen? | Spoed Dak Service",
    metaDescription:
      "Hoe vaak schoorsteen vegen? Bij regelmatig stoken één keer per jaar, het beste vóór het stookseizoen. Veiliger tegen schoorsteenbrand. Kosten €70.",
    intro:
      "Een schone schoorsteen is veiliger en trekt beter. Maar hoe vaak is vegen nu echt nodig, en wat kost het? Kort en eerlijk uitgelegd.",
    secties: [
      { kop: "Hoe vaak is nodig?", tekst: [
        "Stook je regelmatig hout? Dan is één keer per jaar het advies, het beste vóór het stookseizoen (eind zomer / begin herfst). Bij een gasketel of weinig stoken kan het minder vaak.",
        "Veel verzekeraars verwachten ook een jaarlijkse beurt — handig om te weten als er ooit iets misgaat.",
      ] },
      { kop: "Waarom het belangrijk is", tekst: [
        "In het kanaal verzamelt zich roet en creosoot. Te veel daarvan vergroot de kans op schoorsteenbrand en zorgt voor slechte trek (rook in huis). Vegen lost dat op en ik kijk meteen of het lood en de aansluiting op het dak nog goed zijn — een veelvoorkomende lekbron.",
      ] },
      { kop: "Wat kost het?", tekst: [
        "Schoorsteen vegen kost €70 — netjes en zonder roetzooi in huis. Omdat ik toch op het dak ben, neem ik de aansluiting en het lood even mee in de controle.",
      ] },
    ],
    dienst: { label: "Bekijk: schoorsteen vegen", href: "/diensten/schoorsteen-vegen" },
    faq: [
      { v: "Wanneer kan ik het beste laten vegen?", a: "Vóór het stookseizoen, dus eind zomer of begin herfst. Dan begin je de winter veilig en met goede trek." },
      { v: "Maken jullie er een rommel van binnen?", a: "Nee. Ik dek netjes af en werk schoon — geen roet in je woonkamer." },
    ],
  },
];

export const getArtikel = (slug: string) => ARTIKELEN.find((a) => a.slug === slug);
