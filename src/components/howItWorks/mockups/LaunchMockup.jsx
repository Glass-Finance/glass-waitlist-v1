import useCardAnimation from "../useCardAnimation";
import SuccessBadge from "../SuccessBadge";

// 535x544 per Figma Dev Mode. The static green checkmark from the
// original design is replaced with the animated SuccessBadge (per the
// separate checkmark-animation handoff) -- it owns its own title/subtitle
// text and timing internally. This component only adds the button/link
// that follow it, ported from the c4Btn keyframe (remapped to settle
// visible instead of fading back out at the end of the loop).
export default function LaunchMockup() {
  const { ref, play } = useCardAnimation();
  const on = play === "running";

  return (
    <div ref={ref} className="w-[535px]">
      <style>{`
        @keyframes hc4Btn { 0%,44% { opacity: 0; transform: translateY(12px) } 62%,100% { opacity: 1; transform: none } }
      `}</style>
      <div className="bg-[#fcfcfe] border border-[#eff0f7] rounded-[14px] shadow-[0_18px_44px_rgba(35,49,105,.10)] px-[30px] pt-[54px] pb-[60px] text-center">
        <SuccessBadge message="Your Community Is Now Live" subMessage="Babcock Alumni Is All Set Up On Glass!" />
        <div className={on ? "animate-[hc4Btn_3.2s_cubic-bezier(.25,.8,.25,1)_1_both]" : "opacity-0"}>
          <div className="mt-6 h-11 rounded-[10px] bg-[#0b2fa8] text-white text-[14px] font-semibold grid place-items-center">Go To Dashboard</div>
          <div className="mt-4 flex items-center justify-center gap-[7px] text-[13px] font-semibold text-[#0b2fa8]">
            <span className="w-[13px] h-[13px] border-[1.6px] border-current rounded-[3px]" />
            Copy Your Community Link
          </div>
        </div>
      </div>
    </div>
  );
}
