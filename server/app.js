// server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); // For parsing JSON request bodies
app.use(cors());
const eventRoutes=require('./routes/eventRoutes')
const userRoutes = require('./routes/userRoutes');
const reviewRoutes=require('./routes/reviewRoutes')
app.use('/', userRoutes);
app.use('/event',eventRoutes)
//app.use('/review',reviewRoutes)
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
