import { useState } from "react";
import Navbar, { type Section } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Calculator from "@/components/Calculator";
import PageSections from "@/components/PageSections";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calcMessage, setCalcMessage] = useState("");

  const scrollTo = (id: Section) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-coal scroll-smooth">
      <Navbar
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        scrollTo={scrollTo}
      />
      <HeroSection scrollTo={scrollTo} />
      <PageSections scrollTo={scrollTo} calcMessage={calcMessage}>
        <Calculator scrollTo={scrollTo} onResult={setCalcMessage} />
      </PageSections>
    </div>
  );
}