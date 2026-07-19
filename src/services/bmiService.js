import { KEYS, readJSON, writeJSON } from "../utils/storage";

export function saveBMI(entry) {
  const history = readJSON(KEYS.BMI, []);
  writeJSON(KEYS.BMI, [entry, ...history].slice(0, 10));
}

export function getBMIHistory() {
  return readJSON(KEYS.BMI, []);
}

export function clearBMIHistory() {
  writeJSON(KEYS.BMI, []);
}