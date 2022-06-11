
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const objHash = new Object();

const data = new Date();
var dia = data.getDate(); 
var mes= data.getMonth();  
var ano4 = data.getFullYear(); 
var hora = data.getHours();
var min = data.getMinutes(); 
var seg = data.getSeconds(); 
var dia_hoje = dia + '' + (mes+1) + '' + ano4;
var hora_agora = hora + '' + min + '' + seg;

 var dataHora = {
   hoje : dia_hoje,
   agora : hora_agora
  };

module.exports = {
  dest: path.resolve(__dirname, "..", "tmp"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "tmp"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const filename = `${dataHora.hoje}_${dataHora.agora}_${hash.toString('hex')}_${file.originalname}`;

        cb(null, filename);

        objHash[filename] = filename;

        req.body.hash = objHash;
      });
    },

  }),
  // limits: {
  //   fileSize: 2 * 1024 * 1024
  // },
  // fileFilter: (req, file, cb) => {
  //   const ext = path.extname(file.originalname).toLowerCase()
  //   const allowedMimes = [
  //     ".jpg",
  //     ".png",
  //     ".pdf",
  //     ".doc",
  //     ".docx"
  //   ];

  //   if (allowedMimes.includes(ext)) {
  //     cb(null, true);
  //   } else {
  //     cb(new Error("formato invalido"))
  //   }
  // }
};