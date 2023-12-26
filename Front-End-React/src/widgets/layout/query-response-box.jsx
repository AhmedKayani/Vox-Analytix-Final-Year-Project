import React from "react";

import {
  Card,
  Avatar,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Textarea,
} from "@material-tailwind/react";

export const QueryResponseBox = ({
  analystPic,
  name,
  message,
  time = "Today",
}) => {
  return (
    <Card className="w-full">
      <CardBody>
        <div className="mb-2 flex items-center">
          <Avatar
            src={analystPic}
            alt="Analyst Picture"
            variant="circular"
            className="mr-2"
            size="sm"
          />
          <Typography variant="h6">{name}</Typography>
          <div className="flex-grow"></div>
          <Typography color="gray" variant="small">
            {time}
          </Typography>
        </div>
        <Typography variant="paragraph" className="mb-2">
          {message}
        </Typography>
        <Textarea label="Type your response..." rows={1} />
        <Button
          color="blue"
          ripple={true}
          size="sm"
          className="mt-1"
          type="submit"
        >
          Resolve
        </Button>
      </CardBody>
    </Card>
  );
};

export default QueryResponseBox;
