import React, { useState } from "react";
import { Map, Info, Compass, Smartphone, Navigation, Layers } from "lucide-react";

interface MapInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  tabLabel: string;
}

const MAP_LIST: MapInfo[] = [
  {
    id: "toscana-dolomites",
    title: "돌로미티 & 토스카나 종합 지도",
    subtitle: "Dolomites & Toscana Route Map",
    description: "새롭게 반영된 토스카나 및 돌로미티 연계 여행 경로와 세부 거점이 포함된 메인 지도입니다.",
    src: "https://www.google.com/maps/d/embed?mid=1Y06o9laRezizfVvcwfVfLasAI0vXhFw&ehbc=2E312F",
    tabLabel: "일정1",
  },
  {
    id: "schedule-2",
    title: "돌로미티 & 베네치아 연계 안내도",
    subtitle: "Dolomites & Venice Route Map",
    description: "베로나를 출발해 카레차 호수를 거쳐 푸네스 계곡(펜션 소니아)으로 향하는 루트 및 돌로미티 서부/동부 거점이 상세 표시된 지도입니다.",
    src: "https://www.google.com/maps/d/embed?mid=1yBcmdwJXWyrMYCTuBZlVmGe5Elwf7TQ&ehbc=2E312F",
    tabLabel: "일정2",
  },
  {
    id: "toscana-detail",
    title: "토스카나 & 피렌체 상세 안내도",
    subtitle: "Toscana & Firenze Detail Map",
    description: "피렌체 및 토스카나 남부(몬테리지오니, 시에나, 피틸리아노 등) 기동 경로와 세부 방문 포인트가 등록된 전용 지도입니다.",
    src: "https://www.google.com/maps/d/embed?mid=1TiW_kQKnR8CQyau2L47Fqx-G_8ttiig&ehbc=2E312F",
    tabLabel: "일정3",
  },
  {
    id: "toscana-core",
    title: "토스카나 핵심 관광 안내도",
    subtitle: "Toscana Main Point Map",
    description: "토스카나 전역의 주요 드라이빙 경로와 매력적인 소도시 및 뷰포인트 중심의 상세 지도입니다.",
    src: "https://www.google.com/maps/d/embed?mid=1klgVWrwytxVOJr8vRuRSw10D6ygo7EYM&hl=ko&ehbc=2E312F",
    tabLabel: "토스카나 핵심",
  },
  {
    id: "dolomites-only",
    title: "돌로미티 핵심 관광 안내도",
    subtitle: "Dolomites Main Point Map",
    description: "돌로미티 산악 지역의 주요 뷰포인트, 트레킹 코스 및 드라이빙 기동 경로 중심의 상세 지도입니다.",
    src: "https://www.google.com/maps/d/embed?mid=17vYAHzTIIMS3D63d6xTgIve7t6FRmTg&hl=ko&ehbc=2E312F",
    tabLabel: "돌로미티 핵심",
  },
  {
    id: "venice-detail",
    title: "베네치아 상세 안내도",
    subtitle: "Venice Detail Map",
    description: "수상 버스(바포레토) 노선, 본섬 명소 및 도보 관광 동선이 상세 표시된 전용 지도입니다.",
    src: "https://www.google.com/maps/d/embed?mid=1iKW_4BN1JoaQe8BDjbFYfyKw6Sa700br&hl=ko&ehbc=2E312F",
    tabLabel: "베네치아",
  },
];

export default function MapView() {
  const [activeMapId, setActiveMapId] = useState<string>("toscana-dolomites");
  const activeMap = MAP_LIST.find((m) => m.id === activeMapId) || MAP_LIST[0];

  return (
    <div className="space-y-6 text-[#2D3748]">
      <div className="bg-white p-5 rounded-xl border border-[#E2D9CF] shadow-sm">
        {/* Header and Map Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E2D9CF] mb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-[#EEF5F0] text-[#3D6A4B] rounded-lg border border-[#3D6A4B]/20">
              <Map className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-extrabold text-[#1A202C] text-sm">구글 내지도 연동</h3>
              <p className="text-[10px] text-[#718096] font-medium">원하시는 지도를 탭하여 경로와 체크포인트를 확인하실 수 있습니다.</p>
            </div>
          </div>

          {/* Map Tabs Selector */}
          <div className="flex items-center gap-1 bg-[#F5F2EE] p-1 rounded-lg border border-[#E2D9CF] self-start md:self-auto">
            {MAP_LIST.map((mapItem) => (
              <button
                key={mapItem.id}
                onClick={() => setActiveMapId(mapItem.id)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all whitespace-nowrap ${
                  activeMapId === mapItem.id
                    ? "bg-[#3D6A4B] text-white shadow-sm"
                    : "text-[#718096] hover:text-[#2D3748] hover:bg-white/50"
                }`}
              >
                {mapItem.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Map Description banner */}
        <div className="bg-[#FBF9F6] border border-[#E2D9CF] px-4 py-3 rounded-lg mb-4 text-xs flex items-start gap-2 animate-fadeIn">
          <Info className="w-4 h-4 text-[#3D6A4B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#2D3748]">{activeMap.title}</span>
            <span className="text-[10px] text-[#A0AEC0] ml-2 font-mono font-bold uppercase">{activeMap.subtitle}</span>
            <p className="text-[#718096] mt-0.5 text-[11px] font-normal leading-relaxed">{activeMap.description}</p>
          </div>
        </div>

        {/* Embedded Map iframe */}
        <div className="w-full rounded-lg overflow-hidden border border-[#E2D9CF] aspect-[4/3] md:aspect-[16/9] min-h-[400px] max-h-[600px] relative bg-[#FBF9F6] shadow-inner">
          <iframe 
            key={activeMap.id}
            src={activeMap.src} 
            className="w-full h-full border-0 absolute inset-0 animate-fadeIn" 
            allowFullScreen 
            loading="lazy"
            title={activeMap.title}
          ></iframe>
        </div>

        {/* Tips & Instructions Grid */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#EEF5F0]/60 rounded-lg border border-[#3D6A4B]/20 text-xs text-[#2D3748] leading-relaxed flex items-start gap-2.5">
            <Smartphone className="w-4 h-4 text-[#3D6A4B] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-[#3D6A4B]">📱 스마트폰 실시간 연동 꿀팁</strong>
              <p className="mt-1 font-normal text-[#718096] text-[11px]">
                우측 상단의 대괄호 확장 아이콘을 누르시거나 구글 지도 앱으로 바로 여실 경우, 모바일 GPS 위치와 실시간 동기화됩니다. 현지 산악 드라이빙 및 하이킹 시 훌륭한 방향 지시계(나침반)로 대용할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#EEF5F0]/60 rounded-lg border border-[#3D6A4B]/20 text-xs text-[#2D3748] leading-relaxed flex items-start gap-2.5">
            <Navigation className="w-4 h-4 text-[#3D6A4B] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-[#3D6A4B]">🏔️ 현장 통신 음영 대비 안내</strong>
              <p className="mt-1 font-normal text-[#718096] text-[11px]">
                알프스 깊은 협곡이나 패스(Pass) 일대는 데이터 통신 음영 구역이 잦습니다. 가이드북을 띄워 두시고 구글 지도의 <strong>&lsquo;오프라인 지도 다운로드&rsquo;</strong> 기능을 밀라노 호텔에서 미리 실행해 가시는 것을 강력 권장합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
