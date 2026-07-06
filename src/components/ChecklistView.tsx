import React, { useState, useEffect } from "react";
import { initialChecklistItems, checklistCategories } from "../data";
import { ChecklistItem } from "../types";
import { 
  FileText, 
  Shirt, 
  Sun, 
  Plug, 
  HeartPulse, 
  Compass, 
  Plus, 
  Trash2, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function ChecklistView() {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [customText, setCustomText] = useState("");
  const [customCat, setCustomCat] = useState("documents");
  const [customCritical, setCustomCritical] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");

  const LOCAL_STORAGE_KEY = "dolomites_master_checklist_2026";

  // Load checklist
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        setItems(initialChecklistItems);
      }
    } else {
      setItems(initialChecklistItems);
    }
  }, []);

  // Save checklist helper
  const saveItems = (updatedItems: ChecklistItem[]) => {
    setItems(updatedItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const toggleItem = (id: string) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveItems(updated);
  };

  const deleteItem = (id: string) => {
    const updated = items.filter(item => item.id !== id);
    saveItems(updated);
  };

  const addCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customText.trim()) return;

    const newItem: ChecklistItem = {
      id: "custom-" + Date.now(),
      category: customCat,
      text: customText.trim(),
      checked: false,
      critical: customCritical
    };

    saveItems([...items, newItem]);
    setCustomText("");
    setCustomCritical(false);
  };

  const resetToDefaults = () => {
    if (window.confirm("정말로 준비물 체크리스트를 기본값으로 초기화하시겠습니까?")) {
      saveItems(initialChecklistItems);
    }
  };

  // Stats
  const totalCount = items.length;
  const checkedCount = items.filter(i => i.checked).length;
  const progressPercent = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

  // Encouraging feedback depending on percent
  const getProgressFeedback = () => {
    if (progressPercent === 0) {
      return "아직 짐 싸기 전이에요! 차근차근 중요한 서류부터 가방에 넣어보세요.";
    } else if (progressPercent < 40) {
      return "출발 준비 중! 여권, 면허증 등 핵심 금융/필수 행정 서류가 확보되었는지 확인하세요.";
    } else if (progressPercent < 80) {
      return "알차게 준비 중! 산악 뇌우와 고지대 추위에 대비한 바람막이와 자외선 차단 대책도 필수입니다.";
    } else if (progressPercent < 100) {
      return "거의 완벽해요! 아들과의 로드트립 짐싸기 완성이 코앞입니다. 렌터카 안전도구들을 점검하세요.";
    } else {
      return "🎉 완벽한 준비 완료! 아들과의 안전하고 특별한 이태리 북부 14박 15일 가방 완성!";
    }
  };

  // Map icon name to Lucide component
  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText": return <FileText className="w-4 h-4" />;
      case "Shirt": return <Shirt className="w-4 h-4" />;
      case "Sun": return <Sun className="w-4 h-4" />;
      case "Plug": return <Plug className="w-4 h-4" />;
      case "HeartPulse": return <HeartPulse className="w-4 h-4" />;
      default: return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#2D3748]">
      {/* Left panel: Stats and Custom form */}
      <div className="lg:col-span-1 space-y-6">
        {/* Progress box */}
        <div className="bg-white rounded-xl p-5 border border-[#E2D9CF] shadow-sm sticky top-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider">
              전체 준비 진행률
            </span>
            <span className="text-xl font-extrabold text-[#3D6A4B] font-mono">
              {progressPercent}%
            </span>
          </div>

          {/* Custom Animated Progress Bar */}
          <div className="w-full bg-[#FBF9F6] rounded-lg h-2.5 overflow-hidden border border-[#E2D9CF]">
            <div 
              style={{ width: `${progressPercent}%` }}
              className="bg-[#3D6A4B] h-full rounded-full transition-all duration-500 ease-out"
            ></div>
          </div>

          <p className="text-[11px] text-[#718096] mt-3 leading-relaxed text-center font-medium bg-[#FBF9F6] p-2.5 rounded-lg border border-[#E2D9CF]">
            {getProgressFeedback()}
          </p>

          <div className="mt-4 p-3.5 bg-[#EEF5F0] rounded-lg border border-[#3D6A4B]/20 text-[11px] text-[#3D6A4B] leading-relaxed space-y-1.5">
            <h4 className="font-extrabold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              돌로미티 7월 기후 및 주의사항
            </h4>
            <p className="font-medium text-[#2D3748]/90">
              알프스 고산 지대는 한낮 자외선이 무척 무섭고 기습 뇌우가 잦습니다. 가벼운 기모 플리스, 방수 바람막이, 챙 넓은 버킷햇, 비치타올은 절대 빠뜨리지 마세요!
            </p>
          </div>
        </div>

        {/* Custom Item Form */}
        <div className="bg-white rounded-xl p-5 border border-[#E2D9CF] shadow-sm">
          <h4 className="text-[10px] font-bold text-[#718096] uppercase mb-4 tracking-wider">
            나만의 준비물 추가하기
          </h4>
          <form onSubmit={addCustomItem} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-[#A0AEC0] mb-1">준비물 명칭</label>
              <input
                type="text"
                placeholder="예: 보조 안경, 삼각대, 선글라스"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full px-3 py-2 border border-[#E2D9CF] rounded-lg text-xs focus:ring-1 focus:ring-[#3D6A4B] focus:outline-none focus:border-[#3D6A4B] bg-[#FBF9F6]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-[#A0AEC0] mb-1">카테고리</label>
                <select
                  value={customCat}
                  onChange={(e) => setCustomCat(e.target.value)}
                  className="w-full px-2 py-2 border border-[#E2D9CF] rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3D6A4B]"
                >
                  {Object.entries(checklistCategories).map(([key, cat]) => (
                    <option key={key} value={key}>{cat.title}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-center mt-4">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={customCritical}
                    onChange={(e) => setCustomCritical(e.target.checked)}
                    className="w-3.5 h-3.5 rounded text-[#3D6A4B] border-gray-300 focus:ring-[#3D6A4B] focus:outline-none"
                  />
                  <span className="text-xs font-bold text-red-500">필수 항목</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#3D6A4B] hover:bg-[#3D6A4B]/90 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              준비물 추가
            </button>
          </form>
        </div>

        {/* Global actions */}
        <button
          onClick={resetToDefaults}
          className="w-full py-2 bg-white border border-[#E2D9CF] hover:bg-[#FBF9F6] text-[#718096] font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          상태 및 추가 항목 리셋
        </button>
      </div>

      {/* Right panel: Active checklists grouped by categories */}
      <div className="lg:col-span-2 space-y-4">
        {/* Quick Category filter tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveCategoryFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap border ${
              activeCategoryFilter === "all"
                ? "bg-[#3D6A4B] text-white border-[#3D6A4B] shadow-sm"
                : "bg-white text-[#718096] border-[#E2D9CF] hover:bg-gray-50"
            }`}
          >
            전체 ({items.length})
          </button>
          {Object.entries(checklistCategories).map(([key, cat]) => {
            const count = items.filter(i => i.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setActiveCategoryFilter(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap border ${
                  activeCategoryFilter === key
                    ? "bg-[#3D6A4B] text-white border-[#3D6A4B] shadow-sm"
                    : "bg-white text-[#718096] border-[#E2D9CF] hover:bg-gray-50"
                }`}
              >
                {cat.title} ({count})
              </button>
            );
          })}
        </div>

        {/* Category groups */}
        {Object.entries(checklistCategories)
          .filter(([key]) => activeCategoryFilter === "all" || activeCategoryFilter === key)
          .map(([key, cat]) => {
            const catItems = items.filter(i => i.category === key);
            if (catItems.length === 0 && activeCategoryFilter !== "all") {
              return (
                <div key={key} className="bg-white rounded-xl p-6 border border-[#E2D9CF] shadow-sm text-center">
                  <HelpCircle className="w-8 h-8 text-[#CBD5E0] mx-auto mb-2" />
                  <p className="text-[#718096] text-xs font-medium">이 카테고리에 준비물이 없습니다.</p>
                </div>
              );
            }
            if (catItems.length === 0) return null;

            return (
              <div key={key} className="bg-white rounded-xl p-4 border border-[#E2D9CF] shadow-sm">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#E2D9CF]">
                  <span className={`p-1.5 rounded text-xs border ${cat.color}`}>
                    {renderCategoryIcon(cat.icon)}
                  </span>
                  <h3 className="font-extrabold text-xs text-[#1A202C]">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] bg-[#EEF5F0] text-[#3D6A4B] px-1.5 py-0.5 rounded font-mono font-bold border border-[#3D6A4B]/10">
                    {catItems.filter(i => i.checked).length} / {catItems.length}
                  </span>
                </div>

                <div className="space-y-2">
                  {catItems.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-start gap-3 py-1 text-xs text-[#2D3748] hover:text-[#1A202C] transition-colors group"
                    >
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => toggleItem(item.id)}
                        className="w-4 h-4 rounded text-[#3D6A4B] border-gray-300 focus:ring-[#3D6A4B] mt-0.5 cursor-pointer shrink-0"
                      />
                      <span
                        onClick={() => toggleItem(item.id)}
                        className={`flex-1 cursor-pointer select-none leading-relaxed ${
                          item.checked ? "line-through text-[#A0AEC0] font-light" : "font-medium"
                        }`}
                      >
                        {item.text}
                        {item.critical && (
                          <span className="ml-1.5 inline-flex items-center gap-0.5 text-[9px] font-bold text-red-500 uppercase shrink-0 bg-red-50 px-1 py-0.2 rounded border border-red-100">
                            <AlertTriangle className="w-2.5 h-2.5" />
                            필수
                          </span>
                        )}
                      </span>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="항목 삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
