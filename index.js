var express = require('express')
var app = express()

var port = 3000

app.get("/", function(req, res){

    res.send("Hello World Im chathnuka")
});


app.listen(port, function(){
    console.log("Server started on port 3000")
})