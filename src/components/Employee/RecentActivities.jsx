import React from "react";
import { Award, User, Building, CheckCircle, Clock } from "lucide-react";

const getActivityIcon = (type) => {
  switch (type) {
    case "achievement":
      return <Award className="w-4 h-4 text-[#4CAF50]" />;
    case "responsibility":
      return <User className="w-4 h-4 text-[#05A7CC]" />;
    case "project":
      return <Building className="w-4 h-4 text-[#ef5226]" />;
    case "training":
      return <CheckCircle className="w-4 h-4 text-[#9C27B0]" />;
    default:
      return <Clock className="w-4 h-4 text-[#666666]" />;
  }
};

export const RecentActivities = ({ activities }) => (
  <div className="neu-card p-8 rounded-3xl">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#333333] mb-2">Recent Activities</h3>
      <p className="text-[#666666]">Latest achievements and activities</p>
    </div>

    <div className="space-y-3">
      {activities.map((activity, index) => (
        <div key={index} className="neu-small p-4 rounded-2xl">
          <div className="flex items-start space-x-3">
            <div className="mt-1">{getActivityIcon(activity.type)}</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#333333]">{activity.activity}</p>
              <p className="text-xs text-[#666666]">
                {new Date(activity.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button className="w-full neu-button p-3 rounded-2xl mt-4 hover:text-[#05A7CC] transition-colors">
      View All Activities
    </button>
  </div>
);
