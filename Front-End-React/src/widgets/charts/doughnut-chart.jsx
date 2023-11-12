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
    <Card>
      <CardHeader className="p-5" variant="gradient" color="blue">
        <Typography variant="h6" color="white">
          Negative Emotions
        </Typography>
      </CardHeader>
      <CardBody>
        <Doughnut data={data} options={options} />
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="paragraph">Updated 2 minutes ago</Typography>
      </CardFooter>
    </Card>
  );
}

DoughnutChart.displayName = "/src/widgets/charts/doughnut-chart.jsx";

export default DoughnutChart;
