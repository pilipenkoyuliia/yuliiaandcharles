import { useState, useEffect } from "react";
import envelopeImg from "@/imports/Envelope-1.png";

interface Props {
  onEnter: () => void;
}

export default function HeroEntry({ onEnter }: Props) {
  const [exiting, setExiting] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPulse(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(onEnter, 600);
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center cursor-pointer select-none ${exiting ? "page-transition-exit" : ""}`}
      style={{ backgroundColor: "#f3f1ed" }}
      onClick={handleClick}
    >
      {/* Text block — top */}
      <div className="flex flex-col items-center gap-0 mb-6 sm:mb-8 z-10">
        <p
          className="animate-fade-up delay-200 text-[#2c333c] tracking-[0.18em] text-xs sm:text-sm mb-4 sm:mb-6"
          style={{ fontFamily: "'Avenir', 'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.18em" }}
        >
          YOU HAVE AN INVITATION
        </p>
        <p
          className="animate-fade-up delay-400"
          style={{
            fontFamily: "'Ephesis', cursive",
            fontSize: "clamp(22px, 4vw, 36px)",
            lineHeight: 1.1,
            letterSpacing: "0.01em",
            color: "#000",
            marginBottom: "4px",
          }}
        >
          from
        </p>
        <p
          className="animate-fade-up delay-600 text-black"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(32px, 6vw, 60px)",
            fontWeight: 400,
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          Yuliia &amp; Charles
        </p>
      </div>

      {/* Envelope image */}
      <div className="animate-scale-in delay-300 relative w-[min(88vw,480px)] sm:w-[min(70vw,520px)]">
        <img
          src={envelopeImg}
          alt="Wedding invitation envelope"
          className="w-full h-auto object-contain"
          style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.10))" }}
        />

      </div>

      {/* Click hint */}
      <p
        className={`animate-fade-up delay-1200 mt-8 sm:mt-10 text-[10px] sm:text-xs tracking-[0.2em] text-[#2c333c] transition-opacity duration-700 ${pulse ? "opacity-60" : "opacity-0"}`}
        style={{ fontFamily: "'Avenir', 'Inter', sans-serif" }}
      >
        CLICK TO OPEN
      </p>
    </div>
  );
}
