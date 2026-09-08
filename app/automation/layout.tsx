import type { ReactNode } from "react";
import Link from "next/link";
import "./automation.css";

export default function AutomationLayout({ children }: { children: ReactNode }) {
  return <div className="automation-site">
    <a className="au-skip" href="#main-content">본문으로 이동</a>
    <header className="au-header"><Link className="au-brand" href="/">✺ ToolsLab<span>업무 자동화</span></Link><nav aria-label="자동화 서비스"><Link href="/automation">서비스 안내</Link><Link href="/automation/demo">직접 체험</Link><a className="au-nav-contact" href="/automation#contact">제작 문의 ↗</a></nav></header>
    {children}
    <footer className="au-footer"><Link className="au-brand" href="/">✺ ToolsLab</Link><p>반복은 도구에 맡기고, 필요한 일에 집중하세요.</p><a href="mailto:allweek@naver.com">allweek@naver.com</a><span>© 2026 ToolsLab</span></footer>
  </div>;
}

