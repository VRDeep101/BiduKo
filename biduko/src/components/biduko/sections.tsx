"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { collaborators, process, projects, services } from "./site-data";

gsap.registerPlugin(ScrollTrigger);

interface SectionLabelProps { number: string; label: string }
export function SectionLabel({ number, label }: SectionLabelProps) { return <div className="section-label"><span>{number}</span><span>{label}</span><span className="label-line"/></div>; }

export function Statement() { return <section className="statement section-shell"><div className="statement-wrap"><p className="eyebrow">Not another template</p><h2>We make the <span>digital side</span> feel as good as the idea.</h2><div className="statement-orb" /></div></section>; }

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (!ref.current) return; const ctx = gsap.context(() => { gsap.from(".service-row", { x: 120, opacity: 0, stagger: .12, duration: .85, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 78%", toggleActions: "play none none reverse" } }); }, ref); return () => ctx.revert(); }, []);
  return <section ref={ref} id="services" className="services section-shell"><SectionLabel number="02" label="What we do"/><div className="section-heading-row"><h2>Everything your<br/><span>digital presence</span> needs.</h2><p>One partner from first thought to launch, and the technical care that comes after.</p></div><div className="services-list">{services.map((service, i) => <motion.div whileHover={{ x: 10 }} transition={{ duration: .25 }} className="service-row" key={service.number}><span className="service-no">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><ArrowUpRight className="service-arrow"/></motion.div>)}</div></section>;
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All"); const [expanded, setExpanded] = useState<string | null>(null); const categories = ["All", "Websites", "E-commerce", "Branding", "Custom Platforms"];
  const visible = filter === "All" ? projects : projects.filter(p => p.category === filter);
  return <section ref={undefined} id="projects" className="projects section-shell"><SectionLabel number="03" label="Selected work"/><div className="section-heading-row projects-head"><h2>Built to be<br/><span>remembered.</span></h2><div className="filter-row">{categories.map(c => <button key={c} className={filter === c ? "is-active" : ""} onClick={() => { setFilter(c); setExpanded(null); }}>{c}</button>)}</div></div><div className="projects-grid">{visible.map((project, i) => <div key={project.slug} className={`project-card project-${i % 2 === 0 ? "wide" : "tall"} ${expanded === project.slug ? "is-expanded" : ""}`} onClick={() => setExpanded(expanded === project.slug ? null : project.slug)} data-cursor="project"><div className={`project-art art-${project.accent}`}><div className="art-grid"/><div className="art-window"><div/><div/><div/><div/></div><div className="art-orb"/></div><div className="project-meta"><span>{project.index} / {project.category}</span><h3>{project.title}</h3><span className="project-open">{expanded === project.slug ? "Close" : "View preview"} <ArrowUpRight size={16}/></span></div>{expanded === project.slug && <div className="project-preview"><p>{project.description}</p><Link href={`/projects/${project.slug}`} onClick={e => e.stopPropagation()}>View case study <ArrowRight size={15}/></Link></div>}</div>)}</div><div className="center-link"><Link href="/projects" className="text-link">View all projects <ArrowUpRight size={17}/></Link></div></section>;
}

export function ProcessSection() { return <section className="process section-shell"><SectionLabel number="04" label="How we work"/><div className="process-intro"><h2>A simple process.<br/><span>An obsessive finish.</span></h2><p>Clear thinking in. Crafted experience out.</p></div><div className="process-track">{process.map(([no, title, copy], i) => <motion.article key={no} className="process-card" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{ once: false, amount: .35 }} transition={{ duration: .7, delay: i * .06 }}><span>{no}</span><h3>{title}</h3><p>{copy}</p><div className="process-mark">0{i + 1}</div></motion.article>)}</div></section>; }

export function CollaborationWall() { return <section className="collab section-shell"><SectionLabel number="05" label="Brand collaborations"/><div className="collab-title"><h2>Good company<br/><span>moves together.</span></h2></div><div className="brand-wall">{[...collaborators, ...collaborators].map((brand, i) => <span key={`${brand}-${i}`}>{brand}</span>)}</div></section>; }

export function AboutSection() { const ref = useRef<HTMLDivElement>(null); const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] }); const y = useTransform(scrollYProgress, [0, 1], [0, -90]); return <section ref={ref} className="about section-shell"><div className="about-copy"><SectionLabel number="06" label="About BiduKo"/><motion.h2 style={{ y }}>We take the messy part of digital and make it <span>beautiful.</span></motion.h2><p>BiduKo is an end-to-end digital partner for people and businesses who want more than a website. We design the experience, engineer the platform, launch it and stay around to keep it moving.</p><Link href="/about" className="text-link">More about BiduKo <ArrowUpRight size={17}/></Link></div><div className="about-stats"><div><strong>01</strong><span>Partner from idea to support</span></div><div><strong>24/7</strong><span>Technical support mindset</span></div><div><strong>∞</strong><span>Room to evolve after launch</span></div></div></section>; }

export function WhySection() { const items = ["End-to-end ownership", "Custom by default", "Motion with purpose", "Support after launch"]; return <section className="why section-shell"><SectionLabel number="07" label="Why BiduKo"/><div className="why-layout"><h2>Because a website should never feel like <span>an afterthought.</span></h2><div className="why-list">{items.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={18}/></div>)}</div></div></section>; }

export function FAQPreview() { const faqs = ["What kind of projects do you take?", "Can you manage hosting and domains?", "What happens after launch?", "How does pricing work?"]; const [open, setOpen] = useState<number | null>(null); return <section className="faq-preview section-shell"><SectionLabel number="08" label="Questions"/><div className="faq-layout"><div><h2>Questions,<br/><span>answered.</span></h2><Link href="/faq" className="text-link">Explore all FAQs <ArrowUpRight size={17}/></Link></div><div className="faq-list">{faqs.map((q, i) => <button key={q} onClick={() => setOpen(open === i ? null : i)} className={open === i ? "open" : ""}><span>{q}</span>{open === i ? <ArrowRight size={18}/> : <Plus size={18}/>} {open === i && <p>{i === 0 ? "Websites, e-commerce, branding and custom digital platforms." : i === 1 ? "Yes. Domain management, security and maintenance can stay with us." : i === 2 ? "We stay available for maintenance, improvements and technical support." : "We shape the scope around your needs, then provide a clear proposal."}</p>}</button>)}</div></div></section>; }

export function FinalCTA() { return <section className="final-cta section-shell"><div className="cta-noise"/><p className="eyebrow">09 / Let’s build</p><h2>Have an idea?<br/><span>Make it impossible to ignore.</span></h2><Link href="/contact" className="cta-button">Start a project <ArrowUpRight size={18}/></Link><div className="cta-ring"/></section>; }
