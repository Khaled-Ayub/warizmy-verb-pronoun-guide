import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise to-turquoise-light">
              <GraduationCap className="h-5 w-5 text-night-blue" />
            </div>
            <div>
              <span className="font-arabic-display text-lg font-bold text-primary">
                أكاديمية واريزمي
              </span>
              <span className="mx-2 text-muted-foreground">|</span>
              <span className="font-medium text-foreground">Warizmy Akademie</span>
            </div>
          </div>

          <p className="max-w-md text-muted-foreground">
            Lernplattform für die arabische Sprache und ihre Wissenschaften
          </p>

          <p className="font-arabic-display text-sm text-muted-foreground">
            منصة تعليمية لدراسة اللغة العربية وعلومها
          </p>

          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-border to-transparent" />

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Warizmy Akademie – Für Schüler erstellt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
