const express = require('express')
const router = express.Router()
const food = require('../Controller/foodsController')
const check = require('./tokenChecker')
const multer            = require('multer');
const multParse         = multer();
const storage           = multer.diskStorage({
                            destination : (req, imgMakanan, cb) => {
                          cb(null, './Public/images/makanan');
                        },
                          filename : (req, imgMakanan, cb) =>{
                          cb(null, req.body.nama + '.' + 'jpg');
                        }
                                            });

const upload            = multer({storage:storage});


router.get('/',     food.foods);
router.get('/:id', food.cari);
router.post("/", check,  upload.single('imgMakanan'), food.tambah);
router.put("/:id", check, upload.single('imgMakanan'), food.edit);
router.delete('/:id',check,  food.delete)

module.exports          = router;