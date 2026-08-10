const faqs = [
  {
    q: "Can I bring a plus-one?",
    a: "If we miss someone you want to come with please contact with us as we have limited seating.",
  },
  {
    q: "How do I RSVP?",
    a: "Click the 'let us know' menu option on the home page to access the form. Please confirm by 20.09.2026 so we can finalize all the details.",
  },
  {
    q: "Are the ceremony and reception at the same place?",
    a: "No. The ceremony will take place at Vaucresson City Hall, and the wedding dinner will be held at Château de Prunay, which is about 15 minutes away by car. For guests joining us at the ceremony, we will provide transportation from Vaucresson City Hall to the château.",
  },
  {
    q: "Are children invited?",
    a: "We adore your little ones, please contact us to give us more details.",
  },
  {
    q: "Can I take photos during the ceremony?",
    a: "Absolutely — just please be mindful of our photographers so they can capture every moment without interruption.",
  },
  {
    q: "Is there parking at the venue?",
    a: "Yes, parking is available both near the city hall and near the Château.",
  },
];

export default function Block() {
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
            FAQ
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
            Good to know
          </p>

          {/* few answers — Ephesis Regular 44px */}
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
            few answers
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-[32px] w-full">
          {faqs.map(({ q, a }, i) => (
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