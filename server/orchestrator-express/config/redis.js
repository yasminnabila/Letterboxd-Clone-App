// Import ioredis di server
const Redis = require("ioredis");

// Bikin connection instance
const redis = new Redis({
  port: 12748, // Redis port
  host: process.env.HOST_SECRET, // Redis host
  username: "default", // needs Redis >= 6
  password: process.env.REDIS_SECRET,
  db: 0, // Defaults to 0
});

module.exports = redis;
