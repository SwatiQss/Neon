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


exports.getItenary=async(req,res)=>{
    try{
        const itenary=await Event.getItenary();
        res.json(itenary);
    }catch(err){
        console.error('Error fetching data',err);
        throw new Error('Error fetching itenary:'+err.message);
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

exports.createEvent=async(req,res)=>{
   const { 
    title,
    location,
    adult_price,
    child_price,
    total_seat,
    from_date,
    to_date,
    created_at,
    status,
    category,
    description,
    img

   }=req.body;

   console.log("Received dadta:", req.body);

   try{
    const eventId=await Event.createEvent(
        
        title,
        location,
        adult_price,
        child_price,
        total_seat,
        from_date,
        to_date,
        created_at,
        status,
        category,
        description,
        img
    );
    res.status(201).json({message:'event created successfully',eventId:eventId});


   }
   catch(err){
    console.error('Error creating user',err.message);
    res.status(500).json({message:'Failed to create user',err});
    
   }
}