
const express=require('express');
const router=express.Router();
const categoryController=require('../controllers/categoryController')

console.log("category");
router.get('/category',categoryController.getCategory);
console.log("1");
router.patch('/category/:id/toggle',categoryController.updateStatus)
console.log("2");
module.exports=router;