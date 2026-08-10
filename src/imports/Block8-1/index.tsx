const faqs = [
  {
    q: "Can I bring a plus-one?",
    a: "Due to limited seating, we can only accommodate the guests named on your invitation. If you would like to bring someone who is not listed, please contact us, and we’ll let you know if space allows.",
  },
  {
    q: "How do I RSVP?",
    a: "Select “Let Us Know” from the menu to access the RSVP form. Please reply by 25 August 2026 so we can finalize all the details.",
  },
  {
    q: "Are the ceremony and reception at the same location?",
    a: "No. The ceremony will take place at Vaucresson Town Hall, and the wedding dinner will be held at Château de Prunay, approximately 15 minutes away by car. Transportation from the Town Hall to the château will be provided for guests attending the ceremony.",
  },
  {
    q: "Are children invited?",
    a: "We adore your little ones! As space is limited, please contact us with the details, and we’ll let you know what arrangements can be made.",
  },
  {
    q: "Can I take photos during the ceremony?",
    a: "Absolutely! We simply ask that you remain mindful of our photographers so they can capture every special moment without interruption.",
  },
  {
    q: "Is parking available?",
    a: "Yes. Parking is available near both Vaucresson Town Hall and Château de Prunay.",
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
            a few answers
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
