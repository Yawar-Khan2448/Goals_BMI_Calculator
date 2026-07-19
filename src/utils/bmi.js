export function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", className: "underweight", color: "#2563EB" };
  if (bmi < 25) return { label: "Normal", className: "normal", color: "#16A34A" };
  if (bmi < 30) return { label: "Overweight", className: "overweight", color: "#F97316" };
  return { label: "Obese", className: "obese", color: "#DC2626" };
}

export function calculateBMI(heightCm, weightKg) {
  const h = Number(heightCm) / 100;
  const w = Number(weightKg);
  if (!h || !w || h <= 0 || w <= 0) return null;
  const bmi = Number((w / (h * h)).toFixed(1));
  return { bmi, ...getBMICategory(bmi) };
}