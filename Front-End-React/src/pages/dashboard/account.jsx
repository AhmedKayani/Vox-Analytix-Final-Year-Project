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

import { CardWrapper } from "@/widgets/cards";

export function Account() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
    password: "********",
    profilePicture: "https://www.w3schools.com/w3images/avatar2.png",
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <CardWrapper title="Your Account Details">
        <Avatar src={user.profilePicture} className="mb-2" />
        <Typography size="xl">{user.name}</Typography>
        <Typography color="gray" size="sm">
          Email: {user.email}
        </Typography>
        <Typography color="gray" size="sm">
          Role: {user.role}
        </Typography>
        <Typography color="gray" size="sm">
          Password: {user.password}
        </Typography>
      </CardWrapper>
    </div>
  );
}

export default Account;
