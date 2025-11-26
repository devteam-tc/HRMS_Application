import React from 'react';
import { Search, Download } from 'lucide-react';

const HistoryDropdown = ({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  departments = [],
  dateRange,
  setDateRange,
  selectedStatus,
  setSelectedStatus,
}) => {
  return (
    <div className="neu-card p-6 rounded-3xl mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Search */}
        <div className="md:col-span-2">
          <div className="neu-input p-4 rounded-2xl flex items-center">
            <Search className="text-[#666666] mr-3" size={20} />
            <input
              type="text"
              placeholder="Search by name or ID..."
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
              {/* <option value="all">All Departments</option> */}
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Range */}
        <div>
          <div className="neu-input p-4 rounded-2xl">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full bg-transparent outline-none text-[#333333]"
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>

        {/* Download Button */}
        <div>
          <div className="neu-input p-4 rounded-2xl">
            <button className="w-full flex items-center justify-center gap-2 text-[#333333]">
              <Download size={18} />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryDropdown;