import React, { useState } from "react";

import { CardWrapper } from "@/widgets/cards";

import { Button, Textarea, Avatar, Typography } from "@material-tailwind/react";

import { DataTableQueries } from "@/widgets/charts";

// This component page will be a messaging page for the user to contact the admin for help and support.
// The 2/3 of first row will contain a box for the user to type in their message and send it. The remaining 1/3 will contain another box that shows the image and name of the admin.
// The second row will contain a box that shows the table of messages that the user has sent to the admin.

export function HelpAndSupport() {
  // This variable is used to store the reason for the message.
  const [message, setMessage] = useState("");

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* This contains the message box */}

        <CardWrapper title="Message" span="2">
          <div className="flex flex-col">
            <form>
              <Textarea
                label="Type your complaint here..."
                size="lg"
                color="blue"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                color="blue"
                ripple={true}
                className="w-24 self-end"
                type="submit"
              >
                Send
              </Button>
            </form>
          </div>
        </CardWrapper>
        <CardWrapper title="Admin" span="1">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xl"
            />
            <div className=" text-center">
              <Typography variant="h6">Sami Zahir</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                sami@gmail.com
              </Typography>
            </div>
          </div>
        </CardWrapper>
      </div>
      <div className="mb-4 w-full">
        <DataTableQueries />
      </div>
    </div>
  );
}

export default HelpAndSupport;
