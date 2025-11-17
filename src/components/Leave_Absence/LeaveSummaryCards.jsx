import React from 'react';
import { Calendar, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export const LeaveSummaryCards = ({ leaveRequests, kanbanColumns }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* Total Requests */}
      <div className="neu-card p-6 rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#333333]">{leaveRequests.length}</h3>
            <p className="text-[#666666] text-sm">Total Requests</p>
          </div>
          <div className="neu-small p-3 rounded-xl bg-gradient-to-br from-[#CA2030] to-[#d4471f]">
            <Calendar size={24} className="text-black" />
          </div>
        </div>
      </div>

      {/* Pending */}
      <div className="neu-card p-6 rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-yellow-600">{kanbanColumns[0].count}</h3>
            <p className="text-[#666666] text-sm">Pending</p>
          </div>
          <div className="neu-small p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600">
            <AlertCircle size={24} className="text-black" />
          </div>
        </div>
      </div>

      {/* Approved */}
      <div className="neu-card p-6 rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-green-600">{kanbanColumns[1].count}</h3>
            <p className="text-[#666666] text-sm">Approved</p>
          </div>
          <div className="neu-small p-3 rounded-xl bg-gradient-to-br from-green-400 to-green-600">
            <CheckCircle size={24} className="text-black" />
          </div>
        </div>
      </div>

      {/* Rejected */}
      <div className="neu-card p-6 rounded-2xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-red-600">{kanbanColumns[2].count}</h3>
            <p className="text-[#666666] text-sm">Rejected</p>
          </div>
          <div className="neu-small p-3 rounded-xl bg-gradient-to-br from-red-400 to-red-600">
            <XCircle size={24} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
