"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroProps { }

export function Hero({}: HeroProps) {
  const reduce = useReducedMotion();
  return <section className="hero section-shell" id="hero">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Independent digital agency / 2026</p><motion.h1 initial={reduce ? false : { opacity: 0, y: 50 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .9, delay: 1.35 }}>We build<br /><em>digital worlds.</em></motion.h1><p className="hero-lead">Websites, platforms and digital experiences engineered to make people stop scrolling.</p><div className="hero-actions"><Link href="/contact" className="button button-solid">Start a project <ArrowUpRight size={16}/></Link><Link href="#projects" className="button button-ghost">Explore our work <ArrowDownRight size={16}/></Link></div></div>
    <div className="hero-stage" aria-hidden="true"><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/><div className="hero-core"><div className="core-glow"/><div className="core-face">B<span>K</span></div></div><div className="ui-card ui-card-main"><div className="ui-card-bar"><span/><span/><span/></div><div className="ui-chart"><i/><i/><i/><i/><i/></div><strong>Experience / 01</strong></div><div className="ui-card ui-card-small"><span>SCROLL</span><b>→</b></div><div className="stage-particle p1"/><div className="stage-particle p2"/><div className="stage-particle p3"/></div>
    <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line"/><span>01 / 09</span></div>
  </section>;
}
