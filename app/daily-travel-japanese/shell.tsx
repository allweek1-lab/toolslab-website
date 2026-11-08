import Link from "next/link";
import type { ReactNode } from "react";
export function DailyJapaneseShell({children}:{children:ReactNode}) {
 return <div className="nq-site" lang="ko"><header className="nq-header">
 <Link className="nq-brand" href="/daily-travel-japanese"><img src="/daily-travel-japanese/icon.png" width="44" height="44" alt="" /><span>매일 여행 일본어</span></Link>
 <nav aria-label="Daily Travel Japanese navigation"><Link href="/daily-travel-japanese">소개 / About</Link><Link href="/daily-travel-japanese/support">지원 / Support</Link><Link href="/daily-travel-japanese/privacy">개인정보 / Privacy</Link></nav></header>
 {children}<footer className="nq-footer"><div><strong>Daily Travel Japanese</strong></div><nav><Link href="/daily-travel-japanese/support">Support</Link><Link href="/daily-travel-japanese/privacy">Privacy</Link><a href="https://toolslab.co.kr/">ToolsLab</a></nav><p>© 2026 Jae Ho Min · ToolsLab</p></footer></div>;
}
