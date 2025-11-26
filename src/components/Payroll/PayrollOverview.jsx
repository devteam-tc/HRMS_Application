import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GitBranch, AlertTriangle, CheckCircle, Clock, Plus, Trash2, Eye, Filter, Search } from 'lucide-react';
import PayrollTable from './PayrollTable';
import PayrollHeader from './PayrollHeader';
import PayrollDropdowns from './PayrollDropdowns';
import PayrollLegends from './PayrollLegends';
import Tabination from './Tabination';
import OverviewTable from './OverviewTable';

export const PayrollOverview = ({ taskId }) => {
  const navigate = useNavigate();
  const [selectedTask, setSelectedTask] = useState(null);
  const [showAddDependency, setShowAddDependency] = useState(false);
  const [filterCritical, setFilterCritical] = useState(false);
  const [viewMode, setViewMode] = useState('Quick Attendance Overview');
 const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const currentTask = {
    id: taskId || 'TASK-001',
    title: 'User Authentication System',
    project: 'E-commerce Platform'
  };

  const tasks = [
    {
      id: 'TASK-001',
      title: 'User Authentication System',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Lion',
      progress: 65,
      dependencies: ['TASK-002', 'TASK-005'],
      dependents: ['TASK-003', 'TASK-004'],
      isCriticalPath: true
    },
    {
      id: 'TASK-002',
      title: 'Database Schema Design',
      status: 'done',
      priority: 'high',
      assignee: 'Sarah Wilson',
      progress: 100,
      dependencies: [],
      dependents: ['TASK-001', 'TASK-006'],
      isCriticalPath: true
    },
    {
      id: 'TASK-003',
      title: 'Frontend UI Components',
      status: 'todo',
      priority: 'medium',
      assignee: 'Mike Johnson',
      progress: 0,
      dependencies: ['TASK-001'],
      dependents: ['TASK-007'],
      isCriticalPath: false
    },
    {
      id: 'TASK-004',
      title: 'Payment Gateway Integration',
      status: 'todo',
      priority: 'high',
      assignee: 'Emma Brown',
      progress: 0,
      dependencies: ['TASK-001', 'TASK-002'],
      dependents: ['TASK-008'],
      isCriticalPath: true
    },
    {
      id: 'TASK-005',
      title: 'Security Audit Framework',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Alex Chen',
      progress: 45,
      dependencies: [],
      dependents: ['TASK-001'],
      isCriticalPath: false
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8 bg-[#FDFAFA] min-h-screen">
      <div className="mb-6 lg:mb-8 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="neu-small p-2 rounded-xl hover:text-[#CA2030] transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#333333]">Attendance</h1>
        </div>
      </div>

      <div className="mb-4 sm:mb-6 flex justify-center">
        <Tabination viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      {/* Content cards */}
      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        {viewMode === 'Quick Attendance Overview' ? (
          <>
           <PayrollDropdowns
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  selectedDepartment={selectedDepartment}
  setSelectedDepartment={setSelectedDepartment}
/>
<PayrollHeader />
<PayrollTable
  searchTerm={searchTerm}
  selectedDepartment={selectedDepartment}
/>
<PayrollLegends />
          </>
        ) : (
          <OverviewTable />
        )}
      </div>
    </div>
  );
};