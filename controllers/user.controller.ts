import { Request, Response, NextFunction } from "express";
import UserType from "../interfaces/user.interface";
import {PageParams, Paginate} from "../utils/pagination";
import User from "../database/models/user.model"

class UserController {
    static async create(req: Request, res: Response, next: NextFunction) {
        const user: UserType = req.body;
        const result = await User.create(user);
        res.status(200).json({ id: result.id });
    }

    static async retrieve(req: Request, res: Response, next: NextFunction) {
        const user: UserType = req.body;
        const result = await User.findOne({ where: { id: user.id } });
        res.status(200).json(result);
    }

    static async retrieveAll(req: Request, res: Response, next: NextFunction) {
        const users = await User.findAll();
        res.status(200).json(users);
    }

    static async paginate(req: Request, res: Response, next: NextFunction) {
        let params: PageParams = {
            query: { where: {} },
            order: ['id', 'DESC'],
            currentPage: req.query.page
        }

        const result = await Paginate(User, 2, params);
        res.status(200).json(result);
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        const user: UserType = req.body;
        const result = await User.update(user, { where: { id: user.id } });
        res.status(200).json(result);
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        const user: UserType = req.body;
        const users = await User.destroy({ where: { id: user.id } });
        res.status(200).json(users);
    }
}

export default UserController;