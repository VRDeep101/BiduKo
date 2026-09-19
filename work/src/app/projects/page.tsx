import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/components/biduko/site-data";
import { Navbar } from "@/components/biduko/navbar";
import { Footer } from "@/components/biduko/footer";

export default function ProjectsPage(){
  return (
    <main className="projects-page"><Navbar />
      <header className="projects-page-head">
        <Link href="/" className="inner-back">← BiduKo</Link>
        <p className="eyebrow"><span className="eyebrow-dot" /> Selected work</p>
        <h1>Digital work<br /><em>with a pulse.</em></h1>
        <p className="inner-intro">A small selection of the worlds, systems and experiences we have shaped — from commerce to brand platforms and custom digital products.</p>
      </header>
      <div className="projects-page-grid">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="project-page-card">
            <div className="project-page-art"><Image src={`/projects/${p.slug}.svg`} alt={`${p.title} preview`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div className="project-page-top"><span>{p.category}</span><span>Case study</span></div>
            <div className="project-page-bottom"><h2>{p.title}</h2><strong>View case study <ArrowUpRight size={16} /></strong></div>
          </Link>
        ))}
      </div>
      <Footer />
    </main>
  );
}
