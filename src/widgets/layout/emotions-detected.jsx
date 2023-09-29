import React from "react";
import { StatisticsCard } from "@/widgets/cards/statistics-card";

// Importing sample emotion detected data
import { emotionDetectedData } from "@/data";

/**
 *
 * The `export function EmotionsDetected()` is a React functional component that
 * renders a list of StatisticsCard` components based on the `emotionDetectedData`
 * array.
 *
 **/

export function EmotionsDetected() {
  return (
    <div className="flex flex-col flex-wrap gap-y-8">
      {emotionDetectedData.map((data) => (
        <StatisticsCard
          color={data.color}
          icon={React.createElement(data.icon, {
            className: "w-8 h-8 text-white",
          })}
          title={data.title}
          value={data.value}
          time={data.time}
        />
      ))}
    </div>
  );
}

export default EmotionsDetected;
