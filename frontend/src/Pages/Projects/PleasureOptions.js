import React from "react";
import ProjectsCard from "./ProjectsCard";
import decoder from "../../images/Decoder.png"
import res from "../../images/res.png"
import recipe from "../../images/recipe.png"
import flashcard from "../../images/flashcard.png"

function pleasureOptions() {

    return(
        <>
            <h3 style={{ marginTop:'50px', textAlign:'center'}}>GitHub Projects</h3>
            <div className="projects-card-container" style={{margin: "20px 100px" }}>

                <ProjectsCard 
                  title="restaurant-reservation" 
                  image={res}
                  shortDescription="Restaurant Reservation is made for a ficticious restaurant named 'Periodic Tables' to manage their tables and reservations." 
                  onClick={() => window.open("https://github.com/jduffey1990/restaurant-reservation", '_blank')}
                />
                <ProjectsCard 
                  title="project-flashcards" 
                  image={flashcard}
                  shortDescription="This is a React-based web application for creating and studying flashcards. The deployed version of the app does not have a backend, so please look at the code to see the React implementation and logic. Enhancements to include a fully functional backend are planned for the future." 
                  onClick={() => window.open("https://github.com/jduffey1990/project-flashcards", '_blank')}
                />
                <ProjectsCard 
                  title="decoder-ring" 
                  image={decoder}
                  shortDescription="A decoder ring with functions including Caesar Shift, Polybius Square, and alphabet substitution.  Fun to encode a message to send to your friends/family to try to decode!" 
                  onClick={() => window.open("https://github.com/jduffey1990/decoder-ring", '_blank')}
                />
                <ProjectsCard 
                  title="recipe-app" 
                  image={recipe}
                  shortDescription="This is a React-based web application for browsing and storing favorite recipes." 
                  onClick={() => window.open("https://github.com/jduffey1990/recipe-app", '_blank')}
                />
            </div>
      </>
)}

export default pleasureOptions;