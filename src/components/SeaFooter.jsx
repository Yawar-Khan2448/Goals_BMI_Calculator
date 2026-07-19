import React from "react";
import { Waves } from "lucide-react";

export default function SeaFooter() {
  return <footer className="sea-footer">
    <div className="sea-wave wave-a"/><div className="sea-wave wave-b"/>
    <div className="sea-footer-content"><Waves size={18}/> <span>Stay healthy • Keep moving • Reach your goals</span></div>
  </footer>;
}