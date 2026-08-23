import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { goToApp } from "../../utils/deviceRedirect";
import Card from "../howItWorks/Card";
import MockupFrame from "../howItWorks/MockupFrame";
import ScaledMockup from "../howItWorks/ScaledMockup";
import MobileCarousel from "../howItWorks/MobileCarousel";
import SignupMockup from "../howItWorks/mockups/SignupMockup";
import InviteMockup from "../howItWorks/mockups/InviteMockup";
import AutopayMockup from "../howItWorks/mockups/AutopayMockup";
import { SignupIcon, AcceptInviteIcon, AutopayIcon } from "../howItWorks/icons/StepIcons";

// font-medium, not -semibold -- the Figma reference weight is noticeably
// lighter than the section's main heading.
const HEADING_CLS = "m-0 text-[38px] leading-[1.12] font-medium text-[#24417f] tracking-[-0.01em]";
const GRADIENT_30 = "bg-[conic-gradient(from_155deg,#6B2FB5_0%,rgba(107,47,181,0)_30%,#072EAB_100%)]";

// Sign up row — full width 1213px, no card chrome, plain bg + wave decor,
// icon+heading on the left, signup mockup card (528px) on the right.
function SignupRow() {
  return (
    <div className="relative overflow-hidden border border-[#E9EAF4] rounded-3xl bg-[linear-gradient(150deg,#fbfbfe,#f3f3fa)] flex items-center min-h-[470px] w-[1213px]">
      <div className="absolute left-0 bottom-0 w-[56%] h-[62%] bg-[linear-gradient(180deg,rgba(214,207,240,0),#d9d3f0)] rounded-tr-full" />
      <div className="relative flex items-center gap-5 px-10 flex-1">
        <SignupIcon />
        <h3 className={HEADING_CLS}>Sign up for Glass in seconds.</h3>
      </div>
      <div className="relative py-[34px] px-10 flex justify-center">
        <MockupFrame>
          <SignupMockup />
        </MockupFrame>
      </div>
    </div>
  );
}

function AcceptInviteCard() {
  return (
    <Card className={`w-[594.5px] h-[727px] min-w-[594.5px] max-w-[594.5px] min-h-[727px] max-h-[727px] ${GRADIENT_30}`}>
      <div className="relative flex items-center gap-5 pt-11 px-10">
        <AcceptInviteIcon />
        <h3 className={HEADING_CLS}>Accept Your Community Invite.</h3>
      </div>
      <div className="relative mt-[38px] mx-[26px]">
        <MockupFrame>
          <InviteMockup />
        </MockupFrame>
      </div>
    </Card>
  );
}

// Autopay card — the widget sits well down from the top of the card (not
// hugging it), per the Figma reference, wrapped in the same translucent
// film backing every other mockup gets.
function AutopayCard() {
  return (
    <Card className="w-[594.5px] h-[727px] min-w-[594.5px] max-w-[594.5px] min-h-[727px] max-h-[727px] bg-[linear-gradient(200deg,#f1f0fa,#f7f7fc_60%,#efeff8)]">
      <div className="relative pt-24 px-[34px] flex justify-center">
        <MockupFrame>
          <AutopayMockup />
        </MockupFrame>
      </div>
      <div className="relative flex items-center gap-5 px-[34px] pt-11 pb-10">
        <AutopayIcon />
        <h3 className={HEADING_CLS}>Automate your dues. Never miss a payment.</h3>
      </div>
    </Card>
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

      {/* Desktop — full-width signup row + 2-card row, 1213px content width matching Figma */}
      <div className="hidden md:block relative z-10 mx-auto px-6 max-w-[1261px]">
        <SignupRow />
        <div className="flex gap-6 mt-6">
          <AcceptInviteCard />
          <AutopayCard />
        </div>
      </div>

      {/* Mobile — horizontal snap carousel */}
      <div className="relative z-10 mt-2">
        <MobileCarousel>
          {[
            <div key="1" className="relative overflow-hidden border border-[#E9EAF4] rounded-3xl bg-[linear-gradient(150deg,#fbfbfe,#f3f3fa)] w-80 min-h-[560px] flex flex-col">
              <div className="absolute left-0 bottom-0 w-[70%] h-[40%] bg-[linear-gradient(180deg,rgba(214,207,240,0),#d9d3f0)] rounded-tr-full" />
              <div className="relative flex flex-col items-start gap-[14px] pt-7 px-6">
                <SignupIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-medium text-[#24417f]">Sign up for Glass in seconds.</h3>
              </div>
              <div className="relative p-6 flex justify-center">
                <MockupFrame>
                  <ScaledMockup width={528} height={470} targetWidth={260}><SignupMockup /></ScaledMockup>
                </MockupFrame>
              </div>
            </div>,
            <Card key="2" className={`w-80 h-[640px] min-w-80 max-w-80 min-h-[640px] max-h-[640px] ${GRADIENT_30}`}>
              <div className="relative flex flex-col items-start gap-[14px] pt-7 px-6">
                <AcceptInviteIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-medium text-[#24417f]">Accept Your Community Invite.</h3>
              </div>
              <div className="mt-5 -ml-[6px]">
                <MockupFrame>
                  <ScaledMockup width={548} height={330} targetWidth={310}><InviteMockup /></ScaledMockup>
                </MockupFrame>
              </div>
            </Card>,
            <Card key="3" className="w-80 h-[480px] min-w-80 max-w-80 min-h-[480px] max-h-[480px] bg-[linear-gradient(200deg,#f1f0fa,#f7f7fc_60%,#efeff8)]">
              <div className="pt-10 px-5 flex justify-center">
                <MockupFrame>
                  <ScaledMockup width={568} height={261} targetWidth={260}><AutopayMockup /></ScaledMockup>
                </MockupFrame>
              </div>
              <div className="relative flex flex-col items-start gap-[14px] pt-5 px-6 pb-7">
                <AutopayIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-medium text-[#24417f]">Automate your dues. Never miss a payment.</h3>
              </div>
            </Card>,
          ]}
        </MobileCarousel>
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
