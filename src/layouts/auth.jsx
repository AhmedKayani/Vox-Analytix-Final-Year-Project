import { Routes, Route } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@/widgets/layout";
import routes from "@/routes";

/**
 *
 * Auth Component
 * The Auth component is a layout component that renders a page for authentication. It includes the following components:
 * Routes: A component that maps the pages array to Route components.
 * ChartPieIcon: A component that displays a chart pie icon.
 * UserIcon: A component that displays a user icon.
 * UserPlusIcon: A component that displays a user plus icon.
 * ArrowRightOnRectangleIcon: A component that displays an arrow right on rectangle icon.
 * Navbar: A navigation bar component that displays a list of routes.
 * Footer: A component that displays a footer at the bottom of the page.
 *
 * Props
 * The Auth component does not accept any props.
 *
 * Dependencies
 * The Auth component depends on the following libraries:
 * react
 * react-router-dom
 * @heroicons/react
 * @/widgets/layout
 * @/routes
 *
 * Notes
 * The Auth component uses the routes array to generate the Route components.
 * The Auth component uses the navbarRoutes array to generate the navigation bar. However, the Navbar component is currently commented out.
 * The Auth component uses the Footer component to display a footer at the bottom of the page.
 *
 **/

export function Auth() {
  const navbarRoutes = [
    {
      name: "dashboard",
      path: "/dashboard/home",
      icon: ChartPieIcon,
    },
    {
      name: "profile",
      path: "/dashboard/home",
      icon: UserIcon,
    },
    {
      name: "sign up",
      path: "/auth/sign-up",
      icon: UserPlusIcon,
    },
    {
      name: "sign in",
      path: "/auth/sign-in",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* This div shows a navbar at the top to display different pages. */}
      <div className="container relative z-40 mx-auto p-4">
        <Navbar routes={navbarRoutes} />
      </div>
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
      <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <Footer />
      </div>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
