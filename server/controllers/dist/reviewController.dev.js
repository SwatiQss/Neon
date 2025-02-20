// const Event=require("../models/modelReview")
// exports.createUser = async (req, res) => {
//     const { id,
//         user_id,
//         event_id,
//         quality_of_event,
//         services_at_event,
//         operator_of_event,
//         facilities_of_events,
//         staff_politeness,
//         comment,
//         created_at,
//         updated_at } = req.body;
//     try {
//         // Hash the password before saving it
//         //const hashedPassword = await bcrypt.hash(password, saltRounds);
//         // Create the user in the database
//         await Event.createUser({
//             id,
//             user_id,
//             event_id,
//             quality_of_event,
//             services_at_event,
//             operator_of_event,
//             facilities_of_events,
//             staff_politeness,
//             comment,
//             created_at,
//             updated_at
//         });
//         res.status(201).json({ message: 'Review added successfully' });
//     } catch (err) {
//         console.error('Error adding Review:', err.message); // Log the error
//         res.status(500).json({ message: 'Failed to add review', error: err.message });
//     }
// };
"use strict";