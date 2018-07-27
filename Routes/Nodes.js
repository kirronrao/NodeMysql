var express    = require("express");
var router = express.Router();



var nodeController = require('../Controllers/NodesController');

router.get('/', nodeController.getNodes);
router.get('/:id', nodeController.viewNode);

//router.post('/register',userController.register);

module.exports = router;