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
import { generateJwt } from "./utils/function/jwtHelper";
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
  const data = [
    { userId: 12345, name: "John Doe", role: "admin" },
    { userId: 12346, name: "Jane Smith", role: "admin" },
    { userId: 12347, name: "Bob Johnson", role: "admin" },
    { userId: 12348, name: "Alice Davis", role: "admin" },
    { userId: 12349, name: "Charlie Brown", role: "admin" },
    { userId: 12350, name: "David White", role: "admin" },
    { userId: 12351, name: "Emily Green", role: "admin" },
    { userId: 12352, name: "Frank Harris", role: "admin" },
    { userId: 12353, name: "Grace Martin", role: "admin" },
    { userId: 12354, name: "Helen Lee", role: "admin" },
    { userId: 12355, name: "Ivy Walker", role: "admin" },
    { userId: 12356, name: "Jack Clark", role: "admin" },
    { userId: 12357, name: "Kelly Hall", role: "admin" },
    { userId: 12358, name: "Liam Allen", role: "admin" },
    { userId: 12359, name: "Mona King", role: "admin" },
    { userId: 12360, name: "Nancy Wright", role: "admin" },
    { userId: 12361, name: "Oscar Young", role: "admin" },
    { userId: 12362, name: "Paul Scott", role: "admin" },
    { userId: 12363, name: "Quincy Adams", role: "admin" },
    { userId: 12364, name: "Rachel Nelson", role: "admin" },
    { userId: 12365, name: "Steve Carter", role: "admin" },
    { userId: 12366, name: "Tina Mitchell", role: "admin" },
    { userId: 12367, name: "Uma Perez", role: "admin" },
    { userId: 12368, name: "Vera Roberts", role: "admin" },
    { userId: 12369, name: "Walter Morris", role: "admin" },
    { userId: 12370, name: "Xena Turner", role: "admin" },
    { userId: 12371, name: "Yara Phillips", role: "admin" },
    { userId: 12372, name: "Zane Campbell", role: "admin" },
    { userId: 12373, name: "Aaron Peterson", role: "admin" },
    { userId: 12374, name: "Brittany Murphy", role: "admin" },
    { userId: 12375, name: "Carter Simmons", role: "admin" },
    { userId: 12376, name: "Diana Evans", role: "admin" },
    { userId: 12377, name: "Ethan Turner", role: "admin" },
    { userId: 12378, name: "Fiona Collins", role: "admin" },
    { userId: 12379, name: "Gavin Bennett", role: "admin" },
    { userId: 12380, name: "Hannah Foster", role: "admin" },
    { userId: 12381, name: "Iris Reed", role: "admin" },
    { userId: 12382, name: "James Morgan", role: "admin" },
    { userId: 12383, name: "Katherine Howard", role: "admin" },
    { userId: 12384, name: "Leo Walker", role: "admin" },
    { userId: 12385, name: "Monica Adams", role: "admin" },
    { userId: 12386, name: "Nathan Lee", role: "admin" },
    { userId: 12387, name: "Olivia Carter", role: "admin" },
    { userId: 12388, name: "Penny Grant", role: "admin" },
    { userId: 12389, name: "Quinn Jenkins", role: "admin" },
    { userId: 12390, name: "Ryan Long", role: "admin" },
    { userId: 12391, name: "Sophia King", role: "admin" },
    { userId: 12392, name: "Toby Harris", role: "admin" },
    { userId: 12393, name: "Ursula Moore", role: "admin" },
    { userId: 12394, name: "Victor Perez", role: "admin" },
    { userId: 12395, name: "Will Smith", role: "admin" },
    { userId: 12396, name: "Xander Clark", role: "admin" },
    { userId: 12397, name: "Yvonne Allen", role: "admin" },
    { userId: 12398, name: "Zachary Davis", role: "admin" },
    { userId: 12399, name: "Angela Hill", role: "admin" },
    { userId: 12400, name: "Brian Lee", role: "admin" },
    { userId: 12401, name: "Catherine Young", role: "admin" },
    { userId: 12402, name: "Daniel King", role: "admin" },
    { userId: 12403, name: "Eva Roberts", role: "admin" },
    { userId: 12404, name: "Franklin Hall", role: "admin" },
    { userId: 12405, name: "Georgia Wright", role: "admin" },
    { userId: 12406, name: "Harry Scott", role: "admin" },
    { userId: 12407, name: "Isabelle Martin", role: "admin" },
    { userId: 12408, name: "Jackie Perez", role: "admin" },
    { userId: 12409, name: "Kyle Jackson", role: "admin" },
    { userId: 12410, name: "Lily Foster", role: "admin" },
    { userId: 12411, name: "Mason Cooper", role: "admin" },
    { userId: 12412, name: "Nina Sanchez", role: "admin" },
    { userId: 12413, name: "Oscar Gomez", role: "admin" },
    { userId: 12414, name: "Pauline Mitchell", role: "admin" },
    { userId: 12415, name: "Quincy Brown", role: "admin" },
    { userId: 12416, name: "Rachel Lee", role: "admin" },
    { userId: 12417, name: "Samuel Thompson", role: "admin" },
    { userId: 12418, name: "Tracy Stewart", role: "admin" },
    { userId: 12419, name: "Ulysses Harris", role: "admin" },
    { userId: 12420, name: "Victoria Wright", role: "admin" },
    { userId: 12421, name: "Wendy Jackson", role: "admin" },
    { userId: 12422, name: "Xander Davis", role: "admin" },
    { userId: 12423, name: "Yara Wilson", role: "admin" },
    { userId: 12424, name: "Zane Martin", role: "admin" },
    { userId: 12425, name: "Aaron Adams", role: "admin" },
    { userId: 12426, name: "Bridget White", role: "admin" },
    { userId: 12427, name: "Craig Thompson", role: "admin" },
    { userId: 12428, name: "Diana Clark", role: "admin" },
    { userId: 12429, name: "Eva Peterson", role: "admin" },
    { userId: 12430, name: "Felix Lee", role: "admin" },
    { userId: 12431, name: "George Hill", role: "admin" },
    { userId: 12432, name: "Hannah Scott", role: "admin" },
    { userId: 12433, name: "Irene Martin", role: "admin" },
    { userId: 12434, name: "John Cooper", role: "admin" },
    { userId: 12435, name: "Karen Davis", role: "admin" },
    { userId: 12436, name: "Leo Clark", role: "admin" },
    { userId: 12437, name: "Monica Moore", role: "admin" },
    { userId: 12438, name: "Neil Walker", role: "admin" },
    { userId: 12439, name: "Olivia Lewis", role: "admin" },
    { userId: 12440, name: "Perry Wilson", role: "admin" },
    { userId: 12441, name: "Quinn Scott", role: "admin" },
    { userId: 12442, name: "Rita Hall", role: "admin" },
    { userId: 12443, name: "Steve Young", role: "admin" },
    { userId: 12444, name: "Tina Roberts", role: "admin" },
    { userId: 12445, name: "Ursula Johnson", role: "admin" },
    { userId: 12446, name: "Victor Martinez", role: "admin" },
    { userId: 12447, name: "Wendy Gonzalez", role: "admin" },
    { userId: 12448, name: "Xena Thompson", role: "admin" },
    { userId: 12449, name: "Yvonne Perez", role: "admin" },
    { userId: 12450, name: "Zachary Lee", role: "admin" },
    { userId: 12451, name: "Ashley Clark", role: "admin" },
    { userId: 12452, name: "Bradley Green", role: "admin" },
    { userId: 12453, name: "Carla Hall", role: "admin" },
    { userId: 12454, name: "Dylan Moore", role: "admin" },
    { userId: 12455, name: "Eva King", role: "admin" },
    { userId: 12456, name: "Felix Harris", role: "admin" },
    { userId: 12457, name: "Gina Thompson", role: "admin" },
    { userId: 12458, name: "Henry Lewis", role: "admin" },
    { userId: 12459, name: "Isabel Roberts", role: "admin" },
    { userId: 12460, name: "Jack Walker", role: "admin" },
    { userId: 12461, name: "Kimberly Green", role: "admin" },
    { userId: 12462, name: "Liam Carter", role: "admin" },
    { userId: 12463, name: "Mia Bennett", role: "admin" },
    { userId: 12464, name: "Nina Jackson", role: "admin" },
    { userId: 12465, name: "Owen Lewis", role: "admin" },
    { userId: 12466, name: "Penny Harris", role: "admin" },
    { userId: 12467, name: "Quinn Davis", role: "admin" },
    { userId: 12468, name: "Riley Moore", role: "admin" },
    { userId: 12469, name: "Samuel Lee", role: "admin" },
    { userId: 12470, name: "Tara Young", role: "admin" },
    { userId: 12471, name: "Ursula Allen", role: "admin" },
    { userId: 12472, name: "Vera Thomas", role: "admin" },
    { userId: 12473, name: "William Wilson", role: "admin" },
    { userId: 12474, name: "Xander Martin", role: "admin" },
    { userId: 12475, name: "Yara White", role: "admin" },
    { userId: 12476, name: "Zane Harris", role: "admin" }
  ];
  

  const jwtTokens = data.map(user => generateJwt(user));

  res.json({
    success: true,
    encryptedData: jwtTokens,
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
