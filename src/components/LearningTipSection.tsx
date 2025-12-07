import { Lightbulb } from "lucide-react";

const LearningTipSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="glass-card overflow-hidden">
          <div className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:text-right">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Lerntipp der Warizmy Akademie
              </h3>
              <p className="mb-3 leading-relaxed text-foreground">
                Du kannst diese Seite vor oder nach dem Unterricht nutzen, um die
                Regeln zu wiederholen und die Tabellen zu lernen. Versuche, die
                Beispiele laut zu lesen und eigene Sätze zu schreiben!
              </p>
              <p className="font-arabic-display text-sm text-muted-foreground">
                يمكنك استخدام هذه الصفحة قبل الدرس أو بعده لمراجعة القواعد وحفظ
                الجداول. جرّب أن تقرأ الأمثلة بصوت عالٍ وتكتب جملك الخاصة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningTipSection;
