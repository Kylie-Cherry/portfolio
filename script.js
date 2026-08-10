/* =========================================================
   EDIT YOUR PROJECTS HERE
   ---------------------------------------------------------
   Each project can have as many images as you want.
   Put your images inside the /images folder and update
   the filenames below.
   ========================================================= */

const projects = [
  {
    id: "project-1",
    number: "01",
    title: "Big Ears Listening Lab and Archive",
    location: "Knoxville, TN",
    description: "Located in Old City, Knoxville, Tennessee, this project is a music archive and listening space designed to house materials and music from the annual Big Ears Music Festival. The building is conceived as a dynamic environment that changes throughout the day and across seasons, reflecting the evolving nature of music and its listeners. To accomplish this I created a series of different lighting sequences to divide the building into separate zones creating a strong circulation path. Visitors enter through a series of warm- toned triangular screens mounted on adjustable rails, allowing the public to modify lighting conditions from the second-floor lounge and actively engage with the building and change the lighting conditions present.",
    images: [
      "images/project-1-main.jpg",
      "images/project-1-2.jpg",
      "images/project-1-3.jpg",
      "images/project-1-4.jpg"
    ]
  },
  {
    id: "project-2",
    number: "02",
    title: "PROJECT NAME TWO",
    category: "Urban / Civic",
    year: "2025",
    location: "City, Country",
    role: "PLACEHOLDER â€” Her role",
    description: "PLACEHOLDER â€” Project description.",
    image: "images/project-2-main.jpg",
    images: ["images/project-2-main.jpg", "images/project-2-2.jpg", "images/project-2-3.jpg"]
  },
  {
    id: "project-3",
    number: "03",
    title: "PROJECT NAME THREE",
    category: "Commercial",
    year: "2025",
    location: "City, Country",
    role: "PLACEHOLDER â€” Her role",
    description: "PLACEHOLDER â€” Project description.",
    image: "images/project-3-main.jpg",
    images: ["images/project-3-main.jpg", "images/project-3-2.jpg", "images/project-3-3.jpg"]
  },
  {
    id: "project-4",
    number: "04",
    title: "PROJECT NAME FOUR",
    category: "Cultural",
    year: "2024",
    location: "City, Country",
    role: "PLACEHOLDER â€” Her role",
    description: "PLACEHOLDER â€” Project description.",
    image: "images/project-4-main.jpg",
    images: ["images/project-4-main.jpg", "images/project-4-2.jpg", "images/project-4-3.jpg"]
  },
  {
    id: "project-5",
    number: "05",
    title: "PROJECT NAME FIVE",
    category: "Adaptive Reuse",
    year: "2024",
    location: "City, Country",
    role: "PLACEHOLDER â€” Her role",
    description: "PLACEHOLDER â€” Project description.",
    image: "images/project-5-main.jpg",
    images: ["images/project-5-main.jpg", "images/project-5-2.jpg", "images/project-5-3.jpg"]
  },
  {
    id: "project-6",
    number: "06",
    title: "PROJECT NAME SIX",
    category: "Landscape / Public Space",
    year: "2023",
    location: "City, Country",
    role: "PLACEHOLDER â€” Her role",
    description: "PLACEHOLDER â€” Project description.",
    image: "images/project-6-main.jpg",
    images: ["images/project-6-main.jpg", "images/project-6-2.jpg", "images/project-6-3.jpg"]
  },
  {
    id: "project-7",
    number: "07",
    title: "PROJECT NAME SEVEN",
    category: "Academic / Experimental",
    year: "2023",
    location: "City, Country",
    role: "PLACEHOLDER â€” Her role",
    description: "PLACEHOLDER â€” Project description.",
    image: "images/project-7-main.jpg",
    images: ["images/project-7-main.jpg", "images/project-7-2.jpg", "images/project-7-3.jpg"]
  }
];

const placeholder = "https://placehold.co/1400x1000/f5f1ec/351d46?text=";

function safeImage(img, label) {
  return img + `" onerror="this.onerror=null;this.src='${placeholder}${encodeURIComponent(label)}'`;
}

function projectLink(project) {
  return `<a href="project.html?id=${project.id}">${project.number} <span>${project.title}</span></a>`;
}

function populateNavigation() {
  const dropdown = document.getElementById("projectDropdown");
  const mobileProjects = document.getElementById("mobileProjects");
  if (!dropdown) return;

  dropdown.innerHTML = projects.map(projectLink).join("");
  if (mobileProjects) {
    mobileProjects.innerHTML = `<p class="mobile-project-label">PROJECTS</p>` + projects.map(projectLink).join("");
  }

  const toggle = document.querySelector(".work-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      dropdown.classList.toggle("open", !expanded);
    });
  }

  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("open", !expanded);
    });
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
    }));
  }
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((project, i) => `
    <a class="project-card ${i % 3 === 1 ? "offset" : ""}" href="project.html?id=${project.id}">
      <div class="project-image-wrap">
        <img src="${safeImage(project.image, project.title)}" alt="${project.title}" class="project-image">
        <span class="view-project">VIEW PROJECT ↗</span>
      </div>
      <div class="project-meta">
        <span>${project.number}</span>
        <div>
          <h3>${project.title}</h3>
          <p>${project.category || ""}${project.role && project.year ? "/" : ""}${project.year || ""}</p>
        </div>
      </div>
    </a>
  `).join("");
}

function renderProjectPage() {
  const container = document.getElementById("projectPage");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const project = projects.find(p => p.id === params.get("id")) || projects[0];
  document.title = `${project.title} â€” YOUR NAME`;

  const gallery = project.images.map((img, i) => `
    <figure class="gallery-item ${i === 0 ? "gallery-wide" : ""}">
      <img src="${safeImage(img, project.title + " â€” image " + (i + 1))}" alt="${project.title} â€” image ${i + 1}">
    </figure>
  `).join("");

  const index = projects.findIndex(p => p.id === project.id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  container.innerHTML = `
    <section class="project-hero section">
      <div class="section-label">${project.number} / PROJECT</div>
      <h1>${project.title}</h1>
      <div class="project-info">
        <div><span>TYPE</span><strong>${project.category}</strong></div>
        <div><span>YEAR</span><strong>${project.year}</strong></div>
        <div><span>LOCATION</span><strong>${project.location}</strong></div>
        <div><span>ROLE</span><strong>${project.role}</strong></div>
      </div>
      <span class="squiggle project-squiggle"></span>
    </section>

    <section class="project-main-image">
      <img src="${safeImage(project.image, project.title)}" alt="${project.title}">
    </section>

    <section class="project-description section">
      <span class="small-purple">ABOUT THE PROJECT</span>
      <div>
        <h2>Concept &<br><em>response.</em></h2>
        <p>${project.description}</p>
      </div>
    </section>

    <section class="gallery section">${gallery}</section>

    <nav class="project-nav section" aria-label="Project navigation">
      <a href="project.html?id=${prev.id}"><span>â† PREVIOUS</span><strong>${prev.title}</strong></a>
      <a href="index.html#projects" class="all-work">ALL WORK</a>
      <a href="project.html?id=${next.id}" class="next"><span>NEXT â†’</span><strong>${next.title}</strong></a>
    </nav>
  `;
}

populateNavigation();
renderProjects();
renderProjectPage();
