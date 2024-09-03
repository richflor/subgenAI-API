import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config();

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
    PORT: number | undefined;
    DB_HOST: string | undefined;
    DB_USER: string | undefined;
    DB_PASSWORD: string | undefined;
    DB_PORT: number | undefined;
    DB_NAME: string | undefined;
    LOGGING: boolean ;
    DB_SCHEMA_SYNC: boolean;
    ENV: string | undefined;
}

interface Config {
    PORT: number;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_PORT: number;
    DB_NAME: string;
    LOGGING: boolean;
    DB_SCHEMA_SYNC: boolean;
    ENV: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    DB_HOST: process.env.DB_HOST ? process.env.DB_HOST : undefined,
    DB_USER: process.env.DB_USER ? process.env.DB_USER : undefined,
    DB_PASSWORD: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "",
    DB_NAME: process.env.DB_NAME ? process.env.DB_NAME : undefined,
    DB_SCHEMA_SYNC: process.env.DB_SCHEMA_SYNC === "true" ? true : false,
    LOGGING: process.env.LOGGING === "true" ? true : false,
    ENV: process.env.ENV ? process.env.ENV : "dev"
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const rawConfig = getConfig();

const config = getSanitzedConfig(rawConfig);

export default config;
