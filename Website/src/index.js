import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./AuthContextProvider/AuthContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <StyledEngineProvider>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </StyledEngineProvider>
  </BrowserRouter>
);
