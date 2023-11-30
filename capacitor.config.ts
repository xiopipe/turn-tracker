import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'turn-tracker',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
