import { cldUrl, cldSrcSet } from "../../lib/cloudinary";
import SolutionSection from "../common/SolutionSection";

const ICON_WIDTHS = [50, 100, 150];
const ILLUS_WIDTHS = [400, 800, 1200, 1600];

const icon1 = {
  src: cldUrl("glass/icon/frame1", { width: 100 }),
  srcSet: cldSrcSet("glass/icon/frame1", ICON_WIDTHS),
};
const icon2 = {
  src: cldUrl("glass/icon/frame2", { width: 100 }),
  srcSet: cldSrcSet("glass/icon/frame2", ICON_WIDTHS),
};
const icon3 = {
  src: cldUrl("glass/icon/frame3", { width: 100 }),
  srcSet: cldSrcSet("glass/icon/frame3", ICON_WIDTHS),
};
const icon4 = {
  src: cldUrl("glass/icon/frame4", { width: 100 }),
  srcSet: cldSrcSet("glass/icon/frame4", ICON_WIDTHS),
};
const featurePayment = {
  src: cldUrl("glass/solution/payment", { width: 800 }),
  srcSet: cldSrcSet("glass/solution/payment", ILLUS_WIDTHS),
};
const featureReminder = {
  src: cldUrl("glass/solution/reminder", { width: 800 }),
  srcSet: cldSrcSet("glass/solution/reminder", ILLUS_WIDTHS),
};
const featureInstant = {
  src: cldUrl("glass/solution/instant", { width: 800 }),
  srcSet: cldSrcSet("glass/solution/instant", ILLUS_WIDTHS),
};
const featureFlexible = {
  src: cldUrl("glass/solution/flexible", { width: 800 }),
  srcSet: cldSrcSet("glass/solution/flexible", ILLUS_WIDTHS),
};

const features = [
  {
    icon: icon2,
    title: "One-Click Payments",
    desc: "Pay your dues in seconds from any device. No more manual transfers.",
    illustration: featurePayment,
  },
  {
    icon: icon1,
    title: "Smart Reminders",
    desc: "Get reminders via SMS, WhatsApp, and Email so you never miss a deadline.",
    illustration: featureReminder,
  },
  {
    icon: icon3,
    title: "Generate Instant Proof",
    desc: "View your full history and download official receipts immediately after paying.",
    illustration: featureInstant,
  },
  {
    icon: icon4,
    title: "Flexible Options",
    desc: "Pay exactly how you want — via Card, Bank Transfer, or USSD.",
    illustration: featureFlexible,
  },
];

export default function MembersSolution() {
  return (
    <SolutionSection
      headline="Everything You Need to Pay with Confidence"
      subtext="One tap to pay, instant receipts, and a full history — so you never have to dig through chats again."
      subtextMaxWidth={600}
      features={features}
    />
  );
}
