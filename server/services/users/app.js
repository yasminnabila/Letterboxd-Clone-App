if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4001;
const mongoConnection = require("./config/mongo-connection");
const router = require("./routes");
const ErrorHandler = require("./middlewares/ErrorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", router);
app.use(ErrorHandler);

mongoConnection.connect().then(() => {
  app.listen(port, () => {
    console.log(`User server is listening on port ${port}`);
  });
});
