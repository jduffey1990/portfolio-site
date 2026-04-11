import GenBackground from "../../Layout/GenBackground";
import Content from "./Content";
import Footer from "../../Layout/Footer";
import FoxDog from "../../images/FoxDogartsy.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <GenBackground backgroundImage={FoxDog}>
        <div className="fd-hero__tagline">Full-Stack &middot; Serverless &middot; iOS</div>
        <h1 className="fd-hero__title">Fox Dog Software Development</h1>
        <p className="fd-hero__sub">
          Building production-grade applications from mobile to cloud —
          <br />based in Denver, CO.
        </p>
        <div className="fd-hero__actions">
          <Link className="fd-btn fd-btn--primary" to="/projects">See Projects</Link>
          <Link className="fd-btn fd-btn--ghost" to="/contact">Get in Touch</Link>
        </div>
      </GenBackground>
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
