import { Clock, Hourglass, MessageSquare } from "lucide-react";

const verbTypes = [
  {
    icon: Clock,
    title: "الفعل الماضي",
    arabic: "حدث وقع قبل زمن التكلّم",
    german: "Vergangenheit – vor dem Sprechen",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: MessageSquare,
    title: "الفعل المضارع",
    arabic: "حدث يقع أثناء التكلّم أو بعده",
    german: "Gegenwart/Zukunft – während oder nach dem Sprechen",
    color: "from-turquoise to-turquoise-light",
  },
  {
    icon: Hourglass,
    title: "فعل الأمر",
    arabic: "طلب حصول الفعل بعد التكلّم",
    german: "Imperativ – Aufforderung für die Zukunft",
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
              <h2 className="mb-6 font-arabic-display text-3xl font-bold text-primary md:text-4xl">
                ما هو الفعل؟
              </h2>

              <div className="mb-8 rounded-2xl bg-gradient-to-l from-turquoise/10 to-turquoise-light/5 p-6">
                <p className="mb-3 font-arabic-display text-xl font-semibold text-foreground">
                  الفعل كلمة تدلّ على حدث في زمن.
                </p>
                <p className="text-muted-foreground" dir="ltr">
                  Ein Verb ist ein Wort, das eine Handlung oder einen Zustand in
                  einer bestimmten Zeit ausdrückt.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="chip">حدث</span>
                <span className="chip">زمن</span>
                <span className="chip">المتكلّم</span>
              </div>
            </div>

            {/* Left side - Verb Types */}
            <div className="space-y-4">
              {verbTypes.map((type, index) => (
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
                      <h3 className="mb-1 font-arabic-display text-lg font-bold text-foreground">
                        {type.title}
                      </h3>
                      <p className="mb-1 text-sm text-foreground/80">{type.arabic}</p>
                      <p className="text-xs text-muted-foreground" dir="ltr">
                        {type.german}
                      </p>
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
