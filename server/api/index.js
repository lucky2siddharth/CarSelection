const express = require('express');
const router = express.Router();
var controller = require('./controller');

router.get("/makes", controller.getData);
router.get("/makes/:make/:model", controller.getImage);

module.exports = router;