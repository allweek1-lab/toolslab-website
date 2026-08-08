import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads 이용약관 | ToolsLab",
  description: "Trend Threads 서비스의 성격과 이용 조건을 안내합니다.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="TERMS OF SERVICE"
      title="Trend Threads 이용약관"
      summary="Trend Threads를 이용하기 전에 서비스의 성격과 이용 조건을 확인해 주세요."
    >
      <div className="policy-meta">
        <span>운영주체: 툴스랩 (ToolsLab)</span>
        <span>시행일: 2026년 8월 8일</span>
      </div>

      <PolicySection title="1. 서비스 성격">
        <p>Trend Threads는 공식 Threads API로 제공되는 공개 콘텐츠를 분야·언어·기간별로 정리하고 원문으로 연결하는 비공식 탐색 도구입니다. Meta 또는 Threads와 제휴하거나 공식 승인을 받은 서비스라고 표시하지 않습니다.</p>
      </PolicySection>

      <PolicySection title="2. 자체 지표 안내">
        <p>앱의 급상승 점수, 상승률, 순위와 그래프는 검색 결과의 위치, 반복 노출, 신선도 등 앱이 관측한 신호로 계산한 자체 지표입니다. 공개 조회수, 투자 지표, 사실의 정확성이나 Threads의 공식 순위를 의미하지 않습니다.</p>
      </PolicySection>

      <PolicySection title="3. 계정과 기능">
        <p>공개 트렌드 탐색은 로그인 없이 이용할 수 있습니다. 클라우드 저장, 신고 처리, 알림 및 설정 동기화에는 계정이 필요할 수 있습니다. 사용자는 정확한 계정 정보를 유지하고 자신의 인증 정보를 안전하게 관리해야 합니다.</p>
      </PolicySection>

      <PolicySection title="4. 콘텐츠와 이용 제한">
        <p>게시물의 권리는 원 작성자 또는 해당 권리자에게 있습니다. 사용자는 불법 행위, 권리 침해, 괴롭힘, 위협, 성착취, 혐오, 스팸, 시스템 악용, 비정상적인 자동 요청 또는 서비스 운영을 방해하는 행위를 해서는 안 됩니다.</p>
        <p>부적절한 게시물은 앱에서 신고하거나 작성자를 숨길 수 있으며, 운영자는 안전과 서비스 보호를 위해 노출 제한 또는 이용 제한 조치를 할 수 있습니다.</p>
      </PolicySection>

      <PolicySection title="5. 외부 서비스와 기능 변경">
        <p>Threads 원문은 외부 앱 또는 브라우저에서 열리며 이후 이용에는 해당 서비스의 약관과 정책이 적용됩니다. 공식 API 상태, 게시물의 삭제·비공개 전환, 운영 안전장치에 따라 일부 콘텐츠나 기능이 일시 중단될 수 있습니다.</p>
        <p>초기 서비스에는 결제 기능과 실제 번역 제공자가 연결되어 있지 않습니다. 새로운 유료 기능을 제공할 경우 적용 조건과 가격을 별도로 안내합니다.</p>
      </PolicySection>

      <PolicySection title="6. 책임 범위">
        <p>서비스는 트렌드 탐색을 돕기 위한 정보 도구이며 법률·의료·투자 등 전문적인 판단을 대신하지 않습니다. 툴스랩은 안정적인 제공을 위해 노력하지만 외부 서비스 중단이나 공개 콘텐츠 변경으로 모든 정보의 계속적인 제공을 보장할 수는 없습니다.</p>
      </PolicySection>

      <PolicySection title="7. 계정 종료와 문의">
        <p>사용자는 앱 설정에서 계정 삭제를 시작할 수 있습니다. 약관 또는 정책 관련 문의는 <a className="inline-link" href="mailto:allweek@naver.com">allweek@naver.com</a> 또는 <a className="inline-link" href="/support">지원 페이지</a>를 이용해 주세요.</p>
      </PolicySection>

      <PolicySection title="8. 약관 변경">
        <p>서비스 내용이나 관련 요구사항의 변경에 따라 이 약관을 수정할 수 있습니다. 이용자에게 중요한 변경은 시행 전에 앱 또는 이 페이지를 통해 안내합니다.</p>
      </PolicySection>
    </LegalShell>
  );
}
