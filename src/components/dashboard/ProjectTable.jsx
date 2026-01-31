// src/components/dashboard/ProjectTable.jsx

import React from 'react';
import brandLogo from '../../assets/brand-logo-1.svg'; 

const ProjectTable = () => {
  return (
    <div className="xl:col-span-8 bg-white rounded-lg p-0 border border-gray-200 shadow-md">
      {/* Card Header */}
      <div className="bg-white-100 border-b border-gray-300 px-4 py-6">
        <h4 className="mb-0 text-gray-800 font-semibold">Active Projects</h4>
      </div>

      {/* Card Body */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-left text-gray-700 whitespace-nowrap">
          <thead className="bg-blue-100 text-gray-700 font-semibold border-b border-gray-400">
            <tr>
              <th className="px-4 py-3 text-black">Project name</th>
              <th className="px-4 py-3 text-black">Hours</th>
              <th className="px-4 py-3 text-black">Priority</th>
              <th className="px-4 py-3 text-black">Members</th>
              <th className="px-4 py-3 text-black">Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <img src={brandLogo} alt="Brand Logo" className="w-8 h-auto" />
                  <div className="ml-3 leading-tight">
                    <h5 className="mb-0">
                      <a href="#!" className="text-blue-600 hover:underline">
                        Dropbox Design System
                      </a>
                    </h5>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">34</td>
              <td className="px-4 py-4">
                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs font-medium">
                  Medium
                </span>
              </td>
              <td className="px-4 py-4">
                <div className="flex -space-x-3">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="assets/images/avatar/avatar-11.jpg"
                    alt="avatar"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="assets/images/avatar/avatar-2.jpg"
                    alt="avatar"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="assets/images/avatar/avatar-3.jpg"
                    alt="avatar"
                  />
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 border-2 border-white flex items-center justify-center text-xs font-medium">
                    +5
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-800">
                <div className="flex items-center">
                  <span className="mr-3">15%</span>
                  <div className="w-full bg-gray-200 rounded h-[5px]">
                    <div
                      className="bg-indigo-600 h-[5px] rounded"
                      style={{ width: '15%' }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Card Footer */}
      <div className="text-center border-t border-gray-300 py-3">
        <a
          href="#!"
          className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectTable;
