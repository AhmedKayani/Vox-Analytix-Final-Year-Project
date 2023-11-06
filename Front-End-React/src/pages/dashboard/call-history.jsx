import React from "react";

import { Typography } from "@material-tailwind/react";

// Statistics card component.
import { StatisticsCard } from "@/widgets/cards";

// Data for statistics cards.
import { callHistoryStatisticsCardData } from "@/data";

// Table component to display the analysis results.
import { DataTable } from "@/widgets/charts";

/**
 *
 * The `export function CallHistory()` is a React functional component that renders the Call History page.
 *
 **/

export function CallHistory() {
  return (
    <div className="mt-12">
      {/* This div contains the statistics cards which display overall stats like total calls analyzed, average call duration and export history option. */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Displaying sample data like "Total Calls Analyzed", "Average Call Duration" etc from the callHistoryStatisticsCardData.js file. */}
        {callHistoryStatisticsCardData.map(
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

      {/* This div contains the table of all analysis results */}
      <div className="mb-4 w-full">
        <DataTable />
      </div>
    </div>
  );
}

export default CallHistory;
