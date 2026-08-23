import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToApp } from "../../utils/deviceRedirect";
import CTASection from "../common/CTASection";

export default function MembersCTA() {
  const navigate = useNavigate();
  // See MembersHero.jsx's identical isRedirecting state -- goToApp's
  // cross-origin window.location.href hop leaves a brief gap with no
  // feedback otherwise.
  const [isRedirecting, setIsRedirecting] = useState(false);

  function handleJoin() {
    setIsRedirecting(true);
    goToApp("/member/join", navigate);
  }

  return (
    <CTASection
      headline="Bring clarity to your community finances."
      subtext="Pay dues, track your history, and get receipts — all in one place."
      buttonLabel={isRedirecting ? "Redirecting…" : "Join A Community"}
      buttonHoverVariant="lift"
      onButtonClick={handleJoin}
      buttonDisabled={isRedirecting}
    />
  );
}
