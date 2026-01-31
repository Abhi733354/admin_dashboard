import React from 'react'
import brandLogo from '../../assets/brand-logo-1.svg';
import ReactApexChart from 'react-apexcharts';
//import Header from '../header/Header';



const Dashboard = () => {

  const chartOptions = {
    chart: {
      type: 'radialBar',
      offsetY: 0,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '60%',
          background: 'transparent',
        },
        track: {
          background: '#f0f0f0',
          strokeWidth: '100%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    colors: ['#34A853', '#FBBC05', '#EA4335'], // green, yellow, red
    labels: ['Completed', 'In-Progress', 'Behind'],
  };

  const chartSeries = [76, 32, 13]; // percentages


  return (
    <div className="w-full bg-white min-h-screen">
         <Header />
      <div className="common-bg-color app-content-area min-h-screen">
        <div className="bg-primary pt-10 pb-30 -mt-6 -mx-2"></div>
        <div className='-mt-40'>
          <div className="grid mt-5">
            <div className="flex justify-between items-center mb-5">
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

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,20,0.08),_0_1px_2px_rgba(0,0,20,0.08)]">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Projects</h4>
                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">18</h1>
                <p className="text-sm text-gray-600"><span className="text-black font-semibold mr-1">2</span> Completed</p>
              </div>
            </div>

            {/* Productivity Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,20,0.08),_0_1px_2px_rgba(0,0,20,0.08)]">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Productivity</h4>
                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M11 3.055A9.001 9.001 0 1 1 3.055 13H11V3.055z" />
                    <path d="M20.488 9H13V3.512A9 9 0 0 1 20.488 9z" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">75%</h1>
                <p className="text-sm text-gray-600"><span className="text-black font-semibold mr-1">5%</span> Completed</p>
              </div>
            </div>

            {/* Active Task Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,20,0.08),_0_1px_2px_rgba(0,0,20,0.08)]">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Active Task</h4>
                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">132</h1>
                <p className="text-sm text-gray-600"><span className="text-black font-semibold mr-1">28</span> Completed</p>
              </div>
            </div>

            {/* Teams Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,20,0.08),_0_1px_2px_rgba(0,0,20,0.08)]">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Teams</h4>
                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87M16 3.13a4 4 0 1 1-8 0M12 14a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">12</h1>
                <p className="text-sm text-gray-600"><span className="text-black font-semibold mr-1">1</span> Completed</p>
              </div>
            </div>

          </div>


          {/* ✅ New Section: 8 (left) / 4 (right) layout */}
          <div className="mt-10 grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* 8 Column */}
            <div className="xl:col-span-8 bg-white rounded-lg p-0 border border-gray-200 shadow-md">
              {/* Card Header */}
              <div className="bg-white-100 border-b border-gray-300 px-4 py-6">
                <h4 className="mb-0 text-gray-800 font-semibold">Active Projects</h4>
              </div>
              {/* Card Body */}
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full text-sm text-left text-gray-700 whitespace-nowrap py-5">
                    <thead className="bg-blue-100 text-gray-700 font-semibold py-8 border-b border-gray-400">
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
            {/* 4 Column */}
            <div className="xl:col-span-4 bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Tasks Performance</h2>
              <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="radialBar"
                height={350}
              />
              <div className="flex justify-around mt-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-green-600">76%</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-yellow-500">32%</p>
                  <p className="text-sm text-gray-600">In-Progress</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-red-500">13%</p>
                  <p className="text-sm text-gray-600">Behind</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-6 bg-white rounded-lg p-0 border border-gray-200 shadow-md">
              {/* Card Header */}
              <div className="bg-white-100 border-b border-gray-300 px-4 py-6">
                <h4 className="mb-0 text-gray-800 font-semibold">Active Projects</h4>
              </div>
              {/* Card Body */}
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full text-sm text-left text-gray-700 whitespace-nowrap py-5 ">
                    <thead className="bg-blue-100 text-gray-700 font-semibold py-8 border-b border-gray-400">
                      <tr>
                        <th className="px-4 py-3 text-black">Name</th>
                        <th className="px-4 py-3 text-black">Details</th>
                        <th className="px-3 py-3 text-black text-end">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox w-4 h-4 text-blue-600"
                            />
                            <div className="ml-3 leading-tight">
                              <h5 className="mb-0">
                                <a href="#!" className="text-blue-600 hover:underline">
                                  Design a FreshCart Home page
                                </a>
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">Today</td>
                        <td className="px-3 py-4 text-end">
                          <span className="bg-yellow-100 text-yellow-600 py-1 rounded text-xs font-medium">
                            Approved
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>


            <div className="xl:col-span-6 bg-white rounded-lg p-0 border border-gray-200 shadow-md">
              {/* Card Header */}
              <div className="bg-white-100 border-b border-gray-300 px-4 py-6">
                <h4 className="mb-0 text-gray-800 font-semibold">Teams</h4>
              </div>
              {/* Card Body */}
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full text-sm text-left text-gray-700 whitespace-nowrap py-5 ">
                    <thead className="bg-blue-100 text-gray-700 font-semibold py-8 border-b border-gray-400">
                      <tr>
                        <th className="px-4 py-3 text-black">Name</th>
                        <th className="px-4 py-3 text-black">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <img src={brandLogo} alt="Brand Logo" className="w-8 h-auto" />
                            <div className="ml-3 leading-tight">
                              <h4 className="text-black-800 font-bold text-[14px]">
                                Jitu Chauhan
                              </h4>
                              <p className='text-black-500 text-[14px]'>jituchauhan@example.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-black-500 text-[14px]">Front End Developer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
