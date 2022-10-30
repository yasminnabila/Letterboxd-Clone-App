const { gql } = require("apollo-server");
const axios = require("axios");
const { USER_URL, redis } = require("../config/index");

const userTypeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    phoneNumber: String
    address: String
    role: String
  }

  input UserContent {
    username: String!
    email: String!
    phoneNumber: String!
    password: String!
    address: String!
  }

  type Query {
    getUsers: [User]
    getUserById(_id: String!): User
  }

  type Message {
    message: String
  }

  type Mutation {
    createUser(content: UserContent): Message
    deleteUser(_id: String!): Message
  }
`;

const userRevolvers = {
  Query: {
    readAllUsers: async () => {
      try {
        let usersCache = await redis.get("users");
        if (usersCache) {
          const data = JSON.parse(usersCache);
          return data;
        } else {
          const { data } = await axios({
            method: "GET",
            url: USER_URL,
          });
          await redis.set("users", JSON.stringify(data));
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    readUserById: async (_, args) => {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${USER_URL}/${args._id}`,
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createNewUser: async (_, args) => {
      try {
        const { content } = args;
        const { data } = await axios.post(USER_URL, content);
        await redis.del("users");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
