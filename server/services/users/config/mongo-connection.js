const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_DB_URI;
const dbName = "letterboxd-DB";
const client = new MongoClient(uri);
let db;

async function connect() {
  try {
    await client.connect();
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
