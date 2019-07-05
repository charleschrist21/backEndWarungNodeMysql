const express = require('express')
const router = express.Router()
const check = require('./tokenChecker')
const employee = require('../Controller/employeeController')
const multer            = require('multer');
const multParse         = multer();
const storage           = multer.diskStorage({
                            destination : (req, imgEmployee, cb) => {
                          cb(null, './Public/images/employee');
                        },
                          filename : (req, imgEmployee, cb) =>{
                          cb(null, req.body.nama+ '.' + 'jpg');
                        }
                                            });

const upload            = multer({storage:storage});

router.get('/', employee.employee)
router.get('/:id', employee.cari)
router.post('/signup', check,upload.single('imgEmployee'), employee.tambah)
router.put('/:id',check, upload.single('imgEmployee'), employee.edit)
router.delete('/:id',check,employee.delete)


module.exports          = router;