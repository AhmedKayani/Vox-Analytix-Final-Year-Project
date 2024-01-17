import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";

// Get profile picture from public folder
import profilePicture from "../../../public/img/profile-picture-1.png";

import { useAuthContext } from "@/hooks/use-auth-context";

import { CardWrapper } from "@/widgets/cards";

export function Account() {
  // Auth Context
  const { user } = useAuthContext();

  const userDetails = {
    name: user?.username,
    email: user?.email,
    role: user?.role,
    password: "********",
    profilePicture: profilePicture,
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <CardWrapper title="Your Account Details">
        <Avatar src={userDetails.profilePicture} className="mb-2" />
        <Typography size="xl">{userDetails.name}</Typography>
        <Typography color="gray" size="sm">
          Email: {userDetails.email}
        </Typography>
        <Typography color="gray" size="sm">
          Role: {userDetails.role}
        </Typography>
        <Typography color="gray" size="sm">
          Password: {userDetails.password}
        </Typography>
      </CardWrapper>
    </div>
  );
}

export default Account;
