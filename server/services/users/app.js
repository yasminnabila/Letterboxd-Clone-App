const express = require("express");
const app = express();
const cors = require("cors");
const port = 4001;
const mongoConnection = require("./config/mongo-connection");
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", router);

mongoConnection.connect().then(() => {
  app.listen(port, () => {
    console.log(`User server is listening on port ${port}`);
  });
});
