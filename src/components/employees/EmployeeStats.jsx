import React from 'react';
import { Users, UserCheck, Calendar, Building2 } from 'lucide-react';

const EmployeeStats = ({ employees, departments }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {/* Total Employees */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">{employees.length}</p>
            <p className="text-[#666666] text-sm mt-1">Total Employees</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2C318E]" />
          </div>
        </div>
      </div>

      {/* Active Employees */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">
              {employees.filter(e => e.status === 'Active').length}
            </p>
            <p className="text-[#666666] text-sm mt-1">Active</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <UserCheck  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#CA2030]" />
          </div>
        </div>
      </div>

      {/* On Leave */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">
              {employees.filter(e => e.status === 'On Leave').length}
            </p>
            <p className="text-[#666666] text-sm mt-1">On Leave</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2C318E]" />
          </div>
        </div>
      </div>

      {/* Total Departments */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#333333]">{departments.length - 1}</p>
            <p className="text-[#666666] text-sm mt-1">Departments</p>
          </div>
          <div className="neu-small p-4 rounded-2xl">
            <Building2  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#CA2030]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats;
