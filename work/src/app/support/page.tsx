import { InnerPage } from "@/components/biduko/inner-page";

export default function SupportPage(){
  return <InnerPage eyebrow="Support" title="We don't disappear after launch." intro="Keep the technical side in one place with ongoing care for your digital presence." items={[
    {meta:"Infrastructure", title:"Domain management", description:"Keep renewals, DNS and the practical domain layer organised so small issues do not become launch-day surprises."},
    {meta:"Maintenance", title:"Website maintenance", description:"Content updates, bug fixes, component improvements and small experience changes without reopening an entire project."},
    {meta:"Security", title:"Security & updates", description:"Stay on top of dependencies, hosting configuration and routine checks that protect the experience over time."},
    {meta:"Response", title:"Technical support", description:"A clear place to bring issues, questions and improvement ideas when something needs attention."},
    {meta:"Roadmap", title:"Maintenance plans", description:"A practical monthly rhythm for teams that want their site to evolve instead of waiting for the next rebuild."},
  ]}/>
}
