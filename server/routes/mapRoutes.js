const express=require('express');
const router=express.Router();
const reviewController=require('../controllers/reviewController');
console.log("map routes")
router.post('/map',reviewController.createVibe);
module.exports=router;