// // models/userModel.js
// const pool = require("../db"); // Import PostgreSQL client (db.js)
// class Review {
//     //Method to get users
//     //   static async getReview() {
//     //     const sql = `SELECT * FROM reviews`;
//     //     try {
//     //       const result = await pool.query(sql);
//     //       return result.rows;
//     //     } catch (err) {
//     //       console.error("Error creating user:", err);
//     //       throw new Error("Error creating user: " + err.message); // Pass the error message
//     //     }
//     //   }
//     // Method to create a new user
//     static async createReview(
//         id,
//         user_id,
//         event_id,
//         quality_of_event,
//         services_at_event,
//         operator_of_event,
//         facilities_of_events,
//         staff_politeness,
//         comment,
//         created_at,
//         updated_at
//     ) {
//         // SQL query to insert the data into the 'profile' table
//         const sql = `
//         INSERT INTO reviews (
//      id,
//      user_id,
//     event_id,
//     quality_of_event,
//     services_at_event,
//     operator_of_event,
//     facilities_of_events,
//     staff_politeness,
//     comment,
//     created_at,
//     updated_at)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id
//     `;
//         const values = [
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
//         ];
//         try {
//             // Execute the query
//             const result = await pool.query(sql, values);
//             // Return the inserted user ID (if needed)
//             return result.rows[0].id;
//         } catch (err) {
//             console.error("Error creating user:", err);
//             throw new Error("Error creating user: " + err.message); // Pass the error message
//         }
//     }
// }
// module.exports = Review;
"use strict";