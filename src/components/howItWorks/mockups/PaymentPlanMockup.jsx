import useCardAnimation from "../useCardAnimation";

// 561x544 per Figma Dev Mode. Choreography ported verbatim (percentages,
// easing) from the design handoff's c3* keyframes -- every field types
// itself in, focus-highlights in sequence, the Frequency dropdown opens
// and picks "Monthly", then step 2's circle ticks over. Already settles
// cleanly at 100% (nothing reverts), so only the loop and duration change.
// Tailwind's JIT scanner only picks up complete literal class strings --
// it can't see values assembled via template interpolation (e.g. a helper
// that builds `animate-[${name}_${dur}...]` at runtime never appears as
// literal text in the source, so it silently compiles to no CSS at all).
// Each value here is written out in full so the scanner finds it.
const ANIM = {
  hc3F1: "animate-[hc3F1_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3F2: "animate-[hc3F2_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3F3: "animate-[hc3F3_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3F4: "animate-[hc3F4_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3S2: "animate-[hc3S2_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3S2num: "animate-[hc3S2num_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3S2tick: "animate-[hc3S2tick_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3S3: "animate-[hc3S3_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3Line: "animate-[hc3Line_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3Ph1: "animate-[hc3Ph1_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3Ph2: "animate-[hc3Ph2_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3Ph3: "animate-[hc3Ph3_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3Chevron: "animate-[hc3Chevron_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3FreqPh: "animate-[hc3FreqPh_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
  hc3FreqVal: "animate-[hc3FreqVal_9s_cubic-bezier(.25,.8,.25,1)_1_both]",
};

export default function PaymentPlanMockup() {
  const { ref, play } = useCardAnimation();
  const on = play === "running";
  const a = (name) => (on ? ANIM[name] : "");

  return (
    <div ref={ref} className="w-[561px]">
      <style>{`
        @keyframes hc3T1 { 0%,5%{width:0;border-right-width:0} 6%{width:0;border-right-width:1.4px} 22%,26%{width:120px;border-right-width:1.4px} 28%,100%{width:120px;border-right-width:0} }
        @keyframes hc3T2 { 0%,28%{width:0;border-right-width:0} 29%{width:0;border-right-width:1.4px} 46%,50%{width:176px;border-right-width:1.4px} 52%,100%{width:176px;border-right-width:0} }
        @keyframes hc3T3 { 0%,55%{width:0;border-right-width:0} 56%{width:0;border-right-width:1.4px} 64%,67%{width:56px;border-right-width:1.4px} 69%,100%{width:56px;border-right-width:0} }
        @keyframes hc3F1 { 0%,4%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} 7%,26%{border-color:#0b2fa8;box-shadow:0 0 0 3px rgba(11,47,168,.08)} 30%,100%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} }
        @keyframes hc3F2 { 0%,26%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} 30%,50%{border-color:#0b2fa8;box-shadow:0 0 0 3px rgba(11,47,168,.08)} 54%,100%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} }
        @keyframes hc3F3 { 0%,52%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} 56%,67%{border-color:#0b2fa8;box-shadow:0 0 0 3px rgba(11,47,168,.08)} 70%,100%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} }
        @keyframes hc3F4 { 0%,66%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} 70%,84%{border-color:#0b2fa8;box-shadow:0 0 0 3px rgba(11,47,168,.08)} 88%,100%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} }
        @keyframes hc3Chevron { 0%,68%{transform:rotate(0)} 72%,80%{transform:rotate(180deg)} 85%,100%{transform:rotate(0)} }
        @keyframes hc3FreqPh { 0%,78%{opacity:1} 82%,100%{opacity:0} }
        @keyframes hc3FreqVal { 0%,78%{opacity:0} 82%,100%{opacity:1} }
        @keyframes hc3S2 { 0%,86%{background:#fff;color:#0b2fa8} 91%,100%{background:#0b2fa8;color:#fff} }
        @keyframes hc3S2num { 0%,86%{opacity:1} 90%,100%{opacity:0} }
        @keyframes hc3S2tick { 0%,87%{opacity:0} 91%,100%{opacity:1} }
        @keyframes hc3S3 { 0%,86%{border-color:#dcdde8;color:#a9adbe} 91%,100%{border-color:#0b2fa8;color:#0b2fa8} }
        @keyframes hc3Line { 0%,86%{background:#e6e7f1} 92%,100%{background:#0b2fa8} }
        @keyframes hc3Ph1 { 0%,5%{opacity:1} 8%,100%{opacity:0} }
        @keyframes hc3Ph2 { 0%,28%{opacity:1} 31%,100%{opacity:0} }
        @keyframes hc3Ph3 { 0%,55%{opacity:1} 58%,100%{opacity:0} }
      `}</style>

      <div className="bg-[#fdfdff] border border-[#edeef6] rounded-t-[14px] shadow-[0_-2px_50px_rgba(35,49,105,.10)] px-[22px] pt-[20px] pb-[24px] mr-[-14px]">
        <div className="text-[15px] font-bold text-[#0d0f1a]">Create Payment Plan</div>
        <div className="text-[11.5px] text-[#8b90a4] mt-1">You can edit or pause any plan at any time.</div>

        <div className="flex items-center mt-[22px]">
          <div className="flex flex-col items-center gap-[7px]">
            <div className="w-6 h-6 rounded-full bg-[#0b2fa8] text-white text-[11px] grid place-items-center">✓</div>
            <div className="text-[10.5px] font-semibold text-[#20243a]">Plan Type</div>
          </div>
          <div className="flex-1 h-[1.4px] bg-[#0b2fa8] mx-[6px] mb-5" />
          <div className="flex flex-col items-center gap-[7px]">
            <div className={`relative w-6 h-6 rounded-full border-[1.4px] border-[#0b2fa8] text-[11px] grid place-items-center ${a("hc3S2")}`}>
              <span className={`col-start-1 row-start-1 ${a("hc3S2num")}`}>2</span>
              <span className={`col-start-1 row-start-1 ${a("hc3S2tick")}`}>✓</span>
            </div>
            <div className="text-[10.5px] font-semibold text-[#20243a]">Plan Details</div>
          </div>
          <div className={`flex-1 h-[1.4px] mx-[6px] mb-5 ${a("hc3Line")}`} />
          <div className="flex flex-col items-center gap-[7px]">
            <div className={`w-6 h-6 rounded-full border-[1.4px] border-[#dcdde8] text-[11px] grid place-items-center ${a("hc3S3")}`}>3</div>
            <div className="text-[10.5px] font-semibold text-[#8b90a4]">Review</div>
          </div>
        </div>

        <div className="mt-[22px]">
          <div className="text-[11.5px] font-semibold text-[#20243a]">Plan Name</div>
          <div className={`mt-[7px] h-[38px] rounded-[8px] flex items-center px-3 text-[12px] bg-white border-[1.3px] border-[#e6e7f1] ${a("hc3F1")}`}>
            <span className="grid flex-1">
              <span className={`col-start-1 row-start-1 inline-block overflow-hidden whitespace-nowrap text-[#20243a] border-r-0 border-[#0b2fa8] w-0 ${on ? "animate-[hc3T1_9s_steps(20)_1_both]" : ""}`}>Annual Hackathon Fee</span>
              <span className={`col-start-1 row-start-1 text-[#b9bdcc] ${a("hc3Ph1")}`}>Enter Your Organizational Name</span>
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[11.5px] font-semibold text-[#20243a]">Description</div>
          <div className={`mt-[7px] min-h-[66px] rounded-[8px] px-3 py-[10px] text-[12px] leading-[1.5] bg-white border-[1.3px] border-[#e6e7f1] ${a("hc3F2")}`}>
            <span className="grid">
              <span className={`col-start-1 row-start-1 inline-block overflow-hidden whitespace-nowrap text-[#20243a] border-r-0 border-[#0b2fa8] w-0 ${on ? "animate-[hc3T2_9s_steps(30)_1_both]" : ""}`}>Covers venue, food and prizes.</span>
              <span className={`col-start-1 row-start-1 text-[#b9bdcc] ${a("hc3Ph2")}`}>Briefly Describe What this payment plan covers...</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[14px] mt-4">
          <div>
            <div className="text-[11.5px] font-semibold text-[#20243a]">Amount Per Member</div>
            <div className={`mt-[7px] h-[38px] rounded-[8px] flex items-center px-3 text-[12px] bg-white border-[1.3px] border-[#e6e7f1] ${a("hc3F3")}`}>
              <span className="grid flex-1">
                <span className={`col-start-1 row-start-1 inline-block overflow-hidden whitespace-nowrap text-[#20243a] border-r-0 border-[#0b2fa8] w-0 ${on ? "animate-[hc3T3_9s_steps(8)_1_both]" : ""}`}>N8,500.00</span>
                <span className={`col-start-1 row-start-1 text-[#b9bdcc] ${a("hc3Ph3")}`}>N0.00`</span>
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="text-[11.5px] font-semibold text-[#20243a]">Frequency</div>
            <div className={`mt-[7px] h-[38px] rounded-[8px] flex items-center justify-between px-3 text-[12px] bg-white border-[1.3px] border-[#e6e7f1] ${a("hc3F4")}`}>
              <span className="grid">
                <span className={`col-start-1 row-start-1 text-[#b9bdcc] ${a("hc3FreqPh")}`}>Select Frequency</span>
                <span className={`col-start-1 row-start-1 text-[#20243a] ${a("hc3FreqVal")}`}>Monthly</span>
              </span>
              <span className={`text-[#8b90a4] text-[9px] ${a("hc3Chevron")}`}>▼</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
