import { Cursor } from "@/components/biduko/cursor";
import { Footer } from "@/components/biduko/footer";
import { Hero } from "@/components/biduko/hero";
import { Navbar } from "@/components/biduko/navbar";
import { Preloader } from "@/components/biduko/preloader";
import { AboutSection, CollaborationWall, FAQPreview, FinalCTA, ProcessSection, ProjectsSection, ServicesSection, Statement, WhySection } from "@/components/biduko/sections";

export default function Home() {
  return <main className="site-root"><Preloader/><Cursor/><Navbar/><Hero/><Statement/><ServicesSection/><ProjectsSection/><ProcessSection/><CollaborationWall/><AboutSection/><WhySection/><FAQPreview/><FinalCTA/><Footer/></main>;
}
