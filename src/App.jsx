import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  FileDown,
  Sun,
  Moon,
  MapPin,
  Phone,
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
  name: "Saurabh Sharma",
  role: "AI/ML Engineer · Cloud-Native Architect · Full-Stack Developer",
  location: "India",
  email: "Saurabh11sharma@live.com",
  phone: "+91-8699826276",
  linkedin: "https://www.linkedin.com/in/saurabh11sharma/",
  github: "https://github.com/Saurabh11Sharma",
  summary:
    "12+ years of experience in digital transformation, AI/ML integration, and full-stack development. Specialized in Node.js, TypeScript, React.js, and AWS serverless. Skilled in building scalable, resilient systems with AI-driven insights, microservices, and domain-driven design.",
  highlights: [
    "IIT Kanpur – Professional Certificate in Generative AI & Machine Learning",
    "12+ years in cloud-native, serverless, and microservices architecture",
    "Hands-on AI/ML integration into production systems (Radiant Digital)",
    "Achieved 50% AWS cost reduction with high system resilience",
    "Led org-wide AI adoption and backend best practice standardization",
  ],
  skills: [
    { name: "AI/ML (PyTorch, TensorFlow, Scikit-learn)", level: 90 },
    { name: "Python for AI/ML", level: 85 },
    { name: "Node.js / TypeScript / React.js", level: 90 },
    { name: "AWS Serverless / Cloud-Native", level: 88 },
    { name: "SQL / NoSQL (Postgres, MongoDB)", level: 82 },
    { name: "Microservices / DDD", level: 85 },
    { name: "DevOps (Docker, Kubernetes, CI/CD)", level: 80 },
  ],
  toolstack: [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "LangChain",
    "Hugging Face",
    "Pandas",
    "NumPy",
    "Node.js",
    "React",
    "NestJS",
    "AWS Lambda",
    "Kubernetes",
    "Kafka / Redis",
  ],
  experiences: [
    {
      title: "System Analyst (AI/ML & Node.js)",
      company: "Radiant Digital, Hyderabad (Remote)",
      date: "Mar 2024 – Present",
      bullets: [
        "Led AI-driven initiatives—research, PoC, and operationalizing automation tools.",
        "Designed scalable backend with Node.js, NestJS, Postgres, React.js.",
        "Integrated AI/ML models into production, enhancing system intelligence.",
        "Standardized backend best practices as Node.js Chapter Lead.",
        "Spearheaded CI/CD pipelines and Agile delivery.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Clarion Technologies, Pune (Remote)",
      date: "Mar 2021 – Mar 2024",
      bullets: [
        "Developed AWS serverless applications with Node.js and TypeScript.",
        "Integrated monitoring (Datadog) for performance optimization.",
        "Collaborated globally to align business requirements with technical solutions.",
        "Delivered AI/ML-enabled features for automation and insights.",
      ],
    },
    {
      title: "Senior Associate Delivery",
      company: "SmartData Enterprises, Mohali",
      date: "Jan 2019 – Mar 2021",
      bullets: [
        "Built web apps using Node.js, Angular, Vue.js with AWS backend.",
        "Engineered scalable solutions aligning with evolving client needs.",
        "Mentored teams in agile and modern full-stack practices.",
      ],
    },
  ],
  education: [
    {
      program: "Professional Certificate: Generative AI & ML",
      org: "IIT Kanpur",
      date: "2025 (ongoing)",
    },
    {
      program: "PG Diploma – IT Project Management",
      org: "NMIMS",
      date: "2021",
    },
    {
      program: "B.Tech – Computer Science",
      org: "UP Technical University",
      date: "2013",
    },
  ],
  projects: [
    {
      name: "AI-driven Automation Tools",
      desc: "Prototyped and deployed AI solutions automating dev workflows at Radiant Digital.",
      link: "https://github.com/Saurabh11Sharma",
      tags: ["AI/ML", "Automation", "Node.js", "AWS"],
    },
    {
      name: "FCC Compliance Project",
      desc: "Developed secure FCC-compliant telecom data systems (Verizon NTT).",
      link: "https://github.com/Saurabh11Sharma",
      tags: ["Node.js", "Postgres", "Compliance", "AWS"],
    },
    {
      name: "Generative AI Experiments",
      desc: "Research notebooks exploring LLM fine-tuning, LangChain pipelines, and Hugging Face models.",
      link: "https://github.com/Saurabh11Sharma",
      tags: ["LLM", "LangChain", "Hugging Face", "Python"],
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
  const [dark, setDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Smooth-scroll to anchors
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
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
        {/* Top progress bar */}
        <motion.div
          style={{ width }}
          className="fixed top-0 left-0 h-1 z-50 bg-gradient-to-r from-blue-600 to-cyan-400"
        />

        {/* Navbar */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-900/40 border-b border-black/5 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
            <a href="#home" className="font-bold tracking-tight text-lg md:text-xl">
              Saurabh Sharma
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-cyan-400">Skills</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-cyan-400">Experience</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-cyan-400">Projects</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-400">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href={RESUME_URL}
                className="hidden md:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm border border-black/10 dark:border-white/10 hover:shadow"
              >
                <FileDown size={16} /> Resume
              </a>
              <button
                onClick={() => setDark((d) => !d)}
                className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-black/10 dark:border-white/10 hover:shadow"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
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
                {DATA.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">{h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-700/90 dark:text-slate-300/90 leading-relaxed">
                {DATA.summary}
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
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                I enjoy building reliable systems end‑to‑end: clean APIs, solid data models,
                and smooth deployments. Recently focused on Generative AI workflows, model
                evaluation, and practical ML for products.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {DATA.toolstack.map((t) => (
                <Badge key={t}>{t}</Badge>
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
            {DATA.experiences.map((exp) => (
              <div key={exp.title} className="p-5 rounded-2xl border border-black/10 dark:border-white/10">
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
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border flex items-center justify-center border-black/10 dark:border-white/10"><Phone size={18} /></div>
                <span>{DATA.phone}</span>
              </div>
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
