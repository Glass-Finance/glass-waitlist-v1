import useCardAnimation from "../useCardAnimation";

// 952x565 hug, per Figma Dev Mode. Choreography ported from the design
// handoff's c1* keyframes, remapped from a looping preview into a one-shot
// reveal that settles on "selected + Continue pressed" instead of
// reverting back to the empty state (which the original loop needed for a
// seamless restart, but a single scroll-triggered play should not undo).
export default function CreateCommunityMockup() {
  const { ref, play } = useCardAnimation();
  const on = play === "running";

  return (
    <div ref={ref} className="relative w-[952px] h-[565px]">
      <style>{`
        @keyframes hc1Sel {
          0% { border-color: #e9eaf3; box-shadow: 0 0 0 0 rgba(11,47,168,0) }
          40%, 100% { border-color: #0b2fa8; box-shadow: 0 0 0 3px rgba(11,47,168,.09) }
        }
        @keyframes hc1Check {
          0% { transform: scale(.6); background: #fff; border-color: #dcdde8; color: transparent }
          43% { transform: scale(1.18); background: #0b2fa8; border-color: #0b2fa8; color: #fff }
          53%, 100% { transform: scale(1); background: #0b2fa8; border-color: #0b2fa8; color: #fff }
        }
        @keyframes hc1Btn {
          0%, 83% { transform: scale(1); box-shadow: 0 8px 20px rgba(11,47,168,.14) }
          93% { transform: scale(.962); box-shadow: 0 4px 12px rgba(11,47,168,.2) }
          100% { transform: scale(1); box-shadow: 0 12px 28px rgba(11,47,168,.26) }
        }
        @keyframes hc1Load {
          0%, 90% { width: 0; opacity: 0 }
          95% { width: 6%; opacity: 1 }
          100% { width: 100%; opacity: 1 }
        }
      `}</style>

      <div className="relative w-[900px] bg-[#fdfdff] border border-[#edeef6] rounded-t-[16px] shadow-[0_-2px_60px_rgba(35,49,105,.10)] px-[26px] pt-[18px] pb-[30px]">
        <div className="flex items-center gap-[9px]">
          <div className="w-[22px] h-[22px] rounded-[6px] bg-[linear-gradient(135deg,#4b45c9,#7d55e0)]" />
          <span className="text-[14px] font-semibold text-[#101322]">Glass</span>
        </div>
        <div className="mt-[26px] text-center">
          <div className="text-[17px] font-bold text-[#0d0f1a]">What would you like to do?</div>
          <div className="text-[11.5px] text-[#8b90a4] mt-[5px]">Are you setting up a community, or joining one you've been invited to?</div>
        </div>
        <div className="grid grid-cols-2 gap-[14px] mt-[20px]">
          <div className={`relative border-[1.4px] border-[#e9eaf3] rounded-[12px] px-[14px] pt-[16px] pb-[14px] text-center bg-white ${on ? "animate-[hc1Sel_2.2s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`}>
            <div className={`absolute left-[12px] top-[12px] w-[17px] h-[17px] border-[1.4px] border-[#dcdde8] rounded-full grid place-items-center text-[10px] ${on ? "animate-[hc1Check_2.2s_cubic-bezier(.25,.9,.25,1)_1_both]" : ""}`}>
              ✓
            </div>
            <div className="flex justify-center gap-[3px] items-end h-[26px] mt-[6px]">
              <div className="w-[9px] h-[9px] rounded-full bg-[#0d0f1a]" />
              <div className="w-[12px] h-[12px] rounded-full bg-[#0d0f1a] mb-[2px]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#0d0f1a]" />
            </div>
            <div className="text-[12.5px] font-bold text-[#0d0f1a] mt-[8px]">Create Community</div>
            <div className="text-[10.5px] text-[#8b90a4] mt-[4px] leading-[1.4]">No existing members or records. Start building your community on Glass.</div>
          </div>
          <div className="relative border-[1.4px] border-[#e9eaf3] rounded-[12px] px-[14px] pt-[16px] pb-[14px] text-center bg-white">
            <div className="absolute left-[12px] top-[12px] w-[17px] h-[17px] rounded-full border-[1.4px] border-[#dcdde8]" />
            <div className="flex justify-center gap-[3px] items-end h-[26px] mt-[6px]">
              <div className="w-[11px] h-[11px] rounded-full bg-[#0d0f1a]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#0d0f1a] mb-[2px]" />
              <div className="w-[14px] h-[14px] rounded-full bg-[#0d0f1a] grid place-items-center text-white text-[9px]">+</div>
            </div>
            <div className="text-[12.5px] font-bold text-[#0d0f1a] mt-[8px]">Join Community</div>
            <div className="text-[10.5px] text-[#8b90a4] mt-[4px] leading-[1.4]">Your community already exists. Join Now.</div>
          </div>
        </div>
        <div className="flex justify-center mt-[22px]">
          <div className={`relative w-[300px] h-[38px] rounded-[9px] bg-[#0b2fa8] text-white text-[12.5px] font-semibold grid place-items-center overflow-hidden ${on ? "animate-[hc1Btn_2.2s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`}>
            Continue
            <div className={`absolute left-0 bottom-0 h-[3px] bg-white/60 ${on ? "animate-[hc1Load_2.2s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
