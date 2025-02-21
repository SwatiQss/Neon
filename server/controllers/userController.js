const User = require('../models/modelUser');

exports.createUser = async (req, res) => {
    const { id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at } = req.body;

    console.log("Received data:", req.body);  // To check the data

    // Validate input fields
    if (!name || !email || !contact || !dob || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Call the model method to create a user
        const userId = await User.createUser(
            id,
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
