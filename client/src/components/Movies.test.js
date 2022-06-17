import { render, screen } from "@testing-library/react";
import Movies from "./Movies";
import "@testing-library/jest-dom";

test("shows page on first load", async () => {
  render(<Movies />);

  expect(btnMovies()).toBeInTheDocument();
  expect(btnFavourites()).toBeInTheDocument();
  expect(table()).toBeInTheDocument();
  expect(movieName()).toBeDefined();
  expect(movieDirector()).toBeDefined();
  expect(movieData()).toBeDefined();
  expect(movieRuntime()).toBeDefined();
});

function btnMovies() {
  return screen.getByTestId("btn-movies");
}

function btnFavourites() {
  return screen.getByTestId("btn-favourites");
}

function table() {
  return screen.getByRole("table");
}

function movieName() {
  return screen.queryByTestId("movie-name");
}

function movieDirector() {
  return screen.queryByTestId("movie-director");
}

function movieData() {
  return screen.queryByTestId("movie-data");
}

function movieRuntime() {
  return screen.queryByTestId("movie-runtime");
}
