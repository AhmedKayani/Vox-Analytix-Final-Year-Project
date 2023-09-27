import React from "react";

import {
  Progress,
  AudioPlayer,
  EmotionsDetected,
  TranscriptionBox,
  ResultForm,
} from "@/widgets/layout";

export function Result() {
  return (
    <div className="mt-12">
      {/* <Progress /> */}
      <div className="flex flex-wrap gap-y-4">
        <div className="order-1 mx-auto w-full sm:w-full">
          <AudioPlayer />
        </div>
        <div className="order-3 m-0 w-full p-0 sm:order-2 sm:w-2/3 sm:pr-2">
          <TranscriptionBox />
        </div>
        <div className="order-2 m-0 w-full pt-4 sm:order-3 sm:w-1/3 sm:pl-2">
          <EmotionsDetected />
        </div>
        <div className="order-4 w-full p-0 sm:w-2/3 sm:pr-2">
          <ResultForm />
        </div>
      </div>
    </div>
  );
}

export default Result;
