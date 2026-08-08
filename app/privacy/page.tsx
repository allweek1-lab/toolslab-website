import type { Metadata } from "next";
import { LegalShell, PolicySection } from "../legal-shell";

export const metadata: Metadata = {
  title: "Trend Threads 개인정보 처리방침 | ToolsLab",
  description: "Trend Threads가 처리하는 정보, 이용 목적, 보관 및 삭제 방법을 안내합니다.",
  alternates: { canonical: "https://trendthreads.toolslab.co.kr/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="PRIVACY POLICY"
      title="Trend Threads 개인정보 처리방침"
      summary="툴스랩은 Trend Threads 제공에 필요한 최소한의 정보만 처리하며, 광고 목적의 추적이나 개인정보 판매를 하지 않습니다."
    >
      <div className="policy-meta">
        <span>운영주체: 툴스랩 (ToolsLab)</span>
        <span>시행일: 2026년 8월 8일</span>
      </div>

      <PolicySection title="1. 처리하는 정보와 이용 목적">
        <ul>
          <li><strong>계정:</strong> 사용자가 이메일 계정을 만들거나 로그인할 때 이메일 주소, 인증 상태와 내부 사용자 식별자를 계정 인증 및 데이터 동기화에 사용합니다.</li>
          <li><strong>사용자 기능:</strong> 저장한 게시물, 숨긴 작성자, 환경설정, 알림 조건, 신고 내용과 선택적으로 입력한 신고 설명을 해당 기능 제공과 안전 대응에 사용합니다.</li>
          <li><strong>푸시 알림:</strong> 사용자가 알림을 직접 켠 경우에만 Expo 푸시 토큰, 기기 플랫폼·모델명과 알림 설정을 알림 전송 및 등록 기기 구분에 사용합니다.</li>
          <li><strong>선택적 사용 분석:</strong> 기본값은 꺼짐입니다. 로그인 사용자가 동의한 경우에만 홈·상세·검색·저장·원문 이동 등의 최소 이벤트를 서비스 개선에 사용하며 검색어 원문은 분석 이벤트에 저장하지 않습니다.</li>
          <li><strong>공개 Threads 콘텐츠:</strong> 공식 Threads API로 제공되는 공개 게시물의 사용자명(username), 본문, 게시 시각, 공식 원문 링크와 앱 내부 관측·분류·급상승 신호를 검색과 순위 제공에 사용합니다.</li>
        </ul>
        <p>게스트의 저장·숨김·환경설정과 활동 기록은 원칙적으로 해당 기기에만 저장됩니다. 로그인하면 지원되는 사용자 기능 데이터가 서버와 동기화될 수 있습니다.</p>
      </PolicySection>

      <PolicySection title="2. 처리하지 않는 정보">
        <p>위치, 주소록, 사진 보관함, 사용자의 Threads 비밀번호·쿠키·로그인 세션을 수집하지 않습니다. OpenAI API, 광고 SDK, 비공식 Threads 크롤링을 초기 서비스에 사용하지 않습니다.</p>
      </PolicySection>

      <PolicySection title="3. 외부 서비스와 처리 위탁">
        <ul>
          <li><strong>Supabase:</strong> 계정 인증, 데이터베이스와 서버 기능 운영</li>
          <li><strong>Expo Push Service 및 Apple Push Notification service:</strong> 사용자가 켠 푸시 알림 전달</li>
          <li><strong>Vercel:</strong> 이 공개 지원·정책 웹사이트 제공</li>
          <li><strong>Meta Threads API:</strong> 공개 게시물 검색과 공식 원문 연결</li>
        </ul>
        <p>각 제공자는 서비스 제공에 필요한 범위에서 정보를 처리하며, 관련 계약과 정책에 따른 보호조치를 적용합니다. Threads 원문을 외부 앱이나 브라우저에서 연 뒤의 처리는 해당 서비스 정책을 따릅니다.</p>
      </PolicySection>

      <PolicySection title="4. 보관 기간과 삭제">
        <ul>
          <li>계정·저장·차단·설정·알림·신고 정보는 사용자가 기능을 이용하는 동안 보관하며, 사용자의 삭제 또는 계정 삭제 요청에 따라 삭제합니다. 법령상 보존 의무나 분쟁·안전 대응에 필요한 정보가 있으면 그 근거와 기간에 한해 별도로 처리할 수 있습니다.</li>
          <li>동의한 사용 분석 이벤트는 최대 90일 보관하며, 분석 동의를 철회하면 해당 사용자의 보관 이벤트를 삭제합니다.</li>
          <li>검색 운영 이벤트는 최대 30일, API·수집·작업 진단 기록은 최대 31일 보관합니다.</li>
          <li>비활성 푸시 기기 정보는 관련 전송 기록이 없으면 30일 이후 삭제 대상으로 처리합니다.</li>
          <li>공개 게시물의 관측·급상승 계산 기록은 일반적으로 8일, 보호 참조가 없는 정규화 공개 콘텐츠는 마지막 관측 후 최대 30일을 기준으로 정리합니다.</li>
        </ul>
        <p>앱의 설정에서 계정 삭제를 시작할 수 있습니다. 기기 내 로컬 활동 삭제는 해당 기기의 기록만 삭제하며, 서버 계정 데이터 삭제는 계정 삭제 기능을 이용해야 합니다.</p>
      </PolicySection>

      <PolicySection title="5. 이용자의 선택과 권리">
        <p>사용자는 앱에서 데이터 내보내기, 계정 삭제, 저장 취소, 작성자 숨김 해제, 알림 끄기, 분석 동의 철회를 할 수 있습니다. 앱에 로그인할 수 없는 경우에는 <a className="inline-link" href="/data-deletion">계정 및 데이터 삭제 안내</a>에 따라 요청할 수 있으며, 추가적인 열람·정정·삭제 문의는 지원 연락처로 요청할 수 있습니다.</p>
      </PolicySection>

      <PolicySection title="6. 안전성 확보 조치">
        <p>서버 비밀값은 앱에 포함하지 않고, 사용자 데이터는 인증된 계정 범위로 분리합니다. 전송 구간 암호화, 최소 권한, 요청 상한, 접근 통제와 운영 기록을 적용하며 계정 비밀번호나 인증 코드를 지원 메일로 요청하지 않습니다.</p>
      </PolicySection>

      <PolicySection title="7. 개인정보 문의">
        <dl className="contact-list">
          <div><dt>담당</dt><dd>툴스랩 개인정보 문의 담당자</dd></div>
          <div><dt>이메일</dt><dd><a href="mailto:allweek@naver.com">allweek@naver.com</a></dd></div>
          <div><dt>전화</dt><dd><a href="tel:07043503571">070-4350-3571</a></dd></div>
        </dl>
      </PolicySection>

      <PolicySection title="8. 방침 변경">
        <p>서비스 기능이나 법적 요구사항이 변경되면 이 방침을 수정할 수 있습니다. 중요한 변경은 시행 전에 앱 또는 이 페이지를 통해 안내하고, 페이지 상단의 시행일을 갱신합니다.</p>
      </PolicySection>
    </LegalShell>
  );
}
