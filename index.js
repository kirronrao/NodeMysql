/*Entry point for node js application*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.set('views', __dirname + '/Views');
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var flash = require('connect-flash');
var session = require('express-session');

app.use(cookieParser());
app.use(session({ secret: 'kiran' })); // session secret
app.use(flash()); // use connect-flash for flash messages stored in session


var UserRoutes = require('./Routes/UserRoutes');

//to get the form data in json format
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/', UserRoutes);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("App listening at http://%s:%s", host, port)
})