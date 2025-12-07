import { BookOpen, GraduationCap, History, Lightbulb, Star, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Über-uns-Seite der Warizmy Education Academy
 * Enthält Informationen über die Akademie, den Namen und Al-Chawarizmy
 */
const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero-Bereich */}
        <section className="relative overflow-hidden py-16 md:py-24">
          {/* Hintergrund-Dekoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-turquoise/5 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="container">
            <div className="text-center mb-12">
              <p className="mb-2 font-arabic-display text-turquoise" dir="rtl">عن أكاديمية الخوارزمي</p>
              <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Über WARIZMY EDUCATION
              </h1>
            </div>

            {/* Hauptbeschreibung */}
            <div className="glass-card p-6 sm:p-8 md:p-12 mb-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise/20 to-turquoise-light/20">
                  <GraduationCap className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">Unsere Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Warizmy Education Academy bietet Kurse in arabischer Sprache und islamischer 
                    Bildung an, die darauf abzielen, ein tiefes Verständnis der Sprache und der 
                    kulturellen sowie religiösen Traditionen zu vermitteln. Diese Unterrichtseinheiten 
                    sind speziell darauf ausgelegt, Schülern sowohl sprachliche Fähigkeiten als auch 
                    Wissen über den Islam zu vermitteln.
                  </p>
                </div>
              </div>

              <p className="font-arabic-display text-lg text-right text-muted-foreground/80" dir="rtl">
                تقدم أكاديمية الخوارزمي التعليمية دورات في اللغة العربية والتربية الإسلامية، تهدف إلى 
                تعميق الفهم للغة والتقاليد الثقافية والدينية.
              </p>
            </div>
          </div>
        </section>

        {/* Unser Name */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                    <Star className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-arabic-display text-amber-500 text-sm" dir="rtl">اسمنا</p>
                    <h2 className="text-2xl font-bold text-foreground">Unser Name</h2>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unsere Institution betrachtet mit Stolz das Erbe von Al-Chwarizmy als Inspiration. 
                  Sein Vermächtnis illustriert auf eindrucksvolle Weise, wie Naturwissenschaften, 
                  Sprachen und weitere Disziplinen harmonisch mit den traditionellen islamischen 
                  Wissenschaften verschmelzen können.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Durch die Studie von Al-Chwarizmys Werk möchten wir diese Symbiose verdeutlichen 
                  und betonen, wie die Kombination verschiedener Wissensbereiche eine umfassendere 
                  und tiefere Verständnisweise ermöglicht.
                </p>
                
                <p className="text-foreground font-medium">
                  Diese Überzeugung treibt uns an, Brücken zwischen den verschiedenen Wissensformen 
                  zu bauen und eine integrative Bildung zu fördern, die das Beste aus beiden Welten vereint.
                </p>
              </div>

              {/* Dekorative Karte */}
              <div className="glass-card-hover glow-border p-8 text-center">
                <div className="mb-6">
                  <p className="font-arabic-display text-6xl text-turquoise mb-2" dir="rtl">
                    الخوارزمي
                  </p>
                  <p className="text-2xl font-bold text-foreground">Al-Chawarizmy</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-xl bg-muted/50 p-4">
                    <Lightbulb className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Mathematik</p>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-4">
                    <BookOpen className="h-6 w-6 text-turquoise mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Wissenschaft</p>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-4">
                    <Users className="h-6 w-6 text-violet-500 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Bildung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wer ist Al-Chawarizmy */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                      <History className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="font-arabic-display text-white/80" dir="rtl">من هو الخوارزمي؟</p>
                      <h2 className="text-2xl font-bold">Wer ist Al-Chawarizmy?</h2>
                    </div>
                  </div>
                </div>

                {/* Inhalt */}
                <div className="p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Al-Chwarizmy, ein herausragender Gelehrter des 9. Jahrhunderts, zeigte eine 
                      bemerkenswerte Vielseitigkeit in seinem intellektuellen Streben. Ursprünglich 
                      in traditionellen Wissenschaften wie <strong className="text-foreground">Hadith</strong> und 
                      <strong className="text-foreground"> Fiqh</strong> geschult, erkannte er jedoch bald die 
                      transformative Kraft der Mathematik.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Mit seiner Hingabe und seinem scharfen Verstand widmete er sich der Mathematik 
                      und schuf wegweisende Werke, die das Fundament für die Entwicklung von 
                      <strong className="text-turquoise"> Algebra</strong> und 
                      <strong className="text-turquoise"> Algorithmus</strong> legten.
                    </p>

                    <div className="rounded-xl bg-turquoise/10 border border-turquoise/20 p-6 my-6">
                      <p className="text-foreground font-medium text-center">
                        Al-Chwarizmys multidisziplinärer Ansatz spiegelt sich in seiner unvergleichlichen 
                        Bedeutung als Pionier sowohl in religiösen als auch in wissenschaftlichen Studien wider.
                      </p>
                    </div>

                    {/* Zeitleiste / Fakten */}
                    <div className="grid gap-4 sm:grid-cols-2 mt-8">
                      <div className="rounded-xl border border-border p-4">
                        <p className="text-2xl font-bold text-turquoise">9. Jhd.</p>
                        <p className="text-sm text-muted-foreground">Lebenszeit</p>
                      </div>
                      <div className="rounded-xl border border-border p-4">
                        <p className="text-2xl font-bold text-amber-500">Bagdad</p>
                        <p className="text-sm text-muted-foreground">Wirkungsstätte</p>
                      </div>
                      <div className="rounded-xl border border-border p-4">
                        <p className="text-2xl font-bold text-violet-500">Algebra</p>
                        <p className="text-sm text-muted-foreground">Begründer</p>
                      </div>
                      <div className="rounded-xl border border-border p-4">
                        <p className="text-2xl font-bold text-primary">Algorithmus</p>
                        <p className="text-sm text-muted-foreground">Namensursprung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="glass-card p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Bereit zum Lernen?
              </h2>
              <p className="text-muted-foreground mb-6">
                Entdecke unsere Lektionen und verbessere deine Arabischkenntnisse mit der 
                Warizmy Education Academy.
              </p>
              <p className="font-arabic-display text-turquoise text-xl mb-6" dir="rtl">
                هل أنت مستعد للتعلم؟
              </p>
              <a 
                href="/" 
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-turquoise to-turquoise-light px-8 py-3 font-medium text-night-blue shadow-glow transition-all hover:shadow-xl"
              >
                Zur Startseite
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

