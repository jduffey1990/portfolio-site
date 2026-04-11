import React, { useEffect, useState } from "react";
import GenBackground from "../../Layout/GenBackground";
import FoxDog from "../../images/FoxDog.png"
import Footer from "../../Layout/Footer"

import PleasureOptions from "./PleasureOptions";
import BusinessOptions from "./BusinessOptions";



function Projects() {
  return (
    
    <div>
        <GenBackground backgroundImage={FoxDog} compact>
          <h1 className="fd-hero__title fd-hero__title--page">Projects</h1>
        </GenBackground>
        <BusinessOptions />
        <PleasureOptions />
        <Footer />
    </div>

    
  );
}

export default Projects;