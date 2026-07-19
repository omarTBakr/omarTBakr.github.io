/* ==========================================================================
   main.js — projects list + all the interactive behavior.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   YOUR PROJECTS — the part you edit most often.
   Each project has an "image" (a file inside the img/ folder). You can
   replace any .svg with a real screenshot (.png/.jpg) later — just change
   the path here.
--------------------------------------------------------------------------- */
const projects = [
  {
    title: "Volleyball Group Activity Recognition",
    description:
      "PyTorch implementation of group activity recognition on the CVPR 2016 " +
      "volleyball dataset, reproducing 8 baseline models from the paper.",
    tags: ["PyTorch", "Computer Vision", "Deep Learning"],
    image: "img/volleyball.jpg",
    github: "https://github.com/omarTBakr/Volleyball-Group-Activity-Recognition",
  },
  {
    title: "NYC Taxi Trip Duration Prediction",
    description:
      "Regression project predicting New York taxi trip durations with " +
      "comprehensive feature engineering and linear models.",
    tags: ["scikit-learn", "Feature Engineering", "Regression"],
    image: "img/taxi.jpg",
    github:
      "https://github.com/omarTBakr/ML-Projects/tree/main/New%20York%20City%20Taxi%20Trip%20Duration",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Classification on heavily imbalanced data using focal loss, XGBoost, " +
      "LightGBM, Random Forest, AdaBoost, and logistic regression.",
    tags: ["XGBoost", "Imbalanced Data", "Classification"],
    image: "img/fraud.jpg",
    github:
      "https://github.com/omarTBakr/ML-Projects/tree/main/Credit%20Card%20Fraud%20Detection",
  },
  {
    title: "Tech Job Market Analysis",
    description:
      "Analysis of 700,000+ job postings using PostgreSQL, exploring market " +
      "trends for tech roles across countries.",
    tags: ["PostgreSQL", "SQL", "Data Analysis"],
    image: "img/jobmarket.jpg",
    github:
      "https://github.com/omarTBakr/Tech-job-market-analysis-using-PostgreSQL",
  },
];

/* ---------------------------------------------------------------------------
   RENDER PROJECT CARDS
--------------------------------------------------------------------------- */
const grid = document.getElementById("projects-grid");

for (const project of projects) {
  const card = document.createElement("article");
  card.className = "project-card reveal";

  // Photos (.jpg/.png) fill the band and colorize on hover;
  // .svg line-art stays contained and flips with the theme.
  const isPhoto = !project.image.endsWith(".svg");

  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}" loading="lazy"
           class="${isPhoto ? "photo" : ""}">
    </div>
    <div class="project-body">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul class="tags">
        ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
      <div class="project-links">
        <a href="${project.github}" target="_blank" rel="noopener">View on GitHub</a>
      </div>
    </div>
  `;

  grid.appendChild(card);
}

/* ---------------------------------------------------------------------------
   TYPEWRITER — types the rotating job titles in the hero, then deletes
   them, forever. Edit the "roles" list to change what it says.
--------------------------------------------------------------------------- */
const roles = [
  "Machine Learning Engineer",
  "Computer Vision Developer",
  "Deep Learning Enthusiast",
  "Competitive Programmer",
];

const typewriterEl = document.getElementById("typewriter");
let roleIndex = 0;   // which role we're on
let charIndex = 0;   // how many characters are shown
let deleting = false;

function type() {
  const currentRole = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  typewriterEl.textContent = currentRole.slice(0, charIndex);

  let delay = deleting ? 40 : 85;              // deleting is faster than typing
  if (!deleting && charIndex === currentRole.length) {
    delay = 1800;                              // pause when the word is complete
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length; // next role, loop around
    delay = 400;
  }
  setTimeout(type, delay);
}

// Respect users who turned off animations in their OS settings
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion) {
  typewriterEl.textContent = roles[0];
} else {
  type();
}

/* ---------------------------------------------------------------------------
   SCROLL REVEAL — when an element with class "reveal" enters the screen,
   add "visible" so CSS fades it in. IntersectionObserver watches for us.
--------------------------------------------------------------------------- */
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate only once
      }
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ---------------------------------------------------------------------------
   COUNT-UP STATS — numbers climb from 0 to their data-count value the
   first time the stats section scrolls into view.
--------------------------------------------------------------------------- */
function animateCounter(el) {
  const target = Number(el.dataset.count);
  const durationMs = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / durationMs, 1);
    // ease-out: fast at first, slows near the end
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-number").forEach((el) => {
          if (reducedMotion) {
            el.textContent = el.dataset.count; // no animation, just the value
          } else {
            animateCounter(el);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.3 }
);

statsObserver.observe(document.querySelector(".stats-grid"));

/* ---------------------------------------------------------------------------
   THEME TOGGLE — flips between dark (default) and light. The choice is
   saved in localStorage so it survives page reloads.
--------------------------------------------------------------------------- */
const themeButton = document.querySelector(".theme-toggle");

// Apply the saved theme (if any) as soon as the page loads
if (localStorage.getItem("theme") === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}

themeButton.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

/* ---------------------------------------------------------------------------
   MOBILE MENU
--------------------------------------------------------------------------- */
const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
});
