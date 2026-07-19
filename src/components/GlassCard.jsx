import React from "react";
export default function GlassCard({ children, className="", onClick }) {
  return <div onClick={onClick} className={`glass-card ${className}`}>{children}</div>;
}