import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VocabularyTrainer from "./pages/VocabularyTrainer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GrammarChapter from "./pages/GrammarChapter";
import Alphabet from "./pages/Alphabet";
import ReadingBasics from "./pages/ReadingBasics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Startseite */}
          <Route path="/" element={<Index />} />
          {/* Alphabet */}
          <Route path="/alphabet" element={<Alphabet />} />
          {/* Lesen lernen */}
          <Route path="/lesen-lernen" element={<ReadingBasics />} />
          {/* Vokabeltrainer mit Quiz */}
          <Route path="/vokabeltrainer" element={<VocabularyTrainer />} />
          {/* Grammatik-Kapitel */}
          <Route path="/grammatik/kapitel/:chapterNumber" element={<GrammarChapter />} />
          {/* Über uns */}
          <Route path="/about" element={<About />} />
          {/* 404 - Seite nicht gefunden */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
