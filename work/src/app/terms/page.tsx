import { InnerPage } from "@/components/biduko/inner-page";

export default function TermsPage(){
  return <InnerPage eyebrow="Legal" title="Terms & conditions." intro="A clear information architecture for the terms content that should be replaced with your final legal wording before launch." items={[
    {meta:"Website", title:"Using this website", description:"Set expectations for access, acceptable use, availability and the boundaries around the information published on the site."},
    {meta:"Projects", title:"Projects & proposals", description:"Explain how proposals, approvals, scope changes, timelines and project communications are handled."},
    {meta:"Ownership", title:"Intellectual property", description:"Clarify ownership of project deliverables, client materials, third-party assets and reusable systems or components."},
    {meta:"Support", title:"Support & third parties", description:"Define support expectations and the role of hosting providers, integrations, payment services and other third-party systems."},
  ]}/>
}
