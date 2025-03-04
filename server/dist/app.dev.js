"use strict";

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
var express = require('express');

var cors = require('cors');

var app = express(); // Middleware

app.use(express.json()); // For parsing JSON request bodies

app.use(cors()); // Importing routes

var eventRoutes = require('./routes/eventRoutes');

var userRoutes = require('./routes/userRoutes');

var catagoryRoutes = require('./routes/categoryRoutes');

var reviewRoutes = require('./routes/reviewRoutes');

var mapRoutes = require("./routes/mapRoutes");

var paymentRoutes = require("./routes/paymentRoutes"); // Use routes with correct prefixes


app.use('/', userRoutes); // Add '/api' for user routes

app.use('/event', eventRoutes);
app.use('/reviews', reviewRoutes);
app.use('/categories', catagoryRoutes);
app.use('/maps', mapRoutes);
app.use('/stripe', paymentRoutes); // Starting the server

var PORT = 5000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});