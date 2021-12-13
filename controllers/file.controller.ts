import { Request, Response } from "express";
import moveFilesTo from "../utils/file.upload";
class FileController {
    static saveImage(req: Request, res: Response) {
        moveFilesTo('images', req, res);
    }

    static saveDocument(req: Request, res: Response) {
        moveFilesTo('documents', req, res);
    }
}

export default FileController;
