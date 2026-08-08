import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads 계정 및 데이터 삭제 | ToolsLab",
  description: "Trend Threads 계정과 기기·서버 데이터를 삭제하는 방법을 안내합니다.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <LegalShell
      eyebrow="TREND THREADS DATA DELETION"
      title="계정 및 데이터 삭제"
      summary="앱에 로그인할 수 있을 때와 앱을 사용할 수 없을 때의 삭제 방법을 각각 안내합니다."
    >
      <PolicySection title="앱에서 계정과 서버 데이터 삭제">
        <ol>
          <li>Trend Threads에서 삭제할 계정으로 로그인합니다.</li>
          <li>하단의 <strong>설정</strong>을 엽니다.</li>
          <li><strong>계정 삭제</strong>을 누르고 확인합니다.</li>
        </ol>
        <p>계정 삭제가 완료되면 Supabase 인증 계정과 해당 계정에 동기화된 저장, 숨김, 환경설정, 알림 및 기타 사용자 기능 데이터가 삭제됩니다.</p>
      </PolicySection>

      <PolicySection title="이 기기의 로컬 활동 삭제">
        <p><strong>설정 → 로컬 활동 데이터 삭제</strong>를 사용하면 이 기기의 저장, 신고, 숨김, 최근 검색 기록을 지울 수 있습니다. 이 기능은 서버 계정을 삭제하지 않으므로 서버 데이터까지 지우려면 위의 계정 삭제를 함께 실행해야 합니다.</p>
      </PolicySection>

      <PolicySection title="앱에 로그인할 수 없는 경우">
        <p><a className="inline-link" href="mailto:allweek@naver.com?subject=Trend%20Threads%20데이터%20삭제%20요청">allweek@naver.com</a>으로 아래 정보를 보내 주세요.</p>
        <ul>
          <li>제목: Trend Threads 데이터 삭제 요청</li>
          <li>가입에 사용한 이메일 주소</li>
          <li>계정 전체 삭제 또는 특정 데이터 삭제 중 원하는 범위</li>
        </ul>
        <p>계정 소유 여부를 확인하기 위해 가입 이메일로 회신할 수 있습니다. 비밀번호, 인증 코드, Threads 액세스 토큰은 보내지 마세요. 접수와 처리 결과는 이메일로 안내합니다.</p>
      </PolicySection>

      <PolicySection title="삭제 범위와 예외">
        <p>공개 Threads 원문은 원 작성자가 Meta의 Threads 서비스에 게시한 콘텐츠이므로 ToolsLab이 원문 자체를 삭제할 수 없습니다. Trend Threads가 보관한 사본과 관측 정보는 공개 원문의 삭제·비공개·이용 불가 확인 및 서비스 보관 정책에 따라 노출 중지 또는 삭제합니다.</p>
        <p>법령상 보존 의무, 분쟁 처리 또는 안전 대응에 신고 정보가 필요한 경우에는 개인정보 처리방침에 적은 근거와 기간에 한해 별도로 처리할 수 있습니다.</p>
      </PolicySection>

      <PolicySection title="관련 문서">
        <p><a className="inline-link" href="/privacy">개인정보 처리방침 보기</a></p>
        <p><a className="inline-link" href="/terms">이용약관 보기</a></p>
        <p><a className="inline-link" href="/support">지원 페이지 보기</a></p>
      </PolicySection>
    </LegalShell>
  );
}
