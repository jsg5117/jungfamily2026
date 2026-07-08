import { ItineraryItem, HikingItem, ChecklistItem, AccommodationItem } from "./types";

export const itineraryData: ItineraryItem[] = [
  // Day 1
  { day: 1, date: "7/16", time: "14:50 - 21:05", city: "밀라노", title: "인천 ➔ 밀라노 OZ581 기내 비행", desc: "인천 국제공항 정시 출발하여 알프스 산맥을 가로질러 이태리 북부 밀라노 말펜사(MXP) 국제공항 터미널 1 랜딩.", lodging: "호텔 베르나 (Hotel Berna)", transp: "아시아나 항공 (OZ581)", budget: "항공권 포함", notes: "기내 수하물 분실 체크" },
  { day: 1, date: "7/16", time: "21:05 - 22:00", city: "밀라노", title: "말펜사 공항 T1 신속 입국 수속 및 짐 찾기", desc: "수하물 벨트에서 캐리어를 찾은 후 입국 게이트를 통과하여 버스 플랫폼이 연결된 Gate 4 출구 방면으로 즉각 이동.", lodging: "호텔 베르나 (Hotel Berna)", transp: "도보 이동", budget: "무료", notes: "Gate 4 이정표 확인" },
  { day: 1, date: "7/16", time: "22:00 - 22:30", city: "밀라노", title: "공항버스 탑승 및 밀라노 중앙역 이동", desc: "Gate 4 바로 앞 승강장에서 밀라노 중앙역(Milano Centrale)행 공항 셔틀버스(Terravision 등) 탑승.", lodging: "호텔 베르나 (Hotel Berna)", transp: "공항 셔틀버스", budget: "버스 요금 €10~13/인", notes: "가장 먼저 출발하는 버스 탑승" },
  { day: 1, date: "7/16", time: "22:30 ~", city: "밀라노", title: "호텔 베르나 안전 체크인 및 취침", desc: "밀라노 중앙역 버스 정차지 하차 후 도보 2분 거리에 위치한 예약 확정 호텔 베르나 무사 진입. 무료 미니바와 친절한 호스팅 정착 후 휴식.", lodging: "호텔 베르나 (Hotel Berna)", transp: "도보 2분", budget: "무료 서비스", notes: "중앙역 좌측 도로변 도보" },

  // Day 2
  { day: 2, date: "7/17", time: "09:00 - 09:30", city: "밀라노", title: "메트로 M3선 탑승하여 두오모역 이동", desc: "밀라노 중앙역 지하 메트로 승강장에서 노란색 M3선 승차. 환승 없이 두오모(Duomo)역까지 5정거장 이동(약 10분 소요).", lodging: "호텔 베르나 (Hotel Berna) [연박]", transp: "메트로 M3선", budget: "지하철 일회권 €2.20/인", notes: "지하철 소매치기 차단" },
  { day: 2, date: "7/17", time: "09:30 - 11:00", city: "밀라노", title: "밀라노 두오모 성당 및 예약 테라스 관람", desc: "두오모 고딕 루프탑 테라스 진입. 첨탑의 정교한 조각과 시내 대전경 감상.", lodging: "호텔 베르나 (Hotel Berna) [연박]", transp: "엘리베이터", budget: "예매 티켓 지참", notes: "모자 착용 권장 (그늘 없음)" },
  { day: 2, date: "7/17", time: "11:00 - 13:00", city: "밀라노", title: "두오모 중심가 로컬 레스토랑 점심 식사", desc: "두오모 성당 근처 정통 피제리아에서 밀라노식 튀김 파스타(판제로티) 또는 전통 리소토 미식.", lodging: "호텔 베르나 (Hotel Berna) [연박]", transp: "도보", budget: "점심 식사 약 €40 (2인)", notes: "스폰티니 피자 조각도 추천" },
  { day: 2, date: "7/17", time: "13:00 - 15:00", city: "밀라노", title: "에마누엘레 갤러리아 및 스포르체스코 성 관광", desc: "비토리오 에마누에레 2세 갤러리아 유리 돔 광장 관람 후, 도보로 스포르체스코 성(Castello Sforzesco) 내부 요새 및 셈피오네 정원 산책.", lodging: "호텔 베르나 (Hotel Berna) [연박]", transp: "도보 이동", budget: "성 무료입장", notes: "가벼운 젤라토 브레이크" },
  { day: 2, date: "7/17", time: "15:00 - 16:00", city: "밀라노", title: "나빌리 운하 지구로 메트로 이동", desc: "M2선(녹색) 탑승하여 나빌리 지구가 위치한 Porta Genova FS역 하차 후 레오나르도 다빈치의 수로 설계 유적지로 진입.", lodging: "호텔 베르나 (Hotel Berna) [연박]", transp: "메트로 M2선", budget: "교통비 일회권 사용", notes: "나빌리 운하 저녁 대비" },
  { day: 2, date: "7/17", time: "16:00 - 19:30", city: "밀라노", title: "나빌리 운하 지구 이색 야경 관광 및 저녁식사", desc: "운하를 둘러싼 분위기 있는 소품점과 골목 탐방. 18:00 시작하는 정통 아페리티보 뷔페로 아들과 낭만 식사.", lodging: "호텔 베르나 (Hotel Berna) [연박]", transp: "도보", budget: "아페리티보 약 €35 (2인)", notes: "운하 주변 모기 차단제 도포" },
  { day: 2, date: "7/17", time: "19:30 - 20:00", city: "밀라노", title: "지하철 복귀 후 호텔 베르나 복귀 및 휴식", desc: "익일 아침 시작될 알프스 로드트립을 대비해 밤 20:00 전에 방에 입실하여 체력을 완벽 충전하고 전선 충전기 가동.", lodging: "호텔 베르나 (Hotel Berna) [연박]", transp: "메트로 M2/M3선 연계", budget: "무료", notes: "20:00 귀환 수칙 엄수" },

  // Day 3
  { day: 3, date: "7/18", time: "08:30 - 09:30", city: "밀라노 ➔ 코모", title: "조식 후 체크아웃 및 렌터카 완벽 인수", desc: "호텔 베르나 퇴실 후 중앙역 서쪽의 렌터카 데스크로 이동. 예약 확인증 및 국제면허증 제출 후 09:30 정시 차량 수령 및 GPS 세팅.", lodging: "로미오 줄리에타 (Romeo Giulietta)", transp: "도보 ➔ 렌터카 수령", budget: "차량 렌트비", notes: "외관 스크래치 정밀 동영상 촬영" },
  { day: 3, date: "7/18", time: "09:30 - 11:30", city: "코모 호수", title: "[Road No. A9] 밀라노 ➔ 코모 호수 드라이브", desc: "북쪽 고속도로 A9 진입 Como Centro 톨게이트를 나와 웅장한 알프스 빙하 코모(Como) 호수 초입 도달 및 호반 드라이브.", lodging: "로미오 줄리에타 (Romeo Giulietta)", transp: "렌터카 드라이브 (고속도로 A9)", budget: "톨게이트비 약 €5", notes: "Como Centro 톨게이트 탈출 필독" },
  { day: 3, date: "7/18", time: "11:30 - 13:30", city: "레코", title: "[Road No. SP639 / SS36] 코모 ➔ 레코(Lecco) 경유 드라이브 & 점심", desc: "코모 호수 남단을 나와 동쪽 산길 국도 지방도 SP639 및 국도 SS36 경유하여 아름다운 호수 소도시 레코(Lecco) 진입. 호숫가 노천 테라스에서 중식.", lodging: "로미오 줄리에타 (Romeo Giulietta)", transp: "렌터카 드라이브 (SP639 ➔ SS36)", budget: "중식비 및 주차비 약 €45", notes: "Lecco 호숫가 공영주차장 주차" },
  { day: 3, date: "7/18", time: "13:30 - 16:00", city: "실미오네", title: "[Road No. SS36 ➔ A4] 레코 ➔ 가르다 호수 실미오네 드라이브", desc: "레코에서 국도 SS36 남하 ➔ 고속도로 A4 동쪽 베네치아 방면 질주. Sirmione 톨게이트 탈출하여 가르다 호수의 성곽 반도 실미오네 주차장 도달 후 도보 관광.", lodging: "로미오 줄리에타 (Romeo Giulietta)", transp: "렌터카 드라이브 (SS36 ➔ A4)", budget: "고속도로 톨비 약 €12", notes: "성벽 내부 ZTL 절대 금지! Grifo 외곽주차" },
  { day: 3, date: "7/18", time: "16:00 - 17:00", city: "베로나", title: "[Road No. A4 / SR11] 실미오네 ➔ 베로나 이동 및 17시 체크인", desc: "실미오네 주차장을 나와 고속도로 A4 또는 구 국도 SR11 동진하여 17:00 정시 확정 숙소인 로미오 줄리에타 B&B 도착 및 안심 체크인.", lodging: "로미오 줄리에타 (Romeo Giulietta)", transp: "렌터카 드라이브 (A4 또는 SR11)", budget: "주차 예약 완료", notes: "★ 숙소 주차 예약 완료! 호스트에게 차량 번호판 ZTL 화이트리스트 사전 등록 확인 필수" },
  { day: 3, date: "7/18", time: "18:00 ~", city: "베로나", title: "고대 아레나 광장 저녁식사 및 구시가지 도보 야경 산책", desc: "차량 주차 완료 후 가벼운 복장으로 도보 진입. 불타는 아레나 원형극장과 광장의 낭만을 보며 정통 파스타/스테이크 저녁식사.", lodging: "로미오 줄리에타 (Romeo Giulietta)", transp: "도보 관광", budget: "디너 요금 약 €70", notes: "스마트폰 소매치기 상시 방어" },

  // Day 4
  { day: 4, date: "7/19", time: "09:00 - 11:30", city: "베로나", title: "베로나 구시가지 줄리엣의 집 투어", desc: "베로나 역사지구 줄리엣의 집, 에르베 광장, 아레나 주변 등 정취를 감상하고 촬영.", lodging: "Appartements Pension Sonia", transp: "도보 관광", budget: "입장료 €6/인", notes: "줄리엣 동상 오른팔 터치 촬영" },
  { day: 4, date: "7/19", time: "11:30 - 12:30", city: "베로나", title: "정통 로컬 화덕 피자로 이른 점심 식사", desc: "베로나 구시가지 골목의 오래된 로컬 화덕 피제리아에서 바삭하고 신선한 마르게리타 피자로 점심.", lodging: "Appartements Pension Sonia", transp: "도보 이동", budget: "중식비 약 €35", notes: "이른 식사로 오후 장거리 운전 대비" },
  { day: 4, date: "7/19", time: "12:30 - 14:30", city: "카레차 호수", title: "[Road No. A22 ➔ SS241] 베로나 ➔ 카레차 호수(까르짜) 알프스 드라이브", desc: "베로나를 탈출해 고속도로 A22 북상 후 Bolzano Nord(보르차노 북) 톨게이트 탈출. 아름다운 발디에가(Val d'Ega) 계곡을 관통하는 국도 SS241번 도로를 따라 에메랄드빛 카레차 호수(까르짜) 주차장 도착.", lodging: "Appartements Pension Sonia", transp: "렌터카 드라이브 (A22 ➔ SS241)", budget: "고속도로 톨비 약 €10, 주차비 약 €3", notes: "안전 속도 준수 및 계곡 경치 감상" },
  { day: 4, date: "7/19", time: "14:30 - 15:30", city: "카레차 호수", title: "신비로운 에메랄드빛 카레차(까르짜) 호수 둘레길 산책", desc: "라테마르(Latemar) 산군이 거울처럼 투명하게 투영되는 전설의 에메랄드 호숫가를 걸으며 포토타임 및 가벼운 티타임 휴식.", lodging: "Appartements Pension Sonia", transp: "도보 산책", budget: "무료", notes: "자외선 차단 및 물 가두기 울타리 준수" },
  { day: 4, date: "7/19", time: "15:30 - 16:45", city: "푸네스 계곡", title: "[Road No. SS241 ➔ A22 ➔ SP141] 카레차 호수 ➔ 푸네스 계곡 이동", desc: "카레차 호수를 출발해 SS241 국도로 Bolzano Nord 진입 ➔ 고속도로 A22 북상 ➔ Chiusa/Klausen 톨게이트 탈출 ➔ 지방도 SP141을 따라 마달레나 마을 펜션 Sonia 도착.", lodging: "Appartements Pension Sonia", transp: "렌터카 드라이브 (SS241 ➔ A22 ➔ SP141)", budget: "고속도로 톨비 약 €5", notes: "Chiusa 톨게이트 출구 유의" },
  { day: 4, date: "7/19", time: "16:45 - 17:30", city: "푸네스 계곡", title: "펜션 소니아 체크인 및 여장 풀기", desc: "푸네스 계곡 마달레나 마을에 위치한 확정 숙소 '아파트먼트 펜션 소니아' 도착. 호스트 가족과 인사 후 방 배정 및 짐 이동.", lodging: "Appartements Pension Sonia", transp: "렌터카 드라이브", budget: "숙박비 잔금 결제", notes: "창문 너머 거대한 오드레 돌산 조망 체크" },
  { day: 4, date: "7/19", time: "17:30 - 19:30", city: "푸네스 계곡", title: "마달레나 성당 언덕 포토스팟 도보 산책", desc: "숙소에서 나와 차 열쇠는 둔 채 가볍게 도보 이동. 오드레(Odle) 암벽 산군이 석양빛에 붉게 타들어가는 세기의 포토존 출사 투어.", lodging: "Appartements Pension Sonia", transp: "도보 15분", budget: "무료", notes: "야간용 헤드랜턴 소지" },

  // Day 5
  { day: 5, date: "7/20", time: "08:30 - 09:00", city: "발가르디나", title: "[Road No. SP141 ➔ SS242d] 오르티세이 세체다 주차장 이동 및 카드 구매", desc: "지방도 SP141과 국도 SS242d를 경유하여 오르티세이(Ortisei) 중심가 지하 차고지 'Garage Seceda' 주차. Seceda 하부 승강장 매표소 혹은 My Dolomiti 온라인 숍에서 가르디나 카드 구입.", lodging: "Appartements Pension Sonia [연박]", transp: "렌터카 드라이브 (SP141 ➔ SS242d)", budget: "주차 요금 약 €12 / 카드 구매비", notes: "가르디나 카드는 현장 매표소 혹은 모바일 온라인 예매(강추)로 즉시 픽업 가능" },
  { day: 5, date: "7/20", time: "09:00 - 12:00", city: "발가르디나", title: "세체다 (Seceda) 웅장한 침봉 절벽 전망대 투어", desc: "세체다 승강장에서 곤돌라 ➔ 케이블카로 연속 탑승하여 해발 2,518m 세체다 정상 등정. 깎아지른 바위벽의 설산 파노라마 대전경 감상 및 가벼운 릿지 산책.", lodging: "Appartements Pension Sonia [연박]", transp: "곤돌라 + 케이블카 연계", budget: "가르디나 패스 적용", notes: "서늘한 알프스 고산 기후 대비 바람막이 재킷 필수" },
  { day: 5, date: "7/20", time: "12:00 - 13:00", city: "발가르디나", title: "세체다 ➔ 콜 라이저 (Col Raiser) 내리막 트레킹", desc: "세체다 침봉 우측 오솔길을 따라 흐르는 야생화 지대를 밟으며 콜 라이저(Col Raiser) 고원 산장 방면으로 여유로운 내리막 하이킹.", lodging: "Appartements Pension Sonia [연박]", transp: "도보 하이킹 (약 4km 완만한 경사)", budget: "무료", notes: "내리막길 무릎 무리 방지용 등산 스틱 활용 권장" },
  { day: 5, date: "7/20", time: "13:00 - 14:00", city: "발가르디나", title: "콜 라이저 산장 점심 식사 및 곤돌라 하산", desc: "콜 라이저 대피소 테라스에서 기암절벽을 눈앞에 보며 전통 이태리식 식사. 이후 콜 라이저 곤돌라를 이용해 산타 크리스티나(S. Cristina) 하부 승강장으로 하산.", lodging: "Appartements Pension Sonia [연박]", transp: "콜 라이저 곤돌라 하행선", budget: "가르디나 카드 적용", notes: "리프트 탑승 시 패스 단말기 태그" },
  { day: 5, date: "7/20", time: "14:00 - 14:35", city: "발가르디나", title: "S. Cristina 하부 승강장 ➔ Dosses 버스정류장 도보", desc: "콜 라이저 하부 승강장에서 산타 크리스티나 마을 하부 광장 중심에 있는 S. Cristina, Dosses 정류장까지 약 1.2km 도보 이동.", lodging: "Appartements Pension Sonia [연박]", transp: "도보 15분", budget: "무료", notes: "인도 보행 안전 준수" },
  { day: 5, date: "7/20", time: "14:35 - 14:50", city: "오르티세이", title: "350번 광역 버스 탑승하여 오르티세이 복귀", desc: "Dosses 정류장에서 정시 출발하는 350번 광역 버스 탑승. Ortisei Piazza San Antonio 광장 정류장 안전 도착.", lodging: "Appartements Pension Sonia [연박]", transp: "350번 정기 노선 버스", budget: "Mobil Card 적용 (무료)", notes: "버스 시간표 전광판 대조 확인" },
  { day: 5, date: "7/20", time: "15:00 - 17:30", city: "알페디시우시", title: "오르티세이 곤돌라 연계 알페 디 시우시 고원 목초 하이킹", desc: "도착한 광장에서 도보 3분 만에 알페 디 시우시행 곤돌라 승강장 이동. 곤돌라를 타고 유럽 최대 고산 지대 평원에 도달해 완만한 에메랄드 야생 초원 고원 하이킹.", lodging: "Appartements Pension Sonia [연박]", transp: "곤돌라 왕복 탑승", budget: "가르디나 무제한 패스", notes: "고원 자외선이 매우 강하니 모자/선크림 재도포 필수" },
  { day: 5, date: "7/20", time: "17:30 ~", city: "푸네스 계곡", title: "[Road No. SS242d ➔ SP141] 푸네스 계곡 귀환 및 로컬 석식", desc: "오르티세이 주차장에서 렌터카를 픽업하여 국도 SS242d 및 SP141을 이용해 마달레나 마을 펜션 소니아 안전 복귀 후 현지 가정식 저녁 만찬.", lodging: "Appartements Pension Sonia [연박]", transp: "렌터카 드라이브", budget: "저녁 식사비 약 €60", notes: "산길 야간 주행 시 상향등 하향등 교행 작동 유의" },

  // Day 6
  { day: 6, date: "7/21", time: "08:30 - 09:30", city: "파소 셀라", title: "[Road No. SP141 ➔ SS242] 파소 셀라(Passo Sella) 드라이브 및 주차", desc: "펜션 소니아를 출발하여 국도 SS242 (Val Gardena 관통로) 진입. 거대한 바위 산맥 가르디나 골짜기를 타고 상상 속 알프스 지형을 굽이돌며 Passo Sella 전용 유료 주차장에 안전 주차.", lodging: "Appartements Pension Sonia [연박]", transp: "렌터카 드라이브 (SP141 ➔ SS242)", budget: "주차 요금 €10", notes: "가르디나 카드 패키지 지참 상태 체크. 갓길 불법주차(실선 밖 잔디 접촉 등) 엄격 견인단속 단행되므로 주차장 입고 필수!" },
  { day: 6, date: "7/21", time: "09:30 - 11:30", city: "파소 셀라", title: "싸쏘롱고 (Sassolungo) 2인 스탠딩 케이지 곤돌라 왕복 관람", desc: "파소 셀라의 명물 달리는 2인용 스탠딩 백색 케이지 곤돌라 점프 탑승! 해발 2,685m Demetz 산장 정상 수직 도달하여 사솔룽고 바위 절벽의 전경 관람 후 다시 곤돌라를 타고 하산.", lodging: "Appartements Pension Sonia [연박]", transp: "2인 스탠딩 케이지 곤돌라 왕복", budget: "가르디나 패스 적용 (무료)", notes: "곤돌라를 다시 타고 내려오므로 하산 체력 절약" },
  { day: 6, date: "7/21", time: "11:30 - 12:30", city: "파소 포르도이", title: "[Road No. SS242 ➔ SS48] 파소 포르도이(Passo Pordoi) 드라이브", desc: "사솔룽고를 나와 국도 SS242 ➔ 돌로미티 명품 드라이브 국도 SS48 delle Dolomiti 동진. 파소 포르도이 고개 해발 2,239m 케이블카 대형 전용 주차장 무사 주차.", lodging: "Appartements Pension Sonia [연박]", transp: "렌터카 드라이브 (SS242 ➔ SS48)", budget: "주차 요금 약 €5", notes: "S자 헤어핀 회전 구간 안전 거리 확보" },
  { day: 6, date: "7/21", time: "12:30 - 15:00", city: "파소 포르도이", title: "사쓰 포르도이 (Sass Pordoi) 케이블카 왕복 관람 & 고원 중식", desc: "초대형 공중 케이블카 탑승해 단 4분 만에 해발 2,950m '돌로미티의 테라스' Sass Pordoi 등정. 달표면 같은 암석 평원 조망 후 Maria 산장 중식 및 케이블카 하행 복귀.", lodging: "Appartements Pension Sonia [연박]", transp: "대형 케이블카 왕복", budget: "케이블카 약 €25/인 (가르디나 카드 별도 구간) + 중식 €40", notes: "2,950m 정상은 아주 추우므로 경량 패딩 레이어 필수 착용" },
  { day: 6, date: "7/21", time: "15:00 - 17:00", city: "푸네스 계곡", title: "[Road No. SS48 ➔ SS244] Gadertal 드라이브 및 숙소 복귀", desc: "파소 포르도이에서 출발해 아라바(Arabba)를 거쳐 가르디나 동쪽 Gadertal 메인 국도 SS244 종단 드라이브. Longega 교행 신호 경유하여 숙소 복귀.", lodging: "Appartements Pension Sonia [연박]", transp: "렌터카 드라이브 (SS48 ➔ SS244 ➔ SP141)", budget: "무료", notes: "SS244 Longega 인근 과속 단속 카메라 및 낙석 공사 교행(alternating one-way) 신호대기(5~10분 소요) 유의" },
  { day: 6, date: "7/21", time: "17:00 ~", city: "푸네스 계곡", title: "아들과의 평화로운 푸네스 성당 밤길 도보 산책", desc: "마달레나 성당 골목길을 고요하게 걸으며, 내일 동부 대이동 및 가방 정밀 보관 체크. 현지 가을 저녁 공기를 호흡하며 아늑한 조식 카페 사전 대조.", lodging: "Appartements Pension Sonia [연박]", transp: "도보 산책", budget: "무료", notes: "가벼운 손전등 상시 구비" },

  // Day 7
  { day: 7, date: "7/22", time: "08:30 - 10:00", city: "라가주오이", title: "[Road No. SP141 ➔ SS244] 푸네스 ➔ 팔자레고 패스 직항 드라이브", desc: "펜션 소니아 체크아웃 후 지방도 SP141에서 국도 SS244 (Val Badia 고속축) 진입하여 남하. 구불구불하지만 빼어난 암벽 비경을 품은 Passo Valparola를 돌파해 라가주오이 케이블카 승강장이 위치한 Passo Falzarego에 10:00 정시 도착.", lodging: "호텔 유벤투스 (Hotel Juventus)", transp: "렌터카 드라이브 (SP141 ➔ SS244 ➔ SR48)", budget: "무료", notes: "산악 코너링 구간 저속 엔진 브레이크 사용" },
  { day: 7, date: "7/22", time: "10:00 - 12:00", city: "라가주오이", title: "Cortina Vertical Pass 1일권 현장 구입 & 정상 관람", desc: "팔자레고 승강장 매표소에서 Cortina Vertical Pass 1일권 현장 발권. 대형 공중 케이블카 탑승해 해발 2,752m 고지 진입. 알프스 기암 설산 360도 총천연색 파노라마 감상 후 케이블카 하행선 복귀.", lodging: "호텔 유벤투스 (Hotel Juventus)", transp: "케이블카 왕복 이동", budget: "Cortina Vertical Pass 1일권 약 €42~45/인", notes: "초고산 지대 기습 강풍 대비용 방수/방풍 자켓 필수 소지" },
  { day: 7, date: "7/22", time: "12:00 - 12:15", city: "친퀘토레", title: "[Road No. SR48] 팔자레고 패스 ➔ 바이 데 도네스(Bai de Dones) 이동", desc: "Passo Falzarego 주차장 탈출 후 국도 SR48 동진하여 친퀘토레 체어리프트가 위치한 Bai de Dones 주차장으로 약 4km 단거리 이동 및 안심 주차.", lodging: "호텔 유벤투스 (Hotel Juventus)", transp: "렌터카 드라이브 (SR48 국도)", budget: "무료 주차", notes: "잠시 주차 시에도 차량 내부 소지품 및 캐리어 가림막 철저 차단" },
  { day: 7, date: "7/22", time: "12:15 - 15:30", city: "친퀘토레", title: "체어리프트 탑승 & 스코이야틀리-아베라우-누볼라우 산장 정복", desc: "Vertical Pass로 체어리프트 승차하여 Scoiattoli 산장 도달. 기암괴석 참호 지대를 거쳐 Averau 산장을 통과한 후, 대망의 깎아지른 벼랑 끝 누볼라우(Nuvolau) 산장(2,575m) 정상 트레킹. 절벽 뷰 감상 및 산장 중식 후 왔던 경로 그대로 리프트 하산.", lodging: "호텔 유벤투스 (Hotel Juventus)", transp: "리프트 왕복 및 등반 트레킹", budget: "Vertical Pass 적용 (무료) + 산장 중식비 약 €45", notes: "누볼라우 정상부 돌길 접지력 확보 및 동일 코스 복구 엄수" },
  { day: 7, date: "7/22", time: "15:30 - 17:00", city: "아우론조 호수", title: "[Road No. SR48] 친퀘토레 ➔ 아우론조 호텔 대동선 이동", desc: "체어리프트에서 내린 뒤 렌터카 발진. 국도 SR48을 타고 명품 리조트 소도시 Cortina d'Ampezzo 중심 외곽 우회 도로를 시원하게 달려 에메랄드빛 아우론조 카도레 호숫가의 호텔 유벤투스 도착 및 17:00 정시 체크인.", lodging: "호텔 유벤투스 (Hotel Juventus)", transp: "렌터카 드라이브 (SR48 국도)", budget: "무료", notes: "호텔 호숫가 전용 주차구역 안전 주차" },
  { day: 7, date: "7/22", time: "18:00 ~", city: "아우론조 호수", title: "호숫가 노을 조망 및 야외 테라스 전통 디너", desc: "아우론조 에메랄드 호수에 떨어지는 선셋 감상 후 호숫가 보행 전용로 산책 및 로컬 파스타 디너.", lodging: "호텔 유벤투스 (Hotel Juventus)", transp: "도보 산책", budget: "저녁식사 약 €65", notes: "모기 패치 부착 권장" },

  // Day 8
  { day: 8, date: "7/23", time: "08:00 - 08:30", city: "아우론조 ➔ 미수리나", title: "[Road No. SR48 ➔ SP49] 숙소 출발 및 미수리나 호수 주차", desc: "호텔 유벤투스에서 조식을 먹고 08:00 정시 출발. 국도 SR48 및 지방도 SP49를 이용해 미수리나 호수로 드라이브. 버스정류장(Misurina Genzianella) 근처 공영 유료 주차장에 차를 대고 셔틀버스를 준비합니다.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "렌터카 드라이브 (SR48 ➔ SP49)", budget: "예상 주차비 약 €12 (6시간 기준)", notes: "08:30 전 도착하여 주차 안정 확보" },
  { day: 8, date: "7/23", time: "08:35 - 09:05", city: "미수리나 ➔ 아우론조 산장", title: "Dolomiti Bus 전용 셔틀버스(Navetta) 탑승", desc: "Genzianella 정류장에서 Dolomiti Bus '3 Cime' 셔틀 탑승. 개인차량 주차정체 없이 톨게이트를 프리패스로 통과하여 트레킹 출발지인 아우론조 산장(Rifugio Auronzo, 2,320m)에 정시 도착.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "Dolomiti Bus 셔틀 (편도 30분 소요)", budget: "셔틀버스 1일 패스 €10/인", notes: "★ 7/26 아그리투리스모 모치네 저녁 예약 최종 컨펌(전화/이메일) 전술 루틴 체크!" },
  { day: 8, date: "7/23", time: "09:10 - 13:30", city: "트레치메", title: "트레 치메 디 라바레도 시계 방향 루프 종주", desc: "아우론조 산장 출발 ➔ 라바레도 대피소 ➔ 로카텔리 대피소 야외 벤치 전투식량(컵라면) 취식 ➔ 카디니 디 미수리나 뷰포인트까지 아들과 안전하고 장엄한 하이킹.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "종주 하이킹", budget: "무료 (도보)", notes: "가져간 보온병 뜨거운 물/행동식 지참" },
  { day: 8, date: "7/23", time: "13:35 - 14:00", city: "아우론조 산장 ➔ 미수리나", title: "귀가행 셔틀버스 탑승 및 미수리나 호수 복귀", desc: "아우론조 산장 승강장으로 돌아와 13:35 출발하는 복귀 셔틀버스 탑승. 유료 임도를 따라 미수리나 Genzianella 정류장으로 정시 복귀.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "Dolomiti Bus 셔틀버스", budget: "무료 (셔틀 1일권 적용)", notes: "하산 승객 줄 확인 후 정시 대기" },
  { day: 8, date: "7/23", time: "14:00 - 16:30", city: "미수리나 호수", title: "[Lago di Misurina] 호숫가 휴식 및 에메랄드 전경 감상", desc: "에메랄드빛 미수리나 호숫가를 여유롭게 거닐며 노천 카페에서 카페 마키아토와 달콤한 이태리 젤라토 브레이크. 알프스 거울 호수 배경으로 아들과 한적한 오후 휴식 및 추억 촬영.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "도보 산책", budget: "디저트 요금 약 €15", notes: "오후 뇌우 가능성 있으니 기상 레이더 체크" },
  { day: 8, date: "7/23", time: "16:30 ~", city: "아우론조 호수", title: "[Road No. SP49 ➔ SR48] 아우론조 복귀 및 저녁식사", desc: "주차된 렌터카를 회수하여 지방도 SP49 ➔ 국도 SR48을 타고 아우론조의 Hotel Juventus로 안전 복귀. 호텔 호숫가 주변 식당에서 전통 스테이크 만찬 식사.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "렌터카 드라이브 (SP49 ➔ SR48)", budget: "저녁 식사 약 €70", notes: "렌터카 타이어 및 기어 상태 점검" },

  // Day 9
  { day: 9, date: "7/24", time: "08:00 - 09:00", city: "프락스 호수", title: "[Road No. SS51 ➔ SS49 ➔ SP13] 프락스 호수 이동 및 주차", desc: "국도 SS51 북상 ➔ SS49 (Puster Valley 관통로) 서진 ➔ 프락스 계곡 지방도 SP13 (Lago di Braies 전용선) 진입하여 예약된 주차장 P2 정시 안심 주차.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "렌터카 드라이브 (SS51 ➔ SS49 ➔ SP13)", budget: "주차 및 나룻배 약 €50", notes: "09:00 전 톨게이트 무조건 통과 (온라인 예약증 제시)" },
  { day: 9, date: "7/24", time: "09:00 - 11:30", city: "프락스 호수", title: "프락스 에메랄드 호수 산책 및 나무 보트 체험", desc: "거울 같이 맑은 호숫가 산책로를 걸으며 아들과 에메랄드 물빛 감상 및 빈티지 로컬 수제 보트 대여하여 호수 중앙 질주.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "도보 및 수제 노젓기 보트", budget: "보트 렌트 비용 포함", notes: "바람막이 착용 필수 (호수 수온 서늘)" },
  { day: 9, date: "7/24", time: "11:30 - 13:00", city: "산 칸디도", title: "[Road No. SS49] 산 칸디도 오스트리아 접경 마을 점심", desc: "지방도 SP13 나와 국도 SS49 동진하여 오스트리아와 인접한 소도시 산 칸디도 진입. 정통 소시지와 슈니첼 요리로 점심 미식.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "렌터카 드라이브 (SS49)", budget: "점심비 약 €55", notes: "오스트리아 데이터 로밍 상태 주의" },
  { day: 9, date: "7/24", time: "13:00 - 16:00", city: "산 칸디도", title: "몬테 바란치 리프트 탑승 및 마운틴 펀봅 루지 썰매", desc: "바란치 리프트 매표소 발권 ➔ 리프트 정상 도달 후 레일형 펀봅(Funbob) 썰매 탑승하여 아들과 시속 40km 쾌속 질주 스릴 대결.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "체어 리프트 + 루지 활강", budget: "펀봅 가족 이용권 약 €60", notes: "레일 수분 체크 (비오는 날 정지)" },
  { day: 9, date: "7/24", time: "16:00 ~", city: "아우론조 호수", title: "[Road No. SS49 ➔ SS51] 아우론조 컴백 및 가솔린 완충", desc: "국도 SS49 ➔ SS51 남하 드라이브하여 아우론조 복귀. 내일 남하 장거리 운전을 위해 주유소 경유 및 가솔린 만땅 주유.", lodging: "호텔 유벤투스 (Hotel Juventus) [연박]", transp: "렌터카 드라이브 (SS49 ➔ SS51)", budget: "주유 요금 €35", notes: "Senza Piombo" },

  // Day 10
  { day: 10, date: "7/25", time: "08:30 - 11:00", city: "베네치아 메스트레", title: "[Road No. SS51 ➔ A27] 베네치아 메스트레 고속 남하 드라이브", desc: "동부 체크아웃 후 국도 SS51 남하 ➔ Belluno 관문 고속도로 A27 Autostrada 진입. Venezia-Mestre 표지판을 보고 고속 질주 후 Mestre 탈출.", lodging: "호텔 파리스 베네치아 (Hotel Paris)", transp: "렌터카 드라이브 (SS51 ➔ A27 ➔ A57)", budget: "고속도로 톨비 약 €18", notes: "Venezia-Mestre 출구 탈출 준수" },
  { day: 10, date: "7/25", time: "11:00 - 13:00", city: "베네치아 메스트레", title: "호텔 파리스 베네치아 주차 완료 및 캐리어 보관", desc: "메스트레 역세권에 예약 확정된 호텔 파리스 베네치아 주차장에 주차 완료 및 프론트에 짐을 던진 뒤 대중교통 승차권 지참.", lodging: "호텔 파리스 베네치아 (Hotel Paris)", transp: "렌터카 주차", budget: "무료 전용 주차", notes: "★ 체크인 시 주차 가능 여부 선 확인 필수 (15유로/일)" },
  { day: 10, date: "7/25", time: "13:00 - 21:00", city: "베네치아 본섬", title: "메스트레역 기차 탑승 본섬 도보 관광 및 야경 감상", desc: "호텔 코앞 Mestre역 기차 탑승(10분 소요) 본섬 산타루치아역 진입. 바포레토(수상버스) 탑승 ➔ 리알토 다리, 산마르코 광장 정취 및 야경 일몰 감상.", lodging: "호텔 파리스 베네치아 (Hotel Paris)", transp: "기차 편도 (€1.45/인) + 수상버스 바포레토", budget: "베네치아 대중교통비 약 €40", notes: "본섬 소매치기 및 가방 밀착 차단" },

  // Day 11
  { day: 11, date: "7/26", time: "10:00 - 12:30", city: "메스트레 ➔ 토스카나", title: "[Road No. A57 ➔ A13 ➔ A1 ➔ RA3] 토스카나 남하 및 몬테리지오니 탐방", desc: "메스트레 출발 ➔ 고속도로 A57 ➔ A13 (Bologna 방면) ➔ A1 (Firenze 방면) 남하 Certosa 톨게이트 탈출 ➔ 전용로 RA3 (Siena 방면) 진입. 중세 성벽 요새 소도시인 몬테리지오니(Monteriggioni) 성곽 투어.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine)", transp: "고속도로 및 국도 드라이브", budget: "톨비 약 €28", notes: "성벽 밖 공영 주차장에 안전 주차 후 도보 진입" },
  { day: 11, date: "7/26", time: "12:30 - 15:30", city: "토스카나 소도시", title: "[Road No. RA3] 산지미냐노(San Gimignano) 탑의 마을 관광 및 점심", desc: "RA3 국도 북상하여 중세 고층 탑들이 가득한 산지미냐노 진입. 유서 깊은 성곽 광장에서 정통 화덕 피자 및 세계 챔피언 젤라토 점심식사.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine)", transp: "렌터카 드라이브", budget: "점심비 및 주차비 약 €50", notes: "ZTL 구역 외곽 Porta San Giovanni 근처 대형 유료 주차장 이용" },
  { day: 11, date: "7/26", time: "15:30 - 17:00", city: "토스카나 아스치아노", title: "[Road No. SP438] 크레테 세네시 명품 흙길 능선 질주 ➔ 아스치아노 도착", desc: "산지미냐노 출발 ➔ Siena Sud 출구 나와 황금색 밀밭 지평선 능선 구릉인 SP438 (Crete Senesi 국선) 타고 굽이굽이 운치 있게 달려 아스치아노 농가민박 모치네 무사 정착.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine)", transp: "렌터카 드라이브 (SP438)", budget: "무료", notes: "SP438 비포장 흙길 산악 저속 주행 엄수" },
  { day: 11, date: "7/26", time: "18:00 ~", city: "토스카나", title: "모치네 웰컴 와인 가든 힐링 디너 [예약 완료]", desc: "석양에 붉게 물드는 사이프러스 나무 가로수들을 보며 민박집에서 직접 빚은 유기농 양조 와인과 토스카나 전통 저녁식사 만찬.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine)", transp: "도보 이동", budget: "디너 패키지 요금", notes: "7/23 재확인 완료 상태 확인" },

  // Day 12
  { day: 12, date: "7/27", time: "09:00 - 12:30", city: "치비타", title: "[Road No. SP438 ➔ SR2 ➔ SP105] 천공의 성 치비타 드라이브 투어", desc: "아스치아노를 출발하여 굽이치는 황금 언덕길 SP438 ➔ 유서 깊은 구국도 SR2 (Via Cassia) 남하하여 SP105 경유 Bagnoregio 도달. 절벽 위 중세 고성 마을 치비타 디 바뇨레조 도보 진입.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine) [연박]", transp: "렌터카 드라이브 (SP438 ➔ SR2 ➔ SP105)", budget: "치비타 요금 €5/인", notes: "Civita 입구 보행교 바람막이 권장" },
  { day: 12, date: "7/27", time: "12:30 - 15:00", city: "피틸리아노", title: "[Road No. SR2 ➔ SR74] 절벽 위 중세 요새 피틸리아노(Pitigliano) 정복", desc: "바뇨레조 나와 구국도 SR2 및 SR74 서상 드라이브. 거대한 응회암 황토 절벽 위에 아기자기하게 얹어진 중세 에트루리아인들의 비밀 요새 마을 피틸리아노 관광 및 점심.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine) [연박]", transp: "렌터카 드라이브", budget: "식사비 및 주차비 약 €40", notes: "ZTL 제한구역 외곽 Porta della Città 주차장 이용" },
  { day: 12, date: "7/27", time: "15:00 - 17:30", city: "사투르니아", title: "[Road No. SP14] 사투르니아 카스카테 델 물리노 노천온천 온천", desc: "피틸리아노 나와 지방도 SP14 및 SP159를 넘어 사투르니아 천연 유황 노천온천 도달. 에메랄드빛 계단식 온천 폭포에서 아들과 따뜻한 유황 힐링.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine) [연박]", transp: "렌터카 드라이브", budget: "입장료 무료", notes: "비치타월 미리 상시 소지 (탈의실 없음)" },
  { day: 12, date: "7/27", time: "17:30 ~", city: "토스카나", title: "[Road No. SP159 ➔ SR2 ➔ SP438] 온천 피로 회복 컴백 드라이브", desc: "황혼 무렵 알프스 드라이브 국도를 타고 아스치아노 Mocine 농가 민박 무사 귀환. 씻은 후 토스카나 정통 수제 핏치(Pici) 국수 디너.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine) [연박]", transp: "렌터카 드라이브 (SP159 ➔ SR2 ➔ SP438)", budget: "디너 약 €65", notes: "가끔 야생 노루/멧돼지 출몰 주의 서행" },

  // Day 13
  { day: 13, date: "7/28", time: "09:30 - 13:30", city: "몬테풀차노", title: "[Road No. SP438 ➔ SP146] 몬테풀차노 성곽 마을 힐링 드라이브", desc: "구릉 언덕 명품길 SP438 ➔ 국도 SP146 (Montepulciano 관통로) 동진하여 외곽 Porta Prato 주차장 주차. 성곽 도보 투어 및 정통 점심 식사.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine) [연박]", transp: "렌터카 드라이브 (SP438 ➔ SP146)", budget: "주차 및 중식 약 €65", notes: "성문 안쪽 ZTL 벌금 카메라 무단 진입 금지" },
  { day: 13, date: "7/28", time: "13:30 - 17:30", city: "발도르차 평원", title: "[Road No. SP146 ➔ SR2] 발도르차 피엔차 및 글래디에이터 출사", desc: "국도 SP146 서진 ➔ SR2 메인 국도 남하하여 Pienza 마을 전경 촬영 및 글래디에이터 가로수길 출사. 16~18시 경사진 골든아워 노을 감상.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine) [연박]", transp: "렌터카 드라이브 (SP146 ➔ SR2)", budget: "피엔차 요금 약 €10", notes: "삼각대 상시 지참 (바람 조심)" },
  { day: 13, date: "7/28", time: "17:30 ~", city: "토스카나", title: "토스카나 마지막 밤 조망 및 렌터카 반납 경로 시뮬레이션", desc: "숙소 복귀하여 정원 벤치에 착석. 아들과 함께 내일 피렌체 Via Alamanni 35/e 차고지 진입 경로 및 ZTL 면제 요령을 가이드북 보며 더블체크.", lodging: "아그리투리스모 모치네 (Agriturismo Mocine) [연박]", transp: "도보 이동", budget: "무료", notes: "반납처 주소 GPS 세팅 확인" },

  // Day 14
  { day: 14, date: "7/29", time: "09:00 - 12:30", city: "피렌체", title: "[Road No. SP438 ➔ RA3] 시에나 대성당 관람 후 피렌체 북상 드라이브", desc: "모치네 체크아웃 후 국도 SP438 ➔ RA3 국도 연결. 시에나 대성당(Duomo di Siena)의 흑백 대리석 고딕 바닥 및 첨탑 투어 관람 후 피렌체Certosa 방면 북상 드라이브.", lodging: "호텔 코시모 드 메디치", transp: "렌터카 드라이브 (SP438 ➔ RA3)", budget: "성당 입장권 및 톨비 약 €20", notes: "시에나 Porta San Marco 근처 외곽 유료 주차장에 안전 주차" },
  { day: 14, date: "7/29", time: "12:30 - 13:30", city: "피렌체", title: "ZTL 단속 안심 회피 피렌체역 반납 및 화이트리스트 서명", desc: "피렌체 ZTL 단속 구역 우회. Viale Etruria ➔ Ponte alla Vittoria 다리 도하 ➔ Viale Fratelli Rosselli ➔ Via Jacopo da Diacceto 일방통행 골목 거쳐 최종 Via Luigi Alamanni 35/e 반납 완료 및 Whitelist 예외 수령 서명.", lodging: "호텔 코시모 드 메디치", transp: "렌터카 최종 반납 완료", budget: "주유 완충 비용", notes: "렌터카 직원에게 ZTL 예외 화이트리스트 등록증 및 구두 영수증 스마트폰 촬영 보관!" },
  { day: 14, date: "7/29", time: "13:30 - 18:00", city: "피렌체", title: "호텔 코시모 체크인 및 피렌체 가죽시장 쇼핑 투어", desc: "반납 차고지에서 짐 캐리어를 끌고 도보 4분 거리의 예약 확정 호텔 코시모 드 메디치 체크인 후 짐을 풀고 홀가분하게 가죽시장 도보 쇼핑.", lodging: "호텔 코시모 드 메디치", transp: "도보 4분", budget: "가죽시장 기념품 쇼핑비", notes: "기내 캐리어 수하물 용량 사전 계산" },
  { day: 14, date: "7/29", time: "18:00 ~", city: "피렌체", title: "미켈란젤로 언덕 버스 탑승 및 피렌체 붉은 아르노강 일몰 야경", desc: "중앙역 버스 승강장에서 미켈란젤로 언덕행 12번/13번 로컬 버스 탑승. 붉은 피렌체 두오모 돔과 아르노강 뷰 힐링 감상 후 역 근처 T-Bone 스테이크 디너.", lodging: "호텔 코시모 드 메디치", transp: "시내 버스 왕복 (€1.70/인)", budget: "티본스테이크 디너 약 €100 (2인)", notes: "야경 감상 후 귀가 혼잡한 버스 내 소매치기 철저 차단" },

  // Day 15
  { day: 15, date: "7/30", time: "09:00 - 15:15", city: "피렌체", title: "피렌체 반나절 여유로운 역사 도보 산책 및 조식", desc: "체크아웃 후 수하물은 호텔 코시모에 안전 위탁. 두오모 광장 주변 한적한 오전 골목 사진 출사 및 정통 에스프레소 카페 투어로 피렌체 골든 아워 배분.", lodging: "기내 숙박", transp: "도보 관광", budget: "개인 소지 예산", notes: "15:15까지 호텔 복귀 후 짐 픽업 엄수" },
  { day: 15, date: "7/30", time: "15:15 - 15:55", city: "피렌체 SMN 역", title: "호텔 코시모 짐 픽업 및 기차 플랫폼 정시 승차 준비", desc: "호텔에서 수하물 수거하여 도보 4분 만에 피렌체 산타 마리아 노벨라역 승강장 안착. 열차 전광판 Frecciarossa 모니터 대조 후 착석.", lodging: "기내 숙박", transp: "도보 4분", budget: "무료", notes: "예매 완료된 모바일 콰이어 QR코드 준비" },
  { day: 15, date: "7/30", time: "15:55 - 17:50", city: "밀라노 중앙역", title: "Frecciarossa 초고속열차 정시 남상 이동 [예매 완료]", desc: "15:55 피렌체 SMN역 정시 출발. 최고 시속 300km로 쾌적하게 횡단하여 17:50 밀라노 중앙역 정시 도착.", lodging: "기내 숙박", transp: "Frecciarossa 고속열차", budget: "예매 완료", notes: "귀중품 및 핸드캐리 배낭은 머리 위 선반 잠금 확인" },
  { day: 15, date: "7/30", time: "17:50 - 18:25", city: "밀라노 중앙역", title: "말펜사 익스프레스 공항철도 환승 플랫폼 이동", desc: "밀라노 Centrale 도착 즉시 승강장을 나와 역사 내 1~3번 라인의 말펜사 익스프레스 전용 플랫폼으로 캐리어를 끌고 침착하게 기동 이동.", lodging: "기내 숙박", transp: "도보 플랫폼 이동 (35분 환승대기)", budget: "무료", notes: "플랫폼 주변 에스컬레이터 경로 확인" },
  { day: 15, date: "7/30", time: "18:25 - 19:18", city: "말펜사 공항", title: "말펜사 익스프레스 공항선 이동 및 T1 도착 [예매 완료]", desc: "18:25 밀라노 중앙역 출발. 알프스 평원을 거쳐 19:18 말펜사 국제공항 터미널 1 승강장 정시 도착 후 출발장 수직 진입.", lodging: "기내 숙박", transp: "Malpensa Express 공항철도", budget: "예매 완료", notes: "모바일 QR코드 검표원 스캔 준비" },
  { day: 15, date: "7/30", time: "19:18 - 22:00", city: "말펜사 공항 ➔ 인천", title: "항공사 카운터 체크인, Tax Refund 및 OZ582 귀국", desc: "22:00 출발편 OZ582 아시아나 보딩 패스 발권 완료. 가방 수속 및 텍스 리펀드(세금 환급) 절차 완료 후 면세구역 진입 및 아들과 무사 귀국 비행.", lodging: "기내 숙박", transp: "아시아나 귀국 항공편 (OZ582)", budget: "무사 여행 완성", notes: "귀중품은 기내 캐리어 핸드백 보관" }
];

export const hikingData: HikingItem[] = [
  { name: "세체다 (Seceda) 파노라마", dist: "8.5km", time: "3시간 30분", diff: "보통", danger: "낮음", tip: "가르디나 카드로 무상 탑승 곤돌라 연계" },
  { name: "트레 치메 디 라바레도 루프", dist: "10.2km", time: "4시간 30분", diff: "보통", danger: "중간", tip: "아침 일찍(7시 전) 톨게이트를 넘지 않으면 주차 대기로 일정 낭비 심각" },
  { name: "싸쏘롱고 곤돌라 & 산군 뷰", dist: "Varies", time: "2~3시간", diff: "쉬움", danger: "낮음", tip: "Passo Sella에서 시작하는 명물 2인 스탠딩 케이지 곤돌라 스릴 만점" },
  { name: "라가주오이 & 친퀘토레", dist: "5.5km (합산)", time: "3시간 30분", diff: "보통", danger: "낮음", tip: "1차 대전 참호 동굴과 거대 암석군을 탐험하는 역사 체험형 하이킹. 아들과의 최고의 추억이 될 이색 코스!" }
];

export const initialChecklistItems: ChecklistItem[] = [
  { id: "doc-1", category: "documents", text: "여권 및 여권 사본 (사본은 스마트폰에 이미지 보관)", checked: false, critical: true },
  { id: "doc-2", category: "documents", text: "국제운전면허증 + 영문면허증 + 한국 면허증 (셋 중 하나라도 없으면 렌터카 불가능!)", checked: false, critical: true },
  { id: "doc-3", category: "documents", text: "해외 결제 신용카드 및 트래블로그/트래블월렛 카드 (결제 수수료 방어)", checked: false, critical: true },
  { id: "doc-4", category: "documents", text: "소액 유로화 현금 (돌로미티 고산 산장 화장실, 소액 주차비 결제용)", checked: false, critical: false },
  { id: "doc-5", category: "documents", text: "예약 바우처 보관 (호텔 베르나, 소니아, 유벤투스, 코시모, 이탈리아 열차 예매 사본)", checked: false, critical: false },
  
  { id: "cloth-1", category: "clothing", text: "고어텍스 등산화 또는 접지력 최상인 등산용 트레일 러닝화 (돌발 뇌우 대비)", checked: false, critical: true },
  { id: "cloth-2", category: "clothing", text: "기능성 방수 바람막이 및 하드쉘 자켓 (갑작스러운 폭우 대비 필수)", checked: false, critical: true },
  { id: "cloth-3", category: "clothing", text: "가벼운 경량 패딩 또는 두툼한 플리스 자켓 (2,000m 이상 고지대 체온 유지)", checked: false, critical: true },
  { id: "cloth-4", category: "clothing", text: "땀 건조가 무척 빠른 기능성 긴소매/반소매 등산 의류 (3~4벌)", checked: false, critical: false },
  { id: "cloth-5", category: "clothing", text: "쿠션감 있는 등산 소모 전용 양말 (발목 물집 및 뒤꿈치 충격 최소화)", checked: false, critical: false },
  
  { id: "sun-1", category: "suncare", text: "챙이 넓은 등산 모자 혹은 전면 가림용 버킷햇 (고산 자외선 두피 화상 강력 방어)", checked: false, critical: true },
  { id: "sun-2", category: "suncare", text: "SPF 50+ 고강도 선크림 (자주 타는 귀 뒤와 목 뒷덜미 꼼꼼 밀착 도포)", checked: false, critical: true },
  { id: "sun-3", category: "suncare", text: "UV 완전 차단 편광 선글라스 (고산 평원의 강한 햇빛 난반사로부터 아들과 아버님의 시력 보호)", checked: false, critical: true },
  { id: "sun-4", category: "suncare", text: "알로에 베라 수딩 젤 (피부 열감 및 화상 대피 애프터선 보습용)", checked: false, critical: false },
  
  { id: "elec-1", category: "electronics", text: "이탈리아 전용 얇은 핀 멀티 어댑터 (또는 얇은 소형 돼지코 플러그)", checked: false, critical: true },
  { id: "elec-2", category: "electronics", text: "고용량 보조 배터리 20,000mAh (하이킹 코스 GPS 길찾기로 소모가 무척 심함)", checked: false, critical: true },
  { id: "elec-3", category: "electronics", text: "차량용 스마트폰 송풍구 거치대 (렌터카 인수하자마자 구글맵 내비게이션 거치하여 Area C/ZTL 진입 방어)", checked: false, critical: true },
  { id: "elec-4", category: "electronics", text: "소형 손전등 또는 고성능 헤드랜턴 (라가주오이 전쟁 참호 동굴 터널 탐사 시 칠흑 속 안전 확보)", checked: false, critical: true },
  { id: "elec-5", category: "electronics", text: "자전거용 튼튼한 와이어 자물쇠 (사투르니아나 소도시 주차 시 트렁크 캐리어 도난 방지)", checked: false, critical: false },

  { id: "med-1", category: "hygiene", text: "개인 스포츠 타올 및 대형 비치 타올 (사투르니아 천연 노천온천용 필수품)", checked: false, critical: true },
  { id: "med-2", category: "hygiene", text: "물집 방지 방수 대형 대일밴드 및 상비약 (두통약, 소화제, 지청구, 벌레물린데 약)", checked: false, critical: true },
  { id: "med-3", category: "hygiene", text: "수영복 및 젖은 옷을 바로 격리할 수 있는 지퍼백/방수팩 (온천 후 쾌적 보관)", checked: false, critical: false },
  { id: "med-4", category: "hygiene", text: "야외 진입 모기 기피 및 진정 연고", checked: false, critical: false },

  { id: "etc-1", category: "etc", text: "다회용 텀블러/스포츠 물통 (돌로미티의 신선한 알프스 천연 약수 공급용)", checked: false, critical: false },
  { id: "etc-2", category: "etc", text: "가벼운 당일치기용 배낭 백팩 (여벌 경량 자켓, 초콜릿 간식, 물통 소지용)", checked: false, critical: false }
];

export const checklistCategories = {
  documents: { title: "금융 및 필수 행정서류", icon: "FileText", color: "text-blue-600 bg-blue-50 border-blue-100" },
  clothing: { title: "산악 급변 기후 대비 의류", icon: "Shirt", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  suncare: { title: "자외선 차단 선케어", icon: "Sun", color: "text-amber-600 bg-amber-50 border-amber-100" },
  electronics: { title: "전자기기 & 렌터카 안전도구", icon: "Plug", color: "text-purple-600 bg-purple-50 border-purple-100" },
  hygiene: { title: "위생용품 & 사투르니아 노천온천 대비", icon: "HeartPulse", color: "text-rose-600 bg-rose-50 border-rose-100" },
  etc: { title: "기타 유용한 하이킹 물품", icon: "Compass", color: "text-slate-600 bg-slate-50 border-slate-100" }
};

export const accommodationData: AccommodationItem[] = [
  {
    name: "Hotel Cosimo de' Medici",
    koreanName: "호텔 코시모 드 메디치",
    location: "피렌체 SMN 중앙역 도보 4분",
    dateRange: "7월 29일 ~ 30일 (1박)",
    type: "selected",
    typeText: "선택한 숙소 (확정)",
    details: "렌터카를 7/29 반납 지점(Via Alamanni 35/e)에 성공적으로 반납한 후, 무거운 짐을 끌고 도보 5분 만에 도달하는 완벽한 위치를 자랑합니다. 피렌체 역사적 가치를 재현한 중세 고풍스러운 인테리어와 훌륭한 가성비, 조식 서비스를 제공하며, 다음 날 15:55 고속열차 플랫폼까지의 이동 피로를 극적으로 절약해 줍니다."
  },
  {
    name: "Hotel Berna",
    koreanName: "호텔 베르나",
    location: "밀라노 중앙역 도보 2분",
    dateRange: "7월 16일 ~ 18일 (2박)",
    type: "selected",
    typeText: "선택한 숙소 (확정)",
    details: "무료 미니바와 웰컴 스낵, 친절함 가득한 웰컴 서비스가 특징입니다. 장거리 야간 입국 여정 후 피로를 풀기에 최선이며, 7/18 오전 렌터카 사무소까지 짐을 끌고 도보 2~3분 내 도착 가능해 물류 효율이 매우 뛰어납니다."
  },
  {
    name: "Romeo Giulietta",
    koreanName: "로미오 줄리에타",
    location: "베로나 아레나 인근",
    dateRange: "7월 18일 ~ 19일 (1박)",
    type: "parking",
    typeText: "주차 예약 완료",
    details: "베로나 역사 지구의 고풍스러운 정취를 느낄 수 있는 숙소로 아레나 원형극장과 매우 가깝습니다. 주차 공간이 미리 완벽하게 확보되어 현지 드라이브 진입 걱정이 없으며, 따뜻한 호스팅과 아기자기한 이태리식 가정이 깃든 인테리어가 인상적입니다."
  },
  {
    name: "Appartements Pension Sonia",
    koreanName: "아파트먼트 펜션 소니아",
    location: "푸네스(Funes) 계곡 마달레나",
    dateRange: "7월 19일 ~ 22일 (3박)",
    type: "selected",
    typeText: "선택한 숙소 (확정)",
    details: "돌로미티 최고의 엽서 뷰로 불리는 산타 마달레나 성당 포토존까지 도보 이동이 가능해 주차비와 번잡함을 차단합니다. 창 밖으로 가이슬러 오드레(Odle) 산군의 장엄한 바위벽이 펼쳐지며, 친절한 현지 가족이 운영하여 조식 만족도가 최상입니다."
  },
  {
    name: "Hotel Juventus",
    koreanName: "호텔 유벤투스",
    location: "아우론조 디 카도레 (Auronzo di Cadore) 호숫가",
    dateRange: "7월 22일 ~ 25일 (3박)",
    type: "selected",
    typeText: "선택한 숙소 (확정)",
    details: "아름다운 아우론조 호수 바로 앞에 위치한 가족 경영 호텔입니다. 발코니에서 바라보는 환상적인 호수 및 돌로미티 산군 뷰가 압권이며, 동부 주요 명소(트레치메, 미수리나 호수, 라가주오이, 친퀘토레)와 매우 인접해 최적의 거점 역할을 제공합니다."
  },
  {
    name: "Hotel Paris Venezia",
    koreanName: "호텔 파리스 베네치아",
    location: "베네치아 메스트레(Mestre)",
    dateRange: "7월 25일 ~ 26일 (1박)",
    type: "attention",
    typeText: "현장 확인 지침",
    details: "★ 체크인 시 프론트 데스크에서 주차 가능 여부를 선 확인(15유로/일)하고 주유 차단 가로막을 안내받으십시오. 본섬 주차 비용과 대기줄을 절약하기 위한 핵심 베네치아 거점입니다. Mestre역과 가까워 기차로 10분 만에 본섬에 닿을 수 있습니다."
  },
  {
    name: "Agriturismo Mocine",
    koreanName: "아그리투리스모 모치네",
    location: "토스카나 아스치아노 (Asciano)",
    dateRange: "7월 26일 ~ 29일 (3박)",
    type: "dinner",
    typeText: "7/26 저녁식사 예약 완료",
    details: "7월 26일 농가 전통 만찬 예약 확정! (7/23 목요일 일몰 전까지 전화/이메일로 재확인 필수) 유기농 양조 및 투스카니 전통 농가 생활을 체험할 수 있는 최고 평점의 아그리투리스모입니다. 발도르차 평원 및 남부 치비타, 피틸리아노, 사투르니아 온천으로 향하는 드라이브 출발지로서 고요하고 압도적인 아늑함을 자랑합니다."
  }
];
