const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    moviesForTable: [Movie]
    favouriteMoviesForTable: [favouriteMovie]
  }

  type Mutation {
    addFavourite(movie: MovieInput!): Movie!
    deleteFavourite(id: ID!): favouriteMovie!
  }

  type Movie {
    id: ID!
    name: String!
    director: String!
    releaseDate: String!
    runtime: Int
  }

  input MovieInput {
    id: ID!
    name: String!
    director: String!
    releaseDate: String!
    runtime: Int
  }

  type favouriteMovie {
    id: ID!
    name: String!
    director: String!
    releaseDate: String!
    runtime: Int
  }
`;

module.exports = typeDefs;
