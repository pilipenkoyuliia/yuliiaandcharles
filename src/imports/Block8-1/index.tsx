import { useI18n } from "@/i18n";

export default function Block() {
  const { copy } = useI18n();
  return (
    <section className="bg-[#f3f1ed] w-full" id="faq" data-name="Block8">
      <div className="w-full max-w-[601px] mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-[44px] items-center">

        {/* Header */}
        <div className="flex flex-col gap-[16px] items-center text-center text-[#303030]">
          {/* FAQ label — Avenir Heavy 12px tracking 2px */}
          <p
            className="m-0 uppercase"
            style={{
              fontFamily: "'Avenir', 'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "12px",
              letterSpacing: "2px",
              lineHeight: "13px",
            }}
          >
            {copy.faq.label}
          </p>

          {/* GOOD TO KNOW — Cormorant Garamond SemiBold 44px tracking 2px */}
          <p
            className="m-0 uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "44px",
              letterSpacing: "2px",
              color: "#303030",
            }}
          >
            {copy.faq.title}
          </p>

          {/* a few answers — Ephesis Regular 44px */}
          <p
            className="m-0"
            style={{
              fontFamily: "'Ephesis', cursive",
              fontWeight: 400,
              fontSize: "44px",
              lineHeight: "1.2",
              color: "#303030",
            }}
          >
            {copy.faq.script}
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-[32px] w-full">
          {copy.faq.items.map(([q, a], i) => (
            <div
              key={i}
              className="flex flex-col gap-[16px] items-start pb-[32px] w-full relative"
              data-name="faq-item"
            >
              {/* Bottom border */}
              <div aria-hidden className="absolute border-[#e5e5e0] border-b border-solid inset-0 pointer-events-none" />

              {/* Question — Cormorant Garamond Bold 18px tracking 2.5px uppercase */}
              <p
                className="m-0 uppercase w-full"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  letterSpacing: "2.5px",
                  lineHeight: "normal",
                  color: "#303030",
                }}
              >
                {q}
              </p>

              {/* Answer — Avenir Roman 16px tracking 1px leading 1.6 */}
              <p
                className="m-0 w-full"
                style={{
                  fontFamily: "'Avenir', 'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  letterSpacing: "1px",
                  lineHeight: "1.6",
                  color: "#303030",
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
