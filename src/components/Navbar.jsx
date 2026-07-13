import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Search, Menu, X } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { appUrl } from "../utils/appUrl";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const viewMode =
    location.pathname === "/members" ? "members" : "organizations";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewModeChange = (mode) => {
    if (mode === "organizations") navigate("/");
    else if (mode === "members") navigate("/members");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 min-h-[68px] transition-all duration-300 ${
        scrolled
          ? "bg-[#07091F]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      {/* Toggle pill mobile */}
      <div className="lg:hidden bg-white/[0.07] border border-white/[0.1] flex">
        <button
          onClick={() => {
            handleViewModeChange("organizations");
            setMenuOpen(false);
          }}
          className={`flex-1 px-4 py-2 rounded-md text-[13px] font-semibold transition-all ${
            viewMode === "organizations"
              ? "bg-[#808080] text-white"
              : "text-white/55"
          }`}
        >
          Organizations
        </button>
        <button
          onClick={() => {
            handleViewModeChange("members");
            setMenuOpen(false);
          }}
          className={`flex-1 px-4 py-3 rounded-md text-[13px] font-semibold transition-all ${
            viewMode === "members" ? "bg-[#808080] text-white" : "text-white/55"
          }`}
        >
          Members
        </button>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 lg:px-12 h-full flex items-center justify-between gap-6">
        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline shrink-0"
        >
          <img src="/Glass.png" alt="Glass" className="w-8 h-8" />
          <span className="font-bold text-[17px] text-white tracking-tight">
            Glass
          </span>
        </Link>

        {/* ── Toggle Pill (desktop) ── */}
        <div className="hidden lg:flex bg-white/[0.07] border border-white/[0.1] rounded-full p-[3px] items-center gap-0.5 backdrop-blur-sm">
          <button
            onClick={() => handleViewModeChange("organizations")}
            className={`px-4 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-200 ${
              viewMode === "organizations"
                ? "bg-white text-[#0B0F2E] shadow-sm"
                : "text-white/55 hover:text-white/80"
            }`}
          >
            Organizations
          </button>
          <button
            onClick={() => handleViewModeChange("members")}
            className={`px-4 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-200 ${
              viewMode === "members"
                ? "bg-white text-[#0B0F2E] shadow-sm"
                : "text-white/55 hover:text-white/80"
            }`}
          >
            Members
          </button>
        </div>

        {/* ── Nav Links (desktop) ── */}
        {/* <div className="hidden lg:flex items-center gap-7">
          <button className="flex items-center gap-1 text-[13.5px] text-white hover:text-white/55 transition-colors font-medium">
            Use Cases <ChevronDown className="w-3.5 h-3.5 mt-px" />
          </button>
          <button className="text-[13.5px] text-white hover:text-white/55 transition-colors font-medium">
            Contact Us
          </button>
          <button
            onClick={() => navigate("/ambassadors")}
            className="text-[13.5px] text-white hover:text-white/55 transition-colors font-medium"
          >
            Ambassadors
          </button>
        </div> */}

        {/* ── CTA ── */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {viewMode === "organizations" ? (
            <>
              {/* Members already land on a "sign in first" CTA
                  (Find My Community, below) -- this is only needed for the
                  organizations side, which otherwise has no path back for a
                  returning admin, only the sign-up-flavored Get Started. */}
              <a
                href={appUrl("/sign-in")}
                className="text-[13.5px] text-white/80 hover:text-white transition-colors font-semibold no-underline"
              >
                Sign In
              </a>
              <a
                href={appUrl("/sign-up")}
                className="flex items-center gap-1.5 bg-white text-[#0B0F2E] px-5 py-2.5 rounded-full text-[13.5px] font-bold transition-all hover:opacity-90 hover:-translate-y-px shadow-lg shadow-black/20 no-underline"
              >
                Get Started
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </>
          ) : (
            <a
              href={appUrl("/member/app-sign-in?return=/member/communities/search")}
              className="flex items-center gap-1.5 bg-white text-[#0B0F2E] px-5 py-2.5 rounded-full text-[13.5px] font-bold transition-all hover:opacity-90 hover:-translate-y-px shadow-lg shadow-black/20 no-underline"
            >
              Find My Community
              <Search className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
        >
          {menuOpen ? <X className="w8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0B0F2E]/98 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="px-6 py-5 space-y-4">
            <div className="space-y-1 pt-1">
              {["Use Cases", "Contact Us", "Ambassadors"].map((item) => (
                <button
                  key={item}
                  className="flex items-center justify-between w-full py-3 text-[14px] font-medium text-white/60 hover:text-white transition-colors border-b border-white/[0.05]"
                >
                  {item}
                  {item === "Use Cases" && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </div>

            {viewMode === "organizations" ? (
              <>
                <a
                  href={appUrl("/sign-up")}
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-[#0B0F2E] py-3 rounded-full text-[14px] font-bold no-underline"
                >
                  Get Started <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href={appUrl("/sign-in")}
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center py-2 text-[13.5px] font-semibold text-white/70 hover:text-white transition-colors no-underline"
                >
                  Already have an account? Sign In
                </a>
              </>
            ) : (
              <a
                href={appUrl("/member/app-sign-in?return=/member/communities/search")}
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-white text-[#0B0F2E] py-3 rounded-full text-[14px] font-bold no-underline"
              >
                Find My Community <Search className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
