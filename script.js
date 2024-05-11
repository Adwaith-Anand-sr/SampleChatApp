const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = https.createServer({
  key: fs.readFileSync(path.join(__dirname, './certificates', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './certificates', 'cert.pem')),
}, app);

const io = socketIo(server);

// Serve static files
app.use(express.static(path.join(__dirname, './public')));

// Socket.io logic
io.on('connection', (socket) => {
  console.log('A user connected');
   socket.emit("conneted", "heyy")
  // Handle chat messages
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


