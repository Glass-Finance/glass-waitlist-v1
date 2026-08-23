import useCardAnimation from "../useCardAnimation";
import glassLogo from "../../../assets/howItWorks/glass-logo.png";
import createCommunityIcon from "../../../assets/howItWorks/create-community.webp";
import joinCommunityIcon from "../../../assets/howItWorks/join-community.webp";

// 952x565 hug, per Figma Dev Mode. The "Create/Join Community" buttons and
// their icons are ported at the exact size/spacing used by the real
// onboarding page (glass-waitlist's ChoosePath.jsx: 380px cards, 56px
// icons, px-10 py-8, rounded-2xl) rather than guessed proportions, since
// this screen in the mockup *is* that same picker. Choreography ported
// from the design handoff's c1* keyframes, remapped from a looping
// preview into a one-shot reveal that settles on "selected + Continue
// pressed" instead of reverting back to the empty state (which the
// original loop needed for a seamless restart, but a single
// scroll-triggered play should not undo).
export default function CreateCommunityMockup() {
  const { ref, play } = useCardAnimation();
  const on = play === "running";

  return (
    <div ref={ref} className="relative w-[952px]">
      <style>{`
        @keyframes hc1Sel {
          0% { border-color: #ffffff; box-shadow: 0 0 0 0 rgba(11,47,168,0) }
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

      <div className="relative w-[900px] bg-[#fdfdff] border border-[#edeef6] rounded-t-[16px] shadow-[0_-2px_60px_rgba(35,49,105,.10)] px-[26px] pt-[18px] pb-[22px]">
        <div className="flex items-center gap-[9px]">
          <img src={glassLogo} alt="" className="w-[22px] h-[22px] object-contain" />
          <span className="text-[14px] font-semibold text-[#101322]">Glass</span>
        </div>
        <div className="mt-5 text-center">
          <div className="text-[17px] font-bold text-[#0d0f1a]">What would you like to do?</div>
          <div className="text-[11.5px] text-[#8b90a4] mt-[5px]">Are you setting up a community, or joining one you've been invited to?</div>
        </div>
        <div className="flex justify-center gap-5 mt-4">
          <div className={`relative flex flex-col items-center text-center gap-0 px-10 py-6 rounded-2xl bg-white w-[380px] border-2 ${on ? "animate-[hc1Sel_2.2s_cubic-bezier(.25,.8,.25,1)_1_both]" : "border-white"}`}>
            <div className={`absolute top-4 left-4 w-6 h-6 rounded-full flex items-center justify-center text-[10px] border-2 ${on ? "animate-[hc1Check_2.2s_cubic-bezier(.25,.9,.25,1)_1_both]" : "border-[#dcdde8]"}`}>
              ✓
            </div>
            <img src={createCommunityIcon} alt="" className="w-14 h-14 object-contain mt-4 mb-3" />
            <h3 className="font-semibold text-gray-900 text-base mb-2">Create Community</h3>
            <p className="text-sm text-gray-500 leading-relaxed">No existing members or records. Start building your community on Glass.</p>
          </div>
          <div className="relative flex flex-col items-center text-center gap-0 px-10 py-6 rounded-2xl bg-white w-[380px] border-2 border-white">
            <div className="absolute top-4 left-4 w-6 h-6 rounded-full border-2 border-[#dcdde8]" />
            <img src={joinCommunityIcon} alt="" className="w-14 h-14 object-contain mt-4 mb-3" />
            <h3 className="font-semibold text-gray-900 text-base mb-2">Join Community</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Your community already exists. Join Now.</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className={`relative w-[300px] h-[38px] rounded-[9px] bg-[#0b2fa8] text-white text-[12.5px] font-semibold grid place-items-center overflow-hidden ${on ? "animate-[hc1Btn_2.2s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`}>
            Continue
            <div className={`absolute left-0 bottom-0 h-[3px] bg-white/60 ${on ? "animate-[hc1Load_2.2s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
