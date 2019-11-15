const multer = require("multer");
const path = require("path");
const cryto = require("cryto");

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: () =>{
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: () =>{},
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  filteFilter(req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ];

    if(allowedMimes.includes(file.mimetype)){
      cb(null, true);
    }else{
      cb(new Error('Arquivo invalido'));
    }
  } 
};
