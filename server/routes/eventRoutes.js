// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
console.log("routess")
router.get('/events', eventController.getEvent);
router.get('/itenary',eventController.getItenary);
console.log("we reached here");
router.get('/map',eventController.getMap);
//router.post('/reschedule', eventController.createEvent);
router.patch('/reschedule/:id/toggle',eventController.updateEvent);
router.get('/round',eventController.getRound);
router.get('/review',eventController.getReview);
router.get('/schedule',eventController.getSchedule);

module.exports = router;
