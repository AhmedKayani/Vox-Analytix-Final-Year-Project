// Basic configuration for a Doughnut Chart
export const doughnutChartConfig = {
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
      intersect: false,
    },
  },
};

// Basic configuration for a Line Chart
export const lineChartConfig = {
  type: "line",
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "#e5e5e5",
          },
        },
      ],
    },
    legend: {
      display: true,
      position: "bottom",
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
  },
};
