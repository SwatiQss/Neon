"use strict";

// server.js
var express = require('express');

var cors = require('cors');

var app = express();
app.use(express.json()); // For parsing JSON request bodies

app.use(cors());

var eventRoutes = require('./routes/eventRoutes');

var userRoutes = require('./routes/userRoutes');

var reviewRoutes = require('./routes/reviewRoutes');

app.use('/', userRoutes);
app.use('/event', eventRoutes); //app.use('/review',reviewRoutes)

var PORT = 5000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});