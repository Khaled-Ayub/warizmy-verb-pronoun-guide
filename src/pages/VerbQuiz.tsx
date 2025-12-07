import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, RotateCcw, Eye, EyeOff } from "lucide-react";

// Vocabulary Quiz Data
const vocabArabicToGerman = [
  { question: "ما معنى الفعل كَتَبَ – يَكتُبُ؟", answer: "بمعنى: schreiben" },
  { question: "ما معنى الفعل فَتَحَ – يَفتَحُ؟", answer: "بمعنى: öffnen" },
  { question: "ما معنى الفعل نَصَرَ – يَنصُرُ؟", answer: "بمعنى: helfen, unterstützen" },
  { question: "ما معنى الفعل ضَرَبَ – يَضرِبُ؟", answer: "بمعنى: schlagen, treffen" },
  { question: "ما معنى الفعل شَرَحَ – يَشرَحُ؟", answer: "بمعنى: erklären" },
  { question: "ما معنى الفعل كَذَبَ – يَكذِبُ؟", answer: "بمعنى: lügen" },
];

const vocabGermanToArabic = [
  { question: "schreiben – wie heißt dieses Verb auf Arabisch (Vergangenheit + Gegenwart)?", answer: "كَتَبَ – يَكتُبُ" },
  { question: "öffnen – wie heißt dieses Verb auf Arabisch?", answer: "فَتَحَ – يَفتَحُ" },
  { question: "helfen, unterstützen – wie heißt dieses Verb auf Arabisch?", answer: "نَصَرَ – يَنصُرُ" },
  { question: "schlagen, treffen – wie heißt dieses Verb auf Arabisch?", answer: "ضَرَبَ – يَضرِبُ" },
  { question: "erklären – wie heißt dieses Verb auf Arabisch?", answer: "شَرَحَ – يَشرَحُ" },
  { question: "lügen – wie heißt dieses Verb auf Arabisch?", answer: "كَذَبَ – يَكذِبُ" },
];

// Conjugation Quiz Data
const pronouns = ["أنا", "نحن", "أنتَ", "أنتِ", "هو", "هي"];

const pastConjugations = [
  {
    verb: "كَتَبَ",
    meaning: "schreiben",
    forms: ["كَتَبْتُ", "كَتَبْنَا", "كَتَبْتَ", "كَتَبْتِ", "كَتَبَ", "كَتَبَتْ"],
  },
  {
    verb: "فَتَحَ",
    meaning: "öffnen",
    forms: ["فَتَحْتُ", "فَتَحْنَا", "فَتَحْتَ", "فَتَحْتِ", "فَتَحَ", "فَتَحَتْ"],
  },
  {
    verb: "نَصَرَ",
    meaning: "helfen",
    forms: ["نَصَرْتُ", "نَصَرْنَا", "نَصَرْتَ", "نَصَرْتِ", "نَصَرَ", "نَصَرَتْ"],
  },
  {
    verb: "ضَرَبَ",
    meaning: "schlagen, treffen",
    forms: ["ضَرَبْتُ", "ضَرَبْنَا", "ضَرَبْتَ", "ضَرَبْتِ", "ضَرَبَ", "ضَرَبَتْ"],
  },
];

const presentConjugations = [
  {
    verb: "يَكتُبُ",
    root: "كَتَبَ",
    meaning: "schreiben",
    forms: ["أَكتُبُ", "نَكتُبُ", "تَكتُبُ", "تَكتُبِينَ", "يَكتُبُ", "تَكتُبُ"],
  },
  {
    verb: "يَفتَحُ",
    root: "فَتَحَ",
    meaning: "öffnen",
    forms: ["أَفتَحُ", "نَفتَحُ", "تَفتَحُ", "تَفتَحِينَ", "يَفتَحُ", "تَفتَحُ"],
  },
  {
    verb: "يَنصُرُ",
    root: "نَصَرَ",
    meaning: "helfen",
    forms: ["أَنصُرُ", "نَنصُرُ", "تَنصُرُ", "تَنصُرِينَ", "يَنصُرُ", "تَنصُرُ"],
  },
  {
    verb: "يَضرِبُ",
    root: "ضَرَبَ",
    meaning: "schlagen, treffen",
    forms: ["أَضرِبُ", "نَضرِبُ", "تَضرِبُ", "تَضرِبِينَ", "يَضرِبُ", "تَضرِبُ"],
  },
];

// Flashcard Component
const Flashcard = ({ question, answer, isArabicQuestion }: { question: string; answer: string; isArabicQuestion: boolean }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6">
        <div className={`mb-4 ${isArabicQuestion ? 'text-right' : 'text-left'}`} dir={isArabicQuestion ? 'rtl' : 'ltr'}>
          <p className={`text-lg font-semibold ${isArabicQuestion ? 'font-arabic' : ''} text-foreground`}>
            {question}
          </p>
        </div>
        
        {showAnswer ? (
          <div className="mt-4 rounded-xl bg-gradient-to-r from-turquoise/20 to-primary/20 p-4" dir="rtl">
            <p className="text-center font-arabic text-xl font-bold text-turquoise">
              {answer}
            </p>
          </div>
        ) : (
          <div className="mt-4 rounded-xl bg-muted/50 p-4">
            <p className="text-center text-muted-foreground">الحل مخفي</p>
          </div>
        )}
        
        <Button
          onClick={() => setShowAnswer(!showAnswer)}
          variant="outline"
          className="mt-4 w-full gap-2 rounded-xl border-turquoise/30 hover:bg-turquoise/10"
        >
          {showAnswer ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showAnswer ? "إخفاء الحل" : "إظهار الحل"}
        </Button>
      </CardContent>
    </Card>
  );
};

// Conjugation Card Component
const ConjugationCard = ({ verb, meaning, forms, tense, root }: { verb: string; meaning: string; forms: string[]; tense: string; root?: string }) => {
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <Card className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="mb-4 text-center" dir="rtl">
          <h3 className="font-arabic text-2xl font-bold text-turquoise">{verb}</h3>
          {root && <p className="font-arabic text-sm text-muted-foreground">من: {root}</p>}
          <p className="text-sm text-muted-foreground" dir="ltr">({meaning})</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border/50">
          <table className="w-full" dir="rtl">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-right font-arabic font-semibold text-foreground">الضمير</th>
                <th className="p-3 text-right font-arabic font-semibold text-foreground">{tense}</th>
              </tr>
            </thead>
            <tbody>
              {pronouns.map((pronoun, index) => (
                <tr key={index} className="border-t border-border/30 transition-colors hover:bg-muted/30">
                  <td className="p-3 text-right font-arabic text-turquoise">{pronoun}</td>
                  <td className="p-3 text-right font-arabic">
                    {showSolutions ? (
                      <span className="font-semibold text-foreground">{forms[index]}</span>
                    ) : (
                      <span className="text-muted-foreground">؟؟؟</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button
          onClick={() => setShowSolutions(!showSolutions)}
          variant="outline"
          className="mt-4 w-full gap-2 rounded-xl border-turquoise/30 hover:bg-turquoise/10"
        >
          {showSolutions ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showSolutions ? "إخفاء الحل" : "إظهار الحل"}
        </Button>
      </CardContent>
    </Card>
  );
};

const VerbQuiz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center" dir="rtl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-turquoise/10 px-4 py-2">
            <BookOpen className="h-5 w-5 text-turquoise" />
            <span className="font-arabic text-sm font-medium text-turquoise">تدريب الأفعال</span>
          </div>
          <h1 className="mb-4 font-arabic text-3xl font-bold text-foreground md:text-4xl">
            أكاديمية واريزمي – تدريب الأفعال
          </h1>
          <p className="mx-auto max-w-2xl font-arabic text-lg text-muted-foreground">
            تدرّب على المفردات والتصريف من خلال بطاقات تعليمية تفاعلية
          </p>
        </section>

        {/* Main Tabs */}
        <Tabs defaultValue="vocab" className="w-full" dir="rtl">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 bg-muted/50 p-2">
            <TabsTrigger
              value="vocab"
              className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-turquoise data-[state=active]:to-primary data-[state=active]:text-white"
            >
              <span className="font-arabic">تدريب المفردات</span>
            </TabsTrigger>
            <TabsTrigger
              value="conjugation"
              className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              <span className="font-arabic">تدريب التصريف</span>
            </TabsTrigger>
          </TabsList>

          {/* Vocabulary Tab */}
          <TabsContent value="vocab" className="space-y-8">
            {/* Arabic to German */}
            <div>
              <h2 className="mb-6 text-center font-arabic text-2xl font-bold text-foreground" dir="rtl">
                عربي → ألماني
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vocabArabicToGerman.map((card, index) => (
                  <Flashcard key={index} question={card.question} answer={card.answer} isArabicQuestion={true} />
                ))}
              </div>
            </div>

            {/* German to Arabic */}
            <div className="mt-12">
              <h2 className="mb-6 text-center font-arabic text-2xl font-bold text-foreground" dir="rtl">
                ألماني → عربي
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vocabGermanToArabic.map((card, index) => (
                  <Flashcard key={index} question={card.question} answer={card.answer} isArabicQuestion={false} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Conjugation Tab */}
          <TabsContent value="conjugation" className="space-y-8">
            <Tabs defaultValue="past" className="w-full" dir="rtl">
              <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 bg-muted/50 p-2">
                <TabsTrigger
                  value="past"
                  className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                >
                  <span className="font-arabic">الماضي</span>
                </TabsTrigger>
                <TabsTrigger
                  value="present"
                  className="rounded-xl data-[state=active]:bg-gradient-to-l data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white"
                >
                  <span className="font-arabic">المضارع</span>
                </TabsTrigger>
              </TabsList>

              {/* Past Tense */}
              <TabsContent value="past">
                <div className="grid gap-6 md:grid-cols-2">
                  {pastConjugations.map((conj, index) => (
                    <ConjugationCard
                      key={index}
                      verb={conj.verb}
                      meaning={conj.meaning}
                      forms={conj.forms}
                      tense="الماضي"
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Present Tense */}
              <TabsContent value="present">
                <div className="grid gap-6 md:grid-cols-2">
                  {presentConjugations.map((conj, index) => (
                    <ConjugationCard
                      key={index}
                      verb={conj.verb}
                      meaning={conj.meaning}
                      forms={conj.forms}
                      tense="المضارع"
                      root={conj.root}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default VerbQuiz;
