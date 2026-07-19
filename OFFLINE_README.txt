GOALS_BMI_CALCULATOR — OFFLINE BUILD

This version is designed to work without an internet connection after the web assets are built.
There are NO runtime Google Fonts requests.

Run:
  npm install
  npm run build
  npm run preview

For Android:
  npm install
  npm run build
  npx cap add android
  npx cap sync android
  npx cap open android

Important:
- The app UI, BMI calculator, history, dark mode, legal pages, rain/water animations,
  and GPS run recording are local/offline.
- The running tracker records GPS points locally.
- The included map view is an offline visual map-style canvas, not downloadable geographic
  OSM/Google tiles. Real geographic offline tiles require bundled map data and will increase size.
- Do not open the source index.html with file://. Vite/Capacitor must serve the app.
