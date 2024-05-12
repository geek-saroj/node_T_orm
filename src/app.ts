import express from "express";
import {AppDataSource} from "./datasource/datasource";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './swagger/swagger_docs';
import cors from 'cors';
import allRoute from "./router";
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

// app.use('/users',authRoute)
// app.use('/api', servicerouter)
// app.use('/api/sub',subserviceRoute)
// app.use('/api/location',locationRoute)
app.use('/api', allRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.post("/testparam/:id", (req, res) => {
    const { id } = req.params;
    console.log("param id is :",id);
    res.send(id);
})

// app.get('/welcome', (req, res) => {
//     console.log("req user is ", req.user);
//     res.send('Hello World!');
//   })

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})