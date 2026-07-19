import React from "react";
import { BarChart3 } from "lucide-react";
import GlassCard from "../components/GlassCard";

const rows = [
  ["< 18.5","Underweight","blue"],
  ["18.5 – 24.9","Normal","green"],
  ["25.0 – 29.9","Overweight","orange"],
  ["30.0+","Obese","red"]
];

export default function Chart() {
  return <GlassCard className="page-card">
    <div className="page-heading"><BarChart3/><div><h1>BMI Chart</h1><p>Understand your Body Mass Index</p></div></div>
    <div className="bmi-chart">
      {rows.map(([range,label,color])=><div className={`chart-row ${color}`} key={label}><span>{range}</span><strong>{label}</strong></div>)}
    </div>
    <div className="formula"><h3>BMI Formula</h3><p>BMI = weight (kg) ÷ height (m)²</p></div>
    <p className="medical-note">BMI is a general screening measure and may not accurately represent individual body composition.</p>
  </GlassCard>;
}