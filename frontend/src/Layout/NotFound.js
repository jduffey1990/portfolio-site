import React from "react";
import "../css/custom.css"

/**
 * Defines the "Not Found" page that is displayed for any unmatched route.
 *
 * @returns {JSX.Element}
 */

function NotFound() {
  return (
    <div className="NotFound">
      <h1>Unfortunately this route doesn't exist in my website.  If you have misentered the address, feel free to use any of the links provided above to navigate properly.</h1>
    </div>
  );
}

export default NotFound;
