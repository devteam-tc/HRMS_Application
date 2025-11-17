// EmployeeFilters.jsx
import React from 'react';
import { Search, Grid, List } from 'lucide-react';

const EmployeeFilters = ({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  selectedStatus,
  setSelectedStatus,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  departments,
  statuses
}) => {
  return (
    <div className="neu-card p-4 sm:p-6 rounded-3xl">
      <div className="space-y-4">
        {/* Search - Full width on mobile */}
        <div className="w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="neu-input w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-2xl text-sm sm:text-base text-[#333333] placeholder-[#999999]"
            />
          </div>
        </div>

        {/* Filters - Stack on mobile, row on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap gap-3 sm:gap-4 items-center">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="neu-input px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm sm:text-base text-[#333333] w-full"
          >
            {departments.map(dept => (
              <option key={dept} value={dept.toLowerCase()}>{dept}</option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="neu-input px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm sm:text-base text-[#333333] w-full"
          >
            {statuses.map(status => (
              <option key={status} value={status.toLowerCase()}>{status}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="neu-input px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm sm:text-base text-[#333333] w-full lg:w-auto"
          >
            <option value="name">Sort by Name</option>
            <option value="department">Sort by Department</option>
            <option value="joiningDate">Sort by Joining Date</option>
          </select>

          {/* View Toggle */}
          <div className="neu-small p-0.5 sm:p-1 rounded-2xl flex justify-center sm:justify-start w-full sm:w-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 sm:p-2 rounded-xl transition-all ${
                viewMode === 'grid'
                  ? 'neu-primary text-white'
                  : 'text-[#666666] hover:text-[#333333]'
              }`}
              aria-label="Grid view"
            >
              <Grid size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 sm:p-2 rounded-xl transition-all ${
                viewMode === 'list'
                  ? 'neu-primary text-white'
                  : 'text-[#666666] hover:text-[#333333]'
              }`}
              aria-label="List view"
            >
              <List size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFilters;
