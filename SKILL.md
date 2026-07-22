---
name: idea-pitch-design
description: Idea Pitch(경영진 보고·아이디어 피칭) 슬라이드를 이 디자인 시스템으로 생성할 때 사용한다. NAVY 지배 라이트 테마, 4-Zone 레이아웃, 정보 시제 규칙, 나눔스퀘어 서체 체계를 포함하며 HTML 슬라이드와 python-pptx 두 산출 경로를 제공한다.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

This is a **light-first** consulting-deck design system built around **NAVY (`#1F3864`)**
as the single dominant color. Every slide follows the 4-Zone structure:
Header → Governing Headline(판단) → Section Cards(근거) → Takeaway Bar(행동 함의).

Key files:
- `readme.md` — 전체 가이드: 메시지 구조, 컬러/시제 규칙, 타이포, 작성 원칙.
- `styles.css` — 토큰 전체 링크. HTML 산출물은 이 파일 하나만 링크.
- `tokens/` — CSS 커스텀 프로퍼티 (colors / typography / spacing).
- `guidelines/` — 파운데이션 스펙 카드.
- `slides/` — 1280×720 HTML 슬라이드 템플릿 + `slide.css` 컴포넌트 클래스.
- `ppt/generate_template.py` — python-pptx 컴포넌트 함수 API (`add_card`, `add_chip_row`,
  `add_timeline`, `add_entity`, `add_track`, `add_takeaway` …).
- `ppt/idea_pitch_template.pptx` — 복제용 8장 템플릿 (빈 템플릿 슬라이드 포함).

HTML 슬라이드를 만들 때는 `slides/blank.slide.html`을 복제해 내용을 교체하고,
PPT를 만들 때는 `ppt/generate_template.py`의 함수를 조합하거나 pptx의 빈 템플릿을 복제한다.

Hard rules:
- 서체는 나눔스퀘어만 사용 (웹: CDN `NanumSquare` 400/700/800, PPT: `NanumSquareOTF_ac` R/B/EB).
  가짜 볼드 금지 — 웨이트는 패밀리/폰트웨이트로만 표현.
- 정보 시제: 과거·현황 = STEEL 채움, 현재 결정·계획 = NAVY 채움, 미확정·외부 수요 = NAVY 점선.
- RED는 '지금' 류 시점 마커로 슬라이드당 1개 이내.
- Headline(판단)과 Takeaway(행동 함의)는 반드시 다른 문장.
- 이모지 금지. 파생 문장은 `→ `로 시작해 muted 처리.
