import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dashboard, AdminDashboard, Auth } from "@/layouts";
import { LandingPage } from "@/pages/Landing";
import { useAuthContext } from "@/hooks/use-auth-context";
import { Navbar } from "@/widgets/layout";

import { landingRoutes as routes } from "@/landing-routes";

import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const { pathname } = useLocation();

  const { user, isLoading } = useAuthContext();
  console.log(user);

  const queryClient = new QueryClient();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <CircularProgress className="mb-4" size={300} thickness={1} />
      </div>
    );
  }

  return (
    <>
      {pathname == "/welcome/landing-page" && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )}
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/dashboard/*"
            element={user ? <Dashboard /> : <Navigate to="/auth/sign-in" />}
          />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/welcome/*" element={<LandingPage />} />

          <Route path="/auth/*" element={<Auth />} />
          <Route
            path="*"
            element={<Navigate to="/welcome/landing-page" replace />}
          />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
