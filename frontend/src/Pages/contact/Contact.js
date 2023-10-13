import React from 'react';
import GenBackground from '../../Layout/GenBackground';
import Footer from '../../Layout/Footer';
import ContactCard from './ContactCard';

import ContactImage from '../../images/Contact.jpg';
import linked from "../../images/linked.png";
import githubLogo from "../../images/githubLogo.png";
import gmail from "../../images/gmail.png";

function Contact() {
    return (
    <>
        <GenBackground backgroundImage={ContactImage}/>
        <h2 style={{textAlign:"center"}}>Contact Us</h2>

        <div className="quote-container">
            <blockquote>
            "Our mission is to be as transparent as possible during the time we work on your project with you. Furthermore, we are committed to helping our clients navigate challenges that can arise during the development process.  Please let us know how we can help you."
            </blockquote>
        </div>
        <div className="projects-card-container" style={{ margin: "20px 100px" }}>
                <ContactCard 
                    title="LinkedIn" 
                    image={linked}
                    onClick={() => window.open("https://www.linkedin.com/in/yourProfileName/", '_blank')}
                />
                <ContactCard 
                    title="GitHub" 
                    image={githubLogo}
                    onClick={() => window.open("https://github.com/jduffey1990", '_blank')}
                />
                <ContactCard 
                    title="Email" 
                    image={gmail}
                    onClick={() => window.location.href="mailto:foxdogdevelopment@gmail.com"}
                />

        </div>
        <div className='contact-wrapper'>
            {/* You can add more content here if needed */}
        </div>
        
        <Footer />
        
    </>
    );
}
export default Contact;