import { InnerPage } from "@/components/biduko/inner-page";

export default function ServicesPage(){
  return <InnerPage eyebrow="Services" title="We build the whole digital side." intro="From the first interaction to the technical details after launch, BiduKo can own the experience end to end." items={[
    {meta:"Experience", title:"Websites & digital experiences", description:"Narrative-led sites, product marketing and interactive experiences that give a brand a clear point of view and a reason to keep exploring."},
    {meta:"Commerce", title:"E-commerce systems", description:"Flexible storefronts with thoughtful discovery, product storytelling, conversion paths and the technical foundations to grow."},
    {meta:"Identity", title:"Brand & visual systems", description:"A digital-ready identity system covering type, colour, motion, components and the small details that make the interface feel owned."},
    {meta:"Platforms", title:"Custom platforms", description:"Content, operations and customer-facing tools shaped around the actual workflow instead of forcing the business into a generic template."},
    {meta:"Launch", title:"Launch & technical management", description:"Deployment, domains, performance checks, analytics, redirects and the practical work that makes launch feel calm rather than chaotic."},
    {meta:"Care", title:"Ongoing maintenance", description:"Security, content changes, improvements and technical support after launch so the product keeps getting better instead of going stale."},
  ]}/>
}
