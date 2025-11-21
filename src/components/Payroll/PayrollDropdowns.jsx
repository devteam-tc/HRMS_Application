import React, { useState } from "react";
import { ChevronDown, Search, Download, Calendar } from "lucide-react";

const PayrollDropdowns = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const departments = [
    "Engineering",
    "Sales",
    "Marketing",
    "HR",
    "Finance",
    "Operations"
  ];

  return (
    <div className="neu-card p-6 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Search */}
        <div className="md:col-span-2">
          <div className="neu-input p-4 rounded-2xl flex items-center">
            <Search className="text-[#666666] mr-3" size={20} />
            <input
              type="text"
              placeholder="Search Employee Name or ID."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#333333] placeholder-[#999999]"
            />
          </div>
        </div>

        {/* Date Range Filter */}
        <div>
          <div className="neu-input p-4 rounded-2xl relative group">
            <div className="flex items-center">
              <Calendar className="text-[#666666] mr-3 group-hover:text-[#CA2030] transition-colors" size={18} />
             
                <option value="all">Jan , 2025</option>
             
            </div>
          </div>
        </div>

        {/* Department Filter */}
        <div>
          <div className="neu-input p-4 rounded-2xl relative group">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333] appearance-none cursor-pointer group-hover:text-[#CA2030] transition-colors"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] pointer-events-none group-hover:text-[#CA2030] transition-colors" size={18} />
          </div>
        </div>

        {/* Status Filter */}
         <div className="neu-input p-4 rounded-2xl relative group">

          <Download size={18} />

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333] appearance-none cursor-pointer group-hover:text-[#CA2030] transition-colors"
            >
              <option value="present">Excel</option>
              <option value="absent">pdf</option>
              <option value="late">CSV</option>
             
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] pointer-events-none group-hover:text-[#CA2030] transition-colors" size={18} />
          </div>
      </div>
      
    
    </div>
  );
};

export default PayrollDropdowns;