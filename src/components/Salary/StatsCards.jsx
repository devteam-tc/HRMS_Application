import React from 'react';
import { Users, Wallet, CalendarDays, BarChart3 } from 'lucide-react';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Total Employees</p>
            <p className="text-2xl font-bold text-[#333333]">1,274</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Users size={24} className="text-[#2C318E]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Processed Payrolls</p>
            <p className="text-2xl font-bold text-[#333333]">142</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Wallet size={24} className="text-[#CA2030]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Total Gross</p>
            <p className="text-2xl font-bold text-[#333333]">24</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <CalendarDays size={24} className="text-[#2C318E]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Pending Payrolls</p>
            <p className="text-2xl font-bold text-[#333333]">93.6%</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <BarChart3 size={24} className="text-[#CA2030]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
