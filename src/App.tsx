import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  ClipboardList, 
  Map, 
  Table, 
  Hotel, 
  Mountain, 
  Car, 
  TrendingUp, 
  Compass,
  ArrowRight,
  Sparkles
} from "lucide-react";

import Header from "./components/Header";
import ItineraryView from "./components/ItineraryView";
import ChecklistView from "./components/ChecklistView";
import MapView from "./components/MapView";
import SpreadsheetView from "./components/SpreadsheetView";
import AccommodationsView from "./components/AccommodationsView";
import LogisticsView from "./components/LogisticsView";
import ActivitiesView from "./components/ActivitiesView";
import AnalysisView from "./components/AnalysisView";

type TabId = "itinerary" | "checklist" | "map" | "spreadsheet" | "accommodations" | "hiking" | "logistics" | "analysis";

interface TabItem {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("itinerary");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastId, setToastId] = useState<number | null>(null);

  const showToast = (message: string) => {
    if (toastId) {
      clearTimeout(toastId);
    }
    setToastMessage(message);
    const id = window.setTimeout(() => {
      setToastMessage(null);
    }, 4000);
    setToastId(id);
  };

  const tabs: TabItem[] = [
    { id: "itinerary", label: "종합 일정표", icon: <Calendar className="w-4 h-4" /> },
    { id: "checklist", label: "준비물 체크", icon: <ClipboardList className="w-4 h-4" /> },
    { id: "map", label: "구글 내지도", icon: <Map className="w-4 h-4" /> },
    { id: "spreadsheet", label: "구글 시트 연동", icon: <Table className="w-4 h-4" /> },
    { id: "accommodations", label: "숙소 현황", icon: <Hotel className="w-4 h-4" /> },
    { id: "hiking", label: "하이킹 코스", icon: <Mountain className="w-4 h-4" /> },
    { id: "logistics", label: "렌터카 & ZTL", icon: <Car className="w-4 h-4" /> },
    { id: "analysis", label: "예산 & 패스 절약", icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const renderActiveView = () => {
    switch (activeTab) {
      case "itinerary":
        return <ItineraryView />;
      case "checklist":
        return <ChecklistView />;
      case "map":
        return <MapView />;
      case "spreadsheet":
        return <SpreadsheetView onShowToast={showToast} />;
      case "accommodations":
        return <AccommodationsView />;
      case "logistics":
        return <LogisticsView />;
      case "hiking":
        return <ActivitiesView />;
      case "analysis":
        return <AnalysisView />;
      default:
        return <ItineraryView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-gray-800 font-sans flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-900 pb-12">
      {/* Container wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Elegant top decoration */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400">
            <Compass className="w-4 h-4 text-[#3d6a4b] animate-spin-slow" />
            <span>JUNG FAMILY 2026</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#3D6A4B] bg-[#EEF5F0] px-2.5 py-1 rounded-full border border-[#3D6A4B]/20">
            <Sparkles className="w-3 h-3" />
            <span>ROAD TRIP PLANNER</span>
          </div>
        </div>

        {/* Global Travel Header */}
        <Header />

        {/* Dynamic Navigation Tabs */}
        <div className="my-6 overflow-hidden bg-white rounded-xl p-1.5 border border-[#E2D9CF] shadow-sm">
          <div className="flex gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap flex-1 ${
                    isActive 
                      ? "text-white" 
                      : "text-[#556275] hover:text-gray-900 hover:bg-gray-50/70"
                  }`}
                >
                  {/* Sliding Background selection indicator with motion */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-[#3D6A4B] rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.icon}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Animated View Slot */}
        <main className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
            >
              {renderActiveView()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Bar: Status Indicators */}
        <footer className="mt-8 pt-4 border-t border-[#E2D9CF] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#A0AEC0] font-bold tracking-tight mb-8">
          <div className="flex flex-wrap gap-x-6 gap-y-1 justify-center sm:justify-start">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> OFFLINE SYNC ACTIVE</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 2026 REGULATION DATA</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> GPS COORDINATES LOADED</span>
          </div>
          <p className="text-center sm:text-right uppercase">© 2026 INTERACTIVE ROADTRIP PLANNER // JUNG FAMILY</p>
        </footer>
      </div>

      {/* Floating Animated Toast Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-bold px-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-800 w-[90%] max-w-md"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="leading-relaxed flex-1">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
