import React from 'react';
import ReactApexChart from 'react-apexcharts';


  // Example data
  const chartData = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    },
    series: [
      {
        name: 'Monthly Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 110, 80],
      },
    ],
  };


const Linechart = () => {
    return (
        <>
        <div>
      <h1>React ApexCharts Example</h1>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
        </>
    )}
    
export default Linechart;