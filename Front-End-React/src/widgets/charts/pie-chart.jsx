import React from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { CardWrapper } from "@/widgets/cards";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ data, title, span = "2" }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "start", // Add this line to left align the legend text
      },
      labels: {
        display: true,
        render: "percentage",
        precision: 1,
      },
    },
  };

  return (
    <CardWrapper title={title} span={span} className="h-full w-full">
      <div style={{ height: "500px", width: "500px" }}>
        <Pie data={data} options={options} />
      </div>
    </CardWrapper>
  );
}

PieChart.displayName = "/src/widgets/charts/pie-chart.jsx";

export default PieChart;
