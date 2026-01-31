import React, { useState } from 'react';
import adminLogo from "../../assets/adminLogo.png";

const Sidebar = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState('Project');
  const [projectOpen, setProjectOpen] = useState(true);

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    if (sectionName === 'Project') {
      setProjectOpen(!projectOpen);
    }
  };

  return (
    <div className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 z-40 flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Brand */}
        <a href="/" className="flex justify-start items-center h-18 ml-2 mb-0">
          <img
            src={adminLogo}
            alt="Admin Logo"
            className="h-full w-auto object-contain min-h-[150px]"
          />
        </a>

        {/* Menu */}
        <nav className="flex-1 px-4 space-y-4">
          <button
  onClick={() => setActiveSection('Dashboard')}
  className={`flex items-center w-full py-2 px-2 gap-2 text-left font-medium transition-colors duration-150
    ${activeSection === 'Dashboard' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}
  `}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`feather feather-home nav-icon ${activeSection === 'Dashboard' ? 'text-blue-600' : 'text-gray-500'}`}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
  <span className="uppercase text-md">Dashboard</span>
</button>


          {/* Project Section */}
          <div>
            <button
              className={`flex items-center w-full py-2 px-2 font-medium transition-colors duration-150 ${activeSection === 'Project' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-800'
                }`}
              onClick={() => handleSectionClick('Project')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`me-2 icon-xxs ${activeSection === 'Project' ? 'text-blue-600' : 'text-gray-500'
                  }`}
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
              <span className="ml-2">Project</span>
              <svg
                className={`w-4 h-4 ml-auto transform transition-transform ${projectOpen ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Submenu */}
            {projectOpen && (
              <ul className="mt-1 ml-8 space-y-1 text-sm">
                {['Analytics', 'Ecommerce', 'CRM', 'Finance', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`block py-1 ${activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-600'
                        } hover:text-blue-600`}
                      onClick={() => setActiveSection(item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
