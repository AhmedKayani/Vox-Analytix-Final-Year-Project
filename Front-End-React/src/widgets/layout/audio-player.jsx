import React, { useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import ReactAudioPlayer from "react-audio-player";

export function AudioPlayer(props) {
  const [audioPlayer, setAudioPlayer] = useState(null);

  // This is a workaround to seek to a specific time in the audio player once the user clicks on the any of the chips on the result page.
  if (props.startSeekTimeSec && audioPlayer) {
    audioPlayer.audioEl.current.currentTime = props.startSeekTimeSec;
  }

  return (
    <Card>
      <CardHeader variant="gradient" color="blue" className="p-5">
        <Typography variant="h6" color="white">
          Audio Player ({props.fileName})
        </Typography>
      </CardHeader>
      <CardBody className="px-12 pb-12 pt-8">
        <ReactAudioPlayer
          // src={props.file[0].preview}
          src={props.fileUrl}
          controls
          className="w-full"
          ref={(element) => setAudioPlayer(element)}
          onSeeked={() => console.log("Seeked event triggered")}
        />
      </CardBody>
    </Card>
  );
}

export default AudioPlayer;
