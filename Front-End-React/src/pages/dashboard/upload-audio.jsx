import { Card } from "@material-tailwind/react";
import { DropzoneUpload, AccordionGuide } from "@/widgets/layout";

/**
 *
 * The function `UploadAudio` returns a JSX component that renders a `Card` component containing a `DropzoneUpload` component, and an `AccordionGuide` component.
 *
 * @returns The UploadAudio function is returning a JSX fragment. Inside the fragment, there is a Card component and inside the Card component, there is a DropzoneUpload component. After the Card component, there is an AccordionGuide component.
 *
 **/

export function UploadAudio() {
  const [urlFile, setUrlFile] = useState(null);

  return (
    <>
      <Card className="mx-auto mt-12 mb-6 h-fit lg:mx-4">
        {/* This component handles all the upload functionality */}
        <DropzoneUpload />
      </Card>
      {/* This component shows the guide to upload audio */}
      <AccordionGuide className="w-full lg:w-1/2" />
    </>
  );
}

export default UploadAudio;
