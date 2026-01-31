// src/pages/DashboardPage.jsx
import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import ProjectTable from '../components/dashboard/ProjectTable';
import TaskPerformanceChart from '../components/dashboard/TaskPerformanceChart';
import TeamList from '../components/dashboard/TeamList';
import TasksList from '../components/dashboard/TasksList';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="bg-primary pt-20 pb-30 -mx-4 px-6"></div>
      <div className="space-y-10 ">
          <div className="grid -mt-40">
            <div className="flex justify-between items-center">
              <div className="mb-2 lg:mb-0">
                <h3 className="mb-0 text-white text-xl font-semibold">Projects</h3>
              </div>
              <div>
                <a href="#!" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition">
                  Create New Project
                </a>
              </div>
            </div>
          </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Projects" value="18" completed="2" />
          <StatCard title="Productivity" value="75%" completed="5 +%" />
          <StatCard title="Active Task" value="132" completed="28" />
          <StatCard title="Teams" value="12" completed="1" />
        </div>

        {/* Projects & Chart Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8">
            <ProjectTable />
          </div>
          <div className="xl:col-span-4">
            <TaskPerformanceChart />
          </div>
        </div>

        {/* Tasks & Teams */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-6">
            <TasksList />
          </div>
          <div className="xl:col-span-6">
            <TeamList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
