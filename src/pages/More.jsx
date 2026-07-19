import React from "react";
import { Info, LockKeyhole, ShieldCheck } from "lucide-react";
import GlassCard from "../components/GlassCard";

export default function More({ onNavigate }) {
  return <GlassCard className="page-card">
    <div className="page-heading"><Info/><div><h1>More</h1><p>About the app and legal information</p></div></div>
    <button className="more-row" onClick={()=>onNavigate("about")}><Info/><span>About Us</span></button>
    <button className="more-row" onClick={()=>onNavigate("privacy")}><LockKeyhole/><span>Privacy Policy</span></button>
    <button className="more-row" onClick={()=>onNavigate("disclaimer")}><ShieldCheck/><span>Disclaimer</span></button>
  </GlassCard>;
}