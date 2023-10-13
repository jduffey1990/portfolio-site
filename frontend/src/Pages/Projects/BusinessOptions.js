import React from "react";
import ProjectsCard from "./ProjectsCard";
import TMB from "../../images/TMB.png"

function BusinessOptions() {

    return(
        <>
            <h3 style={{ marginTop:'50px', textAlign:'center'}}>Business Ventures</h3>
            <div className="projects-card-container" style={{margin: "20px 100px" }}>
            <ProjectsCard 
                title="The Mortgage Bureau *UNDER DEVELOPMENT*" 
                image={TMB}
                shortDescription="Boutique Mortgage Broker in the Denver Area requested that I fabricate them a more modern and directly functional website than an 'out of the box' solution could manage." 
                onClick={() => window.open("https://mortgage-bureau.vercel.app/", '_blank')}
/>
            </div>
        </>
)}

export default BusinessOptions