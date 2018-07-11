var mysql = require('mysql');


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dbuser@123",
  database : 'nodemysql'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});


let getConnection = function(){

	return connection;
}
module.exports = {

	getConnection :getConnection
}
