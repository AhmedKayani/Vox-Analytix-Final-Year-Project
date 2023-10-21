import React, { useCallback, useState, useMemo } from "react";

import AudioFileIcon from "@mui/icons-material/AudioFile";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import {
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import { Typography, Card, Button, Alert } from "@material-tailwind/react";

import { useDropzone } from "react-dropzone";

// import { GetAudioUrl } from "@/utils";

import { GetAudioUrl } from "@/utils";

/**
 *
 * This is a React functional component called DropzoneUpload. It is used to upload an audio file and display its name and a preview.
 *
 * The component uses the useState hook to manage the state of the uploaded file and the rejected file. It also uses the useNavigate hook from the react-router-dom library to navigate to the results page after the analyze function is performed.
 *
 * The useDropzone hook is used to handle the file upload. It accepts an onDrop function that is called when a file is dropped onto the dropzone. The accept property specifies the accepted file types, and the maxSize and maxFiles properties specify the maximum file size and number of files that can be uploaded.
 *
 * The removeFile function is used to remove a file from the state when the user clicks the cross button.
 *
 * The component renders a form with a dropzone, a preview of the uploaded file, and a button to analyze the file. If the file is rejected, an alert is displayed with the reason for rejection.
 *
 **/

export function DropzoneUpload() {
  const [file, setFile] = useState([]);
  const [rejectedFile, setRejectedFile] = useState();
  const [alert, setAlert] = useState(true);
  const [urlFile, setUrlFile] = useState(null);

  const navigate = useNavigate();

  const handleAnalyzeClick = () => {
    // Perform your analyze function here
    // Once done, navigate to the Results page

    if (file.length > 0) {
      const url = uploadAudioAndGetUrl(urlFile);
      console.log(url);
      navigate("/dashboard/result-page", { state: { file } });
    } else {
      setAlert(false);
      setRejectedFile("Please upload a file");
    }
  };

  const uploadAudioAndGetUrl = async (file) => {
    return await GetAudioUrl(file);
  };

  const assignFilePreview = useMemo(() => {
    return (file) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
    };
  }, []);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      // Resetting the state of rejected files to remove the alert if the user uploads a valid file
      setRejectedFile();
      if (acceptedFiles.length) {
        const firstAcceptedFile = acceptedFiles[0];

        // Updating the state for URL File
        setUrlFile(firstAcceptedFile);

        setFile([assignFilePreview(firstAcceptedFile)]);
      }

      if (rejectedFiles.length) {
        setRejectedFile(rejectedFiles[0].errors[0].message);
      }
    },
    [assignFilePreview]
  );

  console.dir(`This is the file: ${file}`);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/*": [".mp3", ".wav"],
    },
    maxSize: 50000000,
    maxFiles: 1,
  });

  const removeFile = (name) => {
    setFile((file) => file.filter((f) => f.name !== name));
  };

  return (
    <div className="w-full rounded-lg bg-white px-8 py-12 shadow-md xl:col-span-2">
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
          <Typography variant="small" color="blue-gray">
            MP3, file size no more than 2MB
          </Typography>
          <CloudArrowUpIcon className="h-10 w-10 text-blue-gray-400 " />
        </div>
        {rejectedFile && alert !== 1 && (
          <Alert
            className="mt-5 px-4"
            color="red"
            icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
          >
            {rejectedFile}
          </Alert>
        )}
        {file.map((file) => (
          <Card
            key={file.name}
            className="mt-5 flex flex-row flex-wrap items-center justify-between rounded-lg py-2 px-4"
            color="blue"
            variant="gradient"
            onLoad={() => URL.revokeObjectURL(file.preview)}
            animate={{
              mount: { y: 0 },
              unmount: { y: 100 },
            }}
          >
            <div className="flex items-center">
              <AudioFileIcon className="h-10 w-10 text-white" />
              <Typography
                variant="paragraph"
                color="white"
                className="ml-2 font-normal"
              >
                {file.name}
              </Typography>
            </div>
            <div>
              {/* Assuming you're using a Material-UI icon for the cross button */}

              <Button
                onClick={() => removeFile(file.name)}
                variant="text"
                size="sm"
                className="px-0"
              >
                <CloseIcon className="h-5 w-5 text-white" />
              </Button>
            </div>
          </Card>
        ))}
      </form>
      <Button
        variant="gradient"
        className="mt-6 inline-flex items-center justify-end gap-3"
        onClick={handleAnalyzeClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Analyze
      </Button>
    </div>
  );
}

export default DropzoneUpload;
