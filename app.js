var express = require('express')
var app = express()

var port = 3000

const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, 'src', 'index.html'));
    
});


app.listen(port, function(){
    console.log("Server started on port 3000")
})