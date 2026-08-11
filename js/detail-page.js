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
            "책무의 생성·배분부터 이행점검, 보고 승인, 대시보드 모니터링과 개선까지 지원하는 금융권 컴플라이언스 관리 플랫폼입니다.",
          chips: ["책무 생성·배분", "이행점검·승인", "대시보드·개선"],
          statement: "책임과 통제를 생성부터 개선까지 한 흐름으로 관리합니다",
          lead: "조직의 역할과 책무, 통제 기준과 점검 활동을 유기적으로 연결해 변화하는 규제 환경에서도 책임 소재와 관리 현황을 명확히 파악할 수 있도록 지원합니다.",
          features: [
            [
              "책무 체계 관리",
              "조직·직책·책무의 관계를 정의하고 생성과 배분 이력을 기준에 맞게 관리합니다.",
            ],
            [
              "통제 활동 연결",
              "통제 기준, 이행점검, 보고서 승인 절차를 연결해 누락을 줄입니다.",
            ],
            [
              "관리 현황 가시화",
              "대시보드에서 진행 현황과 주요 이슈를 확인하고 변경·개선 이력을 관리합니다.",
            ],
          ],
          flow: [
            ["생성·배분", "조직의 책무와 관리 기준을 정의하고 배분합니다."],
            ["이행·승인", "통제와 점검 업무를 수행하고 보고를 승인합니다."],
            ["모니터링·개선", "대시보드로 현황을 확인하고 개선 과제를 관리합니다."],
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
            "ETL과 AI·머신러닝, 시각화를 결합한 빅데이터 통합 분석 플랫폼으로 다양한 원천 데이터의 수집부터 분석 결과 활용까지 One-Stop으로 지원합니다.",
          chips: ["Collector·ETL", "AI·ML", "BI·Data Portal"],
          statement: "데이터의 전 과정을 하나의 분석 환경으로 연결합니다",
          lead: "다양한 원천 데이터를 GUI 기반으로 통합하고, 오픈소스 기반 AI·ML과 시각화 분석을 결합해 데이터 전문가와 현업이 함께 활용할 수 있는 End-to-End 분석 환경을 제공합니다.",
          features: [
            [
              "데이터 파이프라인",
              "정형·비정형 데이터, 파일·API·IoT 등 다양한 원천을 수집하고 분석 가능한 형태로 가공합니다.",
            ],
            [
              "분석 워크플로",
              "예측·분류·분석을 위한 워크플로를 구성하고 필요한 알고리즘을 확장합니다.",
            ],
            [
              "공유 가능한 인사이트",
              "대시보드와 리포트로 분석 결과를 공유해 데이터 기반 의사결정을 지원합니다.",
            ],
          ],
          flow: [
            ["수집·정제", "Collector·ETL로 데이터를 연결하고 변환·품질을 관리합니다."],
            ["분석·모델링", "AI·ML 분석을 수행하고 목적에 맞는 알고리즘을 적용합니다."],
            ["시각화·활용", "BI·포털로 인사이트를 현업의 의사결정에 연결합니다."],
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
        mstr: {
          name: "MicroStrategy",
          eyebrow: "PARTNER PRODUCT · ENTERPRISE BI",
          visual: "MSTR",
          nodes: ["GOVERN", "EXPLORE", "SHARE"],
          summary:
            "개인화된 리포트와 셀프서비스 분석, 데이터 거버넌스를 연결하는 엔터프라이즈 비즈니스 인텔리전스 플랫폼입니다.",
          chips: ["엔터프라이즈 BI", "셀프서비스 분석", "데이터 거버넌스"],
          statement: "신뢰할 수 있는 데이터를 조직 전체의 인사이트로",
          lead: "다양한 데이터 소스와 분석 도구를 연결해, 현업은 빠르게 탐색하고 조직은 일관된 데이터 기준과 보안을 유지할 수 있도록 지원합니다.",
          features: [
            ["통합 데이터 연결", "다양한 데이터 소스와 기존 분석 도구를 엔터프라이즈 환경에 연결합니다."],
            ["셀프서비스 분석", "현업이 신뢰할 수 있는 데이터를 바탕으로 리포트와 대시보드를 직접 탐색합니다."],
            ["확장 가능한 거버넌스", "보안, 데이터 관리, API·SDK 연계를 통해 분석 환경을 안정적으로 확장합니다."],
          ],
          flow: [
            ["데이터 연결", "전사 데이터와 분석 도구를 공통 환경으로 연결합니다."],
            ["탐색·시각화", "필요한 리포트와 대시보드로 인사이트를 빠르게 만듭니다."],
            ["공유·운영", "조직의 데이터 기준과 거버넌스 아래에서 안전하게 공유합니다."],
          ],
        },
        sas: {
          name: "SAS",
          eyebrow: "PARTNER PRODUCT · ANALYTICS PLATFORM",
          visual: "SAS",
          nodes: ["DISCOVER", "ANALYZE", "DEPLOY"],
          summary:
            "다양한 데이터를 실시간으로 분석하고 데이터 발견부터 예측 결과 활용까지 통합 분석 라이프사이클을 지원하는 플랫폼입니다.",
          chips: ["통합 분석", "예측 분석", "분석 라이프사이클"],
          statement: "발견부터 예측과 활용까지 이어지는 분석 기반",
          lead: "시각적·통계적·텍스트 분석과 오픈소스 연계를 바탕으로, 복잡한 분석 과제를 하나의 관리 가능한 흐름으로 운영하도록 지원합니다.",
          features: [
            ["데이터 발견", "다양한 원천 데이터를 연결하고 탐색해 분석의 출발점을 빠르게 찾습니다."],
            ["고급 분석", "통계, 텍스트, 예측 분석을 조합해 문제에 맞는 분석을 수행합니다."],
            ["운영 가능한 결과", "분석 결과를 반복 가능한 라이프사이클로 관리하고 업무에 적용합니다."],
          ],
          flow: [
            ["발견·준비", "여러 데이터 원천을 연결하고 분석 목적에 맞게 준비합니다."],
            ["분석·예측", "시각적 탐색과 통계·머신러닝 분석으로 결과를 검증합니다."],
            ["배포·활용", "검증한 인사이트를 조직의 업무와 의사결정에 연결합니다."],
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
      mstr: {
        title: "전사 데이터의 기준과 현업 분석을 함께",
        lead: "신뢰할 수 있는 엔터프라이즈 데이터, 셀프서비스 분석, 보안·거버넌스를 하나의 BI 환경으로 연결합니다.",
        stages: [
          ["CONNECT", "엔터프라이즈 연결", ["다양한 데이터", "기존 BI 도구"]],
          ["GOVERN", "데이터 기준·보안", ["권한 관리", "데이터 거버넌스"]],
          ["EXPLORE", "셀프서비스 분석", ["리포트·대시보드", "시각적 탐색"]],
          ["SHARE", "공유·확장", ["조직 협업", "API·SDK 연계"]],
        ],
        foundation: ["엔터프라이즈 데이터", "확장 가능한 아키텍처", "안전한 분석"],
      },
      sas: {
        title: "데이터 발견부터 예측 활용까지의 분석 라이프사이클",
        lead: "다양한 데이터 소스와 시각적·통계적 분석을 연결해 분석 과제의 전 과정을 지원합니다.",
        stages: [
          ["SOURCE", "다양한 데이터 연결", ["실시간 데이터", "오픈소스 연계"]],
          ["DISCOVER", "탐색·준비", ["시각적 탐색", "데이터 발견"]],
          ["ANALYZE", "통계·예측 분석", ["텍스트 분석", "분석 모델"]],
          ["ACTIVATE", "결과 활용", ["의사결정 지원", "분석 운영"]],
        ],
        foundation: ["통합 분석 환경", "확장성", "분석 관리"],
      },
    },
  };

  const assetRoot = "../../img/";
  const dataAssetRoot = `${assetRoot}product/cdxp/data/`;
  const icon = (name) => `${dataAssetRoot}icons/${name}.png`;
  const visualCatalog = {
    business: {
      regtech: {
        art: `${dataAssetRoot}authentication.png`,
        artType: "object",
        featureIcons: ["09-server-checklist", "03-user-sync", "01-ai-accelerator"].map(icon),
        stageIcons: ["03-user-sync", "09-server-checklist", "10-monitoring-sync", "07-analytics"].map(icon),
      },
      esg: {
        art: `${assetRoot}main/banner/planToAnalytics.png`,
        artType: "scene",
        featureIcons: ["07-data-sync", "09-server-checklist", "02-dashboard-report"].map(icon),
        stageIcons: ["05-upload", "07-data-sync", "09-server-checklist", "02-dashboard-report"].map(icon),
      },
      bigdata: {
        art: `${assetRoot}main/banner/planToAnalytics.png`,
        artType: "scene",
        featureIcons: ["01-schedule-collector", "01-ai-accelerator", "05-analytics-dashboard"].map(icon),
        stageIcons: ["02-jdbc", "07-data-sync", "07-analytics", "02-dashboard-report"].map(icon),
      },
      sism: {
        art: `${assetRoot}main/banner/manufature.png`,
        artType: "scene",
        featureIcons: ["03-rest-api", "09-server-checklist", "10-monitoring-sync"].map(icon),
        stageIcons: ["03-user-sync", "03-rest-api", "09-server-checklist", "10-monitoring-sync"].map(icon),
      },
      consulting: {
        art: `${assetRoot}main/business/card-consulting.png`,
        artType: "photo",
        featureIcons: ["04-growth-chart", "09-chart-check", "02-dashboard-report"].map(icon),
        stageIcons: ["03-user-sync", "04-growth-chart", "09-chart-check", "06-driving-monitor"].map(icon),
      },
    },
    product: {
      cms: {
        art: `${dataAssetRoot}authentication.png`,
        artType: "object",
        featureIcons: ["03-user-sync", "09-server-checklist", "02-dashboard-report"].map(icon),
        stageIcons: ["03-user-sync", "09-server-checklist", "10-monitoring-sync", "02-dashboard-report"].map(icon),
      },
      esg: {
        art: `${assetRoot}main/banner/planToAnalytics.png`,
        artType: "scene",
        featureIcons: ["07-data-sync", "09-server-checklist", "02-dashboard-report"].map(icon),
        stageIcons: ["05-upload", "07-data-sync", "09-server-checklist", "02-dashboard-report"].map(icon),
      },
      aiq: {
        art: `${dataAssetRoot}artificial-intelligence.png`,
        artType: "object",
        featureIcons: ["01-ai-accelerator", "07-analytics", "09-server-checklist"].map(icon),
        stageIcons: ["02-jdbc", "01-ai-accelerator", "07-analytics", "09-server-checklist"].map(icon),
      },
      emapp: {
        art: `${dataAssetRoot}banner1.png`,
        artType: "interface",
        featureIcons: ["01-schedule-collector", "07-analytics", "02-dashboard-report"].map(icon),
        stageIcons: ["02-jdbc", "01-schedule-collector", "01-ai-accelerator", "05-analytics-dashboard"].map(icon),
      },
      rapidminer: {
        art: `${dataAssetRoot}artificial-intelligence.png`,
        artType: "object",
        featureIcons: ["02-jdbc", "07-analytics", "10-monitoring-sync"].map(icon),
        stageIcons: ["02-jdbc", "01-ai-accelerator", "07-analytics", "09-server-checklist"].map(icon),
      },
      tableau: {
        art: `${assetRoot}main/banner/planToAnalytics.png`,
        artType: "scene",
        featureIcons: ["02-jdbc", "05-upload", "05-analytics-dashboard"].map(icon),
        stageIcons: ["02-jdbc", "07-data-sync", "05-analytics-dashboard", "03-user-sync"].map(icon),
      },
      mstr: {
        art: `${assetRoot}main/banner/planToAnalytics.png`,
        artType: "scene",
        featureIcons: ["02-jdbc", "05-analytics-dashboard", "03-user-sync"].map(icon),
        stageIcons: ["02-jdbc", "09-server-checklist", "05-analytics-dashboard", "03-user-sync"].map(icon),
      },
      sas: {
        art: `${dataAssetRoot}artificial-intelligence.png`,
        artType: "object",
        featureIcons: ["07-data-sync", "07-analytics", "10-monitoring-sync"].map(icon),
        stageIcons: ["02-jdbc", "05-upload", "07-analytics", "02-dashboard-report"].map(icon),
      },
    },
  };

  const diagramLayouts = {
    business: {
      regtech: { name: "control", hub: "CONTROL" },
      esg: { name: "orbit", hub: "ESG DATA" },
      bigdata: { name: "pipeline", hub: "DATA HUB" },
      sism: { name: "cycle", hub: "OPERATE" },
      consulting: { name: "roadmap", hub: "ROADMAP" },
    },
    product: {
      cms: { name: "stack", hub: "CMS" },
      esg: { name: "matrix", hub: "ESG" },
      aiq: { name: "signal", hub: "AIQ" },
      emapp: { name: "platform", hub: "e-Mapp" },
      rapidminer: { name: "workflow", hub: "MODEL" },
      tableau: { name: "dashboard", hub: "INSIGHT" },
      mstr: { name: "dashboard", hub: "GOVERN" },
      sas: { name: "workflow", hub: "ANALYTICS" },
    },
  };

  const iconKindByAsset = {
    "01-ai-accelerator.png": "brain",
    "01-schedule-collector.png": "calendar",
    "02-dashboard-report.png": "chart",
    "02-jdbc.png": "database",
    "03-rest-api.png": "network",
    "03-user-sync.png": "users",
    "04-growth-chart.png": "trend",
    "05-analytics-dashboard.png": "chart",
    "05-upload.png": "upload",
    "06-driving-monitor.png": "monitor",
    "07-analytics.png": "chart",
    "07-data-sync.png": "database",
    "09-chart-check.png": "chartCheck",
    "09-server-checklist.png": "shield",
    "10-monitoring-sync.png": "monitor",
  };

  const svgPaths = {
    brain: '<path d="M9 5.2A3.4 3.4 0 0 1 15.3 6a3.9 3.9 0 0 1 2.2 6.8A3.7 3.7 0 0 1 14 19H9.5A3.5 3.5 0 0 1 6 15.5a3.6 3.6 0 0 1 .5-1.8A3.9 3.9 0 0 1 8.2 6"/><path d="M12 6v13M8.2 10.1H12m0 4h3.8"/>',
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4m8-4v4M4 10h16m-12 4h3m2 0h3"/>',
    chart: '<path d="M4 19V5m0 14h16"/><path d="m7 15 3-4 3 2 4-6"/><path d="M17 7h2v2"/>',
    chartCheck: '<path d="M4 19V5m0 14h16"/><path d="M7 15v-3m4 3V8m4 7v-5"/><path d="m15.5 7.5 1.3 1.3 2.7-3"/>',
    database: '<ellipse cx="12" cy="5.5" rx="7" ry="2.8"/><path d="M5 5.5v6c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-6M5 11.5v6c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-6"/>',
    monitor: '<rect x="3.5" y="4.5" width="17" height="12" rx="2"/><path d="M8.5 20h7m-3.5-3.5V20m-5-9 2.5-2.5L12 11l4-4"/>',
    network: '<circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="m7.8 11 8.4-4m-8.4 6 8.4 4"/>',
    shield: '<path d="M12 3.2 19 6v5.3c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-2.8Z"/><path d="m8.7 12 2.1 2.1 4.5-4.7"/>',
    trend: '<path d="M4 19V5m0 14h16"/><path d="m7 15 3.5-4 3 2 4.5-6"/><path d="M17 7h2v2"/>',
    upload: '<path d="M12 16V4m0 0L8 8m4-4 4 4"/><path d="M5 14v5h14v-5"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20M16 5.5a2.6 2.6 0 0 1 0 5.1m1.8 3.8a4.5 4.5 0 0 1 2.7 4.1V20"/>',
    spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m18.5 15 .7 2 .8-2 2-.7-2-.8-.8-2-.7 2-2 .8 2 .7Z"/>',
  };

  const svgIcon = (asset) => {
    const fileName = asset.split("/").pop();
    const kind = iconKindByAsset[fileName] || "spark";
    return `<svg class="detail-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${svgPaths[kind]}</svg>`;
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
  const visuals = visualCatalog[categoryKey][itemKey];
  const diagramLayout = diagramLayouts[categoryKey][itemKey];

  document.title = `${item.name} | PlanTo`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", item.summary);

  const features = item.features
    .map(
      ([title, text], index) => `
        <article class="detail-feature">
          <div class="detail-feature__top">
            <span class="detail-feature__number">0${index + 1}</span>
            <span class="detail-feature__icon">${svgIcon(visuals.featureIcons[index])}</span>
          </div>
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
          <span class="detail-signal__icon">${svgIcon(visuals.featureIcons[index])}</span>
          <div class="detail-signal__copy">
            <span class="detail-signal__index">0${index + 1}</span>
            <strong>${chip}</strong>
            <span class="detail-signal__caption">CORE CAPABILITY</span>
          </div>
        </article>`,
    )
    .join("");

  const experienceCards = experience.cards
    .map(
      ([number, title, text], index) => `
        <article class="detail-experience__card">
          <div class="detail-experience__card-top">
            <span class="detail-experience__number">${number}</span>
            <span class="detail-experience__icon">${svgIcon(visuals.featureIcons[index])}</span>
          </div>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`,
    )
    .join("");

  const diagramStages = diagram.stages
    .map(
      ([label, title, tags], index) => `
        <article class="detail-diagram__stage">
          <div class="detail-diagram__stage-top">
            <span class="detail-diagram__number">0${index + 1}</span>
            <span class="detail-diagram__stage-icon">${svgIcon(visuals.stageIcons[index])}</span>
          </div>
          <p>${label}</p>
          <h3>${title}</h3>
          <ul>${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        </article>`,
    )
    .join("");

  const diagramFoundation = diagram.foundation
    .map((item) => `<li>${item}</li>`)
    .join("");

  const diagramNetwork = `
    <div class="detail-diagram__network" aria-hidden="true">
      <svg viewBox="0 0 1000 420" preserveAspectRatio="none" focusable="false">
        <path class="detail-diagram__path detail-diagram__path--horizon" d="M48 210H952" />
        <path class="detail-diagram__path detail-diagram__path--one" d="M128 78C298 78 360 146 500 210" />
        <path class="detail-diagram__path detail-diagram__path--two" d="M872 78C702 78 640 146 500 210" />
        <path class="detail-diagram__path detail-diagram__path--three" d="M128 342C298 342 360 274 500 210" />
        <path class="detail-diagram__path detail-diagram__path--four" d="M872 342C702 342 640 274 500 210" />
        <circle class="detail-diagram__network-node detail-diagram__network-node--core" cx="500" cy="210" r="7" />
        <circle class="detail-diagram__network-node detail-diagram__network-node--one" cx="128" cy="78" r="4" />
        <circle class="detail-diagram__network-node detail-diagram__network-node--two" cx="872" cy="78" r="4" />
        <circle class="detail-diagram__network-node detail-diagram__network-node--three" cx="128" cy="342" r="4" />
        <circle class="detail-diagram__network-node detail-diagram__network-node--four" cx="872" cy="342" r="4" />
      </svg>
    </div>`;

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
          <div class="detail-visual__art detail-visual__art--${visuals.artType}"><img src="${visuals.art}" alt="" /></div>
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
        <div class="detail-diagram detail-diagram--${categoryKey} detail-diagram--${diagramLayout.name} detail-diagram--theme-${itemKey}">
          <div class="detail-diagram__header">
            <span>PLAN TO FLOW</span>
            <strong>${item.name}</strong>
            <i aria-hidden="true"></i>
          </div>
          ${diagramNetwork}
          <div class="detail-diagram__hub" aria-hidden="true"><span class="detail-diagram__hub-label">${diagramLayout.hub}</span></div>
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
