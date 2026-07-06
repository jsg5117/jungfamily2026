import React, { useState, useMemo } from "react";
import { itineraryData } from "../data";
import { ItineraryItem } from "../types";
import { Search, Calendar, MapPin, Bed, Car, Check, ChevronDown, ChevronUp } from "lucide-react";

export default function ItineraryView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState<number | "all">("all");
  const [expandedSlots, setExpandedSlots] = useState<Record<string, boolean>>({});

  // Get total unique days
  const daysList = useMemo(() => {
    const daysSet = new Set<number>();
    itineraryData.forEach(item => daysSet.add(item.day));
    return Array.from(daysSet).sort((a, b) => a - b);
  }, []);

  // Filter itinerary
  const filteredItinerary = useMemo(() => {
    return itineraryData.filter(item => {
      const matchesSearch = 
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lodging.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.notes.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDay = selectedDay === "all" || item.day === selectedDay;

      return matchesSearch && matchesDay;
    });
  }, [searchTerm, selectedDay]);

  // Group by day for the main layout
  const groupedByDay = useMemo(() => {
    const groups: Record<number, ItineraryItem[]> = {};
    filteredItinerary.forEach(item => {
      if (!groups[item.day]) {
        groups[item.day] = [];
      }
      groups[item.day].push(item);
    });
    return groups;
  }, [filteredItinerary]);

  const toggleSlotExpand = (key: string) => {
    setExpandedSlots(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6 text-[#2D3748]">
      {/* Search & Filter bar */}
      <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-xl border border-[#E2D9CF] shadow-sm items-center justify-between">
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0AEC0]" />
          <input
            type="text"
            placeholder="상세 일정, 도시, 숙소 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-[#E2D9CF] rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#3D6A4B] focus:border-[#3D6A4B] transition-all bg-[#FBF9F6]"
          />
        </div>

        {/* Quick Day filters */}
        <div className="flex flex-wrap items-center gap-1 w-full lg:w-auto justify-start lg:justify-end">
          <button
            onClick={() => setSelectedDay("all")}
            className={`px-2 py-1.5 rounded-md text-[10px] md:text-xs font-bold transition-all whitespace-nowrap border ${
              selectedDay === "all"
                ? "bg-[#3D6A4B] text-white border-[#3D6A4B] shadow-sm"
                : "bg-white text-[#718096] border-[#E2D9CF] hover:bg-gray-50"
            }`}
          >
            전체 일정 보기
          </button>
          {daysList.map(d => (
            <button
              key={d}
              onClick={() => setSelectedDay(d)}
              className={`px-1.5 py-1.5 rounded-md text-[10px] md:text-xs font-bold transition-all whitespace-nowrap border min-w-[34px] text-center ${
                selectedDay === d
                  ? "bg-[#3D6A4B] text-white border-[#3D6A4B] shadow-sm"
                  : "bg-white text-[#718096] border-[#E2D9CF] hover:bg-gray-50"
              }`}
            >
              D-{d}
            </button>
          ))}
        </div>
      </div>

      {/* Render itinerary list or grid */}
      {Object.keys(groupedByDay).length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-[#E2D9CF] shadow-inner">
          <Calendar className="w-10 h-10 text-[#CBD5E0] mx-auto mb-3" />
          <p className="text-gray-500 text-xs">검색 결과에 일치하는 일정이 없습니다.</p>
          <button 
            onClick={() => { setSearchTerm(""); setSelectedDay("all"); }}
            className="mt-3 text-xs text-[#3D6A4B] font-bold hover:underline"
          >
            필터 초기화
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(Object.entries(groupedByDay) as [string, ItineraryItem[]][]).map(([dayNumStr, slots]) => {
            const dayNum = parseInt(dayNumStr);
            // Get typical representative details for this day
            const representativeLodging = slots[0]?.lodging || "기내 숙박";
            const representativeTransp = slots[0]?.transp || "렌터카";
            const uniqueCities = Array.from(new Set(slots.map(s => s.city)));

            return (
              <div 
                key={dayNum} 
                className="bg-white border border-[#E2D9CF] rounded-xl shadow-sm hover:border-[#3D6A4B] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Day Header */}
                <div className="bg-[#EEF5F0]/60 px-4 py-3 border-b border-[#E2D9CF] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#3D6A4B] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded font-mono">
                      DAY {dayNum}
                    </span>
                    <span className="text-xs text-[#718096] font-bold">
                      {slots[0]?.date}
                    </span>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {uniqueCities.map(c => (
                      <span key={c} className="bg-[#EEF5F0] text-[#3D6A4B] text-[9px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#3D6A4B]/10">
                        <MapPin className="w-2.5 h-2.5" />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Day Slots */}
                <div className="p-4 flex-1 space-y-4">
                  {slots.map((slot, index) => {
                    const slotKey = `${dayNum}-${index}`;
                    const isExpanded = !!expandedSlots[slotKey];

                    return (
                      <div 
                        key={index} 
                        className="pb-3 last:pb-0 border-b border-dashed border-gray-100 last:border-none"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="bg-[#EEF5F0] text-[#3D6A4B] text-[9px] font-bold px-1.5 py-0.5 rounded font-mono shrink-0 mt-0.5">
                            {slot.time}
                          </span>
                          <button
                            onClick={() => toggleSlotExpand(slotKey)}
                            className="text-gray-400 hover:text-[#3D6A4B] transition-colors shrink-0"
                          >
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        <h4 className="font-bold text-xs text-[#1A202C] mt-1.5 leading-snug">
                          {slot.title}
                        </h4>

                        {/* Description (expanded or default snippet) */}
                        <p className={`text-[11px] text-[#718096] leading-relaxed mt-1 ${isExpanded ? "" : "line-clamp-2"}`}>
                          {slot.desc}
                        </p>

                        {/* Extra details when expanded */}
                        {isExpanded && (
                          <div className="mt-2.5 p-2.5 bg-[#FBF9F6] rounded-lg space-y-1 border border-[#E2D9CF] text-[10px] text-[#2D3748] animate-fadeIn">
                            {slot.notes && (
                              <div className="text-red-600 font-semibold bg-red-50/50 p-1.5 rounded border border-red-100 mb-1.5">
                                <span className="font-bold">🚨 주의:</span> {slot.notes}
                              </div>
                            )}
                            <div>
                              <span className="font-bold text-[#718096]">📍 거점 숙소:</span> {slot.lodging}
                            </div>
                            <div>
                              <span className="font-bold text-[#718096]">🚗 주요 교통:</span> {slot.transp}
                            </div>
                            <div>
                              <span className="font-bold text-[#718096]">💰 예산/경비:</span> {slot.budget}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Day Footer Summaries */}
                <div className="bg-[#FBF9F6] p-3.5 border-t border-[#E2D9CF] text-[10px] text-[#718096] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">
                      <strong className="text-[#4A5568]">오늘 숙소:</strong> {representativeLodging}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="truncate">
                      <strong className="text-[#4A5568]">교통 수단:</strong> {representativeTransp}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
