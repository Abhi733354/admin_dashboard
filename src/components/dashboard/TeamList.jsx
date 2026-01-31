import React from 'react';
import brandLogo from '../../assets/brand-logo-1.svg';

const TeamList = () => (
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
);

export default TeamList;
