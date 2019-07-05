const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const food = require('./Routes/foodsRoutes')
const drink = require('./Routes/drinksRouter')
const employee = require('./Routes/employeeRouter')
const login = require('./Routes/loginRouter')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/warung/food", food);
app.use("/api/warung/drink", drink);
app.use("/api/warung/employee", employee)
app.use("/api/warung/signin", login)


const server = app.listen(5000, function () {
 
    const host = server.address().address
    const port = server.address().port
   
    console.log("App listening at http://%s:%s", host, port)
  })