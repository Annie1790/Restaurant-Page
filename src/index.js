
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.scss";

import App from "./App.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);