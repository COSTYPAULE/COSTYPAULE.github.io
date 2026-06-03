let currentLang = "fr";
let currentTheme = "dark";
let portfolio = getLocaleData("fr");
let typedTimeout = null;

const { profile: baseProfile } = PORTFOLIO_DATA;

function ui(path) {
  return t(path, currentLang);
}

function initSettings() {
  const savedLang = localStorage.getItem("portfolio-lang");
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedLang && I18N_UI[savedLang]) currentLang = savedLang;
  if (savedTheme === "light" || savedTheme === "dark") currentTheme = savedTheme;

  const langSelect = document.getElementById("lang-select");
  const themeSelect = document.getElementById("theme-select");

  langSelect.value = currentLang;
  themeSelect.value = currentTheme;

  applyTheme(currentTheme, false);
  setLocale(currentLang, false);

  langSelect.addEventListener("change", (e) => {
    setLocale(e.target.value, true);
  });

  themeSelect.addEventListener("change", (e) => {
    applyTheme(e.target.value, true);
  });
}

function applyTheme(theme, save = true) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  if (save) localStorage.setItem("portfolio-theme", theme);
  updateThemeSelectLabels();
}

function updateThemeSelectLabels() {
  const themeSelect = document.getElementById("theme-select");
  const dark = themeSelect.querySelector('option[value="dark"]');
  const light = themeSelect.querySelector('option[value="light"]');
  if (dark) dark.textContent = ui("themes.dark");
  if (light) light.textContent = ui("themes.light");
}

function setLocale(lang, save = true) {
  currentLang = lang;
  portfolio = getLocaleData(lang);
  document.documentElement.lang = lang === "es" ? "es" : lang === "en" ? "en" : "fr";
  if (save) localStorage.setItem("portfolio-lang", lang);
  applyStaticUI();
  renderAll();
}

function applyStaticUI() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = ui(key);
    if (text) el.textContent = text;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = ui(key);
    if (text) el.placeholder = text;
  });
  updateThemeSelectLabels();
}

function renderAll() {
  if (typedTimeout) {
    clearTimeout(typedTimeout);
    typedTimeout = null;
  }
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
  loadGitHubRepos();
  observeElements(
    document.querySelectorAll(
      ".card, .project-item, .skill-bar-item, .timeline-item, .cert-card"
    )
  );
}

function initProfile() {
  const { profile: p } = portfolio;
  const photo = document.getElementById("profile-photo");
  photo.src = baseProfile.photo;
  photo.alt = `${p.name} ${p.highlight}`;

  document.getElementById("hero-name").innerHTML =
    `<span class="hero-prenom">${p.name}</span>` +
    `<span class="hero-nom highlight">${p.highlight}</span>`;
  document.getElementById("hero-title").textContent = p.title;
  document.getElementById("hero-tagline").textContent = p.tagline;
  document.getElementById("cv-link").href = baseProfile.cv;
  document.getElementById("about-text").textContent = portfolio.about;
  document.getElementById("year").textContent = new Date().getFullYear();

  const sidebarName = document.getElementById("sidebar-name");
  const sidebarRole = document.getElementById("sidebar-role");
  if (sidebarName) sidebarName.textContent = "Paule COSTY";
  if (sidebarRole) sidebarRole.textContent = "Full Stack • IA & Data";

  const info = [
    { icon: "fa-envelope", text: baseProfile.email },
    { icon: "fa-phone", text: baseProfile.phone },
    { icon: "fa-location-dot", text: baseProfile.location }
  ];
  if (baseProfile.fne) {
    info.push({ icon: "fa-id-card", text: `${ui("fne")} : ${baseProfile.fne}` });
  }
  document.getElementById("about-info").innerHTML = info
    .map((i) => `<li><i class="fa-solid ${i.icon}"></i><span>${i.text}</span></li>`)
    .join("");

  const social = [
    { href: baseProfile.linkedin, icon: "fa-linkedin", label: "LinkedIn" },
    { href: `https://github.com/${baseProfile.github}`, icon: "fa-github", label: "GitHub" },
    { href: `mailto:${baseProfile.email}`, icon: "fa-envelope", label: "Email" }
  ];
  const socialHtml = social
    .map(
      (s) =>
        `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="fa-brands ${s.icon}"></i></a>`
    )
    .join("");
  document.getElementById("hero-social").innerHTML = socialHtml;
  const footerSocial = document.getElementById("footer-social");
  if (footerSocial) footerSocial.innerHTML = socialHtml;
}

function initSoftSkills() {
  const softEl = document.getElementById("soft-skills");
  const langEl = document.getElementById("languages-block");
  if (softEl) {
    softEl.innerHTML = `
      <h4>${ui("about.strengths")}</h4>
      <div class="soft-tags">${portfolio.softSkills.map((s) => `<span class="soft-tag">${s}</span>`).join("")}</div>`;
  }
  if (langEl) {
    langEl.innerHTML = `
      <h4>${ui("about.spoken")}</h4>
      <div class="lang-list">${portfolio.languages
        .map((l) => `<span class="lang-item"><strong>${l.name}</strong> — ${l.level}</span>`)
        .join("")}</div>`;
  }
}

function initStats() {
  document.getElementById("stats-grid").innerHTML = portfolio.stats
    .map(
      (s) => `
    <div class="stat-item reveal visible">
      <h3 data-target="${s.value}" data-suffix="${s.suffix}">${s.value}${s.suffix}</h3>
      <p>${s.label}</p>
    </div>`
    )
    .join("");
}

function initSkillsBars() {
  document.getElementById("skills-bars").innerHTML = portfolio.skills
    .map(
      (s) => `
    <div class="skill-bar-item" data-level="${s.level}">
      <div class="skill-bar-header">
        <span><i class="fa-solid ${s.icon}"></i>${s.name}</span>
        <span>${s.level}%</span>
      </div>
      <div class="skill-track"><div class="skill-fill" style="width:0"></div></div>
    </div>`
    )
    .join("");
}

function initCompetences() {
  document.getElementById("competences-grid").innerHTML = portfolio.competences
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
  el.innerHTML = portfolio.experiences
    .map(
      (exp) => `
    <article class="timeline-item">
      <span class="period">${exp.period}</span>
      <h4>${exp.role}</h4>
      <p class="company">${exp.company}</p>
      <p class="place">${exp.place}</p>
      <ul>${exp.tasks.map((task) => `<li>${task}</li>`).join("")}</ul>
    </article>`
    )
    .join("");
}

function initCertifications() {
  const el = document.getElementById("cert-grid");
  if (!el) return;
  el.innerHTML = portfolio.certifications
    .map((c) => {
      const links = c.links
        ? `<div class="cert-links">${c.links
            .map(
              (url, i) =>
                `<a href="${url}" target="_blank" rel="noopener">${ui("github.credly")} ${i + 1}</a>`
            )
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
  document.getElementById("projects-grid").innerHTML = portfolio.projects
    .map(
      (p) => `
    <article class="project-item">
      <div class="project-tag">${p.tag}</div>
      <h4>${p.title}</h4>
      <p>${p.text}</p>
      <div class="project-tech">${p.tech.map((tech) => `<span>${tech}</span>`).join("")}</div>
    </article>`
    )
    .join("");
}

function initFormation() {
  document.getElementById("formation-list").innerHTML = portfolio.formation
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
  document.getElementById("tech-tags").innerHTML = portfolio.techStack
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");
}

function initTypedText() {
  const el = document.getElementById("typed-text");
  const roles = portfolio.profile.roles;
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
        typedTimeout = setTimeout(tick, 2000);
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
    typedTimeout = setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
}

async function fetchRepoBySlug(username, slug) {
  const res = await fetch(`https://api.github.com/repos/${username}/${slug}`);
  if (res.ok) return res.json();
  return null;
}

async function resolveFeaturedRepo(username, config) {
  const names = [config.slug, ...(config.aliases || [])];
  for (const name of names) {
    const repo = await fetchRepoBySlug(username, name);
    if (repo) return repo;
  }
  return {
    name: config.displayName || config.slug,
    html_url: `https://github.com/${username}/${config.slug}`,
    description: config.fallbackDescription,
    language: config.fallbackTech?.[0] || null,
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    _fallback: true,
    _tech: config.fallbackTech || []
  };
}

function renderGitHubCard(r) {
  const techTags = r._tech?.length ? r._tech.map((tech) => `<span>${tech}</span>`).join("") : "";
  const tagLabel = r.fork ? ui("github.fork") : r._fallback ? ui("github.project") : ui("github.repo");
  return `
    <a href="${r.html_url}" target="_blank" rel="noopener" class="project-item github-card">
      <div class="project-tag"><i class="fa-brands fa-github"></i> ${tagLabel}</div>
      <h4>${r.name}</h4>
      <p>${r.description || ui("github.hosted")}</p>
      ${!r._fallback ? `
      <div class="repo-meta">
        ${r.language ? `<span><i class="fa-solid fa-code"></i> ${r.language}</span>` : ""}
        <span><i class="fa-regular fa-star"></i> ${r.stargazers_count}</span>
        <span><i class="fa-solid fa-code-branch"></i> ${r.forks_count}</span>
      </div>` : ""}
      ${techTags ? `<div class="project-tech">${techTags}</div>` : ""}
    </a>`;
}

async function loadGitHubRepos() {
  const grid = document.getElementById("github-grid");
  const countEl = document.getElementById("github-count");
  const featured = portfolio.featuredGitHubRepos || [];

  try {
    if (!featured.length) {
      grid.innerHTML = `<p class="loading">${ui("github.none")}</p>`;
      return;
    }

    const repos = await Promise.all(
      featured.map((config) => resolveFeaturedRepo(baseProfile.github, config))
    );

    if (countEl) {
      countEl.textContent = `${ui("github.featured")}${baseProfile.github}`;
    }

    grid.innerHTML = repos.map(renderGitHubCard).join("");
    observeElements(grid.querySelectorAll(".github-card"));
  } catch {
    grid.innerHTML = `<p class="loading">${ui("github.error")}</p>`;
    if (countEl) countEl.textContent = "";
  }
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener(
    "scroll",
    () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
    },
    { passive: true }
  );
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
    window.location.href = `mailto:${baseProfile.email}?subject=${subject}&body=${body}`;
    status.textContent = ui("contact.mailOpen");
    status.className = "form-status success";
    form.reset();
  });
}

function initNav() {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("menu-toggle");
  const links = document.querySelectorAll(".nav-link");
  const sections = [...links]
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  window.addEventListener(
    "scroll",
    () => {
      document.getElementById("back-top")?.classList.toggle("visible", window.scrollY > 500);

      const scrollPos = window.scrollY + 160;
      sections.forEach((sec, i) => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          links.forEach((l) => l.classList.remove("active"));
          links[i]?.classList.add("active");
        }
      });
    },
    { passive: true }
  );

  toggle?.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("back-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 1024 &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      sidebar.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });
}

function observeElements(nodes) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("skill-bar-item")) {
          entry.target.querySelector(".skill-fill").style.width =
            `${entry.target.dataset.level}%`;
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
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
  const heroStats = document.querySelector(".hero-card");
  if (heroStats) revealObserver.observe(heroStats);
}

document.addEventListener("DOMContentLoaded", () => {
  initSettings();
  initContactForm();
  initNav();
  initScrollProgress();
  initReveal();
});
