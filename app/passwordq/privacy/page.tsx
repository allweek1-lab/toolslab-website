import type { Metadata } from "next";
import { PolicySection } from "../../legal-shell";
import { PasswordQShell } from "../passwordq-shell";

const policyUrl = "https://toolslab.co.kr/passwordq/privacy";

export const metadata: Metadata = {
  title: "PasswordQ Privacy Policy | ToolsLab",
  description: "How PasswordQ protects local vault data and handles optional scanning, voice input, backups, and breach checks.",
  alternates: { canonical: policyUrl },
  robots: { index: true, follow: true },
};

export default function PasswordQPrivacyPage() {
  return (
    <PasswordQShell>
      <main className="legal-page pq-legal-page">
        <article className="legal-document">
          <div className="legal-intro">
            <p className="eyebrow">PRIVACY POLICY</p>
            <h1>PasswordQ Privacy Policy</h1>
            <p>PasswordQ is a local-first password vault that works without a PasswordQ account or developer-operated vault server. This policy explains local storage and the limited optional features that may contact another service.</p>
          </div>

          <div className="legal-content">
            <div className="policy-meta">
              <span>Developer: Jae Ho Min · ToolsLab</span>
              <span>Effective date: September 8, 2026</span>
              <span>App: PasswordQ for iOS</span>
            </div>

            <div lang="en">
              <PolicySection title="1. Information stored on your device">
                <p>Logins, passwords, verification codes, passkeys, bank security cards, notes, tags, change history, recent-use order, local security results, limited verification history, and app-lock settings are stored on your device. Vault content is encrypted. PasswordQ does not operate an account or vault server that receives or can read this content.</p>
                <p>Your master password is not sent to ToolsLab and cannot be recovered by ToolsLab. Non-secret identifiers and an encrypted shared vault may be made available to the PasswordQ AutoFill extension on the same device.</p>
              </PolicySection>

              <PolicySection title="2. Encrypted backups">
                <p>An encrypted PasswordQ backup is created only when you request it. You choose its destination in Files and control when it is shared or deleted. A file provider such as iCloud Drive may process the backup under its own policy. Keep the backup password separate from the backup file.</p>
              </PolicySection>

              <PolicySection title="3. Camera and photos">
                <p>Camera and photo access are optional and used only to recognise bank security cards or two-factor authentication QR codes. Recognition runs on the device, and you can review and correct the result before saving. PasswordQ does not upload the captured image or selected photo to a ToolsLab server.</p>
              </PolicySection>

              <PolicySection title="4. Optional voice input">
                <p>Voice input for names, usernames, and passwords starts only when you choose it. PasswordQ warns that people nearby may hear sensitive information. It uses supported on-device speech recognition only and stops instead of falling back to network recognition when on-device recognition is unavailable.</p>
                <p>Microphone audio and recording files are not stored or sent to a ToolsLab server. Recognition and temporary content are cleared when you leave the screen or the app. Review and correct the recognised result before saving.</p>
              </PolicySection>

              <PolicySection title="5. Optional breach checks">
                <p>Breach checks are off by default. They run only after you review the disclosure, opt in, and complete device authentication.</p>
                <p>For a password exposure check, PasswordQ sends only the first five characters of the password&apos;s SHA-1 hash to <code>api.pwnedpasswords.com</code> over HTTPS. It never sends the full password or complete password hash. For site-breach history, PasswordQ downloads the public breach list from <code>haveibeenpwned.com</code> and compares it with saved sites on the device. Requests do not include usernames, email addresses, full passwords, saved URL lists, vault content, or a PasswordQ device identifier.</p>
                <p>Have I Been Pwned and network providers can observe the connecting IP address, time, User-Agent, the five-character prefix request, or the request for the public breach list. HIBP states that minimal temporary operational logs may include a User-Agent and, in some cases, an IP address for operation, performance, and abuse prevention. Its processing is governed by the <a className="inline-link" href="https://haveibeenpwned.com/privacy">HIBP Privacy Policy</a>. You can use local weak, reused, and duplicate-password analysis without enabling breach checks.</p>
              </PolicySection>

              <PolicySection title="6. iCloud, tracking, advertising, and analytics">
                <p>This release does not include automatic iCloud vault sync. If it is introduced later, this policy and the App Store privacy disclosures will be updated before release.</p>
                <p>The free version may show Google AdMob banner ads only on the top-level Logins and standalone Passwords lists in the main app. Ads are not shown while opening the vault; viewing, copying, or editing secrets; using security cards, voice input, import, backup, or password generation; or inside the AutoFill and Safari extensions. Vault content, saved-site lists, usernames, passwords, security cards, verification codes, and passkeys are not provided to the advertising SDK.</p>
                <p>PasswordQ disables behavioral ad personalization before starting the advertising SDK. Where required, Google User Messaging Platform presents consent and privacy choices before an ad request, and the legally required privacy-options form can be reopened from app settings. PasswordQ does not request App Tracking Transparency permission or collect contacts or precise location for advertising.</p>
                <p>When delivering ads, Google Mobile Ads SDK may process approximate location inferred from an IP address, crash and performance diagnostics, device or advertising identifiers, displayed-ad information, and advertising or app interaction data within the scope published by Google. Google&apos;s privacy policy and advertising terms apply to that processing. ToolsLab does not combine this data with vault content or use a separate third-party behavioral analytics SDK. Optional HIBP processing is described above. Apple may process information when providing iOS and the App Store under Apple&apos;s policies.</p>
              </PolicySection>

              <PolicySection title="7. Retention and deletion">
                <p>Local records remain until you delete them, empty Recently Deleted, or remove the app and its data, subject to device or computer backups you control. Delete an exported encrypted backup from the location where you saved it. There is no remote PasswordQ vault for ToolsLab to delete.</p>
              </PolicySection>

              <PolicySection title="8. Children, changes, and contact">
                <p>PasswordQ does not create behavioral advertising profiles for children and limits advertising content to a general-audience rating. A parent or guardian can use device and App Store age and family controls.</p>
                <p>If features, external services, or legal requirements change, this policy and the App Store disclosures will be updated before the changed processing is released.</p>
                <dl className="contact-list">
                  <div><dt>Developer</dt><dd>Jae Ho Min · ToolsLab</dd></div>
                  <div><dt>Email</dt><dd><a href="mailto:allweek1@gmail.com">allweek1@gmail.com</a></dd></div>
                  <div><dt>Address</dt><dd>B1 ToolsLab, 34 Ilsan-ro 463beon-gil, Ilsandong-gu, Goyang-si, Gyeonggi-do 10359, Republic of Korea</dd></div>
                </dl>
              </PolicySection>
            </div>

            <div className="language-divider" lang="ko">
              <h2>한국어 개인정보 처리방침</h2>
              <p>아래 한국어 안내는 위 영문 방침과 동일한 개인정보 처리 범위를 설명합니다.</p>
            </div>

            <div lang="ko">
              <PolicySection title="1. 기기에 저장되는 정보">
                <p>로그인, 비밀번호, 인증코드, 패스키, 은행 보안카드, 메모, 태그, 변경 이력, 최근 사용 순서, 로컬 보안 점검 결과, 제한된 검증 이력과 앱 잠금 설정은 사용자의 기기에 저장됩니다. 금고 내용은 암호화됩니다. PasswordQ는 이 내용을 수신하거나 열람할 수 있는 계정 또는 금고 서버를 운영하지 않습니다.</p>
                <p>마스터 비밀번호는 ToolsLab에 전송되지 않으며 ToolsLab이 복구할 수 없습니다. AutoFill을 위해 비밀이 아닌 식별 정보와 암호화된 공유 금고를 같은 기기의 PasswordQ 자동완성 확장 프로그램에서 사용할 수 있습니다.</p>
              </PolicySection>

              <PolicySection title="2. 암호화 백업">
                <p>PasswordQ 암호화 백업은 사용자가 요청할 때만 생성됩니다. 사용자가 파일 앱에서 저장 위치를 선택하고 공유와 삭제 시점을 관리합니다. iCloud Drive 등 선택한 파일 제공자는 자체 정책에 따라 백업을 처리할 수 있습니다. 백업 비밀번호는 백업 파일과 다른 곳에 보관하세요.</p>
              </PolicySection>

              <PolicySection title="3. 카메라와 사진">
                <p>카메라와 사진 접근은 선택 기능이며 은행 보안카드 또는 2단계 인증 QR 코드를 인식할 때만 사용합니다. 인식은 기기에서 수행되고 사용자는 저장 전에 결과를 확인하고 수정할 수 있습니다. PasswordQ는 촬영한 이미지나 선택한 사진을 ToolsLab 서버로 업로드하지 않습니다.</p>
              </PolicySection>

              <PolicySection title="4. 선택형 음성 입력">
                <p>로그인 이름, 사용자 이름과 비밀번호의 음성 입력은 사용자가 직접 선택할 때만 시작됩니다. 주변 사람에게 민감한 내용이 들릴 수 있다는 경고를 먼저 표시합니다. 지원되는 기기 내 음성 인식만 사용하며, 기기 내 인식을 사용할 수 없으면 네트워크 인식으로 전환하지 않고 중단합니다.</p>
                <p>마이크 음성과 녹음 파일은 저장하거나 ToolsLab 서버로 보내지 않습니다. 사용자가 화면이나 앱을 벗어나면 인식 작업과 임시 내용을 정리합니다. 저장 전에 인식 결과를 확인하고 수정할 수 있습니다.</p>
              </PolicySection>

              <PolicySection title="5. 선택형 유출 점검">
                <p>유출 점검은 기본적으로 꺼져 있으며, 사용자가 전송 안내를 확인하고 동의한 뒤 기기 인증을 완료해야 실행됩니다.</p>
                <p>비밀번호 유출 점검은 전체 비밀번호가 아닌 SHA-1 해시 앞 5자만 HTTPS로 <code>api.pwnedpasswords.com</code>에 보냅니다. 전체 비밀번호나 완전한 비밀번호 해시는 전송하지 않습니다. 사이트 침해 이력 점검은 <code>haveibeenpwned.com</code>에서 공개 침해 목록을 내려받고 저장된 사이트와의 비교는 기기에서 수행합니다. 요청에는 사용자 이름, 이메일, 전체 비밀번호, 저장 URL 목록, 금고 내용 또는 PasswordQ 기기 식별자를 넣지 않습니다.</p>
                <p>Have I Been Pwned와 네트워크 사업자는 접속 IP, 시각, User-Agent, 5자 접두사 요청 또는 공개 침해 목록 요청 사실을 관찰할 수 있습니다. HIBP는 서비스 운영·성능·악용 방지를 위한 최소한의 임시 운영 로그에 User-Agent와 경우에 따라 IP 주소가 포함될 수 있다고 공개합니다. 외부 처리에는 <a className="inline-link" href="https://haveibeenpwned.com/privacy">HIBP 개인정보 처리방침</a>이 적용됩니다. 유출 점검을 켜지 않아도 로컬 약함·재사용·중복 분석을 사용할 수 있습니다.</p>
              </PolicySection>

              <PolicySection title="6. iCloud, 추적, 광고와 분석">
                <p>현재 출시 버전에는 iCloud 자동 금고 동기화가 포함되어 있지 않습니다. 향후 제공한다면 출시 전에 이 방침과 App Store 개인정보 공개를 갱신합니다.</p>
                <p>PasswordQ의 무료 버전은 메인 앱의 로그인 정보·일반 비밀번호 최상위 목록에만 Google AdMob 배너 광고를 표시할 수 있습니다. 광고는 금고 열기, 비밀번호 보기·복사·수정, 보안카드, 음성 입력, 가져오기·백업, 비밀번호 생성, AutoFill 또는 Safari 확장 화면에는 표시되지 않습니다. 금고 내용, 저장한 사이트 목록, 사용자 이름, 비밀번호, 보안카드, 인증코드와 패스키는 광고 SDK로 전달하지 않습니다.</p>
                <p>PasswordQ는 광고 SDK를 시작하기 전에 행동 기반 광고 맞춤설정을 끄며, 관련 지역에서는 Google User Messaging Platform을 통해 필요한 동의와 개인정보 선택을 광고 요청 전에 확인합니다. 앱 설정에서 법적으로 필요한 광고 개인정보 선택을 다시 열 수 있습니다. PasswordQ는 App Tracking Transparency 권한을 요청하거나 광고 목적으로 연락처·정확한 위치를 수집하지 않습니다.</p>
                <p>광고 제공 과정에서 Google Mobile Ads SDK는 Google이 공개한 범위에 따라 IP 주소로 추정한 대략적 위치, 충돌·성능 진단, 기기 또는 광고 관련 식별자, 표시된 광고 정보와 광고·앱 상호작용 정보를 처리할 수 있습니다. 이 처리에는 Google의 개인정보 처리방침과 광고 서비스 약관이 적용됩니다. ToolsLab은 이 자료를 금고 내용과 결합하지 않으며 별도의 제3자 사용자 행동 분석 SDK를 사용하지 않습니다. 선택형 HIBP 처리는 위 절에 따릅니다. Apple이 iOS와 App Store를 제공하면서 처리하는 정보는 Apple의 정책이 적용됩니다.</p>
              </PolicySection>

              <PolicySection title="7. 보존과 삭제">
                <p>로컬 기록은 사용자가 삭제하고 최근 삭제 항목을 비우거나 앱과 관련 데이터를 제거할 때까지 남을 수 있으며, 사용자가 관리하는 기기 또는 컴퓨터 백업은 예외입니다. 내보낸 암호화 백업은 저장한 위치에서 직접 삭제해야 합니다. ToolsLab에 삭제를 요청할 원격 PasswordQ 금고는 없습니다.</p>
              </PolicySection>

              <PolicySection title="8. 아동, 변경과 문의">
                <p>PasswordQ는 아동을 대상으로 행동 기반 광고 프로필을 만들지 않으며 광고 콘텐츠 등급을 전체 이용가 수준으로 제한합니다. 보호자는 기기와 App Store의 연령 및 가족 설정을 사용할 수 있습니다.</p>
                <p>기능, 외부 서비스 또는 법적 요구사항이 바뀌면 변경된 처리를 출시하기 전에 이 방침과 App Store 개인정보 공개를 갱신합니다.</p>
                <dl className="contact-list">
                  <div><dt>운영자</dt><dd>Jae Ho Min · ToolsLab</dd></div>
                  <div><dt>이메일</dt><dd><a href="mailto:allweek1@gmail.com">allweek1@gmail.com</a></dd></div>
                  <div><dt>주소</dt><dd>대한민국 경기도 고양시 일산동구 일산로463번길 34, B1 ToolsLab (10359)</dd></div>
                </dl>
              </PolicySection>
            </div>
          </div>
        </article>
      </main>
    </PasswordQShell>
  );
}
