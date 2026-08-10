function TimelineHeading() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[#303030] text-[44px] text-center w-full">
      <div className="flex flex-col font-['Cormorant_Garamond',serif] font-semibold justify-center relative shrink-0 tracking-[2px] uppercase w-full">
        <p className="leading-[44px]">wedding</p>
      </div>
      <div className="flex flex-col font-['Ephesis',cursive] font-normal h-[44px] justify-center not-italic relative shrink-0 tracking-[0px] w-full">
        <p className="leading-[128px]">timeline</p>
      </div>
    </div>
  );
}

function TimelineRow({ time, label }: { time: string; label: string }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Avenir:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] tracking-[1px] whitespace-nowrap" style={{ minWidth: 44 }}>
        <p className="leading-[24px]">{time}</p>
      </div>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#303030" r="5" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Avenir:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] tracking-[1px]" style={{ minWidth: 86 }}>
        <p className="leading-[24px]">{label}</p>
      </div>
    </div>
  );
}

function TimelineColumn() {
  const rows = [
    { time: "16:30", label: "Ceremony" },
    { time: "17:30", label: "Welcome" },
    { time: "17:45", label: "Cocktails" },
    { time: "18:00", label: "Photos" },
    { time: "19:00", label: "Dinner" },
    { time: "21:00", label: "Cake" },
    { time: "22:00", label: "Party" },
    { time: "01:00", label: "The end" },
  ];
  return (
    <div className="content-stretch flex flex-col items-center gap-[44px] w-full max-w-[345px] mx-auto">
      <TimelineHeading />
      <div className="content-stretch flex flex-col gap-[44px] items-start relative w-full">
        {rows.map(({ time, label }) => (
          <TimelineRow key={time} time={time} label={label} />
        ))}
      </div>
    </div>
  );
}

function DressHeading() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[#303030] text-[44px] text-center w-full">
      <div className="flex flex-col font-['Cormorant_Garamond',serif] font-semibold justify-center relative shrink-0 tracking-[2px] uppercase w-full">
        <p className="leading-[44px]">Dress</p>
      </div>
      <div className="flex flex-col font-['Ephesis',cursive] font-normal h-[44px] justify-center not-italic relative shrink-0 tracking-[0px] w-full">
        <p className="leading-[128px]">code</p>
      </div>
    </div>
  );
}

function DressColumn() {
  return (
    <div className="content-stretch flex flex-col items-center gap-[44px] w-full max-w-[345px] mx-auto">
      <DressHeading />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[34px] items-start leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] text-center w-full">
        <div className="content-stretch flex flex-col font-['Avenir:Roman',sans-serif] gap-[24px] items-end relative shrink-0 tracking-[1px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <p className="leading-[24px] mb-0">We would love for our wedding day to</p>
            <p className="leading-[24px]">feel timeless, elegant, and romantic.</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <p className="leading-[24px] mb-0">
              Elegant black, light neutral, and soft pastel tones. Gentlemen are invited to wear black or light-colored suits.
              <br aria-hidden />
              Ladies are invited to wear black or light outfits in soft pastel shades.
            </p>
            <p className="leading-[24px]">We kindly ask you to avoid very bright or neon colors.</p>
          </div>
        </div>
        <div className="flex flex-col font-['Avenir:Oblique',sans-serif] justify-center relative shrink-0 w-full">
          <p className="leading-[24px] mb-0">Most importantly, wear something that makes</p>
          <p className="leading-[24px] mb-0">you feel beautiful, confident, and ready to</p>
          <p className="leading-[24px]">{`celebrate with us. `}</p>
        </div>
      </div>
    </div>
  );
}

export default function Block() {
  return (
    <div className="bg-[#f3f1ed] w-full" data-name="Block5">
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16 lg:gap-[clamp(60px,16.7vw,241px)] w-full max-w-[1200px] mx-auto px-6 sm:px-10 py-16 md:py-20 lg:py-24">
        <TimelineColumn />
        <DressColumn />
      </div>
    </div>
  );
}
