import React from "react";
import { Award, CheckCircle, TrendingUp, User } from "lucide-react";

export const EmployeeKeyMetrics = ({ employee }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Performance Rating */}
      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="w-16 h-16 neu-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-[#333333] mb-2">
          {employee.performance.currentRating}/5
        </div>
        <div className="text-sm text-[#666666]">Performance Rating</div>
        <div className="text-xs text-[#4CAF50] mt-1">
          Last reviewed: {new Date(employee.performance.lastReviewDate).toLocaleDateString()}
        </div>
      </div>

      {/* Attendance */}
      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="w-16 h-16 neu-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-[#333333] mb-2">
          {employee.attendance.thisMonth.present}
        </div>
        <div className="text-sm text-[#666666]">Days Present (This Month)</div>
        <div className="text-xs text-[#05A7CC] mt-1">
          {Math.round(
            (employee.attendance.thisMonth.present /
              (employee.attendance.thisMonth.present + employee.attendance.thisMonth.absent)) * 100
          )}% Attendance
        </div>
      </div>

      {/* Goals Completed */}
      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="w-16 h-16 bg-[#4CAF50] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-[#333333] mb-2">
          {employee.performance.goals.filter(g => g.progress === 100).length}
        </div>
        <div className="text-sm text-[#666666]">Goals Completed</div>
        <div className="text-xs text-[#4CAF50] mt-1">
          Out of {employee.performance.goals.length} total goals
        </div>
      </div>

      {/* Direct Reports */}
      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="w-16 h-16 bg-[#9C27B0] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-[#333333] mb-2">
          {employee.jobInfo.directReports.length}
        </div>
        <div className="text-sm text-[#666666]">Direct Reports</div>
        <div className="text-xs text-[#666666] mt-1">Team leadership role</div>
      </div>

    </div>
  );
};
