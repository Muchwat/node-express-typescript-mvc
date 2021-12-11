import express, { Application } from "express";
import corsConfig from "./cors/config";
import apiRoutes from "./routes/api";
import webRoutes from "./routes/web";
import sequelize from "./database";
// import db from './database/models';
import dotenv from "dotenv";

dotenv.config();

const port = process.env.SERVER_PORT;
const app: Application = express();


app.use(corsConfig);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', webRoutes);
app.use('/api', apiRoutes);

sequelize.sync().then(() => {
    try {
        app.listen(port, (): void => {
            console.log(`Connected successfully on port ${port}`);
        });
    } catch (error: any) {
        console.error(`Error occured: ${error.message}`);
    }
});