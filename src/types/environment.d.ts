export {};


declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number;
        DB_PORT: number;
        DB_USER: string;
        DB_HOST: string;
        DB_PASSWORD: string;
        DB_NAME: string;
        DB_SCHEMA_SYNC: "true" | "false";
        LOGGING: "true" | "false";
        JWT_ACCESS_SECRET: string;
        JWT_REFRESH_SECRET: string;
        ENV: 'test' | 'dev' | 'prod';
      }
    }
  }