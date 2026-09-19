import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface InnerPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
}

export function InnerPage({ eyebrow, title, intro, items }: InnerPageProps) {
  return <main className="inner-page"><div className="inner-glow"/><header className="inner-hero"><Link href="/" className="inner-back">← BiduKo</Link><p className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</p><h1>{title}</h1><p className="inner-intro">{intro}</p><Link href="/contact" className="button button-solid">Start a project <ArrowUpRight size={16}/></Link></header><section className="inner-grid">{items.map((item, i) => <article key={item}><span>0{i + 1}</span><h2>{item}</h2><p>Built around your business, shaped around the user and engineered to evolve after launch.</p></article>)}</section><footer className="inner-footer"><span>© 2026 BiduKo</span><Link href="/">Back home <ArrowUpRight size={14}/></Link></footer></main>;
}
