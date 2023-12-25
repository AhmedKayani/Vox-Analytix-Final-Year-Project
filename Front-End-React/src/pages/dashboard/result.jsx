import React, { useState } from "react";
import axios from "axios";

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

import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@/utils";

// Needed to use the useMutation hook in the ResultForm component.
import { QueryClient, QueryClientProvider } from "react-query";

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
  // This is used to get the file and the file's url from the Upload Audio Page, specifically from the useNavigate hook in the DropzoneUpload component.
  const location = useLocation();

  // File is the audio file, url is the online url of the uploaded audio file.
  const { file, url } = location.state;

  // Getting the name of the file when getting new analysis.
  const fileName = file[0].path;

  // For implementing looking at the past analysis
  /**
   *
   * The main issues so far:
   * 1) Using location state to get the file and url from the Upload Audio Page
   * specifically from the useNavigate hook in the DropzoneUpload component.
   *
   * 2) How to send the past analysis data from the table to the front end.
   *
   *
   * Steps to do:
   * 1) Send a boolean variable isPastAnalysis to the this component from both
   * DropzoneUpload and database table. Using if condition do what is needed.
   *
   * 2) Replace the file and url with the past file and url.
   *
   **/

  const [analysisData, setAnalysisData] = useState([]);
  const [selectedText, setSelectedText] = useState(null);
  const [startSeekTimeSec, setStartSeekTimeSec] = useState(0);

  // To use the useMutation hook in the ResultForm component.
  const queryClient = new QueryClient();

  // This is used to get the analysis data from the backend.
  const { isLoading, error } = useQuery({
    queryKey: ["analysis"],
    queryFn: () =>
      ApiClient.post("/analysis", {
        url, // The URL of the audio file.
        owner: 1, // ID of the user who is logged in. Currently a dummy value.
      }).then((res) => {
        setAnalysisData(res?.data);
        return res.data;
      }),
  });

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

        {/* Show the progress circle while analyzing the call and fetching the emotions. */}
        {isLoading && <Progress />}

        {/* Show the error message if there is an error while fetching the emotions. */}
        {error && <div>Something went wrong ...</div>}

        {/* Show the transcription box, emotions detected and result form if there is no error and the emotions are fetched. */}
        {!isLoading && !error && (
          <>
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
            <div className="order-4 w-full p-0 sm:w-2/3 sm:pr-2">
              {/* This is the form at the end where user will type the reason of call rejection. */}
              <QueryClientProvider client={queryClient}>
                <ResultForm
                  audioUrl={url}
                  fileName={fileName}
                  audioFile={file}
                  analysisData={analysisData}
                />
              </QueryClientProvider>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Result;
