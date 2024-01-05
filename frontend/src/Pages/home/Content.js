import React from "react";
import Contentback from "../../images/Contentback.png";
import Footer from "../../Layout/Footer";
import Projects from "../../images/Projects.png";
import Contactcard from "../../images/Contactcard.jpg";
import { Link } from "react-router-dom";

function Content() {
    return (
        <>
        <div style={{
                backgroundImage: `url(${Contentback})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}>
        <section className="contact-wrapper">
                <div className="card">
                    <div className="card-header">
                        <img className="card-image" src={Projects} alt="Projects page" />
                    </div>
                    <div className="card-footer">
                        <Link className="btn-form" to="/projects">See my Projects</Link>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img className="card-image" src={Contactcard} alt="Contact" />
                    </div>
                    <div className="card-footer">
                            <Link className="btn-form" to="/contact">Contact</Link> {/* <-- Use Link here */}
                    </div>
                </div>
                
            </section>
            
                <div className="content-overlay">
                    <section className="section">
                        <h2>Web Development Expertise by Fox Dog</h2>
                        <p>
                            Welcome to the official portfolio of <span className="highlighted">Fox Dog</span>. Based in Denver, CO, Fox Dog offers adept full-stack development services, with a rich experience spanning across front-end, back-end, and integrated full-stack projects. At Fox Dog, the vision is to transform digital ideas into tangible realities efficiently.
                        </p>
                    </section>

                    <section className="section">
                        <h3>Front-End Services</h3>
                        <p>
                            Fox Dog specializes in crafting intuitive user interfaces and ensures responsive user experiences. Our front-end services include:
                        </p>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h3>Back-End Services</h3>
                        <p>
                            Fox Dog provides the foundation for web applications with robust back-end services. Our back-end capabilities encompass:
                        </p>
                        <ul>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>AWS</li>
                            <li>RESTful APIs</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h3>Full-Stack Development</h3>
                        <p>
                            At Fox Dog, we take pride in our capability to seamlessly integrate front-end and back-end components, delivering optimal full-stack solutions for a range of projects.
                        </p>
                    </section>

                    <section className="section">
                        <h3>Continuous Learning & Innovation</h3>
                        <p>
                            While Fox Dog is well-versed in JavaScript, React, and Express, our team is always at the forefront of learning and integrating novel technologies based on evolving project needs. Our commitment to continuous growth ensures delivery of cutting-edge solutions tailored to each project.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Content;
