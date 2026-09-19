import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/components/biduko/site-data";
interface ProjectPageProps { params: Promise<{slug:string}> }
export async function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default async function ProjectPage({params}:ProjectPageProps){const {slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)notFound();return <main className="case-page"><header className="case-head"><Link href="/projects" className="inner-back">← All projects</Link><p className="eyebrow"><span className="eyebrow-dot"/>{project.category} / {project.index}</p><h1>{project.title}</h1><p>{project.description}</p></header><div className="case-visual"><div className="mini-art"><i/><b/></div></div><section className="case-copy"><span>Project overview</span><h2>A placeholder case study system built to be replaced with the real story, visuals and outcomes later.</h2><Link href="/contact" className="button button-solid">Build something similar <ArrowUpRight size={16}/></Link></section></main>}
