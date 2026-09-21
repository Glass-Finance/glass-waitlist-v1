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
const featureAutomate = {
  src: cldUrl("glass/solution/automate", { width: 800 }),
  srcSet: cldSrcSet("glass/solution/automate", ILLUS_WIDTHS),
};
const featureRecover = {
  src: cldUrl("glass/solution/recover", { width: 800 }),
  srcSet: cldSrcSet("glass/solution/recover", ILLUS_WIDTHS),
};
const featureProof = {
  src: cldUrl("glass/solution/proof", { width: 800 }),
  srcSet: cldSrcSet("glass/solution/proof", ILLUS_WIDTHS),
};
const featureMonitor = {
  src: cldUrl("glass/solution/monitor", { width: 800 }),
  srcSet: cldSrcSet("glass/solution/monitor", ILLUS_WIDTHS),
};

// illustrationScale started at 65%, bumped to 75% — the org illustration
// source files have less built-in padding than the members' ones, so at
// the shared default (85%) they read visibly larger. Tune further per-card
// once rendered if needed.
const features = [
  {
    icon: icon2,
    title: "Automate Recurring Payments",
    desc: "Members link their cards once, and dues are deducted automatically.",
    illustration: featureAutomate,
    illustrationScale: "75%",
  },
  {
    icon: icon1,
    title: "Auto-recover failed payments",
    desc: "When a payment fails, Glass retries securely and sends gentle SMS reminders",
    illustration: featureRecover,
    illustrationScale: "75%",
  },
  {
    icon: icon3,
    title: "Generate Instant Proof",
    desc: "Auto-issued receipts and reconciled transaction logs.",
    illustration: featureProof,
    illustrationScale: "75%",
  },
  {
    icon: icon4,
    title: "Monitor Payments in Real Time",
    desc: "See who has paid, who hasn't, and your total balance instantly",
    illustration: featureMonitor,
    illustrationScale: "75%",
  },
];

export default function OurSolution() {
  return (
    <SolutionSection
      headline="Built-In Transparency for Every Transaction"
      subtext="Centralize payments, records, and visibility in one shared system, so your team stops chasing and starts leading."
      subtextMaxWidth={640}
      features={features}
    />
  );
}
