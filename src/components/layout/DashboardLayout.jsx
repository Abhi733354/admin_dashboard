import React, { useState } from 'react';
import Sidebar from './SIdebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`flex flex-col flex-1 transition-all duration-300 ${sidebarOpen ? 'pl-64' : ''}`}>
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="px-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
