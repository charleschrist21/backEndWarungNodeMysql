const express = require('express')
const router = express.Router()
const check = require('./tokenChecker')
const login = require('../Controller/loginController')
const multer            = require('multer');
const multParse         = multer();

router.post('/',login.aa);
router.get('/check', login.check)



module.exports 			= router;