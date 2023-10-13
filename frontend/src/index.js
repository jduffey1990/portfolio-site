import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import './css/custom.css';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);