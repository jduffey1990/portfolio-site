import ProjectsCard from "./ProjectsCard";

const GITHUB_PROJECTS = [
  {
    title: "Buster Brackets",
    description:
      "A college basketball tournament bracket algorithm turned into a full web app. Combines historical seed matchup probabilities with a simulation engine to generate statistically optimized brackets.",
    tags: ["Vue.js", "Node.js", "Hapi.js", "MongoDB", "Docker", "AWS", "OpenAI"],
    url: "https://github.com/jduffey1990/busterbrackets-ui",
  },
  {
    title: "March Madness Algorithm",
    description:
      "The CLI precursor to Buster Brackets. Historical matchup odds (1v16, 7v10, etc.) baked in and applied round-by-round to simulate a statistically grounded bracket.",
    tags: ["JavaScript", "CLI"],
    url: "https://github.com/jduffey1990/March-Madness",
  },
  {
    title: "Jordle",
    description:
      "Jordan's take on the word-guessing game. Guess correctly and get a fun fact about the word. Full-stack: React frontend, PostgreSQL word bank.",
    tags: ["React", "JavaScript", "PostgreSQL"],
    url: "https://github.com/jduffey1990/Jordle",
  },
  {
    title: "Duffey Finance",
    description:
      "Stock portfolio tracker built on Harvard's CS50 project structure, extended with the Alpha Vantage API for live tickers and sustained tracking.",
    tags: ["Python", "Flask", "Alpha Vantage API"],
    url: "https://github.com/jduffey1990/cs50-finance",
  },
  {
    title: "Restaurant Reservation",
    description:
      "Full CRUD reservation management system modeled for a restaurant — table availability, reservation lifecycle, and seat assignment.",
    tags: ["React", "Node.js", "PostgreSQL"],
    url: "https://github.com/jduffey1990/restaurant-reservation",
  },
  {
    title: "Fintech ETL",
    description:
      "ETL pipeline that reads portfolio data files, calculates market value and sector weights, and writes structured output. A focused data-engineering exercise.",
    tags: ["Python", "ETL", "Finance"],
    url: "https://github.com/jduffey1990/fintechETL",
  },
];

function PleasureOptions() {
  return (
    <div className="fd-content" style={{ paddingTop: 0 }}>
      <section className="fd-section">
        <h2 className="fd-section__heading">GitHub Projects</h2>
        <p className="fd-section__lead" style={{ marginBottom: "32px" }}>
          Personal and exploratory work.{" "}
          <a
            className="fd-link"
            href="https://github.com/jduffey1990"
            target="_blank"
            rel="noreferrer"
          >
            See everything on GitHub →
          </a>
        </p>
        <div className="fd-projects-grid">
          {GITHUB_PROJECTS.map(({ title, description, tags, url }) => (
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

export default PleasureOptions;
