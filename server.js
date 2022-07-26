

var express =require("express");
var bodyParser=require("body-parser")
var router=require("./router");
var app=express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


router(app);


app.listen(7000);
console.log("Listning to port 7000");