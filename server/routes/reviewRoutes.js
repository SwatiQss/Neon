const express=require('express');
const router=express.Router();
const reviewController=require('../controllers/reviewController');

console.log("event Routes")
router.post('/review',reviewController.createReview);
router.get('/getreview/:id', reviewController.getReview);


module.exports=router;