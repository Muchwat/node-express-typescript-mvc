import { Request, Response, NextFunction } from "express";

class HomeController {
    static async index(req: Request, res: Response, next: NextFunction): Promise<Response> {
        return res.status(200).send({
            message: "Hello World default Test!",
        });
    }

    static welcome(req: Request, res: Response, next: NextFunction) {
        res.status(200).send("Welcome 🙌 ");
    }
}

export default HomeController;