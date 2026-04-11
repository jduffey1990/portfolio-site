import ProjectsCard from "./ProjectsCard";

const VENTURES = [
  {
    title: "Mozaiq",
    description:
      "Wholesale matchmaking platform built on a microservices architecture. Three independent services — users, companies, and business verification — each with its own AWS Lambda pipeline, Neon PostgreSQL database, and Terraform-managed infrastructure. AI-powered company verification using multi-signal confidence scoring.",
    tags: ["TypeScript", "Hapi.js", "AWS Lambda", "Terraform", "PostgreSQL", "Docker", "OpenAI"],
    url: "https://github.com/jduffey1990/mozaiqReadMe",
  },
  {
    title: "Tower of Babble",
    description:
      "iOS prayer companion app — live on the App Store. Swift native frontend backed by a serverless TypeScript/Hapi API. Features AI-generated personalized prayers, Azure and Fish Audio TTS voices, Redis caching, multi-denomination support, and Apple In-App Purchase subscriptions.",
    tags: ["Swift / iOS", "TypeScript", "Hapi.js", "AWS Lambda", "Redis", "OpenAI", "Azure TTS"],
    url: "https://apps.apple.com/us/app/tower-of-babble/id6741057642",
  },
  {
    title: "Pomarium",
    description:
      "GCP award-winning startup — top-three most compelling startup of 2024. Full-stack development working directly with the C-suite. Implemented a fully integrated Stripe billing system that eliminated nearly 100% of manual operations involvement.",
    tags: ["Vue.js", "Django", "PostgreSQL", "Stripe", "GCP"],
    url: "http://getpomarium.com",
  },
  {
    title: "The Mortgage Bureau",
    description:
      "Boutique mortgage broker in the Denver area needed a modern, functional site at a fraction of the cost of off-the-shelf solutions. Reduced monthly hosting from $315 to $10 with a one-time build.",
    tags: ["React", "AWS S3"],
    url: "http://themortgagebureau.com.s3-website.us-east-2.amazonaws.com/",
  },
];

function BusinessOptions() {
  return (
    <div className="fd-content">
      <section className="fd-section">
        <h2 className="fd-section__heading">Business Ventures</h2>
        <div className="fd-projects-grid">
          {VENTURES.map(({ title, description, tags, url }) => (
            <ProjectsCard
              key={title}
              title={title}
              description={description}
              tags={tags}
              onClick={() => window.open(url, "_blank")}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default BusinessOptions;
