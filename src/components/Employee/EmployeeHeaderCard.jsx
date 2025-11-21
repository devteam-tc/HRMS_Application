import React from "react";
import { Building, User, Calendar, Phone, Mail } from "lucide-react";

export const EmployeeHeaderCard = ({ employee }) => {
  return (
    <div className="neu-small p-6 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 neu-gradient rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-[#05A7CC]">
              {employee.name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#333333] mb-2">{employee.name}</h2>
            <p className="text-xl text-[#666666] mb-2">{employee.designation}</p>

            <div className="flex items-center space-x-6 text-sm text-[#999999]">
              <span className="flex items-center">
                <Building size={14} className="mr-1" />
                {employee.department} • {employee.team}
              </span>
              <span className="flex items-center">
                <User size={14} className="mr-1" />
                {employee.employeeId}
              </span>
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {Math.floor((Date.now() - new Date(employee.joiningDate)) / (1000 * 60 * 60 * 24 * 365))} years at company
              </span>
            </div>

            <div className="flex items-center space-x-4 mt-3">
              <span className="flex items-center text-sm text-[#666666]">
                <Phone size={14} className="mr-1" />
                {employee.personalInfo.phone}
              </span>
              <span className="flex items-center text-sm text-[#666666]">
                <Mail size={14} className="mr-1" />
                {employee.personalInfo.email}
              </span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              employee.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {employee.status}
          </span>
          <p className="text-sm text-[#666666] mt-2">Reports to: {employee.manager}</p>
          <p className="text-sm text-[#666666]">Location: {employee.location}</p>
        </div>
      </div>
    </div>
  );
};
