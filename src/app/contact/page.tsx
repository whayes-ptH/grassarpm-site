import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { alternates: { canonical: "/contact" }, title: "Contact", description: "Start a confidential conversation with Grassar Prime Management." };

export default function ContactPage() {
  return <section className="page-hero"><div className="container contact-layout"><div><p className="eyebrow">Contact</p><h1>Let’s examine the opportunity.</h1><p className="lead">Share the situation, the objective and the timing. A senior member of our team will respond directly.</p><div className="contact-details"><p><strong>Netherlands</strong><br />Zuidzijde Haven 39 A, Unit 206 C<br />Bergen op Zoom</p><p><strong>Telephone</strong><br /><a href="tel:+3197010205845">+31 970 102 05845</a></p></div></div><ContactForm /></div></section>;
}
