var express = require("express");

var app= express();

//hi
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
	res.render("index");
});

app.get("*", function(req, res){
	res.send("You are a star!");
});
 
app.listen(3000,function(){
	console.log("Local Server Started!");
});