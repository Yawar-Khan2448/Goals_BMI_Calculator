import React from "react";
import { Menu, Moon, Sun, HeartPulse } from "lucide-react";

export default function TopBar({ dark, onToggleDark, onOpenMenu }) {
  return <header className="topbar glass-card">
    <button className="icon-btn" onClick={onOpenMenu}><Menu/></button>
    <div className="top-brand">
      <div className="app-icon"><HeartPulse size={22}/></div>
      <div><strong>Goals_BMI_Calculator</strong><small>Health & Running</small></div>
    </div>
    <button className="icon-btn" onClick={onToggleDark}>{dark ? <Sun/> : <Moon/>}</button>
  </header>;
}