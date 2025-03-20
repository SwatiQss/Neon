const User = require('../models/modelUser');
const { createVibe } = require('./reviewController');
const pool = require('../db'); // Import PostgreSQL client (db.js)


exports.createUser = async (req, res) => {
    const { name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at } = req.body;

    console.log("Received data:", req.body);  // To check the data

    // Validate input fields
    if (!name || !email || !contact || !dob || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Call the model method to create a user
        const userId = await User.createUser(
            
            name,
            email,
            contact,
            dob,
            password,  // You should hash the password here if needed
            avatar_public_id,
            avatar_url,
            created_at,
            updated_at
        );

        // Send success response with the new user ID
        res.status(201).json({ message: 'User created successfully', userId: userId });
    } catch (err) {
        console.error('Error creating user:', err.message);
        res.status(500).json({ message: 'Failed to create user', error: err.message });
    }
};

exports.updateInterest=async(req,res)=>{
    const user_id=req.params.id;
    const {interest}=req.body;

    try{
        const updatedInterest=await User.updateInterest(user_id,interest);
        if(updatedInterest){
            return res.json({updatedInterest:updatedInterest.interest});
        }
    }catch(err){
        console.error("error updating intrest",err);
        res.status(500).json({error:'failed to update category status'})
    }

}

exports.getIntrest=async(req,res)=>{
    try{
        const intrest=await User.getIntrest();
        res.json(intrest)
    }catch(err){
        console.error('Error fetching intrests',err);
        throw new Error('Error fetching intrests:'+err.message);

    }
}

exports.getUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists with the correct email and password
        const userResult = await pool.query(
            "SELECT * FROM profile WHERE email = $1 AND password = $2",
            [email, password]
        );

        if (userResult.rows.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = userResult.rows[0];
        res.json({ message: "Login successful", user });

    } catch (error) {
        console.error("Error SignIn:", error);
        res.status(500).json({ message: "Server error" });
    }
};


