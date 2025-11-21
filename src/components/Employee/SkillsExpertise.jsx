import React from "react";

export const SkillsExpertise = ({ skills }) => (
  <div className="neu-card p-8 rounded-3xl">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#333333] mb-2">Skills & Expertise</h3>
      <p className="text-[#666666]">Technical competencies</p>
    </div>

    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="neu-small p-3 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#333333]">{skill}</span>
            <span className="px-2 py-1 bg-[#05A7CC] text-white rounded-full text-xs">
              Expert
            </span>
          </div>
        </div>
      ))}
    </div>

    <button className="w-full neu-button p-3 rounded-2xl mt-4 hover:text-[#ef5226] transition-colors">
      Update Skills
    </button>
  </div>
);
