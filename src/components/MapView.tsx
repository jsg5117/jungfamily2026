import React from "react";
import { Map, Info, Compass, Smartphone, Navigation } from "lucide-react";

export default function MapView() {
  return (
    <div className="space-y-6 text-[#2D3748]">
      <div className="bg-white p-5 rounded-xl border border-[#E2D9CF] shadow-sm">
        <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-[#E2D9CF]">
          <span className="p-2 bg-[#EEF5F0] text-[#3D6A4B] rounded-lg border border-[#3D6A4B]/20">
            <Map className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-[#1A202C] text-sm">구글 내지도: 돌로미티 종합 관광안내도</h3>
            <p className="text-[10px] text-[#718096] font-medium">구글 내지도에 등록된 핵심 기동 루트와 뷰포인트가 상시 표시됩니다.</p>
          </div>
        </div>

        {/* Embedded Map iframe */}
        <div className="w-full rounded-lg overflow-hidden border border-[#E2D9CF] aspect-[4/3] md:aspect-[16/9] min-h-[400px] max-h-[600px] relative bg-[#FBF9F6]">
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=1eULeeWr6yfzgUWmDWu5mCOnEbQvvbx8&hl=ko&ehbc=2E312F" 
            className="w-full h-full border-0 absolute inset-0" 
            allowFullScreen 
            loading="lazy"
            title="Dolomites Road Trip Map"
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
