// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
const cors = require("cors");
const express = require("express");
const app = express();
const port = 4000;
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Orchestrator express is listening on port ${port}`);
});
