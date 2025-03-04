"use strict";

var express = require('express');

var router = express.Router();

var stripeController = require('../controllers/stripeController');

console.log("stripe payment iniitated");
router.post('/create-checkout-session', stripeController.createPayment);
module.exports = router;