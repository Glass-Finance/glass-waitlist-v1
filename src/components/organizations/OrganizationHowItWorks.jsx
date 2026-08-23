import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { goToApp } from "../../utils/deviceRedirect";
import Card from "../howItWorks/Card";
import MockupFrame from "../howItWorks/MockupFrame";
import ScaledMockup from "../howItWorks/ScaledMockup";
import MobileCarousel from "../howItWorks/MobileCarousel";
import CreateCommunityMockup from "../howItWorks/mockups/CreateCommunityMockup";
import AddMembersMockup from "../howItWorks/mockups/AddMembersMockup";
import PaymentPlanMockup from "../howItWorks/mockups/PaymentPlanMockup";
import LaunchMockup from "../howItWorks/mockups/LaunchMockup";
import { CreateCommunityIcon, AddMembersIcon, PaymentPlanIcon, LaunchIcon } from "../howItWorks/icons/StepIcons";

// font-medium, not -semibold -- the Figma reference weight is noticeably
// lighter than the section's main heading.
const HEADING_CLS = "m-0 text-[38px] leading-[1.15] font-medium text-[#24417f] tracking-[-0.01em]";
const GRADIENT_30 = "bg-[conic-gradient(from_155deg,#6B2FB5_0%,rgba(107,47,181,0)_30%,#072EAB_100%)]";
const GRADIENT_BOLD = "bg-[conic-gradient(from_155deg,#6B2FB5_0%,rgba(107,47,181,0)_55%,#072EAB_100%)]";
// Card 1/2 use a soft gradient, not a flat fill -- confirmed against the
// actual Figma export (uploads/Frame 2121454425), which shows a subtle
// lighter-to-lavender sweep, not solid #F9F9FB.
const BG_CARD1 = "bg-[linear-gradient(155deg,#fcfcfe_0%,#f3f3fa_60%,#eeeef8_100%)]";
const BG_CARD2 = "bg-[linear-gradient(200deg,#efedf9_0%,#f6f6fb_45%,#f4f4fa_100%)]";

// Card 1 — Create Community (709x705, heading then mockup)
function CreateCommunityCard() {
  return (
    <Card className={`w-[709px] h-[705px] min-w-[709px] max-w-[709px] min-h-[705px] max-h-[705px] ${BG_CARD1}`}>
      <div className="relative flex items-center gap-[22px] pt-11 px-11">
        <CreateCommunityIcon />
        <h3 className={HEADING_CLS}>Create your Community and get started</h3>
      </div>
      <div className="relative mt-8 ml-6">
        <MockupFrame padding="p-3">
          <CreateCommunityMockup />
        </MockupFrame>
      </div>
    </Card>
  );
}

// Card 2 — Add Your Members (480x705, mockup then heading)
function AddMembersCard() {
  return (
    <Card className={`w-[480px] h-[705px] min-w-[480px] max-w-[480px] min-h-[705px] max-h-[705px] ${BG_CARD2}`}>
      <div className="relative mt-8 ml-6">
        <MockupFrame>
          <AddMembersMockup />
        </MockupFrame>
      </div>
      <div className="relative flex items-center gap-5 px-[34px] py-10">
        <AddMembersIcon />
        <h3 className={HEADING_CLS}>Add Your Members</h3>
      </div>
    </Card>
  );
}

// Card 3 — Create Payment Plan (594.5x727, heading then mockup pinned to
// the bottom of the card -- the Figma reference leaves the gradient
// visible above the form, not butted up against the heading.
function PaymentPlanCard() {
  return (
    <Card className={`w-[594.5px] h-[727px] min-w-[594.5px] max-w-[594.5px] min-h-[727px] max-h-[727px] ${GRADIENT_30} flex flex-col`}>
      <div className="relative flex items-center gap-5 pt-11 px-10">
        <PaymentPlanIcon />
        <h3 className={HEADING_CLS}>Create your payment plan</h3>
      </div>
      <div className="relative mt-auto ml-[17px]">
        <MockupFrame>
          <PaymentPlanMockup />
        </MockupFrame>
      </div>
    </Card>
  );
}

// Card 4 — Launch Your Community (594.5x727, mockup then heading)
function LaunchCard() {
  return (
    <Card className={`w-[594.5px] h-[727px] min-w-[594.5px] max-w-[594.5px] min-h-[727px] max-h-[727px] ${GRADIENT_BOLD}`}>
      <div className="relative -ml-px">
        <MockupFrame>
          <LaunchMockup />
        </MockupFrame>
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
            <Card key="1" className={`w-80 h-[646px] min-w-80 max-w-80 min-h-[646px] max-h-[646px] ${BG_CARD1}`}>
              <div className="relative flex flex-col items-start gap-[14px] pt-7 px-6">
                <CreateCommunityIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-medium text-[#24417f]">Create your Community and get started</h3>
              </div>
              <div className="mt-5 -ml-5">
                <MockupFrame>
                  <ScaledMockup width={952} height={565} targetWidth={310}><CreateCommunityMockup /></ScaledMockup>
                </MockupFrame>
              </div>
            </Card>,
            <Card key="2" className={`w-80 h-[560px] min-w-80 max-w-80 min-h-[560px] max-h-[560px] ${BG_CARD2}`}>
              <div className="mt-4 -ml-[10px]">
                <MockupFrame>
                  <ScaledMockup width={561} height={440} targetWidth={310}><AddMembersMockup /></ScaledMockup>
                </MockupFrame>
              </div>
              <div className="relative flex flex-col items-start gap-[14px] pt-5 px-6 pb-7">
                <AddMembersIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-medium text-[#24417f]">Add Your Members</h3>
              </div>
            </Card>,
            <Card key="3" className={`w-80 h-[620px] min-w-80 max-w-80 min-h-[620px] max-h-[620px] ${GRADIENT_30} flex flex-col`}>
              <div className="relative flex flex-col items-start gap-[14px] pt-7 px-6">
                <PaymentPlanIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-medium text-[#24417f]">Create your payment plan</h3>
              </div>
              <div className="mt-auto -ml-2">
                <MockupFrame>
                  <ScaledMockup width={561} height={544} targetWidth={310}><PaymentPlanMockup /></ScaledMockup>
                </MockupFrame>
              </div>
            </Card>,
            <Card key="4" className={`w-80 h-[600px] min-w-80 max-w-80 min-h-[600px] max-h-[600px] ${GRADIENT_BOLD}`}>
              <div className="mt-5">
                <MockupFrame>
                  <ScaledMockup width={535} height={544} targetWidth={300}><LaunchMockup /></ScaledMockup>
                </MockupFrame>
              </div>
              <div className="relative flex flex-col items-start gap-[14px] pt-3 px-6 pb-7">
                <LaunchIcon />
                <h3 className="m-0 text-2xl leading-[1.2] font-medium text-[#24417f]">Launch Your Community</h3>
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
