if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { movieTypeDevs, movieResolvers } = require("./schema/appSchema");
const { userTypeDefs, userResolvers } = require("./schema/usersSchema");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, movieTypeDevs],
  resolvers: [userResolvers, movieResolvers],
  introspection: true,
});

const port = process.env.PORT || 4000;

startStandaloneServer(server, {
  listen: {
    port: port,
  },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
