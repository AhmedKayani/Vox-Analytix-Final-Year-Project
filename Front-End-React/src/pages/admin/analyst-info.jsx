import React from "react";

import { useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

import { authorsTableData } from "@/data";

import { CardWrapper } from "@/widgets/cards";

import { useSignUp } from "@/hooks";

export const AnalystInfo = () => {
  // Add your component logic here
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignUp();

  console.log("This is the error: ", error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = "Analyst";
    console.log(username, role, email, password);

    await signup("profilePicture.png", username, role, email, password);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <CardWrapper title="Add New Analyst" span="2">
          <form onSubmit={handleSubmit}>
            <CardBody className="mb-3 flex flex-col gap-4 py-2">
              <Input
                label="Username"
                size="lg"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Input
                type="email"
                label="Email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                type="password"
                label="Password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Input
                type="file"
                label="Profile Picture"
                size="lg"
                accept="image/*"
              />
              {/* <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div> */}
            </CardBody>
            <CardFooter className="mr-0 py-3 pt-0">
              <Button
                variant="gradient"
                type="submit"
                disabled={isLoading}
                fullWidth
              >
                Add Analyst
              </Button>
              {error && (
                <Alert
                  variant="gradient"
                  color="red"
                  className="mr-0 mt-2 px-0 py-2"
                >
                  <Typography variant="small" className="mr-0 text-center">
                    {error}
                  </Typography>
                </Alert>
              )}
            </CardFooter>
          </form>
        </CardWrapper>
      </div>

      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Quality Assurance Analysts
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "analyst",
                  "Analysis Performed",
                  "status",
                  "employed",
                  "",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-center text-xs font-semibold text-blue-gray-600">
                          {job}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "blue-gray"}
                          value={online ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      {/* <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          View
                        </Typography>
                      </td> */}
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AnalystInfo;
