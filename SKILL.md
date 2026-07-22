---
name: skt-ppt
description: SKT 스타일 Idea Pitch(경영진 보고·아이디어 피칭·방향성 제언) 슬라이드/PPT를 만들 때 사용하는 디자인 시스템 스킬. 'skt-ppt', 'Idea Pitch 슬라이드', '경영진 보고 PPT', '아이디어 피치 덱', '상황 인식/방향성 제언 슬라이드' 등의 요청에 사용한다. NAVY(#1F3864) 지배 라이트 테마, 4-Zone 레이아웃, 정보 시제 규칙, 나눔스퀘어 서체 체계를 포함하며 HTML 슬라이드·발표용 덱 템플릿·python-pptx 세 가지 산출 경로를 제공한다.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

이 스킬은 **NAVY (`#1F3864`) 1색 지배의 라이트 퍼스트 컨설팅 덱** 디자인 시스템이다.
모든 본문 슬라이드는 4-Zone 구조를 따른다:
**Header(덱이름 | 섹션명 + 룰) → Governing Headline(판단 한 줄) → Section Cards(근거) → Takeaway Bar(행동 함의)**.
우측 상단 발표자 배지는 사용하지 않는다.

Key files:
- `readme.md` — 전체 가이드: 메시지 구조, 컬러/시제 규칙, 타이포, 작성 원칙.
- `styles.css` — 토큰 전체 링크(fonts/colors/typography/spacing). HTML 산출물은 이 파일 하나만 링크.
- `tokens/` — CSS 커스텀 프로퍼티. `fonts.css`는 나눔스퀘어 @font-face 4웨이트 선언.
- `guidelines/` — 파운데이션 스펙 카드 (컬러·시제·타입·레이아웃·컴포넌트).
- `slides/` — 1280×720 HTML 슬라이드 템플릿 + `slide.css` 컴포넌트 클래스
  (`.card` `.pill` `.chip` `.row` `.band` `.takeaway` `.entity` `.track` `.tl-*`).
- `templates/idea-pitch-deck/IdeaPitchDeck.dc.html` — **발표용 덱 템플릿** (Claude Design
  dc-runtime): deck-stage 웹컴포넌트 기반 3장 스타터(진단형·제언형·빈 템플릿), 키보드
  내비게이션·썸네일 레일·발표 모드 지원. HTTP로 서빙해야 동작 (`_ds_bundle.js`·`styles.css`를
  루트 상대경로로 로드).
- `_ds_bundle.js` — React 컴포넌트 번들 (SlideFrame/SlideHeader/GoverningHeadline/TakeawayBar/
  SectionCard/ChipRow/LabelChip/EmphasisBand/EntityBox/FlowArrow/Timeline/TrackArrow).
- `ppt/generate_template.py` — python-pptx 컴포넌트 함수 API (`add_header`, `add_headline`,
  `add_card`, `add_chip_row`, `add_band`, `add_takeaway`, `add_timeline`, `add_entity`, `add_track`).
- `ppt/idea_pitch_template.pptx` — 복제용 8장 템플릿 (토큰 가이드 + 예시 + 빈 템플릿).
- `docs/templates/` — pptx 렌더링 미리보기 PNG (05=진단형, 06=제언형, 07·08=빈 템플릿).
- Source repo: https://github.com/cscw95/idea-pitch-design-system
  (Preview: https://cscw95.github.io/idea-pitch-design-system/)
- Claude Design project: "Idea Pitch Design System" (dec7a5cf-c8a1-4c09-adbe-eac75689e282)

## 산출 경로 선택

1. **HTML 슬라이드** (기본, 미리보기·아티팩트용) — `slides/blank.slide.html`을 복제해
   내용을 교체한다. 이 스킬 폴더의 `styles.css`, `tokens/`, `slides/slide.css`를 산출물 위치로
   복사해 함께 배치한다. 패턴 참고: 진단형 `slides/diagnosis.slide.html`, 제언형 `slides/proposal.slide.html`.
2. **발표용 덱** (여러 장 내비게이션·발표 모드 필요 시) — `templates/idea-pitch-deck/` 폴더와
   루트 `styles.css`·`tokens/`·`_ds_bundle.js`를 함께 복사하고 `<section data-label="…">`을
   추가·교체한다. 반드시 HTTP 서버로 열어 확인한다.
3. **PPT 파일** (.pptx 납품용) — `ppt/generate_template.py`를 사용자의 작업 폴더로 복사한 뒤
   슬라이드 빌드 구간(§4)을 실제 콘텐츠로 교체해 실행한다. `pip install python-pptx` 필요.
   렌더링 검증이 필요하면 macOS Keynote AppleScript로 PNG를 내보내 확인한다.

## Hard rules

- 서체는 나눔스퀘어만 사용 (웹: `tokens/fonts.css` @font-face 400/700/800, PPT: 로컬
  `NanumSquareOTF_ac` R/B/EB). 가짜 볼드 금지 — 웨이트는 패밀리/font-weight로만 표현.
- 정보 시제: 과거·현황 = STEEL 채움, 현재 결정·계획 = NAVY 채움, 미확정·외부 수요 = NAVY 점선.
- RED(`#C00000`)는 '지금' 류 시점 마커로 슬라이드당 1개 이내.
- Headline(판단)과 Takeaway(행동 함의)는 반드시 다른 문장.
- 우측 상단 발표자 배지 금지. 이모지 금지. 파생 문장은 `→ `로 시작해 muted 처리.
- 카드 필 라벨은 명사구 5어절 이내. 토큰 외 임의 색·크기 사용 금지.
