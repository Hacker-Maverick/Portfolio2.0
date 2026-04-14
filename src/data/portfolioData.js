export const portfolioData = {
  name: "Saurav Sagar",
  role: ["Full Stack Developer", "Security Enthusiast", "Builder"],
  email: "bigsagar18@gmail.com",
  phone: "+91 9693994971",
  location: "India",
  about: "I am a full stack developer focused on building production-grade systems. I enjoy designing scalable backend architectures, deploying cloud infrastructure, and solving real-world problems. I actively build SaaS products and developer tools. Currently pursuing B.Tech in Computer Science at IIIT Bhopal.",
  education: {
    institution: "Indian Institute of Information Technology, Bhopal (IIIT Bhopal)",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "Sep 2023 — May 2027",
    cgpa: "7.76/10",
    coursework: ["Data Structures & Algorithms", "DBMS", "OOP", "Computer Networks", "Operating Systems", "Software Engineering"]
  },
  projects: [
    {
      id: 1,
      title: "CampusTales",
      subtitle: "College-Centric Digital Platform",
      description: "Production platform actively used by 10+ registered clubs and 600+ students at IIIT Bhopal, processing 300+ team registrations for inter-college events with zero downtime.",
      details: [
        "Architected backend with RBAC, audit logging, rate limiting, and centralized error handling.",
        "Integrated Brevo and Resend for transactional emails; deployed on Vercel and Render.",
        "Implemented JWT + OAuth 2.0 authentication with full session management.",
        "Built a dynamic certificate generation system for automated event participation certificates."
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
      subtitle: "Large-Scale Full Stack Application",
      description: "Full stack SaaS for managing event photos with secure payments and CDN delivery. Engineered a 10,000+ LOC production-ready application.",
      details: [
        "Integrated Razorpay for full payment lifecycle management.",
        "Used AWS S3 with signed URLs and Cloudinary for CDN-optimized image delivery.",
        "Implemented dual-layer auth via JWT + Passport.js (local & OAuth)."
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
      description: "Designed, built, and hosted RootRush, a web-focused CTF competition drawing 300+ participants across 5 progressively difficult real-world exploitation challenges.",
      details: [
        "Challenges spanned client-side logic exploitation, Reflected XSS, and JWT tampering.",
        "Engineered a chained IDOR challenge and an advanced blind SQLi with WAF-like filtering."
      ],
      tech: ["Web Exploitation", "CTF Engineering", "Challenge Design", "Linux"],
      category: "Security",
      links: {
        github: "https://github.com/Hacker-maverick/CTF"
      }
    },
    {
      id: 4,
      title: "Chitchat",
      subtitle: "Privacy-Focused Group Chat",
      description: "A group chat application with a unique 'nuke' feature that deletes the entire chat history on a wrong password attempt to ensure absolute privacy.",
      details: [
        "Implemented real-time messaging using Socket.io.",
        "Integrated a security trigger to wipe MongoDB collections on unauthorized access attempts.",
        "Server-side rendering for fast initial load and SEO."
      ],
      tech: ["Node.js", "Express", "MongoDB", "Socket.io", "EJS"],
      category: "Full-stack",
      links: {
        live:"https://chitchat-ng5b.onrender.com",
        github: "https://github.com/Hacker-maverick/chitchat"
      }
    },
    {
      id: 5,
      title: "Quitsmoke",
      subtitle: "Collaborative Habit Tracker",
      description: "A platform designed to help users quit smoking by tracking their progress and comparing metrics with others in a collaborative environment.",
      details: [
        "Designed a social comparison engine to motivate users.",
        "Persistent tracking with MongoDB to visualize long-term health improvements."
      ],
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      category: "Full-stack",
      links: {
        github: "https://github.com/Hacker-maverick/quitsmoke"
      }
    },
    {
      id: 6,
      title: "Hospital Management System",
      subtitle: "Bed Allocation & Queue Backend",
      description: "A robust backend system for hospitals to manage bed allocations, appointment bookings, and a live queue system for patients.",
      details: [
        "Architected a real-time queue management logic.",
        "API-only implementation focused on high availability and fast response times."
      ],
      tech: ["Node.js", "Express"],
      category: "Backend",
      links: {
        github: "https://github.com/Hacker-maverick/Hospital_Management_SIH"
      }
    },
    {
      id: 7,
      title: "Tank Game",
      subtitle: "Online Multiplayer Combat",
      description: "A real-time multiplayer tank game where players can create/join rooms and battle in a seamless, interactive environment.",
      details: [
        "Real-time rendering of player positions and projectiles using Socket.io.",
        "Dynamic room creation and management for isolated gameplay sessions."
      ],
      tech: ["Node.js", "Express", "Socket.io", "HTML5", "CSS3", "JavaScript"],
      category: "Full-stack",
      links: {
        github: "https://github.com/Hacker-maverick/Tank_game"
      }
    },
    {
      id: 8,
      title: "Tile Puzzle Game",
      subtitle: "Interactive Grid-Based Challenge",
      description: "A full-stack puzzle application where images are sliced into tiles and scrambled, requiring users to solve them by swiping to restore the original image.",
      details: [
        "Dynamic image processing and scrambling logic.",
        "Smooth swipe interactions for an engaging user experience.",
        "Server-side rendering for quick loading and reliability."
      ],
      tech: ["Node.js", "Express", "EJS", "JavaScript"],
      category: "Full-stack",
      links: {
        github: "https://github.com/Hacker-maverick/Puzzle_game"
      }
    },
    {
      id: 9,
      title: "Developer Portfolio 2.0",
      subtitle: "Premium Professional Showroom",
      description: "A high-performance, modern developer portfolio featuring glassmorphism, advanced animations, and smooth section reveals.",
      details: [
        "Architected with React and Vite for blazing-fast performance.",
        "Sophisticated animations and micro-interactions powered by Framer Motion.",
        "Fully responsive design system with a centralized data management architecture for easy content updates."
      ],
      tech: ["React", "Framer Motion", "Lucide Icons", "Vite"],
      category: "Frontend",
      links: {
        live: "https://portfolio2-0-mocha-delta.vercel.app/",
        github: "https://github.com/Hacker-maverick/Portfolio2.0"
      }
    },
    {
  "id": 10,
  "title": "OfferTrail",
  "subtitle": "Smart Job Application Tracker",
  "description": "A full-stack web application designed to help students and job seekers track applications, manage resume versions, and never miss follow-ups with an organized and analytical workflow.",
  "details": [
    "Built a complete authentication system with session-based login, password reset via email, and secure bcrypt hashing.",
    "Designed a structured application tracking system with resume version tracking, referral management, and on-campus/off-campus categorization.",
    "Implemented reminder logic with overdue and same-day highlights to prevent missed follow-ups and improve application management."
  ],
  "tech": ["Node.js", "Express.js", "MongoDB", "EJS", "Brevo"],
  "category": "Full-stack",
  "links": {
    "live": "https://offertrail.onrender.com",
    "github": "https://github.com/Hacker-maverick/offertrail"
  }
}
  ],
  skills: {
    languages: ["C", "C++", "JavaScript (ES6+)", "HTML5", "CSS3"],
    backend: ["Node.js", "Express", "REST APIs", "JWT", "Passport.js"],
    frontend: ["React.js", "EJS", "Tailwind CSS", "Framer Motion"],
    database: ["MongoDB", "SQL", "MongoDB Atlas"],
    cloud: ["AWS (S3, IAM)", "Cloudinary", "Vercel", "Render", "Railway"],
    security: ["Burp Suite", "Nmap", "Metasploit", "Hydra", "Wireshark", "Wifite", "TCP/IP", "Web Exploitation", "Linux"]
  },
  experience: [
    {
      role: "Co-Coordinator & Founding Member",
      company: "Xploit Club (Cybersecurity Club), IIIT Bhopal",
      duration: "2025 — Present",
      description: "Co-founded IIIT Bhopal's cybersecurity club; organized RootRush CTF (300+ participants), managing full challenge deployment, infrastructure, and real-time event operations. Led cross-campus collaborations with IIIT Allahabad, Lucknow, Nagpur, Kota, and IIT Indore."
    },
    {
      role: "Founder & Developer",
      company: "CampusTales",
      duration: "2024 — Present",
      description: "Built and deployed a production college platform currently serving 600+ users and 10+ clubs."
    }
  ],
  achievements: [
    {
      title: "AIR 29 — National Entrepreneurship Olympiad",
      org: "IIT Bombay (2021)",
      description: "Ranked 29th nationally in a competitive national-level business challenge."
    },
    {
      title: "AIR 87 — CTF by IIIT Nagpur",
      org: "IIIT Nagpur",
      description: "Ranked 87th nationally among 400+ competing teams in a Capture The Flag competition."
    },
    {
      title: "Smart India Hackathon (SIH) Qualifier",
      org: "Government of India",
      description: "Qualified internal selection rounds in 2023, 2024, and 2025 — three consecutive years."
    },
    {
      title: "Algo-University Coding Contest",
      org: "Algo-University",
      description: "Ranked in the Top 4000 out of 20,000+ participants."
    }
  ],
  socials: {
    github: "https://github.com/Hacker-maverick",
    linkedin: "https://www.linkedin.com/in/saurav-sagar-25a286290",
    email: "bigsagar18@gmail.com"
  }
};
