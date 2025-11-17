import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Briefcase, MapPin, Users, Calendar, Building2, MoreVertical, Edit, Eye, Archive, Trash2 } from 'lucide-react';

export const JobOpeningsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'New York',
      jobType: 'Full-time',
      openings: 3,
      applications: 24,
      status: 'Open',
      postedDate: '2024-01-15',
      hiringManager: 'John Smith',
      salaryRange: '$90,000 - $130,000',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco',
      jobType: 'Full-time',
      openings: 1,
      applications: 18,
      status: 'In Progress',
      postedDate: '2024-01-10',
      hiringManager: 'Sarah Johnson',
      salaryRange: '$100,000 - $140,000',
      priority: 'High'
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      jobType: 'Full-time',
      openings: 2,
      applications: 31,
      status: 'Open',
      postedDate: '2024-01-08',
      hiringManager: 'Mike Brown',
      salaryRange: '$70,000 - $100,000',
      priority: 'Medium'
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Boston',
      jobType: 'Part-time',
      openings: 1,
      applications: 12,
      status: 'Closed',
      postedDate: '2024-01-05',
      hiringManager: 'Lisa Davis',
      salaryRange: '$45,000 - $60,000',
      priority: 'Low'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin',
      jobType: 'Full-time',
      openings: 2,
      applications: 16,
      status: 'Open',
      postedDate: '2024-01-12',
      hiringManager: 'Tom Wilson',
      salaryRange: '$85,000 - $120,000',
      priority: 'High'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'text-green-600 bg-green-50';
      case 'In Progress': return 'text-blue-600 bg-blue-50';
      case 'Closed': return 'text-red-600 bg-red-50';
      case 'Archived': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-orange-600 bg-orange-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || job.department === filterDepartment;
    const matchesStatus = filterStatus === 'all' || job.status === filterStatus;
    const matchesLocation = filterLocation === 'all' || job.location === filterLocation;
    
    return matchesSearch && matchesDepartment && matchesStatus && matchesLocation;
  });

  return (
    <div className="p-8 bg-[#FDFAFA] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#333333] mb-2">Job Openings</h1>
          <p className="text-[#666666]">Manage job postings and track applications</p>
        </div>
        <button
          onClick={() => navigate('/new-job-opening')}
          className="neu-primary px-6 py-3 rounded-2xl flex items-center space-x-2 transition-all duration-200 hover:shadow-lg"
        >
          <Plus size={20} />
          <span>New Job Opening</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="neu-card p-6 rounded-3xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-[60%] transform -translate-y-1/2 text-[#666666]" size={20} />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="neu-input w-full pl-12 pr-4 py-3 text-[#333333] placeholder-[#666666] focus:outline-none"
            />
          </div>

          {/* Department Filter */}
          <div className="relative">
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
            <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Status</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
              <option value="Archived">Archived</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Location Filter */}
          <div className="relative">
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="neu-input pl-4 pr-10 py-3 text-[#333333] focus:ring-2 focus:ring-[#05A7CC] transition-all appearance-none w-full"
            >
              <option value="all">All Locations</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Remote">Remote</option>
              <option value="Boston">Boston</option>
              <option value="Austin">Austin</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-[#05A7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Job Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="neu-card p-6 rounded-3xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#666666] text-sm mb-1">Total Openings</p>
              <p className="text-2xl font-bold text-[#333333]">{jobOpenings.length}</p>
            </div>
            <div className="neu-small p-4 rounded-2xl">
              <Briefcase size={24} className="text-[#CA2030]" />
            </div>
          </div>
        </div>

        <div className="neu-card p-6 rounded-3xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#666666] text-sm mb-1">Active Jobs</p>
              <p className="text-2xl font-bold text-[#333333]">{jobOpenings.filter(j => j.status === 'Open').length}</p>
            </div>
            <div className="neu-small p-4 rounded-2xl">
              <Users size={24} className="text-[#2C318E]" />
            </div>
          </div>
        </div>

        <div className="neu-card p-6 rounded-3xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#666666] text-sm mb-1">Total Applications</p>
              <p className="text-2xl font-bold text-[#333333]">{jobOpenings.reduce((sum, job) => sum + job.applications, 0)}</p>
            </div>
            <div className="neu-small p-4 rounded-2xl">
              <Users size={24} className="text-[#CA2030]" />
            </div>
          </div>
        </div>

        <div className="neu-card p-6 rounded-3xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#666666] text-sm mb-1">Positions Available</p>
              <p className="text-2xl font-bold text-[#333333]">{jobOpenings.reduce((sum, job) => sum + job.openings, 0)}</p>
            </div>
            <div className="neu-small p-4 rounded-2xl">
              <Building2 size={24} className="text-[#2C318E]" />
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings Table */}
      <div className="neu-card rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#E8EBEF]">
              <tr>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Job Title</th>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Department</th>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Location</th>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Openings</th>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Applications</th>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Status</th>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Priority</th>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Posted</th>
                <th className="text-left py-4 px-6 text-[#333333] font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job, index) => (
                <tr key={job.id} className={index % 2 === 0 ? 'bg-[#ECF0F3]' : 'bg-[#F5F8FB]'}>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-1">{job.title}</p>
                      <p className="text-sm text-[#666666]">{job.jobType}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <Building2 size={16} className="text-[#666666] mr-2" />
                      <span className="text-[#333333]">{job.department}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-[#666666] mr-2" />
                      <span className="text-[#333333]">{job.location}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-[#333333] font-medium">{job.openings}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-[#333333] font-medium">{job.applications}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(job.priority)}`}>
                      {job.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-[#666666] mr-2" />
                      <span className="text-[#333333]">{job.postedDate}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => navigate('/job-opening-details')}
                        className="neu-small p-2 rounded-xl hover:shadow-md transition-all duration-200"
                        title="View Details"
                      >
                        <Eye size={16} className="text-[#2C318E]" />
                      </button>
                      <button
                        onClick={() => navigate('/edit-job-opening')}
                        className="neu-small p-2 rounded-xl hover:shadow-md transition-all duration-200"
                        title="Edit"
                      >
                        <Edit size={16} className="text-[#CA2030]" />
                      </button>
                      <button
                        className="neu-small p-2 rounded-xl hover:shadow-md transition-all duration-200"
                        title="More Actions"
                      >
                        <MoreVertical size={16} className="text-[#666666]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase size={48} className="text-[#666666] mx-auto mb-4" />
            <p className="text-[#666666] text-lg">No job openings found</p>
            <p className="text-[#666666] text-sm">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};