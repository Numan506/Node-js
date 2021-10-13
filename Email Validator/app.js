const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var validator = require("email-validator");


app.get("/form",(req,res)=>{
    res.sendFile(__dirname+"/Form.html")
})

app.post("/formemail",(req,res)=>{
    var email = req.body.email
    if(validator.validate(email)){
        res.send("Email is valid")
    }else{
        res.send("Email is not valid")
    }

})




module.exports= app