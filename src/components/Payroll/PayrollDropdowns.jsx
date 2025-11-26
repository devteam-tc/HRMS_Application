// src/components/Payroll/PayrollDropdowns.jsx
import React from "react";
import { ChevronDown, Search, Download, Calendar } from "lucide-react";

const PayrollDropdowns = ({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
}) => {
  const departments = [
    "All Departments", // Add this if you want it in the dropdown
    "Engineering",
    "Sales",
    "Marketing",
    "HR",
    "Finance",
    "Operations",
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
              placeholder="Search employees by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#333333] placeholder-[#999999]"
            />
          </div>
        </div>

        {/* Department Filter */}
        <div>
          <div className="neu-input p-4 rounded-2xl">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333]"
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Range (Visual Only) */}
        <div>
          <div className="neu-input p-4 rounded-2xl">
            <select className="w-full bg-transparent outline-none text-[#333333]">
              <option>Jan, 2025</option>
            </select>
          </div>
        </div>

        {/* Downloads (Visual Only) */}
        <div>
          <div className="neu-input p-4 rounded-2xl">
            <select className="w-full bg-transparent outline-none text-[#333333]">
              <option>Downloads</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollDropdowns;