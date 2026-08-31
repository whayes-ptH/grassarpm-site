import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

import Image from "next/image";
import Link from "next/link";

const capabilities = [
  { n: "01", title: "Corporate finance", text: "Capital structures and financing pathways designed around enterprise objectives, constraints and timing." },
  { n: "02", title: "Strategic transactions", text: "Practical support for acquisitions, divestitures, reverse mergers and cross-border combinations." },
  { n: "03", title: "Regulatory readiness", text: "Disciplined coordination of documentation, advisers and filings across complex regulated markets." },
  { n: "04", title: "Risk architecture", text: "Insurance, reinsurance and financial assurance strategies that protect execution and enterprise value." },
];

const portfolio = [
  ["Safe Harbour Fund", "Investment platform", "Luxembourg"],
  ["Nexus Reinsurance", "Reinsurance intermediary", "The Bahamas"],
  ["Sino Secure", "Financial assurance", "Australia"],
  ["A.C. de Réassurance", "Reinsurance platform", "Belgium"],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/hero.webp" alt="European waterfront financial district at blue hour" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow light">Independent · Cross-border · Disciplined</p>
          <h1>Capital strategy<br />for complex growth.</h1>
          <p className="hero-copy">We structure finance, strategic transactions and risk solutions for enterprises navigating regulated markets.</p>
          <div className="hero-actions"><Link className="button" href="/contact">Discuss an opportunity <span>↗</span></Link><Link className="text-link light" href="#capabilities">Explore capabilities <span>↓</span></Link></div>
        </div>
        <div className="hero-proof"><span>European base</span><span>Global mandate</span><span>Senior-led execution</span></div>
      </section>

      <section className="intro section" id="about">
        <div className="container split-intro">
          <div><p className="eyebrow">Prime perspective</p><h2>Clarity where capital, regulation and risk converge.</h2></div>
          <div><p className="lead">Grassar Prime Management works with enterprises, investors and specialist advisers on consequential financial decisions.</p><p>Our model is deliberately focused: senior attention, aligned expertise and a clear path from first analysis to executable structure.</p><Link className="text-link" href="/contact">Meet the team through an introductory call <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section section-ink" id="capabilities">
        <div className="container"><div className="section-heading inverse"><p className="eyebrow light">Capabilities</p><h2>Built for decisions that do not fit a template.</h2><p>Integrated commercial, financial and risk thinking—applied with discipline.</p></div>
          <div className="capability-grid">{capabilities.map((item) => <article key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="container"><div className="section-heading"><p className="eyebrow">Our approach</p><h2>One accountable path from question to execution.</h2></div>
          <ol className="process"><li><span>01</span><div><h3>Frame</h3><p>Define the commercial objective, constraints, stakeholders and evidence required.</p></div></li><li><span>02</span><div><h3>Structure</h3><p>Compare viable routes and align capital, regulatory and risk considerations.</p></div></li><li><span>03</span><div><h3>Execute</h3><p>Coordinate the workstream, documentation and specialist advisers through close.</p></div></li></ol>
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <div className="container"><div className="section-heading"><p className="eyebrow">Selected platform interests</p><h2>Connected expertise across finance and risk.</h2></div>
          <div className="portfolio-list">{portfolio.map(([name,type,place],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p>{type}</p><small>{place}</small></article>)}</div>
          <p className="disclaimer">References identify strategic areas and associated platforms; they do not constitute an offer, recommendation or performance representation.</p>
        </div>
      </section>

      <section className="cta-band"><div className="container"><p className="eyebrow light">Start with the real question</p><h2>Bring us the situation, not a prepared answer.</h2><Link className="button button-light" href="/contact">Start a confidential conversation <span>↗</span></Link></div></section>
    </>
  );
}
