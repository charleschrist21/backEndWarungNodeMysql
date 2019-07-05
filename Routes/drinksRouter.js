const express = require('express')
const router = express.Router()
const check = require('./tokenChecker')
const drink = require('../Controller/drinksController')
const multer            = require('multer');
const multParse         = multer();
const storage           = multer.diskStorage({
                            destination : (req, imgMinuman, cb) => {
                          cb(null, './Public/images/minuman');
                        },
                          filename : (req, imgMinuman, cb) =>{
                          cb(null, req.body.nama + '.' + 'jpg');
                        }
                                            });

const upload            = multer({storage:storage});


router.get('/',     drink.drink);
router.get('/:id', drink.cari);
router.post("/",check,    upload.single('imgMinuman'), drink.tambah);
router.put("/:id",check, upload.single('imgMinuman'), drink.edit);
router.delete('/:id',check, drink.delete)

module.exports          = router;