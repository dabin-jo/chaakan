# [chaakan] 디자인 분석표

## 확인한 자료

- 디자인 원본: [https://www.figma.com/design/Ku9ltM32GfDWM1u9TDyPqS/%EC%A1%B0%EB%8B%A4%EB%B9%88?node-id=2430-1581&m=dev]
- 확인한 화면: [pc_main,tab_main,m_main]
- 실제 에셋 위치: [chaakan/img]

## 화면 목록

| 화면 | 목적 | 주요 행동 | 필요한 상태 |
|---|---|---|---|
| [메인페이지] | [착한구두 브랜드 정체성 전달 및 베스트셀러/카테고리별 슈즈 상품 탐색·구매 유도] | [상단 GNB 및 햄버거 메뉴 클릭, 카테고리 탭(샌들/슬리퍼, 펌프스, 플랫 등) 전환, 상품 카드 호버/클릭을 통한 상세페이지 이동, '신발 전체보기' 및 '바로가기 >' 버튼 클릭, 하단 CS/회사 정보 아코디언 및 링크 클릭] | [기본·로딩·빈상태·오류] |

## 공통 영역

- 헤더: [로고,메뉴,검색,유저,장바구니]
- 푸터: [customerService,companyInfomaition,snsLink,logo]
- 공통 버튼: [기본, hover, focus, disabled]
- 공통 카드: [구조와 반복 규칙]

## 디자인 토큰

- 배경색: [#ffffff]
- 본문색: [#101010]
- 강조색: [#15283E]
  - 네이비/딥블루 톤으로 메인 브랜드 아이덴티티 및 상단 헤더, 카테고리/섹션 포인트에 사용
- 서브/보조색: [보조 텍스트: #666666 ~ #888888]
- 제목 폰트: ['Poppins, sans-serif', weight: 'semiBold (600)' / 'bold (700)', 사용 위치: 브랜드 영문 로고(CHAAKAN), 영어 슬로건, 섹션 영어 타이틀 (`PRIZE FOR ME`, `THE CHAAKAN FLAGSHIP BRAND` 등)]
- 본문 폰트: ['Pretendard, -apple-system, BlinkMacSystemFont, sans-serif', weight: 'regular (400)', 'Medium (500)', 'SemiBold (600)' 사용 위치: '한글 브랜드 소개 문구, 제품명, 가격 표시, 고객센터 안내 정보']
-  폰트 크기 체계 (Font Sizes):
  - Hero Title: `32px - 40px`
  - Section Title: `20px - 24px`
  - Subtitle / Product Title: `14px - 16px`
  - Body / Price / Info: `12px - 14px`
  - Caption / Footer: `11px - 12px`
- 기본 간격: [기본 간격 시스템 (8pt Grid System): `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, 요소 간 기본 간격: `8px` / `16px`, 섹션 간 여백 (Section Margin): `40px` ~ `64px`]
- 라운드: [5px, 사용 위치: '상품 카드 이미지 썸네일, 버튼(Button), 배지(Badge) 및 이벤트 박스 코너']
- 그림자: [사용 위치: '마우스 호버 시 상품 카드 드롭다운, 부유형 퀵 메뉴, 모달 및 팝업 요소', 배너/섹션 영역: 그림자 없이 깔끔한 Border(`1px solid #E5E5E5`) 구분선 위주 활용, box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);]

## 반응형

- 360px: [introduction - img(상단), txt(하단) 수직 이동 및 1열 배치 / 특장점(쿠션, 몰드창, 가벼움) 수직 1열 카드 전환 / 상품 그리드 2열(2 columns) 구성 / 카테고리 탭 가로 터치 스크롤 적용 / 푸터 정보 수직 단순화 및 아코디언화]
- 768px: [태블릿 배치 (introduction 이미지-텍스트 좌우 2열 배치 / 특장점 3열 가로 배열 / 상품 그리드 3~4열 구성 / GNB 메뉴 일부 노출 및 우측 유저 아이콘 배치)]
- 1280px: [데스크톱 최대 폭(Max-width 1200px~1440px) 중앙 정렬 및 4열 이상 균등 카드 열 구성 / GNB 풀 비주얼 네비게이션 적용 / 하단 푸터 다열 확장 레이아웃]

## 인터랙션

- 메뉴: [햄버거 아이콘 클릭 시 슬라이드아웃(Slide-out) 드로어 메뉴 열기·닫기 / GNB 메뉴 호버 시 드롭다운 레이어 노출 / 현재 활성화된 카테고리 탭 텍스트 볼드 및 언더라인(Bottom Border)으로 현재 위치 표시]
- 버튼: [hover(배경색 톤 다운 및 상품 카드 이미지 Scale Up) / pressed(클릭 시 Scale Down) / disabled(품절 시 비활성화 및 cursor: not-allowed)]
- 스크롤: [스크롤 시 상단 헤더 고정(Sticky/Fixed Header) / 모바일 카테고리 탭 좌우 터치 스크롤]
- 애니메이션: [메인 비주얼 및 상품 카드 / 스크롤 시 해당 섹션이 뷰포트에 진입할 때(Scroll Trigger) / Fade-in Up(Opacity 0 → 1, Y축 +20px → 0px 이동)]

## 에셋

- 로고: [chaakan/img]
- 이미지: [chaakan/img]
- 아이콘: [chaakan/img/icon,chaakan/img/shoes_icon]
- 폰트: [https://fonts.google.com/specimen/Poppins, https://github.com/orioncactus/pretendard]

## 확인된 사실

- [브랜드명: 착한구두 (CHAAKAN), 주 색상: 딥네이비(#15283E), 다크그레이/블랙(#101010), 화이트(#FFFFFF), 핵심 기능/기술: 더착한 라인(고주파 쿠션, 자체제작 몰드창, 경량 설계), 디바이스 환경: 360px(모바일), 768px(태블릿), 1280px+(PC) 3단계 반응형 시안 구현, 하단 카테고리 구성: 샌들/슬리퍼, 슬링백/뮬, 펌프스/힐, 플랫, 로퍼/블로퍼, 스니커즈, 레인부츠]

## 아직 확인하지 못한 내용

- [상품 상세페이지 및 장바구니/구매 레이어 팝업 구현 여부, 상품 리스트 페이징 방식 (무한 스크롤 / 더보기 버튼 / 페이지 네이션), 스크롤 시 헤더 높이가 줄어드는 Shrink 헤더 효과 포함 여부]