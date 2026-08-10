import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const projects = [
  {
    number: "01",
    title: "LumaNote Workspace",
    description: "A calm AI collaboration workspace designed around focused team writing and shared knowledge.",
    category: "Web Product · AI",
    image: "/allweek-portfolio/lumanote.jpg",
    tags: ["UX Direction", "Dashboard UI", "Design System"],
    accent: "#7457e8",
  },
  {
    number: "02",
    title: "Trend Thread Global",
    description: "A data-rich trend analysis experience that keeps global signals readable and actionable.",
    category: "Web Product · Data",
    image: "/allweek-portfolio/trend-thread.jpg",
    tags: ["Product UI", "Data Visualization", "Responsive Web"],
    accent: "#0ca9b3",
  },
  {
    number: "03",
    title: "Japan Travel Journey",
    description: "A friendly mobile learning journey that combines useful Japanese phrases with travel preparation.",
    category: "Mobile UI · Travel",
    image: "/allweek-portfolio/japan-travel.jpg",
    tags: ["Mobile UX", "App UI", "Visual System"],
    accent: "#f0812b",
  },
  {
    number: "04",
    title: "CourtQ",
    description: "An operations interface that simplifies reservations, members, and daily work for racket clubs.",
    category: "Web UI · Sports",
    image: "/allweek-portfolio/courtoq.jpg",
    tags: ["Admin UX", "Web App", "Operations UI"],
    accent: "#82ad39",
  },
  {
    number: "05",
    title: "Five Brand Studies",
    description: "Five distinct logo concepts exploring how tone, shape, and color can give a new brand its voice.",
    category: "Logo Design · Identity",
    image: "/allweek-portfolio/brand-logo.jpg",
    tags: ["Logo Design", "Brand Direction", "Identity"],
    accent: "#dc5a83",
  },
  {
    number: "06",
    title: "ToolsLab Website",
    description: "A responsive creative studio website that presents multidisciplinary services with clarity and trust.",
    category: "Landing Page · Web",
    image: "/allweek-portfolio/toolslab.jpg",
    tags: ["Web Design", "Landing Page", "Development"],
    accent: "#0a4d78",
  },
];

const services = [
  ["01", "Logo design", "Clear, memorable identities with practical applications."],
  ["02", "Landing pages", "Focused pages that explain an offer and guide action."],
  ["03", "Web UI", "Responsive product interfaces built around real workflows."],
  ["04", "Mobile app UI", "Intuitive mobile experiences with a consistent visual system."],
];

export const metadata: Metadata = {
  title: "Allweek Design Portfolio | ToolsLab",
  description: "Allweek portfolio featuring logo design, landing pages, web UI, and mobile app UI.",
};

function ToolsLabMark() {
  return (
    <span className={styles.toolsLabBrand}>
      <span className={styles.toolsLabMark}>◉</span>
      <span>ToolsLab</span>
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" aria-label="ToolsLab home">
          <ToolsLabMark />
        </Link>
        <nav aria-label="Portfolio navigation">
          <Link href="/">Home</Link>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className={styles.headerContact} href="mailto:allweek@naver.com" aria-label="Email Allweek">
          <span>Let&apos;s talk</span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>ALLWEEK · CREATIVE DESIGN PORTFOLIO</p>
          <h1>
            Ideas made clear.
            <span>Brands made visible.</span>
          </h1>
          <p className={styles.heroDescription}>
            Logo design, landing pages, and thoughtful interfaces for web and mobile products.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#work">View selected work <span>↓</span></a>
            <a className={styles.textButton} href="mailto:allweek@naver.com">Start a project <span>↗</span></a>
          </div>
        </div>

        <div className={styles.logoStage}>
          <div className={styles.logoFrame}>
            <Image
              src="/allweek-portfolio/allweek-logo.png"
              alt="Allweek Creative Design logo"
              width={1920}
              height={1080}
              priority
            />
          </div>
          <p>Logo · Landing Page · Web UI · Mobile App UI</p>
        </div>
      </section>

      <section className={styles.introduction}>
        <p className={styles.eyebrow}>A CLEAR IDEA, MADE VISUAL</p>
        <p>
          Each concept begins with one question: what should people understand and feel first?
          The answer becomes a focused visual system made for real screens and real use.
        </p>
        <div>
          <span>Based in South Korea</span>
          <span>Available worldwide</span>
          <span>Independent designer</span>
        </div>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>SELECTED CONCEPT WORK</p>
            <h2>Six projects.<br />Six different points of view.</h2>
          </div>
          <p>Self-directed concept projects across AI, travel, sports, branding, and creative technology.</p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article
              className={styles.projectCard}
              key={project.title}
              style={{ "--project-accent": project.accent } as CSSProperties}
            >
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={`${project.title} concept project preview`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 42vw"
                />
                <span className={styles.projectNumber}>{project.number}</span>
              </div>
              <div className={styles.projectCopy}>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
                <ul aria-label={`${project.title} services`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.servicesIntro}>
          <p className={styles.eyebrow}>WHAT I DESIGN</p>
          <h2>One visual language,<br />every touchpoint.</h2>
        </div>
        <div className={styles.serviceList}>
          {services.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.eyebrow}>HAVE A PROJECT IN MIND?</p>
        <h2>Let&apos;s make your next<br /><em>good idea</em> visible.</h2>
        <p>Available for logo, landing page, web UI, and mobile app UI projects.</p>
        <div>
          <a className={styles.primaryButton} href="https://www.fiverr.com/allweek77" target="_blank" rel="noreferrer">
            Find Allweek on Fiverr <span>↗</span>
          </a>
          <a className={styles.textButton} href="mailto:allweek@naver.com">allweek@naver.com</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><ToolsLabMark /><span>Allweek Design Portfolio</span></div>
        <p>Logo · Landing Page · Web &amp; Mobile UI</p>
        <p>© {new Date().getFullYear()} ToolsLab</p>
      </footer>
    </main>
  );
}
