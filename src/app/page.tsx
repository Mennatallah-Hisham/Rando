import { Activities } from "@/components/landing/Activities";
import { Footer } from "@/components/landing/Footer";
import { FrequentlyAskedQuestions } from "@/components/landing/FrequentlyAskedQuestions";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LanguagesAndLevels } from "@/components/landing/LanguagesAndLevels";
import { Navigation } from "@/components/landing/Navigation";
import { Pricing } from "@/components/landing/Pricing";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Activities />
        <HowItWorks />
        <LanguagesAndLevels />
        <Pricing />
        <FrequentlyAskedQuestions />
      </main>
      <Footer />
    </>
  );
}
