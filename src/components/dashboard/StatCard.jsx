import React, { useEffect, useState } from 'react';

const StatCard = ({ title, value, completed, icon, iconBg }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`bg-white rounded-lg p-4 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,20,0.08),_0_1px_2px_rgba(0,0,20,0.08)]
        transform transition-all duration-500 ease-out 
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        hover:scale-[1.02] hover:shadow-md
      `}
    >
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-md font-semibold text-gray-800">{title}</h4>
        <div className={`p-2 rounded-md ${iconBg}`}>
          <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{value}</h1>
        <p className="text-sm text-gray-600">
          <span className="text-black font-semibold mr-1">{completed}</span>
          Completed
        </p>
      </div>
    </div>
  );
};

export default StatCard;
