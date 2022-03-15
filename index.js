const express = require('express')
const routerApi = require('express')
const my_app = express()
const mongoose = require('mongoose')
const port = 3000

require('dotenv').config()
routerApi(my_app);

my_app.listen(port, ()=>{
    console.log('listening active via port ', port);
});

my_app.get('/', (req,res)=>{
    res.send("Prueba de la api restful de Marvel");
})

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>{console.log("Successful connection with Mongo")})
.catch((error)=>{console.error('Failed connection with Mongo')})
