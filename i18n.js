/** Traductions UI + contenu (FR utilise PORTFOLIO_DATA) */
const I18N_UI = {
  fr: {
    toolbar: { lang: "Langue", theme: "Thème" },
    themes: { dark: "Sombre", light: "Clair" },
    nav: { home: "Accueil", about: "À propos", experience: "Expérience", skills: "Compétences", projects: "Projets", github: "GitHub", contact: "Contact" },
    hero: { available: "Disponible pour opportunités", greeting: "Bonjour, je suis", ctaProjects: "Voir mes projets", cv: "CV" },
    sections: {
      profile: "Profil", about: "À propos de moi", journey: "Parcours", experience: "Expérience professionnelle",
      expertise: "Expertise", skills: "Compétences techniques", certifications: "Certifications",
      certsTitle: "Formations & certifications", achievements: "Réalisations", projects: "Projets & missions clés",
      opensource: "Open source", github: "Projets GitHub", contact: "Contact", workTogether: "Travaillons ensemble"
    },
    about: { formation: "Parcours académique", stack: "Stack technique", strengths: "Atouts", spoken: "Langues" },
    contact: { intro: "Un projet, un stage ou une collaboration ? Écrivez-moi.", name: "Votre nom", email: "votre@email.com", message: "Votre message…", send: "Envoyer", mailOpen: "Votre client mail va s'ouvrir…" },
    github: { loading: "Chargement…", none: "Aucun projet GitHub configuré.", error: "Impossible de charger les dépôts GitHub.", featured: "Projets mis en avant sur @", hosted: "Projet hébergé sur GitHub.", repo: "Repository", fork: "Fork", project: "Projet GitHub", credly: "Badge Credly" },
    fne: "N° FNE"
  },
  en: {
    toolbar: { lang: "Language", theme: "Theme" },
    themes: { dark: "Dark", light: "Light" },
    nav: { home: "Home", about: "About", experience: "Experience", skills: "Skills", projects: "Projects", github: "GitHub", contact: "Contact" },
    hero: { available: "Open to opportunities", greeting: "Hello, I'm", ctaProjects: "View my projects", cv: "Resume" },
    sections: {
      profile: "Profile", about: "About me", journey: "Journey", experience: "Professional experience",
      expertise: "Expertise", skills: "Technical skills", certifications: "Certifications",
      certsTitle: "Training & certifications", achievements: "Achievements", projects: "Key projects & missions",
      opensource: "Open source", github: "GitHub projects", contact: "Contact", workTogether: "Let's work together"
    },
    about: { formation: "Academic background", stack: "Tech stack", strengths: "Strengths", spoken: "Languages" },
    contact: { intro: "A project, internship or collaboration? Get in touch.", name: "Your name", email: "your@email.com", message: "Your message…", send: "Send", mailOpen: "Your mail client will open…" },
    github: { loading: "Loading…", none: "No GitHub projects configured.", error: "Unable to load GitHub repositories.", featured: "Featured projects on @", hosted: "Project hosted on GitHub.", repo: "Repository", fork: "Fork", project: "GitHub project", credly: "Credly badge" },
    fne: "FNE No."
  },
  es: {
    toolbar: { lang: "Idioma", theme: "Tema" },
    themes: { dark: "Oscuro", light: "Claro" },
    nav: { home: "Inicio", about: "Sobre mí", experience: "Experiencia", skills: "Competencias", projects: "Proyectos", github: "GitHub", contact: "Contacto" },
    hero: { available: "Disponible para oportunidades", greeting: "Hola, soy", ctaProjects: "Ver mis proyectos", cv: "CV" },
    sections: {
      profile: "Perfil", about: "Sobre mí", journey: "Trayectoria", experience: "Experiencia profesional",
      expertise: "Experiencia", skills: "Competencias técnicas", certifications: "Certificaciones",
      certsTitle: "Formación y certificaciones", achievements: "Logros", projects: "Proyectos y misiones clave",
      opensource: "Código abierto", github: "Proyectos GitHub", contact: "Contacto", workTogether: "Trabajemos juntos"
    },
    about: { formation: "Formación académica", stack: "Stack técnico", strengths: "Fortalezas", spoken: "Idiomas" },
    contact: { intro: "¿Un proyecto, prácticas o colaboración? Escríbeme.", name: "Tu nombre", email: "tu@email.com", message: "Tu mensaje…", send: "Enviar", mailOpen: "Se abrirá tu cliente de correo…" },
    github: { loading: "Cargando…", none: "No hay proyectos GitHub configurados.", error: "No se pudieron cargar los repositorios.", featured: "Proyectos destacados en @", hosted: "Proyecto alojado en GitHub.", repo: "Repositorio", fork: "Fork", project: "Proyecto GitHub", credly: "Insignia Credly" },
    fne: "N.º FNE"
  }
};

const I18N_DATA = {
  en: {
    profile: {
      name: "Paule COSTY", highlight: "Michelle BANKOUE",
      title: "Full Stack Developer focused on AI & Data Analyst",
      tagline: "AI & Big Data student, motivated and solution-oriented.",
      roles: ["Full Stack Developer", "Data Analyst", "AI & Big Data Specialist", "Odoo & Power BI Consultant"]
    },
    about: "Full Stack developer focused on AI and data analyst, currently pursuing a Master's in Artificial Intelligence & Big Data at Keyce Informatique & IA (Douala). My background combines software development (Flutter mobile, web), ERP configuration (Odoo), reporting (Power BI) and project management (AMOA). Motivated, creative and team-oriented, I seek missions where technology serves concrete business goals.",
    softSkills: ["Creativity", "Adaptability", "Team spirit", "Strong interpersonal skills"],
    languages: [{ name: "French", level: "Advanced" }, { name: "English", level: "Intermediate" }],
    stats: [
      { value: 4, suffix: "+", label: "Professional experiences" },
      { value: 12, suffix: "+", label: "Technologies mastered" },
      { value: 3, suffix: "", label: "Certifications" },
      { value: 2, suffix: "", label: "Degrees (Honors)" }
    ],
    skills: [
      { name: "Web & Mobile Development", level: 90, icon: "fa-code" },
      { name: "Python & Data Science", level: 88, icon: "fa-chart-line" },
      { name: "SQL / NoSQL Databases", level: 85, icon: "fa-database" },
      { name: "AI & Machine Learning", level: 82, icon: "fa-brain" },
      { name: "Odoo & ERP", level: 80, icon: "fa-diagram-project" },
      { name: "Power BI & Reporting", level: 78, icon: "fa-chart-pie" }
    ],
    competences: [
      { title: "Web & Mobile Development", icon: "fa-laptop-code", text: "HTML/CSS, JavaScript, PHP, Flutter & Dart — UI design and connected applications (REST API)." },
      { title: "Data & Artificial Intelligence", icon: "fa-brain", text: "Large-scale data analysis with Python and R, ML models (classification, regression, clustering), Big Data projects." },
      { title: "Databases", icon: "fa-database", text: "Modeling, querying and optimization on MySQL and NoSQL (including Firestore) for reliable applications." },
      { title: "ERP & Business solutions", icon: "fa-building", text: "Odoo setup (sales, purchases, inventory, helpdesk) and SAP S/4HANA certification (business processes)." },
      { title: "Business Intelligence", icon: "fa-chart-pie", text: "Power BI dashboards and reports for KPI tracking and decision support." },
      { title: "Project management & AMOA", icon: "fa-list-check", text: "Specifications, functional testing, UAT and documentation (requirements, meeting reports)." }
    ],
    experiences: [
      { period: "Mar – Jun 2026", role: "AMOA Intern", company: "Karbura (Acam Vie)", place: "Douala — Bonapriso", tasks: ["Odoo module setup and support (sales, purchases, inventory, helpdesk).", "Power BI dashboards and reports for KPI tracking.", "Functional documentation and participation in testing / UAT."] },
      { period: "Sep – Dec 2025", role: "Front desk receptionist", company: "Nail'Art", place: "Douala — Logpom", tasks: ["Physical and phone reception, appointments and scheduling.", "Administrative and logistics follow-up (mail, parcels, suppliers).", "Improved appointment organization and customer welcome flow."] },
      { period: "Jan – Dec 2024", role: "Software developer", company: "Spreeloop Sarl", place: "Douala — Bonaberi", tasks: ["Design and development of a meal delivery mobile app.", "Database integration and management (users, orders, restaurants, payments).", "Deployment with real-time notifications and optimized Firestore structure."] },
      { period: "Jan – Dec 2023", role: "Software developer", company: "Sotar Sarl", place: "Douala — Bonaberi", tasks: ["Corporate website design and development with content integration.", "Maintenance and optimization for performance and accessibility.", "Strengthened company visibility and professional image."] }
    ],
    projects: [
      { tag: "Mobile • Firebase", title: "Delivery app — Spreeloop", text: "Meal delivery mobile app: UI, business logic, order management and real-time notifications via Firestore.", tech: ["Flutter", "Firebase", "Firestore", "REST"] },
      { tag: "Corporate web", title: "Company website — Sotar Sarl", text: "Full website for an SME: content integration, ongoing maintenance and UX optimization for online visibility.", tech: ["HTML/CSS", "JavaScript", "PHP", "SEO"] },
      { tag: "ERP • BI", title: "Odoo & Power BI — Karbura", text: "Odoo business process setup and Power BI dashboards for key indicator management.", tech: ["Odoo", "Power BI", "AMOA", "KPIs"] },
      { tag: "AI & Big Data", title: "Academic projects — Keyce", text: "Data collection, cleaning and visualization; machine learning models as part of the AI & Big Data Master's.", tech: ["Python", "R", "SQL", "ML"] }
    ],
    formation: [
      { period: "2025 – 2026 (ongoing)", title: "Master's I — Artificial Intelligence & Big Data", school: "Keyce Informatique & IA, Douala", details: "Large-scale data analysis (Python, R, SQL), ML models and Big Data projects (collection, cleaning, visualization)." },
      { period: "2024 – 2025", title: "Bachelor's — Software Engineering (Honors)", school: "Institut universitaire de la Côte, Douala", details: "Application design, OOP, end-to-end academic projects (analysis, modeling, implementation)." },
      { period: "2023 – 2024", title: "BTS — Software Engineering (Honors)", school: "Institut universitaire de la Côte, Douala", details: "Application development following programming best practices." }
    ],
    certifications: [
      { title: "Business Processes SAP S/4HANA", org: "Alison Certification", icon: "fa-certificate" },
      { title: "Cisco English for IT 1 & 2", org: "Cisco / Credly", icon: "fa-network-wired", links: ["https://www.credly.com/badges/e0a31763-e6b0-4ff2-af5a-cb1c5a553370", "https://www.credly.com/badges/de6f5de3-0dd9-45f0-a1ea-45a1fd1fe9de"] },
      { title: "ITIL® V3", org: "Certification in progress", icon: "fa-book" },
      { title: "Digital visibility & AI-assisted content", org: "Professional training", icon: "fa-wand-magic-sparkles" }
    ],
    featuredGitHubRepos: [
      { slug: "speeddelivery", aliases: ["SpeedDelivery"], displayName: "Speed Delivery", fallbackDescription: "Meal delivery mobile app with order management and real-time Firestore notifications.", fallbackTech: ["Flutter", "Firebase", "Firestore", "REST"] },
      { slug: "ecoscan", aliases: ["EcoScan"], displayName: "EcoScan", fallbackDescription: "Data collection, cleaning and visualization; ML models within the AI & Big Data Master's.", fallbackTech: ["Python", "R", "SQL", "ML"] },
      { slug: "portfolio_costy_paule", aliases: ["Portfolio_Paule_COSTY"], displayName: "Portfolio Costy Paule", fallbackDescription: "Personal portfolio and showcase of professional projects on GitHub Pages.", fallbackTech: ["HTML/CSS", "JavaScript", "GitHub Pages"] }
    ]
  },
  es: {
    profile: {
      name: "Paule COSTY", highlight: "Michelle BANKOUE",
      title: "Desarrolladora Full Stack orientada a IA y Analista de datos",
      tagline: "Estudiante de Inteligencia Artificial y Big Data, motivada y orientada a soluciones.",
      roles: ["Desarrolladora Full Stack", "Analista de datos", "Especialista IA y Big Data", "Consultora Odoo y Power BI"]
    },
    about: "Desarrolladora Full Stack orientada a IA y analista de datos, actualmente en Máster I de Inteligencia Artificial y Big Data en Keyce Informatique & IA (Douala). Mi trayectoria combina desarrollo de software (móvil Flutter, web), parametrización ERP (Odoo), reporting (Power BI) y gestión de proyectos (AMOA). Motivada, creativa y con espíritu de equipo, busco misiones donde la técnica sirva objetivos de negocio concretos.",
    softSkills: ["Creatividad", "Capacidad de adaptación", "Espíritu de equipo", "Excelentes habilidades interpersonales"],
    languages: [{ name: "Francés", level: "Avanzado" }, { name: "Inglés", level: "Intermedio" }],
    stats: [
      { value: 4, suffix: "+", label: "Experiencias profesionales" },
      { value: 12, suffix: "+", label: "Tecnologías dominadas" },
      { value: 3, suffix: "", label: "Certificaciones" },
      { value: 2, suffix: "", label: "Títulos (mención Bien)" }
    ],
    skills: [
      { name: "Desarrollo Web y Móvil", level: 90, icon: "fa-code" },
      { name: "Python y Data Science", level: 88, icon: "fa-chart-line" },
      { name: "Bases de datos SQL / NoSQL", level: 85, icon: "fa-database" },
      { name: "IA y Machine Learning", level: 82, icon: "fa-brain" },
      { name: "Odoo y ERP", level: 80, icon: "fa-diagram-project" },
      { name: "Power BI y Reporting", level: 78, icon: "fa-chart-pie" }
    ],
    competences: [
      { title: "Desarrollo Web y Móvil", icon: "fa-laptop-code", text: "HTML/CSS, JavaScript, PHP, Flutter y Dart — interfaces y aplicaciones conectadas (API REST)." },
      { title: "Datos e Inteligencia Artificial", icon: "fa-brain", text: "Análisis de datos masivos con Python y R, modelos ML (clasificación, regresión, clustering), proyectos Big Data." },
      { title: "Bases de datos", icon: "fa-database", text: "Modelado, consultas y optimización en MySQL y NoSQL (incl. Firestore) para aplicaciones fiables." },
      { title: "ERP y soluciones de negocio", icon: "fa-building", text: "Parametrización Odoo (ventas, compras, inventarios, helpdesk) y certificación SAP S/4HANA." },
      { title: "Business Intelligence", icon: "fa-chart-pie", text: "Cuadros de mando y informes Power BI para seguimiento de KPIs y decisiones." },
      { title: "Gestión de proyectos y AMOA", icon: "fa-list-check", text: "Especificaciones, pruebas funcionales, recette y documentación (cahiers des charges, actas)." }
    ],
    experiences: [
      { period: "Mar – Jun 2026", role: "Pasante AMOA", company: "Karbura (Acam Vie)", place: "Douala — Bonapriso", tasks: ["Parametrización y asistencia en módulos Odoo (ventas, compras, inventarios, helpdesk).", "Creación de cuadros de mando y informes Power BI para KPIs.", "Documentación funcional y participación en pruebas / recette."] },
      { period: "Sep – Dic 2025", role: "Recepcionista", company: "Nail'Art", place: "Douala — Logpom", tasks: ["Acogida física y telefónica, citas y planificación.", "Seguimiento administrativo y logístico (correo, paquetes, proveedores).", "Mejora de la organización de citas y la experiencia del cliente."] },
      { period: "Ene – Dic 2024", role: "Desarrolladora de software", company: "Spreeloop Sarl", place: "Douala — Bonaberi", tasks: ["Diseño y desarrollo de aplicación móvil de entrega de comidas.", "Integración y gestión de base de datos (usuarios, pedidos, restaurantes, pagos).", "Despliegue con notificaciones en tiempo real y estructura Firestore optimizada."] },
      { period: "Ene – Dic 2023", role: "Desarrolladora de software", company: "Sotar Sarl", place: "Douala — Bonaberi", tasks: ["Diseño y desarrollo del sitio web corporativo con integración de contenidos.", "Mantenimiento y optimización para rendimiento y accesibilidad.", "Refuerzo de la visibilidad e imagen profesional de la empresa."] }
    ],
    projects: [
      { tag: "Móvil • Firebase", title: "App de entrega — Spreeloop", text: "App móvil de entrega de comidas: interfaz, lógica de negocio, pedidos y notificaciones en tiempo real vía Firestore.", tech: ["Flutter", "Firebase", "Firestore", "REST"] },
      { tag: "Web corporativa", title: "Sitio web — Sotar Sarl", text: "Sitio completo para PYME: integración de contenidos, mantenimiento y optimización UX.", tech: ["HTML/CSS", "JavaScript", "PHP", "SEO"] },
      { tag: "ERP • BI", title: "Odoo y Power BI — Karbura", text: "Parametrización Odoo y cuadros de mando Power BI para indicadores clave.", tech: ["Odoo", "Power BI", "AMOA", "KPIs"] },
      { tag: "IA y Big Data", title: "Proyectos académicos — Keyce", text: "Recolección, limpieza y visualización de datos; modelos de machine learning en el Máster IABD.", tech: ["Python", "R", "SQL", "ML"] }
    ],
    formation: [
      { period: "2025 – 2026 (en curso)", title: "Máster I — Inteligencia Artificial y Big Data", school: "Keyce Informatique & IA, Douala", details: "Análisis de datos masivos (Python, R, SQL), modelos ML y proyectos Big Data." },
      { period: "2024 – 2025", title: "Licenciatura — Ingeniería de software (mención Bien)", school: "Institut universitaire de la Côte, Douala", details: "Diseño de aplicaciones, POO, proyectos académicos de principio a fin." },
      { period: "2023 – 2024", title: "BTS — Ingeniería de software (mención Bien)", school: "Institut universitaire de la Côte, Douala", details: "Desarrollo de aplicaciones siguiendo buenas prácticas." }
    ],
    certifications: [
      { title: "Business Processes SAP S/4HANA", org: "Certificación Alison", icon: "fa-certificate" },
      { title: "Cisco English for IT 1 & 2", org: "Cisco / Credly", icon: "fa-network-wired", links: ["https://www.credly.com/badges/e0a31763-e6b0-4ff2-af5a-cb1c5a553370", "https://www.credly.com/badges/de6f5de3-0dd9-45f0-a1ea-45a1fd1fe9de"] },
      { title: "ITIL® V3", org: "Certificación en curso", icon: "fa-book" },
      { title: "Visibilidad digital y contenido asistido por IA", org: "Formación profesional", icon: "fa-wand-magic-sparkles" }
    ],
    featuredGitHubRepos: [
      { slug: "speeddelivery", aliases: ["SpeedDelivery"], displayName: "Speed Delivery", fallbackDescription: "App móvil de entrega con gestión de pedidos y notificaciones Firestore en tiempo real.", fallbackTech: ["Flutter", "Firebase", "Firestore", "REST"] },
      { slug: "ecoscan", aliases: ["EcoScan"], displayName: "EcoScan", fallbackDescription: "Recolección y visualización de datos; modelos ML en el marco del Máster IABD.", fallbackTech: ["Python", "R", "SQL", "ML"] },
      { slug: "portfolio_costy_paule", aliases: ["Portfolio_Paule_COSTY"], displayName: "Portfolio Costy Paule", fallbackDescription: "Portfolio personal en GitHub Pages.", fallbackTech: ["HTML/CSS", "JavaScript", "GitHub Pages"] }
    ]
  }
};

function getLocaleData(lang) {
  const base = PORTFOLIO_DATA;
  if (lang === "fr") {
    return {
      profile: base.profile,
      about: base.about,
      softSkills: base.softSkills,
      languages: base.languages,
      stats: base.stats,
      skills: base.skills,
      competences: base.competences,
      experiences: base.experiences,
      projects: base.projects,
      formation: base.formation,
      certifications: base.certifications,
      techStack: base.techStack,
      featuredGitHubRepos: base.featuredGitHubRepos
    };
  }
  const tr = I18N_DATA[lang];
  return {
    profile: { ...base.profile, ...tr.profile },
    about: tr.about,
    softSkills: tr.softSkills,
    languages: tr.languages,
    stats: tr.stats,
    skills: tr.skills,
    competences: tr.competences,
    experiences: tr.experiences,
    projects: tr.projects,
    formation: tr.formation,
    certifications: tr.certifications,
    techStack: base.techStack,
    featuredGitHubRepos: tr.featuredGitHubRepos.map((repo, i) => ({
      ...base.featuredGitHubRepos[i],
      ...repo
    }))
  };
}

function t(path, lang) {
  const keys = path.split(".");
  let v = I18N_UI[lang] || I18N_UI.fr;
  for (const k of keys) v = v?.[k];
  return v ?? path;
}
