import express from "express";
import { AppDataSource } from "./datasource/datasource";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./swagger/swagger_docs";
import cors from "cors";
import allRoute from "./router";
import morgan from "morgan";
import cron from "node-cron";
import { firebaseNotificationService } from "./firebase/firebase.notification.service";
const app = express();

app.use(express.json());
const port = 3000;
app.use(cors());
app.use(morgan("dev"));

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
});

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/testjson", (req, res) => {
  console.log("req.body is", req.body);
  //     const payloadSize = req.get('content-length');
  //   console.log('Payload size:', payloadSize);

  const payloadSizeBytes: number = parseInt(req.get("content-length") || "0");

  // Convert bytes to megabytes
  const payloadSizeMB: number = payloadSizeBytes / (1024 * 1024);

  console.log("Payload size:", payloadSizeMB, "MB");
  res.send(req.body);
});
// app.use(express.static('public'));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

// app.use('/users',authRoute)
// app.use('/api', servicerouter)
// app.use('/api/sub',subserviceRoute)
// app.use('/api/location',locationRoute)
// cron.schedule('* * * * *', async () => {
//     console.log('running a task every minute');
// })
app.use("/api", allRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.post("/testparam/:id", (req, res) => {
  const { id } = req.params;
  console.log("param id is :", id);
  res.send(id);
});

app.post("/sendnotification", async (req, res, next) => {
  try {
    const { token, title, body, data } = req.body;
    const result = await firebaseNotificationService.sendNotification({
      notification: {
        title,
        body,
      },
      token,
      data,
    });

    res.status(200).send(`Notification sent successfully to token: ${result}`);
  } catch (error) {
    next(error);
  }
});



// app.get('/welcome', (req, res) => {
//     console.log("req user is ", req.user);
//     res.send('Hello World!');
//   })

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
