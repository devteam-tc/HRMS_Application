import React from 'react';
import { Briefcase, Users, Building2 } from 'lucide-react';

const JobStatistics = ({ jobOpenings }) => {
  const totalApplications = jobOpenings.reduce((sum, job) => sum + job.applications, 0);
  const positionsAvailable = jobOpenings.reduce((sum, job) => sum + job.openings, 0);
  const activeJobs = jobOpenings.filter(job => job.status === 'Open').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Total Openings</p>
            <p className="text-2xl font-bold text-[#333333]">{jobOpenings.length}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Briefcase size={24} className="text-[#CA2030]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Active Jobs</p>
            <p className="text-2xl font-bold text-[#333333]">{activeJobs}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Users size={24} className="text-[#2C318E]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Total Applications</p>
            <p className="text-2xl font-bold text-[#333333]">{totalApplications}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Users size={24} className="text-[#CA2030]" />
          </div>
        </div>
      </div>

      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#666666] text-sm mb-1">Positions Available</p>
            <p className="text-2xl font-bold text-[#333333]">{positionsAvailable}</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Building2 size={24} className="text-[#2C318E]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatistics;
