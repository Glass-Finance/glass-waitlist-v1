import solutionGlow from "../../assets/solution-glow.webp";

// One glow for the whole landing page instead of every section carrying its
// own copy. Fixed positioning keeps it glued to the same spot on screen for
// the entire scroll (Problem through WhyGlass) rather than scrolling away
// once you pass wherever it visually sits in the page -- every section
// between Hero and Footer needs a transparent background (no bg-white/
// bg-[#F7F8FC] of its own) for this to actually show through instead of
// being painted over.
export default function PageGlow() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${solutionGlow})` }}
      aria-hidden="true"
    />
  );
}
