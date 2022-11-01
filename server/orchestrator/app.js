const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { movieTypeDevs, movieResolvers } = require("./schema/appSchema");
const { userTypeDefs, userResolvers } = require("./schema/usersSchema");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, movieTypeDevs],
  resolvers: [userResolvers, movieResolvers],
});

startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
