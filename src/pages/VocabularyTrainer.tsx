import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  RefreshCw, 
  CheckCircle, 
  XCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Clock,
  Target
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verbData from "@/data/verbs.json";

// ============================================
// TYPEN
// ============================================
interface Verb {
  id: number;
  verb: string;
  pattern: string;
  meaning: string;
  past: string[];
  present: string[];
}

interface QuizQuestion {
  verbId: number;
  verb: string;
  meaning: string;
  questionType: "meaning" | "pastForm" | "presentForm";
  question: string;
  correctAnswer: string;
  options: string[];
  pronounIndex?: number;
}

interface QuizResult {
  total: number;
  correct: number;
  percentage: number;
  grade: string;
  answers: { question: QuizQuestion; userAnswer: string; isCorrect: boolean }[];
}

// ============================================
// HILFSFUNKTIONEN
// ============================================

/**
 * Berechnet die Note basierend auf dem Prozentsatz
 * Deutsches Notensystem: 1 (sehr gut) bis 6 (ungenügend)
 */
const calculateGrade = (percentage: number): string => {
  if (percentage >= 92) return "1 (Sehr gut)";
  if (percentage >= 81) return "2 (Gut)";
  if (percentage >= 67) return "3 (Befriedigend)";
  if (percentage >= 50) return "4 (Ausreichend)";
  if (percentage >= 30) return "5 (Mangelhaft)";
  return "6 (Ungenügend)";
};

/**
 * Mischt ein Array zufällig
 */
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Generiert Quiz-Fragen aus den Verb-Daten
 */
const generateQuizQuestions = (
  verbs: Verb[], 
  pronouns: typeof verbData.pronouns,
  count: number = 10
): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  const shuffledVerbs = shuffleArray(verbs);
  
  for (let i = 0; i < Math.min(count, shuffledVerbs.length); i++) {
    const verb = shuffledVerbs[i];
    // Zufällig Fragentyp wählen
    const questionTypes: QuizQuestion["questionType"][] = ["meaning", "pastForm", "presentForm"];
    const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    if (randomType === "meaning") {
      // Frage nach der Bedeutung
      const otherMeanings = shuffleArray(
        verbs.filter(v => v.id !== verb.id).map(v => v.meaning)
      ).slice(0, 3);
      
      questions.push({
        verbId: verb.id,
        verb: verb.verb,
        meaning: verb.meaning,
        questionType: "meaning",
        question: `Was bedeutet "${verb.verb.split(" – ")[0]}"?`,
        correctAnswer: verb.meaning,
        options: shuffleArray([verb.meaning, ...otherMeanings])
      });
    } else {
      // Frage nach einer konjugierten Form
      const pronounIndex = Math.floor(Math.random() * 6);
      const pronoun = pronouns[pronounIndex];
      const isPast = randomType === "pastForm";
      const forms = isPast ? verb.past : verb.present;
      const correctForm = forms[pronounIndex];
      
      // Andere Formen als falsche Antworten
      const otherForms = shuffleArray(
        verbs
          .filter(v => v.id !== verb.id)
          .map(v => (isPast ? v.past : v.present)[pronounIndex])
      ).slice(0, 3);
      
      questions.push({
        verbId: verb.id,
        verb: verb.verb,
        meaning: verb.meaning,
        questionType: randomType,
        question: `Wie lautet "${verb.verb.split(" – ")[0]}" (${verb.meaning}) in der ${isPast ? "Vergangenheit" : "Gegenwart"} für "${pronoun.arabic}" (${pronoun.german})?`,
        correctAnswer: correctForm,
        options: shuffleArray([correctForm, ...otherForms]),
        pronounIndex
      });
    }
  }
  
  return shuffleArray(questions);
};

// ============================================
// KOMPONENTEN
// ============================================

/**
 * Pronomen-Übersichtstabelle
 */
const PronounTable = () => {
  return (
    <div className="glass-card overflow-hidden">
      <div className="bg-gradient-to-r from-turquoise/20 to-turquoise-light/10 p-4 sm:p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-turquoise" />
          <div>
            <p className="font-arabic-display text-turquoise text-sm" dir="rtl">الضمائر الستة</p>
            <h3 className="text-lg font-bold text-foreground">Die sechs Pronomen</h3>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full" dir="rtl">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-right font-semibold text-foreground">Arabisch</th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">Bedeutung</th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">Person / Zahl / Geschlecht</th>
            </tr>
          </thead>
          <tbody>
            {verbData.pronouns.map((pronoun, index) => (
              <tr key={index} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-arabic-display text-xl text-turquoise font-semibold">
                  {pronoun.arabic}
                </td>
                <td className="px-4 py-3 text-foreground" dir="ltr">
                  {pronoun.german}
                </td>
                <td className="px-4 py-3 text-muted-foreground text-sm" dir="ltr">
                  {pronoun.person}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * Verb-Tabelle mit Konjugationen
 */
const VerbTable = () => {
  const [expandedVerb, setExpandedVerb] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  
  const filteredVerbs = filter === "all" 
    ? verbData.verbs 
    : verbData.verbs.filter(v => v.pattern === filter);

  return (
    <div className="space-y-4">
      {/* Filter-Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
          className="rounded-full"
        >
          Alle ({verbData.verbs.length})
        </Button>
        {verbData.verbPatterns.map(pattern => (
          <Button
            key={pattern.id}
            variant={filter === pattern.name ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(pattern.name)}
            className="rounded-full"
          >
            <span dir="rtl" className="font-arabic-display">{pattern.name}</span>
            <span className="ml-1 text-xs">
              ({verbData.verbs.filter(v => v.pattern === pattern.name).length})
            </span>
          </Button>
        ))}
      </div>

      {/* Bedeutungstabelle */}
      <div className="glass-card overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <div>
              <p className="font-arabic-display text-primary text-sm" dir="rtl">جدول الأفعال</p>
              <h3 className="text-lg font-bold text-foreground">Verbtabelle mit Konjugationen</h3>
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-border/50">
          {filteredVerbs.map((verb) => (
            <div key={verb.id} className="hover:bg-muted/20 transition-colors">
              {/* Haupt-Zeile */}
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setExpandedVerb(expandedVerb === verb.id ? null : verb.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground w-6">{verb.id}.</span>
                  <div>
                    <p className="font-arabic-display text-lg text-foreground" dir="rtl">
                      {verb.verb}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-arabic-display text-xs text-turquoise" dir="rtl">({verb.pattern})</span>
                      {" – "}
                      {verb.meaning}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  {expandedVerb === verb.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              {/* Erweiterte Konjugationstabelle */}
              {expandedVerb === verb.id && (
                <div className="px-4 pb-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Vergangenheit */}
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="h-4 w-4 text-amber-500" />
                        <h4 className="font-semibold text-amber-600">Vergangenheit (الماضي)</h4>
                      </div>
                      <div className="space-y-1">
                        {verbData.pronouns.map((pronoun, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="font-arabic-display text-turquoise" dir="rtl">{pronoun.arabic}</span>
                            <span className="font-arabic-display" dir="rtl">{verb.past[idx]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Gegenwart */}
                    <div className="rounded-xl border border-turquoise/30 bg-turquoise/5 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="h-4 w-4 text-turquoise" />
                        <h4 className="font-semibold text-turquoise">Gegenwart (المضارع)</h4>
                      </div>
                      <div className="space-y-1">
                        {verbData.pronouns.map((pronoun, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="font-arabic-display text-turquoise" dir="rtl">{pronoun.arabic}</span>
                            <span className="font-arabic-display" dir="rtl">{verb.present[idx]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Quiz-Komponente
 */
const VerbQuiz = () => {
  const [quizState, setQuizState] = useState<"setup" | "active" | "result">("setup");
  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ question: QuizQuestion; userAnswer: string; isCorrect: boolean }[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  // Quiz starten
  const startQuiz = () => {
    const newQuestions = generateQuizQuestions(
      verbData.verbs as Verb[],
      verbData.pronouns,
      questionCount
    );
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setResult(null);
    setQuizState("active");
  };

  // Antwort bestätigen
  const confirmAnswer = () => {
    if (!selectedAnswer) return;
    
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    setAnswers([...answers, { question: currentQuestion, userAnswer: selectedAnswer, isCorrect }]);
    setShowFeedback(true);
  };

  // Zur nächsten Frage
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz beenden
      const correctCount = answers.filter(a => a.isCorrect).length + 
        (selectedAnswer === questions[currentIndex].correctAnswer ? 1 : 0);
      const percentage = Math.round((correctCount / questions.length) * 100);
      
      setResult({
        total: questions.length,
        correct: correctCount,
        percentage,
        grade: calculateGrade(percentage),
        answers: [...answers, { 
          question: questions[currentIndex], 
          userAnswer: selectedAnswer!, 
          isCorrect: selectedAnswer === questions[currentIndex].correctAnswer 
        }]
      });
      setQuizState("result");
    }
  };

  // Quiz zurücksetzen
  const resetQuiz = () => {
    setQuizState("setup");
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setResult(null);
  };

  // Setup-Ansicht
  if (quizState === "setup") {
    return (
      <div className="glass-card p-6 sm:p-8 text-center">
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Verb-Quiz</h3>
          <p className="text-muted-foreground">
            Teste dein Wissen über arabische Verben und ihre Konjugationen!
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Anzahl der Fragen
          </label>
          <div className="flex justify-center gap-2 flex-wrap">
            {[5, 10, 15, 20, 30].map(count => (
              <Button
                key={count}
                variant={questionCount === count ? "default" : "outline"}
                size="sm"
                onClick={() => setQuestionCount(count)}
                className="rounded-full"
              >
                {count}
              </Button>
            ))}
          </div>
        </div>

        <Button 
          size="lg" 
          onClick={startQuiz}
          className="bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700"
        >
          Quiz starten
        </Button>
      </div>
    );
  }

  // Ergebnis-Ansicht
  if (quizState === "result" && result) {
    return (
      <div className="space-y-6">
        <div className="glass-card p-6 sm:p-8 text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <div className={`h-20 w-20 rounded-full flex items-center justify-center ${
                result.percentage >= 50 
                  ? "bg-gradient-to-br from-emerald-500 to-green-600" 
                  : "bg-gradient-to-br from-red-500 to-rose-600"
              }`}>
                <Trophy className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Quiz beendet!</h3>
          </div>

          {/* Ergebnis-Anzeige */}
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-3xl font-bold text-foreground">{result.correct}/{result.total}</p>
              <p className="text-sm text-muted-foreground">Richtige Antworten</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-3xl font-bold text-turquoise">{result.percentage}%</p>
              <p className="text-sm text-muted-foreground">Erfolgsquote</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-2xl font-bold text-primary">{result.grade}</p>
              <p className="text-sm text-muted-foreground">Note</p>
            </div>
          </div>

          {/* Fortschrittsbalken */}
          <div className="mb-6">
            <Progress value={result.percentage} className="h-3" />
          </div>

          <Button 
            size="lg" 
            onClick={resetQuiz}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Neues Quiz starten
          </Button>
        </div>

        {/* Detaillierte Antworten */}
        <div className="glass-card overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/30">
            <h4 className="font-semibold text-foreground">Deine Antworten</h4>
          </div>
          <div className="divide-y divide-border/50">
            {result.answers.map((answer, index) => (
              <div key={index} className={`p-4 ${answer.isCorrect ? "bg-emerald-500/5" : "bg-red-500/5"}`}>
                <div className="flex items-start gap-3">
                  {answer.isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-foreground mb-1">{answer.question.question}</p>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Deine Antwort: </span>
                      <span className={answer.isCorrect ? "text-emerald-600 font-medium" : "text-red-600 font-medium"} dir="rtl">
                        {answer.userAnswer}
                      </span>
                    </div>
                    {!answer.isCorrect && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Richtig: </span>
                        <span className="text-emerald-600 font-medium" dir="rtl">
                          {answer.question.correctAnswer}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Aktive Quiz-Ansicht
  const currentQuestion = questions[currentIndex];

  return (
    <div className="glass-card p-6 sm:p-8">
      {/* Fortschritt */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Frage {currentIndex + 1} von {questions.length}</span>
          <span>{Math.round(((currentIndex) / questions.length) * 100)}% abgeschlossen</span>
        </div>
        <Progress value={(currentIndex / questions.length) * 100} className="h-2" />
      </div>

      {/* Frage */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {currentQuestion.question}
        </h3>
        
        {/* Antwortoptionen */}
        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            const showCorrect = showFeedback && isCorrect;
            const showWrong = showFeedback && isSelected && !isCorrect;
            
            return (
              <button
                key={index}
                onClick={() => !showFeedback && setSelectedAnswer(option)}
                disabled={showFeedback}
                className={`p-4 rounded-xl border-2 text-right transition-all ${
                  showCorrect
                    ? "border-emerald-500 bg-emerald-500/10"
                    : showWrong
                    ? "border-red-500 bg-red-500/10"
                    : isSelected
                    ? "border-turquoise bg-turquoise/10"
                    : "border-border hover:border-turquoise/50 hover:bg-muted/50"
                }`}
                dir="rtl"
              >
                <span className={`font-arabic-display text-lg ${
                  showCorrect ? "text-emerald-600" : showWrong ? "text-red-600" : "text-foreground"
                }`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={resetQuiz}>
          Abbrechen
        </Button>
        {!showFeedback ? (
          <Button 
            onClick={confirmAnswer} 
            disabled={!selectedAnswer}
            className="bg-gradient-to-r from-turquoise to-turquoise-light text-night-blue"
          >
            Antwort bestätigen
          </Button>
        ) : (
          <Button onClick={nextQuestion}>
            {currentIndex < questions.length - 1 ? "Nächste Frage" : "Ergebnis anzeigen"}
          </Button>
        )}
      </div>
    </div>
  );
};

// ============================================
// HAUPTKOMPONENTE
// ============================================
const VocabularyTrainer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 sm:py-16">
        <div className="container">
          {/* Überschrift */}
          <div className="mb-8 sm:mb-12 text-center">
            <p className="mb-2 font-arabic-display text-turquoise" dir="rtl">مدرب المفردات</p>
            <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-primary">
              Vokabeltrainer
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lerne arabische Verben mit ihren Konjugationen und teste dein Wissen im Quiz.
            </p>
          </div>

          {/* Tabs für verschiedene Bereiche */}
          <Tabs defaultValue="verbs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1 rounded-xl">
              <TabsTrigger value="pronouns" className="rounded-lg">
                <Users className="h-4 w-4 mr-2 hidden sm:inline" />
                Pronomen
              </TabsTrigger>
              <TabsTrigger value="verbs" className="rounded-lg">
                <BookOpen className="h-4 w-4 mr-2 hidden sm:inline" />
                Verben
              </TabsTrigger>
              <TabsTrigger value="quiz" className="rounded-lg">
                <GraduationCap className="h-4 w-4 mr-2 hidden sm:inline" />
                Quiz
              </TabsTrigger>
            </TabsList>

            {/* Pronomen-Tab */}
            <TabsContent value="pronouns">
              <PronounTable />
            </TabsContent>

            {/* Verben-Tab */}
            <TabsContent value="verbs">
              <VerbTable />
            </TabsContent>

            {/* Quiz-Tab */}
            <TabsContent value="quiz">
              <VerbQuiz />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VocabularyTrainer;

