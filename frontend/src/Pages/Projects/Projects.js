import React, { useEffect, useState } from "react";
import GenBackground from "../../Layout/GenBackground";
import FoxDog from "../../images/FoxDog.png"
import Footer from "../../Layout/Footer"

import PleasureOptions from "./PleasureOptions";
import BusinessOptions from "./BusinessOptions";



function Projects() {
  return (
    
    <div>
        <GenBackground backgroundImage={FoxDog}/>
        <BusinessOptions />
        <PleasureOptions />
        <Footer />
    </div>

    
  );
}

export default Projects;