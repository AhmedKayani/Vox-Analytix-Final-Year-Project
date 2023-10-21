import React from "react";
import PropTypes from "prop-types";

/**
 *
 * index.jsx
 *
 * The index.jsx file exports the following components and functions:
 *
 * - MaterialTailwind: A context object created using React.createContext to manage the state of Material Tailwind UI components.
 * - reducer: A function that handles state updates based on action types and values.
 * - MaterialTailwindControllerProvider: A component providing the Material Tailwind context to its children, using useReducer for state management.
 * - useMaterialTailwindController: A hook to access the Material Tailwind context. Throws an error if used outside MaterialTailwindControllerProvider.
 * - setOpenSidenav: A function to dispatch an action to open the sidenav.
 * - setSidenavType: A function to dispatch an action to set the sidenav type.
 * - setSidenavColor: A function to dispatch an action to set the sidenav color.
 * - setTransparentNavbar: A function to dispatch an action to set the transparency of the navbar.
 * - setFixedNavbar: A function to dispatch an action to set the fixed position of the navbar.
 * - setOpenConfigurator: A function to dispatch an action to open the configurator.
 *
 * Dependencies:
 * - This file depends on the following libraries:
 *   - react
 *   - prop-types (Specify how prop-types are used within this file.)
 *
 * Notes:
 * - MaterialTailwindControllerProvider uses useReducer to manage the state of Material Tailwind UI components.
 * - useMaterialTailwindController is used to access the Material Tailwind context.
 * - The provided functions like setOpenSidenav are used to dispatch actions for updating UI state.
 *   Example usage: setOpenSidenav(dispatch, true) to open the sidenav.
 *
 **/

export const MaterialTailwind = React.createContext(null);
MaterialTailwind.displayName = "MaterialTailwindContext";

export function reducer(state, action) {
  switch (action.type) {
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function MaterialTailwindControllerProvider({ children }) {
  const initialState = {
    openSidenav: false,
    sidenavColor: "blue",
    sidenavType: "dark",
    transparentNavbar: true,
    fixedNavbar: false,
    openConfigurator: false,
  };

  const [controller, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return (
    <MaterialTailwind.Provider value={value}>
      {children}
    </MaterialTailwind.Provider>
  );
}

export function useMaterialTailwindController() {
  const context = React.useContext(MaterialTailwind);

  if (!context) {
    throw new Error(
      "useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider."
    );
  }

  return context;
}

MaterialTailwindControllerProvider.displayName = "/src/context/index.jsx";

MaterialTailwindControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const setOpenSidenav = (dispatch, value) =>
  dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (dispatch, value) =>
  dispatch({ type: "SIDENAV_TYPE", value });
export const setSidenavColor = (dispatch, value) =>
  dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (dispatch, value) =>
  dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });
