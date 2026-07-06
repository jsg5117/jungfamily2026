import React from "react";
import { accommodationData } from "../data";
import { 
  Hotel, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Train, 
  Info, 
  Sparkles, 
  HelpCircle,
  Utensils,
  ChevronRight
} from "lucide-react";

export default function AccommodationsView() {
  const returnSteps = [
    {
      time: "15:15",
      title: "호텔 코시모 드 메디치 짐 회수 및 역 도보 이동",
      desc: "체크아웃 후 프론트에 키핑해 둔 캐리어를 찾아 피렌체 SMN 역 플랫폼 승강장으로 도보 이동합니다 (도보 4분 소요, 지름길 완비)."
    },
    {
      time: "15:55",
      title: "피렌체 고속열차 정시 출발 [예매 완료]",
      desc: "피렌체 산타마리아노벨라(Firenze SMN)역에서 이태리 초고속 열차 'Frecciarossa' 탑승하여 밀라노 중앙역으로 기동 (소요시간 1시간 55분)."
    },
    {
      time: "17:50",
      title: "밀라노 중앙역 (Milano Centrale) 정시 도착",
      desc: "밀라노 중앙역 승강장 도착 직후, 역내 1~3번 라인에 상주해 있는 말펜사 익스프레스 공항철도 승강장으로 기민하게 이동합니다 (35분 환승 대기시간)."
    },
    {
      time: "18:25",
      title: "말펜사 익스프레스 (Malpensa Express) 탑승 [예매 완료]",
      desc: "공항철도를 타고 말펜사 국제공항(Terminal 1)으로 안전 환승 및 드라이빙 출발 (약 53분 소요)."
    },
    {
      time: "19:18",
      title: "말펜사 공항 정시 도착 및 OZ582 체크인",
      desc: "22:00 아시아나항공 출발시각보다 약 2시간 42분 일찍 여유 있게 터미널 1 승강장 도착. 위탁수하물 수속 및 기내 면세 구역으로 안심 진입합니다."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn text-[#2D3748]">
      {/* Accommodation Cards List */}
      <div className="bg-white p-5 rounded-xl border border-[#E2D9CF] shadow-sm">
        <h3 className="text-lg font-extrabold text-[#1A202C] mb-5 flex items-center gap-2">
          <Hotel className="w-5 h-5 text-[#3D6A4B]" />
          선택 및 확정된 숙소 현황
        </h3>

        <div className="space-y-4">
          {accommodationData.map((hotel, idx) => {
            // Determine styles based on type
            let cardStyle = "border-[#E2D9CF] bg-[#FBF9F6]";
            let tagStyle = "bg-[#718096] text-white";
            let tagIcon = <CheckCircle className="w-3 h-3" />;

            if (hotel.type === "selected") {
              cardStyle = "border-[#3D6A4B] bg-[#EEF5F0]/60 border-2";
              tagStyle = "bg-[#3D6A4B] text-white";
            } else if (hotel.type === "parking") {
              cardStyle = "border-sky-600 bg-sky-50/50 border-2";
              tagStyle = "bg-sky-600 text-white";
              tagIcon = <Sparkles className="w-3 h-3" />;
            } else if (hotel.type === "attention") {
              cardStyle = "border-amber-500 bg-amber-50/50 border-2";
              tagStyle = "bg-amber-500 text-white";
              tagIcon = <Info className="w-3 h-3" />;
            } else if (hotel.type === "dinner") {
              cardStyle = "border-teal-600 bg-teal-50/30 border-2";
              tagStyle = "bg-teal-700 text-white";
              tagIcon = <Utensils className="w-3 h-3" />;
            }

            return (
              <div 
                key={idx} 
                className={`p-4 rounded-xl border shadow-sm relative overflow-hidden transition-all hover:border-[#3D6A4B] ${cardStyle}`}
              >
                {/* Upper Badge */}
                <div className="absolute right-0 top-0">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-bl-lg flex items-center gap-1 shadow-sm ${tagStyle}`}>
                    {tagIcon}
                    {hotel.typeText}
                  </span>
                </div>

                <div className="mt-1">
                  <h4 className="font-extrabold text-[#1A202C] text-sm leading-snug">
                    {hotel.koreanName} <span className="text-xs font-mono font-medium text-[#718096] block sm:inline">({hotel.name})</span>
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-[11px] text-[#718096] font-bold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      {hotel.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#3D6A4B]" />
                      {hotel.dateRange}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-[#2D3748] mt-2.5 leading-relaxed font-medium whitespace-pre-line">
                  {hotel.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Return Train Course Card */}
      <div className="bg-white p-5 rounded-xl border border-[#E2D9CF] shadow-sm">
        <h3 className="text-lg font-extrabold text-[#1A202C] mb-4 flex items-center gap-2">
          <Train className="w-5 h-5 text-[#3D6A4B]" />
          7월 30일 피렌체 ➔ 말펜사 공항 복귀 열차
        </h3>
        
        <div className="bg-[#EEF5F0] p-3.5 rounded-lg mb-5 border border-[#3D6A4B]/20 text-xs text-[#3D6A4B] leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#3D6A4B] shrink-0 mt-0.5" />
          <div className="font-medium text-[#2D3748]">
            <strong className="font-bold text-[#3D6A4B]">예매 완료 세부 정보:</strong> 29일 피렌체 기차역 지점에 차량을 무사히 반납했기 때문에, 귀국일에는 오전 역사 도보 관광을 한 뒤 짐을 들고 정시 탑승을 하시면 됩니다.
          </div>
        </div>

        {/* Timeline roadmap */}
        <div className="relative pl-5 border-l border-dashed border-[#E2D9CF] space-y-4">
          {returnSteps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Dot Icon */}
              <span className="absolute -left-[30px] top-1 bg-[#3D6A4B] text-white rounded-full w-5 h-5 flex items-center justify-center text-[9px] font-mono font-bold shadow-sm ring-4 ring-white">
                {idx + 1}
              </span>

              <div className="bg-[#FBF9F6] p-3.5 rounded-lg border border-[#E2D9CF] hover:border-[#3D6A4B] transition-colors">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-extrabold text-xs text-[#1A202C] flex items-center gap-1.5">
                    {step.title}
                  </h4>
                  <span className="bg-[#EEF5F0] text-[#3D6A4B] font-mono text-[9px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1 border border-[#3D6A4B]/20">
                    <Clock className="w-3 h-3" />
                    {step.time}
                  </span>
                </div>
                <p className="text-[11px] text-[#718096] leading-relaxed mt-2 font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
