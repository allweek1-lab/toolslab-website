import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads Account and Data Deletion | ToolsLab",
  description: "How to delete Trend Threads on-device activity, cached aggregates, and optional server-account data.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <LegalShell eyebrow="TREND THREADS DATA DELETION" title="Account and Data Deletion" summary="English is the primary deletion-guide language. Complete Korean instructions are provided below.">
      <div lang="en">
      <PolicySection title="Delete local activity on this device">
        <p>In <strong>Settings → Delete local activity data</strong>, remove saved topics, recent searches, and legacy local activity on this device. <strong>Clear cached aggregates</strong> removes only topic-signal data retained for offline display.</p>
        <p>Saved topics work on-device without login and contain no copy of a Threads post.</p>
      </PolicySection>

      <PolicySection title="Delete an optional account and server data in the app">
        <ol>
          <li>Sign in to the Trend Threads account to be deleted.</li>
          <li>Open <strong>Settings</strong>.</li>
          <li>Select <strong>Delete account</strong> and confirm.</li>
        </ol>
        <p>Deletion removes the Supabase authentication account and associated server preferences and consent records. Delete local activity separately if saved topics and recent searches on the device must also be removed.</p>
      </PolicySection>

      <PolicySection title="If sign-in is unavailable">
        <p>Email <a className="inline-link" href="mailto:allweek@naver.com?subject=Trend%20Threads%20Data%20Deletion%20Request">allweek@naver.com</a> with:</p>
        <ul>
          <li>Subject: Trend Threads Data Deletion Request</li>
          <li>The email address used for the optional account</li>
          <li>Whether the request covers the full account or specified server data</li>
        </ul>
        <p>ToolsLab may reply to the registered email to verify ownership. Do not send a password, authentication code, or Threads access token. Receipt and completion will be confirmed by email.</p>
      </PolicySection>

      <PolicySection title="Official source data and content on Threads">
        <p>The public app does not provide or retain copies of individual Threads posts. When approved official API access is enabled, new collection writes do not retain a duplicate raw provider payload, normalized source evidence is removed within 24 hours, and topic aggregates without post or author identifiers are removed within eight days.</p>
        <p>Original content remains on Threads and cannot be deleted by ToolsLab. The account or content owner must manage the original content on Threads.</p>
      </PolicySection>

      <PolicySection title="Related documents">
        <p><a className="inline-link" href="/privacy">Privacy Policy</a></p>
        <p><a className="inline-link" href="/terms">Terms of Service</a></p>
        <p><a className="inline-link" href="/support">Support</a></p>
      </PolicySection>
      </div>

      <div className="language-divider" lang="ko">
        <h2>한국어 계정 및 데이터 삭제 안내</h2>
      </div>

      <div lang="ko">
      <PolicySection title="이 기기의 로컬 활동 삭제">
        <p><strong>설정 → 로컬 활동 데이터 삭제</strong>를 사용하면 이 기기의 저장한 주제, 최근 검색어와 이전 버전의 로컬 활동 기록을 지울 수 있습니다. <strong>저장된 집계 비우기</strong>는 오프라인 표시용 주제 신호 캐시만 삭제합니다.</p>
        <p>주제 저장은 로그인 없이 기기에서만 동작하므로 다른 기기나 서버의 게시물 사본을 삭제하는 기능이 아닙니다.</p>
      </PolicySection>

      <PolicySection title="앱에서 계정과 서버 데이터 삭제">
        <ol>
          <li>Trend Threads에서 삭제할 계정으로 로그인합니다.</li>
          <li>하단의 <strong>설정</strong>을 엽니다.</li>
          <li><strong>계정 삭제</strong>을 누르고 확인합니다.</li>
        </ol>
        <p>계정 삭제가 완료되면 Supabase 인증 계정과 해당 계정의 환경설정, 동의 기록 등 서버 사용자 데이터가 삭제됩니다. 기기의 저장한 주제와 최근 검색을 함께 지우려면 로컬 활동 삭제도 실행해 주세요.</p>
      </PolicySection>

      <PolicySection title="앱에 로그인할 수 없는 경우">
        <p><a className="inline-link" href="mailto:allweek@naver.com?subject=Trend%20Threads%20데이터%20삭제%20요청">allweek@naver.com</a>으로 아래 정보를 보내 주세요.</p>
        <ul>
          <li>제목: Trend Threads 데이터 삭제 요청</li>
          <li>가입에 사용한 이메일 주소</li>
          <li>계정 전체 삭제 또는 특정 서버 데이터 삭제 중 원하는 범위</li>
        </ul>
        <p>계정 소유 확인을 위해 가입 이메일로 회신할 수 있습니다. 비밀번호, 인증 코드, Threads 액세스 토큰은 보내지 마세요. 접수와 처리 결과는 이메일로 안내합니다.</p>
      </PolicySection>

      <PolicySection title="공식 원천 데이터와 Threads 콘텐츠">
        <p>Trend Threads 공개 앱은 개별 Threads 게시물 사본을 제공하거나 보관하지 않습니다. 승인된 공식 API 접근이 활성화된 경우 서버의 원본 payload는 집계 직후 제거되고, 정규화된 원천 근거는 최대 24시간, 게시물·작성자 식별자가 없는 주제 집계 이력은 최대 8일 안에 자동 정리됩니다.</p>
        <p>Threads에서 실제로 게시된 콘텐츠는 Meta의 Threads 서비스에 있으므로 ToolsLab이 원문을 삭제할 수 없습니다. 원문 삭제는 Threads에서 해당 계정과 콘텐츠에 대해 진행해야 합니다.</p>
      </PolicySection>

      <PolicySection title="관련 문서">
        <p><a className="inline-link" href="/privacy">개인정보 처리방침 보기</a></p>
        <p><a className="inline-link" href="/terms">이용약관 보기</a></p>
        <p><a className="inline-link" href="/support">지원 페이지 보기</a></p>
      </PolicySection>
      </div>
    </LegalShell>
  );
}
