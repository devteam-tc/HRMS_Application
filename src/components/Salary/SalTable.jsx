 import React, { useState, useMemo } from 'react';
import { Edit3, Download, Search, Filter, ChevronDown, User, Briefcase, Building, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { defaultEmployees } from './SalaryTableData';

const SalTable = ({ 
  employees = defaultEmployees, 
  searchTerm = '', 
  selectedDepartment = 'All Departments',
  selectedStatus = 'all',
  dateRange = 'all'
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  
// In SalTable.jsx, update the filteredEmployees calculation
const filteredEmployees = employees.filter(employee => {
  // Search filter
  const searchLower = searchTerm.toLowerCase();
  const matchesSearch = 
    employee.name.toLowerCase().includes(searchLower) ||
    employee.empId.toLowerCase().includes(searchLower) ||
    employee.designation.toLowerCase().includes(searchLower) ||
    employee.department.toLowerCase().includes(searchLower);
  
  // Department filter
  const matchesDepartment = 
    selectedDepartment === 'All Departments' || 
    employee.department === selectedDepartment;
  
  // Status filter
  const matchesStatus = selectedStatus === 'all' || employee.status === selectedStatus;
  
  return matchesSearch && matchesDepartment && matchesStatus;
});

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedEmployees = React.useMemo(() => {
    let sortableItems = [...filteredEmployees];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredEmployees, sortConfig]);

  return (
    <div className="neu-card rounded-3xl overflow-hidden">
      {/* Header Section */}
      {/* Search and Filter Section */}
      {/* Table */}
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <table className="w-full min-w-[1400px]">
          {/* Grouped Headers */}
          <thead className="bg-[#FDFAFA] border-b-2 border-gray-200 sticky top-0 z-10">
            <tr>
              <th colSpan="4" className="text-left py-3 px-4 text-[#2C318E] font-semibold text-sm bg-blue-50 border-r border-gray-200">
                Employee Details
              </th>
              <th colSpan="5" className="text-center py-3 px-4 text-[#2C318E] font-semibold text-sm bg-green-50 border-r border-gray-200">
                Earnings
              </th>
              <th colSpan="3" className="text-center py-3 px-4 text-[#2C318E] font-semibold text-sm bg-red-50 border-r border-gray-200">
                Deductions
              </th>
              <th colSpan="3" className="text-center py-3 px-4 text-[#2C318E] font-semibold text-sm bg-purple-50">
                Salary Details
              </th>
            </tr>
            {/* Column Headers */}
            <tr>
              {/* Employee Details */}
              <th 
                onClick={() => handleSort('name')}
                className="text-left py-3 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 cursor-pointer hover:bg-[#F0F0F0] transition-colors duration-150 bg-white"
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#2C318E]" />
                  <span>Employee Name</span>
                  {sortConfig.key === 'name' && (
                    <span className="text-[#CA2030]">{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
              <th className="text-left py-3 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-white">
                <span className="text-xs">EMP ID</span>
              </th>
              <th 
                onClick={() => handleSort('designation')}
                className="text-left py-3 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 cursor-pointer hover:bg-[#F0F0F0] transition-colors duration-150 bg-white"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#2C318E]" />
                  <span>Designation</span>
                </div>
              </th>
              <th 
                onClick={() => handleSort('department')}
                className="text-left py-3 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 cursor-pointer hover:bg-[#F0F0F0] transition-colors duration-150 bg-white"
              >
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#2C318E]" />
                  <span>Department</span>
                </div>
              </th>
              
              {/* Earnings */}
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-green-50">
                Basic
              </th>
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-green-50">
                HRA
              </th>
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-green-50">
                Conveyance
              </th>
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-green-50">
                Medical
              </th>
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-green-50">
                Other
              </th>
              
              {/* Deductions */}
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-red-50">
                PF
              </th>
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-red-50">
                ESI
              </th>
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-red-50">
                PT
              </th>
              
              {/* Salary Details */}
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-blue-50">
                <div className="flex flex-col items-center">
                  <span>Total</span>
                  <span className="text-xs font-normal">Earnings</span>
                </div>
              </th>
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-red-50">
                <div className="flex flex-col items-center">
                  <span>Total</span>
                  <span className="text-xs font-normal">Deductions</span>
                </div>
              </th>
              <th className="text-center py-3 px-2 text-[#333333] font-semibold text-sm bg-blue-50">
                <div className="flex flex-col items-center">
                  <span>Net</span>
                  <span className="text-xs font-normal">Payable</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedEmployees.map((employee, rowIndex) => (
              <tr
                key={employee.id}
                className={`border-b border-gray-100 hover:bg-[#F0F0F0] transition-colors duration-150 ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#FDFAFA]'
                }`}
              >
                {/* Employee Details */}
                <td className="py-3 px-4 border-r border-gray-200 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#2C318E] to-[#CA2030] rounded-full flex items-center justify-center text-white font-semibold text-xs">
                      {employee.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#333333] text-sm">
                        {employee.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 text-center border-r border-gray-200 bg-white">
                  <span className="text-sm text-[#666666]">
                    {employee.empId}
                  </span>
                </td>
                <td className="py-3 px-2 border-r border-gray-200 bg-white">
                  <span className="text-sm text-[#333333]">
                    {employee.designation}
                  </span>
                </td>
                <td className="py-3 px-2 border-r border-gray-200 bg-white">
                  <span className={`inline-flex items-center justify-center px-2 py-1 rounded text-xs font-medium ${
                    employee.department === 'IT' ? 'bg-blue-100 text-blue-800' :
                    employee.department === 'HR' ? 'bg-red-100 text-red-800' :
                    employee.department === 'Design' ? 'bg-purple-100 text-purple-800' :
                    employee.department === 'Analytics' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {employee.department}
                  </span>
                </td>
                
                {/* Earnings */}
                <td className="text-center py-3 px-2 border-r border-gray-200 bg-green-50">
                  <span className="text-sm text-[#333333]">
                    ₹{employee.basic.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-3 px-2 border-r border-gray-200 bg-green-50">
                  <span className="text-sm text-[#333333]">
                    ₹{employee.hra.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-3 px-2 border-r border-gray-200 bg-green-50">
                  <span className="text-sm text-[#333333]">
                    ₹{employee.conveyance.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200">
                  <span className="text-sm text-gray-600">
                    ₹{employee.medical.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200">
                  <span className="text-sm text-gray-600">
                    ₹{employee.other.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200 bg-green-50">
                  <span className="text-sm font-semibold text-green-700">
                    ₹{employee.gross.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200">
                  <span className="text-sm text-gray-600">
                    ₹{employee.pf.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200">
                  <span className="text-sm text-gray-600">
                    ₹{employee.esi.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200">
                  <span className="text-sm text-gray-600">
                    ₹{employee.pt.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200 bg-red-50">
                  <span className="text-sm font-semibold text-red-700">
                    ₹{employee.totalDeduction.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 bg-blue-50">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-blue-700">
                      ₹{employee.netSalary.toLocaleString('en-IN')}
                    </span>
                    {/* <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
                      <div 
                        className="bg-blue-600 h-1 rounded-full"
                        style={{ width: `${Math.min((employee.netSalary / 100000) * 100, 100)}%` }}
                      />
                    </div> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer with Summary */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-800">{sortedEmployees.length}</span> of{' '}
            <span className="font-semibold text-gray-800">{employees.length}</span> employees
          </div>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Gross: ₹{sortedEmployees.reduce((sum, emp) => sum + emp.gross, 0).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-600">Deductions: ₹{sortedEmployees.reduce((sum, emp) => sum + emp.totalDeduction, 0).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Net: ₹{sortedEmployees.reduce((sum, emp) => sum + emp.netSalary, 0).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SalTable;
