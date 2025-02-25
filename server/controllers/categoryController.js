const Category=require('../models/modelsCategory')
const Favourite=require('../models/modelFavourite')

exports.getCategory=async(req,res)=>{
    try{
          const category=await Category.getCategory();
          res.json(category);
    }catch(err){
        console.error('Error fetching catagory',err);
        throw new Error('Error fetching event',err.message)
    }

}

exports.getFavourite=async(req,res)=>{
    try{
        const favourite=await Favourite.getFavourite();
        res.json(favourite);
        console.log("getting favourite");

    }
    catch(err){
        console.error('Error fetching category',err);
        throw new Error('Error fetching event,arr.message')

    }
}
exports.updateStatus=async(req,res)=>{
    const category_id=req.params.id;//category id from the url
    const {active}=req.body;

    try{
        const updatedCategory=await Category.updateStatus(category_id,active);

        if(updatedCategory){
            return res.json({updateStatus:updatedCategory.saved_status})
            
        }
        else{
            return res.status(404).json({error:'category not found'})
        }
    }
    catch(err){
        console.error('Errror updatign category',err);
        res.status(500).json({error:'failed to update category status'})
    }
}