"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const id = window.setTimeout(() => setVisible(false), 1450); return () => window.clearTimeout(id); }, []);
  if (!visible) return null;
  return <div className="preloader" aria-label="Loading BiduKo" role="status"><div className="preloader-orb"><span /><span /><span /></div><div className="preloader-brand">BIDUKO<span>.</span></div><div className="preloader-line"><i /></div></div>;
}
