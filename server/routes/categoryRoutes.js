
const express=require('express');
const router=express.Router();
const categoryController=require('../controllers/categoryController')

console.log("category");
router.get('/category',categoryController.getCategory);

module.exports=router;