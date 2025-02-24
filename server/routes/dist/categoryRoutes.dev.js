"use strict";

var express = require('express');

var router = express.Router();

var categoryController = require('../controllers/categoryController');

console.log("category");
router.get('/category', categoryController.getCategory);
module.exports = router;