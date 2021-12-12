import randomString from "./random.string";
import path from 'path';

const moveFileTo = (req: any, res: any, directory: string) => {
    const file: any = req.files.file;
    const data: any = [];

    if (!req.files) return res.status(400).send({
        status: false,
        message: 'upload failed'
    });

    if (file.length) {
        try {
            file.forEach((file: any) => {
                const basename: string = randomString(16) + path.extname(file.name);
                const filePath: string = path.join(path.resolve('./public'), directory, basename);
                file.mv(filePath);
                data.push({
                    basename,
                    name: file.name,
                    mimetTpe: file.mimetype,
                    size: file.size
                });
            });

            res.send({
                status: true,
                message: 'files uploaded successfully',
                data
            });
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        try {
            const basename: string = randomString(15) + path.extname(file.name);
            const filePath: string = path.join(path.resolve('./public'), directory, basename);
            file.mv(filePath, function (error: any) {
                return error ? res.status(500).send(error) : res.send({
                    status: true,
                    message: 'file uploaded successfully',
                    data: {
                        basename,
                        name: file.name,
                        mimeType: file.mimetype,
                        size: file.size
                    }
                });
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default moveFileTo;