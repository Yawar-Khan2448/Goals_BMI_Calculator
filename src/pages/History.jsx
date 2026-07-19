import React from "react";
import { History as HistoryIcon, Footprints } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { getBMIHistory } from "../services/bmiService";
import { getRuns } from "../services/runService";
import { formatDuration } from "../utils/geo";

export default function History() {
  const bmi = getBMIHistory();
  const runs = getRuns();
  return <GlassCard className="page-card">
    <div className="page-heading"><HistoryIcon/><div><h1>History</h1><p>Your recent health activity</p></div></div>
    <h3>BMI Results</h3>
    {bmi.length ? bmi.map((x,i)=><div className="history-row" key={i}><div><strong>{x.bmi}</strong><span className={`category ${x.className}`}>{x.label}</span></div><small>{x.weight} kg • {x.height} cm<br/>{new Date(x.date).toLocaleDateString()}</small></div>) : <p className="muted">No BMI results yet.</p>}
    <h3 className="section-gap"><Footprints size={18}/> Running Sessions</h3>
    {runs.length ? runs.map((x,i)=><div className="history-row" key={i}><div><strong>{x.distance.toFixed(2)} km</strong><span>{formatDuration(x.seconds)}</span></div><small>{new Date(x.date).toLocaleDateString()}</small></div>) : <p className="muted">No runs saved yet.</p>}
  </GlassCard>;
}