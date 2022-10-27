const express = require("express");
const app = express();
const cors = require('cors')
const port = 4001;
const mongoconnection = require("./config/connection");
const router = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoconnection.connect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
