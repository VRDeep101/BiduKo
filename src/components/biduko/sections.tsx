"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers3,
  MousePointer2,
  Plus,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { collaborators, process, projects, services } from "./site-data";
import { GlassShineCard } from "@/components/ui/glass-shine-card";

const SERVICE_WORDS = ["Web Experience", "Digital Presence", "Brand System"] as const;

gsap.registerPlugin(ScrollTrigger);

interface SectionLabelProps { label: string; tone?: "default" | "inverse"; }

export function SectionLabel({ label, tone = "default" }: SectionLabelProps) {
  return (
    <div className={`section-label section-label--${tone}`}>
      <span>{label}</span>
      <span className="label-line" />
    </div>
  );
}

function useScrollReveal(selector: string, trigger: RefObject<HTMLElement | null>, options: gsap.TweenVars = {}) {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    if (!trigger.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(selector, {
          y: 70,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: trigger.current, start: "top 82%", once: true },
          ...optionsRef.current,
        });
      });
      return () => mm.revert();
    }, trigger);
    return () => ctx.revert();
  }, [selector, trigger]);
}

export function Statement() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".statement-kicker", { y: -24, opacity: 0, duration: .7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 78%", once: true } });
        gsap.from(".statement h2", { y: 90, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 70%", once: true } });
        gsap.from(".statement-process-word", { y: 34, opacity: 0, filter: "blur(8px)", duration: .65, stagger: .12, ease: "power3.out", scrollTrigger: { trigger: ".statement-process", start: "top 78%", once: true } });
        gsap.from(".statement-card", { y: 130, opacity: 0, scale: .88, filter: "blur(12px)", duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".statement-card", start: "top 86%", once: true } });
      });
      return () => mm.revert();
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="statement section-shell">
      <div className="statement-wrap">
        <p className="eyebrow statement-kicker"><span className="eyebrow-dot" /> Not another template</p>
        <h2>We make the <span>digital side</span> feel as good as the idea.</h2>
        <div className="statement-process">
          <span className="statement-process-word">Strategy</span>
          <span className="statement-process-word">Design</span>
          <span className="statement-process-word">Engineering</span>
        </div>
        <div className="statement-card">
          <span className="statement-card-index">01 / CONTINUITY</span>
          <p>One team, one visual language, one experience that holds together from the first scroll to the last click.</p>
          <span className="statement-card-mark">→</span>
        </div>
        <div className="statement-orb" aria-hidden="true" />
      </div>
    </section>
  );
}

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const [displayedWord, setDisplayedWord] = useState("");
  const serviceWords = SERVICE_WORDS;
  useScrollReveal(".service-row", ref, { x: 90, y: 0, rotateX: 5 });

  useEffect(() => {
    let cancelled = false;
    let timer: number | undefined;
    let wordIndex = 0;

    const typeAndErase = () => {
      if (cancelled) return;
      const word = serviceWords[wordIndex];
      let cursor = 0;

      const typeNext = () => {
        if (cancelled) return;
        setDisplayedWord(word.slice(0, cursor));
        cursor += 1;
        if (cursor <= word.length) {
          timer = window.setTimeout(typeNext, 72);
        } else {
          // Let the complete word breathe before erasing it letter-by-letter.
          timer = window.setTimeout(eraseNext, 1250);
        }
      };

      const eraseNext = () => {
        if (cancelled) return;
        cursor -= 1;
        setDisplayedWord(word.slice(0, Math.max(0, cursor)));
        if (cursor > 0) {
          timer = window.setTimeout(eraseNext, 42);
        } else {
          wordIndex = (wordIndex + 1) % serviceWords.length;
          timer = window.setTimeout(typeAndErase, 280);
        }
      };

      typeNext();
    };

    typeAndErase();
    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [serviceWords]);

  return (
    <section ref={ref} id="services" className="services section-shell">
      <SectionLabel label="What we do" />
      <div className="section-heading-row services-intro">
        <div>
          <p className="section-kicker">Built around the outcome, not the deliverable.</p>
          <h2 className="services-headline"><span>Everything your</span><span className="service-word-swap" aria-live="polite">{displayedWord}</span><span>requires</span></h2>
        </div>
        <div className="services-system">
          <div className="services-system-track" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="services-system-labels"><span>Position</span><span>Design</span><span>Code</span><span>Support</span></div>
          <p>Positioning, interface, production code and technical care stay connected as one digital system.</p>
        </div>
      </div>
      <div className="services-list">
        {services.map((service) => (
          <motion.article whileHover={{ x: 10 }} transition={{ duration: 0.28 }} className="service-row" key={service.title}>
            <div className="service-icon" aria-hidden="true"><Zap size={17} /></div>
            <div className="service-title-wrap"><h3>{service.title}</h3><span>Explore capability <ArrowUpRight size={15} /></span></div>
            <p>{service.copy}</p>
            <div className="service-progress"><span /></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".project-card", { y: 70, opacity: 0, rotateX: 6 }, {
          y: 0, opacity: 1, rotateX: 0, duration: .85, stagger: .1, ease: "power3.out",
          scrollTrigger: { trigger: ".projects-grid", start: "top 82%", once: true },
        });
      });
      return () => mm.revert();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="projects" className="projects section-shell">
      <button type="button" className="selected-work-transition" aria-label="Selected work">
        <MousePointer2 size={28} />
        <span>SELECTED WORK</span>
      </button>
      <div className="section-heading-row projects-head">
        <div><p className="section-kicker">A few worlds we have shipped.</p><h2>Built to be<br /><span>remembered.</span></h2></div>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article key={project.slug} className={`project-card project-${i % 2 === 0 ? "wide" : "tall"} ${expanded === project.slug ? "is-expanded" : ""}`} onClick={() => setExpanded(expanded === project.slug ? null : project.slug)} data-cursor="project">
            <div className={`project-art art-${project.accent}`}>
              <Image src={`/projects/${project.slug}.svg`} alt={`${project.title} project preview`} fill sizes="(max-width: 700px) 100vw, 50vw" className="project-image" priority={i < 2} />
              <div className="project-image-vignette" />
              <div className="project-image-noise" />
              <div className="project-scan" aria-hidden="true" />
            </div>
            <div className="project-topline"><span className="project-category-badge">{project.category}</span><span className="project-selected">Selected work</span></div>
            <div className="project-meta"><div><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-open">{expanded === project.slug ? "Close" : "Open"} <ArrowUpRight size={16} /></span></div>
            {expanded === project.slug && <div className="project-preview"><p>Strategy, interaction, visual system and production build shaped into one coherent experience.</p><Link href={`/projects/${project.slug}`} onClick={(event) => event.stopPropagation()}>View case study <ArrowRight size={15} /></Link></div>}
          </article>
        ))}
      </div>
      <div className="center-link"><Link href="/projects" className="projects-cta">View all projects <ArrowUpRight size={18} /></Link></div>
    </section>
  );
}

interface ProcessVisualProps { type: "discover" | "strategy" | "design" | "build" | "launch" | "support"; }
function ProcessVisual({ type }: ProcessVisualProps) {
  if (type === "discover") return <div className="process-visual process-visual--discover"><Compass size={30} /><i /><b /></div>;
  if (type === "strategy") return <div className="process-visual process-visual--strategy"><Layers3 size={30} /><i /><i /><i /><span>ALIGN</span></div>;
  if (type === "design") return <div className="process-visual process-visual--design"><div className="design-cursor"><MousePointer2 size={22} /></div><span /><span /><span /><b /></div>;
  if (type === "build") return <div className="process-visual process-visual--build"><div className="build-grid" /><div className="build-window"><i /><i /><i /><strong>&lt;/&gt;</strong></div></div>;
  if (type === "launch") return <div className="process-visual process-visual--launch"><div className="launch-orbit" /><Rocket size={32} /><span>GO LIVE</span></div>;
  return <div className="process-visual process-visual--support"><ShieldCheck size={34} /><div className="support-pulse" /><span>24/7</span></div>;
}

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const section = ref.current!;
        const track = section.querySelector<HTMLElement>(".process-track");
        const cards = gsap.utils.toArray<HTMLElement>(".process-card");
        const intro = section.querySelectorAll<HTMLElement>(".process-intro, .process-content > .section-label");
        if (!track || cards.length < 2) return;

        const revealPoint = 0.46;
        const focusCards = (cardsAreVisible = false) => {
          const center = window.innerWidth / 2;
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const distance = Math.abs(center - (rect.left + rect.width / 2));
            const normalized = Math.min(distance / (window.innerWidth * .62), 1);
            gsap.set(card, {
              scale: 1 - normalized * .08,
              filter: `blur(${normalized * 4.5}px)`,
              ...(cardsAreVisible ? { opacity: .52 + (1 - normalized) * .48 } : {}),
            });
          });
        };

        // Keep the card rail completely out of the visual layer while the
        // "Six moves" statement is being read. The cards only become visible
        // after that intro has finished its blur/exit phase.
        gsap.set(cards, { autoAlpha: 0, scale: .92, filter: "blur(12px)" });
        gsap.set(intro, { autoAlpha: 1, filter: "blur(0px)", y: 0 });
        gsap.set(track, { x: window.innerWidth * .16 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(window.innerHeight * 6.4, track.scrollWidth * 1.55)}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const cardsVisible = self.progress >= revealPoint;
              focusCards(cardsVisible);
              gsap.to(section.querySelector(".process-bg"), {
                filter: cardsVisible ? "blur(11px)" : "blur(0px)",
                opacity: cardsVisible ? 0.16 : 0.78,
                duration: 0.18,
                overwrite: true,
              });
            },
          },
        });

        // The first part is intentionally a quiet reading window for the
        // headline. Then the headline exits/softens completely. Only after
        // that point do the six cards enter as a horizontal sequence.
        tl.to({}, { duration: .34 })
          .to(intro, { autoAlpha: 0, filter: "blur(14px)", y: -28, duration: .12, ease: "power2.in" })
          .to(cards, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: .12, stagger: .012, ease: "power3.out" }, ">")
          .to(track, { x: 0, duration: .10, ease: "power3.out" }, "<")
          .to(track, { x: () => {
            const last = cards[cards.length - 1];
            const rect = last.getBoundingClientRect();
            return window.innerWidth / 2 - (rect.left + rect.width / 2);
          }, duration: .72, ease: "none" });

        // Do not run the focus pass before the reveal: it would overwrite the
        // hidden cards' opacity and make them flash in during the Six Moves intro.
        focusCards(false);
        gsap.set(section.querySelector(".process-bg"), { filter: "blur(0px)", opacity: 0.78 });
        return () => tl.kill();
      });
      return () => mm.revert();
    }, ref);
    return () => ctx.revert();
  }, []);

  const visualTypes: ProcessVisualProps["type"][] = ["discover", "strategy", "design", "build", "launch", "support"];
  const labels = ["Foundation", "Direction", "Experience", "Engineering", "Launch", "Care"];
  const accents = ["violet", "fuchsia", "indigo", "purple", "violet", "fuchsia"] as const;
  return (
    <section ref={ref} className="process section-shell">
      <div className="process-bg" aria-hidden="true"><div className="process-grid" /><div className="process-orbit" /><div className="process-orbit process-orbit--two" /><div className="process-star process-star--two"><Sparkles size={12} /></div></div>
      <div className="process-content">
        <SectionLabel label="How we work" tone="inverse" />
        <div className="process-intro"><div><p className="process-kicker">A sequence, not a hand-off.</p><h2>Six moves.<br /><span>One seamless build.</span></h2></div></div>
        <div className="process-track">
          {process.map(([title, copy], index) => <GlassShineCard key={title} className={`process-card ${index === 4 ? "process-card--launch" : ""}`} eyebrow={labels[index]} title={title} description={copy} accent={accents[index]}><ProcessVisual type={visualTypes[index]} /></GlassShineCard>)}
        </div>
      </div>
    </section>
  );
}

export function LaunchScene() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "+=360%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.set(".launch-rocket-wrap", { y: window.innerHeight * .62, opacity: 0, scale: .72 });
        gsap.set(".launch-word", { opacity: 0, x: 70, filter: "blur(12px)" });
        gsap.set(".launch-smoke", { opacity: 0, scale: .15 });

        tl.to(".launch-rocket-wrap", { y: 0, opacity: 1, scale: 1, duration: .16, ease: "power3.out" })
          .to(".launch-word", { opacity: 1, x: 0, filter: "blur(0px)", duration: .09, stagger: .055, ease: "power3.out" }, "+=.05")
          .to(".launch-rocket-wrap", { y: -window.innerHeight * 1.05, scale: .82, duration: .23, ease: "power2.in" }, "+=.16")
          .to(".launch-word", { opacity: 0, filter: "blur(10px)", duration: .11, ease: "power2.in" }, "<")
          .to(".launch-smoke", { opacity: 1, scale: 8.5, duration: .2, ease: "power2.out" }, "<.06")
          .to(".launch-stage", { filter: "blur(12px)", duration: .12, ease: "power2.in" }, "<.08")
          .to(".launch-rocket-wrap", { opacity: 0, duration: .04 }, "<")
          .to(".launch-smoke", { scale: 18, opacity: 1, duration: .18, ease: "power2.out" }, "+=.02");

        gsap.to(".launch-flame", { scaleY: 1.35, scaleX: .82, opacity: .86, repeat: -1, yoyo: true, duration: .13, ease: "sine.inOut" });
        gsap.to(".smoke-puff", { y: -35, opacity: 0, stagger: .1, repeat: -1, duration: 1.1, ease: "power1.out" });
      });
      return () => mm.revert();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="launch-scene">
      <div className="launch-stage">
        <div className="launch-grid" aria-hidden="true" />
        <div className="launch-stars" aria-hidden="true" />
        <div className="launch-glow" aria-hidden="true" />
        <div className="launch-rocket-wrap" aria-hidden="true">
          <Rocket className="launch-rocket" size={132} strokeWidth={1.15} />
          <span className="launch-flame" />
          <span className="launch-trail" />
        </div>
        <div className="launch-points" aria-hidden="true">
          <span className="launch-word">Best UI/UX</span>
          <span className="launch-word">Motion graphics</span>
          <span className="launch-word">Scroll storytelling</span>
          <span className="launch-word">Production engineering</span>
          <span className="launch-word">Built to move</span>
        </div>
        <div className="launch-smoke" aria-hidden="true">{Array.from({ length: 18 }).map((_, index) => <span className="smoke-puff" key={index} style={{ ["--i" as string]: index } as CSSProperties} />)}</div>
      </div>
    </section>
  );
}
export function CollaborationWall() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".collab-energy", { y: 60, opacity: 0, filter: "blur(10px)", duration: .9, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 76%", once: true } });
      gsap.from(".collab-title h2", { y: 90, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 68%", once: true } });
      gsap.from(".brand-wall span", { y: 40, opacity: 0, stagger: .04, duration: .7, ease: "power3.out", scrollTrigger: { trigger: ".brand-wall", start: "top 86%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <section ref={ref} className="collab section-shell"><SectionLabel label="Brand collaborations" /><div className="collab-title"><p className="section-kicker collab-energy">The kind of energy we like to work around.</p><h2>Good company<br /><span>moves together.</span></h2></div><div className="brand-wall" aria-label="Selected collaborators"><div className="brand-wall-track">{[...collaborators, ...collaborators].map((brand, i) => <span key={`${brand}-${i}`}>{brand}</span>)}</div></div></section>;
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const details = [
    ["04", "Core disciplines", "Strategy, design, engineering and technical support working as one team."],
    ["∞", "One visual language", "A shared system keeps the experience coherent from the first idea through launch."],
    ["∞", "Built to evolve", "The first release is a foundation, not the finish line. We stay close as the product grows."],
  ];
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-copy, .about-stats", { y: 70, opacity: 0, duration: .9, stagger: .14, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <section ref={ref} className="about section-shell">
    <div className="about-copy"><SectionLabel label="About BiduKo" /><h2>We take the messy part of digital and make it <span>beautiful.</span></h2><p>Strategy, design, engineering and care — connected from the first idea to everything that comes after.</p><div className="about-tags">{["Strategy", "Design", "Engineering", "Support"].map((tag, i) => <span key={tag}><b>0{i + 1}</b>{tag}</span>)}</div><Link href="/about" className="about-cta">More about BiduKo <ArrowUpRight size={17} /></Link></div>
    <div className="about-stats">{details.map(([index, title, copy], i) => <div className={`about-stat ${open === i ? "is-open" : ""}`} key={title}><button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><strong>{index}</strong><span>{title}</span><Plus size={19} className="about-plus" /></button>{open === i && <p>{copy}</p>}</div>)}</div>
  </section>;
}

export function WhySection() {
  const items = ["End-to-end ownership", "Custom by default", "Motion with purpose", "Support after launch"];
  return <section className="why section-shell"><SectionLabel label="Why BiduKo" /><div className="why-layout"><div><p className="section-kicker">The details add up.</p><h2>Because a website should never feel like <span>an afterthought.</span></h2></div><div className="why-list">{items.map((item) => <div key={item}><div className="why-icon"><Sparkles size={15} /></div><strong>{item}</strong><ArrowUpRight size={18} /></div>)}</div></div></section>;
}

export function FAQPreview() {
  const faqs = [
    ["What kind of projects do you take?", "Websites, e-commerce, brand systems and custom digital platforms where the experience matters as much as the technology."],
    ["Can you manage hosting and domains?", "Yes. Domain management, security, deployment and maintenance can stay with the same team that built the experience."],
    ["What happens after launch?", "We stay available for maintenance, improvements, analytics-informed iteration and technical support."],
    ["How does pricing work?", "We scope the experience first, then shape a proposal around the actual work, platform needs and support level."],
  ] as const;
  const [open, setOpen] = useState<number | null>(null);
  return <section className="faq-preview section-shell"><SectionLabel label="Questions" /><div className="faq-layout"><div><p className="section-kicker">Before we build.</p><h2>Questions,<br /><span>answered.</span></h2><Link href="/faq" className="text-link">Explore all FAQs <ArrowUpRight size={17} /></Link></div><div className="faq-list">{faqs.map(([q, answer], i) => <button key={q} onClick={() => setOpen(open === i ? null : i)} className={open === i ? "open" : ""} aria-expanded={open === i}><span>{q}</span>{open === i ? <ArrowRight size={18} /> : <Plus size={18} />}{open === i && <p>{answer}</p>}</button>)}</div></div></section>;
}

export function FinalCTA() {
  return <section className="final-cta section-shell"><div className="cta-grid" aria-hidden="true" /><div className="cta-noise" /><p className="eyebrow"><span className="eyebrow-dot" /> Let’s build</p><h2>Have an idea?<br /><span>Make it impossible to ignore.</span></h2><p className="cta-sub">Bring the rough version. We will help turn it into something people want to use.</p><Link href="/contact" className="cta-button">Start a project <ArrowUpRight size={18} /></Link><div className="cta-ring" aria-hidden="true" /></section>;
}
