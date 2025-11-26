import React from 'react';
import { Users, Wallet, FileText, BarChart2 } from 'lucide-react';

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Total Employees Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Employees</p>
                        <p className="text-2xl font-semibold">1,247</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <Users className="text-blue-600" size={24} />
                    </div>
                </div>
            </div>

            {/* Total Gross Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Gross</p>
                        <p className="text-2xl font-semibold">₹3,92,200</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                        <Wallet className="text-green-600" size={24} />
                    </div>
                </div>
            </div>

            {/* Processed Payrolls Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Processed Payrolls</p>
                        <p className="text-2xl font-semibold">26/146</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                        <FileText className="text-purple-600" size={24} />
                    </div>
                </div>
            </div>

            {/* Pending Payrolls Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Pending Payrolls</p>
                        <p className="text-2xl font-semibold">20</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                        <BarChart2 className="text-red-600" size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsCards;