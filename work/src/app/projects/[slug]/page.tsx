import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/components/biduko/site-data";
import { Navbar } from "@/components/biduko/navbar";
import { Footer } from "@/components/biduko/footer";

interface ProjectPageProps { params: Promise<{ slug: string }> }

const caseDetails: Record<string, { challenge: string; approach: string; outcome: string; stack: string[]; metrics: string[] }> = {
  "orbit-commerce": {
    challenge: "Make a catalogue-heavy store feel like a premium digital experience without hiding the path to purchase.",
    approach: "We built a product-first visual system, layered motion into discovery and kept the commerce interactions direct, fast and legible.",
    outcome: "A storefront that feels editorial at first glance, then becomes highly practical once a shopper starts exploring.",
    stack: ["Strategy", "UX/UI", "Commerce", "Motion", "Frontend"],
    metrics: ["Product-led browsing", "Motion system", "Conversion-focused flows"],
  },
  northstar: {
    challenge: "Give a fast-moving brand a digital home that feels as confident as the identity around it.",
    approach: "We paired oversized typography with cinematic transitions, modular content sections and a restrained interaction language.",
    outcome: "A brand platform with enough visual attitude to create memory without sacrificing clarity or speed.",
    stack: ["Art direction", "UX/UI", "Web design", "Frontend", "CMS"],
    metrics: ["Modular storytelling", "Responsive system", "Editorial motion"],
  },
  monument: {
    challenge: "Turn a visual identity into a digital system that stays recognisable while content and layouts keep changing.",
    approach: "We translated the identity into type, colour, spacing, components and motion rules that can travel across screens.",
    outcome: "A flexible visual language where every page feels related without becoming repetitive.",
    stack: ["Brand system", "Digital identity", "Motion", "Components", "Guidelines"],
    metrics: ["Reusable tokens", "Motion language", "Cross-page consistency"],
  },
  "atlas-os": {
    challenge: "Connect operational content and customer-facing experiences without making the product feel like an internal tool.",
    approach: "We mapped the workflows, reduced friction in the information architecture and designed a component system around repeatable tasks.",
    outcome: "A modular platform that makes complex information easier to navigate and leaves room for the product to grow.",
    stack: ["Product strategy", "UX architecture", "UI system", "Engineering", "Integrations"],
    metrics: ["Modular architecture", "Workflow clarity", "Scalable components"],
  },
};

export async function generateStaticParams(){ return projects.map(p => ({ slug:p.slug })); }

export default async function ProjectPage({ params }: ProjectPageProps){
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const detail = caseDetails[project.slug] ?? caseDetails["northstar"];

  return (
    <main className="case-page"><Navbar />
      <header className="case-head">
        <Link href="/projects" className="inner-back">← All projects</Link>
        <p className="eyebrow"><span className="eyebrow-dot" /> {project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="case-tags">{detail.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
      </header>

      <div className="case-visual">
        <Image src={`/projects/${project.slug}.svg`} alt={`${project.title} project visual`} fill sizes="100vw" className="case-image" priority />
        <div className="case-visual-glow" aria-hidden="true" />
      </div>

      <section className="case-copy">
        <span>Project overview</span>
        <h2>{detail.challenge}</h2>
        <div className="case-metrics">{detail.metrics.map(metric => <div key={metric}><Sparkles size={16} /><strong>{metric}</strong></div>)}</div>
        <div className="case-story-grid">
          <article><small>Approach</small><p>{detail.approach}</p></article>
          <article><small>Outcome</small><p>{detail.outcome}</p></article>
        </div>
        <Link href="/contact" className="button button-solid">Build something similar <ArrowUpRight size={16} /></Link>
      </section>

      <section className="case-next">
        <Link href="/projects" className="text-link">Back to selected work <ArrowRight size={17} /></Link>
      </section>
      <Footer />
    </main>
  );
}
