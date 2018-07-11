var user = require ('../Models/UserModel');
var validator = require ('validator');
var flash = require('connect-flash');
var connection = require('../config/conn.js').getConnection(); 

exports.getLogin =(req,res)=>{
  console.log('login loaded')
 res.render('pages/login');
}

exports.getRegister =(req,res)=>{
 res.render('pages/register');
}

exports.getDashboard =(req,res)=>{
 res.render('pages/dashboard');
}

exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
 /*   res.send({
      "code":400,
      "failed":"error ocurred"
    })*/
      req.flash('error_msg', 'Try again later');
      res.locals.error = req.flash();
      res.render('pages/login');    	 

  }else{
     console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == password){
       /* res.send({
          "code":200,
          "success":"login sucessfull"
            });*/
        req.flash('success_msg', 'You are logged in sucessfully');
        res.locals.success = req.flash();
        res.render('pages/dashboard',{userdata :results[0] });
      }
      else
      {
    	 /*   res.send({
          "code":204,
          "success":"Email and password does not match"
            });*/
        req.flash('error_msg', 'Email and password does not match');
             res.locals.error = req.flash();
        res.render('pages/login');    	   
      }
          
    }
    else
    {
    /*  res.send({
        "code":204,
        "success":"Email does not exits"
          });*/
           req.flash('error_msg', 'Email does not exits');
                res.locals.error = req.flash();
           res.render('pages/login');
    }
  }
  });
}
exports.register =(req,res)=>{

  // console.log("req",req.body);
  var today = new Date();
  var users={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "email":req.body.email,
    "password":req.body.password,
    "created":today,
    "modified":today
  }
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    /*res.send({
      "code":400,
      "failed":"error ocurred"
    })*/
     req.flash('error_msg', 'Failed ! Try again later');
     res.locals.error = req.flash();      
     res.render('pages/register');
  }else{
    console.log('The solution is: ', results);
   /* res.send({
      "code":200,
      "success":"user registered sucessfully"
        });*/

         res.render('pages/login');
  }
  });
}
