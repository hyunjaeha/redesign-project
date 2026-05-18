# 국립중앙박물관 웹사이트 리디자인

**전시 콘텐츠가 더 잘 보이고, 필요한 정보를 쉽게 찾을 수 있도록 개선한 웹 리디자인 프로젝트**

`웹 리디자인` `UX/UI 디자인` `반응형 웹` `HTML` `CSS` `JavaScript`

<br/>

## 프로젝트 소개

국립중앙박물관 웹사이트의 정보를 더 직관적으로 탐색할 수 있도록  
메뉴 구조, 메인 화면, 전시 콘텐츠 배치를 개선한 리디자인 프로젝트입니다.

전통적인 분위기와 현대적인 웹 UI가 함께 느껴지도록 구성하고,  
전시 정보와 주요 콘텐츠가 시각적으로 돋보이도록 디자인했습니다.

<br/>

## 바로가기

| 구분        | 링크                                                                              |
| ----------- | --------------------------------------------------------------------------------- |
| 배포 페이지 | [국립중앙박물관 리디자인 바로가기](https://hyunjaeha.github.io/redesign-project/) |
| GitHub      | [Repository](https://github.com/hyunjaeha/redesign-project)                       |

<br/>

## 사용 기술

### Design

![Figma](https://img.shields.io/badge/Figma-UX/UI_Design-000000?style=flat-square&logo=figma&logoColor=white)

### Front-End

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Style-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

<br/>

## 리디자인 목표

| 목표                   | 설명                                                  |
| ---------------------- | ----------------------------------------------------- |
| 정보 구조 개선         | 복잡한 메뉴를 사용자가 이해하기 쉽게 정리             |
| 전시 콘텐츠 강조       | 메인 화면에서 전시 이미지와 콘텐츠가 돋보이도록 구성  |
| 시각적 아이덴티티 강화 | 박물관의 전통성과 차분한 분위기를 시각적으로 표현     |
| 탐색 흐름 개선         | 관람정보, 전시, 교육, 소장품 등 주요 메뉴 접근성 개선 |

<br/>

## 주요 메뉴 구조

```mermaid
flowchart TD
    A[국립중앙박물관]

    A --> B[관람정보]
    A --> C[전시]
    A --> D[교육]
    A --> E[문화행사]
    A --> F[소장품]
    A --> G[소개]

    B --> B1[관람 안내]
    B --> B2[예약하기]
    B --> B3[오시는 길]

    C --> C1[상설 전시]
    C --> C2[특별 전시]
    C --> C3[온라인 전시관]

    D --> D1[일반교육]
    D --> D2[전문교육]

    E --> E1[행사]
    E --> E2[공연]

    F --> F1[큐레이터 추천 소장품]
    F --> F2[소장품 검색]

    G --> G1[인사말]
    G --> G2[시설 소개]

    classDef root fill:#222222,color:#ffffff,stroke:#222222;
    classDef menu fill:#EFE7DC,color:#4A3A2A,stroke:#C8B6A6;
    classDef detail fill:#F7F3ED,color:#5C5046,stroke:#DED1C3;

    class A root;
    class B,C,D,E,F,G menu;
    class B1,B2,B3,C1,C2,C3,D1,D2,E1,E2,F1,F2,G1,G2 detail;
```

<br/>

## 화면 구성

| 화면        | 내용                                    |
| ----------- | --------------------------------------- |
| Main Visual | 박물관의 첫인상을 보여주는 메인 비주얼  |
| Navigation  | 주요 메뉴를 한눈에 볼 수 있는 메뉴 구조 |
| Exhibition  | 전시 콘텐츠와 포스터 중심의 시각적 구성 |
| Video       | 박물관 분위기를 전달하는 영상 영역      |
| Footer      | 주소, 대표전화, 관련 사이트 정보        |

<br/>

## 사용자 흐름

```mermaid
flowchart LR
    A[메인 진입] --> B[메뉴 확인]
    B --> C[전시 콘텐츠 탐색]
    C --> D[관람 정보 확인]
    D --> E[관련 사이트 / 소속 박물관 이동]

    B --> F[교육 / 문화행사 확인]
    B --> G[소장품 정보 확인]
```

<br/>

## 디자인 방향

```mermaid
mindmap
  root((Redesign))
    정보 구조
      메뉴 정리
      주요 정보 접근
      콘텐츠 분류
    시각적 분위기
      전통성
      차분한 컬러
      여백 중심
    전시 콘텐츠
      이미지 강조
      포스터 활용
      시선 흐름
    사용성
      쉬운 탐색
      명확한 메뉴
      직관적인 화면
```

<br/>

## 문제 정의와 해결 방향

```mermaid
flowchart LR
    A[Problem] --> B[Solution]

    A1[핵심 콘텐츠가<br/>잘 보이지 않음] --> B1[전시 이미지 중심의<br/>메인 화면 구성]
    A2[메뉴 구조가<br/>복잡하게 느껴짐] --> B2[주요 메뉴를<br/>카테고리별로 정리]
    A3[박물관의 분위기가<br/>약하게 전달됨] --> B3[전통적인 색감과<br/>여백 중심 UI 적용]

    classDef problem fill:#EFE7DC,color:#4A3A2A,stroke:#C8B6A6;
    classDef solution fill:#E8D8CD,color:#5C4033,stroke:#C9A99A;

    class A1,A2,A3 problem;
    class B1,B2,B3 solution;
```

<br/>

## 디자인 프로세스

```mermaid
flowchart LR
    A[기존 사이트 분석] --> B[문제 정의]
    B --> C[콘셉트 보드]
    C --> D[메뉴 구조 정리]
    D --> E[와이어프레임]
    E --> F[UI 디자인]
    F --> G[퍼블리싱]
```

<br/>

## 프로젝트 구조

```text
redesign-project
├─ assets/
├─ css/
├─ js/
├─ index.html
└─ README.md
```

<br/>

## 작업 포인트

| 구분       | 내용                                                          |
| ---------- | ------------------------------------------------------------- |
| UX         | 관람정보, 전시, 교육, 소장품 등 주요 메뉴 탐색 흐름 정리      |
| UI         | 전통적인 분위기와 현대적인 레이아웃이 함께 느껴지는 화면 구성 |
| Visual     | 전시 이미지와 포스터를 중심으로 콘텐츠 집중도 강화            |
| Publishing | HTML, CSS, JavaScript 기반 정적 웹사이트 제작                 |

<br/>

## 기대 효과

| Before                               | After                                |
| ------------------------------------ | ------------------------------------ |
| 정보가 많아 복잡하게 느껴짐          | 메뉴를 카테고리별로 정리             |
| 전시 콘텐츠의 집중도가 약함          | 이미지와 포스터 중심으로 시각적 강조 |
| 메인 화면의 정보 우선순위가 불명확함 | 주요 콘텐츠 중심의 화면 흐름 구성    |
| 박물관 분위기가 약하게 전달됨        | 전통성과 차분한 색감을 반영한 디자인 |

<br/>

## 프로젝트 의미

이 프로젝트는 국립중앙박물관 웹사이트의 많은 정보를  
사용자가 더 쉽게 이해하고 탐색할 수 있도록 재구성한 리디자인 작업입니다.

전시 콘텐츠의 매력을 시각적으로 보여주면서도,  
관람 정보와 주요 메뉴에 빠르게 접근할 수 있는 화면을 목표로 제작했습니다.
