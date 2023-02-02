const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, './src/public/upload/products')
        },
        filename: (req, file, cb)=>{
            cb(null, Date.now().toString() + "_" + file.originalname)
        }
    }),
    fileFilter: (req, file, cb)=>{
        const allowedImg = ['image/png', 'image/jpeg', 'image/jpg','image/webp'].find
        (acceptedFormats => acceptedFormats == file.mimetype);

        if(allowedImg){
            return cb(null, true);
        }

        return cb(null, false);
    }

}))