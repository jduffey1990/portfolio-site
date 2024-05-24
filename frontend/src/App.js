import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";


//This was a very tough solve and I am proud of myself for it.  404.html is what gh-pages needs to handle SPA not-found routes, and that page uses some of this logic to solve the created query parameter of https://foxdogdevelopment.com/?redirect={currentroute}  the /is our default home as is best practices.  We then take that redirect query and replace it with the param, query, or hash we built in 404.html.
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [location, navigate]);

  return <Layout />;
}

export default App;