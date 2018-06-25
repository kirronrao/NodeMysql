var user = require ('../Models/UserModel');




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

exports.login =(req,res)=>{

}

exports.register =(req,res)=>{
  
}
