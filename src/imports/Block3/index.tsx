import imgFced79Efb4Ddc92C995061Bf88Ed32B3Jpg from "./31f89d8aaff00ee917983c0faed53bf74a5d03f0.png";

function Fced79Efb4Ddc92C995061Bf88Ed32B3Jpg() {
  return (
    <div className="h-[596px] relative shrink-0 w-[398px]" data-name="fced79efb4ddc92c995061bf88ed32b3.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgFced79Efb4Ddc92C995061Bf88Ed32B3Jpg} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[44px] w-full">
      <div className="flex flex-col font-['Cormorant_Garamond:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 tracking-[2px] uppercase w-full">
        <p className="leading-[44px]">Our Story</p>
      </div>
      <div className="flex flex-col font-['Ephesis:Regular',sans-serif] h-[44px] justify-center not-italic relative shrink-0 w-full">
        <p className="leading-[128px]">continue</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-[#303030] text-center w-[320px]">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center not-italic relative shrink-0 text-[12px] tracking-[2px] w-full">
        <p className="leading-[13px]">THIS IS WHERE</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Avenir:Roman',sans-serif] gap-[23px] items-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] text-center tracking-[1px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Our story began quietly - with easy conversations, even when we were speaking in languages that were not our own, and with the comforting feeling of finding home in another person.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">Over time, we built a life filled with small moments of understanding, support, laughter, and care. Through every season of life - the challenging ones and the beautifully simple ones - we kept choosing each other, again and again.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[24px]">What we love most about our story is how natural it feels to simply be together. Wherever we are, life feels a little brighter when we are side by side.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[199.56px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Avenir:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[14px] text-center tracking-[2.457px] uppercase whitespace-nowrap">
        <p className="leading-[13px]">{`-Yuliia & Charles-`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[15.7px] items-start pl-[1.23px] py-[1.35px] relative shrink-0 w-[199.56px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] h-[662px] items-center relative shrink-0 w-[345px]">
      <Frame />
      <Frame2 />
      <Container />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[241px] items-center left-1/2 top-1/2">
      <Fced79Efb4Ddc92C995061Bf88Ed32B3Jpg />
      <Frame3 />
    </div>
  );
}

export default function Block() {
  return (
    <div className="bg-white relative size-full" data-name="Block3">
      <div className="absolute bg-[#f3f1ed] inset-0" data-name="Background" />
      <Frame4 />
    </div>
  );
}