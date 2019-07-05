'use strict'

const response = require('./res')
const connection = require('../conn')

exports.employee = function(req,res){
    connection.query('SELECT * FROM Employee',function(error, rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    })
}

exports.cari = function(req,res){
    const id = req.params.id

    connection.query('SELECT * FROM Employee where id=?',[id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    })
}

exports.tambah = function(req,res){
    const nama = req.body.nama
    const password = req.body.password
    const alamat = req.body.alamat
    const posisi = req.body.posisi
    const imgEmployee = 'http://192.168.5.224:8081/Public/images/employee/' + req.body.nama +  '.' + 'jpg'
    connection.query('INSERT into Employee (nama,password,alamat,posisi,imgEmployee)values(?,?,?,?,?) ',
    [nama,password,alamat,posisi,imgEmployee],
    function(error,rows,fields){
       if(error){
          console.log(error) 
       }else{
           response.ok("Berhasil menambah Employee",res)
           console.log("Berhasil menambah Employee")
       }
    })
}
exports.edit = function(req,res){
    const id = req.params.id
    const nama = req.body.nama
    const password = req.body.password
    const alamat = req.body.alamat
    const posisi = req.body.posisi
    const imgEmployee = 'http://192.168.5.224:8081/Public/images/employee/' + req.body.nama +  '.' + 'jpg'

    connection.query('UPDATE Employee SET nama=? , password=? , alamat=? , posisi=?, imgEmployee=? WHERE id=?',
    [nama,password,alamat,posisi,imgEmployee,id],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update Employee", res)
            console.log("Berhasil update Employee")
        }
    });

}
exports.delete = function(req,res){
    const id = req.params.id

    connection.query('DELETE FROM Employee where id=?',[id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil Delete Employee", res)
            console.log("berhasil Delete ")
        }
    })
}