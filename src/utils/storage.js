export const KEYS = {
  BMI: "goals_bmi_history",
  RUNS: "goals_bmi_runs",
  THEME: "goals_bmi_theme",
  ONBOARDING: "goals_bmi_onboarding"
};

export function readJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}