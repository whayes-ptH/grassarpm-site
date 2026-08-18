import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Logo /><p>Independent thinking for complex capital, transactions and risk.</p></div>
        <div><h3>Explore</h3><Link href="/#capabilities">Capabilities</Link><Link href="/#portfolio">Portfolio</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Legal</h3><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-of-service">Terms of use</Link></div>
        <div><h3>Netherlands office</h3><p>Zuidzijde Haven 39 A<br />Unit 206 C<br />Bergen op Zoom</p><a href="tel:+3197010205845">+31 970 102 05845</a></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} Grassar Prime Management N.V.</p><p>Professional services are subject to engagement terms and applicable regulation.</p></div>
    </footer>
  );
}
