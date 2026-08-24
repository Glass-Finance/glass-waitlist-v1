import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { goToApp } from "../../utils/deviceRedirect";
import signupIcon from "../../assets/howItWorks/icon-signup.png";
import signupCardBg from "../../assets/howItWorks/signup-card-bg.png";
import signupMockup from "../../assets/howItWorks/member-signup-mockup.png";
import memberAcceptInvite from "../../assets/howItWorks/member-accept-invite.png";
import memberAutopay from "../../assets/howItWorks/member-autopay.png";

// Accept Invite / Autopay are single pixel-exact Figma exports (595x727
// each) with background, icon, heading, and mockup all baked in -- no
// hand-recreated CSS, no animation. The signup row is the one exception:
// its heading/icon stay live (matching the original Figma layer split),
// with only the inner mockup card (528x669) as an image.
function SignupRow() {
  return (
    <div
      className="relative overflow-hidden border border-[#E9EAF4] rounded-3xl bg-white bg-cover bg-bottom bg-no-repeat flex items-center min-h-[282px] w-[728px] lg:min-h-[470px] lg:w-[1213px]"
      style={{ backgroundImage: `url(${signupCardBg})` }}
    >
      <div className="relative flex items-center gap-3 lg:gap-5 px-6 lg:px-10 flex-1">
        <img src={signupIcon} alt="" className="w-[42px] h-[42px] lg:w-[70px] lg:h-[70px] shrink-0" />
        <h3 className="m-0 text-[23px] leading-[1.12] font-medium text-[#24417f] tracking-[-0.01em]">Sign up for Glass in seconds.</h3>
      </div>
      <div className="relative pt-4 lg:pt-6 pb-0 px-6 lg:px-10 flex justify-center">
        <img src={signupMockup} alt="Sign up for Glass" className="w-[317px] h-[395px] lg:w-[528px] lg:h-[658px] block" />
      </div>
    </div>
  );
}

export default function MembersHowItWorksSection() {
  const navigate = useNavigate();

  function handleJoin() {
    goToApp("/member/join", navigate);
  }

  return (
    <section className="relative isolate overflow-hidden py-24" id="how-it-works">
      <div className="relative z-10 max-w-[880px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center border border-[#1C2B8A]/20 text-[#1C2B8A] text-[12px] font-semibold px-5 py-2 rounded-full mb-7"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(26px,5vw,58px)] font-bold text-[#0f1d6e] leading-tight tracking-tight mb-5"
          >
            Launch Transparent Payments
            <br className="hidden md:block" /> in Minutes
          </motion.h2>
          <motion.p
            className="text-[17px] text-[#00000099] max-w-[720px] mx-auto leading-relaxed"
            initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Set up your community, link member payment methods, and let Glass handle the rest.
          </motion.p>
        </div>
      </div>

      {/* Tablet/Desktop — full-width signup row + 2-card row, 1213px content
          width matching Figma at lg+. Scaled ~0.6x at md (iPad-width
          viewports) so the whole card, baked-in heading text included,
          actually fits instead of overflowing/reading oversized. */}
      <div className="hidden md:block relative z-10 mx-auto px-6 max-w-[800px] lg:max-w-[1330px]">
        <SignupRow />
        <div className="flex gap-6 mt-6">
          <img src={memberAcceptInvite} alt="Accept Your Community Invite" className="w-[357px] h-[436px] lg:w-[595px] lg:h-[727px] shrink-0 rounded-[8px]" />
          <img src={memberAutopay} alt="Automate your dues. Never miss a payment." className="w-[357px] h-[436px] lg:w-[595px] lg:h-[727px] shrink-0 rounded-[8px]" />
        </div>
      </div>

      {/* Mobile — signup row stacks naturally; other two cards as full-width responsive images */}
      <div className="md:hidden relative z-10 px-4">
        <div
          className="relative overflow-hidden border border-[#E9EAF4] rounded-3xl bg-white bg-cover bg-bottom bg-no-repeat flex flex-col items-center"
          style={{ backgroundImage: `url(${signupCardBg})` }}
        >
          <div className="relative flex flex-col items-start gap-[14px] pt-7 px-6 w-full">
            <img src={signupIcon} alt="" className="w-[56px] h-[56px]" />
            <h3 className="m-0 text-2xl leading-[1.2] font-medium text-[#24417f]">Sign up for Glass in seconds.</h3>
          </div>
          <img src={signupMockup} alt="Sign up for Glass" className="relative w-[85%] h-auto mt-6 mb-4 block" />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <img src={memberAcceptInvite} alt="Accept Your Community Invite" className="w-full h-auto rounded-[8px]" />
          <img src={memberAutopay} alt="Automate your dues. Never miss a payment." className="w-full h-auto rounded-[8px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-[880px] mx-auto px-6">
        <div className="flex justify-center mt-12 md:mt-20">
          <motion.button
            onClick={handleJoin}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-3 bg-[#0f1d6e] text-white font-bold text-[14px] px-8 py-4 rounded-full overflow-hidden shadow-2xl shadow-[#0f1d6e]/25"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
              whileHover={{ translateX: "250%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Join Glass</span>
            <motion.svg
              className="relative z-10"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
