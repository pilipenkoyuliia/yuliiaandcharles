import { useState } from "react";
import HeroEntry from "./HeroEntry";
import LandingPage from "./LandingPage";
import { LanguageProvider } from "./i18n";

function WeddingSite() {
  const [page, setPage] = useState<"hero" | "landing">("hero");
  const [showLanding, setShowLanding] = useState(false);

  const handleEnter = () => {
    setShowLanding(true);
    setTimeout(() => setPage("landing"), 100);
  };

  return (
    <div className="relative w-full min-h-screen">
      {page === "hero" && <HeroEntry onEnter={handleEnter} />}
      {showLanding && page === "landing" && (
        <div className="page-transition-enter">
          <LandingPage />
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <WeddingSite />
    </LanguageProvider>
  );
}
