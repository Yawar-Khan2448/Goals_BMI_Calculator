# Google Play Data Safety — Developer Checklist

This file is guidance for completing the Play Console Data Safety form. The final declarations must match the exact production build you publish.

## Suggested declarations for the current architecture

### Location
- The running tracker uses device GPS/location while the feature is actively used.
- Declare location collection only if the final Android build requests and uses location permission.
- Purpose: App functionality / fitness or running tracking.
- If data remains only on-device and is not transmitted off-device, review the Play Console option for processing that occurs only on the device.

### Health / fitness information
BMI values, height, weight, running distance and route data may be considered health/fitness or personal data depending on Google's current classification and the exact implementation.
Declare data categories accurately according to the current Play Console questionnaire.

### Data sharing
The current source does not intentionally send BMI or route data to a developer-operated backend.
Do not claim data is "not collected" if the final build or any added SDK transmits it.

### Deletion
Users can delete locally stored data by clearing app storage or uninstalling the app.
If a future version introduces account/server data, add an in-app deletion flow and update the Play Console declaration.

## Important
The developer publishing the app is responsible for the final Data Safety answers. Verify every answer against the final release build and current Google Play policy before submission.
