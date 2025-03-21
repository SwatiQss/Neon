const pool = require('../db');

class Review {
    // Method to get reviews from the database
    // static async getReview() {

    //     const sql = 'SELECT r.id, r.comment, r.user_id, r.experience, e.title, u.avatar_url, v.vibes FROM reviews r JOIN events e ON r.event_id=e.id JOIN vibes v ON r.user_id=v.user_id JOIN profile u ON r.user_id=u.id';
    //     try {
    //         const result = await pool.query(sql);
    //         console.log(result,"review")
    //         return result.rows;
    //     } catch (err) {
    //         console.error('Error fetching reviews:', err);
    //         throw new Error(`Error fetching reviews: ${err.message}`);
    //     }
    // }

    static async getReview(event_id) {
        const sql = `
         SELECT 
    r.id, 
    r.comment, 
    r.user_id, 
    r.experience, 
    CEIL((r.quality_of_event + r.services_at_event + r.operator_of_event) / 3) AS rating, 
    e.title AS event_title, 
    u.avatar_url, 
    v.vibes
FROM reviews r
JOIN events e ON r.event_id = e.id
LEFT JOIN vibes v ON r.user_id = v.user_id
JOIN profile u ON r.user_id = u.id
WHERE r.event_id = $1
ORDER BY r.id DESC;  -- Order by latest reviews first

        `;

        try {
            const result = await pool.query(sql, [event_id]);
            console.log("Reviews:", result.rows);
            return result.rows;
        } catch (err) {
            console.error("Error fetching reviews:", err);
            throw new Error(`Error fetching reviews: ${err.message}`);
        }
    }



    // Method to create a review
    static async createReview(
        id,
        user_id,
        event_id,
        quality_of_event,
        services_at_event,
        operator_of_event,
        facilities_of_events,
        staff_politeness,
        comment,
        created_at,
        updated_at
    ) {
        // Validate the required fields
        if (!id || !user_id || !event_id || !quality_of_event || !services_at_event || !operator_of_event || !facilities_of_events || !staff_politeness || !comment || !created_at || !updated_at) {
            throw new Error("Missing required fields to create a review");
        }

        // SQL query to insert a new review
        const sql = `
        INSERT INTO reviews (id, user_id, event_id, quality_of_event, services_at_event, operator_of_event, facilities_of_events, staff_politeness, comment, created_at, updated_at)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *  -- This will return the inserted row
        `;

        const values = [id, user_id, event_id, quality_of_event, services_at_event, operator_of_event, facilities_of_events, staff_politeness, comment, created_at, updated_at];

        try {
            const result = await pool.query(sql, values);
            // Returning the inserted review data
            return result.rows[0];  // This will contain the newly created review data
        } catch (err) {
            console.error('Error inserting review:', err);
            throw new Error(`Error creating review: ${err.message}`);
        }
    }

    
static async createVibe(
    user_id,
    event_id,
    vibes,
    experience
){
    const sql=`INSERT INTO vibes(user_id,event_id,vibes,experience)
    VALUES($1, $2, $3, $4)
    RETURNING *`;

    const values=[user_id,event_id,vibes,experience];

    try{
        const result=await pool.query(sql,values)
        return result.rows[0];
    }catch(err){
        console.error('Error inserting review:',err);
        throw new Error(`Error creating review: ${err.message}`);

    }
}

    
}

module.exports = Review;
