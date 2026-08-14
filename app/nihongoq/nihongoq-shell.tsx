import Link from "next/link";
import type { ReactNode } from "react";

type NihongoQShellProps = {
  children: ReactNode;
};

export function NihongoQShell({ children }: NihongoQShellProps) {
  return (
    <div className="nq-site" lang="en">
      <header className="nq-header">
        <Link className="nq-brand" href="/nihongoq" aria-label="NihongoQ home">
          <span className="nq-brand-mark" aria-hidden="true">あ</span>
          <span>NihongoQ</span>
        </Link>
        <nav aria-label="NihongoQ navigation">
          <Link href="/nihongoq">Overview</Link>
          <Link href="/nihongoq/support">Support</Link>
          <Link href="/nihongoq/privacy">Privacy</Link>
        </nav>
        <a className="nq-store-link" href="https://apps.apple.com/kr/app/nihongoq/id6797822086">
          App Store
        </a>
      </header>

      {children}

      <footer className="nq-footer">
        <div>
          <span className="nq-brand-mark" aria-hidden="true">あ</span>
          <div><strong>NihongoQ</strong><small>Practical Japanese for Travel</small></div>
        </div>
        <nav aria-label="NihongoQ footer navigation">
          <Link href="/nihongoq/support">Support</Link>
          <Link href="/nihongoq/privacy">Privacy Policy</Link>
          <a href="https://toolslab.co.kr/">ToolsLab</a>
        </nav>
        <p>© {new Date().getFullYear()} Jae Ho Min · ToolsLab</p>
      </footer>
    </div>
  );
}
