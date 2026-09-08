import Link from "next/link";
import type { ReactNode } from "react";

export function PasswordQShell({ children }: { children: ReactNode }) {
  return (
    <div className="pq-site">
      <header className="pq-header">
        <Link className="pq-brand" href="/passwordq/support" aria-label="PasswordQ support home">
          <span className="pq-brand-mark" aria-hidden="true">Q</span>
          <span>PasswordQ</span>
        </Link>
        <nav aria-label="PasswordQ navigation">
          <Link href="/passwordq/support">Support / 지원</Link>
          <Link href="/passwordq/privacy">Privacy / 개인정보</Link>
        </nav>
        <a className="pq-tools-link" href="https://toolslab.co.kr/">ToolsLab</a>
      </header>

      {children}

      <footer className="pq-footer">
        <div>
          <span className="pq-brand-mark" aria-hidden="true">Q</span>
          <div><strong>PasswordQ</strong><small>Private password vault for iPhone</small></div>
        </div>
        <nav aria-label="PasswordQ footer navigation">
          <Link href="/passwordq/support">Support</Link>
          <Link href="/passwordq/privacy">Privacy Policy</Link>
          <a href="https://toolslab.co.kr/">ToolsLab</a>
        </nav>
        <p>© {new Date().getFullYear()} Jae Ho Min · ToolsLab</p>
      </footer>
    </div>
  );
}
