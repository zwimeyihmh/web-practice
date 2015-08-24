var express = require('express');
var router = express.Router();
var Controller = require('../controller/controller.js');

var controller = new Controller();
router.get('/', controller.manageGet);
router.post('/',controller.mangePost);

module.exports = router;
