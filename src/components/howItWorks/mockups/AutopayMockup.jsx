import useCardAnimation from "../useCardAnimation";

// 568x261 per Figma Dev Mode. Choreography ported verbatim from the
// design handoff's m3* keyframes (toggle switches on with a pulse ring) --
// already settles cleanly at "on", no remapping needed.
export default function AutopayMockup() {
  const { ref, play } = useCardAnimation();
  const on = play === "running";

  return (
    <div ref={ref} className="w-[568px]">
      <style>{`
        @keyframes hm3Tg { 0%,16% { background: #d7d9e4 } 23%,100% { background: #0b2fa8 } }
        @keyframes hm3Knob { 0%,16% { left: 3px } 23%,100% { left: 21px } }
        @keyframes hm3Ring { 0%,17% { opacity: 0; transform: scale(1) } 21% { opacity: .5; transform: scale(1) } 40%,100% { opacity: 0; transform: scale(2.1) } }
      `}</style>
      <div className="border border-[#eef0f6] rounded-xl bg-white overflow-hidden">
        <div className="px-[18px] py-4">
          <div className="flex items-start justify-between gap-[14px]">
            <div>
              <div className="flex items-center gap-[9px]">
                <span className="text-[20px] font-bold text-[#0d0f1a]">₦8,500<span className="font-normal text-[#6b7189]">/month</span></span>
                <span className="flex items-center gap-[5px] text-[11.5px] text-[#5c6178]"><span className="w-[7px] h-[7px] rounded-full bg-[#7d3ce0]" />Recurring</span>
              </div>
              <div className="text-[14px] font-semibold text-[#0d0f1a] mt-2">Annual Hackathon Fee</div>
              <div className="text-[11.5px] text-[#8b90a4] mt-1">Next charge: Apr 1, 2025</div>
            </div>
            <div className="flex items-center gap-[9px]">
              <span className="text-[11.5px] text-[#8b90a4]">Auto-Pay</span>
              <div className={`relative w-[42px] h-6 rounded-full ${on ? "animate-[hm3Tg_5.5s_ease_1_both]" : ""}`}>
                <div className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.2)] ${on ? "animate-[hm3Knob_5.5s_cubic-bezier(.25,.9,.25,1)_1_both]" : "left-[3px]"}`} />
                <div className={`absolute inset-0 rounded-full border-2 border-[#0b2fa8] opacity-0 ${on ? "animate-[hm3Ring_5.5s_ease-out_1_both]" : ""}`} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#f1f2f8] px-[18px] py-[13px] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="flex"><span className="w-[15px] h-[15px] rounded-full bg-[#eb001b]" /><span className="w-[15px] h-[15px] rounded-full bg-[#f79e1b] -ml-[6px]" /></div>
            <span className="text-[13px] font-semibold text-[#0d0f1a]">***9718 | 04/28</span>
          </div>
          <span className="text-[13px] font-semibold text-[#1e46b8]">Change</span>
        </div>
      </div>
    </div>
  );
}
