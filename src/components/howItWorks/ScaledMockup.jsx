// Mockups are built at their fixed Figma pixel size (528-952px wide) --
// far wider than a phone screen. This scales one down uniformly to fit a
// target width for the mobile carousel, without needing a second,
// separately-authored mobile version of each mockup. width/height/scale
// are genuinely computed per-caller at runtime (not a fixed enumerable
// set), so they stay inline style; overflow/position don't vary and are
// plain Tailwind classes.
export default function ScaledMockup({ width, height, targetWidth, children }) {
  const scale = targetWidth / width;
  return (
    <div className="relative overflow-hidden" style={{ width: targetWidth, height: height * scale }}>
      <div style={{ width, height, transform: `scale(${scale})`, transformOrigin: "top left" }}>{children}</div>
    </div>
  );
}
