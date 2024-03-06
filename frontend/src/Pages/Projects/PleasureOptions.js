import React from "react";
import ProjectsCard from "./ProjectsCard";
import jordle from "../../images/jordle.png"
import res from "../../images/res.png"
import memory from "../../images/memory-game.png"
import finance from "../../images/finance.png"

function pleasureOptions() {

    const openLink = () => {
      window.open("https://github.com/jduffey1990", '_blank');
    };

    return(
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                <h3>GitHub Projects</h3>
                <button className="btn-form" onClick={openLink}>My Github Page</button>
            </div>
            <div className="projects-card-container" style={{margin: "20px 100px" }}>

                <ProjectsCard 
                  title="Jordle" 
                  image={jordle}
                  shortDescription="Jordan's version of your favorite online word guessing game.  Give it a go! if you win, you get a fun fact about the word you guessed.  This project is built in Javascript, with HTML, CSS, React, PostgreSQL among other frameworks and libraries.  The Elephant SQL database is a free version that takes a bit to activate when the user first opens the site." 
                  onClick={() => window.open("https://jordle.onrender.com", '_blank')}
                />
                <ProjectsCard 
                  title="Jordan's Memory game" 
                  image={memory}
                  shortDescription="I made a memory game for my nieces and nephews to play.  This project is built in Javascript, with HTML, CSS, React, PostgreSQL among other frameworks and libraries.  The Elephant SQL database is a free version that takes a bit to activate when the user first opens the site." 
                  onClick={() => window.open("https://jordans-memory-game.onrender.com", '_blank')}
                />
                <ProjectsCard 
                  title="restaurant-reservation" 
                  image={res}
                  shortDescription="Restaurant Reservation is made for a ficticious restaurant named 'Periodic Tables' to manage their tables and reservations.  The Elephant SQL database is a free version that takes a bit to activate when the user first opens the site." 
                  onClick={() => window.open("https://github.com/jduffey1990/restaurant-reservation", '_blank')}
                />
                <ProjectsCard 
                  title="Duffey Finance" 
                  image={finance}
                  shortDescription="Through Harvard's CS50 course, an assignment we were given was to develop this finance app where users can buy and sell stocks with a fake cash value ready upon profile creation with a personal touch of live stock tracking.  Please don't use any sensitive information on this site, and the Elephant SQL database is a free version that takes a bit to activate when the user first opens the site." 
                  onClick={() => window.open("https://duffeyfinance.onrender.com", '_blank')}
                />
            </div>
      </>
)}

export default pleasureOptions;