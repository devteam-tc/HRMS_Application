import React from 'react';
import { Calendar, Users, Clock, TrendingUp } from 'lucide-react';

export const KpiCards = ({ totalMeetings, totalParticipants, totalDuration, averageAttendance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Total Meetings */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="neu-small p-3 rounded-2xl">
            <Calendar className="h-6 w-6 text-[#2C318E]" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-[#333333]">{totalMeetings}</div>
            <div className="text-sm text-[#4CAF50] font-medium">+15% vs last period</div>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#333333] mb-1">Total Meetings</h3>
          <div className="text-xs text-[#666666]">Average: {Math.round(totalMeetings / 6)} per month</div>
        </div>
      </div>

      {/* Total Participants */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="neu-small p-3 rounded-2xl">
            <Users className="h-6 w-6 text-[#4CAF50]" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-[#333333]">{totalParticipants}</div>
            <div className="text-sm text-[#2C318E] font-medium">+8% vs last period</div>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#333333] mb-1">Total Participants</h3>
          <div className="text-xs text-[#666666]">Average: {Math.round(totalParticipants / totalMeetings)} per meeting</div>
        </div>
      </div>

      {/* Total Duration */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="neu-small p-3 rounded-2xl">
            <Clock className="h-6 w-6 text-[#9C27B0]" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-[#333333]">{Math.round(totalDuration / 60)}h</div>
            <div className="text-sm text-[#CA2030] font-medium">-5% vs last period</div>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#333333] mb-1">Total Duration</h3>
          <div className="text-xs text-[#666666]">Average: {Math.round(totalDuration / totalMeetings)} min per meeting</div>
        </div>
      </div>

      {/* Attendance Rate */}
      <div className="neu-card p-6 rounded-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="neu-small p-3 rounded-2xl">
            <TrendingUp className="h-6 w-6 text-[#FF9800]" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-[#333333]">{Math.round(averageAttendance)}%</div>
            <div className="text-sm text-[#4CAF50] font-medium">+3% vs last period</div>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[#333333] mb-1">Attendance Rate</h3>
          <div className="text-xs text-[#666666]">Target: 85%</div>
        </div>
      </div>
    </div>
  );
};
