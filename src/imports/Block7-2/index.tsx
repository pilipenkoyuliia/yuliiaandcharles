import { useState } from "react";
import imgBlock7 from "@/imports/Img_let_us_know.png";
import { useI18n } from "@/i18n";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzCo8UJmasCuElB4D_xyLlgPXHt45p54zUbQqXn3_JtCT-G4sysiwaJSqyEG_Hywm2A/exec";

const labelStyle: React.CSSProperties = {
  fontFamily: "'Avenir', 'Inter', sans-serif",
  fontStyle: "oblique",
  fontWeight: 900,
  fontSize: "14px",
  lineHeight: "normal",
  color: "#303030",
};

const jostRegular: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "normal",
};

const jostMedium: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "normal",
};

function RadioOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center px-[16px] py-[12px] rounded-[4px] w-full text-left transition-colors"
      style={{
        backgroundColor: selected ? "#e6e2dc" : "#edece8",
        ...jostRegular,
        color: "#1a1a1a",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

export default function Block() {
  const { copy, language } = useI18n();
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [transport, setTransport] = useState<"yes" | "no" | null>(null);
  const [dietary, setDietary] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<"required" | "failed" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !attending || !transport) {
      setSubmitError("required");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const body = new URLSearchParams({
      fullName: name.trim(),
      attendance:
        attending === "yes"
          ? "Absolutely, wouldn't miss it!"
          : "Regretfully declines",
      transportation: transport === "yes" ? "Yes" : "No",
      dietaryRestrictions: dietary.trim(),
      language,
    });

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("RSVP submission failed:", error);
      setSubmitError("failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="relative w-full flex items-center justify-center"
      style={{ minHeight: "100vh" }}
      data-name="Block7-2"
    >
      {/* Full-height background */}
      <img
        alt=""
        aria-hidden
        src={imgBlock7}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.39)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[24px] items-center w-full max-w-[612px] mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="flex flex-col gap-[16px] items-center text-center w-full">
          <p
            className="m-0 uppercase w-full"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "44px",
              letterSpacing: "2px",
              color: "#ffffff",
            }}
          >
            {copy.rsvp.title}
          </p>
          <div style={{ ...jostRegular, color: "#f3f1ed" }} className="w-full">
            <p className="m-0 leading-[1.5]">{copy.rsvp.intro}</p>
            <p className="m-0 leading-[1.5]">{copy.rsvp.deadline}</p>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-[8px] p-[24px] w-full">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "24px", color: "#303030" }}>
                {copy.rsvp.thanks}
              </p>
              <p style={{ ...jostRegular, color: "#888" }}>
                {copy.rsvp.received}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">

              {/* Name */}
              <div className="flex flex-col gap-[8px]">
                <label style={labelStyle}>{copy.rsvp.name}</label>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="h-[44px] px-[16px] rounded-[4px] w-full outline-none"
                  style={{
                    ...jostRegular,
                    border: "1px solid #d1cbc4",
                    color: "#303030",
                  }}
                />
              </div>

              {/* Attending */}
              <div className="flex flex-col gap-[8px]">
                <p className="m-0" style={labelStyle}>{copy.rsvp.attendance}</p>
                <div className="flex flex-col gap-[8px]">
                  <RadioOption
                    label={copy.rsvp.attendingYes}
                    selected={attending === "yes"}
                    onClick={() => setAttending("yes")}
                  />
                  <RadioOption
                    label={copy.rsvp.attendingNo}
                    selected={attending === "no"}
                    onClick={() => setAttending("no")}
                  />
                </div>
              </div>

              {/* Transport */}
              <div className="flex flex-col gap-[8px]">
                <p className="m-0" style={labelStyle}>{copy.rsvp.transport}</p>
                <div className="flex flex-col gap-[8px]">
                  <RadioOption label={copy.rsvp.yes} selected={transport === "yes"} onClick={() => setTransport("yes")} />
                  <RadioOption label={copy.rsvp.no} selected={transport === "no"} onClick={() => setTransport("no")} />
                </div>
              </div>

              {/* Dietary */}
              <div className="flex flex-col gap-[8px]">
                <label style={labelStyle}>{copy.rsvp.dietary}</label>
                <input
                  value={dietary}
                  onChange={e => setDietary(e.target.value)}
                  className="h-[44px] px-[16px] rounded-[4px] w-full outline-none"
                  style={{
                    ...jostRegular,
                    border: "1px solid #d1cbc4",
                    color: "#303030",
                  }}
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-[12px] items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-[8px] w-full flex items-center justify-center p-[16px] hover:opacity-80 transition-opacity disabled:opacity-60"
                  style={{
                    fontFamily: "'Avenir', 'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    letterSpacing: "1px",
                    lineHeight: "20px",
                    backgroundColor: "#a8a29e",
                    color: "#ffffff",
                    border: "none",
                    cursor: isSubmitting ? "wait" : "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {isSubmitting ? copy.rsvp.sending : copy.rsvp.submit}
                </button>
                {submitError && (
                  <p
                    role="alert"
                    className="m-0 text-center"
                    style={{ ...jostRegular, fontSize: "12px", color: "#9b2c2c" }}
                  >
                    {copy.rsvp[submitError]}
                  </p>
                )}
                <p className="m-0 text-center" style={{ ...jostRegular, fontSize: "11px", color: "#888" }}>
                  {copy.rsvp.privacy}
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
