const portfolioData = {
  name: "Bharath Simha Reddy Muddam",
  role: "Staff Software Engineer & AI Architect",
  email: "mbsr1994@gmail.com",
  phone: "+91 9052500626",
  location: "Hyderabad, India",
  summary:
    "Staff Software Engineer with over 9 years of hands-on expertise building backend systems, enterprise platforms, and AI-driven tooling. I enjoy turning complex systems into reliable, high-impact products and shipping practical automation that makes teams faster and more effective.",
  socialLinks: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bharath-reddy-3b3525129/", external: true },
    { label: "GitHub", url: "https://github.com/mbsr1994", external: true },
    { label: "Email", url: "mailto:mbsr1994@gmail.com", external: false },
    { label: "Call", url: "tel:+919052500626", external: false }
  ],
  stats: [
    { value: "9+", label: "Years building backend systems" },
    { value: "15+", label: "Critical modules owned across trading platforms" },
    { value: "AI", label: "Focused on agent workflows and LLM tooling" }
  ],
  experience: [
    {
      title: "Staff Software Engineer",
      company: "Eze Software",
      period: "February 2021 – Present",
      points: [
        "Own backend stability, maintenance, and feature delivery for 15+ critical modules across a trading platform.",
        "Led the modernization of a legacy desktop workflow into a .NET Web API and React architecture.",
        "Built internal AI tooling including NLP-to-SQL and compliance automation workflows.",
        "Designed reusable developer tooling for schema validation, system design documentation, and code auditing."
      ]
    },
    {
      title: "Consultant (Full-Stack Developer)",
      company: "Deloitte Consulting India Private",
      period: "February 2017 – February 2021",
      points: [
        "Delivered full-stack features for a large public sector health insurance exchange portal.",
        "Designed APIs and SQL/database layers for eligibility, portal, and worker workflows.",
        "Built ASP.NET MVC interfaces and optimized LINQ/Entity Framework data access patterns."
      ]
    }
  ],
  stack: [
    {
      title: "Backend Core & Frameworks",
      items: ["C#", ".NET", ".NET Web API", "ASP.NET MVC", "Entity Framework", "LINQ"]
    },
    {
      title: "Data & Database",
      items: ["MS SQL Server", "Schema Management", "Query Tuning", "Data Aggregation"]
    },
    {
      title: "AI & Emerging Tech",
      items: ["Agent Orchestration", "Loop Engineering", "LLM APIs", "NLP-to-SQL", "Claude Integration"]
    },
    {
      title: "Frontend",
      items: ["HTML/CSS", "JavaScript", "React", "jQuery"]
    },
    {
      title: "Currently Exploring",
      items: ["Python", "Cloud Infrastructure", "AI Application Deployment"]
    }
  ],
  projects: [
    {
      title: "DataChat",
      description:
        "An agentic workflow that turns natural language questions into safe, executable SQL with guardrails and result summaries.",
      tags: ["Python", "Claude API", "SQLite"],
      liveUrl: "",
      repoUrl: "https://github.com/mbsr1994"
    },
    {
      title: "RepoGuardian",
      description:
        "A code-auditing tool that flags outdated dependencies, architecture drift, and risky engineering patterns before they reach production.",
      tags: ["Python", "LLM Orchestration", "GitHub API"],
      liveUrl: "",
      repoUrl: "https://github.com/mbsr1994"
    },
    {
      title: "Schema Drift Monitor",
      description:
        "A cross-environment database validation tool built to detect schema mismatches across Dev, QA, and Production systems.",
      tags: [".NET Web API", "React", "SQL Server"],
      liveUrl: "",
      repoUrl: "https://github.com/mbsr1994"
    }
  ]
};

const navHtml = `
  <a href="#summary">Summary</a>
  <a href="#experience">Experience</a>
  <a href="#stack">Stack</a>
  <a href="#projects">Projects</a>
`;

const socialHtml = portfolioData.socialLinks
  .map((link) => {
    const attrs = link.external ? 'target="_blank" rel="noreferrer"' : '';
    return `<a class="contact-chip" href="${link.url}" ${attrs}>${link.label}</a>`;
  })
  .join("");

const statHtml = portfolioData.stats
  .map(
    (stat) => `
      <div class="stat-item">
        <span class="stat-value">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `
  )
  .join("");

const experienceHtml = portfolioData.experience
  .map(
    (item) => `
      <article class="experience-card">
        <div class="card-head">
          <h3>${item.title}</h3>
          <span class="card-meta">${item.period}</span>
        </div>
        <p class="company-name">${item.company}</p>
        <ul class="points">
          ${item.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </article>
    `
  )
  .join("");

const stackHtml = portfolioData.stack
  .map(
    (group) => `
      <div class="skill-card">
        <h3>${group.title}</h3>
        <div class="tag-list">
          ${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
      </div>
    `
  )
  .join("");

const projectHtml = portfolioData.projects
  .map((project) => {
    const liveButton = project.liveUrl
      ? `<a class="button button-secondary" href="${project.liveUrl}" target="_blank" rel="noreferrer">Live demo</a>`
      : `<span class="button button-secondary disabled">Live demo</span>`;

    const repoButton = project.repoUrl
      ? `<a class="button button-secondary" href="${project.repoUrl}" target="_blank" rel="noreferrer">View code</a>`
      : `<span class="button button-secondary disabled">Code soon</span>`;

    return `
      <article class="project-card">
        <h3>${project.title}</h3>
        <div class="tag-list">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p>${project.description}</p>
        <div class="project-links">
          ${liveButton}
          ${repoButton}
        </div>
      </article>
    `;
  })
  .join("");

document.querySelector(".nav").innerHTML = navHtml;
document.querySelector("#contact-chips").innerHTML = socialHtml;
document.querySelector("#stats").innerHTML = statHtml;
document.querySelector("#summary-text").textContent = portfolioData.summary;
document.querySelector("#experience-grid").innerHTML = experienceHtml;
document.querySelector("#stack-grid").innerHTML = stackHtml;
document.querySelector("#projects-grid").innerHTML = projectHtml;
document.querySelector("#year").textContent = new Date().getFullYear();

document.title = `${portfolioData.name} | Portfolio`;
document.querySelector("#hero-name").textContent = portfolioData.name;
document.querySelector("#hero-role").textContent = portfolioData.role;

document.querySelector("#cta-name").textContent = portfolioData.name;

const contactLink = document.querySelector("#contact-link");
if (contactLink) {
  contactLink.href = `mailto:${portfolioData.email}`;
  contactLink.textContent = portfolioData.email;
}
