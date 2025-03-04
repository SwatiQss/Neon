// models/userModel.js
const pool = require('../db'); // Import PostgreSQL client (db.js)

class Event {

    //Method to get users
    static async getEvent(){
        const sql=`SELECT e.*, c.category_name
FROM events e
JOIN category c ON e.id = c.event_id;
`
try{
    const result=await pool.query(sql)
    return result.rows;
}catch(err){
    console.error('Error creating user:', err);
    throw new Error('Error creating user: ' + err.message); // Pass the error message
}
    }


    static async getItenary(){
        const sql=`Select * FROM events where status='active'`

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
}

module.exports = Event;
