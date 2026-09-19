"use client";
import { useState } from "react";

interface SoundToggleProps { }
export function SoundToggle({}: SoundToggleProps) { const [on, setOn] = useState(false); return <button className="sound-toggle" onClick={() => setOn(!on)} aria-label={on ? "Mute interaction sounds" : "Enable interaction sounds"}><span className={on ? "sound-bars is-on" : "sound-bars"}><i/><i/><i/></span><span>{on ? "Sound on" : "Sound off"}</span></button>; }
