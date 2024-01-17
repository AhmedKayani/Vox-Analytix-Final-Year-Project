import React, { useState } from "react";
import { Link } from "react-router-dom";
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

import { useLogIn } from "@/hooks";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn, error, isLoading } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    await logIn(email, password);
  };

  return (
    <>
      <img
        src="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <img src={logoLinearWhite} className="h-28 w-32 object-cover" />
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                size="lg"
              />
              <Input
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                size="lg"
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                disabled={isLoading}
                type="submit"
                fullWidth
              >
                Sign In
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
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Link to="/auth/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign up
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

export default SignIn;
