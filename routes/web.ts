import express from "express";
const webRoutes = express.Router();

import HomeController from "../controllers/home";

webRoutes.get('/', HomeController.index);

export default webRoutes;