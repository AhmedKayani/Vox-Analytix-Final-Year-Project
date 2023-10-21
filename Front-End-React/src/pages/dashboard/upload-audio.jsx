import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@material-tailwind/react";
import { DropzoneUpload, AccordionGuide, Progress } from "@/widgets/layout";
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

  const handleFileUpload = async (file) => {
    setIsUploading(true);

    const url = await uploadAudioAndGetUrl(file[0]);
    console.log(url);

    setIsUploading(false);
    navigate("/dashboard/result-page", { state: { file } });
  };

  const uploadAudioAndGetUrl = async (file) => {
    return await GetAudioUrl(file);
  };

  return (
    <>
      <Card className="mx-auto mt-12 mb-6 h-fit lg:mx-4">
        {/* This component handles all the upload functionality */}
        {!isUploading && <DropzoneUpload handleFileUpload={handleFileUpload} />}
        {isUploading && <Progress />}
      </Card>
      {/* This component shows the guide to upload audio */}
      <AccordionGuide className="w-full lg:w-1/2" />
    </>
  );
}

export default UploadAudio;
