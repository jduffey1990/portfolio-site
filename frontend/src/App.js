import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";


/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
    return (
        
    <Routes>
      <Route path="*" element={<Layout />} />
    </Routes>
   
  );
}

export default App;