import React, { useState } from "react";

// Importing icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceAngry, // For Anger
  faFaceMeh, // For Disgust
  faFaceFrown, // For Disappointment
  faFaceSadTear, // For Distress
  faFaceSurprise, // For Surprise
} from "@fortawesome/free-solid-svg-icons";

// Imported to get file from the Upload Audio Page, specifically from the useNavigate hook in the DropzoneUpload component.
import { useLocation } from "react-router-dom";

// Needed to use the useMutation hook in the ResultForm component.
import { QueryClient, QueryClientProvider } from "react-query";

import { LineChart, BarChart, PieChart } from "@/widgets/charts";

import {
  AudioPlayer,
  EmotionsDetected,
  TranscriptionBox,
  ResultForm,
} from "@/widgets/layout";

/**
 *
 * The Result component renders a layout with an audio player, a transcription box, emotions detected, and a result form.
 *
 * @returns a JSX element, which represents the structure and content of the HTML to be rendered on the page.
 *
 */
export function ResultPast() {
  // This is used to get the file and the file's url from the past analysis table, specifically from the useNavigate hook in the table component.
  const location = useLocation();

  // // File is the audio file, url is the online url of the past analysis.
  const { analysisData, url, fileName, agentName, reason } = location.state;

  // This function converts the seconds to minutes and seconds to be displayed in the chips.
  function convertSecondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return { minutes, seconds: remainingSeconds };
  }

  // // Making data suitable for line chart
  // const chartData = {
  //   labels: analysisData.map((d) => {
  //     const secMin = convertSecondsToMinutesAndSeconds(d.time.begin);
  //     // Make the minutes and seconds two digits if one
  //     secMin.minutes = secMin.minutes.toString().padStart(2, "0");
  //     secMin.seconds = secMin.seconds.toString().padStart(2, "0");
  //     return `${secMin.minutes}:${secMin.seconds}`;
  //   }), // Use the 'begin' time as the label
  //   datasets: [
  //     "Anger",
  //     "Disappointment",
  //     "Disgust",
  //     "Distress",
  //     "Surprise (negative)",
  //   ].map((emotion) => ({
  //     label: emotion,
  //     data: analysisData.map(
  //       (d) => d.emotions.find((e) => e.name === emotion).score
  //     ),
  //     fill: true,
  //     borderColor: emotionColors[emotion], // Generate a random color for each line
  //     pointRadius: 0, // Hide the points
  //     pointHitRadius: 10, // Area where the point can be hovered
  //   })),
  // };

  // New try
  const emotionStyles = {
    Anger: { color: "red", borderDash: [] },
    Disappointment: { color: "blue", borderDash: [5, 5] }, // Dashed line
    Disgust: { color: "green", borderDash: [] },
    Distress: { color: "purple", borderDash: [5, 5] }, // Dashed line
    "Surprise (negative)": { color: "orange", borderDash: [] },
  };

  // Prepare the data for the line chart
  const chartData = {
    labels: analysisData.map((d) => {
      const secMin = convertSecondsToMinutesAndSeconds(d.time.begin);
      // Make the minutes and seconds two digits if one
      secMin.minutes = secMin.minutes.toString().padStart(2, "0");
      secMin.seconds = secMin.seconds.toString().padStart(2, "0");
      return `${secMin.minutes}:${secMin.seconds}`;
    }), // Use the 'begin' time as the labellabel
    datasets: Object.keys(emotionStyles).map((emotion) => {
      const dataset = analysisData.map((d) => ({
        x: d.time.begin,
        y: d.emotions.find((e) => e.name === emotion).score,
      }));

      // Only show points at the x-axis ticks
      const xAxisTicks = dataset.filter(
        (d, i, arr) => i % Math.ceil(arr.length / 10) === 0
      );
      xAxisTicks.forEach((tick) => {
        const point = dataset.find((d) => d.x === tick.x);
        if (point) point.pointRadius = 5; // Show the point
      });

      return {
        fill: true,
        label: emotion,
        data: dataset,
        borderColor: emotionStyles[emotion].color, // Use the color from the mapping
        borderDash: emotionStyles[emotion].borderDash, // Use the line style from the mapping
        tension: 0.4, // Make the line smoother
        pointRadius: 0, // Hide the points
        pointHitRadius: 10, // Area where the point can be hovered
      };
    }),
  };

  // Mapping of emotions to colors
  const emotionColors = {
    Anger: "red",
    Disappointment: "blue",
    Disgust: "green",
    Distress: "purple",
    "Surprise (negative)": "orange",
  };

  // For Barchart Data
  // Calculate the average score for each emotion
  const emotionAverages = {};
  Object.keys(emotionColors).forEach((emotion) => {
    const scores = analysisData.flatMap((d) =>
      d.emotions.filter((e) => e.name === emotion).map((e) => e.score)
    );
    emotionAverages[emotion] =
      scores.reduce((a, b) => a + b, 0) / scores.length;
  });

  // Prepare the data for the chart
  const barChartData = {
    labels: Object.keys(emotionAverages),
    datasets: [
      {
        data: Object.values(emotionAverages),
        backgroundColor: Object.keys(emotionAverages).map(
          (emotion) => emotionColors[emotion]
        ),
      },
    ],
  };

  // For Pie Chart Data
  // Calculate the total score for each emotion
  const emotionTotals = {};
  Object.keys(emotionColors).forEach((emotion) => {
    const scores = analysisData.flatMap((d) =>
      d.emotions.filter((e) => e.name === emotion).map((e) => e.score)
    );
    emotionTotals[emotion] = scores.reduce((a, b) => a + b, 0);
  });

  // Prepare the data for the chart
  const PieChartData = {
    labels: Object.keys(emotionTotals),
    datasets: [
      {
        data: Object.values(emotionTotals),
        backgroundColor: Object.keys(emotionTotals).map(
          (emotion) => emotionColors[emotion]
        ),
      },
    ],
  };

  // const [analysisData, setAnalysisData] = useState([]);
  const [selectedText, setSelectedText] = useState(null);
  const [startSeekTimeSec, setStartSeekTimeSec] = useState(0);

  // To use the useMutation hook in the ResultForm component.
  const queryClient = new QueryClient();

  // This part is for the icons JSX elements. The icons are imported from font awesome.
  const angerIcon = <FontAwesomeIcon className="fa-2x" icon={faFaceAngry} />;
  const disgustIcon = <FontAwesomeIcon className="fa-2x" icon={faFaceMeh} />;
  const disappointmentIcon = (
    <FontAwesomeIcon className="fa-2x" icon={faFaceFrown} />
  );
  const distressIcon = (
    <FontAwesomeIcon className="fa-2x" icon={faFaceSadTear} />
  );
  const surpriseIcon = (
    <FontAwesomeIcon className="fa-2x" icon={faFaceSurprise} />
  );

  // This function is used to handle the emotion click. It sets the start seek time and the selected text. Helps in jumping to the time when the emotion appeared. Also displays the selected text in the transcription box.
  const handleEmotionClick = (text, time) => {
    const timeInSeconds = time.minutes * 60 + time.seconds;
    setStartSeekTimeSec(timeInSeconds);
    setSelectedText(text);
  };

  // This is used to display the analysis data in the console.
  console.log("This is the analysis data:", analysisData);

  return (
    <div className="mt-12">
      <div className="flex flex-col flex-wrap gap-y-12">
        <div className="mx-auto w-full sm:w-full">
          {/* Audio Player component. The startSeekTimeSec is used to jump to a required time of audio file. */}
          <AudioPlayer
            fileUrl={url}
            fileName={fileName}
            startSeekTimeSec={startSeekTimeSec}
          />
        </div>

        {/* Show the transcription box, emotions detected and result form if there is no error and the emotions are fetched. */}

        <div className="order-2 m-0 w-full p-0">
          <TranscriptionBox selectedText={selectedText} />
        </div>
        <div className="order-3 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Emotion Card Components */}

          {/* This is the Anger Card. The handleEmotionClick function is used to get the required time to jump in audio file. */}
          <EmotionsDetected
            handleEmotionClick={handleEmotionClick}
            analysisData={analysisData}
            emotionType={"Anger"}
            emotionIndex={0}
            color={"red"}
            icon={angerIcon}
          />

          {/* This is the Distress Card. The handleEmotionClick function is used to get the required time to jump in audio file. */}
          <EmotionsDetected
            handleEmotionClick={handleEmotionClick}
            analysisData={analysisData}
            emotionType={"Distress"}
            emotionIndex={3}
            color={"orange"}
            icon={distressIcon}
          />

          {/* This is the Disappointment Card. The handleEmotionClick function is used to get the required time to jump in audio file. */}
          <EmotionsDetected
            handleEmotionClick={handleEmotionClick}
            analysisData={analysisData}
            emotionType={"Disappointment"}
            emotionIndex={1}
            color={"blue"}
            icon={disappointmentIcon}
          />

          {/* This is the Disgust Card. The handleEmotionClick function is used to get the required time to jump in audio file. */}
          <EmotionsDetected
            handleEmotionClick={handleEmotionClick}
            analysisData={analysisData}
            emotionType={"Disgust"}
            emotionIndex={2}
            color={"blue-gray"}
            icon={disgustIcon}
          />

          {/* This is the Surprise Card. The handleEmotionClick function is used to get the required time to jump in audio file. */}
          <EmotionsDetected
            handleEmotionClick={handleEmotionClick}
            analysisData={analysisData}
            emotionType={"Surprise"}
            emotionIndex={4}
            color={"lime"}
            icon={surpriseIcon}
          />
        </div>
        <div className="order-4 m-0 w-full p-0">
          <LineChart data={chartData} title="Emotion Scores Over Time" />
        </div>
        <div className="order-5 m-0 w-full p-0">
          <BarChart data={barChartData} title="Average Emotion Scores" />
        </div>
        <div className="order-6 m-0 w-full p-0 sm:w-2/3 sm:pr-2">
          <PieChart data={PieChartData} title="Emotion Distribution" />
        </div>
        <div className="order-7 w-full p-0 sm:w-2/3 sm:pr-2">
          {/* This is the form at the end where user will type the reason of call rejection. */}
          <QueryClientProvider client={queryClient}>
            <ResultForm
              audioUrl={url}
              fileName={fileName}
              analysisData={analysisData}
              isDBData={true}
              agentNameDB={agentName}
              reasonDB={reason}
            />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
}

export default ResultPast;
