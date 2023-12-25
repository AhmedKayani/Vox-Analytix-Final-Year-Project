import React from "react";
import { StatisticsCard } from "@/widgets/cards/statistics-card";

import { FaceFrownIcon } from "@heroicons/react/24/solid";

/**
 *
 * The `export function EmotionsDetected()` is a React functional component that
 * renders a list of StatisticsCard` components based on the `emotionDetectedData`
 * array.
 *
 **/

export function EmotionsDetected({
  analysisData,
  handleEmotionClick,
  emotionType,
  emotionIndex,
  color,
  icon,
}) {
  // This function converts the seconds to minutes and seconds to be displayed in the chips.
  function convertSecondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = Math.floor(seconds % 60);
    return { minutes, seconds: remainingSeconds };
  }

  // This is the top 5 emotions detected in the audio file. The emotions are sorted in descending order.
  const topScores = analysisData
    ?.map((data) => ({
      name: data.emotions[emotionIndex].name,
      score: data.emotions[emotionIndex].score,
      text: data.text, // This is the transcription text.
      timeBegin: convertSecondsToMinutesAndSeconds(data.time.begin), // Start time of the emotion
      timeEnd: convertSecondsToMinutesAndSeconds(data.time.end), // End time of the emotion. Not used so far!
    }))
    .sort((a, b) => b.score - a.score) // Sort the emotions in descending order.
    .slice(0, 5); // Get the top 5 emotions.

  return (
    <div className="flex flex-col flex-wrap gap-y-8">
      <ul>
        {Array.isArray(analysisData) && (
          // Anger Emotion Stat Card with Chips
          <li>
            <StatisticsCard
              color={color}
              title={"Emotion Detected"}
              value={emotionType}
              topFiveEmotions={topScores}
              footer={1}
              handleEmotionClick={handleEmotionClick}
              icon={icon}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default EmotionsDetected;
