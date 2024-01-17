import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./use-auth-context";

export const useLogIn = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const logIn = async (email, password) => {
    console.log("Using the log In hook");
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch("http://localhost:3001/api/v1/auth/signup", {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      if (response.ok) {
        console.log(data);

        // save the user to localStorage
        localStorage.setItem("user", JSON.stringify(data));

        // update the auth context
        dispatch({ type: "LOGIN", payload: data });

        setIsLoading(false);

        // navigate to the dashboard
        navigate("/dashboard/upload-audio");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { logIn, error, isLoading };
};
