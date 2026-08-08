import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads 지원 | ToolsLab",
  description: "Trend Threads 앱 이용, 계정, 신고, 개인정보 관련 지원 안내입니다.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/support" },
};

export default function SupportPage() {
  return (
    <LegalShell
      eyebrow="TREND THREADS SUPPORT"
      title="Trend Threads 지원"
      summary="앱 이용 중 문제가 생겼거나 개인정보·신고 처리에 도움이 필요하면 아래 연락처로 문의해 주세요."
    >
      <PolicySection title="연락처">
        <dl className="contact-list">
          <div><dt>운영</dt><dd>툴스랩 (ToolsLab)</dd></div>
          <div><dt>이메일</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
          <div><dt>전화</dt><dd><a href="tel:07043503571">070-4350-3571</a></dd></div>
        </dl>
        <p>이메일 문의 시 사용 중인 기기, iOS 버전, 발생한 화면과 문제 상황을 적어주시면 확인에 도움이 됩니다. 비밀번호나 인증 코드는 보내지 마세요.</p>
      </PolicySection>

      <PolicySection title="앱에서 직접 처리할 수 있는 항목">
        <ul>
          <li>계정 삭제: 설정 → 계정 삭제</li>
          <li>계정 데이터 내보내기: 설정 → 내 데이터 내보내기</li>
          <li>게시물 신고: 게시물 상세 → 게시물 신고</li>
          <li>작성자 숨기기 관리: 설정 → 숨긴 작성자</li>
          <li>기기 내 활동 기록 삭제: 설정 → 로컬 활동 삭제</li>
        </ul>
      </PolicySection>

      <PolicySection title="서비스 안내">
        <p>Trend Threads는 Meta 또는 Threads의 공식 앱이 아닌 공개 콘텐츠 발견 도구입니다. 앱의 급상승 점수와 순위는 공개 조회수나 Threads 공식 순위가 아니라 자체 계산 지표입니다.</p>
        <p>로그인 없이 공개 트렌드를 탐색할 수 있으며, 로그인은 클라우드 저장, 신고 처리, 알림 및 설정 동기화 기능에만 필요합니다.</p>
      </PolicySection>

      <PolicySection title="정책 문서">
        <p><a className="inline-link" href="/data-deletion">계정 및 데이터 삭제 안내 보기</a></p>
        <p><a className="inline-link" href="/privacy">개인정보 처리방침 보기</a></p>
        <p><a className="inline-link" href="/terms">이용약관 보기</a></p>
      </PolicySection>
    </LegalShell>
  );
}
