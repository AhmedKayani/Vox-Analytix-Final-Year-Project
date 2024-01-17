import { useAuthContext } from "./use-auth-context";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from localStorage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
