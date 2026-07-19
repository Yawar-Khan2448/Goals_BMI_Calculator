# Goals_BMI_Calculator — Full Web APK Project

This project is a React + Vite + Capacitor implementation inspired by the supplied dashboard reference.

## Included
- Blue/white Material-style glass UI
- Rain animation background
- Animated sea/water footer
- BMI Calculator
- BMI result categories
- BMI Chart
- Last 10 BMI history
- Offline localStorage
- Light/Dark mode
- Offline GPS running recorder
- Local run history
- About Us
- Privacy Policy
- Disclaimer
- PWA service worker
- Capacitor Android configuration
- App ID: com.yawar.bmi

## Install
npm install

## Development
npm run dev

## Web production build
npm run build

## Android
npx cap add android
npm run android:sync
npm run android:open

## Release AAB
cd android
gradlew bundleRelease

Output:
android/app/build/outputs/bundle/release/app-release.aab

## Important
The supplied reference image contains a true geographic map. This project includes an offline-styled map canvas and real offline GPS recording. A fully geographic offline map requires bundled map tiles/vector data. This is intentionally separated because map data can substantially increase APK/AAB size.

For Play Store release:
1. Generate a signed AAB.
2. Replace placeholder icons with final production assets.
3. Configure adaptive icon and splash resources in the generated Android project.
4. Add a production privacy policy URL if required by your Play Console declaration.
5. Review location permission declarations because running tracking uses GPS.
