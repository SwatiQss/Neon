const Review=require('../models/modelReview')
exports.createReview = async (req, res) => {
    const {
        id,
        user_id,
        event_id,
        quality_of_event,
        services_at_event,
        operator_of_event,
        facilities_of_event,
        staff_politeness,
        comment,
        created_at,
        updated_at
    } = req.body;

    // Validate the input values for ratings (assuming the allowed range is 1 to 5)
    if (facilities_of_event < 1 || facilities_of_event > 5) {
        return res.status(400).json({ message: 'Facilities rating must be between 1 and 5' });
    }

    if (quality_of_event < 1 || quality_of_event > 5) {
        return res.status(400).json({ message: 'Quality rating must be between 1 and 5' });
    }

    if (services_at_event < 1 || services_at_event > 5) {
        return res.status(400).json({ message: 'Services rating must be between 1 and 5' });
    }

    if (operator_of_event < 1 || operator_of_event > 5) {
        return res.status(400).json({ message: 'Operator rating must be between 1 and 5' });
    }

    if (staff_politeness < 1 || staff_politeness > 5) {
        return res.status(400).json({ message: 'Staff politeness rating must be between 1 and 5' });
    }

    console.log("Received data", req.body);

    try {
        const reviewId = await Review.createReview(
            id,
            user_id,
            event_id,
            quality_of_event,
            services_at_event,
            operator_of_event,
            facilities_of_event,
            staff_politeness,
            comment,
            created_at,
            updated_at
        );

        res.status(201).json({ message: 'Review added successfully' });
    } catch (err) {
        console.error('Error creating review:', err.message);
        res.status(500).json({ message: 'Failed to create review', error: err.message });
    }
};
exports.getReview = async (req, res) => {
    const { id } = req.params;  // ✅ Fix: Extract `id` from route params
    if (!id) {
        return res.status(400).json({ error: "Event ID is required" });
    }

    try {
        const reviews = await Review.getReview(id);  // ✅ Fix: Pass `id` to model function

        if (!reviews.length) {
            return res.status(404).json({ message: "No reviews found for this event" });
        }

        res.status(200).json(reviews);
    } catch (err) {
        console.error("Error fetching reviews:", err);
        res.status(500).json({ error: err.message });  // ✅ Fix: Send error response instead of throwing
    }
};
exports.createVibe=async(req,res)=>{
    const{
        user_id,
        event_id,
        vibes,
        experience
    }=req.body;

    console.log("received data",req.body);
    try{
        const vibe=await Review.createVibe(
            user_id,
            event_id,
            vibes,
            experience
        );
        res.status(201).json({message:'Vibes added succefully'})
    }catch(err){
        console.error('Error creating review:',err.message);
        res.status(500).json({message:'failed to create review',error:err.message});
        
    }
}