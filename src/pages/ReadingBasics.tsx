import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReadingBasics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 sm:py-16">
          <div className="container max-w-4xl text-left">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Grundlagen
            </p>
            <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Lesen lernen
            </h1>
            <p className="mt-3 text-muted-foreground">
              Übe das Lesen von Silben, Wörtern und kurzen Sätzen mit klaren
              Beispielen.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-card/80 p-6">
              <p className="text-sm text-muted-foreground">
                Inhalt folgt. Hier findest du bald Leseübungen und kurze Texte.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReadingBasics;
