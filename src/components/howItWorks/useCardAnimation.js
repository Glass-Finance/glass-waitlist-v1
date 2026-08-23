import { useRef } from "react";
import { useInView } from "motion/react";

// Every mockup's micro-interaction is authored as CSS @keyframes (ported
// verbatim from the design handoff's timing/easing), but should only run
// once, starting when the card actually scrolls into view -- not loop
// forever like the design reference prototype does. `animation-iteration-
// count: 1` handles the "don't loop" half; this hook handles the "start on
// view" half by holding the animation paused until then.
export default function useCardAnimation(amount = 0.4) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  return { ref, play: inView ? "running" : "paused" };
}
