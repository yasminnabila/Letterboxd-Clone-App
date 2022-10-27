const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://yasminnabila:yasmin12345@jakarta.y0bydzc.mongodb.net/test";
const dbName = "letterboxd-DB";
const client = new MongoClient(uri);
let db;

async function connect() {
  try {
    await client.connect();
    console.log("connected to mongodb!");
    const dbConnection = client.db(dbName);
    db = dbConnection;
    return dbConnection;
  } catch (err) {
    console.log(err);
  }
}

function getDB() {
  return db;
}

module.exports = { connect, getDB };
