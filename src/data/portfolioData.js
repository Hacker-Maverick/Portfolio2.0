export const portfolioData = {
  name: "Saurav Sagar",
  role: ["Full Stack Developer", "Security Enthusiast", "Builder"],
  email: "bigsagar18@gmail.com",
  phone: "+91 9693994971",
  location: "India",
  about: "Full-stack developer focused on building production systems. I design backend architectures, deploy cloud infrastructure, and ship real products, with a strong side interest in web application security. Currently pursuing B.Tech in Computer Science at IIIT Bhopal.",
  education: {
    institution: "Indian Institute of Information Technology, Bhopal (IIIT Bhopal)",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "Sep 2023 — May 2027",
    cgpa: "7.78/10",
    coursework: ["Data Structures & Algorithms", "DBMS", "OOP", "Computer Networks", "Operating Systems", "Software Engineering"]
  },
  projects: [
    {
      id: 1,
      title: "CampusTales",
      subtitle: "College-Centric Digital Platform",
      description: "Production platform used by 600+ students and 10+ clubs at IIIT Bhopal. Handles club and event management and has processed 300+ team registrations for inter-college events.",
      details: [
        "Built a role-based backend (student, club-admin, institute-admin) with audit logging, per-route rate limiting, and centralized error handling.",
        "Implemented JWT + OAuth 2.0 authentication with full session management.",
        "Built an automated certificate-generation system for event participation.",
        "Integrated transactional email (Resend/Brevo) and deployed on Vercel and Render with IAM-scoped AWS S3 storage."
      ],
      tech: ["Node.js", "Express", "React", "MongoDB", "AWS", "JWT", "OAuth"],
      category: "SaaS",
      links: {
        live: "https://campustales.com",
        github: "https://github.com/CampusTales-official"
      }
    },
    {
      id: 2,
      title: "Photo Album Platform",
      subtitle: "Full-Stack Photo Platform with Payments & CDN",
      description: "Full-stack application for managing and selling event photos, with online payments, secure cloud file storage, and CDN-based image delivery.",
      details: [
        "Built a modular Express backend (controllers/services/middleware) with Razorpay webhook signature verification, idempotent payment tracking, and failure recovery.",
        "Configured AWS S3 with IAM-scoped access and pre-signed URLs; used Cloudinary for CDN image delivery.",
        "Implemented dual-layer authentication via JWT + Passport.js (local and OAuth)."
      ],
      tech: ["Node.js", "Express", "MongoDB", "AWS S3", "Razorpay", "Cloudinary", "Passport.js"],
      category: "SaaS",
      links: {
        live: "https://album-frontend-orpin.vercel.app/",
        github: "https://github.com/Hacker-maverick/Album_Backend"
      }
    },
    {
      id: 3,
      title: "RootRush CTF",
      subtitle: "Web Security CTF (Designed & Hosted)",
      description: "Designed, built, and hosted RootRush, a web-focused Capture The Flag competition with 300+ participants and 5 progressively harder real-world exploitation challenges.",
      details: [
        "Authored challenges covering Reflected XSS with filter bypass, JWT tampering via algorithm confusion, and a chained two-step IDOR auth bypass.",
        "Built a blind SQL-injection challenge with WAF-style filtering, plus the full backend: flag-validation API, live scoreboard, and session handling for 300+ concurrent users."
      ],
      tech: ["Web Exploitation", "CTF Engineering", "Challenge Design", "Node.js", "Linux"],
      category: "Security",
      links: {
        github: "https://github.com/Hacker-maverick/CTF"
      }
    },
    {
      id: 4,
      title: "LendFlow",
      subtitle: "Loan Management Platform",
      description: "Production-grade lending platform covering borrower onboarding, the full loan lifecycle, document verification, repayment tracking, and operational analytics through a multi-role access system.",
      details: [
        "Implemented JWT authentication and role-based access control across six roles that mirror a real loan pipeline: Admin, Sales, Sanction, Disbursement, Collection, and Borrower.",
        "Enforced module- and record-level permissions so each role can only reach its authorized actions and borrower data.",
        "Built borrower profiling, loan origination, document management (Multer + Cloudinary), repayment tracking, and dashboard analytics, with Zod-based request validation. Fully typed TypeScript backend and Next.js frontend."
      ],
      tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Zod", "REST APIs"],
      category: "Full-stack",
      links: {
        github: "https://github.com/Hacker-Maverick/Loan-management-System",
        live: "https://loan-management-system-one-livid.vercel.app/"
      }
    },
    {
      id: 5,
      title: "Personal Finance Manager",
      subtitle: "Spring Boot Financial Tracking & Analytics API",
      description: "Secure REST API for managing financial transactions, custom categories, and savings goals, with monthly and yearly reporting and session-based authentication.",
      details: [
        "Implemented authentication and session management with Spring Security using cookie-based sessions.",
        "Built full CRUD APIs for transactions, categories, and savings goals following a layered architecture (Controller → Service → Repository) with DTOs.",
        "Implemented monthly and yearly analytics for income, expense, and savings.",
        "Used Spring Data JPA and Hibernate over PostgreSQL, with request validation and a global exception handler."
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "PostgreSQL", "JUnit", "Maven"],
      category: "Backend",
      links: {
        live: "https://loan-management-system-26hd.onrender.com",
        github: "https://github.com/Hacker-Maverick/finance_manager"
      }
    },
    {
      id: 6,
      title: "Chitchat",
      subtitle: "Privacy-Focused Group Chat",
      description: "A real-time group chat app with a deliberate 'nuke' feature: a wrong password wipes the chat history, trading availability for confidentiality by design.",
      details: [
        "Implemented real-time messaging with Socket.io.",
        "Built a security trigger that clears MongoDB collections and disconnects all active sessions on unauthorized access."
      ],
      tech: ["Node.js", "Express", "MongoDB", "Socket.io", "EJS"],
      category: "Full-stack",
      links: {
        live: "https://chitchat-ng5b.onrender.com",
        github: "https://github.com/Hacker-maverick/chitchat"
      }
    },
    {
      id: 7,
      title: "Quitsmoke",
      subtitle: "Collaborative Habit Tracker",
      description: "A habit-tracking app that helps users quit smoking by logging progress and comparing it against others through a shared leaderboard.",
      details: [
        "Built a leaderboard that ranks users to add social motivation.",
        "Persisted long-term progress in MongoDB and visualized health improvements with Chart.js."
      ],
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Chart.js"],
      category: "Full-stack",
      links: {
        github: "https://github.com/Hacker-maverick/quitsmoke"
      }
    },
    {
      id: 8,
      title: "Hospital Management System",
      subtitle: "Appointments, Queue & Hospital Search Backend",
      description: "Backend for a hospital-patient system covering hospital and patient accounts, doctor and hospital search, appointment booking, and a live patient queue.",
      details: [
        "Built hospital and patient authentication, appointment booking, and a queue-management flow.",
        "Modeled hospitals, doctors, patients, and queues in MongoDB, with search over hospital and doctor details."
      ],
      tech: ["Node.js", "Express", "MongoDB"],
      category: "Backend",
      links: {
        github: "https://github.com/Hacker-maverick/Hospital_Management_SIH"
      }
    },
    {
      id: 9,
      title: "Tank Game",
      subtitle: "Online Multiplayer Combat",
      description: "A real-time multiplayer tank game where players create or join rooms and battle in a shared session.",
      details: [
        "Synced player positions and projectiles in real time with Socket.io.",
        "Built dynamic room creation with isolated per-room game state."
      ],
      tech: ["Node.js", "Express", "Socket.io", "HTML5", "CSS3", "JavaScript"],
      category: "Full-stack",
      links: {
        github: "https://github.com/Hacker-maverick/Tank_game"
      }
    },
    {
      id: 10,
      title: "Tile Puzzle Game",
      subtitle: "Interactive Grid-Based Challenge",
      description: "A puzzle game that slices an image into tiles and scrambles them; players swipe to restore the original image.",
      details: [
        "Implemented image slicing and scrambling logic.",
        "Built smooth swipe interactions for solving the grid."
      ],
      tech: ["Node.js", "Express", "EJS", "JavaScript"],
      category: "Full-stack",
      links: {
        github: "https://github.com/Hacker-maverick/Puzzle_game"
      }
    },
    {
      id: 11,
      title: "Developer Portfolio 2.0",
      subtitle: "Personal Portfolio Site",
      description: "A modern developer portfolio built with React and Vite, featuring smooth section reveals and a centralized data layer for easy content updates.",
      details: [
        "Built with React and Vite.",
        "Added animations and micro-interactions with Framer Motion.",
        "Used a fully responsive layout driven by a single centralized data file for content."
      ],
      tech: ["React", "Framer Motion", "Lucide Icons", "Vite"],
      category: "Frontend",
      links: {
        live: "https://portfolio2-0-mocha-delta.vercel.app/",
        github: "https://github.com/Hacker-maverick/Portfolio2.0"
      }
    },
    {
      id: 12,
      title: "OfferTrail",
      subtitle: "Smart Job Application Tracker",
      description: "A full-stack app for job seekers to track applications, manage resume versions, and stay on top of follow-ups.",
      details: [
        "Built session-based authentication with bcrypt hashing and email-based password reset.",
        "Built application tracking with resume version history, referral management, and on-campus/off-campus categorization.",
        "Added reminder logic with overdue and same-day highlights to prevent missed follow-ups."
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Brevo"],
      category: "Full-stack",
      links: {
        live: "https://offertrail.onrender.com",
        github: "https://github.com/Hacker-maverick/offertrail"
      }
    }
  ],
  skills: {
    languages: ["C", "C++", "JavaScript (ES6+)", "Java", "HTML5", "CSS3"],
    backend: ["Node.js", "Express", "REST APIs", "JWT", "Passport.js", "Spring Boot"],
    frontend: ["React.js", "Next.js", "EJS", "Tailwind CSS", "Framer Motion"],
    database: ["MongoDB", "MongoDB Atlas", "PostgreSQL", "MySQL", "SQL"],
    cloud: ["AWS (S3, IAM)", "Cloudinary", "Vercel", "Render", "Railway"],
    security: ["Burp Suite", "Nmap", "Metasploit", "Hydra", "Wireshark", "Wifite", "TCP/IP", "Web Exploitation", "Linux"]
  },
  experience: [
    {
      role: "Co-Coordinator & Founding Member",
      company: "Xploit Club (Cybersecurity Club), IIIT Bhopal",
      duration: "2025 — Present",
      description: "Co-founded IIIT Bhopal's cybersecurity club; organized RootRush CTF (300+ participants), managing challenge deployment, infrastructure, and live event operations. Led cross-campus collaborations with IIIT Allahabad, Lucknow, Nagpur, Kota, and IIT Indore."
    },
    {
      role: "Founder & Developer",
      company: "CampusTales",
      duration: "Jan 2026 — Present",
      description: "Built and deployed a production college platform serving 600+ users and 10+ clubs."
    }
  ],
  achievements: [
    {
      title: "AIR 29 — National Entrepreneurship Olympiad",
      org: "IIT Bombay (2021)",
      description: "Ranked 29th nationally in a national-level business challenge."
    },
    {
      title: "AIR 87 — CTF by IIIT Nagpur",
      org: "IIIT Nagpur",
      description: "Ranked 87th nationally among 400+ competing teams in a Capture The Flag competition."
    },
    {
      title: "Smart India Hackathon (SIH) Qualifier",
      org: "Government of India",
      description: "Cleared internal selection rounds in 2023, 2024, and 2025 — three consecutive years."
    },
    {
      title: "Algo-University Coding Contest",
      org: "Algo-University",
      description: "Ranked in the top 4000 out of 20,000+ participants."
    }
  ],
  socials: {
    github: "https://github.com/Hacker-maverick",
    linkedin: "https://www.linkedin.com/in/saurav-sagar-25a286290",
    email: "bigsagar18@gmail.com"
  }
};
