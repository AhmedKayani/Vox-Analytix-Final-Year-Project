import React from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { CardWrapper } from "@/widgets/cards";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ data, title }) {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      labels: {
        display: true,
        render: "percentage",
        precision: 1,
      },
    },
  };

  return (
    <CardWrapper title={title} span="2">
      <Pie data={data} options={options} />
    </CardWrapper>
  );
}

PieChart.displayName = "/src/widgets/charts/pie-chart.jsx";

export default PieChart;
