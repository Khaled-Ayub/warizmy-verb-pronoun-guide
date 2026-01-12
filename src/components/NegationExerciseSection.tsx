import { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight, RotateCcw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
  endingLabel: string;
  endingDiacritic: string;
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

const endingVariants = [
  { label: "Damma (ُ)", diacritic: "ُ", correct: "la" },
  { label: "Fatha (َ)", diacritic: "َ", correct: "lan" },
  { label: "Sukun (ْ)", diacritic: "ْ", correct: "lam" }
];

const ENDING_MARKS = /[\u064B\u064C\u064D\u064E\u064F\u0650\u0652]/g;

const extractPresent = (arabic: string): string => {
  const parts = arabic.split(/–|-/).map(part => part.trim()).filter(Boolean);
  return parts.length >= 2 ? parts[1] : arabic.trim();
};

const setEnding = (form: string, diacritic: string): string => {
  const matches = [...form.matchAll(ENDING_MARKS)];
  if (!matches.length) return `${form}${diacritic}`;
  const last = matches[matches.length - 1];
  if (last.index === undefined) return `${form}${diacritic}`;
  return form.slice(0, last.index) + diacritic + form.slice(last.index + 1);
};

const buildExercises = (): ExerciseItem[] => {
  const verbs = vocabulary.verbs.slice(0, 12);
  return verbs.map((verb, index) => {
    const variant = endingVariants[index % endingVariants.length];
    return {
      id: verb.id,
      german: verb.german,
      present: setEnding(extractPresent(verb.arabic), variant.diacritic),
      endingLabel: variant.label,
      endingDiacritic: variant.diacritic,
      correct: variant.correct
    };
  });
};

const exercises = buildExercises();

const NegationExerciseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [learned, setLearned] = useState<Set<number>>(new Set());

  const currentItem = exercises[currentIndex];
  const selected = answers[currentItem.id] ?? "";
  const isCorrect = selected === currentItem.correct;
  const hasAnswer = Boolean(selected);
  const progress = (learned.size / exercises.length) * 100;

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const markAsLearned = () => {
    setLearned(new Set([...learned, currentItem.id]));
    handleNext();
  };

  const resetProgress = () => {
    setAnswers({});
    setLearned(new Set());
    setCurrentIndex(0);
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
            Wähle die passende Verneinung zur Endung. Es erscheinen Formen mit
            Damma, Fatha oder Sukun.
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Fortschritt: {learned.size} / {exercises.length} gelernt</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="glass-card p-6 sm:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Karte {currentIndex + 1} von {exercises.length}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Endung: {currentItem.endingLabel}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {hasAnswer ? (
                    isCorrect ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="text-emerald-500">Richtig</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="text-red-500">Falsch</span>
                      </>
                    )
                  ) : (
                    <span className="text-muted-foreground">Antwort offen</span>
                  )}
                </div>
              </div>

              <div className="text-center">
                <p dir="rtl" className="font-arabic-sans text-2xl sm:text-3xl text-foreground">
                  <span className="text-muted-foreground">___</span> {currentItem.present}
                </p>
                <p className="text-sm text-muted-foreground">{currentItem.german}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
                <Select
                  value={selected}
                  onValueChange={value =>
                    setAnswers(current => ({ ...current, [currentItem.id]: value }))
                  }
                >
                  <SelectTrigger className="w-full sm:w-64">
                    <SelectValue placeholder="Verneinung wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {negationOptions.map(option => (
                      <SelectItem key={option.id} value={option.id}>
                        <span dir="rtl" className="font-arabic-sans text-base">
                          {option.arabic}
                        </span>{" "}
                        <span className="text-muted-foreground">– {option.german}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-xs text-muted-foreground">
                  Endung: <span dir="rtl">{currentItem.endingDiacritic}</span>
                </div>
              </div>

              {hasAnswer && !isCorrect ? (
                <p className="text-center text-xs text-muted-foreground">
                  Richtig:{" "}
                  <span dir="rtl" className="font-arabic-sans">
                    {negationOptionById[currentItem.correct].arabic}
                  </span>{" "}
                  ({negationOptionById[currentItem.correct].german})
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Zurück
            </Button>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={resetProgress} size="sm">
                <RotateCcw className="h-4 w-4 mr-1" />
                Neu starten
              </Button>
              <Button
                onClick={markAsLearned}
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                disabled={!hasAnswer || !isCorrect || learned.has(currentItem.id)}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Gelernt
              </Button>
            </div>

            <Button variant="outline" onClick={handleNext}>
              Weiter
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="table-container overflow-x-auto -mx-2 px-2">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr>
                  <th className="text-left">#</th>
                  <th className="text-right">Verb</th>
                  <th className="text-center">Endung</th>
                  <th className="text-center">Antwort</th>
                  <th className="text-center">Status</th>
                  <th className="text-right">Aktion</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((item, index) => {
                  const rowAnswer = answers[item.id];
                  const rowOption = rowAnswer ? negationOptionById[rowAnswer] : null;
                  const rowIsCorrect = rowAnswer === item.correct;
                  const isLearned = learned.has(item.id);

                  return (
                    <tr
                      key={item.id}
                      className={currentIndex === index ? "bg-muted/30" : ""}
                    >
                      <td className="text-left text-sm text-muted-foreground">
                        {index + 1}
                      </td>
                      <td className="text-right">
                        <span dir="rtl" className="font-arabic-sans text-lg text-foreground">
                          {item.present}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {item.german}
                        </span>
                      </td>
                      <td className="text-center text-sm text-muted-foreground">
                        {item.endingLabel}
                      </td>
                      <td className="text-center text-sm">
                        {rowOption ? (
                          <>
                            <span dir="rtl" className="font-arabic-sans">
                              {rowOption.arabic}
                            </span>{" "}
                            <span className="text-muted-foreground">({rowOption.german})</span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">–</span>
                        )}
                      </td>
                      <td className="text-center text-sm">
                        {isLearned ? (
                          <span className="text-emerald-500">Gelernt ✓</span>
                        ) : rowAnswer ? (
                          rowIsCorrect ? (
                            <span className="text-emerald-500">Richtig</span>
                          ) : (
                            <span className="text-red-500">Falsch</span>
                          )
                        ) : (
                          <span className="text-muted-foreground">offen</span>
                        )}
                      </td>
                      <td className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setCurrentIndex(index)}
                        >
                          Ansehen
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NegationExerciseSection;
