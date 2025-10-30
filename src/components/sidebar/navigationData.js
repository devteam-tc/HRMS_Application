import {
  LayoutDashboard,
  Users,
  Clock,
  UserPlus,
  Calendar,
  MapPin,
  CheckSquare,
  Settings,
  ClockIcon,
  Briefcase,
  FileText,
  CalendarDays,
  Image,
  FolderOpen,
  Kanban,
  Plus,
  BarChart3,
  GitBranch,
  CheckCircle,
  User,
} from "lucide-react";

export const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "employees",
    label: "Employee Management",
    icon: Users,
    subItems: [
      { id: "employee-directory", label: "HR Dashboard", icon: LayoutDashboard , path: '/employee-directory' },
      { id: "employee-profile", label: "Employee Profile", icon: User , path: '/employee-profile' },
      { id: "onboarding-dashboard", label: "Onboarding", icon: LayoutDashboard  , path: '/onboarding-dashboard' },
      { id: "offboarding-dashboard", label: "Offboarding", icon: LayoutDashboard  , path: '/offboarding-dashboard' },
      { id: "neumorphic-dashboard", label: "Admin Dashboard", icon: LayoutDashboard  , path: '/admin-dashboard' },
    ],
  },


   
  {
    id: "attendance",
    label: "Attendance",
    icon: Clock,
    subItems: [
      { id: "attendance-dashboard", label: "Attendance Dashboard", icon: LayoutDashboard, path: '/attendance' },
      { id: "attendance-calendar", label: "Attendance Calendar", icon: CalendarDays, path: '/attendance-calendar' },
      { id: "punch-records", label: "Punch In/Out Records", icon: Clock, path: '/punch-records' },
      { id: "shift-management", label: "Shift Management", icon: Settings, path: '/shift-management' },
      { id: "leave-tracking", label: "Leave & Absence Tracking", icon: Calendar, path: '/leave-tracking' },
      { id: "overtime-hours", label: "Overtime & Working Hours", icon: ClockIcon, path: '/overtime-hours' },
      { id: "holiday-management", label: "Holiday Management", icon: CalendarDays, path: '/holiday-management' },
      { id: "policy-rules", label: "Policy & Rules Setup", icon: Settings, path: '/policy-rules' },
      { id: "employee-attendance-profile", label: "Employee Profile", icon: Users, path: '/employee-attendance-profile' },
      { id: "punch-in-out", label: "Punch In/Out", icon: Clock, path: '/punch-in-out' },
    ],
  },

  
  {
    id: "recruitment",
    label: "Recruitment",
    icon: UserPlus,
    subItems: [
      { id: "job-openings", label: "Job Openings", icon: Briefcase , path: '/job-openings' },
      { id: "applicants", label: "Applicants", icon: Users , path: '/applicants-list' },
      { id: "interviews", label: "Interviews", icon: FileText , path: '/interviews' },
      { id: "interview-calendar", label: "Interview Calendar", icon: CalendarDays , path: '/interview-calendar' },
    ],
  },



  


  {
    id: "meetings",
    label: "Meetings",
    icon: Calendar,
    subItems: [
      { id: "all-meetings", label: "All Meetings", icon: FileText ,  path: '/meetings'},
      { id: "new-meeting", label: "New Meeting", icon: Plus , path: '/meetings/new'},
      { id: "meeting-calendar", label: "Meeting Calendar", icon: CalendarDays , path: '/meetings/calendar'},
      { id: "meeting-attachments", label: "Attachments", icon: Image , path: '/meetings/attachments'},
      { id: "meeting-reports", label: "Reports & Analytics", icon: BarChart3 , path: '/meetings/reports'},
    ],
  },



  {
    id: "vslm",
    label: "VSLM",
    icon: MapPin,
    subItems: [
      { id: "all-projects", label: "All Projects", icon: FolderOpen },
      { id: "uploaded-images", label: "Uploaded Images", icon: Image },
      { id: "project-timeline", label: "Project Timeline", icon: CalendarDays },
      { id: "site-visit-log", label: "Site Visit Log", icon: MapPin },
      { id: "vslm-analytics", label: "Analytics", icon: BarChart3 },
      { id: "project-reports", label: "Reports", icon: FileText },
    ],
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: CheckSquare,
    subItems: [
      { id: "task-dashboard", label: "Task Dashboard", icon: LayoutDashboard  ,  path: '/task-dashboard' },
      { id: "task-projects", label: "Projects (Development)", icon: FolderOpen  , path: '/task-projects' },
      { id: "task-kanban", label: "Task Status (Kanban)", icon: Kanban  , path: '/task-kanban' },
      { id: "add-new-task", label: "Add New Task", icon: Plus  , path: '/new-task' },
      { id: "task-details", label: "Task Details", icon: FileText  , path: '/task-details' },
      { id: "subtasks-management", label: "Subtasks", icon: CheckCircle  , path: '/subtasks-management' },
      { id: "task-dependencies", label: "Dependencies", icon: GitBranch  , path: '/task-dependencies' },
      { id: "task-assignment", label: "Team Assignment", icon: Users  , path: '/task-assignment' },
      { id: "task-timeline", label: "Timeline (Gantt)", icon: CalendarDays  , path: '/task-timeline' },
      { id: "task-analytics", label: "Analytics & Reports", icon: BarChart3  , path: '/task-analytics' },
    ],
  },
];


