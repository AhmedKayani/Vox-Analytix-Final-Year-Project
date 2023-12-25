import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { CardWrapper } from "@/widgets/cards";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function BarChart({ data, title }) {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <CardWrapper title={title} span="2">
      <Bar data={data} options={options} />
    </CardWrapper>
  );
}

BarChart.displayName = "/src/widgets/charts/bar-chart.jsx";

export default BarChart;
