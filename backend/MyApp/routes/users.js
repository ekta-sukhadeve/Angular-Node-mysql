var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());
const userController = require('../controller/usercontroller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index',{title :"Api called"});
});
//register
router.post('/register', userController.register,);

//login
router.post('/login',userController.login)

module.exports = router;
