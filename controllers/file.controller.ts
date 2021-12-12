import { Request, Response } from "express";
import moveFileTo from "../utils/file.upload";
class FileController {
    static saveImage(req: Request, res: Response) {
        moveFileTo('images', req, res);
    }

    static saveDocument(req: Request, res: Response) {
        moveFileTo('documents', req, res);
    }
}

export default FileController;
