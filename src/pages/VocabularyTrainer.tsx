import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  RefreshCw, 
  CheckCircle, 
  XCircle,
  ChevronLeft,
  ChevronRight,
  Users,
  Palette,
  Star,
  Clock,
  Building,
  Zap,
  Link,
  ArrowLeftRight,
  Smile,
  RotateCcw,
  Eye,
  EyeOff,
  Play,
  UserPlus
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vocabulary from "@/data/vocabulary.json";
import verbData from "@/data/verbs.json";

// ============================================
// TYPEN
// ============================================
interface VocabItem {
  id: number;
  arabic: string;
  german: string;
  opposite?: string;
  oppositeGerman?: string;
}

interface QuizQuestion {
  id: number;
  arabic: string;
  german: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

interface QuizResult {
  total: number;
  correct: number;
  percentage: number;
  grade: string;
  answers: { question: QuizQuestion; userAnswer: string; isCorrect: boolean }[];
}

// ============================================
// ICON-MAPPING
// ============================================
const iconMap: { [key: string]: React.ElementType } = {
  Users,
  UserPlus,
  Smile,
  GraduationCap,
  Palette,
  Star,
  Building,
  Clock,
  Zap,
  Link,
  ArrowLeftRight,
  BookOpen
};

// ============================================
// HILFSFUNKTIONEN
// ============================================

/**
 * Berechnet die Note basierend auf dem Prozentsatz
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
 * Mischt ein Array zufällig (Fisher-Yates)
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
 * Holt alle Vokabeln einer Kategorie
 */
const getVocabByCategory = (categoryId: string): VocabItem[] => {
  if (categoryId === "verbs") {
    return vocabulary.verbs.map(v => ({ id: v.id, arabic: v.arabic, german: v.german }));
  }
  if (categoryId === "antonyms") {
    return vocabulary.antonyms;
  }
  if (categoryId === "grammar") {
    return vocabulary.grammar;
  }
  if (categoryId === "particles") {
    // Alle Partikel zusammenfassen
    const allParticles: VocabItem[] = [];
    Object.values(vocabulary.particles).forEach(particleGroup => {
      particleGroup.forEach(p => allParticles.push({ id: p.id, arabic: p.arabic, german: p.german }));
    });
    return allParticles;
  }
  // Nomen nach Kategorie
  const nouns = vocabulary.nouns[categoryId as keyof typeof vocabulary.nouns];
  return nouns || [];
};

/**
 * Holt alle Vokabeln
 */
const getAllVocab = (): VocabItem[] => {
  const all: VocabItem[] = [];
  
  // Nomen
  Object.values(vocabulary.nouns).forEach(group => {
    group.forEach(item => all.push(item));
  });
  
  // Verben
  vocabulary.verbs.forEach(v => all.push({ id: v.id + 1000, arabic: v.arabic, german: v.german }));
  
  // Grammatik
  vocabulary.grammar.forEach(g => all.push({ id: g.id + 2000, arabic: g.arabic, german: g.german }));
  
  // Antonyme
  vocabulary.antonyms.forEach(a => all.push({ id: a.id + 3000, arabic: a.arabic, german: a.german }));
  
  return all;
};

// ============================================
// EMOJI-MAPPING FÜR VOKABELN
// ============================================
// Ordnet deutschen Wörtern passende Emojis zu
const getVocabEmoji = (german: string, arabic: string): string => {
  const germanLower = german.toLowerCase();
  
  // Familie
  if (germanLower.includes("opa") || germanLower.includes("großvater")) return "👴";
  if (germanLower.includes("oma") || germanLower.includes("großmutter")) return "👵";
  if (germanLower.includes("vater") || germanLower.includes("papa")) return "👨";
  if (germanLower.includes("mutter") || germanLower.includes("mama")) return "👩";
  if (germanLower.includes("sohn")) return "👦";
  if (germanLower.includes("tochter")) return "👧";
  if (germanLower.includes("bruder")) return "👦";
  if (germanLower.includes("schwester")) return "👧";
  if (germanLower.includes("onkel")) return "👨‍🦱";
  if (germanLower.includes("tante")) return "👩‍🦱";
  if (germanLower.includes("kind")) return "🧒";
  if (germanLower.includes("baby")) return "👶";
  if (germanLower.includes("familie")) return "👨‍👩‍👧‍👦";
  if (germanLower.includes("mann") && !germanLower.includes("ehe")) return "👨";
  if (germanLower.includes("frau") && !germanLower.includes("ehe")) return "👩";
  if (germanLower.includes("ehemann")) return "💑";
  if (germanLower.includes("ehefrau")) return "💑";
  
  // Schule/Bildung
  if (germanLower.includes("lehrer")) return "👨‍🏫";
  if (germanLower.includes("schüler") || germanLower.includes("student")) return "👨‍🎓";
  if (germanLower.includes("schule")) return "🏫";
  if (germanLower.includes("universität") || germanLower.includes("uni")) return "🎓";
  if (germanLower.includes("buch") || germanLower.includes("büch")) return "📚";
  if (germanLower.includes("stift") || germanLower.includes("schreib")) return "✏️";
  if (germanLower.includes("heft") || germanLower.includes("papier")) return "📓";
  if (germanLower.includes("tafel")) return "📋";
  if (germanLower.includes("lern")) return "📖";
  if (germanLower.includes("wissen")) return "🧠";
  if (germanLower.includes("prüfung") || germanLower.includes("test")) return "📝";
  
  // Haus/Wohnung
  if (germanLower.includes("haus")) return "🏠";
  if (germanLower.includes("wohnung")) return "🏢";
  if (germanLower.includes("zimmer")) return "🚪";
  if (germanLower.includes("küche")) return "🍳";
  if (germanLower.includes("bad")) return "🛁";
  if (germanLower.includes("schlafzimmer")) return "🛏️";
  if (germanLower.includes("tür")) return "🚪";
  if (germanLower.includes("fenster")) return "🪟";
  if (germanLower.includes("tisch")) return "🪑";
  if (germanLower.includes("stuhl")) return "🪑";
  if (germanLower.includes("bett")) return "🛏️";
  
  // Farben
  if (germanLower.includes("rot")) return "🔴";
  if (germanLower.includes("blau")) return "🔵";
  if (germanLower.includes("grün")) return "🟢";
  if (germanLower.includes("gelb")) return "🟡";
  if (germanLower.includes("schwarz")) return "⚫";
  if (germanLower.includes("weiß") || germanLower.includes("weiss")) return "⚪";
  if (germanLower.includes("farbe")) return "🎨";
  
  // Zeit
  if (germanLower.includes("uhr") || germanLower.includes("zeit")) return "🕐";
  if (germanLower.includes("tag")) return "☀️";
  if (germanLower.includes("nacht")) return "🌙";
  if (germanLower.includes("morgen") && !germanLower.includes("guten")) return "🌅";
  if (germanLower.includes("abend")) return "🌆";
  if (germanLower.includes("woche")) return "📅";
  if (germanLower.includes("monat")) return "📆";
  if (germanLower.includes("jahr")) return "📆";
  if (germanLower.includes("stunde")) return "⏰";
  if (germanLower.includes("minute")) return "⏱️";
  
  // Essen/Trinken
  if (germanLower.includes("wasser")) return "💧";
  if (germanLower.includes("brot")) return "🍞";
  if (germanLower.includes("essen")) return "🍽️";
  if (germanLower.includes("trinken")) return "🥤";
  if (germanLower.includes("obst") || germanLower.includes("frucht")) return "🍎";
  if (germanLower.includes("gemüse")) return "🥕";
  if (germanLower.includes("fleisch")) return "🍖";
  if (germanLower.includes("fisch")) return "🐟";
  
  // Verben (Aktionen)
  if (germanLower.includes("öffnen")) return "🔓";
  if (germanLower.includes("schließen")) return "🔒";
  if (germanLower.includes("schreiben")) return "✍️";
  if (germanLower.includes("lesen")) return "📖";
  if (germanLower.includes("sprechen") || germanLower.includes("sagen")) return "💬";
  if (germanLower.includes("hören")) return "👂";
  if (germanLower.includes("sehen") || germanLower.includes("schau")) return "👁️";
  if (germanLower.includes("gehen")) return "🚶";
  if (germanLower.includes("kommen")) return "🔄";
  if (germanLower.includes("nehmen")) return "✋";
  if (germanLower.includes("geben")) return "🤲";
  if (germanLower.includes("machen") || germanLower.includes("tun")) return "⚡";
  if (germanLower.includes("helfen") || germanLower.includes("unterstütz")) return "🤝";
  if (germanLower.includes("danken")) return "🙏";
  if (germanLower.includes("lieben")) return "❤️";
  if (germanLower.includes("waschen")) return "🧼";
  if (germanLower.includes("töten")) return "⚔️";
  if (germanLower.includes("erschaffen") || germanLower.includes("schaffen")) return "✨";
  if (germanLower.includes("verbieten")) return "🚫";
  if (germanLower.includes("erlauben")) return "✅";
  if (germanLower.includes("kopieren")) return "📋";
  if (germanLower.includes("löschen") || germanLower.includes("entfernen")) return "🗑️";
  if (germanLower.includes("erklär")) return "💡";
  if (germanLower.includes("lügen")) return "🤥";
  if (germanLower.includes("tanzen")) return "💃";
  if (germanLower.includes("sammeln")) return "🧺";
  if (germanLower.includes("verlieren")) return "😢";
  if (germanLower.includes("entdecken") || germanLower.includes("aufdecken")) return "🔍";
  if (germanLower.includes("verbinden")) return "🔗";
  if (germanLower.includes("ablehnen")) return "❌";
  
  // Grammatik
  if (germanLower.includes("grammatik")) return "📐";
  if (germanLower.includes("wort")) return "📝";
  if (germanLower.includes("satz")) return "📜";
  if (germanLower.includes("buchstabe")) return "🔤";
  if (germanLower.includes("verb")) return "🏃";
  if (germanLower.includes("nomen") || germanLower.includes("substantiv")) return "📦";
  if (germanLower.includes("partikel")) return "🔹";
  
  // Partikeln/Präpositionen
  if (germanLower.includes("von") || germanLower.includes("aus")) return "↩️";
  if (germanLower.includes("zu") || germanLower.includes("nach")) return "➡️";
  if (germanLower.includes("über")) return "⬆️";
  if (germanLower.includes("unter")) return "⬇️";
  if (germanLower.includes("in") || germanLower.includes("im")) return "📥";
  if (germanLower.includes("auf")) return "⬆️";
  if (germanLower.includes("und")) return "➕";
  if (germanLower.includes("oder")) return "↔️";
  if (germanLower.includes("nicht") || germanLower.includes("nein")) return "🚫";
  if (germanLower.includes("ja")) return "✅";
  if (germanLower.includes("frage") || germanLower.includes("?")) return "❓";
  
  // Pronomen
  if (germanLower === "ich") return "👤";
  if (germanLower === "du") return "👉";
  if (germanLower === "er") return "👨";
  if (germanLower === "sie" && !germanLower.includes("plural")) return "👩";
  if (germanLower === "wir") return "👥";
  if (germanLower.includes("ihr")) return "👫";
  
  // Gegensätze
  if (germanLower.includes("groß")) return "📏";
  if (germanLower.includes("klein")) return "🔹";
  if (germanLower.includes("alt")) return "👴";
  if (germanLower.includes("neu") || germanLower.includes("jung")) return "✨";
  if (germanLower.includes("gut")) return "👍";
  if (germanLower.includes("schlecht")) return "👎";
  if (germanLower.includes("schnell")) return "🏃‍♂️";
  if (germanLower.includes("langsam")) return "🐢";
  if (germanLower.includes("lang")) return "📏";
  if (germanLower.includes("kurz")) return "📍";
  
  // Standard-Fallback basierend auf Arabisch
  if (arabic.includes("الله") || arabic.includes("ربّ")) return "☪️";
  
  // Allgemeiner Fallback
  return "📝";
};

// ============================================
// LERNMODUS - KARTEIKARTEN MIT FLIP-ANIMATION
// ============================================
const FlashcardLearning = ({ categoryId }: { categoryId: string }) => {
  // State für Vokabelliste und Kartenposition
  const [vocabList, setVocabList] = useState<VocabItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // State für die Flip-Animation (true = Rückseite zeigen)
  const [isFlipped, setIsFlipped] = useState(false);
  // Set mit IDs der gelernten Vokabeln
  const [learned, setLearned] = useState<Set<number>>(new Set());
  // Abfragerichtung: Arabisch -> Deutsch oder umgekehrt
  const [direction, setDirection] = useState<"ar-de" | "de-ar">("ar-de");

  // Vokabeln laden wenn Kategorie sich ändert
  useEffect(() => {
    const items = categoryId === "all" ? getAllVocab() : getVocabByCategory(categoryId);
    setVocabList(shuffleArray(items));
    setCurrentIndex(0);
    setIsFlipped(false);
    setLearned(new Set());
  }, [categoryId]);

  // Fallback wenn keine Vokabeln vorhanden
  if (vocabList.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Keine Vokabeln in dieser Kategorie.</p>
      </div>
    );
  }

  const currentVocab = vocabList[currentIndex];
  const progress = (learned.size / vocabList.length) * 100;
  // Passendes Emoji für die aktuelle Vokabel
  const emoji = getVocabEmoji(currentVocab.german, currentVocab.arabic);

  // Zur nächsten Karte wechseln
  const handleNext = () => {
    setIsFlipped(false);
    // Kleine Verzögerung damit die Flip-Animation zurückgesetzt wird
    setTimeout(() => {
      if (currentIndex < vocabList.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // Zurück zum Anfang wenn am Ende
        setCurrentIndex(0);
      }
    }, 150);
  };

  // Zur vorherigen Karte wechseln
  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }, 150);
  };

  // Karte als gelernt markieren und zur nächsten wechseln
  const markAsLearned = () => {
    setLearned(new Set([...learned, currentVocab.id]));
    handleNext();
  };

  // Fortschritt zurücksetzen und Karten neu mischen
  const resetProgress = () => {
    setLearned(new Set());
    setVocabList(shuffleArray(vocabList));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Karte umdrehen
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="space-y-6">
      {/* Fortschrittsanzeige */}
      <div className="glass-card p-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>📊 Fortschritt: {learned.size} / {vocabList.length} gelernt</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Richtungswahl: Arabisch -> Deutsch oder umgekehrt */}
      <div className="flex justify-center gap-2">
        <Button
          variant={direction === "ar-de" ? "default" : "outline"}
          size="sm"
          onClick={() => { setDirection("ar-de"); setIsFlipped(false); }}
          className="rounded-full"
        >
          <span dir="rtl" className="font-arabic-display">عربي</span> → Deutsch
        </Button>
        <Button
          variant={direction === "de-ar" ? "default" : "outline"}
          size="sm"
          onClick={() => { setDirection("de-ar"); setIsFlipped(false); }}
          className="rounded-full"
        >
          Deutsch → <span dir="rtl" className="font-arabic-display">عربي</span>
        </Button>
      </div>

      {/* Karteikarte mit 3D Flip-Animation */}
      <div className="perspective-1000">
        <div 
          className={`
            relative w-full min-h-[320px] cursor-pointer
            transition-transform duration-500 transform-style-3d
            ${isFlipped ? 'rotate-y-180' : ''}
          `}
          onClick={flipCard}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Vorderseite der Karte (Frage) */}
          <div 
            className="absolute inset-0 glass-card p-8 flex flex-col items-center justify-center backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Kartennummer und Status */}
            <p className="text-sm text-muted-foreground mb-4">
              📚 Karte {currentIndex + 1} von {vocabList.length}
              {learned.has(currentVocab.id) && (
                <span className="ml-2 text-emerald-500">✓ Gelernt</span>
              )}
            </p>

            {/* Emoji */}
            <div className="text-5xl mb-4">{emoji}</div>

            {/* Frage (Arabisch oder Deutsch je nach Richtung) */}
            <div className="text-center mb-6">
              {direction === "ar-de" ? (
                <p className="font-arabic-display text-4xl sm:text-5xl text-foreground" dir="rtl">
                  {currentVocab.arabic}
                </p>
              ) : (
                <p className="text-2xl sm:text-3xl text-foreground font-semibold">
                  {currentVocab.german}
                </p>
              )}
            </div>

            {/* Hinweis zum Umdrehen */}
            <div className="flex items-center gap-2 text-muted-foreground mt-4">
              <RefreshCw className="h-5 w-5 animate-pulse" />
              <span>Klicken zum Umdrehen</span>
            </div>
          </div>

          {/* Rückseite der Karte (Antwort) */}
          <div 
            className="absolute inset-0 glass-card p-8 flex flex-col items-center justify-center bg-gradient-to-br from-turquoise/10 to-primary/10 backface-hidden"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            {/* Kartennummer */}
            <p className="text-sm text-muted-foreground mb-4">
              ✨ Lösung
            </p>

            {/* Emoji */}
            <div className="text-5xl mb-4">{emoji}</div>

            {/* Antwort (Deutsch oder Arabisch je nach Richtung) */}
            <div className="text-center mb-4">
              {direction === "ar-de" ? (
                <>
                  <p className="text-2xl sm:text-3xl text-turquoise font-bold mb-2">
                    {currentVocab.german}
                  </p>
                  <p className="font-arabic-display text-xl text-muted-foreground" dir="rtl">
                    {currentVocab.arabic}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-arabic-display text-4xl sm:text-5xl text-turquoise mb-2" dir="rtl">
                    {currentVocab.arabic}
                  </p>
                  <p className="text-xl text-muted-foreground">
                    {currentVocab.german}
                  </p>
                </>
              )}
            </div>

            {/* Gegenteil anzeigen (falls vorhanden) */}
            {currentVocab.opposite && (
              <div className="mt-4 p-3 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">
                  ↔️ Gegenteil: <span className="font-arabic-display text-lg" dir="rtl">{currentVocab.opposite}</span> 
                  <span className="text-foreground"> ({currentVocab.oppositeGerman})</span>
                </p>
              </div>
            )}

            {/* Hinweis zum Zurückdrehen */}
            <div className="flex items-center gap-2 text-muted-foreground mt-4">
              <RefreshCw className="h-5 w-5" />
              <span>Klicken zum Zurückdrehen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation und Aktionen */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Zurück-Button */}
        <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Zurück
        </Button>

        {/* Mittlere Aktionen */}
        <div className="flex gap-2">
          <Button variant="outline" onClick={resetProgress} size="sm">
            <RotateCcw className="h-4 w-4 mr-1" />
            Neu starten
          </Button>
          <Button 
            onClick={markAsLearned}
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
            disabled={learned.has(currentVocab.id)}
          >
            <CheckCircle className="h-4 w-4 mr-1" />
            Gelernt ✓
          </Button>
        </div>

        {/* Weiter-Button */}
        <Button variant="outline" onClick={handleNext}>
          Weiter
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Tastatur-Hinweis */}
      <p className="text-center text-xs text-muted-foreground">
        💡 Tipp: Klicke auf die Karte, um die Lösung zu sehen
      </p>
    </div>
  );
};

// ============================================
// QUIZ-KOMPONENTE MIT KORREKTER BEWERTUNG
// ============================================
const VocabQuiz = ({ categoryId }: { categoryId: string }) => {
  // Quiz-Zustand: setup = Einstellungen, active = Fragen beantworten, result = Ergebnis
  const [quizState, setQuizState] = useState<"setup" | "active" | "result">("setup");
  // Anzahl der Fragen im Quiz
  const [questionCount, setQuestionCount] = useState(10);
  // Array mit allen Quiz-Fragen
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  // Aktuelle Frage-Index
  const [currentIndex, setCurrentIndex] = useState(0);
  // Vom Benutzer gewählte Antwort
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  // Alle bisherigen Antworten
  const [answers, setAnswers] = useState<{ question: QuizQuestion; userAnswer: string; isCorrect: boolean }[]>([]);
  // Zeigt Feedback nach Antwort an
  const [showFeedback, setShowFeedback] = useState(false);
  // Quiz-Ergebnis
  const [result, setResult] = useState<QuizResult | null>(null);
  // Abfragerichtung
  const [quizDirection, setQuizDirection] = useState<"ar-de" | "de-ar">("ar-de");

  /**
   * Generiert die Quiz-Fragen mit korrekten und falschen Antwortmöglichkeiten
   */
  const generateQuestions = () => {
    const vocabItems = categoryId === "all" ? getAllVocab() : getVocabByCategory(categoryId);
    const shuffled = shuffleArray(vocabItems);
    // Begrenze auf die gewählte Anzahl oder verfügbare Vokabeln
    const selectedItems = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    
    const generatedQuestions: QuizQuestion[] = selectedItems.map(item => {
      // Wähle 3 zufällige falsche Antworten aus dem Pool
      const otherItems = vocabItems.filter(v => v.id !== item.id);
      const wrongAnswers = shuffleArray(otherItems)
        .slice(0, 3)
        .map(v => quizDirection === "ar-de" ? v.german : v.arabic);
      
      // Die richtige Antwort
      const correctAnswer = quizDirection === "ar-de" ? item.german : item.arabic;
      
      return {
        id: item.id,
        arabic: item.arabic,
        german: item.german,
        // Mische die Optionen (1 richtig + 3 falsch)
        options: shuffleArray([correctAnswer, ...wrongAnswers]),
        correctAnswer,
        category: categoryId
      };
    });

    return generatedQuestions;
  };

  /**
   * Startet ein neues Quiz
   */
  const startQuiz = () => {
    const newQuestions = generateQuestions();
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setResult(null);
    setQuizState("active");
  };

  /**
   * Bestätigt die gewählte Antwort und speichert sie
   * WICHTIG: Speichert die Antwort nur einmal beim Bestätigen
   */
  const confirmAnswer = () => {
    if (!selectedAnswer) return;
    
    const currentQuestion = questions[currentIndex];
    // Prüfe ob die Antwort korrekt ist
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    // Speichere die Antwort in der Liste
    const newAnswer = { 
      question: currentQuestion, 
      userAnswer: selectedAnswer, 
      isCorrect 
    };
    setAnswers(prevAnswers => [...prevAnswers, newAnswer]);
    setShowFeedback(true);
  };

  /**
   * Wechselt zur nächsten Frage oder zeigt das Ergebnis
   * WICHTIG: Die Antwort wurde bereits in confirmAnswer gespeichert!
   */
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      // Noch weitere Fragen: zur nächsten wechseln
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Letzte Frage beantwortet: Ergebnis berechnen
      // WICHTIG: Wir nutzen answers + 1 (die letzte wurde schon in confirmAnswer gespeichert)
      // Da React State asynchron ist, berechnen wir das Ergebnis direkt
      const allAnswers = [...answers];
      // Die letzte Antwort wurde bereits hinzugefügt, also ist answers.length = questions.length
      
      // Falls die letzte Antwort noch nicht gespeichert wurde (Fallback)
      if (allAnswers.length < questions.length) {
        const currentQuestion = questions[currentIndex];
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        allAnswers.push({ 
          question: currentQuestion, 
          userAnswer: selectedAnswer!, 
          isCorrect 
        });
      }
      
      // Berechne die Anzahl der richtigen Antworten
      const correctCount = allAnswers.filter(a => a.isCorrect).length;
      // Berechne den Prozentsatz (auf ganze Zahl gerundet)
      const percentage = Math.round((correctCount / questions.length) * 100);
      
      console.log(`Quiz beendet: ${correctCount}/${questions.length} richtig = ${percentage}%`);
      
      // Setze das Ergebnis
      setResult({
        total: questions.length,
        correct: correctCount,
        percentage,
        grade: calculateGrade(percentage),
        answers: allAnswers
      });
      setQuizState("result");
    }
  };

  /**
   * Setzt das Quiz zurück für einen neuen Versuch
   */
  const resetQuiz = () => {
    setQuizState("setup");
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setResult(null);
  };

  // Setup
  if (quizState === "setup") {
    const vocabCount = categoryId === "all" ? getAllVocab().length : getVocabByCategory(categoryId).length;
    
    return (
      <div className="glass-card p-6 sm:p-8 text-center">
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Vokabel-Quiz</h3>
          <p className="text-muted-foreground">
            {vocabCount} Vokabeln verfügbar
          </p>
        </div>

        {/* Richtung */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Abfragerichtung
          </label>
          <div className="flex justify-center gap-2">
            <Button
              variant={quizDirection === "ar-de" ? "default" : "outline"}
              size="sm"
              onClick={() => setQuizDirection("ar-de")}
            >
              <span dir="rtl" className="font-arabic-display">عربي</span> → Deutsch
            </Button>
            <Button
              variant={quizDirection === "de-ar" ? "default" : "outline"}
              size="sm"
              onClick={() => setQuizDirection("de-ar")}
            >
              Deutsch → <span dir="rtl" className="font-arabic-display">عربي</span>
            </Button>
          </div>
        </div>

        {/* Anzahl */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Anzahl der Fragen
          </label>
          <div className="flex justify-center gap-2 flex-wrap">
            {[5, 10, 15, 20, 30].filter(n => n <= vocabCount).map(count => (
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
          disabled={vocabCount < 4}
          className="bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700"
        >
          <Play className="h-4 w-4 mr-2" />
          Quiz starten
        </Button>
        
        {vocabCount < 4 && (
          <p className="text-sm text-red-500 mt-2">Mindestens 4 Vokabeln erforderlich</p>
        )}
      </div>
    );
  }

  // Ergebnis
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

          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-3xl font-bold text-foreground">{result.correct}/{result.total}</p>
              <p className="text-sm text-muted-foreground">Richtig</p>
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

          <Progress value={result.percentage} className="h-3 mb-6" />

          <Button size="lg" onClick={resetQuiz} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Neues Quiz
          </Button>
        </div>

        {/* Antworten-Übersicht */}
        <div className="glass-card overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/30">
            <h4 className="font-semibold text-foreground">Deine Antworten</h4>
          </div>
          <div className="divide-y divide-border/50 max-h-96 overflow-y-auto">
            {result.answers.map((answer, index) => (
              <div key={index} className={`p-4 ${answer.isCorrect ? "bg-emerald-500/5" : "bg-red-500/5"}`}>
                <div className="flex items-start gap-3">
                  {answer.isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-arabic-display text-lg" dir="rtl">{answer.question.arabic}</p>
                    <p className="text-sm text-muted-foreground">{answer.question.german}</p>
                    {!answer.isCorrect && (
                      <p className="text-sm text-red-500 mt-1">
                        Deine Antwort: {answer.userAnswer}
                      </p>
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

  // Aktives Quiz
  const currentQuestion = questions[currentIndex];

  return (
    <div className="glass-card p-6 sm:p-8">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Frage {currentIndex + 1} von {questions.length}</span>
          <span>{Math.round((currentIndex / questions.length) * 100)}%</span>
        </div>
        <Progress value={(currentIndex / questions.length) * 100} className="h-2" />
      </div>

      <div className="mb-6 text-center">
        <p className="text-sm text-muted-foreground mb-2">Übersetze:</p>
        {quizDirection === "ar-de" ? (
          <p className="font-arabic-display text-3xl text-foreground" dir="rtl">
            {currentQuestion.arabic}
          </p>
        ) : (
          <p className="text-2xl text-foreground">
            {currentQuestion.german}
          </p>
        )}
      </div>

      <div className="grid gap-3 mb-6">
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
              className={`p-4 rounded-xl border-2 transition-all ${
                quizDirection === "ar-de" ? "text-left" : "text-right"
              } ${
                showCorrect
                  ? "border-emerald-500 bg-emerald-500/10"
                  : showWrong
                  ? "border-red-500 bg-red-500/10"
                  : isSelected
                  ? "border-turquoise bg-turquoise/10"
                  : "border-border hover:border-turquoise/50 hover:bg-muted/50"
              }`}
              dir={quizDirection === "de-ar" ? "rtl" : "ltr"}
            >
              <span className={`${quizDirection === "de-ar" ? "font-arabic-display text-lg" : ""} ${
                showCorrect ? "text-emerald-600" : showWrong ? "text-red-600" : "text-foreground"
              }`}>
                {option}
              </span>
            </button>
          );
        })}
      </div>

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
            Bestätigen
          </Button>
        ) : (
          <Button onClick={nextQuestion}>
            {currentIndex < questions.length - 1 ? "Weiter" : "Ergebnis"}
          </Button>
        )}
      </div>
    </div>
  );
};

// ============================================
// VOKABELLISTE
// ============================================
const VocabList = ({ categoryId }: { categoryId: string }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const vocabItems = categoryId === "all" ? getAllVocab() : getVocabByCategory(categoryId);
  
  const filteredItems = vocabItems.filter(item => 
    item.arabic.includes(searchTerm) || 
    item.german.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Suchfeld */}
      <div className="glass-card p-4">
        <input
          type="text"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-turquoise"
        />
      </div>

      {/* Liste */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/30">
          <p className="text-sm text-muted-foreground">{filteredItems.length} Vokabeln</p>
        </div>
        <div className="divide-y divide-border/50 max-h-[500px] overflow-y-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="p-4 hover:bg-muted/30 transition-colors">
              <div className="flex justify-between items-center">
                <p className="font-arabic-display text-xl text-turquoise" dir="rtl">
                  {item.arabic}
                </p>
                <p className="text-foreground">{item.german}</p>
              </div>
              {item.opposite && (
                <p className="text-sm text-muted-foreground mt-1">
                  ↔ <span className="font-arabic-display" dir="rtl">{item.opposite}</span> ({item.oppositeGerman})
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// HAUPTKOMPONENTE
// ============================================
const VocabularyTrainer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [mode, setMode] = useState<"learn" | "quiz" | "list">("learn");

  const categories = [
    { id: "all", name: "Alle Vokabeln", nameAr: "جميع المفردات", icon: BookOpen },
    ...vocabulary.categories.map(cat => ({
      ...cat,
      icon: iconMap[cat.icon] || BookOpen
    }))
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 sm:py-16">
        <div className="container">
          {/* Überschrift */}
          <div className="mb-8 sm:mb-12 text-center">
            <p className="mb-2 font-arabic-display text-turquoise" dir="rtl">دَفْتَرُ المُفْرَداتِ</p>
            <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-primary">
              Vokabelheft
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lerne arabische Vokabeln mit Karteikarten oder teste dein Wissen im Quiz.
            </p>
          </div>

          {/* Kategorie-Auswahl */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4 text-center">Kategorie wählen</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => {
                const Icon = cat.icon;
                const count = cat.id === "all" ? getAllVocab().length : getVocabByCategory(cat.id).length;
                return (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className="rounded-full gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{cat.name}</span>
                    <span className="text-xs opacity-70">({count})</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Modus-Tabs */}
          <Tabs value={mode} onValueChange={(v) => setMode(v as typeof mode)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1 rounded-xl max-w-md mx-auto">
              <TabsTrigger value="learn" className="rounded-lg gap-2">
                <BookOpen className="h-4 w-4 hidden sm:inline" />
                Lernen
              </TabsTrigger>
              <TabsTrigger value="quiz" className="rounded-lg gap-2">
                <GraduationCap className="h-4 w-4 hidden sm:inline" />
                Quiz
              </TabsTrigger>
              <TabsTrigger value="list" className="rounded-lg gap-2">
                <Eye className="h-4 w-4 hidden sm:inline" />
                Liste
              </TabsTrigger>
            </TabsList>

            <TabsContent value="learn">
              <FlashcardLearning categoryId={selectedCategory} />
            </TabsContent>

            <TabsContent value="quiz">
              <VocabQuiz categoryId={selectedCategory} />
            </TabsContent>

            <TabsContent value="list">
              <VocabList categoryId={selectedCategory} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VocabularyTrainer;
