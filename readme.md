# Idea Pitch — SKT Design System

**NAVY(`#1F3864`) 1색 지배**의 라이트 퍼스트 컨설팅 덱(Idea Pitch) 디자인 시스템.
경영진 보고·아이디어 피칭 슬라이드의 구조(`Idea Pitch | ① 상황 인식` 헤더, 거버닝 메시지,
섹션 필 카드, 네이비 결론 바)를 **토큰 + React 컴포넌트 + 슬라이드 템플릿 + 덱 템플릿**으로 규격화했다.
브랜드 마크는 **SK telecom** (red `#EA002C` / orange `#FF7A00`).

> 이 프로젝트는 첨부된 `idea-pitch-design-system/` 코드베이스를 이식·확장한 것이다. 원 시스템의
> 토큰·컴포넌트·슬라이드 패턴을 그대로 계승하되, 아래 **v2 확장**을 반영했다.

## v2 확장 (이번 브리프)

원 브리프(한국어): *"logo는 하단에 추가해주고, 양식내 페이지 번호와 우측 상단에 소제목을 추가해줘,
추가로 간지에 대한 디자인을 검토하여 추가"* — 세 가지를 반영했다.

1. **하단 로고 + 페이지 번호 (Footer, ⑤ Zone)** — 모든 본문 슬라이드 하단에 SKT 로고(좌) + 페이지 번호(우) +
   상단 헤어라인을 추가. 컴포넌트 `SlideFooter`, 클래스 `.footer`. 이를 위해 Takeaway 바를 위로 당기고
   본문 존 높이를 434px로 축소했다.
2. **우측 상단 소제목 (Header 소제목)** — 헤더 우측 끝에 보고명/기밀 등급 등 소제목을 muted로 배치.
   `SlideHeader`의 `subtitle` prop, 클래스 `.subtitle`. (원 시스템의 "우측 상단 배지 금지" 규칙을 대체)
3. **간지 (Section Divider)** — 섹션 사이에 넣는 풀블리드 NAVY 구분 슬라이드. 대형 고스트 섹션 번호 +
   오렌지 액센트 룰 + 섹션 타이틀 + 화이트 SKT 로고. 컴포넌트 `SectionDivider`, 클래스 `.divider-slide`.

## 소스 (Sources — 열람 권한이 없을 수 있으나 기록해 둔다)

- **GitHub repo**: https://github.com/cscw95/idea-pitch-design-system — 더 나은 디자인 재현을 위해 이 저장소를
  더 탐색해볼 것을 권장한다 (컴포넌트 원본, python-pptx 생성기, 미리보기 PNG 포함).
- **Preview (갤러리)**: https://cscw95.github.io/idea-pitch-design-system/
- **첨부 코드베이스**: `idea-pitch-design-system/` (File System Access 마운트)
- **업로드 로고**: `uploads/brand-download-skt-2.svg` → `assets/skt-logo.svg` (+ 화이트 녹아웃 `skt-logo-white.svg`)
- **Claude Design 원 프로젝트**: "Idea Pitch Design System" (`dec7a5cf-c8a1-4c09-adbe-eac75689e282`)

---

## 메시지 구조 — 이 시스템의 뼈대

모든 본문 슬라이드는 **5-Zone** 수직 구조를 따른다 (v2에서 Footer 추가).

| Zone | 내용 | 규칙 |
|------|------|------|
| ① Header | `덱이름 \| 섹션명` + **우측 상단 소제목** + 2px 룰 | 섹션명은 ①②③ 원문자 넘버링 |
| ② Governing Headline | 35px EB 중앙 한 줄 | 슬라이드의 **'판단'** — 10어절 이내 |
| ③ Section Cards | 좌 메인(576px) + 우 서브 스택(588px) | 카드 상단에 NAVY 필이 테두리에 걸침 |
| ④ Takeaway Bar | NAVY 바 + 흰색 EB 결론 | **'행동 함의'** — Headline과 다른 문장 |
| ⑤ Footer | **SKT 로고(좌) + 페이지 번호(우)** + 헤어라인 | 좌 로고 20px · 우 `n / total` |

메시지는 3층: **Headline(판단) → Cards(근거 블록) → Takeaway(행동 함의)**.
**간지(Section Divider)** 는 이 본문 슬라이드들 사이에 섹션 리듬을 부여하는 풀블리드 NAVY 슬라이드다.

---

## CONTENT FUNDAMENTALS — 카피는 이렇게 쓴다

- **언어**: 한국어 본문 + 영문 고유명사(`Two-Track`, `Cross-domain`, `BM`, `Stance`). 콘솔티드 국문 보고체.
- **인칭·톤**: 무주어의 판단문. "…이 중요함", "…필요", "…제시" 처럼 **명사형 종결/음슴체**로 단정한다.
  "저는/여러분" 같은 1·2인칭을 쓰지 않는다. 객관·단정·간결이 핵심 톤.
- **케이싱**: 영문은 고유명사/약어만 대문자, 나머지는 문장형. 이모지·느낌표 금지.
- **거버닝 메시지(Headline)**: '판단' 한 줄. 예) "투자의 시계와 설계의 시계는 다름".
- **Takeaway**: '행동 함의' 한 줄, Headline과 **다른 문장**. 예) "투자는 신중히 하되, 규합은 전사 협력으로 확장 필요".
- **파생/각주 문장**: `→ `로 시작하고 muted(GRAY) 처리. 예) "→ 단독 정의 불가 · 전사 공동 설계".
- **필/칩 라벨**: 명사구 5어절 이내. 예) "당사 방향성 (출처)", "기울어진 운동장", "절반의 설계도".
- **중간 결론 밴드**: `▶ ` 접두 + 한 문장. 예) "▶ 중간 결론 — 방향성은 도출, 단 전제 조건은 미확정".
- **바이브**: 맥킨지·컨설팅 임원 보고 톤. 과장·수사 없이 "그래서 무엇을 할 것인가"를 명확히.

---

## VISUAL FOUNDATIONS — 시각 기반

- **컬러**: NAVY(`#1F3864`) 1색 지배 + SKY(`#DCE7F2`) 보조 + RED(`#C00000`) '지금' 포인트(슬라이드당 1개 이내).
  BLUE(`#1273C4`)는 링크/액션 전용. STEEL(`#8C96A0`)은 과거/레거시. 브랜드 색 2가지(NAVY+BLUE) 초과 금지.
  간지·footer 로고에만 SKT red/orange가 등장한다.
- **정보 시제(tense)** — 이 시스템의 시그니처 규칙: 과거/현황 = STEEL 채움 · 현재 결정/계획 = NAVY 채움 ·
  미래/미확정/외부 수요 = NAVY **점선 테두리**. 결론 강도는 SKY 밴드(카드 내부) → NAVY 바(슬라이드 최종) 순 상승.
- **타이포**: **나눔스퀘어(NanumSquare)** 단일 서체. 웨이트 토큰으로만 굵기 지정(가짜 볼드 금지):
  eb 800 / b 700 / r 400 / l 300. 스케일: Headline 35px · Header 29px · Section 27px · Takeaway 21px ·
  Card Head 20px · Body 16px · Sub 14px · Footer 12px.
- **배경**: 본문은 순백(`#FFFFFF`) 라이트. 이미지·그라디언트·텍스처·패턴 **없음**. 간지만 풀블리드 NAVY.
- **카드**: 흰 배경 + `1.3px solid #C9CDD3` 테두리 + `10px` 라운드. **그림자 없음**(플랫). 상단 테두리에
  NAVY 캡슐 필이 걸친다.
- **모서리**: 필/바 = 캡슐·10px 라운드, **칩·개체 박스·트랙은 직각(0)**. 혼용 금지.
- **개체/화살표**: 블록 화살표(clip-path 오각/펜타곤), 점선(미확정), STEEL 채움(과거). SVG 아이콘 아님 — 순수 도형.
- **애니메이션·호버·프레스**: 정적 산출물(슬라이드/PPT). 트랜지션·바운스·페이드 없음. 호버/프레스 상태 없음.
- **투명도·블러**: 사용하지 않음. 간지 고스트 번호만 `--navy-600` 저대비로 처리(반투명 아님).
- **레이아웃**: 1280×720 고정. 마진 43px, 2단(좌 576 / 우 588, 거터 29). 모든 개체 절대 좌표 배치.
- **이미지 톤**: 해당 없음(이미지 미사용, 순수 컬러·타입·도형).

---

## ICONOGRAPHY — 아이콘·마크

- **아이콘 시스템 없음.** 이 시스템은 아이콘 폰트·SVG 아이콘 세트·유니코드 픽토그램을 쓰지 않는다.
  '아이콘'의 역할은 **컬러 도형**(NAVY 필, STEEL 박스, 점선 박스)과 **clip-path 화살표**(FlowArrow 우/상,
  TrackArrow 펜타곤), **타임라인 노드**(채움/링 원)가 대신한다.
- **문자 마커**: 원문자 `①②③`(섹션 넘버링), `▶`(중간 결론 접두), `→`(파생/각주 접두)만 제한적으로 사용.
  **이모지 금지.**
- **유일한 브랜드 이미지 자산**: `assets/skt-logo.svg`(컬러, 라이트 배경) + `assets/skt-logo-white.svg`
  (화이트 녹아웃, 다크/간지). 업로드된 원본 SVG를 그대로 사용/리컬러했다 — 로고를 임의로 재작도하지 않았다.
- 신규 아이콘이 필요하면 하드코딩 SVG를 그리지 말고, 스트로크 굵기가 유사한 CDN 아이콘 세트를 링크하고
  이 문서에 대체 사실을 기록할 것.

---

## Components (React 컴포넌트 — `window.<Namespace>`로 노출)

`check_design_system`이 알려주는 네임스페이스로 `const { X } = window.<Namespace>` 접근. 총 14종.

**구조 (structure/)**
- **SlideFrame** — 1280×720 슬라이드 캔버스(라이트).
- **TitleSlide** — **표지 (풀블리드 NAVY 커버/제목 슬라이드)** *(v2 신규)*.
- **SlideHeader** — ① 헤더: `덱이름 | 섹션명` + **소제목(우측 상단)** + 룰.
- **GoverningHeadline** — ② 거버닝 메시지(판단 한 줄).
- **TakeawayBar** — ④ NAVY 결론 바(행동 함의).
- **SlideFooter** — ⑤ **SKT 로고 + 페이지 번호 footer** *(v2 신규)*.
- **SectionDivider** — **간지 (풀블리드 NAVY 섹션 구분)** *(v2 신규)*.

**블록 (blocks/)**
- **SectionCard** — 필 라벨이 걸친 흰 카드(③의 컨테이너).
- **LabelChip** — NAVY 직각 라벨 칩.
- **ChipRow** — 칩 + 제목 + `→` muted 보조행.
- **EmphasisBand** — SKY 중간 결론 밴드.
- **EntityBox** — 정보 시제 3종(past STEEL / plan NAVY / future 점선).
- **FlowArrow** — 블록 화살표(우=전환 / 상=증가).
- **Timeline** — done/open 노드 타임라인, '현재'만 RED.
- **TrackArrow** — Two-Track 펜타곤 트랙(navy / steel / wait).

---

## 파일 맵 (Index)

```
├── styles.css              토큰 4종 링크 — 산출물은 이 파일 하나만 링크
├── thumbnail.html          디자인 시스템 홈 타일
├── tokens/                 colors / fonts / typography / spacing (CSS 커스텀 프로퍼티)
├── assets/                 skt-logo.svg (컬러) · skt-logo-white.svg (녹아웃)
├── components/
│   ├── structure/          SlideFrame · TitleSlide · SlideHeader · GoverningHeadline · TakeawayBar
│   │                       · SlideFooter · SectionDivider  (+ structure.card.html)
│   └── blocks/             SectionCard · LabelChip · ChipRow · EmphasisBand · EntityBox
│                           · FlowArrow · Timeline · TrackArrow  (+ blocks.card.html)
├── guidelines/             파운데이션 스펙 카드 (Colors · Type · Spacing · Layout · Brand)
├── slides/                 1280×720 HTML 슬라이드 템플릿
│   ├── slide.css           슬라이드 공통 컴포넌트 클래스
│   ├── title.slide.html       표지 (커버/제목)  ← v2 신규
│   ├── diagnosis.slide.html   진단형 (상황 인식)
│   ├── proposal.slide.html    제언형 (방향성 제언)
│   ├── divider.slide.html     간지 (섹션 구분)  ← v2 신규
│   └── blank.slide.html       빈 스타터 (footer·소제목 포함)
├── templates/idea-pitch-deck/  발표용 덱 템플릿 (dc-runtime)
│   └── IdeaPitchDeck.dc.html   4장 스타터(간지·진단형·제언형·빈) — 키보드 내비·썸네일·발표 모드
├── ppt/                    PowerPoint 경로 (참고): DESIGN_SYSTEM.md · generate_template.py · .pptx
├── readme.md · SKILL.md
```

## 사용법

- **HTML 슬라이드** — `slides/blank.slide.html`을 복제해 내용을 교체. `styles.css` + `slides/slide.css`만 링크하면
  `.slide .header .subtitle .footer .card .pill .chip .row .band .takeaway .entity .track .tl-* .divider-slide` 사용 가능.
- **발표용 덱** — `templates/idea-pitch-deck/`를 복사하고 `ds-base.js`의 `base`를 바인딩된 DS 폴더로 조정한 뒤
  `<section data-label="…">`을 추가·교체. HTTP 서버로 열어야 상대경로 로드가 동작한다.
- **PPT** — `ppt/DESIGN_SYSTEM.md`(PPT 측 상세 스펙) 참고. 나눔스퀘어 OTF(`_ac`) 설치 후
  `python3 ppt/generate_template.py`.

## 작성 원칙 요약

1. 슬라이드당 RED 시점 마커 1개 이내, 브랜드 색 2가지(NAVY+BLUE) 초과 금지.
2. 정보 시제 규칙(STEEL/NAVY/점선)을 임의 색으로 대체하지 않는다.
3. Headline은 '판단', Takeaway는 '행동 함의' — 같은 문장 반복 금지.
4. 서체는 나눔스퀘어만, 웨이트 토큰으로만 굵기 지정(가짜 볼드 금지).
5. 카드 필 라벨은 명사구 5어절 이내. 이모지 금지. 파생 문장은 `→ ` muted.
6. footer 로고는 라이트 배경 컬러본, 간지에는 화이트 녹아웃본을 사용한다.
7. **본문 텍스트 14px(--fs-sub) 미만 금지** — 13px(caption)·12px(footer)는 chrome 전용.
8. **칩·필 크기는 토큰 고정** — 공간이 부족하면 라벨을 줄이지, 크기를 줄이지 않는다.
9. **밀도 상한: 카드당 ChipRow 3개 이하** — 초과하면 슬라이드를 분할하고 간지로 리듬을 만든다.
10. 국문 줄바꿈은 keep-all — 수치·단위(`45억원(30MW)`)는 `.num`(nowrap)으로 보호한다.

> 적용 사례 감사: `guidelines/neocloud-deck-audit.html` — NeoCloud BMaaS 덱(28p) 실측 진단과 v2.1 개선 반영 내역.
