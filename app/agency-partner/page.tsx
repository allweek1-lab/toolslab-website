import type { Metadata } from "next";
import Link from "next/link";
import styles from "./agency-partner.module.css";

export const metadata: Metadata = {
  title: "White-label Product Listing Support for Ecommerce Agencies | Tools Lab",
  description:
    "Flexible white-label product listing production for Amazon, TikTok Shop, Shopify and cross-border ecommerce agencies.",
  alternates: { canonical: "/agency-partner" },
  openGraph: {
    title: "White-label Product Listing Support | Tools Lab",
    description: "Add listing production capacity without adding headcount. Start with one fixed-scope paid pilot.",
    type: "website",
  },
};

const inquiryHref =
  "https://docs.google.com/forms/d/e/1FAIpQLSdS5ZAi6gEM6MM0kwVl0LV8_aqXO-IRBs8RkvMJaGtrE_RnjQ/viewform";

export default function AgencyPartnerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White-label Product Listing Production",
    provider: { "@type": "Organization", name: "Tools Lab", url: "https://toolslab.co.kr" },
    areaServed: "Worldwide",
    serviceType: "Ecommerce product listing production",
    offers: {
      "@type": "Offer",
      price: "129",
      priceCurrency: "USD",
      description: "One-SKU fixed-scope paid pilot",
    },
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className={styles.header}>
        <Link href="/" className={styles.brand}><span>✺</span> ToolsLab</Link>
        <a href={inquiryHref} target="_blank" rel="noreferrer" className={styles.headerCta}>Discuss a pilot</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>FOR AMAZON · TIKTOK SHOP · SHOPIFY AGENCIES</p>
          <h1>Add product-listing capacity without adding headcount.</h1>
          <p className={styles.lead}>Tools Lab reviews the source, structures the product facts and delivers editable English listing copy under your agency workflow. Your client relationship stays with you.</p>
          <div className={styles.actions}>
            <a href={inquiryHref} target="_blank" rel="noreferrer" className={styles.primary}>Start one paid pilot <span>→</span></a>
            <a href="/tools-lab-listing-source-audit-sample.pdf" target="_blank" rel="noreferrer" className={styles.secondary}>View the audit sample</a>
          </div>
          <p className={styles.microcopy}>One SKU · fixed scope · no retainer · editable handoff</p>
        </div>
        <aside className={styles.pilotCard} aria-label="Pilot scope">
          <p>ONE-SKU PILOT</p>
          <div className={styles.price}><strong>$129</strong><span>USD</span></div>
          <ul>
            <li>Source and claim review</li>
            <li>Three title directions</li>
            <li>Five benefit bullets</li>
            <li>Description and FAQ</li>
            <li>Editable document + one revision</li>
          </ul>
          <small>Typical delivery: 3 business days after complete source files are received.</small>
        </aside>
      </section>

      <section className={styles.trustStrip} aria-label="Working terms">
        <span>White-label ready</span>
        <span>No direct client contact</span>
        <span>Source-backed copy</span>
        <span>Fixed-scope quote</span>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>WHAT YOU RECEIVE</p>
          <h2>A clean production handoff your team can review and brand.</h2>
        </div>
        <div className={styles.deliverables}>
          <article><b>01</b><h3>Source QA</h3><p>A fact table separates verified product details, unclear claims and questions that need client confirmation.</p></article>
          <article><b>02</b><h3>Listing copy</h3><p>Title, benefit bullets, description and FAQ are written for the requested marketplace and audience.</p></article>
          <article><b>03</b><h3>Editable handoff</h3><p>Your team receives a working document with decisions, open questions and copy ready for internal review.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.process}`}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>HOW THE PILOT WORKS</p>
          <h2>One SKU is enough to test the workflow.</h2>
        </div>
        <ol>
          <li><span>1</span><div><h3>Send the source</h3><p>Share a public product URL, target marketplace and requested deadline.</p></div></li>
          <li><span>2</span><div><h3>Confirm the scope</h3><p>We reply with missing-source questions and a fixed deliverable list before payment.</p></div></li>
          <li><span>3</span><div><h3>Receive and review</h3><p>We deliver the editable file to your agency contact and complete the included revision.</p></div></li>
        </ol>
      </section>

      <section className={styles.fit}>
        <div><p className={styles.kicker}>GOOD FIT</p><h2>Use Tools Lab when your strategist has the direction but your production queue is full.</h2></div>
        <ul>
          <li>New seller or brand launches</li>
          <li>Large catalog cleanup</li>
          <li>Korean source to English listing work</li>
          <li>Listing and creator-brief fact alignment</li>
        </ul>
      </section>

      <section className={styles.faq}>
        <div className={styles.sectionHeading}><p className={styles.kicker}>WORKING TERMS</p><h2>Clear boundaries from the first pilot.</h2></div>
        <div className={styles.faqGrid}>
          <article><h3>Who owns the client relationship?</h3><p>Your agency does. Tools Lab communicates with the named agency contact unless you explicitly request another workflow.</p></article>
          <article><h3>Can the handoff use our brand?</h3><p>Yes. Supply your document template or brand name before production, and we will prepare the agreed white-label handoff.</p></article>
          <article><h3>Do you invent claims or performance figures?</h3><p>No. Unverified claims are flagged as questions instead of being presented as facts.</p></article>
          <article><h3>What happens after the pilot?</h3><p>If the workflow fits, we quote the next batch by SKU count, source condition and turnaround.</p></article>
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.kicker}>TEST THE WORKFLOW</p>
        <h2>Send one public product URL.<br />We will define the paid pilot before work begins.</h2>
        <a href={inquiryHref} target="_blank" rel="noreferrer" className={styles.primary}>Request a fixed-scope quote <span>→</span></a>
        <p className={styles.readMore}><Link href="/insights/listing-source-audit">Read the 7-point source-audit checklist →</Link></p>
      </section>

      <footer className={styles.footer}>
        <Link href="/" className={styles.brand}><span>✺</span> ToolsLab</Link>
        <a href="mailto:allweek@naver.com">allweek@naver.com</a>
        <span>© 2026 Tools Lab</span>
      </footer>
    </main>
  );
}
