"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || reduce) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".hero-stage", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.1 } });
        gsap.to(".hero-copy", { yPercent: -6, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.2 } });
        gsap.to(".hero-orbit", { rotate: 28, scale: 1.08, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.4 } });
        gsap.to(".ui-card-main", { y: -55, rotate: 3, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.2 } });
        gsap.to(".ui-card-small", { y: 35, rotate: -11, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.4 } });
      });
      return () => mm.revert();
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={ref} className="hero section-shell" id="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 50 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .9, delay: 1.35 }}>We build<br /><em>digital</em><br /><em>worlds</em></motion.h1>
        <div className="hero-actions"><Link href="/contact" className="button button-solid">Start a project <ArrowUpRight size={16} /></Link><Link href="#projects" className="button button-ghost">Explore our work <ArrowDownRight size={16} /></Link></div>
      </div>
      <div className="hero-stage" aria-hidden="true">
        <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
        <div className="hero-core"><div className="core-glow" /><div className="core-face">BK<span>.</span></div></div>
        <div className="ui-card ui-card-main"><div className="ui-card-bar"><span /><span /><span /></div><div className="ui-chart"><i /><i /><i /><i /><i /></div><strong>Experience / Motion / 01</strong></div>
        <div className="ui-card ui-card-small"><span>SCROLL</span><b>→</b></div>
        <div className="stage-particle p1" /><div className="stage-particle p2" /><div className="stage-particle p3" />
      </div>
      
    </section>
  );
}
