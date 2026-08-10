import imgBlock4 from "./6b4c87a97c621dcee8a4ce8c52573722ab7fb24f.png";

function Frame() {
  return (
    <div className="content-stretch flex font-['Cormorant_Garamond:Regular',sans-serif] font-normal gap-[44px] h-[46px] items-start relative shrink-0 w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[44px] tracking-[2px] uppercase">
        <p className="leading-[44px]">date</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[25px]">
        <p className="leading-[46px]">and</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[44px] tracking-[2px] uppercase">
        <p className="leading-[44px]">venue</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-center relative shrink-0 text-center w-[389px]">
      <Frame />
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center not-italic relative shrink-0 text-[14px] tracking-[2px] uppercase w-full">
        <p className="leading-[13px]">Friday, 09 october 2026</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 uppercase w-[113.885px]">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center relative shrink-0 text-[14px] tracking-[2px] w-full">
        <p className="leading-[13px]">{`ceremony `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[13.5px] tracking-[2.457px] w-full">
        <p className="leading-[13px]">{`16:30 `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[13px] tracking-[2.457px] w-full">
        <p className="leading-[13px] mb-0">Vaucresson</p>
        <p className="leading-[13px]">City Hall</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Oblique',sans-serif] items-start relative shrink-0 text-[14px] tracking-[-0.175px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">{`8 Grande Rue, `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">{`92420 `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Vaucresson, France</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[238px] items-start not-italic relative shrink-0 w-[151px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start not-italic relative shrink-0 uppercase w-[154px]">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center relative shrink-0 text-[14px] text-center tracking-[2px] w-full">
        <p className="leading-[13px]">Wedding Dinner</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[13.5px] tracking-[2.457px] w-full">
        <p className="leading-[13px]">17:30-01:00</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[13.1px] tracking-[2.457px] w-full whitespace-pre-wrap">
        <p className="leading-[13px] mb-0">{`Château `}</p>
        <p className="leading-[13px]">De Prunay</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Italic',sans-serif] font-normal italic items-start relative shrink-0 text-[14.6px] tracking-[-0.175px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">19 Chem. de Prunay</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">78430</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[25px]">Louveciennes, France</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[227px] items-start relative shrink-0 w-[186px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[90px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[86px] items-start leading-[0] left-[calc(50%+0.5px)] text-white top-[calc(50%+0.5px)] w-[427px]">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

export default function Block() {
  return (
    <div className="bg-white relative size-full" data-name="Block4">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-bottom size-full" src={imgBlock4} />
        <div className="absolute bg-[rgba(0,0,0,0.39)] inset-0" />
      </div>
      <Frame9 />
    </div>
  );
}