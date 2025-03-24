
const pool = require('../db');

class Category {
    static async getCategory() {
        const sql = 'SELECT c.category_id, c.category_name, c.saved_status, e.title, e.img FROM category c JOIN  events e ON c.event_id = e.id;';
        try {
            const result = await pool.query(sql);
            return result.rows;

        } catch (err) {
            console.error('Error fetching reviews', err);
            throw new Error(`Error fetching Catagories:${err.message}`)
        }
    }

    static async updateStatus(category_id, newStatus) {
        if (!category_id || isNaN(category_id)) {
            throw new Error("category_id must be a valid integer.");
        }
        const sql = 'UPDATE category SET saved_status=$1 WHERE category_id=$2 RETURNING *';
        const values = [newStatus, category_id];

        try {
            console.log("UPDATE IN MODEL");
            const result = await pool.query(sql, values);
            return result.rows[0];
        } catch (err) {
            console.error('Error updating category status', err);
            throw new Error('failed to update category status');
        }
    }

}

module.exports = Category;