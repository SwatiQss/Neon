const http = require("http");
const express = require('express');
const cors = require('cors');
const app = express();
const WebSocket = require("ws");
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware
app.use(express.json()); 
app.use(cors());


// Importing routes
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const catagoryRoutes = require('./routes/categoryRoutes')
const reviewRoutes = require('./routes/reviewRoutes');
const mapRoutes = require("./routes/mapRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const uploadRoutes = require("./routes/uploadRoutes")


// WebSocket Connection
//const PING_INTERVAL = 30000; For ping messages

wss.on("connection", (ws) => {
    console.log("New WebSocket connection");
    ws.send(JSON.stringify({ message: "We regret to inform you that the current weather conditions are not conducive for a golf session. Would you like to reschedule or cancel your golf session for today?" }));

    ws.on("message", (message) => {
        console.log(`Received: ${message}`);

        // Broadcast message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");

    });
})


// Use routes with correct prefixes
app.use('/', userRoutes);
app.use('/file', uploadRoutes);  // Add '/api' for user routes
app.use('/event', eventRoutes);
app.use('/reviews', reviewRoutes);
app.use('/categories', catagoryRoutes);
app.use('/maps', mapRoutes);
app.use('/stripe', paymentRoutes)

// Starting the server
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
