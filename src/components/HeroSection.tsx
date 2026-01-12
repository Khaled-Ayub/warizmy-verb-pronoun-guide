import {
  ArrowDown,
  BookOpen,
  CaretLeft,
  CaretRight,
  FileText,
  PenNib,
  Prohibit,
  Stack,
  Target,
  Trophy,
} from "@phosphor-icons/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const topics = [
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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Hintergrund-Dekoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-turquoise/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-primary/5 blur-3xl" />
        {/* Geometrisches Muster */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 h-20 w-20 rotate-45 border-2 border-turquoise" />
          <div className="absolute right-20 top-1/3 h-16 w-16 rotate-12 border-2 border-primary" />
          <div className="absolute bottom-20 left-1/4 h-12 w-12 -rotate-12 border-2 border-turquoise" />
        </div>
      </div>

      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-left">
            <div className="animate-fade-up mb-5">
              <span className="chip">Neue Lernseite</span>
            </div>

            <h1 className="animate-fade-up animation-delay-100 mb-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary">
              Arabische Grundlagen lernen
            </h1>

            <p className="animate-fade-up animation-delay-200 mb-3 text-base sm:text-lg text-muted-foreground">
              Vokabeln, Grammatik und Morphismen - klar, kompakt und mit Beispielen.
            </p>

            <p
              className="animate-fade-up animation-delay-250 mb-6 font-arabic-sans text-sm text-muted-foreground/80"
              dir="rtl"
            >
              دروس مبسطة في المفردات والنحو والصرف.
            </p>

            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-3">
              <a
                href="#verbs"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-turquoise to-turquoise-light px-6 py-3 text-base font-semibold text-night-blue shadow-glow transition-all hover:shadow-xl hover:scale-105"
              >
                <span>Lernen starten</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </a>
              <Link
                to="/vokabeltrainer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary/20 px-6 py-3 text-base font-semibold text-foreground hover:bg-primary/5 transition-all"
              >
                <span>Vokabeltrainer</span>
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up animation-delay-200">
            <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-background via-white to-secondary/10 p-6 shadow-card">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-turquoise/15">
                  <BookOpen className="h-5 w-5 text-turquoise" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Heute lernen</p>
                  <p className="text-xs text-muted-foreground">Arabische Grundlagen</p>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-border bg-white/80 p-4">
                  <p className="text-xs text-muted-foreground">Beispiel</p>
                  <p
                    dir="rtl"
                    className="mt-1 font-arabic-display text-xl text-foreground text-right"
                  >
                    أقرأُ
                  </p>
                  <p className="text-sm text-foreground">ich lese</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border bg-white/80 p-4">
                    <p className="text-xs text-muted-foreground">Fortschritt</p>
                    <p className="mt-2 text-2xl font-bold text-primary">3/12</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-white/80 p-4">
                    <p className="text-xs text-muted-foreground">Streak</p>
                    <p className="mt-2 text-2xl font-bold text-secondary">5 Tage</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 -bottom-6 hidden items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs text-foreground shadow-card sm:flex">
              <Target className="h-4 w-4 text-turquoise" />
              Übe täglich 5 Minuten
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Themenauswahl - wähle, was du lernen willst
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll(-240)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary/5"
                aria-label="Nach links scrollen"
              >
                <CaretLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll(240)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary/5"
                aria-label="Nach rechts scrollen"
              >
                <CaretRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="mt-3 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory"
          >
            {topics.map((topic) => {
              const isAnchor = topic.href.startsWith("#") || topic.href.startsWith("/#");
              const cardClasses =
                "min-w-[180px] flex-shrink-0 snap-start rounded-2xl border border-border bg-card/80 px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-card";

              const cardContent = (
                <>
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-turquoise/15">
                    <topic.icon className="h-4 w-4 text-turquoise" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{topic.title}</p>
                  <p className="text-xs text-muted-foreground">{topic.description}</p>
                </>
              );

              if (isAnchor) {
                return (
                  <a key={topic.title} href={topic.href} className={cardClasses}>
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link key={topic.title} to={topic.href} className={cardClasses}>
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
