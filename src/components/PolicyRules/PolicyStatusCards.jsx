// PolicyStatusCards.jsx
import React from "react";
import { CheckCircle, Sliders, AlertCircle, Shield } from "lucide-react";

export const PolicyStatusCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
      
      <div className="neu-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-600">24</h3>
            <p className="text-[#666666] text-xs sm:text-sm">Active Policies</p>
          </div>
          <div className="neu-small p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-400 to-green-600">
            <CheckCircle size={16} className="sm:w-6 sm:h-6 text-black" />
          </div>
        </div>
      </div>

      <div className="neu-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2C318E]">8</h3>
            <p className="text-[#666666] text-xs sm:text-sm">Auto-Calculated</p>
          </div>
          <div className="neu-small p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2C318E] to-[#048ba8]">
            <Sliders size={16} className="sm:w-6 sm:h-6 text-black" />
          </div>
        </div>
      </div>

      <div className="neu-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-600">3</h3>
            <p className="text-[#666666] text-xs sm:text-sm">Need Review</p>
          </div>
          <div className="neu-small p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600">
            <AlertCircle size={16} className="sm:w-6 sm:h-6 text-black" />
          </div>
        </div>
      </div>

      <div className="neu-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-600">100%</h3>
            <p className="text-[#666666] text-xs sm:text-sm">Compliance</p>
          </div>
          <div className="neu-small p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-400 to-green-600">
            <Shield size={16} className="sm:w-6 sm:h-6 text-black" />
          </div>
        </div>
      </div>

    </div>
  );
};
