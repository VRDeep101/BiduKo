import { ContactForm } from "@/components/biduko/contact-form";
import { Footer } from "@/components/biduko/footer";
import { Navbar } from "@/components/biduko/navbar";

export default function ContactPage(){
  return (
    <main className="contact-page">
      <Navbar />
      <div className="inner-glow" />
      <div className="contact-layout">
        <header className="contact-head">
          <a href="/" className="inner-back">← BiduKo</a>
          <p className="eyebrow"><span className="eyebrow-dot" /> Start a project</p>
          <h1>Tell us what<br /><em>you’re building.</em></h1>
          <p>Short brief. Big possibilities.</p>
        </header>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
