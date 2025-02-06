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
                    <h2>Software Development Expertise by Fox Dog</h2>
                    <p>
                    Welcome to the official portfolio of <span className="highlighted">Fox Dog</span>. Based in Denver, CO, Fox Dog delivers adept full-stack solutions harnessing cutting-edge technologies like Vue, React, Express, and Django. With a rich experience across front-end, back-end, and fully integrated solutions, we excel at transforming digital ideas into working realities.
                    </p>
                </section>

                <section className="section">
                    <h3>Front-End Services</h3>
                    <p>
                    We specialize in creating intuitive and responsive user interfaces tailored to deliver seamless user experiences. Our front-end services include:
                    </p>
                    <ul>
                    <li>JavaScript / TypeScript</li>
                    <li>Vue.js</li>
                    <li>React.js</li>
                    <li>HTML &amp; CSS</li>
                    <li>Jest (Testing)</li>
                    </ul>
                </section>

                <section className="section">
                    <h3>Back-End Services</h3>
                    <p>
                    Fox Dog provides robust back-end foundations for modern applications. Our capabilities include:
                    </p>
                    <ul>
                    <li>Node.js &amp; Express.js</li>
                    <li>Python (Django)</li>
                    <li>Databases: PostgreSQL, SQLite, MongoDB</li>
                    <li>RESTful APIs</li>
                    <li>Cloud Services: Google Cloud Platform, AWS </li>
                    <li>Stripe Billing &amp; Payment Integration</li>
                    </ul>
                </section>

                <section className="section">
                    <h3>Professional Experience</h3>
                    <p>
                    Our recent collaboration with <strong>Pomarium</strong>—a Google Cloud Platform award-winning startup recognized as a top-three most compelling startup in 2024—showcases our full-stack proficiency. As a Full-Stack Developer on the project, Fox Dog:
                    </p>
                    <ul>
                    <li>Reduced manual processes by 100% through billing automation using Vue, Django, and Stripe</li>
                    <li>Collaborated closely with product owners to transform PRDs and Figma designs into functional features</li>
                    <li>Led the development lifecycle to ensure best practices and deliver high-quality results</li>
                    </ul>
                    <p>
                    This hands-on approach demonstrates our commitment to driving business value through technology.
                    </p>
                </section>

                <section className="section">
                    <h3>Full-Stack Development</h3>
                    <p>
                    We take pride in our ability to integrate front-end and back-end components seamlessly, delivering optimal full-stack solutions for a wide range of projects. The technologies listed above represent just a portion of our expertise.
                    <br />
                    Curious to learn more? Check out our{' '}
                    <a href="https://github.com/jduffey1990">GitHub profile</a> to see examples of real-world applications we’ve worked on.
                    </p>
                </section>

                

                <section className="section">
                    <h3>Continuous Learning &amp; Innovation</h3>
                    <p>
                    While Fox Dog is well-versed in JavaScript, Vue, React, Express, and Django, we continually explore emerging technologies to stay ahead of the curve. Our dedication to learning ensures that each project we undertake benefits from cutting-edge solutions tailored to its specific needs.
                    </p>
                </section>
                </div>
            </div>
        </>
    );
}

export default Content;
