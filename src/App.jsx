import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './components/attendence/Attendance';
import Leave from './pages/Leave';
import Payroll from './pages/Payroll';
import AllMeetings from './components/dashboard/meetings/Meetings';
import NewMeeting from './components/dashboard/meetings/new-meeting';
import MeetingConfirmation from './components/dashboard/meetings/MeetingConfirmation';
import MeetingDetails from './components/dashboard/meetings/MeetingDetails';
import EditMeeting from './components/dashboard/meetings/EditMeeting';
import MeetingCalendar from './components/dashboard/meetings/MeetingCalendar';
import Header from './components/Header';
import ShiftManagement from './components/attendence/ShiftManagement';
import { OvertimeHours } from './components/attendence/OvertimeHours';
import HolidayManagement from './components/attendence/HolidayManagement';
import { PunchRecords } from './components/attendence/PunchRecords';
import { PolicyRules } from './components/attendence/PolicyRules';
import { LeaveTracking } from './components/attendence/LeaveTracking';
import { EmployeeAttendanceProfile } from './components/attendence/EmployeeAttendanceProfile';
import { AttendanceCalendar } from './components/attendence/AttendanceCalendar';
import { EmployeeDirectory } from './components/employees/EmployeeDirectory';
import { EmployeeDetails } from './components/employees/EmployeeDetails';
import { AddEmployee } from './components/employees/AddEmployee';
import { EmployeeProfile } from './components/employees/EmployeeProfile';
import { OnboardingChecklist } from './components/employees/OnboardingChecklist';
import { OnboardingDashboard } from './components/employees/OnboardingDashboard';
import { OnboardingNew } from './components/employees/OnboardingNew';
import { OffboardingChecklist } from './components/employees/OffboardingChecklist';
import { ExitProcess } from './components/employees/ExitProcess';
import { OffboardingDashboard } from './components/employees/OffboardingDashboard';
import { TaskDashboard } from './components/task/TaskDashboard';
import { TaskProjects } from './components/task/TaskProjects';
import { TaskKanban } from './components/task/TaskKanban';
import { AddNewTask } from './components/task/AddNewTask';
import { SubtasksManagement } from './components/task/SubtasksManagement';
import { TaskDependencies } from './components/task/TaskDependencies';
import { TaskAssignment } from './components/task/TaskAssignment';
import { TaskTimeline } from './components/task/TaskTimeline';
import { TaskDetails } from './components/task/TaskDetails';
import { JobOpeningsList } from './components/recruitment/JobOpeningsList';
import { ApplicantsList } from './components/recruitment/ApplicantsList';
import { InterviewsList } from './components/recruitment/InterviewsList';
import { InterviewCalendar } from './components/recruitment/InterviewCalendar';

function MeetingsLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigate = (path, id) => {
    if (path === 'all') {
      navigate('/meetings');
    } else if (path === 'new') {
      navigate('/meetings/new');
    } else if (path === 'confirmation') {
      navigate('/meetings/confirmation');
    } else if (path === 'meeting-details' && id) {
      navigate(`/meetings/${id}`);
    } else if (path === 'edit-meeting' && id) {
      navigate(`/meetings/edit/${id}`);
    } else if (path === 'calendar' || path === 'calendar-add-meeting') {
      navigate('/meetings/calendar');
    } else {
      console.warn(`Unknown navigation path: ${path}`);
    }
  };

  return React.cloneElement(children, { onNavigate: handleNavigate });
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Close mobile sidebar when clicking outside
  const handleClickOutside = (e) => {
    if (isMobileSidebarOpen && !e.target.closest('.sidebar-container')) {
      setIsMobileSidebarOpen(false);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileSidebarOpen]);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}
      
      {/* Sidebar - sticky */}
      <div className={`sidebar-container fixed lg:sticky top-0 left-0 h-screen z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <Sidebar 
          collapsed={!sidebarOpen} 
          onToggle={toggleSidebar} 
        />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - sticky */}
        <div className="sticky top-0 z-10">
          <Header 
            toggleSidebar={toggleSidebar} 
            onToggleMobileSidebar={toggleMobileSidebar}
            darkMode={false} // Add this if you're implementing dark mode
            onToggleDarkMode={() => {}} // Add your dark mode toggle function here
          />
        </div>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/attendance/shifts" element={<ShiftManagement/>} />
            <Route path="/attendance/overtime" element={<OvertimeHours/>} />
            <Route path="/attendance/holidays" element={<HolidayManagement/>} />
            <Route path="/attendance/punch" element={<PunchRecords/>} />
            <Route path="/attendance/policy" element={<PolicyRules/>} />
            <Route path="/attendance/leave" element={<LeaveTracking/>} />
            <Route path="/attendance/employee-profile" element={<EmployeeAttendanceProfile />}/>
            <Route path="/attendance/calendar" element={<AttendanceCalendar/>}/>
            <Route path="/leave" element={<Leave />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/employee-details" element={<EmployeeDetails />} />
            <Route path="/new-employee" element={<AddEmployee />} />
            <Route path="/employee-directory" element={<EmployeeDirectory />} />
            <Route path="/employee-profile" element={<EmployeeProfile />} />
            <Route path="/onboarding-checklist" element={<OnboardingChecklist />} />
            <Route path="/employees/onboarding" element={<OnboardingDashboard />} />
            <Route path="/task-projects" element={<TaskProjects />} />
            <Route path="/task-kanban" element={<TaskKanban />} />
            <Route path="/task-dashboard" element={<TaskDashboard />} />
            <Route path="/task-dependencies" element={<TaskDependencies />} />
            <Route path="/employees/onboarding/new" element={<OnboardingNew />} />
            <Route path="/subtasks-management" element={<SubtasksManagement />} />
            <Route path="/task-assignment" element={<TaskAssignment />} />
            <Route path="/task-timeline" element={<TaskTimeline />} />
            <Route path="/task-details" element={<TaskDetails />} />
            <Route path="/meetings" element={
              <MeetingsLayout>
                <AllMeetings />
              </MeetingsLayout>
            } />
            <Route path="/offboarding-checklist" element={<OffboardingChecklist />} />
            <Route path="/new-task" element={<AddNewTask />} />
            <Route path="/exit-process" element={<ExitProcess />} />
            <Route path="/offboarding-dashboard" element={<OffboardingDashboard />} />
            <Route path="/meetings/new" element={
              <MeetingsLayout>
                <NewMeeting />
              </MeetingsLayout>
            } />
            <Route path="/meetings/confirmation" element={
              <MeetingsLayout>
                <MeetingConfirmation />
              </MeetingsLayout>
            } />
            <Route path="/meetings/:meetingId" element={
              <MeetingsLayout>
                <MeetingDetails />
              </MeetingsLayout>
            } />
            <Route path="/meetings/edit/:meetingId" element={
              <MeetingsLayout>
                <EditMeeting />
              </MeetingsLayout>
            } />
            <Route path="/meetings/edit/:meetingId" element={
              <MeetingsLayout>
                <EditMeeting />
              </MeetingsLayout>
            } />
            <Route path="/meetings/calendar" element={
              <MeetingsLayout>
                <MeetingCalendar />
              </MeetingsLayout>
            } />
            <Route path="/job-openings" element={<JobOpeningsList />} />
            <Route path="/applicants-list" element={<ApplicantsList />} />
            <Route path="/interviews" element={<InterviewsList />} />
            <Route path="/interview-calendar" element={<InterviewCalendar />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
