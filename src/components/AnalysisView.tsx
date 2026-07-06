import React, { useState } from "react";
import { BarChart2, Bus, Info, Check, HelpCircle, AlertCircle, DollarSign } from "lucide-react";

interface TicketItem {
  name: string;
  individual: number;
  withCard: number;
}

export default function AnalysisView() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const ticketData: TicketItem[] = [
    { name: "세체다 왕복 곤돌라", individual: 78, withCard: 0 },
    { name: "알페디시우시 리프트", individual: 43, withCard: 0 },
    { name: "사솔룽고 스탠딩리프트", individual: 46, withCard: 0 },
    { name: "기타 가르디나 리프트", individual: 110, withCard: 0 }
  ];

  const totalIndividual = ticketData.reduce((acc, curr) => acc + curr.individual, 0); // 277
  const cardCost = 130; // Gardena Card 3-Day Pass
  const netSavings = totalIndividual - cardCost; // 147

  // Render variables for custom SVG chart
  const maxVal = 120;
  const chartHeight = 220;

  return (
    <div className="space-y-6 animate-fadeIn text-[#2D3748]">
      {/* Cable car savings strategy */}
      <div className="bg-white p-5 rounded-xl border border-[#E2D9CF] shadow-sm text-center">
        <h3 className="text-lg md:text-xl font-extrabold text-[#1A202C] mb-2">
          2026년 돌로미티 케이블카 비용 절감 전술
        </h3>
        <p className="text-xs md:text-sm text-[#718096] mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
          세체다(Seceda) 리프트가 통합 패스인 &lsquo;슈퍼썸머&rsquo;에서 전격 탈퇴 및 독립 운영됨에 따라, 발가르디나 구역에 집중 체류하는 동안은{" "}
          <strong className="text-[#3D6A4B] font-extrabold bg-[#EEF5F0] px-1.5 py-0.5 rounded border border-[#3D6A4B]/20">가르디나 카드 (Gardena Card) 3일권</strong>
          을 발권하는 것이 무조건적인 이득을 보장합니다.
        </p>

        {/* Customized Interactive SVG Bar Chart */}
        <div className="max-w-2xl mx-auto bg-[#FBF9F6] p-5 rounded-lg border border-[#E2D9CF] shadow-inner text-left">
          <div className="flex justify-between items-center mb-5 text-xs font-bold text-[#718096]">
            <span>케이블카 개별 가격 비교 (성인 1인 기준)</span>
            <span className="text-[10px] text-[#A0AEC0] font-medium">바에 마우스를 올리면 상세 정보가 표시됩니다.</span>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* SVG Plotting */}
            <svg viewBox="0 0 500 240" className="w-full h-auto font-sans">
              {/* Y Axis Grid lines */}
              {[0, 30, 60, 90, 120].map((gridVal) => {
                const yPos = chartHeight - (gridVal / maxVal) * 160 - 30;
                return (
                  <g key={gridVal}>
                    <line 
                      x1="50" 
                      y1={yPos} 
                      x2="480" 
                      y2={yPos} 
                      stroke="#E2D9CF" 
                      strokeDasharray="4 4" 
                    />
                    <text 
                      x="40" 
                      y={yPos + 4} 
                      textAnchor="end" 
                      className="fill-[#A0AEC0] text-[10px] font-mono font-bold"
                    >
                      €{gridVal}
                    </text>
                  </g>
                );
              })}

              {/* Draw Bars */}
              {ticketData.map((item, idx) => {
                const colWidth = 100;
                const colGap = 15;
                const startX = 65 + idx * (colWidth + colGap);
                
                // Calculate heights
                const barHeightInd = (item.individual / maxVal) * 160;
                const barYInd = chartHeight - barHeightInd - 30;

                return (
                  <g 
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="cursor-pointer group"
                  >
                    {/* Individual Cost Bar */}
                    <rect
                      x={startX}
                      y={barYInd}
                      width="35"
                      height={barHeightInd}
                      fill={hoveredIndex === idx ? "#E53E3E" : "#EF4444"}
                      rx="3"
                      className="transition-all duration-300"
                    />

                    {/* With Card Bar (0 height because card covers 100%) */}
                    <rect
                      x={startX + 40}
                      y={chartHeight - 34}
                      width="35"
                      height="4"
                      fill="#3D6A4B"
                      rx="1"
                    />

                    {/* Value label above Individual bar */}
                    <text
                      x={startX + 17.5}
                      y={barYInd - 6}
                      textAnchor="middle"
                      className="fill-red-600 text-[10px] font-extrabold font-mono"
                    >
                      €{item.individual}
                    </text>

                    {/* Value label above Card bar */}
                    <text
                      x={startX + 57.5}
                      y={chartHeight - 40}
                      textAnchor="middle"
                      className="fill-[#3D6A4B] text-[10px] font-extrabold font-mono"
                    >
                      €0
                    </text>

                    {/* Item Short Title under column */}
                    <text
                      x={startX + 37.5}
                      y={chartHeight - 12}
                      textAnchor="middle"
                      className="fill-[#2D3748] text-[9px] font-bold"
                    >
                      {item.name.substring(0, 7)}
                    </text>
                  </g>
                );
              })}

              {/* X Axis Baseline */}
              <line 
                x1="50" 
                y1={chartHeight - 30} 
                x2="480" 
                y2={chartHeight - 30} 
                stroke="#718096" 
                strokeWidth="1.5" 
              />
            </svg>
          </div>

          {/* Interactive details */}
          <div className="mt-4 p-3 bg-white rounded-lg border border-[#E2D9CF] min-h-[50px] flex items-center justify-center text-xs">
            {hoveredIndex !== null ? (
              <p className="text-[#2D3748] font-medium">
                🔍 <strong className="text-[#1A202C] font-extrabold">{ticketData[hoveredIndex].name}</strong>: 개별 예약 구매 시{" "}
                <strong className="text-red-500 font-mono">€{ticketData[hoveredIndex].individual}</strong>이나, 가르디나 카드 패키지 소지 시{" "}
                <strong className="text-[#3D6A4B] font-bold">무제한 무료 탑승 (포함)</strong>됩니다.
              </p>
            ) : (
              <p className="text-[#A0AEC0] font-medium">
                차트 기둥에 마우스를 대면 세부 가격 대비표가 산출됩니다.
              </p>
            )}
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="p-4 bg-white rounded-lg border border-[#E2D9CF] shadow-sm">
            <span className="block font-black text-2xl text-[#1A202C] font-mono">€{cardCost}</span>
            <span className="text-[#718096] font-bold block mt-1">가르디나 3일 무제한 패스</span>
          </div>
          <div className="p-4 bg-red-50/40 rounded-lg border border-red-200">
            <span className="block font-black text-2xl text-red-500 font-mono">€{totalIndividual}</span>
            <span className="text-red-400 font-bold block mt-1">개별 리프트 개별 결제 시 총합</span>
          </div>
          <div className="p-4 bg-[#EEF5F0] rounded-lg border border-[#3D6A4B]/20">
            <span className="block font-black text-2xl text-[#3D6A4B] font-mono">€{netSavings} 세이브</span>
            <span className="text-[#3D6A4B] font-extrabold block mt-1">아들과 2인 탑승 시 총 €{netSavings * 2} 절약!</span>
          </div>
        </div>
      </div>

      {/* Dolomiti Bus strategy card */}
      <div className="bg-[#EEF5F0]/60 p-5 rounded-xl border border-[#3D6A4B]/20 space-y-3">
        <h3 className="text-base font-extrabold text-[#3D6A4B] flex items-center gap-2">
          <Bus className="w-5 h-5 text-[#3D6A4B]" />
          2026년 트레치메 셔틀버스 (Dolomiti Bus) 실전 우회 전술
        </h3>
        <p className="text-xs text-[#2D3748] leading-relaxed font-medium">
          7~8월 극성수기에는 트레치메(Tre Cime) 톨게이트 유료 산악 임도에 진입하려는 자가용 대기 행렬이 2km를 훌쩍 넘어가며 아침 7시 30분 전에 주차장이 만차 폐쇄됩니다.
        </p>
        <p className="text-xs text-[#2D3748] leading-relaxed font-medium">
          가장 지혜로운 해결책은 <strong>미수리나 호숫가 대형 주차장 (Misurina Genzianella 정류장 주변)</strong>에 안전하게 렌터카를 대고 대기 정체가 면제되는{" "}
          <strong className="text-[#3D6A4B] bg-white px-1.5 py-0.5 rounded border border-[#E2D9CF]">Dolomiti Bus 셔틀버스 (Navetta)</strong>
          를 타고 올라가는 것입니다. 편도 티켓은 1인당 단돈 <strong>€10</strong>로 고정되어 있어, 렌터카 통행료(€40) 대비 환경적으로도 가장 모범적이고 저렴한 전술이 됩니다. 티켓은 전용 모바일 앱(DolomitiBus App) 또는 버스 내 비접촉(Contactless) 신용카드로 즉석 터치 구매가 가능합니다.
        </p>
      </div>
    </div>
  );
}
