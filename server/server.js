const express = require("express");
app = express();
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
app.listen(9000, function () {
  console.log("This is working on port 9000");
});
console.log(PORT);
console.log(BACKEND_URL);
