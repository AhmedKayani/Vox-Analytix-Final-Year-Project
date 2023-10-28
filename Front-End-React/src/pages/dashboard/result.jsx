import React, { useState } from "react";
import axios from "axios";

// Imported to get file from the Upload Audio Page, specifically from the useNavigate hook in the DropzoneUpload component.
import { useLocation } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@/utils";

import {
  Progress,
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
export function Result() {
  const [analysisData, setAnalysisData] = useState([]);
  const [selectedText, setSelectedText] = useState(null);
  const [startSeekTimeSec, setStartSeekTimeSec] = useState(0);
  const location = useLocation();
  const { file, url } = location.state;

  const { isLoading, error } = useQuery({
    queryKey: ["analysis"],
    queryFn: () =>
      ApiClient.post("/analysis", {
        url,
        owner: 1,
      }).then((res) => {
        setAnalysisData(res?.data);
        return res.data;
      }),
  });

  const handleEmotionClick = (text, time) => {
    const timeInSeconds = time.minutes * 60 + time.seconds;
    setStartSeekTimeSec(timeInSeconds);
    setSelectedText(text);
  };

  // console.log(error);
  // console.log(isLoading);
  console.log("This is the analysis data:", analysisData);

  return (
    <div className="mt-12">
      {/* Progress is rendered on the page instead of all the other result components while fetching the data */}
      {/* <Progress /> */}

      {/* When the data is fetched and available, all the following components are rendered on result page. */}
      <div className="flex flex-wrap gap-y-4">
        <div className="mx-auto w-full sm:w-full">
          <AudioPlayer file={file} startSeekTimeSec={startSeekTimeSec} />
        </div>
        {isLoading && <Progress />}
        {!isLoading && (
          <>
            <div className="order-3 m-0 w-full p-0 sm:order-2 sm:w-2/3 sm:pr-2">
              <TranscriptionBox selectedText={selectedText} />
            </div>
            <div className="relative order-2 m-0 w-full pt-4 sm:order-3 sm:w-1/3 sm:pl-2">
              <EmotionsDetected
                handleEmotionClick={handleEmotionClick}
                analysisData={analysisData}
              />
            </div>
            <div className="order-4 w-full p-0 sm:w-2/3 sm:pr-2">
              <ResultForm />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Result;
