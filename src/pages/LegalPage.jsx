import React from "react";
import GlassCard from "../components/GlassCard";
import { Info, LockKeyhole, ShieldCheck } from "lucide-react";

const content = {
  about: {
    icon: Info, title:"About Us",
    body:<><p><strong>Goals_BMI_Calculator</strong> is an offline-first health and running utility.</p><p>It helps you calculate BMI, review BMI categories, save your latest ten results, and record running activity using your device GPS.</p><p>Your health data is stored locally on your device.</p><p>Version 1.0.0</p></>
  },
  privacy: {
    icon: LockKeyhole, title:"Privacy Policy",
    body:<>
      <p>Tap the button below to read our full Privacy Policy:</p>
      <a 
        href="https://yawar-khan2448.github.io/goals-bmi-privacy/privacy.html" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '12px 24px', 
          background: '#007bff', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '8px',
          fontWeight: 'bold',
          marginTop: '10px'
        }}
      >
        View Privacy Policy
      </a>
    </>,
  },
  disclaimer: {
    icon: ShieldCheck, title:"Disclaimer",
    body:<><p><strong>This app is for informational purposes only and not a substitute for professional medical advice.</strong></p><p>BMI is a general screening tool and does not diagnose disease or fully describe individual health.</p><p>Always consult a qualified healthcare professional for medical advice, diagnosis, or treatment.</p></>
  }
};

export default function LegalPage({type}) {
  const x=content[type], Icon=x.icon;
  return <GlassCard className="page-card"><div className="page-heading"><Icon/><div><h1>{x.title}</h1><p>Goals_BMI_Calculator</p></div></div><div className="prose">{x.body}</div></GlassCard>;
}