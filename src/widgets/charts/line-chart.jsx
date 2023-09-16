import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Legend);

export function LineChart() {
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [10, 20, 30, 25, 5, 12, 20],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        pointBorderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        backgroundColor: ["pink", "orange", "grey"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6,
      },
    },
  };

  return (
    <Card className="rounded-lg bg-white p-5 shadow-md xl:col-span-2">
      <CardHeader color="blue">
        <Typography color="white" className="text-lg">
          Call Analysis Trend
        </Typography>
      </CardHeader>
      <CardBody>
        <Line data={data} options={options} />
      </CardBody>
    </Card>
  );
}

LineChart.displayName = "/src/widgets/charts/line-chart.jsx";

export default LineChart;
