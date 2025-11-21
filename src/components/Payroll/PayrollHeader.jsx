import React from "react";
import { Users } from "lucide-react";

const PayrollHeader = () => {
  const days = [
    "M","T","W","T","F","S","S","M","T","W","T","F","S","S","M","T","W","T","F","S","S","M","T","W","T","F","S","S","M","T"
  ];

  const dates = Array.from({ length: 30 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <div className="neu-card p-6 rounded-3xl flex gap-6 items-center">
      {/* LEFT CARD */}
      <div className="flex items-center gap-6">
        <div className="w-[45px] h-[45px] bg-[#00AEEF] rounded-lg flex items-center justify-center">
          <Users size={26} color="white" />
        </div>

        <div>
          <div className="text-xl font-bold">1,247</div>
          <div className="text-[13px] -mt-0.5">
            Total Employees
          </div>
        </div>
      </div>

      {/* RIGHT SIDE DAYS + DATE ROW */}
      <div className="flex-1">
        <div className="flex gap-[18px] mb-1.5 text-[14px] font-semibold">
          <span className="w-[40px]">Days</span>
          {days.map((d, i) => (
            <span key={i} className="w-[24px] text-center">
              {d}
            </span>
          ))}
        </div>

        <div className="flex gap-[18px] text-[14px]">
          <span className="w-[40px]">Date</span>
          {dates.map((dt, i) => (
            <span key={i} className="w-[24px] text-center">
              {dt}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayrollHeader;
