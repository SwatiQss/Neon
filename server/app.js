// server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json()); // For parsing JSON request bodies
app.use(cors());

// Set up the PostgreSQL connection
const pool = new Pool({
    user: 'postgres',        // replace with your PostgreSQL username
    host: 'localhost',       // use 'localhost' if you're running PostgreSQL locally
    database: 'mydatabase',  // the database you created earlier
    password: 'swati',       // replace with your PostgreSQL password
    port: 5432,              // default port for PostgreSQL
});

// Basic GET endpoint to fetch all users from the 'profile' table
app.get('/profile', async (req, res) => {
    console.log("connected");
    try {
        const result = await pool.query('SELECT * FROM profile');
        console.log(result.rows);  // Logs the result rows in the console
        res.json(result.rows);     // Send the data as a JSON response
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Server Error');
    }
});

// API route to handle form submission (POST request)
app.post('/api/profile', async (req, res) => {
    const { id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at } = req.body;
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
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
