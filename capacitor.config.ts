import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.yawar.bmi",
  appName: "Goals_BMI_Calculator",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    Geolocation: {
      permissions: ["location"]
    }
  },
  android: {
    backgroundColor: "#06152D"
  }
};

export default config;