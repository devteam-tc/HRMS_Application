// MeetingStats.jsx
import React from 'react';

export const MeetingStats = ({ meetings }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="text-3xl font-bold text-[#333333] mb-2">{meetings.length}</div>
        <div className="text-[#666666]">Total Meetings</div>
      </div>

      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="text-3xl font-bold text-[#05A7CC] mb-2">
          {meetings.filter(m => m.status === 'scheduled').length}
        </div>
        <div className="text-[#666666]">Scheduled</div>
      </div>

      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="text-3xl font-bold text-[#4CAF50] mb-2">
          {meetings.filter(m => m.status === 'completed').length}
        </div>
        <div className="text-[#666666]">Completed</div>
      </div>

      <div className="neu-card p-6 rounded-3xl text-center">
        <div className="text-3xl font-bold text-[#EF5226] mb-2">
          {meetings.filter(m => m.status === 'cancelled').length}
        </div>
        <div className="text-[#666666]">Cancelled</div>
      </div>
    </div>
  );
};
