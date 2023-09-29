/**
=========================================================
* Material Tailwind Dashboard React - v2.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-tailwind-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-tailwind-dashboard-react/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";

/**
 *
 * The code you provided is using the ReactDOM library to render a React application to the DOM.
 * 
 * The createRoot method is called on the ReactDOM object, passing in the root element as an argument. This method creates a new root-level React component that can be used to render the application.
 * 
 * The render method is then called on the root component, passing in a JSX expression as an argument. The JSX expression contains several nested components that wrap the App component.
 * 
 * The React.StrictMode component is used to enable strict mode, which activates additional checks and warnings for potential issues in the application.
 * 
 * The BrowserRouter component is used to enable client-side routing in the application, allowing for navigation between different pages without a full page refresh.
 * 
 * The ThemeProvider component is used to provide a theme to the application, which can be used to style components.
 * 
 * The MaterialTailwindControllerProvider component is used to provide a context for the Material Tailwind library, which can be used to create UI components.
 * 
 * Finally, the App component is rendered inside the nested components, which will render the main content of the application. 
 * 
 **/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <App />
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
