import giftBg from "@/imports/Img_backgound_gift.png";

export default function Block() {
  return (
    <section className="relative w-full" data-name="Block7">
      {/* Full-height background — natural image proportions, no crop */}
      <img
        alt=""
        aria-hidden
        src={giftBg}
        className="block w-full h-auto pointer-events-none"
      />

      {/* Content — absolutely centered over the photo */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="flex flex-col gap-[44px] items-center w-full max-w-[345px]">

          {/* Heading: GIFTS + registry — exact Figma 44px */}
          <div className="[word-break:break-word] flex flex-col items-start leading-[0] text-[#f3f1ed] text-[44px] text-center w-full">
            <div className="flex flex-col font-['Cormorant_Garamond:SemiBold',sans-serif] font-semibold justify-center tracking-[2px] uppercase w-full">
              <p className="leading-[44px] m-0">Gifts</p>
            </div>
            <div className="flex flex-col font-['Ephesis:Regular',sans-serif] h-[44px] justify-center not-italic w-full">
              <p className="leading-[128px] m-0">registry</p>
            </div>
          </div>

          {/* Body text — exact Figma specs */}
          <div className="[word-break:break-word] flex flex-col gap-[24px] items-end leading-[0] not-italic text-center text-white w-full">
            <div className="flex flex-col font-['Avenir:Roman',sans-serif] justify-center text-[16px] tracking-[1px] w-full">
              <p className="leading-[23px] m-0">The greatest gift we could ever receive is having our favorite people beside us as we begin this new chapter together. Your love, support, and presence mean more to us than words can say.</p>
            </div>
            <div className="flex flex-col font-['Avenir:Oblique',sans-serif] justify-center text-[13.2px] w-full" style={{ letterSpacing: "-0.176px" }}>
              <p className="leading-[25px] m-0">If you wish to honor us with something more, you can use the link to our shared fund.</p>
            </div>
          </div>

          {/* SEE OUR FUND button — exact Figma specs */}
          <a
            href="#"
            className="bg-[#f3f1ed] flex flex-col items-center p-[16px] rounded-[8px] w-full no-underline hover:opacity-80 transition-opacity"
          >
            <span
              className="font-['Inter:Regular',sans-serif] font-normal text-[#303030] text-[10.8px] text-center whitespace-nowrap"
              style={{ letterSpacing: "1.6896px", lineHeight: "20.114px" }}
            >
              SEE OUR FUND
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}