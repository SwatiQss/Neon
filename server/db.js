const { Pool } = require('pg');  // Destructure Pool from pg

const pool = new Pool({
    user: 'postgres',        // replace with your PostgreSQL username
    host: 'localhost',       // use 'localhost' if you're running PostgreSQL locally
    database: 'mydatabase',  // the database you created earlier
    password: 'swati',       // replace with your PostgreSQL password
    port: 5432,              // default port for PostgreSQL
});

module.exports = pool;  // Now pg.pool will manage the connection pool to the database

