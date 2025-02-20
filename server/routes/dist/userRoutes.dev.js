"use strict";

// routes/userRoutes.js
var express = require('express');

var router = express.Router();

var userController = require('../controllers/userController'); // Route to display all users
// Route to create a new user (POST)


console.log("routess"); //router.get('/users', userController.getUser);

router.post('api/profile', userController.createUser);
module.exports = router;