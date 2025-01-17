import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "admin",
    database: "node_t_orm",
    synchronize: true,
    logging: false,
    entities: ["src/entites/**/*.ts"],
    migrations: [],
    subscribers: [],
})