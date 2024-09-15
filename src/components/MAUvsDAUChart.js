import React from "react";
import { Line } from "react-chartjs-2";

const MAUvsDAUChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Active Users (MAU)",
        data: [
          12000, 13000, 14000, 15000, 16000, 17500, 18000, 19000, 20000, 21000,
          22000, 23000,
        ],
        borderColor: "#3f51b5",
        backgroundColor: "rgba(63, 81, 181, 0.2)",
        fill: true,
      },
      {
        label: "Daily Active Users (DAU)",
        data: [
          3000, 3200, 3400, 3700, 3800, 4000, 4100, 4200, 4300, 4500, 4600,
          4800,
        ],
        borderColor: "#f50057",
        backgroundColor: "rgba(245, 0, 87, 0.2)",
        fill: true,
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

  return <Line style={{ padding: "20px" }} data={data} options={options} />;
};

export default MAUvsDAUChart;
