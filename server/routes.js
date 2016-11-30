const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
const upload = multer({ storage: storage });


module.exports = function(app) {

  app.post('/upload', upload.single('file'), function(req, res, next){
    console.log('req.file', req.file)
    res.send(`http://159.203.42.30:3000/${req.file.path}`);
  });

  app.get('/public/images/:imgID', function(req, res, next){
    res.sendFile(path.resolve(`public/images/${req.params.imgID}`));
  });

};
