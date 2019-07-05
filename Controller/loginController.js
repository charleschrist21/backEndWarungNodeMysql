const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const router = express.Router()
const config = require('./config')

const tokenList = {}
const response = require('./res')
const connection = require('../conn')

exports.aa = function(req,res){
    const id = req.body.id 
    const password = req.body.password
    connection.query('SELECT nama,imgEmployee FROM Employee WHERE id=? AND password=?',[id,password],function(error, values){
        if(values !=""){
            const data = {
                values
            };
            // res.json(data);
            const token = jwt.sign(data, config.secret,{expiresIn:config.tokenLife})
    const refreshToken = jwt.sign(data,
        config.refreshTokenSecret,{expiresIn:config.refreshTokenLife})
        const response = {
            "status" : "Logged in",
            "token"  : token,
            "refreshToken" : refreshToken,
            "data" : values
        }
        tokenList[refreshToken] = response
        res.status(200).json(response);
        }else{
            const response = {
                "status" : "failed",
            }
            res.json(response)
            // console.log('salah')

        }
    })
}

exports.check = function(req,res,next){
    const token = req.body.token || req.query.token ||req.headers['x-access-token']
    if(token){
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
                return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
            }else{
                req.decoded = decoded;
                console.log(decoded)
            }

        });
      } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            "error": true,
            "message": 'No token provided.'
        });
      }
}
