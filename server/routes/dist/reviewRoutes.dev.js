"use strict";

var express = require('express');

var router = express.Router();

var reviewController = require('../controllers/reviewController');

console.log("event Routes");
router.post('/review', reviewController.createReview);
router.get('/getreview', reviewController.getReview);
module.exports = router;