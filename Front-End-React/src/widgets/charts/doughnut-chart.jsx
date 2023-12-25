import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { CardWrapper } from "@/widgets/cards";

const data = {
  labels: ["Angry", "Disgust", "Sad"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ["pink", "orange", "grey"],
      borderWidth: 1,
      hoverOffset: 4,
    },
  ],
};

const options = {
  type: "doughnut",
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
    },
    cutoutPercentage: 80, // Adjust this for the size of the inner circle
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: true,
    },
  },
};

export function DoughnutChart() {
  return (
    <CardWrapper title="Negative Emotions" span="1">
      <Doughnut data={data} options={options} />
    </CardWrapper>
  );
}

DoughnutChart.displayName = "/src/widgets/charts/doughnut-chart.jsx";

export default DoughnutChart;
