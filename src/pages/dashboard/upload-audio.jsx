import { Card } from "@material-tailwind/react";
import { DropzoneUpload, AccordionGuide } from "@/widgets/layout";

export function UploadAudio() {
  return (
    <>
      <Card className="mx-auto mt-12 mb-6 h-fit lg:mx-4">
        <DropzoneUpload />
      </Card>
      <AccordionGuide className="w-full lg:w-1/2" />
    </>
  );
}

export default UploadAudio;
