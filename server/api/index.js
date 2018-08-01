const express = require('express');
const router = express.Router();
var controller = require('./controller');

router.get("/vehicles", controller.getData);
router.get("/vehicles/:make/:model", controller.getImage);

module.exports = router;