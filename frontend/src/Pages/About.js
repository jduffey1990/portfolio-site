import React from 'react';
import { Link } from 'react-router-dom';
import GenBackground from '../Layout/GenBackground';
import Contentback from "../images/Contentback.png";
import Couple from "../images/ashandi.jpg";
import FoxDog from "../images/FoxDog.png"
import MapBoxMap from '../../use-mapbox-gl-js-with-react/MapBoxMap';

function About() {
    return (
        <>
            <GenBackground backgroundImage={FoxDog}/>
            
            <div style={{ 
                backgroundImage: `url(${Contentback})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover', 
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
            }}>
                <div className="content-overlay">
                    
                    <section className="section">
                        <h2 style={{textAlign: 'center'}}>About <span className="highlighted">Jordan</span></h2>
                        <img src={Couple} alt="Couple" style={{display: 'block', maxWidth: '60%', margin: '0 auto'}} />
                    </section>

                    <section className="section">
                        <h3>Life Story</h3>
                        <p>
                            Jordan was born in Tucson, AZ, and relocated to Colorado Springs at a young age. He hails from a lineage of healthcare professionals: his father is an Orthopedic Surgeon, his sister a Mohs surgeon, his grandfather an oncologist, and his grandmother a nurse. Married to his wonderful wife, Ashley, since 2018, they are proud pet parents to a dog, two cats, and a flock of chickens that provide them with farm-fresh eggs. An interesting tidbit: when their dog, Franklin, curls up, he resembles a fox, which inspired the name 'Fox Dog'. Jordan and his family reside in Lakewood, CO. Among his hobbies are skiing, cycling, hiking, and exploring the finest restaurants and bars in the region.
                        </p>
                    </section>

                    <section className="section">
                        <h3>Education</h3>
                        <p>
                            Jordan pursued his college education at UCLA, earning a B.S. in Psychobiology with a focus on predental studies. He later attended the University of Colorado School of Dental Medicine and graduated summa cum laude with honors. Post-graduation, he expanded his expertise in implant dentistry, endodontics, and other specialized dental procedures at the University of Colorado School of Dental Medicine General Practice Residency.
                        </p>
                        <p>
                            Upon reflection and recognizing his inherent strengths and passions, Jordan pivoted towards software development. He undertook both free and paid courses online, with platforms like Udemy. His exploration led him to <a href="https://www.thinkful.com">Thinkful</a>, a top-rated coding bootcamp recognized by Forbes in 2023. Thinkful's mentorship and continued support post-curriculum stood out for Jordan, guiding his journey in the tech world.
                        </p>
                    </section>

                    <section className="section">
                        <h3>Work History</h3>
                        <p>
                            After completing his residency, Jordan delved into private practice at Aspen Park Dental. During this time, he cultivated skills such as analytical thinking, problem-solving, and meticulous attention to detail. Three years later, he embraced a fresh opportunity at Longmont Complete Dentistry, a practice with a rich 30-year legacy.
                        </p>
                        <p>
                            However, after four enriching years in the Dental field, Jordan realized that even though healthcare is in his lineage, it is not necessarily in his blood. Jordan felt drawn to the tech industry.  The allure of devising innovative solutions, architecting efficient systems, and being at the forefront of technological evolution resonated deeply with him. He realized his true calling was not in healthcare but in the dynamic world of software development.
                        </p>
                        <p>
                            As a software developer, Jordan aspires to leverage technology in crafting impactful real-world solutions. Driven by the transformative power of software, he aims to enhance lives, optimize processes, and promote global connectivity. With his background in healthcare, he brings a unique perspective and is eager to bridge the healthcare-technology divide, ensuring the creation of tools that are both efficient and empathetic.
                        </p>
                        <p>
                            Jordan is trusted by business professionals to complete their websites with care and empathy.  In the "Projects" link you can see the websites he has finished or is under construction.  The Mortgage Bureau is a happy customer of Fox Dog that wasn't happy with the annual expense of a "out-of-a-box" mortgage website solution they were previously using.  Jordan was able to decrease monthly expenses from around $315 a month to $10 a month with a one-time, upfront price solution that was less than paying a year of their previous subscription.  Mann Ranch is a mixed-use ranch outside of Wichita, KS that is both for personal property use and cattle ranching.  We have agreed on styling, and are waiting for professional photos from all four seasons to provide a curated glimpse into potential ownership once the photos can all be added to the website.

                        </p>
                        <p>
                            Pomarium is an opportunity that came in just in the nick of time.  The C-suite had an MVP built by contractors, and had finished a friends and family investment round.  The time was right to hire a growing team.  Jordan started immediately on full-stack development with Pomarium, often working directly with members of the C-suite to turn their imaginations into software reality.  Jordan's Magnum Opus with Pomarium was implementing a fully integrated payment system, not merely just a payment portal.  Stripe was connected into the application like a grape vine can be grafted into an established orchard.  This change dropped the Operations Team's involvement in billing by nearly 100% (there's always something that needs hands on...).  Pomarium continues the fight to bring portfolios to investors that put their money where their values are!

                        </p>
                    </section>

                    <section className="section">
                        <p>
                            For further insights into Jordan's coding journey and resources, please feel free to <Link to="/contact">contact him</Link>.
                        </p>
                    </section>

                    <section className="section">
                        <MapBoxMap /> Using the Map component
                    </section>

                    <hr />
                </div>
            </div>
        </>
    );
}

export default About;