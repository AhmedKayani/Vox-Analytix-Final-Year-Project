import { LandingPage } from "@/pages/Landing";
import { SignIn, SignUp } from "@/pages/auth";

export const landingRoutes = [
  {
    name: "home",
    path: "welcome/landing-page",
    element: <LandingPage />,
  },
  {
    name: "Sign In",
    path: "auth/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "auth/sign-up",
    element: <SignUp />,
  },
];

export default landingRoutes;
