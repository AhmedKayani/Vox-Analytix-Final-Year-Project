import { Card, Typography, Button, Alert } from "@material-tailwind/react";
import ReactAudioPlayer from "react-audio-player";

export function AudioPlayer(props) {
  console.log(props.file);

  return (
    <Card className="px-12 py-12">
      <Typography variant="h5" className="mx-auto mb-2 h-fit">
        {props.file[0].path}
      </Typography>
      <ReactAudioPlayer
        src={props.file[0].preview}
        controls
        className="w-full"
      />
    </Card>
  );
}

export default AudioPlayer;
