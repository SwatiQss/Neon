"use strict";

var express = require('express');

var router = express.Router();

var reviewController = require('../controllers/reviewController');

console.log("map routes");
router.post('/map', reviewController.createVibe);
module.exports = router;