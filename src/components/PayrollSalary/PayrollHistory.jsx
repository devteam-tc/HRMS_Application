import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HistoryTable from './HistoryTable';

const PayrollHistory = () => {
      const navigate = useNavigate();

    return (
         <div className="p-8 bg-[#FDFAFA] min-h-screen">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="neu-small p-2 rounded-xl hover:text-[#CA2030] transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Payroll History</h1>
          </div>
        </div>
      
   <HistoryTable/>
    </div>
     
    </div>
    );
};

export default PayrollHistory;