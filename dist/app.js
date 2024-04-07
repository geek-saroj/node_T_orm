"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const datasource_1 = require("./datasource/datasource");
const user_route_1 = __importDefault(require("./modules/users/user.route"));
const service_route_1 = __importDefault(require("./modules/service/service.route"));
const subservice_route_1 = __importDefault(require("./modules/service/subservice/subservice.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.use((0, cors_1.default)());
datasource_1.AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render('index');
});
app.use('/users', user_route_1.default);
app.use('/api', service_route_1.default);
app.use('/api/sub', subservice_route_1.default);
app.post("/testparam/:id", (req, res) => {
    const { id } = req.params;
    console.log("param id is :", id);
    res.send(id);
});
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map