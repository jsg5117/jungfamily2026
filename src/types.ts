export interface ItineraryItem {
  day: number;
  date: string;
  time: string;
  city: string;
  title: string;
  desc: string;
  lodging: string;
  transp: string;
  budget: string;
  notes: string;
}

export interface HikingItem {
  name: string;
  dist: string;
  time: string;
  diff: "쉬움" | "보통" | "어려움" | string;
  danger: "낮음" | "중간" | "높음" | string;
  tip: string;
}

export interface ChecklistItem {
  id: string;
  category: "documents" | "clothing" | "suncare" | "electronics" | "hygiene" | "etc" | string;
  text: string;
  checked: boolean;
  critical: boolean;
}

export interface AccommodationItem {
  name: string;
  koreanName: string;
  location: string;
  dateRange: string;
  type: "selected" | "parking" | "attention" | "dinner";
  typeText: string;
  details: string;
  extraInfo?: string;
}
