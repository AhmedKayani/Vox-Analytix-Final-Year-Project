import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

// Without the loading one, the user will be logged out when the page is refreshed
// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { user: action.payload };
//     case "LOGOUT":
//       return { user: null };
//     default:
//       return state;
//   }
// };

// With the loading one, the user will be logged out when the page is refreshed
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "LOADING_COMPLETE":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

// Without the loading one, the user will be logged out when the page is refreshed
// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, { user: null });

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       dispatch({ type: "LOGIN", payload: user });
//     }
//   }, []);

//   console.log("AuthContext state: ", state);

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// With the loading one, the user will be logged out when the page is refreshed
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    dispatch({ type: "LOADING_COMPLETE" });
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
