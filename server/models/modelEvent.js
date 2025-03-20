// models/userModel.js
const { updateEvent } = require('../controllers/eventController');
const pool = require('../db'); // Import PostgreSQL client (db.js)

class Event {

    //Method to get users
    static async getEvent(){
        const sql=`SELECT e.*, c.category_name, c.category_id
FROM events e
JOIN category c ON e.id = c.event_id LIMIT 5;
`
try{
    const result=await pool.query(sql)
    return result.rows;
}catch(err){
    console.error('Error creating user:', err);
    throw new Error('Error creating user: ' + err.message); // Pass the error message
}
    }


    static async getRound(id) {
        const sql = "SELECT e.*,COALESCE(r.occurrence_count, 0) AS occurrence_count FROM events e LEFT JOIN ( SELECT event_id, COUNT(*) AS occurrence_count FROM reviews GROUP BY event_id) r ON e.id = r.event_id where e.id=$1 ";

        try {
            const result = await pool.query(sql, [id]); // PostgreSQL
            console.log(id);
            return result.rows; // PostgreSQL uses `.rows`
         
        } catch (err) {
            console.log('Error fetching round:', err);
            throw new Error('Error fetching round: ' + err.message);
        }
    }

    static async getSchedule(id) {
const sql="SELECT * FROM events WHERE id=$1"

        try {
            const result = await pool.query(sql, [id]); // PostgreSQL
            console.log(id);
            return result.rows; // PostgreSQL uses `.rows`
         
        } catch (err) {
            console.log('Error fetching schedule:', err);
            throw new Error('Error fetching schedule: ' + err.message);
        }
    }
    static async getReview(id) {
        const sql = `SELECT r.comment,ROUND(r.quality_of_event + r.services_at_event + r.operator_of_event + r.facilities_of_events + r.staff_politeness) / 5.0 AS average_rating,u.name AS user_name FROM reviews r JOIN profile u ON r.user_id = u.id WHERE r.event_id = $1`;

        try {
            const result = await pool.query(sql, [id]); // PostgreSQL
            console.log(id);
            return result.rows; // PostgreSQL uses `.rows`
         
        } catch (err) {
            console.log('Error fetching review:', err);
            throw new Error('Error fetching review: ' + err.message);
        }
    }
    

    static async getItenary(){
       const sql = "SELECT e.*,COALESCE(r.occurrence_count, 0) AS occurrence_count FROM events e LEFT JOIN ( SELECT event_id, COUNT(*) AS occurrence_count FROM reviews GROUP BY event_id) r ON e.id = r.event_id where e.status='active' ";

        try{
            const result=await pool.query(sql)
            console.log('😂😁');
            return result.rows;
          
        }
        catch(err){
            console.error('Error creating',err);
            throw new Error('Error creating user:'+err.message);
        }
    }

  static async getMap(){
    const sql=`Select l.latitude, l.longitude, e.title FROM loc l JOIN events e ON l.event_id=e.id`
    try{
        console.log("mapsss")
        const result=await pool.query(sql)
        return result.rows;
    }
    catch(err){
        console.error('Error creating user:',err);
        throw new Error('Error creating user:'+ err.message);
    }
  }   


  static async createEvent(
    
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
  ){
    const sql=`
    INSERT INTO events (
    
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
  )VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  RETURNING *
    `;

    const values=[
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
        img];

        try{
            const result=await pool.query(sql,values);
            console.log("reached to model events")

            return result.rows[0];
        }catch(err){
            console.error('Error inserting reviews',err);
            throw new Error('Error creating reviews')
          }
          
  }
  
static async updateEvent(event_id,schedule){
    const sql='UPDATE events SET status=$1 WHERE id=$2 RETURNING *';
    const values=[schedule,event_id];

    try{
        console.log('UPDATE IN Events schedule')
        const result=await pool.query(sql,values);
        return result.rows[0];
    }
    catch (err){
        console.error('Error updating from model',err)
        throw new Error('failed from model');
    }
}
}


module.exports = Event;
