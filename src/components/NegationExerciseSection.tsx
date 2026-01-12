import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import vocabulary from "@/data/vocabulary.json";

type ExerciseItem = {
  id: number;
  german: string;
  present: string;
  hint: string;
  tenseLabel: string;
  correct: string;
};

const negationOptions = [
  { id: "la", arabic: "لا", german: "Gegenwart" },
  { id: "lan", arabic: "لن", german: "Zukunft" },
  { id: "lam", arabic: "لم", german: "Vergangenheit" }
];

const negationOptionById = Object.fromEntries(
  negationOptions.map(option => [option.id, option])
) as Record<string, { id: string; arabic: string; german: string }>;

const tenseHints = [
  { hint: "jetzt / heute", label: "Gegenwart", correct: "la" },
  { hint: "morgen / bald", label: "Zukunft", correct: "lan" },
  { hint: "gestern / damals", label: "Vergangenheit", correct: "lam" }
];

const extractPresent = (arabic: string): string => {
  const parts = arabic.split("–").map(part => part.trim()).filter(Boolean);
  if (parts.length >= 2) return parts[1];

  const fallback = arabic.split("-").map(part => part.trim()).filter(Boolean);
  return fallback.length >= 2 ? fallback[1] : arabic.trim();
};

const buildExercises = (): ExerciseItem[] => {
  const verbs = vocabulary.verbs.slice(0, 9);
  return verbs.map((verb, index) => {
    const tense = tenseHints[index % tenseHints.length];
    return {
      id: verb.id,
      german: verb.german,
      present: extractPresent(verb.arabic),
      hint: tense.hint,
      tenseLabel: tense.label,
      correct: tense.correct
    };
  });
};

const exercises = buildExercises();

const NegationExerciseSection = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const answeredCount = exercises.reduce(
    (count, item) => count + (answers[item.id] ? 1 : 0),
    0
  );
  const correctCount = exercises.reduce(
    (count, item) => count + (answers[item.id] === item.correct ? 1 : 0),
    0
  );

  const resetAnswers = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <section
      id="negation-exercises"
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl sm:text-3xl font-bold text-foreground">
            Übung: Verneinung mit <span dir="rtl">لا / لن / لم</span>
          </h2>
          <p className="text-muted-foreground">
            Wähle die passende Verneinung zur Zeitangabe. Verben stammen aus der
            aktuellen Vokabelliste.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {exercises.map(item => {
            const isCorrect = answers[item.id] === item.correct;
            const isAnswered = Boolean(answers[item.id]);
            const correctOption = negationOptionById[item.correct];

            return (
              <div
                key={item.id}
                className="glass-card p-4 sm:p-5 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Zeit-Hinweis
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {item.hint}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.tenseLabel}</p>
                  </div>
                  {showResults && isAnswered ? (
                    isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )
                  ) : null}
                </div>

                <div className="text-center">
                  <p dir="rtl" className="font-arabic-sans text-lg">
                    <span className="text-muted-foreground">___</span> {item.present}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.german}</p>
                </div>

                <div className="mt-auto">
                  <Select
                    value={answers[item.id] ?? ""}
                    onValueChange={value =>
                      setAnswers(current => ({ ...current, [item.id]: value }))
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Verneinung wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {negationOptions.map(option => (
                        <SelectItem key={option.id} value={option.id}>
                          <span dir="rtl" className="font-arabic-sans text-base">
                            {option.arabic}
                          </span>{" "}
                          <span className="text-muted-foreground">
                            – {option.german}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {showResults && isAnswered && !isCorrect ? (
                  <p className="text-xs text-muted-foreground">
                    Richtig:{" "}
                    <span dir="rtl" className="font-arabic-sans">
                      {correctOption.arabic}
                    </span>{" "}
                    ({correctOption.german})
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button onClick={() => setShowResults(true)} disabled={answeredCount === 0}>
              Auswerten
            </Button>
            <Button variant="outline" onClick={resetAnswers}>
              Zurücksetzen
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            {answeredCount} / {exercises.length} beantwortet
          </p>
          {showResults ? (
            <p className="text-sm font-semibold text-foreground">
              Ergebnis: {correctCount} / {exercises.length} richtig
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default NegationExerciseSection;
