import { CaretLeft } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { grammarTopicItems } from "@/data/grammarTopics";

const fullSpeechExamples = [
  { ar: "الْجَوُّ صَحْوٌ", de: "Das Wetter ist klar." },
  { ar: "الْبُسْتَانُ مُثْمِرٌ", de: "Der Garten trägt Früchte." },
  { ar: "الْهِلالُ سَاطِعٌ", de: "Der Halbmond strahlt." },
  { ar: "السَّمَاءُ صَافِيَةٌ", de: "Der Himmel ist klar." },
  { ar: "يُضِيءُ الْقَمَرُ لَيْلًا", de: "Der Mond leuchtet nachts." },
  { ar: "يَنْجَحُ الْمُجْتَهِدُ", de: "Der Fleißige hat Erfolg." },
  { ar: "لاَ يُفْلِحُ الْكَسُولُ", de: "Der Faule hat keinen Erfolg." },
  { ar: "لاَ إِلَهَ إِلَّا الله", de: "Es gibt keinen Gott außer Allah." },
  {
    ar: "مُحَمَّدٌ صَفْوَةُ الْمُرْسَلِينَ",
    de: "Muhammad ist der Auserwählte der Gesandten.",
  },
  { ar: "الله رَبُّنَا", de: "Allah ist unser Herr." },
  { ar: "مُحَمَّدٌ نَبِيُّنَا", de: "Muhammad ist unser Prophet." },
];

const composedExamples = [
  { ar: "مُحَمَّدٌ مُسَافِرٌ", de: "Muhammad ist ein Reisender." },
  { ar: "الْعِلْمُ نَافِعٌ", de: "Das Wissen ist nützlich." },
  { ar: "يَبْلُغُ الْمُجْتَهِدُ الْمَجْدَ", de: "Der Fleißige erreicht den Ruhm." },
  { ar: "لِكُلِّ مُجْتَهِدٍ نَصِيبٌ", de: "Jedem Fleißigen gebührt ein Anteil." },
  { ar: "الْعِلْمُ خَيْرُ مَا تَسْعَى إِلَيْهِ", de: "Das Wissen ist das Beste, wonach du strebst." },
];

const singleWordExamples = [
  { ar: "مُحَمَّد", de: "Muhammad" },
  { ar: "عَلِيّ", de: "Ali" },
  { ar: "إِبْرَاهِيم", de: "Ibrahim" },
  { ar: "قَامَ", de: "er stand auf" },
  { ar: "مِنْ", de: "von" },
];

const incompleteExamples = [
  { ar: "مَدِينَةُ الأَسْكَنْدَرِيَّةِ", de: "Die Stadt Alexandria" },
  { ar: "عَبْدُ الله", de: "Abdullah (Diener Allahs)" },
  { ar: "حَضْرَمَوْتُ", de: "Hadramaut" },
  { ar: "لَوْ أَنْصَفَ النَّاسُ", de: "Wenn die Menschen gerecht wären..." },
  { ar: "إِذَا جَاءَ الشِّتَاءُ", de: "Wenn der Winter kommt..." },
  { ar: "مَهْمَا أَخْفَى الْمُرَائِي", de: "Was auch immer der Heuchler verbirgt..." },
  { ar: "إِنْ طَلَعَتِ الشَّمْسُ", de: "Wenn die Sonne aufgeht..." },
];

const questions = [
  "Was ist „al-kalam“ (die Rede)?",
  "Was bedeutet es, dass sie ein „gesprochener Ausdruck“ ist?",
  "Was bedeutet es, dass sie „sinnvoll“ ist?",
  "Was bedeutet es, dass sie „zusammengesetzt“ ist?",
  "Was bedeutet es, dass sie „gemäß der arabischen Sprachkonvention“ ist?",
  "Gib fünf Beispiele für das, was bei den Grammatikern als „Rede“ gilt.",
];

const GrammarChapter = () => {
  const { chapterNumber } = useParams();
  const parsedNumber = Number(chapterNumber);
  const chapter = grammarTopicItems.find((item) => item.number === parsedNumber);
  const isChapterOne = parsedNumber === 1;

  const content = !chapter || Number.isNaN(parsedNumber) ? (
    <section className="py-16">
      <div className="container max-w-3xl text-left">
        <h1 className="text-3xl font-bold text-primary">Kapitel nicht gefunden</h1>
        <p className="mt-3 text-muted-foreground">
          Dieses Kapitel ist aktuell nicht verfügbar.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
        >
          <CaretLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  ) : (
    <section className="py-12 sm:py-16">
      <div className="container max-w-4xl text-left">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Grammatik
            </p>
            <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Kapitel {chapter.number}
            </h1>
            <p className="mt-2 font-arabic-display text-2xl text-foreground" dir="rtl">
              {chapter.labelAr}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{chapter.labelDe}</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            <CaretLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>

        {!isChapterOne ? (
          <div className="rounded-2xl border border-border bg-card/80 p-6 text-left">
            <p className="text-lg font-semibold text-foreground">Inhalt folgt</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Dieses Kapitel wird Schritt für Schritt ergänzt.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card/80 p-6">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                بسم الله الرحمن الرحيم
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Im Namen Allahs, des Allerbarmers, des Barmherzigen.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                قال المصَنِّف...
              </p>
              <p className="text-sm text-muted-foreground">
                Der Verfasser sprach – und er ist Abu 'Abdallah Muhammad ibn Dawud
                as-Sanhaji, bekannt als Ibn Ajurrum, geboren im Jahre 672 (der Hidschra)
                und verstorben im Jahre 723 der Hidschra des Propheten – möge Allah sich
                seiner erbarmen:
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                قال : الكَلاَمُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ
              </p>
              <p className="text-sm text-muted-foreground">
                Er sagte: Die Rede (al-kalam) ist der zusammengesetzte, sinnvolle Ausdruck
                gemäß der (arabischen) Sprachkonvention.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                وأقول : لِلَفْظِ &quot;الكلام&quot; معنيَان...
              </p>
              <p className="text-sm text-muted-foreground">
                Und ich sage: Das Wort „al-kalam&quot; (Rede) hat zwei Bedeutungen: eine
                sprachliche (linguistische) und eine grammatische.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                أما الكلام اللغوي...
              </p>
              <p className="text-sm text-muted-foreground">
                Was die sprachliche Bedeutung von „Rede&quot; betrifft, so ist sie ein
                Ausdruck für alles, wodurch ein Nutzen (eine Bedeutung) entsteht – sei es
                ein gesprochener Ausdruck oder nicht, wie z.B. Schrift, Geschriebenes und
                Gesten.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                وأما الكلامُ النحويُّ...
              </p>
              <p className="text-sm text-muted-foreground">
                Was die grammatische Bedeutung von „Rede&quot; betrifft, so müssen vier
                Bedingungen erfüllt sein:
              </p>
              <ol className="list-decimal space-y-1 pl-4 text-sm text-muted-foreground">
                <li>Es muss ein gesprochener Ausdruck (lafz) sein.</li>
                <li>Es muss zusammengesetzt (murakkab) sein.</li>
                <li>Es muss sinnvoll/bedeutungstragend (mufid) sein.</li>
                <li>Es muss gemäß der arabischen Sprachkonvention festgelegt sein.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                ومعني كونه لفظاً...
              </p>
              <p className="text-sm text-muted-foreground">
                Die Bedeutung von „gesprochener Ausdruck&quot;: Es muss ein Laut sein, der
                einige der arabischen Buchstaben enthält – von Alif bis Ya. Beispiele sind:
                „Ahmad&quot;, „yaktub&quot; (er schreibt), „Sa'id&quot;. Eine Geste wird bei
                den Grammatikern nicht als „Rede&quot; bezeichnet, da sie kein Laut ist, der
                Buchstaben enthält – auch wenn die Sprachwissenschaftler sie als „Rede&quot;
                bezeichnen, weil sie einen Nutzen vermittelt.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                ومعني كونه مركباً...
              </p>
              <p className="text-sm text-muted-foreground">
                Die Bedeutung von „zusammengesetzt&quot;: Es muss aus zwei oder mehr Wörtern
                bestehen, wie:
              </p>
              <div className="table-container table-accent-primary">
                <table>
                  <thead>
                    <tr>
                      <th className="arabic">Arabisch</th>
                      <th>Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {composedExamples.map((example) => (
                      <tr key={example.ar}>
                        <td className="arabic font-arabic-display">{example.ar}</td>
                        <td>{example.de}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                Ein einzelnes Wort wird bei den Grammatikern nicht als „Rede&quot; bezeichnet,
                es sei denn, ein anderes Wort schließt sich ihm an – sei es tatsächlich
                oder implizit. Wenn dich jemand fragt: „Wer ist dein Bruder?&quot; und du
                antwortest: „Muhammad&quot;, dann gilt dieses Wort als „Rede&quot;, weil die
                vollständige Bedeutung ist: „Muhammad ist mein Bruder&quot;.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                ومعني كونه مفيداً...
              </p>
              <p className="text-sm text-muted-foreground">
                Die Bedeutung von „sinnvoll&quot;: Der Sprecher kann danach sinnvoll
                schweigen, sodass der Zuhörer nichts Weiteres erwartet. Wenn du sagst:
                „Wenn der Lehrer kommt...&quot; (idha hadara al-ustadh), so ist das keine
                vollständige „Rede&quot;, obwohl es aus drei Wörtern zusammengesetzt ist. Wenn
                du aber sagst: „Wenn der Lehrer kommt, schweigen die Schüler&quot; (idha
                hadara al-ustadhu ansata at-talamidh), dann ist es „Rede&quot;, weil ein
                vollständiger Sinn entsteht.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <p className="font-arabic-display text-right text-lg text-foreground" dir="rtl">
                ومعني كونه موضوعاً بالوضع العربيِّ...
              </p>
              <p className="text-sm text-muted-foreground">
                Die Bedeutung von „gemäß der arabischen Sprachkonvention&quot;: Die verwendeten
                Wörter müssen solche sein, die die Araber festgelegt haben, um bestimmte
                Bedeutungen auszudrücken. Wenn du Wörter verwendest, die von Nicht-Arabern
                festgelegt wurden, werden sie in der Terminologie der arabischen
                Sprachwissenschaftler nicht als „Rede&quot; bezeichnet.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Beispiele für vollständige Rede (alle Bedingungen erfüllt)
                </p>
                <div className="mt-3 table-container table-accent-primary">
                  <table>
                    <thead>
                      <tr>
                        <th className="arabic">Arabisch</th>
                        <th>Deutsch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fullSpeechExamples.map((example) => (
                        <tr key={example.ar}>
                          <td className="arabic font-arabic-display">{example.ar}</td>
                          <td>{example.de}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Beispiele für einzelne Wörter (nicht zusammengesetzt)
                </p>
                <div className="mt-3 table-container table-accent-primary">
                  <table>
                    <thead>
                      <tr>
                        <th className="arabic">Arabisch</th>
                        <th>Deutsch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {singleWordExamples.map((example) => (
                        <tr key={example.ar}>
                          <td className="arabic font-arabic-display">{example.ar}</td>
                          <td>{example.de}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Beispiele für zusammengesetzte, aber nicht sinnvolle Ausdrücke
                </p>
                <div className="mt-3 table-container table-accent-primary">
                  <table>
                    <thead>
                      <tr>
                        <th className="arabic">Arabisch</th>
                        <th>Deutsch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {incompleteExamples.map((example) => (
                        <tr key={example.ar}>
                          <td className="arabic font-arabic-display">{example.ar}</td>
                          <td>{example.de}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Übungsfragen</h2>
              <ol className="list-decimal space-y-2 pl-4 text-sm text-muted-foreground">
                {questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{content}</main>
      <Footer />
    </div>
  );
};

export default GrammarChapter;
