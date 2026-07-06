import React from "react";
import { 
  Plane, 
  Heart, 
  Mountain, 
  Hotel, 
  Waves, 
  Tractor, 
  Building 
} from "lucide-react";

export default function Header() {
  const tripSegments = [
    {
      date: "7/16",
      label: "밀라노 입국",
      hotel: "호텔 베르나 (2박)",
      icon: <Plane className="w-4 h-4 text-blue-500" />,
      bg: "bg-blue-50/50 border-blue-100"
    },
    {
      date: "7/18",
      label: "베로나",
      hotel: "로미오 줄리에타 (1박, 주차완료)",
      icon: <Heart className="w-4 h-4 text-red-500" />,
      bg: "bg-red-50/50 border-red-100"
    },
    {
      date: "7/19",
      label: "돌로미티 서부",
      hotel: "펜션 소nia (3박)",
      icon: <Mountain className="w-4 h-4 text-emerald-600" />,
      bg: "bg-emerald-50/50 border-emerald-100"
    },
    {
      date: "7/22",
      label: "돌로미티 동부",
      hotel: "호텔 유벤투스 (3박)",
      icon: <Hotel className="w-4 h-4 text-amber-600" />,
      bg: "bg-amber-50/50 border-amber-100"
    },
    {
      date: "7/25",
      label: "베네치아",
      hotel: "호텔 파리스 (1박)",
      icon: <Waves className="w-4 h-4 text-cyan-600" />,
      bg: "bg-cyan-50/50 border-cyan-100"
    },
    {
      date: "7/26",
      label: "토스카나",
      hotel: "아그리투리스모 모치네 (3박)",
      icon: <Tractor className="w-4 h-4 text-orange-600" />,
      bg: "bg-orange-50/50 border-orange-100"
    },
    {
      date: "7/29",
      label: "피렌체",
      hotel: "호텔 코시모 드 메디치 (1박)",
      icon: <Building className="w-4 h-4 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-200"
    }
  ];

  return (
    <header className="text-center mb-8 border-b border-[#E2D9CF] pb-6">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-[#3D6A4B] text-white text-[10px] font-bold rounded tracking-wider">JUNG FAMILY 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-widest text-[#1A202C] font-sans uppercase">
          ITALY / DOLOMITES & TOSCANA
        </h1>
      </div>

      {/* Grid of Trip Segments */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2 text-[10px] font-bold">
        {tripSegments.map((seg, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-start p-2 rounded-xl border border-[#E2D9CF] bg-white transition-all shadow-sm hover:border-[#3D6A4B] ${seg.bg}`}
          >
            <div className="flex items-center gap-1 w-full justify-between mb-0.5">
              <span className="text-[#A0AEC0] font-mono text-[9px]">{seg.date}</span>
              {seg.icon}
            </div>
            <span className="text-[#1A202C] font-bold text-[11px] truncate w-full text-left">{seg.label}</span>
            <span className="text-[#718096] font-normal text-[9px] leading-tight text-left truncate w-full mt-0.5">
              {seg.hotel}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}
