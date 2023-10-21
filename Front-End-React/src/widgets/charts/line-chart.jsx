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
        tension: 0.4,
        backgroundColor: ["pink", "orange", "grey"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6,
      },
    },
  };

  return (
    <Card className="w-full rounded-lg bg-white p-5 shadow-md xl:col-span-2">
      <CardHeader floated={false} shadow={false} variant="gradient">
        <Typography color="black" className="text-lg">
          Call Analysis Trend
        </Typography>
      </CardHeader>
      <CardBody className="w-full">
        <div className="w-full">
          <Line data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
}

LineChart.displayName = "/src/widgets/charts/line-chart.jsx";

export default LineChart;
