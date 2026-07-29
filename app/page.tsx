import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FormationSection } from "@/components/formation-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Top Header & Navigation */}
      <Header />

      {/* Main Content Sections Container */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
        <HeroSection />
        <ExperienceSection />
        <FormationSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
