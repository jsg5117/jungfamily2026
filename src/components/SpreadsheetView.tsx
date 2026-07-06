import React, { useState, useMemo } from "react";
import { itineraryData } from "../data";
import { FileSpreadsheet, Copy, Download, Search, Info, AlertCircle } from "lucide-react";

interface SpreadsheetViewProps {
  onShowToast: (msg: string) => void;
}

export default function SpreadsheetView({ onShowToast }: SpreadsheetViewProps) {
  const [gridSearch, setGridSearch] = useState("");

  const filteredRows = useMemo(() => {
    return itineraryData.filter(item => {
      const term = gridSearch.toLowerCase();
      return (
        item.date.toLowerCase().includes(term) ||
        item.city.toLowerCase().includes(term) ||
        item.time.toLowerCase().includes(term) ||
        item.title.toLowerCase().includes(term) ||
        item.desc.toLowerCase().includes(term) ||
        item.lodging.toLowerCase().includes(term) ||
        item.transp.toLowerCase().includes(term) ||
        item.budget.toLowerCase().includes(term) ||
        item.notes.toLowerCase().includes(term)
      );
    });
  }, [gridSearch]);

  const handleCopyTSV = () => {
    let tsv = "순번\t일차\t날짜\t도시\t시간대\t일정 타이틀\t세부 경로 및 요약\t추천 숙소\t교통편\t예산 및 준비\t주의사항/비고\n";
    
    itineraryData.forEach((item, index) => {
      tsv += `${index + 1}\t${item.day}일차\t${item.date}\t${item.city}\t${item.time}\t${item.title}\t${item.desc}\t${item.lodging}\t${item.transp}\t${item.budget}\t${item.notes}\n`;
    });

    try {
      // Use standard textarea fallback as it's highly robust in sandbox iframes
      const textArea = document.createElement("textarea");
      textArea.value = tsv;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      onShowToast("📋 구글 시트용 복사가 완료되었습니다! 새로운 시트에 Ctrl+V 하시면 표 구조가 완벽히 들어갑니다.");
    } catch (err) {
      // Try fallback to modern clipboard if possible
      if (navigator.clipboard) {
        navigator.clipboard.writeText(tsv)
          .then(() => onShowToast("📋 구글 시트용 복사가 완료되었습니다!"))
          .catch(() => onShowToast("복사 실패. 수동 복사를 진행해 주세요."));
      } else {
        onShowToast("복사에 실패했습니다.");
      }
    }
  };

  const handleDownloadCSV = () => {
    let csv = "\uFEFF"; // UTF-8 BOM
    csv += "순번,일차,날짜,도시,시간대,일정 타이틀,세부 경로 및 요약,추천 숙소,교통편,예산 및 준비,주의사항\n";
    
    itineraryData.forEach((item, index) => {
      const cleanDesc = item.desc.replace(/"/g, '""');
      const cleanTitle = item.title.replace(/"/g, '""');
      const cleanLodging = item.lodging.replace(/"/g, '""');
      const cleanNotes = item.notes.replace(/"/g, '""');
      csv += `${index + 1},${item.day}일차,${item.date},${item.city},"${item.time}","${cleanTitle}","${cleanDesc}","${cleanLodging}","${item.transp}","${item.budget}","${cleanNotes}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "이태리_돌로미티_14박15일_일정계획_2026.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast("📥 CSV 다운로드가 성공적으로 완료되었습니다.");
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-[#E2D9CF] shadow-sm text-[#2D3748]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-5">
        <div>
          <h3 className="text-lg font-extrabold text-[#1A202C] flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-[#3D6A4B]" />
            구글 스프레드시트 데이터 연동
          </h3>
          <p className="text-xs text-[#718096] mt-1 font-medium">
            이 가상 시트의 데이터는 실제 구글 시트(Google Sheets)나 MS Excel에 완벽한 행/열 배치로 복사 붙여넣기 하실 수 있습니다.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          <button 
            onClick={handleCopyTSV} 
            className="flex-1 lg:flex-initial px-4 py-2 bg-[#3D6A4B] text-white rounded-lg text-xs font-bold hover:bg-[#3D6A4B]/90 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            구글 시트용 복사 (Ctrl+V용)
          </button>
          <button 
            onClick={handleDownloadCSV} 
            className="flex-1 lg:flex-initial px-4 py-2 bg-[#1A202C] text-white rounded-lg text-xs font-bold hover:bg-[#1A202C]/90 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            CSV 다운로드
          </button>
        </div>
      </div>

      <div className="bg-[#EEF5F0] border border-[#3D6A4B]/20 p-4 rounded-lg mb-5 text-xs text-[#3D6A4B] leading-relaxed">
        <strong className="font-extrabold block mb-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-[#3D6A4B]" />
          구글 시트(Google Sheets) 적용 꿀팁:
        </strong>
        <ol className="list-decimal pl-5 space-y-1 mt-1 text-[#2D3748] font-medium">
          <li>우측 상단의 <strong className="underline">구글 시트용 복사</strong> 버튼을 클릭합니다.</li>
          <li>새 크롬 브라우저 탭을 열고 주소창에 <strong className="bg-white px-1.5 py-0.5 rounded border border-[#E2D9CF] text-[11px]">sheets.new</strong>를 입력해 새로운 시트를 생성합니다.</li>
          <li>생성된 시트의 첫 번째 셀(<strong className="font-mono text-[#3D6A4B] font-bold">A1</strong>)을 마우스로 클릭하고 <strong className="bg-white px-1.5 py-0.5 rounded border border-[#E2D9CF]">Ctrl + V</strong>를 누르시면 자동으로 한글 셀이 완벽 매칭됩니다.</li>
        </ol>
      </div>

      {/* Grid search input */}
      <div className="mb-4 relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#A0AEC0]" />
        <input 
          type="text"
          placeholder="시트 표 내부 실시간 간편 검색..."
          value={gridSearch}
          onChange={(e) => setGridSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 border border-[#E2D9CF] rounded-lg text-xs bg-[#FBF9F6] focus:outline-none focus:ring-1 focus:ring-[#3D6A4B]"
        />
      </div>

      {/* Grid Container */}
      <div className="overflow-x-auto border border-[#E2D9CF] rounded-lg shadow-inner max-h-[550px] scrollbar-hide">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="sticky top-0 z-10 bg-[#EEF5F0] border-b border-[#E2D9CF]">
            <tr>
              <th className="w-12 text-center py-2 px-3 bg-gray-100 font-bold border-r border-b border-[#E2D9CF] text-gray-500">#</th>
              <th className="min-w-[80px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-r border-b border-[#E2D9CF] text-[#3D6A4B]">날짜</th>
              <th className="min-w-[100px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-r border-b border-[#E2D9CF] text-[#3D6A4B]">일정 도시</th>
              <th className="min-w-[120px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-r border-b border-[#E2D9CF] text-[#3D6A4B]">시간대</th>
              <th className="min-w-[200px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-r border-b border-[#E2D9CF] text-[#3D6A4B]">일정 타이틀</th>
              <th className="min-w-[300px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-r border-b border-[#E2D9CF] text-[#3D6A4B]">세부 경로 및 하이킹/관광 요약</th>
              <th className="min-w-[160px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-r border-b border-[#E2D9CF] text-[#3D6A4B]">거점 숙소</th>
              <th className="min-w-[130px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-r border-b border-[#E2D9CF] text-[#3D6A4B]">교통 / 렌터카</th>
              <th className="min-w-[130px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-r border-b border-[#E2D9CF] text-[#3D6A4B]">경비/예매 필수</th>
              <th className="min-w-[180px] py-2 px-3 bg-[#EEF5F0]/80 font-bold border-b border-[#E2D9CF] text-[#3D6A4B]">주의사항 & 꿀팁</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-150">
            {filteredRows.map((item, index) => (
              <tr key={index} className="hover:bg-[#FBF9F6] transition-colors">
                <td className="text-center bg-gray-100/50 font-mono text-[10px] text-gray-400 border-r border-[#E2D9CF] py-2 px-3">{index + 1}</td>
                <td className="font-semibold text-[#1A202C] border-r border-[#E2D9CF] py-2 px-3">{item.date} ({item.day}일차)</td>
                <td className="font-bold text-[#3D6A4B] border-r border-[#E2D9CF] py-2 px-3">{item.city}</td>
                <td className="font-semibold text-[#2D3748] border-r border-[#E2D9CF] py-2 px-3 font-mono">{item.time}</td>
                <td className="font-bold text-[#1A202C] border-r border-[#E2D9CF] py-2 px-3">{item.title}</td>
                <td className="text-[#718096] border-r border-[#E2D9CF] py-2 px-3 leading-relaxed">{item.desc}</td>
                <td className="text-[#2D3748] border-r border-[#E2D9CF] py-2 px-3">{item.lodging}</td>
                <td className="text-[#3D6A4B] font-bold border-r border-[#E2D9CF] py-2 px-3">{item.transp}</td>
                <td className="text-[#2D3748] border-r border-[#E2D9CF] py-2 px-3">{item.budget}</td>
                <td className="text-red-600 font-semibold py-2 px-3 flex items-center gap-1">
                  {item.notes && <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                  <span>{item.notes || "-"}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
