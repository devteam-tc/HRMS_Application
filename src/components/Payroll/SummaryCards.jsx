import React from 'react';
import { Users, Wallet, CalendarDays, BarChart3 } from 'lucide-react';

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">1,247</p>
            <p className="text-[#666666] text-sm mb-1">Total Employees</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#9C27B0]">
            <Users size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">124</p>
            <p className="text-[#666666] text-sm mb-1">Total LOP's</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#CA2030]">
            <Wallet size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
             <p className="text-2xl font-bold text-[#333333]">26</p>
            <p className="text-[#666666] text-sm mb-1">Working days</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#2C318E]">
            <CalendarDays size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">92.4%</p>
            <p className="text-[#666666] text-sm mb-1">Avg Attendance</p>
          </div>
          <div className="neu-small p-4 rounded-2xl bg-[#05A7CC]">
            <BarChart3 size={24} className="text-[#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
