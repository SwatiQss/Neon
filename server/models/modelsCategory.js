
const pool=require('../db');

class Category{
    static async getCategory(){
        const sql='SELECT c.category_id, c.category_name, c.saved_status, e.title, e.img FROM category c JOIN  events e ON c.event_id = e.id;';
        try{
            const result=await pool.query(sql);
            return result.rows;

        }catch(err){
            console.error('Error fetching reviews',err);
            throw new Error(`Error fetching Catagories:${err.message}`)
        }
    }

}

module.exports=Category;