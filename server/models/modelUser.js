// models/userModel.js
const pool = require('../db'); // Import PostgreSQL client (db.js)

class User {

    //Method to get users
    static async getUser(){
        const sql=`SELECT * FROM profile`
try{
    const result=await pool.query(sql)
    return result.rows;
}catch(err){
    console.error('Error creating user:', err);
    throw new Error('Error creating user: ' + err.message); // Pass the error message
}
    }
  // Method to create a new user
  static async createUser(id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at) {
    console.log("Received data:", req.body);

    // Ensure the data is valid and that all required fields are present.
    if (!name || !email || !contact || !dob || !password) {
        return res.status(400).send({ message: 'Missing required fields' });
    }

    // SQL query to insert the data into the 'profile' table
    const sql = `
        INSERT INTO profile (id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id
    `;
    const values = [id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at];

    try {
        const result = await pool.query(sql, values);
        // Returning the inserted row's id
        const insertedId = result.rows[0].id;
        res.status(200).json({ message: 'User added successfully', userId: insertedId });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send({ message: 'Error saving user data' });
    }
  }
}

module.exports = User;
