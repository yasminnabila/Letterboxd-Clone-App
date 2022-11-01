const APP_URL = "https://letterboxd-server-app.herokuapp.com/movies";
const USER_URL = "https://letterboxd-server-users.herokuapp.com/users";
const Redis = require("ioredis");
const redis = new Redis({
  port: 12748,
  host: "redis-12748.c1.ap-southeast-1-1.ec2.cloud.redislabs.com",
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
  db: 0,
});

module.exports = {
  APP_URL,
  USER_URL,
  redis,
};
