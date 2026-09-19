export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  accent: string;
}

export const projects: Project[] = [
  { slug: "orbit-commerce", title: "Orbit Commerce", category: "E-commerce", description: "A conversion-led storefront built around motion, product depth and tactile browsing.", accent: "violet" },
  { slug: "northstar", title: "Northstar", category: "Websites", description: "A cinematic brand platform for a company moving at the speed of culture.", accent: "fuchsia" },
  { slug: "monument", title: "Monument", category: "Branding", description: "A visual identity system designed to feel as considered in motion as it does still.", accent: "indigo" },
  { slug: "atlas-os", title: "Atlas OS", category: "Custom Platforms", description: "A modular digital platform connecting content, operations and customer experience.", accent: "purple" },
];

export const services = [
  { title: "Digital Experiences", copy: "Websites and platforms that turn attention into action." },
  { title: "E-commerce", copy: "Commerce systems designed around discovery, trust and conversion." },
  { title: "Brand Systems", copy: "Identity, motion and digital language that make brands memorable." },
  { title: "Technical Management", copy: "Launch, infrastructure, maintenance and everything technical after it." },
];

export const process = [
  ["Discover", "We understand the business, audience and ambition."],
  ["Strategy", "We turn the brief into a clear digital direction."],
  ["Design", "We shape the visual system, interaction and experience."],
  ["Build", "We engineer the experience for real-world performance."],
  ["Launch", "We ship, test and make the transition feel effortless."],
  ["Support", "We stay close after launch with ongoing technical care."],
] as const;

export const collaborators = ["NOVA", "ARC", "MONO", "AETHER", "FORM", "KITE", "NORTH", "VANTA", "LUMA", "ORBIT"];
