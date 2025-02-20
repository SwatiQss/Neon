// controllers/userController.js
const Event = require('../models/modelEvent');



exports.getEvent=async(req,res)=>{
    try{
        const event=await Event.getEvent();
        res.json(event)
    }catch(err){
        console.error('Error fetching event:', err);
        throw new Error('Error fetching event: ' + err.message); // Pass the error message

    }
}