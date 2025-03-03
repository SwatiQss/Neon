"use strict";

// routes/userRoutes.js
var express = require('express');

var router = express.Router();

var eventController = require('../controllers/eventController'); // Route to display all users
// Route to create a new user (POST)


console.log("routess");
router.get('/events', eventController.getEvent);
router.get('/itenary', eventController.getItenary);
console.log("we reached here");
router.get('/map', eventController.getMap);
router.post('/reschedule', eventController.createEvent);
module.exports = router;