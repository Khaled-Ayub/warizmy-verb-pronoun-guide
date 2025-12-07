import { Clock, Hourglass, MessageSquare } from "lucide-react";

const verbTypes = [
  {
    icon: Clock,
    title: "الماضي",
    titleGerman: "Vergangenheit",
    definition: "ما دلّ على حدوث عمل قبل زمن التكلّم.",
    examples: [
      { arabic: "كتب محمد الدرس.", german: "Mohammed schrieb die Lektion." },
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: MessageSquare,
    title: "المضارع",
    titleGerman: "Gegenwart / Zukunft",
    definition:
      "ما دلّ على حدوث عمل في زمن التكلّم أو بعده، ويبدأ بأحد أحرف المضارعة: أ، ن، ي، ت.",
    examples: [
      { arabic: "يكتب الدرس الآن.", german: "Er schreibt jetzt die Lektion." },
      {
        arabic: "سأكتب الدرس غدًا.",
        german: "Ich werde morgen die Lektion schreiben.",
      },
    ],
    note: "أحرف المضارعة: أ – ن – ي – ت",
    color: "from-turquoise to-turquoise-light",
  },
  {
    icon: Hourglass,
    title: "الأمر",
    titleGerman: "Imperativ",
    definition: "ما دلّ على طلب حصول عمل بعد زمن التكلّم.",
    examples: [
      { arabic: "اكتب الدرس.", german: "Schreib die Lektion!" },
      { arabic: "اذهب إلى المدرسة.", german: "Geh zur Schule!" },
    ],
    color: "from-violet-500 to-purple-500",
  },
];

const VerbTypesSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-arabic-display text-3xl font-bold text-primary md:text-4xl">
            أنواع الأفعال حسب الزمن
          </h2>
          <p className="text-muted-foreground">
            Verbarten nach ihrer zeitlichen Bedeutung
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {verbTypes.map((type) => (
            <div
              key={type.title}
              className="glass-card-hover glow-border overflow-hidden"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-l ${type.color} p-6 text-white`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <type.icon className="h-8 w-8" />
                  <div>
                    <h3 className="font-arabic-display text-2xl font-bold">
                      {type.title}
                    </h3>
                    <span className="text-sm text-white/80" dir="ltr">
                      {type.titleGerman}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-6 leading-relaxed text-foreground">
                  {type.definition}
                </p>

                {type.note && (
                  <div className="mb-4 rounded-xl bg-turquoise/10 px-4 py-2 text-center text-sm font-medium text-turquoise">
                    {type.note}
                  </div>
                )}

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-muted-foreground">
                    أمثلة:
                  </p>
                  {type.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border/50 bg-muted/30 p-4"
                    >
                      <p className="mb-1 font-arabic-display text-lg font-semibold text-foreground">
                        {example.arabic}
                      </p>
                      <p className="text-sm text-muted-foreground" dir="ltr">
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
