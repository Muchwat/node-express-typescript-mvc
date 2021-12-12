import randomString from "./random.string";
import path from 'path';

const moveFileTo = (directory: string, req: any, res: any) => {
    if (!req.files) return res.status(400).send({ status: false, message: 'upload failed' });
    
    const file: any = req.files.file;
    const data: any = [];

    function move(file: any) {
        const baseName: string = randomString(16) + path.extname(file.name);
        const filePath: string = path.join(path.resolve('./public'), directory, baseName);
        try { file.mv(filePath); }
        catch (e) { return res.status(500).send(e); }
        data.push({ baseName, name: file.name, mimeType: file.mimetype, size: file.size });
    }

    file.length ? file.forEach((file: any) => move(file)) : move(file);
    return res.send({ status: true, message: 'uploaded successfully', data });
}

export default moveFileTo;