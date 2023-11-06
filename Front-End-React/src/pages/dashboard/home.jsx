import React from "react";
import { Typography } from "@material-tailwind/react";

// This import is used for stats cards like the one that says "Total Calls Analyzed", "Most Common Emotion" etc.
import { StatisticsCard } from "@/widgets/cards";

// This import is used for the sample data for the statistics card.
import { statisticsCardsData } from "@/data";

// This import is used for the charts.
import { DataTable, DoughnutChart, LineChart } from "@/widgets/charts";

/**
 *
 * The above code is a React component called "Home". It renders a layout with multiple sections.
 *
 * The first section contains the statistics cards. Shows the total calls analyzed most common emotion, etc.
 *
 * The second section contains the charts. The doughnut and line graph chart will be rendered from here.
 *
 * The third section contains the table of latest analysis results.
 *
 **/

export function Home() {
  return (
    <div className="mt-12">
      {/* This div contains the cards that will be using to display the overall analysis stats. */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Displaying sample data like "Total Calls Analyzed", "Most Common Emotion" etc from the statisticsCardsData.js file. */}
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      {/* This div contains the charts. The doughnut and line graph chart will be rendered from here */}
      <div className="mb-12 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* This is the doughnut chart */}
        <DoughnutChart />

        {/* This is the line graph chart */}
        <LineChart />
      </div>

      {/* This div contains the table of latest analysis results */}
      <div className="mb-4 w-full">
        {/* This is the component for the table of latest analysis results. */}
        <DataTable />
      </div>
    </div>
  );
}

export default Home;
