const express = require("express");
const check = require("./Meddelware/meddelware");
const app = express();
app.use(express.json());
app.use(check);
app.use(express.static("views"));
app.use(require("./Route/Route"));

const PORT = 5001;
app.listen(PORT, (err) => {
  err ? console.log("error") : console.log("server is running");
});
