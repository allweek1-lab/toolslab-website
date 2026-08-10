import type { Metadata } from "next";
import { PolicySection } from "../../../legal-shell";

const policyUrl = "https://toolslab.co.kr/nihongoq/android/privacy";

export const metadata: Metadata = {
  title: "니혼고Q Android 개인정보 처리방침 | ToolsLab",
  description:
    "니혼고Q Android 앱의 기기 내 데이터, 마이크, 백업, 보관 및 삭제에 관한 개인정보 처리방침입니다.",
  alternates: { canonical: policyUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "니혼고Q Android 개인정보 처리방침",
    description:
      "니혼고Q Android 앱의 기기 내 데이터, 마이크, 백업, 보관 및 삭제 안내입니다.",
    url: policyUrl,
    type: "website",
    locale: "ko_KR",
    siteName: "TOOLS LAB",
  },
  twitter: {
    card: "summary",
    title: "니혼고Q Android 개인정보 처리방침",
    description:
      "니혼고Q Android 앱의 기기 내 데이터, 마이크, 백업, 보관 및 삭제 안내입니다.",
  },
};

export default function NihongoQAndroidPrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a
          className="brand"
          href="https://toolslab.co.kr/"
          aria-label="툴스랩 회사 홈페이지 열기"
        >
          <span className="brand-mark">✺</span>
          <span>ToolsLab</span>
        </a>
        <span className="policy-product">NihongoQ · Android</span>
      </header>

      <article className="legal-document">
        <div className="legal-intro">
          <p className="eyebrow">PRIVACY POLICY</p>
          <h1>니혼고Q 개인정보 처리방침</h1>
          <p>
            니혼고Q Android 앱은 로그인, 자체 서버, 광고, 분석 도구 및 외부 AI를
            사용하지 않습니다. 앱이 처리하는 학습 기록과 사용자 선택 정보는 사용자의
            기기 안에만 보관되며 개발자에게 전송되지 않습니다.
          </p>
        </div>

        <div className="legal-content" lang="ko">
          <div className="policy-meta">
            <span>앱: 니혼고Q Android</span>
            <span>시행일: 2026년 8월 11일</span>
          </div>

          <PolicySection title="1. 기기 안에서 처리하는 정보">
            <p>
              저장한 단어·문장, 직접 추가한 항목, 학습 진도, 오답, 화면·음성 설정 및
              사용자가 선택한 프로필 사진을 앱 전용 저장 공간에 보관합니다.
            </p>
          </PolicySection>

          <PolicySection title="2. 마이크와 임시 녹음">
            <p>
              역할 연습에서 사용자가 녹음 버튼을 누를 때만 마이크 권한을 요청합니다.
              녹음 파일은 재생을 위해 기기에 임시로 저장되고 해당 연습 화면을 나가면
              삭제됩니다. 녹음은 백업에 포함되거나 기기 밖으로 전송되지 않습니다.
            </p>
          </PolicySection>

          <PolicySection title="3. 백업">
            <p>
              사용자가 직접 백업 내보내기를 선택하면 학습 기록을 JSON 파일로 만들어
              사용자가 고른 위치에 저장합니다. 가져오기도 사용자가 직접 선택한 파일만
              읽습니다. 백업 파일의 보관과 삭제는 사용자가 관리합니다.
            </p>
          </PolicySection>

          <PolicySection title="4. 제3자 제공과 외부 전송">
            <p>
              개인정보와 학습 기록을 수집·판매·공유하지 않습니다. Android 앱에는 광고
              SDK, 분석 SDK, 계정 시스템 및 인터넷 통신 기능이 없습니다.
            </p>
          </PolicySection>

          <PolicySection title="5. 보관과 삭제">
            <p>
              앱 안에서 직접 만든 항목은 해당 화면에서 삭제할 수 있습니다. 모든 앱
              데이터를 삭제하려면 Android 설정에서 니혼고Q의 저장공간 데이터를
              삭제하거나 앱을 제거할 수 있습니다. 내보낸 백업 파일은 사용자가 저장한
              위치에서 직접 삭제할 수 있습니다.
            </p>
          </PolicySection>

          <PolicySection title="6. 문의">
            <dl className="contact-list">
              <div>
                <dt>개발자</dt>
                <dd>Jae Ho Min</dd>
              </div>
              <div>
                <dt>이메일</dt>
                <dd>
                  <a href="mailto:allweek1@gmail.com">allweek1@gmail.com</a>
                </dd>
              </div>
            </dl>
          </PolicySection>
        </div>
      </article>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} ToolsLab</span>
        <a href="https://toolslab.co.kr/">회사 홈페이지</a>
      </footer>
    </main>
  );
}
