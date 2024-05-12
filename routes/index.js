const express = require("express");
const router = express.Router();

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
   cors:{
      // origin: "http://localhost:3000"
      origin: "https://samplechatapp-wzz2.onrender.com"
   }
});

io.on("connection", (socket) => {
   console.log("a user connected");
   
   
   socket.on('disconnect', () => {
      console.log('A user disconnected');
   });
   
});

httpServer.listen(4000,()=>{
   console.log("socket.io running on port 4000");
});


router.get("/", (req, res)=>{
   res.render("index");
});

module.exports = router;