import React from "react";
import { BarChart3, Footprints, HeartPulse, History, MoreHorizontal } from "lucide-react";

const items = [
  ["home", HeartPulse, "Home"],
  ["chart", BarChart3, "Chart"],
  ["history", History, "History"],
  ["run", Footprints, "Run"],
  ["more", MoreHorizontal, "More"]
];

export default function BottomNav({ page, onNavigate }) {
  return <nav className="bottom-nav glass-card">
    {items.map(([id, Icon, label]) => (
      <button key={id} className={page === id ? "selected" : ""} onClick={() => onNavigate(id)}>
        <Icon size={18}/><span>{label}</span>
      </button>
    ))}
  </nav>;
}