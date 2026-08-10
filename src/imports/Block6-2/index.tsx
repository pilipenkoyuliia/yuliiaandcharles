import imgBW from "./e7b581391a22f86638f764f2df028f1bd5dbb911.png";

export default function Block() {
  return (
    <div className="bg-[#f3f1ed] w-full" data-name="Block6">
      <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10 py-12 sm:py-16 lg:py-20 flex flex-col items-center gap-10 sm:gap-12">

        <div className="w-full overflow-hidden" style={{ aspectRatio: "941 / 706" }}>
          <img
            alt="Château De Prunay"
            src={imgBW}
            className="w-full h-full object-cover object-center block"
          />
        </div>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            fontSize: "54px",
            lineHeight: "54px",
            letterSpacing: "0px",
            color: "#303030",
            margin: 0,
            textAlign: "center",
          }}
        >
          Château De Prunay
        </p>

      </div>
    </div>
  );
}