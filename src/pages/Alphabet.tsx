import { useLayoutEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LetterInfo = {
  letter: string;
  name: string;
  sound: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  connectsLeft: boolean;
  exampleAr: string;
  exampleDe: string;
};

const alphabetLetters: LetterInfo[] = [
  {
    letter: "ا",
    name: "Alif",
    sound: "a / ā",
    isolated: "ا",
    initial: "—",
    medial: "—",
    final: "ـا",
    connectsLeft: false,
    exampleAr: "أسد",
    exampleDe: "Löwe",
  },
  {
    letter: "ب",
    name: "Ba",
    sound: "b",
    isolated: "ب",
    initial: "بـ",
    medial: "ـبـ",
    final: "ـب",
    connectsLeft: true,
    exampleAr: "بيت",
    exampleDe: "Haus",
  },
  {
    letter: "ت",
    name: "Ta",
    sound: "t",
    isolated: "ت",
    initial: "تـ",
    medial: "ـتـ",
    final: "ـت",
    connectsLeft: true,
    exampleAr: "تمر",
    exampleDe: "Dattel",
  },
  {
    letter: "ث",
    name: "Tha",
    sound: "th wie engl. think",
    isolated: "ث",
    initial: "ثـ",
    medial: "ـثـ",
    final: "ـث",
    connectsLeft: true,
    exampleAr: "ثوب",
    exampleDe: "Kleidung",
  },
  {
    letter: "ج",
    name: "Jim",
    sound: "dsch",
    isolated: "ج",
    initial: "جـ",
    medial: "ـجـ",
    final: "ـج",
    connectsLeft: true,
    exampleAr: "جمل",
    exampleDe: "Kamel",
  },
  {
    letter: "ح",
    name: "Ha",
    sound: "kehliges h",
    isolated: "ح",
    initial: "حـ",
    medial: "ـحـ",
    final: "ـح",
    connectsLeft: true,
    exampleAr: "حليب",
    exampleDe: "Milch",
  },
  {
    letter: "خ",
    name: "Kha",
    sound: "ch wie Bach",
    isolated: "خ",
    initial: "خـ",
    medial: "ـخـ",
    final: "ـخ",
    connectsLeft: true,
    exampleAr: "خبز",
    exampleDe: "Brot",
  },
  {
    letter: "د",
    name: "Dal",
    sound: "d",
    isolated: "د",
    initial: "—",
    medial: "—",
    final: "ـد",
    connectsLeft: false,
    exampleAr: "درس",
    exampleDe: "Unterricht",
  },
  {
    letter: "ذ",
    name: "Dhal",
    sound: "th wie engl. this",
    isolated: "ذ",
    initial: "—",
    medial: "—",
    final: "ـذ",
    connectsLeft: false,
    exampleAr: "ذهب",
    exampleDe: "Gold",
  },
  {
    letter: "ر",
    name: "Ra",
    sound: "gerolltes r",
    isolated: "ر",
    initial: "—",
    medial: "—",
    final: "ـر",
    connectsLeft: false,
    exampleAr: "رجل",
    exampleDe: "Mann",
  },
  {
    letter: "ز",
    name: "Za",
    sound: "z",
    isolated: "ز",
    initial: "—",
    medial: "—",
    final: "ـز",
    connectsLeft: false,
    exampleAr: "زيت",
    exampleDe: "Öl",
  },
  {
    letter: "س",
    name: "Sin",
    sound: "s",
    isolated: "س",
    initial: "سـ",
    medial: "ـسـ",
    final: "ـس",
    connectsLeft: true,
    exampleAr: "سمك",
    exampleDe: "Fisch",
  },
  {
    letter: "ش",
    name: "Schin",
    sound: "sch",
    isolated: "ش",
    initial: "شـ",
    medial: "ـشـ",
    final: "ـش",
    connectsLeft: true,
    exampleAr: "شمس",
    exampleDe: "Sonne",
  },
  {
    letter: "ص",
    name: "Sad",
    sound: "emphatisches s",
    isolated: "ص",
    initial: "صـ",
    medial: "ـصـ",
    final: "ـص",
    connectsLeft: true,
    exampleAr: "صبر",
    exampleDe: "Geduld",
  },
  {
    letter: "ض",
    name: "Dad",
    sound: "emphatisches d",
    isolated: "ض",
    initial: "ضـ",
    medial: "ـضـ",
    final: "ـض",
    connectsLeft: true,
    exampleAr: "ضيف",
    exampleDe: "Gast",
  },
  {
    letter: "ط",
    name: "Ta",
    sound: "emphatisches t",
    isolated: "ط",
    initial: "طـ",
    medial: "ـطـ",
    final: "ـط",
    connectsLeft: true,
    exampleAr: "طالب",
    exampleDe: "Schüler",
  },
  {
    letter: "ظ",
    name: "Za",
    sound: "emphatisches z",
    isolated: "ظ",
    initial: "ظـ",
    medial: "ـظـ",
    final: "ـظ",
    connectsLeft: true,
    exampleAr: "ظرف",
    exampleDe: "Umschlag",
  },
  {
    letter: "ع",
    name: "Ain",
    sound: "kehliges 'ain",
    isolated: "ع",
    initial: "عـ",
    medial: "ـعـ",
    final: "ـع",
    connectsLeft: true,
    exampleAr: "علم",
    exampleDe: "Wissen",
  },
  {
    letter: "غ",
    name: "Ghain",
    sound: "gh (franz. r)",
    isolated: "غ",
    initial: "غـ",
    medial: "ـغـ",
    final: "ـغ",
    connectsLeft: true,
    exampleAr: "غرفة",
    exampleDe: "Zimmer",
  },
  {
    letter: "ف",
    name: "Fa",
    sound: "f",
    isolated: "ف",
    initial: "فـ",
    medial: "ـفـ",
    final: "ـف",
    connectsLeft: true,
    exampleAr: "فيل",
    exampleDe: "Elefant",
  },
  {
    letter: "ق",
    name: "Qaf",
    sound: "kehliges k",
    isolated: "ق",
    initial: "قـ",
    medial: "ـقـ",
    final: "ـق",
    connectsLeft: true,
    exampleAr: "قلم",
    exampleDe: "Stift",
  },
  {
    letter: "ك",
    name: "Kaf",
    sound: "k",
    isolated: "ك",
    initial: "كـ",
    medial: "ـكـ",
    final: "ـك",
    connectsLeft: true,
    exampleAr: "كتاب",
    exampleDe: "Buch",
  },
  {
    letter: "ل",
    name: "Lam",
    sound: "l",
    isolated: "ل",
    initial: "لـ",
    medial: "ـلـ",
    final: "ـل",
    connectsLeft: true,
    exampleAr: "لبن",
    exampleDe: "Milchprodukt",
  },
  {
    letter: "م",
    name: "Mim",
    sound: "m",
    isolated: "م",
    initial: "مـ",
    medial: "ـمـ",
    final: "ـم",
    connectsLeft: true,
    exampleAr: "مكتب",
    exampleDe: "Schreibtisch",
  },
  {
    letter: "ن",
    name: "Nun",
    sound: "n",
    isolated: "ن",
    initial: "نـ",
    medial: "ـنـ",
    final: "ـن",
    connectsLeft: true,
    exampleAr: "نور",
    exampleDe: "Licht",
  },
  {
    letter: "ه",
    name: "Ha",
    sound: "h",
    isolated: "ه",
    initial: "هـ",
    medial: "ـهـ",
    final: "ـه",
    connectsLeft: true,
    exampleAr: "هلال",
    exampleDe: "Halbmond",
  },
  {
    letter: "و",
    name: "Waw",
    sound: "w / u",
    isolated: "و",
    initial: "—",
    medial: "—",
    final: "ـو",
    connectsLeft: false,
    exampleAr: "ورد",
    exampleDe: "Rose",
  },
  {
    letter: "ي",
    name: "Ya",
    sound: "y / i",
    isolated: "ي",
    initial: "يـ",
    medial: "ـيـ",
    final: "ـي",
    connectsLeft: true,
    exampleAr: "يد",
    exampleDe: "Hand",
  },
];

const highlightMap: Record<string, string[]> = {
  "ا": ["ا", "أ", "إ", "آ", "ٱ"],
};

const ArabicHighlight = ({ text, letter }: { text: string; letter: string }) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [highlightRect, setHighlightRect] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element || !element.firstChild) return;

    const matchLetters = highlightMap[letter] ?? [letter];
    let matchIndex = -1;
    let matchLength = 0;

    for (const candidate of matchLetters) {
      const index = text.indexOf(candidate);
      if (index >= 0) {
        matchIndex = index;
        matchLength = candidate.length;
        break;
      }
    }

    if (matchIndex < 0) {
      setHighlightRect(null);
      return;
    }

    const range = document.createRange();
    range.setStart(element.firstChild, matchIndex);
    range.setEnd(element.firstChild, matchIndex + matchLength);

    const rect = range.getBoundingClientRect();
    const parentRect = element.getBoundingClientRect();
    setHighlightRect({
      left: rect.left - parentRect.left,
      top: rect.top - parentRect.top,
      width: rect.width,
      height: rect.height,
    });
  }, [letter, text]);

  return (
    <span className="relative inline-block font-arabic-display text-lg text-foreground" dir="rtl">
      {highlightRect && (
        <span
          className="absolute rounded bg-secondary/20"
          style={{
            left: highlightRect.left,
            top: highlightRect.top,
            width: highlightRect.width,
            height: highlightRect.height,
          }}
        />
      )}
      <span ref={textRef} className="relative z-10">
        {text}
      </span>
    </span>
  );
};

const Alphabet = () => {
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
              Arabisches Alphabet
            </h1>
            <p className="mt-3 text-muted-foreground">
              Liste der Buchstaben mit Aussprache, Schreibformen am Anfang, in der
              Mitte, am Ende und als Einzelbuchstabe.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Buchstaben, die nicht nach links verbinden: ا، د، ذ، ر، ز، و.
            </p>

            <div className="mt-6 table-container table-accent-primary">
              <table>
                <thead>
                  <tr>
                    <th className="arabic">Buchstabe</th>
                    <th>Name</th>
                    <th>Aussprache</th>
                    <th className="arabic">Anfang</th>
                    <th className="arabic">Mitte</th>
                    <th className="arabic">Ende</th>
                    <th className="arabic">Allein</th>
                    <th>Verbindet links</th>
                    <th>Beispiel</th>
                  </tr>
                </thead>
                <tbody>
                  {alphabetLetters.map((letter) => (
                    <tr key={letter.letter}>
                      <td className="arabic font-arabic-display text-lg">{letter.letter}</td>
                      <td>{letter.name}</td>
                      <td>{letter.sound}</td>
                      <td className="arabic font-arabic-display">{letter.initial}</td>
                      <td className="arabic font-arabic-display">{letter.medial}</td>
                      <td className="arabic font-arabic-display">{letter.final}</td>
                      <td className="arabic font-arabic-display">{letter.isolated}</td>
                      <td>{letter.connectsLeft ? "ja" : "nein"}</td>
                      <td>
                        <span className="block text-right" dir="rtl">
                          <ArabicHighlight text={letter.exampleAr} letter={letter.letter} />
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {letter.exampleDe}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Alphabet;
