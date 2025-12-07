import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pastConjugation = [
  { pronoun: "أنا", form: "نَصَرْتُ", german: "ich half" },
  { pronoun: "أنتَ", form: "نَصَرْتَ", german: "du halfst (m)" },
  { pronoun: "أنتِ", form: "نَصَرْتِ", german: "du halfst (w)" },
  { pronoun: "هو", form: "نَصَرَ", german: "er half" },
  { pronoun: "هي", form: "نَصَرَتْ", german: "sie half" },
  { pronoun: "نحن", form: "نَصَرْنا", german: "wir halfen" },
  { pronoun: "أنتم", form: "نَصَرْتُم", german: "ihr halft (m)" },
  { pronoun: "أنتن", form: "نَصَرْتُنَّ", german: "ihr halft (w)" },
  { pronoun: "هم", form: "نَصَرُوا", german: "sie halfen (m)" },
  { pronoun: "هن", form: "نَصَرْنَ", german: "sie halfen (w)" },
];

const presentConjugation = [
  { pronoun: "أنا", form: "أَنْصُرُ", german: "ich helfe" },
  { pronoun: "أنتَ", form: "تَنْصُرُ", german: "du hilfst (m)" },
  { pronoun: "أنتِ", form: "تَنْصُرِينَ", german: "du hilfst (w)" },
  { pronoun: "هو", form: "يَنْصُرُ", german: "er hilft" },
  { pronoun: "هي", form: "تَنْصُرُ", german: "sie hilft" },
  { pronoun: "نحن", form: "نَنْصُرُ", german: "wir helfen" },
  { pronoun: "أنتم", form: "تَنْصُرُونَ", german: "ihr helft (m)" },
  { pronoun: "أنتن", form: "تَنْصُرْنَ", german: "ihr helft (w)" },
  { pronoun: "هم", form: "يَنْصُرُونَ", german: "sie helfen (m)" },
  { pronoun: "هن", form: "يَنْصُرْنَ", german: "sie helfen (w)" },
];

const imperativeConjugation = [
  { pronoun: "أنتَ", form: "اُنْصُرْ", german: "hilf! (m)" },
  { pronoun: "أنتِ", form: "اُنْصُرِي", german: "hilf! (w)" },
  { pronoun: "أنتما", form: "اُنْصُرَا", german: "helft! (dual)" },
  { pronoun: "أنتم", form: "اُنْصُرُوا", german: "helft! (m)" },
  { pronoun: "أنتن", form: "اُنْصُرْنَ", german: "helft! (w)" },
];

const additionalVerbs = [
  { past: "كَتَبَ", present: "يَكْتُبُ", imperative: "اُكْتُبْ", german: "schreiben" },
  { past: "فَتَحَ", present: "يَفْتَحُ", imperative: "اِفْتَحْ", german: "öffnen" },
  { past: "ضَرَبَ", present: "يَضْرِبُ", imperative: "اِضْرِبْ", german: "schlagen" },
  { past: "اِطْمَأَنَّ", present: "يَطْمَئِنُّ", imperative: "اِطْمَئِنَّ", german: "beruhigt sein" },
];

const ConjugationSection = () => {
  return (
    <section className="bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-2 font-arabic-display text-turquoise" dir="rtl">تصريف الأفعال</p>
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Konjugation der Verben
          </h2>
          <p className="text-muted-foreground">
            Am Beispiel von <span className="font-arabic-display font-semibold" dir="rtl">نَصَرَ</span> (helfen)
          </p>
        </div>

        <div className="glass-card overflow-hidden p-6 md:p-8">
          <Tabs defaultValue="past" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 gap-2 bg-muted/50 p-2" dir="ltr">
              <TabsTrigger
                value="past"
                className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                <span className="hidden sm:inline">Vergangenheit – </span><span dir="rtl">الماضي</span>
              </TabsTrigger>
              <TabsTrigger
                value="present"
                className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-turquoise data-[state=active]:to-turquoise-light data-[state=active]:text-night-blue"
              >
                <span className="hidden sm:inline">Gegenwart – </span><span dir="rtl">المضارع</span>
              </TabsTrigger>
              <TabsTrigger
                value="imperative"
                className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                <span className="hidden sm:inline">Imperativ – </span><span dir="rtl">الأمر</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="past" className="mt-0">
              <div className="table-container" dir="ltr">
                <table>
                  <thead>
                    <tr>
                      <th className="text-right">Pronomen</th>
                      <th className="text-right">Verb</th>
                      <th className="text-left">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        <td className="font-arabic-display text-lg font-semibold text-turquoise text-right" dir="rtl">
                          {item.pronoun}
                        </td>
                        <td className="font-arabic-display text-lg text-foreground text-right" dir="rtl">
                          {item.form}
                        </td>
                        <td className="text-muted-foreground text-left">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="present" className="mt-0">
              <div className="table-container" dir="ltr">
                <table>
                  <thead>
                    <tr>
                      <th className="text-right">Pronomen</th>
                      <th className="text-right">Verb</th>
                      <th className="text-left">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {presentConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        <td className="font-arabic-display text-lg font-semibold text-turquoise text-right" dir="rtl">
                          {item.pronoun}
                        </td>
                        <td className="font-arabic-display text-lg text-foreground text-right" dir="rtl">
                          {item.form}
                        </td>
                        <td className="text-muted-foreground text-left">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-turquoise/10 p-4 text-center">
                <p className="font-medium text-foreground">
                  Präsensbuchstaben: <span className="font-arabic-display text-turquoise" dir="rtl">أ – ن – ي – ت</span>
                </p>
              </div>
            </TabsContent>

            <TabsContent value="imperative" className="mt-0">
              <div className="table-container" dir="ltr">
                <table>
                  <thead>
                    <tr>
                      <th className="text-right">Pronomen</th>
                      <th className="text-right">Verb</th>
                      <th className="text-left">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {imperativeConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        <td className="font-arabic-display text-lg font-semibold text-turquoise text-right" dir="rtl">
                          {item.pronoun}
                        </td>
                        <td className="font-arabic-display text-lg text-foreground text-right" dir="rtl">
                          {item.form}
                        </td>
                        <td className="text-muted-foreground text-left">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-violet-500/10 p-4">
                <p className="text-center text-sm text-foreground">
                  <span className="font-semibold">Bildung:</span> Der Imperativ wird vom Präsens abgeleitet 
                  durch Entfernen des Präsensbuchstabens und Sukun am Ende.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Additional Verbs */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-xl font-bold text-foreground">
            Weitere Verben zum Üben
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalVerbs.map((verb) => (
              <div key={verb.past} className="glass-card-hover p-5 text-center">
                <p className="mb-3 font-medium text-foreground">{verb.german}</p>
                <div className="flex items-center justify-center gap-4" dir="ltr">
                  <div className="text-center">
                    <span className="font-arabic-display text-lg font-bold text-foreground" dir="rtl">
                      {verb.past}
                    </span>
                    <p className="text-xs text-muted-foreground">Vergangen.</p>
                  </div>
                  <div className="text-center">
                    <span className="font-arabic-display text-lg text-turquoise" dir="rtl">
                      {verb.present}
                    </span>
                    <p className="text-xs text-muted-foreground">Gegenwart</p>
                  </div>
                  <div className="text-center">
                    <span className="font-arabic-display text-lg text-violet-500" dir="rtl">
                      {verb.imperative}
                    </span>
                    <p className="text-xs text-muted-foreground">Imperativ</p>
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
