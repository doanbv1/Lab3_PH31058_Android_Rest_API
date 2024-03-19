const multer = require("multer");
const path = require('path');
const _storage = multer.diskStorage({
    destination:  path.join(__dirname, '../../public/images'),
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }

});
const upload = multer({storage: _storage }).single('image');

module.exports = upload;