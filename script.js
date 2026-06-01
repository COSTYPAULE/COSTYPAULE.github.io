const {
  profile,
  about,
  stats,
  skills,
  competences,
  projects,
  formation,
  techStack,
  experiences,
  certifications,
  softSkills,
  languages
} = PORTFOLIO_DATA;

function initProfile() {
  document.getElementById("profile-photo").src = profile.photo;
  document.getElementById("profile-photo").alt = profile.name;
  document.getElementById("hero-name").innerHTML =
    `${profile.name}<span class="highlight">${profile.highlight}</span>`;
  document.getElementById("hero-title").textContent = profile.title;
  const taglineEl = document.getElementById("hero-tagline");
  if (taglineEl) taglineEl.textContent = profile.tagline;
  document.getElementById("cv-link").href = profile.cv;
  document.getElementById("about-text").textContent = about;
  document.getElementById("year").textContent = new Date().getFullYear();

  const info = [
    { icon: "fa-envelope", text: profile.email },
    { icon: "fa-phone", text: profile.phone },
    { icon: "fa-location-dot", text: profile.location }
  ];
  if (profile.fne) {
    info.push({ icon: "fa-id-card", text: `N° FNE : ${profile.fne}` });
  }
  document.getElementById("about-info").innerHTML = info
    .map((i) => `<li><i class="fa-solid ${i.icon}"></i><span>${i.text}</span></li>`)
    .join("");

  const social = [
    { href: profile.linkedin, icon: "fa-linkedin", label: "LinkedIn" },
    { href: `https://github.com/${profile.github}`, icon: "fa-github", label: "GitHub" },
    { href: `mailto:${profile.email}`, icon: "fa-envelope", label: "Email" }
  ];
  const socialHtml = social
    .map(
      (s) =>
        `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="fa-brands ${s.icon}"></i></a>`
    )
    .join("");
  document.getElementById("hero-social").innerHTML = socialHtml;
  document.getElementById("footer-social").innerHTML = socialHtml;
}

function initSoftSkills() {
  const softEl = document.getElementById("soft-skills");
  const langEl = document.getElementById("languages-block");
  if (softEl) {
    softEl.innerHTML = `
      <h4>Atouts</h4>
      <div class="soft-tags">${softSkills.map((s) => `<span class="soft-tag">${s}</span>`).join("")}</div>`;
  }
  if (langEl) {
    langEl.innerHTML = `
      <h4>Langues</h4>
      <div class="lang-list">${languages
        .map((l) => `<span class="lang-item"><strong>${l.name}</strong> — ${l.level}</span>`)
        .join("")}</div>`;
  }
}

function initStats() {
  document.getElementById("stats-grid").innerHTML = stats
    .map(
      (s) => `
    <div class="stat-item reveal">
      <h3 data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</h3>
      <p>${s.label}</p>
    </div>`
    )
    .join("");
}

function animateCounters() {
  document.querySelectorAll("[data-target]").forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, 30);
  });
}

function initSkillsBars() {
  document.getElementById("skills-bars").innerHTML = skills
    .map(
      (s) => `
    <div class="skill-bar-item" data-level="${s.level}">
      <div class="skill-bar-header">
        <span><i class="fa-solid ${s.icon}"></i>${s.name}</span>
        <span>${s.level}%</span>
      </div>
      <div class="skill-track"><div class="skill-fill"></div></div>
    </div>`
    )
    .join("");
}

function initCompetences() {
  document.getElementById("competences-grid").innerHTML = competences
    .map(
      (c) => `
    <div class="card">
      <div class="card-icon"><i class="fa-solid ${c.icon}"></i></div>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </div>`
    )
    .join("");
}

function initExperience() {
  const el = document.getElementById("experience-timeline");
  if (!el) return;
  el.innerHTML = experiences
    .map(
      (exp) => `
    <article class="timeline-item">
      <span class="period">${exp.period}</span>
      <h4>${exp.role}</h4>
      <p class="company">${exp.company}</p>
      <p class="place">${exp.place}</p>
      <ul>${exp.tasks.map((t) => `<li>${t}</li>`).join("")}</ul>
    </article>`
    )
    .join("");
}

function initCertifications() {
  const el = document.getElementById("cert-grid");
  if (!el) return;
  el.innerHTML = certifications
    .map((c) => {
      const links = c.links
        ? `<div class="cert-links">${c.links
            .map((url, i) => `<a href="${url}" target="_blank" rel="noopener">Badge Credly ${i + 1}</a>`)
            .join("")}</div>`
        : "";
      return `
    <div class="cert-card">
      <i class="fa-solid ${c.icon}"></i>
      <h4>${c.title}</h4>
      <p>${c.org}</p>
      ${links}
    </div>`;
    })
    .join("");
}

function initProjects() {
  document.getElementById("projects-grid").innerHTML = projects
    .map(
      (p) => `
    <article class="project-item">
      <div class="project-tag">${p.tag}</div>
      <h4>${p.title}</h4>
      <p>${p.text}</p>
      <div class="project-tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
    </article>`
    )
    .join("");
}

function initFormation() {
  document.getElementById("formation-list").innerHTML = formation
    .map(
      (f) => `
    <div class="formation-item">
      <span class="period">${f.period}</span>
      <h4>${f.title}</h4>
      <p class="school">${f.school}</p>
      ${f.details ? `<p class="details">${f.details}</p>` : ""}
    </div>`
    )
    .join("");
  document.getElementById("tech-tags").innerHTML = techStack
    .map((t) => `<span class="tech-tag">${t}</span>`)
    .join("");
}

function initTypedText() {
  const el = document.getElementById("typed-text");
  const roles = profile.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
}

async function loadGitHubRepos() {
  const grid = document.getElementById("github-grid");
  try {
    const res = await fetch(
      `https://api.github.com/users/${profile.github}/repos?sort=updated&per_page=6`
    );
    if (!res.ok) throw new Error("API error");
    const repos = await res.json();
    const filtered = repos.filter(
      (r) =>
        !r.fork &&
        r.name !== profile.github &&
        !r.name.toLowerCase().includes("github.io")
    );
    if (!filtered.length) {
      grid.innerHTML = `<p class="loading">Aucun dépôt public pour le moment.</p>`;
      return;
    }
    grid.innerHTML = filtered
      .map(
        (r) => `
      <a href="${r.html_url}" target="_blank" rel="noopener" class="project-item github-card">
        <div class="project-tag"><i class="fa-brands fa-github"></i> Repository</div>
        <h4>${r.name}</h4>
        <p>${r.description || "Projet open source sur GitHub."}</p>
        <div class="repo-meta">
          ${r.language ? `<span><i class="fa-solid fa-code"></i> ${r.language}</span>` : ""}
          <span><i class="fa-regular fa-star"></i> ${r.stargazers_count}</span>
        </div>
      </a>`
      )
      .join("");
    observeElements(grid.querySelectorAll(".github-card"));
  } catch {
    grid.innerHTML = `<p class="loading">Impossible de charger les dépôts GitHub.</p>`;
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Contact portfolio — ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    status.textContent = "Votre client mail va s'ouvrir…";
    status.className = "form-status success";
    form.reset();
  });
}

function initNav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-link");
  const sections = [...links].map((l) => document.querySelector(l.getAttribute("href")));

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    document.getElementById("back-top").classList.toggle("visible", window.scrollY > 500);

    const scrollPos = window.scrollY + 140;
    sections.forEach((sec, i) => {
      if (sec && scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        links.forEach((l) => l.classList.remove("active"));
        links[i].classList.add("active");
      }
    });
  });

  toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("back-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function observeElements(nodes) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("skill-bar-item")) {
          const fill = entry.target.querySelector(".skill-fill");
          fill.style.width = `${entry.target.dataset.level}%`;
        }
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  nodes.forEach((el) => observer.observe(el));
}

function initReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        if (entry.target.closest("#stats")) animateCounters();
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
  observeElements(
    document.querySelectorAll(
      ".card, .project-item, .skill-bar-item, .timeline-item, .cert-card"
    )
  );
}

document.addEventListener("DOMContentLoaded", () => {
  initProfile();
  initSoftSkills();
  initStats();
  initSkillsBars();
  initCompetences();
  initExperience();
  initCertifications();
  initProjects();
  initFormation();
  initTypedText();
  initContactForm();
  initNav();
  initReveal();
  loadGitHubRepos();
});
