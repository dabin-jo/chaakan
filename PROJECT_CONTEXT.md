# CHAAKAN 작업 기록

## 완료된 작업

### 1차: 메인페이지 디테일 보정 (best 모자이크 그리드, 모바일 유저 아이콘, skill_card 높이)
- `index.html`, `styles.css`
- 모바일 헤더 유저(마이페이지) 아이콘을 `.header_user` 클래스로 768px 이상에서만 노출
- `best` 섹션 타이틀을 `best_grid`의 첫 `<li class="best_title">`로 편입해 768px 이상에서 모자이크 그리드(타이틀 1~2열, 카드 3열부터) 구현
- `.skill_card`에 미디어쿼리 밖에 있던 `height:739px` 고정값을 제거하고 1280px 전용으로 이동(360px/768px에서 데스크톱 높이가 강제되던 버그 수정)

### 2차: 360px 세부 보정 (우정렬, 카드 이미지, gutter)
- `--gutter` 기본값 16px → 12px
- `introduction` 본문 텍스트를 모바일 전용 우정렬로 변경(768px↑는 기존 좌정렬 유지)
- `chaakan_skill` 카드 배경 이미지를 모바일에서 기본 노출(768px↑는 기존 hover-reveal 유지)

### 3차(재시작): situation 섹션 767px 이하 재구현 — 더 단순한 방식
- 롤백 후 situation 767px 이하를 처음부터 다시 계획해서 구현. 이전 3회 실패 원인(Swiper 클래스가 데스크톱에 새어나감 / 배경이미지 `position:absolute` 겹침이 카드 배치를 깨뜨림 / `flex-shrink` 누락으로 카드가 줄어듦)을 구조적으로 피하는 방식 채택
- **라이브러리 없이 순수 CSS**: 원본에 이미 있던 `.situation_products{overflow-x:auto}`(네이티브 스크롤)를 그대로 활용 + `scroll-snap-type:x proximity`/`scroll-snap-align:start` 추가만으로 peek 스와이프 구현. Swiper.js 등 외부 라이브러리 도입 안 함
- **배경 이미지는 `position:absolute` 겹침 대신 `background-image` 방식**: `situation_products`(ul)를 감싸는 새 `<div class="situation_media" id="situation_media">`에 `background-image`를 JS로 지정. 좌표 계산이나 z-index가 전혀 필요 없어 이전의 "카드가 배경 밖으로 빠져 보이는" 버그가 구조적으로 발생할 수 없음
- 기존 `situation_bg`(img, 데스크톱 전용)는 위치·속성 그대로 두고 모바일에서만 `display:none`, 768px에서 `display:block` 1줄만 추가로 되돌림. **그 외 768px/1280px 블록은 전혀 수정하지 않음** — `git diff`로 확인한 결과 의도한 대로 768px엔 이 1줄 외에 situation 관련 변경이 없음(PC/tab 회귀 재발 방지)
- 카드 폭은 Figma 스크린샷을 픽셀 단위로 재실측해 `60%`(기존 추정치 78%는 부정확했음), 카드 이미지 비율은 실측 결과 기존 `1:1`이 이미 Figma와 일치해 변경하지 않음
- `script.js`: `updateSituationMedia(bg)` 헬퍼 함수 추가, 최초 로드 시 1회 + 탭 전환 시 모바일 뷰포트에서만 배경 갱신. 기존 `situationBg.src` 로직(데스크톱용)은 그대로 유지

### 4차: footer COMPANY INFORMATION 텍스트 줄바꿈 수정
- `index.html`의 footer company 정보가 "이메일 | 회사명" 한 줄 + "사업자번호" 둘째 줄로 되어 있었는데, Figma(node 2441:1434, tab footer)를 확인하니 이메일/회사명/사업자번호가 각각 별도 줄(파이프 구분자 없음)이었음. `<br />`을 하나 더 추가해 3줄로 수정. 이 마크업은 모바일/태블릿/PC가 공유하므로 전 breakpoint에 동일하게 적용됨(태블릿은 아코디언이 항상 펼쳐져 있어 이 차이가 바로 보였을 뿐, 텍스트 자체는 breakpoint 공통)

## 롤백 안내 (중요)

- situation 섹션 Swiper 전환, lookbook Swiper 전환, container 패딩 단축속성 버그 수정(introduction/chaakan_skill/best/quick_menu), `.section_eyebrow`/`.section_desc` clamp 조정 등 **3차 이후 작업은 모두 되돌렸습니다.**
- 수정을 거듭할수록 situation 섹션이 계속 어긋나서, 사용자 요청에 따라 `git checkout`으로 `index.html`/`styles.css`/`script.js`를 마지막 커밋(`0e03a06 img_변경`) 상태로 되돌린 뒤 1차·2차 변경사항만 다시 적용했습니다.
- `script.js`는 3차부터 추가됐던 Swiper 초기화 코드가 전부 사라지고 원본 그대로입니다(situation 탭 전환 로직만 존재).
- situation/lookbook 관련 요청(Swiper 스와이프, 배경사진 레이어링 등)은 **처음부터 다시 계획하고 진행해야 합니다.**

## 남은 문제 / 확인 필요

- 이 개발 환경에 Node.js/npm/chromium-cli/작동하는 Python이 없어 로컬 서버 구동과 헤드리스 브라우저 렌더링 확인을 한 번도 수행하지 못했습니다. situation/lookbook을 다시 손댈 때는 이 제약을 고려해 더 보수적으로(작은 단위로 확인받으며) 진행하는 것이 필요합니다.
- 로딩/빈/오류 상태, `products.json`, localStorage(최근 본 상품/검색어), 카테고리 실시간 필터링은 이번 범위에서 제외된 상태 그대로입니다.

## 마지막 검증 결과

- `git diff`로 현재 상태가 1차·2차 변경사항만 포함하고 있음을 확인했습니다(코드 레벨 검증 완료).
- 브라우저 렌더링/키보드 포커스/콘솔 에러 확인: **미실행**(환경 제약). 사용자가 실기기·브라우저에서 최종 확인 필요.
