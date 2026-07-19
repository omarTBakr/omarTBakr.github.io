/* ==========================================================================
   main.js — the only file you need to edit to add/remove projects.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   YOUR PROJECTS — this is the part you will edit most often.
   To add a new project, copy one { ... } block, paste it at the top of the
   list, and change the text. Don't forget the comma between blocks!
--------------------------------------------------------------------------- */
const projects = [
  {
    title: "Volleyball Group Activity Recognition",
    description:
      "PyTorch implementation of group activity recognition on the CVPR 2016 " +
      "volleyball dataset, reproducing 8 baseline models from the paper.",
    tags: ["PyTorch", "Computer Vision", "Deep Learning"],
    github: "https://github.com/omarTBakr/Volleyball-Group-Activity-Recognition",
  },
  {
    title: "Variational Autoencoder (VAE)",
    description:
      "In-depth explanation and from-scratch implementation of Variational " +
      "Autoencoders — the math, the intuition, and the code.",
    tags: ["PyTorch", "Generative Models", "Math"],
    github: "https://github.com/omarTBakr/Variational-Autoencoder-VAE",
  },
  {
    title: "ML Deep Dive",
    description:
      "Essential machine learning algorithms implemented from scratch to " +
      "understand exactly how they work under the hood.",
    tags: ["Python", "NumPy", "Algorithms"],
    github: "https://github.com/omarTBakr/ML-Deep-Dive",
  },
  {
    title: "Tech Job Market Analysis",
    description:
      "Analysis of 700,000+ job postings using PostgreSQL, exploring market " +
      "trends for tech roles across countries.",
    tags: ["PostgreSQL", "SQL", "Data Analysis"],
    github: "https://github.com/omarTBakr/Tech-job-market-analysis-using-PostgreSQL",
  },
  {
    title: "ML Projects",
    description:
      "Collection of applied ML projects, including New York Taxi Trip Duration " +
      "prediction with comprehensive feature engineering.",
    tags: ["scikit-learn", "Feature Engineering", "Regression"],
    github: "https://github.com/omarTBakr/ML-Projects",
  },
];

/* ---------------------------------------------------------------------------
   RENDERING — turns the list above into HTML cards.
   You normally never need to touch anything below this line.
--------------------------------------------------------------------------- */
const grid = document.getElementById("projects-grid");

for (const project of projects) {
  // Create one <article> card per project
  const card = document.createElement("article");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <ul class="tags">
      ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
    </ul>
    <div class="project-links">
      <a href="${project.github}" target="_blank" rel="noopener">View on GitHub →</a>
    </div>
  `;

  grid.appendChild(card);
}

/* ---------------------------------------------------------------------------
   MOBILE MENU — shows/hides the nav links when the ☰ button is tapped.
--------------------------------------------------------------------------- */
const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close the menu after tapping a link (nicer on phones)
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
});
