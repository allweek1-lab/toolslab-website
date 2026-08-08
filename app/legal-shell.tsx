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
        <a className="brand" href="https://toolslab.co.kr/" aria-label="툴스랩 회사 홈페이지로 이동">
          <span className="brand-mark">✺</span>
          <span>ToolsLab</span>
        </a>
        <nav aria-label="정책 및 지원 메뉴">
          <Link href="/support">지원</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
          <Link href="/terms">이용약관</Link>
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
        <a href="https://toolslab.co.kr/">회사 홈페이지</a>
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
