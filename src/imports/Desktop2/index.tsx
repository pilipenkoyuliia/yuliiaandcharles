import imgFced79Efb4Ddc92C995061Bf88Ed32B3Jpg from "./60fb5f9057375a7d806abc9cdc105df9d9b07b3a.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[44px] w-full">
      <div className="flex flex-col font-['Cormorant_Garamond:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 tracking-[2px] uppercase w-full">
        <p className="leading-[44px]">OUR Forever</p>
      </div>
      <div className="flex flex-col font-['Ephesis:Regular',sans-serif] h-[44px] justify-center not-italic relative shrink-0 w-full">
        <p className="leading-[128px]">begins</p>
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
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Avenir:Roman',sans-serif] gap-[23px] items-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] text-center tracking-[1px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] mb-0">With hearts full of gratitude, we invite you</p>
        <p className="leading-[24px] mb-0">to join us as we exchange our vows and</p>
        <p className="leading-[24px]">begin this new chapter.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] mb-0">This day is not only a celebration of our</p>
        <p className="leading-[24px] mb-0">love, but of the family and friendships</p>
        <p className="leading-[24px]">that have shaped us and brought us here.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] mb-0">To have you with us would mean more</p>
        <p className="leading-[24px]">than words can say.</p>
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
    <div className="content-stretch flex flex-col gap-[44px] h-[458.7px] items-center relative shrink-0 w-[345px]">
      <Frame />
      <Frame2 />
      <Container />
    </div>
  );
}

function Fced79Efb4Ddc92C995061Bf88Ed32B3Jpg() {
  return (
    <div className="h-[596px] relative shrink-0 w-[398px]" data-name="fced79efb4ddc92c995061bf88ed32b3.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgFced79Efb4Ddc92C995061Bf88Ed32B3Jpg} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[241px] items-center left-1/2 top-1/2">
      <Frame3 />
      <Fced79Efb4Ddc92C995061Bf88Ed32B3Jpg />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 2">
      <div className="absolute bg-[#f3f1ed] inset-0" data-name="Background" />
      <Frame4 />
    </div>
  );
}