# MegaBobs 🍽️

메가존 구내식당 식단표를 확인할 수 있는 웹 애플리케이션입니다.

## ✨ 주요 기능

- 📅 **날짜별 메뉴 조회**: 원하는 날짜의 식단을 확인할 수 있습니다
- 🍝 **다양한 코스 메뉴**: 코스1, 코스2, 테이크아웃 메뉴를 선택할 수 있습니다
- 📱 **모바일 최적화**: 반응형 디자인으로 모든 디바이스에서 사용 가능합니다
- ⚡ **빠른 로딩**: 데이터 캐싱과 프리페칭으로 최적화된 성능을 제공합니다
- 🛡️ **안정적인 에러 처리**: ErrorBoundary를 통한 안정적인 사용자 경험을 제공합니다

## 🛠️ 기술 스택

### Frontend

- **Next.js 15** - React 프레임워크
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **TanStack Query** - 서버 상태 관리
- **Lucide React** - 아이콘

### Backend & Database

- **Supabase** - 백엔드 서비스 및 PostgreSQL 데이터베이스

### Development Tools

- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **pnpm** - 패키지 매니저

## 🚀 시작하기

### 필수 조건

- Node.js 18.17 이상
- pnpm (권장) 또는 npm/yarn

### 설치 및 실행

1. **저장소 클론**

   ```bash
   git clone https://github.com/hong-soohyuk/mega-bobs.git
   cd mega-bobs
   ```

2. **의존성 설치**

   ```bash
   pnpm install
   ```

3. **환경 변수 설정**

   ```bash
   cp .env.example .env.local
   ```

   `.env.local` 파일에 다음 환경 변수를 설정하세요:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **개발 서버 실행**

   ```bash
   pnpm dev
   ```

5. **브라우저에서 확인**
   [http://localhost:3000](http://localhost:3000)에서 앱을 확인할 수 있습니다.

## 📝 사용 가능한 스크립트

```bash
# 개발 서버 실행 (Turbopack 사용)
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 린트 검사
pnpm lint

# 린트 오류 자동 수정
pnpm lint:fix

# 코드 포맷팅
pnpm format

# 코드 포맷팅 검사
pnpm format:check
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── globals.css        # 전역 스타일
├── components/            # 재사용 가능한 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── ErrorBoundary.tsx # 에러 경계 컴포넌트
│   ├── HomeClient.tsx    # 메인 클라이언트 컴포넌트
│   ├── MenuSection.tsx   # 메뉴 섹션 컴포넌트
│   └── ...
├── lib/                  # 유틸리티 및 설정
│   ├── api/             # API 호출 함수
│   ├── hooks/           # 커스텀 훅
│   ├── utils.ts         # 유틸리티 함수
│   └── supabase.ts      # Supabase 클라이언트
├── types/               # TypeScript 타입 정의
├── constants/           # 상수 정의
```
