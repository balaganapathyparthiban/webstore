import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.bginnovate.webstore",
  appName: "webstore",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.0.104:3000",
    cleartext: true,
  },
};

export default config;
