import { Clock, Hourglass, MessageSquare } from "lucide-react";

const verbTypes = [
  {
    icon: Clock,
    titleAr: "الماضي",
    title: "Vergangenheit",
    definition: "Bezeichnet eine Handlung, die vor dem Zeitpunkt des Sprechens stattgefunden hat.",
    definitionAr: "ما دلّ على حدوث عمل قبل زمن التكلّم.",
    examples: [
      { arabic: "كَتَبَ مُحَمَّدٌ الدَّرْسَ.", german: "Mohammed schrieb die Lektion." },
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: MessageSquare,
    titleAr: "المضارع",
    title: "Gegenwart / Zukunft",
    definition:
      "Bezeichnet eine Handlung, die zum Zeitpunkt des Sprechens oder danach stattfindet. Beginnt mit einem der Präsensbuchstaben: أ، ن، ي، ت.",
    definitionAr: "ما دلّ على حدوث عمل في زمن التكلّم أو بعده، ويبدأ بأحد أحرف المضارعة.",
    examples: [
      { arabic: "يَكْتُبُ الدَّرْسَ الآنَ.", german: "Er schreibt jetzt die Lektion." },
      { arabic: "سَأَكْتُبُ الدَّرْسَ غَدًا.", german: "Ich werde morgen die Lektion schreiben." },
    ],
    note: "Präsensbuchstaben: أ – ن – ي – ت",
    color: "from-turquoise to-turquoise-light",
  },
  {
    icon: Hourglass,
    titleAr: "الأمر",
    title: "Imperativ (Befehl)",
    definition: "Bezeichnet die Aufforderung zu einer Handlung, die nach dem Sprechen erfolgen soll.",
    definitionAr: "ما دلّ على طلب حصول عمل بعد زمن التكلّم.",
    examples: [
      { arabic: "اُكْتُبِ الدَّرْسَ!", german: "Schreib die Lektion!" },
      { arabic: "اِذْهَبْ إِلَى المَدْرَسَةِ!", german: "Geh zur Schule!" },
    ],
    color: "from-violet-500 to-purple-500",
  },
];

const VerbTypesSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-2 font-arabic-display text-turquoise">أنواع الأفعال حسب الزمن</p>
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Verbarten nach Zeit
          </h2>
          <p className="text-muted-foreground">
            Im Arabischen unterscheidet man drei Zeitformen
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {verbTypes.map((type) => (
            <div
              key={type.title}
              className="glass-card-hover glow-border overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-l ${type.color} p-6 text-white`}>
                <div className="mb-3 flex items-center gap-3">
                  <type.icon className="h-8 w-8" />
                  <div>
                    <p className="font-arabic-display text-lg text-white/80">
                      {type.titleAr}
                    </p>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-2 text-sm leading-relaxed text-foreground">
                  {type.definition}
                </p>
                <p className="mb-6 font-arabic-display text-sm text-muted-foreground">
                  {type.definitionAr}
                </p>

                {type.note && (
                  <div className="mb-4 rounded-xl bg-turquoise/10 px-4 py-2 text-center text-sm font-medium text-turquoise">
                    {type.note}
                  </div>
                )}

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Beispiele:
                  </p>
                  {type.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border/50 bg-muted/30 p-4"
                    >
                      <p className="mb-1 font-arabic-display text-lg font-semibold text-foreground">
                        {example.arabic}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {example.german}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerbTypesSection;
