import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

import { uploadAudioFaq } from "@/data";

/**
 *
 * AccordionGuide Component
 *
 * The AccordionGuide component is a React component that renders an accordion guide.
 * It provides information and answers to frequently asked questions in an accordion format.
 *
 * Components:
 * - Accordion: An accordion component that displays the questions and answers.
 * - AccordionHeader: A component that displays the header of the Accordion component.
 * - AccordionBody: A component that displays the body of the Accordion component.
 * - Typography: A component that displays text.
 *
 * Props:
 * The AccordionGuide component does not accept any props.
 *
 * Dependencies:
 * - This component relies on the following libraries:
 *   - react
 *   - @mui/material
 *   - @mui/icons-material
 *
 * Notes:
 * - The AccordionGuide component uses the Accordion, AccordionHeader, AccordionBody, and Typography components
 *   from the @mui/material library to create an accordion-style guide.
 * - It populates the questions and answers in the accordion using the data provided in the uploadAudioFaq array.
 *
 * Example Usage:
 * ```jsx
 * import AccordionGuide from './AccordionGuide';
 *
 * const uploadAudioFaq = [
 *   { question: 'How do I upload audio files?', answer: 'To upload audio, navigate to the Upload Audio page...' },
 *   { question: 'What file formats are supported?', answer: 'Currently, we support MP3, WAV, and AAC formats.' },
 *   // Add more FAQ items as needed
 * ];
 *
 * // Inside a React component's render method:
 * <AccordionGuide uploadAudioFaq={uploadAudioFaq} />
 * ```
 *
 **/

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
