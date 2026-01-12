import { ArrowDown, BookOpen, FileText, PenNib, Prohibit, Stack, Target, Trophy } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const featureCards = [
  {
    icon: Stack,
    title: "Verbgrundlagen",
    description: "Einstieg in die Zeiten",
    href: "#verbs",
  },
  {
    icon: BookOpen,
    title: "Verbarten",
    description: "Vergangenheit, Gegenwart & Imperativ",
    href: "#verb-types",
  },
  {
    icon: FileText,
    title: "Pronomen",
    description: "Getrennte und verbundene Pronomen",
    href: "#pronouns",
  },
  {
    icon: PenNib,
    title: "Konjugation",
    description: "Übersichtliche Konjugationstabellen",
    href: "#conjugation",
  },
  {
    icon: Prohibit,
    title: "Verneinung",
    description: "Negationspartikel und Verbot",
    href: "#negation",
  },
  {
    icon: Target,
    title: "Verneinungs-Übung",
    description: "Übe mit neuen Verben",
    href: "#negation-exercises",
  },
  {
    icon: Trophy,
    title: "Übungen",
    description: "Wiederhole und festige dein Wissen",
    href: "/vokabeltrainer",
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
            <span className="chip">Neue Lernseite</span>
          </div>

          {/* Hauptüberschrift - Deutsch */}
          <h1 className="animate-fade-up animation-delay-100 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
            Arabische Grundlagen: Vokabeln, Grammatik & Morphismen
          </h1>

          {/* Beschreibung - Deutsch */}
          <p className="animate-fade-up animation-delay-200 mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
            Eine verständliche Lerneinheit der Warizmy Akademie für grundlegende Vokabeln,
            Grammatik und Morphismen - mit arabischen Beispielen und deutschen Übersetzungen.
          </p>

          {/* Beschreibung - Arabisch (kurz) */}
          <p
            className="animate-fade-up animation-delay-250 mb-8 font-arabic-sans text-sm text-muted-foreground/80 max-w-2xl"
            dir="rtl"
          >
            دروس مبسطة في المفردات والنحو والصرف.
          </p>

          {/* Aktionsbuttons */}
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#verbs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-turquoise to-turquoise-light px-6 sm:px-8 py-3 text-base font-semibold text-night-blue shadow-glow transition-all hover:shadow-xl hover:scale-105"
            >
              <span>Lernen starten</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
            <Link
              to="/vokabeltrainer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary/20 px-6 sm:px-8 py-3 text-base font-semibold text-foreground hover:bg-primary/5 transition-all"
            >
              <span>Vokabeltrainer</span>
            </Link>
          </div>

          {/* Schnellzugriff */}
          <div className="animate-fade-up animation-delay-350 w-full text-center mb-6">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Schnellzugriff - Thema wählen
            </p>
          </div>

          {/* Feature-Karten - anklickbar */}
          <div className="animate-fade-up animation-delay-400 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((card, index) => {
              const isAnchor = card.href.startsWith("#") || card.href.startsWith("/#");
              const cardContent = (
                <>
                  {/* Icon in Kreis */}
                  <div className="mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise/20 to-turquoise-light/20">
                    <card.icon className="h-5 w-5 sm:h-6 sm:w-6 text-turquoise" />
                  </div>

                  {/* Deutscher Titel */}
                  <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">
                    {card.title}
                  </h3>

                  {/* Beschreibung */}
                  <p className="text-xs sm:text-sm text-muted-foreground">{card.description}</p>
                </>
              );

              const cardClasses =
                "glass-card-hover glow-border p-4 sm:p-6 flex flex-col items-center text-center transition-all hover:scale-105";

              if (isAnchor) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className={cardClasses}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link
                  key={card.title}
                  to={card.href}
                  className={cardClasses}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
