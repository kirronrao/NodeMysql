var express    = require("express");
var router = express.Router();



var userController = require('../Controllers/UserController');

router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
router.get('/dashboard', userController.getDashboard);


router.post('/register',userController.register);
router.post('/login',userController.login);

module.exports = router;