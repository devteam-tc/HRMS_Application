 import React from 'react';
import { Download } from 'lucide-react';

const defaultHistory = [
  {
    id: 1,
    empId: 'EMP001',
    name: 'Rajesh Kumar',
    department: 'Engineering',
    bankName: 'HDFC Bank',
    accountNumber: '987654321012',
    ifsc: 'HDFC0001456',
    dateOfPayment: '05 Nov 2025',
    creditAmount: '45,000'
  },
  {
    id: 2,
    empId: 'EMP002',
    name: 'Priya Sharma',
    department: 'Marketing',
    bankName: 'ICICI Bank',
    accountNumber: '123456789456',
    ifsc: 'ICIC0002789',
    dateOfPayment: '05 Nov 2025',
    creditAmount: '45,000'
  },
  {
    id: 3,
    empId: 'EMP003',
    name: 'Amit Patel',
    department: 'Sales',
    bankName: 'Axis Bank',
    accountNumber: '654789321654',
    ifsc: 'UTIB0004821',
    dateOfPayment: '06 Nov 2025',
    creditAmount: '55,000'
  },
  {
    id: 4,
    empId: 'EMP004',
    name: 'Sneha Reddy',
    department: 'HR',
    bankName: 'HDFC Bank',
    accountNumber: '998877665544',
    ifsc: 'HDFC0001456',
    dateOfPayment: '05 Nov 2025',
    creditAmount: '65,000'
  },
  {
    id: 5,
    empId: 'EMP005',
    name: 'Vikram Singh',
    department: 'Engineering',
    bankName: 'HDFC Bank',
    accountNumber: '987654321015',
    ifsc: 'HDFC0001456',
    dateOfPayment: '07 Nov 2025',
    creditAmount: '35,000'
  },
  {
    id: 6,
    empId: 'EMP006',
    name: 'Priya Sharma',
    department: 'Marketing',
    bankName: 'ICICI Bank',
    accountNumber: '123456789456',
    ifsc: 'ICIC0002789',
    dateOfPayment: '05 Nov 2025',
    creditAmount: '45,000'
  },
  {
    id: 7,
    empId: 'EMP007',
    name: 'Amit Patel',
    department: 'Sales',
    bankName: 'Axis Bank',
    accountNumber: '654789321654',
    ifsc: 'UTIB0004821',
    dateOfPayment: '06 Nov 2025',
    creditAmount: '55,000'
  },

];

const HistoryTable = ({ data = defaultHistory, onDownloadPayslip }) => {
  return (
    <div className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full min-w-[900px] border border-[#D0E4F5] text-sm">
          <thead className="sticky top-0 z-10">
            <tr className="text-center text-[#333333] text-xs sm:text-sm font-semibold">
              <th className="bg-[#E9F5FF] border-b border-r border-[#D0E4F5] py-3" colSpan={3}>
                Employee Details
              </th>
              <th className="bg-[#E9F5FF] border-b border-r border-[#D0E4F5] py-3" colSpan={3}>
                Bank Details
              </th>
              <th className="bg-[#FFF3E0] border-b border-[#E7D3B5] py-3" colSpan={3}>
                Payment Details
              </th>
            </tr>
            <tr className="bg-white text-left text-[11px] sm:text-xs text-[#555555]">
              <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">
                Employee ID
              </th>
              <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">
                Name
              </th>
              <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">
                Department
              </th>
              <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">
                Bank Name
              </th>
              <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">
                Account Number
              </th>
              <th className="border-t border-b border-r border-[#D0E4F5] px-4 py-2 font-medium">
                IFSC Code
              </th>
              <th className="border-t border-b border-r border-[#E7D3B5] px-4 py-2 font-medium">
                Date of Payment
              </th>
              <th className="border-t border-b border-r border-[#E7D3B5] px-4 py-2 font-medium">
                Credit Amount
              </th>
              <th className="border-t border-b border-[#E7D3B5] px-4 py-2 font-medium text-center">
                Payslip
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={
                  index % 2 === 0
                    ? 'bg-white hover:bg-[#F5FBFF]'
                    : 'bg-[#F9FCFF] hover:bg-[#F5FBFF]'
                }
              >
                <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                  {row.empId}
                </td>
                <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                  {row.name}
                </td>
                <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                  {row.department}
                </td>
                <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                  {row.bankName}
                </td>
                <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                  {row.accountNumber}
                </td>
                <td className="border-b border-r border-[#D0E4F5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                  {row.ifsc}
                </td>
                <td className="border-b border-r border-[#E7D3B5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                  {row.dateOfPayment}
                </td>
                <td className="border-b border-r border-[#E7D3B5] px-4 py-2 text-xs sm:text-sm text-[#333333]">
                  {row.creditAmount}
                </td>
                <td className="border-b border-[#E7D3B5] px-4 py-2 text-center">
                  <button
                    type="button"
                    onClick={() => onDownloadPayslip && onDownloadPayslip(row)}
                    className="inline-flex items-center gap-2 bg-[#CA2030] hover:bg-[#a71a27] text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full shadow-sm transition-colors duration-150"
                  >
                    <span>Download</span>
                    <Download className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
