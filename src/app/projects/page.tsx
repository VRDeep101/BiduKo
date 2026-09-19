import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/components/biduko/site-data";
export default function ProjectsPage(){return <main className="projects-page"><header className="projects-page-head"><Link href="/" className="inner-back">← BiduKo</Link><p className="eyebrow"><span className="eyebrow-dot"/> Selected work</p><h1>Digital work<br/><em>with a pulse.</em></h1></header><div className="projects-page-grid">{projects.map(p=><Link key={p.slug} href={`/projects/${p.slug}`} className="project-page-card"><span>{p.index} / {p.category}</span><h2>{p.title}</h2><div className="mini-art"><i/><b/></div><strong>View case study <ArrowUpRight size={16}/></strong></Link>)}</div></main>}
