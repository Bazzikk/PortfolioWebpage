var express = require("express");

var app= express();

//app.use("view engine", "ejs");

app.get("/", function(req, res){
	res.send("Hi there!");
});

app.listen(3000,function(){
	console.log("Local Server Started");
})