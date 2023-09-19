import React, { useCallback, useState } from "react";

import { Typography, Card, Button } from "@material-tailwind/react";

import { useDropzone } from "react-dropzone";

export function DropzoneUpload(className) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Card className="w-full rounded-lg bg-white px-8 py-12 shadow-md xl:col-span-2">
      <Typography variant="h5" color="blue-gray" className="mb-4">
        Upload Audio Call
      </Typography>
      <form>
        <div
          {...getRootProps({
            className:
              "dropzone border-2 border-dashed border-blue-gray-200 p-12 flex flex-col justify-center items-center cursor-pointer hover:bg-blue-gray-50 transition duration-300 ease-in-out",
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <Typography variant="h6" color="blue-gray">
              Drag and drop an audio file here or click
            </Typography>
          )}
        </div>
      </form>
      <Button
        variant="gradient"
        className="mt-6 inline-flex w-max items-center gap-3 self-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Analyze
      </Button>
    </Card>
  );
}

export default DropzoneUpload;
