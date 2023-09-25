import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { DropzoneUpload, AccordionGuide, Progress } from "@/widgets/layout";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function UploadAudio() {
  return (
    <>
      <>
        <Card className="mx-auto mt-12 mb-6 h-fit lg:mx-4">
          {/* <Progress /> */}
          <DropzoneUpload />
        </Card>
        <AccordionGuide className="w-full lg:w-1/2" />
      </>
    </>
  );
}

export default UploadAudio;
