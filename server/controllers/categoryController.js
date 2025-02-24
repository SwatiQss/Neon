const Category=require('../models/modelsCategory')

exports.getCategory=async(req,res)=>{
    try{
          const category=await Category.getCategory();
          res.json(category);
    }catch(err){
        console.error('Error fetching catagory',err);
        throw new Error('Error fetching event',err.message)
    }

}