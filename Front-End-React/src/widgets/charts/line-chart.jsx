import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

import { CardWrapper } from "@/widgets/cards";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Legend);

export function LineChart({ data, title }) {
  const labels = ["January", "February", "March", "April", "May", "June"];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [10, 20, 30, 25, 5, 12, 20],
  //       fill: true,
  //       borderColor: "rgb(75, 192, 192)",
  //       pointBorderColor: "rgb(75, 192, 192)",
  //       tension: 0.4,
  //       backgroundColor: ["pink", "orange", "grey"],
  //     },
  //   ],
  // };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10, // Adjust this value as needed
        },
      },
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10, // Adjust this value as needed
        },
      },
    },
  };

  return (
    <CardWrapper title={title} span="2">
      <Line data={data} options={options} />
    </CardWrapper>
  );
}

LineChart.displayName = "/src/widgets/charts/line-chart.jsx";

export default LineChart;
