import { KEYS, readJSON, writeJSON } from "../utils/storage";

export function saveRun(run) {
  const runs = readJSON(KEYS.RUNS, []);
  writeJSON(KEYS.RUNS, [run, ...runs].slice(0, 20));
}

export function getRuns() {
  return readJSON(KEYS.RUNS, []);
}