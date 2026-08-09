import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Support | ToolsLab",
  description: "Support for Trend Threads topic discovery, saved topics, the official Threads handoff, and optional accounts.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/support" },
};

export default function SupportPage() {
  return (
    <LegalShell eyebrow="TREND THREADS SUPPORT" title="Trend Threads Support" summary="English is the primary support language. Korean guidance is provided below.">
      <div lang="en">
      <PolicySection title="Contact">
        <dl className="contact-list">
          <div><dt>Operator</dt><dd>ToolsLab (툴스랩)</dd></div>
          <div><dt>Email</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
          <div><dt>Phone</dt><dd><a href="tel:07043503571">+82 70-4350-3571</a></dd></div>
        </dl>
        <p>Include the device model, iOS version, app version, affected screen, and approximate time. Do not send a password, authentication code, or Threads access token.</p>
      </PolicySection>

      <PolicySection title="Actions available in the app">
        <ul>
          <li>Save or remove a topic from a Home, Trends, or Search card.</li>
          <li>Open the underlying topic on the official Threads search page.</li>
          <li>Delete recent searches and saved local activity from Settings.</li>
          <li>Delete cached aggregate signals from Settings.</li>
          <li>Export or delete an optional account from the account menu.</li>
        </ul>
      </PolicySection>

      <PolicySection title="If the app says that the live feed is being prepared">
        <p>If official API approval, collection freshness, retention, or minimum-sample eligibility cannot be verified, the app does not substitute stale posts or fabricated data. Check the network and app version, then select “Check again.”</p>
        <p>Approval or initial data accumulation may still be in progress and cannot be fixed on the device. If the status continues, email a screenshot and the approximate time.</p>
      </PolicySection>

      <PolicySection title="Service description">
        <p>Trend Threads is an independent topic-discovery tool, not a client that copies Threads posts. Scores are internal observation bands, not view counts or official Threads rankings. Core browsing, search, saving, and the official Threads handoff do not require login.</p>
      </PolicySection>

      <PolicySection title="Policy documents">
        <p><a className="inline-link" href="/data-deletion">Account and Data Deletion</a></p>
        <p><a className="inline-link" href="/privacy">Privacy Policy</a></p>
        <p><a className="inline-link" href="/terms">Terms of Service</a></p>
      </PolicySection>
      </div>

      <div className="language-divider" lang="ko">
        <h2>한국어 지원 안내</h2>
      </div>

      <div lang="ko">
      <PolicySection title="연락처">
        <dl className="contact-list">
          <div><dt>운영</dt><dd>툴스랩 (ToolsLab)</dd></div>
          <div><dt>이메일</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
          <div><dt>전화</dt><dd><a href="tel:07043503571">070-4350-3571</a></dd></div>
        </dl>
        <p>이메일 문의 시 기기 모델, iOS 버전, 앱 버전, 발생한 화면과 시각을 적어주시면 확인에 도움이 됩니다. 비밀번호, 인증 코드 또는 Threads 액세스 토큰은 보내지 마세요.</p>
      </PolicySection>

      <PolicySection title="앱에서 직접 처리할 수 있는 항목">
        <ul>
          <li>주제 저장·해제: 홈·트렌드·검색 카드의 북마크</li>
          <li>Threads에서 실제 글 보기: 주제 카드의 Threads 이동 버튼</li>
          <li>최근 검색·저장 주제 등 기기 기록 삭제: 설정 → 로컬 활동 데이터 삭제</li>
          <li>오프라인 집계 신호 삭제: 설정 → 저장된 집계 비우기</li>
          <li>선택적 계정 삭제·내보내기: 설정의 계정 메뉴</li>
        </ul>
      </PolicySection>

      <PolicySection title="‘실시간 피드를 준비하고 있습니다’가 표시될 때">
        <p>공식 API 권한, 최신 수집 또는 최소 표본을 확인할 수 없으면 앱은 오래된 게시물이나 임시 데이터를 대신 보여주지 않습니다. 인터넷 연결과 최신 앱 버전을 확인한 뒤 ‘다시 확인’을 눌러 주세요.</p>
        <p>운영 승인이나 초기 데이터 누적이 진행 중이면 사용자 기기에서 해결할 수 없는 준비 단계일 수 있습니다. 계속 표시되면 화면과 발생 시각을 지원 이메일로 보내 주세요.</p>
      </PolicySection>

      <PolicySection title="서비스 안내">
        <p>Trend Threads는 게시물을 복제하는 Threads 클라이언트가 아니라, 충분한 표본이 모인 주제의 순위와 상승 이유를 보여주는 비공식 발견 도구입니다. 점수는 조회수나 Threads 공식 순위가 아닙니다.</p>
        <p>공개 주제 순위, 검색과 저장은 로그인 없이 이용할 수 있습니다. 실제 콘텐츠는 주제 카드를 통해 Threads에서 확인합니다.</p>
      </PolicySection>

      <PolicySection title="정책 문서">
        <p><a className="inline-link" href="/data-deletion">계정 및 데이터 삭제 안내 보기</a></p>
        <p><a className="inline-link" href="/privacy">개인정보 처리방침 보기</a></p>
        <p><a className="inline-link" href="/terms">이용약관 보기</a></p>
      </PolicySection>
      </div>
    </LegalShell>
  );
}
