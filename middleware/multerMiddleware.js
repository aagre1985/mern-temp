import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    file.originalname = Buffer.from(file.originalname, 'ascii').toString(
      'utf8'
    );
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

export default upload;
