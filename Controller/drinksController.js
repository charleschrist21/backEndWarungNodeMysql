'use strict'

const response = require('./res')
const connection = require('../conn')

exports.drink = function(req,res){
    connection.query('SELECT * FROM minuman',function(error, rows,fields){
        if(error){
            
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    })
}

exports.cari = function(req,res){
    const id = req.params.id

    connection.query('SELECT * FROM minuman where id=?',[id],
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
    const imgMinuman = 'http://192.168.5.224:8081/Public/images/minuman/' + req.body.nama + '.' + 'jpg'

    connection.query('INSERT into minuman (nama,deskripsi,harga,status,imgMinuman)values(?,?,?,?,?) ',
    [nama,deskripsi,harga,status,imgMinuman],
    function(error,rows,fields){
       if(error){
          console.log(error) 
       }else{
           response.ok("Berhasil maenambah minuman",res)
           console.log("Berhasil menambah minuman")
       }
    })
}

exports.edit = function(req,res){
    const id = req.params.id
    const nama = req.body.nama
    const deskripsi =req.body.deskripsi
    const harga = req.body.harga
    const status = req.body.status
    const imgMinuman = 'http://192.168.5.224:8081/Public/images/minuman/' + req.body.nama + '.' + 'jpg'

    connection.query('UPDATE minuman SET nama=?,deskripsi=?, harga=?, status=?, imgMinuman=? WHERE id=?',
    [nama,deskripsi,harga,status,imgMinuman,id],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update Minuman", res)
            console.log("Berhasil update Minuman")
        }
    });

}
exports.delete = function(req,res){
    const id = req.params.id

    connection.query('DELETE FROM minuman where id=?',[id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil Delete ", res)
            console.log("berhasil Delete ")
        }
    })
}