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
  
}

module.exports = Event;
