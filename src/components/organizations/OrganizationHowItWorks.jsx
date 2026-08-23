import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { goToApp } from "../../utils/deviceRedirect";
import Card from "../howItWorks/Card";
import ScaledMockup from "../howItWorks/ScaledMockup";
import MobileCarousel from "../howItWorks/MobileCarousel";
import CreateCommunityMockup from "../howItWorks/mockups/CreateCommunityMockup";
import AddMembersMockup from "../howItWorks/mockups/AddMembersMockup";
import PaymentPlanMockup from "../howItWorks/mockups/PaymentPlanMockup";
import LaunchMockup from "../howItWorks/mockups/LaunchMockup";
import { CreateCommunityIcon, AddMembersIcon, PaymentPlanIcon, LaunchIcon } from "../howItWorks/icons/StepIcons";

const HEADING_CLS = "m-0 text-[38px] leading-[1.15] font-semibold text-[#24417f] tracking-[-0.01em]";
const GRADIENT_30 = "bg-[conic-gradient(from_155deg,#6B2FB5_0%,rgba(107,47,181,0)_30%,#072EAB_100%)]";
const GRADIENT_15 = "bg-[conic-gradient(from_155deg,#6B2FB5_0%,rgba(107,47,181,0)_15%,#072EAB_100%)]";

// Card 1 — Create Community (709x705, solid #F9F9FB, heading then mockup)
function CreateCommunityCard() {
  return (
    <Card
      className="w-[709px] h-[705px] min-w-[709px] max-w-[709px] min-h-[705px] max-h-[705px] bg-[#F9F9FB]"
      blobs={
        <>
          <div className="absolute right-[-60px] top-[180px] w-[520px] h-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#ded8f4,rgba(222,216,244,0))]" />
          <div className="absolute left-[-40px] bottom-10 w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,#e3ddf6,rgba(227,221,246,0))]" />
        </>
      }
    >
      <div className="relative flex items-center gap-[22px] pt-11 px-11">
        <CreateCommunityIcon />
        <h3 className={HEADING_CLS}>Create your Community and get started</h3>
      </div>
      <div className="relative mt-11 ml-6">
        <CreateCommunityMockup />
      </div>
    </Card>
  );
}

// Card 2 — Add Your Members (480x705, solid #F9F9FB, mockup then heading)
function AddMembersCard() {
  return (
    <Card
      className="w-[480px] h-[705px] min-w-[480px] max-w-[480px] min-h-[705px] max-h-[705px] bg-[#F9F9FB]"
      blobs={<div className="absolute right-[-70px] bottom-[60px] w-[340px] h-[300px] rounded-full bg-[radial-gradient(circle,#dcd6f3,rgba(220,214,243,0))]" />}
    >
      <div className="relative mt-8 ml-6">
        <AddMembersMockup />
      </div>
      <div className="relative flex items-center gap-5 px-[34px] py-10">
        <AddMembersIcon />
        <h3 className={HEADING_CLS}>Add Your Members</h3>
      </div>
    </Card>
  );
}

// Card 3 — Create Payment Plan (594.5x727, purple->blue gradient 30%, heading then mockup)
function PaymentPlanCard() {
  return (
    <Card className={`w-[594.5px] h-[727px] min-w-[594.5px] max-w-[594.5px] min-h-[727px] max-h-[727px] ${GRADIENT_30}`}>
      <div className="relative flex items-center gap-5 pt-11 px-10">
        <PaymentPlanIcon />
        <h3 className={HEADING_CLS}>Create your payment plan</h3>
      </div>
      <div className="relative mt-[38px] ml-[17px]">
        <PaymentPlanMockup />
      </div>
    </Card>
  );
}

// Card 4 — Launch Your Community (594.5x727, purple->blue gradient 15%, mockup then heading)
function LaunchCard() {
  return (
    <Card className={`w-[594.5px] h-[727px] min-w-[594.5px] max-w-[594.5px] min-h-[727px] max-h-[727px] ${GRADIENT_15}`}>
      <div className="relative -ml-px">
        <LaunchMockup />
      </div>
      <div className="relative flex items-center gap-5 px-[34px] pt-11 pb-10">
        <LaunchIcon />
        <h3 className={HEADING_CLS}>Launch Your Community</h3>
      </div>
    </Card>
  );
}

export default function OrganizationHowItWorks() {
  const navigate = useNavigate();
  const onCtaClick = () => goToApp("/sign-up", navigate);

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

      {/* Desktop — 2x2 grid, 1213px content width matching Figma */}
      <div className="hidden md:block relative z-10 mx-auto px-6 max-w-[1261px]">
        <div className="flex gap-6">
          <CreateCommunityCard />
          <AddMembersCard />
        </div>
        <div className="flex gap-6 mt-6">
          <PaymentPlanCard />
          <LaunchCard />
        </div>
      </div>

      {/* Mobile — horizontal snap carousel, one full card per slide */}
      <div className="relative z-10 mt-2">
        <MobileCarousel>
          {[
            <Card key="1" className="w-80 h-[646px] min-w-80 max-w-80 min-h-[646px] max-h-[646px] bg-[#F9F9FB]">
              <div className="relative flex flex-col items-start gap-[14px] pt-7 px-6">
                <CreateCommunityIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-semibold text-[#24417f]">Create your Community and get started</h3>
              </div>
              <div className="mt-5 -ml-5">
                <ScaledMockup width={952} height={565} targetWidth={340}><CreateCommunityMockup /></ScaledMockup>
              </div>
            </Card>,
            <Card key="2" className="w-80 h-[560px] min-w-80 max-w-80 min-h-[560px] max-h-[560px] bg-[#F9F9FB]">
              <div className="mt-4 -ml-[10px]">
                <ScaledMockup width={561} height={440} targetWidth={330}><AddMembersMockup /></ScaledMockup>
              </div>
              <div className="relative flex flex-col items-start gap-[14px] pt-5 px-6 pb-7">
                <AddMembersIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-semibold text-[#24417f]">Add Your Members</h3>
              </div>
            </Card>,
            <Card key="3" className={`w-80 h-[620px] min-w-80 max-w-80 min-h-[620px] max-h-[620px] ${GRADIENT_30}`}>
              <div className="relative flex flex-col items-start gap-[14px] pt-7 px-6">
                <PaymentPlanIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-semibold text-[#24417f]">Create your payment plan</h3>
              </div>
              <div className="mt-5 -ml-2">
                <ScaledMockup width={561} height={544} targetWidth={330}><PaymentPlanMockup /></ScaledMockup>
              </div>
            </Card>,
            <Card key="4" className={`w-80 h-[600px] min-w-80 max-w-80 min-h-[600px] max-h-[600px] ${GRADIENT_15}`}>
              <div className="mt-5">
                <ScaledMockup width={535} height={544} targetWidth={320}><LaunchMockup /></ScaledMockup>
              </div>
              <div className="relative flex flex-col items-start gap-[14px] pt-3 px-6 pb-7">
                <LaunchIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-semibold text-[#24417f]">Launch Your Community</h3>
              </div>
            </Card>,
          ]}
        </MobileCarousel>
      </div>

      <div className="relative z-10 max-w-[880px] mx-auto px-6">
        <div className="flex justify-center mt-12 md:mt-20">
          <motion.button
            onClick={onCtaClick}
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
