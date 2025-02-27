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

exports.getMap=async(req,res)=>{
    try{
        console.log("we reached here 2222")
        const map=await Event.getMap();
        res.json(map);
    }catch(err){
        console.error('Error fetching map: ',err);
        throw new Error('Error fetching map:' +err.message)
    }
}