const pool=require('../db');

class Review{
    static async getReview(){
        const sql='SELECT * FROM reviews';
        try{
            const result=await pool.query(sql);
            return result.rows;
        }
        catch(err){
            console.error('Error fetching reviews:',err);
            throw new Error('Error fetching reviews:', err.message);


        }
    }
    static async createReview(
        id,
        user_id, // Example value, replace with actual user ID
        event_id, // Example value, replace with actual event ID
        quality_of_event,
        services_at_event,
        operator_of_event,
        facilities_of_events,
        staff_politeness,
        comment,
        created_at,
        updated_at

    ){
        const sql=`
        INSERT INTO reviews (id,user_id,event_id,quality_of_event,services_at_event,operator_of_event,facilities_of_events,staff_politeness,comment,created_at,updated_at)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
        
        `;

        const values=[id,user_id,event_id,quality_of_event,services_at_event,operator_of_event,facilities_of_events,staff_politeness,comment,created_at,updated_at]
        try{
             const result=await pool.query(sql,values);

             return result.rows[0].id
        }
        catch(err){
            console.error('Error inserting user:',err);
            throw new Error('Error creating reviews',err);

        }
    }

    
}

module.exports= Review;