import React from "react";
import ProjectsCard from "./ProjectsCard";

import TMB from "../../images/TMB.png"
import cattle from "../../images/cattle.png"

function BusinessOptions() {

    return(
        <>
            <h3 style={{ marginTop:'50px', textAlign:'center'}}>Business Ventures</h3>
            <div className="projects-card-container" style={{margin: "20px 100px" }}>
            <ProjectsCard 
                title="The Mortgage Bureau" 
                image={TMB}
                shortDescription="Boutique Mortgage Broker in the Denver Area requested that I fabricate them a more modern and directly functional website than an 'out of the box' solution could manage." 
                onClick={() => window.open("https://themortgagebureau.com", '_blank')}
            />
            <ProjectsCard 
                title="Mann Ranch" 
                image={cattle}
                shortDescription="UNDER CONSTRUCTION-Nestled in the scenic Flint Hills of Kansas, stands as a beacon of excellence in the world of Red Angus cattle." 
                onClick={() => window.open("http://mrflinthills.com.s3-website.us-east-2.amazonaws.com", '_blank')}
            />
            </div>
        </>
)}

export default BusinessOptions