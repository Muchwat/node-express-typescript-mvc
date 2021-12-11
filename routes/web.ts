import express, { Router } from "express";
const webRoutes: Router = express.Router();

import HomeController from "../controllers/home";

webRoutes.get('/', HomeController.index);

export default webRoutes;