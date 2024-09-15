import React from 'react';
import { Bar } from 'react-chartjs-2';

const RevenueByCountryChart = () => {
  const data = {
    labels: ['USA', 'India', 'Germany', 'UK', 'Australia'],
    datasets: [
      {
        label: 'Revenue by Country',
        data: [50000, 40000, 30000, 20000, 10000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar style={{padding:"20px"}} data={data} options={options} />;
};

export default RevenueByCountryChart;
