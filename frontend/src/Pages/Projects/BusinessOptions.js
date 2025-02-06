import React from "react";
import ProjectsCard from "./ProjectsCard";

import TMB from "../../images/TMB.png"
import pomarium from "../../images/pomarium.png"

function BusinessOptions() {

    return(
        <>
            <h3 style={{ marginTop:'50px', textAlign:'center'}}>Business Ventures</h3>
            <div className="projects-card-container" style={{margin: "20px 100px" }}>
            <ProjectsCard 
                title="The Mortgage Bureau" 
                image={TMB}
                shortDescription="Boutique Mortgage Broker in the Denver Area requested that I fabricate them a more modern and directly functional website than an 'out of the box' solution could manage." 
                onClick={() => window.open("http://themortgagebureau.com.s3-website.us-east-2.amazonaws.com/", '_blank')}
            />
            <ProjectsCard 
                title="Pomarium" 
                image={pomarium}
                shortDescription="This website is the public access for insight into Pomarium's business operations.  You could contact the team if you are an advisor that wants to see our product.  Discuss with Jordan and he might be able to demo an ephemeral environment of the application." 
                onClick={() => window.open("http://getpomarium.com", '_blank')}
            />
            </div>
        </>
)}

export default BusinessOptions