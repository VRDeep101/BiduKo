"use client";

import { useEffect, useRef } from "react";

interface CursorProps { enabled?: boolean }

export function Cursor({ enabled = true }: CursorProps) {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!enabled || window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const d = dot.current; const r = ring.current;
    if (!d || !r) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; d.style.transform = `translate3d(${mx}px,${my}px,0)`; };
    const loop = () => { rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13; r.style.transform = `translate3d(${rx}px,${ry}px,0)`; };
    const hover = (e: Event) => { const target = (e.target as HTMLElement).closest("a,button,[data-cursor]"); r.classList.toggle("cursor-active", Boolean(target)); };
    window.addEventListener("mousemove", move); document.addEventListener("mouseover", hover); gsapLoop(loop);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", hover); cancelAnimationFrame(frameId); };
  }, [enabled]);
  let frameId = 0;
  const gsapLoop = (fn: () => void) => { const run = () => { fn(); frameId = requestAnimationFrame(run); }; frameId = requestAnimationFrame(run); };
  return <><div ref={ring} className="cursor-ring" aria-hidden="true" /><div ref={dot} className="cursor-dot" aria-hidden="true" /></>;
}
