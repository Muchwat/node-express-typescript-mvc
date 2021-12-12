import randomString from "./random.string";
import path from 'path';

const moveFileTo = (directory: string, req: any, res: any) => {
    const file: any = req.files.file;
    const data: any = [];

    if (!req.files) return res.status(400).send({
        status: false,
        message: 'upload failed'
    });

    if (file.length) {
        try {
            file.forEach((file: any) => move(file));
            return res.send({
                status: true,
                message: 'files uploaded successfully',
                data
            });
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    try {
        move(file);
        return res.send({
            status: true,
            message: 'file uploaded successfully',
            data
        });
    } catch (error) {
        return res.status(500).send(error);
    }

    function move(file: any) {
        const basename: string = randomString(16) + path.extname(file.name);
        const filePath: string = path.join(path.resolve('./public'), directory, basename);
        file.mv(filePath);
        data.push({
            basename,
            name: file.name,
            mimetTpe: file.mimetype,
            size: file.size
        });
    }
}

export default moveFileTo;


