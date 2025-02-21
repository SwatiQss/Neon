// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to display all users

// Route to create a new user (POST)
console.log("routess")
//router.get('/users', userController.getUser);
router.post('/profile', userController.createUser);



module.exports = router;
