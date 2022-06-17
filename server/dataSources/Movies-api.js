const { RESTDataSource } = require("apollo-datasource-rest");

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3333";
  }
  getMovies() {
    return this.get("movies");
  }

  getFavouriteMovie() {
    return this.get("favourites");
  }

  async addFavourite(movie) {
    await this.post("favourites", JSON.stringify(movie), {
      headers: {
        "Content-type": "application/json",
      },
    });
    return movie;
  }

  async deleteFavourite(id) {
    await this.delete(`favourites/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return id;
  }
}
module.exports = MoviesAPI;
