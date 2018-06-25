var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dbuser@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysql server!");
  /*  con.query("CREATE DATABASE nodemysql", function (err, result) {
    if (err) throw err;
    console.log("Database created : nodemysql");
  });*/
});