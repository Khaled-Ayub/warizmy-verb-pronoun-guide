import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Datenstruktur für Konjugationen mit farblicher Hervorhebung:
 * - prefix: Präfix (z.B. Präsensbuchstaben أ، ت، ي، ن) → Orange hervorgehoben
 * - root: Wortstamm → normale Farbe
 * - suffix: Endung (Konjugationsendung) → Grün hervorgehoben
 */

// ============================================
// VERGANGENHEIT (الماضي) - Konjugation
// Endungen werden grün hervorgehoben
// ============================================
const pastConjugation = [
  { pronoun: "أنا", prefix: "", root: "نَصَرْ", suffix: "تُ", german: "ich half" },
  { pronoun: "أنتَ", prefix: "", root: "نَصَرْ", suffix: "تَ", german: "du halfst (m)" },
  { pronoun: "أنتِ", prefix: "", root: "نَصَرْ", suffix: "تِ", german: "du halfst (w)" },
  { pronoun: "هو", prefix: "", root: "نَصَرَ", suffix: "", german: "er half" },
  { pronoun: "هي", prefix: "", root: "نَصَرَ", suffix: "تْ", german: "sie half" },
  { pronoun: "نحن", prefix: "", root: "نَصَرْ", suffix: "نا", german: "wir halfen" },
  { pronoun: "أنتم", prefix: "", root: "نَصَرْ", suffix: "تُم", german: "ihr halft (m)" },
  { pronoun: "أنتن", prefix: "", root: "نَصَرْ", suffix: "تُنَّ", german: "ihr halft (w)" },
  { pronoun: "هم", prefix: "", root: "نَصَرُ", suffix: "وا", german: "sie halfen (m)" },
  { pronoun: "هن", prefix: "", root: "نَصَرْ", suffix: "نَ", german: "sie halfen (w)" },
];

// ============================================
// GEGENWART (المضارع) - Konjugation
// Präfixe (Präsensbuchstaben) → Orange
// Suffixe → Grün
// ============================================
const presentConjugation = [
  { pronoun: "أنا", prefix: "أَ", root: "نْصُرُ", suffix: "", german: "ich helfe" },
  { pronoun: "أنتَ", prefix: "تَ", root: "نْصُرُ", suffix: "", german: "du hilfst (m)" },
  { pronoun: "أنتِ", prefix: "تَ", root: "نْصُرِ", suffix: "ينَ", german: "du hilfst (w)" },
  { pronoun: "هو", prefix: "يَ", root: "نْصُرُ", suffix: "", german: "er hilft" },
  { pronoun: "هي", prefix: "تَ", root: "نْصُرُ", suffix: "", german: "sie hilft" },
  { pronoun: "نحن", prefix: "نَ", root: "نْصُرُ", suffix: "", german: "wir helfen" },
  { pronoun: "أنتم", prefix: "تَ", root: "نْصُرُ", suffix: "ونَ", german: "ihr helft (m)" },
  { pronoun: "أنتن", prefix: "تَ", root: "نْصُرْ", suffix: "نَ", german: "ihr helft (w)" },
  { pronoun: "هم", prefix: "يَ", root: "نْصُرُ", suffix: "ونَ", german: "sie helfen (m)" },
  { pronoun: "هن", prefix: "يَ", root: "نْصُرْ", suffix: "نَ", german: "sie helfen (w)" },
];

// ============================================
// IMPERATIV (الأمر) - Konjugation
// Suffixe → Grün hervorgehoben
// ============================================
const imperativeConjugation = [
  { pronoun: "أنتَ", prefix: "", root: "اُنْصُرْ", suffix: "", german: "hilf! (m)" },
  { pronoun: "أنتِ", prefix: "", root: "اُنْصُرِ", suffix: "ي", german: "hilf! (w)" },
  { pronoun: "أنتما", prefix: "", root: "اُنْصُرَ", suffix: "ا", german: "helft! (dual)" },
  { pronoun: "أنتم", prefix: "", root: "اُنْصُرُ", suffix: "وا", german: "helft! (m)" },
  { pronoun: "أنتن", prefix: "", root: "اُنْصُرْ", suffix: "نَ", german: "helft! (w)" },
];

// ============================================
// Weitere Verben zum Üben
// ============================================
const additionalVerbs = [
  { past: "كَتَبَ", present: "يَكْتُبُ", imperative: "اُكْتُبْ", german: "schreiben" },
  { past: "فَتَحَ", present: "يَفْتَحُ", imperative: "اِفْتَحْ", german: "öffnen" },
  { past: "ضَرَبَ", present: "يَضْرِبُ", imperative: "اِضْرِبْ", german: "schlagen" },
  { past: "اِطْمَأَنَّ", present: "يَطْمَئِنُّ", imperative: "اِطْمَئِنَّ", german: "beruhigt sein" },
];

/**
 * Komponente zur Darstellung eines konjugierten Verbs mit farblicher Hervorhebung
 * - Präfix: Orange (text-amber-500) - am Anfang des Wortes (rechts in RTL)
 * - Wortstamm: Normal (text-foreground) - in der Mitte
 * - Suffix: Grün (text-emerald-500) - am Ende des Wortes (links in RTL)
 * 
 * WICHTIG: In RTL erscheint das ERSTE HTML-Element RECHTS,
 * daher: Präfix → Stamm → Suffix (in HTML-Reihenfolge)
 */
const HighlightedVerb = ({ 
  prefix, 
  root, 
  suffix 
}: { 
  prefix: string; 
  root: string; 
  suffix: string; 
}) => {
  return (
    <span dir="rtl" className="font-arabic-sans text-lg">
      {/* Präfix am Anfang (erscheint rechts in RTL) */}
      {prefix && (
        <span className="text-amber-500 font-bold">{prefix}</span>
      )}
      {/* Wortstamm in der Mitte */}
      <span className="text-foreground">{root}</span>
      {/* Suffix am Ende (erscheint links in RTL) */}
      {suffix && (
        <span className="text-emerald-500 font-bold">{suffix}</span>
      )}
    </span>
  );
};

const ConjugationSection = () => {
  return (
    <section className="bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
      <div className="container">
        {/* Überschrift der Sektion */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-arabic-display text-turquoise" dir="rtl">تصريف الأفعال</p>
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Konjugation der Verben
          </h2>
          <p className="text-muted-foreground">
            Am Beispiel von <span className="font-arabic-display font-semibold" dir="rtl">نَصَرَ</span> (helfen)
          </p>
        </div>

        {/* Legende für die Farbhervorhebung - responsive: vertikal auf Mobile, horizontal auf Desktop */}
        <div className="mb-6 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded bg-amber-500"></span>
            <span className="text-muted-foreground">Präfix (Präsensbuchstaben)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded bg-emerald-500"></span>
            <span className="text-muted-foreground">Suffix (Konjugationsendung)</span>
          </div>
        </div>

        {/* Glass-Card mit responsivem Padding */}
        <div className="glass-card overflow-hidden p-4 sm:p-6 md:p-8">
          <Tabs defaultValue="past" className="w-full">
            {/* Tab-Auswahl für die drei Zeitformen - responsive */}
            <TabsList className="mb-4 sm:mb-8 grid w-full grid-cols-3 gap-1 sm:gap-2 bg-muted/50 p-1 sm:p-2" dir="rtl">
              <TabsTrigger
                value="past"
                className="rounded-lg sm:rounded-xl text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 data-[state=active]:bg-gradient-to-l data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                <span className="hidden sm:inline">Vergangenheit – </span><span dir="rtl">الماضي</span>
              </TabsTrigger>
              <TabsTrigger
                value="present"
                className="rounded-lg sm:rounded-xl text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 data-[state=active]:bg-gradient-to-l data-[state=active]:from-turquoise data-[state=active]:to-turquoise-light data-[state=active]:text-night-blue"
              >
                <span className="hidden sm:inline">Gegenwart – </span><span dir="rtl">المضارع</span>
              </TabsTrigger>
              <TabsTrigger
                value="imperative"
                className="rounded-lg sm:rounded-xl text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 data-[state=active]:bg-gradient-to-l data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                <span className="hidden sm:inline">Imperativ – </span><span dir="rtl">الأمر</span>
              </TabsTrigger>
            </TabsList>

            {/* ============================================ */}
            {/* VERGANGENHEIT - Tabelle (RTL: Pronomen rechts) */}
            {/* ============================================ */}
            <TabsContent value="past" className="mt-0">
              {/* overflow-x-auto für horizontales Scrollen auf kleinen Bildschirmen */}
              <div className="table-container overflow-x-auto -mx-2 px-2">
                {/* RTL-Tabelle: Pronomen beginnt rechts, min-width für Mobile */}
                <table dir="rtl" className="w-full min-w-[320px]">
                  <thead>
                    <tr>
                      {/* Spaltenreihenfolge RTL: Pronomen (rechts) → Verb → Deutsch (links) */}
                      <th className="text-right">Pronomen</th>
                      <th className="text-center">Verb</th>
                      <th className="text-left">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        {/* Pronomen rechts (erste Spalte in RTL) */}
                        <td className="font-arabic-sans text-lg font-semibold text-turquoise text-right">
                          {item.pronoun}
                        </td>
                        {/* Verb mit Hervorhebung in der Mitte */}
                        <td className="text-center">
                          <HighlightedVerb 
                            prefix={item.prefix} 
                            root={item.root} 
                            suffix={item.suffix} 
                          />
                        </td>
                        {/* Deutsche Übersetzung links */}
                        <td className="text-muted-foreground text-left" dir="ltr">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Hinweis zur Vergangenheitsbildung */}
              <div className="mt-6 rounded-xl bg-amber-500/10 p-4 text-center">
                <p className="font-medium text-foreground">
                  In der Vergangenheit werden <span className="text-emerald-500 font-bold">Suffixe (Endungen)</span> an den Stamm angehängt.
                </p>
              </div>
            </TabsContent>

            {/* ============================================ */}
            {/* GEGENWART - Tabelle (RTL: Pronomen rechts) */}
            {/* ============================================ */}
            <TabsContent value="present" className="mt-0">
              {/* overflow-x-auto für horizontales Scrollen auf kleinen Bildschirmen */}
              <div className="table-container overflow-x-auto -mx-2 px-2">
                {/* RTL-Tabelle: Pronomen beginnt rechts, min-width für Mobile */}
                <table dir="rtl" className="w-full min-w-[320px]">
                  <thead>
                    <tr>
                      {/* Spaltenreihenfolge RTL: Pronomen (rechts) → Verb → Deutsch (links) */}
                      <th className="text-right">Pronomen</th>
                      <th className="text-center">Verb</th>
                      <th className="text-left">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {presentConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        {/* Pronomen rechts (erste Spalte in RTL) */}
                        <td className="font-arabic-sans text-lg font-semibold text-turquoise text-right">
                          {item.pronoun}
                        </td>
                        {/* Verb mit Hervorhebung in der Mitte */}
                        <td className="text-center">
                          <HighlightedVerb 
                            prefix={item.prefix} 
                            root={item.root} 
                            suffix={item.suffix} 
                          />
                        </td>
                        {/* Deutsche Übersetzung links */}
                        <td className="text-muted-foreground text-left" dir="ltr">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Hinweis zu Präsensbuchstaben */}
              <div className="mt-6 rounded-xl bg-turquoise/10 p-4 text-center">
                <p className="font-medium text-foreground">
                  Präsensbuchstaben: <span className="font-arabic-display text-amber-500 font-bold" dir="rtl">أ – ن – ي – ت</span>
                  <br />
                  <span className="text-sm text-muted-foreground">
                    <span className="text-amber-500 font-bold">Präfixe</span> am Anfang + 
                    <span className="text-emerald-500 font-bold"> Suffixe</span> am Ende
                  </span>
                </p>
              </div>
            </TabsContent>

            {/* ============================================ */}
            {/* IMPERATIV - Tabelle (RTL: Pronomen rechts) */}
            {/* ============================================ */}
            <TabsContent value="imperative" className="mt-0">
              {/* overflow-x-auto für horizontales Scrollen auf kleinen Bildschirmen */}
              <div className="table-container overflow-x-auto -mx-2 px-2">
                {/* RTL-Tabelle: Pronomen beginnt rechts, min-width für Mobile */}
                <table dir="rtl" className="w-full min-w-[320px]">
                  <thead>
                    <tr>
                      {/* Spaltenreihenfolge RTL: Pronomen (rechts) → Verb → Deutsch (links) */}
                      <th className="text-right">Pronomen</th>
                      <th className="text-center">Verb</th>
                      <th className="text-left">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {imperativeConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        {/* Pronomen rechts (erste Spalte in RTL) */}
                        <td className="font-arabic-sans text-lg font-semibold text-turquoise text-right">
                          {item.pronoun}
                        </td>
                        {/* Verb mit Hervorhebung in der Mitte */}
                        <td className="text-center">
                          <HighlightedVerb 
                            prefix={item.prefix} 
                            root={item.root} 
                            suffix={item.suffix} 
                          />
                        </td>
                        {/* Deutsche Übersetzung links */}
                        <td className="text-muted-foreground text-left" dir="ltr">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Hinweis zur Imperativbildung */}
              <div className="mt-6 rounded-xl bg-violet-500/10 p-4">
                <p className="text-center text-sm text-foreground">
                  <span className="font-semibold">Bildung:</span> Der Imperativ wird vom Präsens abgeleitet 
                  durch Entfernen des Präsensbuchstabens. <span className="text-emerald-500 font-bold">Suffixe</span> markieren die Person.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* ============================================ */}
        {/* Weitere Verben zum Üben - responsive Grid */}
        {/* ============================================ */}
        <div className="mt-8 sm:mt-12">
          <h3 className="mb-4 sm:mb-6 text-center text-lg sm:text-xl font-bold text-foreground">
            Weitere Verben zum Üben
          </h3>
          {/* Grid: 1 Spalte auf Mobile, 2 auf SM, 4 auf LG */}
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {additionalVerbs.map((verb) => (
              <div key={verb.past} className="glass-card-hover p-4 sm:p-5 text-center">
                <p className="mb-2 sm:mb-3 font-medium text-foreground text-sm sm:text-base">{verb.german}</p>
                {/* Verb-Formen: responsive Abstände */}
                <div className="flex items-center justify-center gap-3 sm:gap-4" dir="ltr">
                  {/* Vergangenheit */}
                  <div className="text-center">
                    <span className="font-arabic-display text-base sm:text-lg font-bold text-foreground" dir="rtl">
                      {verb.past}
                    </span>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Vergangen.</p>
                  </div>
                  {/* Gegenwart */}
                  <div className="text-center">
                    <span className="font-arabic-display text-base sm:text-lg text-turquoise" dir="rtl">
                      {verb.present}
                    </span>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Gegenwart</p>
                  </div>
                  {/* Imperativ */}
                  <div className="text-center">
                    <span className="font-arabic-display text-base sm:text-lg text-violet-500" dir="rtl">
                      {verb.imperative}
                    </span>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Imperativ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConjugationSection;
