import { Link } from "react-router-dom";

import { useState } from "react";

import logoLinearWhite from "/img/Logo-vertical-white.png";
import {
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

import { useSignUp } from "@/hooks";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignUp();

  console.log("This is the error: ", error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, role, email, password);

    await signup("profilePicture.png", username, role, email, password);
  };

  return (
    <>
      <img
        src="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4  w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <img src={logoLinearWhite} className="h-28 w-32 object-cover" />
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody className="mb-3 flex flex-col gap-4 py-2">
              <Input
                label="Username"
                size="lg"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Select label="Role">
                <Option>Admin</Option>
                <Option>Analyst</Option>
              </Select>
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
                Sign Up
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
              <Typography variant="small" className="mt-3 flex justify-center">
                Already have an account?
                <Link to="/auth/sign-in">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign in
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
