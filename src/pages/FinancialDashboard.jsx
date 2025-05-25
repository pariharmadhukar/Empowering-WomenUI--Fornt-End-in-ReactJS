import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function FinancialDashboard() {
  const budgetData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Savings',
        data: [300, 450, 600, 750, 900, 1200],
        borderColor: 'rgb(147, 51, 234)',
        tension: 0.1,
      },
    ],
  };

  const modules = [
    {
      title: "Budgeting Basics",
      progress: 75,
      description: "Learn fundamental budgeting principles"
    },
    {
      title: "Investment 101",
      progress: 30,
      description: "Introduction to investment strategies"
    },
    {
      title: "Debt Management",
      progress: 50,
      description: "Effective strategies for managing debt"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Financial Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Savings Tracker</h2>
          <Line data={budgetData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Set New Budget Goal
            </button>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Track Expenses
            </button>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Investment Calculator
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Learning Modules</h2>
        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.title} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-purple-600">{module.title}</h3>
                <span className="text-sm text-gray-500">{module.progress}% Complete</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{module.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FinancialDashboard;