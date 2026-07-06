import React from "react";
import { hikingData } from "../data";
import { 
  MountainSnow, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  Zap, 
  ShieldAlert, 
  ChevronRight, 
  HelpCircle,
  Eye
} from "lucide-react";

export default function ActivitiesView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn text-[#2D3748]">
      {/* Hiking Trails Explorer */}
      <div className="bg-white p-5 rounded-xl border border-[#E2D9CF] shadow-sm">
        <h3 className="text-lg font-extrabold mb-5 flex items-center gap-2 text-[#1A202C]">
          <MountainSnow className="w-5 h-5 text-[#3D6A4B]" />
          아들과 함께 정복하는 하이킹 코스 정보
        </h3>

        <div className="space-y-3.5">
          {hikingData.map((trail, idx) => {
            const isMediumDanger = trail.danger.includes("중간");
            const dangerColorClass = isMediumDanger
              ? "border-l-amber-500 border border-y-[#E2D9CF] border-r-[#E2D9CF] bg-amber-50/10 text-[#2D3748]"
              : "border-l-[#3D6A4B] border border-y-[#E2D9CF] border-r-[#E2D9CF] bg-[#EEF5F0]/30 text-[#2D3748]";

            return (
              <div 
                key={idx} 
                className={`p-3.5 rounded-lg border-l-4 transition-all hover:translate-x-0.5 ${dangerColorClass}`}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-extrabold text-[#1A202C] text-xs">{trail.name}</span>
                  <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#E2D9CF] font-extrabold text-[#718096]">
                    난이도: {trail.diff}
                  </span>
                </div>

                <div className="text-xs text-[#718096] space-y-1">
                  <div className="flex gap-4 font-bold">
                    <span className="flex items-center gap-1">
                      📏 <strong className="text-[#2D3748]">거리:</strong> {trail.dist}
                    </span>
                    <span className="flex items-center gap-1">
                      ⏱️ <strong className="text-[#2D3748]">소요 시간:</strong> {trail.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>
                      위험성: <strong className={isMediumDanger ? "text-amber-700" : "text-[#3D6A4B]"}>{trail.danger}</strong>
                    </span>
                  </div>
                  <div className="text-[11px] text-[#2D3748] pt-2 border-t border-dashed border-[#E2D9CF] mt-2 font-medium">
                    <strong className="text-[#3D6A4B]">💡 가이드 & 꿀팁:</strong> {trail.tip}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Thrills & Fun highlights */}
      <div className="space-y-5">
        {/* Funbob Card */}
        <div className="bg-[#3D6A4B] text-white p-5 rounded-xl shadow-sm relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-10 text-9xl">
            <Zap className="w-24 h-24 text-white" />
          </div>
          <h3 className="text-lg font-extrabold mb-1 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-300" />
            몬테 바란치 펀봅 (Monte Baranci Funbob)
          </h3>
          <p className="text-xs opacity-90 mb-4 leading-normal font-light">
            돌로미티 동부 산악 지대 최강의 시속 40km 철제 레일 마운틴 썰매 (Fun-Bob)
          </p>
          <ul className="text-xs space-y-2 font-normal">
            <li className="flex items-center gap-1.5 bg-emerald-800/40 p-2 rounded-lg">
              <span>•</span>
              <span><strong>총 궤도 길이:</strong> 1,739m (최대 낙하 경사 18% 보유)</span>
            </li>
            <li className="flex items-center gap-1.5 bg-emerald-800/40 p-2 rounded-lg">
              <span>•</span>
              <span><strong>탑승 안전 조건:</strong> 만 8세 이상 아동은 단독 탑승 가능 (레버 브레이크 자율 제어)</span>
            </li>
            <li className="flex items-center gap-1.5 bg-emerald-800/40 p-2 rounded-lg">
              <span>•</span>
              <span><strong>여름 운영 시각:</strong> 7월 정규 성수기 오전 09:00 - 17:30</span>
            </li>
            <li className="flex items-center gap-1.5 bg-amber-500/20 p-2 rounded-lg border border-amber-400/20 text-yellow-100">
              <span>💡</span>
              <span><strong>회전율 팁:</strong> 개장 09:00 첫 번째 리프트를 탑승하면 웨이팅이 0분 수준입니다.</span>
            </li>
          </ul>
        </div>

        {/* Sassolungo Cage Lift */}
        <div className="bg-[#1A202C] text-white p-5 rounded-xl shadow-sm relative overflow-hidden border border-slate-800">
          <div className="absolute -right-6 -bottom-6 opacity-10 text-9xl">
            <Eye className="w-24 h-24 text-white" />
          </div>
          <h3 className="text-lg font-extrabold mb-1 flex items-center gap-2">
            <Eye className="w-5 h-5 text-teal-400" />
            싸쏘롱고 스탠딩 2인 곤돌라
          </h3>
          <p className="text-xs opacity-90 mb-4 leading-normal font-light">
            파소 셀라에서 사솔룽고 협곡 틈새(Rifugio Demetz)로 다이렉트 치솟는 빈티지 탑승물
          </p>
          <ul className="text-xs space-y-2 font-normal">
            <li className="flex items-start gap-1.5 bg-slate-800/50 p-2 rounded-lg">
              <span>•</span>
              <span><strong>이색 탑승 방식:</strong> 천천히 달리는 좁은 2인용 백색 원통형 케이지에 탑승 타이밍을 맞추어 아들과 손잡고 껑충 점프해 타는 스릴을 즐깁니다.</span>
            </li>
            <li className="flex items-center gap-1.5 bg-slate-800/50 p-2 rounded-lg">
              <span>•</span>
              <span><strong>해발 도달 고도:</strong> 2,685m 바위 벼랑 틈새에 완착</span>
            </li>
            <li className="flex items-center gap-1.5 bg-slate-800/50 p-2 rounded-lg">
              <span>•</span>
              <span><strong>운영 시각:</strong> 08:30 - 17:00 (풍속이 위험한 돌풍 날은 조기 정지)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
