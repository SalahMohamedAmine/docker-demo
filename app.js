var express = require('express')

var app = express();

app.get('/',function(req,res){
	res.send("Welcome NodeJS");
})

app.listen(4000);