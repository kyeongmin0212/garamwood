# 가람우드 (Garam Wood) 사이트

싱크대, 붙박이장, 신발장 맞춤 제작 가람우드의 공식 웹사이트.

## 폴더 구조 (간단 설명)

```
garamwood/
├── src/
│   ├── index.njk           ← 메인 페이지 디자인/구조
│   ├── _data/
│   │   └── settings.json   ← 연락처, 회사명 등 기본 정보
│   ├── gallery/            ← 시공 사례 한 건 = 파일 한 개
│   │   ├── 01-pangyo-kitchen.md
│   │   └── ...
│   ├── services/           ← 싱크대/붙박이장/신발장 3개
│   ├── timeline/           ← 연혁 항목들
│   ├── admin/              ← 관리자 페이지 설정
│   │   ├── index.html
│   │   └── config.yml      ← 관리자 화면 구성
│   └── images/uploads/     ← 업로드된 사진들이 저장됨
├── package.json
├── .eleventy.js
└── netlify.toml
```

**한마디로:** 사장님은 `garamwood.com/admin` 에 들어가서 클릭으로 편집만 하시면 됩니다. 위 파일들은 그 결과로 자동 업데이트돼요.

---

## 🚀 배포하기 (1번만 하면 됨)

### Step 1. GitHub 계정 만들기
1. https://github.com 접속
2. Sign up 클릭 → 이메일/비밀번호로 가입
3. 이메일 인증

### Step 2. 새 저장소(repository) 만들기
1. GitHub 로그인 후 오른쪽 위 `+` → `New repository`
2. Repository name: **garamwood**
3. **Public** 선택 (Decap CMS는 Private 저장소에선 무료로 안 됨)
4. `Create repository` 클릭

### Step 3. 이 폴더를 GitHub에 올리기 (두 가지 방법)

**A. 가장 쉬운 방법 — 웹에서 드래그 업로드:**
1. 방금 만든 저장소 페이지에서 `uploading an existing file` 링크 클릭
2. `garamwood` 폴더 안의 **내용물 전체** 를 드래그해서 올림 (폴더가 아니라 그 안에 있는 파일/폴더들)
3. 아래 `Commit changes` 버튼 클릭

**B. Git을 쓸 줄 아신다면:**
```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/내아이디/garamwood.git
git push -u origin main
```

### Step 4. Netlify에 연결하기
1. https://app.netlify.com 접속 → `Sign up with GitHub`
2. 로그인 후 `Add new site` → `Import an existing project`
3. `Deploy with GitHub` → 방금 만든 `garamwood` 저장소 선택
4. Build settings는 자동으로 채워짐 (이미 `netlify.toml` 에 설정돼 있음)
5. `Deploy site` 클릭
6. 1~2분 기다리면 `xxxxx.netlify.app` 같은 임시 주소가 생깁니다 → 클릭해서 사이트 잘 뜨는지 확인

### Step 5. Netlify Identity (관리자 로그인) 켜기
1. Netlify 대시보드 → 방금 만든 사이트 → 상단 메뉴 `Site configuration`
2. 왼쪽 메뉴 `Identity` → `Enable Identity`
3. `Registration` 섹션 → `Open` 을 **`Invite only`** 로 바꾸기 (안 그러면 아무나 가입함)
4. `Services` 섹션 → `Git Gateway` → `Enable Git Gateway`

### Step 6. 본인을 관리자로 초대
1. Identity 페이지의 `Invite users` 클릭
2. 본인 이메일 입력 → 전송
3. 메일함에서 초대 메일 받음 → 클릭 → 비밀번호 설정

### Step 7. 도메인 연결 (garamwood.com)
1. Netlify 사이트 → `Domain management` → `Add a domain`
2. `garamwood.com` 입력
3. 화면에 나오는 DNS 설정값 (보통 4개의 네임서버 주소) 복사
4. 도메인 산 곳(예: 가비아, 카페24, GoDaddy 등) 관리 페이지 → DNS 설정 → 네임서버를 Netlify 것으로 변경
5. 변경 반영까지 보통 1~24시간

### 🎉 끝!
이제 `garamwood.com/admin` 들어가서 로그인 → 사진 올리고 글 쓰면 끝.

---

## 📝 관리자 페이지 사용법

### 새 시공 사례 추가하기
1. `garamwood.com/admin` 접속, 로그인
2. 왼쪽 메뉴 `시공 사례` → 오른쪽 위 `New 시공 사례`
3. 항목 입력:
   - **제목**: 예) 화이트 오크 싱크대
   - **지역**: 예) 판교
   - **날짜**: 시공 완료일 (이게 갤러리 순서에 영향)
   - **사진**: 드래그 업로드 또는 `Choose an image` 클릭
   - **카테고리**: 싱크대 / 붙박이장 / 신발장 등
   - **크기**: 갤러리에서 얼마나 크게 보일지
   - **설명**: 선택 사항
4. 오른쪽 위 `Publish` → `Publish now` 클릭
5. 1~2분 뒤 사이트에 자동 반영

### 사이트 기본 정보 바꾸기 (연락처, 슬로건 등)
1. 왼쪽 메뉴 `사이트 설정` → `전체 설정`
2. 원하는 항목 수정 (전화번호, 이메일, 슬로건, 메인 사진 등)
3. `Publish` → `Publish now`

### 연혁 추가/수정
1. 왼쪽 메뉴 `연혁` → `New 연혁 항목`
2. 연도와 내용 입력 후 Publish

---

## 🛠 자주 묻는 질문

**Q. 잘못 누르면 망가지나요?**
A. 모든 수정은 GitHub에 기록되니, 언제든 이전 버전으로 되돌릴 수 있어요. 망가질 일 거의 없습니다.

**Q. 사진은 어디까지 올릴 수 있나요?**
A. Netlify 무료 플랜: 월 100GB 대역폭, 사이트 용량 무제한에 가까움. 일반 가구 업체 트래픽으론 절대 안 넘침.

**Q. 매달 돈이 나가나요?**
A. 트래픽 폭증하지 않는 한 완전 무료. 도메인 갱신 비용만 매년 1~2만원.

**Q. 문의 폼은 어떻게 받나요?**
A. 지금은 "문의 보내기" 누르면 사용자 메일 앱이 열려서 `hello@garamwood.com` 으로 보내는 구조. 더 매끄럽게 하려면 Netlify Forms (무료) 연결 가능 — 필요하면 추가 요청.

**Q. 로컬에서 미리보기 하려면?**
A. Node.js 설치 후 폴더에서 `npm install` → `npm start`. 그러면 `localhost:8080` 에서 미리 볼 수 있음. 안 해도 됨 — Netlify가 푸시마다 자동으로 미리보기 URL 만들어줌.

---

## 디자인/구조 더 바꾸고 싶을 때
`src/index.njk` 파일을 직접 수정하면 됩니다. 다만 이 파일은 디자인 코드라 조심해서 만지셔야 함. 큰 변경은 개발자한테 맡기시는 게 안전.
