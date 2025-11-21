import React from 'react';

const PayrollLegends = () => {
    return (
        <div className="neu-card p-6 rounded-2xl">
            <div className="flex items-center justify-center space-x-8">
                {/* Attendance Status Legends */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                        <h2 className="text-sm font-semibold text-[#333333] mr-4">Color Legends:</h2>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#4CAF50] rounded-full mr-2"></div>
                        <span className="text-sm text-[#666666]">Present</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#F44336] rounded-full mr-2"></div>
                        <span className="text-sm text-[#666666]">Absent</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#FF9800] rounded-full mr-2"></div>
                        <span className="text-sm text-[#666666]">Late</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#9C27B0] rounded-full mr-2"></div>
                        <span className="text-sm text-[#666666]">Leave</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#FFC107] rounded-full mr-2"></div>
                        <span className="text-sm text-[#666666]">Holiday</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-[#666666]">Week Off</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#2196F3] rounded-full mr-2"></div>
                        <span className="text-sm text-[#666666]">Remote</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PayrollLegends;