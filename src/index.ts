import express from "express";
import { AppDataSource } from "./datasource/datasource";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./swagger/swagger_docs";
import cors from "cors";
import allRoute from "./router";
import morgan from "morgan";
import cron from "node-cron";
import { firebaseNotificationService } from "./firebase/firebase.notification.service";
import routeLimiter, { testthing } from "./function/routelimite";
import http from "http";
import { Server } from "socket.io";
import { ChatController } from "./modules/socket/socket.controller";
import chatRoutes from "./modules/socket/socket.route";
const app = express();

app.use(express.json());
const port = 3006;
app.use(cors());
app.use(morgan("dev"));

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
