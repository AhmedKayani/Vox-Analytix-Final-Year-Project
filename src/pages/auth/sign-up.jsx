import { Link } from "react-router-dom";
import logoLinearWhite from "/img/Logo-vertical-white.png";
import {
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

/**
 *
 * SignUp Component
 *
 * The SignUp component is a React component that renders a sign-up form, including:
 * - Background image (img)
 * - Sign-up form (Card) with:
 *   - Header (CardHeader)
 *   - Body (CardBody) with form elements:
 *     - Name, email, and password input (Input)
 *     - Role selection (Select) with options (Option)
 *     - Terms and conditions agreement (Checkbox)
 *   - Footer (CardFooter) with:
 *     - Submit button (Button)
 *     - Text (Typography)
 *     - Navigation link (Link) to the sign-in page
 *
 * Props:
 * - This component does not accept any props.
 *
 * Dependencies:
 * The SignUp component depends on the following libraries:
 * - react
 * - @mui/material
 * - @mui/icons-material
 * - react-router-dom
 *
 * Notes:
 * The SignUp component uses the Card component from the @mui/material library to display the sign-up form.
 * - The SignUp component uses the Input, Select, Checkbox, Button, Typography, and Link components from the @mui/material library to display the form elements.
 * - The SignUp component uses the CardHeader, CardBody, and CardFooter components to display the header, body, and footer of the Card component.
 * - The SignUp component uses an image component to display a background image.
 *
 **/

export function SignUp() {
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
          <CardBody className="flex flex-col gap-4 py-2">
            <Input label="Name" size="lg" />
            <Select label="Role">
              <Option>Admin</Option>
              <Option>Analyst</Option>
            </Select>
            <Input type="email" label="Email" size="lg" />
            <Input type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="py-3 pt-0">
            <Button variant="gradient" fullWidth>
              Sign Up
            </Button>
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
        </Card>
      </div>
    </>
  );
}

export default SignUp;
