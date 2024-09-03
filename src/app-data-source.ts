import { DataSource } from "typeorm"
import config from "./config";

const DB_PORT = config.DB_PORT;
const DB_HOST = config.DB_HOST;
const DB_USER = config.DB_USER;
const DB_PASSWORD = config.DB_PASSWORD;
const DB_NAME = config.DB_NAME;
const DB_SCHEMA_SYNC = config.DB_SCHEMA_SYNC;
const LOGGING = config.LOGGING;

console.log(typeof DB_PORT)

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: ["src/models/*.ts"],
    logging: LOGGING,
    synchronize: DB_SCHEMA_SYNC,
})