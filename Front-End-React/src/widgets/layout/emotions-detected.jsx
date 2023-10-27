import React from "react";
import { StatisticsCard } from "@/widgets/cards/statistics-card";

// Importing sample emotion detected data
import { emotionDetectedData } from "@/data";

import { FaceFrownIcon } from "@heroicons/react/24/solid";

/**
 *
 * The `export function EmotionsDetected()` is a React functional component that
 * renders a list of StatisticsCard` components based on the `emotionDetectedData`
 * array.
 *
 **/

export function EmotionsDetected({ analysisData, handleEmotionClick }) {
  console.log(`Is analysisData an array? ${Array.isArray(analysisData)}`);

  function convertSecondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return { minutes, seconds: remainingSeconds };
  }

  const topScores = analysisData
    ?.map((data) => ({
      name: data.emotions[0].name,
      score: data.emotions[0].score,
      text: data.text,
      timeBegin: convertSecondsToMinutesAndSeconds(data.time.begin),
      timeEnd: convertSecondsToMinutesAndSeconds(data.time.end),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  console.log(topScores);

  return (
    <div className="flex flex-col flex-wrap gap-y-8">
      <ul>
        {Array.isArray(analysisData) &&
          topScores?.map((data, index) => (
            <li onClick={() => handleEmotionClick(data?.text)} key={index}>
              <StatisticsCard
                color="red"
                // icon={FaceFrownIcon}
                // title={`Time Range: ${data.time.begin} - ${data.time.end}`}
                // title={"Emotion Detected"}
                // value={`${data.emotions[0].name}, Score: ${data.emotions[0].score}`}
                value={`${data?.name}, Score: ${data?.score}`}
                time={`${data?.timeBegin?.minutes} minutes and ${data?.timeBegin?.seconds} seconds`}
                // time={`${minutes} minutes and ${seconds} seconds`}
              />
            </li>
          ))}
      </ul>
      {/* {emotionDetectedData.map((data) => (
        <StatisticsCard
          key={data.time}
          color={data.color}
          icon={React.createElement(data.icon, {
            className: "w-8 h-8 text-white",
          })}
          title={data.title}
          value={data.value}
          time={data.time}
        />
      ))} */}
    </div>
  );
}

// You have to implement the map function on cards first

// After getting that right, implement the chips to show the time in a single stats card

// Then, implement the onClick function on the chips

export default EmotionsDetected;
