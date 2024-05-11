const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

app.get("/", (req, res)=>{
   res.send("helloeoe")
})

const server = https.createServer({
    key: fs.readFileSync(path.join(__dirname, './certificates', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, './certificates', 'cert.pem'))
}, app);

const PORT = 8443; // HTTPS default port

server.listen(PORT, () => {
    console.log(`AppServer running on port ${PORT}`);
});
