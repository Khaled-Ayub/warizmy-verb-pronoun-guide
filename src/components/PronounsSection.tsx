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
    verbExample: "كتبني",
    nounExample: "كتابي",
    german: "mich / mir / mein",
  },
  {
    suffix: "ـكَ",
    verbExample: "كتبكَ",
    nounExample: "كتابكَ",
    german: "dich / dein (m)",
  },
  {
    suffix: "ـكِ",
    verbExample: "كتبكِ",
    nounExample: "كتابكِ",
    german: "dich / dein (w)",
  },
  {
    suffix: "ـهُ",
    verbExample: "كتبهُ",
    nounExample: "كتابهُ",
    german: "ihn / sein",
  },
  {
    suffix: "ـها",
    verbExample: "كتبها",
    nounExample: "كتابها",
    german: "sie / ihr",
  },
  {
    suffix: "ـنا",
    verbExample: "كتبنا",
    nounExample: "كتابنا",
    german: "uns / unser",
  },
  {
    suffix: "ـكم",
    verbExample: "كتبكم",
    nounExample: "كتابكم",
    german: "euch / euer (m)",
  },
  {
    suffix: "ـهم",
    verbExample: "كتبهم",
    nounExample: "كتابهم",
    german: "sie / ihr (m)",
  },
];

const PronounsSection = () => {
  return (
    <section id="pronouns" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-arabic-display text-3xl font-bold text-primary md:text-4xl">
            الضمائر – Pronomen
          </h2>
          <p className="text-muted-foreground">
            Die arabischen Personalpronomen im Überblick
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Separate Pronouns */}
          <div className="glass-card overflow-hidden">
            <div className="border-b border-border bg-gradient-to-l from-turquoise/10 to-turquoise-light/5 p-6">
              <h3 className="font-arabic-display text-xl font-bold text-foreground">
                الضمائر المنفصلة
              </h3>
              <p className="text-sm text-muted-foreground" dir="ltr">
                Getrennte Pronomen
              </p>
            </div>

            <div className="p-6">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Person</th>
                      <th>عربي</th>
                      <th dir="ltr">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {separatePronouns.map((pronoun) => (
                      <tr key={pronoun.arabic}>
                        <td className="text-muted-foreground">{pronoun.person}</td>
                        <td className="font-arabic-display text-lg font-semibold text-foreground">
                          {pronoun.arabic}
                        </td>
                        <td dir="ltr" className="text-muted-foreground">
                          {pronoun.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-turquoise/10 p-4">
                <p className="text-center">
                  <span className="font-arabic-display text-lg font-semibold text-foreground">
                    أنا أكتب
                  </span>
                  <span className="mx-3 text-muted-foreground">–</span>
                  <span className="text-muted-foreground" dir="ltr">
                    „ich schreibe"
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Attached Pronouns */}
          <div className="glass-card overflow-hidden">
            <div className="border-b border-border bg-gradient-to-l from-violet-500/10 to-purple-500/5 p-6">
              <h3 className="font-arabic-display text-xl font-bold text-foreground">
                الضمائر المتصلة
              </h3>
              <p className="text-sm text-muted-foreground" dir="ltr">
                Verbundene Pronomen
              </p>
            </div>

            <div className="p-6">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>اللاحقة</th>
                      <th>مع الفعل</th>
                      <th>مع الاسم</th>
                      <th dir="ltr">Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attachedPronouns.map((pronoun) => (
                      <tr key={pronoun.suffix}>
                        <td className="font-arabic-display text-lg font-semibold text-turquoise">
                          {pronoun.suffix}
                        </td>
                        <td className="font-arabic-display text-foreground">
                          {pronoun.verbExample}
                        </td>
                        <td className="font-arabic-display text-foreground">
                          {pronoun.nounExample}
                        </td>
                        <td dir="ltr" className="text-sm text-muted-foreground">
                          {pronoun.german}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-violet-500/10 p-4">
                <p className="text-center text-sm text-muted-foreground" dir="ltr">
                  Am Verb = Objekt, am Nomen = Besitz
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
