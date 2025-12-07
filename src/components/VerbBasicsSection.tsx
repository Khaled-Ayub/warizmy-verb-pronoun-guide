import { Clock, Hourglass, MessageSquare } from "lucide-react";

const verbTypes = [
  {
    icon: Clock,
    titleAr: "الفعل الماضي",
    title: "Vergangenheit",
    arabic: "حدث وقع قبل زمن التكلّم",
    german: "Eine Handlung, die vor dem Sprechen stattfand",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: MessageSquare,
    titleAr: "الفعل المضارع",
    title: "Gegenwart / Zukunft",
    arabic: "حدث يقع أثناء التكلّم أو بعده",
    german: "Eine Handlung während oder nach dem Sprechen",
    color: "from-turquoise to-turquoise-light",
  },
  {
    icon: Hourglass,
    titleAr: "فعل الأمر",
    title: "Imperativ (Befehl)",
    arabic: "طلب حصول الفعل بعد التكلّم",
    german: "Aufforderung zu einer Handlung nach dem Sprechen",
    color: "from-violet-500 to-purple-500",
  },
];

const VerbBasicsSection = () => {
  return (
    <section id="verbs" className="py-16 md:py-24">
      <div className="container">
        <div className="glass-card overflow-hidden p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Right side - Definition */}
            <div>
              <h2 className="mb-2 text-sm font-medium text-turquoise">
                الفعل – Das Verb
              </h2>
              <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
                Was ist ein Verb?
              </h2>

              <div className="mb-8 rounded-2xl bg-gradient-to-l from-turquoise/10 to-turquoise-light/5 p-6">
                <p className="mb-3 font-arabic-display text-xl font-semibold text-foreground">
                  الفعل كلمة تدلّ على حدث في زمن.
                </p>
                <p className="text-muted-foreground">
                  Ein Verb ist ein Wort, das eine Handlung oder einen Zustand in
                  einer bestimmten Zeit ausdrückt.
                </p>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">Schlüsselbegriffe:</p>
              <div className="flex flex-wrap gap-3">
                <div className="chip flex-col items-start gap-0.5 py-2">
                  <span className="font-arabic-display">حدث</span>
                  <span className="text-xs text-muted-foreground">Handlung</span>
                </div>
                <div className="chip flex-col items-start gap-0.5 py-2">
                  <span className="font-arabic-display">زمن</span>
                  <span className="text-xs text-muted-foreground">Zeit</span>
                </div>
                <div className="chip flex-col items-start gap-0.5 py-2">
                  <span className="font-arabic-display">المتكلّم</span>
                  <span className="text-xs text-muted-foreground">Sprecher</span>
                </div>
              </div>
            </div>

            {/* Left side - Verb Types */}
            <div className="space-y-4">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Die drei Verbarten
              </h3>
              {verbTypes.map((type) => (
                <div
                  key={type.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-turquoise/30 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${type.color} shadow-lg`}
                    >
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-0.5 font-arabic-display text-sm text-turquoise">
                        {type.titleAr}
                      </p>
                      <h3 className="mb-1 text-lg font-bold text-foreground">
                        {type.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{type.german}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerbBasicsSection;
