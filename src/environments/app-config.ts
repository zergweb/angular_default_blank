  import { environment } from './environment.dev';

  export let APP_CONFIG: AppConfig = {
      BASE_API_URL: environment.BASE_API_URL
  };

  export interface AppConfig {
    BASE_API_URL: string;
  }
