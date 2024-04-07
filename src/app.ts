import express from "express";
import {AppDataSource} from "./datasource/datasource";
import authRoute from "./modules/users/user.route";
import servicerouter from "./modules/service/service.route"
import subserviceRoute from "./modules/service/subservice/subservice.route"
import cors from 'cors';
const app = express();

app.use(express.json());
const port = 3000;
app.use(cors())

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render('index')
})

app.use('/users',authRoute)
app.use('/api', servicerouter)
app.use('/api/sub',subserviceRoute)


app.post("/testparam/:id", (req, res) => {
    const { id } = req.params;
    console.log("param id is :",id);
    res.send(id);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})