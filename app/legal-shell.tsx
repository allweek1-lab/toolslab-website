import Link from "next/link";
import type { ReactNode } from "react";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export function LegalShell({ eyebrow, title, summary, children }: LegalShellProps) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a className="brand" href="https://toolslab.co.kr/" aria-label="Open the ToolsLab company website">
          <span className="brand-mark">✺</span>
          <span>ToolsLab</span>
        </a>
        <nav aria-label="Policy and support navigation">
          <Link href="/support">Support / 지원</Link>
          <Link href="/privacy">Privacy / 개인정보</Link>
          <Link href="/terms">Terms / 약관</Link>
        </nav>
      </header>

      <article className="legal-document">
        <div className="legal-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>
        <div className="legal-content">{children}</div>
      </article>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} ToolsLab</span>
        <a href="https://toolslab.co.kr/">Company website / 회사 홈페이지</a>
      </footer>
    </main>
  );
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
