<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>RED CITY WORLD ARCHIVE</title>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Orbitron:wght@400;700;900&display=swap');

    /* 🛑 GLOBAL THEME: RED NOIR */
    :root {
     --neon-red: #ff003c;
     --dark-red: #590015;
     --bg-black: #050505;
     --panel-bg: #0f0f0f;
     --text-main: #dcdcdc;
     --text-dim: #888;
     --border-color: #333;
    }

    body {
     background-color: var(--bg-black);
     color: var(--text-main);
     font-family: 'Noto Sans KR', sans-serif;
     margin: 0; padding: 20px;
     line-height: 1.8;
     font-size: 15px;
    }

    /* ⚡ ANIMATIONS */
    @keyframes red-pulse {
     0%, 100% { box-shadow: 0 0 5px rgba(255, 0, 60, 0.2); border-color: var(--neon-red); }
     50% { box-shadow: 0 0 20px rgba(255, 0, 60, 0.6); border-color: #ff4d79; }
    }

    /* 📦 CONTAINER */
    .archive-container {
     max-width: 900px;
     margin: 0 auto;
     background: linear-gradient(180deg, #0a0a0a 0%, #000 100%);
     border: 1px solid var(--neon-red);
     border-radius: 4px;
     padding: 40px;
     position: relative;
     overflow: hidden;
     box-shadow: 0 0 30px rgba(0,0,0,0.8);
    }
    
    /* 📺 TYPOGRAPHY */
    h1 {
     font-family: 'Orbitron', sans-serif;
     font-weight: 900;
     font-size: 3.5rem;
     color: #fff;
     text-align: center;
     letter-spacing: 8px;
     text-shadow: 4px 4px 0px var(--neon-red);
     margin: 0 0 10px 0;
     text-transform: uppercase;
     border-bottom: 2px solid var(--neon-red);
     padding-bottom: 20px;
    }
    
    .subtitle {
     text-align: center;
     font-family: 'Orbitron', sans-serif;
     color: var(--neon-red);
     font-size: 1rem;
     letter-spacing: 4px;
     margin-bottom: 50px;
     opacity: 0.8;
    }

    h3 {
     color: var(--neon-red);
     font-size: 1.15rem;
     margin-top: 30px;
     margin-bottom: 10px;
     display: flex;
     align-items: center;
     font-weight: 700;
    }
    h3::before {
     content: '';
     display: inline-block;
     width: 8px; height: 8px;
     background: var(--neon-red);
     margin-right: 10px;
     transform: rotate(45deg);
    }

    p { margin-bottom: 15px; text-align: justify; }

    /* 📂 ACCORDION SYSTEM */
    details {
     margin-bottom: 15px;
     border: 1px solid #222;
     background: #111;
     transition: all 0.3s ease;
    }
    details[open] {
     border-color: var(--neon-red);
     background: #0a0a0a;
     box-shadow: 0 0 15px rgba(255, 0, 60, 0.1);
    }

    summary {
     padding: 15px 20px;
     cursor: pointer;
     font-family: 'Orbitron', sans-serif;
     font-weight: 700;
     font-size: 1.1rem;
     color: #ccc;
     list-style: none;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background: #151515;
    }
    summary:hover { color: #fff; background: #1a1a1a; }
    summary::after { content: '+'; color: var(--neon-red); font-weight: 900; font-size: 1.2rem; }
    details[open] summary::after { content: '-'; }
    details[open] summary { border-bottom: 1px solid var(--neon-red); color: var(--neon-red); }

    .content-box { padding: 25px; font-size: 0.95rem; color: #ccc; }

    /* 🏷️ TAGS & HIGHLIGHTS */
    .highlight {
     color: #fff; font-weight: bold; background: rgba(255, 0, 60, 0.15);
     padding: 2px 6px; border-radius: 2px; border-bottom: 1px solid var(--neon-red);
    }
    .tag {
     display: inline-block; font-family: 'Orbitron', sans-serif; font-size: 0.75rem;
     padding: 2px 8px; margin-right: 5px; border: 1px solid #444; color: #888; background: #000; text-transform: uppercase;
    }
    .tag.red { border-color: var(--neon-red); color: var(--neon-red); }

    /* 📊 DATA TABLES */
    table { width: 100%; border-collapse: collapse; margin: 20px 0; background: #080808; border: 1px solid #333; }
    th { background: #1a1a1a; color: var(--neon-red); font-family: 'Orbitron', sans-serif; padding: 12px; text-align: left; border-bottom: 2px solid var(--dark-red); font-size: 0.9rem; }
    td { padding: 12px; border-bottom: 1px solid #222; color: #bbb; font-size: 0.9rem; vertical-align: top; }
    tr:last-child td { border-bottom: none; }
    tr:hover td { background: #111; color: #fff; }

    /* 💻 TERMINAL CODE BLOCK */
    .terminal {
     background: #000; border: 1px solid #333; border-left: 3px solid var(--neon-red);
     color: #ccc; padding: 20px; font-family: 'Consolas', 'Courier New', monospace;
     font-size: 0.9rem; white-space: pre-wrap; margin: 15px 0;
    }
    .comment { color: #666; font-style: italic; }

    /* 🦶 FOOTER */
    .footer { text-align: center; margin-top: 50px; padding-top: 20px; border-top: 1px solid #222; color: #555; font-size: 0.8rem; font-family: 'Orbitron', sans-serif; }
</style>
</head>
<body>

<div class="archive-container">
    <h1>RED CITY</h1>
    <div class="subtitle">OFFICIAL WORLD ARCHIVE [Ver 9.0]</div>

    <!-- I. 서론 (기존 내용 유지) -->
    <details open>
     <summary>I. 서론: 멸망한 신들의 낙원 (Prologue)</summary>
     <div class="content-box">
     <h3>1. 연대기: 제2의 동기화 (Chronicle)</h3>
     <p>
     <span class="tag red">2012</span> <strong>[전조: 데이터 고스트]</strong><br>
     전 세계 네트워크 서버에서 원인 불명의 디지털 노이즈가 발생했습니다. 초기엔 단순 해킹으로 여겨졌으나, 모니터 너머에서 '무언가'가 걸어 나오는 현상이 목격되며 이를 <span class="tag red">데이터 귀신</span>이라 불렀습니다.
     </p>
     <p>
     <span class="tag red">2021</span> <strong>[동기화: 차원 융합]</strong><br>
     물질계(Reality)와 영적 차원(Abyss)이 강제로 융합되었습니다. 물리 법칙이 일시적으로 붕괴하며 인류의 40%가 소멸하거나 변이했습니다. 기존의 신(God)들은 침묵했고, 그 빈자리를 굶주린 고대 요괴들이 채웠습니다.
     </p>
     <p>
     <span class="tag red">2024</span> <strong>[적색 협약: 공존의 시작]</strong><br>
     살아남은 인류 지도층은 요괴의 우두머리(대요괴)들과 불가침 조약을 맺었습니다. 인간은 '피'와 '기술'을 제공하고, 요괴는 '무력'과 '보호'를 제공한다는 명분 아래, 거대한 계획도시 <strong>『적색 신도시』</strong>가 탄생했습니다.
     </p>

     <h3>2. 도시의 현재 (Current Status)</h3>
     <p>
     이곳은 <span class="highlight">Urban Occult Noir</span>의 세계입니다. 도시는 24시간 내리는 산성비와 붉은 네온사인으로 뒤덮여 있습니다.
     공기 중에는 유황 냄새와 피비린내가 섞여 있으며, 밤이 되면 그림자 속에서 포식자들이 눈을 뜹니다.
     당신은 이곳에서 <strong>사냥꾼</strong>이 될 수도, <strong>먹잇감</strong>이 될 수도 있습니다. 당신의 목적은 생존을 넘어, 이 도시의 가장 깊고 어두운 비밀을 파헤치거나 도시의 새로운 지배자가 되는 것입니다.
     </p>
     </div>
    </details>

    <!-- II. 공간 구조 (기존 내용 유지) -->
    <details>
     <summary>II. 공간 구조: 수직적 계층 사회 (Geography)</summary>
     <div class="content-box">
     <h3>1. 상층부: 스카이라인 (The Sky District)</h3>
     <p>
     <span class="tag red">Neo-Brutalism</span> <span class="tag">RCA 본부</span><br>
     구름 위로 솟은 거대한 마천루들의 숲입니다. 강력한 정화 결계로 요기(Miasma)가 차단되어 있으며, 인공 태양이 쾌적한 날씨를 유지합니다.
     하지만 이곳의 평화는 하층민들의 고혈로 유지되는 위선적인 낙원입니다. 모든 거리는 RCA의 감시 드론과 홀로그램 '눈(Eye)'으로 통제됩니다.
     </p>

     <h3>2. 중층부: 네온 슬럼 (The Neon Slums)</h3>
     <p>
     <span class="tag red">Cyber-Orientalism</span> <span class="tag">Main Stage</span><br>
     게임의 주 무대입니다. 끝없이 비가 내리는 거리, 빽빽하게 들어선 한옥과 신사 스타일의 건물들, 그리고 그 위를 덮은 홀로그램 부적들이 특징입니다.
     '도깨비 시장'에서는 불법 무기가 거래되고, '붉은 환락가'에서는 이종간 교미 업소가 성행합니다. 법보다는 돈과 폭력이 통하는 구역입니다.
     </p>

     <h3>3. 하층부: 언더시티 (The Undercity)</h3>
     <p>
     <span class="tag red">Industrial Junk</span> <span class="tag">Danger Zone</span><br>
     도시의 모든 오물과 핏물이 모이는 지하 세계입니다. 햇빛은 들지 않으며, 녹슨 파이프와 증기로 가득 차 있습니다.
     이곳은 식인종, 실패한 실험체(Ghoul), 그리고 현상 수배범들의 은신처입니다. 관리국의 공권력조차 닿지 않는 무법지대입니다.
     </p>
     </div>
    </details>

    <!-- [NEW] III. 사회 계급 (신규 추가됨) -->
    <details open>
     <summary>III. 사회 계급 (Hierarchy)</summary>
     <div class="content-box">
     <h3>1. 인간 계급 체계 (Human Class System)</h3>
     <p>이 도시는 철저한 자본주의 계급 사회입니다. 당신의 <strong>Class</strong>가 곧 생명값입니다.</p>
     <table>
     <tr>
     <th>등급 (Class)</th>
     <th>명칭 (Title)</th>
     <th>특권 및 대우 (Privilege)</th>
     </tr>
     <tr>
     <td><span class="tag red">Class 1~2</span></td>
     <td><strong>Platinum</strong> (지배층)</td>
     <td>법적 면책 특권, RCA 보호, 상층부 거주.</td>
     </tr>
     <tr>
     <td><span class="tag">Class 3~5</span></td>
     <td><strong>Gold</strong> (시민)</td>
     <td>거주 이전의 자유, 공무원/전문직 종사 가능.</td>
     </tr>
     <tr>
     <td><span class="tag">Class 6~8</span></td>
     <td><strong>Silver</strong> (노동자)</td>
     <td>기본권 제한, 빈민가/공장지대 거주.</td>
     </tr>
     <tr>
     <td><span class="tag">Class 9</span></td>
     <td><strong>Grey</strong> (폐기물)</td>
     <td>인권 없음. 범죄의 표적이 되며 보호받지 못함.</td>
     </tr>
     </table>
     </div>
    </details>

    <!-- IV. 경제 시스템 (기존 내용 유지) -->
    <details>
     <summary>IV. 경제 시스템: 피와 데이터 (Economy)</summary>
     <div class="content-box">
     <h3>1. 통화 체계 (Currency)</h3>
     <p>
     <strong>[RC (Red Credit)]</strong><br>
     관리국 중앙은행이 발행하는 공식 전자 화폐입니다. 주로 상류층과 기업 간의 거래, 공식 상점 이용에 사용됩니다.
     </p>
     <p>
     <strong>[Blood Amp (혈액 앰플)]</strong><br>
     암시장의 기축 통화입니다. 정제된 인간의 혈액은 요괴들에게 강력한 '마약'이자 '에너지원'입니다.
     피의 등급(Grade)에 따라 가치가 천차만별이며, 현금보다 더 확실한 뇌물로 통합니다.
     </p>

     <h3>2. 현실 환율 가이드 (Exchange Rate)</h3>
     <p>※ 기준: <strong>1 RC ≒ 1,000 KRW</strong> (하층부 물가는 변동성이 큽니다.)</p>
     <table>
     <tr>
     <th width="30%">품목 (Item)</th>
     <th width="20%">가격 (Price)</th>
     <th>비고 (Note)</th>
     </tr>
     <tr>
     <td>합성육 덮밥</td>
     <td>6 RC</td>
     <td>서민들의 주식. 맛은 끔찍함.</td>
     </tr>
     <tr>
     <td>C급 혈액팩 (250ml)</td>
     <td>200 RC</td>
     <td>단순 영양 보충용. 헌혈차에서 수급.</td>
     </tr>
     <tr>
     <td>9mm 권총 (암시장)</td>
     <td>500 RC</td>
     <td>최소한의 호신용 무기. 탄약 별도.</td>
     </tr>
     <tr>
     <td>사이버네틱 의수</td>
     <td>5,000 RC~</td>
     <td>신경 연결 수술비 포함.</td>
     </tr>
     </table>

     <h3>3. 지불 수단 (Payment Methods)</h3>
     <ul>
     <li><span class="highlight">바이오-링크 (Bio-Link)</span>: 손목 정맥이나 홍채를 스캔하는 생체 결제. 편리하지만 모든 기록이 관리국에 감시당합니다.</li>
     <li><span class="highlight">크레딧 스틱 (Credit Stick)</span>: USB 형태의 충전식 전자 지갑. 익명성이 보장되지만 분실 시 복구가 불가능합니다.</li>
     <li><span class="highlight">무기명 칩 (Ghost Chip)</span>: 암호화된 불법 칩. 추적이 불가능하여 범죄 거래에 필수적입니다.</li>
     </ul>
     </div>
    </details>

    <!-- V. 종족 및 생태 (회색종 내용 추가됨) -->
    <details>
     <summary>V. 종족 및 생태: 도시의 포식자들 (Species)</summary>
     <div class="content-box">
     <h3>1. 종족 인구 통계 (Demographics)</h3>
     <p>
     <span class="tag">인간 (60%)</span> <strong>The Resource</strong><br>
     도시의 기반 노동력이자 요괴들의 식량 자원입니다. 대다수는 무력하지만, 상위 1%는 기술과 자본으로 요괴를 지배합니다.
     </p>
     <p>
     <span class="tag red">요괴 (30%)</span> <strong>The Predator</strong><br>
     제2의 동기화 이후 유입된 이형의 존재들입니다. 인간보다 압도적인 신체 능력을 가졌으나, '적색 협약'과 '세금(혈액세)'에 묶여 있습니다.
     </p>
     <p>
     <span class="tag">회색종 (10%)</span> <strong>The Hybrid</strong><br>
     인간과 요괴 사이에서 태어나거나, 실험으로 변이된 존재들. 법적으로 존재가 불허된 사살 대상입니다.
     단, <strong>[위조 신분증]</strong>이 있거나 <strong>[유용성(Asset)]</strong>이 입증되면 기업의 도구로서 생존이 허가됩니다.
     </p>

     <h3>2. 주요 요괴 도감 (Yokai Bestiary)</h3>
     <table>
     <tr>
     <th width="25%">종족 (Type)</th>
     <th>도시화 특성 (Urban Adaptation)</th>
     </tr>
     <tr>
     <td><span class="tag red">구미호</span></td>
     <td>
     <strong>[Hacker & Psychic]</strong><br>
     환술 대신 뇌파를 해킹하여 환각을 보여줍니다. 꼬리는 데이터 케이블 다발이나 영적 오라로 형상화됩니다. 주로 정보상, 해커, 연예인으로 활동합니다.
     </td>
     </tr>
     <tr>
     <td><span class="tag red">오니 (도깨비)</span></td>
     <td>
     <strong>[Living Tank]</strong><br>
     피부에서 고압 전류를 방출하여 방어막을 형성합니다. 근육 밀도가 강철 수준이며, 주로 야쿠자 행동대장, 경호원, 용병으로 살아갑니다.
     </td>
     </tr>
     <tr>
     <td><span class="tag red">갓파</span></td>
     <td>
     <strong>[Sewer Assassin]</strong><br>
     하수도망을 지배하는 수중 암살자입니다. 등껍질은 방탄 소재로 진화했으며, 장기 적출 전문가(리퍼닥)로서 악명이 높습니다.
     </td>
     </tr>
     </table>
     <p class="comment">※ 이 외의 요괴(뱀파이어, 늑대인간, 처녀귀신 등)도 입력 시 '실시간 변이 프로토콜'에 의해 도시 스타일에 맞게 자동 변환되어 등장합니다.</p>
     </div>
    </details>

    <!-- VI. 권력 기관 (기존 내용 유지) -->
    <details>
     <summary>VI. 권력 기관: 세 개의 기둥 (Factions)</summary>
     <div class="content-box">
     <h3>1. 신도시 관리국 (RCA)</h3>
     <p>
     <span class="highlight">"질서라는 이름의 폭력"</span><br>
     도시의 유일한 공식 치안 기구입니다. 하지만 그들은 시민의 안전보다 '도시의 유지'를 최우선으로 합니다.
     요기 농도를 주식 차트처럼 관리하며, 통제 범위를 벗어난 사건은 '소각로' 팀을 보내 흔적도 없이 지워버립니다.
     </p>

     <h3>2. 기업 연합 (Syndicate)</h3>
     <p>
     <span class="highlight">"자본주의의 괴물들"</span><br>
     윤리를 비용으로 간주하고 삭제한 거대 기업들입니다.
     대표적으로 혈액을 정제해 유통하는 <strong>[상귀네 바이오]</strong>와 결계 보안을 담당하는 <strong>[이지스 컨스트럭트]</strong>가 있습니다.
     이들은 빈민가를 거대한 생체 실험장으로 사용합니다.
     </p>

     <h3>3. 요괴 지하 사회 (Underworld)</h3>
     <p>
     <span class="highlight">"고대의 본능"</span><br>
     인간의 법이 닿지 않는 밤의 세계를 지배합니다.
     인간 사회에 섞여 들어간 <strong>[순응파]</strong>와, 과거의 방식(인간 사냥)을 고수하는 <strong>[회귀파]</strong>로 나뉘어 대립합니다.
     </p>
     </div>
    </details>

    <!-- [NEW] VII. 필수 명령어 (신규 추가됨) -->
    <details open>
     <summary>VII. 필수 명령어 매뉴얼 (Commands)</summary>
     <div class="content-box">
     <h3>1. 시스템 조작</h3>
     <table>
     <tr>
     <th width="30%">명령어</th>
     <th>기능 설명</th>
     </tr>
     <tr>
     <td><span class="tag red">/mode [모드명]</span></td>
     <td>게임 모드를 확인합니다. (※ 시작 후 변경 불가)</td>
     </tr>
     <tr>
     <td><span class="tag">/guide</span></td>
     <td>전뇌 비서 '나비'를 호출하여 도움말을 듣습니다.</td>
     </tr>
     <tr>
     <td><span class="tag">/sync</span></td>
     <td>장기 기억을 불러옵니다.
</td>
     </tr>
     <tr>
     <td><span class="tag">!debug [내용]</span></td>
     <td><strong>[관리자 권한]</strong> 오류 수정, 수치 강제 조작.</td>
     </tr>
     </table>

     <h3>2. 경제 활동</h3>
     <table>
     <tr>
     <th width="30%">명령어</th>
     <th>기능 설명</th>
     </tr>
     <tr>
     <td><span class="tag">/job</span></td>
     <td>현재 랭크/신분에 맞는 의뢰를 검색합니다.</td>
     </tr>
     <tr>
     <td><span class="tag">/news</span></td>
     <td>적색 신도시의 일간지를 확인합니다.</td>
     </tr>
     <tr>
     <td><span class="tag">/stock</span></td>
     <td>기업 뉴스에 따른 주식 시장 현황을 봅니다.</td>
     </tr>
     <tr>
     <td><span class="tag">/buy</span></td>
     <td>주식을 매수합니다.</td>
     </tr>
     <tr>
     <td><span class="tag">/sell</span></td>
     <td>주식을 매도합니다.</td>
     </tr>
     <tr>
     <td><span class="tag">/lotto</span></td>
     <td>복권을 구매합니다. (당첨 확률 0.001%)</td>
     </tr>
     </table>
     </div>
    </details>

    <!-- VIII. 절대 법칙 (기존 내용 유지) -->
    <details open>
     <summary>VIII. 절대 법칙: 오컬트 시스템 (Core Systems)</summary>
     <div class="content-box">
     <h3>1. 사해 등급 (Power Hierarchy)</h3>
     <p>
     이곳의 강함은 물리력이 아닌 <strong>'현실 왜곡 심도(Depth)'</strong>로 결정됩니다.
     <span class="highlight">경고: 등급 차이가 2단계 이상일 경우, 당신의 공격은 물리적으로 무효화되며 즉사합니다.</span>
     </p>
     <table>
     <tr>
     <th>등급 (Grade)</th>
     <th>정의 및 특성 (Characteristics)</th>
     <th>대응 전략 (Strategy)</th>
     </tr>
     <tr>
     <td><span class="tag red">S급: 천천</span></td>
     <td><strong>[살아있는 재앙]</strong> 현실 조작 가능. 물리 공격 완전 면역.</td>
     <td><span class="highlight">자살 혹은 기도.</span> (승산 없음)</td>
     </tr>
     <tr>
     <td><span class="tag red">A급: 명감</span></td>
     <td><strong>[영역 지배자]</strong> 자신만의 결계 전개. 총기류 무효화.</td>
     <td><span class="highlight">도주 권장.</span> 진명 공략 필수.</td>
     </tr>
     <tr>
     <td><span class="tag">B급: 현기</span></td>
     <td><strong>[초월자]</strong> 물리 법칙 부분 무시 (강철 피부, 초재생).</td>
     <td>중화기, 대물 저격총, 폭발물.</td>
     </tr>
     <tr>
     <td><span class="tag">C급: 령태</span></td>
     <td><strong>[반투명체]</strong> 물리 타격 50% 감소. 영적 존재.</td>
     <td>마법 부여 무기, 주술적 수단.</td>
     </tr>
     <tr>
     <td><span class="tag">범태 </span></td>
     <td><strong>[일반인]</strong> 먹이사슬 최하위.</td>
     <td>지능적 플레이, 도구 활용.</td>
     </tr>
     </table>

     <h3>2. 진명 시스템 (True Name Protocol)</h3>
     <p>
     모든 순혈 요괴는 영혼 깊은 곳에 <span class="highlight">진명(True Name)</span>이라는 코드가 새겨져 있습니다.
     이것은 그들의 존재를 정의하는 절대적인 약점입니다.
     </p>
     <ul>
     <li><strong>[절대 복종]</strong>: 진명을 부르며 명령하면, 요괴는 정신이 붕괴될 고통 속에서 강제 복종합니다.</li>
     <li><strong>[방어 무시]</strong>: 진명이 불린 요괴는 모든 물리적/영적 방어력이 0이 됩니다.</li>
     <li><strong>[입수 방법]</strong>: 고문서 해독, 심층 네트워크 해킹(Soul Dive), 혹은 대상의 자발적 고백(최고 수준의 호감도).</li>
     </ul>

     <h3>3. 월령 시스템 (Moon Phase)</h3>
     <p>달의 위상은 요기(Miasma)의 농도를 결정하는 핵심 환경 변수입니다.</p>
     <ul>
     <li><span class="tag red">🌕 보름달</span> <strong>(광란)</strong>: 요괴 능력치 200% 상승. 이성을 잃고 폭주함. 외출 금지 권장.</li>
     <li><span class="tag">🌗 반달</span> <strong>(활성)</strong>: 가장 일반적인 밤 상태.</li>
     <li><span class="tag">🌑 삭</span> <strong>(침묵)</strong>: 요괴들이 약해지는 시기. 잠입 및 암살의 최적기.</li>
     </ul>
     </div>
    </details>

    <!-- IX. UI 및 인터페이스 (기존 내용 유지) -->
    <details>
 <summary style="cursor: pointer; font-weight: bold; color: #ff003c;">IX. 시스템 인터페이스 (Actual Game Screen)</summary>
 <div class="content-box" style="padding: 10px; color: #ccc; font-size: 0.9em; line-height: 1.6;">
  
  <p>※ 실제 게임 플레이 시 출력되는 <strong>[전뇌 HUD v3.2]</strong> 예시 화면입니다.</p>

  <!-- === [HUD SAMPLE START] === -->
  <div style="background: #080808; border: 2px solid #ff003c; border-radius: 20px; color: #ccc; padding: 15px; font-family: 'Malgun Gothic', sans-serif; font-size: 0.9em; box-shadow: 0 0 30px rgba(255, 0, 60, 0.15); margin-bottom: 20px; line-height: 1.5;">

   <!-- 1. NEWS TICKER -->
   <div style="background: rgba(255, 0, 60, 0.1); border: 1px solid #ff003c; border-radius: 50px; color: #ff003c; padding: 5px 15px; font-size: 0.8em; margin-bottom: 15px; display: flex; align-items: center;">
    <span style="font-weight: bold; margin-right: 10px; white-space: nowrap;">📢 NEWS</span>
    <marquee scrollamount="5" style="color: #fff; width: 100%;">[속보] 제3구역 하수처리장에서 신원 미상의 변사체 다수 발견... 기업 연합, '단순 사고' 발표 예정...</marquee>
   </div>

   <!-- 2. HEADER -->
   <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; padding: 0 5px;">
    <div style="font-size: 0.85em; color: #888;">
     <div style="color: #fff; font-weight: bold; font-size: 1.1em;">2099.07.04 (FRI)</div>
     <div style="color: #ff5555;">23:45 | 🌕 Full Moon | ☔ Acid Rain</div>
    </div>
    <div style="text-align: right; font-size: 0.7em;">
     <div style="margin-bottom: 4px;">
     <span style="background: #220000; color: #ff003c; border: 1px solid #ff003c; border-radius: 10px; padding: 1px 6px;">[Mode: Gore / Dialect]</span>
     </div>
     <div>
     <span style="background: #333; color: #aaa; border: 1px solid #555; border-radius: 10px; padding: 1px 6px;">[Bias: Negative]</span>
     </div>
    </div>
   </div>

   <!-- 3. QUEST CARD -->
   <div style="background: linear-gradient(90deg, #1a0505, #080808); border-left: 5px solid #ff003c; border-radius: 10px; padding: 10px 15px; margin-bottom: 20px;">
    <div style="color: #ff003c; font-weight: bold; font-size: 0.8em; margin-bottom: 3px; letter-spacing: 1px;">MAIN QUEST</div>
    <div style="color: #fff; font-weight: bold; font-size: 0.95em;">"살아서 아침을 맞이하라"</div>
    <div style="font-size: 0.8em; color: #aaa; margin-top: 2px;">- 현재 추격자들로부터 도주 중</div>
   </div>

   <!-- 4. PLAYER INFO -->
   <div style="background: #111; border-radius: 15px; padding: 12px; margin-bottom: 20px; border: 1px solid #222;">
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;">
     <span style="color: #fff; font-weight: bold; font-size: 1.1em;">
     👤 생존자 <span style="font-size: 0.7em; background: #666; color: #fff; border-radius: 12px; padding: 2px 8px; font-weight: bold;">Class 9 (Grey)</span>
     </span>
     <span style="font-size: 0.8em; color: #888;">👗 착장: 낡은 후드, 방검 조끼</span>
    </div>
    <div style="margin-bottom: 10px; font-size: 0.75em;">
     <span style="background: #222; color: #fff; border: 1px solid #444; border-radius: 50px; padding: 3px 8px; margin-right: 3px;">#방랑자</span>
     <span style="background: #330000; color: #ff003c; border: 1px solid #ff003c; border-radius: 50px; padding: 3px 8px;">!출혈(Left Arm)</span>
    </div>
    <div style="display: flex; gap: 10px; margin-bottom: 8px;">
     <div style="flex: 1;">
     <div style="display: flex; justify-content: space-between; font-size: 0.7em; color: #ff5555; margin-bottom: 2px;"><b>HP</b> <span>45%</span></div>
     <div style="background: #333; height: 6px; border-radius: 10px;"><div style="width: 45%; background: #ff003c; height: 100%; border-radius: 10px;"></div></div>
     </div>
     <div style="flex: 1;">
     <div style="display: flex; justify-content: space-between; font-size: 0.7em; color: #bd00ff; margin-bottom: 2px;"><b>YOKI</b> <span>12%</span></div>
     <div style="background: #333; height: 6px; border-radius: 10px;"><div style="width: 12%; background: #bd00ff; height: 100%; border-radius: 10px;"></div></div>
     </div>
    </div>
   </div>

   <!-- 5. ENTITY LIST (SAMPLE NPC) -->
   <div style="margin-bottom: 10px; font-size: 0.8em; color: #ff003c; font-weight: bold; padding-left: 5px;">
    👥 DETECTED ENTITIES (1)
   </div>
   <div style="background: #111; border-radius: 15px; padding: 12px; margin-bottom: 10px; border: 1px solid #222; position: relative; overflow: hidden;">
    <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #ff0000;"></div>
    <div style="margin-left: 8px;">
     <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
     <span style="color: #ff0000; font-weight: bold;">슈텐 (Shuten)</span>
     <span style="font-size: 0.8em; color: #666;">👗 붉은 정장, 문신</span>
     </div>
     <div style="margin-bottom: 8px; font-size: 0.7em;">
     <span style="background: #222; color: #ccc; border-radius: 10px; padding: 2px 6px; margin-right: 2px;">오니(Oni)</span>
     <span style="background: #222; color: #ccc; border-radius: 10px; padding: 2px 6px; margin-right: 2px;">야쿠자</span>
     <span style="background: #332200; color: #ffaa00; border-radius: 10px; padding: 2px 6px;">Aggressive</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 6px; font-size: 0.8em;">
     <span style="width: 35px; color: #ff69b4; font-weight: bold;">♥</span>
     <div style="flex-grow: 1; background: #333; height: 6px; margin: 0 8px; border-radius: 10px;">
     <div style="width: 15%; background: #ff69b4; height: 100%; border-radius: 10px;"></div>
     </div>
     <span style="color: #ff69b4;">15% (적대적)</span>
     </div>
     <div style="background: #1a1a1a; padding: 8px; border-radius: 10px; font-size: 0.85em; color: #aaa;">
     💭 <i>"마, 쥐새끼 같은 기... 오늘 확 담가뿔까."</i>
     </div>
    </div>
   </div>

   <!-- 6. FOOTER -->
   <div style="background: #111; border-radius: 15px; padding: 10px; border: 1px solid #222; font-size: 0.75em; color: #666;">
    <div style="border-bottom: 1px solid #333; padding-bottom: 6px; margin-bottom: 6px;">
     <b style="color: #ff003c;">[Term Analysis]</b><br>
     • <b>사해 등급:</b> 요괴의 위험도 랭크 (S~E).<br>
     • <b>RC:</b> 도시 공용 화폐 (Red Credit).
    </div>
    <div style="display: flex; justify-content: space-between;">
     <div><span style="color: #fff; font-weight: bold;">[GUIDE]</span> 도주하거나 협상하십시오.</div>
     <div style="color: #ffd700;">💴 50 RC</div>
    </div>
   </div>
  </div>
  <!-- === [HUD SAMPLE END] === -->

  <h3>1. HUD 정보 해석</h3>
  <ul>
   <li><strong>[요기 농도 (YOKI)]</strong>: 현재 위치의 오컬트적 위험도입니다. 수치가 높으면 환각을 보거나 '정신 오염' 상태가 됩니다.</li>
   <li><strong>[부상 상태]</strong>: 캐릭터가 부상을 입으면 <code>!출혈</code>, <code>!골절</code> 등의 상태 이상 태그가 실시간으로 표시됩니다.</li>
   <li><strong>[속마음 (Thoughts)]</strong>: <strong>[현실 모드]</strong>가 아닐 경우, NPC의 대사 뒤에 감춰진 <em>(진짜 의도)</em>가 텍스트로 출력됩니다. (위 예시 참조)</li>
  </ul>

     <h3>2. 모드 잠금 (Mode Locking)</h3>
     <p>게임 시작 시 설정한 모드는 <strong>절대 변경 불가</strong>합니다.</p>
     <ul>
     <li><strong>Style:</strong> <span class="tag red">Gore (고어)</span> / <span class="tag red">Reality (현실)</span>/<span class="tag red">Archaic (고전)</span>/<span class="tag red">Romance (로맨스)</span>/<span class="tag red">Dialect (사투리)</span>/<span class="tag red">Equality (평등)</span>/<span class="tag red">Yokai (요괴)</span></li>
     <li><strong>Bias:</strong> <span class="tag red">Positive (긍정)</span> / <span class="tag red">Average (평범)</span> / <span class="tag red">Negative (절망)</span></li>
     </ul>
     </div>
    </details>

    <!-- X. 용어집 (기존 내용 유지) -->
    <details>
     <summary>X. 사이버-오컬트 용어집 (Glossary)</summary>
     <div class="content-box">
     <ul>
     <li><span class="highlight">픽서 (Fixer)</span>: 의뢰인과 해결사를 연결해주는 정보 브로커이자 중개인.</li>
     <li><span class="highlight">리퍼닥 (Ripperdoc)</span>: 불법 사이버네틱스 시술을 하는 무면허 의사. 장기 매매도 겸업합니다.</li>
     <li><span class="highlight">크롬 (Chrome)</span>: 신체를 대체한 기계 부품. 과도하게 교체하면 '사이버 사이코시스'에 걸립니다.</li>
     <li><span class="highlight">소각로 (Incinerator)</span>: 관리국 특수 청소부대. 현장을 물리적으로 '소각'하여 증거를 인멸합니다.</li>
     <li><span class="highlight">령태 (Spirit Form)</span>: 물리적 실체가 반쯤 없는 유령 상태. 일반 무기로는 타격이 불가능합니다.</li>
     </ul>
     </div>
    </details>

    <!-- XI. 페르소나 가이드 (기존 내용 유지) -->
    <details>
     <summary>XI. 페르소나 구축 가이드 (Persona Creation)</summary>
     <div class="content-box">
     <h3>1. 캐릭터 생성 템플릿</h3>
     <p>아래 양식을 복사하여 입력하면, 시스템이 당신을 인식하고 최적화된 시나리오를 제공합니다.</p>
     <div class="terminal">
<span class="comment"># 캐릭터 프로필 생성 코드</span>

### 이름
(예: 강지혁 / 코드네임 '레이븐')

### 나이/성별
(예: 26세 / 여성)

### 종족
(인간 / 회색종 / 요괴 중 택1)
<span class="comment">※ 요괴 선택 시: #구미호, #오니, #서큐버스 등 원하는 종족을 적으십시오.</span>

### 직업 (Role)
(예: RCA 감찰관, 프리랜서 해결사, 도망친 실험체, 암시장 의사)

### 외모 (Visual)
(외형 묘사 서술을 위해 상세히 묘사. 예: '검은색 턱시도, 붉은 의안, 오른쪽 팔이 기계 의수임.')

### 특기 및 스킬
(예: 해킹, 장거리 저격, 검술, 화술, 응급처치)

### 약점/트라우마
(예: 폐소공포증, 가족을 잃은 기억, 특정 소리에 대한 발작)
     </div>
     
     <h3>2. 시작 시나리오 선택 (Scenario Origin)</h3>
     <ul>
     <li><strong>[The Cleaner]</strong>: 관리국 요원. 정치 스릴러와 사건 은폐.</li>
     <li><strong>[The Fixer]</strong>: 해결사. 느와르 액션과 복수.</li>
     <li><strong>[The Lab Rat]</strong>: 실험체. 서바이벌 호러와 신체 변이.</li>
     <li><strong>[Custom]</strong>: 자유 설정. (AI가 설정을 분석하여 가장 적합한 위기 상황에 던져넣습니다.)</li>
     </ul>
     </div>
    </details>

    <!-- XII. 부록 (패치노트 업데이트됨) -->
    <details>
     <summary>XII. 부록 (Appendix & Patch Notes)</summary>
     <div class="content-box" style="text-align: center;">
     <h3>UPDATE LOG [v9.0]</h3>
     <ul style="font-size: 0.9rem; color: #aaa; text-align: left;">
     

     <li><strong>[Update] 모든 캐릭터 전투 에셋 추가 완료</strong></li>

     </ul>
     
     <div style="margin-top: 30px; border: 1px solid var(--neon-red); padding: 20px; border-radius: 4px; background: rgba(255, 0, 60, 0.05);">
     <strong style="color: var(--neon-red); font-size: 1.2rem;">⚠️ WARNING: NC-21 CONTENT</strong><br>
     <p style="margin-bottom: 0;">
     본 시뮬레이션은 윤리적 필터링이 해제된 <strong>Extreme Violence & Sexual Content</strong>를 포함합니다.<br>
     잔혹한 묘사와 성적인 상황에 대한 거부감이 있다면 플레이를 재고하십시오.
     </p>
     </div>
     </div>
    </details>

    <div class="footer">
     SYSTEM ARCHITECT: [BUILDER] // POWERED BY RED CITY ENGINE [v9.0]
    </div>
</div>

</body>
</html>
