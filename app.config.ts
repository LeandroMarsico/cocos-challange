import 'dotenv/config';
import { ExpoConfig } from 'expo/config';

export default ({ config }: { config: ExpoConfig }): ExpoConfig => ({
  ...config,
  extra: {
    ...config.extra,
    API_BASE_URL: process.env.API_BASE_URL ?? '',
  },
});