import useCardAnimation from "../useCardAnimation";
import arsenalLogo from "../../../assets/howItWorks/arsenal-logo.png";

// 548px wide notifications card. Choreography ported from the design
// handoff's m2* keyframes, remapped from a looping tab-cycle into a
// one-shot reveal that lands on the "Invites" tab with the invite card
// visible (the original loop cycled back through Community/Payments,
// which a single playthrough shouldn't undo). Uses the real Arsenal crest
// in place of the reference's plain "AC" placeholder.
export default function InviteMockup() {
  const { ref, play } = useCardAnimation();
  const on = play === "running";

  return (
    <div ref={ref} className="w-[548px] bg-[#fdfdff] border border-[#edeef6] rounded-t-[16px] shadow-[0_-2px_46px_rgba(35,49,105,.10)] px-5 pt-5 pb-[30px]">
      <style>{`
        @keyframes hm2Tab { 0%,8% { transform: translateX(100%) } 20%,100% { transform: translateX(200%) } }
        @keyframes hm2T2 { 0%,8% { color: #20243a } 20%,100% { color: #8b90a4 } }
        @keyframes hm2T3 { 0%,8% { color: #8b90a4 } 20%,100% { color: #20243a } }
        @keyframes hm2Card { 0%,24% { opacity: 0; transform: translateY(16px) } 38%,100% { opacity: 1; transform: none } }
        @keyframes hm2Acc { 0%,60% { transform: scale(1) } 68% { transform: scale(.96) } 76%,100% { transform: scale(1) } }
      `}</style>
      <div className="flex items-center gap-3">
        <div className="w-[30px] h-[30px] rounded-full border border-[#eceef5] grid place-items-center text-[#5c6178] text-[13px]">‹</div>
        <div className="flex-1 text-center text-[15px] font-semibold text-[#0d0f1a] mr-[30px]">Notifications</div>
      </div>
      <div className="relative grid grid-cols-3 bg-[#f4f5f9] rounded-[9px] p-1 mt-[18px]">
        <div className={`absolute left-1 top-1 bottom-1 w-[calc((100%-8px)/3)] rounded-[7px] bg-white shadow-[0_2px_6px_rgba(35,49,105,.10)] ${on ? "animate-[hm2Tab_6.5s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`} />
        <div className="relative text-center text-[11.5px] py-[7px] text-[#8b90a4]">Payments</div>
        <div className={`relative text-center text-[11.5px] py-[7px] font-semibold ${on ? "animate-[hm2T2_6.5s_ease_1_both]" : ""}`}>Community</div>
        <div className={`relative text-center text-[11.5px] py-[7px] font-semibold ${on ? "animate-[hm2T3_6.5s_ease_1_both]" : ""}`}>Invites</div>
      </div>
      <div className={`mt-4 border border-[#eceef5] rounded-xl overflow-hidden ${on ? "animate-[hm2Card_6.5s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`}>
        <div className="flex items-center gap-[10px] px-[13px] py-3">
          <img src={arsenalLogo} alt="" className="w-[30px] h-[30px] rounded-[5px] object-cover shrink-0" />
          <div className="flex-1">
            <div className="text-[13px] font-semibold text-[#0d0f1a]">Arsenal Club Fans</div>
            <div className="text-[11px] text-[#8b90a4]">Football</div>
          </div>
          <div className="text-[10.5px] text-[#8b90a4]">◷ 2 days ago</div>
        </div>
        <div className="border-t border-[#f1f2f8] px-[13px] py-3">
          <div className="text-[11.5px] text-[#5c6178] leading-[1.5]">A community for passionate Arsenal supporters to connect, contribute, and celebrate every match together.</div>
          <div className="text-[11px] text-[#5c6178] mt-[10px]">Invited by <b className="text-[#20243a]">Habeeb Abayomi</b> · <b className="text-[#20243a]">390</b> Members</div>
          <div className="grid grid-cols-2 gap-[10px] mt-3">
            <div className={`h-9 rounded-lg text-[12px] font-semibold grid place-items-center text-white bg-[#0b2fa8] ${on ? "animate-[hm2Acc_6.5s_ease_1_both]" : ""}`}>Accept Invite</div>
            <div className="h-9 rounded-lg border-[1.2px] border-[#e5e6f0] text-[12px] font-semibold text-[#5c6178] grid place-items-center">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
}
