# Idea Pitch PPT Template — Design System

첨부된 "Idea Pitch" 슬라이드(상황 인식 / 방향성 제언)에서 추출한 디자인 언어를
재사용 가능한 토큰 + 컴포넌트 체계로 정의한 문서.
`generate_template.py`가 이 시스템을 코드로 구현하며, 실행 시 `idea_pitch_template.pptx`를 생성한다.

---

## 1. 캔버스 & 그리드

| 항목 | 값 |
|------|-----|
| 슬라이드 크기 | 16:9 (13.33 × 7.5 in) |
| 좌우 마진 | 0.45 in |
| 콘텐츠 폭 | 12.43 in |
| 컬럼 거터 | 0.30 in |
| 기본 2단 분할 | 좌 6.00 in / 우 6.13 in (좌측 메인, 우측 서브 스택) |

### 수직 존(Zone) 구조 — 모든 본문 슬라이드 공통

| Zone | Y 범위 | 역할 |
|------|--------|------|
| ① Header | 0.20 – 0.98 | 덱 이름 + 섹션명, 발표자 배지, 하단 굵은 룰(rule) |
| ② Headline | 1.10 – 1.70 | 슬라이드 전체를 지배하는 한 줄 메시지 (중앙 정렬) |
| ③ Body | 1.95 – 6.60 | 섹션 카드 2단 배치 (카드 상단에 필 라벨) |
| ④ Takeaway | 6.78 – 7.33 | 네이비 바 + 흰색 볼드 결론 문장 |

---

## 2. 컬러 토큰

| 토큰 | HEX | 용도 |
|-------|-----|------|
| `NAVY` | `#1F3864` | 주 색상 — 섹션 필, 라벨 칩, 테이크어웨이 바, 강조 도형 |
| `BLUE` | `#1273C4` | 발표자 배지, 포인트 액션 |
| `SKY` | `#DCE7F2` | 강조 밴드(중간 결론), 타임라인 현재 구간 배경 |
| `INK` | `#1A1A1A` | 본문/헤드라인 텍스트 |
| `GRAY_TX` | `#7F7F7F` | 보조 설명, 캡션, 각주(→ 문장) |
| `STEEL` | `#8C96A0` | 현황/레거시 개체 박스 (컬러 대비로 '과거' 표현) |
| `BORDER` | `#C9CDD3` | 카드 테두리, 표 구분선 |
| `RED` | `#C00000` | '지금/현재' 등 시점 강조 마커 (극히 제한적으로) |
| `WHITE` | `#FFFFFF` | 배경, 반전 텍스트 |

색 사용 원칙: **NAVY 1색 지배 + SKY 보조 + RED 포인트 1곳 이내**. 정보의 시제(과거=STEEL, 현재/계획=NAVY, 미래/미확정=점선)를 색과 선 스타일로 구분한다.

## 3. 타이포그래피 토큰 (기본 서체: 나눔스퀘어)

기본 서체는 [네이버 한글 나눔글꼴](https://hangeul.naver.com/fonts/search?f=nanum)의 **나눔스퀘어(NanumSquareOTF_ac)** 4웨이트를 사용한다.
`_ac` 계열은 한글 11,172자 전체 지원판. 나눔스퀘어는 웨이트별로 폰트 패밀리가 분리되어 있으므로,
bold 속성 대신 **웨이트 토큰**(`l`/`r`/`b`/`eb`)으로 패밀리를 지정한다 (가짜 볼드 중복 방지를 위해 bold=False 고정).

| 웨이트 토큰 | 폰트 패밀리 |
|------------|-------------|
| `eb` | NanumSquareOTF_ac ExtraBold |
| `b`  | NanumSquareOTF_ac Bold |
| `r`  | NanumSquareOTF_ac |
| `l`  | NanumSquareOTF_ac Light |

| 토큰 | 크기 | 웨이트 | 색 | 용도 |
|-------|------|------|-----|------|
| `T-Header` | 22pt | eb | INK | 헤더 덱 이름 ("Idea Pitch") |
| `T-Section` | 20pt | eb | INK | 헤더 섹션명 ("② 방향성 제언") |
| `T-Headline` | 26pt | eb | INK | 거버닝 메시지 (중앙) |
| `T-CardHead` | 15pt | b | INK | 카드 내부 서브 헤드 |
| `T-Body` | 12pt | r | INK | 본문 |
| `T-Sub` | 10.5pt | r (또는 l) | GRAY_TX | 보조 설명, → 파생 문장 |
| `T-Chip` | 12pt | eb | WHITE | 라벨 칩 텍스트 |
| `T-Pill` | 14pt | eb | WHITE | 섹션 필 텍스트 |
| `T-Takeaway` | 16pt | eb | WHITE | 하단 결론 바 |
| `T-Badge` | 14/10pt | eb/r | WHITE | 발표자 배지 (이름/팀) |

> 다른 PC에서 열 때는 나눔스퀘어 폰트 설치가 필요하다 (미설치 시 시스템 기본 서체로 대체됨).

## 4. 컴포넌트 라이브러리

| 컴포넌트 | 정의 | 함수 |
|----------|------|------|
| **Header** | 좌측 `덱이름 | 섹션명` + 하단 1.5pt 룰 + 우상단 배지 | `add_header()` |
| **Presenter Badge** | BLUE 사각형, 이름(Bold)+팀 2줄, 우상단 고정 | `add_badge()` |
| **Governing Headline** | 26pt Bold 중앙 정렬 한 줄 메시지 | `add_headline()` |
| **Section Card** | 흰 배경 + BORDER 1pt 라운드 카드, 상단 중앙에 NAVY 필 라벨이 테두리에 걸침 | `add_card()` |
| **Label Chip** | NAVY 사각 칩 + 우측 설명 텍스트 행 (기울어진 운동장 등) | `add_chip()` / `add_chip_row()` |
| **Emphasis Band** | SKY 배경 밴드 + NAVY Bold 문장 — 카드 내 중간 결론 | `add_band()` |
| **Takeaway Bar** | NAVY 라운드 바 + WHITE Bold 결론 — 슬라이드당 1개 | `add_takeaway()` |
| **Timeline** | 수평선 + 원형 노드(완료=NAVY 채움, 미래=외곽선), 현재는 RED 라벨 | `add_timeline()` |
| **Entity Box** | 개체 박스 3종: STEEL(현황) / NAVY(계획) / 점선(미확정 수요) | `add_entity()` |
| **Flow Arrow** | 블록 화살표(우/상) — 전환·증가 표현 | `add_arrow()` |
| **Track Arrow** | 펜타곤형 트랙 화살표 — Two-Track 로드맵 표현 | `add_track()` |

### 카드 필(pill) 규칙
- 크기: 폭 2.4–3.2 in × 높이 0.44 in, 완전 라운드(캡슐)
- 위치: 카드 상단 테두리에 수직 중앙이 걸치도록 `card_y − 0.22`
- 텍스트: `T-Pill` 중앙 정렬, 1줄 유지

### 정보 시제 표현 규칙
- **과거/현황**: STEEL 채움 박스
- **현재 결정/계획**: NAVY 채움 박스
- **미래/미확정/외부 수요**: 점선 테두리 + 흰 배경
- **결론/주장**: SKY 밴드(카드 내부) → NAVY 바(슬라이드 최종)

## 5. 슬라이드 패턴

| 패턴 | 구성 | 예 |
|------|------|-----|
| **A. 진단형 (상황 인식)** | 좌: 칩 행 3개 스택 카드 / 우: 타임라인 카드 + 비교 카드 | ① 상황 인식 |
| **B. 제언형 (방향성)** | 좌: 전환 다이어그램 + 강조 밴드 카드 / 우: 한계 칩 카드 + 트랙 로드맵 카드 | ② 방향성 제언 |
| **C. 빈 템플릿** | 존 구조만 배치된 스타터 | 신규 슬라이드용 |

## 6. 작성 원칙 (거버닝 메시지 체계)

1. 슬라이드당 메시지는 3층: **Headline(주장) → Card(근거 블록) → Takeaway(결론/요청)**
2. Headline과 Takeaway는 서로 다른 문장 — Headline은 '판단', Takeaway는 '행동 함의'
3. 카드 필 라벨은 명사구 5어절 이내
4. 각주형 파생 문장은 `→`로 시작, GRAY_TX 처리
5. RED는 슬라이드당 1개 시점 마커에만 사용

---

## 사용법

```bash
cd ~/ppt-design-system
python3 generate_template.py     # → idea_pitch_template.pptx 생성
```

새 슬라이드를 만들 때는 `generate_template.py`의 컴포넌트 함수를 조합하거나,
생성된 pptx의 "빈 템플릿" 슬라이드를 복제하여 사용한다.
