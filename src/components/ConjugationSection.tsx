import { useState } from "react";
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
          <h2 className="mb-4 font-arabic-display text-3xl font-bold text-primary md:text-4xl">
            تصريف الأفعال
          </h2>
          <p className="text-muted-foreground">
            Konjugation am Beispiel von نَصَرَ (helfen)
          </p>
        </div>

        <div className="glass-card overflow-hidden p-6 md:p-8">
          <Tabs defaultValue="past" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 gap-2 bg-muted/50 p-2">
              <TabsTrigger
                value="past"
                className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                الماضي
              </TabsTrigger>
              <TabsTrigger
                value="present"
                className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-turquoise data-[state=active]:to-turquoise-light data-[state=active]:text-night-blue"
              >
                المضارع
              </TabsTrigger>
              <TabsTrigger
                value="imperative"
                className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                الأمر
              </TabsTrigger>
            </TabsList>

            <TabsContent value="past" className="mt-0">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>الضمير</th>
                      <th>الفعل</th>
                      <th dir="ltr">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        <td className="font-arabic-display text-lg font-semibold text-turquoise">
                          {item.pronoun}
                        </td>
                        <td className="font-arabic-display text-lg text-foreground">
                          {item.form}
                        </td>
                        <td dir="ltr" className="text-muted-foreground">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="present" className="mt-0">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>الضمير</th>
                      <th>الفعل</th>
                      <th dir="ltr">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {presentConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        <td className="font-arabic-display text-lg font-semibold text-turquoise">
                          {item.pronoun}
                        </td>
                        <td className="font-arabic-display text-lg text-foreground">
                          {item.form}
                        </td>
                        <td dir="ltr" className="text-muted-foreground">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-turquoise/10 p-4 text-center">
                <p className="font-medium text-turquoise">
                  أحرف المضارعة: أ – ن – ي – ت
                </p>
              </div>
            </TabsContent>

            <TabsContent value="imperative" className="mt-0">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>الضمير</th>
                      <th>الفعل</th>
                      <th dir="ltr">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {imperativeConjugation.map((item) => (
                      <tr key={item.pronoun}>
                        <td className="font-arabic-display text-lg font-semibold text-turquoise">
                          {item.pronoun}
                        </td>
                        <td className="font-arabic-display text-lg text-foreground">
                          {item.form}
                        </td>
                        <td dir="ltr" className="text-muted-foreground">
                          {item.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-violet-500/10 p-4">
                <p className="text-center text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">ملاحظة:</span> يُشتق
                  فعل الأمر من المضارع بحذف حرف المضارعة وتسكين الآخر.
                </p>
                <p className="mt-2 text-center text-xs text-muted-foreground" dir="ltr">
                  Der Imperativ wird vom Präsens abgeleitet durch Entfernen des
                  Präsensbuchstabens.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Additional Verbs */}
        <div className="mt-12">
          <h3 className="mb-6 text-center font-arabic-display text-xl font-bold text-foreground">
            أفعال إضافية
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalVerbs.map((verb) => (
              <div
                key={verb.past}
                className="glass-card-hover p-5 text-center"
              >
                <div className="mb-3 space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-muted-foreground">ماضي</span>
                    <span className="font-arabic-display text-lg font-bold text-foreground">
                      {verb.past}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-muted-foreground">مضارع</span>
                    <span className="font-arabic-display text-lg text-turquoise">
                      {verb.present}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-muted-foreground">أمر</span>
                    <span className="font-arabic-display text-lg text-violet-500">
                      {verb.imperative}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground" dir="ltr">
                  {verb.german}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConjugationSection;
