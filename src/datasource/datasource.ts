import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "node_T",
    synchronize: true,
    logging: false,
    entities: ["src/entites/**/*.ts"],
    migrations: [],
    subscribers: [],
})