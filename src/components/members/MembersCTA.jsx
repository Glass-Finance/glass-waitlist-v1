import { useNavigate } from "react-router-dom";
import { goToApp } from "../../utils/deviceRedirect";
import CTASection from "../common/CTASection";

export default function MembersCTA() {
  const navigate = useNavigate();

  function handleJoin() {
    goToApp("/member/join", navigate);
  }

  return (
    <CTASection
      headline="Bring clarity to your community finances."
      subtext="Pay dues, track your history, and get receipts — all in one place."
      buttonLabel="Join A Community"
      buttonHoverVariant="lift"
      onButtonClick={handleJoin}
    />
  );
}
