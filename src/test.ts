import dotenv from "dotenv";

dotenv.config();

const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_SCHEMA_SYNC = process.env.DB_SCHEMA_SYNC;
const LOGGING = process.env.LOGGING;

console.log(DB_SCHEMA_SYNC)