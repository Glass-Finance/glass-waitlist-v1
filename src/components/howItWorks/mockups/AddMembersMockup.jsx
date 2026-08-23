import useCardAnimation from "../useCardAnimation";

// 561x440 per Figma Dev Mode. Choreography ported from the design
// handoff's c2* keyframes (file chip drags into the dropzone, dropzone
// border highlights, the three sample rows fade in) -- already settles
// naturally at its end state, so no remapping needed beyond a fixed
// duration and a single playthrough.
export default function AddMembersMockup() {
  const { ref, play } = useCardAnimation();
  const on = play === "running";
  const rowCls = "grid grid-cols-[1fr_1fr_1.5fr_1.2fr_1fr_.8fr] text-[9.5px] text-[#2b2f42] px-[10px] py-[7px] gap-2 whitespace-nowrap border-t border-[#f2f3f8]";

  return (
    <div ref={ref} className="w-[561px]">
      <style>{`
        @keyframes hc2Chip {
          0%, 5% { opacity: 0; transform: translate(300px, -128px) scale(.92) }
          12%, 18% { opacity: 1; transform: translate(300px, -128px) scale(1) }
          34%, 44% { opacity: 1; transform: translate(88px, 26px) scale(1) }
          52%, 100% { opacity: 0; transform: translate(88px, 26px) scale(.96) }
        }
        @keyframes hc2Drop {
          0%, 22% { border-color: #e2e4ee; background: #fbfbfe }
          30%, 48% { border-color: #0b2fa8; background: rgba(11,47,168,.05) }
          56%, 100% { border-color: #e2e4ee; background: #fbfbfe }
        }
        @keyframes hc2R1 { 0%, 56% { opacity: 0; transform: translateY(8px) } 63%, 100% { opacity: 1; transform: none } }
        @keyframes hc2R2 { 0%, 64% { opacity: 0; transform: translateY(8px) } 71%, 100% { opacity: 1; transform: none } }
        @keyframes hc2R3 { 0%, 72% { opacity: 0; transform: translateY(8px) } 79%, 100% { opacity: 1; transform: none } }
      `}</style>

      <div className="bg-[#fdfdff] border border-[#edeef6] rounded-[14px] shadow-[0_20px_50px_rgba(35,49,105,.10)] px-[18px] pt-[16px] pb-[18px]">
        <div className="text-[13px] font-bold text-[#0d0f1a]">Prefer To Add Members Directly?</div>
        <div className="flex gap-4 mt-3 border-b border-[#eeeff5]">
          <div className="text-[11.5px] font-semibold text-[#1e46b8] pb-[7px] border-b-2 border-[#1e46b8]">Upload</div>
          <div className="text-[11.5px] text-[#8b90a4] pb-[7px]">Manual</div>
        </div>
        <div className="flex justify-between items-baseline mt-[14px]">
          <div className="text-[11.5px] font-bold text-[#0d0f1a]">Upload a CSV</div>
          <div className="text-[10.5px] text-[#1e46b8] font-semibold">↓ Download sample</div>
        </div>
        <div className="mt-[10px] border border-[#eeeff5] rounded-[8px] overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1.5fr_1.2fr_1fr_.8fr] bg-[#f8f8fc] text-[9.5px] text-[#8b90a4] px-[10px] py-[7px] gap-2 whitespace-nowrap">
            <span>First Name</span><span>Last Name</span><span>Email Address</span><span>Phone Number</span><span>Member ID</span><span>Role</span>
          </div>
          <div className={`${rowCls} ${on ? "animate-[hc2R1_5s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`}>
            <span>Fatimah</span><span>Yahya</span><span>Fati***ya@**.com</span><span>0812990293</span><span>A23434</span><span>Student</span>
          </div>
          <div className={`${rowCls} ${on ? "animate-[hc2R2_5s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`}>
            <span>Habeeb</span><span>Abayomi</span><span>Habe***mi@**.com</span><span>0803114552</span><span>A23511</span><span>Alumni</span>
          </div>
          <div className={`${rowCls} ${on ? "animate-[hc2R3_5s_cubic-bezier(.25,.8,.25,1)_1_both]" : ""}`}>
            <span>Chinedu</span><span>Okafor</span><span>Chin***or@**.com</span><span>0705663120</span><span>A23604</span><span>Alumni</span>
          </div>
        </div>
        <div className={`relative mt-3 h-[104px] border-[1.4px] border-dashed border-[#e2e4ee] rounded-[8px] bg-[#fbfbfe] grid place-items-center ${on ? "animate-[hc2Drop_5s_ease_1_both]" : ""}`}>
          <div className="text-center">
            <div className="text-[16px] text-[#5a5f75]">☁</div>
            <div className="text-[10.5px] text-[#7b8093] mt-[2px]">
              Drag and Drop CSV here or <span className="text-[#1e46b8] font-semibold underline">Browse</span>
            </div>
          </div>
          <div className={`absolute left-0 top-0 flex items-center gap-[7px] bg-white border border-[#e6e7f1] shadow-[0_10px_22px_rgba(35,49,105,.16)] rounded-[8px] px-[11px] py-[7px] ${on ? "animate-[hc2Chip_5s_cubic-bezier(.4,.9,.2,1)_1_both]" : ""}`}>
            <div className="w-[16px] h-[20px] rounded-[3px] bg-[#1f9d55]" />
            <div>
              <div className="text-[10px] font-semibold text-[#20243a]">members.csv</div>
              <div className="text-[8.5px] text-[#8b90a4]">3 members · 1 KB</div>
            </div>
          </div>
        </div>
        <div className="text-[11px] font-bold text-[#0d0f1a] mt-[14px]">Or Upload from URL</div>
        <div className="mt-[7px] h-[34px] border border-[#eeeff5] rounded-[8px] flex items-center px-3 text-[11px] text-[#b9bdcc] bg-white">Add File Url</div>
      </div>
    </div>
  );
}
