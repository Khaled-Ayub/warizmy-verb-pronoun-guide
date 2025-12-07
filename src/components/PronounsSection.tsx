const separatePronouns = [
  { person: "1. Sg", arabic: "أنا", german: "ich" },
  { person: "2. Sg m", arabic: "أنتَ", german: "du (m)" },
  { person: "2. Sg w", arabic: "أنتِ", german: "du (w)" },
  { person: "3. Sg m", arabic: "هو", german: "er" },
  { person: "3. Sg w", arabic: "هي", german: "sie" },
  { person: "1. Pl", arabic: "نحن", german: "wir" },
  { person: "2. Pl m", arabic: "أنتم", german: "ihr (m)" },
  { person: "2. Pl w", arabic: "أنتن", german: "ihr (w)" },
  { person: "3. Pl m", arabic: "هم", german: "sie (m)" },
  { person: "3. Pl w", arabic: "هن", german: "sie (w)" },
];

const attachedPronouns = [
  {
    suffix: "ـي / ـني",
    verbExample: "كَتَبَني",
    nounExample: "كِتابي",
    german: "mich / mir / mein",
  },
  {
    suffix: "ـكَ",
    verbExample: "كَتَبَكَ",
    nounExample: "كِتابُكَ",
    german: "dich / dein (m)",
  },
  {
    suffix: "ـكِ",
    verbExample: "كَتَبَكِ",
    nounExample: "كِتابُكِ",
    german: "dich / dein (w)",
  },
  {
    suffix: "ـهُ",
    verbExample: "كَتَبَهُ",
    nounExample: "كِتابُهُ",
    german: "ihn / sein",
  },
  {
    suffix: "ـها",
    verbExample: "كَتَبَها",
    nounExample: "كِتابُها",
    german: "sie / ihr",
  },
  {
    suffix: "ـنا",
    verbExample: "كَتَبَنا",
    nounExample: "كِتابُنا",
    german: "uns / unser",
  },
  {
    suffix: "ـكُم",
    verbExample: "كَتَبَكُم",
    nounExample: "كِتابُكُم",
    german: "euch / euer (m)",
  },
  {
    suffix: "ـهُم",
    verbExample: "كَتَبَهُم",
    nounExample: "كِتابُهُم",
    german: "sie / ihr (m)",
  },
];

const PronounsSection = () => {
  return (
    <section id="pronouns" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-2 font-arabic-display text-turquoise" dir="rtl">الضمائر</p>
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Pronomen
          </h2>
          <p className="text-muted-foreground">
            Arabische Personalpronomen im Überblick
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Separate Pronouns */}
          <div className="glass-card overflow-hidden">
            <div className="border-b border-border bg-gradient-to-r from-turquoise/10 to-turquoise-light/5 p-6">
              <p className="font-arabic-display text-sm text-turquoise text-right" dir="rtl">ضمائر منفصلة</p>
              <h3 className="text-xl font-bold text-foreground text-left">
                Getrennte Pronomen
              </h3>
              <p className="mt-1 text-sm text-muted-foreground text-left">
                Stehen alleine als eigenständige Wörter
              </p>
            </div>

            <div className="p-6">
              <div className="table-container" dir="ltr">
                <table>
                  <thead>
                    <tr>
                      <th className="text-left">Person</th>
                      <th className="text-right">Arabisch</th>
                      <th className="text-left">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {separatePronouns.map((pronoun) => (
                      <tr key={pronoun.arabic}>
                        <td className="text-sm text-muted-foreground text-left">{pronoun.person}</td>
                        <td className="font-arabic-display text-lg font-semibold text-foreground text-right" dir="rtl">
                          {pronoun.arabic}
                        </td>
                        <td className="text-muted-foreground text-left">
                          {pronoun.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-turquoise/10 p-4">
                <p className="mb-1 text-center text-sm text-muted-foreground">Beispiel:</p>
                <p className="text-center">
                  <span className="font-arabic-display text-lg font-semibold text-foreground" dir="rtl">
                    أنا أكتب
                  </span>
                  <span className="mx-3 text-muted-foreground">→</span>
                  <span className="text-foreground">
                    „Ich schreibe"
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Attached Pronouns */}
          <div className="glass-card overflow-hidden">
            <div className="border-b border-border bg-gradient-to-r from-violet-500/10 to-purple-500/5 p-6">
              <p className="font-arabic-display text-sm text-violet-500 text-right" dir="rtl">ضمائر متصلة</p>
              <h3 className="text-xl font-bold text-foreground text-left">
                Verbundene Pronomen
              </h3>
              <p className="mt-1 text-sm text-muted-foreground text-left">
                Werden an Verben oder Nomen angehängt
              </p>
            </div>

            <div className="p-6">
              <div className="table-container" dir="ltr">
                <table>
                  <thead>
                    <tr>
                      <th className="text-right">Suffix</th>
                      <th className="text-right">Am Verb</th>
                      <th className="text-right">Am Nomen</th>
                      <th className="text-left">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attachedPronouns.map((pronoun) => (
                      <tr key={pronoun.suffix}>
                        <td className="font-arabic-display text-lg font-semibold text-turquoise text-right" dir="rtl">
                          {pronoun.suffix}
                        </td>
                        <td className="font-arabic-display text-foreground text-right" dir="rtl">
                          {pronoun.verbExample}
                        </td>
                        <td className="font-arabic-display text-foreground text-right" dir="rtl">
                          {pronoun.nounExample}
                        </td>
                        <td className="text-sm text-muted-foreground text-left">
                          {pronoun.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-violet-500/10 p-4">
                <p className="text-center text-sm font-medium text-foreground">
                  Merke: Am Verb = Objekt, am Nomen = Besitz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PronounsSection;
