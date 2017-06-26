// import module
var express = require('express');


var app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));

// server
var port = process.env.PORT || 3000;
app.listen(port,()=>{console.log("Server started on " + port)});

// route
app.get('/',(req,res)=>{
    res.render('main');
});