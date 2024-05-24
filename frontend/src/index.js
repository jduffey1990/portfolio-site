import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import './css/custom.css';


//This file is explicitly here to set the BrowserRouter and the root of the application.  Because gh-pages doesn't inherently handle SPA's very well, continue down to App.js, where we move on to handle the SPA problem
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);