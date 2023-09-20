import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

import { uploadAudioFaq } from "@/data";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export function AccordionGuide() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="mx-auto w-full lg:w-1/2">
      {/* This is the accordion guide */}
      {uploadAudioFaq.map(({ question, answer }, index) => (
        <Accordion
          key={index + 1}
          open={open === index + 1}
          className=" mb-2 rounded-lg border bg-white px-4 shadow transition duration-300 ease-in-out hover:bg-blue-gray-50"
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`border-b-0 text-left transition-colors ${
              open === index + 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            <Typography variant="h6">{question}</Typography>
          </AccordionHeader>
          <AccordionBody className="pt-0">
            <Typography variant="small">{answer}</Typography>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionGuide;
