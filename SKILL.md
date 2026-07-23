---
name: idea-pitch-skt-design
description: Use this skill to generate well-branded interfaces and assets for the SKT Idea Pitch consulting deck system (경영진 보고·아이디어 피칭·상황 인식/방향성 제언 슬라이드), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, the SKT logo, 5-Zone layout (Header 소제목 · Takeaway · Footer 로고+페이지 번호), 간지(section divider) design, the information-tense rule, and React/HTML slide + deck templates. Triggers: 'Idea Pitch 슬라이드', 'SKT 보고 PPT', '아이디어 피치 덱', '상황 인식/방향성 제언', '간지 슬라이드'.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

이 스킬은 **NAVY(`#1F3864`) 1색 지배의 라이트 퍼스트 컨설팅 덱** 디자인 시스템이다.
모든 본문 슬라이드는 **5-Zone** 구조를 따른다:
**Header(덱이름 | 섹션명 + 우측 상단 소제목 + 룰) → Governing Headline(판단) → Section Cards(근거)
→ Takeaway Bar(행동 함의) → Footer(SKT 로고 + 페이지 번호)**.
섹션 사이에는 **간지(SectionDivider)** — 풀블리드 NAVY 구분 슬라이드 — 를 넣는다.

## Key files
- `readme.md` — 전체 가이드: 메시지 구조, v2 확장(footer·소제목·간지), 컬러/시제 규칙, 타이포, 콘텐츠·시각 원칙, 컴포넌트 인덱스.
- `styles.css` — 토큰 전체 링크(fonts/colors/typography/spacing). HTML 산출물은 이 파일 하나만 링크.
- `tokens/` — CSS 커스텀 프로퍼티. `fonts.css`는 나눔스퀘어 @font-face 4웨이트.
- `assets/skt-logo.svg` (컬러, 라이트 배경) · `assets/skt-logo-white.svg` (녹아웃, 다크/간지).
- `guidelines/` — 파운데이션 스펙 카드 (Colors · Type · Spacing · Layout · Brand[로고·footer·소제목]).
- `components/structure/` · `components/blocks/` — 14종 React 컴포넌트 (.jsx + .d.ts + .prompt.md).
- `slides/` — 1280×720 HTML 템플릿 + `slide.css`: `diagnosis`(진단형) · `proposal`(제언형)
  · `divider`(간지) · `blank`(빈, footer·소제목 포함).
- `templates/idea-pitch-deck/IdeaPitchDeck.dc.html` — 발표용 덱 4장 스타터(간지·진단형·제언형·빈).
- `ppt/` — python-pptx 생성기 + 스펙 문서 + .pptx 템플릿 (참고 경로).
- Source repo: https://github.com/cscw95/idea-pitch-design-system

## 산출 경로 선택
1. **HTML 슬라이드** (기본) — `slides/blank.slide.html`을 복제해 내용 교체. `styles.css` + `slides/slide.css` 복사.
2. **발표용 덱** — `templates/idea-pitch-deck/`와 루트 `styles.css`·`tokens/`·`_ds_bundle.js`를 복사하고
   `ds-base.js`의 `base`를 조정. `<section data-label="…">` 추가·교체. HTTP 서버로 확인.
3. **PPT 파일** — `ppt/generate_template.py` 사용(`pip install python-pptx`, 나눔스퀘어 OTF 설치).

## Hard rules
- 서체는 나눔스퀘어만. 가짜 볼드 금지 — 웨이트 토큰(l/r/b/eb)으로만 굵기 지정.
- 정보 시제: 과거·현황 = STEEL 채움, 현재·계획 = NAVY 채움, 미확정·외부 수요 = NAVY 점선.
- RED(`#C00000`)는 '지금' 시점 마커로 슬라이드당 1개 이내. 브랜드 색 2가지(NAVY+BLUE) 초과 금지.
- Headline(판단)과 Takeaway(행동 함의)는 반드시 다른 문장.
- 이모지 금지. 파생 문장은 `→ `로 시작해 muted. 카드 필 라벨은 명사구 5어절 이내.
- **Footer 로고**: 라이트 배경엔 `skt-logo.svg`, 간지 등 다크 배경엔 `skt-logo-white.svg`.
- **소제목**은 헤더 우측 상단 muted. **간지**는 섹션 시작마다 풀블리드 NAVY로 삽입.
- 토큰 외 임의 색·크기 사용 금지. SKT 로고를 재작도하지 말 것(제공된 SVG만 사용/리컬러).
- **본문 텍스트 14px 미만 금지** — caption 13/footer 12는 chrome 전용, 본문 조판에 쓰지 않는다.
- **칩·필 크기는 토큰 고정** — 공간 부족 시 라벨을 줄이지 크기를 줄이지 말 것.
- **카드당 ChipRow 3개 이하** — 초과하면 슬라이드 분할. 국문은 keep-all, 수치는 `.num`(nowrap)으로 보호.
