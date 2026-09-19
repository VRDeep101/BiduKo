import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SoundToggle } from "./sound-toggle";

interface FooterProps { }
export function Footer({}: FooterProps) { return <footer className="site-footer"><div className="footer-top"><Link href="/" className="footer-logo">BIDUKO<span>.</span></Link><p>Digital experiences for brands<br/>ready to move differently.</p><div className="footer-links"><Link href="/instagram">Instagram <ArrowUpRight size={13}/></Link><Link href="/linkedin">LinkedIn <ArrowUpRight size={13}/></Link><Link href="/contact">Contact <ArrowUpRight size={13}/></Link></div></div><div className="footer-bottom"><span>© 2026 BiduKo</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><SoundToggle /></div></footer>; }
