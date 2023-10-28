import React, { useRef, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import ReactAudioPlayer from "react-audio-player";

export function AudioPlayer(props) {
  const [audioPlayer, setAudioPlayer] = useState(null);

  // This is a workaround to seek to a specific time in the audio player once the user clicks on the any of the chips on the result page.
  if (props.startSeekTimeSec && audioPlayer) {
    audioPlayer.audioEl.current.currentTime = props.startSeekTimeSec;
  }

  return (
    <Card className="px-12 py-12">
      <Typography variant="h5" className="mx-auto mb-2 h-fit">
        {props.file[0].path}
      </Typography>
      <ReactAudioPlayer
        src={props.file[0].preview}
        controls
        className="w-full"
        ref={(element) => setAudioPlayer(element)}
        onSeeked={() => console.log("Seeked event triggered")}
      />
    </Card>
  );
}

export default AudioPlayer;
