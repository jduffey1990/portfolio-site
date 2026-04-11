import { Link } from "react-router-dom";

const STACK = [
  {
    group: "Frontend",
    tags: ["TypeScript", "React", "JavaScript", "HTML / CSS"],
  },
  {
    group: "Backend",
    tags: ["Node.js", "Hapi.js", "RESTful APIs", "PostgreSQL", "Redis"],
  },
  {
    group: "Cloud / Infra",
    tags: ["AWS Lambda", "API Gateway", "Terraform", "Docker", "CodePipeline", "S3"],
  },
  {
    group: "Mobile / AI",
    tags: ["Swift / iOS", "OpenAI API", "Text-to-Speech", "App Store"],
  },
];

const EXPERIENCE = [
  {
    company: "Mozaiq",
    role: "Solo Architect & Full-Stack Developer",
    blurb:
      "Built a wholesale matchmaking platform from the ground up — three independent microservices, each with its own AWS pipeline, PostgreSQL database, and Terraform-managed infrastructure. Implemented a multi-signal company verification engine using web scraping, Google Places, and OpenAI enrichment.",
    tags: ["TypeScript", "Hapi.js", "AWS Lambda", "Terraform", "PostgreSQL", "Docker", "OpenAI"],
  },
  {
    company: "Tower of Babble",
    role: "Solo Developer — App Store Published",
    blurb:
      "Designed and shipped a full-stack iOS prayer app from scratch. Swift native frontend backed by a serverless TypeScript/Hapi API on AWS. Features AI-generated personalized prayers via OpenAI, Azure and Fish Audio TTS voices, Redis caching, and Apple In-App Purchase subscriptions.",
    tags: ["Swift / iOS", "TypeScript", "Hapi.js", "AWS Lambda", "Redis", "OpenAI", "Azure TTS"],
  },
  {
    company: "Pomarium",
    role: "Full-Stack Developer",
    blurb:
      "GCP award-winning startup — recognized as a top-three most compelling startup in 2024. Implemented a fully integrated Stripe billing system that eliminated nearly 100% of manual operations-team involvement. Worked directly with the C-suite to turn product requirements into production features.",
    tags: ["Vue.js", "Django", "PostgreSQL", "Stripe", "GCP"],
  },
];

function Content() {
  return (
    <div className="fd-content">

      <section className="fd-section">
        <h2 className="fd-section__heading">Full-Stack · Serverless · iOS</h2>
        <p className="fd-section__lead">
          Fox Dog is a Denver-based software consultancy. We take products from idea to production —
          building scalable serverless backends, polished iOS apps, and the cloud infrastructure
          that keeps them running.
        </p>
      </section>

      <section className="fd-section">
        <h2 className="fd-section__heading">Tech Stack</h2>
        <div className="fd-stack-grid">
          {STACK.map(({ group, tags }) => (
            <div key={group} className="fd-stack-group">
              <div className="fd-stack-group__label">{group}</div>
              <div className="fd-tags">
                {tags.map(tag => (
                  <span key={tag} className="fd-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fd-section">
        <h2 className="fd-section__heading">Professional Experience</h2>
        <div className="fd-exp-grid">
          {EXPERIENCE.map(({ company, role, blurb, tags }) => (
            <div key={company} className="fd-exp-card">
              <div className="fd-exp-card__header">
                <span className="fd-exp-card__company">{company}</span>
                <span className="fd-exp-card__role">{role}</span>
              </div>
              <p className="fd-exp-card__blurb">{blurb}</p>
              <div className="fd-tags">
                {tags.map(tag => (
                  <span key={tag} className="fd-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fd-section fd-section--cta">
        <p className="fd-section__lead">
          Want to see it in action?{" "}
          <Link to="/projects" className="fd-link">Browse the projects</Link>
          {" "}or{" "}
          <a href="https://github.com/jduffey1990" className="fd-link" target="_blank" rel="noreferrer">
            explore the GitHub profile
          </a>.
        </p>
      </section>

    </div>
  );
}

export default Content;
