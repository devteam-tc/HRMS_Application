import React from 'react';
import { User, FileText, Star, Calendar } from 'lucide-react';

export const ApplicantsStatistics = ({ applicants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Total Applicants</p>
            <p className="text-2xl font-bold text-[#333333]">{applicants.length}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <User size={24} className="text-[#CA2030]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Under Review</p>
            <p className="text-2xl font-bold text-[#333333]">{applicants.filter(a => a.status === 'Under Review').length}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <FileText size={24} className="text-[#2C318E]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Shortlisted</p>
            <p className="text-2xl font-bold text-[#333333]">{applicants.filter(a => a.status === 'Shortlisted').length}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Star size={24} className="text-[#CA2030]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">In Interview</p>
            <p className="text-2xl font-bold text-[#333333]">{applicants.filter(a => a.stage === 'Interview').length}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Calendar size={24} className="text-[#2C318E]" />
          </div>
        </div>
      </div>
    </div>
  );
};
