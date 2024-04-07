"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: ["src/entites/**/*.ts"],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=datasource.js.map