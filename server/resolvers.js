const resolvers = {
  Query: {
    moviesForTable: (_, __, { dataSources }) => {
      return dataSources.moviesAPI.getMovies();
    },
    favouriteMoviesForTable: (_, __, { dataSources }) => {
      return dataSources.moviesAPI.getFavouriteMovie();
    },
  },

  Mutation: {
    addFavourite: (_, { movie }, { dataSources }) => {
      return dataSources.moviesAPI.addFavourite(movie);
    },

    deleteFavourite: (_, { id }, { dataSources }) => {
      return dataSources.moviesAPI.deleteFavourite(id);
    },
  },
};

module.exports = resolvers;
