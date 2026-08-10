function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[#f3f1ed] text-[44px] text-center w-full">
      <div className="flex flex-col font-['Cormorant_Garamond:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 tracking-[2px] uppercase w-full">
        <p className="leading-[40.672px]">Gifts</p>
      </div>
      <div className="flex flex-col font-['Ephesis:Regular',sans-serif] h-[44px] justify-center not-italic relative shrink-0 w-full">
        <p className="leading-[128px]">registry</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[320px]">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-end leading-[0] not-italic relative shrink-0 text-center text-white w-full">
      <div className="flex flex-col font-['Avenir:Roman',sans-serif] justify-center relative shrink-0 text-[16px] tracking-[1px] w-full">
        <p className="leading-[23px]">The greatest gift we could ever receive is having our favorite people beside us as we begin this new chapter together. Your love, support, and presence mean more to us than words can say.</p>
      </div>
      <div className="flex flex-col font-['Avenir:Oblique',sans-serif] justify-center relative shrink-0 text-[13.2px] tracking-[-0.176px] w-full">
        <p className="leading-[25px]">If you wish to honor us with something more, you can use the link to our shared fund.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[329px]">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f3f1ed] content-stretch flex flex-col items-center p-[16px] relative rounded-[8px] shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[10.8px] text-center tracking-[1.6896px] whitespace-nowrap">
        <p className="leading-[20.114px]">SEE OUR FUND</p>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center relative size-full">
      <Frame />
      <Frame4 />
      <Frame5 />
    </div>
  );
}