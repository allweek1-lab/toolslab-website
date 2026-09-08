# 툴스랩 업무 자동화 상품

## 페이지

- `/automation`: 19만 원부터 시작하는 맞춤 자동화 제작 안내, 범위, 과정, FAQ, 문의 작성
- `/automation/demo`: 서버 전송 없이 브라우저에서 CSV/XLSX를 취합하는 데모
- `/automation-samples.zip`: 가상 CSV 10개, 비교용 결과 보고서, 안내문

메인 홈페이지의 메뉴와 서비스 버튼에서 자동화 페이지로 이동할 수 있습니다. 기존 앱 소개·지원·정책 페이지는 유지합니다.

## 판매 범위

입력 양식 1종, 출력 보고서 1종, 합의한 취합·검증·집계 규칙, 실행 도구와 사용 안내, 수정 1회, 검수 완료 후 14일간 합의 기능 오류 수정. 시작 안내가는 190,000원이며 세금 처리 기준을 포함한 총금액과 납기는 견적서에서 확정합니다. 외부 연동·추가 양식·추가 기능은 별도 견적입니다.

문의 폼은 메일 앱을 여는 방식이며 접수 서버가 없습니다. 자동 발송 또는 접수 완료로 표시하지 않습니다. 수신처는 기존 홈페이지에 게시된 `allweek@naver.com`입니다.

## 데모 범위

- 파일 10개 이하, 파일당 5MB/데이터 5,000행, 총 20MB 이하
- CSV UTF-8/CP949, XLSX 첫 시트, 필수 5개 열 추출
- 필수 열: 기록번호, 지점, 일자, 항목, 금액
- 잘못된 날짜·금액·누락값·수식 셀·오류 셀을 검토 목록으로 분리
- 동일 지점과 기록번호는 중복 후보로 표시. 자동 삭제하지 않음
- 금액 합계와 정상 형식 행 수에는 중복 후보 포함. 입력 오류는 집계 제외
- 통합 데이터 / 확인 필요 / 지점별 요약 / 처리 요약 4개 시트의 XLSX 다운로드
- 현재 탭 메모리만 사용. 서버 업로드, 브라우저 영구 저장, AI API 사용 없음

## 검증

```powershell
node --experimental-strip-types --test tests/automation.test.mts
node --test tests/rendered-html.test.mjs
npm run build
npm run build:sites
```

샘플 예상 결과: 입력 60행, 정상 형식 58행, 입력 오류 2행, 중복 후보 2행, 금액 합계 3,132,000원 (중복 후보 포함).

샘플 재생성:

```powershell
node --experimental-strip-types build-automation-samples.mts
Compress-Archive -Path public/automation-samples/* -DestinationPath public/automation-samples.zip -Force
```

## 게시 경로

작업 시점에 `toolslab.co.kr`은 Vercel에서 제공되고 있습니다. `.openai/hosting.json`에 연결된 기존 Sites 프로젝트는 소유자 전용이며 도메인 연결은 검증 대기 상태입니다. Sites 원본과 Vercel 운영 프로젝트는 구분해서 관리해야 합니다. 실제 도메인에 반영하려면 기존 Vercel 프로젝트를 확인해 이 검증된 소스를 배포해야 하며, DNS나 접근 권한을 임의로 변경하지 않습니다.

