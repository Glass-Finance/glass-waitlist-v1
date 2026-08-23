// Every mockup screenshot in the Figma reference sits inset inside a
// translucent "film" backing layer -- a slightly smaller-radius rounded
// rectangle in a light glassy tint, padded around the actual white
// mockup card, giving it a matted/framed look before it hits the card's
// own gradient background. Radius here is intentionally a notch smaller
// than the mockup cards' own radius (12px vs their 14-16px).
export default function MockupFrame({ children, className = "", padding = "p-4" }) {
  return (
    <div className={`rounded-[12px] bg-white/40 ${padding} ${className}`}>
      {children}
    </div>
  );
}
