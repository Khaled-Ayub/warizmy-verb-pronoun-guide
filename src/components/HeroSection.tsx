import { ArrowDown, BookOpen, FileText, PenTool, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Feature-Karten für die Übersicht
 * Jede Karte hat einen arabischen und deutschen Titel
 */
const featureCards = [
  {
    icon: BookOpen,
    titleAr: "أنواع الأفعال",
    title: "Verbarten",
    description: "Vergangenheit, Gegenwart & Imperativ",
    emoji: "📚",
  },
  {
    icon: FileText,
    titleAr: "الضمائر",
    title: "Pronomen",
    description: "Getrennte und verbundene Pronomen",
    emoji: "👤",
  },
  {
    icon: PenTool,
    titleAr: "جداول التصريف",
    title: "Konjugation",
    description: "Übersichtliche Konjugationstabellen",
    emoji: "✏️",
  },
  {
    icon: Trophy,
    titleAr: "تمارين وتدريب",
    title: "Übungen",
    description: "Wiederhole und festige dein Wissen",
    emoji: "🏆",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Hintergrund-Dekoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-turquoise/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-primary/5 blur-3xl" />
        {/* Geometrisches Muster */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-turquoise rotate-45" />
          <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-primary rotate-12" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-turquoise -rotate-12" />
        </div>
      </div>

      <div className="container">
        {/* Vertikales Layout - Inhalt untereinander */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="animate-fade-up mb-6">
            <span className="chip">
              ✨ درس جديد – Neue Lektion
            </span>
          </div>

          {/* Hauptüberschrift - Arabisch */}
          <h1 
            className="animate-fade-up animation-delay-100 mb-4 font-arabic-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-turquoise" 
            dir="rtl"
          >
            تعلّم الأفعال والضمائر العربية
          </h1>

          {/* Hauptüberschrift - Deutsch */}
          <h2 className="animate-fade-up animation-delay-150 mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Arabische Verben & Pronomen lernen
          </h2>

          {/* Beschreibung - Deutsch */}
          <p className="animate-fade-up animation-delay-200 mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
            Eine verständliche Lerneinheit der Warizmy Akademie, die dir die 
            arabischen Verbarten, Konjugationstabellen und Pronomen erklärt – 
            mit deutschen Übersetzungen.
          </p>

          {/* Beschreibung - Arabisch */}
          <p 
            className="animate-fade-up animation-delay-250 mb-8 font-arabic-sans text-sm sm:text-base text-muted-foreground/80 max-w-2xl" 
            dir="rtl"
          >
            درس مبسط يشرح أنواع الأفعال وجداول التصريف والضمائر بالعربية مع ترجمة ألمانية.
          </p>

          {/* Aktionsbuttons */}
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#verbs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-turquoise to-turquoise-light px-6 sm:px-8 py-3 text-base font-semibold text-night-blue shadow-glow transition-all hover:shadow-xl hover:scale-105"
            >
              <span dir="rtl" className="font-arabic-display">ابدأ الدرس</span>
              <span>– Lektion starten</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
            <Link
              to="/vokabeltrainer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary/20 px-6 sm:px-8 py-3 text-base font-semibold text-foreground hover:bg-primary/5 transition-all"
            >
              <span>📖 Vokabeltrainer</span>
            </Link>
          </div>

          {/* Feature-Karten - Horizontal auf Desktop, Vertikal auf Mobile */}
          <div className="animate-fade-up animation-delay-400 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((card, index) => (
              <div
                key={card.title}
                className="glass-card-hover glow-border p-4 sm:p-6 flex flex-col items-center text-center transition-all hover:scale-105"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Emoji Icon */}
                <div className="text-3xl sm:text-4xl mb-3">{card.emoji}</div>
                
                {/* Icon in Kreis */}
                <div className="mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise/20 to-turquoise-light/20">
                  <card.icon className="h-5 w-5 sm:h-6 sm:w-6 text-turquoise" />
                </div>
                
                {/* Arabischer Titel */}
                <p className="mb-1 font-arabic-display text-sm sm:text-base text-turquoise" dir="rtl">
                  {card.titleAr}
                </p>
                
                {/* Deutscher Titel */}
                <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                
                {/* Beschreibung */}
                <p className="text-xs sm:text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
