import type { Metadata } from "next";
import Link from "next/link";
import styles from "./source-audit.module.css";

export const metadata: Metadata = {
  title: "7 Product Data Conflicts to Check Before Rewriting an Amazon Listing | Tools Lab",
  description: "A practical source-audit checklist for Amazon, TikTok Shop and Shopify listings: pack count, variants, claims, units, directions and policy details.",
  alternates: { canonical: "/insights/listing-source-audit" },
};

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS5ZAi6gEM6MM0kwVl0LV8_aqXO-IRBs8RkvMJaGtrE_RnjQ/viewform";
const checks = [
  ["Pack count", "Confirm that the title, variant selector, package image and fulfillment data describe the same quantity."],
  ["Dimensions and units", "Normalize inches, centimeters, ounces and milliliters, then identify which unit the marketplace expects."],
  ["Variant names", "Match color, size and bundle names across source files so customers receive the option they selected."],
  ["Ingredients or materials", "Separate a complete composition statement from highlighted ingredients and marketing shorthand."],
  ["Claims and evidence", "Mark every performance, health or sustainability claim as verified, unsupported or awaiting evidence."],
  ["Directions and compatibility", "Check usage steps, device fit, warnings and replacement intervals against the manual and packaging."],
  ["Shipping and returns", "Resolve conflicting thresholds, delivery regions and return windows before they appear in customer-facing copy."],
];

export default function ListingSourceAuditInsight() {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: "7 Product Data Conflicts to Check Before Rewriting an Amazon Listing", author: { "@type": "Organization", name: "Tools Lab" }, datePublished: "2026-09-10", mainEntityOfPage: "https://toolslab.co.kr/insights/listing-source-audit" };
  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className={styles.header}><Link href="/" className={styles.brand}><span>✺</span> ToolsLab</Link><Link href="/agency-partner">For agencies</Link></header>
    <article>
      <div className={styles.hero}>
        <p className={styles.kicker}>PRODUCT LISTING SOURCE QA</p>
        <h1>Before you rewrite an Amazon listing, check these 7 source conflicts.</h1>
        <p className={styles.lead}>Better copy cannot fix contradictory product data. Review these seven areas before drafting titles, bullets or creator briefs.</p>
        <div className={styles.actions}><a href="/tools-lab-listing-source-audit-sample.pdf" target="_blank" rel="noreferrer">View the one-page sample →</a><a href={formUrl} target="_blank" rel="noreferrer">Request a free 3-point audit</a></div>
      </div>
      <section className={styles.intro}><p>A source audit compares the product page, package, manual, specification sheet, SKU table and approved evidence. The goal is to create one working set of facts before channel-specific copy is written.</p></section>
      <ol className={styles.checks}>{checks.map(([title, body], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{body}</p></div></li>)}</ol>
      <section className={styles.decision}><p className={styles.kicker}>A SIMPLE DECISION RULE</p><h2>Verified facts become copy. Unclear facts become questions.</h2><p>If a detail cannot be traced to a reliable source, keep it out of the final listing until the client confirms it. This protects the brand, the agency and the customer.</p></section>
      <section className={styles.cta}><h2>Have a listing with conflicting source material?</h2><p>Send one public product URL. Tools Lab will identify three priority issues before you choose a paid scope.</p><a href={formUrl} target="_blank" rel="noreferrer">Request the free mini audit →</a></section>
    </article>
    <footer><Link href="/">Tools Lab</Link><a href="mailto:allweek@naver.com">allweek@naver.com</a></footer>
  </main>;
}
