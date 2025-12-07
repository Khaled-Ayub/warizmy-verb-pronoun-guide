import { useState } from "react";
import { BookOpen, GraduationCap, Home, Info, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoBlue from "@/assets/logo-blue.png";

/**
 * Navigation-Elemente für die Website
 * Enthält arabische und deutsche Labels, Icons und Links
 */
const navItems = [
  { label: "الرئيسية", labelDe: "Startseite", href: "/", icon: Home },
  { label: "الأفعال والضمائر", labelDe: "Verben & Pronomen", href: "/#verbs", icon: GraduationCap },
  { label: "مدرب المفردات", labelDe: "Vokabeltrainer", href: "/vokabeltrainer", icon: BookOpen },
  { label: "معلومات عنا", labelDe: "Über uns", href: "/about", icon: Info },
];

const Header = () => {
  const location = useLocation();
  // State für mobiles Menü (offen/geschlossen)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prüft, ob ein Menüpunkt aktiv ist
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.substring(1);
    return location.pathname === href;
  };

  // Schließt das mobile Menü beim Klick auf einen Link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-card mx-2 sm:mx-4 mt-2 sm:mt-4 rounded-2xl">
        <div className="container flex items-center justify-between py-3 sm:py-4">
          {/* Logo - auf Mobile kleiner */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img 
              src={logoBlue} 
              alt="Warizmy Akademie Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12" 
            />
            <div className="flex flex-col">
              <span className="font-arabic-display text-base sm:text-lg font-bold text-primary" dir="rtl">
                أكاديمية الخوارزمي
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">Warizmy Akademie</span>
            </div>
          </Link>

          {/* Desktop Navigation - nur ab md sichtbar, zweisprachig */}
          <nav className="hidden md:block" dir="rtl">
            <ul className="flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const isExternal = item.href.startsWith("#") || item.href.startsWith("/#");
                
                // Gemeinsame Klassen für beide Linktypen
                const linkClasses = `flex flex-col items-center gap-0.5 rounded-xl px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-turquoise/10 text-turquoise"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`;
                
                // Inhalt für beide Linktypen
                const linkContent = (
                  <>
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span className="font-arabic-display">{item.label}</span>
                    </div>
                    <span className="text-[10px] lg:text-xs opacity-70" dir="ltr">{item.labelDe}</span>
                  </>
                );
                
                if (isExternal) {
                  return (
                    <li key={item.label}>
                      <a href={item.href} className={linkClasses}>
                        {linkContent}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link to={item.href} className={linkClasses}>
                      {linkContent}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menü Button - nur auf Mobile sichtbar */}
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted md:hidden transition-colors hover:bg-muted/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobiles Dropdown-Menü */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50">
            <nav className="p-4" dir="rtl">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  const isExternal = item.href.startsWith("#") || item.href.startsWith("/#");
                  
                  if (isExternal) {
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={handleLinkClick}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                            active
                              ? "bg-turquoise/10 text-turquoise"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5" />
                            <span className="font-arabic">{item.label}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{item.labelDe}</span>
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          active
                            ? "bg-turquoise/10 text-turquoise"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5" />
                          <span className="font-arabic">{item.label}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{item.labelDe}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
