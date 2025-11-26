import React, { useState } from 'react';
import PayrollDropdowns from './PayrollDropdowns';
import SummaryCards from './SummaryCards';
import { defaultEmployees } from './TableData';

const OverviewTable = ({ employees = defaultEmployees }) => {
  // Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Apply filters
 // Inside OverviewTable component
const filteredEmployees = employees.filter((emp) => {
  const matchesSearch =
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.empId.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesDept =
    selectedDepartment === "all" || emp.department === selectedDepartment;

  return matchesSearch && matchesDept;
});

  return (
    <>
      <SummaryCards />

      {/* Filter bar */}
      <PayrollDropdowns
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />

      <div className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#E8F7FF] text-[#333333]">
                <th
                  colSpan={3}
                  className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-left border-r border-[#D5F0FF]"
                >
                  Employee Details
                </th>
                <th
                  colSpan={4}
                  className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-left"
                >
                  Attendance Summary
                </th>
              </tr>
              <tr className="bg-[#F5FFFE] text-[#555555] border-b border-[#D5F0FF]">
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">EMP Name</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">EMP ID</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">Department</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">Present</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">
                  Absent/LOP
                </th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">Leaves</th>
                <th className="py-3 sm:py-4 px-3 sm:px-6 text-left">
                  Working Days
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className={
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFF]'
                  }
                >
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#333333]">
                    {employee.name}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#555555]">
                    {employee.empId}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#555555]">
                    {employee.department}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#2E7D32] font-medium">
                    {employee.present}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#C62828] font-medium">
                    {employee.absentLop}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#FB8C00] font-medium">
                    {employee.leaves}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#333333] font-medium">
                    {employee.workingDays}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OverviewTable;