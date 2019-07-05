'use strict'

const response = require('./res')
const connection = require('../conn')

exports.foods = function(req,res){
    connection.query('SELECT * FROM makanan',function(error, rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    })
}

exports.cari = function(req,res){
    const id = req.params.id

    connection.query('SELECT * FROM makanan where id=?',[id],
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
    const deskripsi = req.body.deskripsi
    const harga = req.body.harga
    const status = req.body.status
    const imgMakanan = 'http://192.168.5.224:8081/Public/images/makanan/' + req.body.nama + '.' + 'jpg'

    connection.query('INSERT into makanan (nama,deskripsi,harga,status,imgMakanan)values(?,?,?,?,?) ',
    [nama,deskripsi,harga,status,imgMakanan],
    function(error,rows,fields){
       if(error){
          console.log(error) 
       }else{
           response.ok("Berhasil maenambah makanan",res)
           console.log("Berhasil menambah makanana")
       }
    })
}

exports.edit = function(req,res){
    const id = req.params.id
    const nama = req.body.nama
    const deskripsi =req.body.deskripsi
    const harga = req.body.harga
    const status = req.body.status
    const imgMakanan = 'http://192.168.5.224:8081/Public/images/makanan/' + req.body.nama + '.' + 'jpg'

    connection.query('UPDATE makanan SET nama=? , deskripsi=? , harga=? , status=? , imgMakanan=? WHERE id=?',
    [nama,deskripsi,harga,status,imgMakanan,id],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update Makanan", res)
            console.log("Berhasil update Makanan")
        }
    });

}
exports.delete = function(req,res){
    const id = req.params.id

    connection.query('DELETE FROM makanan where id=?',[id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil Delete Makanan", res)
            console.log("berhasil hapus makanan")
        }
    })
}