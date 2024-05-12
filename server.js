// const https = require('https');
// const fs = require('fs');
const express = require('express');
//const socketIo = require('socket.io');
const path = require('path');
const app = express();

const index = require("./routes/index");

// const io = socketIo(server);

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use("/", index)
// Socket.io logic
// io.on('connection', (socket) => {
//  console.log('A user connected');
//    socket.emit("conneted", "heyy");
//  // Handle chat messages
//  socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//  });

//  // Handle disconnection
//  socket.on('disconnect', () => {
//     console.log('User disconnected');
//  });
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});