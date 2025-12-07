import { Clock, Hourglass, MessageSquare, ArrowRight } from "lucide-react";

/**
 * Verbtypen-Daten mit arabischen und deutschen Titeln
 * Enthält Definitionen, Beispiele und Farbschemata
 */
const verbTypes = [
  {
    icon: Clock,
    titleAr: "الماضي",
    title: "Vergangenheit",
    shortTitle: "Vergangenheit",
    definition: "Bezeichnet eine Handlung, die vor dem Zeitpunkt des Sprechens stattgefunden hat.",
    definitionAr: "ما دلّ على حدوث عمل قبل زمن التكلّم.",
    examples: [
      { arabic: "كَتَبَ مُحَمَّدٌ الدَّرْسَ.", german: "Mohammed schrieb die Lektion." },
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500",
    emoji: "⏪",
    timelinePosition: "left",
  },
  {
    icon: MessageSquare,
    titleAr: "المضارع",
    title: "Gegenwart / Zukunft",
    shortTitle: "Gegenwart",
    definition:
      "Bezeichnet eine Handlung, die zum Zeitpunkt des Sprechens oder danach stattfindet. Beginnt mit einem der Präsensbuchstaben: أ، ن، ي، ت.",
    definitionAr: "ما دلّ على حدوث عمل في زمن التكلّم أو بعده، ويبدأ بأحد أحرف المضارعة.",
    examples: [
      { arabic: "يَكْتُبُ الدَّرْسَ الآنَ.", german: "Er schreibt jetzt die Lektion." },
      { arabic: "سَأَكْتُبُ الدَّرْسَ غَدًا.", german: "Ich werde morgen die Lektion schreiben." },
    ],
    note: "Präsensbuchstaben: أ – ن – ي – ت",
    color: "from-turquoise to-turquoise-light",
    bgColor: "bg-turquoise",
    emoji: "▶️",
    timelinePosition: "center",
  },
  {
    icon: Hourglass,
    titleAr: "الأمر",
    title: "Imperativ (Befehl)",
    shortTitle: "Imperativ",
    definition: "Bezeichnet die Aufforderung zu einer Handlung, die nach dem Sprechen erfolgen soll.",
    definitionAr: "ما دلّ على طلب حصول عمل بعد زمن التكلّم.",
    examples: [
      { arabic: "اُكْتُبِ الدَّرْسَ!", german: "Schreib die Lektion!" },
      { arabic: "اِذْهَبْ إِلَى المَدْرَسَةِ!", german: "Geh zur Schule!" },
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500",
    emoji: "⏩",
    timelinePosition: "right",
  },
];

const VerbTypesSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
      <div className="container">
        {/* Überschrift */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-arabic-display text-turquoise" dir="rtl">أنواع الأفعال حسب الزمن</p>
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Verbarten nach Zeit
          </h2>
          <p className="text-muted-foreground">
            Im Arabischen unterscheidet man drei Zeitformen
          </p>
        </div>

        {/* ========================================
            ZEITSTRAHL / TIMELINE
            ======================================== */}
        <div className="mb-16">
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-center text-lg font-semibold text-foreground mb-6">
              ⏳ Zeitstrahl der arabischen Verben – خط الزمن
            </h3>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Horizontale Linie (Desktop) - Gradient von rechts nach links (RTL) */}
              <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-l from-amber-500 via-turquoise to-violet-500 -translate-y-1/2 rounded-full" />
              
              {/* Vertikale Linie (Mobile) */}
              <div className="sm:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-turquoise to-violet-500 -translate-x-1/2 rounded-full" />
              
              {/* Timeline-Punkte */}
              <div className="relative flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-4">
                
                {/* Vergangenheit */}
                <div className="flex flex-col items-center text-center z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg mb-3 ring-4 ring-background">
                    <span className="text-2xl sm:text-3xl">⏪</span>
                  </div>
                  <div className="glass-card p-3 sm:p-4 min-w-[140px] sm:min-w-[160px]">
                    <p className="font-arabic-display text-amber-500 text-base sm:text-lg" dir="rtl">الماضي</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">Vergangenheit</p>
                    <p className="text-xs text-muted-foreground mt-1">قبل التكلّم</p>
                    <p className="text-xs text-muted-foreground">Vor dem Sprechen</p>
                  </div>
                </div>

                {/* Pfeil 1 (Desktop) - zeigt nach links (RTL) */}
                <div className="hidden sm:flex items-center z-10">
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-180" />
                </div>

                {/* Pfeil 1 (Mobile - nach unten) */}
                <div className="sm:hidden flex items-center z-10">
                  <svg className="h-6 w-6 text-muted-foreground rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>

                {/* Gegenwart/Zukunft */}
                <div className="flex flex-col items-center text-center z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-turquoise to-turquoise-light flex items-center justify-center shadow-lg mb-3 ring-4 ring-background animate-pulse">
                    <span className="text-3xl sm:text-4xl">▶️</span>
                  </div>
                  <div className="glass-card p-3 sm:p-4 min-w-[140px] sm:min-w-[180px] border-2 border-turquoise/30">
                    <p className="font-arabic-display text-turquoise text-base sm:text-lg" dir="rtl">المضارع</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">Gegenwart / Zukunft</p>
                    <p className="text-xs text-muted-foreground mt-1">أثناء / بعد التكلّم</p>
                    <p className="text-xs text-muted-foreground">Während / Nach dem Sprechen</p>
                    <div className="mt-2 px-2 py-1 rounded-full bg-turquoise/10 text-turquoise text-[10px] sm:text-xs font-medium">
                      📍 JETZT – الآن
                    </div>
                  </div>
                </div>

                {/* Pfeil 2 (Desktop) - zeigt nach links (RTL) */}
                <div className="hidden sm:flex items-center z-10">
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-180" />
                </div>

                {/* Pfeil 2 (Mobile - nach unten) */}
                <div className="sm:hidden flex items-center z-10">
                  <svg className="h-6 w-6 text-muted-foreground rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>

                {/* Imperativ */}
                <div className="flex flex-col items-center text-center z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg mb-3 ring-4 ring-background">
                    <span className="text-2xl sm:text-3xl">⏩</span>
                  </div>
                  <div className="glass-card p-3 sm:p-4 min-w-[140px] sm:min-w-[160px]">
                    <p className="font-arabic-display text-violet-500 text-base sm:text-lg" dir="rtl">الأمر</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">Imperativ</p>
                    <p className="text-xs text-muted-foreground mt-1">طلب بعد التكلّم</p>
                    <p className="text-xs text-muted-foreground">Aufforderung danach</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Legende */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span>Vergangenheit – الماضي</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-turquoise"></div>
                <span>Gegenwart – المضارع</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <span>Imperativ – الأمر</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
            DETAIL-KARTEN
            ======================================== */}
        <div className="grid gap-6 md:grid-cols-3">
          {verbTypes.map((type) => (
            <div
              key={type.title}
              className="glass-card-hover glow-border overflow-hidden"
            >
              {/* Header mit Gradient und Emoji */}
              <div className={`bg-gradient-to-l ${type.color} p-6 text-white`}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{type.emoji}</span>
                  <type.icon className="h-8 w-8" />
                  <div>
                    <p className="font-arabic-display text-lg text-white/80" dir="rtl">
                      {type.titleAr}
                    </p>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                </div>
              </div>

              {/* Inhalt */}
              <div className="p-6">
                <p className="mb-2 text-sm leading-relaxed text-foreground text-left" dir="ltr">
                  {type.definition}
                </p>
                <p className="mb-6 font-arabic-display text-sm text-muted-foreground text-right" dir="rtl">
                  {type.definitionAr}
                </p>

                {type.note && (
                  <div className="mb-4 rounded-xl bg-turquoise/10 px-4 py-2 text-center text-sm font-medium text-turquoise">
                    💡 {type.note}
                  </div>
                )}

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-muted-foreground text-left">
                    📝 Beispiele:
                  </p>
                  {type.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border/50 bg-muted/30 p-4"
                    >
                      <p className="mb-1 font-arabic-display text-lg font-semibold text-foreground text-right" dir="rtl">
                        {example.arabic}
                      </p>
                      <p className="text-sm text-muted-foreground text-left" dir="ltr">
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
