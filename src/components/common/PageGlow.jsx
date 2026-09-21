import { cldUrl } from "../../lib/cloudinary";

const solutionGlow = cldUrl("glass/solution-glow", { width: 1600, dpr: 2 });

export default function PageGlow() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${solutionGlow})` }}
      aria-hidden="true"
    />
  );
}
