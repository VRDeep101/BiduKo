export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  index: string;
  accent: string;
}

export const projects: Project[] = [
  { slug: "orbit-commerce", title: "Orbit Commerce", category: "E-commerce", description: "A conversion-led storefront built around motion, product depth and tactile browsing.", index: "01", accent: "violet" },
  { slug: "northstar", title: "Northstar", category: "Websites", description: "A cinematic brand platform for a company moving at the speed of culture.", index: "02", accent: "fuchsia" },
  { slug: "monument", title: "Monument", category: "Branding", description: "A visual identity system designed to feel as considered in motion as it does still.", index: "03", accent: "indigo" },
  { slug: "atlas-os", title: "Atlas OS", category: "Custom Platforms", description: "A modular digital platform connecting content, operations and customer experience.", index: "04", accent: "purple" },
];

export const services = [
  { number: "01", title: "Digital Experiences", copy: "Websites and platforms that turn attention into action." },
  { number: "02", title: "E-commerce", copy: "Commerce systems designed around discovery, trust and conversion." },
  { number: "03", title: "Brand Systems", copy: "Identity, motion and digital language that make brands memorable." },
  { number: "04", title: "Technical Management", copy: "Launch, infrastructure, maintenance and everything technical after it." },
];

export const process = [
  ["01", "Discover", "We understand the business, audience and ambition."],
  ["02", "Strategy", "We turn the brief into a clear digital direction."],
  ["03", "Design", "We shape the visual system, interaction and experience."],
  ["04", "Build", "We engineer the experience for real-world performance."],
  ["05", "Launch", "We ship, test and make the transition feel effortless."],
  ["06", "Support", "We stay close after launch with ongoing technical care."],
] as const;

export const collaborators = ["NOVA", "ARC", "MONO", "AETHER", "FORM", "KITE", "NORTH", "VANTA", "LUMA", "ORBIT"];
