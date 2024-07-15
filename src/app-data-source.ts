import { DataSource } from "typeorm"
import sanitizedConfig from "./config";

const DB_PORT = sanitizedConfig.DB_PORT;
const DB_HOST = sanitizedConfig.DB_HOST;
const DB_USER = sanitizedConfig.DB_USER;
const DB_PASSWORD = sanitizedConfig.DB_PASSWORD;
const DB_NAME = sanitizedConfig.DB_NAME;
const DB_SCHEMA_SYNC = sanitizedConfig.DB_SCHEMA_SYNC;
const LOGGING = sanitizedConfig.LOGGING;

console.log(typeof DB_PORT)

export const myDataSource = new DataSource({
    type: "mariadb",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: ["src/schema/*.ts"],
    logging: LOGGING,
    synchronize: DB_SCHEMA_SYNC,
})