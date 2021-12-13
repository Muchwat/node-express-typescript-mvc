import randomString from "./random.string";
import path from 'path';

const moveFilesTo = (directory: string, req: any, res: any) => {
    if (!req.files) return res.send({ status: false, message: 'no file detected' });

    const file: any = req.files.file;
    const data: any = [];

    function move(file: any) {
        const baseName: string = randomString(16) + path.extname(file.name);
        try { file.mv(path.join(path.resolve('./public'), directory, baseName)); }
        catch (e) { return res.send({ status: false, message: 'upload error' }); }
        data.push({ baseName, name: file.name, mimeType: file.mimetype, size: file.size });
    }

    Boolean(file.length) ? file.forEach((file: any) => move(file)) : move(file);
    return res.send({ status: true, message: 'uploaded successfully', data });
}

export default moveFilesTo;