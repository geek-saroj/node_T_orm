import { DataSource } from "typeorm";

export const createTenantDataSource = (tenantId: string) => {
    return new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "admin",
        database: `db_${tenantId}`, // Dynamic database name for each tenant
        synchronize: true,
        logging: false,
        entities: ["src/entities/**/*.ts"], // Adjust the path to your entities
        migrations: [],
        subscribers: [],
    });
};
