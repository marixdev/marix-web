import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Download from "@/components/Download";
import Changelog from "@/components/Changelog";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SEO page="home" />
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <Features />
            <TechStack />
            <Screenshots />
            <Download />
            <Changelog />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;