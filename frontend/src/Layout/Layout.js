import React, { useState, useEffect } from "react";
import Generalnav from "./Generalnav";
import AppRoutes from "./AppRoutes";
import { useLocation } from 'react-router-dom'


//This file is to maintain the General nav as consistently at the top throughout the routes.  Also with SPA's it is tough to control that we route to the top, and the window.scrollTo solves that for us.
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