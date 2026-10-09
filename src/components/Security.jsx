import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import SecurityPhoneDemo from "./members/SecurityPhoneDemo";

const claims = [
  {
    num: "01",
    title: "Transparency",
    desc: "Every fee is shown before you pay. Your community always receives the full due.",
  },
  {
    num: "02",
    title: "Data Rights",
    desc: "Your rights: access, correction, and deletion are set out in our Privacy Policy.",
  },
  {
    num: "03",
    title: "Encryption",
    desc: "Bank details, identity documents, and MFA secrets are AES-256 encrypted at rest; everything is TLS-encrypted in transit.",
  },
];

const STEP_INTERVAL_MS = 4000;

export default function Security() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = setTimeout(
      () => setActiveStep((current) => (current + 1) % claims.length),
      STEP_INTERVAL_MS,
    );
    return () => clearTimeout(timer);
  }, [activeStep, reduceMotion]);

  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28" id="security">
      <div className="relative z-10 max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center border border-[#1C2B8A]/25 text-[#1C2B8A] text-[13px] font-medium px-5 py-2 rounded-full"
              style={{ marginBottom: "clamp(16px, 4vw, 28px)" }}
            >
              Security &amp; Trust
            </motion.span>

            <motion.h2
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(32px,5vw,58px)] font-bold text-[#0f1d6e] leading-[1.08] tracking-tight mb-8 lg:mb-10"
            >
              Security you can verify,
              <br /> not just trust.
            </motion.h2>

            <div>
              {claims.map((claim, i) => {
                const isActive = i === activeStep;

                return (
                  <div key={claim.num} className="relative">
                    <button
                      type="button"
                      onClick={() => setActiveStep(i)}
                      aria-current={isActive ? "step" : undefined}
                      className="group block w-full text-left py-4 md:py-5"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`inline-flex items-center justify-center min-w-[34px] h-[26px] px-1.5 rounded-md text-[12px] font-semibold tracking-wide transition-colors duration-300 ${
                            isActive
                              ? "bg-[#1C2B8A] text-white"
                              : "bg-[#EFEFF1] text-[#9AA0AE] group-hover:text-[#6B7280]"
                          }`}
                        >
                          {claim.num}
                        </span>
                        <span
                          className={`text-[17px] md:text-[18px] font-semibold transition-colors duration-300 ${
                            isActive
                              ? "text-[#1C2B8A]"
                              : "text-[#9AA0AE] group-hover:text-[#6B7280]"
                          }`}
                        >
                          {claim.title}
                        </span>
                      </span>
                    </button>

                    {isActive ? (
                      <div className="pb-7">
                        <p className="ml-[46px] max-w-[520px] text-[15px] leading-relaxed text-[#00000099]">
                          {claim.desc}
                        </p>

                        <div className="lg:hidden mt-5 mx-auto w-full max-w-[300px] h-[330px] overflow-hidden rounded-b-[28px]">
                          <SecurityPhoneDemo activeStep={activeStep} maxWidth={300} />
                        </div>
                      </div>
                    ) : null}

                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-[#E6E8F0]"
                    />
                    {isActive && !reduceMotion ? (
                      <motion.span
                        key={`fill-${activeStep}`}
                        aria-hidden="true"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: STEP_INTERVAL_MS / 1000, ease: "linear" }}
                        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#1C2B8A]"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <SecurityPhoneDemo activeStep={activeStep} maxWidth={300} />
          </div>
        </div>

        {/* ── Bottom banner ── */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <div className="bg-[#CCDBFF66] rounded-2xl px-8 py-6 flex items-center justify-between gap-6 flex-wrap">
            <div>
              <h4 className="text-[15px] font-bold text-[#0f1d6e] mb-1">
                Why the Nigerian Tribune Is Talking About Glass
              </h4>
              <p className="text-[14px] text-[#9099b2]">
                See how Team Glass took the ₦1,000,000 grand prize at the 5th Babcock Innovation
                Challenge.
              </p>
            </div>

            <a
              href="https://tribuneonlineng.com/team-glass-shines-as-winner-of-5th-babcock-innovation-challenge/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center justify-center rounded-g-1 border border-brand-navy bg-transparent px-6 py-3 text-[14px] font-medium text-brand-navy no-underline transition-colors hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Check It Out
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
