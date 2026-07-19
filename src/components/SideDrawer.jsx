import React from "react";
import { X, HeartPulse, BarChart3, Footprints, History, Info, LockKeyhole, ShieldCheck } from "lucide-react";

const items = [
  ["home", HeartPulse, "BMI Calculator"],
  ["chart", BarChart3, "BMI Chart"],
  ["run", Footprints, "Running Tracker"],
  ["history", History, "History"],
  ["about", Info, "About Us"],
  ["privacy", LockKeyhole, "Privacy Policy"],
  ["disclaimer", ShieldCheck, "Disclaimer"]
];

export default function SideDrawer({ open, page, onNavigate, onClose }) {
  if (!open) return null;
  return <div className="drawer-overlay" onClick={onClose}>
    <aside className="side-drawer glass-card" onClick={e => e.stopPropagation()}>
      <div className="drawer-header">
        <div className="brand-mini"><HeartPulse/><strong>Goals BMI</strong></div>
        <button className="icon-btn" onClick={onClose}><X/></button>
      </div>
      {items.map(([id, Icon, label]) => (
        <button key={id} className={`drawer-link ${page === id ? "active" : ""}`} onClick={() => onNavigate(id)}>
          <Icon size={19}/><span>{label}</span>
        </button>
      ))}
    </aside>
  </div>;
}