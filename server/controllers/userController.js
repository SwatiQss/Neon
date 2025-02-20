const User = require('../models/modelUser');
//const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.createUser = async (req, res) => {
    const { id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at } = req.body;

    try {
        // You might want to hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Assuming `createUser` is a function in your User model that saves the user to the database
        await User.createUser({
            id,
            name,
            email,
            contact,
            dob,
            password, // Save the hashed password
            avatar_public_id,
            avatar_url,
            created_at,
            updated_at
        });

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error('Error creating user:', err.message); // Log the error
        res.status(500).json({ message: 'Failed to create user', error: err.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        // Assuming `getUser` is a function in your User model that fetches users
        const user = await User.getUser();
        res.json(user);
    } catch (err) {
        console.error('Error fetching user:', err); // Log the error
        res.status(500).json({ message: 'Failed to fetch user', error: err.message }); // Return a 500 error response with message
    }
};
