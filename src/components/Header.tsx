import { BookOpen, GraduationCap, Home, Info } from "lucide-react";
import logoBlue from "@/assets/logo-blue.png";

const navItems = [
  { label: "Startseite", href: "#", icon: Home },
  { label: "Grammatik", href: "#", icon: BookOpen },
  { label: "Verben & Pronomen", href: "#verbs", icon: GraduationCap, active: true },
  { label: "Über uns", href: "#about", icon: Info },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-card mx-4 mt-4 rounded-2xl">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoBlue} alt="Warizmy Akademie Logo" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-arabic-display text-lg font-bold text-primary">
                أكاديمية واريزمي
              </span>
              <span className="text-xs text-muted-foreground">Warizmy Akademie</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      item.active
                        ? "bg-turquoise/10 text-turquoise"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
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
