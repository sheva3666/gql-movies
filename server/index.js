const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const MoviesAPI = require("./dataSources/Movies-api");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      moviesAPI: new MoviesAPI(),
    };
  },
});

server.listen().then(() => console.log("server start"));
