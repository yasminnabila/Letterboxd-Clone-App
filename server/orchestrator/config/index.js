const APP_URL = "http://localhost:4002/movies";
const USER_URL = "http://localhost:4001/users";
const Redis = require("ioredis");
const redis = new Redis({
  port: 12748, // Redis port
  host: "redis-12748.c1.ap-southeast-1-1.ec2.cloud.redislabs.com",
  username: "default", //, needs Redis >= 6
  password: "vL7BdWn0dS9v5yfZPUBFyoRF4z6dQOHK",
  db: 0, // Defaults to 0
});

module.exports = {
  APP_URL,
  USER_URL,
  redis,
};