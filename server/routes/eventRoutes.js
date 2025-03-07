// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Route to display all users

// Route to create a new user (POST)
console.log("routess")
router.get('/events', eventController.getEvent);
router.get('/itenary',eventController.getItenary);
console.log("we reached here");
router.get('/map',eventController.getMap);
router.post('/reschedule', eventController.createEvent);
router.get('/round',eventController.getRound);



module.exports = router;
