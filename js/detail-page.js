(() => {
  const catalog = {
    business: {
      label: "사업 분야",
      overview: "../business.html",
      defaultItem: "regtech",
      items: {
        regtech: {
          name: "RegTech",
          eyebrow: "TRUST BY DESIGN",
          visual: "REG",
          nodes: ["RULE", "RISK", "CONTROL"],
          summary:
            "규제 요구사항을 업무와 데이터의 언어로 연결해, 금융회사의 컴플라이언스와 내부통제를 더 투명하게 운영합니다.",
          chips: ["책무구조도", "내부통제", "AI 감사"],
          statement: "규제 대응이 곧 신뢰의 기준이 되도록",
          lead: "복잡한 규제 요건과 내부 기준을 하나의 관리 체계로 정리하고, 책임·통제·점검의 흐름을 일관되게 연결합니다.",
          features: [
            [
              "책무와 통제의 연결",
              "책무구조도와 관리 의무를 체계화해 책임 기반의 내부통제 운영을 지원합니다.",
            ],
            [
              "점검 업무의 고도화",
              "리스크 신호와 점검 결과를 한곳에서 확인해 대응 우선순위를 명확히 합니다.",
            ],
            [
              "감사 인사이트",
              "데이터 기반 분석으로 감사 업무의 반복 작업을 줄이고 판단을 돕습니다.",
            ],
          ],
          flow: [
            ["현황 진단", "규제, 업무, 데이터 현황을 함께 살핍니다."],
            [
              "운영 체계 설계",
              "책무와 통제 기준을 고객 환경에 맞춰 정리합니다.",
            ],
            ["지속 점검", "변화하는 요건에 맞춰 관리 체계를 고도화합니다."],
          ],
        },
        esg: {
          name: "ESG",
          eyebrow: "SUSTAINABLE DATA",
          visual: "ESG",
          nodes: ["ENV", "SOC", "GOV"],
          summary:
            "분산된 ESG 데이터를 신뢰할 수 있는 기준으로 모으고, 보고와 의사결정까지 이어지는 지속가능경영 체계를 만듭니다.",
          chips: ["ESG 데이터", "공시 관리", "지속가능경영"],
          statement: "측정 가능한 데이터로 지속가능성을 관리합니다",
          lead: "지표 수집, 검증, 분석, 공시 준비의 단절을 줄여 ESG 활동이 일회성 보고가 아닌 경영 의사결정의 근거가 되도록 돕습니다.",
          features: [
            [
              "데이터 수집 표준화",
              "조직과 사업장별 지표를 동일한 기준으로 수집하고 관리합니다.",
            ],
            [
              "공시 준비 지원",
              "보고 기준에 맞는 데이터 흐름을 정리해 공시 업무의 부담을 줄입니다.",
            ],
            [
              "경영 인사이트",
              "핵심 지표를 시각화해 변화와 과제를 빠르게 파악할 수 있습니다.",
            ],
          ],
          flow: [
            ["지표 정의", "기업의 목표와 보고 기준에 맞는 지표를 설계합니다."],
            ["데이터 연결", "현업 데이터의 수집과 검증 흐름을 연결합니다."],
            ["보고와 개선", "경영진과 이해관계자를 위한 리포트를 완성합니다."],
          ],
        },
        bigdata: {
          name: "Big Data / BI",
          eyebrow: "DATA TO DECISION",
          visual: "DATA",
          nodes: ["COLLECT", "ANALYZE", "INSIGHT"],
          summary:
            "데이터 수집부터 분석, 시각화까지 연결해 조직이 더 빠르고 근거 있게 의사결정하도록 돕습니다.",
          chips: ["데이터 통합", "AI 분석", "시각화"],
          statement: "흩어진 데이터를 실행 가능한 인사이트로",
          lead: "정형·비정형 데이터의 흐름을 연결하고, 분석 결과가 현업의 다음 행동으로 이어지도록 데이터 활용 환경을 설계합니다.",
          features: [
            [
              "통합 데이터 환경",
              "다양한 데이터 원천을 수집·정제해 분석 가능한 기반을 만듭니다.",
            ],
            [
              "분석 모델 적용",
              "AI·머신러닝 분석을 통해 패턴과 기회를 탐색합니다.",
            ],
            [
              "직관적인 BI",
              "현업이 직접 이해하고 공유할 수 있는 시각화와 대시보드를 제공합니다.",
            ],
          ],
          flow: [
            ["데이터 진단", "원천, 품질, 활용 목적을 함께 정의합니다."],
            [
              "분석 환경 구축",
              "수집·가공·분석의 흐름을 하나의 환경으로 연결합니다.",
            ],
            ["현업 확산", "대시보드와 리포트로 의사결정을 지원합니다."],
          ],
        },
        sism: {
          name: "SI / SM",
          eyebrow: "BUILD AND OPERATE",
          visual: "SI·SM",
          nodes: ["PLAN", "BUILD", "RUN"],
          summary:
            "기업 환경에 맞는 시스템을 설계·구축하고, 안정적인 운영과 고도화로 업무의 연속성을 지킵니다.",
          chips: ["시스템 구축", "운영 관리", "고도화"],
          statement: "구축 이후까지 책임지는 디지털 실행력",
          lead: "업무 흐름과 운영 환경을 이해하는 팀이 설계부터 전환, 안정화, 개선까지 일관된 경험을 제공합니다.",
          features: [
            [
              "요구사항 정교화",
              "현업 업무와 기술 제약을 함께 반영해 실현 가능한 범위를 정의합니다.",
            ],
            [
              "안정적인 전환",
              "단계적 구축과 검증으로 서비스 전환의 리스크를 줄입니다.",
            ],
            [
              "지속적인 운영",
              "운영 데이터와 사용자 피드백을 바탕으로 시스템을 꾸준히 개선합니다.",
            ],
          ],
          flow: [
            ["설계", "목표·일정·운영 기준을 명확히 정리합니다."],
            ["구축", "품질과 보안을 고려해 시스템을 구현합니다."],
            ["운영", "모니터링과 개선을 통해 안정성을 높입니다."],
          ],
        },
        consulting: {
          name: "Consulting",
          eyebrow: "PLAN WITH CLARITY",
          visual: "PLAN",
          nodes: ["GOAL", "ROADMAP", "VALUE"],
          summary:
            "데이터, BI, IT 전략에 대한 경험을 바탕으로 기업의 과제를 구조화하고 실행 가능한 변화의 경로를 함께 설계합니다.",
          chips: ["데이터 전략", "업무 혁신", "정보화 계획"],
          statement: "실행까지 이어지는 전략을 함께 만듭니다",
          lead: "기술 자체보다 비즈니스 목표를 먼저 이해하고, 현재 수준에서 우선순위와 투자 방향을 판단할 수 있는 로드맵을 제안합니다.",
          features: [
            [
              "과제 구조화",
              "복잡한 현안을 목표·문제·기회 관점에서 명확히 정리합니다.",
            ],
            [
              "데이터 전략",
              "필요한 데이터와 활용 시나리오를 우선순위에 따라 설계합니다.",
            ],
            [
              "실행 로드맵",
              "조직과 예산, 일정까지 고려한 단계별 계획을 제시합니다.",
            ],
          ],
          flow: [
            ["발견", "현황과 핵심 이해관계자의 요구를 파악합니다."],
            ["설계", "목표 모델과 우선 과제를 구체화합니다."],
            [
              "실행 지원",
              "로드맵이 현장에서 작동하도록 구축·운영과 연결합니다.",
            ],
          ],
        },
      },
    },
    product: {
      label: "제품",
      overview: "../product.html",
      defaultItem: "cms",
      items: {
        cms: {
          name: "PlanToCMS",
          eyebrow: "COMPLIANCE MANAGEMENT SYSTEM",
          visual: "CMS",
          nodes: ["ROLE", "CONTROL", "CHECK"],
          summary:
            "금융권 내부통제와 책무구조도 관리 전 과정을 지원하는 컴플라이언스 관리 플랫폼입니다.",
          chips: ["책무관리", "내부통제", "점검 관리"],
          statement: "책임과 통제를 한 흐름으로 관리합니다",
          lead: "조직의 책무와 내부통제 활동을 체계화해, 변화하는 규제 환경에서도 관리 현황을 명확히 파악할 수 있도록 지원합니다.",
          features: [
            [
              "책무 체계 관리",
              "조직·직책·책무의 관계를 기준에 맞게 관리합니다.",
            ],
            [
              "통제 활동 연결",
              "통제 기준과 점검 활동을 연결해 누락을 줄입니다.",
            ],
            [
              "관리 현황 가시화",
              "업무별 진행 현황과 주요 이슈를 한눈에 확인합니다.",
            ],
          ],
          flow: [
            ["구조 정의", "조직의 책무와 관리 기준을 설정합니다."],
            ["활동 운영", "통제와 점검 업무를 체계적으로 수행합니다."],
            ["현황 확인", "관리 현황을 바탕으로 개선 과제를 찾습니다."],
          ],
        },
        esg: {
          name: "PlanToESG",
          eyebrow: "ESG MANAGEMENT PLATFORM",
          visual: "ESG",
          nodes: ["METRIC", "REPORT", "IMPACT"],
          summary:
            "ESG 데이터의 수집·관리·보고를 연결해 지속가능경영 체계를 고도화하는 관리 플랫폼입니다.",
          chips: ["지표 관리", "공시 지원", "성과 분석"],
          statement: "ESG 활동을 신뢰할 수 있는 데이터로 관리합니다",
          lead: "여러 조직과 사업장에 분산된 ESG 정보를 하나의 흐름으로 관리해 공시 준비와 경영 의사결정을 지원합니다.",
          features: [
            [
              "지표 수집",
              "관리 지표별 데이터 수집 현황을 일관된 기준으로 관리합니다.",
            ],
            [
              "검증과 이력",
              "입력된 데이터의 근거와 변경 이력을 추적할 수 있습니다.",
            ],
            [
              "리포트 활용",
              "보고 목적에 맞는 데이터를 빠르게 확인하고 활용합니다.",
            ],
          ],
          flow: [
            ["기준 설정", "기업의 ESG 관리 기준과 지표를 구성합니다."],
            ["정보 수집", "현업에서 필요한 데이터를 입력·검증합니다."],
            ["성과 공유", "주요 지표와 변화 추이를 리포트로 확인합니다."],
          ],
        },
        aiq: {
          name: "PlanToAiq",
          eyebrow: "AI AUDIT & INTELLIGENCE",
          visual: "AIQ",
          nodes: ["SIGNAL", "MODEL", "ACTION"],
          summary:
            "AI 기반 감사와 분석을 통해 리스크 탐지와 업무 의사결정을 지원하는 지능형 플랫폼입니다.",
          chips: ["AI 감사", "리스크 탐지", "분석 자동화"],
          statement: "더 빠른 탐지와 더 명확한 판단을 지원합니다",
          lead: "반복적인 점검 작업은 줄이고, 분석 결과와 근거를 함께 확인할 수 있도록 감사·리스크 업무의 흐름을 고도화합니다.",
          features: [
            [
              "이상 징후 분석",
              "업무 데이터에서 확인이 필요한 신호를 탐색합니다.",
            ],
            ["감사 업무 지원", "점검 대상과 근거를 체계적으로 정리합니다."],
            [
              "결과 해석",
              "분석 결과가 실무 판단으로 이어지도록 맥락을 제공합니다.",
            ],
          ],
          flow: [
            ["데이터 준비", "분석 목적에 맞는 데이터를 연결합니다."],
            ["모델 적용", "업무 시나리오에 맞춰 분석을 수행합니다."],
            ["조치 연계", "탐지 결과를 점검과 후속 조치로 연결합니다."],
          ],
        },
        emapp: {
          name: "e-Mapp",
          eyebrow: "BIG DATA ANALYTICS PLATFORM",
          visual: "e-Mapp",
          nodes: ["ETL", "AI", "BI"],
          summary:
            "ETL, AI·머신러닝, 시각화를 결합해 수집부터 분석 결과까지 지원하는 빅데이터 통합 분석 플랫폼입니다.",
          chips: ["ETL", "AI·ML", "데이터 시각화"],
          statement: "데이터의 전 과정을 하나의 분석 환경으로",
          lead: "다양한 데이터의 수집·가공·분석·시각화를 연결해, 데이터 전문가와 현업이 함께 활용할 수 있는 분석 기반을 제공합니다.",
          features: [
            [
              "데이터 파이프라인",
              "다양한 원천 데이터를 수집하고 분석 가능한 형태로 가공합니다.",
            ],
            [
              "분석 워크플로",
              "분석과 모델링 업무를 반복 가능한 흐름으로 관리합니다.",
            ],
            [
              "공유 가능한 인사이트",
              "대시보드와 리포트로 결과를 조직에 쉽게 공유합니다.",
            ],
          ],
          flow: [
            ["수집·정제", "데이터를 연결하고 품질을 관리합니다."],
            ["분석·모델링", "문제에 맞는 분석을 수행하고 결과를 검증합니다."],
            ["시각화·활용", "인사이트를 현업의 의사결정에 연결합니다."],
          ],
        },
        rapidminer: {
          name: "RapidMiner",
          eyebrow: "PARTNER PRODUCT · AI ANALYTICS",
          visual: "RM",
          nodes: ["PREP", "MODEL", "DEPLOY"],
          summary:
            "머신러닝 기반의 예측·분류·분석을 지원하는 AI 분석 환경으로, 다양한 분석 과제의 실행을 돕습니다.",
          chips: ["머신러닝", "예측 분석", "분석 자동화"],
          statement: "데이터 분석 과제를 더 빠르게 실험하고 운영합니다",
          lead: "데이터 준비부터 모델링과 평가까지의 과정을 하나의 흐름으로 구성해, 분석 아이디어를 현업 활용으로 이어갈 수 있도록 지원합니다.",
          features: [
            ["분석 준비", "데이터 정제와 변환 과정을 체계적으로 구성합니다."],
            ["모델 실험", "예측·분류 등 다양한 머신러닝 모델을 비교합니다."],
            [
              "운영 확장",
              "검증된 분석 흐름을 반복 활용할 수 있도록 관리합니다.",
            ],
          ],
          flow: [
            ["문제 정의", "분석 목표와 데이터 조건을 명확히 합니다."],
            ["모델 검증", "여러 모델을 비교해 적합한 방식을 찾습니다."],
            ["업무 적용", "결과를 현업 프로세스에 연결합니다."],
          ],
        },
        tableau: {
          name: "Tableau",
          eyebrow: "PARTNER PRODUCT · DATA VISUALIZATION",
          visual: "BI",
          nodes: ["CONNECT", "EXPLORE", "SHARE"],
          summary:
            "복잡한 데이터를 빠르고 직관적으로 탐색하고 공유할 수 있도록 지원하는 데이터 시각화 솔루션입니다.",
          chips: ["데이터 시각화", "대시보드", "셀프서비스 BI"],
          statement: "모든 사람이 데이터를 이해하고 활용하도록",
          lead: "분석가뿐 아니라 현업 구성원도 필요한 정보를 직접 탐색하고 공유할 수 있도록, 직관적인 데이터 경험을 제공합니다.",
          features: [
            [
              "데이터 연결",
              "여러 데이터 원천을 연결해 분석의 시작을 단순화합니다.",
            ],
            [
              "시각적 탐색",
              "드래그 앤 드롭 방식으로 데이터를 빠르게 탐색합니다.",
            ],
            [
              "대시보드 공유",
              "중요한 지표와 인사이트를 팀의 공통 화면으로 만듭니다.",
            ],
          ],
          flow: [
            ["질문 설정", "알고 싶은 비즈니스 질문을 명확히 합니다."],
            [
              "탐색과 분석",
              "데이터를 시각적으로 비교하고 인사이트를 찾습니다.",
            ],
            ["공유와 실행", "대시보드를 통해 조직의 행동을 연결합니다."],
          ],
        },
      },
    },
  };

  const diagramCatalog = {
    business: {
      regtech: {
        title: "규제 기준에서 관리 인사이트까지",
        lead: "규제와 조직의 책임을 하나의 운영 흐름으로 연결합니다.",
        stages: [
          ["INPUT", "규제·업무 기준", ["규제 요건", "내부 기준"]],
          ["STRUCTURE", "책무·통제 설계", ["책무 구조", "통제 항목"]],
          ["MANAGE", "점검·이력 관리", ["점검 결과", "변경 이력"]],
          ["INSIGHT", "감사·개선", ["위험 신호", "개선 과제"]],
        ],
        foundation: ["권한 기반 관리", "증적·이력 추적", "상시 모니터링"],
      },
      esg: {
        title: "ESG 데이터를 경영의 언어로",
        lead: "사업장과 조직에 흩어진 지표를 신뢰할 수 있는 경영 데이터로 전환합니다.",
        stages: [
          ["SOURCE", "지표·원천 데이터", ["환경 데이터", "사회·거버넌스"]],
          ["COLLECT", "표준 수집", ["입력 기준", "수집 일정"]],
          ["VERIFY", "검증·이력 관리", ["근거 확인", "변경 추적"]],
          ["REPORT", "공시·경영 인사이트", ["ESG 리포트", "성과 분석"]],
        ],
        foundation: ["지표 체계", "데이터 품질", "보고 기준 대응"],
      },
      bigdata: {
        title: "수집부터 의사결정까지 연결되는 데이터 흐름",
        lead: "회사소개서의 빅데이터 플랫폼 구조를 웹 환경에 맞는 실행 흐름으로 재구성했습니다.",
        stages: [
          ["SOURCE", "다양한 원천", ["업무 시스템", "외부·비정형 데이터"]],
          ["COLLECT", "수집·정제", ["ETL·API", "품질 관리"]],
          ["ANALYZE", "데이터·AI 분석", ["Data Lake", "모델 분석"]],
          ["ACTIVATE", "시각화·의사결정", ["BI 대시보드", "실행 인사이트"]],
        ],
        foundation: ["통합 데이터 모델", "거버넌스", "확장 가능한 분석 환경"],
      },
      sism: {
        title: "구축 이후까지 설계된 운영 체계",
        lead: "업무와 기술, 운영을 한 흐름으로 관리해 서비스의 연속성을 만듭니다.",
        stages: [
          ["DISCOVER", "업무·환경 진단", ["요구사항", "현행 시스템"]],
          ["DESIGN", "설계·구현", ["업무 설계", "기술 구현"]],
          ["OPERATE", "전환·운영", ["품질 검증", "운영 지원"]],
          ["EVOLVE", "개선·고도화", ["사용자 피드백", "변화 대응"]],
        ],
        foundation: ["프로젝트 관리", "품질·보안", "지속 운영 지원"],
      },
      consulting: {
        title: "복잡한 과제를 실행 가능한 로드맵으로",
        lead: "현황을 진단하고 우선순위를 설계해 실행의 방향을 명확히 합니다.",
        stages: [
          ["DISCOVER", "현황·과제 진단", ["비즈니스 목표", "핵심 이슈"]],
          ["DEFINE", "목표 모델 정의", ["업무·데이터", "운영 기준"]],
          ["PLAN", "전략·로드맵", ["우선순위", "투자 계획"]],
          ["DELIVER", "실행·정착", ["구축 연계", "성과 점검"]],
        ],
        foundation: ["산업 전문성", "실행 경험", "협업 거버넌스"],
      },
    },
    product: {
      cms: {
        title: "책무의 생성부터 개선까지 이어지는 관리 체계",
        lead: "회사소개서의 PlanToCMS 구성도를 역할과 데이터 흐름 중심으로 재해석했습니다.",
        stages: [
          ["CONNECT", "시스템·조직 연계", ["통합 로그인", "조직·인사 정보"]],
          ["DEFINE", "책무·통제 관리", ["책무 기술서", "통제 기준"]],
          ["CHECK", "이행점검·승인", ["점검 결과", "보고서 승인"]],
          ["MONITOR", "대시보드·개선", ["현황 모니터링", "변경 이력"]],
        ],
        foundation: ["권한·역할 관리", "통합 데이터", "보안·감사 대응"],
      },
      esg: {
        title: "신뢰할 수 있는 ESG 데이터 운영",
        lead: "수집, 검증, 보고로 이어지는 ESG 관리의 전 과정을 하나의 화면으로 연결합니다.",
        stages: [
          ["SOURCE", "ESG 지표 입력", ["사업장 데이터", "조직별 지표"]],
          ["COLLECT", "수집·일정 관리", ["입력 현황", "담당자 관리"]],
          ["VERIFY", "검증·근거 관리", ["증빙 자료", "변경 이력"]],
          ["REPORT", "공시·성과 분석", ["ESG 리포트", "경영 대시보드"]],
        ],
        foundation: ["표준 지표", "데이터 신뢰성", "공시 대응"],
      },
      aiq: {
        title: "신호를 발견하고 판단을 돕는 AI 감사 흐름",
        lead: "데이터와 분석 모델, 감사 업무를 연결해 리스크 대응의 속도를 높입니다.",
        stages: [
          ["DATA", "감사 데이터 연결", ["업무 데이터", "점검 이력"]],
          ["MODEL", "AI 분석 모델", ["탐지 시나리오", "학습·분석"]],
          ["SIGNAL", "위험 신호 탐지", ["이상 징후", "우선순위"]],
          ["ACTION", "점검·조치 연계", ["근거 확인", "후속 관리"]],
        ],
        foundation: ["설명 가능한 분석", "권한 관리", "지속 모델 개선"],
      },
      emapp: {
        title: "데이터가 인사이트가 되는 One-Stop 플랫폼",
        lead: "e-Mapp 소개서의 수집·분석·시각화 구조를 PlanTo 웹의 디자인 언어로 재구성했습니다.",
        stages: [
          ["SOURCE", "다양한 원천 데이터", ["기간계·업무계", "파일·API·IoT"]],
          ["COLLECT", "Collector·ETL", ["수집 스케줄", "변환·정제"]],
          ["ANALYZE", "Data Lake·AI", ["분석 모델", "예측·분류"]],
          ["VISUALIZE", "BI·포털", ["시각화 화면", "공유·의사결정"]],
        ],
        foundation: ["데이터 표준", "관리자 기능", "모니터링"],
      },
      rapidminer: {
        title: "모델 설계부터 운영 배포까지",
        lead: "분석 워크플로를 설계하고 실행해 현업 활용으로 연결하는 AI 분석 환경입니다.",
        stages: [
          ["INGEST", "데이터 연결", ["DB·파일·API", "데이터 준비"]],
          ["DESIGN", "분석 워크플로", ["모델 설계", "실험 관리"]],
          ["EXECUTE", "실행·평가", ["Job 실행", "성능 검증"]],
          ["DEPLOY", "배포·활용", ["서비스 연계", "모델 운영"]],
        ],
        foundation: ["오픈소스 확장", "재현 가능한 분석", "운영 인프라"],
      },
      tableau: {
        title: "데이터 탐색을 모두의 의사결정으로",
        lead: "연결된 데이터를 직관적인 시각화로 전환해 현업의 빠른 탐색과 공유를 지원합니다.",
        stages: [
          ["CONNECT", "데이터 연결", ["다양한 원천", "실시간·추출"]],
          ["PREPARE", "정제·모델링", ["데이터 준비", "관계 설정"]],
          ["VISUALIZE", "시각적 분석", ["대시보드", "드릴다운"]],
          ["SHARE", "공유·실행", ["조직 협업", "의사결정"]],
        ],
        foundation: ["셀프서비스 분석", "거버넌스", "안전한 공유"],
      },
    },
  };

  const page = document.getElementById("detail-page");
  const categoryKey = document.body.dataset.detailCategory;
  const category = catalog[categoryKey];
  if (!page || !category) return;

  const requestedItem = new URLSearchParams(window.location.search).get("item");
  const itemKey = category.items[requestedItem]
    ? requestedItem
    : category.defaultItem;
  const item = category.items[itemKey];
  const itemList = Object.entries(category.items);
  const diagram = diagramCatalog[categoryKey][itemKey];

  document.title = `${item.name} | PlanTo`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", item.summary);

  const features = item.features
    .map(
      ([title, text], index) => `
        <article class="detail-feature">
          <span class="detail-feature__number">0${index + 1}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`,
    )
    .join("");

  const flow = item.flow
    .map(
      ([title, text], index) => `
        <li>
          <span class="detail-flow__step">STEP 0${index + 1}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </li>`,
    )
    .join("");

  const switcher = itemList
    .map(
      ([key, detail]) =>
        `<a href="?item=${key}"${key === itemKey ? ' aria-current="page"' : ""}>${detail.name}</a>`,
    )
    .join("");

  const experience =
    categoryKey === "business"
      ? {
          label: "DELIVERY FRAME",
          title: "전략을 실행으로 바꾸는<br />PlanTo의 협업 방식",
          lead: "업무 현장의 맥락과 데이터, 기술을 함께 살피며 변화가 실제 성과로 이어지도록 설계합니다.",
          cards: [
            ["01", "Discover", "비즈니스 목표와 현재의 과제를 함께 정리합니다."],
            ["02", "Design", "데이터·업무·운영 기준을 하나의 실행안으로 설계합니다."],
            ["03", "Deliver", "구축 이후의 정착과 개선까지 연결해 지원합니다."],
          ],
        }
      : {
          label: "PRODUCT EXPERIENCE",
          title: "연결하고, 이해하고,<br />더 넓게 활용합니다.",
          lead: "제품 기능이 현업의 데이터 흐름과 자연스럽게 맞물리도록 도입부터 활용 확장까지 함께합니다.",
          cards: [
            ["01", "Connect", "분산된 데이터와 업무 흐름을 제품 환경에 연결합니다."],
            ["02", "Activate", "필요한 역할과 시나리오에 맞게 기능을 빠르게 활용합니다."],
            ["03", "Scale", "사용 경험과 운영 데이터를 바탕으로 활용 범위를 확장합니다."],
          ],
        };

  const visualPanels = item.chips
    .map(
      (chip, index) => `
        <div class="detail-visual__panel detail-visual__panel--${index + 1}">
          <span>0${index + 1}</span><strong>${chip}</strong>
        </div>`,
    )
    .join("");

  const signals = item.chips
    .map(
      (chip, index) => `
        <article class="detail-signal__item">
          <span class="detail-signal__index">0${index + 1}</span>
          <strong>${chip}</strong>
          <span>CORE CAPABILITY</span>
        </article>`,
    )
    .join("");

  const experienceCards = experience.cards
    .map(
      ([number, title, text]) => `
        <article class="detail-experience__card">
          <span>${number}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`,
    )
    .join("");

  const diagramStages = diagram.stages
    .map(
      ([label, title, tags], index) => `
        <article class="detail-diagram__stage">
          <span class="detail-diagram__number">0${index + 1}</span>
          <p>${label}</p>
          <h3>${title}</h3>
          <ul>${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        </article>`,
    )
    .join("");

  const diagramFoundation = diagram.foundation
    .map((item) => `<li>${item}</li>`)
    .join("");

  page.innerHTML = `
    <section class="detail-hero">
      <div class="detail-shell detail-hero__layout">
        <div>
          <nav class="detail-breadcrumb" aria-label="현재 위치">
            <a href="${category.overview}">${category.label}</a><span>·</span><span>${item.name}</span>
          </nav>
          <p class="detail-hero__eyebrow">${item.eyebrow}</p>
          <h1>${item.name}</h1>
          <p class="detail-hero__summary">${item.summary}</p>
          <ul class="detail-hero__chips">${item.chips.map((chip) => `<li>${chip}</li>`).join("")}</ul>
        </div>
        <div class="detail-visual" aria-hidden="true">
          <div class="detail-visual__mesh"></div>
          <span class="detail-visual__beam detail-visual__beam--one"></span>
          <span class="detail-visual__beam detail-visual__beam--two"></span>
          <div class="detail-visual__orbit detail-visual__orbit--outer"></div>
          <div class="detail-visual__orbit detail-visual__orbit--inner"></div>
          <div class="detail-visual__core">${item.visual}</div>
          <span class="detail-visual__node detail-visual__node--one">${item.nodes[0]}</span>
          <span class="detail-visual__node detail-visual__node--two">${item.nodes[1]}</span>
          <span class="detail-visual__node detail-visual__node--three">${item.nodes[2]}</span>
          ${visualPanels}
        </div>
      </div>
    </section>

    <section class="detail-signal">
      <div class="detail-shell detail-signal__grid">${signals}</div>
    </section>

    <section class="detail-section detail-section--white">
      <div class="detail-shell">
        <div class="detail-section__intro">
          <div>
            <p class="detail-kicker">KEY VALUE</p>
            <h2>${item.statement}</h2>
          </div>
          <p class="detail-section__lead">${item.lead}</p>
        </div>
        <div class="detail-feature-grid">${features}</div>
        <nav class="detail-switcher" aria-label="${category.label} 상세 목록">${switcher}</nav>
      </div>
    </section>

    <section class="detail-experience">
      <div class="detail-shell detail-experience__surface">
        <div class="detail-experience__copy">
          <p class="detail-kicker">${experience.label}</p>
          <h2>${experience.title}</h2>
          <p>${experience.lead}</p>
          <span class="detail-experience__line" aria-hidden="true"></span>
        </div>
        <div class="detail-experience__cards">${experienceCards}</div>
      </div>
    </section>

    <section class="detail-architecture">
      <div class="detail-shell">
        <div class="detail-architecture__intro">
          <div>
            <p class="detail-kicker">SOLUTION MAP</p>
            <h2>${diagram.title}</h2>
          </div>
          <p>${diagram.lead}</p>
        </div>
        <div class="detail-diagram detail-diagram--${categoryKey}">
          <div class="detail-diagram__header">
            <span>PLAN TO FLOW</span>
            <strong>${item.name}</strong>
            <i aria-hidden="true"></i>
          </div>
          <div class="detail-diagram__flow">${diagramStages}</div>
          <div class="detail-diagram__foundation">
            <span>OPERATING FOUNDATION</span>
            <ul>${diagramFoundation}</ul>
          </div>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <div class="detail-shell">
        <div class="detail-section__intro">
          <div>
            <p class="detail-kicker">HOW IT WORKS</p>
            <h2>목표에서 실행까지<br />끊김 없이 연결합니다.</h2>
          </div>
          <p class="detail-section__lead">PlanTo는 고객의 현황과 목표를 함께 이해하고, 솔루션과 서비스가 실제 업무에서 활용되도록 단계별로 지원합니다.</p>
        </div>
        <ol class="detail-flow">${flow}</ol>
      </div>
    </section>

`;
})();
