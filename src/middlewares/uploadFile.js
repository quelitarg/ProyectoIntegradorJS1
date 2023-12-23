const express = require('express');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve('../../public/multimedia')),
    filename: (req, file, cb) => cb(null,Date.now() + '_' +  file.originalname)
});

const uploadFiles = multer({storage});


module.exports = uploadFiles;
