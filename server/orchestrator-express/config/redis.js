// Import ioredis di server
const Redis = require("ioredis");

// Bikin connection instance
const redis = new Redis({
  port: 12748, // Redis port
  host: "redis-12748.c1.ap-southeast-1-1.ec2.cloud.redislabs.com",
  username: "default", //, needs Redis >= 6
  password: "vL7BdWn0dS9v5yfZPUBFyoRF4z6dQOHK",
  db: 0, // Defaults to 0
});

module.exports = redis;
