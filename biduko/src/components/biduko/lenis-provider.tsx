"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.075, smoothWheel: true });
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return null;
}
