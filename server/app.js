// // server.js
// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(express.json()); // For parsing JSON request bodies
// app.use(cors());
// const eventRoutes=require('./routes/eventRoutes')
// const userRoutes = require('./routes/userRoutes');
// const reviewRoutes=require('./routes/reviewRoutes')
// app.use('/', userRoutes);
// app.use('/event',eventRoutes)
// //app.use('/review',reviewRoutes)
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());  // For parsing JSON request bodies
app.use(cors());

// Importing routes
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const catagoryRoutes=require('./routes/categoryRoutes')
const reviewRoutes = require('./routes/reviewRoutes');
const mapRoutes=require("./routes/mapRoutes");



// Use routes with correct prefixes
app.use('/', userRoutes);  // Add '/api' for user routes
app.use('/event', eventRoutes);
app.use('/reviews',reviewRoutes) ; 
app.use('/categories',catagoryRoutes);
app.use('/maps',mapRoutes);

// Starting the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
