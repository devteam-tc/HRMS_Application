// src/data/employeeData.js

export const employee = {
  id: 1,
  name: 'John Smith',
  designation: 'Senior Software Engineer',
  department: 'Engineering',
  team: 'Frontend Development',
  status: 'Active',
  joiningDate: '2022-03-15',
  probationEnd: '2022-09-15',
  location: 'New York Office',
  manager: 'Sarah Wilson',
  employeeId: 'EMP001',
  avatar: '/placeholder-avatar.jpg',
  
  personalInfo: {
    phone: '+1 234-567-8901',
    email: 'john.smith@company.com',
    address: '123 Main Street, Apt 4B, New York, NY 10001',
    dateOfBirth: '1990-05-15',
    emergencyContact: {
      name: 'Jane Smith',
      relationship: 'Spouse',
      phone: '+1 234-567-8902'
    }
  },

  jobInfo: {
    salary: '$85,000',
    workType: 'Full-time',
    skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Git'],
    reportingTo: 'Sarah Wilson',
    directReports: ['Alice Johnson', 'Bob Davis'],
    workLocation: 'Hybrid',
    shiftTime: '9:00 AM - 6:00 PM'
  },

  performance: {
    currentRating: 4.5,
    lastReviewDate: '2023-12-15',
    goals: [
      { title: 'Complete React Certification', progress: 80, deadline: '2024-03-01' },
      { title: 'Lead New Project Implementation', progress: 60, deadline: '2024-04-15' },
      { title: 'Mentor 2 Junior Developers', progress: 100, deadline: '2024-02-01' }
    ]
  },

  attendance: {
    thisMonth: {
      present: 18,
      absent: 2,
      late: 1,
      overtime: 5
    },
    yearToDate: {
      totalDays: 240,
      present: 220,
      absent: 8,
      leaves: 12
    }
  },

  recentActivities: [
    { date: '2024-01-20', activity: 'Completed Q4 Performance Review', type: 'achievement' },
    { date: '2024-01-18', activity: 'Started mentoring Alice Johnson', type: 'responsibility' },
    { date: '2024-01-15', activity: 'Submitted React project proposal', type: 'project' },
    { date: '2024-01-12', activity: 'Attended leadership training', type: 'training' },
    { date: '2024-01-10', activity: 'Received client appreciation', type: 'achievement' }
  ]
};

export const performanceData = [
  { month: 'Jul', rating: 4.2, productivity: 85 },
  { month: 'Aug', rating: 4.3, productivity: 88 },
  { month: 'Sep', rating: 4.4, productivity: 90 },
  { month: 'Oct', rating: 4.3, productivity: 87 },
  { month: 'Nov', rating: 4.5, productivity: 92 },
  { month: 'Dec', rating: 4.5, productivity: 94 }
];

export const attendanceData = [
  { month: 'Jul', present: 22, absent: 1, late: 0 },
  { month: 'Aug', present: 21, absent: 2, late: 1 },
  { month: 'Sep', present: 23, absent: 0, late: 0 },
  { month: 'Oct', present: 22, absent: 1, late: 1 },
  { month: 'Nov', present: 20, absent: 3, late: 2 },
  { month: 'Dec', present: 18, absent: 2, late: 1 }
];
