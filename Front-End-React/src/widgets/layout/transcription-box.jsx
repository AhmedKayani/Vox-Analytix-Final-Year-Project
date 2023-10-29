import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Alert,
} from "@material-tailwind/react";

export function TranscriptionBox({ selectedText }) {
  return (
    <Card>
      <CardHeader variant="gradient" color="blue" className="p-5">
        <Typography variant="h6" color="white">
          Transcription
        </Typography>
      </CardHeader>
      <CardBody className="mx-auto px-12 pb-12 pt-8">
        <Typography variant="h5">
          {selectedText
            ? selectedText
            : "Click on an emotion chip to see its text"}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TranscriptionBox;
