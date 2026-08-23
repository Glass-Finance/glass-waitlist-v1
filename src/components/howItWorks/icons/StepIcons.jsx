// Small CSS-drawn icons matching the Figma reference exactly (hand-built
// from divs/borders, not image assets, so they stay crisp at any scale).
// Each exports the full 70x70 circle badge, ready to drop into a card.

const CIRCLE = "shrink-0 w-[70px] h-[70px] rounded-full border border-[#e4e5f0] grid place-items-center bg-[#fbfbfe]";

export function CreateCommunityIcon() {
  return (
    <div className={CIRCLE}>
      <div className="relative w-[30px] h-[20px]">
        <div className="absolute left-[9px] top-0 w-[12px] h-[12px] border-[1.8px] border-[#24417f] rounded-full" />
        <div className="absolute left-0 top-[4px] w-[9px] h-[9px] border-[1.8px] border-[#24417f] rounded-full" />
        <div className="absolute right-0 top-[4px] w-[9px] h-[9px] border-[1.8px] border-[#24417f] rounded-full" />
      </div>
    </div>
  );
}

export function AddMembersIcon() {
  return (
    <div className={CIRCLE}>
      <div className="flex items-center gap-1">
        <div className="w-[12px] h-[12px] border-[1.8px] border-[#24417f] rounded-full" />
        <div className="flex flex-col gap-[3px]">
          <div className="w-[12px] h-[1.8px] bg-[#24417f]" />
          <div className="w-[12px] h-[1.8px] bg-[#24417f]" />
          <div className="w-[8px] h-[1.8px] bg-[#24417f]" />
        </div>
      </div>
    </div>
  );
}

export function PaymentPlanIcon() {
  return (
    <div className={CIRCLE}>
      <div className="w-[26px] h-[26px] rounded-full border-[1.8px] border-[#24417f] grid place-items-center text-[14px] font-semibold text-[#24417f]">
        $
      </div>
    </div>
  );
}

export function LaunchIcon() {
  return (
    <div className={CIRCLE}>
      <span className="text-[22px] text-[#24417f]">↗</span>
    </div>
  );
}

export function SignupIcon() {
  return (
    <div className={CIRCLE}>
      <div className="relative w-[26px] h-[24px]">
        <div className="absolute left-[7px] top-0 w-[12px] h-[12px] border-[1.8px] border-[#24417f] rounded-full" />
        <div className="absolute left-[2px] bottom-0 w-[22px] h-[9px] border-[1.8px] border-b-0 border-[#24417f] rounded-t-[12px]" />
      </div>
    </div>
  );
}

export function AcceptInviteIcon() {
  return (
    <div className={CIRCLE}>
      <div className="relative w-[28px] h-[24px]">
        <div className="absolute left-[2px] top-0 w-[12px] h-[12px] border-[1.8px] border-[#24417f] rounded-full" />
        <div className="absolute left-0 bottom-0 w-[18px] h-[9px] border-[1.8px] border-b-0 border-[#24417f] rounded-t-[10px]" />
        <div className="absolute right-0 top-[5px] text-[11px] font-bold text-[#24417f] leading-none">+</div>
      </div>
    </div>
  );
}

export function AutopayIcon() {
  return (
    <div className={CIRCLE}>
      <span className="text-[22px] text-[#24417f]">↻</span>
    </div>
  );
}
