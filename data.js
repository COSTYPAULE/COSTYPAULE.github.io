const PORTFOLIO_DATA = {
  profile: {
    name: "Paule COSTY",
    highlight: "Michelle BANKOUE",
    title: "Développeuse Full Stack orientée IA & Analyste de données",
    tagline:
      "Étudiante en Intelligence Artificielle & Big Data, motivée et orientée solutions.",
    photo: "assets/profile_photo.jpg",
    cv: "assets/CV_Michelle_COSTY.pdf",
    github: "COSTYPAULE",
    linkedin: "https://www.linkedin.com/in/costy-paule-975312356",
    email: "paulebankoue@gmail.com",
    phone: "+237 692 486 835 / +237 681 435 554",
    location: "Douala, Cameroun",
    fne: "CO1-2026-0005",
    roles: [
      "Développeuse Full Stack",
      "Analyste de données",
      "Spécialiste IA & Big Data",
      "Consultante Odoo & Power BI"
    ]
  },
  about: `Développeuse Full Stack orientée IA et analyste de données, actuellement en Master I
    Intelligence Artificielle & Big Data à Keyce Informatique & IA (Douala). Mon parcours
    combine développement logiciel (mobile Flutter, web), paramétrage ERP (Odoo), reporting
    (Power BI) et gestion de projet (AMOA). Motivée, créative et à l'aise en équipe, je
    recherche des missions où la technique sert des objectifs métier concrets.`,
  softSkills: [
    "Créativité",
    "Capacité d'adaptation",
    "Esprit d'équipe",
    "Excellentes compétences relationnelles"
  ],
  languages: [
    { name: "Français", level: "Avancé" },
    { name: "Anglais", level: "Intermédiaire" }
  ],
  stats: [
    { value: 4, suffix: "+", label: "Expériences pro." },
    { value: 12, suffix: "+", label: "Technologies maîtrisées" },
    { value: 3, suffix: "", label: "Certifications" },
    { value: 2, suffix: "", label: "Diplômes (mention Bien)" }
  ],
  skills: [
    { name: "Développement Web & Mobile", level: 90, icon: "fa-code" },
    { name: "Python & Data Science", level: 88, icon: "fa-chart-line" },
    { name: "Bases de données SQL / NoSQL", level: 85, icon: "fa-database" },
    { name: "IA & Machine Learning", level: 82, icon: "fa-brain" },
    { name: "Odoo & ERP", level: 80, icon: "fa-diagram-project" },
    { name: "Power BI & Reporting", level: 78, icon: "fa-chart-pie" }
  ],
  competences: [
    {
      title: "Développement Web & Mobile",
      icon: "fa-laptop-code",
      text: "HTML/CSS, JavaScript, PHP, Flutter & Dart — conception d'interfaces et d'applications connectées (API REST)."
    },
    {
      title: "Data & Intelligence Artificielle",
      icon: "fa-brain",
      text: "Analyse de données massives avec Python et R, modèles ML (classification, régression, clustering), projets Big Data."
    },
    {
      title: "Bases de données",
      icon: "fa-database",
      text: "Modélisation, requêtage et optimisation sur MySQL et NoSQL (dont Firestore) pour des applications fiables."
    },
    {
      title: "ERP & Solutions métier",
      icon: "fa-building",
      text: "Paramétrage Odoo (ventes, achats, inventaires, helpdesk) et certification SAP S/4HANA (processus métier)."
    },
    {
      title: "Business Intelligence",
      icon: "fa-chart-pie",
      text: "Tableaux de bord et rapports Power BI pour le suivi des KPIs et l'aide à la décision."
    },
    {
      title: "Gestion de projet & AMOA",
      icon: "fa-list-check",
      text: "Rédaction de spécifications, tests fonctionnels, recette et documentation (cahiers des charges, comptes rendus)."
    }
  ],
  experiences: [
    {
      period: "Mars – Juin 2026",
      role: "Stagiaire AMOA",
      company: "Karbura (Acam Vie)",
      place: "Douala — Bonapriso",
      tasks: [
        "Paramétrage et assistance sur les modules Odoo (ventes, achats, inventaires, helpdesk).",
        "Création de tableaux de bord et rapports Power BI pour le suivi des KPIs.",
        "Rédaction de documents fonctionnels et participation aux tests / recettes."
      ]
    },
    {
      period: "Sept. – Déc. 2025",
      role: "Réceptionniste d'accueil",
      company: "Nail'Art",
      place: "Douala — Logpom",
      tasks: [
        "Gestion de l'accueil physique et téléphonique, prise de rendez-vous et planning.",
        "Suivi administratif et logistique (courrier, colis, fournisseurs).",
        "Amélioration de l'organisation des rendez-vous et de la fluidité de l'accueil client."
      ]
    },
    {
      period: "Janv. – Déc. 2024",
      role: "Développeuse logiciel",
      company: "Spreeloop Sarl",
      place: "Douala — Bonaberi",
      tasks: [
        "Conception et développement d'une application mobile de livraison de repas.",
        "Intégration et gestion de la base de données (utilisateurs, commandes, restaurants, paiements).",
        "Déploiement avec notifications temps réel et structure Firestore optimisée."
      ]
    },
    {
      period: "Janv. – Déc. 2023",
      role: "Développeuse logiciel",
      company: "Sotar Sarl",
      place: "Douala — Bonaberi",
      tasks: [
        "Conception et développement du site web corporate avec intégration des contenus.",
        "Maintenance et optimisation pour garantir performance et accessibilité.",
        "Renforcement de la visibilité et de l'image professionnelle de l'entreprise."
      ]
    }
  ],
  projects: [
    {
      tag: "Mobile • Firebase",
      title: "Application de livraison — Spreeloop",
      text: "Application mobile de livraison de repas : interface utilisateur, logique métier, gestion des commandes et notifications en temps réel via Firestore.",
      tech: ["Flutter", "Firebase", "Firestore", "REST"]
    },
    {
      tag: "Web corporate",
      title: "Site web entreprise — Sotar Sarl",
      text: "Site web complet pour une PME : intégration des contenus, maintenance continue et optimisation UX pour la visibilité en ligne.",
      tech: ["HTML/CSS", "JavaScript", "PHP", "SEO"]
    },
    {
      tag: "ERP • BI",
      title: "Odoo & Power BI — Karbura",
      text: "Paramétrage des processus métier sur Odoo et création de tableaux de bord Power BI pour le pilotage des indicateurs clés.",
      tech: ["Odoo", "Power BI", "AMOA", "KPIs"]
    },
    {
      tag: "IA & Big Data",
      title: "Projets académiques — Keyce",
      text: "Collecte, nettoyage et visualisation de données ; conception de modèles de machine learning dans le cadre du Master IABD.",
      tech: ["Python", "R", "SQL", "ML"]
    }
  ],
  formation: [
    {
      period: "2025 – 2026 (en cours)",
      title: "Master I — Intelligence Artificielle & Big Data",
      school: "Keyce Informatique & IA, Douala",
      details:
        "Analyse de données massives (Python, R, SQL), modèles ML et projets Big Data (collecte, nettoyage, visualisation)."
    },
    {
      period: "2024 – 2025",
      title: "Licence — Génie logiciel (mention Bien)",
      school: "Institut universitaire de la Côte, Douala",
      details:
        "Conception d'applications, POO, projets académiques de bout en bout (analyse, modélisation, implémentation)."
    },
    {
      period: "2023 – 2024",
      title: "BTS — Génie logiciel (mention Bien)",
      school: "Institut universitaire de la Côte, Douala",
      details: "Développement d'applications en respect des bonnes pratiques de programmation."
    }
  ],
  certifications: [
    {
      title: "Business Processes SAP S/4HANA",
      org: "Certification Alison",
      icon: "fa-certificate"
    },
    {
      title: "Cisco English for IT 1 & 2",
      org: "Cisco / Credly",
      icon: "fa-network-wired",
      links: [
        "https://www.credly.com/badges/e0a31763-e6b0-4ff2-af5a-cb1c5a553370",
        "https://www.credly.com/badges/de6f5de3-0dd9-45f0-a1ea-45a1fd1fe9de"
      ]
    },
    {
      title: "ITIL® V3",
      org: "En cours de certification",
      icon: "fa-book"
    },
    {
      title: "Visibilité numérique & contenu assisté par IA",
      org: "Formation professionnelle",
      icon: "fa-wand-magic-sparkles"
    }
  ],
  techStack: [
    "Python", "R", "JavaScript", "PHP", "Dart", "Flutter",
    "HTML/CSS", "C / C#", "MySQL", "NoSQL", "Firestore",
    "Odoo", "Power BI", "SAP", "Git", "Excel"
  ],
  featuredGitHubRepos: [
    {
      slug: "speeddelivery",
      aliases: ["SpeedDelivery"],
      displayName: "Speed Delivery",
      fallbackDescription:
        "Application mobile de livraison de repas : interface utilisateur, logique métier, gestion des commandes et notifications en temps réel via Firestore.",
      fallbackTech: ["Flutter", "Firebase", "Firestore", "REST"]
    },
    {
      slug: "ecoscan",
      aliases: ["EcoScan"],
      displayName: "EcoScan",
      fallbackDescription:
        "Collecte, nettoyage et visualisation de données ; conception de modèles de machine learning dans le cadre du Master IABD.",
      fallbackTech: ["Python", "R", "SQL", "ML"]
    },
    {
      slug: "portfolio_costy_paule",
      aliases: ["Portfolio_Paule_COSTY", "Portfolio_Paule_COSTY"],
      displayName: "Portfolio Costy Paule",
      fallbackDescription:
        "Portfolio personnel et vitrine de projets professionnels sur GitHub Pages.",
      fallbackTech: ["HTML/CSS", "JavaScript", "GitHub Pages"]
    }
  ]
};
