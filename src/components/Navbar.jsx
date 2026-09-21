import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { goToApp } from "../utils/deviceRedirect";
import { motion, useScroll, useSpring } from "motion/react";
import { cldUrl, cldSrcSet } from "../lib/cloudinary";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

// Same Cloudinary asset used by BrandedSpinner/Footer/ErrorBoundary/
// LegalPageLayout — was previously a separate hand-coded inline <svg> here,
// so this brings the navbar logo in line with the rest of the app instead
// of having two different renderings of the same mark.
const glassLogo = {
  src: cldUrl("glass/Glass", { width: 30 }),
  srcSet: cldSrcSet("glass/Glass", [30, 60, 90]),
};

// Single source of truth for the Organizations/Members switch — previously
// this existed as two separately-styled implementations (a gray rounded-md
// version for mobile, a white/20 rounded-full version for desktop), which
// is why it read as a bolted-on, mismatched element rather than part of
// one cohesive nav. `compact` only changes sizing, never the visual style.
function ViewToggle({ viewMode, onChange, compact = false }) {
  const base = "rounded-full font-medium transition-all duration-200 cursor-pointer";
  const size = compact ? "px-3 py-1.5 text-[12px]" : "px-[13px] py-[9px] text-[13.5px]";
  // Selected state uses a flat white fill, unselected a soft white/45 —
  // reverted to the original (non-gradient) treatment per feedback.
  const selected = "bg-white/20 text-white shadow-sm";
  const unselected = "text-white/45 hover:text-white/65";

  return (
    // No backdrop-blur here either — the toggle sits inside the transparent
    // pill, so blurring it would re-introduce the frosted patch the pill
    // itself no longer has.
    <div className="inline-flex items-center gap-0.5 bg-white/10 border border-white/[0.15] rounded-full p-[2px]">
      <button
        onClick={() => onChange("organizations")}
        className={`${base} ${size} ${viewMode === "organizations" ? selected : unselected}`}
      >
        Organizations
      </button>
      <button
        onClick={() => onChange("members")}
        className={`${base} ${size} ${viewMode === "members" ? selected : unselected}`}
      >
        Members
      </button>
    </div>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const viewMode = location.pathname === "/members" ? "members" : "organizations";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewModeChange = (mode) => {
    setMenuOpen(false);
    if (mode === "organizations") navigate("/");
    else if (mode === "members") navigate("/members");
  };

  return (
    <>
      {/* Scroll progress accent — sits above the floating pill, full width */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0% 50%",
          background: "linear-gradient(90deg, #002FA7 0%, #4f46e5 60%, #7c3aed 100%)",
          height: 3,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          pointerEvents: "none",
        }}
      />

      <nav className="fixed top-2 sm:top-2.5 left-0 right-0 z-50">
        {/* ── Floating pill shell — one unified container at every breakpoint,
            inset from the screen edges, no border, and no backdrop blur at
            any scroll position. The pill stays see-through so content
            passing underneath reads as itself rather than as a frosted
            smear; scrolling only deepens the tint slightly (black/20 →
            black/45) plus a soft shadow, which is enough to keep the white
            nav text legible over lighter sections without hiding what's
            behind it. ── */}
        <div
          className={`mx-3 sm:mx-6 lg:mx-auto lg:w-fit max-w-[1280px] rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
              : "bg-transparent shadow-none"
          }`}
        >
          <div className="flex items-center justify-between lg:justify-start gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-5 lg:px-6 h-[58px] sm:h-[64px]">
            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 no-underline shrink-0">
              <img
                src={glassLogo.src}
                srcSet={glassLogo.srcSet}
                sizes="30px"
                alt="Glass"
                width={30}
                height={30}
                className="shrink-0 object-contain"
              />
              <span className="font-bold text-[16px] sm:text-[17px] text-white tracking-tight">
                Glass
              </span>
            </Link>

            {/* ── lg+: toggle, links, CTAs — separate flex children so the
                row's own justify-between spacing applies between them,
                instead of a fixed gap value cramming them together. ── */}
            <div className="hidden lg:block mx-10">
              <ViewToggle viewMode={viewMode} onChange={handleViewModeChange} />
            </div>

            <div className="hidden lg:flex items-center gap-7">
              <button
                onClick={() => scrollTo("use-cases")}
                className="text-[13.5px] text-white hover:text-white/55 transition-colors font-medium cursor-pointer"
              >
                Use Cases
              </button>
              <button
                onClick={() => scrollTo("how-it-works")}
                className="text-[13.5px] text-white hover:text-white/55 transition-colors font-medium cursor-pointer"
              >
                How It Works
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {viewMode === "organizations" ? (
                <>
                  <button
                    onClick={() => goToApp("/sign-in", navigate)}
                    className="text-[13.5px] text-white/85 hover:text-white transition-colors font-medium px-5 py-2.5 rounded-full border border-white/[0.15] hover:border-white/[0.25] hover:bg-white/[0.05] cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => goToApp("/sign-up", navigate)}
                    className="flex items-center gap-1.5 bg-white text-[#0B0F2E] px-5 py-2.5 rounded-full text-[13.5px] font-bold transition-all hover:opacity-90 hover:-translate-y-px shadow-lg shadow-black/20 cursor-pointer"
                  >
                    Get Started Free
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => goToApp("/sign-in", navigate)}
                  className="flex items-center gap-1.5 bg-white text-[#0B0F2E] px-5 py-2.5 rounded-full text-[13.5px] font-bold transition-all hover:opacity-90 hover:-translate-y-px shadow-lg shadow-black/20 cursor-pointer"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* ── < lg: compact toggle (tablet only, ≥640px) + circular
                hamburger. Below 640px there simply isn't room for logo +
                toggle text + a hamburger button without crowding or
                wrapping, so the toggle moves into the dropdown menu
                instead — see below. ── */}
            <div className="flex lg:hidden items-center gap-2.5">
              <div className="hidden sm:block">
                <ViewToggle viewMode={viewMode} onChange={handleViewModeChange} compact />
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/[0.15] text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer shrink-0"
              >
                {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile/tablet dropdown — a floating card matching the same
            inset margins as the pill above, not a full-bleed rectangle,
            so open/closed states read as one component. This one keeps its
            blur: it's an opened panel covering the page (same as
            gdgbabcock's), not the resting nav surface. ── */}
        {menuOpen && (
          <div className="lg:hidden mx-3 sm:mx-6 mt-2 rounded-[20px] bg-black/90 shadow-2xl overflow-hidden">
            <div className="px-6 py-5 space-y-4">
              {/* Toggle lives here on true mobile (<640px) where the header
                  has no room for it inline — inline-flex on ViewToggle
                  keeps it sized to content, centered here instead of
                  stretching edge-to-edge. */}
              <div className="sm:hidden pb-1 flex justify-center">
                <ViewToggle viewMode={viewMode} onChange={handleViewModeChange} compact />
              </div>

              <div className="space-y-1 pt-1">
                {[
                  { label: "Use Cases", id: "use-cases" },
                  { label: "How It Works", id: "how-it-works" },
                ].map(({ label, id }) => (
                  <button
                    key={label}
                    onClick={() => {
                      scrollTo(id);
                      setMenuOpen(false);
                    }}
                    className="flex items-center justify-between w-full py-3 text-[14px] font-medium text-white/60 hover:text-white transition-colors border-b border-white/[0.05]"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {viewMode === "organizations" ? (
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      goToApp("/sign-up", navigate);
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-white text-[#0B0F2E] py-3 rounded-full text-[14px] font-bold cursor-pointer"
                  >
                    Get Started Free <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      goToApp("/sign-in", navigate);
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 text-white/80 py-2.5 rounded-full border border-white/[0.15] text-[14px] font-medium cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    goToApp("/sign-in", navigate);
                    setMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-white text-[#0B0F2E] py-3 rounded-full text-[14px] font-bold cursor-pointer"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
