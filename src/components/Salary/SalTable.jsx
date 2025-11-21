 import React, { useState } from 'react';
import { Edit3, Download, Search, Filter, ChevronDown, User, Briefcase, Building, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const defaultEmployees = [
  {
    id: 1,
    name: 'John',
    empId: 'EMP001',
    designation: 'Software Engineer',
    department: 'IT',
    basic: 35000,
    hra: 10500,
    conveyance: 1600,
    medical: 1250,
    other: 800,
    gross: 49150,
    pf: 4200,
    esi: 700,
    pt: 200,
    totalDeduction: 5100,
    netSalary: 44050
  },
  {
    id: 2,
    name: 'David',
    empId: 'EMP002', 
    designation: 'Project Manager',
    department: 'IT',
    basic: 45000,
    hra: 13500,
    conveyance: 1600,
    medical: 1250,
    other: 800,
    gross: 62150,
    pf: 5400,
    esi: 900,
    pt: 200,
    totalDeduction: 6500,
    netSalary: 55650
  },
  {
    id: 3,
    name: 'Kevin',
    empId: 'EMP003',
    designation: 'UX Designer',
    department: 'Design',
    basic: 32000,
    hra: 9600,
    conveyance: 1600,
    medical: 1250,
    other: 800,
    gross: 45250,
    pf: 3840,
    esi: 640,
    pt: 200,
    totalDeduction: 4680,
    netSalary: 40570
  },
  {
    id: 4,
    name: 'Bruce',
    empId: 'EMP004',
    designation: 'Data Analyst',
    department: 'Analytics',
    basic: 38000,
    hra: 11400,
    conveyance: 1600,
    medical: 1250,
    other: 800,
    gross: 53050,
    pf: 4560,
    esi: 760,
    pt: 200,
    totalDeduction: 5520,
    netSalary: 47530
  },
  {
    id: 5,
    name: 'Mark',
    empId: 'EMP005',
    designation: 'HR Manager',
    department: 'HR',
    basic: 40000,
    hra: 12000,
    conveyance: 1600,
    medical: 1250,
    other: 800,
    gross: 55650,
    pf: 4800,
    esi: 800,
    pt: 200,
    totalDeduction: 5800,
    netSalary: 49850
  },
  {
    id: 6,
    name: 'Mark',
    empId: 'EMP006',
    designation: 'HR Manager',
    department: 'HR',
    basic: 40000,
    hra: 12000,
    conveyance: 1600,
    medical: 1250,
    other: 800,
    gross: 55650,
    pf: 4800,
    esi: 800,
    pt: 200,
    totalDeduction: 5800,
    netSalary: 49850
  },
  {
    id: 7,
    name: 'Mark',
    empId: 'EMP007',
    designation: 'HR Manager',
    department: 'HR',
    basic: 40000,
    hra: 12000,
    conveyance: 1600,
    medical: 1250,
    other: 800,
    gross: 55650,
    pf: 4800,
    esi: 800,
    pt: 200,
    totalDeduction: 5800,
    netSalary: 49850
  },
];

const SalTable = ({ employees = defaultEmployees }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', ...new Set(employees.map(emp => emp.department))];
  
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          employee.empId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          employee.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
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
      <div className="p-6 border-b border-gray-200 bg-[#FDFAFA]">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 neu-small rounded-xl focus:ring-2 focus:ring-[#2C318E] focus:border-transparent outline-none transition-all duration-200 text-[#333333] placeholder-[#666666]"
            />
          </div>
          <div className="relative">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="appearance-none neu-small rounded-xl px-4 py-2 pr-10 focus:ring-2 focus:ring-[#2C318E] focus:border-transparent outline-none transition-all duration-200 cursor-pointer text-[#333333]"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <table className="w-full min-w-[1400px]">
          <thead className="bg-[#FDFAFA] border-b-2 border-gray-200 sticky top-0 z-10">
            <tr>
              <th 
                onClick={() => handleSort('name')}
                className="text-left py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 cursor-pointer hover:bg-[#F0F0F0] transition-colors duration-150 sticky top-0 bg-[#FDFAFA] z-10"
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#2C318E]" />
                  <span>Employee Name</span>
                  {sortConfig.key === 'name' && (
                    <span className="text-[#CA2030]">{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
              <th className="text-left py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 sticky top-0 bg-[#FDFAFA] z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs neu-small px-2 py-1 rounded-xl">ID</span>
                </div>
              </th>
              <th 
                onClick={() => handleSort('designation')}
                className="text-left py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 cursor-pointer hover:bg-[#F0F0F0] transition-colors duration-150 sticky top-0 bg-[#FDFAFA] z-10"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#2C318E]" />
                  <span>Designation</span>
                  {sortConfig.key === 'designation' && (
                    <span className="text-[#CA2030]">{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
              <th 
                onClick={() => handleSort('department')}
                className="text-left py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 cursor-pointer hover:bg-[#F0F0F0] transition-colors duration-150 sticky top-0 bg-[#FDFAFA] z-10"
              >
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#2C318E]" />
                  <span>Department</span>
                  {sortConfig.key === 'department' && (
                    <span className="text-[#CA2030]">{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#2C318E]" />
                  <span>Basic</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 sticky top-0 bg-[#FDFAFA] z-10">HRA</th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 sticky top-0 bg-[#FDFAFA] z-10">Conveyance</th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 sticky top-0 bg-[#FDFAFA] z-10">Medical</th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 sticky top-0 bg-[#FDFAFA] z-10">Other</th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-green-50 sticky top-0 z-10">
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span>Gross</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 sticky top-0 bg-[#FDFAFA] z-10">PF</th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 sticky top-0 bg-[#FDFAFA] z-10">ESI</th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 sticky top-0 bg-[#FDFAFA] z-10">PT</th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm border-r border-gray-200 bg-red-50 sticky top-0 z-10">
                <div className="flex items-center justify-center gap-2">
                  <TrendingDown className="w-4 h-4 text-[#CA2030]" />
                  <span>Total Deduction</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-[#333333] font-semibold text-sm bg-blue-50 sticky top-0 z-10">
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#2C318E]" />
                  <span>Net Salary</span>
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
                <td className="py-4 px-4 border-r border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2C318E] to-[#CA2030] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {employee.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#333333] text-sm">
                        {employee.name}
                      </p>
                      <p className="text-xs text-[#666666]">{employee.empId}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 border-r border-gray-200">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium neu-small text-[#333333]">
                    {employee.empId}
                  </span>
                </td>
                <td className="py-4 px-4 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#333333]">
                      {employee.designation}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 border-r border-gray-200">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    employee.department === 'IT' ? 'neu-small text-[#2C318E]' :
                    employee.department === 'HR' ? 'neu-small text-[#CA2030]' :
                    employee.department === 'Design' ? 'neu-small text-[#2C318E]' :
                    employee.department === 'Analytics' ? 'neu-small text-[#2C318E]' :
                    'neu-small text-[#666666]'
                  }`}>
                    {employee.department}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200">
                  <span className="text-sm font-medium text-[#333333]">
                    ₹{employee.basic.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200">
                  <span className="text-sm text-gray-600">
                    ₹{employee.hra.toLocaleString('en-IN')}
                  </span>
                </td>
                <td className="text-center py-4 px-4 border-r border-gray-200">
                  <span className="text-sm text-gray-600">
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
                    <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
                      <div 
                        className="bg-blue-600 h-1 rounded-full"
                        style={{ width: `${Math.min((employee.netSalary / 100000) * 100, 100)}%` }}
                      />
                    </div>
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
