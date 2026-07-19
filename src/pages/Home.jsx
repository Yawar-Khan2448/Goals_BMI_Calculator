import React, { useState } from "react";
import { Activity, BarChart3, Footprints, History, HeartPulse, RotateCcw, UserRound, Weight } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { calculateBMI } from "../utils/bmi";
import { saveBMI } from "../services/bmiService";

export default function Home({ onNavigate }) {
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("70");
  const [result, setResult] = useState(null);

  function calculate() {
    const data = calculateBMI(height, weight);
    if (!data) return;
    const entry = { ...data, height: Number(height), weight: Number(weight), date: new Date().toISOString() };
    setResult(entry);
    saveBMI(entry);
  }

  return <>
    <section className="hero glass-card">
      <div className="hero-icon"><HeartPulse size={35}/></div>
      <div className="hero-copy"><h1>BMI Calculator</h1><p>Calculate your Body Mass Index and track your health journey.</p></div>
      <span className="offline-chip"><i/> Offline Ready</span>
    </section>

    <div className="dashboard-grid">
      <GlassCard className="calculator-card">
        <div className="card-heading"><Activity/><div><h2>Your measurements</h2><p>Enter your details below</p></div></div>
        <label>Height (cm)</label>
        <div className="field"><UserRound size={17}/><input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="175"/></div>
        <label>Weight (kg)</label>
        <div className="field"><Weight size={17}/><input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="70"/></div>
        <button className="primary-btn" onClick={calculate}>CALCULATE BMI</button>
        <button className="ghost-btn" onClick={()=>{setHeight("");setWeight("");setResult(null)}}><RotateCcw size={15}/> Reset</button>
      </GlassCard>

      <GlassCard className="result-card">
        {!result ? <div className="result-empty"><HeartPulse size={48}/><h3>Your BMI</h3><p>Calculate to view your result.</p></div> :
          <><span className="eyebrow">YOUR BMI</span><strong className={`bmi-value ${result.className}`}>{result.bmi}</strong>
          <span className={`category ${result.className}`}>{result.label}</span>
          <div className="meter"><span style={{left:`${Math.min(96,Math.max(4,result.bmi*2.4))}%`}}/></div>
          <p className="medical-note">This app is for informational purposes only and not a substitute for professional medical advice.</p></>}
      </GlassCard>
    </div>

    <div className="feature-grid">
      <button className="feature glass-card" onClick={()=>onNavigate("chart")}><BarChart3/><strong>BMI Chart</strong><span>See healthy BMI ranges</span></button>
      <button className="feature glass-card" onClick={()=>onNavigate("run")}><Footprints/><strong>Run Tracker</strong><span>Track your run offline</span></button>
      <button className="feature glass-card" onClick={()=>onNavigate("history")}><History/><strong>History</strong><span>Last 10 BMI results</span></button>
    </div>
  </>;
}