import express, { Router } from "express";
const apiRoutes:Router = express.Router();
import HomeController from "../controllers/home";
import UserController from "../controllers/user.controller";
import auth  from "../middleware/auth";

apiRoutes.get("/welcome", auth, HomeController.welcome);
apiRoutes.get('/test', HomeController.index);
apiRoutes.post('/user/create', UserController.create);
apiRoutes.get('/user/retrieve', UserController.retrieve);
apiRoutes.post('/user/update', UserController.update);
apiRoutes.post('/user/delete', UserController.delete);
apiRoutes.post('/user/paginate', UserController.paginate);

export default apiRoutes;