// models/userModel.js
const pool = require('../db'); // Import PostgreSQL client (db.js)

class Event {

    //Method to get users
    static async getEvent(){
        const sql=`SELECT * FROM events`
try{
    const result=await pool.query(sql)
    return result.rows;
}catch(err){
    console.error('Error creating user:', err);
    throw new Error('Error creating user: ' + err.message); // Pass the error message
}
    }
  
}

module.exports = Event;
