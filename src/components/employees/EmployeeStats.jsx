import React from 'react';
import { Users, Calendar } from 'lucide-react';

const EmployeeStats = ({ employees, departments }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {/* Total Employees */}
      <div className="neu-small p-3 sm:p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#333333]">{employees.length}</p>
            <p className="text-xs sm:text-sm text-[#666666]">Total Employees</p>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 neu-gradient rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#05A7CC]" />
          </div>
        </div>
      </div>

      {/* Active Employees */}
      <div className="neu-small p-3 sm:p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#333333]">
              {employees.filter(e => e.status === 'Active').length}
            </p>
            <p className="text-xs sm:text-sm text-[#666666]">Active</p>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 neu-secondary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
      </div>

      {/* On Leave */}
      <div className="neu-small p-3 sm:p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#333333]">
              {employees.filter(e => e.status === 'On Leave').length}
            </p>
            <p className="text-xs sm:text-sm text-[#666666]">On Leave</p>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Total Departments */}
      <div className="neu-small p-3 sm:p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#333333]">{departments.length - 1}</p>
            <p className="text-xs sm:text-sm text-[#666666]">Departments</p>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 neu-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats;
