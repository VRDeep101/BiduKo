import { InnerPage } from "@/components/biduko/inner-page";

export default function FAQPage(){
  return <InnerPage eyebrow="FAQ" title="The useful answers." intro="A few things clients usually want to know before we start." items={[
    {meta:"Projects", title:"What projects do you take?", description:"Websites, e-commerce, brand systems and custom digital platforms where design quality and implementation quality need to meet."},
    {meta:"Infrastructure", title:"Can you manage domains and hosting?", description:"Yes. Domain management, deployment, hosting configuration and technical maintenance can stay with the same team."},
    {meta:"After launch", title:"What happens after launch?", description:"We can stay involved for maintenance, analytics-informed iteration, new sections, fixes and ongoing technical support."},
    {meta:"Proposals", title:"How does pricing work?", description:"We scope the work first, then provide a clear proposal based on the actual experience, integrations and support level."},
    {meta:"Content", title:"Can I replace content later?", description:"Yes. We can build content structures and components so the site can evolve without redesigning the whole system."},
  ]}/>
}
