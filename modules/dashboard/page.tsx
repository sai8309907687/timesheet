"use client";
import React from 'react';
import { Users, Clock, TrendingUp, DollarSign } from 'lucide-react';
import { summaryCards, bottomCards } from './common/data';
import HoursByClientChart from './charts/hours-by-client';
import HoursByProjectTypeChart from './charts/hours-by-project-type';

const iconMap: any = {
  users: Users,
  clock: Clock,
  'trending-up': TrendingUp,
  'dollar-sign': DollarSign
};

export default function DashboardPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500">System overview and analytics</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Placeholder for header actions if needed */}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {summaryCards.map((card, index) => {
          const Icon = iconMap[card.icon];
          return (
            <div key={index} className="card bg-white shadow-sm border border-gray-100 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-gray-500 font-medium text-sm">{card.title}</span>
                <div className={`p-2 rounded-lg ${card.color}`}>
                  {Icon && <Icon size={20} />}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{card.value}</div>
              <div className="text-sm text-gray-400">{card.subtitle}</div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="card bg-white shadow-sm border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow h-full">
          <h3 className="text-lg font-bold text-gray-900 mb-4 bg-white/50 backdrop-blur-sm z-10 relative">Hours by Client</h3>
          <div className="h-[300px] w-full">
            <HoursByClientChart />
          </div>
        </div>
        <div className="card bg-white shadow-sm border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow h-full">
          <h3 className="text-lg font-bold text-gray-900 mb-4 bg-white/50 backdrop-blur-sm z-10 relative">Hours by Project Type</h3>
          <div className="h-[300px] w-full">
            <HoursByProjectTypeChart />
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bottomCards.map((card, index) => (
          <div key={index} className="card bg-white shadow-sm border border-gray-100 p-6 rounded-xl">
            <h3 className="text-gray-500 font-medium text-sm mb-4">{card.title}</h3>
            {card.isLink ? (
              <button className="btn btn-link p-0 text-xl font-bold text-gray-900 no-underline hover:underline">
                {card.value}
              </button>
            ) : (
              <div className="text-3xl font-bold text-gray-900">{card.value}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
