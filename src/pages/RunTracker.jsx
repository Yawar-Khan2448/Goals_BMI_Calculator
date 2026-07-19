import React, { useEffect, useState } from "react";
import { Footprints, MapPin, Play, Square, TimerReset } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { haversineKm, formatDuration } from "../utils/geo";
import { saveRun } from "../services/runService";

export default function RunTracker() {
  const [running,setRunning]=useState(false), [seconds,setSeconds]=useState(0), [distance,setDistance]=useState(0), [points,setPoints]=useState([]), [error,setError]=useState("");

  useEffect(()=>{
    if(!running) return;
    const timer=setInterval(()=>setSeconds(s=>s+1),1000);
    let watchId;
    if(navigator.geolocation){
      watchId=navigator.geolocation.watchPosition(pos=>{
        const next={lat:pos.coords.latitude,lng:pos.coords.longitude,time:Date.now()};
        setPoints(prev=>{
          const last=prev[prev.length-1];
          if(last){
            const delta=haversineKm(last,next);
            if(delta>0.003) setDistance(d=>d+delta);
          }
          return [...prev,next];
        });
      },e=>setError(e.message),{enableHighAccuracy:true,maximumAge:3000,timeout:15000});
    } else setError("GPS is not supported on this device.");
    return ()=>{clearInterval(timer); if(watchId!==undefined) navigator.geolocation.clearWatch(watchId);};
  },[running]);

  const start=()=>{setError("");setPoints([]);setDistance(0);setSeconds(0);setRunning(true)};
  const stop=()=>{setRunning(false); if(seconds||distance) saveRun({distance,seconds,points,date:new Date().toISOString()})};

  return <GlassCard className="page-card">
    <div className="page-heading"><Footprints/><div><h1>Run Tracker</h1><p>Offline GPS route recording</p></div></div>
    <div className="offline-map">
      <div className="map-roads"/>
      <div className="map-water"/>
      <MapPin className="map-center" size={38}/>
      <span className="map-badge">OFFLINE MAP MODE</span>
      <div className="route-preview"><span/><i/><b/><em/></div>
    </div>
    <div className="run-stats">
      <div><span>Distance</span><strong>{distance.toFixed(2)} km</strong></div>
      <div><span>Duration</span><strong>{formatDuration(seconds)}</strong></div>
      <div><span>GPS Points</span><strong>{points.length}</strong></div>
    </div>
    {error && <p className="error">{error}</p>}
    {!running ? <button className="primary-btn" onClick={start}><Play/> START RUN</button> : <button className="stop-btn" onClick={stop}><Square/> STOP & SAVE</button>}
    <p className="muted">GPS coordinates are stored locally. Internet is not required to record the run. A full geographic offline tile database can be added later if desired.</p>
  </GlassCard>;
}