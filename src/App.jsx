import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  FileDown,
  Sun,
  Moon,
  MapPin,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

/**
 * Interactive Online CV – Saurabh Sharma
 * -----------------------------------------------------------
 * Tech: React + Tailwind + Framer Motion + lucide-react icons
 * How to use:
 * 1) Ensure Tailwind is configured in your project (see chat for steps).
 * 2) Place a file named "/resume.pdf" in your public/ folder (or update RESUME_URL).
 * 3) Update the DATA object below with your real details.
 * 4) Deploy to GitHub Pages (saurabh11sharma.github.io) or Vercel/Netlify.
 */

// === Editable profile data ===
const DATA = {
  competencies: [
    "Cloud-Native Architecture",
    "Full-Stack Development",
    "Technical Leadership",
    "DevOps & CI/CD Automation",
    "AI/ML Integration",
    "Microservices Architecture",
    "Regulatory Compliance",
    "Agile Software Development",
    "Domain-Driven Design (DDD)",
    "System Performance Optimization",
    "Client & Stakeholder Management",
    "Cost Optimization & Cloud Efficiency",
  ],
  certifications: [
    {
      name: "Professional Certificate in Generative AI & Machine Learning",
      org: "IIT Kanpur",
      year: "2024",
      type: "cert"
    },
    {
      name: "Post Graduate Diploma in IT Project Management",
      org: "NMIMS",
      year: "2021",
      type: "edu"
    },
    {
      name: "B.Tech in Computer Science",
      org: "Uttar Pradesh Technical University",
      year: "2013",
      type: "edu"
    }
  ],
  name: "Saurabh Sharma",
  role: "AI/ML Engineer · Cloud-Native Architect · Full-Stack Developer",
  location: "India",
  email: "Saurabh11sharma@live.com",
  linkedin: "https://www.linkedin.com/in/saurabh11sharma/",
  github: "https://github.com/Saurabh11Sharma",
  summary:
    "Strategic technology leader with 12+ years of global experience in digital transformation, full-stack development, and cloud-native architecture. Specialized in architecting scalable, serverless systems using Node.js, TypeScript, React.js, and AWS, with a relentless focus on system resilience, cost optimization, and performance. Adept at Domain-Driven Design, microservices, and AI/ML integration to solve complex business challenges and elevate user experience. Proven track record of leading cross-functional teams, standardizing backend best practices, and accelerating delivery through Agile methodologies and CI/CD pipelines. Strong advocate for mentorship, technical excellence, and innovation. Trusted advisor to senior leadership, aligning technology initiatives with business goals, ensuring regulatory compliance (FCC), and driving scalable growth.",
  
  highlights: [
    "IIT Kanpur – Professional Certificate in Generative AI & Machine Learning",
    "12+ years in cloud-native architectures, serverless, microservices, and scalable backend systems",
    "100% client satisfaction and consistent delivery across global projects.",
    "Automated AWS server operations for zero downtime and near-perfect reliability.",
    "Reduced AWS costs by 50% while scaling performance and resilience.",
    "Instituted org-wide backend best practices and CI/CD pipelines, boosting developer efficiency and release reliability.",
    "Led FCC-compliance-critical telecom projects with zero audit findings.",
    "Mentored and upskilled 15+ developers, driving adoption of AI-driven pipelines and modern frameworks.",
    "Pioneered internal AI tool adoption, building PoCs, demos, and automation solutions for business impact.",
    "Strategic partner to senior leadership, aligning technology with business goals and regulatory standards.",
    "Expert in translating complex business requirements into robust, scalable technical solutions.",
    "Strong advocate for technical excellence, innovation, and continuous learning.",
  ],

  skills: [
    { name: "Node.js & TypeScript Development", level: 96 },
    { name: "React.js & Modern Frontend", level: 94 },
    { name: "AWS Serverless & Cloud Architecture", level: 93 },
    { name: "Microservices & Domain-Driven Design (DDD)", level: 92 },
    { name: "AI/ML Integration (PyTorch, TensorFlow, Scikit-learn)", level: 91 },
    { name: "Python & R for Data Science", level: 90 },
    { name: "DevOps (Docker, Kubernetes, CI/CD, Terraform)", level: 89 },
    { name: "Cloud Infrastructure, Cost & Performance Optimization", level: 90 },
    { name: "SQL & NoSQL (Postgres, MongoDB, DynamoDB)", level: 89 },
    { name: "RESTful API & Backend Engineering", level: 91 },
    { name: "Performance Tuning & Monitoring", level: 88 },
    { name: "Agile Leadership, Mentorship & Team Building", level: 93 },
    { name: "Regulatory Compliance (FCC, Data Security)", level: 87 },
    { name: "Technical Strategy & Stakeholder Management", level: 90 },
  ],

  experiences: [
    {
      title: "System Analyst",
      company: "Radiant Digital, Hyderabad (Remote)",
      date: "Mar 2024 – Aug 2025",
      bullets: [
        "Led AI-driven automation initiatives, reducing manual intervention by 40% and improving accuracy of predictions in production systems.",
        "Architected scalable backend solutions using Node.js, NestJS, PostgreSQL, and React.js supporting 100k+ daily active users.",
        "Integrated ML models into core products, enabling real-time analytics and data-driven decision-making.",
        "Defined and enforced backend best practices as Node.js Chapter Lead, improving deployment speed and code quality.",
        "Built CI/CD pipelines with full automated testing, reducing release cycle from 2 weeks to 3 days.",
        "Oversaw FCC-compliance critical telecom projects, achieving 100% compliance in audits.",
        "Mentored 15+ developers on AI/ML integration, microservices, and serverless patterns.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Clarion Technologies, Pune (Remote)",
      date: "Mar 2021 – Mar 2024",
      bullets: [
        "Designed and deployed AWS serverless applications using Node.js and TypeScript, reducing infrastructure costs by 45%.",
        "Implemented Datadog monitoring and alerting, increasing system observability and reducing downtime by 30%.",
        "Delivered AI/ML-enabled features, enhancing automation and predictive analytics for client projects.",
        "Collaborated globally to translate business requirements into robust, scalable technical solutions.",
        "Introduced automated testing and code reviews, improving overall product quality and maintainability.",
      ],
    },
    {
      title: "Senior Associate Delivery",
      company: "SmartData Enterprises, Mohali",
      date: "Jan 2019 – Mar 2021",
      bullets: [
        "Developed scalable web applications using Node.js, Angular, and Vue.js with AWS backend support.",
        "Engineered high-performance solutions aligned with evolving client needs, reducing latency by 20%.",
        "Mentored junior developers in full-stack best practices and Agile methodologies.",
        "Led deployment of microservices-based architecture, enhancing modularity and reliability.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Praesidium IT Solutions, Mohali",
      date: "Oct 2017 – Jan 2019",
      bullets: [
        "Managed AWS cloud infrastructure (EC2, S3, IAM), maintaining 99.9% uptime and high reliability.",
        "Architected full-stack solutions with Angular, Node.js, and optimized REST APIs.",
        "Designed MongoDB schemas for high-throughput, low-latency applications.",
        "Led internal workshops on best practices for cloud-native development.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Acmeminds Pvt Ltd, Chandigarh",
      date: "Aug 2013 – Oct 2017",
      bullets: [
        "Enhanced GIS capabilities for MiRide.com using Google Maps API, improving routing efficiency by 25%.",
        "Migrated legacy architecture to modern Node.js, Angular, and MongoDB stack.",
        "Implemented reusable frontend components, improving development speed and UI consistency.",
        "Worked on high-performance ASP.NET modules with SQL Server backend for enterprise clients.",
      ],
    },
  ],

  projects: [
    {
      name: "AI-driven Automation Tools",
      desc: "Developed AI solutions automating dev workflows at Radiant Digital, reducing manual work by 40% and improving model deployment accuracy.",
      link: "https://github.com/Saurabh11Sharma",
      tags: ["AI/ML", "Automation", "Node.js", "AWS", "DevOps"],
    },
    {
      name: "FCC Compliance Project",
      desc: "Engineered FCC-compliant telecom data systems for Verizon/NTT with zero audit findings.",
      link: "https://github.com/Saurabh11Sharma",
      tags: ["Node.js", "Postgres", "Compliance", "AWS", "Data Security"],
    },
    {
      name: "SSENSE Brand Integration & SKU Management",
      desc: "Designed dynamic APIs and reporting tools for luxury brand integrations, optimizing SKU management processes.",
      link: "https://github.com/Saurabh11Sharma",
      tags: ["Node.js", "Postgres", "AWS", "Integration", "Automation"],
    },
    {
      name: "Generative AI Experiments",
      desc: "Research notebooks exploring LLM fine-tuning, LangChain pipelines, and Hugging Face models for enterprise use cases.",
      link: "https://github.com/Saurabh11Sharma",
      tags: ["LLM", "LangChain", "Hugging Face", "Python", "Generative AI"],
    },
  ],
};

const RESUME_URL = "/Saurabh_Sharma.pdf"; // ⬅️ put your PDF in public/

// --- UI helpers ---
const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 md:px-8 py-16">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400 drop-shadow-lg">
      <span className="inline-block h-8 w-2 rounded bg-gradient-to-b from-blue-500 to-cyan-500" />
      {title}
    </h2>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold leading-6 backdrop-blur border-fuchsia-400/50 dark:border-cyan-400/30 bg-fuchsia-100/60 dark:bg-cyan-900/30 text-fuchsia-700 dark:text-cyan-200 shadow-sm">
    {children}
  </span>
);

const ProgressBar = ({ value }) => (
  <div className="w-full h-2 rounded-full bg-gradient-to-r from-gray-200 via-fuchsia-100 to-cyan-100 dark:from-slate-800 dark:via-fuchsia-900 dark:to-cyan-900 overflow-hidden">
    <motion.div
      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-400 shadow-lg"
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      viewport={{ once: true }}
    />
  </div>
);

export default function OnlineCV() {
  // Default to dark mode
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Show more toggles
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const [showFullSummary, setShowFullSummary] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (a) {
        e.preventDefault();
        const id = a.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-fuchsia-100 to-cyan-100 dark:from-slate-950 dark:via-fuchsia-950 dark:to-cyan-900 text-slate-800 dark:text-slate-100 transition-colors duration-700">
        {/* Top progress bar */}
        <motion.div
          style={{ width }}
          className="fixed top-0 left-0 h-1 z-50 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-400 shadow-lg"
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />

        {/* Navbar with contact bar and tech stack icons */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-fuchsia-200/40 dark:border-cyan-400/20 shadow-md transition-colors duration-700">
          {/* Quick contact bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden md:flex justify-between items-center px-8 py-1 text-xs bg-gradient-to-r from-blue-50 via-fuchsia-50 to-cyan-50 dark:from-slate-950 dark:via-fuchsia-950 dark:to-cyan-900 border-b border-fuchsia-200/40 dark:border-cyan-400/20"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1"><Mail size={14}/> {DATA.email}</span>
              <a href={DATA.linkedin} target="_blank" className="inline-flex items-center gap-1 hover:text-fuchsia-600 dark:hover:text-cyan-400 transition"><Linkedin size={14}/> LinkedIn</a>
              <a href={DATA.github} target="_blank" className="inline-flex items-center gap-1 hover:text-fuchsia-600 dark:hover:text-cyan-400 transition"><Github size={14}/> GitHub</a>
            </div>
            <a href={RESUME_URL} className="inline-flex items-center gap-1 px-2 py-1 rounded border border-fuchsia-400/40 dark:border-cyan-400/20 bg-fuchsia-100/60 dark:bg-cyan-900/30 text-fuchsia-700 dark:text-cyan-200 shadow hover:shadow-lg transition"><FileDown size={14}/> Resume</a>
          </motion.div>
          <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
            <a href="#home" className="font-extrabold tracking-tight text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-400 drop-shadow">
              Saurabh Sharma
            </a>
            <nav className="hidden md:flex items-center gap-6 text-base font-semibold">
              <motion.a whileHover={{ scale: 1.1 }} href="#about" className="hover:text-fuchsia-600 dark:hover:text-cyan-400 transition">About</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#skills" className="hover:text-fuchsia-600 dark:hover:text-cyan-400 transition">Skills</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#experience" className="hover:text-fuchsia-600 dark:hover:text-cyan-400 transition">Experience</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#certifications" className="hover:text-fuchsia-600 dark:hover:text-cyan-400 transition">Certifications</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#education" className="hover:text-fuchsia-600 dark:hover:text-cyan-400 transition">Education</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#projects" className="hover:text-fuchsia-600 dark:hover:text-cyan-400 transition">Projects</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#contact" className="hover:text-fuchsia-600 dark:hover:text-cyan-400 transition">Contact</motion.a>
            </nav>
            <div className="flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.85, rotate: 20 }}
                onClick={() => setDark((d) => !d)}
                className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-fuchsia-400/40 dark:border-cyan-400/20 bg-gradient-to-br from-fuchsia-100 to-cyan-100 dark:from-fuchsia-900 dark:to-cyan-900 shadow hover:shadow-lg transition"
                aria-label="Toggle theme"
              >
                <motion.span
                  key={dark ? 'sun' : 'moon'}
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </motion.button>
            </div>
          </div>
          {/* Tech stack icon row */}
          <div className="hidden md:flex justify-center items-center gap-6 py-2 bg-gradient-to-r from-blue-50 via-fuchsia-50 to-cyan-50 dark:from-slate-950 dark:via-fuchsia-950 dark:to-cyan-900 border-t border-fuchsia-200/40 dark:border-cyan-400/20">
            {/* Example icons, replace/add as needed for your stack */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-7 w-7" title="Node.js"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-7 w-7" title="TypeScript"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-7 w-7" title="React.js"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="h-7 w-7" title="AWS"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-7 w-7" title="Docker"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-7 w-7" title="Python"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-7 w-7" title="MongoDB"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgres" className="h-7 w-7" title="Postgres"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="h-7 w-7" title="Kubernetes"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="h-7 w-7" title="Git"/>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="max-w-6xl mx-auto px-6 md:px-8 pt-14 pb-10">
          <div className="grid md:grid-cols-[1.1fr_.9fr] gap-8 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-extrabold tracking-tight"
              >
                {DATA.name}
              </motion.h1>
              <p className="mt-3 text-lg md:text-xl text-slate-600 dark:text-slate-300">
                {DATA.role}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Badge><MapPin size={16} className="mr-1" /> {DATA.location}</Badge>
                <a href={RESUME_URL} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:shadow border-black/10 dark:border-white/10">
                  <FileDown size={16} /> Download Resume
                </a>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:shadow border-black/10 dark:border-white/10"
                >
                  <ArrowUpRight size={16} /> Print to PDF
                </button>
              </div>
              <ul className="mt-6 grid gap-2">
                {(showAllHighlights ? DATA.highlights : DATA.highlights.slice(0, 3)).map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">{h}</span>
                  </li>
                ))}
              </ul>
              {DATA.highlights.length > 3 && (
                <button
                  className="mt-2 text-sm text-fuchsia-700 dark:text-cyan-300 underline hover:opacity-80 transition"
                  onClick={() => setShowAllHighlights((v) => !v)}
                >
                  {showAllHighlights ? 'Show less' : 'Show more'}
                </button>
              )}
              <p className="mt-6 text-slate-700/90 dark:text-slate-300/90 leading-relaxed text-lg font-medium">
                {showFullSummary
                  ? DATA.summary
                  : DATA.summary.split('. ').slice(0,1).join('. ') + '.'}
                {DATA.summary.split('. ').length > 1 && (
                  <button
                    className="ml-2 text-sm text-fuchsia-700 dark:text-cyan-300 underline hover:opacity-80 transition"
                    onClick={() => setShowFullSummary((v) => !v)}
                  >
                    {showFullSummary ? 'Show less' : 'Read more'}
                  </button>
                )}
              </p>
              <div className="mt-6 flex gap-3">
                <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border hover:shadow border-black/10 dark:border-white/10"><Mail size={16}/> Email</a>
                <a href={DATA.github} target="_blank" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border hover:shadow border-black/10 dark:border-white/10"><Github size={16}/> GitHub</a>
                <a href={DATA.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border hover:shadow border-black/10 dark:border-white/10"><Linkedin size={16}/> LinkedIn</a>
              </div>
            </div>

            {/* GitHub cards */}
            <div className="grid gap-4">
              <img
                className="rounded-xl border border-black/10 dark:border-white/10"
                src={`https://github-readme-stats.vercel.app/api?username=Saurabh11Sharma&show_icons=true&theme=transparent`}
                alt="GitHub stats"
                loading="lazy"
              />
              <img
                className="rounded-xl border border-black/10 dark:border-white/10"
                src={`https://github-readme-streak-stats.herokuapp.com?user=Saurabh11Sharma&theme=dark&hide_border=true&date_format=j%20M%5B%20Y%5D`}
                alt="GitHub streak"
                loading="lazy"
              />
              <img
                className="rounded-xl border border-black/10 dark:border-white/10"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Saurabh11Sharma&layout=compact&theme=transparent`}
                alt="Top languages"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="leading-relaxed text-slate-700 dark:text-slate-300 text-lg font-medium">
                12+ years in digital transformation, cloud-native & full-stack engineering. Expert in Node.js, TypeScript, React.js, AWS, and AI/ML integration. Passionate about building scalable systems, leading teams, and driving innovation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((s) => (
                <Badge key={s.name}>{s.name}</Badge>
              ))}
            </div>
          </div>
          {/* Core Competencies horizontal scroll */}
          <div className="mt-8 overflow-x-auto pb-2">
            <div className="flex gap-3 min-w-max">
              {DATA.competencies.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.skills.map((s) => (
              <div key={s.name} className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-sm opacity-70">{s.level}%</span>
                </div>
                <ProgressBar value={s.level} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {DATA.experiences.map((exp, i) => (
              <div key={exp.title + exp.company + i} className="p-5 rounded-2xl border border-black/10 dark:border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-sm opacity-80">{exp.company}</p>
                  </div>
                  <p className="text-sm opacity-80">{exp.date}</p>
                </div>
                <ul className="mt-3 grid gap-2 list-disc pl-5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-slate-700 dark:text-slate-300">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Certifications & Education section */}
          <div id="certifications" className="mt-12 scroll-mt-24">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400">Certifications</h3>
              <div className="flex flex-wrap gap-4">
                {DATA.certifications.filter(c => c.type === 'cert').map((cert) => (
                  <div key={cert.name} className="rounded-xl border border-fuchsia-400/30 dark:border-cyan-400/20 bg-white/70 dark:bg-white/10 px-5 py-3 min-w-[220px] shadow-sm">
                    <div className="font-semibold text-fuchsia-700 dark:text-cyan-200">{cert.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{cert.org} &middot; {cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
            <div id="education">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-blue-400">Education</h3>
              <div className="flex flex-wrap gap-4">
                {DATA.certifications.filter(c => c.type === 'edu').map((edu) => (
                  <div key={edu.name} className="rounded-xl border border-cyan-400/30 dark:border-fuchsia-400/20 bg-white/70 dark:bg-white/10 px-5 py-3 min-w-[220px] shadow-sm">
                    <div className="font-semibold text-cyan-700 dark:text-fuchsia-200">{edu.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{edu.org} &middot; {edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.projects.map((p) => (
              <motion.a
                key={p.name}
                href={p.link}
                target="_blank"
                className="group p-5 rounded-2xl border border-black/10 dark:border-white/10 hover:shadow-lg transition bg-white/60 dark:bg-white/5 backdrop-blur"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <ExternalLink className="opacity-60 group-hover:opacity-100" size={18} />
                </div>
                <p className="mt-2 text-sm opacity-80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <a href={`mailto:${DATA.email}`} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border flex items-center justify-center border-black/10 dark:border-white/10"><Mail size={18} /></div>
                <span>{DATA.email}</span>
              </a>
              <a href={DATA.linkedin} target="_blank" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border flex items-center justify-center border-black/10 dark:border-white/10"><Linkedin size={18} /></div>
                <span>LinkedIn</span>
              </a>
              <a href={DATA.github} target="_blank" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border flex items-center justify-center border-black/10 dark:border-white/10"><Github size={18} /></div>
                <span>GitHub</span>
              </a>
            </div>
            <form
              className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent("Hello from your Online CV");
                const body = encodeURIComponent(
                  `Hi Saurabh,%0D%0A%0D%0A` +
                    `${data.get("name")} (${data.get("email")}) wrote:%0D%0A` +
                    `${data.get("message")}`
                );
                window.location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <input name="name" placeholder="Your name" className="h-11 rounded-xl px-3 border border-black/10 dark:border-white/10 bg-transparent" required />
                  <input name="email" type="email" placeholder="Your email" className="h-11 rounded-xl px-3 border border-black/10 dark:border-white/10 bg-transparent" required />
                </div>
                <textarea name="message" rows={4} placeholder="Message" className="rounded-xl px-3 py-2 border border-black/10 dark:border-white/10 bg-transparent" required />
                <button className="inline-flex items-center justify-center h-11 rounded-xl border border-black/10 dark:border-white/10 hover:shadow">Send Email</button>
              </div>
            </form>
          </div>
        </Section>

        <footer className="border-t border-black/5 dark:border-white/10 py-10 mt-6">
          <div className="max-w-6xl mx-auto px-6 md:px-8 text-sm opacity-70 flex flex-col md:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
            <p>
              Built with React · Tailwind · Framer Motion · Hosted on GitHub Pages
            </p>
          </div>
        </footer>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          header, .group:hover, .hover\\:shadow, .hover\\:shadow-lg { box-shadow: none !important; }
          a[href^="#"] { display: none; }
          button { display: none; }
        }
      `}</style>
    </div>
  );
}
