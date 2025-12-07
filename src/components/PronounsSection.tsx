import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { User, Users, Link, Unlink, BookOpen, MessageCircle } from "lucide-react";

const separatePronouns = [
  { person: "1. Sg", arabic: "أنا", german: "ich", emoji: "👤", description: "Ich-Form, der Sprecher selbst" },
  { person: "2. Sg m", arabic: "أنتَ", german: "du (m)", emoji: "👨", description: "Männliche Anrede an eine Person" },
  { person: "2. Sg w", arabic: "أنتِ", german: "du (w)", emoji: "👩", description: "Weibliche Anrede an eine Person" },
  { person: "3. Sg m", arabic: "هو", german: "er", emoji: "🧔", description: "Dritte Person männlich" },
  { person: "3. Sg w", arabic: "هي", german: "sie", emoji: "👱‍♀️", description: "Dritte Person weiblich" },
  { person: "1. Pl", arabic: "نحن", german: "wir", emoji: "👥", description: "Wir-Form, Sprecher und andere" },
  { person: "2. Pl m", arabic: "أنتم", german: "ihr (m)", emoji: "👨‍👨‍👦", description: "Männliche Gruppe oder gemischt" },
  { person: "2. Pl w", arabic: "أنتن", german: "ihr (w)", emoji: "👩‍👩‍👧", description: "Rein weibliche Gruppe" },
  { person: "3. Pl m", arabic: "هم", german: "sie (m)", emoji: "👨‍👩‍👦‍👦", description: "Männliche Gruppe oder gemischt" },
  { person: "3. Pl w", arabic: "هن", german: "sie (w)", emoji: "👩‍👩‍👧‍👧", description: "Rein weibliche Gruppe" },
];

const attachedPronouns = [
  {
    suffix: "ـي / ـني",
    verbExample: "كَتَبَني",
    nounExample: "كِتابي",
    german: "mich / mir / mein",
    emoji: "👤",
    description: "Wird an Verben (als Objekt) oder Nomen (als Besitz) angehängt. Bei Verben: 'er schrieb mich', bei Nomen: 'mein Buch'.",
  },
  {
    suffix: "ـكَ",
    verbExample: "كَتَبَكَ",
    nounExample: "كِتابُكَ",
    german: "dich / dein (m)",
    emoji: "👨",
    description: "Männliche Endung der 2. Person Singular. Bedeutet 'dich' am Verb oder 'dein' am Nomen.",
  },
  {
    suffix: "ـكِ",
    verbExample: "كَتَبَكِ",
    nounExample: "كِتابُكِ",
    german: "dich / dein (w)",
    emoji: "👩",
    description: "Weibliche Endung der 2. Person Singular. Gleiche Funktion wie ـكَ, aber für Frauen.",
  },
  {
    suffix: "ـهُ",
    verbExample: "كَتَبَهُ",
    nounExample: "كِتابُهُ",
    german: "ihn / sein",
    emoji: "🧔",
    description: "3. Person männlich. Am Verb: 'ihn', am Nomen: 'sein'. Beispiel: كتابُهُ = sein Buch.",
  },
  {
    suffix: "ـها",
    verbExample: "كَتَبَها",
    nounExample: "كِتابُها",
    german: "sie / ihr",
    emoji: "👱‍♀️",
    description: "3. Person weiblich. Am Verb: 'sie' (Akkusativ), am Nomen: 'ihr'. Beispiel: كتابُها = ihr Buch.",
  },
  {
    suffix: "ـنا",
    verbExample: "كَتَبَنا",
    nounExample: "كِتابُنا",
    german: "uns / unser",
    emoji: "👥",
    description: "1. Person Plural. Am Verb: 'uns', am Nomen: 'unser'. Beispiel: كتابُنا = unser Buch.",
  },
  {
    suffix: "ـكُم",
    verbExample: "كَتَبَكُم",
    nounExample: "كِتابُكُم",
    german: "euch / euer (m)",
    emoji: "👨‍👨‍👦",
    description: "2. Person Plural männlich oder gemischt. Am Verb: 'euch', am Nomen: 'euer'.",
  },
  {
    suffix: "ـهُم",
    verbExample: "كَتَبَهُم",
    nounExample: "كِتابُهُم",
    german: "sie / ihr (m)",
    emoji: "👨‍👩‍👦‍👦",
    description: "3. Person Plural männlich oder gemischt. Am Verb: 'sie' (Akkusativ), am Nomen: 'ihr' (Possessiv).",
  },
];

const PronounsSection = () => {
  return (
    <section id="pronouns" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="mb-2 font-arabic-display text-turquoise" dir="rtl">الضمائر</p>
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Pronomen
          </h2>
          <p className="text-muted-foreground">
            Arabische Personalpronomen im Überblick
          </p>
        </div>

        {/* Visual Overview Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-turquoise/20">
              <Unlink className="h-8 w-8 text-turquoise" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Getrennte Pronomen</h3>
              <p className="text-sm text-muted-foreground">Stehen alleine als eigenständige Wörter</p>
              <p className="font-arabic-display text-turquoise mt-1" dir="rtl">ضمائر منفصلة</p>
            </div>
          </div>
          
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/20">
              <Link className="h-8 w-8 text-violet-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Verbundene Pronomen</h3>
              <p className="text-sm text-muted-foreground">Werden an Verben oder Nomen angehängt</p>
              <p className="font-arabic-display text-violet-500 mt-1" dir="rtl">ضمائر متصلة</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Separate Pronouns */}
          <div className="glass-card overflow-hidden">
            <div className="border-b border-border bg-gradient-to-r from-turquoise/10 to-turquoise-light/5 p-6">
              <div className="flex items-center gap-3">
                <User className="h-6 w-6 text-turquoise" />
                <div>
                  <p className="font-arabic-display text-sm text-turquoise text-right" dir="rtl">ضمائر منفصلة</p>
                  <h3 className="text-xl font-bold text-foreground text-left">
                    Getrennte Pronomen
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                {separatePronouns.map((pronoun, index) => (
                  <AccordionItem 
                    key={pronoun.arabic} 
                    value={`separate-${index}`}
                    className="rounded-xl border border-border/50 bg-background/50 px-4"
                  >
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-4 w-full">
                        <span className="text-2xl">{pronoun.emoji}</span>
                        <div className="flex-1 grid grid-cols-3 items-center gap-2">
                          <span className="text-sm text-muted-foreground text-left">{pronoun.person}</span>
                          <span className="font-arabic-display text-xl font-semibold text-turquoise text-center" dir="rtl">
                            {pronoun.arabic}
                          </span>
                          <span className="text-foreground text-right">{pronoun.german}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-2 pt-1 px-2">
                        <div className="flex items-start gap-2 rounded-lg bg-turquoise/10 p-3">
                          <BookOpen className="h-4 w-4 text-turquoise mt-0.5 shrink-0" />
                          <p className="text-sm text-muted-foreground">{pronoun.description}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-6 rounded-xl bg-turquoise/10 p-4">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <MessageCircle className="h-4 w-4 text-turquoise" />
                  <p className="text-sm text-muted-foreground">Beispiel:</p>
                </div>
                <p className="text-center">
                  <span className="font-arabic-display text-lg font-semibold text-foreground" dir="rtl">
                    أنا أكتب
                  </span>
                  <span className="mx-3 text-muted-foreground">→</span>
                  <span className="text-foreground">
                    „Ich schreibe"
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Attached Pronouns */}
          <div className="glass-card overflow-hidden">
            <div className="border-b border-border bg-gradient-to-r from-violet-500/10 to-purple-500/5 p-6">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-violet-500" />
                <div>
                  <p className="font-arabic-display text-sm text-violet-500 text-right" dir="rtl">ضمائر متصلة</p>
                  <h3 className="text-xl font-bold text-foreground text-left">
                    Verbundene Pronomen
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                {attachedPronouns.map((pronoun, index) => (
                  <AccordionItem 
                    key={pronoun.suffix} 
                    value={`attached-${index}`}
                    className="rounded-xl border border-border/50 bg-background/50 px-4"
                  >
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-4 w-full">
                        <span className="text-2xl">{pronoun.emoji}</span>
                        <div className="flex-1 grid grid-cols-4 items-center gap-2">
                          <span className="font-arabic-display text-lg font-semibold text-violet-500 text-center" dir="rtl">
                            {pronoun.suffix}
                          </span>
                          <span className="font-arabic-display text-foreground text-center" dir="rtl">
                            {pronoun.verbExample}
                          </span>
                          <span className="font-arabic-display text-foreground text-center" dir="rtl">
                            {pronoun.nounExample}
                          </span>
                          <span className="text-sm text-muted-foreground text-right">
                            {pronoun.german}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-2 pt-1 px-2">
                        <div className="flex items-start gap-2 rounded-lg bg-violet-500/10 p-3">
                          <BookOpen className="h-4 w-4 text-violet-500 mt-0.5 shrink-0" />
                          <p className="text-sm text-muted-foreground">{pronoun.description}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-6 rounded-xl bg-violet-500/10 p-4">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <BookOpen className="h-4 w-4 text-violet-500" />
                  <p className="text-sm font-medium text-foreground">Merke</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center text-sm">
                  <div className="rounded-lg bg-background/50 p-2">
                    <p className="text-violet-500 font-medium">Am Verb</p>
                    <p className="text-muted-foreground">= Objekt</p>
                  </div>
                  <div className="rounded-lg bg-background/50 p-2">
                    <p className="text-violet-500 font-medium">Am Nomen</p>
                    <p className="text-muted-foreground">= Besitz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PronounsSection;
