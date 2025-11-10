import React from 'react';
import { Calendar, Globe, MapPin, Building } from 'lucide-react';

export const HolidayStats = ({ holidays }) => {
  const stats = [
    {
      label: 'Total Holidays',
      value: holidays.length,
      icon: Calendar,
      color: 'from-[#CA2030] to-[#d4471f]',
      textColor: 'text-[#333333]'
    },
    {
      label: 'National Holidays',
      value: holidays.filter(h => h.type === 'national').length,
      icon: Globe,
      color: 'from-[#2C318E] to-[#048ba8]',
      textColor: 'text-[#2C318E]'
    },
    {
      label: 'Religious Holidays',
      value: holidays.filter(h => h.type === 'religious').length,
      icon: MapPin,
      color: 'from-purple-400 to-purple-600',
      textColor: 'text-purple-600'
    },
    {
      label: 'Company Holidays',
      value: holidays.filter(h => h.type === 'company').length,
      icon: Building,
      color: 'from-[#CA2030] to-[#d4471f]',
      textColor: 'text-[#CA2030]'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="neu-card p-6 rounded-2xl text-center hover:shadow-lg transition-all">
            <div className={`neu-small p-3 rounded-xl mb-4 bg-gradient-to-br ${stat.color} inline-block`}>
              <Icon size={24} className="text-white" />
            </div>
            <h3 className={`text-2xl font-bold ${stat.textColor} mb-1`}>
              {stat.value}
            </h3>
            <p className="text-[#666666] text-sm">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};
