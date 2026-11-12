import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  Terminal,
  X,
  Layers,
} from "lucide-react";

const PROFILE = {
  name: "Saurabh Sharma",
  role: "Senior Software Engineer & Technical Lead",
  focus: "Node.js · TypeScript · AWS · Full-Stack Systems",
  location: "Uttar Pradesh, India · Open to Remote",
  email: "saurabh11sharma@live.com",
  github: "https://github.com/Saurabh11Sharma",
  linkedin: "https://www.linkedin.com/in/saurabh11sharma/",
  resume: "/Saurabh%20Sharma_Full_Stack_Node.pdf",
};

const expertise = [
  {
    icon: Code2,
    title: "Backend engineering",
    detail: "Node.js, TypeScript, NestJS, REST APIs, GraphQL, authentication, integrations and reliable service design.",
    tags: ["Node.js", "TypeScript", "NestJS", "API design"],
  },
  {
    icon: Layers,
    title: "Full-stack product development",
    detail: "React and Next.js applications, clear frontend boundaries, accessible interfaces and end-to-end product delivery.",
    tags: ["React", "Next.js", "JavaScript", "UI architecture"],
  },
  {
    icon: Cloud,
    title: "Cloud & distributed systems",
    detail: "AWS services, serverless workloads, microservices, Docker, CI/CD, operational visibility and cost awareness.",
    tags: ["AWS", "Serverless", "Docker", "CI/CD"],
  },
  {
    icon: Database,
    title: "Data & persistence",
    detail: "Relational modelling, PostgreSQL, MongoDB, SQL, query optimisation, data integrity and migrations.",
    tags: ["PostgreSQL", "MongoDB", "SQL", "Data modelling"],
  },
  {
    icon: ShieldCheck,
    title: "Architecture & engineering quality",
    detail: "Domain-Driven Design, Hexagonal Architecture, automated testing, security basics and maintainable code.",
    tags: ["DDD", "Hexagonal", "Testing", "Security"],
  },
  {
    icon: Briefcase,
    title: "Technical leadership",
    detail: "Technical direction, code reviews, developer mentoring, delivery planning and collaboration across locations.",
    tags: ["Team leadership", "Mentoring", "Agile", "Delivery"],
  },
];

const projects = [
  {
    category: "Backend API",
    title: "NestJS API",
    description: "A NestJS and TypeScript API codebase with user authentication, session handling, guarded routes, report workflows, DTO serialization, TypeORM and database migrations.",
    stack: ["NestJS", "TypeScript", "TypeORM", "SQLite", "Jest"],
    href: "https://github.com/Saurabh11Sharma/nestjs-api",
    action: "Explore repository",
  },
  {
    category: "Distributed systems",
    title: "NestJS Microservices",
    description: "A multi-application NestJS workspace with auth, payments and reservations services, shared libraries, Dockerfiles and a Docker Compose development setup.",
    stack: ["NestJS", "Microservices", "Docker", "MongoDB", "JWT"],
    href: "https://github.com/Saurabh11Sharma/nestjs-microservices",
    action: "Explore repository",
  },
  {
    category: "Cloud & serverless",
    title: "AWS Serverless Node.js",
    description: "A Node.js serverless codebase organised into auction, authentication and notification service areas. Review the individual service folders for current implementation status.",
    stack: ["Node.js", "AWS", "Serverless Framework"],
    href: "https://github.com/Saurabh11Sharma/serverless-aws-nodejs",
    action: "Explore repository",
  },
  {
    category: "Algorithms",
    title: "DSA Practice in TypeScript",
    description: "A structured interview-practice repository with categorised algorithm topics, explanations, TypeScript solutions and tests.",
    stack: ["TypeScript", "Data Structures", "Algorithms", "Jest"],
    href: "https://github.com/Saurabh11Sharma/dsa-practice",
    action: "Explore repository",
  },
  {
    category: "Learning library",
    title: "Developer Mastery Vault",
    description: "A growing engineering reference with a structured senior-engineer roadmap, architecture notes, Node.js and TypeScript topics, PostgreSQL, AWS and a curated technical bookshelf.",
    stack: ["System Design", "Node.js", "PostgreSQL", "AWS", "Books"],
    href: "https://github.com/Saurabh11Sharma/Dev_Mastery_Vault",
    action: "Open learning vault",
  },
  {
    category: "AI & learning",
    title: "AI / ML Learning Vault",
    description: "A separate Obsidian-oriented workspace organised around roadmaps, lectures, papers, projects, resources, templates and journals.",
    stack: ["AI / ML", "Research", "Learning notes"],
    href: "https://github.com/Saurabh11Sharma/AI_ML_Learning",
    action: "Explore repository",
  },
];

const experience = [
  {
    role: "Senior Technical Lead",
    company: "FornaxTech · Client: Kerv Digital, London, UK",
    period: "Dec 2025 – Aug 2026",
    points: [
      "Led an India-based engineering team delivering modules for the UKRI Funding Service.",
      "Delivered the Award Management module to production within the agreed timeline.",
      "Worked across Next.js, React, TypeScript, PostgreSQL, AWS and Docker, applying DDD and Hexagonal Architecture.",
      "Coordinated technical design, sprint planning, code reviews and delivery with UK stakeholders.",
    ],
  },
  {
    role: "System Analyst",
    company: "Radiant Digital · Client: Verizon NTT",
    period: "Mar 2024 – Aug 2025",
    points: [
      "Designed and developed backend systems using Node.js, NestJS and PostgreSQL, alongside React-based applications.",
      "Coordinated India-based development activities with US counterparts.",
      "Served as Node.js Chapter Lead, supporting backend standards, coding practices and reusable patterns.",
      "Worked on telecom infrastructure data and FCC-related workflows.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Clarion Technologies · Client: SSENSE",
    period: "Mar 2021 – Mar 2024",
    points: [
      "Developed marketplace API integrations and SKU / product-data workflows for luxury brands, including Gucci.",
      "Built full-stack and backend capabilities using Node.js and TypeScript.",
      "Contributed to AWS serverless solutions, reporting capabilities and application monitoring.",
      "Collaborated with client stakeholders to translate requirements into maintainable software.",
    ],
  },
  {
    role: "Senior Associate Delivery",
    company: "SmartData Enterprises Inc.",
    period: "Jan 2019 – Mar 2021",
    points: [
      "Developed web applications using Node.js, Angular and JavaScript.",
      "Worked with AWS EC2 and S3 resources and supported cloud cost optimisation.",
      "Supported sprint planning, delivery coordination and developer mentoring.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Praesidium IT Solutions",
    period: "Oct 2017 – Jan 2019",
    points: [
      "Developed full-stack applications using Node.js and Angular.",
      "Worked with AWS EC2, S3 and IAM and supported infrastructure reliability.",
      "Designed REST APIs, optimised MongoDB schemas and indexes, and mentored developers.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Acmeminds Pvt Ltd",
    period: "Aug 2013 – Oct 2017",
    points: [
      "Developed web application modules using Node.js, Angular, JavaScript, ASP.NET and SQL Server.",
      "Integrated Google Maps APIs and geolocation features into MiRide.com.",
      "Implemented real-time ride-tracking capabilities and helped modernise legacy components.",
    ],
  },
];

const books = [
  {
    title: "A Philosophy of Software Design",
    author: "John Ousterhout",
    topic: "Managing complexity and designing clear modules",
    url: "https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    topic: "Storage, replication, transactions and distributed systems",
    url: "https://dataintensive.net/",
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    topic: "Engineering habits, feedback loops and maintainability",
    url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
  },
  {
    title: "Domain-Driven Design Distilled",
    author: "Vaughn Vernon",
    topic: "Bounded contexts, ubiquitous language and DDD",
    url: "https://www.domainlanguage.com/ddd/",
  },
];

const education = [
  {
    title: "Post Graduate Diploma in Information Technology Project Management",
    institution: "NMIMS",
    year: "2021",
    type: "Postgraduate diploma",
  },
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Uttar Pradesh Technical University",
    year: "2013",
    type: "Bachelor's degree",
  },
  {
    title: "Professional Certificate Course in Generative AI and Machine Learning",
    institution: "Professional certificate",
    year: "Completed",
    type: "Certification",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    ["About", "#about"],
    ["Expertise", "#expertise"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Learning", "#learning"],
    ["Contact", "#contact"],
  ];

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className={dark ? "app-shell dark-theme" : "app-shell"}>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Saurabh Sharma home">
            <span className="brand-mark">SS</span>
            <span>Saurabh Sharma<span className="brand-subtitle">ENGINEERING PORTFOLIO</span></span>
          </a>

          <nav className={mobileOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
          </nav>

          <div className="nav-actions">
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="icon-button mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="availability-dot" /> OPEN TO REMOTE OPPORTUNITIES</div>
              <p className="hero-kicker">HELLO, I'M SAURABH SHARMA</p>
              <h1>I build <span>reliable software</span> for real-world problems.</h1>
              <p className="hero-summary">
                {PROFILE.role} with <strong>13 years of experience</strong> building backend platforms, cloud solutions and full-stack applications — and helping engineering teams deliver with confidence.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button button-secondary" href={PROFILE.resume} target="_blank" rel="noreferrer"><FileDown size={17} /> View résumé</a>
              </div>
              <div className="hero-socials">
                <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
                <a href={`mailto:${PROFILE.email}`}><Mail size={17} /> Email</a>
              </div>
            </div>

            <div className="hero-aside">
              <div className="code-card">
                <div className="code-card-top"><span /><span /><span /><label>engineering-focus.ts</label></div>
                <div className="code-body">
                  <p><span className="code-purple">const</span> engineer = {'{'}</p>
                  <p className="code-indent"><span className="code-blue">experience</span>: <span className="code-green">"13+ years"</span>,</p>
                  <p className="code-indent"><span className="code-blue">speciality</span>: <span className="code-green">"Backend & Full-Stack"</span>,</p>
                  <p className="code-indent"><span className="code-blue">stack</span>: [</p>
                  <p className="code-indent code-indent-2"><span className="code-green">"Node.js"</span>, <span className="code-green">"TypeScript"</span>,</p>
                  <p className="code-indent code-indent-2"><span className="code-green">"React"</span>, <span className="code-green">"AWS"</span></p>
                  <p className="code-indent">],</p>
                  <p className="code-indent"><span className="code-blue">approach</span>: <span className="code-green">"Practical architecture"</span></p>
                  <p>{'}'};</p>
                  <div className="code-cursor" />
                </div>
                <div className="code-card-bottom"><Terminal size={15} /> Turning complex requirements into maintainable systems.</div>
              </div>
              <div className="hero-note">
                <div className="hero-note-icon"><CheckCircle2 size={20} /></div>
                <div><strong>Hands-on engineering. Team-level impact.</strong><span>Architecture · Delivery · Mentoring</span></div>
              </div>
            </div>
          </div>
          <div className="hero-metrics">
            <div><strong>13<span>+</span></strong><small>Years in software engineering</small></div>
            <div><strong>3</strong><small>International client engagements highlighted</small></div>
            <div><strong>50<span>%</span></strong><small>AWS infrastructure cost reduction at prior engagements</small></div>
            <div><strong>Remote</strong><small>Distributed team collaboration</small></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Engineering with context, not just code." description="I enjoy solving backend and product engineering problems where maintainability, delivery and operational behaviour matter." />
          <div className="about-grid">
            <div className="about-copy">
              <p>
                Over the course of my career, I have worked across backend engineering, full-stack application development, AWS cloud solutions and technical leadership. My core stack is JavaScript and TypeScript, with Node.js, NestJS, React, Next.js and relational and NoSQL databases.
              </p>
              <p>
                I have collaborated with teams and stakeholders across the UK, US and international product organisations. My recent work includes leading an India-based team for Kerv Digital's UKRI Funding Service and delivering the Award Management module to production within the agreed timeline.
              </p>
              <p>
                I value clear boundaries, simple solutions, thoughtful trade-offs, useful tests and documentation that helps the next engineer understand the system.
              </p>
              <div className="location-line"><MapPin size={16} /> {PROFILE.location}</div>
            </div>
            <div className="principles-card">
              <p className="eyebrow">HOW I APPROACH ENGINEERING</p>
              {[
                ["01", "Understand the domain", "Start with users, workflows, constraints and business rules."],
                ["02", "Design for change", "Keep responsibilities clear and dependencies pointing in the right direction."],
                ["03", "Build for operation", "Treat security, testing, observability and failure handling as part of the solution."],
                ["04", "Raise the team", "Share context, mentor developers and make delivery more predictable."],
              ].map(([number, title, body]) => (
                <div className="principle-row" key={number}>
                  <span>{number}</span><div><strong>{title}</strong><p>{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <SectionHeading eyebrow="WHAT I BRING" title="A broad engineering toolkit." description="My strongest work sits at the intersection of backend systems, cloud infrastructure, full-stack delivery and technical leadership." />
          <div className="expertise-grid">
            {expertise.map(({ icon: Icon, title, detail, tags }) => (
              <article className="expertise-card" key={title}>
                <div className="card-icon"><Icon size={21} /></div>
                <h3>{title}</h3>
                <p>{detail}</p>
                <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading eyebrow="SELECTED WORK & PUBLIC REPOSITORIES" title="Explore the code and learning work." description="These links point to public repositories. Each card describes the visible repository scope; check its README for setup instructions, current implementation status and known limitations." />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top"><span className="project-index">0{index + 1}</span><span className="project-category">{project.category}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.action} <ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
          <div className="professional-case">
            <div className="case-icon"><Briefcase size={22} /></div>
            <div>
              <p className="eyebrow">PROFESSIONAL DELIVERY · PRIVATE SOURCE CODE</p>
              <h3>UKRI Funding Service — Award Management</h3>
              <p>At FornaxTech, working with Kerv Digital (London), I led an India-based engineering team and delivered the Award Management module to production within the agreed timeline. The work used Next.js, React, TypeScript, PostgreSQL, AWS and Docker, with DDD and Hexagonal Architecture. Client source code is not published in this portfolio.</p>
            </div>
          </div>
          <div className="professional-case-grid">
            <article className="client-case">
              <p className="eyebrow">PROFESSIONAL ENGAGEMENT · PRIVATE SOURCE CODE</p>
              <h3>Verizon NTT — Telecom Infrastructure & FCC Workflows</h3>
              <p>At Radiant Digital, I worked on telecom infrastructure data and FCC-related workflows, developing backend capabilities with Node.js, NestJS and PostgreSQL alongside React-based applications. The work involved coordination with US counterparts and engineering-practice leadership as Node.js Chapter Lead.</p>
              <div className="tag-list"><span>Node.js</span><span>NestJS</span><span>PostgreSQL</span><span>React</span></div>
            </article>
            <article className="client-case">
              <p className="eyebrow">PROFESSIONAL ENGAGEMENT · PRIVATE SOURCE CODE</p>
              <h3>SSENSE — Brand Integrations & SKU Management</h3>
              <p>At Clarion Technologies, I developed marketplace API integrations for luxury brands, including Gucci, supporting SKU management and product-data exchange. The engagement also included sales reporting capabilities and AWS serverless application work.</p>
              <div className="tag-list"><span>Node.js</span><span>TypeScript</span><span>AWS</span><span>API integration</span></div>
            </article>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading eyebrow="CAREER JOURNEY" title="Experience across products and platforms." description="A summary of the roles and client engagements in my current résumé." />
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-heading"><div><h3>{item.role}</h3><p>{item.company}</p></div><time>{item.period}</time></div>
                  <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section learning-section" id="learning">
          <SectionHeading eyebrow="ALWAYS LEARNING" title="A practical engineering bookshelf." description="The books and notes I use to deepen my understanding of software design, distributed systems and engineering practice." />
          <div className="learning-banner">
            <div className="learning-banner-icon"><BookOpen size={24} /></div>
            <div><strong>Developer Mastery Vault</strong><p>A growing set of roadmaps and original study notes covering Node.js, TypeScript, PostgreSQL, AWS, system design, architecture and engineering quality.</p></div>
            <a href="https://github.com/Saurabh11Sharma/Dev_Mastery_Vault" target="_blank" rel="noreferrer">Browse the vault <ArrowUpRight size={16} /></a>
          </div>
          <div className="books-grid">
            {books.map(book => (
              <a className="book-card" href={book.url} target="_blank" rel="noreferrer" key={book.title}>
                <BookOpen size={18} />
                <div><h3>{book.title}</h3><span>{book.author}</span><p>{book.topic}</p></div>
                <ArrowUpRight size={16} className="book-arrow" />
              </a>
            ))}
          </div>
          <div className="credentials-block">
            <p className="eyebrow">EDUCATION & CERTIFICATION</p>
            <div className="credentials-grid">
              {education.map(item => (
                <article className="credential-card" key={item.title}>
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.institution} <b>·</b> {item.year}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="learning-links">
            <a href="https://github.com/Saurabh11Sharma/Dev_Mastery_Vault/blob/master/ROADMAP.md" target="_blank" rel="noreferrer">Senior engineering roadmap</a>
            <a href="https://github.com/Saurabh11Sharma/Dev_Mastery_Vault/blob/master/SYSTEM_DESIGN_AND_ARCHITECTURE.md" target="_blank" rel="noreferrer">System design notes</a>
            <a href="https://github.com/Saurabh11Sharma/Dev_Mastery_Vault/blob/master/POSTGRESQL.md" target="_blank" rel="noreferrer">PostgreSQL practice notes</a>
            <a href="https://github.com/Saurabh11Sharma/Dev_Mastery_Vault/blob/master/AWS_CLOUD_ENGINEERING.md" target="_blank" rel="noreferrer">AWS cloud notes</a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">HAVE A ROLE OR ENGINEERING CHALLENGE?</p>
            <h2>Let's build something <span>useful.</span></h2>
            <p>Open to remote Senior Software Engineer, Lead Engineer and Backend / Full-Stack opportunities.</p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${PROFILE.email}`}><Mail size={17} /> Get in touch</a>
              <a className="button button-outline-light" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn</a>
            </div>
            <div className="contact-meta"><span><MapPin size={15} /> India · Remote</span><span><Mail size={15} /> {PROFILE.email}</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div><strong>Saurabh Sharma</strong><span>Engineering Portfolio · {new Date().getFullYear()}</span></div>
        <div className="footer-links">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
