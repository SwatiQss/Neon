const pool=require('../db')
    class Favourite{
        static async getFavourite(){
            const sql='SELECT c.category_id, c.category_name, c.saved_status, e.title, e.img FROM category c JOIN events e ON c.event_id = e.id WHERE c.saved_status = true;'
            try{
const result=await pool.query(sql);
return result.rows;
            }catch(err){
               console.error('error fetchingfavourites',err);
               throw new Error('Error fetching cat')
            }
            
        }
    }
module.exports=Favourite;