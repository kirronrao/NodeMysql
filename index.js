/*Entry point for node js application*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('views', __dirname + '/Views');
app.set('view engine', 'ejs');

var UserRoutes = require('./Routes/UserRoutes');


app.use('/user', UserRoutes);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})