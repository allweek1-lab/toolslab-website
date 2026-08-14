import type { Metadata } from "next";
import { PolicySection } from "../../legal-shell";
import { NihongoQShell } from "../nihongoq-shell";

const policyUrl = "https://toolslab.co.kr/nihongoq/privacy";

export const metadata: Metadata = {
  title: "NihongoQ Privacy Policy | ToolsLab",
  description: "How the NihongoQ iOS app handles on-device learning data, temporary recordings, feedback, and Google Mobile Ads.",
  alternates: { canonical: policyUrl },
  robots: { index: true, follow: true },
};

export default function NihongoQPrivacyPage() {
  return (
    <NihongoQShell>
      <main className="legal-page nq-legal-page">
        <article className="legal-document">
          <div className="legal-intro">
            <p className="eyebrow">PRIVACY POLICY</p>
            <h1>NihongoQ Privacy Policy</h1>
            <p>
              NihongoQ&apos;s core Japanese-learning features work on your device without an account
              or a developer-operated server. This policy explains the limited cases in which an
              external service may process information.
            </p>
          </div>

          <div className="legal-content">
            <div className="policy-meta">
              <span>Developer: Jae Ho Min · ToolsLab</span>
              <span>Effective date: August 14, 2026</span>
              <span>App: NihongoQ for iOS</span>
            </div>

            <div lang="en">
              <PolicySection title="1. Learning data stored on your device">
                <p>Saved words and sentences, learning progress, wrong-answer history, content you add, display and audio preferences, and an optional profile photo are stored on your device. NihongoQ does not send this learning data to a developer-operated server.</p>
                <p>Export creates an unencrypted JSON learning-data file only when you request it. The JSON file includes the supported learning records, but does not include your profile photo, temporary recordings, or every interface preference. You choose the destination and control when the exported file is shared or deleted. A selected file provider, such as iCloud Drive, may process the file under its own policy. Local app data may also be included in an iOS device or computer backup according to your Apple backup settings.</p>
              </PolicySection>

              <PolicySection title="2. Speaking practice and Japanese audio">
                <p>Microphone access is requested only when you start a speaking-practice recording. The recording is a temporary file on your device and is not uploaded to a server or speech-recognition service. NihongoQ removes it when you leave the practice screen, change the practice role or line, or record again, and clears any remaining app-owned temporary recording on a later launch.</p>
                <p>Japanese reference recordings are bundled with the app. If a bundled recording cannot start, the app may use the device&apos;s built-in Japanese speech synthesiser as a fallback; lesson text is not sent to a developer-operated speech or AI service.</p>
              </PolicySection>

              <PolicySection title="3. Google Mobile Ads and privacy choices">
                <p>NihongoQ may show a Google Mobile Ads banner only below the Home dashboard header. Ads are not shown in lessons, vocabulary, sentence, or quiz screens.</p>
                <p>To deliver and improve ads, the Google Mobile Ads SDK may process an IP address, available and permitted device or advertising identifiers, ad impressions and interactions, and app or SDK performance and crash diagnostics. An IP address may be used to estimate a device&apos;s general location. This processing may involve Google and third parties participating in ad delivery. NihongoQ does not provide your learning records, recordings, personal entries, or profile photo for advertising.</p>
                <p>On launch, NihongoQ asks Google User Messaging Platform whether a consent message or privacy choice is required and starts the ad SDK only when Google reports that ads may be requested. NihongoQ disables personalised ad requests and the Google publisher first-party identifier. Non-personalised ads can still use identifiers or technical information for delivery, frequency capping, measurement, fraud prevention, and diagnostics. If Google requires a privacy-options entry point in your region, you can reopen it from <strong>Settings &gt; Privacy &amp; Ads</strong>.</p>
                <p>NihongoQ does not include a separate analytics SDK and does not request Apple App Tracking Transparency permission. Google Mobile Ads may still perform the advertising measurement and diagnostics described above.</p>
                <p>For more information, see the <a className="inline-link" href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a className="inline-link" href="https://policies.google.com/technologies/ads">Google advertising technologies</a>.</p>
              </PolicySection>

              <PolicySection title="4. Feedback and external links">
                <p><strong>Settings &gt; Send Feedback</strong> passes an email draft to your chosen mail app. The draft may include the app version and build, selected app language, device model, and iOS version so that a problem can be diagnosed. Nothing is sent to the developer until you review the message and choose to send it, but your mail app or email provider may process the draft under its own policy. NihongoQ does not operate an in-app support account or message server.</p>
                <p>Opening this policy, the support page, an App Store page, a Google policy, or another external link uses your browser and the destination provider&apos;s service under its own policy.</p>
              </PolicySection>

              <PolicySection title="5. Retention, deletion, and changes">
                <p>Individual local learning entries can remain until you delete them through the relevant app controls; removing the app deletes its app container, subject to any iOS or computer backup you control. NihongoQ removes temporary speaking-practice recordings at the practice lifecycle points described above and clears a remaining app-owned temporary recording on a later launch. Information processed by Google is retained and deleted under Google&apos;s policies and your available advertising privacy choices.</p>
                <p>If NihongoQ&apos;s data practices change, this policy and the App Store privacy disclosures will be updated before the changed feature is released.</p>
              </PolicySection>

              <PolicySection title="6. Contact">
                <dl className="contact-list">
                  <div><dt>Developer</dt><dd>Jae Ho Min · ToolsLab</dd></div>
                  <div><dt>Email</dt><dd><a href="mailto:allweek1@gmail.com">allweek1@gmail.com</a></dd></div>
                </dl>
              </PolicySection>
            </div>

            <div className="language-divider" lang="ko">
              <h2>한국어 개인정보 처리방침</h2>
              <p>아래 한국어 안내는 위 영문 방침과 동일한 개인정보 처리 범위를 설명합니다.</p>
            </div>

            <div lang="ko">
              <PolicySection title="1. 기기에 저장되는 학습 정보">
                <p>저장한 단어와 문장, 학습 진도, 오답 기록, 사용자가 추가한 학습 내용, 표시·음성 설정과 선택한 프로필 사진은 사용자의 기기에 저장됩니다. NihongoQ는 이 학습 정보를 개발자가 운영하는 서버로 전송하지 않습니다.</p>
                <p>내보내기는 사용자가 요청할 때만 암호화되지 않은 JSON 학습 데이터 파일을 만듭니다. 이 파일에는 지원되는 학습 기록이 포함되지만 프로필 사진, 임시 녹음과 모든 화면 설정이 포함되는 것은 아닙니다. 사용자가 저장 위치, 공유와 삭제를 관리하며, iCloud Drive 등 선택한 파일 제공자는 자체 정책에 따라 파일을 처리할 수 있습니다. 기기 안의 앱 데이터도 사용자의 Apple 백업 설정에 따라 iOS 기기 또는 컴퓨터 백업에 포함될 수 있습니다.</p>
              </PolicySection>

              <PolicySection title="2. 말하기 연습과 일본어 음성">
                <p>마이크 권한은 사용자가 말하기 연습 녹음을 시작할 때만 요청합니다. 녹음은 기기의 임시 파일로만 저장되고 서버나 음성 인식 서비스로 전송되지 않습니다. 연습 화면을 나가거나 역할·대사를 바꾸거나 다시 녹음할 때 앱이 제거하며, 앱 전용 임시 녹음이 남은 경우 다음 실행 때 다시 정리합니다.</p>
                <p>일본어 기준 음성은 앱에 포함되어 있습니다. 포함된 음성을 시작할 수 없을 때는 기기의 일본어 음성 합성 기능을 예비 수단으로 사용할 수 있으며, 학습 문장을 개발자가 운영하는 음성·AI 서비스로 보내지 않습니다.</p>
              </PolicySection>

              <PolicySection title="3. Google 배너 광고와 개인정보 선택">
                <p>NihongoQ는 홈 대시보드 헤더 아래에만 Google Mobile Ads 배너를 표시할 수 있습니다. 학습, 단어장, 문장과 퀴즈 화면에는 광고를 표시하지 않습니다.</p>
                <p>광고 제공과 안정성 개선을 위해 Google Mobile Ads SDK는 IP 주소(기기의 대략적인 위치 추정에 사용될 수 있음), 사용 가능하고 허용된 기기·광고 식별자, 광고 노출·상호작용, 앱·SDK 성능 정보와 충돌 진단 정보를 처리할 수 있습니다. 이 처리는 Google 및 광고 제공에 참여하는 제3자에게 이루어질 수 있습니다. NihongoQ는 학습 기록, 녹음, 사용자가 추가한 내용이나 프로필 사진을 광고 목적으로 제공하지 않습니다.</p>
                <p>앱을 실행하면 Google User Messaging Platform에 동의 안내나 개인정보 선택이 필요한지 확인하고, Google이 광고 요청 가능 상태라고 응답한 뒤에만 광고 SDK를 시작합니다. 앱은 개인 맞춤 광고 요청과 Google 게시자 퍼스트 파티 식별자를 비활성화합니다. 비개인 맞춤 광고도 제공, 노출 빈도 제한, 측정, 부정 사용 방지와 진단을 위해 식별자나 기술 정보를 사용할 수 있습니다. Google이 재진입 메뉴를 요구하는 경우 <strong>설정 &gt; 개인정보와 광고</strong>에서 다시 열 수 있습니다.</p>
                <p>NihongoQ는 별도의 분석 SDK를 포함하지 않고 Apple 앱 추적 투명성(ATT) 권한을 요청하지 않습니다. 다만 Google Mobile Ads는 위에서 설명한 광고 측정과 진단을 수행할 수 있습니다.</p>
                <p>자세한 내용은 <a className="inline-link" href="https://policies.google.com/privacy">Google 개인정보처리방침</a>과 <a className="inline-link" href="https://policies.google.com/technologies/ads">Google 광고 기술 안내</a>를 참고하세요.</p>
              </PolicySection>

              <PolicySection title="4. 의견 보내기와 외부 링크">
                <p><strong>설정 &gt; 의견 보내기</strong>는 사용자가 선택한 메일 앱에 이메일 초안을 전달합니다. 문제 확인을 위해 앱 버전·빌드, 선택한 앱 언어, 기기 모델과 iOS 버전이 초안에 포함될 수 있습니다. 사용자가 내용을 확인하고 보내기를 선택하기 전에는 개발자에게 이메일이 전송되지 않지만, 메일 앱이나 이메일 제공자는 자체 정책에 따라 초안을 처리할 수 있습니다. 앱 안의 지원 계정이나 메시지 서버는 운영하지 않습니다.</p>
                <p>이 방침, 지원 페이지, App Store, Google 정책 또는 다른 외부 링크를 열면 브라우저와 해당 서비스 제공자의 정책이 적용됩니다.</p>
              </PolicySection>

              <PolicySection title="5. 보관, 삭제와 변경">
                <p>기기 안의 개별 학습 기록은 해당 앱 기능에서 삭제할 때까지 남을 수 있습니다. 앱을 제거하면 사용자가 관리하는 iOS 또는 컴퓨터 백업을 제외한 앱 컨테이너가 삭제됩니다. 말하기 연습의 임시 녹음은 위에서 설명한 연습 단계에서 앱이 제거하고, 남은 앱 전용 임시 녹음은 다음 실행 때 다시 정리합니다. Google이 처리하는 정보의 보관과 삭제에는 Google의 정책과 사용 가능한 광고 개인정보 선택이 적용됩니다.</p>
                <p>개인정보 처리 방식이 변경되면 해당 기능을 배포하기 전에 이 방침과 App Store 개인정보 공개를 갱신합니다.</p>
              </PolicySection>

              <PolicySection title="6. 문의">
                <dl className="contact-list">
                  <div><dt>개발자</dt><dd>Jae Ho Min · ToolsLab</dd></div>
                  <div><dt>이메일</dt><dd><a href="mailto:allweek1@gmail.com">allweek1@gmail.com</a></dd></div>
                </dl>
              </PolicySection>
            </div>
          </div>
        </article>
      </main>
    </NihongoQShell>
  );
}
