const express = require('express');
const path = require('path');
const app = express();

const index = require("./routes/index");

app.use(express.static(path.join(__dirname, '../public')));
app.use("/", index)
app.set('view engine', 'ejs');

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});