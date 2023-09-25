import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Card, Button, Alert } from "@material-tailwind/react";

export function Progress() {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-lg bg-white px-8 py-12 shadow-md">
      <Typography
        variant="h4"
        color="blue-gray"
        className="m-0 p-0 font-normal"
      >
        Sit Tight
      </Typography>
      <Typography variant="paragraph" color="blue-gray" className="mb-4">
        Analyzing your call
      </Typography>
      <CircularProgress className="mb-4" size={100} thickness={2} />
      <Button variant="gradient" ripple={true} type="sm">
        Cancel
      </Button>
    </div>
  );
}

export default Progress;
