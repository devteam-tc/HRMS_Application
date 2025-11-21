 import React from 'react';
import PayrollDropdowns from './PayrollDropdowns';
import SummaryCards from './SummaryCards';

const defaultEmployees = [
  {
    id: 1,
    empId: 'EMP001',
    name: 'Rajesh Kumar',
    department: 'Engineering',
    present: 22,
    absentLop: 2,
    leaves: 2,
    workingDays: 26
  },
  {
    id: 2,
    empId: 'EMP002',
    name: 'Priya Sharma',
    department: 'Marketing',
    present: 24,
    absentLop: 0,
    leaves: 2,
    workingDays: 26
  },
  {
    id: 3,
    empId: 'EMP003',
    name: 'Amit Patel',
    department: 'Sales',
    present: 23,
    absentLop: 1,
    leaves: 2,
    workingDays: 26
  },
  {
    id: 4,
    empId: 'EMP004',
    name: 'Sneha Reddy',
    department: 'HR',
    present: 25,
    absentLop: 0,
    leaves: 1,
    workingDays: 26
  },
  {
    id: 5,
    empId: 'EMP005',
    name: 'Vikram Singh',
    department: 'Engineering',
    present: 21,
    absentLop: 3,
    leaves: 2,
    workingDays: 26
  }
];

const OverviewTable = ({ employees = defaultEmployees }) => {
  return (

    <>
    <SummaryCards />
    <PayrollDropdowns />
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
                          <th className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-left border-r border-[#D5F0FF]">
                              Employee ID
                          </th>
                          <th className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-left border-r border-[#D5F0FF]">
                              Name
                          </th>
                          <th className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-left border-r border-[#D5F0FF]">
                              Department
                          </th>
                          <th className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-left border-r border-[#D5F0FF]">
                              Present
                          </th>
                          <th className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-left border-r border-[#D5F0FF]">
                              Absent/LOP
                          </th>
                          <th className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-left border-r border-[#D5F0FF]">
                              Leaves
                          </th>
                          <th className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-left">
                              Working Days
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {employees.map((employee, index) => (
                          <tr
                              key={employee.id}
                              className={index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F9FFFE]'}
                          >
                              <td className="py-2.5 sm:py-3 px-3 sm:px-6 border-t border-[#E5F5FF] border-r border-[#D5F0FF] text-[#333333]">
                                  {employee.empId}
                              </td>
                              <td className="py-2.5 sm:py-3 px-3 sm:px-6 border-t border-[#E5F5FF] border-r border-[#D5F0FF] text-[#333333]">
                                  {employee.name}
                              </td>
                              <td className="py-2.5 sm:py-3 px-3 sm:px-6 border-t border-[#E5F5FF] border-r border-[#D5F0FF] text-[#333333]">
                                  {employee.department}
                              </td>
                              <td className="py-2.5 sm:py-3 px-3 sm:px-6 border-t border-[#E5F5FF] border-r border-[#D5F0FF] text-[#333333]">
                                  {employee.present}
                              </td>
                              <td className="py-2.5 sm:py-3 px-3 sm:px-6 border-t border-[#E5F5FF] border-r border-[#D5F0FF] text-[#333333]">
                                  {employee.absentLop}
                              </td>
                              <td className="py-2.5 sm:py-3 px-3 sm:px-6 border-t border-[#E5F5FF] border-r border-[#D5F0FF] text-[#333333]">
                                  {employee.leaves}
                              </td>
                              <td className="py-2.5 sm:py-3 px-3 sm:px-6 border-t border-[#E5F5FF] text-[#333333]">
                                  {employee.workingDays}
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div></>
  );
};

export default OverviewTable;
