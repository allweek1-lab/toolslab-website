import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Support | ToolsLab",
  description: "Support for the Trend Threads connected-user live ranking, Threads account connection, official Threads handoff, and account deletion.",
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
          <li>Sign in to Trend Threads and connect your own Threads account through the official authorization flow.</li>
          <li>Grant <code>threads_basic</code> to verify the connected account and <code>threads_keyword_search</code> to run the live topic checks.</li>
          <li>Choose one category. The app checks exactly six controlled topics with your connected account and shows a current 1–6 activity ranking with coarse five-point bands.</li>
          <li>Open a ranked topic on the official Threads search page. The actual Threads content remains on Threads.</li>
          <li>Reconnect or disconnect Threads from Settings. Disconnecting removes the encrypted token and account binding.</li>
          <li>Delete recent searches and saved local activity, or export or delete your Trend Threads account.</li>
        </ul>
      </PolicySection>

      <PolicySection title="If a live Threads check cannot be completed">
        <p>Confirm that you are signed in to Trend Threads and that the Threads connection in Settings says “Connected.” If the authorization expired or was rejected, select “Reconnect Threads.” Check the network and retry; after a provider rate limit, wait before trying again.</p>
        <p>If authorization, safety, freshness, or result integrity cannot be verified, the app fails closed. It does not fall back to an operator token, public operator aggregates, cached operator results, or test data. If the problem continues, contact support with the device, iOS version, app version, screen, and approximate time—never a password, code, or token.</p>
      </PolicySection>

      <PolicySection title="Service description">
        <p>Trend Threads is an independent, unofficial topic-discovery tool. Its live ranking is calculated only for a signed-in user who connects their own Threads account and grants <code>threads_basic</code> and <code>threads_keyword_search</code>.</p>
        <p>The app compares six controlled topics and displays a coarse ToolsLab activity estimate, not platform-wide counts or an official Threads ranking. It does not copy or display provider posts or account content; selecting a ranked topic opens the official Threads search page.</p>
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
          <li>Trend Threads에 로그인하고 공식 인증 화면에서 본인의 Threads 계정을 연결합니다.</li>
          <li><code>threads_basic</code>으로 연결 계정을 확인하고, <code>threads_keyword_search</code>로 실시간 주제 확인을 실행하도록 권한을 부여합니다.</li>
          <li>카테고리 하나를 선택하면 연결된 계정으로 통제 주제 6개를 확인하고 현재 활동 1~6위와 5점 단위 활동 구간을 표시합니다.</li>
          <li>순위 주제를 누르면 공식 Threads 검색 페이지로 이동합니다. 실제 콘텐츠는 Threads에 그대로 남아 있습니다.</li>
          <li>설정에서 Threads를 다시 연결하거나 연결 해제할 수 있습니다. 연결 해제 시 암호화 토큰과 계정 연결 정보가 삭제됩니다.</li>
          <li>최근 검색·저장 등 로컬 활동을 삭제하거나 Trend Threads 계정 내보내기 또는 계정 삭제를 실행할 수 있습니다.</li>
        </ul>
      </PolicySection>

      <PolicySection title="실시간 Threads 확인을 완료할 수 없을 때">
        <p>Trend Threads에 로그인되어 있고 설정의 Threads 연결 상태가 ‘연결됨’인지 확인하세요. 인증이 만료되었거나 거절되었다면 ‘Threads 다시 연결’을 선택하세요. 네트워크를 확인한 뒤 다시 시도하고, 제공자 속도 제한이 발생했다면 잠시 기다려 주세요.</p>
        <p>인증, 안전성, 최신성 또는 결과 무결성을 확인할 수 없으면 앱은 안전하게 중단합니다. 운영자 토큰, 공개 운영자 집계, 운영자 cache 또는 테스트 데이터로 대체하지 않습니다. 문제가 계속되면 기기, iOS·앱 버전, 화면과 발생 시각을 알려 주세요. 비밀번호, 인증 코드 또는 토큰은 보내지 마세요.</p>
      </PolicySection>

      <PolicySection title="서비스 안내">
        <p>Trend Threads는 독립적인 비공식 주제 발견 도구입니다. 실시간 순위는 로그인한 사용자가 본인의 Threads 계정을 연결하고 <code>threads_basic</code>과 <code>threads_keyword_search</code> 권한을 부여한 경우에만 계산됩니다.</p>
        <p>앱은 통제 주제 6개를 비교해 ToolsLab의 거친 활동 추정치를 표시하며, 이는 플랫폼 전체 수치나 Threads 공식 순위가 아닙니다. 제공자의 게시물이나 계정 콘텐츠를 복사·표시하지 않으며, 순위 주제를 누르면 공식 Threads 검색 페이지로 이동합니다.</p>
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
