import React, { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";

// For saving data to the database!
import { useMutation } from "react-query";

// For saving data to the database!
import { ApiClient } from "@/utils";

/**
 * 
 * The ResultForm component is a form that includes inputs for an agent name, a 
 * reason for a flagged call, and a save button.
 
 * @returns A Card component containing an Input component for the agent name, a 
 * Textarea component for the reason for flagged call, and a Button component for
 * saving the form.
 *
**/

export function ResultForm({
  audioUrl,
  fileName,
  analysisData,
  audioFile,
  agentNameDB = "",
  reasonDB = "",
  isDBData = false,
}) {
  const currentDate = new Date().toISOString().split("T")[0];
  const [agentName, setAgentName] = useState(agentNameDB);
  const [reason, setReason] = useState(reasonDB);

  // This varibale is used to store the duration of the audio file.
  const [duration, setDuration] = useState(-1);

  // Use to get the duration of the audio file.
  if (!isDBData) {
    useEffect(() => {
      const audio = new Audio(audioFile[0].preview);

      // This is a workaround to get the duration of the audio file to save in the database.
      audio.onloadedmetadata = function () {
        setDuration(Math.floor(audio.duration / 60));
      };
    }, [audioFile]);
  }
  const mutation = useMutation(
    (newData) => ApiClient.post("/analysis/save", newData),
    {
      onSuccess: (data) => {
        // On success, you can do something with the returned data
        console.log("Data Saved. Check the database.");
        console.log(data);
      },
      onError: (error) => {
        // On error, you can do something with the error object
        console.error("Error saving data to the database.");
        console.error(error);
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    // When you want to save the analysis data, you can call the mutate function
    mutation.mutate({
      analysisData, // The analysis data from the backend.
      audioUrl, // The URL of the audio file.
      fileName, // The name of the audio file.
      agentName, // The name of the agent.
      reason, // The reason for the flagged call.
      date: currentDate, // The current string date.
      duration: duration, // The duration of the audio file.
      owner: 1, // ID of the user who is logged in. Currently a dummy value.
    });

    // Reset the form.
    setAgentName("");
    setReason("");

    // To do
    // Navigate to the upload page.
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader variant="gradient" color="blue" className="p-5">
          <Typography variant="h6" color="white">
            Form
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-1 flex-col gap-y-4">
          <Input
            className="h-fit"
            label="Agent Name"
            size="lg"
            color="blue"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            disabled={isDBData}
          />
          <Textarea
            label="Reason for Flagged Call"
            size="lg"
            color="blue"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            disabled={isDBData}
          />
          <Button
            color="blue"
            ripple={true}
            className="w-24 self-end"
            type="submit"
            disabled={isDBData}
          >
            Save
          </Button>
        </CardBody>
      </Card>
    </form>
  );
}

export default ResultForm;
