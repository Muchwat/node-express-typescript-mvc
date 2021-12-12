import { Request, Response } from "express";
import moveFileTo from "../utils/file.upload";
class FileController {
    static saveImage(req: Request, res: Response) {
        moveFileTo(req, res, 'images');
    }

    static saveDocument(req: Request, res: Response) {
        moveFileTo(req, res, 'documents');
    }
}


export default FileController;
