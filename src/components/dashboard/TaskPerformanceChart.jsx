// src/components/dashboard/TaskPerformanceChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

const TaskPerformanceChart = () => {
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
    // <div className="bg-white p-4 rounded-lg shadow">
    //   <h2 className="text-lg font-semibold mb-2">Task Performance</h2>
    //   <Chart options={options} series={series} type="area" height={300} />
    // </div>

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

    
  );
};

export default TaskPerformanceChart;
