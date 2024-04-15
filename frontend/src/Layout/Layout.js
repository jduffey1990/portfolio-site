import React, { useState, useEffect } from "react";
import Generalnav from "./Generalnav";
import AppRoutes from "./Routes";
import { useLocation } from 'react-router-dom'

function Layout() {


  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="container-fluid main-content">
      <div className="row">
        <div className="col-12">
          <Generalnav />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default Layout;