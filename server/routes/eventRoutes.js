// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Route to display all users

// Route to create a new user (POST)
console.log("routess")
router.get('/events', eventController.getEvent);
//router.post('/profile', userController.createUser);



module.exports = router;
