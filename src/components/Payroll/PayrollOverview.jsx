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
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Attendance</h1>
          </div>
        </div>
      </div>
      <Tabination viewMode={viewMode} setViewMode={setViewMode} />
      {/* Components */}
      {viewMode === 'Quick Attendance Overview' ? (
        <>
          <PayrollDropdowns />
          <PayrollHeader />
          <PayrollTable />
          <PayrollLegends />
        </>
      ) : (
        <OverviewTable />
      )}
    </div>
  );
};