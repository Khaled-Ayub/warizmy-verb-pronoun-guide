import { ArrowLeft, BookOpen, FileText, PenTool, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const featureCards = [
  {
    icon: BookOpen,
    titleAr: "أنواع الأفعال",
    title: "Verbarten",
    description: "Vergangenheit, Gegenwart & Imperativ",
  },
  {
    icon: FileText,
    titleAr: "الضمائر",
    title: "Pronomen",
    description: "Getrennte und verbundene Pronomen",
  },
  {
    icon: PenTool,
    titleAr: "جداول التصريف",
    title: "Konjugation",
    description: "Übersichtliche Konjugationstabellen",
  },
  {
    icon: Trophy,
    titleAr: "تمارين وتدريب",
    title: "Übungen",
    description: "Wiederhole und festige dein Wissen",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-turquoise/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-up">
              <span className="chip mb-6">Neue Lektion</span>
            </div>

            <h1 className="animate-fade-up animation-delay-100 mb-6 font-arabic-display text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
              Arabische Verben & Pronomen lernen
            </h1>

            <p className="animate-fade-up animation-delay-200 mb-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Eine verständliche Lerneinheit der Warizmy Akademie, die dir die 
              arabischen Verbarten, Konjugationstabellen und Pronomen erklärt – 
              mit deutschen Übersetzungen.
            </p>

            <p className="animate-fade-up animation-delay-300 mb-4 font-arabic-sans text-base text-muted-foreground/80">
              درس مبسط يشرح أنواع الأفعال وجداول التصريف والضمائر بالعربية مع ترجمة ألمانية.
            </p>

            <div className="animate-fade-up animation-delay-400 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group gap-2 rounded-xl bg-gradient-to-l from-turquoise to-turquoise-light px-8 text-night-blue shadow-glow transition-all hover:shadow-xl"
              >
                Lektion starten
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-2 border-primary/20 px-8 hover:bg-primary/5"
              >
                Zu den Pronomen
              </Button>
            </div>
          </div>

          {/* Left side - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {featureCards.map((card, index) => (
              <div
                key={card.title}
                className={`glass-card-hover glow-border p-6 animate-fade-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise/20 to-turquoise-light/20">
                  <card.icon className="h-6 w-6 text-turquoise" />
                </div>
                <p className="mb-1 font-arabic-display text-sm text-turquoise">
                  {card.titleAr}
                </p>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
