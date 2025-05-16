const { Pool } = require('pg');
require("dotenv").config();  // Destructure Pool from pg

// const pool = new Pool({
//     user: 'postgres',        // replace with your PostgreSQL username
//     host: 'localhost',       // use 'localhost' if you're running PostgreSQL locally
//     database: 'mydatabase',  // the database you created earlier
//     password: 'swati',       // replace with your PostgreSQL password
//     port: 5432,              // default port for PostgreSQL
// });

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false }, // Required for Neon
  });

module.exports = pool;  // Now pg.pool will manage the connection pool to the database

