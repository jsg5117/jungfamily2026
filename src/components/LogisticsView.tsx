import React from "react";
import { 
  Car, 
  Lock, 
  Navigation, 
  FileCheck2
} from "lucide-react";

export default function LogisticsView() {
  const ztlRules = [
    {
      subject: "실미오네 (Sirmione) 진입",
      rule: "가르다 호수의 성곽 마을 내부로 일반 차량 진입 불가 (ZTL 구역)",
      tip: "실미오네 성채(Scaligero Castle) 입구 바로 앞의 대형 공영 주료 주차장(Grifo Parking 등)에 주차한 후 성벽 내부로는 걸어서 진입하셔야 합니다. 안쪽은 주거 허가차량 외 벌금 단속 구역입니다."
    },
    {
      subject: "베로나 ZTL & 주차",
      rule: "구시가지(Centro Storico) 역사 보존지구 상시 차량 출입 통제",
      tip: "B&B 'Romeo Giulietta' 전용 주차는 예약 완료 상태입니다. 다만 호스트에게 차량 번호판을 사전에 전달하여 ZTL 화이트리스트 면제 등록 처리가 정확히 완료되었는지 체크인 시 반드시 대조 질문하세요."
    },
    {
      subject: "베네치아 주차 (메스트레)",
      rule: "Hotel Paris Mestre 내부 전용 지상 주차장 활용",
      tip: "체크인 시 주차 가능 여부를 먼저 프론트에 확인(15유로/일)하고, 주유 가림막의 개폐를 직접 안내받으십시오. 본섬 Tronchetto나 Piazzale Roma의 악명 높은 대기줄을 완벽히 비켜가는 최선책입니다."
    },
    {
      subject: "토스카나 ZTL 및 농가길",
      rule: "피엔차, 몬테풀차노 등 성곽 마을 중심 진입 금지",
      tip: "토스카나의 모든 중세 소도시는 성곽 초입에 대형 유료 주차장을 갖추고 있습니다. 네비게이션 목적지를 절대 '마을 중심'으로 지정하지 마시고, 공식 주차장(Porta 등 성문 이름 주변)을 지정해 접근하세요."
    },
    {
      subject: "돌로미티 패스 (SS242, SS243, SS244)",
      rule: "갓길 불법 주차 상시 견인 및 도로 보수공사 교행 통제",
      tip: "Sella Pass(SS242) 및 Gardena Pass(SS243) 일대 노상 주차는 전면 금지됩니다. 흰색 실선을 넘거나 바퀴가 Grass(풀밭)에 닿으면 즉각 즉결 견인 및 거액 고지서가 발부되므로 반드시 지정 케이블카 공영 주차장을 이용하세요. 국도 SS244 Gadertal 방향은 낙석보수로 Longega 부근에서 교행 신호 대기(5~10분)가 걸릴 수 있으니 서행하십시오."
    },
    {
      subject: "피렌체 기차역 반납 (Via Alamanni 35/e)",
      rule: "★ 7/29(수) 14:00 삼엄한 ZTL 카메라 정시 반납 ★",
      tip: "피렌체 SMN 역 내부 구역에 차고지가 있어 불가피하게 주황/빨간색 ZTL 카메라선을 넘어야 합니다. 반납 즉시 직원에게 'Please whitelist our car license plate for ZTL exemption'라고 강력히 요쳥하고 확인증 서명을 스마트폰으로 촬영 보관하세요!"
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn text-[#2D3748]">
      {/* Table section */}
      <div className="bg-white p-5 rounded-xl border border-[#E2D9CF] shadow-sm">
        <h3 className="text-lg font-extrabold text-[#1A202C] mb-5 flex items-center gap-2">
          <Car className="w-5 h-5 text-[#3D6A4B]" />
          렌터카 이동 경로 및 ZTL 안심 방어 전략 (수정본)
        </h3>

        <div className="overflow-x-auto rounded-lg border border-[#E2D9CF]">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-[#EEF5F0] border-b border-[#E2D9CF] text-[#3D6A4B]">
              <tr>
                <th className="p-3 font-bold border-r border-[#E2D9CF] min-w-[150px]">구분 항목</th>
                <th className="p-3 font-bold border-r border-[#E2D9CF] min-w-[200px]">지침 및 세부 규정</th>
                <th className="p-3 font-bold">현장 대처 꿀팁 및 주의점</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2D9CF]/40 font-sans">
              {ztlRules.map((rule, idx) => (
                <tr key={idx} className="hover:bg-[#FBF9F6] transition-colors">
                  <td className="p-3 font-extrabold text-[#1A202C] border-r border-[#E2D9CF] bg-[#FBF9F6]/40">
                    {rule.subject}
                  </td>
                  <td className="p-3 text-red-600 font-semibold border-r border-[#E2D9CF] leading-normal">
                    {rule.rule}
                  </td>
                  <td className="p-3 text-emerald-800 font-medium leading-relaxed">
                    {rule.tip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Safety notices and return paths grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Warning card */}
        <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200 space-y-3">
          <h3 className="text-base font-extrabold text-amber-800 flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-600 shrink-0" />
            주차 중 캐리어 도난 절망 방지 행동 요령
          </h3>
          <p className="text-xs text-amber-950 leading-relaxed font-medium">
            코모 호수, 실미오네, 베로나 광장 및 사투르니아 야외 노천온천 등 개방형 주차장에 임시 주차 시, 차량 유리를 돌로 깨고 내부에 거치된 고가 캐리어만 들고 튀는 전문 털이범 범죄자가 기승을 부립니다.
          </p>
          <div className="pt-2 border-t border-amber-200/50 text-xs text-amber-900 space-y-1 bg-amber-50/20 p-3 rounded-lg">
            <div className="flex items-start gap-1.5 font-semibold">
              <span className="text-amber-600">•</span>
              <span><strong>해결책:</strong> 차량 트렁크 화물 가림막(커버)을 완벽히 덮어 외부에서 짐의 윤곽이 전혀 노출되지 않도록 고정하세요.</span>
            </div>
            <div className="flex items-start gap-1.5 font-semibold mt-1">
              <span className="text-amber-600">•</span>
              <span>여권, 현금 및 고가 카메라가 든 슬링백은 아주 잠깐 내릴 때도 무조건 몸에 착용하십시오.</span>
            </div>
          </div>
        </div>

        {/* Path instructions */}
        <div className="bg-[#EEF5F0]/60 p-5 rounded-xl border border-[#3D6A4B]/20 space-y-3">
          <h3 className="text-base font-extrabold text-[#3D6A4B] flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#3D6A4B] shrink-0" />
            피렌체역 반납 직전 안전 진입 경로
          </h3>
          <p className="text-xs text-[#2D3748] leading-relaxed font-medium">
            고속도로를 나온 뒤 Viale Belfiore 대로를 타고 북상하다가, Viale Fratelli Rosselli에서 우회전하여 <strong>Via Jacopo da Diacceto</strong> 골목(일방통행)을 정밀하게 경유한 뒤 Via Luigi Alamanni 차고지로 흘러들어 가는 루트가 가장 정직합니다.
          </p>
          <div className="bg-[#EEF5F0] p-3 rounded-lg border border-[#3D6A4B]/20 text-xs text-[#3D6A4B] leading-relaxed flex items-start gap-2">
            <FileCheck2 className="w-4 h-4 text-[#3D6A4B] mt-0.5" />
            <div className="font-medium text-[#2D3748]">
              <strong>ZTL 화이트리스트란?</strong> 현지 차고지에 정상 반납한 차량에 대해 단속 카메라 전산망에서 소급하여 벌금을 감면해 주는 법적인 예외 절차입니다. 차고지 직원 서명이 들어간 계약종료 전표 촬영본은 귀국 후 6개월간 보관하셔야 안전합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
