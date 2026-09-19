"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

interface NavbarProps { }

export function Navbar({}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const links = ["Services", "Projects", "About", "Pricing", "Support", "FAQ"];
  return <>
    <header className="site-nav"><Link href="/" className="brand-mark">BIDUKO<span>.</span></Link><nav className="desktop-nav">{links.map((link) => <Link key={link} href={`/${link.toLowerCase()}`}>{link}</Link>)}</nav><div className="nav-actions"><button className="theme-toggle" aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>{resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}</button><Link href="/contact" className="nav-cta">Start a project <ArrowUpRight size={15} /></Link><button className="menu-button" aria-label="Open menu" onClick={() => setOpen(true)}><span /><span /></button></div></header>
    <div className={`menu-overlay ${open ? "is-open" : ""}`}><div className="menu-top"><span>BIDUKO / MENU</span><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div><nav>{links.map((link, i) => <Link key={link} href={`/${link.toLowerCase()}`} onClick={() => setOpen(false)}><small>0{i + 1}</small>{link}</Link>)}</nav><Link href="/contact" onClick={() => setOpen(false)} className="menu-project">Start a project <ArrowUpRight /></Link></div>
  </>;
}
