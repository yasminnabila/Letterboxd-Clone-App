if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routers");
const port = process.env.PORT || 4002;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use("/", router);

app.listen(port, () => {
  console.log(`App is on port ${port}`);
});

module.exports = app;
