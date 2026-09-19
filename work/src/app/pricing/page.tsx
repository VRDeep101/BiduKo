import { InnerPage } from "@/components/biduko/inner-page";

export default function PricingPage(){
  return <InnerPage eyebrow="Pricing" title="Scope first. Clear proposal second." intro="We are not forcing every business into a fixed box. Pricing follows the experience, platform and support your project actually needs." items={[
    {meta:"Scope", title:"Discovery & scope", description:"A focused definition of the audience, goals, content, functionality and technical constraints before production begins."},
    {meta:"Experience", title:"Design & interaction", description:"Visual direction, responsive layouts, components, interaction states and the motion language that gives the product character."},
    {meta:"Build", title:"Development & launch", description:"Production implementation, integrations, QA, deployment and the handover details required for a confident release."},
    {meta:"Care", title:"Maintenance & support", description:"Optional ongoing care for content changes, fixes, security, monitoring and continuous improvements after launch."},
  ]}/>
}
