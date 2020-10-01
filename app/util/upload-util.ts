import multer from 'multer';
import { config } from '../config';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.upload.dir)
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
export const upload = multer({ storage });