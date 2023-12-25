import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dashboard, AdminDashboard, Auth } from "@/layouts";

/**
 *
 * The code you provided is a functional component in React that returns a JSX expression. The JSX expression contains a Routes component that defines different paths for the application.
 *
 * The first Route component has a path of "/dashboard/*" and an element prop that renders the Dashboard component. This means that any URL that starts with "/dashboard/" will render the Dashboard component.
 *
 * The second Route component has a path of "/auth/*" and an element prop that renders the Auth component. This means that any URL that starts with "/auth/" will render the Auth component.
 *
 * The third Route component has a path of "*" and an element prop that renders the Navigate component. This means that any URL that does not match the previous two paths will render the Navigate component. The Navigate component has a to prop that redirects the user to "/dashboard/home" and a replace prop that replaces the current URL in the browser history.
 *
 * Overall, this code sets up the routing for the application, rendering different components based on the URL path.
 *
 **/

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route
          path="*"
          element={<Navigate to="/dashboard/upload-audio" replace />}
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
