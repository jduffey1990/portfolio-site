import React, { useEffect, useState } from "react";

import GenBackground from "../../Layout/GenBackground"
import Content from "./Content";

import FoxDog from "../../images/FoxDog.png";

import Footer from "../../Layout/Footer"


function Home({setCurrentTheme}) {
  return (
    <>
      <div>
        {/* Include ImageBackground at the top */}
        <GenBackground backgroundImage={FoxDog}/>  
      <Content />
      <Footer />
      
    </div>
    </>
  );
}

export default Home;
