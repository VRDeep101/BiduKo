import { InnerPage } from "@/components/biduko/inner-page";

export default function PrivacyPage(){
  return <InnerPage eyebrow="Legal" title="Privacy, without the drama." intro="A clear structure for the privacy policy content that should be replaced with your final legal wording before launch." items={[
    {meta:"Collection", title:"Data we collect", description:"Explain the information submitted through forms, the technical data required to operate the site and any optional analytics or marketing data."},
    {meta:"Purpose", title:"How we use data", description:"Describe the operational reasons data is used, including responding to enquiries, improving the experience and maintaining security."},
    {meta:"Tracking", title:"Cookies & analytics", description:"Document the tools used for analytics or preferences, what they collect and how visitors can control optional tracking."},
    {meta:"Rights", title:"Your rights", description:"Provide the applicable rights, contact route and process for requesting access, correction or deletion of personal information."},
  ]}/>
}
