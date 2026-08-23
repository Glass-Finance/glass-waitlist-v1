import useCardAnimation from "../useCardAnimation";

// 528px wide signup card. Choreography ported verbatim from the design
// handoff's m1* keyframes (email types itself in, checkbox ticks,
// Continue presses). Already settles cleanly, no remapping needed.
export default function SignupMockup() {
  const { ref, play } = useCardAnimation();
  const on = play === "running";

  return (
    <div ref={ref} className="w-[528px] bg-[#fdfdff] border border-[#edeef6] rounded-[14px] shadow-[0_20px_50px_rgba(35,49,105,.11)] px-[22px] pt-[20px] pb-[24px]">
      <style>{`
        @keyframes hm1Type { 0%,8%{width:0;border-right-width:0} 9%{width:0;border-right-width:1.4px} 34%,38%{width:126px;border-right-width:1.4px} 40%,100%{width:126px;border-right-width:0} }
        @keyframes hm1Ph { 0%,7%{opacity:1} 10%,100%{opacity:0} }
        @keyframes hm1Focus { 0%,6%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} 9%,38%{border-color:#0b2fa8;box-shadow:0 0 0 3px rgba(11,47,168,.08)} 42%,100%{border-color:#e6e7f1;box-shadow:0 0 0 0 rgba(11,47,168,0)} }
        @keyframes hm1Cb { 0%,44%{background:#fff;border-color:#dcdde8;color:transparent} 49%{background:#0b2fa8;border-color:#0b2fa8;color:#fff;transform:scale(1.15)} 53%,100%{background:#0b2fa8;border-color:#0b2fa8;color:#fff;transform:scale(1)} }
        @keyframes hm1Btn { 0%,54%{transform:scale(1)} 58%{transform:scale(.962)} 62%,100%{transform:scale(1)} }
      `}</style>
      <div className="flex items-center gap-[9px]">
        <div className="w-[22px] h-[22px] rounded-[6px] bg-[linear-gradient(135deg,#4b45c9,#7d55e0)]" />
        <span className="text-[14px] font-semibold text-[#101322]">Glass</span>
      </div>
      <div className="border-t border-[#f0f1f7] -mx-[22px] mt-[14px]" />
      <div className="text-[16px] font-bold text-[#0d0f1a] mt-[18px]">Create Your Account</div>
      <div className="text-[12px] font-semibold text-[#20243a] mt-4">Email Address</div>
      <div className={`mt-[7px] h-10 border-[1.3px] border-[#e6e7f1] rounded-[9px] flex items-center px-3 text-[12.5px] bg-white ${on ? "animate-[hm1Focus_7.5s_ease_1_both]" : ""}`}>
        <span className="grid flex-1">
          <span className={`col-start-1 row-start-1 inline-block overflow-hidden whitespace-nowrap text-[#20243a] border-r-0 border-[#0b2fa8] w-0 ${on ? "animate-[hm1Type_7.5s_steps(21)_1_both]" : ""}`}>habeeb@arsenalfans.co</span>
          <span className={`col-start-1 row-start-1 text-[#b9bdcc] ${on ? "animate-[hm1Ph_7.5s_linear_1_both]" : ""}`}>Enter Your Email Address</span>
        </span>
      </div>
      <div className="flex items-center gap-[9px] mt-4 text-[11.5px] text-[#5c6178]">
        <span className={`shrink-0 w-[15px] h-[15px] border-[1.4px] border-[#dcdde8] rounded-[4px] grid place-items-center text-[9px] text-transparent ${on ? "animate-[hm1Cb_7.5s_cubic-bezier(.25,.9,.25,1)_1_both]" : ""}`}>✓</span>
        <span>I accept the <span className="text-[#1e46b8] underline">Terms of Service</span> and <span className="text-[#1e46b8] underline">Privacy Policy</span></span>
      </div>
      <div className={`mt-[18px] h-[42px] rounded-[9px] bg-[#0b2fa8] text-white text-[13px] font-semibold grid place-items-center ${on ? "animate-[hm1Btn_7.5s_ease_1_both]" : ""}`}>
        <span>Continue</span>
      </div>
      <div className="flex items-center gap-[10px] mt-4 text-[#a9adbe] text-[11px]">
        <span className="flex-1 h-px bg-[#eeeff5]" />or<span className="flex-1 h-px bg-[#eeeff5]" />
      </div>
      <div className="mt-[14px] h-[42px] border-[1.3px] border-[#e9eaf3] rounded-[9px] flex items-center justify-center gap-[9px] text-[13px] font-medium text-[#20243a] bg-white">
        <span className="w-[17px] h-[17px] rounded-full bg-[conic-gradient(#ea4335_0_25%,#fbbc05_0_50%,#34a853_0_75%,#4285f4_0)]" />Sign Up With Google
      </div>
      <div className="text-center text-[11.5px] text-[#8b90a4] mt-4">Already Have An Account? <span className="text-[#1e46b8] font-semibold">Sign In</span></div>
    </div>
  );
}
