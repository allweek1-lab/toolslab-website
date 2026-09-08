import type { Metadata } from "next";
import Link from "next/link";
import { PolicySection } from "../../legal-shell";
import { PasswordQShell } from "../passwordq-shell";

const supportUrl = "https://toolslab.co.kr/passwordq/support";

export const metadata: Metadata = {
  title: "PasswordQ Support | ToolsLab",
  description: "Simple setup, import, AutoFill, backup, accessibility, and contact help for PasswordQ on iPhone.",
  alternates: { canonical: supportUrl },
  robots: { index: true, follow: true },
};

export default function PasswordQSupportPage() {
  return (
    <PasswordQShell>
      <main className="legal-page pq-legal-page">
        <article className="legal-document">
          <div className="legal-intro">
            <p className="eyebrow">PASSWORDQ SUPPORT</p>
            <h1>Help without the guesswork.</h1>
            <p>Start with the short steps below. Support is available in Korean and English, and you never need to send us a password or security code.</p>
          </div>

          <div className="legal-content">
            <div className="pq-support-contact">
              <div><small>SUPPORT EMAIL</small><strong>allweek1@gmail.com</strong><p>Never include a password, one-time code, recovery key, security-card number, or backup file.</p></div>
              <a className="pq-button" href="mailto:allweek1@gmail.com?subject=PasswordQ%20Support">Email PasswordQ Support</a>
            </div>

            <div lang="en">
              <PolicySection title="1. First setup">
                <ol>
                  <li>Create your vault password and store the recovery guidance somewhere safe.</li>
                  <li>Turn on Face ID for quick unlock.</li>
                  <li>Add an item from the Logins, Passwords, or Security Cards tab.</li>
                </ol>
                <p>Your vault password cannot be recovered by ToolsLab. Do not send it to support.</p>
              </PolicySection>

              <PolicySection title="2. Import existing passwords">
                <p>Export a file from 1Password, Apple Passwords, Chrome, Bitwarden, or LastPass, then open <strong>Settings &gt; Import existing passwords</strong> in PasswordQ and select that exported file in Files. PasswordQ cannot read another password manager&apos;s private storage directly.</p>
                <p>If Files shows no recent file, first save the export to <strong>On My iPhone</strong> or <strong>iCloud Drive</strong>. Imported records remain available for review before you rely on them.</p>
              </PolicySection>

              <PolicySection title="3. Turn on AutoFill">
                <p>Open <strong>iOS Settings &gt; General &gt; AutoFill &amp; Passwords</strong>, turn on AutoFill Passwords and Passkeys, then enable PasswordQ. When several accounts match a site or app, PasswordQ places the most recently used account first.</p>
              </PolicySection>

              <PolicySection title="4. Back up and restore">
                <p>Open <strong>Settings &gt; Backup</strong> and choose Export Encrypted Backup. Save the file to a location you control, such as On My iPhone or iCloud Drive. Keep the backup password separate from the backup file. Restoring replaces or merges data only after you review the choice shown in the app.</p>
              </PolicySection>

              <PolicySection title="5. Security cards and voice input">
                <p>Security-card scanning runs on the device. Review every recognised number and correct unclear entries before saving. One successful identity check keeps the review session available until you leave the protected screen or the app locks.</p>
                <p>Voice input is optional and uses supported on-device recognition only. People nearby may hear sensitive information, so use it only in a private place and confirm the recognised text before saving.</p>
              </PolicySection>

              <PolicySection title="6. Contact and operator">
                <dl className="contact-list">
                  <div><dt>Developer</dt><dd>Jae Ho Min · ToolsLab</dd></div>
                  <div><dt>Email</dt><dd><a href="mailto:allweek1@gmail.com">allweek1@gmail.com</a></dd></div>
                  <div><dt>Address</dt><dd>B1 ToolsLab, 34 Ilsan-ro 463beon-gil, Ilsandong-gu, Goyang-si, Gyeonggi-do 10359, Republic of Korea</dd></div>
                </dl>
                <p><Link className="inline-link" href="/passwordq/privacy">Read the PasswordQ Privacy Policy</Link></p>
              </PolicySection>
            </div>

            <div className="language-divider" lang="ko">
              <h2>한국어 지원 안내</h2>
              <p>처음 사용하는 분도 순서대로 따라 할 수 있도록 꼭 필요한 단계만 정리했습니다.</p>
            </div>

            <div lang="ko">
              <PolicySection title="1. 처음 시작하기">
                <ol>
                  <li>금고 비밀번호를 만들고 복구 안내를 안전한 곳에 보관합니다.</li>
                  <li>빠르게 열 수 있도록 Face ID를 켭니다.</li>
                  <li>하단의 로그인 정보, 비밀번호 또는 보안카드에서 원하는 항목을 추가합니다.</li>
                </ol>
                <p>ToolsLab은 금고 비밀번호를 알 수 없고 대신 찾아드릴 수 없습니다. 지원 이메일에도 보내지 마세요.</p>
              </PolicySection>

              <PolicySection title="2. 기존 비밀번호 가져오기">
                <p>1Password, Apple 암호, Chrome, Bitwarden 또는 LastPass에서 파일을 내보낸 다음 PasswordQ의 <strong>설정 &gt; 기존 비밀번호 가져오기</strong>를 열고 파일 앱에서 그 파일을 선택합니다. iOS 보안상 PasswordQ가 다른 비밀번호 앱의 내부 저장공간을 직접 읽을 수는 없습니다.</p>
                <p>최근 항목에 파일이 없다면 먼저 내보낸 파일을 <strong>나의 iPhone</strong> 또는 <strong>iCloud Drive</strong>에 저장하세요. 가져온 뒤에는 항목이 제대로 들어왔는지 확인해 주세요.</p>
              </PolicySection>

              <PolicySection title="3. 자동완성 켜기">
                <p><strong>iPhone 설정 &gt; 일반 &gt; 자동 완성 및 암호</strong>에서 암호 및 패스키 자동 완성을 켠 다음 PasswordQ를 활성화합니다. 같은 사이트나 앱에 계정이 여러 개면 가장 최근에 사용한 계정이 위에 표시됩니다.</p>
              </PolicySection>

              <PolicySection title="4. 백업과 복원">
                <p><strong>설정 &gt; 백업</strong>에서 암호화 백업 내보내기를 선택하고 나의 iPhone이나 iCloud Drive처럼 직접 관리하는 위치에 저장하세요. 백업 비밀번호는 백업 파일과 다른 곳에 보관해야 합니다. 복원할 때는 앱에 표시되는 병합 또는 교체 내용을 확인한 뒤 진행합니다.</p>
              </PolicySection>

              <PolicySection title="5. 보안카드와 음성 입력">
                <p>보안카드 인식은 기기에서 처리됩니다. 흐리거나 인식되지 않은 숫자를 모두 확인하고 고친 뒤 저장하세요. 한 번 본인 확인을 마치면 보호 화면을 나가거나 앱이 잠길 때까지 같은 확인 화면에서 계속 수정할 수 있습니다.</p>
                <p>음성 입력은 선택 기능이며 지원되는 기기 내 음성 인식만 사용합니다. 주변 사람에게 민감한 내용이 들릴 수 있으므로 반드시 혼자 있는 장소에서 사용하고, 저장 전에 인식된 내용을 확인하세요.</p>
              </PolicySection>

              <PolicySection title="6. 문의와 운영자 정보">
                <dl className="contact-list">
                  <div><dt>운영자</dt><dd>Jae Ho Min · ToolsLab</dd></div>
                  <div><dt>이메일</dt><dd><a href="mailto:allweek1@gmail.com">allweek1@gmail.com</a></dd></div>
                  <div><dt>주소</dt><dd>대한민국 경기도 고양시 일산동구 일산로463번길 34, B1 ToolsLab (10359)</dd></div>
                </dl>
                <p><Link className="inline-link" href="/passwordq/privacy">PasswordQ 개인정보 처리방침 보기</Link></p>
              </PolicySection>
            </div>
          </div>
        </article>
      </main>
    </PasswordQShell>
  );
}
