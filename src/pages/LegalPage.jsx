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
    body:<><p>We respect your privacy. This app does not require an account and does not intentionally upload your BMI or running records to a server.</p><p>When you use running tracking, your device location may be accessed to record your route. Route points are stored locally on your device.</p><p>You can remove locally stored information by clearing the application's data from your device settings.</p></>
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