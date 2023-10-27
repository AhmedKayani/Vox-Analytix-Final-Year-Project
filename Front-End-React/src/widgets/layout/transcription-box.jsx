import { Card, Typography, Button, Alert } from "@material-tailwind/react";

export function TranscriptionBox({ selectedText }) {
  return (
    <Card className="px-12 py-12">
      <Typography variant="h5" className="mx-auto h-fit">
        {selectedText ? selectedText : "Click on an emotion to see its text"}
      </Typography>
    </Card>
  );
}

export default TranscriptionBox;
