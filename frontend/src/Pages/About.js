import { Link } from 'react-router-dom';
import GenBackground from '../Layout/GenBackground';
import Footer from '../Layout/Footer';
import FoxDog from '../images/FoxDog.png';
import Couple from '../images/ashandi.jpg';

function About() {
  return (
    <>
      <GenBackground backgroundImage={FoxDog} compact>
        <h1 className="fd-hero__title fd-hero__title--page">About Jordan</h1>
      </GenBackground>

      <div className="fd-content">

        <section className="fd-section">
          <h2 className="fd-section__heading">About Jordan</h2>
          <img
            src={Couple}
            alt="Jordan and Ashley"
            style={{ display: 'block', width: '100%', maxWidth: '480px', borderRadius: '12px', marginBottom: '28px' }}
          />
          <p className="fd-section__lead">
            Jordan was born in Tucson, AZ, and relocated to Colorado Springs at a young age.
            Married to his wonderful wife, Ashley, since 2018 — proud pet parents to a dog,
            two cats, and a flock of chickens. When their dog Franklin curls up he resembles
            a fox, which inspired the name Fox Dog. Based in Lakewood, CO. Hobbies include
            skiing, cycling, hiking, and finding the best restaurants and bars in the region.
          </p>
        </section>

        <section className="fd-section">
          <h2 className="fd-section__heading">Education</h2>
          <p className="fd-section__lead">
            Jordan earned a B.S. in Psychobiology from UCLA, then graduated summa cum laude
            from the University of Colorado School of Dental Medicine, followed by a General
            Practice Residency. After recognizing his true strengths and passions, he pivoted
            to software development — completing coursework through Udemy and{' '}
            <a className="fd-link" href="https://www.thinkful.com" target="_blank" rel="noreferrer">Thinkful</a>,
            a Forbes-recognized coding bootcamp.
          </p>
        </section>

        <section className="fd-section">
          <h2 className="fd-section__heading">Work History</h2>

          <div className="fd-exp-grid">
            <div className="fd-exp-card">
              <div className="fd-exp-card__header">
                <span className="fd-exp-card__company">Mozaiq</span>
                <span className="fd-exp-card__role">Solo Architect &amp; Full-Stack Developer</span>
              </div>
              <p className="fd-exp-card__blurb">
                Designed and built a wholesale matchmaking platform from scratch — three
                independent microservices, each with its own AWS CodePipeline, API Gateway,
                Lambda function, and Neon PostgreSQL database. Sole owner of all infrastructure
                decisions: Terraform IaC, Docker local dev, and CI/CD pipelines. Designed and
                implemented a RAG-based AI advisor using pgvector embeddings and GPT-4o
                tool-calling orchestration, enabling brands to conversationally discover retail
                distribution partners through hybrid vector/SQL search.
              </p>
              <div className="fd-tags">
                {["TypeScript","Hapi.js","AWS Lambda","Terraform","PostgreSQL","pgvector","Docker","OpenAI","RAG"].map(t => (
                  <span key={t} className="fd-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="fd-exp-card">
              <div className="fd-exp-card__header">
                <span className="fd-exp-card__company">Tower of Babble</span>
                <span className="fd-exp-card__role">Solo Developer — App Store Published</span>
              </div>
              <p className="fd-exp-card__blurb">
                Designed and shipped a full-stack iOS prayer app independently — Swift native
                frontend, serverless TypeScript/Hapi backend on AWS, Redis caching, OpenAI
                prayer generation, Azure and Fish Audio TTS voices, and Apple In-App Purchase
                subscriptions across three tiers.
              </p>
              <div className="fd-tags">
                {["Swift / iOS","TypeScript","Hapi.js","AWS Lambda","Redis","OpenAI","Azure TTS"].map(t => (
                  <span key={t} className="fd-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="fd-exp-card">
              <div className="fd-exp-card__header">
                <span className="fd-exp-card__company">Pomarium</span>
                <span className="fd-exp-card__role">Full-Stack Developer</span>
              </div>
              <p className="fd-exp-card__blurb">
                GCP award-winning startup recognized as a top-three most compelling startup
                in 2024. Joined at the post-friends-and-family-round stage. Worked directly
                with the C-suite to turn product requirements into shipped features.
                Implemented a fully integrated Stripe billing system — grafted end-to-end
                into the application — which eliminated nearly 100% of manual billing
                operations.
              </p>
              <div className="fd-tags">
                {["Vue.js","Django","PostgreSQL","Stripe","GCP"].map(t => (
                  <span key={t} className="fd-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="fd-exp-card">
              <div className="fd-exp-card__header">
                <span className="fd-exp-card__company">Fox Dog Software Development</span>
                <span className="fd-exp-card__role">Freelance — Client Projects</span>
              </div>
              <p className="fd-exp-card__blurb">
                Trusted by business owners to deliver production websites with care.
                The Mortgage Bureau moved from a $315/month off-the-shelf solution
                to a $10/month custom site with a one-time build fee. Additional
                client work underway.
              </p>
              <div className="fd-tags">
                {["React","AWS S3","HTML / CSS"].map(t => (
                  <span key={t} className="fd-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="fd-section fd-section--cta">
          <p className="fd-section__lead">
            Interested in working together?{' '}
            <Link to="/contact" className="fd-link">Get in touch</Link>.
          </p>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default About;
