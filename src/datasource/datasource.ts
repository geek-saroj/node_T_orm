import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "password",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: ["src/entites/**/*.ts"],
    migrations: [],
    subscribers: [],
})