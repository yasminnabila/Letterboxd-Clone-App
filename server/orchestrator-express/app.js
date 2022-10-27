const cors = require("cors");
const port = 4000;
const express = require("express");
const app = express();
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/movies", router);

app.listen(port, () => {
  console.log(`Movie server listening on port ${port}`);
});
