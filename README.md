# **BiduKo**

**BiduKo is a client-focused digital studio website built to present and sell professional digital services.**
The website is designed to communicate BiduKo’s capabilities, approach, work, and creative direction while giving potential clients a clear path toward starting a project.

The experience combines **premium editorial design, large-scale typography, motion graphics, scroll-driven storytelling, interactive sections, and immersive transitions** to create a strong digital-studio presence rather than a conventional agency template.

## **What BiduKo Does**

BiduKo is positioned as an **end-to-end digital partner** for clients who need strategy, design, development, and ongoing digital support.

The website presents services across:

* **Strategy**
* **UI/UX Design**
* **Web Experiences**
* **Digital Products**
* **Brand Systems**
* **Motion & Interaction**
* **Engineering**
* **Technical Support**

The goal is to show clients how these disciplines work together as **one connected digital process**, from the initial idea through launch and beyond.

## **Website Experience**

The homepage is designed as one continuous visual story rather than a collection of disconnected sections.

It includes:

* **Hero & Navigation** — introduces BiduKo and directs visitors toward starting a project or exploring the work.
* **Studio Statement** — communicates the creative philosophy and approach.
* **Services** — presents BiduKo's core capabilities through interactive typography and motion.
* **Selected Work** — showcases projects through an immersive project-card experience.
* **How We Work** — explains the six-step process through scroll-driven cards and transitions.
* **Launch Scene** — an animated rocket sequence representing taking a digital product from build to launch.
* **Brand Collaborations** — presents the kind of brands, teams, and creative environments BiduKo works around.
* **About BiduKo** — explains the team's disciplines, visual language, and long-term approach.
* **Questions & Contact** — provides additional information and a final path toward working together.

## **Architecture**

```text
BiduKo/
│
├── public/
│   ├── projects/
│   │   ├── project artwork
│   │   └── case-study assets
│   │
│   └── static assets
│
├── src/
│   │
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── project/
│   │       └── [slug]/
│   │           └── page.tsx
│   │
│   └── components/
│       │
│       └── biduko/
│           ├── sections.tsx
│           ├── site-data.ts
│           └── BiduKo experience components
│
├── LICENSE
├── README.md
├── package.json
└── package-lock.json
```

## **Technology**

The experience is built around **Next.js, React, TypeScript, GSAP, ScrollTrigger, Framer Motion and Lenis**, combining structured application architecture with a highly animated visual experience.

## **Design Direction**

The visual system is intentionally built around:

**Large editorial typography**
**Dark futuristic environments**
**Purple accent lighting**
**Glass and translucent interfaces**
**Scroll-driven storytelling**
**Kinetic typography**
**Interactive project presentation**
**Cinematic transitions**
**Responsive layouts**

The objective is to make BiduKo feel like a **digital product experience itself**, rather than simply a website describing digital services.

## **Copyright**

**Copyright © 2026 Deep Lambhade. All rights reserved.**

The original BiduKo design, content, structure, custom components, animations, visual system, and implementation are proprietary unless otherwise noted.

Third-party libraries and dependencies remain subject to their respective licenses.
