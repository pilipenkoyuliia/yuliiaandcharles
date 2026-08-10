import imgBlock7 from "./3febf04895df3dcc90207dd7b0fed1da8f765bb5.png";

export default function Block() {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{ minHeight: "100vh" }}
      data-name="Block7"
    >
      {/* Background photo */}
      <img
        alt=""
        aria-hidden
        src={imgBlock7}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      {/* Overlay — rgba(0,0,0,0.39) from Figma */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.39)]" />

      {/* Content — exact Figma font specs, vertically centered */}
      <div className="relative z-10 flex flex-col gap-[44px] items-center w-full max-w-[345px] mx-auto px-6 py-16">

        {/* GIFTS + fund heading */}
        <div className="flex flex-col items-center text-center w-full" style={{ gap: 0 }}>
          {/* GIFTS — Cormorant Garamond SemiBold 44px tracking 2px */}
          <p
            className="m-0 uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "44px",
              letterSpacing: "2px",
              color: "#f3f1ed",
            }}
          >
            Gifts
          </p>
          {/* fund — Ephesis Regular 44px tracking 2% */}
          <p
            className="m-0"
            style={{
              fontFamily: "'Ephesis', cursive",
              fontWeight: 400,
              fontSize: "44px",
              lineHeight: "1.3",
              letterSpacing: "0.88px",
              color: "#f3f1ed",
            }}
          >
            fund
          </p>
        </div>

        {/* Body text — Avenir 16px */}
        <div className="flex flex-col gap-[24px] text-center text-white w-full">
          <p
            className="m-0 leading-[23px] tracking-[1px]"
            style={{
              fontFamily: "'Avenir', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
            }}
          >
            The greatest gift we could ever receive is having our favorite people beside us as we begin this new chapter together. Your love, support, and presence mean more to us than words can say.
          </p>
          <p
            className="m-0 leading-[23px] tracking-[1px]"
            style={{
              fontFamily: "'Avenir', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
            }}
          >
            If you wish to honor us with something more, you can use the link to our shared fund.
          </p>
        </div>

        {/* SEE OUR FUND button */}
        <a
          href="#"
          className="bg-[#f3f1ed] flex flex-col items-center justify-center p-[16px] rounded-[8px] w-full no-underline hover:opacity-80 transition-opacity"
        >
          <span
            style={{
              fontFamily: "'Avenir', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              letterSpacing: "1px",
              lineHeight: "20px",
              color: "#303030",
              whiteSpace: "nowrap",
            }}
          >
            SEE OUR FUND
          </span>
        </a>

      </div>
    </section>
  );
}