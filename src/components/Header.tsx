import { useState, type ElementType } from "react";
import {
  BookOpen,
  CaretDown,
  GraduationCap,
  House,
  Info,
  List,
  PenNib,
  Prohibit,
  Stack,
  Target,
  Trophy,
  X,
} from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import logoBlue from "@/assets/logo-blue.png";
import { grammarTopicItems } from "@/data/grammarTopics";

type MenuItem = {
  label: string;
  href: string;
  icon: ElementType;
};

type TopicItem = {
  labelAr: string;
  labelDe: string;
  number?: number;
  href?: string;
};

const grammarItems: MenuItem[] = [
  { label: "Alphabet", href: "/alphabet", icon: BookOpen },
  { label: "Lesen lernen", href: "/lesen-lernen", icon: GraduationCap },
  { label: "Verbgrundlagen", href: "/#verbs", icon: Stack },
  { label: "Verbarten", href: "/#verb-types", icon: GraduationCap },
  { label: "Pronomen", href: "/#pronouns", icon: BookOpen },
  { label: "Verneinung", href: "/#negation", icon: Prohibit },
];

const morphismItems: MenuItem[] = [
  { label: "Konjugation", href: "/#conjugation", icon: PenNib },
  { label: "Verneinungs-Übung", href: "/#negation-exercises", icon: Trophy },
  { label: "Übungen", href: "/vokabeltrainer", icon: Target },
];

const morphismTopicItems: TopicItem[] = [
  {
    number: 1,
    labelAr: "فَعَلَ يَفْعُلُ",
    labelDe: "Grundform Form I, Untertyp a u (z. B. نَصَرَ يَنْصُرُ)",
  },
  {
    number: 2,
    labelAr: "فَعَلَ يَفْعِلُ",
    labelDe: "Grundform Form I, Untertyp a i (z. B. ضَرَبَ يَضْرِبُ)",
  },
  {
    number: 3,
    labelAr: "فَعَلَ يَفْعَلُ",
    labelDe: "Grundform Form I, Untertyp a a (z. B. فَتَحَ يَفْتَحُ)",
  },
  {
    number: 4,
    labelAr: "فَعِلَ يَفْعَلُ",
    labelDe: "Grundform Form I, Untertyp i a (z. B. عَلِمَ يَعْلَمُ)",
  },
  {
    number: 5,
    labelAr: "فَعُلَ يَفْعُلُ",
    labelDe: "Grundform Form I, Untertyp u u (z. B. حَسُنَ يَحْسُنُ)",
  },
  {
    number: 6,
    labelAr: "فَعِلَ يَفْعِلُ",
    labelDe: "Grundform Form I, Untertyp i i (z. B. حَسِبَ يَحْسِبُ)",
  },
  {
    number: 7,
    labelAr: "أَفْعَلَ يُفْعِلُ",
    labelDe: "Form IV (أَفْعَلَ), Kausativ, oft „jemanden etwas tun lassen“ (z. B. أَكْرَمَ يُكْرِمُ)",
  },
  {
    number: 8,
    labelAr: "فَعَّلَ يُفَعِّلُ",
    labelDe: "Form II (Verdopplung), Intensivierung oder Kausativ (z. B. فَرَّحَ يُفَرِّحُ)",
  },
  {
    number: 9,
    labelAr: "فَاعَلَ يُفَاعِلُ",
    labelDe: "Form III, meist gegenseitige Handlung oder Beteiligung (z. B. قَاتَلَ يُقَاتِلُ)",
  },
  {
    number: 10,
    labelAr: "اِنْفَعَلَ يَنْفَعِلُ",
    labelDe: "Form VII, oft passivnah oder مطاوعة (z. B. اِنْكَسَرَ يَنْكَسِرُ)",
  },
  {
    number: 11,
    labelAr: "اِفْتَعَلَ يَفْتَعِلُ",
    labelDe: "Form VIII, oft reflexiv, „sich aneignen / sich zusammenfinden“ (z. B. اِجْتَمَعَ يَجْتَمِعُ)",
  },
  {
    number: 12,
    labelAr: "اِفْعَلَّ يَفْعَلُّ",
    labelDe: "Form IX, meist Farben und körperliche Merkmale (z. B. اِحْمَرَّ يَحْمَرُّ)",
  },
  {
    number: 13,
    labelAr: "تَفَعَّلَ يَتَفَعَّلُ",
    labelDe: "Form V, reflexiv zu Form II (z. B. تَكَلَّمَ يَتَكَلَّمُ)",
  },
  {
    number: 14,
    labelAr: "تَفَاعَلَ يَتَفَاعَلُ",
    labelDe: "Form VI, gegenseitig zu Form III (z. B. تَصَالَحَ يَتَصَالَحُ)",
  },
  {
    number: 15,
    labelAr: "اِسْتَفْعَلَ يَسْتَفْعِلُ",
    labelDe:
      "Form X, oft „um etwas bitten / etwas suchen“ (z. B. اِسْتَغْفَرَ) oder Kausativ (z. B. اِسْتَخْرَجَ)",
  },
  {
    number: 16,
    labelAr: "اِفْعَوْعَلَ يَفْعَوْعِلُ",
    labelDe: "Erweiterte Form, selten, Intensivierung bei Zuständen (z. B. اِعْشَوْشَبَ يَعْشَوْشِبُ)",
  },
  {
    number: 17,
    labelAr: "اِفْعَوَّلَ يَفْعَوِّلُ",
    labelDe: "Erweiterte Form, selten, Intensivierung (z. B. اِجْلَوَّذَ يَجْلَوِّذُ)",
  },
  {
    number: 18,
    labelAr: "اِفْعَالَّ يَفْعَالُّ",
    labelDe: "Erweiterte Form, selten, starke Intensivierung (z. B. اِحْمَارَّ يَحْمَارُّ)",
  },
  {
    number: 19,
    labelAr: "فَعْلَلَ يُفَعْلِلُ",
    labelDe: "Quadriliteral, vierkonsonantige Grundform (z. B. دَحْرَجَ يُدَحْرِجُ)",
  },
  {
    number: 20,
    labelAr: "فَوْعَلَ يُفَوْعِلُ",
    labelDe: "Anhang zum رباعي, Muster mit و nach dem 1. Radikal (z. B. حَوْقَلَ يُحَوْقِلُ)",
  },
  {
    number: 21,
    labelAr: "فَيْعَلَ يُفَيْعِلُ",
    labelDe: "Anhang zum رباعي, Muster mit ي nach dem 1. Radikal (z. B. بَيْطَرَ يُبَيْطِرُ)",
  },
  {
    number: 22,
    labelAr: "فَعْوَلَ يُفَعْوِلُ",
    labelDe: "Anhang zum رباعي, Muster mit و vor dem letzten Radikal (z. B. جَهْوَرَ يُجَهْوِرُ)",
  },
  {
    number: 23,
    labelAr: "فَعْيَلَ يُفَعْيِلُ",
    labelDe: "Anhang zum رباعي, Muster mit ي vor dem letzten Radikal (z. B. عَثْيَرَ يُعَثْيِرُ)",
  },
  {
    number: 24,
    labelAr: "فَعْلَلَ يُفَعْلِلُ",
    labelDe: "Anhang zum رباعي, Verdopplung des letzten Radikals (z. B. جَلْبَبَ يُجَلْبِبُ)",
  },
  {
    number: 25,
    labelAr: "فَعْلَى يُفَعْلِي",
    labelDe: "Anhang zum رباعي, Zusatz ي am Ende (z. B. سَلْقَى يُسَلْقِي)",
  },
  {
    number: 26,
    labelAr: "تَفَعْلَلَ يَتَفَعْلَلُ",
    labelDe: "رباعي mit Zusatz ت am Anfang (z. B. تَدَحْرَجَ يَتَدَحْرَجُ)",
  },
  {
    number: 27,
    labelAr: "اِفْعَنْلَلَ يَفْعَنْلِلُ",
    labelDe: "رباعي mit zwei Zusätzen, darunter ن im Inneren (z. B. اِحْرَنْجَمَ يَحْرَنْجِمُ)",
  },
  {
    number: 28,
    labelAr: "اِفْعَلَلَّ يَفْعَلِلُّ",
    labelDe: "رباعي mit starker Intensivierung (z. B. اِقْشَعَرَّ يَقْشَعِرُّ)",
  },
  {
    number: 29,
    labelAr: "تَفَعْلَلَ يَتَفَعْلَلُ",
    labelDe: "Anhang zu تَدَحْرَجَ (z. B. تَجَلْبَبَ يَتَجَلْبَبُ)",
  },
  {
    number: 30,
    labelAr: "تَفَوْعَلَ يَتَفَوْعَلُ",
    labelDe: "Anhang, mit و nach dem 1. Radikal (z. B. تَجَوْرَبَ يَتَجَوْرَبُ)",
  },
  {
    number: 31,
    labelAr: "تَفَيْعَلَ يَتَفَيْعَلُ",
    labelDe: "Anhang, mit ي nach dem 1. Radikal (z. B. تَشَيْطَنَ يَتَشَيْطَنُ)",
  },
  {
    number: 32,
    labelAr: "تَفَعْوَلَ يَتَفَعْوَلُ",
    labelDe: "Anhang, mit و vor dem letzten Radikal (z. B. تَرَهْوَكَ يَتَرَهْوَكُ)",
  },
  {
    number: 33,
    labelAr: "تَفَعْلَى يَتَفَعْلَى",
    labelDe: "Anhang, Zusatz ي am Ende (z. B. تَسَلْقَى يَتَسَلْقَى)",
  },
  {
    number: 34,
    labelAr: "اِفْعَنْلَلَ يَفْعَنْلِلُ",
    labelDe: "Anhang zu diesem Muster (z. B. اِقْعَنْسَسَ يَقْعَنْسِسُ)",
  },
  {
    number: 35,
    labelAr: "اِفْعَنْلَى يَفْعَنْلِي",
    labelDe: "Anhang mit Endung ى / ي (z. B. اِسْلَنْقَى يَسْلَنْقِي)",
  },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.substring(1);
    return location.pathname === href;
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const renderItem = (item: MenuItem) => {
    const active = isActive(item.href);
    const isAnchor = item.href.startsWith("#") || item.href.startsWith("/#");
    const classes = `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
      active ? "bg-turquoise/10 text-turquoise" : "text-foreground hover:bg-muted"
    }`;

    if (isAnchor) {
      return (
        <a key={item.label} href={item.href} className={classes}>
          <item.icon className="h-4 w-4" />
          {item.label}
        </a>
      );
    }

    return (
      <Link key={item.label} to={item.href} className={classes}>
        <item.icon className="h-4 w-4" />
        {item.label}
      </Link>
    );
  };

  const renderTopic = (topic: TopicItem, onClick?: () => void) => {
    const content = (
      <div className="flex items-start gap-2">
        {topic.number !== undefined && (
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary">
            {topic.number}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <span className="block text-right font-arabic-display text-sm text-foreground" dir="rtl">
            {topic.labelAr}
          </span>
          <span className="block text-[11px] text-muted-foreground">{topic.labelDe}</span>
        </div>
      </div>
    );

    const baseClasses =
      "rounded-xl border border-border/70 bg-white/70 px-3 py-2 transition-shadow hover:shadow-sm";

    if (topic.href) {
      return (
        <Link
          key={`${topic.number ?? "g"}-${topic.labelAr}`}
          to={topic.href}
          onClick={onClick}
          className={baseClasses}
        >
          {content}
        </Link>
      );
    }

    return (
      <div key={`${topic.number ?? "g"}-${topic.labelAr}`} className={baseClasses}>
        {content}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="glass-card mx-2 mt-2 rounded-2xl sm:mx-4 sm:mt-4"
        onMouseLeave={() => setDesktopMenuOpen(false)}
      >
        <div className="container grid grid-cols-[1fr_auto_1fr] items-center py-3 sm:py-4">
          <div className="flex items-center justify-start">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted transition-colors hover:bg-muted/80 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
            </button>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-2">
            {renderItem({ label: "Startseite", href: "/", icon: House })}

            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                aria-haspopup="true"
                aria-expanded={desktopMenuOpen}
                onMouseEnter={() => setDesktopMenuOpen(true)}
                onFocus={() => setDesktopMenuOpen(true)}
                onClick={() => setDesktopMenuOpen((open) => !open)}
              >
                Lernen
                <CaretDown
                  className={`h-4 w-4 transition-transform ${
                    desktopMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {renderItem({ label: "Vokabeltrainer", href: "/vokabeltrainer", icon: BookOpen })}
            {renderItem({ label: "Über uns", href: "/about", icon: Info })}
          </nav>

          <Link
            to="/"
            className="flex items-center justify-self-end gap-2 sm:gap-3 flex-row-reverse text-right"
          >
            <img src={logoBlue} alt="Warizmy Akademie Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div className="flex flex-col">
              <span className="font-arabic-display text-base font-bold text-primary sm:text-lg">
                Warizmy Akademie
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">
                Arabische Grundlagen
              </span>
            </div>
          </Link>
        </div>

        <div
          className={`hidden lg:block overflow-hidden border-t border-border/50 transition-[max-height,opacity] duration-200 ${
            desktopMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setDesktopMenuOpen(true)}
        >
          <div className="container py-5">
            <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Aktuell
                </p>
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Grammatik
                  </p>
                  <div className="flex flex-col gap-2">
                    {grammarItems.map((item) => renderItem(item))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Morphismen
                  </p>
                  <div className="flex flex-col gap-2">
                    {morphismItems.map((item) => renderItem(item))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Grammatikthemen
                  </p>
                  <div className="grid max-h-72 gap-2 overflow-y-auto pr-2">
                    {grammarTopicItems.map((topic) => renderTopic(topic))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Morphismenthemen
                  </p>
                  <div className="grid max-h-72 gap-2 overflow-y-auto pr-2">
                    {morphismTopicItems.map((topic) => renderTopic(topic))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border/50 lg:hidden">
            <nav className="p-4">
              <div className="space-y-3">
                {renderItem({ label: "Startseite", href: "/", icon: House })}

                <div className="pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Aktuell
                </div>

                <div className="pt-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Grammatik
                </div>
                <div className="space-y-2">
                  {grammarItems.map((item) => {
                    const active = isActive(item.href);
                    const isAnchor = item.href.startsWith("#") || item.href.startsWith("/#");
                    const classes = `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                      active
                        ? "bg-turquoise/10 text-turquoise"
                        : "text-foreground hover:bg-muted"
                    }`;

                    if (isAnchor) {
                      return (
                        <a key={item.label} href={item.href} onClick={handleLinkClick} className={classes}>
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </a>
                      );
                    }

                    return (
                      <Link key={item.label} to={item.href} onClick={handleLinkClick} className={classes}>
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Morphismen
                </div>
                <div className="space-y-2">
                  {morphismItems.map((item) => {
                    const active = isActive(item.href);
                    const isAnchor = item.href.startsWith("#") || item.href.startsWith("/#");
                    const classes = `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                      active
                        ? "bg-turquoise/10 text-turquoise"
                        : "text-foreground hover:bg-muted"
                    }`;

                    if (isAnchor) {
                      return (
                        <a key={item.label} href={item.href} onClick={handleLinkClick} className={classes}>
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </a>
                      );
                    }

                    return (
                      <Link key={item.label} to={item.href} onClick={handleLinkClick} className={classes}>
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {renderItem({ label: "Vokabeltrainer", href: "/vokabeltrainer", icon: BookOpen })}
                {renderItem({ label: "Über uns", href: "/about", icon: Info })}

                <div className="pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Grammatikthemen
                </div>
                <div className="grid max-h-64 gap-2 overflow-y-auto pr-1">
                  {grammarTopicItems.map((topic) => renderTopic(topic, handleLinkClick))}
                </div>

                <div className="pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Morphismenthemen
                </div>
                <div className="grid max-h-64 gap-2 overflow-y-auto pr-1">
                  {morphismTopicItems.map((topic) => renderTopic(topic, handleLinkClick))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
