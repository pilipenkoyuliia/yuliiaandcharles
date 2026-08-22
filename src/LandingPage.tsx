import { useState, useEffect, useRef } from "react";
import heroImg from "@/imports/Hero2/62320f1ca1aa970cd8e02404a8f3eb836673f4d9.png";
import foreverImg from "@/imports/Img_block1-1.png";
import storyImg from "@/imports/Img_block3.png";
import venueImg from "@/imports/Img_bg_block_4-1.png";
import svgPaths from "@/imports/Hero2/svg-xbpf0ly69x";
import Block5Frame from "@/imports/Block5-5/index";
import Block6 from "@/imports/Block6-2/index";
import Block7 from "@/imports/Block7-1/index";
import Block72 from "@/imports/Block7-2/index";
import Block8 from "@/imports/Block8-1/index";
import { LanguageSwitcher, useI18n } from "./i18n";

const WEDDING_DATE = new Date("2026-10-09T16:30:00");

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(() => target.getTime() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  const total = Math.max(0, diff);
  const days = Math.floor(total / 86400000);
  const hours = Math.floor((total % 86400000) / 3600000);
  const minutes = Math.floor((total % 3600000) / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeSection({ children, className = "", delay = 0, style }: { children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transition: `opacity 1s ease ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
      }}
    >
      {children}
    </div>
  );
}

function LogoMonogram({ white = false }: { white?: boolean }) {
  const fill = white ? "white" : "#000000";
  return (
    <svg fill="none" viewBox="0 0 55 66" className="w-full h-auto">
      <g>
        <path d={svgPaths.p11a24980} fill={fill} />
        <path d={svgPaths.p6ebdb80} fill={fill} />
        <path d={svgPaths.p1865f900} fill={fill} />
        <path d={svgPaths.p32643900} fill={fill} />
        <path d={svgPaths.p29e6ee00} fill={fill} />
        <path d={svgPaths.p1641a30} fill={fill} />
        <path d={svgPaths.p2fb87600} fill={fill} />
        <path d={svgPaths.p119ec00} fill={fill} />
        <path d={svgPaths.pbcc9500} fill={fill} />
        <path d={svgPaths.p24e55180} fill={fill} />
        <path clipRule="evenodd" d={svgPaths.p18f59780} fill={fill} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pf2a00} fill={fill} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pef9dbf0} fill={fill} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p24054200} fill={fill} fillRule="evenodd" />
        <path d={svgPaths.p1cdbff80} fill={fill} />
      </g>
    </svg>
  );
}

function useScrollNav() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 10) {
        setVisible(true);
      } else if (y < lastY.current) {
        setVisible(true);   // scrolling up
      } else if (y > lastY.current + 4) {
        setVisible(false);  // scrolling down
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

export default function LandingPage() {
  const { copy } = useI18n();
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);
  const [entered, setEntered] = useState(false);
  const navVisible = useScrollNav();

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const navStyle: React.CSSProperties = {
    fontFamily: "'Avenir', 'Inter', sans-serif",
    fontWeight: 700,
    fontSize: "12px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  };

  const serifStyle = (size: string, weight = 400): React.CSSProperties => ({
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: size,
    fontWeight: weight,
  });

  const capsStyle: React.CSSProperties = {
    fontFamily: "'Avenir', 'Inter', sans-serif",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontSize: "11px",
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#f3f1ed",
        opacity: entered ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* ── NAV — hide on scroll down, show on scroll up ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // iPhone safe-area: respect notch / Dynamic Island
          paddingTop: "max(env(safe-area-inset-top), 28px)",
          paddingBottom: "20px",
          paddingLeft: "16px",
          paddingRight: "16px",
          transform: navVisible ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          className="absolute"
          style={{ top: "max(env(safe-area-inset-top), 12px)", right: "16px" }}
        >
          <LanguageSwitcher />
        </div>

        {/* Desktop: all links + logo */}
        <div className="hidden sm:flex items-center gap-10 md:gap-12">
          <a href="#our-story" className="text-white hover:opacity-60 transition-opacity" style={navStyle}>{copy.nav.story}</a>
          <a href="#details" className="text-white hover:opacity-60 transition-opacity" style={navStyle}>{copy.nav.details}</a>
          <div style={{ width: 44 }}>
            <LogoMonogram white />
          </div>
          <a href="#rsvp" className="text-white hover:opacity-60 transition-opacity" style={navStyle}>{copy.nav.rsvp}</a>
          <a href="#faq" className="text-white hover:opacity-60 transition-opacity" style={navStyle}>{copy.nav.faq}</a>
        </div>

        {/* Mobile: single row — links | logo | links, shifted 44px down */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-11">
          <a href="#our-story" className="text-white hover:opacity-60 transition-opacity" style={{ ...navStyle, fontSize: "9px", letterSpacing: "0.16em" }}>{copy.nav.story}</a>
          <a href="#details" className="text-white hover:opacity-60 transition-opacity" style={{ ...navStyle, fontSize: "9px", letterSpacing: "0.16em" }}>{copy.nav.details}</a>
          <div style={{ width: 30, flexShrink: 0 }}>
            <LogoMonogram white />
          </div>
          <a href="#rsvp" className="text-white hover:opacity-60 transition-opacity" style={{ ...navStyle, fontSize: "9px", letterSpacing: "0.16em" }}>{copy.nav.rsvp}</a>
          <a href="#faq" className="text-white hover:opacity-60 transition-opacity" style={{ ...navStyle, fontSize: "9px", letterSpacing: "0.16em" }}>{copy.nav.faq}</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ height: "100vh", minHeight: "560px" }}>
        <img
          src={heroImg}
          alt="Yuliia and Charles"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "57% 30%",
            display: "block",
          }}
        />

        {/* Text block — vertically at 64.4% from top, matching Hero2 import positions */}
        <div
          className="absolute left-0 right-0 flex flex-col items-center text-center px-4"
          style={{ top: "64.4%" }}
        >
          {/* Names — Cormorant Garamond SemiBold 54px, tracking -0.54px */}
          <h1
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(30px, 3.75vw, 54px)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#fffcfc",
              margin: 0,
            }}
          >
            {`Yuliia  & Charles`}
          </h1>

          {/* Date — Inter Bold 14.4px, tracking 2.729px — at 72.4% → gap from names */}
          <p
            className="animate-fade-up delay-400"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(9px, 1vw, 14.4px)",
              letterSpacing: "0.189em",
              textTransform: "uppercase",
              color: "#f4f2ee",
              marginTop: "clamp(10px, 1.27vh, 13px)",
              marginBottom: 0,
            }}
          >
            {copy.hero.date}
          </p>

          {/* Location — Ephesis 32px — at 78.7% → gap from date */}
          <p
            className="animate-fade-up delay-600"
            style={{
              fontFamily: "'Ephesis', cursive",
              fontSize: "clamp(20px, 2.22vw, 32px)",
              color: "#f4f2ee",
              marginTop: "clamp(2px, 0.65vh, 7px)",
              marginBottom: 0,
              lineHeight: 1,
            }}
          >
            {copy.hero.location}
          </p>
        </div>
      </section>

      {/* ── OUR FOREVER BEGINS ── */}
      <section style={{ backgroundColor: "#f3f1ed", padding: "clamp(48px, 8vw, 96px) clamp(24px, 6vw, 80px)" }}>
        <FadeSection>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">

            {/* Left: text */}
            <div className="flex-1 flex flex-col items-center text-center order-2 md:order-1">
              <p
                style={{
                  fontFamily: "'Avenir', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#2c333c",
                  opacity: 0.5,
                  marginBottom: "12px",
                }}
              >
                {copy.forever.eyebrow}
              </p>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "44px",
                  letterSpacing: "2px",
                  lineHeight: "44px",
                  textTransform: "uppercase",
                  color: "#2c333c",
                  margin: 0,
                }}
              >
                {copy.forever.title}
              </h2>

              <p
                style={{
                  fontFamily: "'Ephesis', cursive",
                  fontSize: "clamp(28px, 2.1vw, 30px)",
                  color: "#2c333c",
                  lineHeight: 1.3,
                  marginTop: "2px",
                  marginBottom: "clamp(20px, 3vw, 36px)",
                }}
              >
                {copy.forever.script}
              </p>

              <div
                style={{
                  fontFamily: "'Avenir', 'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(13px, 1.1vw, 15px)",
                  lineHeight: 1.7,
                  color: "#2c333c",
                  opacity: 0.75,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  maxWidth: "360px",
                }}
              >
                {copy.forever.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              <p
                style={{
                  fontFamily: "'Avenir', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#2c333c",
                  opacity: 0.5,
                  marginTop: "clamp(20px, 3vw, 36px)",
                }}
              >
                -YULIIA &amp; CHARLES-
              </p>
            </div>

            {/* Right: photo */}
            <div className="flex-1 order-1 md:order-2 w-full">
              <img
                src={foreverImg}
                alt="Yuliia and Charles"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

          </div>
        </FadeSection>
      </section>

      {/* ── COUNTDOWN ── */}
      <section style={{ backgroundColor: "#303030" }} className="py-14 sm:py-20 px-6">
        <FadeSection>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white mb-8" style={{ ...capsStyle, opacity: 0.5 }}>
              {copy.countdown.title}
            </p>
            <div className="flex items-baseline justify-center gap-1 sm:gap-2">
              {[
                { value: pad(days), label: copy.countdown.days },
                { value: ":", label: "" },
                { value: pad(hours), label: copy.countdown.hours },
                { value: ":", label: "" },
                { value: pad(minutes), label: copy.countdown.minutes },
                { value: ":", label: "" },
                { value: pad(seconds), label: copy.countdown.seconds },
              ].map(({ value, label }, i) => {
                if (value === ":") {
                  return (
                    <span
                      key={i}
                      className="text-white pb-5 sm:pb-6"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(28px, 6vw, 52px)", opacity: 0.5 }}
                    >
                      :
                    </span>
                  );
                }
                return (
                  <div key={label} className="flex flex-col items-center">
                    <span
                      className="text-white tabular-nums"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(32px, 7vw, 60px)", lineHeight: 1.1 }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-white mt-1"
                      style={{ ...capsStyle, opacity: 0.4, fontSize: "9px" }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-white mt-8" style={{ ...capsStyle, opacity: 0.4, fontSize: "10px" }}>
              09 | 10 | 2026
            </p>
          </div>
        </FadeSection>
      </section>

      {/* ── OUR STORY ── */}
      <section id="our-story" style={{ backgroundColor: "#f3f1ed", padding: "clamp(48px, 8vw, 96px) clamp(24px, 6vw, 80px)" }}>
        <FadeSection>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">

            {/* Left: photo at natural proportions */}
            <div className="flex-1 order-1 w-full">
              <img
                src={storyImg}
                alt="Yuliia and Charles"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Right: text */}
            <div className="flex-1 flex flex-col items-center text-center order-2">
              <p
                style={{
                  fontFamily: "'Avenir', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#2c333c",
                  opacity: 0.5,
                  marginBottom: "12px",
                }}
              >
                {copy.story.eyebrow}
              </p>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "44px",
                  letterSpacing: "2px",
                  lineHeight: "44px",
                  textTransform: "uppercase",
                  color: "#2c333c",
                  margin: 0,
                }}
              >
                {copy.story.title}
              </h2>

              <p
                style={{
                  fontFamily: "'Ephesis', cursive",
                  fontSize: "clamp(28px, 2.1vw, 30px)",
                  color: "#2c333c",
                  lineHeight: 1.3,
                  marginTop: "2px",
                  marginBottom: "clamp(20px, 3vw, 36px)",
                }}
              >
                {copy.story.script}
              </p>

              <div
                style={{
                  fontFamily: "'Avenir', 'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(13px, 1.1vw, 15px)",
                  lineHeight: 1.7,
                  color: "#2c333c",
                  opacity: 0.75,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  maxWidth: "380px",
                }}
              >
                {copy.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              <p
                style={{
                  fontFamily: "'Avenir', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#2c333c",
                  opacity: 0.5,
                  marginTop: "clamp(20px, 3vw, 36px)",
                }}
              >
                -YULIIA &amp; CHARLES-
              </p>
            </div>

          </div>
        </FadeSection>
      </section>

      {/* ── DATE & VENUE ── */}
      <section id="details" className="relative overflow-hidden" style={{ height: "100vh", minHeight: "560px" }}>
        {/* Background — pre-darkened photo, no overlay needed */}
        <img
          src={venueImg}
          alt={copy.details.venueAlt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />

        {/* Content — centered over the photo */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <FadeSection className="flex flex-col items-center w-full max-w-2xl">

            {/* Header block: gap-[34px] between DATE/VENUE row and date line */}
            <div className="flex flex-col items-center text-center w-full" style={{ gap: "clamp(18px, 2.4vw, 34px)", marginBottom: "clamp(40px, 6vw, 86px)" }}>
              {/* DATE and VENUE — Cormorant Garamond Regular 44px tracking 2px */}
              <div className="flex items-start justify-center" style={{ gap: "clamp(12px, 1.8vw, 26px)" }}>
                <span className="text-white uppercase" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 44px)", letterSpacing: "2px", lineHeight: "44px" }}>{copy.details.date}</span>
                <span className="text-white" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(13px, 1.74vw, 25px)", lineHeight: "46px" }}>{copy.details.and}</span>
                <span className="text-white uppercase" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 44px)", letterSpacing: "2px", lineHeight: "44px" }}>{copy.details.venue}</span>
              </div>
              {/* Date — Avenir Heavy 14px tracking 2px */}
              <p className="text-white" style={{ fontFamily: "'Avenir', 'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(10px, 0.97vw, 14px)", letterSpacing: "0.143em", textTransform: "uppercase" }}>
                {copy.details.dateLine}
              </p>
            </div>

            {/* Two columns — gap-[90px], widths 190px / 170px */}
            <div className="flex flex-col sm:flex-row items-start" style={{ gap: "clamp(32px, 6.25vw, 90px)" }}>

              {/* WEDDING CEREMONY */}
              <div className="flex flex-col" style={{ gap: "clamp(32px, 4.44vw, 64px)", minWidth: "clamp(130px, 13.2vw, 190px)" }}>
                <div className="flex flex-col" style={{ gap: "clamp(10px, 1.25vw, 18px)" }}>
                  <p className="text-white uppercase" style={{ fontFamily: "'Avenir', 'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(10px, 0.97vw, 14px)", letterSpacing: "0.143em" }}>{copy.details.ceremony}</p>
                  <p className="text-white uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(10px, 0.94vw, 13.5px)", letterSpacing: "0.182em" }}>16:30</p>
                  <div className="text-white uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(10px, 0.9vw, 13px)", letterSpacing: "0.189em", lineHeight: "16px" }}>
                    {copy.details.townHall.map((line) => <p key={line}>{line}</p>)}
                  </div>
                </div>
                {/* Address — Avenir Oblique */}
                <a href="https://www.google.com/maps/place/8+Grande+Rue,+92420+Vaucresson/" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-start text-white hover:opacity-70 transition-opacity">
                  <div className="text-white" style={{ fontFamily: "'Avenir', 'Inter', sans-serif", fontStyle: "oblique", fontSize: "clamp(12px, 0.97vw, 14px)", letterSpacing: "-0.0125em", lineHeight: "25px" }}>
                    {copy.details.vaucressonAddress.map((line) => <p key={line}>{line}</p>)}
                  </div>
                  <span className="uppercase underline underline-offset-4" style={{ marginTop: "12px", fontFamily: "'Avenir', 'Inter', sans-serif", fontStyle: "normal", fontWeight: 700, fontSize: "9px", letterSpacing: "0.12em" }}>{copy.details.viewMap}</span>
                </a>
              </div>

              {/* WEDDING DINNER */}
              <div className="flex flex-col" style={{ gap: "clamp(32px, 4.44vw, 64px)", minWidth: "clamp(120px, 11.8vw, 170px)" }}>
                <div className="flex flex-col" style={{ gap: "clamp(10px, 1.18vw, 17px)" }}>
                  <p className="text-white uppercase" style={{ fontFamily: "'Avenir', 'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(10px, 0.97vw, 14px)", letterSpacing: "0.143em" }}>{copy.details.dinner}</p>
                  <p className="text-white uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(10px, 0.94vw, 13.5px)", letterSpacing: "0.182em" }}>17:30-01:00</p>
                  <div className="text-white uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(10px, 0.91vw, 13.1px)", letterSpacing: "0.189em", lineHeight: "16px" }}>
                    {copy.details.chateau.map((line) => <p key={line}>{line}</p>)}
                  </div>
                </div>
                {/* Address — Inter Italic */}
                <a href="https://www.google.com/maps/search/?api=1&query=Château+de+Prunay+19+Chemin+de+Prunay+78430+Louveciennes" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-start text-white hover:opacity-70 transition-opacity">
                  <div className="text-white italic" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.01vw, 14.6px)", letterSpacing: "-0.012em", lineHeight: "25px" }}>
                    {copy.details.chateauAddress.map((line) => <p key={line}>{line}</p>)}
                  </div>
                  <span className="uppercase underline underline-offset-4" style={{ marginTop: "12px", fontFamily: "'Avenir', 'Inter', sans-serif", fontStyle: "normal", fontWeight: 700, fontSize: "9px", letterSpacing: "0.12em" }}>{copy.details.viewMap}</span>
                </a>
              </div>

            </div>
          </FadeSection>
        </div>
      </section>


      {/* ── TIMELINE & DRESS CODE (Block5-5) ── */}
      <FadeSection style={{ width: "100%" }}>
        <Block5Frame />
      </FadeSection>

      {/* ── CHÂTEAU DE PRUNAY (Block6-2) ── */}
      <FadeSection style={{ width: "100%" }}>
        <Block6 />
      </FadeSection>
      <div style={{ height: "100px" }} />

      {/* ── GIFTS REGISTRY (Block7) ── */}
      <FadeSection style={{ width: "100%" }}>
        <Block7 />
      </FadeSection>

      {/* ── FAQ (Block8) ── */}
      <FadeSection style={{ width: "100%" }}>
        <Block8 />
      </FadeSection>

      {/* ── LET US KNOW / RSVP (Block7-2) ── */}
      <FadeSection style={{ width: "100%" }}>
        <Block72 />
      </FadeSection>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 text-center" style={{ backgroundColor: "#f3f1ed" }}>
        <div className="w-8 mx-auto mb-4">
          <LogoMonogram white={false} />
        </div>
        <p style={{ ...serifStyle("clamp(22px, 3.5vw, 36px)"), color: "#2c333c" }}>
          Yuliia &amp; Charles
        </p>
        <p className="mt-3" style={{ ...capsStyle, color: "#2c333c", opacity: 0.3, fontSize: "10px" }}>
          09 · 10 · 2026
        </p>
      </footer>
    </div>
  );
}
