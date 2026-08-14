import type { Metadata } from "next";
import Link from "next/link";
import { PolicySection } from "../../legal-shell";
import { NihongoQShell } from "../nihongoq-shell";

const supportUrl = "https://toolslab.co.kr/nihongoq/support";

export const metadata: Metadata = {
  title: "NihongoQ Support | ToolsLab",
  description: "Help, feedback, and contact information for the NihongoQ Japanese travel-learning app.",
  alternates: { canonical: supportUrl },
  robots: { index: true, follow: true },
};

export default function NihongoQSupportPage() {
  return (
    <NihongoQShell>
      <main className="legal-page nq-legal-page">
        <article className="legal-document">
          <div className="legal-intro">
            <p className="eyebrow">NIHONGOQ SUPPORT</p>
            <h1>How can we help?</h1>
            <p>Report incorrect content, an audio or app problem, an inappropriate ad, or suggest an improvement. Support is available in English and Korean.</p>
          </div>

          <div className="legal-content">
            <div className="nq-support-contact">
              <div><small>SUPPORT EMAIL</small><strong>allweek1@gmail.com</strong><p>We will use your message only to understand and respond to your request.</p></div>
              <a className="nq-button nq-button-primary" href="mailto:allweek1@gmail.com?subject=NihongoQ%20Support">Email NihongoQ Support</a>
            </div>

            <div lang="en">
              <PolicySection title="Send feedback from the app">
                <p>Open <strong>Settings &gt; Send Feedback</strong>, then choose Report Incorrect Content, Report an Audio Problem, Report an App Problem, or Suggest an Improvement. NihongoQ prepares an email draft that may include the app version and build, selected language, device model, and iOS version. Nothing is sent until you choose to send the message in your mail app.</p>
              </PolicySection>

              <PolicySection title="If Japanese audio does not play">
                <ul>
                  <li>Check the device volume and try both Normal and Slow once.</li>
                  <li>Check the selected audio output, close another app that may be recording or controlling audio, then try again.</li>
                  <li>Restart NihongoQ. Core Japanese recordings are bundled with the app and do not require a network connection.</li>
                  <li>If the problem continues, include the exact lesson, word, or sentence and which speed was selected in your feedback.</li>
                </ul>
              </PolicySection>

              <PolicySection title="Ads and privacy choices">
                <p>A banner may appear only below the Home dashboard header. Ad availability depends on Google&apos;s service, network conditions, region, and current ad inventory, so a banner is not guaranteed on every launch.</p>
                <p>If Google requires a privacy-options entry point in your region, open <strong>Settings &gt; Privacy &amp; Ads</strong> to review it. Use the AdChoices or Ads by Google control on a banner to report that specific ad, or choose <strong>Report an Inappropriate Ad</strong> in Settings.</p>
              </PolicySection>

              <PolicySection title="Helpful details to include">
                <p>Please include the affected screen, the Japanese word or sentence if relevant, what you expected, what happened, and the approximate time. A screenshot is welcome, but do not send passwords, authentication codes, or unrelated personal information.</p>
              </PolicySection>

              <PolicySection title="Speaking practice and backups">
                <p>Microphone access is requested only after you start a recording. You can review microphone access in <strong>iOS Settings &gt; Privacy &amp; Security &gt; Microphone</strong>. Recordings are used for on-device comparison only; NihongoQ does not score, recognise, or upload your voice.</p>
                <p>Export creates an unencrypted JSON learning-data file at a location you choose. Import can merge the file with current learning data or replace the SwiftData learning records. Profile photos, temporary recordings, and some interface preferences are not included in the JSON file. The file provider you choose, such as iCloud Drive, may process the exported file under its own policy.</p>
              </PolicySection>

              <PolicySection title="Documents and download">
                <p>NihongoQ is designed for iPhone and may also run in compatible iPad mode.</p>
                <p><Link className="inline-link" href="/nihongoq/privacy">NihongoQ Privacy Policy</Link></p>
                <p><a className="inline-link" href="https://apps.apple.com/kr/app/nihongoq/id6797822086">View NihongoQ on the App Store</a></p>
              </PolicySection>
            </div>

            <div className="language-divider" lang="ko"><h2>한국어 지원 안내</h2></div>

            <div lang="ko">
              <PolicySection title="앱에서 의견 보내기">
                <p><strong>설정 &gt; 의견 보내기</strong>에서 콘텐츠 수정 요청, 음성 문제 신고, 앱 문제 신고 또는 개선 의견 보내기를 선택하세요. 앱 버전·빌드, 선택한 언어, 기기 모델과 iOS 버전이 포함된 이메일 초안을 준비하며 사용자가 메일 앱에서 보내기를 누르기 전에는 아무 정보도 전송되지 않습니다.</p>
              </PolicySection>

              <PolicySection title="일본어 음성이 나오지 않을 때">
                <ul>
                  <li>기기 음량을 확인하고 일반과 느리게를 각각 한 번 눌러 보세요.</li>
                  <li>선택된 오디오 출력 기기를 확인하고 녹음이나 오디오를 사용 중인 다른 앱을 닫은 뒤 다시 시도하세요.</li>
                  <li>NihongoQ를 다시 실행해 보세요. 핵심 일본어 음성은 앱에 포함되어 있어 네트워크 연결이 필요하지 않습니다.</li>
                  <li>계속되면 해당 학습 화면과 단어·문장, 선택한 속도를 의견에 적어 주세요.</li>
                </ul>
              </PolicySection>

              <PolicySection title="광고와 개인정보 선택">
                <p>배너는 홈 대시보드 헤더 아래에만 표시될 수 있습니다. Google 서비스, 네트워크 상태, 지역과 광고 재고에 따라 표시되지 않을 수 있으므로 앱을 실행할 때마다 배너가 보장되는 것은 아닙니다.</p>
                <p>Google이 개인정보 선택 재진입 메뉴를 요구하는 지역에서는 <strong>설정 &gt; 개인정보와 광고</strong>에서 다시 확인할 수 있습니다. 특정 광고 신고는 배너의 AdChoices 또는 Ads by Google 메뉴를 사용하거나 설정에서 <strong>부적절한 광고 신고</strong>를 선택하세요.</p>
              </PolicySection>

              <PolicySection title="문의에 포함하면 좋은 정보">
                <p>문제가 발생한 화면, 관련된 일본어 단어·문장, 예상한 동작, 실제 결과와 발생 시각을 적어 주세요. 화면 캡처를 첨부할 수 있지만 비밀번호, 인증 코드 또는 관계없는 개인정보는 보내지 마세요.</p>
              </PolicySection>

              <PolicySection title="지원 기기와 문서">
                <p>NihongoQ는 iPhone용 앱이며 호환되는 iPad 모드에서도 실행될 수 있습니다.</p>
                <p><Link className="inline-link" href="/nihongoq/privacy">NihongoQ 개인정보 처리방침 보기</Link></p>
              </PolicySection>

              <PolicySection title="말하기 연습과 백업">
                <p>마이크 권한은 사용자가 녹음을 시작할 때만 요청합니다. <strong>iOS 설정 &gt; 개인정보 보호 및 보안 &gt; 마이크</strong>에서 권한을 확인할 수 있습니다. 녹음은 기기 안에서 기준 음성과 비교하는 데만 사용하며, 음성을 점수화·인식하거나 업로드하지 않습니다.</p>
                <p>내보내기는 사용자가 선택한 위치에 암호화되지 않은 JSON 학습 데이터 파일을 만듭니다. 가져오기는 현재 학습 데이터와 병합하거나 SwiftData 학습 기록을 교체할 수 있습니다. 프로필 사진, 임시 녹음과 일부 화면 설정은 JSON 파일에 포함되지 않습니다. iCloud Drive 등 사용자가 선택한 파일 제공자는 자체 정책에 따라 내보낸 파일을 처리할 수 있습니다.</p>
              </PolicySection>
            </div>
          </div>
        </article>
      </main>
    </NihongoQShell>
  );
}
