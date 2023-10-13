import React, { useState } from "react";
import Generalnav from "./Generalnav";
import AppRoutes from "./Routes";

function Layout() {
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