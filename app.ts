import express, { Application } from "express";
import cors from 'cors';
import apiRoutes from "./routes/api";
import webRoutes from "./routes/web";
import sequelize from "./database";
// import db from './database/models';
import dotenv from "dotenv";

dotenv.config();

const port = process.env.SERVER_PORT;
const app: Application = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
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