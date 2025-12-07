import { BookOpen, GraduationCap, Home, Info, PenTool } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoBlue from "@/assets/logo-blue.png";

const navItems = [
  { label: "الرئيسية", labelDe: "Startseite", href: "/", icon: Home },
  { label: "دروس النحو", labelDe: "Grammatik", href: "#", icon: BookOpen },
  { label: "الأفعال والضمائر", labelDe: "Verben & Pronomen", href: "/#verbs", icon: GraduationCap },
  { label: "تدريب الأفعال", labelDe: "Quiz", href: "/verb-quiz", icon: PenTool },
  { label: "معلومات عنا", labelDe: "Über uns", href: "#about", icon: Info },
];

const Header = () => {
  const location = useLocation();
  
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.substring(1);
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-card mx-4 mt-4 rounded-2xl">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoBlue} alt="Warizmy Akademie Logo" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-arabic-display text-lg font-bold text-primary" dir="rtl">
                أكاديمية الخوارزمي
              </span>
              <span className="text-xs text-muted-foreground">Warizmy Akademie</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block" dir="rtl">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const isExternal = item.href.startsWith("#") || item.href.startsWith("/#");
                
                if (isExternal) {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          active
                            ? "bg-turquoise/10 text-turquoise"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="font-arabic">{item.label}</span>
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        active
                          ? "bg-turquoise/10 text-turquoise"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="font-arabic">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted md:hidden">
            <BookOpen className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
