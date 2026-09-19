import { InnerPage } from "@/components/biduko/inner-page";

export default function AboutPage(){
  return <InnerPage eyebrow="About" title="Small team mindset. Big digital ambition." intro="BiduKo exists to make the complicated side of digital feel simple, beautiful and considered." items={[
    {meta:"Ownership", title:"End-to-end thinking", description:"Strategy, design and engineering stay close enough to influence one another instead of being thrown over separate walls."},
    {meta:"Craft", title:"Design before decoration", description:"We start with hierarchy, interaction and story, then use motion, type and visual detail to make the system feel alive."},
    {meta:"Technology", title:"The tech disappears", description:"The stack matters, but the user should feel the experience — not the implementation underneath it."},
    {meta:"Partnership", title:"Support that continues", description:"Launch is a milestone, not the end. We stay available for maintenance, iteration and the next useful idea."},
  ]}/>
}
