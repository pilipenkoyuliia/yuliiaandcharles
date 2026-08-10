import imgBW from "./e7b581391a22f86638f764f2df028f1bd5dbb911.png";
import imgColor from "./90c44d2106c13d1a7da1fe0ddda2082ac67eaf79.png";

export default function Block() {
  return (
    <div className="bg-[#f3f1ed] w-full" data-name="Block6-1">
      <div className="relative w-full max-w-[1200px] mx-auto px-6 sm:px-10 py-12 sm:py-16 lg:py-20">

        {/* Photo composition */}
        <div className="relative w-full" style={{ paddingBottom: "clamp(200px, 28vw, 400px)" }}>

          {/* Large B&W photo — left, full width */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "clamp(260px, 64%, 800px)",
              aspectRatio: "941 / 706",
            }}
          >
            <img
              alt="Château De Prunay black and white"
              src={imgBW}
              className="w-full h-full object-cover object-bottom block"
            />
          </div>

          {/* Smaller color photo — overlapping bottom-right */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: "clamp(140px, 38%, 566px)",
              aspectRatio: "1 / 1",
              right: 0,
              bottom: 0,
            }}
          >
            <img
              alt="Château De Prunay color"
              src={imgColor}
              className="w-full h-full object-cover object-bottom block"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.29)" }} />
          </div>
        </div>

        {/* Title — Cormorant Garamond SemiBold, 80px Figma → clamp responsive */}
        <div
          className="mt-8 sm:mt-10"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(40px, 5.56vw, 80px)",
            lineHeight: "clamp(36px, 4.79vw, 69px)",
            color: "#303030",
            whiteSpace: "nowrap",
          }}
        >
          <p style={{ marginBottom: 0 }}>Château</p>
          <p style={{ marginBottom: 0 }}>De Prunay</p>
        </div>

      </div>
    </div>
  );
}
