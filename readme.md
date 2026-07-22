# Idea Pitch — Design System

**NAVY(`#1F3864`) 1색 지배**의 라이트 퍼스트 컨설팅 덱(Idea Pitch) 디자인 시스템.
경영진 보고·아이디어 피칭 슬라이드의 구조("Idea Pitch | ① 상황 인식" 헤더, 거버닝 메시지,
섹션 필 카드, 네이비 결론 바)를 토큰 + 컴포넌트 + 슬라이드 템플릿으로 규격화했다.

> 원 브리프: *"첨부 이미지(Idea Pitch 상황 인식 / 방향성 제언)와 같은 구조의 PPT 템플릿 design system"*
> — HTML 슬라이드와 **python-pptx 생성기**의 두 가지 산출 경로를 모두 제공한다.

**Links**
- Design Preview (갤러리): https://cscw95.github.io/idea-pitch-design-system/
- 발표용 덱 템플릿 (라이브): https://cscw95.github.io/idea-pitch-design-system/templates/idea-pitch-deck/IdeaPitchDeck.dc.html
- Source Repo: https://github.com/cscw95/idea-pitch-design-system
- Claude Design 프로젝트: "Idea Pitch Design System" (`dec7a5cf-c8a1-4c09-adbe-eac75689e282`)

---

## 메시지 구조 — 이 시스템의 뼈대

모든 본문 슬라이드는 **4-Zone** 수직 구조를 따른다.

| Zone | 내용 | 규칙 |
|------|------|------|
| ① Header | `덱이름 \| 섹션명` + 2px 룰 | 섹션명은 ①②③ 원문자 넘버링 |
| ② Governing Headline | 35px EB 중앙 한 줄 | 슬라이드의 **'판단'** — 10어절 이내 |
| ③ Section Cards | 좌 메인(576px) + 우 서브 스택(588px) | 카드 상단에 NAVY 필 라벨이 테두리에 걸침 |
| ④ Takeaway Bar | NAVY 바 + 흰색 EB 결론 | **'행동 함의'** — Headline과 다른 문장 |

메시지는 3층: **Headline(판단) → Cards(근거 블록) → Takeaway(행동 함의)**.

## 컬러 — 정보의 '시제'를 색으로 구분

- **NAVY `#1F3864`** — 유일한 지배색. 섹션 필, 라벨 칩, 결론 바, 계획 개체.
- **BLUE `#1273C4`** — 포인트 액션·링크 전용.
- **SKY `#DCE7F2`** — 강조 밴드(카드 내 중간 결론).
- **STEEL `#8C96A0`** — 현황·레거시 개체.
- **RED `#C00000`** — '지금' 시점 마커. **슬라이드당 1개.**

핵심 규칙 — **정보 시제(tense)**: 과거/현황 = STEEL 채움 (`--tense-past`) · 현재 결정/계획 = NAVY 채움 (`--tense-plan`) · 미래/미확정/외부 수요 = NAVY 점선 테두리 (`--tense-future`). 결론의 강도는 SKY 밴드(카드 내부) → NAVY 바(슬라이드 최종) 순으로 상승한다.

## 타이포그래피 — 나눔스퀘어 단일 서체

[네이버 한글 나눔글꼴](https://hangeul.naver.com/fonts/search?f=nanum)의 **나눔스퀘어**를 웹·PPT 공통 서체로 사용한다.
웨이트별 패밀리가 분리되어 있으므로 bold 속성 대신 **웨이트 토큰**으로 지정한다.

| 토큰 | 웹 (CDN) | PPT (로컬 설치) | 용도 |
|------|----------|-----------------|------|
| `eb` | NanumSquare 800 | NanumSquareOTF_ac ExtraBold | Headline · 필 · 칩 · Takeaway |
| `b` | NanumSquare 700 | NanumSquareOTF_ac Bold | 카드 서브헤드, 칩 행 제목 |
| `r` | NanumSquare 400 | NanumSquareOTF_ac | 본문, 캡션 |
| `l` | NanumSquare 300 | NanumSquareOTF_ac Light | 보조(선택) |

스케일: Headline 35px(26pt) · Header 29px(22pt) · Takeaway 21px(16pt) · Card Head 20px(15pt) · Body 16px(12pt) · Sub 14px(10.5pt). 보조 설명·파생 문장은 `→ `로 시작하고 muted 처리.

## 파일 맵

```
├── index.html            갤러리 (GitHub Pages 진입점)
├── styles.css            토큰 3종을 링크 — 이 파일 하나만 링크하면 됨
├── tokens/               colors / typography / spacing CSS 커스텀 프로퍼티
├── guidelines/           파운데이션 스펙 카드 (컬러·시제·타입·레이아웃·컴포넌트)
├── slides/               1280×720 HTML 슬라이드 템플릿
│   ├── slide.css         슬라이드 공통 컴포넌트 클래스
│   ├── diagnosis.slide.html   진단형(상황 인식) 패턴
│   ├── proposal.slide.html    제언형(방향성 제언) 패턴
│   └── blank.slide.html       빈 스타터
├── templates/idea-pitch-deck/  발표용 덱 템플릿 (Claude Design dc-runtime)
│   ├── IdeaPitchDeck.dc.html  3장 스타터 — 키보드 내비게이션·썸네일·발표 모드
│   └── deck-stage.js / support.js / ds-base.js   덱 런타임
├── _ds_bundle.js         React 컴포넌트 번들 (SlideFrame·SectionCard·ChipRow 등 12종)
├── ppt/                  PowerPoint 경로
│   ├── generate_template.py   python-pptx 생성기 (컴포넌트 함수 API)
│   ├── idea_pitch_template.pptx  8장 템플릿 (토큰 가이드 + 예시 + 빈 템플릿)
│   └── DESIGN_SYSTEM.md       PPT 측 상세 스펙
└── docs/templates/       pptx 렌더링 미리보기 PNG
```

## 사용법

**HTML 슬라이드** — `slides/blank.slide.html`을 복제해 내용을 교체한다. `styles.css` + `slides/slide.css` 두 파일만 링크하면 컴포넌트 클래스(`.card` `.pill` `.chip` `.row` `.band` `.takeaway` `.entity` `.track` 등)를 그대로 쓸 수 있다.

**발표용 덱** — `templates/idea-pitch-deck/`와 루트 `styles.css`·`tokens/`·`_ds_bundle.js`를 함께 복사한 뒤 `<section data-label="…">`을 추가·교체한다. 상대경로 로드가 있어 HTTP 서버로 열어야 한다 (`python3 -m http.server`).

**PPT** — 나눔스퀘어 OTF(_ac 계열) 설치 후:

```bash
pip install python-pptx
cd ppt && python3 generate_template.py   # → idea_pitch_template.pptx
```

`add_header()` `add_headline()` `add_card()` `add_chip_row()` `add_band()` `add_takeaway()` `add_timeline()` `add_entity()` `add_track()` 함수를 조합해 새 슬라이드를 추가한다.

## 작성 원칙 요약

1. 슬라이드당 RED 시점 마커 1개 이내, 브랜드 색 2가지(NAVY+BLUE) 초과 금지
2. 카드 필 라벨은 명사구 5어절 이내
3. Headline은 '판단', Takeaway는 '행동 함의' — 같은 문장 반복 금지
4. 정보의 시제 규칙(STEEL/NAVY/점선)을 임의 색으로 대체하지 않는다
5. 토큰 외 임의 색·크기 사용 금지
