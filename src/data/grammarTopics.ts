export type GrammarTopic = {
  number: number;
  labelAr: string;
  labelDe: string;
  href: string;
};

const rawGrammarTopics = [
  { number: 1, labelAr: "بَابُ الْكَلَامِ", labelDe: "Kapitel: Der Satz" },
  { number: 2, labelAr: "بَابُ الْإِعْرَابِ", labelDe: "Kapitel: I'rab (Flexion)" },
  { number: 3, labelAr: "بَابُ عَلَامَاتِ الْإِعْرَابِ", labelDe: "Kapitel: Zeichen des I'rab" },
  { number: 4, labelAr: "بَابُ عَلَامَاتِ النَّصْبِ", labelDe: "Kapitel: Zeichen des Akkusativs (Nasb)" },
  { number: 5, labelAr: "بَابُ عَلَامَاتِ الْخَفْضِ", labelDe: "Kapitel: Zeichen des Genitivs (Khafd)" },
  { number: 6, labelAr: "بَابُ عَلَامَاتِ الْجَزْمِ", labelDe: "Kapitel: Zeichen des Jussivs (Jazm)" },
  {
    number: 7,
    labelAr: "فَصْلٌ في المعرب بالحروف والحركات",
    labelDe: "Abschnitt: Deklinierbares mit Buchstaben und Vokalendungen",
  },
  { number: 8, labelAr: "فائدة: المحل في الإعراب", labelDe: "Exkurs: Der Platz im I'rab" },
  { number: 9, labelAr: "بَابُ الْمَعْرِفَةِ وَالنَّكِرَةِ", labelDe: "Kapitel: Bestimmt und unbestimmt" },
  { number: 10, labelAr: "بَابُ الْأَفْعَالِ", labelDe: "Kapitel: Verben" },
  { number: 11, labelAr: "بَابُ إِعْرَابِ الْفِعْلِ", labelDe: "Kapitel: I'rab des Verbs" },
  { number: 12, labelAr: "بَابُ مَرْفُوعَاتِ الْأَسْمَاءِ", labelDe: "Kapitel: Nominative der Nomen" },
  { number: 13, labelAr: "بَابُ نَائِبِ الْفَاعِلِ", labelDe: "Kapitel: Stellvertreter des Subjekts" },
  { number: 14, labelAr: "بَابُ الْمُبْتَدَأِ وَالْخَبَرِ", labelDe: "Kapitel: Subjekt und Prädikat" },
  { number: 15, labelAr: "كَانَ وَأَخَوَاتُهَا", labelDe: "Kana und ihre Schwestern" },
  { number: 16, labelAr: "إِنَّ وَأَخَوَاتُهَا", labelDe: "Inna und ihre Schwestern" },
  { number: 17, labelAr: "ظَنَّ وَأَخَوَاتُهَا", labelDe: "Zanna und ihre Schwestern" },
  { number: 18, labelAr: "بَابُ النَّعْتِ", labelDe: "Kapitel: Attribut (Na't)" },
  { number: 19, labelAr: "بَابُ الْعَطْفِ", labelDe: "Kapitel: Koordination (Atf)" },
  { number: 20, labelAr: "بَابُ التَّوْكِيدِ", labelDe: "Kapitel: Bekräftigung (Tawkid)" },
  { number: 21, labelAr: "بَابُ الْبَدَلِ", labelDe: "Kapitel: Apposition (Badal)" },
  { number: 22, labelAr: "بَابُ مَنْصُوبَاتِ الْأَسْمَاءِ", labelDe: "Kapitel: Akkusative der Nomen" },
  { number: 23, labelAr: "بَابُ الْمَصْدَرِ", labelDe: "Kapitel: Masdar (Verbalnomen)" },
  { number: 24, labelAr: "بَابُ الظَّرْفِ", labelDe: "Kapitel: Adverbial (Zarf)" },
  { number: 25, labelAr: "بَابُ الْحَالِ", labelDe: "Kapitel: Umstand (Hal)" },
  { number: 26, labelAr: "بَابُ التَّمْيِيزِ", labelDe: "Kapitel: Spezifizierung (Tamyiz)" },
  { number: 27, labelAr: "بَابُ الِاسْتِثْنَاءِ", labelDe: "Kapitel: Ausnahme (Istithna')" },
  { number: 28, labelAr: "بَابُ لَا الْعَامِلَةِ عَمَلَ إِنَّ", labelDe: "Kapitel: La, die wie Inna wirkt" },
  { number: 29, labelAr: "بَابُ النِّدَاءِ", labelDe: "Kapitel: Anrufung (Nida')" },
  { number: 30, labelAr: "بَابُ الْمَفْعُولِ لِأَجْلِهِ", labelDe: "Kapitel: Zweckobjekt (Maf'ul li-ajlih)" },
  { number: 31, labelAr: "بَابُ الْمَفْعُولِ مَعَهُ", labelDe: "Kapitel: Begleitobjekt (Maf'ul ma'ahu)" },
  { number: 32, labelAr: "بَابُ مَخْفُوضَاتِ الْأَسْمَاءِ", labelDe: "Kapitel: Genitive der Nomen" },
  { number: 33, labelAr: "بَابُ الْإِضَافَةِ", labelDe: "Kapitel: Idafa (Genitivkonstruktion)" },
  { number: 34, labelAr: "بَابُ الْاِشْتِغَالِ", labelDe: "Kapitel: Ishtighal" },
  { number: 35, labelAr: "بَابُ التَّنَازُعِ", labelDe: "Kapitel: Tanazu'" },
  { number: 36, labelAr: "بَابُ التَّعَجُبِ", labelDe: "Kapitel: Verwunderung (Ta'ajjub)" },
  { number: 37, labelAr: "بَابُ العَدَدِ", labelDe: "Kapitel: Zahl" },
  { number: 38, labelAr: "بَابُ الوَقْفِ", labelDe: "Kapitel: Waqf (Pausenregeln)" },
] as const;

export const grammarTopicItems: GrammarTopic[] = rawGrammarTopics.map((topic) => ({
  ...topic,
  href: `/grammatik/kapitel/${topic.number}`,
}));
