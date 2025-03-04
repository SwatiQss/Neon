
const express=require('express');
const router=express.Router();
const stripeController=require('../controllers/stripeController')
console.log("stripe payment iniitated")
router.post('/create-checkout-session',stripeController.createPayment);
module.exports=router;