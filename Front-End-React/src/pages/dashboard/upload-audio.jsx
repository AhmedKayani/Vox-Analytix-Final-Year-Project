import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@material-tailwind/react";

// This import is used for the upload functionality. Self made component.
import { DropzoneUpload, AccordionGuide, Progress } from "@/widgets/layout";

// This import is used to get the audio url from the backend.
import { GetAudioUrl } from "@/utils";

/**
 *
 * The function `UploadAudio` returns a JSX component that renders a `Card` component containing a `DropzoneUpload` component, and an `AccordionGuide` component.
 *
 * @returns The UploadAudio function is returning a JSX fragment. Inside the fragment, there is a Card component and inside the Card component, there is a DropzoneUpload component. After the Card component, there is an AccordionGuide component.
 *
 **/

export function UploadAudio() {
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  // The `handleFileUpload` function is used to upload the audio file to the backend and get the audio url and then navigate to the result page.
  const handleFileUpload = async (file) => {

    // So that the progress bar is displayed.
    setIsUploading(true);

    // This is the url of the audio file.
    const url = await uploadAudioAndGetUrl(file[0]);

    // So that the progress bar is not displayed and the result page is displayed.
    setIsUploading(false);
    navigate("/dashboard/result-page", { state: { file, url } });
  };

  // This function is used to upload the audio file to the backend and get the audio url. Used in the `handleFileUpload` function.
  const uploadAudioAndGetUrl = async (file) => {
    return await GetAudioUrl(file);
  };

  return (
    <>
      <Card className="mx-auto mt-12 mb-6 h-fit lg:mx-4">
        {/* This component handles all the upload functionality */}
        {!isUploading && <DropzoneUpload handleFileUpload={handleFileUpload} />}
        {/* Displays the progress bar when the file is uploading. */}
        {isUploading && <Progress />}
      </Card>
      {/* This component shows the accordion guide to upload audio */}
      <AccordionGuide className="w-full lg:w-1/2" />
    </>
  );
}

export default UploadAudio;
