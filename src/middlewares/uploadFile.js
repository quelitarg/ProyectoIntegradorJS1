const express = require('express');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve('../../public/multimedia')),
    filename: (req, file, cb) => cb(null,Date.now() + '_' +  file.originalname)
});

const uploadFiles = multer({storage});

/*uploadFiles.array('images',2);
const express = require('express');
const multer = require('multer');
const path = require('path');
//const { router } = require('./adminRoutes');

//const app = express();
//const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/multimedia');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const uploadFiles = multer({ storage: storage });

//app.use(express.static('public'));

/*app.post('/upload', upload.array('images', 2), (req, res) => {
  res.send('Images uploaded successfully!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});*/
module.exports = uploadFiles;