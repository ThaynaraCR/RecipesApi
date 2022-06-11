
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const d = require('../utils/dates')
const objHash = new Object();

module.exports = {
  dest: path.resolve(__dirname, "..", "tmp"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "tmp"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const filename = `${d.datahour.today}_${d.datahour.now}_${hash.toString('hex')}_${file.originalname}`;
        cb(null, filename);
        objHash[filename] = filename;
        req.body.hash = objHash;
      });
    },

  })
};