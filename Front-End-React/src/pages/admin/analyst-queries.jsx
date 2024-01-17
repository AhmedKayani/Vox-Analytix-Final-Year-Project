import React from "react";
import { Typography } from "@material-tailwind/react";
import { QueryResponseBox } from "@/widgets/layout";

// This import is used for stats cards like the one that says "Total Calls Analyzed", "Most Common Emotion" etc.
const queriesData = {
  labels: ["Unresolved Queries", "Resolved Queries"],
  datasets: [
    {
      data: [7, 3],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};
import { StatisticsCard, CardWrapper } from "@/widgets/cards";

// This import is used for the sample data for the statistics card.
import { statisticsCardDataAdminQueries } from "@/data";

import profilePicture1 from "../../../public/img/profile-picture-1.png";
import profilePicture2 from "../../../public/img/profile-picture-2.png";
// This import is used for the charts.
import { PieChart } from "@/widgets/charts";

export const AnalystQueries = () => {
  // Your code here

  return (
    <div className="mt-12">
      {/* This div contains the cards that will be using to display the overall analysis stats. */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Displaying sample data like "Total Calls Analyzed", "Most Common Emotion" etc from the statisticsCardsData.js file. */}
        {statisticsCardDataAdminQueries.map(
          ({ icon, title, footer, ...rest }) => (
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
          )
        )}
      </div>

      <div className="mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <PieChart data={queriesData} title="Pie Chart" span="1" />
      </div>
      <div className="mb-12 flex w-full flex-col gap-y-4">
        <QueryResponseBox
          analystPic={profilePicture1}
          name="Ahmed Kayani"
          message="Hello, I am having trouble with the analysis. Can you please help me out?"
        />
        <QueryResponseBox
          analystPic={profilePicture2}
          name="Sami Zahir"
          message="Hello, I am having trouble with Loging in and out?"
        />
      </div>
    </div>
  );
};

export default AnalystQueries;
