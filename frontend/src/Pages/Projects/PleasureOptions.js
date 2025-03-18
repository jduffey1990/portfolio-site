import React from "react";
import ProjectsCard from "./ProjectsCard";
import buster from "../../images/buster.png"
import jordle from "../../images/jordle.png"
import res from "../../images/res.png"
import memory from "../../images/memory-game.png"
import finance from "../../images/finance.png"
import csharapi from "../../images/csharapi.png"
import mma from "../../images/mma.png"
import fintech from "../../images/fintech.png"

function pleasureOptions() {

    const openLink = () => {
      window.open("https://github.com/jduffey1990", '_blank');
    };

    return(
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                <h3>GitHub Projects</h3>
                <button className="btn-form" onClick={openLink}>My Github Page</button>
                <h6 style={{
                    marginTop: '20px',
                    color: '#586069',  // softer color for easier reading
                    fontFamily: '"Segoe UI", Arial, sans-serif',  // more legible font
                    fontWeight: 'normal',  // less bold to reduce strain
                    lineHeight: '1.5',  // more line spacing for readability
                    maxWidth: '600px',  // limits the width for better text alignment
                    textAlign: 'center',  // centers text for aesthetic balance
                    padding: '10px',  // adds space inside the h6 element
                    backgroundColor: '#f6f8fa',  // light background to highlight the area
                    borderRadius: '8px',  // rounded corners for modern look
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  // subtle shadow for depth
                  }}>These projects, although some may have been assignments for a course, are my own.  If there was a framework needed to satisfy course requirement, there are other significant changes made to make it my own. <br></br> <br></br>I know it's annoying, but please excuse the load time on the requests for these sites.  If I paid for immediate availability on my projects it would cost 
                  <br></br><b style={{ fontWeight: "bold", fontSize: "30px" }}>a lot</b> 
                  <br></br>in database or server prices every month.</h6>
            </div>
            <div className="projects-card-container" style={{margin: "20px 100px" }}>

                <ProjectsCard 
                  title="Buster Brackets" 
                  image={buster}
                  shortDescription="My college basketball tournament algorithm turned legit!  Using Vue.js, docker, node.js, Hapi, MongoDB, AWS, Render, OpenAI and more.  Offseason load times may be affected because of spin down effects." 
                  onClick={() => window.open("https://busterbrackets.com", '_blank')}
                />
                <ProjectsCard 
                  title="Jordle" 
                  image={jordle}
                  shortDescription="Jordan's version of your favorite online word guessing game.  Give it a go! if you win, you get a fun fact about the word you guessed.  This project is built in Javascript, with HTML, CSS, React, PostgreSQL among other frameworks and libraries.  The Render Server that serves the site  is a free version that takes a bit to activate when the user first opens the site." 
                  onClick={() => window.open("https://github.com/jduffey1990/Jordle", '_blank')}
                />
                <ProjectsCard 
                  title="Jordan's Memory game" 
                  image={memory}
                  shortDescription="I made a memory game for my nieces and nephews to play.  This project is built in Javascript, with HTML, CSS, React, PostgreSQL among other frameworks and libraries.  The Render Server that serves the site is a free version that takes a bit to activate when the user first opens the webpage." 
                  onClick={() => window.open("https://github.com/jduffey1990/memory-game", '_blank')}
                />
                <ProjectsCard 
                  title="restaurant-reservation" 
                  image={res}
                  shortDescription="Restaurant Reservation is modeled by a ficticious restaurant named 'Periodic Tables' to manage their tables and reservations.  Fully CRUD and functional for any restaurant in need of reservation management.  The Render Server that serves the site is a free version that takes a bit to activate when the user first opens the demo site." 
                  onClick={() => window.open("https://github.com/jduffey1990/restaurant-reservation", '_blank')}
                />
                <ProjectsCard 
                  title="Duffey Finance" 
                  image={finance}
                  shortDescription="Through Harvard's CS50 course, an assignment we were given was to develop a basic app using python and flask.  Once out of the course, the stock data wouldn't work anymore, so I paired the basic structure with the more robust Alpha Vantage API for real-life tickers and sustained stock tracking.  Please don't use sensitive password's or other identifying info on this site." 
                  onClick={() => window.open("https://github.com/jduffey1990/cs50-finance", '_blank')}
                />
                <ProjectsCard 
                  title="CSharp API" 
                  image={csharapi}
                  shortDescription="DotnetAPI Project is a RESTful API built using C# .NET Core, utilizing Dapper for data access and JWT for security.  First exposure to C# and EF Core.  Most lasting and useful information since learning was the JWT module and sessioning." 
                  onClick={() => window.open("https://github.com/jduffey1990/csharpapi", '_blank')}
                />
                <ProjectsCard 
                  title="March Madness Algorithm" 
                  image={mma}
                  shortDescription="Javascript CLI application.  A lot of bracket challenges give you the odds for each matchup, but this doesn't really help you make a choice when the odds are 78 and 22. That's why I used my development skills to create my March Madness algorithm. The historical odds for all possible matchups like 1vs16 or 7vs10 are baked in and applied systematically to each round that the computer generates." 
                  onClick={() => window.open("https://github.com/jduffey1990/March-Madness", '_blank')}
                />
                <ProjectsCard 
                  title="Fintech ETL" 
                  image={fintech}
                  shortDescription="This ETL pipeline reads data from two input files, processes the data to calculate the market value and sector weights, and writes the results to an output file. The project is designed to demonstrate data processing capabilities and financial calculations.  Just wanted a cool ETL project and I have been exposed to finance companies and methods, so here is an example." 
                  onClick={() => window.open("https://github.com/jduffey1990/fintechETL", '_blank')}
                />
            </div>
      </>
)}

export default pleasureOptions;