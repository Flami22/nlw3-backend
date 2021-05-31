import { request } from 'express';
import path from 'path';
import multer from 'multer';


export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {

            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        },

    })
};