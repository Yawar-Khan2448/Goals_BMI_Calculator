# Play Store Release Checklist

## Before upload
[ ] Build a release AAB, not a debug APK.
[ ] Use a unique production signing key and keep the keystore private.
[ ] Verify application ID is com.yawar.bmi.
[ ] Verify app name is Goals_BMI_Calculator.
[ ] Test BMI calculations.
[ ] Test history persistence.
[ ] Test dark mode.
[ ] Test offline mode with airplane mode enabled.
[ ] Test GPS permission and run tracking.
[ ] Test location denial behavior.
[ ] Test Privacy Policy and Disclaimer screens.
[ ] Confirm no unexpected network requests.
[ ] Verify icons and splash screen.
[ ] Verify target SDK / compile SDK required by current Google Play policy.
[ ] Complete Data Safety form accurately.
[ ] Complete content rating questionnaire.
[ ] Complete App access questionnaire if applicable.
[ ] Add store listing and screenshots.
[ ] Add a valid privacy policy URL in Play Console if required.
[ ] Review Play Console warnings before production rollout.

## Build
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android

Then create a signed Android App Bundle (AAB) from Android Studio.

## Important
No source project can guarantee Play Store acceptance. Google reviews the actual release binary, declarations, permissions, store listing and current policy compliance.
