import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface InnerPageItem {
  title: string;
  description: string;
  meta: string;
}

interface InnerPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: InnerPageItem[];
}

export function InnerPage({ eyebrow, title, intro, items }: InnerPageProps) {
  return <main className="inner-page"><Navbar /><div className="inner-glow"/><header className="inner-hero"><Link href="/" className="inner-back">← BiduKo</Link><p className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</p><h1>{title}</h1><p className="inner-intro">{intro}</p><Link href="/contact" className="button button-solid">Start a project <ArrowUpRight size={16}/></Link></header><section className="inner-grid">{items.map((item) => <article key={item.title}><span>{item.meta}</span><h2>{item.title}</h2><p>{item.description}</p></article>)}</section><div className="inner-footer"><span>Selected page</span><Link href="/">Back home <ArrowUpRight size={14}/></Link></div><Footer /></main>;
}
