import React from 'react';

const TasksList = () => (
  <div className="xl:col-span-6 bg-white rounded-lg p-0 border border-gray-200 shadow-md h-[200px] flex flex-col">
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
);

export default TasksList;
