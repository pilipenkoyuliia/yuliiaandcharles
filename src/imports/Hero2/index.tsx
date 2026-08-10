import svgPaths from "./svg-xbpf0ly69x";
import imgDesktop11 from "./62320f1ca1aa970cd8e02404a8f3eb836673f4d9.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[50px] items-center left-[calc(50%+0.5px)] top-[38px]">
      <div className="[word-break:break-word] flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f2ee] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">STORY</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f2ee] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">DETAILS</p>
      </div>
      <div className="h-[66px] relative shrink-0 w-[55px]" data-name="Logo white">
        <svg className="absolute block inset-0 size-full" fill="none" height="66" preserveAspectRatio="none" viewBox="0 0 55 66" width="55">
          <g id="Logo white">
            <path d={svgPaths.p11a24980} fill="white" />
            <path d={svgPaths.p6ebdb80} fill="white" />
            <path d={svgPaths.p1865f900} fill="white" />
            <path d={svgPaths.p32643900} fill="white" />
            <path d={svgPaths.p29e6ee00} fill="white" />
            <path d={svgPaths.p1641a30} fill="white" />
            <path d={svgPaths.p2fb87600} fill="white" />
            <path d={svgPaths.p119ec00} fill="white" />
            <path d={svgPaths.pbcc9500} fill="white" />
            <path d={svgPaths.p24e55180} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p18f59780} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf2a00} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pef9dbf0} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p24054200} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p1cdbff80} fill="white" />
          </g>
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f2ee] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">Let Us Know</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f2ee] text-[12px] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">faq</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-white relative size-full" data-name="Hero2">
      <div className="absolute bg-[#f3f1ed] inset-0" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1024px] left-1/2 top-1/2 w-[1440px]" data-name="Desktop - 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDesktop11} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Cormorant_Garamond:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[720.5px] text-[#fffcfc] text-[54px] text-center top-[659.5px] tracking-[-0.54px] uppercase whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">{`Yuliia  & Charles`}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[718.45px] not-italic text-[#f4f2ee] text-[14.4px] text-center top-[741.55px] tracking-[2.729px] uppercase whitespace-nowrap">
        <p className="leading-[26px]">09 october 2026</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Ephesis:Regular',sans-serif] justify-center leading-[0] left-[717.09px] not-italic text-[#f4f2ee] text-[32px] text-center top-[806.09px] whitespace-nowrap">
        <p className="leading-[85px]">Vaucresson, France</p>
      </div>
      <Frame />
    </div>
  );
}