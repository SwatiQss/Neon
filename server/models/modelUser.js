const pool = require('../db'); // Import PostgreSQL client (db.js)

class User {

    // Method to get users
    static async getUser() {
        const sql = `SELECT * FROM profile`;
        try {
            const result = await pool.query(sql);
            return result.rows;
        } catch (err) {
            console.error('Error fetching users:', err);
            throw new Error('Error fetching users: ' + err.message); // Pass the error message
        }
    }

    // Method to create a new user
    static async createUser(id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at) {
        // SQL query to insert the data into the 'profile' table
        const sql = `
            INSERT INTO profile (id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id
        `;
        const values = [id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at];

        try {
            const result = await pool.query(sql, values);
            // Returning the inserted row's id
            return result.rows[0].id; // Return the inserted ID
        } catch (err) {
            console.error('Error inserting user:', err);
            throw new Error('Error saving user data: ' + err.message); // Pass the error to the controller
        }
    }

    static async updateInterest(user_id,interest){
        const sql=' UPDATE interests SET interest=$1 WHERE user_id=$2 RETURNING *';
        const values=[interest,user_id];

        try{
            console.log('UPDATE IN INTREST');
            const result=await pool.query(sql,values);
            return result.rows[0];
        }
        catch (err){
            console.error('Eror updating from model',err)
            throw new Error('failed from model');
        }
    }

    static async getIntrest(){
        const sql=`Select interest FROM interests where user_id=29`;
        try{
            const result=await pool.query(sql);
            return result.rows;
        }catch(err){
            console.error('Error fetching intrest',err);
            throw new Error ('Error fetching from intrets'+err.message);
        }
    }
}

module.exports = User;
