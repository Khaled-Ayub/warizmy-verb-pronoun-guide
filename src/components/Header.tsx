import { useState } from "react";
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

const grammarItems = [
  { label: "Verbgrundlagen", href: "/#verbs", icon: Stack },
  { label: "Verbarten", href: "/#verb-types", icon: GraduationCap },
  { label: "Pronomen", href: "/#pronouns", icon: BookOpen },
  { label: "Verneinung", href: "/#negation", icon: Prohibit },
];

const morphismItems = [
  { label: "Konjugation", href: "/#conjugation", icon: PenNib },
  { label: "Verneinungs-Übung", href: "/#negation-exercises", icon: Trophy },
  { label: "Übungen", href: "/vokabeltrainer", icon: Target },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.substring(1);
    return location.pathname === href;
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const renderItem = (item: { label: string; href: string; icon: React.ElementType }) => {
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

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-card mx-2 mt-2 rounded-2xl sm:mx-4 sm:mt-4">
        <div className="container flex items-center justify-between py-3 sm:py-4">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
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

          <nav className="hidden lg:flex items-center gap-2">
            {renderItem({ label: "Startseite", href: "/", icon: House })}

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                aria-haspopup="true"
              >
                Lernen
                <CaretDown className="h-4 w-4" />
              </button>

              <div className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-5 shadow-card opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Grammatik
                    </p>
                    <div className="flex flex-col gap-2">
                      {grammarItems.map((item) => renderItem(item))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Morphismen
                    </p>
                    <div className="flex flex-col gap-2">
                      {morphismItems.map((item) => renderItem(item))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {renderItem({ label: "Vokabeltrainer", href: "/vokabeltrainer", icon: BookOpen })}
            {renderItem({ label: "Über uns", href: "/about", icon: Info })}
          </nav>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted transition-colors hover:bg-muted/80 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border/50 lg:hidden">
            <nav className="p-4">
              <div className="space-y-3">
                {renderItem({ label: "Startseite", href: "/", icon: House })}

                <div className="pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
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

                <div className="pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
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
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
