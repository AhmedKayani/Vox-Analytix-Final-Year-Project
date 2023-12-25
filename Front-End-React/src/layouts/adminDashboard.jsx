import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { Sidenav, DashboardNavbar, Configurator } from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

/**
 *
 * The Dashboard component is a layout component that renders a dashboard page. It includes the following components:
 * Sidenav: A navigation menu component that displays a list of routes.
 * DashboardNavbar: A top navigation bar component that displays the name of the page.
 * Configurator: A component that allows the user to configure settings.
 * IconButton: A button component that displays a cog icon and opens the Configurator component when clicked.
 * Routes: A component that maps the pages array to Route components.
 * Footer: A component that displays a footer at the bottom of the page.
 *
 * Props
 * The Dashboard component does not accept any props.
 *
 * Dependencies
 * The Dashboard component depends on the following libraries:
 * react
 * react-router-dom
 * @material-tailwind/react
 *
 * Notes
 * The Dashboard component uses the useMaterialTailwindController hook to manage the state of the Sidenav component.
 * The Dashboard component uses the routes array to generate the navigation menu and the pages array to generate the Route components.
 *
 **/

export function AdminDashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  // Only show the admin dashboard pages
  const adminRoutes = routes.filter((route) => route.layout === "admin");

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      {/* This is the sidenav for the admin dashboard */}
      <Sidenav
        routes={adminRoutes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {/* Without these, the routes won't render any of the pages contents */}
          {routes.map(
            ({ layout, pages }) =>
              layout === "admin" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  );
}

AdminDashboard.displayName = "/src/layout/adminDashboard.jsx";

export default AdminDashboard;
