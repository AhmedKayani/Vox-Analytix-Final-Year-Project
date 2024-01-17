import { useState } from "react";
import { useAuthContext } from "./use-auth-context";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (profilePic, username, role, email, password) => {
    console.log("Using the signup hook");
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch("http://localhost:3001/api/v1/auth/signup", {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profilePic, username, role, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      if (response.ok) {
        console.log(data);
        console.log("This is the data: ", data);

        // save the user to localStorage
        localStorage.setItem("user", JSON.stringify(data));

        // update the auth context
        dispatch({ type: "LOGIN", payload: data });

        setIsLoading(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};
