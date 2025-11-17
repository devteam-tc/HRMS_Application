import React from "react";
import { Clock, CheckCircle, AlertCircle, Edit3 } from "lucide-react";

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* Total Records */}
      <div className="neu-card p-6 rounded-2xl group hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#333333] group-hover:text-[#CA2030] transition-colors">142</h3>
            <p className="text-[#666666] text-sm">Total Records</p>
          </div>
          <div className="neu-small p-3 rounded-xl bg-gradient-to-br from-[#CA2030] to-[#d4471f]">
            <Clock size={24} className="text-black" />
          </div>
        </div>
      </div>

      {/* Complete */}
      <div className="neu-card p-6 rounded-2xl group hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-green-600 group-hover:scale-105 transition-transform">128</h3>
            <p className="text-[#666666] text-sm">Complete</p>
          </div>
          <div className="neu-small p-3 rounded-xl bg-gradient-to-br from-green-400 to-green-600">
            <CheckCircle size={24} className="text-black" />
          </div>
        </div>
      </div>

      {/* Incomplete */}
      <div className="neu-card p-6 rounded-2xl group hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#2C318E] group-hover:scale-105 transition-transform">8</h3>
            <p className="text-[#666666] text-sm">Incomplete</p>
          </div>
          <div className="neu-small p-3 rounded-xl bg-gradient-to-br from-[#2C318E] to-[#048ba8]">
            <AlertCircle size={24} className="text-black" />
          </div>
        </div>
      </div>

      {/* Need Review */}
      <div className="neu-card p-6 rounded-2xl group hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#333333] group-hover:text-[#CA2030] transition-colors">6</h3>
            <p className="text-[#666666] text-sm">Need Review</p>
          </div>
          <div className="neu-small p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600">
            <Edit3 size={24} className="text-black" />
          </div>
        </div>
      </div>

    </div>
  );
};
