import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VerbBasicsSection from "@/components/VerbBasicsSection";
import VerbTypesSection from "@/components/VerbTypesSection";
import PronounsSection from "@/components/PronounsSection";
import ConjugationSection from "@/components/ConjugationSection";
import NegationExerciseSection from "@/components/NegationExerciseSection";
import LearningTipSection from "@/components/LearningTipSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VerbBasicsSection />
        <VerbTypesSection />
        <PronounsSection />
        <ConjugationSection />
        <NegationExerciseSection />
        <LearningTipSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
