import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import SideDrawer from "./components/SideDrawer";
import BottomNav from "./components/BottomNav";
import SeaFooter from "./components/SeaFooter";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import RunTracker from "./pages/RunTracker";
import History from "./pages/History";
import More from "./pages/More";
import LegalPage from "./pages/LegalPage";
import { KEYS } from "./utils/storage";

export default function App() {
  const [page,setPage]=useState("home");
  const [drawer,setDrawer]=useState(false);
  const [dark,setDark]=useState(()=>localStorage.getItem(KEYS.THEME)==="dark");

  useEffect(()=>{
    document.documentElement.dataset.theme=dark?"dark":"light";
    localStorage.setItem(KEYS.THEME,dark?"dark":"light");
  },[dark]);

  const nav=p=>{setPage(p);setDrawer(false)};
  return <div className="app-shell">
    <div className="rain-layer"/><div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <TopBar dark={dark} onToggleDark={()=>setDark(v=>!v)} onOpenMenu={()=>setDrawer(true)}/>
    <SideDrawer open={drawer} page={page} onNavigate={nav} onClose={()=>setDrawer(false)}/>
    <main className="page-container">
      {page==="home"&&<Home onNavigate={nav}/>}
      {page==="chart"&&<Chart/>}
      {page==="run"&&<RunTracker/>}
      {page==="history"&&<History/>}
      {page==="more"&&<More onNavigate={nav}/>}
      {["about","privacy","disclaimer"].includes(page)&&<LegalPage type={page}/>}
    </main>
    <SeaFooter/>
    <BottomNav page={page} onNavigate={nav}/>
  </div>;
}